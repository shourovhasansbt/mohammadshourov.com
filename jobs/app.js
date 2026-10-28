/**
 * গণিত প্রশ্ন ব্যাংক (Math Question Bank) - 1500 MCQ Web App
 * App Logic: Dashboard, Practice Mode, Exam Mode, Analytics, Bookmarks
 */

// Global State
const state = {
  currentView: 'dashboard',
  theme: localStorage.getItem('mqb_theme') || 'light',
  
  // Practice State
  currentTopicId: 'interest',
  practiceFilter: 'all', // 'all', 'unanswered', 'incorrect', 'bookmarked'
  currentQuestionIndex: 0,
  
  // User Data (Persisted)
  practiceAnswers: JSON.parse(localStorage.getItem('mqb_answers') || '{}'), // { qId: { selected: 'A', isCorrect: true } }
  bookmarks: JSON.parse(localStorage.getItem('mqb_bookmarks') || '[]'), // [ qId1, qId2, ... ]
  examHistory: JSON.parse(localStorage.getItem('mqb_exam_history') || '[]'),
  
  // Exam State
  exam: {
    isActive: false,
    questions: [],
    currentIndex: 0,
    userAnswers: {}, // { qIndex: 'A' }
    markedForReview: new Set(),
    timerInterval: null,
    totalSeconds: 0,
    remainingSeconds: 0,
    negativeMarking: 0.25,
    topicName: '',
    resultFilter: 'all'
  },
  
  // Search State
  searchQuery: ''
};

// ================= INITIALIZATION =================
document.addEventListener('DOMContentLoaded', () => {
  // Apply saved theme
  applyTheme(state.theme);
  
  // Render Dashboard
  renderDashboard();
  
  // Setup Keyboard Shortcuts
  setupKeyboardNavigation();
  
  // Update Global Counter Badges
  updateGlobalStats();
  updateBookmarkBadge();
});

// ================= THEME TOGGLE =================
function toggleTheme() {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  localStorage.setItem('mqb_theme', state.theme);
  applyTheme(state.theme);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    themeBtn.innerHTML = theme === 'dark' 
      ? '<i class="fa-solid fa-sun" style="color: #f59e0b;"></i>' 
      : '<i class="fa-solid fa-moon"></i>';
  }
}

// ================= VIEW NAVIGATION =================
function navigateTo(viewName) {
  if (state.exam.isActive && viewName !== 'exam') {
    if (!confirm('আপনার পরীক্ষা এখনো চলছে! আপনি কি নিশ্চিত যে আপনি পরীক্ষা ছেড়ে বের হতে চান?')) {
      return;
    } else {
      stopExamTimer();
      state.exam.isActive = false;
    }
  }

  state.currentView = viewName;
  
  // Update view panel classes
  document.querySelectorAll('.view-panel').forEach(panel => {
    panel.classList.remove('active');
  });
  
  const targetPanel = document.getElementById(`${viewName}View`);
  if (targetPanel) {
    targetPanel.classList.add('active');
  }

  // Update Nav links active state
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === viewName);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // View specific setups
  if (viewName === 'dashboard') {
    renderDashboard();
  } else if (viewName === 'practice') {
    renderPracticeTopicSelector();
    loadPracticeQuestion();
  } else if (viewName === 'exam') {
    if (!state.exam.isActive) {
      showExamScreen('setup');
      renderExamTopicOptions();
    }
  } else if (viewName === 'bookmarks') {
    renderBookmarksView();
  }
}

// Convert numbers to Bengali digits
function toBnNum(num) {
  if (num === null || num === undefined) return '';
  const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return String(num).replace(/[0-9]/g, d => bnDigits[d]);
}

// ================= DASHBOARD VIEW =================
function renderDashboard() {
  updateGlobalStats();
  
  const topicsGrid = document.getElementById('topicsGrid');
  if (!topicsGrid || !window.QUESTION_BANK) return;
  
  topicsGrid.innerHTML = '';
  
  QUESTION_BANK.topics.forEach(t => {
    const topicQs = QUESTION_BANK.questions.filter(q => q.topic === t.id);
    const solvedInTopic = topicQs.filter(q => state.practiceAnswers[q.id] !== undefined).length;
    const progressPercent = topicQs.length > 0 ? Math.round((solvedInTopic / topicQs.length) * 100) : 0;

    const card = document.createElement('div');
    card.className = 'topic-card';
    card.innerHTML = `
      <div>
        <div class="topic-card-header">
          <div class="topic-icon-wrap">
            <i class="fa-solid ${t.icon || 'fa-book'}"></i>
          </div>
          <div class="topic-info">
            <h4>${t.title}</h4>
            <div class="topic-en">${t.title_en || ''}</div>
          </div>
        </div>

        <div class="topic-meta-tags">
          <span class="tag tag-questions">
            <i class="fa-solid fa-list-check"></i> ${toBnNum(t.count)} টি প্রশ্ন
          </span>
          <span class="tag tag-pages">
            <i class="fa-solid fa-file-lines"></i> ${t.page_range}
          </span>
        </div>

        <div class="topic-progress-section">
          <div class="progress-labels">
            <span>অগ্রগতি</span>
            <span>${toBnNum(solvedInTopic)}/${toBnNum(t.count)} (${toBnNum(progressPercent)}%)</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" style="width: ${progressPercent}%;"></div>
          </div>
        </div>
      </div>

      <div class="topic-card-actions">
        <button class="btn btn-primary btn-sm" onclick="startPracticeForTopic('${t.id}')">
          <i class="fa-solid fa-book-open"></i> অনুশীলন
        </button>
        <button class="btn btn-outline btn-sm" onclick="startExamForTopicDirect('${t.id}')">
          <i class="fa-solid fa-file-pen"></i> মডেল টেস্ট
        </button>
      </div>
    `;
    topicsGrid.appendChild(card);
  });
}

function updateGlobalStats() {
  if (!window.QUESTION_BANK) return;
  
  const total = QUESTION_BANK.total_questions || 1241;
  const answeredKeys = Object.keys(state.practiceAnswers);
  const solvedCount = answeredKeys.length;
  
  let correctCount = 0;
  answeredKeys.forEach(k => {
    if (state.practiceAnswers[k]?.isCorrect) correctCount++;
  });
  
  const accuracy = solvedCount > 0 ? Math.round((correctCount / solvedCount) * 100) : 0;
  
  // Count completed topics
  let completedTopics = 0;
  QUESTION_BANK.topics.forEach(t => {
    const tQs = QUESTION_BANK.questions.filter(q => q.topic === t.id);
    const tSolved = tQs.filter(q => state.practiceAnswers[q.id] !== undefined).length;
    if (tQs.length > 0 && tSolved === tQs.length) completedTopics++;
  });

  const totalEl = document.getElementById('totalQuestionsCount');
  const solvedEl = document.getElementById('solvedQuestionsCount');
  const accuracyEl = document.getElementById('overallAccuracyRate');
  const summaryEl = document.getElementById('topicProgressSummary');

  if (totalEl) totalEl.innerText = toBnNum(total);
  if (solvedEl) solvedEl.innerText = toBnNum(solvedCount);
  if (accuracyEl) accuracyEl.innerText = `${toBnNum(accuracy)}%`;
  if (summaryEl) summaryEl.innerText = `${toBnNum(completedTopics)}/${toBnNum(QUESTION_BANK.topics.length)} অধ্যায় সম্পন্ন`;
}

function updateBookmarkBadge() {
  const badge = document.getElementById('bookmarkCountBadge');
  if (badge) {
    badge.innerText = toBnNum(state.bookmarks.length);
  }
}

// Start first topic practice
function startPracticeFirstTopic() {
  if (QUESTION_BANK && QUESTION_BANK.topics.length > 0) {
    startPracticeForTopic(QUESTION_BANK.topics[0].id);
  }
}

function startPracticeForTopic(topicId) {
  state.currentTopicId = topicId;
  state.currentQuestionIndex = 0;
  state.practiceFilter = 'all';
  navigateTo('practice');
}

// ================= PRACTICE MODE =================
function renderPracticeTopicSelector() {
  const select = document.getElementById('practiceTopicSelect');
  if (!select || !window.QUESTION_BANK) return;
  
  select.innerHTML = '';
  QUESTION_BANK.topics.forEach(t => {
    const opt = document.createElement('option');
    opt.value = t.id;
    opt.innerText = `${t.title} (${toBnNum(t.count)} টি)`;
    if (t.id === state.currentTopicId) opt.selected = true;
    select.appendChild(opt);
  });
}

function changePracticeTopic(newTopicId) {
  state.currentTopicId = newTopicId;
  state.currentQuestionIndex = 0;
  loadPracticeQuestion();
}

function setPracticeFilter(filter) {
  state.practiceFilter = filter;
  state.currentQuestionIndex = 0;
  
  document.querySelectorAll('.practice-filter-pills .pill-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });
  
  loadPracticeQuestion();
}

function getFilteredPracticeQuestions() {
  if (!window.QUESTION_BANK) return [];
  
  const allTopicQs = QUESTION_BANK.questions.filter(q => q.topic === state.currentTopicId);
  
  if (state.practiceFilter === 'unanswered') {
    return allTopicQs.filter(q => state.practiceAnswers[q.id] === undefined);
  } else if (state.practiceFilter === 'incorrect') {
    return allTopicQs.filter(q => state.practiceAnswers[q.id] && !state.practiceAnswers[q.id].isCorrect);
  } else if (state.practiceFilter === 'bookmarked') {
    return allTopicQs.filter(q => state.bookmarks.includes(q.id));
  }
  return allTopicQs;
}

function updatePracticeFilterCounts() {
  if (!window.QUESTION_BANK) return;
  const allTopicQs = QUESTION_BANK.questions.filter(q => q.topic === state.currentTopicId);
  
  const unanswered = allTopicQs.filter(q => state.practiceAnswers[q.id] === undefined).length;
  const incorrect = allTopicQs.filter(q => state.practiceAnswers[q.id] && !state.practiceAnswers[q.id].isCorrect).length;
  const bookmarked = allTopicQs.filter(q => state.bookmarks.includes(q.id)).length;
  
  const allEl = document.getElementById('countFilterAll');
  const unEl = document.getElementById('countFilterUnanswered');
  const inEl = document.getElementById('countFilterIncorrect');
  const bmEl = document.getElementById('countFilterBookmarked');

  if (allEl) allEl.innerText = toBnNum(allTopicQs.length);
  if (unEl) unEl.innerText = toBnNum(unanswered);
  if (inEl) inEl.innerText = toBnNum(incorrect);
  if (bmEl) bmEl.innerText = toBnNum(bookmarked);
}

function loadPracticeQuestion() {
  updatePracticeFilterCounts();
  
  const filteredQs = getFilteredPracticeQuestions();
  const currentTopic = QUESTION_BANK.topics.find(t => t.id === state.currentTopicId);
  
  const qTopicBadge = document.getElementById('qTopicBadge');
  const qSerialInfo = document.getElementById('qSerialInfo');
  const qText = document.getElementById('qText');
  const qOptionsList = document.getElementById('qOptionsList');
  const qFeedbackBanner = document.getElementById('qFeedbackBanner');
  const bookmarkBtn = document.getElementById('bookmarkCurrentBtn');
  const prevBtn = document.getElementById('prevQBtn');
  const nextBtn = document.getElementById('nextQBtn');

  if (qTopicBadge && currentTopic) {
    qTopicBadge.innerText = currentTopic.title;
  }

  // Empty state if filtered list is empty
  if (filteredQs.length === 0) {
    qSerialInfo.innerText = 'কোনো প্রশ্ন পাওয়া যায়নি';
    qText.innerHTML = `
      <div class="empty-state" style="padding: 2.5rem 1rem;">
        <div class="empty-icon"><i class="fa-solid fa-inbox"></i></div>
        <h4>এই ফিল্টারে কোনো প্রশ্ন নেই</h4>
        <p>অনুগ্রহ করে "সব" অপশন নির্বাচন করুন অথবা অন্য কোনো অধ্যায় বেছে নিন।</p>
        <button class="btn btn-primary btn-sm" onclick="setPracticeFilter('all')">সব প্রশ্ন দেখুন</button>
      </div>
    `;
    qOptionsList.innerHTML = '';
    if (qFeedbackBanner) qFeedbackBanner.style.display = 'none';
    if (prevBtn) prevBtn.disabled = true;
    if (nextBtn) nextBtn.disabled = true;
    renderPracticePalette([]);
    return;
  }

  if (state.currentQuestionIndex >= filteredQs.length) {
    state.currentQuestionIndex = filteredQs.length - 1;
  } else if (state.currentQuestionIndex < 0) {
    state.currentQuestionIndex = 0;
  }

  const q = filteredQs[state.currentQuestionIndex];
  const allTopicQs = QUESTION_BANK.questions.filter(item => item.topic === state.currentTopicId);
  const serialInTopic = q.serial_in_topic || (allTopicQs.indexOf(q) + 1);

  // Update serial text
  qSerialInfo.innerText = `প্রশ্ন ${toBnNum(state.currentQuestionIndex + 1)} / ${toBnNum(filteredQs.length)} (অধ্যায়ের #${toBnNum(serialInTopic)}, বইয়ের #${toBnNum(q.id)})`;

  // Question text
  qText.innerText = q.question;

  // Bookmark icon state
  const isBookmarked = state.bookmarks.includes(q.id);
  if (bookmarkBtn) {
    bookmarkBtn.classList.toggle('bookmarked', isBookmarked);
    bookmarkBtn.innerHTML = isBookmarked 
      ? '<i class="fa-solid fa-star"></i>' 
      : '<i class="fa-regular fa-star"></i>';
  }

  // Render Options
  qOptionsList.innerHTML = '';
  const userAnswer = state.practiceAnswers[q.id];
  const isAnswered = userAnswer !== undefined;

  const optKeys = Object.keys(q.options).sort();
  optKeys.forEach(k => {
    const val = q.options[k];
    if (!val) return;
    
    const optDiv = document.createElement('div');
    optDiv.className = 'option-item';
    
    // Check answer state if previously answered
    if (isAnswered) {
      if (k.toUpperCase() === q.answer.toUpperCase()) {
        optDiv.classList.add('correct');
      } else if (userAnswer.selected === k.toUpperCase()) {
        optDiv.classList.add('incorrect');
      }
    }

    optDiv.innerHTML = `
      <div class="option-key">${k.toUpperCase()}</div>
      <div class="option-text">${val}</div>
      ${isAnswered && k.toUpperCase() === q.answer.toUpperCase() ? '<i class="fa-solid fa-circle-check" style="color: var(--success); font-size: 1.25rem;"></i>' : ''}
      ${isAnswered && userAnswer.selected === k.toUpperCase() && !userAnswer.isCorrect ? '<i class="fa-solid fa-circle-xmark" style="color: var(--danger); font-size: 1.25rem;"></i>' : ''}
    `;

    optDiv.onclick = () => handlePracticeOptionClick(q, k.toUpperCase());
    qOptionsList.appendChild(optDiv);
  });

  // Render Feedback Banner
  if (qFeedbackBanner) {
    if (isAnswered) {
      qFeedbackBanner.style.display = 'flex';
      if (userAnswer.isCorrect) {
        qFeedbackBanner.className = 'q-feedback correct';
        qFeedbackBanner.innerHTML = `
          <i class="fa-solid fa-circle-check" style="font-size: 1.35rem; margin-top: 2px;"></i>
          <div>
            <strong>চমৎকার! আপনার উত্তরটি সঠিক হয়েছে।</strong>
            <div>সঠিক উত্তর: <strong>${q.answer.toUpperCase()}. ${q.options[q.answer.toLowerCase()] || ''}</strong></div>
          </div>
        `;
      } else {
        qFeedbackBanner.className = 'q-feedback incorrect';
        qFeedbackBanner.innerHTML = `
          <i class="fa-solid fa-circle-xmark" style="font-size: 1.35rem; margin-top: 2px;"></i>
          <div>
            <strong>দুঃখিত, উত্তরটি ভুল হয়েছে।</strong>
            <div>আপনার নির্বাচন: <strong>${userAnswer.selected}</strong> • সঠিক উত্তর: <strong>${q.answer.toUpperCase()}. ${q.options[q.answer.toLowerCase()] || ''}</strong></div>
          </div>
        `;
      }
    } else {
      qFeedbackBanner.style.display = 'none';
    }
  }

  // Prev / Next button states
  if (prevBtn) prevBtn.disabled = state.currentQuestionIndex === 0;
  if (nextBtn) nextBtn.disabled = state.currentQuestionIndex === filteredQs.length - 1;

  // Render Palette
  renderPracticePalette(filteredQs);
}

function handlePracticeOptionClick(q, selectedKey) {
  // If already answered, allow re-selection
  const isCorrect = selectedKey.toUpperCase() === q.answer.toUpperCase();
  state.practiceAnswers[q.id] = {
    selected: selectedKey,
    isCorrect: isCorrect
  };
  
  // Persist
  localStorage.setItem('mqb_answers', JSON.stringify(state.practiceAnswers));
  
  updateGlobalStats();
  loadPracticeQuestion();
}

function navigateQuestion(direction) {
  const filteredQs = getFilteredPracticeQuestions();
  const nextIdx = state.currentQuestionIndex + direction;
  if (nextIdx >= 0 && nextIdx < filteredQs.length) {
    state.currentQuestionIndex = nextIdx;
    loadPracticeQuestion();
  }
}

function jumpToRandomQuestion() {
  const filteredQs = getFilteredPracticeQuestions();
  if (filteredQs.length <= 1) return;
  let randIdx = state.currentQuestionIndex;
  while (randIdx === state.currentQuestionIndex) {
    randIdx = Math.floor(Math.random() * filteredQs.length);
  }
  state.currentQuestionIndex = randIdx;
  loadPracticeQuestion();
}

function toggleCurrentBookmark() {
  const filteredQs = getFilteredPracticeQuestions();
  if (!filteredQs[state.currentQuestionIndex]) return;
  
  const qId = filteredQs[state.currentQuestionIndex].id;
  const idx = state.bookmarks.indexOf(qId);
  if (idx > -1) {
    state.bookmarks.splice(idx, 1);
  } else {
    state.bookmarks.push(qId);
  }
  
  localStorage.setItem('mqb_bookmarks', JSON.stringify(state.bookmarks));
  updateBookmarkBadge();
  loadPracticeQuestion();
}

function resetTopicProgress() {
  if (!confirm('আপনি কি এই অধ্যায়ের সংরক্ষিত সব উত্তর রিসেট করতে চান?')) return;
  
  const allTopicQs = QUESTION_BANK.questions.filter(q => q.topic === state.currentTopicId);
  allTopicQs.forEach(q => {
    delete state.practiceAnswers[q.id];
  });
  
  localStorage.setItem('mqb_answers', JSON.stringify(state.practiceAnswers));
  updateGlobalStats();
  state.currentQuestionIndex = 0;
  loadPracticeQuestion();
}

function renderPracticePalette(filteredQs) {
  const grid = document.getElementById('questionPaletteGrid');
  const summary = document.getElementById('paletteProgressText');
  if (!grid) return;
  
  grid.innerHTML = '';
  
  let answeredCount = 0;
  filteredQs.forEach((q, idx) => {
    const btn = document.createElement('button');
    btn.className = 'palette-btn';
    btn.innerText = toBnNum(idx + 1);
    
    if (idx === state.currentQuestionIndex) {
      btn.classList.add('current');
    }

    const ans = state.practiceAnswers[q.id];
    if (ans !== undefined) {
      answeredCount++;
      if (ans.isCorrect) {
        btn.classList.add('correct');
      } else {
        btn.classList.add('wrong');
      }
    }

    btn.onclick = () => {
      state.currentQuestionIndex = idx;
      loadPracticeQuestion();
    };

    grid.appendChild(btn);
  });

  if (summary) {
    summary.innerText = `${toBnNum(answeredCount)}/${toBnNum(filteredQs.length)} সম্পন্ন`;
  }
}

// ================= KEYBOARD NAVIGATION =================
function setupKeyboardNavigation() {
  document.addEventListener('keydown', (e) => {
    // If user is typing in search input, don't trigger shortcuts
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;

    if (state.currentView === 'practice') {
      if (e.key === 'ArrowLeft') {
        navigateQuestion(-1);
      } else if (e.key === 'ArrowRight') {
        navigateQuestion(1);
      } else if (['1', '2', '3', '4', '5'].includes(e.key)) {
        const keyMap = { '1': 'A', '2': 'B', '3': 'C', '4': 'D', '5': 'E' };
        const filteredQs = getFilteredPracticeQuestions();
        const currentQ = filteredQs[state.currentQuestionIndex];
        if (currentQ) {
          const optLetter = keyMap[e.key];
          if (currentQ.options[optLetter.toLowerCase()]) {
            handlePracticeOptionClick(currentQ, optLetter);
          }
        }
      }
    } else if (state.currentView === 'exam' && state.exam.isActive) {
      if (e.key === 'ArrowLeft') {
        navigateExamQuestion(-1);
      } else if (e.key === 'ArrowRight') {
        navigateExamQuestion(1);
      } else if (['1', '2', '3', '4', '5'].includes(e.key)) {
        const keyMap = { '1': 'A', '2': 'B', '3': 'C', '4': 'D', '5': 'E' };
        selectExamOption(keyMap[e.key]);
      }
    }
  });
}

// ================= EXAM / MODEL TEST ENGINE =================
function showExamScreen(screenName) { // 'setup', 'active', 'result'
  document.getElementById('examSetupScreen').style.display = screenName === 'setup' ? 'block' : 'none';
  document.getElementById('examActiveScreen').style.display = screenName === 'active' ? 'block' : 'none';
  document.getElementById('examResultScreen').style.display = screenName === 'result' ? 'block' : 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openExamSetupModal() {
  navigateTo('exam');
  showExamScreen('setup');
}

function renderExamTopicOptions() {
  const select = document.getElementById('examTopicSelect');
  if (!select || !window.QUESTION_BANK) return;
  
  select.innerHTML = `<option value="all">🌟 সকল অধ্যায় সম্মিলিত (পূর্ণাঙ্গ মডেল টেস্ট - ${toBnNum(QUESTION_BANK.total_questions)} প্রশ্ন থেকে)</option>`;
  QUESTION_BANK.topics.forEach(t => {
    const opt = document.createElement('option');
    opt.value = t.id;
    opt.innerText = `${t.title} (${toBnNum(t.count)} টি প্রশ্ন)`;
    select.appendChild(opt);
  });
}

function startExamForTopicDirect(topicId) {
  navigateTo('exam');
  showExamScreen('setup');
  const select = document.getElementById('examTopicSelect');
  if (select) {
    select.value = topicId;
  }
}

function startExamForCurrentTopic() {
  startExamForTopicDirect(state.currentTopicId);
}

function updateRecommendedTime() {
  const countSelect = document.getElementById('examQuestionCount');
  const timeSelect = document.getElementById('examTimeDuration');
  if (!countSelect || !timeSelect) return;
  
  const count = parseInt(countSelect.value);
  timeSelect.value = String(count); // 1 minute per question
}

function handleStartExam(e) {
  e.preventDefault();
  
  const topicVal = document.getElementById('examTopicSelect').value;
  const countVal = parseInt(document.getElementById('examQuestionCount').value);
  const timeVal = parseInt(document.getElementById('examTimeDuration').value);
  const negVal = parseFloat(document.querySelector('input[name="negativeMarking"]:checked').value);

  // Pool questions
  let pool = [];
  let topicName = 'পূর্ণাঙ্গ মডেল টেস্ট';
  if (topicVal === 'all') {
    pool = [...QUESTION_BANK.questions];
  } else {
    pool = QUESTION_BANK.questions.filter(q => q.topic === topicVal);
    const foundTopic = QUESTION_BANK.topics.find(t => t.id === topicVal);
    if (foundTopic) topicName = foundTopic.title;
  }

  // Shuffle pool
  pool = shuffleArray(pool);
  
  // Slice to count
  const examQuestions = pool.slice(0, Math.min(countVal, pool.length));
  
  if (examQuestions.length === 0) {
    alert('এই বিভাগে কোনো প্রশ্ন খুঁজে পাওয়া যায়নি!');
    return;
  }

  // Initialize Exam State
  state.exam.isActive = true;
  state.exam.questions = examQuestions;
  state.exam.currentIndex = 0;
  state.exam.userAnswers = {};
  state.exam.markedForReview = new Set();
  state.exam.totalSeconds = timeVal * 60;
  state.exam.remainingSeconds = timeVal * 60;
  state.exam.negativeMarking = negVal;
  state.exam.topicName = topicName;

  showExamScreen('active');
  
  // Set Topic Name
  document.getElementById('liveExamTopicName').innerText = topicName;
  document.getElementById('liveTotalCount').innerText = toBnNum(examQuestions.length);

  // Start Timer
  startExamTimer();
  
  // Load First Exam Question
  loadExamQuestion();
}

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Timer
function startExamTimer() {
  stopExamTimer();
  updateTimerDisplay();

  state.exam.timerInterval = setInterval(() => {
    state.exam.remainingSeconds--;
    updateTimerDisplay();

    if (state.exam.remainingSeconds <= 0) {
      stopExamTimer();
      alert('সময় শেষ! আপনার পরীক্ষাটি স্বয়ংক্রিয়ভাবে জমা দেওয়া হচ্ছে।');
      executeSubmitExam();
    }
  }, 1000);
}

function stopExamTimer() {
  if (state.exam.timerInterval) {
    clearInterval(state.exam.timerInterval);
    state.exam.timerInterval = null;
  }
}

function updateTimerDisplay() {
  const timerBox = document.getElementById('examTimerBox');
  const timerDisplay = document.getElementById('examTimerDisplay');
  if (!timerDisplay) return;

  const mins = Math.floor(state.exam.remainingSeconds / 60);
  const secs = state.exam.remainingSeconds % 60;
  
  const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  timerDisplay.innerText = toBnNum(formatted);

  // Warning when less than 2 minutes remain
  if (state.exam.remainingSeconds <= 120 && timerBox) {
    timerBox.classList.add('warning');
  } else if (timerBox) {
    timerBox.classList.remove('warning');
  }
}

function loadExamQuestion() {
  const q = state.exam.questions[state.exam.currentIndex];
  if (!q) return;

  const currentTopic = QUESTION_BANK.topics.find(t => t.id === q.topic);
  
  document.getElementById('examQTopicBadge').innerText = currentTopic ? currentTopic.title : 'গণিত';
  document.getElementById('examQNumber').innerText = `প্রশ্ন ${toBnNum(state.exam.currentIndex + 1)} / ${toBnNum(state.exam.questions.length)}`;
  document.getElementById('examQText').innerText = q.question;

  // Review button state
  const isMarked = state.exam.markedForReview.has(state.exam.currentIndex);
  const revBtn = document.getElementById('examReviewToggleBtn');
  const revText = document.getElementById('reviewBtnText');
  if (revBtn && revText) {
    revBtn.classList.toggle('btn-primary', isMarked);
    revBtn.classList.toggle('btn-outline', !isMarked);
    revText.innerText = isMarked ? 'রিভিউ মার্ক করা আছে' : 'রিভিউয়ের জন্য রাখুন';
  }

  // Options
  const optList = document.getElementById('examQOptionsList');
  optList.innerHTML = '';
  
  const selectedOpt = state.exam.userAnswers[state.exam.currentIndex];

  const optKeys = Object.keys(q.options).sort();
  optKeys.forEach(k => {
    const val = q.options[k];
    if (!val) return;

    const optDiv = document.createElement('div');
    optDiv.className = 'option-item';
    if (selectedOpt === k.toUpperCase()) {
      optDiv.classList.add('selected');
    }

    optDiv.innerHTML = `
      <div class="option-key">${k.toUpperCase()}</div>
      <div class="option-text">${val}</div>
      ${selectedOpt === k.toUpperCase() ? '<i class="fa-solid fa-check" style="color: var(--primary); font-size: 1.15rem;"></i>' : ''}
    `;

    optDiv.onclick = () => selectExamOption(k.toUpperCase());
    optList.appendChild(optDiv);
  });

  // Prev / Next button states
  document.getElementById('examPrevBtn').disabled = state.exam.currentIndex === 0;
  const nextBtn = document.getElementById('examNextBtn');
  if (state.exam.currentIndex === state.exam.questions.length - 1) {
    nextBtn.innerHTML = 'সম্পন্ন করুন <i class="fa-solid fa-flag-checkered"></i>';
    nextBtn.onclick = () => confirmSubmitExam();
  } else {
    nextBtn.innerHTML = 'পরের প্রশ্ন <i class="fa-solid fa-chevron-right"></i>';
    nextBtn.onclick = () => navigateExamQuestion(1);
  }

  // Update Live Counter & Palette
  updateExamPalette();
}

function selectExamOption(optKey) {
  state.exam.userAnswers[state.exam.currentIndex] = optKey;
  loadExamQuestion();
}

function clearExamCurrentSelection() {
  delete state.exam.userAnswers[state.exam.currentIndex];
  loadExamQuestion();
}

function toggleExamReviewStatus() {
  const cur = state.exam.currentIndex;
  if (state.exam.markedForReview.has(cur)) {
    state.exam.markedForReview.delete(cur);
  } else {
    state.exam.markedForReview.add(cur);
  }
  loadExamQuestion();
}

function navigateExamQuestion(dir) {
  const nextIdx = state.exam.currentIndex + dir;
  if (nextIdx >= 0 && nextIdx < state.exam.questions.length) {
    state.exam.currentIndex = nextIdx;
    loadExamQuestion();
  }
}

function updateExamPalette() {
  const grid = document.getElementById('examPaletteGrid');
  const answeredEl = document.getElementById('liveAnsweredCount');
  if (!grid) return;

  grid.innerHTML = '';
  const total = state.exam.questions.length;
  const answeredCount = Object.keys(state.exam.userAnswers).length;

  if (answeredEl) answeredEl.innerText = toBnNum(answeredCount);

  for (let i = 0; i < total; i++) {
    const btn = document.createElement('button');
    btn.className = 'palette-btn';
    btn.innerText = toBnNum(i + 1);

    if (i === state.exam.currentIndex) {
      btn.classList.add('current');
    }

    if (state.exam.markedForReview.has(i)) {
      btn.classList.add('review');
    } else if (state.exam.userAnswers[i] !== undefined) {
      btn.classList.add('answered');
    }

    btn.onclick = () => {
      state.exam.currentIndex = i;
      loadExamQuestion();
    };

    grid.appendChild(btn);
  }
}

// Submit Modal & Calculation
function confirmSubmitExam() {
  const answeredCount = Object.keys(state.exam.userAnswers).length;
  const remainingCount = state.exam.questions.length - answeredCount;

  document.getElementById('modalAnsweredCount').innerText = toBnNum(answeredCount);
  document.getElementById('modalRemainingCount').innerText = toBnNum(remainingCount);

  document.getElementById('submitModal').style.display = 'flex';
}

function closeSubmitModal() {
  document.getElementById('submitModal').style.display = 'none';
}

function executeSubmitExam() {
  closeSubmitModal();
  stopExamTimer();
  state.exam.isActive = false;

  // Calculate Result
  const questions = state.exam.questions;
  let correctCount = 0;
  let wrongCount = 0;
  let skippedCount = 0;

  const reviewData = [];

  questions.forEach((q, idx) => {
    const userPick = state.exam.userAnswers[idx];
    const isAnswered = userPick !== undefined;
    const isCorrect = isAnswered && userPick.toUpperCase() === q.answer.toUpperCase();

    if (!isAnswered) {
      skippedCount++;
    } else if (isCorrect) {
      correctCount++;
    } else {
      wrongCount++;
    }

    // Also update practice progress state for each attempted question
    if (isAnswered) {
      state.practiceAnswers[q.id] = {
        selected: userPick,
        isCorrect: isCorrect
      };
    }

    reviewData.push({
      question: q,
      userPick: userPick || null,
      correctAnswer: q.answer.toUpperCase(),
      isCorrect: isCorrect,
      isSkipped: !isAnswered
    });
  });

  // Negative Marking Score
  const rawScore = correctCount - (wrongCount * state.exam.negativeMarking);
  const finalScore = Math.max(0, parseFloat(rawScore.toFixed(2)));
  const timeTaken = state.exam.totalSeconds - state.exam.remainingSeconds;
  const accuracy = (correctCount + wrongCount) > 0 
    ? Math.round((correctCount / (correctCount + wrongCount)) * 100) 
    : 0;

  // Persist Practice Answers
  localStorage.setItem('mqb_answers', JSON.stringify(state.practiceAnswers));
  updateGlobalStats();

  // Save Exam Record
  const examRecord = {
    date: new Date().toISOString(),
    topic: state.exam.topicName,
    total: questions.length,
    score: finalScore,
    correct: correctCount,
    wrong: wrongCount,
    accuracy: accuracy
  };
  state.examHistory.push(examRecord);
  localStorage.setItem('mqb_exam_history', JSON.stringify(state.examHistory));

  // Store reviewData for result screen
  state.exam.lastReviewData = reviewData;
  state.exam.resultFilter = 'all';

  // Render Result Screen
  renderExamResultScreen(finalScore, questions.length, correctCount, wrongCount, skippedCount, accuracy, timeTaken);
}

function renderExamResultScreen(score, total, correct, wrong, skipped, accuracy, timeTaken) {
  showExamScreen('result');

  document.getElementById('resScoreVal').innerText = `${toBnNum(score)} / ${toBnNum(total)}`;
  document.getElementById('resCorrectVal').innerText = toBnNum(correct);
  document.getElementById('resWrongVal').innerText = toBnNum(wrong);
  document.getElementById('resSkippedVal').innerText = toBnNum(skipped);
  document.getElementById('resAccuracyVal').innerText = `${toBnNum(accuracy)}%`;

  const mins = Math.floor(timeTaken / 60);
  const secs = timeTaken % 60;
  document.getElementById('resTimeVal').innerText = `${toBnNum(mins)} মিনিট ${toBnNum(secs)} সেকেন্ড`;

  // Grade badge & Title
  const gradeIcon = document.getElementById('resultGradeIcon');
  const titleText = document.getElementById('resultTitleText');
  const subText = document.getElementById('resultSubtitleText');

  const percent = total > 0 ? (score / total) * 100 : 0;
  if (percent >= 80) {
    gradeIcon.innerHTML = '<i class="fa-solid fa-trophy"></i>';
    gradeIcon.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    titleText.innerText = 'অসাধারণ ফলাফল! 🎉';
    subText.innerText = 'আপনি অসাধারণ দক্ষতা প্রদর্শন করেছেন। বিসিএস ও ব্যাংকে আপনার অবস্থান নিশ্চিত!';
  } else if (percent >= 50) {
    gradeIcon.innerHTML = '<i class="fa-solid fa-medal"></i>';
    gradeIcon.style.background = 'linear-gradient(135deg, #3b82f6, #1d4ed8)';
    titleText.innerText = 'খুব ভালো প্রস্তুতি! 👍';
    subText.innerText = 'আপনার মৌলিক ধারণা যথেষ্ট ভালো। দুর্বল টপিকগুলো আরেকটু ঝালিয়ে নিন।';
  } else {
    gradeIcon.innerHTML = '<i class="fa-solid fa-chart-line"></i>';
    gradeIcon.style.background = 'linear-gradient(135deg, #f59e0b, #d97706)';
    titleText.innerText = 'আরও অনুশীলনের সুযোগ রয়েছে 💪';
    subText.innerText = 'ভুল হওয়া প্রশ্নগুলো পুনরায় অনুশীলন করে দক্ষতা বৃদ্ধি করুন।';
  }

  // Render Review List
  renderResultQuestionsList();
}

function filterResultQuestions(filter) {
  state.exam.resultFilter = filter;
  document.querySelectorAll('.review-filter-tabs .pill-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.resfilter === filter);
  });
  renderResultQuestionsList();
}

function renderResultQuestionsList() {
  const container = document.getElementById('reviewQuestionsList');
  if (!container || !state.exam.lastReviewData) return;

  container.innerHTML = '';
  const filter = state.exam.resultFilter;

  const filteredItems = state.exam.lastReviewData.filter(item => {
    if (filter === 'correct') return item.isCorrect;
    if (filter === 'wrong') return !item.isCorrect && !item.isSkipped;
    if (filter === 'skipped') return item.isSkipped;
    return true;
  });

  if (filteredItems.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="padding: 2rem 1rem;">
        <p>এই ফিল্টারে কোনো প্রশ্ন নেই।</p>
      </div>
    `;
    return;
  }

  filteredItems.forEach((item, index) => {
    const q = item.question;
    const card = document.createElement('div');
    card.className = `review-item ${item.isCorrect ? 'is-correct' : item.isSkipped ? 'is-skipped' : 'is-wrong'}`;

    let statusTag = '';
    if (item.isCorrect) {
      statusTag = '<span class="review-status-tag status-correct"><i class="fa-solid fa-check"></i> সঠিক উত্তর</span>';
    } else if (item.isSkipped) {
      statusTag = '<span class="review-status-tag status-skipped"><i class="fa-solid fa-minus"></i> উত্তর দেননি</span>';
    } else {
      statusTag = '<span class="review-status-tag status-wrong"><i class="fa-solid fa-xmark"></i> ভুল উত্তর</span>';
    }

    let optionsHtml = '';
    Object.keys(q.options).sort().forEach(k => {
      const isPick = item.userPick === k.toUpperCase();
      const isRight = item.correctAnswer === k.toUpperCase();
      let optClass = 'review-opt';
      if (isRight) optClass += ' correct-answer';
      else if (isPick) optClass += ' user-picked';

      optionsHtml += `
        <div class="${optClass}">
          <strong>${k.toUpperCase()}.</strong> ${q.options[k]}
          ${isRight ? ' <i class="fa-solid fa-check" style="color: var(--success);"></i>' : ''}
          ${isPick && !isRight ? ' <i class="fa-solid fa-xmark" style="color: var(--danger);"></i>' : ''}
        </div>
      `;
    });

    card.innerHTML = `
      <div class="review-item-header">
        <span class="review-q-num">প্রশ্ন #${toBnNum(state.exam.lastReviewData.indexOf(item) + 1)} (বইয়ের #${toBnNum(q.id)})</span>
        ${statusTag}
      </div>
      <div class="review-q-text">${q.question}</div>
      <div class="review-options-grid">${optionsHtml}</div>
    `;

    container.appendChild(card);
  });
}

function retakeExam() {
  openExamSetupModal();
}

function practiceExamMistakes() {
  if (!state.exam.lastReviewData) return;
  const mistakes = state.exam.lastReviewData.filter(i => !i.isCorrect);
  if (mistakes.length === 0) {
    alert('অভিনন্দন! আপনার কোনো ভুল উত্তর নেই!');
    return;
  }
  
  // Set current topic to the first mistake's topic
  state.currentTopicId = mistakes[0].question.topic;
  state.practiceFilter = 'incorrect';
  state.currentQuestionIndex = 0;
  navigateTo('practice');
}

// ================= BOOKMARKS & SEARCH VIEW =================
function renderBookmarksView() {
  const container = document.getElementById('bookmarksList');
  const titleEl = document.getElementById('bookmarksViewTitle');
  const subEl = document.getElementById('bookmarksViewSubtitle');
  if (!container || !window.QUESTION_BANK) return;

  container.innerHTML = '';

  if (state.searchQuery) {
    titleEl.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i> অনুসন্ধানের ফলাফল: "${state.searchQuery}"`;
    subEl.innerText = `পিডিএফ বইয়ের ${toBnNum(QUESTION_BANK.total_questions)}টি প্রশ্নের মধ্য থেকে প্রাপ্ত ফলাফল`;
    renderSearchResults(container);
    return;
  }

  titleEl.innerHTML = '<i class="fa-solid fa-bookmark"></i> বুকমার্ককৃত প্রশ্নসমূহ';
  subEl.innerText = 'পুনরায় পড়ার জন্য আপনার সংরক্ষণ করা প্রশ্ন তালিকা';

  if (state.bookmarks.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon"><i class="fa-regular fa-star"></i></div>
        <h4>এখনো কোনো প্রশ্ন বুকমার্ক করেননি</h4>
        <p>অনুশীলন করার সময় যেকোনো প্রশ্নের উপরে থাকা তারা (Star) আইকনে ক্লিক করে বুকমার্কে সংরক্ষণ করতে পারেন।</p>
        <button class="btn btn-primary btn-sm" onclick="navigateTo('dashboard')">ড্যাশবোর্ডে যান</button>
      </div>
    `;
    return;
  }

  const bookmarkedQs = QUESTION_BANK.questions.filter(q => state.bookmarks.includes(q.id));
  renderQuestionCardsList(container, bookmarkedQs);
}

function renderQuestionCardsList(container, questionsList) {
  questionsList.forEach(q => {
    const currentTopic = QUESTION_BANK.topics.find(t => t.id === q.topic);
    const card = document.createElement('div');
    card.className = 'review-item';
    card.style.cursor = 'pointer';

    let optionsHtml = '';
    Object.keys(q.options).sort().forEach(k => {
      const isRight = q.answer.toUpperCase() === k.toUpperCase();
      optionsHtml += `
        <div class="review-opt ${isRight ? 'correct-answer' : ''}">
          <strong>${k.toUpperCase()}.</strong> ${q.options[k]}
        </div>
      `;
    });

    card.innerHTML = `
      <div class="review-item-header">
        <span class="review-q-num">
          <span class="q-badge" style="font-size: 0.75rem;">${currentTopic ? currentTopic.title : 'গণিত'}</span>
          বইয়ের সিরিয়াল #${toBnNum(q.id)}
        </span>
        <button class="btn btn-outline btn-sm" onclick="jumpToQuestionPractice('${q.topic}', ${q.id})">
          <i class="fa-solid fa-arrow-up-right-from-square"></i> অনুশীলনে দেখুন
        </button>
      </div>
      <div class="review-q-text">${q.question}</div>
      <div class="review-options-grid">${optionsHtml}</div>
    `;

    container.appendChild(card);
  });
}

function jumpToQuestionPractice(topicId, qId) {
  state.currentTopicId = topicId;
  state.practiceFilter = 'all';
  
  const allTopicQs = QUESTION_BANK.questions.filter(q => q.topic === topicId);
  const foundIdx = allTopicQs.findIndex(q => q.id === qId);
  state.currentQuestionIndex = foundIdx > -1 ? foundIdx : 0;
  
  navigateTo('practice');
}

function clearAllBookmarks() {
  if (state.bookmarks.length === 0) return;
  if (!confirm('আপনি কি সব বুকমার্ক মুছে ফেলতে চান?')) return;
  
  state.bookmarks = [];
  localStorage.setItem('mqb_bookmarks', JSON.stringify(state.bookmarks));
  updateBookmarkBadge();
  renderBookmarksView();
}

// Global Search
function handleSearch(query) {
  const cleanQ = query.trim().toLowerCase();
  const clearBtn = document.getElementById('clearSearchBtn');
  
  if (cleanQ) {
    if (clearBtn) clearBtn.style.display = 'block';
    state.searchQuery = cleanQ;
    navigateTo('bookmarks');
  } else {
    if (clearBtn) clearBtn.style.display = 'none';
    state.searchQuery = '';
    if (state.currentView === 'bookmarks') {
      renderBookmarksView();
    }
  }
}

function clearSearch() {
  const searchInput = document.getElementById('globalSearchInput');
  const clearBtn = document.getElementById('clearSearchBtn');
  if (searchInput) searchInput.value = '';
  if (clearBtn) clearBtn.style.display = 'none';
  state.searchQuery = '';
  if (state.currentView === 'bookmarks') {
    renderBookmarksView();
  }
}

function renderSearchResults(container) {
  const q = state.searchQuery.toLowerCase();
  const matches = QUESTION_BANK.questions.filter(item => {
    if (item.question && item.question.toLowerCase().includes(q)) return true;
    if (String(item.id).includes(q)) return true;
    // Check options
    for (const optVal of Object.values(item.options)) {
      if (optVal && optVal.toLowerCase().includes(q)) return true;
    }
    return false;
  });

  if (matches.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon"><i class="fa-solid fa-magnifying-glass"></i></div>
        <h4>কোনো ফলাফল পাওয়া যায়নি</h4>
        <p>"${state.searchQuery}" এর সাথে মিলে এমন কোনো প্রশ্ন পাওয়া যায়নি। অন্য কোনো শব্দ দিয়ে চেষ্টা করুন।</p>
      </div>
    `;
    return;
  }

  renderQuestionCardsList(container, matches);
}
