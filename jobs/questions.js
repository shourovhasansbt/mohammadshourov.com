const QUESTION_BANK = {
  "total_questions": 1241,
  "pages_covered": 300,
  "topics": [
    {
      "id": "interest",
      "title": "সুদকষা (সরল ও চক্রবৃদ্ধি সুদ)",
      "title_en": "Simple & Compound Interest",
      "icon": "fa-percent",
      "category": "বাংলা গণিত",
      "page_range": "পৃষ্ঠা 13 - 17",
      "count": 27
    },
    {
      "id": "profit_loss",
      "title": "লাভ ও ক্ষতি",
      "title_en": "Profit & Loss",
      "icon": "fa-chart-line",
      "category": "বাংলা গণিত",
      "page_range": "পৃষ্ঠা 21 - 29",
      "count": 45
    },
    {
      "id": "percentage",
      "title": "শতকরা",
      "title_en": "Percentage",
      "icon": "fa-calculator",
      "category": "বাংলা গণিত",
      "page_range": "পৃষ্ঠা 32 - 52",
      "count": 98
    },
    {
      "id": "unitary_work_speed",
      "title": "ঐকিক নিয়ম, কাজ, সময় ও গতিবেগ",
      "title_en": "Unitary Method, Work, Time & Speed",
      "icon": "fa-stopwatch",
      "category": "বাংলা গণিত",
      "page_range": "পৃষ্ঠা 57 - 75",
      "count": 87
    },
    {
      "id": "ratio_mixture",
      "title": "অনুপাত, সমানুপাত ও মিশ্রণ",
      "title_en": "Ratio, Proportion & Mixture",
      "icon": "fa-balance-scale",
      "category": "বাংলা গণিত",
      "page_range": "পৃষ্ঠা 77 - 89",
      "count": 59
    },
    {
      "id": "lcm_hcf",
      "title": "ল.সা.গু ও গ.সা.গু",
      "title_en": "LCM & HCF",
      "icon": "fa-divide",
      "category": "বাংলা গণিত",
      "page_range": "পৃষ্ঠা 91 - 97",
      "count": 34
    },
    {
      "id": "average",
      "title": "গড়",
      "title_en": "Average",
      "icon": "fa-chart-bar",
      "category": "বাংলা গণিত",
      "page_range": "পৃষ্ঠা 102 - 118",
      "count": 86
    },
    {
      "id": "number_problems",
      "title": "সংখ্যা সংক্রান্ত সমস্যা",
      "title_en": "Problems on Numbers",
      "icon": "fa-cubes",
      "category": "বাংলা গণিত",
      "page_range": "পৃষ্ঠা 119 - 139",
      "count": 98
    },
    {
      "id": "fractions",
      "title": "ভগ্নাংশ ও দশমিক",
      "title_en": "Fractions & Decimals",
      "icon": "fa-pie-chart",
      "category": "বাংলা গণিত",
      "page_range": "পৃষ্ঠা 140 - 154",
      "count": 76
    },
    {
      "id": "simplification",
      "title": "সরলীকরণ ও মান নির্ণয়",
      "title_en": "Simplification & Basic Math",
      "icon": "fa-square-root-alt",
      "category": "বাংলা গণিত",
      "page_range": "পৃষ্ঠা 155 - 162",
      "count": 42
    },
    {
      "id": "measurement_geometry",
      "title": "পরিমাপ, একক ও জ্যামিতি",
      "title_en": "Measurement, Units & Geometry",
      "icon": "fa-ruler-combined",
      "category": "বাংলা গণিত",
      "page_range": "পৃষ্ঠা 163 - 183",
      "count": 103
    },
    {
      "id": "bank_percentage",
      "title": "শতকরা (Percentage - Bank Math)",
      "title_en": "Percentage (Bank, IBA & BCS)",
      "icon": "fa-building-columns",
      "category": "ব্যাংক ও IBA গণিত",
      "page_range": "পৃষ্ঠা 184 - 226",
      "count": 188
    },
    {
      "id": "bank_profit_loss",
      "title": "লাভ-ক্ষতি (Profit & Loss - Bank Math)",
      "title_en": "Profit & Loss (Bank & IBA)",
      "icon": "fa-money-bill-trend-up",
      "category": "ব্যাংক ও IBA গণিত",
      "page_range": "পৃষ্ঠা 227 - 250",
      "count": 103
    },
    {
      "id": "bank_interest",
      "title": "সুদ ও বিনিয়োগ (Interest & Investment - Bank)",
      "title_en": "Interest & Investment (Bank & IBA)",
      "icon": "fa-hand-holding-dollar",
      "category": "ব্যাংক ও IBA গণিত",
      "page_range": "পৃষ্ঠা 251 - 257",
      "count": 28
    },
    {
      "id": "bank_mixture",
      "title": "মিশ্রণ ও দ্রবণ (Mixture & Solution - Bank)",
      "title_en": "Mixture & Solution (Bank & IBA)",
      "icon": "fa-flask-vial",
      "category": "ব্যাংক ও IBA গণিত",
      "page_range": "পৃষ্ঠা 258 - 260",
      "count": 13
    },
    {
      "id": "bank_speed_train",
      "title": "গতিবেগ, দূরত্ব ও ট্রেন (Speed, Train & Distance)",
      "title_en": "Speed, Distance & Train (Bank & IBA)",
      "icon": "fa-train-subway",
      "category": "ব্যাংক ও IBA গণিত",
      "page_range": "পৃষ্ঠা 261 - 272",
      "count": 51
    },
    {
      "id": "bank_work_pipes",
      "title": "কাজ, সময় ও নল-চৌবাচ্চা (Work, Time & Pipes)",
      "title_en": "Work, Time & Pipes (Bank & IBA)",
      "icon": "fa-faucet-drip",
      "category": "ব্যাংক ও IBA গণিত",
      "page_range": "পৃষ্ঠা 273 - 283",
      "count": 46
    },
    {
      "id": "bank_sets_venn",
      "title": "সেট ও ভেনচিত্র (Sets & Venn Diagrams - Bank)",
      "title_en": "Sets & Venn Diagrams (Bank & IBA)",
      "icon": "fa-circle-nodes",
      "category": "ব্যাংক ও IBA গণিত",
      "page_range": "পৃষ্ঠা 284 - 293",
      "count": 40
    },
    {
      "id": "bank_fractions_word",
      "title": "ভগ্নাংশ ও বাস্তব সমস্যা (Fractions & Word Problems)",
      "title_en": "Fractions & Word Problems (Bank & IBA)",
      "icon": "fa-coins",
      "category": "ব্যাংক ও IBA গণিত",
      "page_range": "পৃষ্ঠা 294 - 297",
      "count": 17
    }
  ],
  "questions": [
    {
      "topic": "interest",
      "q_num": 1,
      "question": "আলতাফ ৬% সুদে ৪০০০ টাকা বিনিয়োগ করে ৫ বছরের জন্য। তবে সে কত টাকা সুদ পাবে?",
      "options": {
        "a": "১২৫০",
        "b": "১১০০",
        "c": "১২০০",
        "d": "১১৫০",
        "e": "None of These"
      },
      "answer": "C",
      "id": 1,
      "serial_in_topic": 1
    },
    {
      "topic": "interest",
      "q_num": 2,
      "question": "বার্ষিক ৬% হারে ১০০০০ টাকার ৯ মাসের সুদ কত পাওয়া যাবে?",
      "options": {
        "a": "৪৫",
        "b": "৪৫০",
        "c": "৫৪০",
        "d": "৫৪",
        "e": "None of These"
      },
      "answer": "B",
      "id": 2,
      "serial_in_topic": 2
    },
    {
      "topic": "interest",
      "q_num": 3,
      "question": "যদি ৫০০০ টাকায় ২ বছরের সুদ ৩০০ টাকা পাওয়া যায় তবে বার্ষিক সুদের হার কত?",
      "options": {
        "a": "৪%",
        "b": "৪.৫%",
        "c": "৩%",
        "d": "৩.৫%",
        "e": "None of These"
      },
      "answer": "C",
      "id": 3,
      "serial_in_topic": 3
    },
    {
      "topic": "interest",
      "q_num": 4,
      "question": "ব্যাংকে যে টাকা জমা রাখা হয় তা হচ্ছে",
      "options": {
        "a": "সুদ",
        "b": "আসল",
        "c": "মুনাফা",
        "d": "সু-আসল",
        "e": "None of These"
      },
      "answer": "B",
      "id": 4,
      "serial_in_topic": 4
    },
    {
      "topic": "interest",
      "q_num": 5,
      "question": "১০% হারে কত সমেয় ৫০০ টাকার সুদ ১০০ টাকা হবে",
      "options": {
        "a": "৩বছর",
        "b": "৪বছর",
        "c": "২বছর",
        "d": "৫বছর",
        "e": "None of These"
      },
      "answer": "C",
      "id": 5,
      "serial_in_topic": 5
    },
    {
      "topic": "interest",
      "q_num": 6,
      "question": "শতকরা বার্ষিক ৪টাকা হার সুদে কত টাকার ৬ বছরের সুদ ৬৪ টাকা হবে?",
      "options": {
        "a": "৪৫০টাকা",
        "b": "৩৬০টাকা",
        "c": "৩৭৫টাকা",
        "d": "৩৫০টাকা",
        "e": "None of These"
      },
      "answer": "D",
      "id": 6,
      "serial_in_topic": 6
    },
    {
      "topic": "interest",
      "q_num": 7,
      "question": "কোন আসল টাকার ৩ বছরের সুদ আসলের ৩/৮ অংশ হলে সুদের হার কত?",
      "options": {
        "a": "৩৩%",
        "b": "২৫/২%",
        "c": "৫৫/২%",
        "d": "১০০/৩%",
        "e": "None of These"
      },
      "answer": "B",
      "id": 7,
      "serial_in_topic": 7
    },
    {
      "topic": "interest",
      "q_num": 8,
      "question": "শতকরা বার্ষিক কত হার সুদে ৭০০ টাকার ৫ বছরের সুদ ১০৫ টাকা হবে?",
      "options": {
        "a": "৪%",
        "b": "২%",
        "c": "৫%",
        "d": "৩%",
        "e": "None of These"
      },
      "answer": "D",
      "id": 8,
      "serial_in_topic": 8
    },
    {
      "topic": "interest",
      "q_num": 9,
      "question": "শতকরা বার্ষিক কত হার সুদে ৫ বছরের ৪০০ টাকার সুদ ১৪০ টাকা হবে?",
      "options": {
        "a": "৭টাকা",
        "b": "৫টাকা",
        "c": "৩টাকা",
        "d": "১২টাকা",
        "e": "None of These"
      },
      "answer": "A",
      "id": 9,
      "serial_in_topic": 9
    },
    {
      "topic": "interest",
      "q_num": 10,
      "question": "সুদের হার শতকরা ৭ টাকা হলে ৬৫০ টাকার ৬ বছরের সুদ কত?",
      "options": {
        "a": "২৭০টাকা",
        "b": "২৭৩টাকা",
        "c": "২৭৮টাকা",
        "d": "২৭৫টাকা",
        "e": "None of These"
      },
      "answer": "B",
      "id": 10,
      "serial_in_topic": 10
    },
    {
      "topic": "interest",
      "q_num": 11,
      "question": "শতকরা বার্ষিক ৪টাকা হার সুদে কত টাকার ৫ বছরের সুদ ৪ টাকা হবে?",
      "options": {
        "a": "১০টাকা",
        "b": "২৮টাকা",
        "c": "২০টাকা",
        "d": "১৫টাকা",
        "e": "None of These"
      },
      "answer": "C",
      "id": 11,
      "serial_in_topic": 11
    },
    {
      "topic": "interest",
      "q_num": 12,
      "question": "৫০ পয়সার ৫০দিনের সুদ ৫০ পয়সা হলে দদনিক সুদ কত?",
      "options": {
        "a": "১টাকা",
        "b": "২টাকা",
        "c": "০.০১টাকা",
        "d": ".১০টাকা",
        "e": "None of These"
      },
      "answer": "C",
      "id": 12,
      "serial_in_topic": 12
    },
    {
      "topic": "interest",
      "q_num": 13,
      "question": "শতকরা বার্ষিক কত হার সুদে ১ বছরের সুদ আসলের ১/৫ অংশ হবে?",
      "options": {
        "a": "১০%",
        "b": "২২%",
        "c": "২০%",
        "d": "২৭%",
        "e": "None of These"
      },
      "answer": "C",
      "id": 13,
      "serial_in_topic": 13
    },
    {
      "topic": "interest",
      "q_num": 14,
      "question": "শতকরা বার্ষিক কত হারে ৩৩১ টাকা ৫ বছরে সুদে আসলে ৭৬৫ টাকা হবে?",
      "options": {
        "a": "২৬.২২",
        "b": "২৭",
        "c": "২৪",
        "d": "২৮",
        "e": "None of These"
      },
      "answer": "A",
      "id": 14,
      "serial_in_topic": 14
    },
    {
      "topic": "interest",
      "q_num": 15,
      "question": "শতকরা বার্ষিক ৬টাকা হার সুদে কত বছরে ২০০ টাকা সুদে আসলে ২৫০ টাকা হবে?",
      "options": {
        "a": "৭/২ বছরে",
        "b": "২৫/৬ বছরে",
        "c": "৪বছরে",
        "d": "৫বছরে",
        "e": "None of These"
      },
      "answer": "B",
      "id": 15,
      "serial_in_topic": 15
    },
    {
      "topic": "interest",
      "q_num": 16,
      "question": "শতকরা বার্ষিক কত হার সুদে ১২০০ টাকার ৩ বছরের সুদ ২১৬ টাকা হবে?",
      "options": {
        "a": "৬%",
        "b": "১১/২%",
        "c": "৯/২%",
        "d": "৪%",
        "e": "None of These"
      },
      "answer": "A",
      "id": 16,
      "serial_in_topic": 16
    },
    {
      "topic": "interest",
      "q_num": 17,
      "question": "শতকরা বার্ষিক ৫ টাকা হারে ৬৪০ টাকার ২ বছর ৬ মাসের সুদ কত?",
      "options": {
        "a": "৮০টাকা",
        "b": "৯০টাকা",
        "c": "৮৫টাকা",
        "d": "৮২টাকা",
        "e": "None of These"
      },
      "answer": "A",
      "id": 17,
      "serial_in_topic": 17
    },
    {
      "topic": "interest",
      "q_num": 18,
      "question": "বার্ষিক ৩% হার সুদে কত টাকা ৫ বছরে সুদে আসলে ৮০৫ টাকা হবে?",
      "options": {
        "a": "৭০০টাকা",
        "b": "৭০৫টাকা",
        "c": "৬৬৯টাকা",
        "d": "৭৩৫টাকা",
        "e": "None of These"
      },
      "answer": "A",
      "id": 18,
      "serial_in_topic": 18
    },
    {
      "topic": "interest",
      "q_num": 19,
      "question": "বার্ষিক সুদের হার ৫% থেকে হ্রাস পেেয় ১৯/৪% হওয়ায় এক ব্যক্তির ৮০ টাকা আয় কমে গেল। তার মূলধন কত ছিল?",
      "options": {
        "a": "৩২০০০",
        "b": "৩০০০০",
        "c": "৩৩০০০",
        "d": "২৮০০০",
        "e": "None of These"
      },
      "answer": "A",
      "id": 19,
      "serial_in_topic": 19
    },
    {
      "topic": "interest",
      "q_num": 20,
      "question": "২৫/৪% হার সুদে কত সমেয় ৯৬ টাকার সুদ ১৮ টাকা হয়?",
      "options": {
        "a": "২বছর",
        "b": "১বছর",
        "c": "৩বছর",
        "d": "৫বছর",
        "e": "None of These"
      },
      "answer": "C",
      "id": 20,
      "serial_in_topic": 20
    },
    {
      "topic": "interest",
      "q_num": 21,
      "question": "সুদের হার কত হলে ১০০ টাকা সরল সুদে ৮ বছরে দ্বিগুন হবে?",
      "options": {
        "a": "১২.৫%",
        "b": "১২%",
        "c": "১০%",
        "d": "১৮%",
        "e": "None of These"
      },
      "answer": "A",
      "id": 21,
      "serial_in_topic": 21
    },
    {
      "topic": "interest",
      "q_num": 22,
      "question": "এক ব্যক্তি ১০০০০০টাকা বার্ষিক ১৫% হারে মুনাফায় বিনিয়োগ করলোে ২ বছরে কত টাকা মুনাফা পাবে?",
      "options": {
        "a": "১৫০০০টাকা",
        "b": "২৫০০০টাকা",
        "c": "৩০০০০টাকা",
        "d": "৩২০০০টাকা",
        "e": "None of These"
      },
      "answer": "C",
      "id": 22,
      "serial_in_topic": 22
    },
    {
      "topic": "interest",
      "q_num": 23,
      "question": "বার্ষিক ৬% হারে ৯মাসে ১০০০০ টাকার সুদ কত?",
      "options": {
        "a": "৫০০টাকা",
        "b": "৪৫০টাকা",
        "c": "৬০০টাকা",
        "d": "৬৫০টাকা",
        "e": "None of These"
      },
      "answer": "B",
      "id": 23,
      "serial_in_topic": 23
    },
    {
      "topic": "interest",
      "q_num": 24,
      "question": "৫০০ টাকার ৪ বছরের সুদ এবং ৬০০ টাকার ৫ বছরের সুদ একত্রে ৭৫০ টাকা হলে সুদের হার কত হবে?",
      "options": {
        "a": "১৫%",
        "b": "২০%",
        "c": "১২%",
        "d": "১৮%",
        "e": "None of These"
      },
      "answer": "A",
      "id": 24,
      "serial_in_topic": 24
    },
    {
      "topic": "interest",
      "q_num": 25,
      "question": "এক ব্যক্তি ১৫০০০ টাকা ব্যাংকে জমা করে বছরে সুদ বাব ১২৭৫ টাকা আয় করে। ঐ ব্যাংকে বছরে সুদের হার কত?",
      "options": {
        "a": "৭%",
        "b": "৭.৫%",
        "c": "৮.৫%",
        "d": "৬.৫%",
        "e": "None of These"
      },
      "answer": "C",
      "id": 25,
      "serial_in_topic": 25
    },
    {
      "topic": "interest",
      "q_num": 26,
      "question": "শতকরা বার্ষিক ২৫/২ টাকা হার সুদে কত টাকার ৫ বছরের সুদ ৫০০ টাকা হবে?",
      "options": {
        "a": "৭৫০টাকা",
        "b": "৭০০টাকা",
        "c": "৮৫০টাকা",
        "d": "৮০০টাকা",
        "e": "None of These"
      },
      "answer": "D",
      "id": 26,
      "serial_in_topic": 26
    },
    {
      "topic": "interest",
      "q_num": 27,
      "question": "বার্ষিক শতকরা মুনাফার হার ৬ টাকা হলে ৮৫০ টাকার কত বছরে মুনাফা ২২৫ টাকা হবে?",
      "options": {
        "a": "৩ ভছর",
        "b": "৪ বছর",
        "c": "৫ বছর",
        "d": "২ বছর",
        "e": "None of These"
      },
      "answer": "C",
      "id": 27,
      "serial_in_topic": 27
    },
    {
      "topic": "profit_loss",
      "q_num": 1,
      "question": "যদি কখগ কোম্পানীর প্রতিটি স্টকের দাম ২৫টাকা থেকে ২১ টাকায় নেমে আসে তাহলে দাম হ্রাসের হার কত",
      "options": {
        "a": "৪",
        "b": "৮",
        "c": "১২",
        "d": "১৬"
      },
      "answer": "D",
      "id": 28,
      "serial_in_topic": 1
    },
    {
      "topic": "profit_loss",
      "q_num": 2,
      "question": "একটা বুক সেলফ বিক্রি হচ্ছিল মূল১২৫ ডলার। বড় ধরনের বিক্রি শুরু হওয়ার আগে ২০% মূল্যবৃদ্ধি করা হলো এবং পরে আবার ৩০% ছাড় দেওয়া হলো তাহলে বর্তমানে ঐ বুক সেলফ এর বিক্রয় মূল্য কত দাঁড়িয়েছে?",
      "options": {
        "a": "১০৫",
        "b": "১০৯",
        "c": "১১২.৫",
        "d": "১১২.৭৫"
      },
      "answer": "A",
      "id": 29,
      "serial_in_topic": 2
    },
    {
      "topic": "profit_loss",
      "q_num": 3,
      "question": "প্রতি একক পণ্যের দাম ২০% বৃদ্ধি পেল। এতে প্রতি একক পণ্যের দাম পাড়লো ১.২৫ টাকা। দাম বাড়ার পূর্বে ঐ পণ্যের প্রতি এককের দাম কত ছিল?",
      "options": {
        "a": "৫.০০",
        "b": "৬.২৫",
        "c": "৭.৫০",
        "d": "৮.৭৫"
      },
      "answer": "A",
      "id": 30,
      "serial_in_topic": 3
    },
    {
      "topic": "profit_loss",
      "q_num": 4,
      "question": "একজন খুচরা বিক্রেতা ৭৫ ডলারে পাইকারী বিক্রেতার কাছ থেকে ১টা রেডিও কিনলোো। এরপর তিনি রেডিওর দাম ১/৩ বৃদ্ধি করলোো এবং এর পরে ২০% ছােড় তা বিক্রি করে দিলো। তার কত লাভ হলো?",
      "options": {
        "a": "৫ ডলার",
        "b": "৬.৬৭ডলার",
        "c": "৭.৫ডলার",
        "d": "১৩.৩৩ডলার"
      },
      "answer": "A",
      "id": 31,
      "serial_in_topic": 4
    },
    {
      "topic": "profit_loss",
      "q_num": 5,
      "question": "একজন ব্যবসাযী প্রত্যেক ডজন ডিম ক্রয় করে ক টাকায় এবং বিক্রয় করে প্রত্যেক পিছ ক/৬ টাকায় তবে লাভ কত",
      "options": {
        "a": "২০%",
        "b": "৫০%",
        "c": "৬০%",
        "d": "১০০%"
      },
      "answer": "D",
      "id": 32,
      "serial_in_topic": 5
    },
    {
      "topic": "profit_loss",
      "q_num": 6,
      "question": "An antique dealer bought an old clock for $30 and sold it for $40. He later bought it back for $50 and then resold it for $60. What is the outcome?",
      "options": {
        "a": "$25loss",
        "b": "$20profits",
        "c": "$25profits",
        "d": "$20loss"
      },
      "answer": "B",
      "id": 33,
      "serial_in_topic": 6
    },
    {
      "topic": "profit_loss",
      "q_num": 7,
      "question": "যদি ৪টি আপেল বিক্রি করা হয় ৫টি আপেলের ক্রয়মূল্য সমানে, তবে কত লাভ বা ক্ষতি হবে?",
      "options": {
        "a": "২০%",
        "b": "২৫%",
        "c": "৩০%",
        "d": "৫০%"
      },
      "answer": "A",
      "id": 34,
      "serial_in_topic": 7
    },
    {
      "topic": "profit_loss",
      "q_num": 8,
      "question": "A trader makes a profile equal to the selling price of 75 articles when he sold 100 of the articles. What % profit did he make in the transaction",
      "options": {
        "a": "1%",
        "b": "2%",
        "c": "3%",
        "d": "2%"
      },
      "answer": "A",
      "id": 35,
      "serial_in_topic": 8
    },
    {
      "topic": "profit_loss",
      "q_num": 9,
      "question": "আরিফ প্রত্যেক ডজন কলম ২৫০ টাকা দরে ৯৬০ ডজন কলম ◌্রয় করে এবং প্রত্যেক পিছ বিক্রয় করে ২৫ টাকা করে। তবে তার মোট লাভ বের কর?",
      "options": {
        "a": "৫০",
        "b": "৯৬০০",
        "c": "৪৮০০০",
        "d": "৯৬০০০"
      },
      "answer": "C",
      "id": 36,
      "serial_in_topic": 9
    },
    {
      "topic": "profit_loss",
      "q_num": 10,
      "question": "A company makes a profit of 6% on its first Tk 1000 of sales each days, and 5% on al sales in excess of Tk.1000 for that day. How many takes in profit will the company make on a day when sales are S t",
      "options": {
        "a": "0.05S",
        "b": "0.06S",
        "c": "110",
        "d": "10+0.5S"
      },
      "answer": "D",
      "id": 37,
      "serial_in_topic": 10
    },
    {
      "topic": "profit_loss",
      "q_num": 11,
      "question": "A share of stock in ACI Company cost D taka on january 1,2009. One year later, a share increased to Q takes The fraction by which the cost of a share of stock has increased in the year is-",
      "options": {
        "a": "D/Q",
        "b": "\\(D-Q\\/Q",
        "c": "\\(Q-D\\",
        "d": "Q/D"
      },
      "answer": "C",
      "id": 38,
      "serial_in_topic": 11
    },
    {
      "topic": "profit_loss",
      "q_num": 12,
      "question": "Eggs cost Tk 0.90 a dozen. Peppers cost Tk 0.20 each. An omelet consists of 3 eggs and 1/4 of a pepper. How much will the ingredients for 8 omelets cost?",
      "options": {
        "a": "Tk 0.90",
        "b": "Tk 1.30",
        "c": "Tk 1.80",
        "d": "Tk 2.20"
      },
      "answer": "D",
      "id": 39,
      "serial_in_topic": 12
    },
    {
      "topic": "profit_loss",
      "q_num": 13,
      "question": "If Tk. 500 were invested for 8 years as the interest of 6% compounded quarterly, then what will be the compunded interest?",
      "options": {
        "a": "704",
        "b": "4047",
        "c": "797",
        "d": "407.4"
      },
      "answer": "C",
      "id": 40,
      "serial_in_topic": 13
    },
    {
      "topic": "profit_loss",
      "q_num": 14,
      "question": "A steel mill produces 180 tons of steel per month. Raw materials cost for each ton of production is Tk. 1200. Other expenses of that mill are Tk. 90000 in each month, What should be the selling price",
      "options": {
        "a": "1870",
        "b": "2021",
        "c": "1877",
        "d": "1888"
      },
      "answer": "A",
      "id": 41,
      "serial_in_topic": 14
    },
    {
      "topic": "profit_loss",
      "q_num": 15,
      "question": "ক একটি দ্রব্য ১২.৫% লোকসানে বিক্রি করে। যদি সে এটি ৩০টাকা বেশি বিক্রি করে। যেটি সে বিক্রি করতে চেেয়ছিল। সে ২৫% লাভ করে। সে কত টাকা ব্যেয় দ্রব্যটি ক্রয় করেছিল?",
      "options": {
        "a": "৭০",
        "b": "৭২",
        "c": "৮০",
        "d": "৯০"
      },
      "answer": "C",
      "id": 42,
      "serial_in_topic": 15
    },
    {
      "topic": "profit_loss",
      "q_num": 16,
      "question": "রুমানা গত বছর একটি চশমা এবং একটি ক্যামেরা ক্রয় করেছিল। এই বছর সে এগুলো প্রত্যেকটি ২০০০ টাকা করে বিক্রি করে। সে চশমায় ২৫% লাভ এবং ক্যামেরায় ২৫% লোকসান হয় তবে তার মোট লাভ বা ক্ষতি কত?",
      "options": {
        "a": "২৫৫.২২",
        "b": "২২২২.২",
        "c": "২৬৬.৬৭",
        "d": "১৮৮.৯৯"
      },
      "answer": "C",
      "id": 43,
      "serial_in_topic": 16
    },
    {
      "topic": "profit_loss",
      "q_num": 17,
      "question": "XYZ Tea Company mixes 2 varieties of tea in the ratio of 2:5 and sells the mixture at Tk. 40 per kg. If the cost of 2 varieties are Tk. 45 and Tk 31 per kg respectively, calculate the profit of the co",
      "options": {
        "a": "200",
        "b": "100",
        "c": "400",
        "d": "500"
      },
      "answer": "D",
      "id": 44,
      "serial_in_topic": 17
    },
    {
      "topic": "profit_loss",
      "q_num": 18,
      "question": "A fruit vendor pruchased 35 dozens of apple at Tk 10 per dozen. Out of those, two dozens got rotten and he sold 28 dozens at Tk. 12 per dozen. Remaining apples were sold by him for Tk 15 per dozen. Fi",
      "options": {
        "a": "55",
        "b": "62",
        "c": "61",
        "d": "60"
      },
      "answer": "C",
      "id": 45,
      "serial_in_topic": 18
    },
    {
      "topic": "profit_loss",
      "q_num": 19,
      "question": "What would be the marked price of an article if the cost was Tk 12.60 and the profit was 10% of the selling price",
      "options": {
        "a": "Tk 12.48",
        "b": "13.66",
        "c": "Tk 13.86",
        "d": "Tk 14"
      },
      "answer": "C",
      "id": 46,
      "serial_in_topic": 19
    },
    {
      "topic": "profit_loss",
      "q_num": 20,
      "question": "একটি ছাগল ২৭৬ টাকায় বিক্রয় করলোে ১৫% লঅভ হয়, ছাগলটির ক্রয়মূল্য কত?",
      "options": {
        "a": "২০০ টাকা",
        "b": "২২০টাকা",
        "c": "২৩০টাকা",
        "d": "২৪০টাকা"
      },
      "answer": "D",
      "id": 47,
      "serial_in_topic": 20
    },
    {
      "topic": "profit_loss",
      "q_num": 21,
      "question": "একটি ঘিড় ৫৬০ টাকায় বিক্রয় করায় ২০% ক্ষতি হলো। ঘিড়টির ক্রয়মূল্য কত",
      "options": {
        "a": "৫৮০টাকা",
        "b": "৫৪০টাকা",
        "c": "৭০০টাকা",
        "d": "৬০০টাকা"
      },
      "answer": "C",
      "id": 48,
      "serial_in_topic": 21
    },
    {
      "topic": "profit_loss",
      "q_num": 22,
      "question": "এক ব্যক্তি ৫০০ টাকায় একটি শািড় ক্রয় করে ৬মাস পরে ৫৫০ টাকায় বিক্রি করলো। তার বাৎসরিক শতকরা কত টাকা লাভ হল?",
      "options": {
        "a": "১০",
        "b": "১৫",
        "c": "২০",
        "d": "৩০"
      },
      "answer": "C",
      "id": 49,
      "serial_in_topic": 22
    },
    {
      "topic": "profit_loss",
      "q_num": 23,
      "question": "বার্ষিক শতকরা সুদের হার কত হলে ১৫০০ টাকার ৭ বছরের সুদ ৭৩৫ টাকা হবে?",
      "options": {
        "a": "৭%",
        "b": "৯%",
        "c": "৫%",
        "d": "৮%"
      },
      "answer": "A",
      "id": 50,
      "serial_in_topic": 23
    },
    {
      "topic": "profit_loss",
      "q_num": 24,
      "question": "বার্ষিক সুদের হার ৮% হলে, ১৭৫০ টাকার কত বছরের সুদ ৫৬০ টাকা হবে?",
      "options": {
        "a": "৮",
        "b": "৭",
        "c": "৪",
        "d": "৫"
      },
      "answer": "C",
      "id": 51,
      "serial_in_topic": 24
    },
    {
      "topic": "profit_loss",
      "q_num": 25,
      "question": "৫ টাকায়২টি করে কমলা কিনে ৩৫ টাকায় কয়টি কমলা বিক্রয় করলোে ৪০% লাভ হবে?",
      "options": {
        "a": "৮",
        "b": "১০",
        "c": "৯",
        "d": "৬"
      },
      "answer": "B",
      "id": 52,
      "serial_in_topic": 25
    },
    {
      "topic": "profit_loss",
      "q_num": 26,
      "question": "একটি ছাগল ১০% ক্ষতিতে বিক্রয় করা হল। বিক্রয় মূল্য আরো ৩৬ টাকা বেশি হলে ২৫/২% লাভ হত। ছাগলটির ক্রয় মূল্য কত টাকা?",
      "options": {
        "a": "১৪০",
        "b": "১৬০",
        "c": "১৩০",
        "d": "১৫০"
      },
      "answer": "B",
      "id": 53,
      "serial_in_topic": 26
    },
    {
      "topic": "profit_loss",
      "q_num": 27,
      "question": "একটি ব্যবসায় আকাশ, মেঘনা ও বৃষ্টি এর মূলধন যথাক্রমে ৩২,৪০ ও ৪৮ টাকা। ব্যবসায় মোট ৩০ টাকা লাভ হলে আকাশ এর লাভ কত টাকা?",
      "options": {
        "a": "৬",
        "b": "৭",
        "c": "৫",
        "d": "৮"
      },
      "answer": "D",
      "id": 54,
      "serial_in_topic": 27
    },
    {
      "topic": "profit_loss",
      "q_num": 28,
      "question": "একটি জিনিস ১২৬ টাকা ক্রয় করে কত টাকায় বিক্রয় করলোে ১০% লাভ হবে কত টাকা?",
      "options": {
        "a": "১৩৮.৬",
        "b": "১১৩.৪",
        "c": "১৪০",
        "d": "১৬০.২"
      },
      "answer": "A",
      "id": 55,
      "serial_in_topic": 28
    },
    {
      "topic": "profit_loss",
      "q_num": 29,
      "question": "একটি ছাগল ৯৬০ টাকায় বিক্রয় করায় ৪০ টাকা ক্ষিত হলো। শতকরা ক্ষতির হার কত",
      "options": {
        "a": "৫",
        "b": "৩",
        "c": "২",
        "d": "৪"
      },
      "answer": "D",
      "id": 56,
      "serial_in_topic": 29
    },
    {
      "topic": "profit_loss",
      "q_num": 30,
      "question": "একটি দ্রব্য ৯২ টাকায় বিক্রি করায় বিক্রেতার লাভ হয় ১৫%। দ্রব্যটির ক্রয়মূল্য কত টাকা?",
      "options": {
        "a": "৮০",
        "b": "৭৫",
        "c": "৮৫",
        "d": "৭০"
      },
      "answer": "A",
      "id": 57,
      "serial_in_topic": 30
    },
    {
      "topic": "profit_loss",
      "q_num": 31,
      "question": "১ টাকায় ৩টি করে আম ক্রয় করে ১ টাকায় ২টি করে আম বিক্রয় করলোে শতকরা কত লাভ হবে?",
      "options": {
        "a": "৩০%",
        "b": "৪০%",
        "c": "৫০%",
        "d": "৫৫%"
      },
      "answer": "C",
      "id": 58,
      "serial_in_topic": 31
    },
    {
      "topic": "profit_loss",
      "q_num": 32,
      "question": "ক্রয় মূল্য : বিক্রয় মূল্য=৫:৬ হলে লাভ কত?",
      "options": {
        "a": "২০%",
        "b": "২৮%",
        "c": "২৫%",
        "d": "২১%"
      },
      "answer": "A",
      "id": 59,
      "serial_in_topic": 32
    },
    {
      "topic": "profit_loss",
      "q_num": 33,
      "question": "একটি ছাতা ৩৭৮ টাকায় বিক্রয় করলোে যত ক্ষতি হয় ৪৫০ টাকায় বিক্রয় করলোে তার ৩গুণ লাভ হয়। ছাতাটির ক্রয় মূল্য কত টাকা?",
      "options": {
        "a": "৩৯০",
        "b": "৩৫০",
        "c": "৬৯৩",
        "d": "৩৯৬"
      },
      "answer": "D",
      "id": 60,
      "serial_in_topic": 33
    },
    {
      "topic": "profit_loss",
      "q_num": 34,
      "question": "কোন জিনিসের ক্রয় মূল্য বিক্রয়মূল্যের ৪/৫ ভাগ হলে শতকরা লাভের হার কত?",
      "options": {
        "a": "২০%",
        "b": "২৫%",
        "c": "৫০%",
        "d": "৪০%"
      },
      "answer": "B",
      "id": 61,
      "serial_in_topic": 34
    },
    {
      "topic": "profit_loss",
      "q_num": 35,
      "question": "একটি ইকোনো কলমের মূল্য ৫টাকা এবং একটি মেটাডোর কলমের মূল্য ৪টাকা। যদি ঐ দোকানদার ৫০০ টি কলম বিক্রি করে ২৩০০ টাকা পায়, তবে সে কয়টি ইকোনো কলম বিক্রয় করেছিল?",
      "options": {
        "a": "২৭৫",
        "b": "৩০০",
        "c": "৩৫০",
        "d": "৩১৫"
      },
      "answer": "B",
      "id": 62,
      "serial_in_topic": 35
    },
    {
      "topic": "profit_loss",
      "q_num": 36,
      "question": "একটি জিনিস বিক্রি করে বিক্রেতা ক্রয়মূল্যের ৩৫% লঅভ করেন। মোট ২৮০ টাকা লাভ হলে জিনিসটির বিক্রয় মূল্য কত টাকা?",
      "options": {
        "a": "৯৮০",
        "b": "১০৪০",
        "c": "১০৮০",
        "d": "১১০০"
      },
      "answer": "C",
      "id": 63,
      "serial_in_topic": 36
    },
    {
      "topic": "profit_loss",
      "q_num": 37,
      "question": "ক একটি জিনিস খ এর কাছে ২৫% লাভে বিক্রি করে। খ জিনিসটি গ-এর কাছে ক-এর ক্রয় মূল্যে বিক্রি করে। খ- এর শতকরা কত ক্ষতি হল?",
      "options": {
        "a": "১৬%",
        "b": "২০%",
        "c": "২২%",
        "d": "২৫%"
      },
      "answer": "B",
      "id": 64,
      "serial_in_topic": 37
    },
    {
      "topic": "profit_loss",
      "q_num": 38,
      "question": "একটি জিনিস বিক্রি করে বিক্রেতা ক্রয়মূল্যের ৩৫% লঅভ করেন। মোট ২৮০ টাকা লাভ হলে জিনিসটির ক্রয় মূল্য কত টাকা?",
      "options": {
        "a": "৭০০টাকা",
        "b": "৮০০টাকা",
        "c": "৭৩০টাকা",
        "d": "৮৫০টাকা"
      },
      "answer": "B",
      "id": 65,
      "serial_in_topic": 38
    },
    {
      "topic": "profit_loss",
      "q_num": 39,
      "question": "একজন দোকান মালিক সাধারনত ৪০% লঅভ রেখে জিনিস বিক্রি করেন। ব্যবসা গুটিেয় ফেলার কারনে বতষমন মূল্যের ১০% কমে জিনিস বিক্রি শুরু করেন। এতে তার শতকরা লাভ কত?",
      "options": {
        "a": "২০%",
        "b": "২৫%",
        "c": "২২%",
        "d": "২৬%"
      },
      "answer": "D",
      "id": 66,
      "serial_in_topic": 39
    },
    {
      "topic": "profit_loss",
      "q_num": 40,
      "question": "একটি খাসি ১০% ক্ষতিতে বিক্রয় করলোে যে মূল্য পাওয়া যায়, ২০% লাভে বিক্রঢ করলোে তার চেেয় ১৩৫ টাকা বেশি পাওয়া যায়। খাসিটির ক্রয় মূল্য?",
      "options": {
        "a": "৪৫০",
        "b": "৪৩০",
        "c": "৪৮০",
        "d": "৪৭০"
      },
      "answer": "A",
      "id": 67,
      "serial_in_topic": 40
    },
    {
      "topic": "profit_loss",
      "q_num": 41,
      "question": "হোসেন চৌধুরী ১৫৩৬ টাকায় একটি মোবাইল বিক্রয় করায় ২০% ক্ষতি হল। যদি সে মোবাইলটি ২০০০ টাকা বিক্রয় করতো তবে কত টাকা লাভ কিংবা ক্ষতি হতো?",
      "options": {
        "a": "৩%লাভে",
        "b": "৪% ক্ষতি",
        "c": "২৫/৬% লাভে",
        "d": "১৬/৫%ক্ষতি"
      },
      "answer": "C",
      "id": 68,
      "serial_in_topic": 41
    },
    {
      "topic": "profit_loss",
      "q_num": 42,
      "question": "একটি দ্রব্য ১০০ টাকায় বিক্রয় করে এক ব্যক্তি ২০ টাকা লাভ করলো। তার শতকরা লাভ কত?",
      "options": {
        "a": "২৫%",
        "b": "২২%",
        "c": "২৭%",
        "d": "৩০%"
      },
      "answer": "A",
      "id": 69,
      "serial_in_topic": 42
    },
    {
      "topic": "profit_loss",
      "q_num": 43,
      "question": "একটি দ্রব্য ১০০ টাকায় বিক্রয় করে এক ব্যক্তি ২০ টাকা ক্ষতি করলো। তার শতকরা ক্ষতি কত?",
      "options": {
        "a": "২০টাকা",
        "b": "১৮টাকা",
        "c": "২২টাকা",
        "d": "১৬.৬৭টাকা"
      },
      "answer": "D",
      "id": 70,
      "serial_in_topic": 43
    },
    {
      "topic": "profit_loss",
      "q_num": 44,
      "question": "একজন ফল বিক্রেতার ৫% ফল পচে গেল এবং আরো ৫% ফল পরিবহনের সময় নষ্ট হয়। বাকী ফল শতকরা কত লাভে বিক্রয় করলোে মোটের উপর তার ২০% লাভ হবে?",
      "options": {
        "a": "১০০/৩%",
        "b": "২৫/২%",
        "c": "১৭%",
        "d": "১৫%"
      },
      "answer": "A",
      "id": 71,
      "serial_in_topic": 44
    },
    {
      "topic": "profit_loss",
      "q_num": 45,
      "question": "একজন দোকানদার তালিকাবদ্ধ মূল্যের উপর ৫% কমিশন দেয়। যে দ্রব্যের ক্রয়মূল্য ৭১২.৫০ টাকা, তালিকাতে তার মূল্য কত লিখিত হলে দোকানদার ১০০/৩% লাভ করবে?",
      "options": {
        "a": "১০০০টাকা",
        "b": "১১০০টাকা",
        "c": "১৪০০টাকা",
        "d": "১৫০০টাকা"
      },
      "answer": "A",
      "id": 72,
      "serial_in_topic": 45
    },
    {
      "topic": "percentage",
      "q_num": 1,
      "question": "দ্রব্যমূল্য ২৫% বৃদ্ধি পাওয়ার পর বৃদ্ধিপ্রাপ্ত মূল্যের শতকরা কত ভাগ হ্রাস পেলে তা পূর্বের অবস্থায় ফিরে আসবে?",
      "options": {
        "a": "৩১%",
        "b": "২০র",
        "c": "১৫%",
        "d": "১৮.৭৫",
        "e": "None of These"
      },
      "answer": "B",
      "id": 73,
      "serial_in_topic": 1
    },
    {
      "topic": "percentage",
      "q_num": 2,
      "question": "১২৫ এর ১২৫% সমান কত?",
      "options": {
        "a": "১৩১.২৫",
        "b": "১৫০",
        "c": "১৩৭.২৫",
        "d": "১৫৬.২৫",
        "e": "None of These"
      },
      "answer": "D",
      "id": 74,
      "serial_in_topic": 2
    },
    {
      "topic": "percentage",
      "q_num": 3,
      "question": "কোন সংখ্যাটি ৯৫০ এর ৩৬% নিদেষশ করে?",
      "options": {
        "a": "৩০০",
        "b": "৩৩০",
        "c": "৩৬০",
        "d": "৩৪২",
        "e": "None of These"
      },
      "answer": "D",
      "id": 75,
      "serial_in_topic": 3
    },
    {
      "topic": "percentage",
      "q_num": 4,
      "question": "একটি স্কুলের ১/৫ ছাত্র ছাত্রী এর কোন ভাই বোন নেই। বাকী ছাত্র ছাত্রীর মধ্যে ৪০% ছাত্র ছাত্রী ১ জন ভাই অথবা ১জন বোন আছে। মোট শতকরা কতভাগ ছাত্র ছাত্রীর ১ জনের বেশী ভাই বা বোন আছে?",
      "options": {
        "a": "৪৮",
        "b": "৬০",
        "c": "৮৮",
        "d": "৫৮",
        "e": "None of These"
      },
      "answer": "A",
      "id": 76,
      "serial_in_topic": 4
    },
    {
      "topic": "percentage",
      "q_num": 5,
      "question": "২০০৬ সালে কোন দ্রব্যের দাম ছিল ১০০ টাকা। প্রত্যেক বছর ঐ পন্যের দাম যদি ১০% বৃদ্ধি পায় তাহলে ২০০৬ সালে ঐ একই দ্রব্যের দাম কত হবে?",
      "options": {
        "a": "১২১",
        "b": "১২০",
        "c": "১১০",
        "d": "১৩০",
        "e": "None of These"
      },
      "answer": "A",
      "id": 77,
      "serial_in_topic": 5
    },
    {
      "topic": "percentage",
      "q_num": 6,
      "question": "যদি কোন শাটেষর দাম ৩৫০ থেকে ৭০০ টাকা হয় তাহলে পূবষমূল্য বর্তমান মূল্যের শতকরা কত ভাগ?",
      "options": {
        "a": "৬০",
        "b": "৫০",
        "c": "৭৫",
        "d": "২০০",
        "e": "None of These"
      },
      "answer": "D",
      "id": 78,
      "serial_in_topic": 6
    },
    {
      "topic": "percentage",
      "q_num": 7,
      "question": "কোন বিক্রেতা ক টাকায় প্রতি ডজন ডিম কনে ক/৬ টাকায় বিক্রি করে। তার শতকরা লাভ কত?",
      "options": {
        "a": "২০",
        "b": "৫০",
        "c": "৬০",
        "d": "১০০",
        "e": "None of These"
      },
      "answer": "D",
      "id": 79,
      "serial_in_topic": 7
    },
    {
      "topic": "percentage",
      "q_num": 8,
      "question": "তিন বন্ধু মিলে ১টা পিজা ভাগ করে খেল। টিম খেল ২/৬ ভাগ, কেট খেল ৩/৬ ভাগ তাহলে বাকী রইল কত?",
      "options": {
        "a": "১/৬",
        "b": "১/৩",
        "c": "১/২",
        "d": ".৫০",
        "e": "None of These"
      },
      "answer": "A",
      "id": 80,
      "serial_in_topic": 8
    },
    {
      "topic": "percentage",
      "q_num": 9,
      "question": "যদি একটি পণ্য ৩০ টাকা থেকে বেেড় ৪২ টাকা হয়, তাহলে মূল্য বৃদ্ধির শতকরা হার বের কর?",
      "options": {
        "a": "১২",
        "b": "২০",
        "c": "৪০",
        "d": "৪৫",
        "e": "None of These"
      },
      "answer": "A",
      "id": 81,
      "serial_in_topic": 9
    },
    {
      "topic": "percentage",
      "q_num": 10,
      "question": "দশমিক হিসবে নিচের কোনটি ৫% নিদেষশ করে?",
      "options": {
        "a": "০.০০৫",
        "b": "০.০৫",
        "c": "০.৫",
        "d": "৫",
        "e": "None of These"
      },
      "answer": "B",
      "id": 82,
      "serial_in_topic": 10
    },
    {
      "topic": "percentage",
      "q_num": 11,
      "question": "একটি শাটষ ও একটা প্যান্টের বর্তমান বিক্রয়মূল্য সমান। যদি শাটেষর মূল্য ৫% বৃদ্ধি পায় এবঙ প্যান্টের মূল্য ৩% হ্রাস পায় তাহলে ২টা শাটষ ও ৩টা প্যান্ট ক্রয় করতে শতকরা কত টাকা বেশি লাগবে?",
      "options": {
        "a": "২০",
        "b": "৫.৪",
        "c": "৩.৮",
        "d": "২.৪",
        "e": "None of These"
      },
      "answer": "A",
      "id": 83,
      "serial_in_topic": 11
    },
    {
      "topic": "percentage",
      "q_num": 12,
      "question": "৫এর ৩% কত?",
      "options": {
        "a": "৫/৪",
        "b": "৩/২০",
        "c": "৩/৫",
        "d": "৩/২০০",
        "e": "None of These"
      },
      "answer": "B",
      "id": 84,
      "serial_in_topic": 12
    },
    {
      "topic": "percentage",
      "q_num": 13,
      "question": "একজন রাসয়নবিদ ৩৫ মিলিগ্রাম রাসায়নিক নিেয় একটা পরীক্ষা করার কথা ছিল। কিন্তু সে মূলত ৩৬.৪ মিলিগ্রাম রাসায়নিক ব্যবহার করে ফেলেছিল। শতকরা হারে কত ভুল হেয়ছিল (০.০১% এর কাছাকাছি)",
      "options": {
        "a": "০.০৪%",
        "b": "৪.০০%",
        "c": "১.৪০%",
        "d": "৩.৮৫%",
        "e": "None of These"
      },
      "answer": "B",
      "id": 85,
      "serial_in_topic": 13
    },
    {
      "topic": "percentage",
      "q_num": 14,
      "question": "There are 40 socks in a drawer. 70% of the socks are red and the rest are blue. What is the minimum number of socks that must be taken from the drawer without looking in order to be certain that at le",
      "options": {
        "a": "2",
        "b": "14",
        "c": "18",
        "d": "20",
        "e": "None of These"
      },
      "answer": "B",
      "id": 86,
      "serial_in_topic": 14
    },
    {
      "topic": "percentage",
      "q_num": 15,
      "question": "যদি কোন বৃত্তের ব্যাসাদষ ৬% বৃদ্ধি পায় তবে বৃত্তের আওতা কত বৃদ্ধি পাবে।",
      "options": {
        "a": "০.৩৬%",
        "b": "৩.৬%",
        "c": "১২.৩৬%",
        "d": "৩৬%",
        "e": "None of These"
      },
      "answer": "C",
      "id": 87,
      "serial_in_topic": 15
    },
    {
      "topic": "percentage",
      "q_num": 16,
      "question": "A chemist was preparing a solution that should have included 35 milligrams of chemical. If she actually used 36.4 milligrams, what was her percentage error \\(to the nearest 0.01%\\",
      "options": {
        "a": "০.০৪%",
        "b": "৪.০০%",
        "c": "১.৪০%",
        "d": "৩.৮৫%",
        "e": "None of These"
      },
      "answer": "C",
      "id": 88,
      "serial_in_topic": 16
    },
    {
      "topic": "percentage",
      "q_num": 17,
      "question": "ক্ষ্র5 percent of 5ক্ষ্র5=",
      "options": {
        "a": "0.05",
        "b": "0.25",
        "c": "o.50",
        "d": "0.10",
        "e": "None of These"
      },
      "answer": "B",
      "id": 89,
      "serial_in_topic": 17
    },
    {
      "topic": "percentage",
      "q_num": 18,
      "question": "একটি গাড়ীর বিক্রয় মূল্য ১২, ৫৯০ টাকা যাহা আসল মূল্য এর ২০% ক্ষতিতে, তবে গািড়টি আসল বর্তমান",
      "options": {
        "a": "১৫৭৩৭.৫০",
        "b": "১৪৩১০.৪০",
        "c": "১৫২৯০.৭০",
        "d": "১৬৯৩৫.৮০",
        "e": "None of These"
      },
      "answer": "A",
      "id": 90,
      "serial_in_topic": 18
    },
    {
      "topic": "percentage",
      "q_num": 19,
      "question": "A merchant increased the original price of an item by 10% Then he reduces the new price by 10%, the final result in terms of the original price is-",
      "options": {
        "a": "no change",
        "b": "a decrease of 1%",
        "c": "an increase of 1%",
        "d": "an increase of 11%",
        "e": "None of These"
      },
      "answer": "B",
      "id": 91,
      "serial_in_topic": 19
    },
    {
      "topic": "percentage",
      "q_num": 20,
      "question": "১৬,২০ এর শতকরা কত অংশ?",
      "options": {
        "a": "৭০%",
        "b": "৬৫%",
        "c": "৪৫%",
        "d": "৮০%",
        "e": "None of These"
      },
      "answer": "D",
      "id": 92,
      "serial_in_topic": 20
    },
    {
      "topic": "percentage",
      "q_num": 21,
      "question": "০৫, ৬.৫ এর শতকরা কত অংশ?",
      "options": {
        "a": "০.১৩",
        "b": "০.০১৩",
        "c": "০.৩২৫",
        "d": "০.০০৩২৫",
        "e": "None of These"
      },
      "answer": "D",
      "id": 93,
      "serial_in_topic": 21
    },
    {
      "topic": "percentage",
      "q_num": 22,
      "question": "একজন বিক্রেতা ২ ডজন কলম ক্রয় করে প্রত্যেকটি ৩০ টাকা করে। সে ২/৩ অংশ বিক্রি করে ২৫% লাভে কিন্তু অস্বাভাবিকভাবে বাকি অংশ ৩০% লোকসানে বিক্রি করে। তবে তার লাভ বা লোকসান কত?",
      "options": {
        "a": "a loss of Tk30",
        "b": "a gain of Tk 48",
        "c": "a gain of Tk. 30",
        "d": "no profit no loss",
        "e": "None of These"
      },
      "answer": "B",
      "id": 94,
      "serial_in_topic": 22
    },
    {
      "topic": "percentage",
      "q_num": 23,
      "question": "A store is offering a 15% reduction of all regular prices such that the new price of a flat screen TV set is 680. What was the price in dollars of the TV set before the reduction?",
      "options": {
        "a": "800",
        "b": "775",
        "c": "830",
        "d": "none of them",
        "e": "None of These"
      },
      "answer": "A",
      "id": 95,
      "serial_in_topic": 23
    },
    {
      "topic": "percentage",
      "q_num": 24,
      "question": "২৪০ এর ১৫% কত?",
      "options": {
        "a": "৩০",
        "b": "৩৬",
        "c": "৪২",
        "d": "৪৮",
        "e": "None of These"
      },
      "answer": "B",
      "id": 96,
      "serial_in_topic": 24
    },
    {
      "topic": "percentage",
      "q_num": 25,
      "question": "The value of a certain stock declined from Tk. 250 per share to Tk. 150 per share. What was the percent decline in the value of a share?",
      "options": {
        "a": "20%",
        "b": "30%",
        "c": "40%",
        "d": "60%",
        "e": "None of These"
      },
      "answer": "C",
      "id": 97,
      "serial_in_topic": 25
    },
    {
      "topic": "percentage",
      "q_num": 26,
      "question": "If the price of a shirt increases from Tk. 500 to Tk. 800 the old price is what percent of the new price?",
      "options": {
        "a": "60%",
        "b": "62.5%",
        "c": "75%",
        "d": "160%",
        "e": "None of These"
      },
      "answer": "B",
      "id": 98,
      "serial_in_topic": 26
    },
    {
      "topic": "percentage",
      "q_num": 27,
      "question": "18 is approxithately what percent of 44?",
      "options": {
        "a": "41%",
        "b": "51%",
        "c": "34%",
        "d": "43%",
        "e": "None of These"
      },
      "answer": "A",
      "id": 99,
      "serial_in_topic": 27
    },
    {
      "topic": "percentage",
      "q_num": 28,
      "question": "যদি একটি পাত্রে ১৬টি পাথর কালো এবং ২৪টি পাথর লাল থাকে, তবে শতকরা কত অংশ পাথর পাত্রের মধ্যে লাল আছে?",
      "options": {
        "a": "৩৩.৩৩%",
        "b": "৪০%",
        "c": "৬০%",
        "d": "৬৬.৬৬%",
        "e": "None of These"
      },
      "answer": "C",
      "id": 100,
      "serial_in_topic": 28
    },
    {
      "topic": "percentage",
      "q_num": 29,
      "question": "In 1997 flower sales on St Valentines day were 6% of the total for the year. If flower sales on that day were 7200000 then what were the total flower sales for the whole year?",
      "options": {
        "a": "120000000",
        "b": "320000000",
        "c": "20000000",
        "d": "780000000",
        "e": "None of These"
      },
      "answer": "A",
      "id": 101,
      "serial_in_topic": 29
    },
    {
      "topic": "percentage",
      "q_num": 30,
      "question": "একটি গ্রাম ৪০% লোক ডায়াবেটিকে ভোগে, ২৫% কুষ্ঠ রোগে ভোগে এবং ১০% লোক উভয় রোগেই ভোগে। তবে শতকরা কত অংশ লোক এর কোন রোগেই ভোগে না?",
      "options": {
        "a": "৩০%",
        "b": "৩৫%",
        "c": "৪০%",
        "d": "৪৫%",
        "e": "None of These"
      },
      "answer": "D",
      "id": 102,
      "serial_in_topic": 30
    },
    {
      "topic": "percentage",
      "q_num": 31,
      "question": "১২ এর ২/৫% কত",
      "options": {
        "a": "২০",
        "b": "৩৫",
        "c": "৪০",
        "d": "কোনটিই নয়",
        "e": "None of These"
      },
      "answer": "D",
      "id": 103,
      "serial_in_topic": 31
    },
    {
      "topic": "percentage",
      "q_num": 32,
      "question": "যদি কোন পণ্যের দাম ২০ টাকা থেকে বেেড় ২৫ টাকা হয়। তবে শতকরা পণ্যের দাম কত বৃদ্ধি পাবে?",
      "options": {
        "a": "৫%",
        "b": "২০%",
        "c": "২৫%",
        "d": "৩০%",
        "e": "None of These"
      },
      "answer": "C",
      "id": 104,
      "serial_in_topic": 32
    },
    {
      "topic": "percentage",
      "q_num": 33,
      "question": "৫ এর ১.২% কত?",
      "options": {
        "a": "০.৬",
        "b": "০.০৬",
        "c": "০.০০৬",
        "d": "০.০০০৬",
        "e": "None of These"
      },
      "answer": "C",
      "id": 105,
      "serial_in_topic": 33
    },
    {
      "topic": "percentage",
      "q_num": 34,
      "question": "যদি একটি পাত্রে ১৫টি লাল ও ৪৫ টি কালো পাথর থাকে তবে কত অংশ পাথর পাত্রের মধ্যে কালো ছিল?",
      "options": {
        "a": "১৫%",
        "b": "২৫%",
        "c": "৪৫%",
        "d": "৭৫%",
        "e": "None of These"
      },
      "answer": "D",
      "id": 106,
      "serial_in_topic": 34
    },
    {
      "topic": "percentage",
      "q_num": 35,
      "question": "The price of a cycle is reduced by 25 percent. The new price is reduced by a further 20 percent. The two reductions together are equal to a single reduction of-",
      "options": {
        "a": "40%",
        "b": "45%",
        "c": "50%",
        "d": "55%",
        "e": "None of These"
      },
      "answer": "A",
      "id": 107,
      "serial_in_topic": 35
    },
    {
      "topic": "percentage",
      "q_num": 36,
      "question": "What is the total amount of your purchases if you bought 5 shirts at m and 2 more shirts at 50% off?",
      "options": {
        "a": "5m",
        "b": "6m",
        "c": "7m",
        "d": "7.5m",
        "e": "None of These"
      },
      "answer": "B",
      "id": 108,
      "serial_in_topic": 36
    },
    {
      "topic": "percentage",
      "q_num": 37,
      "question": "The cost of a camera at 20% discount is 100. What is the actual price?",
      "options": {
        "a": "125",
        "b": "225",
        "c": "150",
        "d": "250",
        "e": "None of These"
      },
      "answer": "A",
      "id": 109,
      "serial_in_topic": 37
    },
    {
      "topic": "percentage",
      "q_num": 38,
      "question": "৬% এর ৫% কত?",
      "options": {
        "a": "৩০",
        "b": "০.৩০",
        "c": "০.০০৩",
        "d": "০.০০০৩",
        "e": "None of These"
      },
      "answer": "C",
      "id": 110,
      "serial_in_topic": 38
    },
    {
      "topic": "percentage",
      "q_num": 39,
      "question": "In a certain school, 40% of all students are 8years old or younger. The number of the remaining students is 120. How many students are 8 years old or younger?",
      "options": {
        "a": "160",
        "b": "80",
        "c": "280",
        "d": "none of them",
        "e": "None of These"
      },
      "answer": "B",
      "id": 111,
      "serial_in_topic": 39
    },
    {
      "topic": "percentage",
      "q_num": 40,
      "question": "John invested 50000 party at 10% and party at 15%. His total income after a year was 7000. How much did he invest at the rate of 10%?",
      "options": {
        "a": "২০০/৩",
        "b": "৫০",
        "c": "২৫",
        "d": "৩৫",
        "e": "None of These"
      },
      "answer": "A",
      "id": 112,
      "serial_in_topic": 40
    },
    {
      "topic": "percentage",
      "q_num": 42,
      "question": "কোনটি ১ এর সবেচেেয় কাছাকাছি?",
      "options": {
        "a": "৫/(৫+০.০৫)",
        "b": "৫/(৫+০.০৫২)",
        "c": "৫/(৫+০.০৫)",
        "d": "৫/(৫+০.০৫)২",
        "e": "None of These"
      },
      "answer": "B",
      "id": 113,
      "serial_in_topic": 41
    },
    {
      "topic": "percentage",
      "q_num": 43,
      "question": "একই বই দতরি করতে প্রথম ১ হাজার কপি এ ব্যায় হয় ১০০০ টাকা এবং পরবতষী প্রত্যেক কপি দতরিতে খরচ হয় ক টাকা; যদি প্রথম ৮০০০ কপি দতরিতে মোট ৭২৩০ টাকা খরচ হয়, তবে খ সমান কত?",
      "options": {
        "a": "১.০০",
        "b": "০.৯০৩৭৫",
        "c": "০.৮৯",
        "d": "৮৯",
        "e": "None of These"
      },
      "answer": "B",
      "id": 114,
      "serial_in_topic": 42
    },
    {
      "topic": "percentage",
      "q_num": 44,
      "question": "A silo is filled to capacity with W pounds of wheat, Tats eat r pounds a day. After 15 days, what perrecentage of the silos capacity have the rats eaen.",
      "options": {
        "a": "25r/W",
        "b": "25r/100W",
        "c": "2500x\\(r/w\\",
        "d": "r/w",
        "e": "None of These"
      },
      "answer": "B",
      "id": 115,
      "serial_in_topic": 43
    },
    {
      "topic": "percentage",
      "q_num": 45,
      "question": "If you test 2 different light bulbs from a box of 100 bulbs that contains 1 defecteive bulb, what is the probability that both are defective",
      "options": {
        "a": "0",
        "b": "0.0001",
        "c": "1/9900",
        "d": "0.01",
        "e": "None of These"
      },
      "answer": "D",
      "id": 116,
      "serial_in_topic": 44
    },
    {
      "topic": "percentage",
      "q_num": 46,
      "question": "একটি ল্যাপটপের মূল্য তার ক্রয়মূল্যের ১২০% ঐ মূল্যের ১০% ক্ষতিতে এটি বিক্রয় হেয়ছিল। যদি ২৪০০ টাকা লাভ হয়, তবে ল্যাপটপের ক্রয়মূল্য কত ছিল?",
      "options": {
        "a": "২০০০০",
        "b": "২৪০০০",
        "c": "২৮০০০",
        "d": "৩২০০০",
        "e": "None of These"
      },
      "answer": "E",
      "id": 117,
      "serial_in_topic": 45
    },
    {
      "topic": "percentage",
      "q_num": 47,
      "question": "In a survey of the town Bogra, it was found that 65% of the people surveyed watched the nows on TV, 40% read a newspaper, and 25% read a newspaper and watched to news on TV, what perentage of the peop",
      "options": {
        "a": "6%",
        "b": "5%",
        "c": "10%",
        "d": "15%",
        "e": "None of These"
      },
      "answer": "E",
      "id": 118,
      "serial_in_topic": 46
    },
    {
      "topic": "percentage",
      "q_num": 48,
      "question": "নাফিজ তার বাবার সম্পত্তির ৩০% উত্তরাধিকারী। তার বাবার সম্পত্তি হতে ২০% কর পরিশোধ করার পর শতকরা কত অংশ তার বাবার সম্পত্তি নাফিজের নিজের?",
      "options": {
        "a": "২৪%",
        "b": "২০%",
        "c": "১৫%",
        "d": "১৮.৭৫%",
        "e": "None of These"
      },
      "answer": "A",
      "id": 119,
      "serial_in_topic": 47
    },
    {
      "topic": "percentage",
      "q_num": 49,
      "question": "একজন মোটরগাড়ী প্রস্তুতকারক সিদ্ধান্ত নিল তার উৎপাদনের ১০% হ্রাস করবে। পূর্বের ২০০৯ সালের জানুয়ারি শুরু থেকে ২০০৮ ডিসেম্বর এটি উৎপাদন করে ৩০০০ ইউনিট। তবে ২০০৯ সালের ফেব্রুয়ারী মাসে এটি কত ইউনিট উৎপাদন",
      "options": {
        "a": "২৫৩০",
        "b": "২৪৩০",
        "c": "২২৩৩",
        "d": "২৫৩৫",
        "e": "None of These"
      },
      "answer": "B",
      "id": 120,
      "serial_in_topic": 48
    },
    {
      "topic": "percentage",
      "q_num": 50,
      "question": "There are 30 socks in a drawer. 60% of the socks are red and the rest are blue. What is the minimum number of socks that must be taken from the drawer without looking in order to be certain that at le",
      "options": {
        "a": "20",
        "b": "21",
        "c": "22",
        "d": "25",
        "e": "None of These"
      },
      "answer": "A",
      "id": 121,
      "serial_in_topic": 49
    },
    {
      "topic": "percentage",
      "q_num": 51,
      "question": "A factory that employs 1000 assembly line workers pays each of these workers at a rate of Tk. 5 per hour for the for the first 40 hours worked during a week and 1.5 times that rate for the hours wouke",
      "options": {
        "a": "185000",
        "b": "180000",
        "c": "200000",
        "d": "150000",
        "e": "None of These"
      },
      "answer": "A",
      "id": 122,
      "serial_in_topic": 50
    },
    {
      "topic": "percentage",
      "q_num": 52,
      "question": "A jar contains 10 red marbles and 30 green marbles. How many red marbles nust be added to the jar in order to make the proportion of the red marbles 60%",
      "options": {
        "a": "25",
        "b": "30",
        "c": "35",
        "d": "40",
        "e": "None of These"
      },
      "answer": "C",
      "id": 123,
      "serial_in_topic": 51
    },
    {
      "topic": "percentage",
      "q_num": 53,
      "question": "Among the 400 Cadets in a graduating class, 30% were women and, of these, 20% became instructors. If the number of men, who became instructors, was twice the number of women who became Instructors, ho",
      "options": {
        "a": "0.17%",
        "b": "0%",
        "c": "0%",
        "d": "18.75",
        "e": "None of These"
      },
      "answer": "A",
      "id": 124,
      "serial_in_topic": 52
    },
    {
      "topic": "percentage",
      "q_num": 54,
      "question": "Mr Tareq is twice as much rich as Mr. Kamal. Mr. Kamal has 55% of the wealth of Mr. Toha. Mr. Haider has 60% of the wealth of Mr. Salam, who has 120% as much wealth as Mfr. Toha. Which person has the",
      "options": {
        "a": "Mr. Toha",
        "b": "Mr. Tareq",
        "c": "Mr. Kamal",
        "d": "Mr. Haider",
        "e": "None of These"
      },
      "answer": "C",
      "id": 125,
      "serial_in_topic": 53
    },
    {
      "topic": "percentage",
      "q_num": 55,
      "question": "In a store, umbrellas are sold for X dollar. It started raining so the manager immediately doubled the price. The next day was sunny day; so the manager put up a sign umbrellas are on Sale for 40% off",
      "options": {
        "a": "1.2x",
        "b": "1.5x",
        "c": "1.3x",
        "d": "1.5x",
        "e": "None of These"
      },
      "answer": "A",
      "id": 126,
      "serial_in_topic": 54
    },
    {
      "topic": "percentage",
      "q_num": 56,
      "question": "If the salary of an employee is reduced by 10% for his attendance and then increased by 10% on a pardon, how much does he lose?",
      "options": {
        "a": "2",
        "b": "1",
        "c": "4",
        "d": "5",
        "e": "None of These"
      },
      "answer": "B",
      "id": 127,
      "serial_in_topic": 55
    },
    {
      "topic": "percentage",
      "q_num": 57,
      "question": "Mr. Shammed sold two properties, X and Y for Tk 300000 each. She sold property X for 20% more than she paid for it and sold property Y for 20% less than she paid for it. If expenses are disregarded. W",
      "options": {
        "a": "20000",
        "b": "22000",
        "c": "25000",
        "d": "30000",
        "e": "None of These"
      },
      "answer": "C",
      "id": 128,
      "serial_in_topic": 56
    },
    {
      "topic": "percentage",
      "q_num": 58,
      "question": "A T-shirt sotre regularly sells all stock at a discount of 20% to 40%. If an additional 25% were deducated from the discount price during a special sale. What would be the lowest possible price of a T",
      "options": {
        "a": "7.1",
        "b": "7.5",
        "c": "7",
        "d": "7.2",
        "e": "None of These"
      },
      "answer": "D",
      "id": 129,
      "serial_in_topic": 57
    },
    {
      "topic": "percentage",
      "q_num": 59,
      "question": "সুমনা একজন মোটা মেেয়। তার ওজন রিনার ওজনের ২১০%, লিমনের ওজন লিজার ওজনের ৭০%। লিজার ওজন রিনার ওজনের দ্বিগুণ। তাহলে সুমনার ওজন লিমার ওজনের শতকরা কত অংশ?",
      "options": {
        "a": "১৫০",
        "b": "১৫১",
        "c": "১৫২",
        "d": "২৫৩",
        "e": "None of These"
      },
      "answer": "A",
      "id": 130,
      "serial_in_topic": 58
    },
    {
      "topic": "percentage",
      "q_num": 60,
      "question": "জিমের ওজন মারিকার ওজনের ১৪০%, ববের ওজন লি এর ওজনের ৯০% লি এর ওজন মারিকার ওজনের দ্বিগুণ। তবে জিমের ওজন ববের ওজনের শতকরা কত অংশ?",
      "options": {
        "a": "১২৮.৫৭",
        "b": "১২৯.২০",
        "c": "১৩০",
        "d": "১৩৫",
        "e": "None of These"
      },
      "answer": "A",
      "id": 131,
      "serial_in_topic": 59
    },
    {
      "topic": "percentage",
      "q_num": 61,
      "question": "একটি ঘনকের একটি কিনারা যেটি ৪ ইঞ্চি লম্বা। যদি কিনারা ২৫% বৃদ্ধি করা হয় তবে আকৃতি কত অংশ বৃদ্ধি পাবে?",
      "options": {
        "a": "২৫%",
        "b": "৪৮%",
        "c": "৭৩%",
        "d": "৯৫%",
        "e": "None of These"
      },
      "answer": "D",
      "id": 132,
      "serial_in_topic": 60
    },
    {
      "topic": "percentage",
      "q_num": 62,
      "question": "There are 50 students enrolled in business. Of the enrolled students 90% took the final exam. Two thirds of the students who took the final exam passed the final exam. How many students passed the fin",
      "options": {
        "a": "30",
        "b": "33",
        "c": "34",
        "d": "35",
        "e": "None of These"
      },
      "answer": "A",
      "id": 133,
      "serial_in_topic": 61
    },
    {
      "topic": "percentage",
      "q_num": 63,
      "question": "নিচের কোনটি ১৬০ এর ৮৫% এর সমান",
      "options": {
        "a": "১.৮৮",
        "b": "১৩.৬",
        "c": "১৩৬",
        "d": "১৮৮",
        "e": "None of These"
      },
      "answer": "C",
      "id": 134,
      "serial_in_topic": 62
    },
    {
      "topic": "percentage",
      "q_num": 64,
      "question": "তুমি পাত্রে একটি দ্রাবণ দতরি করতে ক বোতল কোকাকোলার সাথে খ বোতল পেপসি মিশ্রণ কর। তবে এই দ্রাবন দতরিতে কত অংশ কোকাকোলা ব্যবহৃত হেয়ছে?",
      "options": {
        "a": "ক/(ক-খ)%",
        "b": "১০০ক/(ক+খ)%",
        "c": "১০০ক/খ%",
        "d": "ক+খ/১০০%",
        "e": "None of These"
      },
      "answer": "B",
      "id": 135,
      "serial_in_topic": 63
    },
    {
      "topic": "percentage",
      "q_num": 65,
      "question": "Price of rice has increased by 15% from its original price. It has again increased by 15% from the new price. What is the gross increase of the price of rice from its original price?",
      "options": {
        "a": "0.32%",
        "b": "0.23%",
        "c": "0%",
        "d": "0.29%",
        "e": "None of These"
      },
      "answer": "A",
      "id": 136,
      "serial_in_topic": 64
    },
    {
      "topic": "percentage",
      "q_num": 66,
      "question": "What score did a student receive on his or her first examinationk, if the score of his/her other examination were 50%, 70% and 90% and his/her average on the four examinations was 75%?",
      "options": {
        "a": "1%",
        "b": "1%",
        "c": "1%",
        "d": "1%",
        "e": "None of These"
      },
      "answer": "E",
      "id": 137,
      "serial_in_topic": 65
    },
    {
      "topic": "percentage",
      "q_num": 67,
      "question": "কাপেড় মূল্য ২০% কমে গেলে, কোন ব্যাক্তি খরচ বৃদ্ধি না করেও কাপেড়র ব্যবহার শতকরা কত বৃদ্ধি করতে পাবেে?",
      "options": {
        "a": "২৫%",
        "b": "২০%",
        "c": "৩৩%",
        "d": "৪০%",
        "e": "None of These"
      },
      "answer": "A",
      "id": 138,
      "serial_in_topic": 66
    },
    {
      "topic": "percentage",
      "q_num": 68,
      "question": "যদি পেলের মূল্য ২৫% বৃদ্ধি পায়, তবে পেলের ব্যবহার শতকরা কত কমালে পেল বাবদ খরচ বৃদ্ধ পাবে না?",
      "options": {
        "a": "২৫%",
        "b": "৩৫%",
        "c": "২০%",
        "d": "১৫%",
        "e": "None of These"
      },
      "answer": "C",
      "id": 139,
      "serial_in_topic": 67
    },
    {
      "topic": "percentage",
      "q_num": 69,
      "question": "১৫০ এর ৮% সমান কত?",
      "options": {
        "a": "১৫",
        "b": "১৪",
        "c": "১২",
        "d": "১৭",
        "e": "None of These"
      },
      "answer": "C",
      "id": 140,
      "serial_in_topic": 68
    },
    {
      "topic": "percentage",
      "q_num": 70,
      "question": "৬৮০ এর ১১৫% সমান কত?",
      "options": {
        "a": "৬৭২",
        "b": "৭৮২",
        "c": "৮৮০",
        "d": "৭৮০",
        "e": "None of These"
      },
      "answer": "B",
      "id": 141,
      "serial_in_topic": 69
    },
    {
      "topic": "percentage",
      "q_num": 71,
      "question": "৩/৫ ও ৭/৮ কে শতকরায় প্রকাশ কর",
      "options": {
        "a": "৫৫% ও ৬০%",
        "b": "৮৭% ও ৬০%",
        "c": "৬০% ও ১৮৪/২%",
        "d": "৬০% ও ৮৭%",
        "e": "None of These"
      },
      "answer": "C",
      "id": 142,
      "serial_in_topic": 70
    },
    {
      "topic": "percentage",
      "q_num": 72,
      "question": "৫৫ ও ৪.৩৬ কে শতকরায় প্রকাশ কর।",
      "options": {
        "a": "৪৩৬% ও ৪০%",
        "b": "৪৫% ও ৪৩৬%",
        "c": "৫৫% ও ৫০%",
        "d": "৫৫% ও ৪৩৬%",
        "e": "None of These"
      },
      "answer": "D",
      "id": 143,
      "serial_in_topic": 71
    },
    {
      "topic": "percentage",
      "q_num": 73,
      "question": "৬৭৮ ও ৬.০৩৪৫ কে শতকরায় প্রকাশ কর",
      "options": {
        "a": "২৬.৭৮% , ৬০.৩৪%",
        "b": "২৬% , ৬০%",
        "c": "২৬৭.৮% , ৬০৩.৪৫%",
        "d": "২৬.৭৮% , ৬০.৩৪%",
        "e": "None of These"
      },
      "answer": "C",
      "id": 144,
      "serial_in_topic": 72
    },
    {
      "topic": "percentage",
      "q_num": 74,
      "question": "৬৪% এবং ২২৪সমস্ত১/৬% কে সামান্য ভগ্নাযশে প্রকাশ কর",
      "options": {
        "e": "None of These"
      },
      "answer": "C",
      "id": 145,
      "serial_in_topic": 73
    },
    {
      "topic": "percentage",
      "q_num": 75,
      "question": "১২৩সমস্ত১/৮% ও ৫৬.৭% কে দশমিক ভগ্নাংশে প্রকাশ কর",
      "options": {
        "a": "৫৬.৭৭ , ৫/৬৭",
        "b": "১২৩.২৫ , ৫৬.৬৭",
        "c": "১২ , ৫৬",
        "d": "১.২৩১২৫ , ০.৫৬৭",
        "e": "None of These"
      },
      "answer": "D",
      "id": 146,
      "serial_in_topic": 74
    },
    {
      "topic": "percentage",
      "q_num": 76,
      "question": "২৪,৪০ এর শতকরা কত অংশ?",
      "options": {
        "a": "৭০%",
        "b": "৮০%",
        "c": "৬০%",
        "d": "৫০%",
        "e": "None of These"
      },
      "answer": "C",
      "id": 147,
      "serial_in_topic": 75
    },
    {
      "topic": "percentage",
      "q_num": 77,
      "question": "৯০ কোন সংখ্যার ৭৫%",
      "options": {
        "a": "১০৫",
        "b": "১৪০",
        "c": "১০০",
        "d": "১২০",
        "e": "None of These"
      },
      "answer": "D",
      "id": 148,
      "serial_in_topic": 76
    },
    {
      "topic": "percentage",
      "q_num": 78,
      "question": "১৭:২০ কে শতকরায় প্রকাশ কর",
      "options": {
        "a": "৮৮%",
        "b": "৮৬%",
        "c": "৮০%",
        "d": "৮৫%",
        "e": "None of These"
      },
      "answer": "D",
      "id": 149,
      "serial_in_topic": 77
    },
    {
      "topic": "percentage",
      "q_num": 79,
      "question": "একটি রাশি অপর একটি রাশির ৫২% হলে, রাশি দুইটির অনুপাত কত?",
      "options": {
        "a": "১৩:২৫",
        "b": "২৫:১৩",
        "c": "১৩:২০",
        "d": "২০:২৫",
        "e": "None of These"
      },
      "answer": "A",
      "id": 150,
      "serial_in_topic": 78
    },
    {
      "topic": "percentage",
      "q_num": 80,
      "question": "১৪৪ কোন সংখ্যার ৪০%",
      "options": {
        "a": "১৬০",
        "b": "২৬০",
        "c": "৩৬০",
        "d": "৩৭০",
        "e": "None of These"
      },
      "answer": "C",
      "id": 151,
      "serial_in_topic": 79
    },
    {
      "topic": "percentage",
      "q_num": 81,
      "question": "৯৬ এর ১৩%=কত",
      "options": {
        "a": "১৪.১৩",
        "b": "১২.৪৮",
        "c": "১২.২৪",
        "d": "১১.৩৯",
        "e": "None of These"
      },
      "answer": "B",
      "id": 152,
      "serial_in_topic": 80
    },
    {
      "topic": "percentage",
      "q_num": 82,
      "question": "একটি হিসবাবিজ্ঞান বইেয়র প্রকৃত মূল্যের শতকরা ৮৫ ভাগ মূল্যে ৬৮ টাকায় বিক্রয় হলো। বইটির প্রকৃত মূল্য কত টাকা?",
      "options": {
        "a": "৭২",
        "b": "৬০",
        "c": "৮০",
        "d": "৯০",
        "e": "None of These"
      },
      "answer": "C",
      "id": 153,
      "serial_in_topic": 81
    },
    {
      "topic": "percentage",
      "q_num": 83,
      "question": "শতকরা বলতে কি বুঝায়?",
      "options": {
        "a": "একটি ভগ্নাংশ",
        "b": "একটি ভগ্নাংশ যার হার ১০০",
        "c": "একটি সম্পুণষ সংখ্যা",
        "d": "একটি ভগ্নাংশ হর ১০০ ও লব ১০০",
        "e": "None of These"
      },
      "answer": "B",
      "id": 154,
      "serial_in_topic": 82
    },
    {
      "topic": "percentage",
      "q_num": 84,
      "question": "নিচের কোন ভগ্নাংশটি ০.৫% এর সমতুল্য?",
      "options": {
        "a": "১/২০",
        "b": "১/২০০",
        "c": "১/৫০০",
        "d": "১/১০০",
        "e": "None of These"
      },
      "answer": "B",
      "id": 155,
      "serial_in_topic": 83
    },
    {
      "topic": "percentage",
      "q_num": 85,
      "question": "২৫/২% এর সমান ভগ্নাংশ কত হবে?",
      "options": {
        "a": "১/১৬",
        "b": "১/৮",
        "c": "১/৪",
        "d": "১/২৫",
        "e": "None of These"
      },
      "answer": "B",
      "id": 156,
      "serial_in_topic": 84
    },
    {
      "topic": "percentage",
      "q_num": 86,
      "question": "০২৩ এর ১% হচ্ছে",
      "options": {
        "a": "০২৩",
        "b": "০.০০২৩",
        "c": "০.০০০২৩",
        "d": "২.৩",
        "e": "None of These"
      },
      "answer": "C",
      "id": 157,
      "serial_in_topic": 85
    },
    {
      "topic": "percentage",
      "q_num": 87,
      "question": "৬৬সমস্ত২/৩%=কত",
      "options": {
        "a": "১/৩",
        "b": "১/৬",
        "c": "১/৮",
        "d": "২/৩",
        "e": "None of These"
      },
      "answer": "D",
      "id": 158,
      "serial_in_topic": 86
    },
    {
      "topic": "percentage",
      "q_num": 88,
      "question": "০২৫=কত",
      "options": {
        "a": "২%",
        "b": "৫%",
        "c": "০.২৫%",
        "d": "২.৫%",
        "e": "None of These"
      },
      "answer": "D",
      "id": 159,
      "serial_in_topic": 87
    },
    {
      "topic": "percentage",
      "q_num": 89,
      "question": "২৫ এর ৩০% কত?",
      "options": {
        "a": "৭.৫%",
        "b": "৬.৫",
        "c": "৬",
        "d": "৭",
        "e": "None of These"
      },
      "answer": "A",
      "id": 160,
      "serial_in_topic": 88
    },
    {
      "topic": "percentage",
      "q_num": 90,
      "question": "০৫ সংখ্যাটি ২৫ এর কত শতাংশ",
      "options": {
        "a": "০.২০",
        "b": "০.৪০",
        "c": "০.৩০",
        "d": "০.৫০",
        "e": "None of These"
      },
      "answer": "A",
      "id": 161,
      "serial_in_topic": 89
    },
    {
      "topic": "percentage",
      "q_num": 91,
      "question": "৯৬ এর ৮%=১/২৫ এর?",
      "options": {
        "a": "১.৮২",
        "b": "১.৫০",
        "c": "১৯২",
        "d": "১.৮০",
        "e": "None of These"
      },
      "answer": "C",
      "id": 162,
      "serial_in_topic": 90
    },
    {
      "topic": "percentage",
      "q_num": 92,
      "question": "৫/৪ কে শতকরায় প্রকার কর?",
      "options": {
        "a": "১২৫%",
        "b": "১০০%",
        "c": "৮০%",
        "d": "১৩০%",
        "e": "None of These"
      },
      "answer": "A",
      "id": 163,
      "serial_in_topic": 91
    },
    {
      "topic": "percentage",
      "q_num": 93,
      "question": "৩/১১ কে শতকরায় প্রকাশ কর",
      "options": {
        "a": "২৫সমস্ত৩/১০%",
        "b": "২৭সমস্ত৩/১১%",
        "c": "২৫%",
        "d": "২৭%",
        "e": "None of These"
      },
      "answer": "B",
      "id": 164,
      "serial_in_topic": 92
    },
    {
      "topic": "percentage",
      "q_num": 94,
      "question": "১৭সমস্ত১/৩% কে সাধারন ভগ্নাংশে রূপান্তর কর",
      "options": {
        "a": "১৩/২৫",
        "b": "১৬/৭০",
        "c": "১৮/৭৫",
        "d": "১৪/১৫",
        "e": "None of These"
      },
      "answer": "A",
      "id": 165,
      "serial_in_topic": 93
    },
    {
      "topic": "percentage",
      "q_num": 95,
      "question": "৬৬সমস্ত১/৩% কে সাধারণ ভগ্নাংশে রূপান্তর কত",
      "options": {
        "a": "১৯/১৮",
        "b": "১৮/৩৪",
        "c": "১৯৯/৩০",
        "d": "১৫/২৫",
        "e": "None of These"
      },
      "answer": "C",
      "id": 166,
      "serial_in_topic": 94
    },
    {
      "topic": "percentage",
      "q_num": 96,
      "question": "৪ এর ৪০% কত?",
      "options": {
        "a": "০.০১৬",
        "b": "০.১৬",
        "c": "০.৪",
        "d": "০.১৫",
        "e": "None of These"
      },
      "answer": "B",
      "id": 167,
      "serial_in_topic": 95
    },
    {
      "topic": "percentage",
      "q_num": 97,
      "question": "০২৫ এর ১% কত?",
      "options": {
        "a": "০.০২৫",
        "b": "০.০০২৫",
        "c": "০.০০০২৫",
        "d": "২.৫",
        "e": "None of These"
      },
      "answer": "C",
      "id": 168,
      "serial_in_topic": 96
    },
    {
      "topic": "percentage",
      "q_num": 98,
      "question": "একটি সংখ্যাকে ৬০ দ্বারা ভাগ করলোে ভাগফল হয় ৪.৬%। সংখ্যাটি কত?",
      "options": {
        "a": "২.৫০",
        "b": "২.২০",
        "c": "৩.৫০",
        "d": "২.৭৬",
        "e": "None of These"
      },
      "answer": "D",
      "id": 169,
      "serial_in_topic": 97
    },
    {
      "topic": "percentage",
      "q_num": 99,
      "question": "৮০ কোন সংখ্যার ৮০%",
      "options": {
        "a": "১১০",
        "b": "১৩০",
        "c": "১০০",
        "d": "১২০",
        "e": "None of These"
      },
      "answer": "C",
      "id": 170,
      "serial_in_topic": 98
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 5,
      "question": "৬ বছর আগে অনিতার বয়স ছিল বেন এর চেেয় ক গুণ বেশী। যদি আনিতার বয়স এখন ১৭ বছর হয় তাহলে বেন এর বর্তমান বয়স কত",
      "options": {
        "a": "১১/ক+৬",
        "b": "ক/১১+৬",
        "c": "১৭ক",
        "d": "১১.৫ক"
      },
      "answer": "B",
      "id": 171,
      "serial_in_topic": 1
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 6,
      "question": "৩ জন ছেলের মধ্যে ৪টি পুরস্কার মোট কতভাবে ভাগ করে দেওয়া সম্ভব যেখানে প্রত্যেক পুরস্কার পাবে",
      "options": {
        "a": "১২",
        "b": "৮১",
        "c": "২৫৬",
        "d": "কোনটিই নয়"
      },
      "answer": "D",
      "id": 172,
      "serial_in_topic": 2
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 7,
      "question": "আপনি ৩০০০ ডলার এককালীন দিেয় ১টা কার কিনলোেন। এরপর ২২৫ ডলাএরর ৬টি কিস্তি দিেয় বাকী টাকা শোধ করলোেন। আপনি তাহলে মোট কত ডলারে গাড়ীটি কিনলোেন?",
      "options": {
        "a": "৩৩৫০",
        "b": "৪৩৫০",
        "c": "৪৫৬০",
        "d": "৪২৫০"
      },
      "answer": "B",
      "id": 173,
      "serial_in_topic": 3
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 8,
      "question": "If a man walks W miles in H hours, and then rides R miles in the same length of time, what is his average rate for the entire trip?",
      "options": {
        "a": "\\(R+W\\",
        "b": "{2\\(R+W\\/H",
        "c": "\\(HW+R\\H",
        "d": "\\(R+W\\2H"
      },
      "answer": "D",
      "id": 174,
      "serial_in_topic": 4
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 9,
      "question": "The manager of cafeteria uses algebraic exressions to calculate the number of servings she can prepare with the amount of food she has in stock. If each can of spaghetti sauce contains 18 servings, wh",
      "options": {
        "a": "18+m",
        "b": "18-m",
        "c": "18/m",
        "d": "18xm"
      },
      "answer": "D",
      "id": 175,
      "serial_in_topic": 5
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 10,
      "question": "যদি ৮টি গাভী ৪দিনে ১৬কৌটা দুধ দেয় তাহলে ৪টি গাভীর ৪কৌটা দুধ দিতে কত দিন লাগবে?",
      "options": {
        "a": "২",
        "b": "৪",
        "c": "৮",
        "d": "১৬"
      },
      "answer": "A",
      "id": 176,
      "serial_in_topic": 6
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 11,
      "question": "লাইলা মেরীর চেেয় ২ বছরের ছোট। যদি মেরীর বর্তমান বয়স হয় ক বছর তাহলে দুই বছর আগে লাইলার বয়স কত ছিল?",
      "options": {
        "a": "ক+২",
        "b": "ক+৪",
        "c": "ক+২",
        "d": "ক-৪"
      },
      "answer": "D",
      "id": 177,
      "serial_in_topic": 7
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 12,
      "question": "২৬০০ টাকা তিন জনের মধ্যে এমনভাবে ভাগ করা হয় যাতে ক পায় খ এর দ্বিগুণ এবঙ খ পায় গ এর ১/১০ অংশ। গ কত টাকা পাবে?",
      "options": {
        "a": "১৮০০",
        "b": "২০০০",
        "c": "১৫৭৫",
        "d": "১৬২৫"
      },
      "answer": "B",
      "id": 178,
      "serial_in_topic": 8
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 13,
      "question": "A machine puts caps on C bottles in M minutes. How many hours will it take to put caps on B bottles?",
      "options": {
        "a": "60b/cm",
        "b": "b/60cm",
        "c": "bm/60c",
        "d": "60m/c"
      },
      "answer": "C",
      "id": 179,
      "serial_in_topic": 9
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 14,
      "question": "লি এই সপ্তাহে ২২ ঘন্টা কাজ করে ১৩২ টাকা। যদি যে পরবতষী সপ্তাহে সমান টাকায় ১৫ ঘন্টায় কাজ করে তবে সে কত টাকা আয় করবে?",
      "options": {
        "a": "৮৫",
        "b": "৯০",
        "c": "১১০",
        "d": "১১২"
      },
      "answer": "B",
      "id": 180,
      "serial_in_topic": 10
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 15,
      "question": "In a certain village, m liters of water are required per househod per month. At this rate, if there are n households in the village, how long \\(in month\\will p liters of water last",
      "options": {
        "a": "p/mn",
        "b": "npm",
        "c": "mp/n",
        "d": "mn/p"
      },
      "answer": "A",
      "id": 181,
      "serial_in_topic": 11
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 16,
      "question": "একটি ফেরী ২০টি বাস অথবা ৩২ টি গাড়ী বহন করতে পারে। যদি ফেরীতে ১৫টি বাস থাকে তবে আর কতটি গাড়ী ফেরীতে নিতে পাবেে",
      "options": {
        "a": "৬",
        "b": "৮",
        "c": "১২",
        "d": "১৫"
      },
      "answer": "B",
      "id": 182,
      "serial_in_topic": 12
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 17,
      "question": "জয় ক ঘন্টা কাজ করে পায় খ ডলার। যদি সে গ ঘন্টা কাজ করে তবে সে কত ডলার উপাজষন করতে পারে?",
      "options": {
        "a": "খগ/ক",
        "b": "ক/খগ",
        "c": "গ(কখ)",
        "d": "কোনটিই নয়"
      },
      "answer": "A",
      "id": 183,
      "serial_in_topic": 13
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 18,
      "question": "যদি ৬ জন শ্রমিক ৩ দিনে ৯টি কাজ করতে পারে, তবে ৪জন শ্রমিকের ১০টি কাজ করতে কত দিন সময় লাগবে?",
      "options": {
        "a": "৪",
        "b": "৫",
        "c": "৬",
        "d": "৭"
      },
      "answer": "B",
      "id": 184,
      "serial_in_topic": 14
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 19,
      "question": "যদি একটি গািড় ২০ ভ্রমন করে ১সেকেন্ডে, তবে এটির গতি প্রত্যেক ঘন্টায় কত কি.মি.",
      "options": {
        "a": "৪৪",
        "b": "৬৬",
        "c": "৮৮",
        "d": "কোনটিই নয়"
      },
      "answer": "D",
      "id": 185,
      "serial_in_topic": 15
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 20,
      "question": "কবির হাবিবের চেেয় দ্বিগুন বড় ক বছর তার বয়স হবে ৩/২। তবে হাবিবের বর্তমান বয়স কত",
      "options": {
        "a": "ক/৪",
        "b": "২ক/৩",
        "c": "৩ক/২",
        "d": "কোনটিই নয়"
      },
      "answer": "C",
      "id": 186,
      "serial_in_topic": 16
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 21,
      "question": "পিতা ও পুত্রের বয়সের যোগফল ১২০ বছর। পিতার বয়স পত্রের চেেয় ৩গুন বেশি। তাহলে পিতার বয়স কত?",
      "options": {
        "a": "৮০",
        "b": "৫৭",
        "c": "৭৫",
        "d": "৯০"
      },
      "answer": "D",
      "id": 187,
      "serial_in_topic": 17
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 22,
      "question": "বরিশাল এবং ফরিদপুরের দুরত্ব ১৮৫ মাইল। যদি একটি বাস ২ ঘন্টা ভ্রমন করে প্রথম ৮৫ মাইল, তবে শের্ ১০০ মাইল বাসটি ৫০ মাইল ঘন্টা বেগে ভ্রমণ করতে কত মিনিট সময় নেবে",
      "options": {
        "a": "৬০",
        "b": "৭৫",
        "c": "৯৪",
        "d": "১০২"
      },
      "answer": "D",
      "id": 188,
      "serial_in_topic": 18
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 23,
      "question": "Plane P takes off at 2:00 am and flles at a constant speed of Xmph. Plane Q takes off at 3:33 am and filles the same foute as plane P but travels at a constant speed of Ymph. Assumlng that Y is greate",
      "options": {
        "a": "1.5x/\\(x-y\\",
        "b": "1.5x/\\(y-x\\",
        "c": "1.5x/x",
        "d": "y-\\(y-x\\"
      },
      "answer": "B",
      "id": 189,
      "serial_in_topic": 19
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 24,
      "question": "একটি কেক দতরির জন্য ৩ কাপ ময়দার জন্য লাগে ২.৫ কাপ দুধ এবঙ এই কেক সেকার জন্য লাগে ১৪ কাপ ময়দা। তবে মোট কত কাপ দুধ প্রেয়াজন",
      "options": {
        "a": "১১.৬৭",
        "b": "১২.৫০",
        "c": "১১.৫০",
        "d": "১২"
      },
      "answer": "A",
      "id": 190,
      "serial_in_topic": 20
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 25,
      "question": "One inlet pipe filles an empty tank in 5 hours and the other pipe fills the same tank in 3 hours. How long will it take for both the pipes together to fill the tank",
      "options": {
        "a": "32minutes",
        "b": "1Hours",
        "c": "1Hour 52.5Minutes",
        "d": "1Hour 56Minutes"
      },
      "answer": "C",
      "id": 191,
      "serial_in_topic": 21
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 26,
      "question": "Rupa drove 650 miles at an average speed of 50 miles per hour. How many milles per hour faster would she have had to drive in order for the trip to have taken 1 hour less?",
      "options": {
        "a": "6.23",
        "b": "4.23",
        "c": "4.13",
        "d": "4.17"
      },
      "answer": "D",
      "id": 192,
      "serial_in_topic": 22
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 27,
      "question": "যদি এ্যানি একটি পান্ডুলিপি দতরী করতে পারে ১০ ঘন্টায়, ফারিয়া একই পান্ডুলিপি দতরী করতে পারে ৫ ঘন্টায়। যদি দুজনে মিলে এই পান্ডুলিপি দতরি করে তবে তারা কত সমেয় শের্ করতে পাবেে",
      "options": {
        "a": "২ঘন্টা ৩০মিনিট",
        "b": "৩ঘন্টা",
        "c": "৩ঘন্টা ২০মিনিট",
        "d": "৫ঘন্টা"
      },
      "answer": "C",
      "id": 193,
      "serial_in_topic": 23
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 28,
      "question": "A car is travelling on a straight highway. At 10 am \\(10 Oclock\\t passes a truck going in the same direction. The truck continues on the highway travelling at 50 miles per hour while the car travels",
      "options": {
        "a": "15",
        "b": "30",
        "c": "60",
        "d": "200"
      },
      "answer": "C",
      "id": 194,
      "serial_in_topic": 24
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 29,
      "question": "A man binds s sets of books in d days. If there are b books in a set, how many books does the man bind in one day?",
      "options": {
        "a": "d/bs",
        "b": "s/bd",
        "c": "bd/s",
        "d": "bs/d"
      },
      "answer": "D",
      "id": 195,
      "serial_in_topic": 25
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 30,
      "question": "If p Kg of potatoes cost d taka, how many Kg can I get for c paisa?",
      "options": {
        "a": "pc/100",
        "b": "100pc",
        "c": "100dpc",
        "d": "100d/pc"
      },
      "answer": "E",
      "id": 196,
      "serial_in_topic": 26
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 31,
      "question": "A car travels at the rate of 50Km per hour on the Dhaka Aricha highway. How many minutes will it take to travel 2/5 Km at this rate?",
      "options": {
        "a": "0.2",
        "b": "0.48",
        "c": "2.2",
        "d": "13.5"
      },
      "answer": "B",
      "id": 197,
      "serial_in_topic": 27
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 32,
      "question": "যদি ক জন একটি কাজ ১০দিনে করতে পারে তবে ১০ জন লোক একই কাজ কত দিনে করতে পারে?",
      "options": {
        "a": "১০/ক",
        "b": "১০০/ক",
        "c": "১০০০ক",
        "d": "ক"
      },
      "answer": "D",
      "id": 198,
      "serial_in_topic": 28
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 33,
      "question": "A car going 40 miles per hour set out on an 80 miles trip at 9.00 A.M. Exactly 10 minutes later, a second car left from the same place and followed the same route. How far in miles per hour, was the s",
      "options": {
        "a": "45",
        "b": "50",
        "c": "53",
        "d": "55"
      },
      "answer": "A",
      "id": 199,
      "serial_in_topic": 29
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 34,
      "question": "রহিম প্রতি ঘন্টায় সেলিম অপেক্ষা দ্বিগুণ পারিশ্রমিক পায়। করিম প্রতি ঘন্টায় রহিমের পারিশ্রমিকের ১/৩ অংশ পায়। তবে প্রতি ঘন্টায় সেলিম করিমের কত অংশ পায়?",
      "options": {
        "a": "২/৩",
        "b": "১/২",
        "c": "৩/২",
        "d": "৪/৩"
      },
      "answer": "C",
      "id": 200,
      "serial_in_topic": 30
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 35,
      "question": "Three valves, when opened individually, can drain the water from a certain tank in 3,4 and 5 minutes respectively. What is the greatest part of the tank that can be drained in one minute byopening jus",
      "options": {
        "a": "1/3",
        "b": "1/2",
        "c": "1/4",
        "d": "1/5"
      },
      "answer": "A",
      "id": 201,
      "serial_in_topic": 31
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 36,
      "question": "A taxicab charges Tk. 1.00 for the first one-fifth mile of a trip and Tk. 0.20 for each following one-fifth mile of part thereof. If a trip is 2.5 miles long, what is the fare?",
      "options": {
        "a": "3",
        "b": "4.5",
        "c": "3.3",
        "d": "4"
      },
      "answer": "C",
      "id": 202,
      "serial_in_topic": 32
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 37,
      "question": "A car owner purcheased 200 liters of petrol at Tk. 56 per liter The price of the petrol used in 1 hour of driving is Tk. 40. How many hours can he drive with 200 liters of petrol",
      "options": {
        "b": "1.5 hours",
        "c": "3hours",
        "d": "1.4hours",
        "e": "2hours"
      },
      "answer": "C",
      "id": 203,
      "serial_in_topic": 33
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 38,
      "question": "An emergency vehicle travels 10 kilometers at a speed of 50 kilometers per hour. How fast must the vehicle travel on the return trip if the round trip travel time is to be 20 minutes",
      "options": {
        "a": "72km",
        "b": "80km",
        "c": "75km",
        "d": "70km"
      },
      "answer": "C",
      "id": 204,
      "serial_in_topic": 34
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 39,
      "question": "১৫টি কলমালেবুর দাম ৬০ টাকা হলে, ২১টি কমলালেবুর দাম কত?",
      "options": {
        "a": "৮০",
        "b": "৭৪",
        "c": "৮৪",
        "d": "৭৫"
      },
      "answer": "C",
      "id": 205,
      "serial_in_topic": 35
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 40,
      "question": "১৫ কেজি চাল ২২৫ টাকায় পাওয়া যায়। ৩০০ টাকায় কত কেজি চাল পাওয়া যাবে?",
      "options": {
        "a": "২০",
        "b": "২৮",
        "c": "৩০",
        "d": "২৫"
      },
      "answer": "A",
      "id": 206,
      "serial_in_topic": 36
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 41,
      "question": "যদি কাচ পানি অপেক্ষা ২.৫ গুণ বেশি ভারী হয়। তবে ৪০ ঘন সেন্টিমিটার কাচের ওজন কত?",
      "options": {
        "a": "১০০গ্রাম",
        "b": "২৫০গ্রাম",
        "c": "৬০০গ্রাম",
        "d": "২০০গ্রাম"
      },
      "answer": "A",
      "id": 207,
      "serial_in_topic": 37
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 42,
      "question": "Price of p pencils is c cents How many pencils will be available in d dollar?",
      "options": {
        "a": "dp/100c",
        "b": "100cd/p",
        "c": "100dp/c",
        "d": "100cp/c"
      },
      "answer": "C",
      "id": 208,
      "serial_in_topic": 38
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 43,
      "question": "৮৪ কেজি ধাতু গলিেয় ৪০০০০ পিন দতরি করা হলে প্রতিটি পিনের ওজন কত কেজি হবে?",
      "options": {
        "a": "০.০২১",
        "b": "০.২১",
        "c": "০.০০২১",
        "d": "০.৪৭"
      },
      "answer": "C",
      "id": 209,
      "serial_in_topic": 39
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 44,
      "question": "১৫ জন লোক একটি কাজ শের্ করে ৩ ঘন্টায়। ৫জন লোক ঐ কাজ শের্ করতে কত ঘন্টা সময় লাগবে?",
      "options": {
        "a": "৫",
        "b": "৭",
        "c": "৯",
        "d": "৪"
      },
      "answer": "C",
      "id": 210,
      "serial_in_topic": 40
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 45,
      "question": "একটি কার ওয়াশ মেশিন ৮টি কার ওয়াশ করে ১৮ মিনিটে। এ হারে ৩ ঘন্টায় কয়টি কার ওয়াশ করা যাবে?",
      "options": {
        "a": "১০",
        "b": "৭২",
        "c": "৮০",
        "d": "১২০"
      },
      "answer": "C",
      "id": 211,
      "serial_in_topic": 41
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 46,
      "question": "পিতার বয়স পুত্রের বয়সের দ্বিগুণ অপেক্ষা ২ বছর বেশি। পিতার বয়স ৬২ বছর হলে পুত্রের বয়স কত?",
      "options": {
        "a": "৩০",
        "b": "৩৭",
        "c": "৩৪",
        "d": "২৮"
      },
      "answer": "A",
      "id": 212,
      "serial_in_topic": 42
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 47,
      "question": "১৬ জন লোক ১টি কাজ ৬দিনে সম্পন্ন করে। কাজটি ৪দিনে সম্পন্ন করতে কত জন লোক লাগবে?",
      "options": {
        "a": "১৮",
        "b": "২৪",
        "c": "১২",
        "d": "৩২"
      },
      "answer": "B",
      "id": 213,
      "serial_in_topic": 43
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 48,
      "question": "ঢাকা থেকে কোন স্টেশনের দুরত্ব ১২০ কিলোমিটার। ঢাকা থেকে যাত্রা করে একটি টে্রন ঘন্টায় ৪৫ কিলোমিটার বেগে চলে ঐ স্টেশনে পৌছাতে কত সময় লাগবে?",
      "options": {
        "a": "২ঘন্টা",
        "b": "২ঘন্টা ৪০মিনিট",
        "c": "২ঘন্টা ৫৫মিনিট",
        "d": "২ঘন্টা ৫০মিনিট"
      },
      "answer": "B",
      "id": 214,
      "serial_in_topic": 44
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 49,
      "question": "তুর্ার সাহেব ১০০ টাকায় ২০ টাকা আয়কর দেন। তাকে ৫৫৫০ টাকায় কত আয়কর দিতে হবে?ঢাকা থেকে কোন স্টেশনের দুরত্ব ১২০ কিলোমিটার। ঢাকা থেকে যাত্রা করে একটি টে্রন ঘন্টায় ৪৫ কিলোমিটার বেগে চলে ঐ স্টেশনে পৌছাতে কত স",
      "options": {
        "a": "১৩০০টাকা",
        "b": "১১১০টাকা",
        "c": "১২০০টাকা",
        "d": "১১০০টাকা"
      },
      "answer": "B",
      "id": 215,
      "serial_in_topic": 45
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 50,
      "question": "১০০ জন লোক যে খাদ্য ১৫দিনে খেতে পারে, কতজন লোক সে খাদ্য ৬ দিনে খেতে পারে?",
      "options": {
        "a": "১৪২জন",
        "b": "১০০জন",
        "c": "১৭৫জন",
        "d": "২৫০জন"
      },
      "answer": "D",
      "id": 216,
      "serial_in_topic": 46
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 51,
      "question": "৩০জন লোক ২০দিনে যে কাজ করতে পারে, ২০জন লোক সে কাজ কত দিনে করতে পারে?",
      "options": {
        "a": "১৫",
        "b": "৩০",
        "c": "১৮",
        "d": "২৮"
      },
      "answer": "B",
      "id": 217,
      "serial_in_topic": 47
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 52,
      "question": "এক ব্যক্তি তার স্ত্রীর চেেয় ৩ বছরের বড় এবঙ তার স্ত্রীর বয়স তাদের ছেলের বয়সের ৪গুন। ৪ বছর পরে ছেলের বয়স ১২ হলে লোকটির বর্তমান বয়স কত?",
      "options": {
        "a": "৩৫",
        "b": "৪০",
        "c": "৩৮",
        "d": "৪৫"
      },
      "answer": "A",
      "id": 218,
      "serial_in_topic": 48
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 53,
      "question": "একটি ঘিড়তে ৬টার ঘন্টা ধ্বনি ঠিক ৬টায় শুরু করে বাজতে ৫ সেকেন্ড সময় লাগে। ঐ ঘিড়তে ১২টার ঘন্টা ধ্বনি বাজতে কত সেকেন্ড সময় লাগবে?",
      "options": {
        "a": "১২",
        "b": "১১",
        "c": "৯",
        "d": "১০"
      },
      "answer": "B",
      "id": 219,
      "serial_in_topic": 49
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 54,
      "question": "যদি ১০টি জাহাজের ১০দিনে ১০ট্যাংক পেল লাগে তবে ১টি জাহাজের ১ট্যাংক পেল দিেয় কতদিন চলবে",
      "options": {
        "a": "১",
        "b": "৫",
        "c": "১০",
        "d": "২০"
      },
      "answer": "C",
      "id": 220,
      "serial_in_topic": 50
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 55,
      "question": "ক সংখ্যক আমের দাম খ টাকা হলে, গ টাকায় কতটি আম পাওয়া যাবে?",
      "options": {
        "a": "গখ/ক",
        "b": "গক/খ",
        "c": "গ/কখ",
        "d": "খক/গ"
      },
      "answer": "B",
      "id": 221,
      "serial_in_topic": 51
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 56,
      "question": "জনাব তুহিন চৌধুরী ৭৩টি রোল ফিল্ম ক্রয় করেন, প্রতি রোল ফিল্মে তিনি ২৪টি ছবি নিতে পারেন। তিনি ৭৩টি রোল ফিল্মে মোট কতগুলো ছবি নিতে পাবেেন?",
      "options": {
        "a": "১৬৪২",
        "b": "১৬৫২",
        "c": "১৭৪২",
        "d": "১৭৫২"
      },
      "answer": "D",
      "id": 222,
      "serial_in_topic": 52
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 57,
      "question": "৩টি আপেলের মূল্য ১৯ সেন্ট। ১.৫২ ডলারে কতটি আপেল ক্রয় করা যাবে?",
      "options": {
        "a": "২২",
        "b": "২৪",
        "c": "২৩",
        "d": "২০"
      },
      "answer": "B",
      "id": 223,
      "serial_in_topic": 53
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 58,
      "question": "১টি গাড়ীর গতি সেকেন্ডে ৬০ ফুট। প্রতি ঘণ্টায় কত মাইল যাবে?",
      "options": {
        "a": "৪৪",
        "b": "৪৮",
        "c": "৪২",
        "d": "৪০.৯১"
      },
      "answer": "D",
      "id": 224,
      "serial_in_topic": 54
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 59,
      "question": "এক ব্যক্তি সম্পত্তির ২/৩ অংশ পুত্রকে এবং ১/৩ অংশ কন্যাকে দিলোেন। কন্যা পুত্র অপেক্ষা ১৫০০ টাকা কম গেল। সম্পুণষ সম্পত্তির মূল্য কত?",
      "options": {
        "a": "৩০০০",
        "b": "৪৫০০",
        "c": "৬০০০",
        "d": "৭৫০০"
      },
      "answer": "B",
      "id": 225,
      "serial_in_topic": 55
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 60,
      "question": "একটি রেসিপিতে তিনটি ডিম এবং দুই কাপ দুধ প্রেয়াজন। যদি উক্ত রেসিপিতে আটটি ডিম ব্যবহার করা হয় তবে কত কাপ দুধ প্রেয়াজন?",
      "options": {
        "a": "২৪/৫",
        "b": "১৬/৩",
        "c": "১১/২",
        "d": "২৯/৫"
      },
      "answer": "B",
      "id": 226,
      "serial_in_topic": 56
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 61,
      "question": "৬ ফুট দীর্ঘ বাশের ৪ফুট দীর্ঘ ছায়া হয়। একই সমেয় একটি গাছের ছায়া ৬৪ ফুট লম্বা। গাছটির উচ্চতা কত?",
      "options": {
        "a": "৯৬",
        "b": "৭২",
        "c": "১৯০",
        "d": "৪৪"
      },
      "answer": "A",
      "id": 227,
      "serial_in_topic": 57
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 62,
      "question": "একটি ফটোকপি মেশিন ১/৩ সেকেন্ডে ২টি ফটোকপি করে। একই হারে ইহা ৪ মিনিটে কতগুলো ফটোকপি করতে পাবেে?",
      "options": {
        "a": "১৪৪০",
        "b": "১৪৫০",
        "c": "১৪৮০",
        "d": "১৪৬০"
      },
      "answer": "A",
      "id": 228,
      "serial_in_topic": 58
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 63,
      "question": "১০৫ কেজি ডালের দাম ৪৩৩১.২৫ হলে, ৭০ কেজি ডালের দাম কত টাকা?",
      "options": {
        "a": "২৮৮৭.৫০",
        "b": "২৫৫",
        "c": "২৮৭৭.৫০",
        "d": "২৬০০"
      },
      "answer": "A",
      "id": 229,
      "serial_in_topic": 59
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 64,
      "question": "একজন কৃর্ক তার ৭০ একর জমি থেকে ৩১ কুইন্টাল ধান পেেয় থাকেন। ঐরুপ ১১২ একর জমি থেকে তিনি কত কুইন্টাল ধান পাবেন?",
      "options": {
        "a": "২৪২/৫",
        "b": "৪৫",
        "c": "২৪৮/৫",
        "d": "৪৯"
      },
      "answer": "C",
      "id": 230,
      "serial_in_topic": 60
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 65,
      "question": "২৭৫টি রুপার মুদ্রার ওজন ১১/৪ কেজি হলে, ৩২৫টি রুপার মুদ্রার ওজন কত?",
      "options": {
        "a": "৪",
        "b": "১৩/৪",
        "c": "৩",
        "d": "২১/৫"
      },
      "answer": "B",
      "id": 231,
      "serial_in_topic": 61
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 66,
      "question": "৫৫ জন লোক একটি কাজ ১৫ দিনে করতে পারে। ঐ কাজটি ২৫ দিনে শের্ করতে কত জন লোক প্রেয়াজন?",
      "options": {
        "a": "৩৩",
        "b": "৩৫",
        "c": "৩৪",
        "d": "৩৮"
      },
      "answer": "A",
      "id": 232,
      "serial_in_topic": 62
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 67,
      "question": "৩ কুইন্টাল চালে ৯ জন লোকের ৩০দিন চলে। ঐ চালে ২৫ জন লোক কত দিন চলবে?",
      "options": {
        "a": "৫৪/৫",
        "b": "৩১/২",
        "c": "১০",
        "d": "১৬"
      },
      "answer": "A",
      "id": 233,
      "serial_in_topic": 63
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 68,
      "question": "একটি ছাত্রাবাসে ৩০ জন ছাত্রের ১৫ দিনের খাদ্য মজুদ আছে। কেয়কজন নতুন ছাত্র ছাত্রাবাসে ভতিষ হওয়ায় ঐ খাদ্য ১০দিনে শের্ হেয় গেল কতজন নতুন ছাত্র ভতিষ হেয়ছে?",
      "options": {
        "a": "১৭",
        "b": "১৯",
        "c": "১৫",
        "d": "১৮"
      },
      "answer": "C",
      "id": 234,
      "serial_in_topic": 64
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 69,
      "question": "সে্রাতের প্রতিকুলে যেতে যে সময় লাগে, সে্রাতের অনুকুলে যেতে তার অধেষক সয় লাগে। যাতায়াতে যদি ২৪ ঘন্টা সময় লাগে তবে সে্রাতের অনুকুলে যেতে কত সময় লাগবে?",
      "options": {
        "a": "৪ঘন্টা",
        "b": "৬ঘন্টা",
        "c": "৮ঘন্টা",
        "d": "১২ঘন্টা"
      },
      "answer": "C",
      "id": 235,
      "serial_in_topic": 65
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 70,
      "question": "এক ব্যক্তির মোট সম্পত্তির ২/৩ অংশের মূল্য ৯০০০০টাকা, সম্পুণষ সম্পত্তির মূল্য কত?",
      "options": {
        "a": "১৩৫০০০টাকা",
        "b": "৬০০০০টাকা",
        "c": "১৫০০০০টাকা",
        "d": "১২০০০০টাকা"
      },
      "answer": "A",
      "id": 236,
      "serial_in_topic": 66
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 71,
      "question": "যে পরিমাণ চালে ২০০ জন লোকের ২০ সপ্তাহ চলে, তাতে কত জন লোকের ৮ সপ্তাহ চলবে?",
      "options": {
        "a": "৩০০",
        "b": "৪০০",
        "c": "৫০০",
        "d": "৬০০"
      },
      "answer": "C",
      "id": 237,
      "serial_in_topic": 67
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 72,
      "question": "কোন নৌকার গতি সে্রাতের অনুকূলে ঘন্টায় ১০ কিলোমিটার এবং সে্রাতের প্রতিকুলে ঘন্টায় ২ কিলোমিটার; সে্রাতের বেগ কত কি.মি?",
      "options": {
        "a": "৪",
        "b": "৩",
        "c": "৮",
        "d": "১২"
      },
      "answer": "A",
      "id": 238,
      "serial_in_topic": 68
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 73,
      "question": "তিনটি মেশিন একটি কাজ যথাক্রমে ৪,৫ এবং ৬ ঘন্টায় করতে পারে। দুটি মেশিন সবেষাচ্চ ক্ষমতায় কাজ করে এক ঘন্টায় কতটুকু কাজ করতে পারে?",
      "options": {
        "a": "১১/১৩অংশ",
        "b": "৯/২০অংশ",
        "c": "৩/৫অংশ",
        "d": "১১/১৫ অংশ"
      },
      "answer": "B",
      "id": 239,
      "serial_in_topic": 69
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 74,
      "question": "৫০মিটার ধীঘষ একটি টে্রন ঘন্টায় ৩৬কি.মি. বেগে চলে। রাস্তার পাশের একটি খুটিকে টে্রনটি কত সেকেন্ডে অতিক্রম করবে?",
      "options": {
        "a": "৫",
        "b": "১০",
        "c": "৬",
        "d": "৭"
      },
      "answer": "A",
      "id": 240,
      "serial_in_topic": 70
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 75,
      "question": "১০০ মিটার দীর্ঘ একটি টে্রনের গতিবেগ ৪৮ কি.মি.। ঐ টে্রনটি ২১ সেকেন্ডে একটি সেতু অতিক্রম করে। সেতুটির দদৈর্ঘ্য্য কত মিটার?",
      "options": {
        "a": "১৪০",
        "b": "১৬১",
        "c": "১৮০",
        "d": "১৫০"
      },
      "answer": "C",
      "id": 241,
      "serial_in_topic": 71
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 76,
      "question": "২৫০ মিটার দীর্ঘ একটি সেতু অতিক্রম করতে ১৫০ মিটার দীর্ঘ একটি টে্রনের ৩০ সেকেন্ড সময় লাগে। ৩০ মিটার দীর্ঘ প্লাটফরম অতিক্রম করতে টে্রনটির কত সেকেন্ড লাগবে?",
      "options": {
        "a": "২০",
        "b": "২২",
        "c": "২৮",
        "d": "২১"
      },
      "answer": "D",
      "id": 242,
      "serial_in_topic": 72
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 77,
      "question": "একটি টে্রন ঘন্টায় ৪৮ কি.মি. বেগে চলে ২২০ মিটার দীর্ঘ একটি প্লাটফরম ৩০ সেকেন্ডে অতিক্রম করে। টে্রনটির দদৈর্ঘ্য্য কত মিটার?",
      "options": {
        "a": "১৮০",
        "b": "১৫০",
        "c": "১৪০",
        "d": "১৬০"
      },
      "answer": "A",
      "id": 243,
      "serial_in_topic": 73
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 78,
      "question": "৩০ জন শ্রমিক কোন কাজ ২৪ দিনে সম্পন্ন করতে পারে। কাজ শুরুর ১২ দিন পর ১৫ জন শ্রমিক চলে গেলে বাকি শ্রমিক কতদিনে অবশিষ্ট কাজ সম্পন্ন করতে পাবেে?",
      "options": {
        "a": "২৭",
        "b": "২৬",
        "c": "২৪",
        "d": "২৮"
      },
      "answer": "C",
      "id": 244,
      "serial_in_topic": 74
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 79,
      "question": "৬০ জন লোক কোন কাজ ১৮ দিনে করতে পারে। উক্ত কাজ ৩৬ জন লো কত দিনে সম্পন্ন করতে পারে?",
      "options": {
        "a": "২৮",
        "b": "২৫",
        "c": "৩০",
        "d": "২৭"
      },
      "answer": "C",
      "id": 245,
      "serial_in_topic": 75
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 80,
      "question": "১০জন লোক একটি কাজ ২০ দিনে সম্পন্ন করে। ৮জন লোকের কাজটি সম্পন্ন করতে কত দিন লাগবে?",
      "options": {
        "a": "২৪",
        "b": "২৩",
        "c": "২৫",
        "d": "২৪"
      },
      "answer": "C",
      "id": 246,
      "serial_in_topic": 76
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 81,
      "question": "একটি দুগেষ ২৪০৫ জন দসন্যের ১৫ সপ্তাহের খাদ্য ছিল। কিন্তু কিছু দসন্য অন্যত্র পাঠানোর ফলে ঐ খাদ্য ২৫ সপ্তাহ চলল। কত জন দসন্য অন্যত্র পাঠানো হেয়ছিল?",
      "options": {
        "a": "৫৫৬",
        "b": "৬৭২",
        "c": "৫৬২",
        "d": "৫৭২"
      },
      "answer": "C",
      "id": 247,
      "serial_in_topic": 77
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 82,
      "question": "২০ জন লোক ১টি কাজ ৩০ দিনে করতে পারে। ১দিনে ঐ কাজ কতজন লোক করতে পারে?",
      "options": {
        "a": "৬০০",
        "b": "৫০০",
        "c": "২০০",
        "d": "৩০০"
      },
      "answer": "A",
      "id": 248,
      "serial_in_topic": 78
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 83,
      "question": "সেকেন্ডে ২৫০ মিটার বেগে চললে ১৬০ মিটার দীর্ঘ টে্রনের ৩৪০ মিটার প্লাটফরম অতিক্রম করতে কত সেকেন্ড সময় লাগবে?",
      "options": {
        "a": "২",
        "b": "৩",
        "c": "৪",
        "d": "৫"
      },
      "answer": "A",
      "id": 249,
      "serial_in_topic": 79
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 84,
      "question": "একজন বালক কোন স্থানে ঘন্টায় ৫ মাইল বেগে হেটে গেল এবঙ ঘন্টায় ৩ মাইল বেগে ফিরে আসল। যাতায়াতে তার গড়বেগ ঘন্টায় কত মাইল?",
      "options": {
        "a": "১৫/৪",
        "b": "১৬/৫",
        "c": "৪",
        "d": "৫"
      },
      "answer": "A",
      "id": 250,
      "serial_in_topic": 80
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 85,
      "question": "যদি ৬০০০ কিলোগ্রাম খাদ্যে ১৮০ জন লোকের ৫০দিন চলে তবে ঐ খাদ্য ১৫০ জন লোকের কত দিন চলবে?",
      "options": {
        "a": "৮০",
        "b": "৭০",
        "c": "৬০",
        "d": "৫০"
      },
      "answer": "C",
      "id": 251,
      "serial_in_topic": 81
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 86,
      "question": "কোন দোকানদার ২৬০ কেজি চালের ৩/৫ অংশ বিক্রয় করে অবশিষ্ট চাল চার ভাগে ভাগ করে রেখে দিলো। প্রতি ভাগে কত কেজি চাল রাখল?",
      "options": {
        "a": "২৬",
        "b": "১৩",
        "c": "২৮",
        "d": "১৪"
      },
      "answer": "A",
      "id": 252,
      "serial_in_topic": 82
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 87,
      "question": "যদি ৬টি ঘোড়া ৪দিনে ৩০সের ছোলা খায়, তবে কয়টি ঘোড়া ঐ সমেয় ২৫ সের ছোলা খাবে?",
      "options": {
        "a": "৫",
        "b": "৬",
        "c": "৭",
        "d": "৮"
      },
      "answer": "A",
      "id": 253,
      "serial_in_topic": 83
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 88,
      "question": "যদি ৬টি ঘোড়া ৪দিনে ৩০সের ছোলা খায়, তবে ১০টি ঘোড়া ঐ সমেয় কত সের ছোলা খাবে?",
      "options": {
        "a": "৩৮",
        "b": "৪৫",
        "c": "৪০",
        "d": "৪৬"
      },
      "answer": "C",
      "id": 254,
      "serial_in_topic": 84
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 89,
      "question": "যদি ১০টি বলদ ২০দিনে ৫০বিঘা জমি চার্ করতে পারে, তবে ১২টি বলদ ১৫দিনে কত বিঘা জমি চার্ করতে পাবেে।",
      "options": {
        "a": "৪৫",
        "b": "৪০",
        "c": "৪৮",
        "d": "৪৪"
      },
      "answer": "A",
      "id": 255,
      "serial_in_topic": 85
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 90,
      "question": "১২জন শ্রমিক ৩দিনে ৭২০ টাকা আয় করে। তবে ৯ জন শ্রমিক সমপরিমান টাকা আয় করবে কত দিনে?",
      "options": {
        "a": "৫",
        "b": "৪",
        "c": "৬",
        "d": "৩"
      },
      "answer": "B",
      "id": 256,
      "serial_in_topic": 86
    },
    {
      "topic": "unitary_work_speed",
      "q_num": 91,
      "question": "৩দিনে একটি কাজের ১/২৭অংশ হলে ঐ কাজটির ৩গুণ কাজ করতে কত দিন লাগবে?",
      "options": {
        "a": "২৪৩",
        "b": "১৫০",
        "c": "২৮",
        "d": "৮১"
      },
      "answer": "A",
      "id": 257,
      "serial_in_topic": 87
    },
    {
      "topic": "ratio_mixture",
      "q_num": 1,
      "question": "যদি (a+7b\\=19/20 হয় তবে b এবং a এর অনুপাত কত?",
      "options": {
        "a": "৩:২",
        "b": "৪:৩",
        "c": "৫:২",
        "d": "৫:৩"
      },
      "answer": "C",
      "id": 258,
      "serial_in_topic": 1
    },
    {
      "topic": "ratio_mixture",
      "q_num": 2,
      "question": "Let, x:y=7:1 and x:\\(y+2\\=3:5, What is the value of x?",
      "options": {
        "a": "7",
        "b": "21",
        "c": "77",
        "d": "3"
      },
      "answer": "B",
      "id": 259,
      "serial_in_topic": 2
    },
    {
      "topic": "ratio_mixture",
      "q_num": 3,
      "question": "যদি একটা স্কুলের মোট ছাত্র-ছাত্রীর মধ্যে ছাত্রীর সংখ্যা হয় ৩/৭ ভাগ তাহলে ঐ স্কুলের ছাত্র ও ছাত্রীর অনুপাত কত?",
      "options": {
        "a": "৪/৭",
        "b": "৪/৩",
        "c": "৩/৪",
        "d": "৭/৪"
      },
      "answer": "B",
      "id": 260,
      "serial_in_topic": 3
    },
    {
      "topic": "ratio_mixture",
      "q_num": 4,
      "question": "একটা ড্রয়ারে ৪০টি মোজা আছে। এর মধ্যে ৭০% মোজা হলো লাল রং এর এবং বাদবাকী হলো নীল রং এর। তাহলে নুন্যতম কতগুলো মোজা আন্দাজে তুললে তার মধ্যে অবশ্যই ২টা লাল রং এর মোজা থাকবেই",
      "options": {
        "a": "২",
        "b": "১৪",
        "c": "১৮",
        "d": "২০"
      },
      "answer": "A",
      "id": 261,
      "serial_in_topic": 4
    },
    {
      "topic": "ratio_mixture",
      "q_num": 5,
      "question": "যদি ক এর ২৫% হয় খ এর সমান এবঙ খ এর ২৪% হয় গ এর ২০% এর সমান, তাহলে ক ও গ এর অনুপাত কত",
      "options": {
        "a": "১:১",
        "b": "১:২",
        "c": "২:১",
        "d": "৪:৩"
      },
      "answer": "A",
      "id": 262,
      "serial_in_topic": 5
    },
    {
      "topic": "ratio_mixture",
      "q_num": 6,
      "question": "২৬০০ টাকা ৩ জন মানুর্রে মধ্যে ভাগ করে দেয়া হল যাতে ক গ্রহণ করে খ এর দ্বিগুণ এবং গ এর ১/১০অংশ। তবে কত টাকা গ পাবে?",
      "options": {
        "a": "১৬০০",
        "b": "২০০০",
        "c": "১৫৭৫",
        "d": "১৬২৫"
      },
      "answer": "B",
      "id": 263,
      "serial_in_topic": 6
    },
    {
      "topic": "ratio_mixture",
      "q_num": 7,
      "question": "a,b,c,d and e are integers M is their average and S is their sum. What is the ratio of S to M?",
      "options": {
        "a": "1:5",
        "b": "5:1",
        "c": "1:1",
        "d": "2:1"
      },
      "answer": "B",
      "id": 264,
      "serial_in_topic": 7
    },
    {
      "topic": "ratio_mixture",
      "q_num": 8,
      "question": "The prices of a TV and a refrigerator are in the ratio 9:5. If the TV costs $44200 more than the refrigerator does, what is the price of the refrigerator?",
      "options": {
        "a": "5250",
        "b": "4200",
        "c": "510",
        "d": "None of them"
      },
      "answer": "D",
      "id": 265,
      "serial_in_topic": 8
    },
    {
      "topic": "ratio_mixture",
      "q_num": 9,
      "question": "Joes collection contains US, Indian and British stamps. If the ratio of US to Indian stamps is 5 to 2 and the ratio of Indian to British stamps is 6 to 1, what is the ration of US to British stamps",
      "options": {
        "a": "25:2",
        "b": "5:1",
        "c": "10:1",
        "d": "15:3"
      },
      "answer": "A",
      "id": 266,
      "serial_in_topic": 9
    },
    {
      "topic": "ratio_mixture",
      "q_num": 10,
      "question": "বে্রাঞ্চ টিনের ১৬ অংশ এবং কপারের ৯ অংশ। যদি বোঞ্চ এর ওজন ১০০ পাউণ্ড হয়, তবে টিনের ওজন কত পাউন্ড",
      "options": {
        "a": "৯",
        "b": "১৬",
        "c": "১৮",
        "d": "৬৪"
      },
      "answer": "D",
      "id": 267,
      "serial_in_topic": 10
    },
    {
      "topic": "ratio_mixture",
      "q_num": 11,
      "question": "432 is divided amongst three workers A, B and C such that 8 times As share is equal to 12 times Bs share which is equal to 6 times Cs share. How much did A get?",
      "options": {
        "a": "144",
        "b": "132",
        "c": "154",
        "d": "210"
      },
      "answer": "A",
      "id": 268,
      "serial_in_topic": 11
    },
    {
      "topic": "ratio_mixture",
      "q_num": 12,
      "question": "কলেজিেয়ট উচ্চ বিদ্যালযে২০০ জন ছাত্র ছাত্রী রসায়ন এবং ১৬০ জন ছাত্র ছাত্রী জীববিজ্ঞান নেয়। যদি ৪০ জন ছাত্র ছাত্রী দুটোই নেয়। তবে রসায়ন ও জীববিজ্ঞান নেয়া ছাত্র ছাত্রীর অনুপাত কত?",
      "options": {
        "a": "৩:২",
        "b": "৪:৩",
        "c": "৫:২",
        "d": "৫:৩"
      },
      "answer": "B",
      "id": 269,
      "serial_in_topic": 12
    },
    {
      "topic": "ratio_mixture",
      "q_num": 13,
      "question": "A club had 3 boys and 5 girls. During a membership drive the same number of boys and girls joined the club. How many members does the club have now if the ratio of boys to girls is 3:4?",
      "options": {
        "a": "12",
        "b": "14",
        "c": "21",
        "d": "28"
      },
      "answer": "B",
      "id": 270,
      "serial_in_topic": 13
    },
    {
      "topic": "ratio_mixture",
      "q_num": 14,
      "question": "একটি ক্লাবে ৪৫ জন লোকের মধ্যে পুরুর্ এবং মহিলার অনুপাত ২ এবং ৩। তবে ক্লাবে পুরুর্রে সংখ্যা কত?",
      "options": {
        "a": "১৮",
        "b": "২০",
        "c": "২৭",
        "d": "৩০"
      },
      "answer": "A",
      "id": 271,
      "serial_in_topic": 14
    },
    {
      "topic": "ratio_mixture",
      "q_num": 15,
      "question": "The ratio of Gold and Bronze in a 42-gram necklace is 4:3 What is the amount of Gold that must be mixed in the necklace to get Gold-Bronze ratio of 5:3?",
      "options": {
        "a": "4",
        "b": "5",
        "c": "6",
        "d": "9"
      },
      "answer": "C",
      "id": 272,
      "serial_in_topic": 15
    },
    {
      "topic": "ratio_mixture",
      "q_num": 16,
      "question": "A person works in a firm on monthly salary basis. He gets a fixed amount of increment at the end of each year, His monthly salary is Tk 3500 at the end of 4th year the TK. 4250 at the end of 10th year",
      "options": {
        "a": "4321",
        "b": "3122",
        "c": "3125",
        "d": "3501"
      },
      "answer": "C",
      "id": 273,
      "serial_in_topic": 16
    },
    {
      "topic": "ratio_mixture",
      "q_num": 17,
      "question": "In a local election X and Y contested. X won the election as the ratio to his votes and those of Y was 4:3. The total number of voters was 5810, of which 910 did not vote. What is the margin of votes",
      "options": {
        "a": "350",
        "b": "700",
        "c": "750",
        "d": "900"
      },
      "answer": "B",
      "id": 274,
      "serial_in_topic": 17
    },
    {
      "topic": "ratio_mixture",
      "q_num": 18,
      "question": "Jully is now twice as old as Adnan. But 6 years ago, she was 5 times as old as he was. How old is Jully now?",
      "options": {
        "a": "10",
        "b": "16",
        "c": "20",
        "d": "24"
      },
      "answer": "B",
      "id": 275,
      "serial_in_topic": 18
    },
    {
      "topic": "ratio_mixture",
      "q_num": 19,
      "question": "If A:B=3:4 and B:C=5:6 than C:A=?",
      "options": {
        "a": "8:5",
        "b": "6:3",
        "c": "9:7",
        "d": "3:6"
      },
      "answer": "A",
      "id": 276,
      "serial_in_topic": 19
    },
    {
      "topic": "ratio_mixture",
      "q_num": 20,
      "question": "একটি ত্রিভুজের কোণগুলোর অনুপাত যথাক্রমে ২:৩:৪। ত্রিভুজের বড় কোণ নিণষয় কর",
      "options": {
        "a": "৯০°",
        "b": "৮০°",
        "c": "৬০°",
        "d": "৪০°"
      },
      "answer": "B",
      "id": 277,
      "serial_in_topic": 20
    },
    {
      "topic": "ratio_mixture",
      "q_num": 21,
      "question": "মহিলা এবং পুরুর্রে অনুপাত নিণষয় কর যদি ৫/৯ অংশ ছাত্র ছাত্রী ক্লাসের পুরুর্ হয়।",
      "options": {
        "a": "৩:২",
        "b": "৪:৩",
        "c": "৫:২",
        "d": "৪:৫"
      },
      "answer": "D",
      "id": 278,
      "serial_in_topic": 21
    },
    {
      "topic": "ratio_mixture",
      "q_num": 22,
      "question": "During the four years that Mr. Rahim owned his car, he found that his total car expenses were Tk. 18000. Fuel and maintenace costs accounted for 1/3 of the total cost and depreciation accounted for 3/",
      "options": {
        "a": "900",
        "b": "800",
        "c": "500",
        "d": "300"
      },
      "answer": "A",
      "id": 279,
      "serial_in_topic": 22
    },
    {
      "topic": "ratio_mixture",
      "q_num": 23,
      "question": "If a:b=3:5 and a:c=5:7 then b:c=?",
      "options": {
        "a": "25:20",
        "b": "25:21",
        "c": "21:05",
        "d": "22:23"
      },
      "answer": "B",
      "id": 280,
      "serial_in_topic": 23
    },
    {
      "topic": "ratio_mixture",
      "q_num": 24,
      "question": "একটি কফি মিশ্রনে কফি, দুধ, চিনি এবং দুধের সরের অনুপাত যথাক্রমে ৫:৩:২। তবে ১৮ কেজি কফি মিশ্রনে কত কেজি কফি আছে",
      "options": {
        "a": "৭.৫",
        "b": "৮.৯",
        "c": "৭.১",
        "d": "৫.০"
      },
      "answer": "A",
      "id": 281,
      "serial_in_topic": 24
    },
    {
      "topic": "ratio_mixture",
      "q_num": 25,
      "question": "৪:ক=২:৭হলে, ক এর মান কত?",
      "options": {
        "a": "৮",
        "b": "২১",
        "c": "১৪",
        "d": "১৮"
      },
      "answer": "C",
      "id": 282,
      "serial_in_topic": 25
    },
    {
      "topic": "ratio_mixture",
      "q_num": 26,
      "question": "৩:৭=১২:ক হলে, ক এর মান কত?",
      "options": {
        "a": "২৬",
        "b": "২৮",
        "c": "৩০",
        "d": "৩২"
      },
      "answer": "B",
      "id": 283,
      "serial_in_topic": 26
    },
    {
      "topic": "ratio_mixture",
      "q_num": 27,
      "question": "২৪:২৯, ৩২:৩৭, ১৪:১৫, ১৭:১৯ অনুপাতগুলোর মধ্যে সবচেেয় ছোট কোনটি?",
      "options": {
        "a": "২৪:২৯",
        "b": "৩২:৩৭",
        "c": "১৪:১৫",
        "d": "১৭:১৯"
      },
      "answer": "A",
      "id": 284,
      "serial_in_topic": 27
    },
    {
      "topic": "ratio_mixture",
      "q_num": 28,
      "question": "দুটি দেয় সংখ্যা ক ও খ এর মধ্যে অনুপাত নিধষারনের একটি সুত্র হলো",
      "options": {
        "a": "ক/খ",
        "b": "ক/ক+খ",
        "c": "ক+খ/ক",
        "d": "কোনটিই নয়"
      },
      "answer": "A",
      "id": 285,
      "serial_in_topic": 28
    },
    {
      "topic": "ratio_mixture",
      "q_num": 29,
      "question": "দুইটি রাশির অনুপাত ৯:১৫, পূবষ রাশি ৩৬ হলে উত্তর রাশি কত?",
      "options": {
        "a": "২০",
        "b": "৪",
        "c": "৬০",
        "d": "৭৫"
      },
      "answer": "C",
      "id": 286,
      "serial_in_topic": 29
    },
    {
      "topic": "ratio_mixture",
      "q_num": 30,
      "question": "ক:খ=গ:ঘ যদি ক=৬, খ=৫ এবং গ=৩৬ হয় তবে ঘ=কত",
      "options": {
        "a": "৩৫",
        "b": "৩০",
        "c": "১২",
        "d": "৬"
      },
      "answer": "B",
      "id": 287,
      "serial_in_topic": 30
    },
    {
      "topic": "ratio_mixture",
      "q_num": 31,
      "question": "৫:১৮, ৭:২ এবং ৩:৬ এর মিশ্র অনুপাত কত?",
      "options": {
        "a": "৭২:১০৫",
        "b": "৭২:৩৫",
        "c": "৩৫:৭২",
        "d": "১০৫:৭২"
      },
      "answer": "C",
      "id": 288,
      "serial_in_topic": 31
    },
    {
      "topic": "ratio_mixture",
      "q_num": 32,
      "question": "ক:খ=৪:৭ এবং খ:গ=৫:৬ হলে তবে ক:খ:গ=কত",
      "options": {
        "a": "৪:৭:৬",
        "b": "২০:৩৫:২৪",
        "c": "২০:৩৫:৪২",
        "d": "২৪:৩৫:৩০"
      },
      "answer": "C",
      "id": 289,
      "serial_in_topic": 32
    },
    {
      "topic": "ratio_mixture",
      "q_num": 33,
      "question": "যদি ক:খ=৩:৪ এবং ক:গ=৬:৫ হয় তবে গ:খ=কত",
      "options": {
        "a": "৫:৩",
        "b": "৬:৭",
        "c": "৫:৮",
        "d": "৫:৪"
      },
      "answer": "C",
      "id": 290,
      "serial_in_topic": 33
    },
    {
      "topic": "ratio_mixture",
      "q_num": 34,
      "question": "৭৫০০ টাকা ১:২:৩:৪:৫ অনুপাত ভাগ করলোে বৃহত্তম ও ক্ষুদ্রতম অংশের পাথষক্য কত হবে",
      "options": {
        "a": "৫০০",
        "b": "২০০০",
        "c": "১০০০",
        "d": "৩০০০"
      },
      "answer": "B",
      "id": 291,
      "serial_in_topic": 34
    },
    {
      "topic": "ratio_mixture",
      "q_num": 35,
      "question": "দুটি সংখ্যার যোগফল ৮। যদি সংখ্যাগুলো ৩:১ অনুপাতে থাকে তবে সংখ্যাগুলোর গুণফল হবে কত?",
      "options": {
        "a": "১০",
        "b": "৯",
        "c": "১১",
        "d": "১২"
      },
      "answer": "D",
      "id": 292,
      "serial_in_topic": 35
    },
    {
      "topic": "ratio_mixture",
      "q_num": 36,
      "question": "রাসেল ও রাকিবের আেয়র অনুপাত ৫:৪। রাসেলের আয় ৮৫ টাকা হলে রাকিবের আয় কত?",
      "options": {
        "a": "৬৫",
        "b": "৬৬",
        "c": "৬৭",
        "d": "৬৮"
      },
      "answer": "D",
      "id": 293,
      "serial_in_topic": 36
    },
    {
      "topic": "ratio_mixture",
      "q_num": 37,
      "question": "ক,খ ও গ একত্রে ব্যবসা করে ১২০০ টাকা লাভ করে। যদি ক,খ ও গ এর মূলধনের অনুপাত ২:৩:৫ হয় তবে ক কত লভ্যাংশ পাবে?",
      "options": {
        "a": "২২০",
        "b": "২৩০",
        "c": "২৪০",
        "d": "২৫০"
      },
      "answer": "C",
      "id": 294,
      "serial_in_topic": 37
    },
    {
      "topic": "ratio_mixture",
      "q_num": 38,
      "question": "একজন লোক সপ্তাহ ২২০০ টাকা আয় করেন এবং ১৬৫০ টাকা ব্যয় করেন । তার সঞ্চেয়র সঙ্গে আেয়র অনুপাত কত?",
      "options": {
        "a": "১:৪",
        "b": "২:৩",
        "c": "৩:৪",
        "d": "৪:৫"
      },
      "answer": "A",
      "id": 295,
      "serial_in_topic": 38
    },
    {
      "topic": "ratio_mixture",
      "q_num": 39,
      "question": "৪৯৫ টাকাকে ২:৪:৫ অনুপাতে ভাগ করলোে বৃহত্তম ও ক্ষুদ্রতম অংশের পাথষক্য কত টাকা হবে?",
      "options": {
        "a": "১২৫",
        "b": "১৩০",
        "c": "১৩৫",
        "d": "১৪০"
      },
      "answer": "C",
      "id": 296,
      "serial_in_topic": 39
    },
    {
      "topic": "ratio_mixture",
      "q_num": 40,
      "question": "একটি মাছ ২৫% লাভে বিক্রি করা হলে উহার ক্রয়মূল্য ও বিক্রয়মূল্যের অনুপাত নিণষয় করুন",
      "options": {
        "a": "৫:৬",
        "b": "৪:৬",
        "c": "৪:৫",
        "d": "৪:৩"
      },
      "answer": "C",
      "id": 297,
      "serial_in_topic": 40
    },
    {
      "topic": "ratio_mixture",
      "q_num": 41,
      "question": "দুটি বৃত্তের ব্যাসাধেষর অনুপাত ৩:২। বৃত্ত দুটির ক্ষেত্রফলের অনুপাত কত হবে?",
      "options": {
        "a": "২:৩",
        "b": "৩:৪",
        "c": "৪:৯",
        "d": "৯:৪"
      },
      "answer": "D",
      "id": 298,
      "serial_in_topic": 41
    },
    {
      "topic": "ratio_mixture",
      "q_num": 42,
      "question": "দুটি গোলকের ব্যাসাধেষর অনুপাত ৩:২ হলে তাদের আয়তনের অনুপাত কত?",
      "options": {
        "a": "৯:৪",
        "b": "২৭:৮",
        "c": "১২:৪",
        "d": "২৭:৪"
      },
      "answer": "B",
      "id": 299,
      "serial_in_topic": 42
    },
    {
      "topic": "ratio_mixture",
      "q_num": 43,
      "question": "দুইটি বৃত্তের ব্যাসাধেষর অনুপাত ৫:৪ বৃত্ত দু্ইটির ক্ষেত্রফলের অনুপাত কত হবে?",
      "options": {
        "a": "২৫:৩০",
        "b": "৩০:২৫",
        "c": "২৫:১৬",
        "d": "২২:১৬"
      },
      "answer": "C",
      "id": 300,
      "serial_in_topic": 43
    },
    {
      "topic": "ratio_mixture",
      "q_num": 44,
      "question": "একটি সোনার গহনার ভর ২০ গ্রাম। এতে সোনা ও তামার অনুপাত ৩:১ হলে, তামার পরিমান কত গ্রাম?",
      "options": {
        "a": "৫",
        "b": "৪",
        "c": "১০",
        "d": "১৫"
      },
      "answer": "A",
      "id": 301,
      "serial_in_topic": 44
    },
    {
      "topic": "ratio_mixture",
      "q_num": 45,
      "question": "দুইটি রাশির অনুপাত ৬:১১, পূবষ রাশি ৯৯ হলে উত্তর রাশি কত?",
      "options": {
        "a": "৫৮",
        "b": "৪২",
        "c": "৫৪",
        "d": "৪৮"
      },
      "answer": "C",
      "id": 302,
      "serial_in_topic": 45
    },
    {
      "topic": "ratio_mixture",
      "q_num": 46,
      "question": "মারুফ ও হোসেনের বয়সের অনুপাত ৭:৪। মারুফের বয়স ৩৫ বছর হলে, হোসেনর বয়স কত?",
      "options": {
        "a": "১৮",
        "b": "১৬",
        "c": "২৫",
        "d": "২০"
      },
      "answer": "D",
      "id": 303,
      "serial_in_topic": 46
    },
    {
      "topic": "ratio_mixture",
      "q_num": 47,
      "question": "দুইটি বইেয়র দামের অনুপাত ৩:৫। প্রথমটির দাম ১৯:২০ টাকা হলে দ্বিতীয়টির দাম কত?",
      "options": {
        "a": "৩৮",
        "b": "৩২",
        "c": "৩৩",
        "d": "৩০"
      },
      "answer": "B",
      "id": 304,
      "serial_in_topic": 47
    },
    {
      "topic": "ratio_mixture",
      "q_num": 48,
      "question": "যদি ১.৬ মিটার লম্বা কাঠির ছায়া ১.৮ মিটার হয়। একই সমেয় একটি খুটির ছায়া ৫.২ মিটার হলে খুটির দদৈর্ঘ্য্য কত মিটার?",
      "options": {
        "a": "৪.৫",
        "b": "৪.৬২",
        "c": "৫.৬",
        "d": "৪"
      },
      "answer": "B",
      "id": 305,
      "serial_in_topic": 48
    },
    {
      "topic": "ratio_mixture",
      "q_num": 49,
      "question": "ক এর ১০% যদি খ এর ২০% এর সমান হয়, তবে ক:খ কত?",
      "options": {
        "a": "১:২",
        "b": "১০:১",
        "c": "২:১",
        "d": "৫:১"
      },
      "answer": "C",
      "id": 306,
      "serial_in_topic": 49
    },
    {
      "topic": "ratio_mixture",
      "q_num": 50,
      "question": "৬০ টাকার ১/৪ এবং ১.৫৫ টাকার ০.৫ এর অনুপাত কত?",
      "options": {
        "a": "৩১:১৩",
        "b": "৪০:১৩",
        "c": "৩৪:১০",
        "d": "৪৩:১"
      },
      "answer": "B",
      "id": 307,
      "serial_in_topic": 50
    },
    {
      "topic": "ratio_mixture",
      "q_num": 51,
      "question": "দুইটি সংখ্যার অনুপাত ৫:৬ ◌্বেং গ.সা.গু ৪ হলে সংখ্যা দুইটির ল.সা.গু কত",
      "options": {
        "a": "৯০",
        "b": "১১০",
        "c": "১২০",
        "d": "১৩০"
      },
      "answer": "C",
      "id": 308,
      "serial_in_topic": 51
    },
    {
      "topic": "ratio_mixture",
      "q_num": 52,
      "question": "৩,৯ ও ৪ এর চতুথষ সমানুপাতিক কত?",
      "options": {
        "a": "১২",
        "b": "১৮",
        "c": "১৬",
        "d": "৮"
      },
      "answer": "A",
      "id": 309,
      "serial_in_topic": 52
    },
    {
      "topic": "ratio_mixture",
      "q_num": 53,
      "question": "১/৫:২/৭ কত?",
      "options": {
        "a": "৩:৫",
        "b": "৫:৭",
        "c": "৭:৯",
        "d": "৭:১০"
      },
      "answer": "D",
      "id": 310,
      "serial_in_topic": 53
    },
    {
      "topic": "ratio_mixture",
      "q_num": 54,
      "question": "১/৪:৩/৫ কত?",
      "options": {
        "a": "১/৩",
        "b": "৫/১২",
        "c": "১২/২০",
        "d": "কোনটিই নয়"
      },
      "answer": "B",
      "id": 311,
      "serial_in_topic": 54
    },
    {
      "topic": "ratio_mixture",
      "q_num": 55,
      "question": "যদি ক:খ=৫:৪ এবং ক:গ=৬:৫ হয়, তবে গ:খ=কত",
      "options": {
        "a": "২৪:২৫",
        "b": "২৩:২৫",
        "c": "২৫:২৪",
        "d": "২৬:২৭"
      },
      "answer": "C",
      "id": 312,
      "serial_in_topic": 55
    },
    {
      "topic": "ratio_mixture",
      "q_num": 56,
      "question": "যদি ক:খ=২:৩ এবং খ:গ=৪:৫ হলে গ:ক=কত",
      "options": {
        "a": "১৫:৮",
        "b": "১০:৫",
        "c": "১২:৮",
        "d": "৮:৫"
      },
      "answer": "A",
      "id": 313,
      "serial_in_topic": 56
    },
    {
      "topic": "ratio_mixture",
      "q_num": 57,
      "question": "একটি স্কুলে ছাত্র ছাত্রীর অনুপাত ৩:৭। স্কুলে মোট ছাত্র ছাত্রীর সংখ্যা ১৫০ হলে, ছাত্র সংখ্যা কত?",
      "options": {
        "a": "৪৫",
        "b": "৭৫",
        "c": "৯০",
        "d": "১০৫"
      },
      "answer": "A",
      "id": 314,
      "serial_in_topic": 57
    },
    {
      "topic": "ratio_mixture",
      "q_num": 58,
      "question": "কোন ক্লাশে x সংখ্যক ছাত্রী আছে এবং ছাত্রী ও ছাত্রের অনুপাত a:bক ঐ ক্লাসে কতজন ছাত্র আছে?",
      "options": {
        "a": "ab/x",
        "b": "bd/a",
        "c": "ax/b",
        "d": "abx/ax"
      },
      "answer": "B",
      "id": 315,
      "serial_in_topic": 58
    },
    {
      "topic": "ratio_mixture",
      "q_num": 59,
      "question": "একটি জারে দুধ ও পানির অনুপাত ৫:১। দুধের পরিমাণ যদি পানি অপেক্ষা ৮ লিটার বেশী হয় তবে পানির পরিমাণ কত লিটার?",
      "options": {
        "a": "২",
        "b": "৪",
        "c": "৬",
        "d": "৫"
      },
      "answer": "A",
      "id": 316,
      "serial_in_topic": 59
    },
    {
      "topic": "lcm_hcf",
      "q_num": 5,
      "question": "পাচ অংক বিশিষ্ট সবেষাচ্চ কতগুলো সংখ্যা ৭,১০,১৫,২১ এবঙ ২৮ দ্বারা বিভাজ্য?",
      "options": {
        "a": "৯৯৯৪০",
        "b": "৯৯৯০০",
        "c": "৯৯৯৬০",
        "d": "৯৯৯৭৫"
      },
      "answer": "C",
      "id": 317,
      "serial_in_topic": 1
    },
    {
      "topic": "lcm_hcf",
      "q_num": 6,
      "question": "৭ এবং ৩৫ এর ল.সা.গু কত?",
      "options": {
        "a": "৩৫",
        "b": "৭০",
        "c": "৪৯",
        "d": "১৪"
      },
      "answer": "A",
      "id": 318,
      "serial_in_topic": 2
    },
    {
      "topic": "lcm_hcf",
      "q_num": 7,
      "question": "If n is an integer such that when n is divided by 2 the remainder is 1, when n is divided by 3 the remainder is 2 and when n is divided by 4 the remainder is 3. What is the least possible value of n?",
      "options": {
        "a": "10",
        "b": "11",
        "c": "15",
        "d": "16"
      },
      "answer": "B",
      "id": 319,
      "serial_in_topic": 3
    },
    {
      "topic": "lcm_hcf",
      "q_num": 8,
      "question": "A certain neon sign flashes every 2 seconds, another sign flashes every 3 seconds and a third flashes every 5 seconds. If they all start flashing together how many seconds will it pass before all flas",
      "options": {
        "a": "45",
        "b": "30",
        "c": "20",
        "d": "15"
      },
      "answer": "B",
      "id": 320,
      "serial_in_topic": 4
    },
    {
      "topic": "lcm_hcf",
      "q_num": 9,
      "question": "দুই সংখ্যার গুণফল ৫৪ এবং ল.সা.গু ১৮ হলে, তাদের গ.সা.গু কত?",
      "options": {
        "a": "৪",
        "b": "৫",
        "c": "২",
        "d": "৩"
      },
      "answer": "D",
      "id": 321,
      "serial_in_topic": 5
    },
    {
      "topic": "lcm_hcf",
      "q_num": 10,
      "question": "দুটি ভগ্নাংশের ল.সা.গু ১২/৭ ও গ.সা.গু ১/১৪। সংখ্যাদ্বেয়র গুনফল কত?",
      "options": {
        "a": "৬/৪৯",
        "b": "২/২৭",
        "c": "১/২৫",
        "d": "৪৯/৬"
      },
      "answer": "A",
      "id": 322,
      "serial_in_topic": 6
    },
    {
      "topic": "lcm_hcf",
      "q_num": 11,
      "question": "কোন ক্ষুদ্রতম সংখ্যার সাথে ৩ যোগ করলোে যোগফল ২১,২৫,২৭ ও ৩৫ দ্বারা বিভাজ্য হয়",
      "options": {
        "a": "৪৫২৩",
        "b": "৫৭২৩",
        "c": "৫৬২২",
        "d": "৪৭২২"
      },
      "answer": "D",
      "id": 323,
      "serial_in_topic": 7
    },
    {
      "topic": "lcm_hcf",
      "q_num": 12,
      "question": "কোন ক্ষুদ্রতম সংখ্যাকে ৮,১২,১৮,২৪ দ্বারা ভাগ করলোে প্রতিবারই ভাগশের্ ৫ থাকবে?",
      "options": {
        "a": "৮১",
        "b": "৭৭",
        "c": "৮০",
        "d": "৭৯"
      },
      "answer": "B",
      "id": 324,
      "serial_in_topic": 8
    },
    {
      "topic": "lcm_hcf",
      "q_num": 13,
      "question": "কোন ক্ষুদ্রতম সংখ্যার সাথে ৪ যোগ করলোে যোগফল ১৬,২৪ ও ৩২ নিঃশেরে্ বিভাজ্য হবে?",
      "options": {
        "a": "৯০",
        "b": "৭৮",
        "c": "৮৮",
        "d": "৯২"
      },
      "answer": "D",
      "id": 325,
      "serial_in_topic": 9
    },
    {
      "topic": "lcm_hcf",
      "q_num": 14,
      "question": "দুইটি সংখ্যার গুণফল ৬৪৮। সংখ্যা দুইটির গ.সা.গু ৯ হলে তাদের ল.সা.গু কত?",
      "options": {
        "a": "৭২",
        "b": "৭৮",
        "c": "৭০",
        "d": "৮৮"
      },
      "answer": "A",
      "id": 326,
      "serial_in_topic": 10
    },
    {
      "topic": "lcm_hcf",
      "q_num": 15,
      "question": "দুইটি সংখ্যার গুণফল ৪২৩৫ এবং তাদের ল.সা.গু ৩৮৫। সংখ্যা দুইটির গ.সা.গু কত?",
      "options": {
        "a": "১৮",
        "b": "১৭",
        "c": "১২",
        "d": "১১"
      },
      "answer": "D",
      "id": 327,
      "serial_in_topic": 11
    },
    {
      "topic": "lcm_hcf",
      "q_num": 16,
      "question": "যে কোন দুইটি সহমৌলিক সংখ্যার গ.সা.গু কত?",
      "options": {
        "a": "১",
        "b": "২",
        "c": "৩",
        "d": "৪"
      },
      "answer": "A",
      "id": 328,
      "serial_in_topic": 12
    },
    {
      "topic": "lcm_hcf",
      "q_num": 17,
      "question": "কোন ক্ষুদ্রতম সংখ্যাকে ২,৩,৪,৫ এবং ৬ দ্বারা ভাগ করলোে প্রতিক্ষেত্রে ১ অবশিষ্ট থাকে।",
      "options": {
        "a": "৬১",
        "b": "৫৫",
        "c": "৬৪",
        "d": "৫৭"
      },
      "answer": "A",
      "id": 329,
      "serial_in_topic": 13
    },
    {
      "topic": "lcm_hcf",
      "q_num": 18,
      "question": "পাচ ঘন্টা একত্রে বেজে পরে যথাক্রমে ৩,৫,৭,৮ ও ১০ সেকেন্ডে অন্তর অন্তর বাজতে লাগল। কতক্ষণ পরে ঘন্টাগুলো আবার একত্রে বাজবে?",
      "options": {
        "a": "১৫ মিনিট",
        "b": "১৪মিনিট",
        "c": "১৬ মিনিট",
        "d": "১৩ মিনিট"
      },
      "answer": "B",
      "id": 330,
      "serial_in_topic": 14
    },
    {
      "topic": "lcm_hcf",
      "q_num": 19,
      "question": "দুটি লম্বালম্বি শক্তির পরিমান ৫N ৪N, তাদের লব্ধির পরিমান কত?",
      "options": {
        "a": "৩N",
        "b": "ক্ষ্র১১N",
        "c": "ক্ষ্র41xN",
        "d": "১N"
      },
      "answer": "C",
      "id": 331,
      "serial_in_topic": 15
    },
    {
      "topic": "lcm_hcf",
      "q_num": 20,
      "question": "নিম্নের কোন ক্ষু্দ্রতম সংখ্যাকে ৩,৫ ও ৬ দ্বারা ভাগ করলোে ভাগশের্ হবে",
      "options": {
        "a": "৭১",
        "b": "৪১",
        "c": "৩১",
        "d": "৩৯"
      },
      "answer": "C",
      "id": 332,
      "serial_in_topic": 16
    },
    {
      "topic": "lcm_hcf",
      "q_num": 21,
      "question": "ক একটি মৌলিক সংখ্যা এবঙ খ ক দ্বারা বিভাজ্য নয়। ক ও খ এর ল.সা.গু কত?",
      "options": {
        "a": "১",
        "b": "ক+খ",
        "c": "কখ",
        "d": "ক-খ"
      },
      "answer": "C",
      "id": 333,
      "serial_in_topic": 17
    },
    {
      "topic": "lcm_hcf",
      "q_num": 22,
      "question": "দুইটি সংখ্যার গুণফল ১৫৩৫। সংখ্যা দুটির ল.সা.গু ৯৬ হলে গ.সা.গু কত?",
      "options": {
        "a": "১২",
        "b": "১৬",
        "c": "২৪",
        "d": "৩০"
      },
      "answer": "B",
      "id": 334,
      "serial_in_topic": 18
    },
    {
      "topic": "lcm_hcf",
      "q_num": 23,
      "question": "তিন অংকের ক্ষুদ্রতম সংখ্যা থেকে কোন লঘিষ্ট সংখ্যা বিেয়াগ করলোে বিেয়াগফল ৫,১০,১৫ দ্বারা বিভাজ্য",
      "options": {
        "a": "১০",
        "b": "১২",
        "c": "১৫",
        "d": "২০"
      },
      "answer": "A",
      "id": 335,
      "serial_in_topic": 19
    },
    {
      "topic": "lcm_hcf",
      "q_num": 24,
      "question": "দুইটি সংখ্যার অনুপাত ৫:৭ এবঙ তাদের গ.সা.গু ৬ হলে, সংখ্যা দুইটির ল.সা.গু কত?",
      "options": {
        "a": "২১০",
        "b": "১৫০",
        "c": "১৮০",
        "d": "১৬০"
      },
      "answer": "A",
      "id": 336,
      "serial_in_topic": 20
    },
    {
      "topic": "lcm_hcf",
      "q_num": 25,
      "question": "কতজন বালককে ১২৫টি কমলা লেবু এবঙ ১৪৫টি কলা সমানভাবে ভাগ করে দেয়া যায়।",
      "options": {
        "a": "৩",
        "b": "৪",
        "c": "২",
        "d": "৫"
      },
      "answer": "D",
      "id": 337,
      "serial_in_topic": 21
    },
    {
      "topic": "lcm_hcf",
      "q_num": 26,
      "question": "কোন ক্ষুদ্রতম সংখ্যা হতে ১ বিেয়াগ করলোে বিেয়াগফল ৯,১২,১৫ দ্বারা নিঃশেরে্ বিভাজ্য হবে?",
      "options": {
        "a": "১২১",
        "b": "১৮১",
        "c": "১৭১",
        "d": "১৯১"
      },
      "answer": "B",
      "id": 338,
      "serial_in_topic": 22
    },
    {
      "topic": "lcm_hcf",
      "q_num": 27,
      "question": "দুইটি সংখ্যার ল.সা.গু ৪৮ এবঙ গ.সা.গু ৪ একটি সংখ্যা ১৬ হলে, অপর সংখ্যাটি কত?",
      "options": {
        "a": "১২",
        "b": "২৪",
        "c": "২২",
        "d": "৩২"
      },
      "answer": "A",
      "id": 339,
      "serial_in_topic": 23
    },
    {
      "topic": "lcm_hcf",
      "q_num": 28,
      "question": "কোন ক্ষুদ্রতম সংখ্যার সাথে ২ যোগ করলোে যোগফল ৩,৬,৯,১২ এবং ১৫ দ্বারা নিঃশেরে্ বিভাজ্য হবে?",
      "options": {
        "a": "১৬৮",
        "b": "১৭৮",
        "c": "১৫০",
        "d": "১৫৮"
      },
      "answer": "B",
      "id": 340,
      "serial_in_topic": 24
    },
    {
      "topic": "lcm_hcf",
      "q_num": 29,
      "question": "দুটি সংখ্যার গ.সা.গু ৭ এবং ল.সা.গু ৮৪ সংখ্যাটির একটি ৪২ হলে অপরটি কত?",
      "options": {
        "a": "২৮",
        "b": "২১",
        "c": "১৪",
        "d": "৪১"
      },
      "answer": "C",
      "id": 341,
      "serial_in_topic": 25
    },
    {
      "topic": "lcm_hcf",
      "q_num": 30,
      "question": "এক ব্যক্তি সম্পত্তির ২/৩ অংশ পুত্রকে এবঙ ১/৩ অংশ কন্যাকে দিলোেন। কন্যা পত্র অপেক্ষা ১৫০০ টাকা কম পেল, সম্পূণষ সম্পত্তির মূল্য কত?",
      "options": {
        "a": "২৫০০",
        "b": "৪৫০০",
        "c": "৩৫০০",
        "d": "৭৫০০"
      },
      "answer": "B",
      "id": 342,
      "serial_in_topic": 26
    },
    {
      "topic": "lcm_hcf",
      "q_num": 31,
      "question": "কোন লঘিষ্ঠ সংখ্যাকে ২৪ ও ৩৬ দ্বারা ভাগ করলোে যথাক্রমে ১৪ ও ২৬ অবশিষ্ট থাকবে?",
      "options": {
        "a": "৬০",
        "b": "৬১",
        "c": "৬২",
        "d": "৬৩"
      },
      "answer": "C",
      "id": 343,
      "serial_in_topic": 27
    },
    {
      "topic": "lcm_hcf",
      "q_num": 32,
      "question": "২০০২ সংখ্যাটি কোন সংখ্যাগুচ্ছের ল.সা.গু নয়?",
      "options": {
        "a": "১৩,৭৭,৯১,১৪৩",
        "b": "৭,২২,২৬,৯১",
        "c": "২৬,৭৭,১৪৩,১৫৮",
        "d": "২,৭,১১,১৩"
      },
      "answer": "C",
      "id": 344,
      "serial_in_topic": 28
    },
    {
      "topic": "lcm_hcf",
      "q_num": 33,
      "question": "পাচ অংকের বৃহত্তম সংখ্যার সাথে কোন ক্ষুদ্রতম সংখ্যা যোগ করলোে যোগফল ৫,৮,১২,১৪ দ্বারা বিভাজ্য?",
      "options": {
        "a": "৭০১",
        "b": "৮০১",
        "c": "৮১৫",
        "d": "৭০৯"
      },
      "answer": "B",
      "id": 345,
      "serial_in_topic": 29
    },
    {
      "topic": "lcm_hcf",
      "q_num": 34,
      "question": "ছয় অংকের কোন ক্ষুদ্রতম সংখ্যা ২৫,৫০,৭৫ ও ১২৫ দিেয় নিঃশেরে্ বিভাজ্য?",
      "options": {
        "a": "১০০৫০০",
        "b": "১০৫০০০",
        "c": "১০০৪০০",
        "d": "১০০৩০০০"
      },
      "answer": "A",
      "id": 346,
      "serial_in_topic": 30
    },
    {
      "topic": "lcm_hcf",
      "q_num": 35,
      "question": "ক একটি মৌলিক সংখ্যা এবং খ ক দ্বারা বিভাজ্য নয়। ক ও খ এর ল.সা.গু কত?",
      "options": {
        "a": "ক/খ",
        "b": "কখ",
        "c": "খ/ক",
        "d": "কোনটিই নয়"
      },
      "answer": "B",
      "id": 347,
      "serial_in_topic": 31
    },
    {
      "topic": "lcm_hcf",
      "q_num": 36,
      "question": "কোন ক্ষুদ্রতম পূনষ বর্গ সংখ্যা ৯,১৫ এবং ২৫ দ্বারা বিভাজ্য?",
      "options": {
        "a": "২২৫",
        "b": "২৪০",
        "c": "১১৫",
        "d": "২৩৫"
      },
      "answer": "A",
      "id": 348,
      "serial_in_topic": 32
    },
    {
      "topic": "lcm_hcf",
      "q_num": 37,
      "question": "দুটি সংখ্যার গুনফল ২৯৪ ও গ.সা.গু ৭ হলে তাদরের ল.সা.গু কত?",
      "options": {
        "a": "৪২",
        "b": "২৪",
        "c": "১৪",
        "d": "২১"
      },
      "answer": "A",
      "id": 349,
      "serial_in_topic": 33
    },
    {
      "topic": "lcm_hcf",
      "q_num": 38,
      "question": "কোন ক্ষুদ্রতম সংখ্যাকে ৭,১৪,২১ ও ৪২ দ্বারা ভাগ করলোে কোন অবশিষ্ট থাকবে না?",
      "options": {
        "a": "১৯৬",
        "b": "১৬৮",
        "c": "১৯৮",
        "d": "১৭২"
      },
      "answer": "B",
      "id": 350,
      "serial_in_topic": 34
    },
    {
      "topic": "average",
      "q_num": 1,
      "question": "প্রথম পাচটি মৌলিক সংখ্যার গড় কত?",
      "options": {
        "a": "৩.৬",
        "b": "৫.৪",
        "c": "৫.৬",
        "d": "৭.৮"
      },
      "answer": "C",
      "id": 351,
      "serial_in_topic": 1
    },
    {
      "topic": "average",
      "q_num": 2,
      "question": "১২ জন ছাত্রের বয়সের গড় ২০ বছর। যদি ঐ ১২ জনের সাথে ৪জন নতুন ছাত্র যোগ দেয় তাহলে বয়সের গড় ১ বছর বৃদ্ধি পায়। তাহলে নতুন যোগ দেওয়া ছাত্রদের বয়সের গড় কত?",
      "options": {
        "a": "২৮",
        "b": "২৬",
        "c": "২৪",
        "d": "২২"
      },
      "answer": "C",
      "id": 352,
      "serial_in_topic": 2
    },
    {
      "topic": "average",
      "q_num": 3,
      "question": "১০ থেকে ১৯০ এর মধ্যে যতগুলো ১০ গুণিতক আছে তাদের গড় কত?",
      "options": {
        "a": "৯০",
        "b": "৯৫",
        "c": "১০০",
        "d": "১১০"
      },
      "answer": "C",
      "id": 353,
      "serial_in_topic": 3
    },
    {
      "topic": "average",
      "q_num": 4,
      "question": "যদি কোন ব্যক্তি ক মাইল হাটে খ ঘন্টায় এবং একই সমেয় গ মাইল চলে, তবে তার গড় যাত্রার বেগ কত?",
      "options": {
        "a": "গ+ক/খ",
        "b": "২(গ+ক)/খ",
        "c": "খক+গ/২খ",
        "d": "গ+ক/২খ"
      },
      "answer": "D",
      "id": 354,
      "serial_in_topic": 4
    },
    {
      "topic": "average",
      "q_num": 5,
      "question": "৩টি সংখ্যার গড় ক, যদি প্রথম ২টি সংখ্যার গড় খ এবং শের্ ২টি সংখ্যার গড় গ হয়, তার ২য় সংখ্যাটি কত?",
      "options": {
        "a": "২খ+২গ-৩ক",
        "b": "৩ক-খ-গ",
        "c": "২খ+২গ+৩ক",
        "d": "ক-খ-গ"
      },
      "answer": "A",
      "id": 355,
      "serial_in_topic": 5
    },
    {
      "topic": "average",
      "q_num": 6,
      "question": "৬টি সংখ্যার গড় হলো ৭, যদি ২টি সংখ্যা বাদ দেয়া হয় তবে বাকী সংখ্যাগুলোর গড় হলো ৮। তবে যে দুটি সংখ্যা বাদ দেয়া হেয়ছে তাদের যোগফল কত?",
      "options": {
        "a": "১০",
        "b": "১১",
        "c": "১৩",
        "d": "১৫"
      },
      "answer": "A",
      "id": 356,
      "serial_in_topic": 6
    },
    {
      "topic": "average",
      "q_num": 7,
      "question": "১জন লোক ঘন্টায় ৩০ কি.মি বেগে যে স্থানে যায় যেখান থেকে ঘন্টায় ৪০ কি.মি. বেগে আবার ফিরে আসে, তার গড় গতিবেগ কত কি.মি পার ঘন্টা?",
      "options": {
        "a": "৩৩.৩৩",
        "b": "৩৪.২৪",
        "c": "৩৫",
        "d": "৩৬.৬৬"
      },
      "answer": "C",
      "id": 357,
      "serial_in_topic": 7
    },
    {
      "topic": "average",
      "q_num": 8,
      "question": "কিছু ছাত্রের ৫টি মূল্যায়ন পরীক্ষায় গড় নম্বর হচ্ছে ৮৩। যদি ৪ টির নম্বর যথাক্রমে ৮১,৭৯,৮৫ ও ৯০ হয়, তবে ৫ম মূল্যায়ন পরীক্ষার নম্বর কত?",
      "options": {
        "a": "৮৪",
        "b": "৮৩",
        "c": "৮০",
        "d": "৭৯"
      },
      "answer": "C",
      "id": 358,
      "serial_in_topic": 8
    },
    {
      "topic": "average",
      "q_num": 9,
      "question": "৭টি ধনাত্মক পূণষ সংখ্যা ১২ হলে তবে সবচেেয় বগ ধনাত্মক সংখ্যাটি কত হবে?",
      "options": {
        "a": "৩১",
        "b": "৪৭",
        "c": "৬৩",
        "d": "৭২"
      },
      "answer": "C",
      "id": 359,
      "serial_in_topic": 9
    },
    {
      "topic": "average",
      "q_num": 10,
      "question": "The average of 5 quantities is 6. The average of 3 of them 8. What is the average of the remaining two number",
      "options": {
        "a": "4",
        "b": "3.5",
        "c": "3",
        "d": "7"
      },
      "answer": "C",
      "id": 360,
      "serial_in_topic": 10
    },
    {
      "topic": "average",
      "q_num": 11,
      "question": "একটি টে্রন প্রত্যেক ঘন্টায় ৬০ কি.মি. বেগে ৩ ঘন্টা চলে এবং ২ ঘন্টা হলে ৪৫ কি.মি. বেগে। তবে টে্রনের গড় গতিবেগ ঘন্টায় কত কি.মি?",
      "options": {
        "a": "৫০",
        "b": "৫২",
        "c": "৫৪",
        "d": "৫৫"
      },
      "answer": "C",
      "id": 361,
      "serial_in_topic": 11
    },
    {
      "topic": "average",
      "q_num": 12,
      "question": "কোন একটি দলে ১২ জন ভ্রমনকারী শিশুর প্রত্যেকের বয়স ১০ বছর এবঙ ৮ জনের বয়স ১৫ বছর করে, তবে সকল শিশুর গড় বয়স কত?",
      "options": {
        "a": "১০",
        "b": "১১",
        "c": "১৩",
        "d": "১২"
      },
      "answer": "D",
      "id": 362,
      "serial_in_topic": 12
    },
    {
      "topic": "average",
      "q_num": 13,
      "question": "একটি বিজ্ঞান পরীক্ষায় একটি ক্লাশে ৩০ জন ছাত্রের গড় নম্বর ছিল ৮০। ২০ জন ছাত্রীর গড় নম্বর ছিল ৪৫। তবে ক্লাসের ১০ জন বালকের গড় নম্বর কত?",
      "options": {
        "a": "৬০",
        "b": "৭০",
        "c": "৮০",
        "d": "৯০"
      },
      "answer": "B",
      "id": 363,
      "serial_in_topic": 13
    },
    {
      "topic": "average",
      "q_num": 14,
      "question": "Find the speed of a man in sill water if he goes upstream at 6 km/hour when the rate of stream is 2 km/hour.",
      "options": {
        "a": "2",
        "b": "8",
        "c": "5",
        "d": "7"
      },
      "answer": "B",
      "id": 364,
      "serial_in_topic": 14
    },
    {
      "topic": "average",
      "q_num": 15,
      "question": "৩য় সেমিষ্টার কলেজে জিমের জ.পি.এ আছে ৩.০। তবে ৪থষ সেমিষ্টারে যদি সে তার জি.পি.এ ৩.১ করতে চায় তবে তার কত জি.পি.এ পেতে হবে?",
      "options": {
        "a": "৩.৫",
        "b": "৩.২",
        "c": "৩.৪",
        "d": "৫"
      },
      "answer": "C",
      "id": 365,
      "serial_in_topic": 15
    },
    {
      "topic": "average",
      "q_num": 16,
      "question": "If a man swims 4 meters upstream at 1 mph and back downstream to the same point at 4 mph. what is his average mph speed",
      "options": {
        "a": "1.6",
        "b": "2",
        "c": "3",
        "d": "5"
      },
      "answer": "A",
      "id": 366,
      "serial_in_topic": 16
    },
    {
      "topic": "average",
      "q_num": 17,
      "question": "An airplane flies along the four sides of a square at speeds of 100, 200, 300 and 400 miles per hour respectively. What is the average speed of the plane in its flight around the square \\(miles/hr\\?",
      "options": {
        "a": "380",
        "b": "340",
        "c": "320",
        "d": "280"
      },
      "answer": "C",
      "id": 367,
      "serial_in_topic": 17
    },
    {
      "topic": "average",
      "q_num": 18,
      "question": "A river 2 meter deep and 45 meter wide is flowing at the rate of 3 km/hr. What is the amount of water that runs into the sea per minute?",
      "options": {
        "a": "4000m",
        "b": "4500m",
        "c": "5000m",
        "d": "5500m"
      },
      "answer": "B",
      "id": 368,
      "serial_in_topic": 18
    },
    {
      "topic": "average",
      "q_num": 19,
      "question": "যদি ক এবং -১৪ এর গড় হয়, তবে ক এর গড় এবং -৮ হবে",
      "options": {
        "a": "-২৪",
        "b": "-১২",
        "c": "-১১",
        "d": "-৫",
        "e": "৫"
      },
      "answer": "D",
      "id": 369,
      "serial_in_topic": 19
    },
    {
      "topic": "average",
      "q_num": 20,
      "question": "যদি ৬টি সংখ্যার গড় -৬ হয় এবঙ ৪টি যোগফল ২০ হয়। তবে অন্য দুটি সংখ্যার গড় কত?",
      "options": {
        "a": "৭",
        "b": "৮",
        "c": "-৮",
        "d": "-২৮",
        "e": "-৩২"
      },
      "answer": "D",
      "id": 370,
      "serial_in_topic": 20
    },
    {
      "topic": "average",
      "q_num": 21,
      "question": "The minutes after a plane leaves the airport, it is reported to be 40 miles away. What is the average speed in miles per hour of the plane?",
      "options": {
        "a": "66mph",
        "b": "67mph",
        "c": "2400mph",
        "d": "6000mph",
        "e": "660mph"
      },
      "answer": "C",
      "id": 371,
      "serial_in_topic": 21
    },
    {
      "topic": "average",
      "q_num": 22,
      "question": "On a certain project, the only grades awarded were 75 and 100. If 85 students completed the projects and the average of their grades was 85, how many of them did score 100?",
      "options": {
        "a": "34",
        "b": "40",
        "c": "45",
        "d": "51",
        "e": "60"
      },
      "answer": "A",
      "id": 372,
      "serial_in_topic": 22
    },
    {
      "topic": "average",
      "q_num": 23,
      "question": "The average mark obtained in four sections of todays admission test is 19. If the English section is 21. What is the mark in English?",
      "options": {
        "a": "13",
        "b": "17",
        "c": "23",
        "d": "8"
      },
      "answer": "A",
      "id": 373,
      "serial_in_topic": 23
    },
    {
      "topic": "average",
      "q_num": 24,
      "question": "If the average of the two numbers is M and the larger number is L, what is the smallest number?",
      "options": {
        "a": "M-L",
        "b": "L-M",
        "c": "2M-L",
        "d": "L-2M"
      },
      "answer": "C",
      "id": 374,
      "serial_in_topic": 24
    },
    {
      "topic": "average",
      "q_num": 25,
      "question": "A cricketer has a certain average in 9 innings. In the 10th innings, he secored 100 runs and thus increases his average by 8 runs. What is his new average?",
      "options": {
        "a": "22",
        "b": "24",
        "c": "26",
        "d": "28"
      },
      "answer": "D",
      "id": 375,
      "serial_in_topic": 25
    },
    {
      "topic": "average",
      "q_num": 26,
      "question": "In a group of children, three are 7,8 and 10 years old and the other two are of same age. If the average age of all the five children is 7, then what is the age of the other two children?",
      "options": {
        "a": "12",
        "b": "10",
        "c": "14",
        "d": "16"
      },
      "answer": "B",
      "id": 376,
      "serial_in_topic": 26
    },
    {
      "topic": "average",
      "q_num": 27,
      "question": "If N is the third of seven consecutive odd numbers, calculate their average.",
      "options": {
        "a": "N",
        "b": "N+1",
        "c": "N+2",
        "d": "N+7"
      },
      "answer": "C",
      "id": 377,
      "serial_in_topic": 27
    },
    {
      "topic": "average",
      "q_num": 28,
      "question": "The batting average of 40 innings of a cricket player is 50 runs. His highest score exceeds his lowest score by 172 runs. If these 2 innings are excluded, the average score of the remaining 38 innings",
      "options": {
        "a": "174",
        "b": "178",
        "c": "200",
        "d": "190"
      },
      "answer": "A",
      "id": 378,
      "serial_in_topic": 28
    },
    {
      "topic": "average",
      "q_num": 29,
      "question": "পরস্পর ৫টি জোড় সংখ্যার গড় ৮ হলে, তবে ৫টি সংখ্যার মধ্যে কোনটি সবেচেেয় ছোট",
      "options": {
        "a": "৪",
        "b": "৬",
        "c": "৮",
        "d": "১০"
      },
      "answer": "A",
      "id": 379,
      "serial_in_topic": 29
    },
    {
      "topic": "average",
      "q_num": 30,
      "question": "৩০ থেকে ৫০ এর মধ্যে সকল মৌলিক সংখ্যার গড় কত?",
      "options": {
        "a": "৩০.৬",
        "b": "৩৩.৫০",
        "c": "৩৮.৪০",
        "d": "৪৩.২০"
      },
      "answer": "A",
      "id": 380,
      "serial_in_topic": 30
    },
    {
      "topic": "average",
      "q_num": 31,
      "question": "প্রথম ১০টি মৌলিক সংখ্যার গড় কত?",
      "options": {
        "a": "১৩.১০",
        "b": "১২.৭০",
        "c": "১২.৯০",
        "d": "১৪.৫০"
      },
      "answer": "C",
      "id": 381,
      "serial_in_topic": 31
    },
    {
      "topic": "average",
      "q_num": 32,
      "question": "তিনটি সংখ্যার গড় ২৪। দুইটি সংখ্যা যদি ২১ ও ২৩ হয় তৃতীয় সংখ্যাটি কত?",
      "options": {
        "a": "২৯",
        "b": "২৮",
        "c": "২৭",
        "d": "৩০"
      },
      "answer": "B",
      "id": 382,
      "serial_in_topic": 32
    },
    {
      "topic": "average",
      "q_num": 33,
      "question": "তিনটি সংখ্যার গড় ৭। দুইটি সংখ্যা যদি ২০ হয় তৃতীয় সংখ্যাটি কত?",
      "options": {
        "a": "২১",
        "b": "১৯",
        "c": "১৭",
        "d": "১৫"
      },
      "answer": "A",
      "id": 383,
      "serial_in_topic": 33
    },
    {
      "topic": "average",
      "q_num": 34,
      "question": "নিচের কোনটি রাশির গড় নিদষশ করে?",
      "options": {
        "a": "রাশির সমষ্টিxরাশির সংখ্যা",
        "b": "রাশির সংখ্যা/রাশির সমষ্টি",
        "c": "রাশির সমষ্টি/রাশির সংখ্যা",
        "d": "রাশীর সংখ্যা+রাশির সমষ্টি"
      },
      "answer": "C",
      "id": 384,
      "serial_in_topic": 34
    },
    {
      "topic": "average",
      "q_num": 35,
      "question": "৭/২,৩১/৪,৩৩/৪,১৯/২,১০ সংখ্যাগুলোর গড় নিণষয় কত",
      "options": {
        "a": "১৯/২",
        "b": "২৩/৪",
        "c": "৩৯/৫",
        "d": "২৯/৪"
      },
      "answer": "C",
      "id": 385,
      "serial_in_topic": 35
    },
    {
      "topic": "average",
      "q_num": 36,
      "question": "৪,৬,৭ এবং ক এর গড় মান ৫.৫ হলে ক এর মান কত?",
      "options": {
        "a": "৫.০",
        "b": "৫.৫",
        "c": "৬.২",
        "d": "৬.৫"
      },
      "answer": "A",
      "id": 386,
      "serial_in_topic": 36
    },
    {
      "topic": "average",
      "q_num": 37,
      "question": "প্রথম ৩০টি স্বাভাবিক সংখ্যা গড় কত?",
      "options": {
        "a": "১৪.৪",
        "b": "১৭.৬",
        "c": "১৫.৫",
        "d": "১৬.৫"
      },
      "answer": "C",
      "id": 387,
      "serial_in_topic": 37
    },
    {
      "topic": "average",
      "q_num": 38,
      "question": "১ থেকে ৬৯ পযষন্ত ক্রমিক সংখ্যাগুলোর গড় কত?",
      "options": {
        "a": "৩৬",
        "b": "৩৫",
        "c": "৩৭",
        "d": "৩২"
      },
      "answer": "B",
      "id": 388,
      "serial_in_topic": 38
    },
    {
      "topic": "average",
      "q_num": 39,
      "question": "১ থেকে ৪৯ পযষন্ত ক্রমিক সংখ্যাগুলোর গড় কত?",
      "options": {
        "a": "২৫",
        "b": "২৮",
        "c": "২৭",
        "d": "২৬"
      },
      "answer": "A",
      "id": 389,
      "serial_in_topic": 39
    },
    {
      "topic": "average",
      "q_num": 40,
      "question": "প্রথম ৫০টি স্বাভাবিক সংখ্যার গড় কত?",
      "options": {
        "a": "২৫",
        "b": "২৬",
        "c": "২৫.৫",
        "d": "২৬.৫"
      },
      "answer": "C",
      "id": 390,
      "serial_in_topic": 40
    },
    {
      "topic": "average",
      "q_num": 41,
      "question": "৩ এর প্রথম ৫টি গুণীতকের গড় কত?",
      "options": {
        "a": "৪",
        "b": "৫",
        "c": "৯",
        "d": "৭"
      },
      "answer": "C",
      "id": 391,
      "serial_in_topic": 41
    },
    {
      "topic": "average",
      "q_num": 42,
      "question": "৪ এর প্রথম ৫টি গুনিতকের গড় কত?",
      "options": {
        "a": "১০",
        "b": "১১",
        "c": "১২",
        "d": "১৩"
      },
      "answer": "C",
      "id": 392,
      "serial_in_topic": 42
    },
    {
      "topic": "average",
      "q_num": 43,
      "question": "৩ এর প্রথম ২৫টি গুণীতকের গড় কত?",
      "options": {
        "a": "৩৯",
        "b": "৪০",
        "c": "৩৩",
        "d": "৩৫"
      },
      "answer": "A",
      "id": 393,
      "serial_in_topic": 43
    },
    {
      "topic": "average",
      "q_num": 44,
      "question": "৫,৬,১০ এর গানিতিক গড় ৭,৯ এবং কোন সংখ্যার গাণিতিক গেড়র সমান?",
      "options": {
        "a": "৫",
        "b": "৬",
        "c": "৭",
        "d": "৮"
      },
      "answer": "A",
      "id": 394,
      "serial_in_topic": 44
    },
    {
      "topic": "average",
      "q_num": 45,
      "question": "৬,৮,১০ এর গাণিতিক গড় ৭,৯ এবং কোন সংখ্যার গাণিতিক গেড়র সমান?",
      "options": {
        "a": "৬",
        "b": "৭",
        "c": "৮",
        "d": "১০"
      },
      "answer": "C",
      "id": 395,
      "serial_in_topic": 45
    },
    {
      "topic": "average",
      "q_num": 46,
      "question": "১০টি সংখ্যার যোগফল ৪৬২। প্রথম চারটির গড় ৫২, শের্ ৫টির গড় ৩৮, পঞ্চম সংখ্যাটি?",
      "options": {
        "a": "৬৪",
        "b": "৬০",
        "c": "৬২",
        "d": "৫০"
      },
      "answer": "A",
      "id": 396,
      "serial_in_topic": 46
    },
    {
      "topic": "average",
      "q_num": 47,
      "question": "১০০ পযষন্ত সব বিজোড় সংখ্যার গড় কত?",
      "options": {
        "a": "৫০",
        "b": "৭০",
        "c": "৬০",
        "d": "৮০"
      },
      "answer": "A",
      "id": 397,
      "serial_in_topic": 47
    },
    {
      "topic": "average",
      "q_num": 48,
      "question": "৬ হলো ০.২, ০.৮,১ এবং ক এর গড় মান। ক এর মান কত",
      "options": {
        "a": "০.৪",
        "b": "০.২",
        "c": "২.৪",
        "d": "০.৬৭"
      },
      "answer": "A",
      "id": 398,
      "serial_in_topic": 48
    },
    {
      "topic": "average",
      "q_num": 49,
      "question": "ক ও খ এর মানের গড় ৯ এবং গ=১২ হলে, ক,খ,গ এর মানের গড় কত?",
      "options": {
        "a": "৬",
        "b": "৯",
        "c": "১০",
        "d": "১২"
      },
      "answer": "C",
      "id": 399,
      "serial_in_topic": 49
    },
    {
      "topic": "average",
      "q_num": 50,
      "question": "Sum of P and Q is 72. R is 42. What is the average of P,Q and R",
      "options": {
        "a": "34",
        "b": "39",
        "c": "38",
        "d": "30"
      },
      "answer": "C",
      "id": 400,
      "serial_in_topic": 50
    },
    {
      "topic": "average",
      "q_num": 51,
      "question": "sum of A and B is 40. c is 32. What is the average of A,B and C",
      "options": {
        "a": "24",
        "b": "26",
        "c": "28",
        "d": "30"
      },
      "answer": "A",
      "id": 401,
      "serial_in_topic": 51
    },
    {
      "topic": "average",
      "q_num": 52,
      "question": "৩টি সংখ্যার গড় ৬। উক্ত ৩টি সহ ৪টি সংখ্যার গড় ৮। চতুথষ সৃখ্যার ১/২ অংশ নিণষয় কত।",
      "options": {
        "a": "৭",
        "b": "৮",
        "c": "১৮",
        "d": "১৯"
      },
      "answer": "A",
      "id": 402,
      "serial_in_topic": 52
    },
    {
      "topic": "average",
      "q_num": 53,
      "question": "৭টি ধারাবাহিক সংখ্যার গড় ৩৩ হলে বৃহত্তম সংখ্যাটি কত?",
      "options": {
        "a": "৩৬",
        "b": "৩৮",
        "c": "৩৫",
        "d": "৩২"
      },
      "answer": "A",
      "id": 403,
      "serial_in_topic": 53
    },
    {
      "topic": "average",
      "q_num": 54,
      "question": "চারটি ধারাবাহিক জোড় সংখ্যার গড় ২৭ হলে বৃহত্তম সংখ্যাটি কত?",
      "options": {
        "a": "৩৮",
        "b": "৩২",
        "c": "৩০",
        "d": "৩৬"
      },
      "answer": "C",
      "id": 404,
      "serial_in_topic": 54
    },
    {
      "topic": "average",
      "q_num": 55,
      "question": "Average of M numbers is A and average of N numbers is B. What is the average of all numbers?",
      "options": {
        "a": "\\(A+B)/2",
        "b": "\\(AM+BN\\/\\(A+B\\",
        "c": "\\(AM+BN\\/\\(M+N\\",
        "d": "\\(AM+BN\\/\\(A+B\\"
      },
      "answer": "C",
      "id": 405,
      "serial_in_topic": 55
    },
    {
      "topic": "average",
      "q_num": 56,
      "question": "১ থেকে ৭৯ পযষন্ত ক্রমিক সংখ্যাগুলোর গড় কত?",
      "options": {
        "a": "৩৫",
        "b": "৩৮",
        "c": "৪০",
        "d": "৩৯"
      },
      "answer": "C",
      "id": 406,
      "serial_in_topic": 56
    },
    {
      "topic": "average",
      "q_num": 57,
      "question": "১ হতে ৪৯ পযষন্ত ক্রমিক সংখ্যাগুলোর গড় কত?",
      "options": {
        "a": "২৫",
        "b": "২৪",
        "c": "২৬",
        "d": "২৭"
      },
      "answer": "A",
      "id": 407,
      "serial_in_topic": 57
    },
    {
      "topic": "average",
      "q_num": 58,
      "question": "১ থেকে ২০ পযষন্ত বিজোড় সংখ্যাগুলোর গড় কত?",
      "options": {
        "a": "১৪",
        "b": "১৫",
        "c": "১০",
        "d": "১৬"
      },
      "answer": "C",
      "id": 408,
      "serial_in_topic": 58
    },
    {
      "topic": "average",
      "q_num": 59,
      "question": "তিনটি সংখ্যার গড় ২০। প্রথম দুটি সংখ্যা ১৬ এবং ২২ হলে তৃতীয় সংখ্যাটি কত?",
      "options": {
        "a": "২২",
        "b": "২১",
        "c": "২৩",
        "d": "২৪"
      },
      "answer": "A",
      "id": 409,
      "serial_in_topic": 59
    },
    {
      "topic": "average",
      "q_num": 60,
      "question": "৭টি সংখ্যার যোগফল ৪০১। প্রথম ৩টির গড় ৫৬ এবং শের্রে ৩টি সংখ্যার গড় ৫৮। ৪ইথষ সংখ্যাটি কত",
      "options": {
        "a": "৫৩",
        "b": "৫৫",
        "c": "৫৬",
        "d": "৫৯"
      },
      "answer": "D",
      "id": 410,
      "serial_in_topic": 60
    },
    {
      "topic": "average",
      "q_num": 61,
      "question": "দশটির সংখ্যার গড় ৭। প্রতিটিকে ১২ দিেয় গুন এবং শের্ তিনটির গড় ৩৫ হলে, চতুথষ সংখ্যাটি কত",
      "options": {
        "a": "৮০",
        "b": "৮১",
        "c": "৮২",
        "d": "৮৩"
      },
      "answer": "C",
      "id": 411,
      "serial_in_topic": 61
    },
    {
      "topic": "average",
      "q_num": 62,
      "question": "১১টি সংখ্যার গড় ৬০। প্রথম পাচটি সংখ্যার গড় ৫৮ এবং শের্ পাচটির গড় ৫৬ হলে, র্ষ্ঠ সংখ্যা কত",
      "options": {
        "a": "৯০",
        "b": "১১০",
        "c": "৮২",
        "d": "১২০"
      },
      "answer": "A",
      "id": 412,
      "serial_in_topic": 62
    },
    {
      "topic": "average",
      "q_num": 63,
      "question": "৯টি সংখ্যার যোগফল ৯২১। এদের ৪টির গড় ১০৪ । বাকি ৫টির গড় কত?",
      "options": {
        "a": "১০১",
        "b": "১০৩",
        "c": "১০৯",
        "d": "১০৫"
      },
      "answer": "A",
      "id": 413,
      "serial_in_topic": 63
    },
    {
      "topic": "average",
      "q_num": 64,
      "question": "চারটি ক্রমিক বিজোড় পূণষসংখ্যার গড় সবষদা",
      "options": {
        "a": "বিজোড় সংখ্যা",
        "b": "৪ দ্বারা বিভাজ্য",
        "c": "জোড় সংখ্যা",
        "d": "খ ও গ উভয়ই"
      },
      "answer": "D",
      "id": 414,
      "serial_in_topic": 64
    },
    {
      "topic": "average",
      "q_num": 65,
      "question": "১/২,৫/৬,৩/৪,৫/১২ এর গড় কত?",
      "options": {
        "a": "৫/৪",
        "b": "৫/৮",
        "c": "৫/২",
        "d": "৫/২২"
      },
      "answer": "B",
      "id": 415,
      "serial_in_topic": 65
    },
    {
      "topic": "average",
      "q_num": 66,
      "question": "জুলাই মাসের দদনিক বৃষ্টিবাতের গড় ০.৬৫ সে.মি. ছিল। ঐ মাসের মোট বৃষ্টিপাতের পরিমাণ কত সে.মি?",
      "options": {
        "a": "২০.১৫",
        "b": "২০.২০",
        "c": "২০.২৫",
        "d": "২০.৩০"
      },
      "answer": "A",
      "id": 416,
      "serial_in_topic": 66
    },
    {
      "topic": "average",
      "q_num": 67,
      "question": "Expense to produce x units is y=5x+10. what will be the average expense to produce 10 units?",
      "options": {
        "a": "6",
        "b": "8",
        "c": "9",
        "d": "10"
      },
      "answer": "A",
      "id": 417,
      "serial_in_topic": 67
    },
    {
      "topic": "average",
      "q_num": 68,
      "question": "পিতা ও মাতার বয়সের গড় ৪৫ বছর। আবার পিতা ও পুত্রের বয়সের গড় ৩৬ বছর। পুত্রের বয়স কত?",
      "options": {
        "a": "১৮",
        "b": "১৪",
        "c": "৯",
        "d": "১৫"
      },
      "answer": "A",
      "id": 418,
      "serial_in_topic": 68
    },
    {
      "topic": "average",
      "q_num": 69,
      "question": "A train reaches city B from city A in 46 minutes. If the distance between the two cities is 59.8 miles, what is the average speed of the train",
      "options": {
        "a": "76",
        "b": "77",
        "c": "78",
        "d": "79"
      },
      "answer": "C",
      "id": 419,
      "serial_in_topic": 69
    },
    {
      "topic": "average",
      "q_num": 70,
      "question": "ঢাকা ও চট্টগ্রামের দুরত্ব ৩০০ কি.মি। ঢাকা হতে একটি টে্রন সকাল ৭টায় ছেেড় গিেয় বিকেল ৩টায় চট্টগ্রাম পৌছে। টে্রনটির গড় গতি ঘন্টায় কত ছিল?",
      "options": {
        "a": "৩৭.৫",
        "b": "৩৭.৬",
        "c": "৩৭.৭",
        "d": "৩৭.৮"
      },
      "answer": "A",
      "id": 420,
      "serial_in_topic": 70
    },
    {
      "topic": "average",
      "q_num": 71,
      "question": "১১ জন লোকের গড় ওজন ৭০ কেজি। ৯০ কেজি ওজনের একজন লোক চলে গেলে বাকিদের গড় ওজন কত কেজি?",
      "options": {
        "a": "৬৭",
        "b": "৬৮",
        "c": "৬৯",
        "d": "৭০"
      },
      "answer": "B",
      "id": 421,
      "serial_in_topic": 71
    },
    {
      "topic": "average",
      "q_num": 72,
      "question": "একজন মাঝি সে্রাতের অনুকুলে ২ ঘন্টায় ৫মাইল যায় এবং ৪ ঘন্টায় প্রাথমিক অবস্থানে ফিরে আসে। তার মোট ভ্রমনে প্রতি ঘন্টায় গড়বেগ কত?",
      "options": {
        "a": "৭/৩",
        "b": "৬/৩",
        "c": "৪/৩",
        "d": "৫/৩"
      },
      "answer": "D",
      "id": 422,
      "serial_in_topic": 72
    },
    {
      "topic": "average",
      "q_num": 73,
      "question": "কোন এক শহলে কোনোন এক দিনের বিভিন্ন সমেয়র তাপমাত্রা হল: 6AM=12.4°, 10 AM=14.4° C, 4 PM=18.8°C AND 11PM=9°C হলে। ঐ দিনের গড় তাপমাত্রা কত?",
      "options": {
        "a": "১৮.৬৫",
        "b": "১৪.৫০",
        "c": "১৩.৬৫",
        "d": "১২.৪০"
      },
      "answer": "C",
      "id": 423,
      "serial_in_topic": 73
    },
    {
      "topic": "average",
      "q_num": 74,
      "question": "দুটো সংখ্যার গড় R একটি সংখ্যা P হলে অপরটি কত?",
      "options": {
        "a": "2P",
        "b": "R-P",
        "c": "2R",
        "d": "2R-P"
      },
      "answer": "D",
      "id": 424,
      "serial_in_topic": 74
    },
    {
      "topic": "average",
      "q_num": 75,
      "question": "দশটি সংখ্যার গড় ৭। প্রতিটিকে ১২ দিেয় গুণ করা হলে নতুন সংখ্যাগুলোর গড় কত?",
      "options": {
        "a": "৮৪",
        "b": "৮৬",
        "c": "৮২",
        "d": "৮৮"
      },
      "answer": "A",
      "id": 425,
      "serial_in_topic": 75
    },
    {
      "topic": "average",
      "q_num": 76,
      "question": "৫০টি সংখ্যার গড় ৩২। দুটি সংখ্যা ৩৫ ও ৬৫ বাদ দেয়া হলে বাকী সংখ্যাগুলো গড় কত?",
      "options": {
        "a": "৩২.১৫",
        "b": "৩৩.৫০",
        "c": "৩১.২৫",
        "d": "৩২.৫০"
      },
      "answer": "C",
      "id": 426,
      "serial_in_topic": 76
    },
    {
      "topic": "average",
      "q_num": 77,
      "question": "If unit price of x books is 5 taka and unit price of y books is 8 taka what is the average price of the books?",
      "options": {
        "a": "\\(5x+8y\\/\\(x+y\\",
        "b": "\\(5x+4y\\/\\(xy\\",
        "c": "\\(5x+4y\\/13",
        "d": "\\(40xy\\/\\(x+y\\"
      },
      "answer": "A",
      "id": 427,
      "serial_in_topic": 77
    },
    {
      "topic": "average",
      "q_num": 78,
      "question": "পিতা, মাতা ও পুত্রের বয়সের গড় ৩৭ বছর। আবার পিতা ও পুত্রের বয়সের গড় ৩৫ বছর। মাতার বয়স কত?",
      "options": {
        "a": "৩৮",
        "b": "৪১",
        "c": "৪৫",
        "d": "৪৮"
      },
      "answer": "B",
      "id": 428,
      "serial_in_topic": 78
    },
    {
      "topic": "average",
      "q_num": 79,
      "question": "১০টি সংখ্যার যোগফল ৩৮০। এদের প্রথম ৪টির গড় ৫০ এবং শের্ ৫টির গড় ৩২। পঞ্চম সংখ্যাটি কত?",
      "options": {
        "a": "১০",
        "b": "১৫",
        "c": "২০",
        "d": "২৫"
      },
      "answer": "C",
      "id": 429,
      "serial_in_topic": 79
    },
    {
      "topic": "average",
      "q_num": 80,
      "question": "১ থেকে ১৬ পযষন্ত বিজোড় সংখ্যাগুলোর গড় কত?",
      "options": {
        "a": "৮",
        "b": "৫.৭০",
        "c": "৭",
        "d": "৫.৮০"
      },
      "answer": "A",
      "id": 430,
      "serial_in_topic": 80
    },
    {
      "topic": "average",
      "q_num": 81,
      "question": "একজন বোলার গেড় ১৪ রান দিেয় ১২ উইকেট পান। পরবতষী খেলায় গেড় ৬ রান দিেয় ৪টি উইকেট পান। এখন তার উইকেট প্রতি গড় রান কত?",
      "options": {
        "a": "৯",
        "b": "১০",
        "c": "১২",
        "d": "১৪"
      },
      "answer": "C",
      "id": 431,
      "serial_in_topic": 81
    },
    {
      "topic": "average",
      "q_num": 82,
      "question": "একজন বোলার গেড় ১৮ রান দিেয় ১০ উইকেট পান। পরবতষী খেলায় গেড় ৪ রান দিেয় ৪টি উইকেট পান। এখন তার উইকেট প্রতি গড় রান কত?",
      "options": {
        "a": "১২",
        "b": "১৬",
        "c": "১৪",
        "d": "১৮"
      },
      "answer": "C",
      "id": 432,
      "serial_in_topic": 82
    },
    {
      "topic": "average",
      "q_num": 83,
      "question": "নিচের সংখ্যা সারিতে একটি ভুল সংখ্যা রেয়ছে সে সংখ্যাটি চিহ্নিত করুন ◌ৃ,৩,৯,২৭,৮১,২৪০,৭২৯",
      "options": {
        "a": "২৭",
        "b": "২৪০",
        "c": "৮১",
        "d": "৭২৯"
      },
      "answer": "B",
      "id": 433,
      "serial_in_topic": 83
    },
    {
      "topic": "average",
      "q_num": 84,
      "question": "নিচের সংখ্যা সারির সুণ্যস্থানে বসবে কত? ১,৩,৯,২৭,....,২৪৩,৭২৯",
      "options": {
        "a": "৮১",
        "b": "৮৫",
        "c": "২৮",
        "d": "৮৬"
      },
      "answer": "A",
      "id": 434,
      "serial_in_topic": 84
    },
    {
      "topic": "average",
      "q_num": 85,
      "question": "ক,খ,গ এর গড় বয়স ৪০ বছর। ক ও গ এর বয়স একত্রে ৮৫ বছর। খ এর বয়স কত?",
      "options": {
        "a": "৩৬",
        "b": "৩৮",
        "c": "৩৫",
        "d": "৩৪"
      },
      "answer": "C",
      "id": 435,
      "serial_in_topic": 85
    },
    {
      "topic": "average",
      "q_num": 86,
      "question": "তিনটি সংখ্যার গড় ২০। প্রথম দুটি সংখ্যা ২২ এবং ২৮ হলে তৃতীয় সংখ্যাটি কত?",
      "options": {
        "a": "২৫",
        "b": "২৪",
        "c": "১০",
        "d": "২৬"
      },
      "answer": "C",
      "id": 436,
      "serial_in_topic": 86
    },
    {
      "topic": "number_problems",
      "q_num": 1,
      "question": "একটি সংখ্যার বর্গ এবং সংখ্যাটির দ্বিগুণ ৬৩। সংখ্যাটি কত?",
      "options": {
        "a": "৭",
        "b": "-৯",
        "c": "৭ অথবা -৯",
        "d": "কোনটিই নয়"
      },
      "answer": "C",
      "id": 437,
      "serial_in_topic": 1
    },
    {
      "topic": "number_problems",
      "q_num": 2,
      "question": "৬টি ক্রম বিজোড় সংখ্যার সমষ্টি বৃহত্তমটির দ্বিগুনের চেেয় ৩৮ বেশি। সংখ্যা ছয়টির যোগফল কত?",
      "options": {
        "a": "৫০",
        "b": "৫৭",
        "c": "৭০",
        "d": "কোনটিই নয়"
      },
      "answer": "D",
      "id": 438,
      "serial_in_topic": 2
    },
    {
      "topic": "number_problems",
      "q_num": 3,
      "question": "৬টি সংখ্যার গড় হলো ৭। যদি ২টি সংখ্যা বা দেওয়া হয় তাহলে বাকী সংখ্যাগুলোর গড় হয় ৮। তাহলে বাদ দোয়া সংখ্যা ২টির যোগফল কত?",
      "options": {
        "a": "১৫",
        "b": "১৩",
        "c": "১১",
        "d": "১০"
      },
      "answer": "D",
      "id": 439,
      "serial_in_topic": 3
    },
    {
      "topic": "number_problems",
      "q_num": 4,
      "question": "একটি সংখ্যার গড় X ক যদি প্রথম দুইটি সংখ্যার গড় হয় Y এবং শের্ দুটি সংখ্যার গড় হয় Z, তাহলে দ্বিতীয় সংখ্যাটি কত?",
      "options": {
        "a": "2Y+27-3X",
        "b": "3X-Y-Z",
        "c": "2Y-2Z-3X",
        "d": "X-Y-Z"
      },
      "answer": "A",
      "id": 440,
      "serial_in_topic": 4
    },
    {
      "topic": "number_problems",
      "q_num": 5,
      "question": "What is 10% of 20% of 30% of 4000?",
      "options": {
        "a": "20",
        "b": "24",
        "c": "240",
        "d": "12",
        "e": "None of These"
      },
      "answer": "B",
      "id": 441,
      "serial_in_topic": 5
    },
    {
      "topic": "number_problems",
      "q_num": 6,
      "question": "দুটি সংখ্যার গুণফল ২০ এবং যোগফল ১২ হলে বড় সংখ্যাটি কত?",
      "options": {
        "a": "৫",
        "b": "১০",
        "c": "৪",
        "d": "৯"
      },
      "answer": "B",
      "id": 442,
      "serial_in_topic": 6
    },
    {
      "topic": "number_problems",
      "q_num": 7,
      "question": "What is 125% of 125?",
      "options": {
        "a": "131.25",
        "b": "150",
        "c": "13.25",
        "d": "156.25",
        "e": "None of These"
      },
      "answer": "D",
      "id": 443,
      "serial_in_topic": 7
    },
    {
      "topic": "number_problems",
      "q_num": 8,
      "question": "একটি সড়কের পাশে ২৫টি বািড় আছে। তার মধ্যে ১০টি বািড়তে ৬টার কম রুম আছে অন্য ১০টি বািড়তে ৭টির ও বেশি রুম আছে এবঙ ৪টি বািড়তে ৪টির ও বেশি রুম আছে। ৬,৭ বা৮ রুম বির্শ্টি বািড়র সংখ্যা কত?",
      "options": {
        "a": "১০",
        "b": "১৫",
        "c": "১৯",
        "d": "১১"
      },
      "answer": "B",
      "id": 444,
      "serial_in_topic": 8
    },
    {
      "topic": "number_problems",
      "q_num": 9,
      "question": "যদি ২টি সংখ্যার গুণফল ২০ এবঙ যোগফল ১২ হয় তবে বড় দুটির সংখ্যা হয়",
      "options": {
        "a": "৫",
        "b": "১০",
        "c": "৪",
        "d": "৯"
      },
      "answer": "B",
      "id": 445,
      "serial_in_topic": 9
    },
    {
      "topic": "number_problems",
      "q_num": 11,
      "question": "৪ হাত লম্বা একখানা গড় থেকে ইঞ্চি লম্বা কতটি দাড় দতরি করা সম্ভব?",
      "options": {
        "a": "৮",
        "b": "৯",
        "c": "১০",
        "d": "১১"
      },
      "answer": "B",
      "id": 446,
      "serial_in_topic": 10
    },
    {
      "topic": "number_problems",
      "q_num": 14,
      "question": "What Percent of 20 is 16?",
      "options": {
        "a": "70",
        "b": "65",
        "c": "45",
        "d": "80",
        "e": "None of These"
      },
      "answer": "D",
      "id": 447,
      "serial_in_topic": 11
    },
    {
      "topic": "number_problems",
      "q_num": 16,
      "question": "If 7/5 of a number is 6 more than 20% of the number, what is 11/10 of the number?",
      "options": {
        "a": "5.5",
        "b": "0.33",
        "c": "0.22",
        "d": "1.54"
      },
      "answer": "A",
      "id": 448,
      "serial_in_topic": 12
    },
    {
      "topic": "number_problems",
      "q_num": 17,
      "question": "What is .05 Percent of 6.5",
      "options": {
        "a": "0.13",
        "b": "0.013",
        "c": "0.325",
        "d": "0.00325",
        "e": "None of These"
      },
      "answer": "D",
      "id": 449,
      "serial_in_topic": 13
    },
    {
      "topic": "number_problems",
      "q_num": 18,
      "question": "যদি ২টি সংখ্যার যোগফল ১৪ এবং তাদের পাথষক্য ২ হয়, তবে দুটি সংখ্যার গুণফল কত?",
      "options": {
        "a": "২৪",
        "b": "২৮",
        "c": "৪০",
        "d": "৪৮"
      },
      "answer": "D",
      "id": 450,
      "serial_in_topic": 14
    },
    {
      "topic": "number_problems",
      "q_num": 19,
      "question": "What number is 15% of 240?",
      "options": {
        "a": "30",
        "b": "36",
        "c": "42",
        "d": "48",
        "e": "None of These"
      },
      "answer": "B",
      "id": 451,
      "serial_in_topic": 15
    },
    {
      "topic": "number_problems",
      "q_num": 20,
      "question": "যদি a+b+c সুনিষ্ট সংখ্যা হয় তবে x একটি প্রায়ই a,b,c এবং d অবশ্যই সুনিষ্ট যেখানে x সমান",
      "options": {
        "a": "০",
        "b": "১",
        "c": "২",
        "d": "৩"
      },
      "answer": "B",
      "id": 452,
      "serial_in_topic": 16
    },
    {
      "topic": "number_problems",
      "q_num": 21,
      "question": "18 is approximately what percent of 44?",
      "options": {
        "a": "41",
        "b": "51",
        "c": "34",
        "d": "43",
        "e": "None of These"
      },
      "answer": "A",
      "id": 453,
      "serial_in_topic": 17
    },
    {
      "topic": "number_problems",
      "q_num": 22,
      "question": "মনে করি একটি সংখ্যা, ৬ দ্বারা ভাগ এবং ৮ যোগ করা হল। তবে ফলাফল ১৬ হয়। সংখ্যাটি কত?",
      "options": {
        "a": "৪৮",
        "b": "৪৫",
        "c": "৫৮",
        "d": "৩৬"
      },
      "answer": "A",
      "id": 454,
      "serial_in_topic": 18
    },
    {
      "topic": "number_problems",
      "q_num": 23,
      "question": "12 is 2/5% of what?",
      "options": {
        "a": "20",
        "b": "35",
        "c": "40",
        "d": "50",
        "e": "None of These"
      },
      "answer": "D",
      "id": 455,
      "serial_in_topic": 19
    },
    {
      "topic": "number_problems",
      "q_num": 24,
      "question": "একটি সংখ্যার দ্বিগুণের সাথে ৩ গুণ যোগ করলোে ৯০ হয়। তবে সংখ্যাটি কত?",
      "options": {
        "a": "১৬",
        "b": "১৮",
        "c": "২০",
        "d": "২৪"
      },
      "answer": "B",
      "id": 456,
      "serial_in_topic": 20
    },
    {
      "topic": "number_problems",
      "q_num": 25,
      "question": "What is 1.2% of .5?",
      "options": {
        "a": "0.6",
        "b": "0.06",
        "c": "0.006",
        "d": "0.0006",
        "e": "None of These"
      },
      "answer": "C",
      "id": 457,
      "serial_in_topic": 21
    },
    {
      "topic": "number_problems",
      "q_num": 26,
      "question": "Envelopes could be purchased by Tk. 150 per pack of 100, Tk. 100 per pack of 50 or Tk. 2.50 each. What is the minimum number of envelopes that could be purchased for Tk. 725?",
      "options": {
        "a": "280",
        "b": "290",
        "c": "270",
        "d": "300"
      },
      "answer": "B",
      "id": 458,
      "serial_in_topic": 22
    },
    {
      "topic": "number_problems",
      "q_num": 27,
      "question": "What is 5% of 6%?",
      "options": {
        "a": "30",
        "b": "0.3",
        "c": "0.003",
        "d": "0.0003",
        "e": "None of These"
      },
      "answer": "C",
      "id": 459,
      "serial_in_topic": 23
    },
    {
      "topic": "number_problems",
      "q_num": 28,
      "question": "তিনটি ক্রমিক পূনষ সংখ্যার গুণফল ২১০। সংখ্যা তিনটির যোগফল কত?",
      "options": {
        "a": "১২",
        "b": "১৩",
        "c": "১৪",
        "d": "১৮"
      },
      "answer": "D",
      "id": 460,
      "serial_in_topic": 24
    },
    {
      "topic": "number_problems",
      "q_num": 29,
      "question": "Which of the following is equal to 85 percent of 160?",
      "options": {
        "a": "1.88",
        "b": "13.6",
        "c": "188",
        "d": "1360",
        "e": "None of These"
      },
      "answer": "C",
      "id": 461,
      "serial_in_topic": 25
    },
    {
      "topic": "number_problems",
      "q_num": 30,
      "question": "What is 1 Percent of .25?",
      "options": {
        "a": "0.25",
        "b": "0.025",
        "c": "0.0025",
        "d": "0.00025",
        "e": "None of These"
      },
      "answer": "C",
      "id": 462,
      "serial_in_topic": 26
    },
    {
      "topic": "number_problems",
      "q_num": 31,
      "question": "10% of 3000 is how much more than 5% of 3000?",
      "options": {
        "a": "100",
        "b": "150",
        "c": "175",
        "d": "200",
        "e": "None of These"
      },
      "answer": "B",
      "id": 463,
      "serial_in_topic": 27
    },
    {
      "topic": "number_problems",
      "q_num": 32,
      "question": "একটি সংখ্যা ৬৫০ হতে যত বড় ৮২০ হতে তত ছোট। সংখ্যাটি কত?",
      "options": {
        "a": "৭৩০",
        "b": "৭৩৫",
        "c": "৮০০",
        "d": "৭৮০"
      },
      "answer": "B",
      "id": 464,
      "serial_in_topic": 28
    },
    {
      "topic": "number_problems",
      "q_num": 33,
      "question": "30% of 80 is what percent of 24?",
      "options": {
        "a": "1",
        "b": "10",
        "c": "50",
        "d": "100",
        "e": "None of These"
      },
      "answer": "D",
      "id": 465,
      "serial_in_topic": 29
    },
    {
      "topic": "number_problems",
      "q_num": 34,
      "question": "একটি সংখ্যা ৭৪২ হতে যত বড় ৮৩০ হতে তত ছোট, সংখ্যাটি কত?",
      "options": {
        "a": "৭৮০",
        "b": "৭৮২",
        "c": "৭৮৬",
        "d": "৭৯০"
      },
      "answer": "C",
      "id": 466,
      "serial_in_topic": 30
    },
    {
      "topic": "number_problems",
      "q_num": 35,
      "question": "40% of 200 is what percent of 160?",
      "options": {
        "a": "100",
        "b": "80",
        "c": "60",
        "d": "50",
        "e": "None of These"
      },
      "answer": "D",
      "id": 467,
      "serial_in_topic": 31
    },
    {
      "topic": "number_problems",
      "q_num": 36,
      "question": "কোন সংখ্যা হতে ১৭৫ বিেয়াগ করে ১৩০ যোগ করলোে যোগফল ২৯৭ হবে?",
      "options": {
        "a": "৬০২",
        "b": "২৫২",
        "c": "৩৪২",
        "d": "২৩০"
      },
      "answer": "C",
      "id": 468,
      "serial_in_topic": 32
    },
    {
      "topic": "number_problems",
      "q_num": 37,
      "question": "5% of which number is 25?",
      "options": {
        "a": "5",
        "b": "250",
        "c": "500",
        "d": "1000",
        "e": "None of These"
      },
      "answer": "C",
      "id": 469,
      "serial_in_topic": 33
    },
    {
      "topic": "number_problems",
      "q_num": 38,
      "question": "একটি সযখ্যা ৬৫০ থেকে যতো বড় ৮২০ থেকে ততো ছোট। সংখ্যাটি কত?",
      "options": {
        "a": "৭৩০",
        "b": "৭৩৫",
        "c": "৮০০",
        "d": "৭৮০"
      },
      "answer": "B",
      "id": 470,
      "serial_in_topic": 34
    },
    {
      "topic": "number_problems",
      "q_num": 39,
      "question": "What is 10% of y/3,if 2y/3 is 10% of 400?",
      "options": {
        "a": "1",
        "b": "2",
        "c": "4",
        "d": "8",
        "e": "None of These"
      },
      "answer": "B",
      "id": 471,
      "serial_in_topic": 35
    },
    {
      "topic": "number_problems",
      "q_num": 40,
      "question": "৩০ কে অধষদ্বারা ভাগ করে ১০ যোগ করলোে যোগফল কত হবে?",
      "options": {
        "a": "২৫",
        "b": "৪৫",
        "c": "৫৫",
        "d": "৭০"
      },
      "answer": "D",
      "id": 472,
      "serial_in_topic": 36
    },
    {
      "topic": "number_problems",
      "q_num": 43,
      "question": "1% of .11 is?",
      "options": {
        "a": "0.011",
        "b": "0.0011",
        "c": "0.00011",
        "d": "0.111",
        "e": "None of These"
      },
      "answer": "C",
      "id": 473,
      "serial_in_topic": 37
    },
    {
      "topic": "number_problems",
      "q_num": 44,
      "question": "কোন সংখ্যার এক চতুথষাংশ থেকে ৪ বিেয়াগ করলোে বিেয়াগফল হয় ২০। সংখ্যাটি কত?",
      "options": {
        "a": "১২",
        "b": "২৪",
        "c": "৯৬",
        "d": "৪৮"
      },
      "answer": "C",
      "id": 474,
      "serial_in_topic": 38
    },
    {
      "topic": "number_problems",
      "q_num": 45,
      "question": "What is 35% of 11/16 of 160?",
      "options": {
        "a": "14",
        "b": "12",
        "c": "11",
        "d": "10",
        "e": "None of These"
      },
      "answer": "E",
      "id": 475,
      "serial_in_topic": 39
    },
    {
      "topic": "number_problems",
      "q_num": 46,
      "question": "কোন একটি সংখ্যার ১৩ গুণ থেকে ৪ গুণ বাদ দিলোে ১৭১ হয়, সংখ্যাটি কত?",
      "options": {
        "a": "১৫",
        "b": "১৭",
        "c": "১৯",
        "d": "২৯"
      },
      "answer": "C",
      "id": 476,
      "serial_in_topic": 40
    },
    {
      "topic": "number_problems",
      "q_num": 47,
      "question": "If y% of X =15, then x=?",
      "options": {
        "a": ".15y",
        "b": "1500/y",
        "c": "150/y",
        "d": "15/y",
        "e": "None of These"
      },
      "answer": "E",
      "id": 477,
      "serial_in_topic": 41
    },
    {
      "topic": "number_problems",
      "q_num": 48,
      "question": "কোন সংখ্যার ৬ গুণ হতে ১৫ গুণ ৬৩ বেশি?",
      "options": {
        "a": "৬",
        "b": "৭",
        "c": "৩",
        "d": "৯"
      },
      "answer": "B",
      "id": 478,
      "serial_in_topic": 42
    },
    {
      "topic": "number_problems",
      "q_num": 49,
      "question": "What is 35% of 11/56 of 160 ?",
      "options": {
        "a": "14",
        "b": "12",
        "c": "11",
        "d": "10",
        "e": "None of These"
      },
      "answer": "C",
      "id": 479,
      "serial_in_topic": 43
    },
    {
      "topic": "number_problems",
      "q_num": 50,
      "question": "কোন সংখ্যার ৯ গুণ হতে ১৫ গুণ ৫৪ বেশি?",
      "options": {
        "a": "৯",
        "b": "১৫",
        "c": "৫৪",
        "d": "৬"
      },
      "answer": "A",
      "id": 480,
      "serial_in_topic": 44
    },
    {
      "topic": "number_problems",
      "q_num": 51,
      "question": "Which of the following is equal to .45?",
      "options": {
        "a": "0.00045",
        "b": "0.0045",
        "c": "0.045",
        "d": "0.45",
        "e": "None of These"
      },
      "answer": "D",
      "id": 481,
      "serial_in_topic": 45
    },
    {
      "topic": "number_problems",
      "q_num": 52,
      "question": "দুইটি ক্রমিক সংখ্যার বগেষর অন্তর ১৯৯ হলে বড় সংখ্যাটি কত?",
      "options": {
        "a": "৭০",
        "b": "৮০",
        "c": "৯০",
        "d": "১০০"
      },
      "answer": "D",
      "id": 482,
      "serial_in_topic": 46
    },
    {
      "topic": "number_problems",
      "q_num": 53,
      "question": "If y% of x=29, then x=?",
      "options": {
        "a": "2900",
        "b": "29x/y",
        "c": "29y/x",
        "d": "29xy",
        "e": "None of These"
      },
      "answer": "E",
      "id": 483,
      "serial_in_topic": 47
    },
    {
      "topic": "number_problems",
      "q_num": 54,
      "question": "দুইটি ক্রমিক পুণূ সংখ্যা নিণষয় করুন, যাদের বগেষর অন্তর ৪৭",
      "options": {
        "a": "২১ এবং ২২",
        "b": "২২ এবং ২৩",
        "c": "২৩ এবং ২৪",
        "d": "২৪ এবং ২৫"
      },
      "answer": "C",
      "id": 484,
      "serial_in_topic": 48
    },
    {
      "topic": "number_problems",
      "q_num": 55,
      "question": "What percentages is 3/4 of 6/5?",
      "options": {
        "a": "1%",
        "b": "1%",
        "c": "1%",
        "d": "1%",
        "e": "None of These"
      },
      "answer": "D",
      "id": 485,
      "serial_in_topic": 49
    },
    {
      "topic": "number_problems",
      "q_num": 56,
      "question": "দুই অঙ্ক বিশিষ্ট সংখ্যার অঙ্কদ্বেয়র সমষ্টি ১০। সংখ্যাটি থেকে ১৮ বিেয়াগ করলোে অঙ্কদ্বয় স্থান পরিবতষন করে। সংখ্যাটি কত",
      "options": {
        "a": "৬৪",
        "b": "৪৬",
        "c": "৫৫",
        "d": "৭৩"
      },
      "answer": "A",
      "id": 486,
      "serial_in_topic": 50
    },
    {
      "topic": "number_problems",
      "q_num": 57,
      "question": "What is 12.5% of 220?",
      "options": {
        "a": "22",
        "b": "11",
        "c": "44",
        "d": "88",
        "e": "None of These"
      },
      "answer": "A",
      "id": 487,
      "serial_in_topic": 51
    },
    {
      "topic": "number_problems",
      "q_num": 58,
      "question": "কোন সংখ্যার ১২% নিলে ৯৬ পাওয়া যায়, সংখ্যাটি কত?",
      "options": {
        "a": "১২০",
        "b": "১০০০",
        "c": "৭২০",
        "d": "৮০০"
      },
      "answer": "D",
      "id": 488,
      "serial_in_topic": 52
    },
    {
      "topic": "number_problems",
      "q_num": 59,
      "question": "What is 20 percent of 5 percent of 240?",
      "options": {
        "a": "24",
        "b": "2.4",
        "c": "2",
        "d": "1.2",
        "e": "None of These"
      },
      "answer": "B",
      "id": 489,
      "serial_in_topic": 53
    },
    {
      "topic": "number_problems",
      "q_num": 60,
      "question": "একটি সংখ্যার অধেষক তার এক-তৃতীয়াংশের চাইতে ১৭ বেশি। সংখ্যাটি কত?",
      "options": {
        "a": "৫২",
        "b": "৮৪",
        "c": "১০২",
        "d": "২০৪"
      },
      "answer": "C",
      "id": 490,
      "serial_in_topic": 54
    },
    {
      "topic": "number_problems",
      "q_num": 61,
      "question": "What is 12.5% of 24?",
      "options": {
        "a": "3",
        "b": "2",
        "c": "4",
        "d": "5",
        "e": "None of These"
      },
      "answer": "A",
      "id": 491,
      "serial_in_topic": 55
    },
    {
      "topic": "number_problems",
      "q_num": 62,
      "question": "একটি সংখ্যা ও তার বিপরীত ভগ্নাংশের যোগফল সংখ্যাটির দ্বিগুণের সমান। সখ্যাটি কত?",
      "options": {
        "a": "১",
        "b": "-১",
        "c": "১ অথবা -১",
        "d": "২"
      },
      "answer": "C",
      "id": 492,
      "serial_in_topic": 56
    },
    {
      "topic": "number_problems",
      "q_num": 63,
      "question": "Taka 4 is 20 percent of which amount?",
      "options": {
        "a": "25",
        "b": "20",
        "c": "10",
        "d": "11",
        "e": "None of These"
      },
      "answer": "B",
      "id": 493,
      "serial_in_topic": 57
    },
    {
      "topic": "number_problems",
      "q_num": 64,
      "question": "কোন সংখার ১/৩ এর সাথে ৬ যোগ করলোে যোগফল ২৮ হয়। সংখ্যাটি কত?",
      "options": {
        "a": "৪৪",
        "b": "৬৬",
        "c": "৮৪",
        "d": "৪৮"
      },
      "answer": "B",
      "id": 494,
      "serial_in_topic": 58
    },
    {
      "topic": "number_problems",
      "q_num": 65,
      "question": "What is the percent equvalent of 4.5?",
      "options": {
        "a": "4%",
        "b": "0%",
        "c": "0.04%",
        "d": "0.00%",
        "e": "None of These"
      },
      "answer": "A",
      "id": 495,
      "serial_in_topic": 59
    },
    {
      "topic": "number_problems",
      "q_num": 66,
      "question": "পাচটি ক্রমিক জোড় সংখ্যার গড় ৮। ক্ষুদ্রতম সৃখ্যাটি কত?",
      "options": {
        "a": "৪",
        "b": "৩",
        "c": "৫",
        "d": "৬"
      },
      "answer": "A",
      "id": 496,
      "serial_in_topic": 60
    },
    {
      "topic": "number_problems",
      "q_num": 67,
      "question": "Written as a percent 5?",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "5%",
        "d": "0%",
        "e": "None of These"
      },
      "answer": "C",
      "id": 497,
      "serial_in_topic": 61
    },
    {
      "topic": "number_problems",
      "q_num": 68,
      "question": "পর পর দুটি পুণষ সংখ্যা নিণষয় কর যাদের বগেষর পাথষক্য হবে ৫৩",
      "options": {
        "a": "২৫ এবং ২৬",
        "b": "২৬ এবং ২৭",
        "c": "২৭ এবং ২৮",
        "d": "২৮ এবং ২৯"
      },
      "answer": "B",
      "id": 498,
      "serial_in_topic": 62
    },
    {
      "topic": "number_problems",
      "q_num": 69,
      "question": "X is what percent of 20 percent of 15?",
      "options": {
        "a": "x/100%",
        "b": "3/100x%",
        "c": "3x/100%",
        "d": "100/3x%",
        "e": "None of These"
      },
      "answer": "B",
      "id": 499,
      "serial_in_topic": 63
    },
    {
      "topic": "number_problems",
      "q_num": 70,
      "question": "তিনটি ভিন্ন ভিন্ন ধনাত্মক পুনষ সংখ্যার যোগফল তাদের গুণফলের সমান। ক্ষুদ্রতম সংখ্যাটি কত?",
      "options": {
        "a": "৩",
        "b": "২",
        "c": "১",
        "d": "০"
      },
      "answer": "C",
      "id": 500,
      "serial_in_topic": 64
    },
    {
      "topic": "number_problems",
      "q_num": 71,
      "question": "50 is what percent of 40?",
      "options": {
        "a": "1%",
        "b": "1%",
        "c": "0%",
        "d": "0%",
        "e": "None of These"
      },
      "answer": "A",
      "id": 501,
      "serial_in_topic": 65
    },
    {
      "topic": "number_problems",
      "q_num": 72,
      "question": "কোন সৃখ্যার তিন-চতুথষাংশ ঐ সংখ্যার দুই তৃতীয়াংশ অপেক্ষা ৫ বেশি। সংখ্যাটি কত?",
      "options": {
        "a": "৪৫",
        "b": "৫০",
        "c": "৫৫",
        "d": "৬০"
      },
      "answer": "D",
      "id": 502,
      "serial_in_topic": 66
    },
    {
      "topic": "number_problems",
      "q_num": 73,
      "question": "What percent of 60 is 80?",
      "options": {
        "e": "None of These"
      },
      "answer": "A",
      "id": 503,
      "serial_in_topic": 67
    },
    {
      "topic": "number_problems",
      "q_num": 74,
      "question": "একটি সংখ্যার ৪০% এর ১৬% এর মান ৮ হলে সংখ্যাটি কত?",
      "options": {
        "a": "১২০",
        "b": "১২৫",
        "c": "১৫০",
        "d": "১৮০"
      },
      "answer": "B",
      "id": 504,
      "serial_in_topic": 68
    },
    {
      "topic": "number_problems",
      "q_num": 77,
      "question": "What is 40% of 10/7?",
      "options": {
        "a": "2/7",
        "b": "4/7",
        "c": "10/28",
        "d": "1/28",
        "e": "None of These"
      },
      "answer": "B",
      "id": 505,
      "serial_in_topic": 69
    },
    {
      "topic": "number_problems",
      "q_num": 78,
      "question": "একটি সংখ্যা ৩১ থেকে যত বেশি, ৫৫ থেকে তত কম, সংখ্যাটি কত?",
      "options": {
        "a": "৩৯",
        "b": "৪১",
        "c": "৪৩",
        "d": "৪৫"
      },
      "answer": "C",
      "id": 506,
      "serial_in_topic": 70
    },
    {
      "topic": "number_problems",
      "q_num": 79,
      "question": "What is 10% of 20% of 30%?",
      "options": {
        "a": "0.60%",
        "b": "0.06%",
        "c": "0.00%",
        "d": "0.00%",
        "e": "None of These"
      },
      "answer": "D",
      "id": 507,
      "serial_in_topic": 71
    },
    {
      "topic": "number_problems",
      "q_num": 80,
      "question": "তিনটি ধারাবাহিক বিজোড় সংখ্যার যোগফল ৫৭, মধ্যম সংখ্যাটি কত?",
      "options": {
        "a": "১৫",
        "b": "১৭",
        "c": "১৯",
        "d": "২১"
      },
      "answer": "C",
      "id": 508,
      "serial_in_topic": 72
    },
    {
      "topic": "number_problems",
      "q_num": 81,
      "question": "The number 45 is what percentage of 9000?",
      "options": {
        "a": "0.00%",
        "b": "0.00%",
        "c": "0.01%",
        "d": "0.04%",
        "e": "None of These"
      },
      "answer": "C",
      "id": 509,
      "serial_in_topic": 73
    },
    {
      "topic": "number_problems",
      "q_num": 82,
      "question": "কোন সংখ্যার এক-পঞ্চমাংশের সাথে ৪ বৃদ্ধি করলোে সংখ্যাটির মান ঐ সংখ্যার এক-চতুথষাংশের চেেয় ১০ কমে যায়। সংখ্যাটি কত",
      "options": {
        "a": "২৫০",
        "b": "২৭০",
        "c": "২৮০",
        "d": "২০০"
      },
      "answer": "C",
      "id": 510,
      "serial_in_topic": 74
    },
    {
      "topic": "number_problems",
      "q_num": 83,
      "question": "20% written as a decimal is",
      "options": {
        "a": "0.001",
        "b": "2",
        "c": "0.02",
        "d": "0.2",
        "e": "None of These"
      },
      "answer": "C",
      "id": 511,
      "serial_in_topic": 75
    },
    {
      "topic": "number_problems",
      "q_num": 84,
      "question": "দুটি সংখ্যার অধেষকের যোগফল ৫১। তাদের পাথষক্যের এক-চতুথষাংশ ১৩। সংখ্যা দুটি কত?",
      "options": {
        "a": "৭৮,২৬",
        "b": "৭৭,২৫",
        "c": "৭৭,২৮",
        "d": "৭৮,২৫"
      },
      "answer": "B",
      "id": 512,
      "serial_in_topic": 76
    },
    {
      "topic": "number_problems",
      "q_num": 85,
      "question": "Which of the following represent 5% as a decimal?",
      "options": {
        "a": "0.005",
        "b": "0.05",
        "c": "0.5",
        "d": "5",
        "e": "None of These"
      },
      "answer": "B",
      "id": 513,
      "serial_in_topic": 77
    },
    {
      "topic": "number_problems",
      "q_num": 86,
      "question": "দুইটি সংখ্যার যোগফল ১৮ এবং তাদরে অন্তর ৪ হলে, সংখ্যা দুটি হবে যথাক্রমে",
      "options": {
        "a": "১০,৬",
        "b": "১১,৭",
        "c": "১২,৬",
        "d": "১৪,৪"
      },
      "answer": "B",
      "id": 514,
      "serial_in_topic": 78
    },
    {
      "topic": "number_problems",
      "q_num": 87,
      "question": "The number 50 is what percentage of 100000?",
      "options": {
        "a": "0%",
        "b": "0.01%",
        "c": "0.00%",
        "d": "0%",
        "e": "None of These"
      },
      "answer": "B",
      "id": 515,
      "serial_in_topic": 79
    },
    {
      "topic": "number_problems",
      "q_num": 88,
      "question": "একটি ধনাত্মক সংখ্যার সাথে ৪ যোগ করে যোগফলকে বর্গ করলোে ৬২৫ হয়। সংখ্যাটি কত?",
      "options": {
        "a": "২০",
        "b": "২২",
        "c": "২১",
        "d": "২৫"
      },
      "answer": "C",
      "id": 516,
      "serial_in_topic": 80
    },
    {
      "topic": "number_problems",
      "q_num": 91,
      "question": "What is 10% of y/3, if 2y/3 is 10% of 400?",
      "options": {
        "a": "1",
        "b": "2",
        "c": "4",
        "d": "8",
        "e": "None of These"
      },
      "answer": "E",
      "id": 517,
      "serial_in_topic": 81
    },
    {
      "topic": "number_problems",
      "q_num": 92,
      "question": "কোন সংখ্যার দ্বিগুণের সাথে ৩ যোগ করলোে যোগফল সংখ্যাটি থেকে ৭ বেশি হয়। সংখ্যাটি কত?",
      "options": {
        "a": "২",
        "b": "৩",
        "c": "৪",
        "d": "৭"
      },
      "answer": "C",
      "id": 518,
      "serial_in_topic": 82
    },
    {
      "topic": "number_problems",
      "q_num": 93,
      "question": "If m>0 and x is m percent of y, y is what perecnt of x?",
      "options": {
        "a": "100m",
        "b": "1/100m",
        "c": "1/m",
        "d": "10/m",
        "e": "None of These"
      },
      "answer": "E",
      "id": 519,
      "serial_in_topic": 83
    },
    {
      "topic": "number_problems",
      "q_num": 94,
      "question": "দুটি সংখ্যার যোগফল ১৫ এবং বিেয়াগফল ১৩, ছোট সংখ্যাটি কত?",
      "options": {
        "a": "১",
        "b": "২",
        "c": "১৪",
        "d": "১৮"
      },
      "answer": "A",
      "id": 520,
      "serial_in_topic": 84
    },
    {
      "topic": "number_problems",
      "q_num": 95,
      "question": "what is 10% of y/3, if 2y/3 is 10% of 600?",
      "options": {
        "a": "1",
        "b": "2",
        "c": "3",
        "d": "4",
        "e": "None of These"
      },
      "answer": "C",
      "id": 521,
      "serial_in_topic": 85
    },
    {
      "topic": "number_problems",
      "q_num": 96,
      "question": "What is a percent of b divided by percent of a ?",
      "options": {
        "a": "a",
        "b": "b",
        "c": "1",
        "d": "10",
        "e": "None of These"
      },
      "answer": "C",
      "id": 522,
      "serial_in_topic": 86
    },
    {
      "topic": "number_problems",
      "q_num": 97,
      "question": "দুইটি সংখ্যার যোগফল ৭০.৬০। বড় সংখ্যাটি ছোট সংখ্যা থেকে ৪.৫০ বেশি। ছোট সংখ্যাটি কত?",
      "options": {
        "a": "৩৩.০৫",
        "b": "৩৩.০৬",
        "c": "৩২.০৯",
        "d": "৩৩.০৮"
      },
      "answer": "A",
      "id": 523,
      "serial_in_topic": 87
    },
    {
      "topic": "number_problems",
      "q_num": 98,
      "question": "If 25 percent of P is equal to 10 percent of q,and pq !=0 ,then p is what perecnt of q?",
      "options": {
        "a": "0.03%",
        "b": "0%",
        "c": "0%",
        "d": "0%",
        "e": "None of These"
      },
      "answer": "E",
      "id": 524,
      "serial_in_topic": 88
    },
    {
      "topic": "number_problems",
      "q_num": 99,
      "question": "If basis points are defined so that 1 percent is equal to 200 basis points ,then 82.5 percent is how many basis points greater than 62.5 percent.",
      "options": {
        "a": "0.02",
        "b": "0.2",
        "c": "2000",
        "d": "200",
        "e": "None of These"
      },
      "answer": "E",
      "id": 525,
      "serial_in_topic": 89
    },
    {
      "topic": "number_problems",
      "q_num": 100,
      "question": "If basis point are defined so that 1 percent is equal to 100 basis points then 82.5 percent is how many basis points greater than 62.5 percents?",
      "options": {
        "a": "0.02",
        "b": "0.2",
        "c": "20",
        "d": "200",
        "e": "None of These"
      },
      "answer": "E",
      "id": 526,
      "serial_in_topic": 90
    },
    {
      "topic": "number_problems",
      "q_num": 101,
      "question": "B and C are points on the straight line AD, on which AB=BC=CD.What percent of AC is AD",
      "options": {
        "a": "0%",
        "b": "0.67%",
        "c": "1.33%",
        "d": "2%",
        "e": "None of These"
      },
      "answer": "E",
      "id": 527,
      "serial_in_topic": 91
    },
    {
      "topic": "number_problems",
      "q_num": 102,
      "question": "Out of a group of 80 applicants for a exam ,20 persons failed to appear for the first part of the test.What percent of the total applicants appeared for the part of the test?",
      "options": {
        "a": "4",
        "b": "16",
        "c": "25",
        "d": "75",
        "e": "None of These"
      },
      "answer": "D",
      "id": 528,
      "serial_in_topic": 92
    },
    {
      "topic": "number_problems",
      "q_num": 103,
      "question": "If an inspector rejects 2% of a product as defective ,How many products did he examine if total rejected products are 150?",
      "options": {
        "a": "1500",
        "b": "3000",
        "c": "7500",
        "d": "9000",
        "e": "None of These"
      },
      "answer": "C",
      "id": 529,
      "serial_in_topic": 93
    },
    {
      "topic": "number_problems",
      "q_num": 104,
      "question": "If an inspector rejects .08% of a product as defective ,How many products did he examine if total rejected products are 2?",
      "options": {
        "a": "1500",
        "b": "500",
        "c": "2000",
        "d": "2500",
        "e": "None of These"
      },
      "answer": "D",
      "id": 530,
      "serial_in_topic": 94
    },
    {
      "topic": "number_problems",
      "q_num": 105,
      "question": "A manufacturer finds that .4% of his production is defective and unsuitable for marketing .How many of 1000 units produced will be rejected?",
      "options": {
        "a": "4",
        "b": "40",
        "c": "400",
        "d": "140",
        "e": "None of These"
      },
      "answer": "B",
      "id": 531,
      "serial_in_topic": 95
    },
    {
      "topic": "number_problems",
      "q_num": 106,
      "question": "দুটি ক্রমিক পূণষ বগেষর অন্তর ৯৩ হলে সংখ্যাদ্বয় কত?",
      "options": {
        "a": "৪৬,৪৭",
        "b": "৪৪,৪৫",
        "c": "৪৩,৪৪",
        "d": "৫০,৫১"
      },
      "answer": "A",
      "id": 532,
      "serial_in_topic": 96
    },
    {
      "topic": "number_problems",
      "q_num": 107,
      "question": "Three friends shared the cost of a tape recorder .If Andy ,Barbara, and Dona each paid Tk 12 and tk 18 respectively,then Donna paid what percent of the cost of the the tape recorder?",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0.33%",
        "d": "0%",
        "e": "None of These"
      },
      "answer": "B",
      "id": 533,
      "serial_in_topic": 97
    },
    {
      "topic": "number_problems",
      "q_num": 108,
      "question": "In a shipment of 120 machine parts 10% weredefective .In another shipment of 80 machine parts 5% were defective .for the two shipments combined ,What percent of the machine parts were defective?",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0%",
        "d": "0%",
        "e": "None of These"
      },
      "answer": "C",
      "id": 534,
      "serial_in_topic": 98
    },
    {
      "topic": "fractions",
      "q_num": 1,
      "question": "কোনটি ক্ষুদ্রতম?",
      "options": {
        "a": "০.৫",
        "b": "ক্ষ্র০.৫",
        "c": "০.৩৫/০.৭৫",
        "d": "০.৬ক্ষ্র৩"
      },
      "answer": "C",
      "id": 535,
      "serial_in_topic": 1
    },
    {
      "topic": "fractions",
      "q_num": 2,
      "question": "নিচের কোনটি ১ এর সবচেেয় কাছাকাছি?",
      "options": {
        "a": "৫/(৫+০.০৫)",
        "b": "৫/(৫+০.০৫)",
        "c": "৫/(৫+০.৫)",
        "d": "৫/{৫+(০.০৫)২}"
      },
      "answer": "D",
      "id": 536,
      "serial_in_topic": 2
    },
    {
      "topic": "fractions",
      "q_num": 3,
      "question": "নিচের কোনটি ৮০০০০ এর সমান",
      "options": {
        "a": "22x204",
        "b": "23x105",
        "c": "\\(23\\2x104",
        "d": "0.23x107"
      },
      "answer": "D",
      "id": 537,
      "serial_in_topic": 3
    },
    {
      "topic": "fractions",
      "q_num": 4,
      "question": "নিচের কোন সংখ্যা ১/২ এর চেেয় বড়?",
      "options": {
        "a": "৪/৭",
        "b": "২/৫",
        "c": "৪/৯",
        "d": "১/১০"
      },
      "answer": "A",
      "id": 538,
      "serial_in_topic": 4
    },
    {
      "topic": "fractions",
      "q_num": 5,
      "question": "নিচের কোন ভগ্নাংশটি সবচেেয় বড়?",
      "options": {
        "a": "৫/৬",
        "b": "১১/১৪",
        "c": "১২/১৫",
        "d": "২৯/৩৫"
      },
      "answer": "A",
      "id": 539,
      "serial_in_topic": 5
    },
    {
      "topic": "fractions",
      "q_num": 6,
      "question": "নিচের কোন ভগ্নাংশটি সবচেেয় বড়?.",
      "options": {
        "a": "৫/৬",
        "b": "১১/১৪",
        "c": "১২/১৫",
        "d": "২৯/৩৫"
      },
      "answer": "A",
      "id": 540,
      "serial_in_topic": 6
    },
    {
      "topic": "fractions",
      "q_num": 7,
      "question": "নিচের কোন ভগ্নাংশটি সবচেেয় ছোট?.",
      "options": {
        "a": "৮/৭",
        "b": "১০/৯",
        "c": "২১/২০",
        "d": "১০১৩/১০১২"
      },
      "answer": "D",
      "id": 541,
      "serial_in_topic": 7
    },
    {
      "topic": "fractions",
      "q_num": 8,
      "question": "নিচের কোন ভঘ্নাংশটির মান সবচেেয় কম",
      "options": {
        "a": "৮/৭",
        "b": "১০/৯",
        "c": "২১/২০",
        "d": "১০১৩/১০১২"
      },
      "answer": "D",
      "id": 542,
      "serial_in_topic": 8
    },
    {
      "topic": "fractions",
      "q_num": 9,
      "question": "নিচের কোন ভঘ্নাংশটির সবচেেয় মান কম",
      "options": {
        "a": "৫/৬",
        "b": "৯/১১",
        "c": "৭/৯",
        "d": "৮/১৩"
      },
      "answer": "D",
      "id": 543,
      "serial_in_topic": 9
    },
    {
      "topic": "fractions",
      "q_num": 10,
      "question": "নিচের কোন ভঘ্নাংশটি সবচেেয় বড়",
      "options": {
        "a": "৩/৭",
        "b": "৪/৯",
        "c": "৯/১৯",
        "d": "১১/২৫"
      },
      "answer": "C",
      "id": 544,
      "serial_in_topic": 10
    },
    {
      "topic": "fractions",
      "q_num": 11,
      "question": "নিচের কোন ভঘ্নাংশটি সবচেেয় বড়?",
      "options": {
        "a": "২/৩",
        "b": "৩/৫",
        "c": "৭/১১",
        "d": "১৩/২৩"
      },
      "answer": "A",
      "id": 545,
      "serial_in_topic": 11
    },
    {
      "topic": "fractions",
      "q_num": 12,
      "question": "নিচের কোন সংখ্যাটি ১/২ এর চেেয় বড়?",
      "options": {
        "a": "২/৫",
        "b": "৪/৭",
        "c": "৪/৯",
        "d": "১/১০"
      },
      "answer": "B",
      "id": 546,
      "serial_in_topic": 12
    },
    {
      "topic": "fractions",
      "q_num": 13,
      "question": "১২৭ সংখ্যাটি ১/৮ এর কত গুণ বড়?",
      "options": {
        "a": "১/৫০০",
        "b": "১/৫০",
        "c": "২/৫০০",
        "d": "২/৫০"
      },
      "answer": "A",
      "id": 547,
      "serial_in_topic": 13
    },
    {
      "topic": "fractions",
      "q_num": 14,
      "question": "a,b এর চেেয় ছোট হয়, তবে কোন সংখ্যাটি a এর চেেয় বড় এবং b এর চেেয় ছোট?",
      "options": {
        "a": "ab/2",
        "b": "\\(a+b\\/2",
        "c": "300",
        "d": "460"
      },
      "answer": "B",
      "id": 548,
      "serial_in_topic": 14
    },
    {
      "topic": "fractions",
      "q_num": 15,
      "question": "কোন সংখ্যাটি সবচেেয় বড়",
      "options": {
        "a": "\\(2+2+2\\2",
        "b": "{\\(2+2\\2}2",
        "c": "\\(2x2x2\\2",
        "d": "2+22+22"
      },
      "answer": "B",
      "id": 549,
      "serial_in_topic": 15
    },
    {
      "topic": "fractions",
      "q_num": 16,
      "question": "নিচের কোন ভগ্নাংশটি ১/২ থেকে ছোট",
      "options": {
        "a": "১/৫",
        "b": "১/৪",
        "c": "২/৫",
        "d": "১৬/২৫",
        "e": "১৬/১৯"
      },
      "answer": "C",
      "id": 550,
      "serial_in_topic": 16
    },
    {
      "topic": "fractions",
      "q_num": 17,
      "question": "Which of the following fractions is closest in value to 2/3?",
      "options": {
        "a": "11/19",
        "b": "13/19",
        "c": "14/19",
        "d": "15/19",
        "e": "16/19"
      },
      "answer": "B",
      "id": 551,
      "serial_in_topic": 17
    },
    {
      "topic": "fractions",
      "q_num": 18,
      "question": "একটি পদের জন্য আবেদনকারীর মধ্যে ১/২ অংশ বাদ পেড়ছিল মৌলিক মেইলে আবেদন করার সময় এবঙ অন্য ৩ বাদ পেড় সাক্ষাৎকারের সময় বাকী ২/৫ আঙশ ছিল সবষমোট আসনের জন্য তবে পদটির জন্য কতজন আবেদক ছিল?",
      "options": {
        "a": "১০",
        "b": "২০",
        "c": "৩০",
        "d": "৪০",
        "e": "৫০"
      },
      "answer": "C",
      "id": 552,
      "serial_in_topic": 18
    },
    {
      "topic": "fractions",
      "q_num": 19,
      "question": "যদি তোমার বাবার বেতনের ১/১০ অংশ ব্যয় জামা কাপেড় ১/৩ অংশ খাদ্যে এবং র্ধে। তবে কত অংশ বেতন বাকি থাকে অন্য সকল ব্যেয়ল এবঙ সঞ্চেয়র জন্য",
      "options": {
        "a": "১৭/৩০",
        "b": "৩/৫",
        "c": "১৯/৩০",
        "d": "২/৩",
        "e": "৭/১০"
      },
      "answer": "A",
      "id": 553,
      "serial_in_topic": 19
    },
    {
      "topic": "fractions",
      "q_num": 20,
      "question": "নিচের কোন ভগ্নাংশটি সবচেেয় বড় .?",
      "options": {
        "a": "৫/৬",
        "b": "১১/১৪",
        "c": "১২/২৫",
        "d": "১৭/২১"
      },
      "answer": "A",
      "id": 554,
      "serial_in_topic": 20
    },
    {
      "topic": "fractions",
      "q_num": 21,
      "question": "কি আহমেদ তার বেতনের ১/৩ আংশ ব্যবহার করেছিল তার বাড়ী ভাড়া বাবদ এবং বাকী টাকার ৩/৫ অংশ ব্যবহার করেছিল ৩টি সুট ক্রেয়র জন্য। তবে দুটি ব্যেয়র পর তার হাতে কত ছিল?",
      "options": {
        "a": "২০০",
        "b": "৪০০০",
        "c": "৮০০০০",
        "d": "১২০০০"
      },
      "answer": "D",
      "id": 555,
      "serial_in_topic": 21
    },
    {
      "topic": "fractions",
      "q_num": 22,
      "question": "নিচের কোন ভগ্নাংশটি ক্ষুদ্রতম?..",
      "options": {
        "a": "৫/১৩",
        "b": "১৮/৩৬",
        "c": "১৬/৩১",
        "d": "৪/১৮"
      },
      "answer": "D",
      "id": 556,
      "serial_in_topic": 22
    },
    {
      "topic": "fractions",
      "q_num": 23,
      "question": "কোনটি ক্ষুদ্রতম?....",
      "options": {
        "a": "১/৭",
        "b": "৩/১৪",
        "c": "৭/৪২",
        "d": "৩/২৮"
      },
      "answer": "D",
      "id": 557,
      "serial_in_topic": 23
    },
    {
      "topic": "fractions",
      "q_num": 24,
      "question": "কোন ভগ্নাংশটি ২/৩ থেকে বড়?",
      "options": {
        "a": "৩৩/৫০",
        "b": "৮/১১",
        "c": "৩/৫",
        "d": "১১/১৭"
      },
      "answer": "B",
      "id": 558,
      "serial_in_topic": 24
    },
    {
      "topic": "fractions",
      "q_num": 25,
      "question": "কোন সংখ্যাটি ১ এর সবচেেয় কাছে?",
      "options": {
        "a": "৩/(৩+.০৩)",
        "b": "৩÷{৩+(.০৩)২}",
        "c": "৩/(৩+.৩)",
        "d": "৩/(৩+.৩)"
      },
      "answer": "B",
      "id": 559,
      "serial_in_topic": 25
    },
    {
      "topic": "fractions",
      "q_num": 26,
      "question": "২৫/২৭-১/৩ এর সহজ প্রকাশ কত?",
      "options": {
        "a": "৩/২৫",
        "b": "৯/২৫",
        "c": "১৬/২৭",
        "d": "৩/২৭"
      },
      "answer": "C",
      "id": 560,
      "serial_in_topic": 26
    },
    {
      "topic": "fractions",
      "q_num": 27,
      "question": "কোন সংখ্যাটি ক্ষুদ্রতম..",
      "options": {
        "a": "২/৯",
        "b": "৫/২৭",
        "c": "৭/৩৬",
        "d": "১১/৪৫"
      },
      "answer": "B",
      "id": 561,
      "serial_in_topic": 27
    },
    {
      "topic": "fractions",
      "q_num": 28,
      "question": "নিচের কোন ভগ্নাংশটি ক্ষুদ্রতম?.....",
      "options": {
        "a": "১/৩",
        "b": "৩/৬",
        "c": "২/৭",
        "d": "৫/২১"
      },
      "answer": "D",
      "id": 562,
      "serial_in_topic": 28
    },
    {
      "topic": "fractions",
      "q_num": 29,
      "question": "নিচের কোন ভগ্নাংশটি ক্ষুদ্রতম?...",
      "options": {
        "a": "৩৪.৭/১৬৩",
        "b": "১২৫/৫০১",
        "c": "১৭৩/৭০০",
        "d": "১০.৯/৪২.৭"
      },
      "answer": "A",
      "id": 563,
      "serial_in_topic": 29
    },
    {
      "topic": "fractions",
      "q_num": 30,
      "question": "কোন সংখ্যাটি ক্ষুদ্রতম?.",
      "options": {
        "a": "১/৭",
        "b": "৩/১৪",
        "c": "৭/৪২",
        "d": "৩/২৮"
      },
      "answer": "D",
      "id": 564,
      "serial_in_topic": 30
    },
    {
      "topic": "fractions",
      "q_num": 31,
      "question": "কোন সংখ্যাটি ক্ষুদ্রতম?",
      "options": {
        "a": "১/১১",
        "b": "৩/৩১",
        "c": "২/২১",
        "d": "০.০২"
      },
      "answer": "D",
      "id": 565,
      "serial_in_topic": 31
    },
    {
      "topic": "fractions",
      "q_num": 32,
      "question": "নিম্নের সবচেেয় ছোট সংখ্যা কোনটি?..",
      "options": {
        "a": "-\\(৫৬/৮)",
        "b": "০/৩",
        "c": "১০/২",
        "d": "ক্ষ্র৪"
      },
      "answer": "A",
      "id": 566,
      "serial_in_topic": 32
    },
    {
      "topic": "fractions",
      "q_num": 33,
      "question": "নিম্নের ভগ্নাংশগুলোর মধ্যে কোনটি বৃহত্তম?.",
      "options": {
        "a": "৩/৪",
        "b": "৭/৮",
        "c": "৫/১২",
        "d": "৬/৭"
      },
      "answer": "B",
      "id": 567,
      "serial_in_topic": 33
    },
    {
      "topic": "fractions",
      "q_num": 34,
      "question": "নিচের ভগ্নাংশগুলোর মধ্যে কোনটি বৃহত্তম?.",
      "options": {
        "a": "৩/৪",
        "b": "৫/৬",
        "c": "৭/৯",
        "d": "১১/১৮"
      },
      "answer": "B",
      "id": 568,
      "serial_in_topic": 34
    },
    {
      "topic": "fractions",
      "q_num": 35,
      "question": "নিচের ভগ্নাংশগুলোর মধ্যে কোনটি ক্ষুদ্রতম?...",
      "options": {
        "a": "৩/৫",
        "b": "৩/৭",
        "c": "৪/৯",
        "d": "২/৩"
      },
      "answer": "B",
      "id": 569,
      "serial_in_topic": 35
    },
    {
      "topic": "fractions",
      "q_num": 36,
      "question": "নিচের ভগ্নাংশগুলোর মধ্যে কোনটি বৃহত্তম?....",
      "options": {
        "a": "২/৩",
        "b": "৩/৪",
        "c": "৪/৫",
        "d": "৫/৭"
      },
      "answer": "C",
      "id": 570,
      "serial_in_topic": 36
    },
    {
      "topic": "fractions",
      "q_num": 37,
      "question": "১৬ এর সাধারন ভগ্নাংশ কোনটি?",
      "options": {
        "a": "৭/৬",
        "b": "৫৩/৪৫",
        "c": "১১৫/৯৯",
        "d": "২৯/২৫"
      },
      "answer": "D",
      "id": 571,
      "serial_in_topic": 37
    },
    {
      "topic": "fractions",
      "q_num": 38,
      "question": "\\(৫/৬এর৬/৭÷১০/৭) এর সাথে কত যোগ করলোে ১ হবে",
      "options": {
        "a": "১/২",
        "b": "১/৩",
        "c": "১/৪",
        "d": "২/৭"
      },
      "answer": "A",
      "id": 572,
      "serial_in_topic": 38
    },
    {
      "topic": "fractions",
      "q_num": 39,
      "question": "কোন ভগ্নাংশটি লঘিষ্ট আকারে প্রকাশিত?",
      "options": {
        "a": "৭৭/১৪৩",
        "b": "১১৩/৩৫৫",
        "c": "৯০২/২৮৯",
        "d": "৩৪৩/১০০১"
      },
      "answer": "B",
      "id": 573,
      "serial_in_topic": 39
    },
    {
      "topic": "fractions",
      "q_num": 40,
      "question": "\\(.1x.01x.001\\\\(.2x.02x.002\\এর মান কত?...",
      "options": {
        "a": "১/৮০",
        "b": "১/৮০০",
        "c": "১/৮০০০",
        "d": "১/৮"
      },
      "answer": "D",
      "id": 574,
      "serial_in_topic": 40
    },
    {
      "topic": "fractions",
      "q_num": 42,
      "question": "১২৫% এর সমান ভগ্নাংশ কোনটি?",
      "options": {
        "a": "৩/২",
        "b": "৬/৫",
        "c": "৫/৪",
        "d": "৩/৪"
      },
      "answer": "C",
      "id": 575,
      "serial_in_topic": 41
    },
    {
      "topic": "fractions",
      "q_num": 43,
      "question": "নিম্নের ভগ্নাংশগুলোর মধ্যে কোনটি ক্ষুদ্রতম?....",
      "options": {
        "a": "৩/৪",
        "b": "৫/৯",
        "c": "৭/১২",
        "d": "১১/১৪"
      },
      "answer": "B",
      "id": 576,
      "serial_in_topic": 42
    },
    {
      "topic": "fractions",
      "q_num": 44,
      "question": "নিম্নলিখিত ভগ্নাংশগুলোর মধ্যে কোনটির মান সবচেেয় বড়?.",
      "options": {
        "a": "১/২",
        "b": "১৩/১৫",
        "c": "৪/৫",
        "d": "২৩/৩০"
      },
      "answer": "B",
      "id": 577,
      "serial_in_topic": 43
    },
    {
      "topic": "fractions",
      "q_num": 45,
      "question": "\\(১২৫/২৭)-২/৩ এর সহজ প্রকাশ",
      "options": {
        "a": "৩/২৫",
        "b": "৯/২৫",
        "c": "৫/২০",
        "d": "৩/২০"
      },
      "answer": "B",
      "id": 578,
      "serial_in_topic": 44
    },
    {
      "topic": "fractions",
      "q_num": 46,
      "question": "০০১/(০.১x০.১)= কত?.",
      "options": {
        "a": "০.১০০০",
        "b": "০.০১০",
        "c": "০.০০১",
        "d": "১.০০০"
      },
      "answer": "A",
      "id": 579,
      "serial_in_topic": 45
    },
    {
      "topic": "fractions",
      "q_num": 47,
      "question": "৩/৮+০.০৫=কত",
      "options": {
        "a": "১৭/৪০",
        "b": "৭/৪",
        "c": "১৮/৪০",
        "d": "২৭/৪০"
      },
      "answer": "A",
      "id": 580,
      "serial_in_topic": 46
    },
    {
      "topic": "fractions",
      "q_num": 48,
      "question": "কোন ভগ্নাংশটি ২/৩ থেকে বড়?..",
      "options": {
        "a": "৩৩/৫০",
        "b": "৮/১১",
        "c": "৩/৫",
        "d": "১৩/২৭"
      },
      "answer": "B",
      "id": 581,
      "serial_in_topic": 47
    },
    {
      "topic": "fractions",
      "q_num": 49,
      "question": "কোন সংখ্যার ২/৭ অংশ ৬৪ এর সমান?.",
      "options": {
        "a": "১৪৫",
        "b": "২৪৮",
        "c": "২১৭",
        "d": "২২৪"
      },
      "answer": "D",
      "id": 582,
      "serial_in_topic": 48
    },
    {
      "topic": "fractions",
      "q_num": 50,
      "question": "নিম্নে উল্লেখিত ভগ্নাংশগুলোর মধ্যে কোনটির মান সবচেেয় বেশি?.",
      "options": {
        "a": "১/২০",
        "b": "১/১৬",
        "c": "১/১৫",
        "d": "১/১২"
      },
      "answer": "D",
      "id": 583,
      "serial_in_topic": 49
    },
    {
      "topic": "fractions",
      "q_num": 51,
      "question": "দুটি ভগ্নাংশের গুণফল ১৫/২৮। এদের একটি ৫/৭ হলে অপর ভগ্নাংশটি কত?.",
      "options": {
        "a": "২/৩",
        "b": "১/৩",
        "c": "৩/৪",
        "d": "১/৪"
      },
      "answer": "C",
      "id": 584,
      "serial_in_topic": 50
    },
    {
      "topic": "fractions",
      "q_num": 52,
      "question": "১৫০% এর সমান ভগ্নাংশ কত?.",
      "options": {
        "a": "৫/৬",
        "b": "৩/৫",
        "c": "৩/২",
        "d": "৪/৫"
      },
      "answer": "C",
      "id": 585,
      "serial_in_topic": 51
    },
    {
      "topic": "fractions",
      "q_num": 53,
      "question": "কোন সংখ্যাটি ক্ষুদ্রতম?........",
      "options": {
        "a": "১/১১",
        "b": "২/২১",
        "c": "৩/৩১",
        "d": "০.০২"
      },
      "answer": "A",
      "id": 586,
      "serial_in_topic": 52
    },
    {
      "topic": "fractions",
      "q_num": 54,
      "question": "\\(১৫÷১৫x১৫)/{\\(১৫÷১৫) এর ১৫ সরল করলোে তার মান হবে.",
      "options": {
        "a": "০",
        "b": "১",
        "c": "২২৫",
        "d": "১/২২৫"
      },
      "answer": "B",
      "id": 587,
      "serial_in_topic": 53
    },
    {
      "topic": "fractions",
      "q_num": 55,
      "question": "কোন সংখ্যার ৪/৭ অংশ ৮০ এর সমান.",
      "options": {
        "a": "১৪০",
        "b": "১৬০",
        "c": "২০",
        "d": "২৪০"
      },
      "answer": "A",
      "id": 588,
      "serial_in_topic": 54
    },
    {
      "topic": "fractions",
      "q_num": 56,
      "question": "২৫/২৭-১/৩ এর সহজ প্রকাশ.",
      "options": {
        "a": "৩/২৫",
        "b": "৯/২৫",
        "c": "১৬/২৭",
        "d": "৩/২৭"
      },
      "answer": "C",
      "id": 589,
      "serial_in_topic": 55
    },
    {
      "topic": "fractions",
      "q_num": 57,
      "question": "\\(১১/২৩x৩/৪)/(১১/২৩ এর ৩/৪)=(৪৪/৬৯)/(৪৪/৬৯)=৪৪/৬৯=৬৯/৪৪= কত.",
      "options": {
        "a": "১৬/৯",
        "b": "৩/৪",
        "c": "৯/১৬",
        "d": "১"
      },
      "answer": "D",
      "id": 590,
      "serial_in_topic": 56
    },
    {
      "topic": "fractions",
      "q_num": 58,
      "question": "২০/২১ এর মধ্যে ২/৭ কত বার আছে?.",
      "options": {
        "a": "৭/৩",
        "b": "১০/৩",
        "c": "১৭/৪",
        "d": "১৩/৩"
      },
      "answer": "B",
      "id": 591,
      "serial_in_topic": 57
    },
    {
      "topic": "fractions",
      "q_num": 59,
      "question": "কোন সংখ্যার ৩/৭ অংশ ৪৮ এর সমান?.",
      "options": {
        "a": "১২৮",
        "b": "১৩২",
        "c": "১১২",
        "d": "১৪০"
      },
      "answer": "C",
      "id": 592,
      "serial_in_topic": 58
    },
    {
      "topic": "fractions",
      "q_num": 60,
      "question": "এক ঘন্টায় কত অংশ দুপুর ১১:৫০ হতে ১২:১৪ এর মধ্যে অতিক্রান্ত হেয়ছে?.",
      "options": {
        "a": "৫/১২",
        "b": "২/৫",
        "c": "১/৫",
        "d": "৫/৭"
      },
      "answer": "B",
      "id": 593,
      "serial_in_topic": 59
    },
    {
      "topic": "fractions",
      "q_num": 61,
      "question": "৭/১৭ এর হর এবঙ লবের সঙ্গে কোন সংখ্যাটি যোগ করলোে ভগ্নাংশটি ৩/৫ হয়?.",
      "options": {
        "a": "৭",
        "b": "৮",
        "c": "৬",
        "d": "৯"
      },
      "answer": "B",
      "id": 594,
      "serial_in_topic": 60
    },
    {
      "topic": "fractions",
      "q_num": 62,
      "question": "দুইটি ভগ্নাংশের গুণফল ২৫/২৮। এদের একটি ৫/৭ হলে, অপর ভগ্নাংশটি কত?",
      "options": {
        "a": "২/৩",
        "b": "১/৩",
        "c": "৫/৪",
        "d": "৩/৪"
      },
      "answer": "C",
      "id": 595,
      "serial_in_topic": 61
    },
    {
      "topic": "fractions",
      "q_num": 63,
      "question": "৯/?=?/৮১ কোন সংখ্যা। প্রশ্নবোধক স্থান দুটিতে বসবে?",
      "options": {
        "a": "৮১",
        "b": "৪৫",
        "c": "২৭",
        "d": "৯"
      },
      "answer": "C",
      "id": 596,
      "serial_in_topic": 62
    },
    {
      "topic": "fractions",
      "q_num": 64,
      "question": "দুটি সংখ্যার সমষ্টি ১০ এবং তাদের গুণফল ২০। সংখ্যা দুটির গুণিতক বিপরীত সংখ্যার যোগফল কত?",
      "options": {
        "a": "২",
        "b": "৪",
        "c": "১/২",
        "d": "১/১০"
      },
      "answer": "C",
      "id": 597,
      "serial_in_topic": 63
    },
    {
      "topic": "fractions",
      "q_num": 65,
      "question": "কোন সংখ্যার ১/২ অংশের সাথে ৬ যোগ করলোে সংখ্যাটির ২/৩ অংশ হবে সংখ্যাটি কত?",
      "options": {
        "a": "৫৩",
        "b": "৬৩",
        "c": "৩৬",
        "d": "৩৫"
      },
      "answer": "C",
      "id": 598,
      "serial_in_topic": 64
    },
    {
      "topic": "fractions",
      "q_num": 66,
      "question": "তিনটি সংখ্যার গুণফল ১/৩। প্রথম দুটি সংখ্যা ২/৭ এবং ৭/৫ হলে তৃতীয়টি কত?",
      "options": {
        "a": "৩/৫",
        "b": "৫/৬",
        "c": "১/৩",
        "d": "৫/৮"
      },
      "answer": "B",
      "id": 599,
      "serial_in_topic": 65
    },
    {
      "topic": "fractions",
      "q_num": 67,
      "question": "এক কেজি খাটি দুধে ২০০ গ্রাম পানি মিশ্রিত করলোে মিশ্রিত দুধে পানির পরিমাণ হবে",
      "options": {
        "a": "১/৫ অংশ",
        "b": "১/৬ অংশ",
        "c": "১/৮ অংশ",
        "d": "১/১০ অংশ"
      },
      "answer": "B",
      "id": 600,
      "serial_in_topic": 66
    },
    {
      "topic": "fractions",
      "q_num": 68,
      "question": "একটি বাশের ২/৫ অংশ লাল, ১/৪ অংশ কাল, ও ১/৩ অংশ সবুজ কাগজে আবৃত। অবশিষ্ট ৬ মিটার হলে মোট বাশটির দদৈর্ঘ্য্য",
      "options": {
        "a": "৬০ মিটার",
        "b": "১২০ মিটার",
        "c": "১৮০ মিটার",
        "d": "৩৬০ মিটার"
      },
      "answer": "D",
      "id": 601,
      "serial_in_topic": 67
    },
    {
      "topic": "fractions",
      "q_num": 69,
      "question": "একটি পাত্র ১/২ অংশ ভতিষ আছে। যদি ৮ গ্যালন সরানো হয় তবে ১/১০ অংশ ভতিষ থাকে। পাত্রটি কত গ্যালন ধারন করে?",
      "options": {
        "a": "২২ গ্যালন",
        "b": "১৬ গ্যালন",
        "c": "২০ গ্যালন",
        "d": "২৪ গ্যালন"
      },
      "answer": "C",
      "id": 602,
      "serial_in_topic": 68
    },
    {
      "topic": "fractions",
      "q_num": 70,
      "question": "৪টি ১ টাকার মোট ও ৮টি ২ টাকার নোট একত্রে ৮টি ৫ টাকার নোটের কত অংশ?",
      "options": {
        "a": "১/৪",
        "b": "১/২",
        "c": "১/৮",
        "d": "১/১৬"
      },
      "answer": "B",
      "id": 603,
      "serial_in_topic": 69
    },
    {
      "topic": "fractions",
      "q_num": 71,
      "question": "একটি বাশের ২/৫ অংশ লাল, ১/৪ অংশ কাল, ও ১/৩ অংশ সবুজ কাগজে আবৃত। অবশিষ্ট ২ মিটার হলে মোট বাশটির দদৈর্ঘ্য্য কত",
      "options": {
        "a": "১০০ মিটার",
        "b": "১১০ মিটার",
        "c": "১২০ মিটার",
        "d": "১২৫ মিটার"
      },
      "answer": "C",
      "id": 604,
      "serial_in_topic": 70
    },
    {
      "topic": "fractions",
      "q_num": 72,
      "question": "এক ব্যাক্তি মাসিক বেতনের ১/২০ অংশ মহাঘষ ভাতা পান, তার মাসিক আয় ৪২০০ টাকা হলে তার মহাঘষ ভাতা কত?",
      "options": {
        "a": "৪২০ টাকা",
        "b": "২১০ টাকা",
        "c": "৮৪০ টাকা",
        "d": "১০৫ টাকা"
      },
      "answer": "B",
      "id": 605,
      "serial_in_topic": 71
    },
    {
      "topic": "fractions",
      "q_num": 73,
      "question": "কোন সম্পত্তির ১/২ অংশের মূল্য ১৬০০ টাকা হলে ঐ সম্পত্তির ১/৮ অংশের মূল্যের ৪ গুণ কত?",
      "options": {
        "a": "৪০০০",
        "b": "৩২০০",
        "c": "১৬০০",
        "d": "৬৪০০"
      },
      "answer": "C",
      "id": 606,
      "serial_in_topic": 72
    },
    {
      "topic": "fractions",
      "q_num": 74,
      "question": "যখন ১২০ জন অতিথি একটি অডিটরিয়ামে বসেন, তখন অডিটরিয়ামের ৩/৪ অংশ পূণষ হয়। অডিটরিয়ামের সিট সংখ্যা কত?",
      "options": {
        "a": "১৬০",
        "b": "১৮০",
        "c": "১৯০",
        "d": "২০০"
      },
      "answer": "A",
      "id": 607,
      "serial_in_topic": 73
    },
    {
      "topic": "fractions",
      "q_num": 75,
      "question": "কোন ব্যক্তির মোট সম্পত্তির ২/৩ অংশের মূল্য ৯০০০০টাকা। ঐ ব্যক্তির সম্পুণষ সম্পত্তির মূল্য কত?",
      "options": {
        "a": "১৩৫০০০",
        "b": "৬০০০০",
        "c": "১৫০০০০",
        "d": "১২০০০০"
      },
      "answer": "A",
      "id": 608,
      "serial_in_topic": 74
    },
    {
      "topic": "fractions",
      "q_num": 76,
      "question": "একটি স্কুলের ৪/৫ ভাগ ছাত্র ফুটবল খেলা দেখতে গিেয়ছিল। তার ১/৪ ভাগ বাসে চেড় গিেয়ছিল। যদি ১৬৪ জন ছাত্র বাসে গিেয় থাকে তবে স্কুলের ছাত্র সংখ্যা কত?",
      "options": {
        "a": "৬৫৬",
        "b": "৮২০",
        "c": "৩২৮০",
        "d": "১৬৪০"
      },
      "answer": "B",
      "id": 609,
      "serial_in_topic": 75
    },
    {
      "topic": "fractions",
      "q_num": 77,
      "question": "একটি নতুন বাইসাইকেলের দাম ২৫০০ টাকা। প্রতি বছর শেরে্ সাইকেলটির মূল্য পূবষতন মূল্যের ৪/৫ এ দাড়ায়। ৩য় বছর শেরে্ সাইকেলের মূল্য কত হবে?",
      "options": {
        "a": "১০০০",
        "b": "১২৮০",
        "c": "১২০০",
        "d": "১৩৪০"
      },
      "answer": "B",
      "id": 610,
      "serial_in_topic": 76
    },
    {
      "topic": "simplification",
      "q_num": 1,
      "question": "নিচের কোনটি ৮০০০০ এর সমান?",
      "options": {
        "a": "22x204",
        "b": "\\(23\\2x104",
        "c": "23x105",
        "d": "0.23x107"
      },
      "answer": "D",
      "id": 611,
      "serial_in_topic": 1
    },
    {
      "topic": "simplification",
      "q_num": 2,
      "question": "\\(১০)২ সংখ্যাটি (০.০১)৩ এর কত গুণ",
      "options": {
        "a": "১০৫",
        "b": "১০৬",
        "c": "১০৭",
        "d": "১০৮"
      },
      "answer": "D",
      "id": 612,
      "serial_in_topic": 2
    },
    {
      "topic": "simplification",
      "q_num": 3,
      "question": "নিচের কোনটি ৬৪০০০০ এর সমান",
      "options": {
        "a": "23x205",
        "b": "22x204",
        "c": "23x207",
        "d": "\\(23\\2x108"
      },
      "answer": "B",
      "id": 613,
      "serial_in_topic": 3
    },
    {
      "topic": "simplification",
      "q_num": 4,
      "question": "নিচের কোনটি ৮০০০০০ এর সমান?",
      "options": {
        "a": "০.২৩x২০৭",
        "b": "২২x২০৪",
        "c": "২৩x২০৫",
        "d": "২৩x১০৫"
      },
      "answer": "D",
      "id": 614,
      "serial_in_topic": 4
    },
    {
      "topic": "simplification",
      "q_num": 5,
      "question": "০০০৫÷০.০০৮=?",
      "options": {
        "a": "০.০০৬২৫",
        "b": "০.০৬২৫",
        "c": "০.৬২৫",
        "d": "৬.২৫০"
      },
      "answer": "B",
      "id": 615,
      "serial_in_topic": 5
    },
    {
      "topic": "simplification",
      "q_num": 6,
      "question": "\\(০.০১x১)২=?",
      "options": {
        "a": "০.১",
        "b": "০.০১",
        "c": "০.০০১",
        "d": "০.০০০১"
      },
      "answer": "D",
      "id": 616,
      "serial_in_topic": 6
    },
    {
      "topic": "simplification",
      "q_num": 7,
      "question": "১০০x০.০৯=?",
      "options": {
        "a": "৯",
        "b": "৯০০",
        "c": "৯০",
        "d": "০.৯"
      },
      "answer": "A",
      "id": 617,
      "serial_in_topic": 7
    },
    {
      "topic": "simplification",
      "q_num": 8,
      "question": "\\(৩+৪)২ নিচের কোনটির সমান?",
      "options": {
        "a": "২৫",
        "b": "৪৯",
        "c": "১৪",
        "d": "কোনটিই নয়"
      },
      "answer": "B",
      "id": 618,
      "serial_in_topic": 8
    },
    {
      "topic": "simplification",
      "q_num": 9,
      "question": "\\(০.১x০.০৩x০.০০৪)/(০.০১x০.০৬)= এর মান কত",
      "options": {
        "a": "০.২",
        "b": "০.০২",
        "c": "০.০০২",
        "d": "০.০০০২"
      },
      "answer": "B",
      "id": 619,
      "serial_in_topic": 9
    },
    {
      "topic": "simplification",
      "q_num": 10,
      "question": "\\(০.২x০.০২x০.০০২)/(০.০১x০.০৪)= এর মান কত",
      "options": {
        "a": "০.১",
        "b": "০.২",
        "c": "০.০২",
        "d": "০.০০২"
      },
      "answer": "D",
      "id": 620,
      "serial_in_topic": 10
    },
    {
      "topic": "simplification",
      "q_num": 11,
      "question": "১৪৪২-১৪৩২=?",
      "options": {
        "a": "৭",
        "b": "১৪৭",
        "c": "২৮৭",
        "d": "২৪১"
      },
      "answer": "C",
      "id": 621,
      "serial_in_topic": 11
    },
    {
      "topic": "simplification",
      "q_num": 12,
      "question": "\\(০.৪x০.৫x০.০২)/০.০১=?",
      "options": {
        "a": "০.৪",
        "b": "০.০৪",
        "c": "০.০০৪",
        "d": "০.০০০৪"
      },
      "answer": "B",
      "id": 622,
      "serial_in_topic": 12
    },
    {
      "topic": "simplification",
      "q_num": 13,
      "question": "১০০x০.০১=?",
      "options": {
        "a": "১",
        "b": "১০",
        "c": "১০০",
        "d": ".০১"
      },
      "answer": "A",
      "id": 623,
      "serial_in_topic": 13
    },
    {
      "topic": "simplification",
      "q_num": 14,
      "question": "০০১x০.০১ =কত",
      "options": {
        "a": "০.০১",
        "b": "০.০২",
        "c": "০.০০১",
        "d": "০.০০০০১"
      },
      "answer": "D",
      "id": 624,
      "serial_in_topic": 14
    },
    {
      "topic": "simplification",
      "q_num": 15,
      "question": "\\(০.০০২)২=?",
      "options": {
        "a": "০.০০৪",
        "b": "০.০০০৪",
        "c": "০.০০০০৪",
        "d": "০.০০০০০৪"
      },
      "answer": "D",
      "id": 625,
      "serial_in_topic": 15
    },
    {
      "topic": "simplification",
      "q_num": 16,
      "question": "১, ০.০১ ও ০.০০১১ এর সমষ্টি কত?",
      "options": {
        "a": "০.০১১১১",
        "b": "১.১১১১",
        "c": "১১.১১০১",
        "d": "১.১০১১১"
      },
      "answer": "B",
      "id": 626,
      "serial_in_topic": 16
    },
    {
      "topic": "simplification",
      "q_num": 17,
      "question": "১x০.০৫x০.০০২=কত",
      "options": {
        "a": "০.০০০০১",
        "b": "০.০০০০০১",
        "c": "০.০০০১",
        "d": "০.০০১"
      },
      "answer": "A",
      "id": 627,
      "serial_in_topic": 17
    },
    {
      "topic": "simplification",
      "q_num": 18,
      "question": "\\(.২x০.০৩x০.০০৪)/(.৩x.০৪x.০০৫) এর মান কত?",
      "options": {
        "a": "৩/১০",
        "b": "১৭/৩০",
        "c": "১১/২০",
        "d": "৭/১০"
      },
      "answer": "A",
      "id": 628,
      "serial_in_topic": 18
    },
    {
      "topic": "simplification",
      "q_num": 19,
      "question": "৮/৩৫÷৪/১৫=?",
      "options": {
        "a": "১/২",
        "b": "৬/৭",
        "c": "৩২/৫২৫",
        "d": "৭/৬"
      },
      "answer": "B",
      "id": 629,
      "serial_in_topic": 19
    },
    {
      "topic": "simplification",
      "q_num": 20,
      "question": "০০০১০+(৫x১০-৩)= কত",
      "options": {
        "a": "৩.০০৫১০",
        "b": "৩.০৫০১০",
        "c": "৩.০০০১৫",
        "d": "৩.০০০৬০"
      },
      "answer": "A",
      "id": 630,
      "serial_in_topic": 20
    },
    {
      "topic": "simplification",
      "q_num": 21,
      "question": "\\(৩/৪÷১/৬)/(১১/২৩ এর ৩/৪)= কত",
      "options": {
        "a": "২৪",
        "b": "৩৬",
        "c": "১৮",
        "d": "১২"
      },
      "answer": "B",
      "id": 631,
      "serial_in_topic": 21
    },
    {
      "topic": "simplification",
      "q_num": 22,
      "question": "\\(১১/২৩x৩/৪)/(১১/২৩ এর ৩/৪)=কত",
      "options": {
        "a": "১৬/৯",
        "b": "৯/১৬",
        "c": "৩/৪",
        "d": "১"
      },
      "answer": "D",
      "id": 632,
      "serial_in_topic": 22
    },
    {
      "topic": "simplification",
      "q_num": 23,
      "question": "০০১/(০.১x০.১) = কত",
      "options": {
        "a": "০.১",
        "b": "০.০০১",
        "c": "০.০১০",
        "d": "১.০০"
      },
      "answer": "A",
      "id": 633,
      "serial_in_topic": 23
    },
    {
      "topic": "simplification",
      "q_num": 24,
      "question": "\\(৪/৫÷১/১০)/(৪/৫x১/১০) সমান কত?",
      "options": {
        "a": "৯০",
        "b": "১০০",
        "c": "৮৮",
        "d": "১০৪"
      },
      "answer": "B",
      "id": 634,
      "serial_in_topic": 24
    },
    {
      "topic": "simplification",
      "q_num": 25,
      "question": "৩/৮+০.০৫=কত",
      "options": {
        "a": "১৭/৪০",
        "b": "১৩/৪০",
        "c": "৭/৪",
        "d": "২৭/৪০"
      },
      "answer": "A",
      "id": 635,
      "serial_in_topic": 25
    },
    {
      "topic": "simplification",
      "q_num": 26,
      "question": "\\(১৫÷১৫x১৫)/(১৫÷১৫ এর ১৫) সরল করলোে তার মান হবে?",
      "options": {
        "a": "০",
        "b": "২২৫",
        "c": "১",
        "d": "১/১২৫"
      },
      "answer": "B",
      "id": 636,
      "serial_in_topic": 26
    },
    {
      "topic": "simplification",
      "q_num": 27,
      "question": "\\(১৫+১৫x১৫)/(১৫-১৫ এর ১৫) সরল করলোে তার মান হবে?",
      "options": {
        "a": "অসংঙ্গিয়ত",
        "b": "১",
        "c": "২২৫",
        "d": "১/১২৫"
      },
      "answer": "A",
      "id": 637,
      "serial_in_topic": 27
    },
    {
      "topic": "simplification",
      "q_num": 28,
      "question": "\\(.1x.01x.001\\\\(.2x.02x.002\\এর মান কত?",
      "options": {
        "a": "১/২",
        "b": "১/৪০",
        "c": "১/৮",
        "d": "১/৮০"
      },
      "answer": "C",
      "id": 638,
      "serial_in_topic": 28
    },
    {
      "topic": "simplification",
      "q_num": 29,
      "question": "ক্ষ্র২/(ক্ষ্র৬+২=কত",
      "options": {
        "a": "ক্ষ্র৩+ক্ষ্র২",
        "b": "৩-ক্ষ্র২",
        "c": "ক্ষ্র৩-ক্ষ্র২",
        "d": "ক্ষ্র৩+ক্ষ্র২"
      },
      "answer": "C",
      "id": 639,
      "serial_in_topic": 29
    },
    {
      "topic": "simplification",
      "q_num": 30,
      "question": "\\(ক্ষ্র৭+ক্ষ্র৭)২=কত",
      "options": {
        "a": "২৮",
        "b": "১৮",
        "c": "৩৮",
        "d": "৪৮"
      },
      "answer": "A",
      "id": 640,
      "serial_in_topic": 30
    },
    {
      "topic": "simplification",
      "q_num": 31,
      "question": "(0.8)2-(0.3)2/(0.8+0.3)=",
      "options": {
        "a": "1.1",
        "b": "0.5",
        "c": "0.4",
        "d": "2.4"
      },
      "answer": "B",
      "id": 641,
      "serial_in_topic": 31
    },
    {
      "topic": "simplification",
      "q_num": 32,
      "question": "(0.7)2-(0.3)2/(0.7+0.3)=",
      "options": {
        "a": "0.7",
        "b": "0.4",
        "c": "0.3",
        "d": "0.5"
      },
      "answer": "B",
      "id": 642,
      "serial_in_topic": 32
    },
    {
      "topic": "simplification",
      "q_num": 33,
      "question": "(0.5)2+2/0.09",
      "options": {
        "a": "5",
        "b": "25",
        "c": "50",
        "d": "55"
      },
      "answer": "B",
      "id": 643,
      "serial_in_topic": 33
    },
    {
      "topic": "simplification",
      "q_num": 34,
      "question": "\\(-১)x\\(-১)x\\(-১)+(-১)(-১)=কত",
      "options": {
        "a": "২",
        "b": "১",
        "c": "-২",
        "d": "০"
      },
      "answer": "D",
      "id": 644,
      "serial_in_topic": 34
    },
    {
      "topic": "simplification",
      "q_num": 35,
      "question": "\\(-১)২-(-১)৩=কত",
      "options": {
        "a": "-২",
        "b": "০",
        "c": "-১",
        "d": "২"
      },
      "answer": "D",
      "id": 645,
      "serial_in_topic": 35
    },
    {
      "topic": "simplification",
      "q_num": 36,
      "question": "-৩-(-১০) এর মান -১০-(-৩) অপেক্ষা কত বেশি?",
      "options": {
        "a": "০",
        "b": "৬",
        "c": "৭",
        "d": "১৪"
      },
      "answer": "D",
      "id": 646,
      "serial_in_topic": 36
    },
    {
      "topic": "simplification",
      "q_num": 37,
      "question": "-২+(-২)-{-\\(২)}-২ এর মান কত?",
      "options": {
        "a": "-৬",
        "b": "-৪",
        "c": "-২",
        "d": "৪"
      },
      "answer": "B",
      "id": 647,
      "serial_in_topic": 37
    },
    {
      "topic": "simplification",
      "q_num": 38,
      "question": "[৩.৭৫{৭.৮-২.৩-(১২.৭৫-৯.২৫)}]-৫= কত",
      "options": {
        "a": "১.৭",
        "b": "১.৫",
        "c": "১.৪",
        "d": "২.৫"
      },
      "answer": "D",
      "id": 648,
      "serial_in_topic": 38
    },
    {
      "topic": "simplification",
      "q_num": 39,
      "question": "১ কে ১০০ বার ১ দিেয় গুণ করে গুণফলকে ১দিেয় ভাগ করে, ভাগফল থেকে ১ বিেয়াগ করে, বিেয়াগফলকে ১০০ দ্বারা ভাগ করলোে ভাগফল কত?",
      "options": {
        "a": "১",
        "b": "০",
        "c": "১/১০০",
        "d": "৯৯/১০০"
      },
      "answer": "B",
      "id": 649,
      "serial_in_topic": 39
    },
    {
      "topic": "simplification",
      "q_num": 40,
      "question": "১০০x০.০৯=কত",
      "options": {
        "a": "৯",
        "b": "৯০০",
        "c": "৯০",
        "d": "০.৯"
      },
      "answer": "A",
      "id": 650,
      "serial_in_topic": 40
    },
    {
      "topic": "simplification",
      "q_num": 41,
      "question": "৩-(-১০) এর মান -১০-(-৩) অপেক্ষা কত বেশি?",
      "options": {
        "a": "২০",
        "b": "৬",
        "c": "৭",
        "d": "১৪"
      },
      "answer": "A",
      "id": 651,
      "serial_in_topic": 41
    },
    {
      "topic": "simplification",
      "q_num": 42,
      "question": "৩x০.৩÷০.১=কত",
      "options": {
        "a": "১",
        "b": "২",
        "c": "৬",
        "d": "৯"
      },
      "answer": "D",
      "id": 652,
      "serial_in_topic": 42
    },
    {
      "topic": "measurement_geometry",
      "q_num": 1,
      "question": "যদি দুটি বগেষর ক্ষেত্রফলের অনুপাত ২:১ হয়, তবে তাদের পরিসীমা",
      "options": {
        "a": "১:২",
        "b": "১:ক্ষ্র২",
        "c": "ক্ষ্র২:১",
        "d": "২:১"
      },
      "answer": "C",
      "id": 653,
      "serial_in_topic": 1
    },
    {
      "topic": "measurement_geometry",
      "q_num": 2,
      "question": "২০% দ্রবণ দতরীতে যদি ৩০% দ্রবণের সাথে ১০ গ্রাম পানি মেশানো হয়, তাহলে মূল দ্রবণের ওজন মোট কত গ্রাম?",
      "options": {
        "a": "১০",
        "b": "১৫",
        "c": "২০",
        "d": "২৫"
      },
      "answer": "A",
      "id": 654,
      "serial_in_topic": 2
    },
    {
      "topic": "measurement_geometry",
      "q_num": 3,
      "question": "যদি কোন বস্তু প্রতি সেকেন্ডে ৫ ফুট দুরত্ব অতিক্রম করতে পারে তাহলে ১ ঘন্টায় তা কত ফুট যেতে পাবেে?",
      "options": {
        "a": "১৮০",
        "b": "১৮০০",
        "c": "১৮০০০",
        "d": "২১০০০"
      },
      "answer": "C",
      "id": 655,
      "serial_in_topic": 3
    },
    {
      "topic": "measurement_geometry",
      "q_num": 4,
      "question": "৮ হাত লম্বা একখানা দাড় থেকে ১৫ ইঞ্চি লম্বা কতটি দাড় দতরী করা সম্ভব?",
      "options": {
        "a": "৮",
        "b": "৯",
        "c": "১০",
        "d": "১১"
      },
      "answer": "B",
      "id": 656,
      "serial_in_topic": 4
    },
    {
      "topic": "measurement_geometry",
      "q_num": 5,
      "question": "সে্রাতের গতি ঘন্টায় ২কি.মি.। কোন ব্যক্তি যদি সে্রাতের প্রতিকুলে ঘন্টায় ৬কি.মি. যায় তাহলে সে্রাতবিহীন অবস্থায় বা স্থির পানিতে তার গতি ঘন্টায় কত কি.মি হবে?",
      "options": {
        "a": "২",
        "b": "৮",
        "c": "৫",
        "d": "৭"
      },
      "answer": "B",
      "id": 657,
      "serial_in_topic": 5
    },
    {
      "topic": "measurement_geometry",
      "q_num": 6,
      "question": "১জন লোক ঘন্টায় ৩০কি.মি. বেগে যে স্থানে যায় সেখান থেকে ঘন্টায় ৪০কি.মি. বেগে আবার ফিরে আসে। তার গড় গতিবেগ ঘন্টায় কত কি.মি.?",
      "options": {
        "a": "৩৩.৩৩",
        "b": "৩৪.২৪",
        "c": "৩৫",
        "d": "৩৬.৬৬"
      },
      "answer": "C",
      "id": 658,
      "serial_in_topic": 6
    },
    {
      "topic": "measurement_geometry",
      "q_num": 7,
      "question": "এক ফেবি্রক্স কাপেড়র দোকানে ৩ ইঞ্চি ফেবি্রক্স বিক্রি হয় ৪.৫ ডলারে। ৫ ইঞ্চির একখানা ফেবি্রক্স কিনতে একজন ক্রেতার কত খরচ হবে?",
      "options": {
        "a": "৮.৩৫",
        "b": "৭.৫",
        "c": "২২.৫",
        "d": "২১.২৫"
      },
      "answer": "B",
      "id": 659,
      "serial_in_topic": 7
    },
    {
      "topic": "measurement_geometry",
      "q_num": 8,
      "question": "ক সংখ্যক লোক একটি কাজ করে খ ঘন্টায়। ঐ একই কাজ করতে ৭জন লোকের মোট কত সময় লাগবে?",
      "options": {
        "a": "কখ/৭",
        "b": "৭ক/খ",
        "c": "৭/কখ",
        "d": "৭খ/ক"
      },
      "answer": "A",
      "id": 660,
      "serial_in_topic": 8
    },
    {
      "topic": "measurement_geometry",
      "q_num": 9,
      "question": "Mr. Walker travels A miles in B hour and then C miles in D hours. How many hours will be needed to travel 500 miles if he maintains this average rate?",
      "options": {
        "a": "500/\\(a+c\\",
        "b": "500\\(b+d\\/\\(a+c\\",
        "c": "\\(a+c\\/500\\(b+d\\",
        "d": "500/b+d"
      },
      "answer": "B",
      "id": 661,
      "serial_in_topic": 9
    },
    {
      "topic": "measurement_geometry",
      "q_num": 10,
      "question": "১ গ্রাম চবিষতে ৭ ভাগ ক্যালরী থাকে ১৪০০ ক্যালরী বিশিষ্ট খাদ্যে ৩০% ক্যালরী চবিষ নেওয়া হয়। ঐ খাদ্যে কতগ্রাম চবিষ দেওয়া হয়",
      "options": {
        "a": "৪০গ্রাম",
        "b": "৯০গ্রাম",
        "c": "৬০গ্রাম",
        "d": "২০০গ্রাম"
      },
      "answer": "C",
      "id": 662,
      "serial_in_topic": 10
    },
    {
      "topic": "measurement_geometry",
      "q_num": 11,
      "question": "যদি ১কি.মি. একটি ম্যাপ সত্যিকার ৪০কি.মি. এর সমান হয় এবঙ ম্যাপের দুরত্ব ঢাকা থেকে খুলনা ৩৭.৫ কি.মি. হয়। তবে তাদের মধ্যে সত্যিকার দুরত্ব কত?",
      "options": {
        "a": "১৫০০ কি.মি.",
        "b": "২১০০কি.মি.",
        "c": "১৮০০কি.মি.",
        "d": "কোনটিই নয়"
      },
      "answer": "A",
      "id": 663,
      "serial_in_topic": 11
    },
    {
      "topic": "measurement_geometry",
      "q_num": 12,
      "question": "একজন মানুর্ ১১ সেকেন্ডে ১০০০ মিটার যেতে পারে। তাহলে সে প্রত্যেক ঘন্টায় কত কি.মি. যেতে পারে?",
      "options": {
        "a": "27",
        "b": "63",
        "c": "36",
        "d": "72"
      },
      "answer": "C",
      "id": 664,
      "serial_in_topic": 12
    },
    {
      "topic": "measurement_geometry",
      "q_num": 14,
      "question": "যদি ২৫% মানুর্ একটি ট্রাক ১ ঘন্টা ৩০ মিনিটে বোঝাই করতে পারে, তবে ১৫ জন লোক ঐ ট্রাকটি বোঝাই করতে কত সময় নিবে?",
      "options": {
        "a": "২ঘন্টা",
        "b": "২.৫ঘন্টা",
        "c": "৩.৫ঘন্টা",
        "d": "৩ঘন্টা"
      },
      "answer": "C",
      "id": 665,
      "serial_in_topic": 13
    },
    {
      "topic": "measurement_geometry",
      "q_num": 15,
      "question": "যদি একটি মানচিত্রে দুটো স্থানের দুরত্ব ১ ইঞ্চ হয়, তখন তাদের সত্যিকার দুরত্ব হয় ১৬০ মাইল। যদি কুয়াকটা, পটুয়াখালী বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয় থেকে মানচিত্রে ২৩/৮ ইঞ্চি দুরত্ব হয়, তবে পটুয়াখালী বিজ",
      "options": {
        "a": "৩",
        "b": "২৭",
        "c": "৩০০",
        "d": "৪৬০"
      },
      "answer": "D",
      "id": 666,
      "serial_in_topic": 14
    },
    {
      "topic": "measurement_geometry",
      "q_num": 16,
      "question": "একটি ঘিড়র ১০ মিনিটে কমে প্রত্যেক দিনে। তবে ঘিড়টির কত দিন লাগবে একটি নিধিষষ্ট স্থানে পৌছাতে যেখানে ঘিড়টি সঠিক সময় নিদেষশ করবে?",
      "options": {
        "a": "৩৬",
        "b": "৭২",
        "c": "১২",
        "d": "১৪৪"
      },
      "answer": "B",
      "id": 667,
      "serial_in_topic": 15
    },
    {
      "topic": "measurement_geometry",
      "q_num": 17,
      "question": "যদি প্রত্যেক সেকেন্ডের গতি এবং প্রত্যেক ঘন্টার গতি ক কিলোমিটারের সমান হয়, তবে ক এর মান কত?",
      "options": {
        "a": "১.২",
        "b": "৩.৬",
        "c": "৪.৫",
        "d": "৪.২"
      },
      "answer": "B",
      "id": 668,
      "serial_in_topic": 16
    },
    {
      "topic": "measurement_geometry",
      "q_num": 18,
      "question": "১ ফুট ১ গজের শতকরা কত অংশ",
      "options": {
        "a": "৩%",
        "b": "৩০০%",
        "c": "৩৩৩%",
        "d": "১/৩%"
      },
      "answer": "B",
      "id": 669,
      "serial_in_topic": 17
    },
    {
      "topic": "measurement_geometry",
      "q_num": 19,
      "question": "A bag contains 28 pounds of sugar which is to be separated into packages containing 14 ounces each. How many such packages can be made?",
      "options": {
        "a": "2",
        "b": "4",
        "c": "8",
        "d": "16"
      },
      "answer": "E",
      "id": 670,
      "serial_in_topic": 18
    },
    {
      "topic": "measurement_geometry",
      "q_num": 20,
      "question": "There are 12 men on basketball team, and in a game 5 of them play at any one time. If the game is 1 hour long and if each man plays exactly the same amount of time, how many minutes does each man play",
      "options": {
        "a": "10",
        "b": "12",
        "c": "24",
        "d": "25"
      },
      "answer": "B",
      "id": 671,
      "serial_in_topic": 19
    },
    {
      "topic": "measurement_geometry",
      "q_num": 21,
      "question": "আন্তজষাতিক একক পদ্ধতি চালু হয় কত সালে?",
      "options": {
        "a": "১৯৭০",
        "b": "১৯৫৮",
        "c": "১৯৬০",
        "d": "১৯৬৩"
      },
      "answer": "C",
      "id": 672,
      "serial_in_topic": 20
    },
    {
      "topic": "measurement_geometry",
      "q_num": 22,
      "question": "মেটি্রক পদ্ধতিতে ভরের একক",
      "options": {
        "a": "পাউন্ড",
        "b": "গ্রাম",
        "c": "কিলোগ্রাম",
        "d": "মিলিগ্রাম"
      },
      "answer": "C",
      "id": 673,
      "serial_in_topic": 21
    },
    {
      "topic": "measurement_geometry",
      "q_num": 23,
      "question": "সেন্টিমিটার গ্রাম সেকেন্ড পদ্ধতিতে ভরের একক",
      "options": {
        "a": "পাউন্ড",
        "b": "গ্রাম",
        "c": "কিলোগ্রাম",
        "d": "আউন্স"
      },
      "answer": "B",
      "id": 674,
      "serial_in_topic": 22
    },
    {
      "topic": "measurement_geometry",
      "q_num": 24,
      "question": "সেন্টিমিটার গ্রাম সেকেন্ড পদ্ধতিতে দদঘেষ্যর একক",
      "options": {
        "a": "ডেকামিটার",
        "b": "মিটার",
        "c": "ডেসিমিটার",
        "d": "সেন্টিমিটার"
      },
      "answer": "D",
      "id": 675,
      "serial_in_topic": 23
    },
    {
      "topic": "measurement_geometry",
      "q_num": 25,
      "question": "৪০সের=কত কেজি?",
      "options": {
        "a": "৩২.৩৭",
        "b": "৩৭.৩২",
        "c": "৩৮",
        "d": "৪০"
      },
      "answer": "B",
      "id": 676,
      "serial_in_topic": 24
    },
    {
      "topic": "measurement_geometry",
      "q_num": 26,
      "question": "১০০০ ঘন সেন্টিমিটার পানির ওজন কত?",
      "options": {
        "a": "১কিলোগ্রাম",
        "b": "২০কিলোগ্রাম",
        "c": "১০০কিলোগ্রাম",
        "d": "১০০০কিলোগ্রাম"
      },
      "answer": "A",
      "id": 677,
      "serial_in_topic": 25
    },
    {
      "topic": "measurement_geometry",
      "q_num": 27,
      "question": "২৫ বর্গমিটার = কত বর্গ এয়র",
      "options": {
        "a": "১/১৬",
        "b": "১/৮",
        "c": "১/৪",
        "d": "১/৪০"
      },
      "answer": "C",
      "id": 678,
      "serial_in_topic": 26
    },
    {
      "topic": "measurement_geometry",
      "q_num": 28,
      "question": "১ মাইল কত কিলোমিটারের সমান?",
      "options": {
        "a": "১.৬০৯",
        "b": ".৯৬১",
        "c": "০.৯১",
        "d": "০.৬১"
      },
      "answer": "A",
      "id": 679,
      "serial_in_topic": 27
    },
    {
      "topic": "measurement_geometry",
      "q_num": 29,
      "question": "১ মিলিমিটার ১ কিলোমিটারের কত অংশ?",
      "options": {
        "a": "১/১০০০",
        "b": "১/১০০০০০",
        "c": "১/১০০০০",
        "d": "১/১০০০০০০"
      },
      "answer": "D",
      "id": 680,
      "serial_in_topic": 28
    },
    {
      "topic": "measurement_geometry",
      "q_num": 30,
      "question": "১ তোলা=কত গ্রাম?",
      "options": {
        "a": "১০গ্রাম",
        "b": "১০.১১গ্রাম",
        "c": "১১.১৬গ্রাম",
        "d": "১১.৬৬গ্রাম"
      },
      "answer": "D",
      "id": 681,
      "serial_in_topic": 29
    },
    {
      "topic": "measurement_geometry",
      "q_num": 31,
      "question": "এক মিটার সমান কত ইঞ্চি",
      "options": {
        "a": "৩৭.৩৯ইঞ্চি",
        "b": "৩৯.৩৭ইঞ্চি",
        "c": "৩৯.৪৭ইঞ্চি",
        "d": "২ কিলোমিটার"
      },
      "answer": "B",
      "id": 682,
      "serial_in_topic": 30
    },
    {
      "topic": "measurement_geometry",
      "q_num": 32,
      "question": "১ মাইলে কত কিলোমিটার?",
      "options": {
        "a": "১",
        "b": "১.৬",
        "c": "১.৮",
        "d": "২"
      },
      "answer": "B",
      "id": 683,
      "serial_in_topic": 31
    },
    {
      "topic": "measurement_geometry",
      "q_num": 33,
      "question": "১ কিলোমিটার সমান কত মাইল?",
      "options": {
        "a": "১.৬২",
        "b": "০৬৩",
        "c": "০.৫৮",
        "d": "০.৬২"
      },
      "answer": "D",
      "id": 684,
      "serial_in_topic": 32
    },
    {
      "topic": "measurement_geometry",
      "q_num": 34,
      "question": "১ কিলোমিটার কত মাইলের সমান?",
      "options": {
        "a": "৫/৮",
        "b": "১/২",
        "c": "৫/৪",
        "d": "৩/৪"
      },
      "answer": "A",
      "id": 685,
      "serial_in_topic": 33
    },
    {
      "topic": "measurement_geometry",
      "q_num": 35,
      "question": "সমুদ্রে পানির গভিরতা মাপার একক",
      "options": {
        "a": "ফ্যাদম",
        "b": "মিটার",
        "c": "কিলোমিটার",
        "d": "ফুট"
      },
      "answer": "A",
      "id": 686,
      "serial_in_topic": 34
    },
    {
      "topic": "measurement_geometry",
      "q_num": 36,
      "question": "১ নোটিক্যাল মাইলে কত মিটার?",
      "options": {
        "a": "১৮৫৩.১৮মিটার",
        "b": "১৬৫০.২০মিটার",
        "c": "১৯৫৩.১৮মিটার",
        "d": "১৭৫০.১৮মিটার"
      },
      "answer": "A",
      "id": 687,
      "serial_in_topic": 35
    },
    {
      "topic": "measurement_geometry",
      "q_num": 37,
      "question": "১ নট= স্থল পথের কত মাইল?",
      "options": {
        "a": "১",
        "b": "২.৪",
        "c": "১.৪",
        "d": "২.৫"
      },
      "answer": "A",
      "id": 688,
      "serial_in_topic": 36
    },
    {
      "topic": "measurement_geometry",
      "q_num": 38,
      "question": "১ গ্যালন=কত লিটার",
      "options": {
        "a": "৪.৫৫",
        "b": "৪.৩৫",
        "c": "৪.৫০",
        "d": "৪.৪৪"
      },
      "answer": "A",
      "id": 689,
      "serial_in_topic": 37
    },
    {
      "topic": "measurement_geometry",
      "q_num": 39,
      "question": "১ ন্যানোমিটার ১ মিটারের কত অংশ?",
      "options": {
        "a": "০.০০০১",
        "b": "০.০০০০০১",
        "c": "০.০০০০১",
        "d": "০.০০০০০০০০১"
      },
      "answer": "D",
      "id": 690,
      "serial_in_topic": 38
    },
    {
      "topic": "measurement_geometry",
      "q_num": 40,
      "question": "৭২ ইঞ্চি কত মিটারের সমান?",
      "options": {
        "a": "১.৮২৯",
        "b": "১৮.২৯",
        "c": "১৮২.৯",
        "d": "১৮২৯"
      },
      "answer": "A",
      "id": 691,
      "serial_in_topic": 39
    },
    {
      "topic": "measurement_geometry",
      "q_num": 41,
      "question": "১ নটিক্যাল মাইল=কত মিটার",
      "options": {
        "a": "১.৮২৯",
        "b": "১৮.২৯",
        "c": "১৮২.৯",
        "d": ".১৮২৯"
      },
      "answer": "C",
      "id": 692,
      "serial_in_topic": 40
    },
    {
      "topic": "measurement_geometry",
      "q_num": 42,
      "question": "৪ মিলিগ্রাম কত কিলোগ্রাম?",
      "options": {
        "a": "২.০৫৭৩৪",
        "b": "০.২০৫৭৩৪",
        "c": "০.০২০৫৭৩৪",
        "d": "২০.৫৭৩৪০"
      },
      "answer": "C",
      "id": 693,
      "serial_in_topic": 41
    },
    {
      "topic": "measurement_geometry",
      "q_num": 43,
      "question": "দেয়াল ঘিড়তে রাত ৯টা বাজে। ঘন্টা ও মিনিটের কাটার মধ্যকার কোনটির মাপ কত?",
      "options": {
        "a": "৬০°",
        "b": "৭০°",
        "c": "৮০°",
        "d": "৯০°"
      },
      "answer": "D",
      "id": 694,
      "serial_in_topic": 42
    },
    {
      "topic": "measurement_geometry",
      "q_num": 44,
      "question": "ঘিড়তে ৪টা বাজার সমেয় ঘন্টার কাটা ও মিনিটের কাটা পরস্পর যে কোণ করে তা হল",
      "options": {
        "a": "১২০°",
        "b": "৬০°",
        "c": "১০৫°",
        "d": "৯০°"
      },
      "answer": "A",
      "id": 695,
      "serial_in_topic": 43
    },
    {
      "topic": "measurement_geometry",
      "q_num": 45,
      "question": "১ মিটার কত ইঞ্চির সমান?",
      "options": {
        "a": "৩৭.৪৯",
        "b": "৩৭.৩৯",
        "c": "৩৯.৪৭",
        "d": "৩৯.৩৭"
      },
      "answer": "D",
      "id": 696,
      "serial_in_topic": 44
    },
    {
      "topic": "measurement_geometry",
      "q_num": 46,
      "question": "এক কুইন্টাল ওজনে কত কিলোগ্রাম হয়?",
      "options": {
        "a": "৮",
        "b": "১০",
        "c": "১০০",
        "d": "১০০০"
      },
      "answer": "C",
      "id": 697,
      "serial_in_topic": 45
    },
    {
      "topic": "measurement_geometry",
      "q_num": 47,
      "question": "১ কেজি দ্রব্যের ১০০ ভাগের ৫ ভাগকে বলা হয়-",
      "options": {
        "a": "০.০৫কিল্গ্রোাম",
        "b": "০.৫কিলোগ্রাম",
        "c": "০.৫ কিলোগ্রাম",
        "d": "০.০০৫ গ্রাম"
      },
      "answer": "A",
      "id": 698,
      "serial_in_topic": 46
    },
    {
      "topic": "measurement_geometry",
      "q_num": 48,
      "question": "১ বর্গমিটার কত বর্গ সেন্টিমটারের সমান?",
      "options": {
        "a": "১০০",
        "b": "১০০০০",
        "c": "১০০০",
        "d": "১০"
      },
      "answer": "B",
      "id": 699,
      "serial_in_topic": 47
    },
    {
      "topic": "measurement_geometry",
      "q_num": 49,
      "question": "১টন=কত পাউন্ড?",
      "options": {
        "a": "১০০০",
        "b": "১১৬.৮",
        "c": "২২০৪",
        "d": "১৪০০"
      },
      "answer": "C",
      "id": 700,
      "serial_in_topic": 48
    },
    {
      "topic": "measurement_geometry",
      "q_num": 50,
      "question": "১বিলিয়ন হচ্ছে",
      "options": {
        "a": "১কোটি",
        "b": "১০কোটি",
        "c": "১০০কোটি",
        "d": "১০০০কোটি"
      },
      "answer": "C",
      "id": 701,
      "serial_in_topic": 49
    },
    {
      "topic": "measurement_geometry",
      "q_num": 51,
      "question": "১ কুইন্টাল সমান কত কেজি?",
      "options": {
        "a": "২০০",
        "b": "৫০০",
        "c": "১০০",
        "d": "১০০০"
      },
      "answer": "C",
      "id": 702,
      "serial_in_topic": 50
    },
    {
      "topic": "measurement_geometry",
      "q_num": 52,
      "question": "১ বর্গ ইঞ্চি কত বর্গ সেন্টিমিটারের সমান?",
      "options": {
        "a": "০.০০২০",
        "b": "৭.৩২",
        "c": "৬.৪৫",
        "d": "৬৪.৫০"
      },
      "answer": "C",
      "id": 703,
      "serial_in_topic": 51
    },
    {
      "topic": "measurement_geometry",
      "q_num": 53,
      "question": "১৯/৪ পাউন্ডে কত আউন্স",
      "options": {
        "a": "৬৭",
        "b": "৫৭",
        "c": "৭৬",
        "d": "৭৫"
      },
      "answer": "C",
      "id": 704,
      "serial_in_topic": 52
    },
    {
      "topic": "measurement_geometry",
      "q_num": 54,
      "question": "একটি জমির পরিমান ৫ কাঠা হলে, তা বর্গফুটে হবে",
      "options": {
        "a": "৩০০০বর্গফুট",
        "b": "৩২০০",
        "c": "৩৬০০",
        "d": "৪০০০"
      },
      "answer": "C",
      "id": 705,
      "serial_in_topic": 53
    },
    {
      "topic": "measurement_geometry",
      "q_num": 55,
      "question": "৮৪কেজি ধাতু গলিেয় ৪০০০০টি পিন দতরি করা হলে, প্রতিটি পিনের ওজন কত?",
      "options": {
        "a": "০.০০২০কেজি",
        "b": "০.০০২১কেজি",
        "c": "০.০০২২কেজি",
        "d": "০.০০২৩কেজি"
      },
      "answer": "B",
      "id": 706,
      "serial_in_topic": 54
    },
    {
      "topic": "measurement_geometry",
      "q_num": 56,
      "question": "৬ফুট দীর্ঘ একটি বাশের ৪ফুট দীর্ঘ ছায়া হয়। একই সমেয় একটি গাছের ছায়া ৬৪ ফুট লম্বা। গাছটির উচ্চতা কত ফুট?",
      "options": {
        "a": "৯৫",
        "b": "৯৬",
        "c": "৯৭",
        "d": "৯৮"
      },
      "answer": "B",
      "id": 707,
      "serial_in_topic": 55
    },
    {
      "topic": "measurement_geometry",
      "q_num": 57,
      "question": "৩০০ কিলোমিটার দুরত্বকে মাইলে প্রকাশ করলোে হয়",
      "options": {
        "a": "১৫৬ মাইল",
        "b": "১৭৬মাইল",
        "c": "১৬৬মাইল",
        "d": "১৮৬মাইল"
      },
      "answer": "D",
      "id": 708,
      "serial_in_topic": 56
    },
    {
      "topic": "measurement_geometry",
      "q_num": 58,
      "question": "৩৫২ গজ ১ মাইলের কত অংশ?",
      "options": {
        "a": "১/৮",
        "b": "১/৪",
        "c": "১/৫",
        "d": "১/৭"
      },
      "answer": "C",
      "id": 709,
      "serial_in_topic": 57
    },
    {
      "topic": "measurement_geometry",
      "q_num": 59,
      "question": "১ বর্গমকিলোমিটারের পরিমাপ",
      "options": {
        "a": "৩০০একর",
        "b": "৫৪০একর",
        "c": "৪০০একর",
        "d": "২৪৭একর"
      },
      "answer": "D",
      "id": 710,
      "serial_in_topic": 58
    },
    {
      "topic": "measurement_geometry",
      "q_num": 60,
      "question": "১ হেক্টর জমি বলতে বোঝায়",
      "options": {
        "a": "১০০০০বর্গমিটার",
        "b": "১০০০বর্গমিটার",
        "c": "১০০বর্গমিটার",
        "d": "১০বর্গমিটার"
      },
      "answer": "A",
      "id": 711,
      "serial_in_topic": 59
    },
    {
      "topic": "measurement_geometry",
      "q_num": 61,
      "question": "১ একর সমান কত বর্গফুট?",
      "options": {
        "a": "১০০০",
        "b": "৪০০০০",
        "c": "৪৩৫৬০",
        "d": "৪৮৪০"
      },
      "answer": "C",
      "id": 712,
      "serial_in_topic": 60
    },
    {
      "topic": "measurement_geometry",
      "q_num": 62,
      "question": "২০ বর্গমিটার ২ এয়রের কত অংশ?",
      "options": {
        "a": "১/৫",
        "b": "১/৮",
        "c": "১/১০",
        "d": "১/১২"
      },
      "answer": "C",
      "id": 713,
      "serial_in_topic": 61
    },
    {
      "topic": "measurement_geometry",
      "q_num": 63,
      "question": "১ঘনমিটার=কত লিটার",
      "options": {
        "a": "১০০০",
        "b": "১০০",
        "c": "১০০০০",
        "d": "১০০০০"
      },
      "answer": "A",
      "id": 714,
      "serial_in_topic": 62
    },
    {
      "topic": "measurement_geometry",
      "q_num": 64,
      "question": "কত কিউবিক সেন্টিমিটার তে ১ লিটার হয়?",
      "options": {
        "a": "১০",
        "b": "১০০",
        "c": "১০০",
        "d": "১০০০০"
      },
      "answer": "C",
      "id": 715,
      "serial_in_topic": 63
    },
    {
      "topic": "measurement_geometry",
      "q_num": 65,
      "question": "৪ ডিগ্রি সেন্টিগ্রেড তাপমাত্রায় এক লিটার পানির ওজন",
      "options": {
        "a": "১.৪কেজি",
        "b": "১.২কেজি",
        "c": "০.৯৬কেজি",
        "d": "১০কেজি"
      },
      "answer": "D",
      "id": 716,
      "serial_in_topic": 64
    },
    {
      "topic": "measurement_geometry",
      "q_num": 66,
      "question": "এক ঘনমিটার পানির ট্যাংক কত ইউ.এস গ্যালন পানি ধারণ করবে",
      "options": {
        "a": "২৬৪",
        "b": "২২০",
        "c": "২৩৪",
        "d": "২৫০"
      },
      "answer": "A",
      "id": 717,
      "serial_in_topic": 65
    },
    {
      "topic": "measurement_geometry",
      "q_num": 67,
      "question": "৫ লিটার পানির ওজন কত?",
      "options": {
        "a": "৫গ্রাম",
        "b": "৫০০গ্রাম",
        "c": "৫০গ্রাম",
        "d": "৫কিল্গ্রোাম"
      },
      "answer": "D",
      "id": 718,
      "serial_in_topic": 66
    },
    {
      "topic": "measurement_geometry",
      "q_num": 68,
      "question": "৩ লিটার পানির ওজন",
      "options": {
        "a": "২.৫কিলোগ্রাম",
        "b": "২.৭৫কিলোগ্রাম",
        "c": "৪কিলোগ্রাম",
        "d": "৩কিলোগ্রাম"
      },
      "answer": "D",
      "id": 719,
      "serial_in_topic": 67
    },
    {
      "topic": "measurement_geometry",
      "q_num": 69,
      "question": "১ সের সমান কত কিলোগ্রাম?",
      "options": {
        "a": "১.০৭",
        "b": "০.৯৩",
        "c": "১.০৭",
        "d": "১.০৯"
      },
      "answer": "B",
      "id": 720,
      "serial_in_topic": 68
    },
    {
      "topic": "measurement_geometry",
      "q_num": 70,
      "question": "১ ন্যানোমিটার সমান",
      "options": {
        "a": "১০৬মিটার",
        "b": "১০৯মিটার",
        "c": "১০-৬মিটার",
        "d": "১০-৯মিটার"
      },
      "answer": "D",
      "id": 721,
      "serial_in_topic": 69
    },
    {
      "topic": "measurement_geometry",
      "q_num": 71,
      "question": "এক ন্যানো অ্যাম্পিয়ার সমান",
      "options": {
        "a": "১০৬অ্যাম্পিয়ার",
        "b": "১০৯অ্যাম্পিয়ার",
        "c": "১০-৬অ্যাম্পিয়ার",
        "d": "১০-৯অ্যাম্পিয়ার"
      },
      "answer": "D",
      "id": 722,
      "serial_in_topic": 70
    },
    {
      "topic": "measurement_geometry",
      "q_num": 72,
      "question": "দশ মাইক্রো ফ্যারাডকে ফ্যারাডে প্রকাশ করলোে হয়",
      "options": {
        "a": "১০x১০-৩ ফ্যারাড",
        "b": "১০x১০-৬ ফ্যারাড",
        "c": "১০x১০-১ ফ্যারাড",
        "d": "১০x১০-৯ ফ্যারাড"
      },
      "answer": "B",
      "id": 723,
      "serial_in_topic": 71
    },
    {
      "topic": "measurement_geometry",
      "q_num": 73,
      "question": "সময় পরিমাপে কোনটি সবেচেেয় বড়",
      "options": {
        "a": "মাইক্রো সেকেন্ড",
        "b": "মিলি সেকেন্ড",
        "c": "পিকো সেকেন্ড",
        "d": "ন্যানো সেকেন্ড"
      },
      "answer": "B",
      "id": 724,
      "serial_in_topic": 72
    },
    {
      "topic": "measurement_geometry",
      "q_num": 74,
      "question": "নিচের কোনটি ক্ষুদ্রতম একক?",
      "options": {
        "a": "মিটার",
        "b": "সেন্টিমিটার",
        "c": "ডেসিমিটার",
        "d": "কিলোমিটার"
      },
      "answer": "B",
      "id": 725,
      "serial_in_topic": 73
    },
    {
      "topic": "measurement_geometry",
      "q_num": 75,
      "question": "নিচের কোনটি বৃহত্তম একক?",
      "options": {
        "a": "মিটার",
        "b": "সেন্টিমিটার",
        "c": "ডেসিমিটার",
        "d": "কিলোমিটার"
      },
      "answer": "D",
      "id": 726,
      "serial_in_topic": 74
    },
    {
      "topic": "measurement_geometry",
      "q_num": 76,
      "question": "একটি যোগ করতে কম্পিউটারের ৫০ ন্যানো সেকেন্ড লাগলে সেকেন্ডে এটা কতটা যোগ করতে পাবেে?",
      "options": {
        "a": "২কোটি",
        "b": "৩কোটি",
        "c": "৪কোটি",
        "d": "৫কোটি"
      },
      "answer": "A",
      "id": 727,
      "serial_in_topic": 75
    },
    {
      "topic": "measurement_geometry",
      "q_num": 77,
      "question": "১ অ্যাটোমিটার সমান",
      "options": {
        "a": "১০-১৮ মিটার",
        "b": "১০১৮ মিটার",
        "c": "১০৯ মিটার",
        "d": "১০-৯ মিটার"
      },
      "answer": "A",
      "id": 728,
      "serial_in_topic": 76
    },
    {
      "topic": "measurement_geometry",
      "q_num": 78,
      "question": "প্রতিটি লেবু্র দাম ১টাকা। ২০ হালি লেবু বিক্রয় করে হোসেন কত টাকা পেল?",
      "options": {
        "a": "৬০",
        "b": "৪০",
        "c": "৮০",
        "d": "২০"
      },
      "answer": "C",
      "id": 729,
      "serial_in_topic": 77
    },
    {
      "topic": "measurement_geometry",
      "q_num": 79,
      "question": "এক কুিড় দক মাছের দাম ৫০টাকা হলে, ১টি দক মাছের দাম কত?",
      "options": {
        "a": "৫টাকা",
        "b": "২টাকা",
        "c": "৩টাকা",
        "d": "২.৫০টাকা"
      },
      "answer": "D",
      "id": 730,
      "serial_in_topic": 78
    },
    {
      "topic": "measurement_geometry",
      "q_num": 80,
      "question": "এক কলা বিক্রেতার নিকট ৩৫ ডজন কলা আছে। তার নিকট কতগুলো কলা আছে?",
      "options": {
        "a": "৪৫০টি",
        "b": "৪২০টি",
        "c": "৪৬০টি",
        "d": "৪৪০টি"
      },
      "answer": "B",
      "id": 731,
      "serial_in_topic": 79
    },
    {
      "topic": "measurement_geometry",
      "q_num": 81,
      "question": "দুইটি স্থানের দুরুত্ব ১০কিলোমিটার। একে মিটারে প্রকাশ কর",
      "options": {
        "a": "১০০০০",
        "b": "১০",
        "c": "১০০",
        "d": "১০০০"
      },
      "answer": "A",
      "id": 732,
      "serial_in_topic": 80
    },
    {
      "topic": "measurement_geometry",
      "q_num": 82,
      "question": "দৌড় প্রতিযগিতার জন্য ট্র্যাক কিভাবে দতরী করলোে ১০০০০ মিটার দৌড় ১৬ চক্কর দিতে পারে?",
      "options": {
        "a": "৬৪০মিটার",
        "b": "৬৫০মিটার",
        "c": "৬০০মিটার",
        "d": "৬২৫মিটার"
      },
      "answer": "D",
      "id": 733,
      "serial_in_topic": 81
    },
    {
      "topic": "measurement_geometry",
      "q_num": 83,
      "question": "১২৫ মিটার বিশিষ্ট বৃত্তাকার ট্র্যাক ২৪ চক্কর দিলোে কত মিটার হবে?",
      "options": {
        "a": "৩০০০",
        "b": "৪০০০",
        "c": "৪৫০০",
        "d": "৩৫০০"
      },
      "answer": "A",
      "id": 734,
      "serial_in_topic": 82
    },
    {
      "topic": "measurement_geometry",
      "q_num": 84,
      "question": "একটি বাস ৬ ঘন্টায় ৩২৫ কিলোমিটার গেল। বাসটি প্রতি ঘন্টায় কত কিলোমিটার বেগে গিেয়ছিল",
      "options": {
        "a": "৫৪.১৭",
        "b": "৫৩.১৭",
        "c": "৫৪",
        "d": "৫৩"
      },
      "answer": "A",
      "id": 735,
      "serial_in_topic": 83
    },
    {
      "topic": "measurement_geometry",
      "q_num": 85,
      "question": "একটি মটরগািড় যদি ৯লিটার পেটে্রাল ১২৮ কিলোমিটার যায়, তবে প্রতি কিলোমিটার যেতে কি পরিমাণ পেটে্রালের প্রেয়াজন হবে",
      "options": {
        "a": "০.০৭ লিটার",
        "b": "০.৭লিটার",
        "c": "০.০০৭ লিটার",
        "d": "৭ লিটার"
      },
      "answer": "A",
      "id": 736,
      "serial_in_topic": 84
    },
    {
      "topic": "measurement_geometry",
      "q_num": 86,
      "question": "একটি আয়তকার ঘরের দদৈর্ঘ্য্য বিস্তারের দ্বিগুণ। এর ক্ষেত্রফল ৫১২ বর্গমিটার হলে পরিসীমা কত?",
      "options": {
        "a": "৯৮মিটার",
        "b": "৯৬মিটার",
        "c": "৯৪মিটার",
        "d": "৯২মিটার"
      },
      "answer": "B",
      "id": 737,
      "serial_in_topic": 85
    },
    {
      "topic": "measurement_geometry",
      "q_num": 87,
      "question": "একটি টে্রন ঘন্টায় ৮৪ কি.মি. বেগে চলে। টে্রনটি ৮০০ মিটার দীর্ঘ প্লাটফরম ১ মিনিটে অত্ক্রিম করে। টে্রনটির দদৈর্ঘ্য্য কত মিটার?",
      "options": {
        "a": "৪০০",
        "b": "৫০০",
        "c": "৬০০",
        "d": "৭০০"
      },
      "answer": "C",
      "id": 738,
      "serial_in_topic": 86
    },
    {
      "topic": "measurement_geometry",
      "q_num": 88,
      "question": "একটি চতুভুষজের দদৈর্ঘ্য্য ৮মিটার এবং প্রস্থ ৬মিটার। চতুভুষজের পরিসীমা কত মিটার?",
      "options": {
        "a": "১৪",
        "b": "২২",
        "c": "২৮",
        "d": "৪৮"
      },
      "answer": "C",
      "id": 739,
      "serial_in_topic": 87
    },
    {
      "topic": "measurement_geometry",
      "q_num": 89,
      "question": "কোন বর্গক্ষেত্রের ক্ষেত্রফল ১০ একর হলে এর এক বাহুর দদৈর্ঘ্য্য কত গজ",
      "options": {
        "a": "২২০",
        "b": "২৬০",
        "c": "১৯৬",
        "d": "১০০"
      },
      "answer": "A",
      "id": 740,
      "serial_in_topic": 88
    },
    {
      "topic": "measurement_geometry",
      "q_num": 90,
      "question": "এক গ্যালন রঙ দিেয় ২০০ বর্গফুট দেয়াল রঙ করা যায়। ৭৬০ বর্গফুট একটি দেয়ালের জন্য নূন্যতম কত গ্যালন রঙ কিনতে হবে",
      "options": {
        "a": "৩",
        "b": "৪",
        "c": "৫",
        "d": "৬"
      },
      "answer": "B",
      "id": 741,
      "serial_in_topic": 89
    },
    {
      "topic": "measurement_geometry",
      "q_num": 91,
      "question": "৪ বর্গগজ একটি বর্গাকার জায়গা ঢাকতে ৪ বর্গফুট ক্ষেত্রফলের কয়টি পাথর লাগবে?",
      "options": {
        "a": "১টি",
        "b": "৪টি",
        "c": "৮টি",
        "d": "৯টি"
      },
      "answer": "D",
      "id": 742,
      "serial_in_topic": 90
    },
    {
      "topic": "measurement_geometry",
      "q_num": 92,
      "question": "একটি বর্গাকৃতি বাগানের ক্ষেত্রফল ১ হেক্টর। বাগানটির পরিসীমা কত?",
      "options": {
        "a": "২০০",
        "b": "৩০০",
        "c": "৪০০",
        "d": "৫০০"
      },
      "answer": "C",
      "id": 743,
      "serial_in_topic": 91
    },
    {
      "topic": "measurement_geometry",
      "q_num": 93,
      "question": "একটি বর্গাকার বাগানের ক্ষেত্রফল ২০২৫ বর্গমিটার। এর চারদিকে বেড়া দেয়া আছে। বেড়ার মোট দদৈর্ঘ্য্য কত মিটার?",
      "options": {
        "a": "১৬০",
        "b": "১৮০",
        "c": "২০০",
        "d": "২২০"
      },
      "answer": "B",
      "id": 744,
      "serial_in_topic": 92
    },
    {
      "topic": "measurement_geometry",
      "q_num": 94,
      "question": "১০০ গজ লম্বা একটি সড়কের উভয় পাশে ১৫ ফুট অন্তর গাছ লাগাতে হলে কতটি চারার প্রেয়াজন",
      "options": {
        "a": "৪২",
        "b": "৪০",
        "c": "৪১",
        "d": "৪৪"
      },
      "answer": "A",
      "id": 745,
      "serial_in_topic": 93
    },
    {
      "topic": "measurement_geometry",
      "q_num": 95,
      "question": "একটি ত্রিভুজের তিনটি বাহুর দদৈর্ঘ্য্য যথাক্রমে ১৩মিটার, ১৪মিটার ও ১৫মিটার। ত্রিভুজের ক্ষেত্রফল কত?",
      "options": {
        "a": "৮৪বর্গমিটার",
        "b": "৮৮বর্গমিটার",
        "c": "৯২বর্গমিটার",
        "d": "৯৬বর্গমিটার"
      },
      "answer": "A",
      "id": 746,
      "serial_in_topic": 94
    },
    {
      "topic": "measurement_geometry",
      "q_num": 96,
      "question": "একটি ক্রিভুজাকৃতি জমির ভূমির পরিমাপ ৮০ মিটার এবং উচ্চতার পরিমাপ ৪৫মিটার। জমির ক্ষত্রফল হবে কত বর্গমিটার",
      "options": {
        "a": "১৮০০",
        "b": "৯০০",
        "c": "৩৬০০",
        "d": "২৪০০"
      },
      "answer": "A",
      "id": 747,
      "serial_in_topic": 95
    },
    {
      "topic": "measurement_geometry",
      "q_num": 97,
      "question": "একটি বর্গাকৃতি ক্ষেত্রফলের পরিসীমা ৪৪ মিটার হলে এর ক্ষেত্রফল কত?",
      "options": {
        "a": "১২৪",
        "b": "১২৩",
        "c": "১২২",
        "d": "১২১"
      },
      "answer": "D",
      "id": 748,
      "serial_in_topic": 96
    },
    {
      "topic": "measurement_geometry",
      "q_num": 98,
      "question": "একটি চৌবাচ্চার দদৈর্ঘ্য্য, প্রস্থ ও গভীরতা ০.১ মিটার। ঐ চৌবাচ্চার কত ঘনমিটার পানি ধরবে?",
      "options": {
        "a": "০.০০১",
        "b": "০.০১",
        "c": "০.১",
        "d": "০.০০০১"
      },
      "answer": "A",
      "id": 749,
      "serial_in_topic": 97
    },
    {
      "topic": "measurement_geometry",
      "q_num": 99,
      "question": "সমকোণী ত্রিভুজের সমকোণ সংলগ্ন বাহুদ্বয় যথাক্রমে ৩ ও ৪ সে.মি. হলে এর অতিভুজের মান কত?",
      "options": {
        "a": "৩",
        "b": "৪",
        "c": "৫",
        "d": "৬"
      },
      "answer": "C",
      "id": 750,
      "serial_in_topic": 98
    },
    {
      "topic": "measurement_geometry",
      "q_num": 100,
      "question": "একটি রম্বসের বণষদ্বেয়র দদৈর্ঘ্য্য ৫মিটার এবং প্রস্থ ৪.২ মিটার হলে তার ক্ষেত্রফল কত?",
      "options": {
        "a": "১০.৫বর্গমিটার",
        "b": "২১বর্গমিটার",
        "c": "১২.৫বর্গমিটার",
        "d": "৫.৫বর্গমিটার"
      },
      "answer": "A",
      "id": 751,
      "serial_in_topic": 99
    },
    {
      "topic": "measurement_geometry",
      "q_num": 101,
      "question": "একটি বর্গক্ষেত্রের ক্ষেত্রফল এক হেক্টর। উহার পরিসীমা কত?",
      "options": {
        "a": "১২০মিটার",
        "b": "৪০০মিটার",
        "c": "২০০মিটার",
        "d": "৩২০মিটার"
      },
      "answer": "B",
      "id": 752,
      "serial_in_topic": 100
    },
    {
      "topic": "measurement_geometry",
      "q_num": 102,
      "question": "২০ক পরিসীমাবিশিষ্ট আয়তক্ষেত্রর এক বাহুর দদৈর্ঘ্য্য ৪ক+৩ হলে, অপর বাহুর দদৈর্ঘ্য্য কত?",
      "options": {
        "a": "৪ক-৩",
        "b": "৫ক-৩",
        "c": "৫ক-৩",
        "d": "৬ক-৩"
      },
      "answer": "D",
      "id": 753,
      "serial_in_topic": 101
    },
    {
      "topic": "measurement_geometry",
      "q_num": 103,
      "question": "একটি বর্গক্ষেত্রর বাহুর দদৈর্ঘ্য্য ৮ফুট হলে, ঐ বর্গক্ষেত্রের কণেষর উপর অংকিত বর্গক্ষেত্রের ক্ষেত্রফল কত?",
      "options": {
        "a": "১৫৬ব.ফূ",
        "b": "১৬৪ব.ফু",
        "c": "১২৮ব.ফু.",
        "d": "২১৮ব.ফু"
      },
      "answer": "C",
      "id": 754,
      "serial_in_topic": 102
    },
    {
      "topic": "measurement_geometry",
      "q_num": 104,
      "question": "বৃত্তাকার একি পুকুরের ব্যাসাধষ একটি বৃত্তাকার বাগানের তিন গুণ। পুকুরটির ক্ষেত্রফল বাগানটির ক্ষেত্রফলের চেেয় কত গুণ বেশি",
      "options": {
        "a": "৫",
        "b": "৯",
        "c": "১০",
        "d": "৭"
      },
      "answer": "B",
      "id": 755,
      "serial_in_topic": 103
    },
    {
      "topic": "bank_percentage",
      "q_num": 1,
      "question": "What is 1 percent of 0.25?",
      "options": {
        "a": "0.25",
        "b": "0.025",
        "c": "0.0025",
        "d": "0.00025"
      },
      "answer": "C",
      "id": 756,
      "serial_in_topic": 1
    },
    {
      "topic": "bank_percentage",
      "q_num": 2,
      "question": "30% of 80 is what percent of 24?",
      "options": {
        "a": "1",
        "b": "10",
        "c": "50",
        "d": "100"
      },
      "answer": "D",
      "id": 757,
      "serial_in_topic": 2
    },
    {
      "topic": "bank_percentage",
      "q_num": 3,
      "question": "40% of 200 is what percent of 160?",
      "options": {
        "a": "100",
        "b": "80",
        "c": "60",
        "d": "50"
      },
      "answer": "D",
      "id": 758,
      "serial_in_topic": 3
    },
    {
      "topic": "bank_percentage",
      "q_num": 4,
      "question": "5% of which number is 25?",
      "options": {
        "a": "5",
        "b": "250",
        "c": "500",
        "d": "None of these"
      },
      "answer": "C",
      "id": 759,
      "serial_in_topic": 4
    },
    {
      "topic": "bank_percentage",
      "q_num": 5,
      "question": "What is 10% of y/3 if 2y/3 is 10% of 400?",
      "options": {
        "a": "1",
        "b": "2",
        "c": "4",
        "d": "8"
      },
      "answer": "B",
      "id": 760,
      "serial_in_topic": 5
    },
    {
      "topic": "bank_percentage",
      "q_num": 6,
      "question": "1% of 0.11 is",
      "options": {
        "a": "0.011",
        "b": "0.0011",
        "c": "0.00011",
        "d": "0.111",
        "e": "None of these"
      },
      "answer": "C",
      "id": 761,
      "serial_in_topic": 6
    },
    {
      "topic": "bank_percentage",
      "q_num": 7,
      "question": "What is 35% of 11/16 of 160?",
      "options": {
        "a": "14",
        "b": "12",
        "c": "11",
        "d": "10",
        "e": "38.5"
      },
      "answer": "E",
      "id": 762,
      "serial_in_topic": 7
    },
    {
      "topic": "bank_percentage",
      "q_num": 8,
      "question": "If y% of x=15, then x=?",
      "options": {
        "a": "0.15y",
        "b": "1500/y",
        "c": "150/y",
        "d": "15/y",
        "e": "None of these"
      },
      "answer": "B",
      "id": 763,
      "serial_in_topic": 8
    },
    {
      "topic": "bank_percentage",
      "q_num": 9,
      "question": "What is 35% of of 160?",
      "options": {
        "a": "14",
        "b": "12",
        "c": "11",
        "d": "10",
        "e": "None of these"
      },
      "answer": "C",
      "id": 764,
      "serial_in_topic": 9
    },
    {
      "topic": "bank_percentage",
      "q_num": 10,
      "question": "Which of the following is equal to 0.45?",
      "options": {
        "a": "0.00%",
        "b": "0.00%",
        "c": "0.04%",
        "d": "0%",
        "e": "0.00%"
      },
      "answer": "D",
      "id": 765,
      "serial_in_topic": 10
    },
    {
      "topic": "bank_percentage",
      "q_num": 11,
      "question": "If y% of x=29, then x=?",
      "options": {
        "a": "2900",
        "b": "29x/y",
        "c": "29y/x",
        "d": "29xy",
        "e": "None of these"
      },
      "answer": "E",
      "id": 766,
      "serial_in_topic": 11
    },
    {
      "topic": "bank_percentage",
      "q_num": 12,
      "question": "What percentage is 3/4 of 6/5?",
      "options": {
        "a": "0.6",
        "b": "0.75",
        "c": "0.8",
        "d": "0.9",
        "e": "None of these"
      },
      "answer": "D",
      "id": 767,
      "serial_in_topic": 12
    },
    {
      "topic": "bank_percentage",
      "q_num": 13,
      "question": "What is 12.5% of 220?",
      "options": {
        "a": "22",
        "b": "11",
        "c": "44",
        "d": "88",
        "e": "None of these"
      },
      "answer": "A",
      "id": 768,
      "serial_in_topic": 13
    },
    {
      "topic": "bank_percentage",
      "q_num": 14,
      "question": "What is 20 percentage of 5 percentage of 240?",
      "options": {
        "a": "24",
        "b": "2.4",
        "c": "2",
        "d": "1.2",
        "e": "None of these"
      },
      "answer": "A",
      "id": 769,
      "serial_in_topic": 14
    },
    {
      "topic": "bank_percentage",
      "q_num": 15,
      "question": "What is 12.5% of 24?",
      "options": {
        "a": "3",
        "b": "2",
        "c": "4",
        "d": "5",
        "e": "None of these"
      },
      "answer": "B",
      "id": 770,
      "serial_in_topic": 15
    },
    {
      "topic": "bank_percentage",
      "q_num": 16,
      "question": "Taka 4 of 20 percentage of which amount?",
      "options": {
        "a": "25",
        "b": "20",
        "c": "10",
        "d": "11",
        "e": "None of these"
      },
      "answer": "B",
      "id": 771,
      "serial_in_topic": 16
    },
    {
      "topic": "bank_percentage",
      "q_num": 17,
      "question": "What is the percentage equivalent of 4.5?",
      "options": {
        "a": "4%",
        "b": "0%",
        "c": "0.04%",
        "d": "0.00%",
        "e": "None of these"
      },
      "answer": "A",
      "id": 772,
      "serial_in_topic": 17
    },
    {
      "topic": "bank_percentage",
      "q_num": 18,
      "question": "Written as a percentage,5=?",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "5%",
        "d": "0%",
        "e": "0.05%"
      },
      "answer": "C",
      "id": 773,
      "serial_in_topic": 18
    },
    {
      "topic": "bank_percentage",
      "q_num": 19,
      "question": "X is what percent of 20 percent of 15?",
      "options": {
        "a": "x/100%",
        "b": "3/100x%",
        "c": "3x/100%",
        "d": "100/3x%",
        "e": "100x/3%"
      },
      "answer": "B",
      "id": 774,
      "serial_in_topic": 19
    },
    {
      "topic": "bank_percentage",
      "q_num": 20,
      "question": "50 is what percent of 40?",
      "options": {
        "a": "1%",
        "b": "1%",
        "c": "1%",
        "d": "0.12%",
        "e": "0%"
      },
      "answer": "A",
      "id": 775,
      "serial_in_topic": 20
    },
    {
      "topic": "bank_percentage",
      "q_num": 21,
      "question": "What percent of 60 is 80?",
      "options": {
        "a": "133x1/3",
        "b": "75",
        "c": "60",
        "d": "33x1/3",
        "e": "25"
      },
      "answer": "A",
      "id": 776,
      "serial_in_topic": 21
    },
    {
      "topic": "bank_percentage",
      "q_num": 22,
      "question": "What is 40% of 10/7?",
      "options": {
        "a": "40946",
        "b": "41006",
        "c": "41210",
        "d": "40936",
        "e": "28/10"
      },
      "answer": "B",
      "id": 777,
      "serial_in_topic": 22
    },
    {
      "topic": "bank_percentage",
      "q_num": 23,
      "question": "What is 10% of 20% of 30%?",
      "options": {
        "a": "1%",
        "b": "0%",
        "c": "0.00%",
        "d": "0.00%",
        "e": "0.006"
      },
      "answer": "D",
      "id": 778,
      "serial_in_topic": 23
    },
    {
      "topic": "bank_percentage",
      "q_num": 24,
      "question": "The number 45 is what percentage of 9000?",
      "options": {
        "a": "0.00%",
        "b": "0.00%",
        "c": "0.01%",
        "d": "0.04%",
        "e": "0%"
      },
      "answer": "C",
      "id": 779,
      "serial_in_topic": 24
    },
    {
      "topic": "bank_percentage",
      "q_num": 25,
      "question": "20% written as a decimal is",
      "options": {
        "a": "0.001",
        "b": "2",
        "c": "0.02",
        "d": "0.2",
        "e": "0.002"
      },
      "answer": "C",
      "id": 780,
      "serial_in_topic": 25
    },
    {
      "topic": "bank_percentage",
      "q_num": 26,
      "question": "The number 50 is what percentage of 10000?",
      "options": {
        "a": "0%",
        "b": "0.01%",
        "c": "0.00%",
        "d": "0%",
        "e": "0%"
      },
      "answer": "B",
      "id": 781,
      "serial_in_topic": 26
    },
    {
      "topic": "bank_percentage",
      "q_num": 29,
      "question": "If ``basis points\" are defined so that I percent is equal to 200 basis points, then 82.5 percent is how many basis points than 4000 percent?",
      "options": {
        "a": "0.02",
        "b": "0.2",
        "c": "2000",
        "d": "200",
        "e": "None of these"
      },
      "answer": "E",
      "id": 782,
      "serial_in_topic": 27
    },
    {
      "topic": "bank_percentage",
      "q_num": 30,
      "question": "B and C are points on the straight line AD, on which AB=BC=CD. What percent of AC is AD?",
      "options": {
        "a": "0%",
        "b": "0.67%",
        "c": "1.33%",
        "d": "2%"
      },
      "answer": "E",
      "id": 783,
      "serial_in_topic": 28
    },
    {
      "topic": "bank_percentage",
      "q_num": 31,
      "question": "Out of a group of 80 applicants for a public service examination,20 persons failed to appear for the first part of the test.What percent of the total applicants appeared for this part of the test?",
      "options": {
        "a": "4",
        "b": "16",
        "c": "25",
        "d": "75"
      },
      "answer": "D",
      "id": 784,
      "serial_in_topic": 29
    },
    {
      "topic": "bank_percentage",
      "q_num": 32,
      "question": "If an inspector rejects 2% of a product as defective,how many products did he examine if total rejected products are 150?",
      "options": {
        "a": "1500",
        "b": "3000",
        "c": "7500",
        "d": "9000",
        "e": "None of these"
      },
      "answer": "C",
      "id": 785,
      "serial_in_topic": 30
    },
    {
      "topic": "bank_percentage",
      "q_num": 33,
      "question": "If an inspector rejects 0.08% of a product as defective, how many products will he examine in order to reject 2?",
      "options": {
        "a": "1500",
        "b": "500",
        "c": "2000",
        "d": "2500",
        "e": "None"
      },
      "answer": "D",
      "id": 786,
      "serial_in_topic": 31
    },
    {
      "topic": "bank_percentage",
      "q_num": 34,
      "question": "A manufacturer finds that 0.4% of his production is defective and unsuitable for marketing. How many of 1000 units producted will be rejected?",
      "options": {
        "a": "4",
        "b": "40",
        "c": "400",
        "d": "140",
        "e": "None"
      },
      "answer": "B",
      "id": 787,
      "serial_in_topic": 32
    },
    {
      "topic": "bank_percentage",
      "q_num": 35,
      "question": "If m > 0 and x is m percent of y,y is what precent of x?",
      "options": {
        "a": "100 m",
        "b": "1/100 m",
        "c": "1/ m",
        "d": "10/ m",
        "e": "None of these"
      },
      "answer": "E",
      "id": 788,
      "serial_in_topic": 33
    },
    {
      "topic": "bank_percentage",
      "q_num": 36,
      "question": "Feisals weight is 140% of Imrans weight. Rahis weight is 90% of Milons weight. Milon weight twice as much as Imran. What percentage of feisals weight is Rahis weight?",
      "options": {
        "a": "64x2/7",
        "b": "155x5/9",
        "c": "77x7/9",
        "d": "128x4/7",
        "e": "None"
      },
      "answer": "D",
      "id": 789,
      "serial_in_topic": 34
    },
    {
      "topic": "bank_percentage",
      "q_num": 37,
      "question": "What is 10% of 3/y, if 3/2y is 10% of 600?",
      "options": {
        "a": "1",
        "b": "2",
        "c": "3",
        "d": "4",
        "e": "None"
      },
      "answer": "C",
      "id": 790,
      "serial_in_topic": 35
    },
    {
      "topic": "bank_percentage",
      "q_num": 38,
      "question": "Three friends sharded the cost of a tape recorder .If andy, Barbara, and Donna each paid Tk. 12.Tk 30 and Tk 18 respectively, then Donna paid what percent of the cost of the tape recorder?",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "33x1/3%",
        "d": "0%",
        "e": "66x2/3%"
      },
      "answer": "B",
      "id": 791,
      "serial_in_topic": 36
    },
    {
      "topic": "bank_percentage",
      "q_num": 39,
      "question": "B and c are points on a straight line AD,where AB=BC=CD.What percent of AC is AD?",
      "options": {
        "a": "0.01%",
        "b": "0%",
        "c": "0.67%",
        "d": "1.33%",
        "e": "2%"
      },
      "answer": "E",
      "id": 792,
      "serial_in_topic": 37
    },
    {
      "topic": "bank_percentage",
      "q_num": 40,
      "question": "Jalal weighs twice as much as Meena. Meenas weight is 60% of Bahars weight. Dolly weighs 50% of Laila weighs 19% of Jalals weight. Who among these 5 persons weigh the least?",
      "options": {
        "a": "Bahar",
        "b": "Dolly",
        "c": "Jalal",
        "d": "Laila",
        "e": "Meena"
      },
      "answer": "B",
      "id": 793,
      "serial_in_topic": 38
    },
    {
      "topic": "bank_percentage",
      "q_num": 41,
      "question": "If `basis point are defined so that 1 percent is equal to 100 basis points, then 82.5 percent is how many basis points greater then 62.5 percent?",
      "options": {
        "a": "0.02",
        "b": "0.2",
        "c": "20",
        "d": "200",
        "e": "2000"
      },
      "answer": "E",
      "id": 794,
      "serial_in_topic": 39
    },
    {
      "topic": "bank_percentage",
      "q_num": 42,
      "question": "In a shipment of 120 machine parts 10% were defective. In another shipment of 80 machine parts 5% were defective.For the two shipments combined,what percent of the machine parts were defective?",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0%",
        "d": "0%",
        "e": "0%"
      },
      "answer": "C",
      "id": 795,
      "serial_in_topic": 40
    },
    {
      "topic": "bank_percentage",
      "q_num": 43,
      "question": "What is a percent of b divided by b percent of a?",
      "options": {
        "a": "a",
        "b": "b",
        "c": "1%",
        "d": "10",
        "e": "100"
      },
      "answer": "C",
      "id": 796,
      "serial_in_topic": 41
    },
    {
      "topic": "bank_percentage",
      "q_num": 44,
      "question": "A silo is filled to capacity with W pounds of wheat,Rats eat r pounds a day.After 25 days,what percent of the silos capacity have the rats eaten?",
      "options": {
        "a": "25r/w",
        "b": "25r/100w",
        "c": "2500xr/w",
        "d": "r/w",
        "e": "r/25w"
      },
      "answer": "C",
      "id": 797,
      "serial_in_topic": 42
    },
    {
      "topic": "bank_percentage",
      "q_num": 45,
      "question": "If 25 percent of p is equal to 10 percent of q,and pq#0,then p is what percent of q?",
      "options": {
        "a": "0.03%",
        "b": "0%",
        "c": "0%",
        "d": "0%",
        "e": "0%"
      },
      "answer": "E",
      "id": 798,
      "serial_in_topic": 43
    },
    {
      "topic": "bank_percentage",
      "q_num": 46,
      "question": "Alam spends 20% of her income on taxes and 20% of the remaindern on rent. What percent of her income does she spend on rent?",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0%",
        "d": "0%",
        "e": "0%"
      },
      "answer": "C",
      "id": 799,
      "serial_in_topic": 44
    },
    {
      "topic": "bank_percentage",
      "q_num": 47,
      "question": "Shahids salary is 120% of Rahims salary is 80% of Rahims salary.The ratio of Rahmans salary to Shahids salary is-",
      "options": {
        "a": "23 to 25",
        "b": "20 to 24",
        "c": "25 to 24",
        "d": "21 to 25",
        "e": "None of these"
      },
      "answer": "C",
      "id": 800,
      "serial_in_topic": 45
    },
    {
      "topic": "bank_percentage",
      "q_num": 48,
      "question": "Eight percent of the people eligble to vote are between 18 and 21.In an election,85% of those eligible to vote who were between 18 add 21 actually voted.In that election,people between 18 and 21 who a",
      "options": {
        "a": "23 to 25",
        "b": "20 to 24",
        "c": "25 to 24",
        "d": "21 to 25",
        "e": "None of these"
      },
      "answer": "E",
      "id": 801,
      "serial_in_topic": 46
    },
    {
      "topic": "bank_percentage",
      "q_num": 49,
      "question": "The length of a room is increased by 20% and the breadth decreased by 10%.Then,the area of the room is increased by what percent?",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0%",
        "d": "0%",
        "e": "None of these"
      },
      "answer": "A",
      "id": 802,
      "serial_in_topic": 47
    },
    {
      "topic": "bank_percentage",
      "q_num": 50,
      "question": "The length of a room is increased by 50% and the breadth decreased by 12%.Then,the area of the room is increased by what percent?",
      "options": {
        "a": "1%",
        "b": "1%",
        "c": "1%",
        "d": "0%",
        "e": "None of these"
      },
      "answer": "D",
      "id": 803,
      "serial_in_topic": 48
    },
    {
      "topic": "bank_percentage",
      "q_num": 51,
      "question": "If the length of a rectangle is increased by 20% and the width is decreased by 20%,then the area-",
      "options": {
        "a": "decreased by 20%",
        "b": "decreased by 4%",
        "c": "stay the same",
        "d": "increased by 10%"
      },
      "answer": "B",
      "id": 804,
      "serial_in_topic": 49
    },
    {
      "topic": "bank_percentage",
      "q_num": 52,
      "question": "If the length of a rectangle is increased by 40% and the width is decreased by 20% the area of the rectangle will increase by-",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0%",
        "d": "None of these"
      },
      "answer": "B",
      "id": 805,
      "serial_in_topic": 50
    },
    {
      "topic": "bank_percentage",
      "q_num": 53,
      "question": "Length of a rectangle is increased by 20% and breadth is decreased by 20%.Find change in area of the rectangle?",
      "options": {
        "a": "20% decrease",
        "b": "4%decrese",
        "c": "no change",
        "d": "20% increase",
        "e": "None of these"
      },
      "answer": "B",
      "id": 806,
      "serial_in_topic": 51
    },
    {
      "topic": "bank_percentage",
      "q_num": 54,
      "question": "The length of a room is increased by 75% and the breadth decreased by 12%. Then, the area of the room is increased by what percent?",
      "options": {
        "a": "1%",
        "b": "1%",
        "c": "1%",
        "d": "1%",
        "e": "None of these"
      },
      "answer": "D",
      "id": 807,
      "serial_in_topic": 52
    },
    {
      "topic": "bank_percentage",
      "q_num": 55,
      "question": "If the width of rectangle is increased by 25% and the length is decreased by 25%, the resulting area is what precent of the original area?",
      "options": {
        "a": "1%",
        "b": "1%",
        "c": "1%",
        "d": "0.01%",
        "e": "None of these"
      },
      "answer": "C",
      "id": 808,
      "serial_in_topic": 53
    },
    {
      "topic": "bank_percentage",
      "q_num": 56,
      "question": "If the length of a rectangle is increased by 20% and the width is decreased by 20%, then the area is:",
      "options": {
        "a": "Decreased by 20%",
        "b": "decreased by 4%",
        "c": "all the same",
        "d": "Increased by 10%",
        "e": "increased by 20%"
      },
      "answer": "B",
      "id": 809,
      "serial_in_topic": 54
    },
    {
      "topic": "bank_percentage",
      "q_num": 57,
      "question": "f the length and breadth of a rectangle are both increased by 3%, then what is the increase in its area?",
      "options": {
        "a": "0%",
        "b": "0.07%",
        "c": "0.08%",
        "d": "0%",
        "e": "None of these"
      },
      "answer": "E",
      "id": 810,
      "serial_in_topic": 55
    },
    {
      "topic": "bank_percentage",
      "q_num": 58,
      "question": "The length and breadth of a room are increased 12 percent and 25 percent respectively. What is the corresponding percentage increase in the floor area of the room?",
      "options": {
        "a": "20",
        "b": "25",
        "c": "40",
        "d": "50",
        "e": "60"
      },
      "answer": "C",
      "id": 811,
      "serial_in_topic": 56
    },
    {
      "topic": "bank_percentage",
      "q_num": 59,
      "question": "If both length and width of a rectangular plot for a garden are increased by 20%, how many percent of the plot would be increased?",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0%",
        "d": "0%",
        "e": "None of these"
      },
      "answer": "E",
      "id": 812,
      "serial_in_topic": 57
    },
    {
      "topic": "bank_percentage",
      "q_num": 60,
      "question": "The length and breadth of a room are increased by 20 percent and 25 percent respectively. What is the corresponding percentage increase in the floor area of the room?",
      "options": {
        "a": "20",
        "b": "25",
        "c": "45",
        "d": "50",
        "e": "60"
      },
      "answer": "D",
      "id": 813,
      "serial_in_topic": 58
    },
    {
      "topic": "bank_percentage",
      "q_num": 61,
      "question": "If the length and breadth of a rectangle are both increased by 4%,what is the increase in its area?",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0.08%",
        "d": "0%",
        "e": "None of these"
      },
      "answer": "C",
      "id": 814,
      "serial_in_topic": 59
    },
    {
      "topic": "bank_percentage",
      "q_num": 62,
      "question": "If the length and breadth of a rectangular garden plot were each increased by 20% what would be the percent increase in the area of the plot?",
      "options": {
        "a": "20",
        "b": "24",
        "c": "36",
        "d": "40",
        "e": "44"
      },
      "answer": "E",
      "id": 815,
      "serial_in_topic": 60
    },
    {
      "topic": "bank_percentage",
      "q_num": 63,
      "question": "The length and breadth of a room are decreased by 10 percent and 20 percent respectively. What is the corresponding percentage decrease in the floor area of the room?",
      "options": {
        "a": "20",
        "b": "22",
        "c": "28",
        "d": "50",
        "e": "60"
      },
      "answer": "C",
      "id": 816,
      "serial_in_topic": 61
    },
    {
      "topic": "bank_percentage",
      "q_num": 64,
      "question": "If the length and breadth of a rectangle are both decreased by 4% then what is the decrease in its area?",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0.08%",
        "d": "0%",
        "e": "None of these"
      },
      "answer": "E",
      "id": 817,
      "serial_in_topic": 62
    },
    {
      "topic": "bank_percentage",
      "q_num": 65,
      "question": "If the length of a rectangle is reduced by 20% and the width is increased by 20%, then what is the change in area?",
      "options": {
        "a": "Decrease by 10%",
        "b": "Decrease by 4%",
        "c": "remain the same",
        "d": "Increase by 1%",
        "e": "cannot be determined"
      },
      "answer": "B",
      "id": 818,
      "serial_in_topic": 63
    },
    {
      "topic": "bank_percentage",
      "q_num": 66,
      "question": "If the length of a rectangle is reduced by 20% and the width increased is by 10%,then what is the change in area?",
      "options": {
        "a": "Decrease by 1%",
        "b": "Decrease by 12%",
        "c": "remain the same",
        "d": "Increase by 1%",
        "e": "remain the same"
      },
      "answer": "B",
      "id": 819,
      "serial_in_topic": 64
    },
    {
      "topic": "bank_percentage",
      "q_num": 67,
      "question": "If the length of rectangle is decreased by 25% and the width is increasee by 25%,the resulting area is what percent of the orignal area?",
      "options": {
        "a": "1%",
        "b": "1%",
        "c": "0.94%",
        "d": "0.01%",
        "e": "None"
      },
      "answer": "A",
      "id": 820,
      "serial_in_topic": 65
    },
    {
      "topic": "bank_percentage",
      "q_num": 68,
      "question": "If the length of a rectangle is reduced by 10% and the width increased is by 10%,then what is the change in area?",
      "options": {
        "a": "Decrease by 1%",
        "b": "Decrease by 12%",
        "c": "remain the same",
        "d": "Increase by 1%",
        "e": "cannot be determined"
      },
      "answer": "A",
      "id": 821,
      "serial_in_topic": 66
    },
    {
      "topic": "bank_percentage",
      "q_num": 69,
      "question": "If each side of a square decrease by 40%,then the area of the square decrease by",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "1%",
        "d": "1%",
        "e": "None"
      },
      "answer": "C",
      "id": 822,
      "serial_in_topic": 67
    },
    {
      "topic": "bank_percentage",
      "q_num": 70,
      "question": "If each side of a square decrease by 10%,then the area of the square decrease by",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "1%",
        "d": "1%",
        "e": "None of these"
      },
      "answer": "A",
      "id": 823,
      "serial_in_topic": 68
    },
    {
      "topic": "bank_percentage",
      "q_num": 71,
      "question": "If the side of a square decreases by 20% then its area decreased by what percent?",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0%",
        "d": "80",
        "e": "None of these"
      },
      "answer": "A",
      "id": 824,
      "serial_in_topic": 69
    },
    {
      "topic": "bank_percentage",
      "q_num": 72,
      "question": "If each side of a square decreases by 30%,then the area of the square decreases by what percent?",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "1%",
        "d": "1%",
        "e": "None of these"
      },
      "answer": "C",
      "id": 825,
      "serial_in_topic": 70
    },
    {
      "topic": "bank_percentage",
      "q_num": 73,
      "question": "If each side of a square increased by 40%, then the area of the square increases by,",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "1%",
        "d": "1%",
        "e": "None of these"
      },
      "answer": "D",
      "id": 826,
      "serial_in_topic": 71
    },
    {
      "topic": "bank_percentage",
      "q_num": 74,
      "question": "If the side of a square increases by 50% then its area increase by what percent?",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "1%",
        "d": "1%",
        "e": "None of these"
      },
      "answer": "C",
      "id": 827,
      "serial_in_topic": 72
    },
    {
      "topic": "bank_percentage",
      "q_num": 75,
      "question": "If each side of a square increases by 30%,then the area of the square increases by what percent?",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "1%",
        "d": "1%",
        "e": "None of these"
      },
      "answer": "D",
      "id": 828,
      "serial_in_topic": 73
    },
    {
      "topic": "bank_percentage",
      "q_num": 76,
      "question": "If the side of a square increases by 20%,then the area of the square increases by what percent?",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "1%",
        "d": "1%",
        "e": "None of these"
      },
      "answer": "B",
      "id": 829,
      "serial_in_topic": 74
    },
    {
      "topic": "bank_percentage",
      "q_num": 77,
      "question": "If the length of each of the sides of three square garden plots is increased by 50 percent,by what percent is the sumof the areas of the three plots increased?",
      "options": {
        "a": "4%",
        "b": "2%",
        "c": "2%",
        "d": "1%",
        "e": "None of these"
      },
      "answer": "D",
      "id": 830,
      "serial_in_topic": 75
    },
    {
      "topic": "bank_percentage",
      "q_num": 78,
      "question": "If the side of a square increases by 40%,then the area of the square increases by:",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "1%",
        "d": "1%",
        "e": "1%"
      },
      "answer": "C",
      "id": 831,
      "serial_in_topic": 76
    },
    {
      "topic": "bank_percentage",
      "q_num": 79,
      "question": "If the area of a square is increased by 44%,the side of the square is increased by:",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0%",
        "d": "1%",
        "e": "1%"
      },
      "answer": "C",
      "id": 832,
      "serial_in_topic": 77
    },
    {
      "topic": "bank_percentage",
      "q_num": 80,
      "question": "If the area of a square increases by 69%,then the side of the square increases by:",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0%",
        "d": "1%",
        "e": "1%"
      },
      "answer": "A",
      "id": 833,
      "serial_in_topic": 78
    },
    {
      "topic": "bank_percentage",
      "q_num": 81,
      "question": "If the area of a square increased by 69%,the side of the square in increased by:",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0%",
        "d": "1%",
        "e": "1%"
      },
      "answer": "B",
      "id": 834,
      "serial_in_topic": 79
    },
    {
      "topic": "bank_percentage",
      "q_num": 82,
      "question": "The radius of a circle is increased by 5%,and then its area is increased by what percent?",
      "options": {
        "a": "0.10%",
        "b": "0%",
        "c": "0%",
        "d": "0%",
        "e": "None of these"
      },
      "answer": "A",
      "id": 835,
      "serial_in_topic": 80
    },
    {
      "topic": "bank_percentage",
      "q_num": 83,
      "question": "The radius of a circle is increased by 20%,and then its area is increased by what percent?",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0%",
        "d": "0%",
        "e": "None of these"
      },
      "answer": "D",
      "id": 836,
      "serial_in_topic": 81
    },
    {
      "topic": "bank_percentage",
      "q_num": 84,
      "question": "The radius of a circle is increased by 10%,and then its area is increased by what percent?",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0%",
        "d": "0%",
        "e": "None of these"
      },
      "answer": "C",
      "id": 837,
      "serial_in_topic": 82
    },
    {
      "topic": "bank_percentage",
      "q_num": 85,
      "question": "If radius of a circle is increased by 100%,by what % is area of the circle is increased.",
      "options": {
        "a": "5%",
        "b": "4%",
        "c": "3%",
        "d": "2%",
        "e": "1%"
      },
      "answer": "C",
      "id": 838,
      "serial_in_topic": 83
    },
    {
      "topic": "bank_percentage",
      "q_num": 86,
      "question": "If the radius of a circle is increased by 6%,then the area of the circle is increased by.",
      "options": {
        "a": "0%",
        "b": "0.04%",
        "c": "1%",
        "d": "0.12%",
        "e": "0%"
      },
      "answer": "D",
      "id": 839,
      "serial_in_topic": 84
    },
    {
      "topic": "bank_percentage",
      "q_num": 87,
      "question": "The radius of a circle is Decreased by 5%,and then its area is Decreased by what percent?",
      "options": {
        "a": "0.06%",
        "b": "0%",
        "c": "0%",
        "d": "0%",
        "e": "None of these"
      },
      "answer": "E",
      "id": 840,
      "serial_in_topic": 85
    },
    {
      "topic": "bank_percentage",
      "q_num": 88,
      "question": "The radius of a circle is decreased by 20%,and then its area is decreased by what percent?",
      "options": {
        "a": "0.10%",
        "b": "0%",
        "c": "0%",
        "d": "0%",
        "e": "None of these"
      },
      "answer": "B",
      "id": 841,
      "serial_in_topic": 86
    },
    {
      "topic": "bank_percentage",
      "q_num": 89,
      "question": "If the radius of a circle is decreased by 30 percent, by what percent will the area of the circular region be decreased?",
      "options": {
        "a": "0%",
        "b": "1%",
        "c": "1%",
        "d": "0.03%"
      },
      "answer": "B",
      "id": 842,
      "serial_in_topic": 87
    },
    {
      "topic": "bank_percentage",
      "q_num": 90,
      "question": "The price of rice in the year 2007 has increased by 20% from that of the previous year.In 2008,the price has decreased by 10% due to low production.In2008,what was the increase in price with",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0%",
        "d": "0%",
        "e": "None of these"
      },
      "answer": "D",
      "id": 843,
      "serial_in_topic": 88
    },
    {
      "topic": "bank_percentage",
      "q_num": 91,
      "question": "The price of wheat in the year 2007 has increased by 30% from that of the previous year.In 2008,the price has decreased by 10% due to low production.In2008,what was the increase in price with respect",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0%",
        "d": "0%",
        "e": "None of these"
      },
      "answer": "D",
      "id": 844,
      "serial_in_topic": 89
    },
    {
      "topic": "bank_percentage",
      "q_num": 92,
      "question": "The price of a Toyota car rises by 30%,while the sales of the car come down by 20%.What is the percentage change in the total revenue?",
      "options": {
        "a": "-0%",
        "b": "-0%",
        "c": "0%",
        "d": "0%",
        "e": "None of these"
      },
      "answer": "C",
      "id": 845,
      "serial_in_topic": 90
    },
    {
      "topic": "bank_percentage",
      "q_num": 93,
      "question": "If the price of an item is increased by 10% and then decreased by 10% the net effcet on the price of the item is.",
      "options": {
        "a": "increase of 99%",
        "b": "decrease of 1%",
        "c": "no change",
        "d": "increase of 1%",
        "e": "dfecrease of 1%"
      },
      "answer": "B",
      "id": 846,
      "serial_in_topic": 91
    },
    {
      "topic": "bank_percentage",
      "q_num": 94,
      "question": "The price of sugar in 1994 increased by 10% from that in 1993.In 1995 the price decreased by 5% from that in 1994.In 1995 what the increase in price with respect to price in 1993?",
      "options": {
        "a": "0%",
        "b": "0.04%",
        "c": "0%",
        "d": "0.06%",
        "e": "0%"
      },
      "answer": "B",
      "id": 847,
      "serial_in_topic": 92
    },
    {
      "topic": "bank_percentage",
      "q_num": 95,
      "question": "The price of sugar in the year 1995 increased by 10% from that of the perivous year.In 1996 the price decreased by 5%.In 1996,what was the increase in price with respect to that of 1994?",
      "options": {
        "a": "0%",
        "b": "0.04%",
        "c": "0%",
        "d": "0.06%",
        "e": "0%"
      },
      "answer": "B",
      "id": 848,
      "serial_in_topic": 93
    },
    {
      "topic": "bank_percentage",
      "q_num": 96,
      "question": "The price of a house rises by 25 percent and them falls by 20 percent.The price after these changes is:",
      "options": {
        "a": "20 precent greater them the original pric",
        "b": "5 percent greater them the original pric",
        "c": "The same as the original pric",
        "d": "5 percent less them the original pric"
      },
      "answer": "C",
      "id": 849,
      "serial_in_topic": 94
    },
    {
      "topic": "bank_percentage",
      "q_num": 97,
      "question": "The number of passengers on Dhaka -Chittagong route increased by 40% following the reduction of fare by 15%.What will be the percentage increase in revenue?",
      "options": {
        "a": "17",
        "b": "19",
        "c": "20",
        "d": "25",
        "e": "12"
      },
      "answer": "B",
      "id": 850,
      "serial_in_topic": 95
    },
    {
      "topic": "bank_percentage",
      "q_num": 98,
      "question": "In the Dhaka Stock Exchange,the price of Bata Share rose 30% yesterday and fell 20% today.What is the total rise or fall in percentage?",
      "options": {
        "a": "10% rise",
        "b": "8% rise",
        "c": "4% rise",
        "d": "10% fall",
        "e": "6% rise"
      },
      "answer": "C",
      "id": 851,
      "serial_in_topic": 96
    },
    {
      "topic": "bank_percentage",
      "q_num": 99,
      "question": "The price of a share rose 25% yesterday and fell 25% today.What is the total rise or fall percentage?",
      "options": {
        "a": "0.02",
        "b": "0.2",
        "c": "6.25",
        "d": "200",
        "e": "2000"
      },
      "answer": "C",
      "id": 852,
      "serial_in_topic": 97
    },
    {
      "topic": "bank_percentage",
      "q_num": 100,
      "question": "The sales of Konka TV increased by 50% when its price was reduced by 20%.What was the percentage change in the sales revenue of the company?",
      "options": {
        "a": "20",
        "b": "19",
        "c": "22",
        "d": "25",
        "e": "23"
      },
      "answer": "D",
      "id": 853,
      "serial_in_topic": 98
    },
    {
      "topic": "bank_percentage",
      "q_num": 101,
      "question": "The number of passengers on Dhaka-Agortala route increased by 50% when the fare was reduced by 20%.What was the percentage increase in revenue?",
      "options": {
        "a": "17",
        "b": "19",
        "c": "20",
        "d": "25",
        "e": "23"
      },
      "answer": "D",
      "id": 854,
      "serial_in_topic": 99
    },
    {
      "topic": "bank_percentage",
      "q_num": 102,
      "question": "The quantities a,b and c are positive and ab c/4 equals .What happen to c in order to remain true if a is increased by 50% and b is decreased by 25%",
      "options": {
        "a": "c decreases by 25%",
        "b": "c decreases by 12.5%",
        "c": "c increase by 12.5%",
        "d": "c increase by 25%",
        "e": "c increase by 50%"
      },
      "answer": "D",
      "id": 855,
      "serial_in_topic": 100
    },
    {
      "topic": "bank_percentage",
      "q_num": 103,
      "question": "The price of rice in the year 2007 has increased by 20% from that of the previous year.In 2008,the price has increased by 10% due to high production.In 2008,what was the decrease in price wit",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0%",
        "d": "0%",
        "e": "None of these"
      },
      "answer": "D",
      "id": 856,
      "serial_in_topic": 101
    },
    {
      "topic": "bank_percentage",
      "q_num": 104,
      "question": "The pric of rice in the year 2007 has decreased by 10% from that of the previous year.In 2008,the price has increased by 5% due to high production.In 2008,what was the decrease in price with respect t",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0.06%",
        "d": "0%",
        "e": "None of these"
      },
      "answer": "C",
      "id": 857,
      "serial_in_topic": 102
    },
    {
      "topic": "bank_percentage",
      "q_num": 105,
      "question": "If the price of a Bangla Link SIM was Tk.100 in 2007 and the price increased at 20% per year for two years,then what is the price the Bangla Link SIM in 2009?",
      "options": {
        "a": "120",
        "b": "125",
        "c": "129",
        "d": "144",
        "e": "None of these"
      },
      "answer": "D",
      "id": 858,
      "serial_in_topic": 103
    },
    {
      "topic": "bank_percentage",
      "q_num": 106,
      "question": "If the price of a Warid SIM was Tk.100 in 2007 and the price increased at 10% per year for two year,then what is the price of the Warid SIM in 2009?",
      "options": {
        "a": "121",
        "b": "125",
        "c": "129",
        "d": "144",
        "e": "None of these"
      },
      "answer": "A",
      "id": 859,
      "serial_in_topic": 104
    },
    {
      "topic": "bank_percentage",
      "q_num": 107,
      "question": "Increasing the original price of an item by 15 percent and then increasing the new price by another 15 percent is equivalent to increasing the original price by.",
      "options": {
        "a": "0.32%",
        "b": "0.31%",
        "c": "0.30%",
        "d": "0.36%",
        "e": "None of these"
      },
      "answer": "A",
      "id": 860,
      "serial_in_topic": 105
    },
    {
      "topic": "bank_percentage",
      "q_num": 108,
      "question": "If the price of a product was Tk.100 in 1990 and the price increased at 10%per year for two year,then what is the price of the same product in 1992?",
      "options": {
        "a": "110",
        "b": "120",
        "c": "121",
        "d": "125",
        "e": "None of these"
      },
      "answer": "D",
      "id": 861,
      "serial_in_topic": 106
    },
    {
      "topic": "bank_percentage",
      "q_num": 109,
      "question": "Successive discount of 10% and 20% is equivalent to single discount of.",
      "options": {
        "a": "32",
        "b": "30",
        "c": "31",
        "d": "28",
        "e": "None of these"
      },
      "answer": "D",
      "id": 862,
      "serial_in_topic": 107
    },
    {
      "topic": "bank_percentage",
      "q_num": 110,
      "question": "Successive discount of 20% and 30% is equivalent to single discount fo.",
      "options": {
        "a": "32",
        "b": "30",
        "c": "31",
        "d": "34",
        "e": "None of these"
      },
      "answer": "D",
      "id": 863,
      "serial_in_topic": 108
    },
    {
      "topic": "bank_percentage",
      "q_num": 111,
      "question": "A toy store regularly sell all stock at a discount of 20 percent to 40 percent,If an additional 25 percent were deducted from the discounted price during.A special sale, what would be the lowest possi",
      "options": {
        "a": "5.6",
        "b": "7.2",
        "c": "7.56",
        "d": "8.4",
        "e": "None of these"
      },
      "answer": "B",
      "id": 864,
      "serial_in_topic": 109
    },
    {
      "topic": "bank_percentage",
      "q_num": 112,
      "question": "Successive discount of 20% and 25% are equal to what singale discount rate(%)?.",
      "options": {
        "a": "45",
        "b": "40",
        "c": "32",
        "d": "50",
        "e": "None of these"
      },
      "answer": "D",
      "id": 865,
      "serial_in_topic": 110
    },
    {
      "topic": "bank_percentage",
      "q_num": 113,
      "question": "During summer,a store offers 10% discount on some item.But due to a defect,an additonal 5% was discounted from the discount price for a particualer item.If the list price of the item was Tk.400,what w",
      "options": {
        "a": "338",
        "b": "340",
        "c": "342",
        "d": "345.5",
        "e": "None of these"
      },
      "answer": "C",
      "id": 866,
      "serial_in_topic": 111
    },
    {
      "topic": "bank_percentage",
      "q_num": 114,
      "question": "A bicycle originally cost $100 and was discounted 10%.After three months it was sold after being discounted another 15%.How much was the bicycle sold for?",
      "options": {
        "a": "$76.50",
        "b": "$75.00",
        "c": "$73.50",
        "d": "$71.00",
        "e": "$69.50"
      },
      "answer": "A",
      "id": 867,
      "serial_in_topic": 112
    },
    {
      "topic": "bank_percentage",
      "q_num": 115,
      "question": "Successive discount of 30% and 10% on an item are equivalent to a single discount of:",
      "options": {
        "a": "0%",
        "b": "0.335",
        "c": "0%",
        "d": "0%",
        "e": "0%"
      },
      "answer": "C",
      "id": 868,
      "serial_in_topic": 113
    },
    {
      "topic": "bank_percentage",
      "q_num": 116,
      "question": "The price of a certain DVD is discounted by 10% and the reduced price is then discounted by 10%.This serise of successive discounts is equivalent to a single discount of:",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0%",
        "d": "0%",
        "e": "0%"
      },
      "answer": "D",
      "id": 869,
      "serial_in_topic": 114
    },
    {
      "topic": "bank_percentage",
      "q_num": 117,
      "question": "Examlpe: successive Increase of 10% and 20% is equivalent to single Increase of.",
      "options": {
        "a": "32",
        "b": "30",
        "c": "31",
        "d": "29",
        "e": "None of these"
      },
      "answer": "A",
      "id": 870,
      "serial_in_topic": 115
    },
    {
      "topic": "bank_percentage",
      "q_num": 118,
      "question": "Successive Increase of 10% and 30% is equivalent to single Increase of.",
      "options": {
        "a": "43",
        "b": "30",
        "c": "31",
        "d": "29",
        "e": "None of these"
      },
      "answer": "A",
      "id": 871,
      "serial_in_topic": 116
    },
    {
      "topic": "bank_percentage",
      "q_num": 119,
      "question": "Successive Increase of 20% and 15% is equal to what single Increase rate (%)?",
      "options": {
        "a": "45",
        "b": "40",
        "c": "38",
        "d": "50",
        "e": "None of these"
      },
      "answer": "C",
      "id": 872,
      "serial_in_topic": 117
    },
    {
      "topic": "bank_percentage",
      "q_num": 120,
      "question": "If 50% of the workers are graduate,and of them 20% are male,what percent of theworkers are male and graduate?",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0%",
        "d": "0%",
        "e": "None of these"
      },
      "answer": "C",
      "id": 873,
      "serial_in_topic": 118
    },
    {
      "topic": "bank_percentage",
      "q_num": 121,
      "question": "If 20% of all women are voters, and 60% of the populations are women,what percent of the population are women voters?",
      "options": {
        "a": "10",
        "b": "12",
        "c": "26.4",
        "d": "26.4",
        "e": "None of these"
      },
      "answer": "B",
      "id": 874,
      "serial_in_topic": 119
    },
    {
      "topic": "bank_percentage",
      "q_num": 122,
      "question": "In a certain class 40% of the students are girls,and 20% of the girls wear glasses.What percent of students in the class are girls who wear glasses?",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0%",
        "d": "0%",
        "e": "None of these"
      },
      "answer": "B",
      "id": 875,
      "serial_in_topic": 120
    },
    {
      "topic": "bank_percentage",
      "q_num": 123,
      "question": "If 40% of all women are voters and 52% of the populations are women,what percent of the population are women votes?",
      "options": {
        "a": "19.2",
        "b": "20.8",
        "c": "26.4",
        "d": "40"
      },
      "answer": "B",
      "id": 876,
      "serial_in_topic": 121
    },
    {
      "topic": "bank_percentage",
      "q_num": 124,
      "question": "In a class,30% of the students are from Dhaka Distric and 20% of them from Dhaka city.What percent of the total students are from Dhaka city.",
      "options": {
        "a": "0.06",
        "b": "0.6",
        "c": "1.5",
        "d": "6"
      },
      "answer": "D",
      "id": 877,
      "serial_in_topic": 122
    },
    {
      "topic": "bank_percentage",
      "q_num": 125,
      "question": "Experts say that 25% of all serious bicycle accidents involve head injurise and that of all such head injurise,80% are fatal.What percentage of all serious bicycle accdents involves fatal head injuris",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "1%",
        "d": "1%",
        "e": "None of these"
      },
      "answer": "B",
      "id": 878,
      "serial_in_topic": 123
    },
    {
      "topic": "bank_percentage",
      "q_num": 126,
      "question": "If 40% of the workers are graduate,and of them 15% are male,what percent of the workers are male and graduate?",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0%",
        "d": "None of these"
      },
      "answer": "B",
      "id": 879,
      "serial_in_topic": 124
    },
    {
      "topic": "bank_percentage",
      "q_num": 127,
      "question": "If 40% of all men are voters,and 52% of the populations are male,what percent of the population are male voters?",
      "options": {
        "a": "19.2",
        "b": "28.8",
        "c": "26.4",
        "d": "40",
        "e": "None of these"
      },
      "answer": "C",
      "id": 880,
      "serial_in_topic": 125
    },
    {
      "topic": "bank_percentage",
      "q_num": 128,
      "question": "A class of 10 girls and 20 boys arranged a picnic.However, only 15% of the girls and 30% of the boys attended the picnic.What percent of the class attended the picnic",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0%",
        "d": "0%",
        "e": "None of these"
      },
      "answer": "A",
      "id": 881,
      "serial_in_topic": 126
    },
    {
      "topic": "bank_percentage",
      "q_num": 129,
      "question": "A class of 20 girls and 40 boys arranged a picnic.However,only 10% of the girls and 30% of the boys attended the picnic.What percent of the class attended the picnic?",
      "options": {
        "a": "0%",
        "b": "0.08%",
        "c": "0%",
        "d": "0%",
        "e": "None of these"
      },
      "answer": "B",
      "id": 882,
      "serial_in_topic": 127
    },
    {
      "topic": "bank_percentage",
      "q_num": 130,
      "question": "A class of 20 girls and 30 boys arranged a picnic.However,only 30% of the girls and 40% of the boys attended the picnic.What percent of the class attended the picnic?",
      "options": {
        "a": "32.5",
        "b": "35",
        "c": "36",
        "d": "37.5",
        "e": "None of these"
      },
      "answer": "C",
      "id": 883,
      "serial_in_topic": 128
    },
    {
      "topic": "bank_percentage",
      "q_num": 131,
      "question": "A class of 50 girls and 70 boys sponsored a party.If the girls and 50% of the boys attended the party,approximately what percent of the class attended?",
      "options": {
        "a": "40",
        "b": "42",
        "c": "44",
        "d": "45.83"
      },
      "answer": "D",
      "id": 884,
      "serial_in_topic": 129
    },
    {
      "topic": "bank_percentage",
      "q_num": 132,
      "question": "In a class of 80 students,25% are girls.of the boys and 20% of the girls attended a picnic, what percent of the class did attend?",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0.12%",
        "d": "0%"
      },
      "answer": "C",
      "id": 885,
      "serial_in_topic": 130
    },
    {
      "topic": "bank_percentage",
      "q_num": 133,
      "question": "At Pathshala, 60% members are male and 70% members are graduaes Also, 80% of the graduate members are male. What percent of the members are female and not graduate?",
      "options": {
        "a": "40",
        "b": "20",
        "c": "26",
        "d": "60",
        "e": "50"
      },
      "answer": "C",
      "id": 886,
      "serial_in_topic": 131
    },
    {
      "topic": "bank_percentage",
      "q_num": 134,
      "question": "In Future language club, 70% of the members are married,and of the married members, 30% are female. If 40% of the members are female, what percent of the members are unmarried male?",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0%",
        "d": "0.23%",
        "e": "None of these"
      },
      "answer": "A",
      "id": 887,
      "serial_in_topic": 132
    },
    {
      "topic": "bank_percentage",
      "q_num": 135,
      "question": "In a club 60% of the members are male and 70% are engineers. If 50% of the engineers are male, then what percent of the club members are female and not engineers?",
      "options": {
        "a": "40",
        "b": "20",
        "c": "15",
        "d": "10",
        "e": "None of these"
      },
      "answer": "E",
      "id": 888,
      "serial_in_topic": 133
    },
    {
      "topic": "bank_percentage",
      "q_num": 136,
      "question": "In a club, 40 percent of the members are men. If 20 percent of the men and 10 precent of the women members went to a relief work, what percent of the total members went to relief work?",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0%",
        "d": "0%",
        "e": "None of these"
      },
      "answer": "C",
      "id": 889,
      "serial_in_topic": 134
    },
    {
      "topic": "bank_percentage",
      "q_num": 137,
      "question": "In the Excel Manufacturing Company, 46% of the employees are men. If 60% of the employees are unionized and 70% of them are men, what percent of the non- unionized workers are men?",
      "options": {
        "a": "1%",
        "b": "0.88%",
        "c": "0.67%",
        "d": "0%",
        "e": "None of these"
      },
      "answer": "D",
      "id": 890,
      "serial_in_topic": 135
    },
    {
      "topic": "bank_percentage",
      "q_num": 138,
      "question": "In a certain club, 70% of the members are married, and of the married members, 60% are female. If 60% of the members are female, what percent of the members are unmarried male?",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0%",
        "d": "0.23%",
        "e": "None of these"
      },
      "answer": "B",
      "id": 891,
      "serial_in_topic": 136
    },
    {
      "topic": "bank_percentage",
      "q_num": 139,
      "question": "In a club 60% member are male and 70% members are graduates Also, 50% of the graduate members are male. What percent of the club members are female and not graduate?",
      "options": {
        "a": "100",
        "b": "90",
        "c": "60",
        "d": "50",
        "e": "25"
      },
      "answer": "C",
      "id": 892,
      "serial_in_topic": 137
    },
    {
      "topic": "bank_percentage",
      "q_num": 141,
      "question": "In a Apex shop at Basundhara City, 40% socks are white & rest is black. 60% socks are made of cotton & rests are made of wool. 50% white socks are made of cotton & 60 of the black socks are made of wo",
      "options": {
        "a": "120",
        "b": "90",
        "c": "60",
        "d": "50",
        "e": "25"
      },
      "answer": "A",
      "id": 893,
      "serial_in_topic": 138
    },
    {
      "topic": "bank_percentage",
      "q_num": 142,
      "question": "In a shop, 40% socks are white & rest is black. 60% socks are made of cotton & rests are made of wool. 25% white socks are made of cotton & 20 of the black socks are made of wool. How many black socks",
      "options": {
        "a": "100",
        "b": "80",
        "c": "60",
        "d": "50",
        "e": "25"
      },
      "answer": "A",
      "id": 894,
      "serial_in_topic": 139
    },
    {
      "topic": "bank_percentage",
      "q_num": 143,
      "question": "In a Apex store at Mouchak, the ratio of red socks to green socks is 4:1. The socks are made of either cotton or wool. If 30% of the red socks are made of cotton and 60% of the green socks ar",
      "options": {
        "a": "5600",
        "b": "5630",
        "c": "5625",
        "d": "5680",
        "e": "None of these"
      },
      "answer": "C",
      "id": 895,
      "serial_in_topic": 140
    },
    {
      "topic": "bank_percentage",
      "q_num": 146,
      "question": "A salesman achieves total sales of Tk.75000 and gets 2.5% commission on the sales Taka amount he achieves in the month. How much commission will the salesman get in the month?",
      "options": {
        "a": "1875",
        "b": "5630",
        "c": "5625",
        "d": "5680",
        "e": "None of these"
      },
      "answer": "A",
      "id": 896,
      "serial_in_topic": 141
    },
    {
      "topic": "bank_percentage",
      "q_num": 147,
      "question": "A sales person earns a commission of 5% on all sales between Tk.2000 and Tk 6000 and 8% on all sales over tk.6000. What is his total commission in a week in which his sales total Tk, 10,000?",
      "options": {
        "a": "500",
        "b": "540",
        "c": "620",
        "d": "720",
        "e": "None of these"
      },
      "answer": "C",
      "id": 897,
      "serial_in_topic": 142
    },
    {
      "topic": "bank_percentage",
      "q_num": 148,
      "question": "A sales representative will receive a 15% commission on a sale of Tk 2800. If she has already received and advances of Tk 150 on that commission, how much more is she due on the commission?",
      "options": {
        "a": "120",
        "b": "270",
        "c": "320",
        "d": "420",
        "e": "570"
      },
      "answer": "B",
      "id": 898,
      "serial_in_topic": 143
    },
    {
      "topic": "bank_percentage",
      "q_num": 149,
      "question": "A salesman gets a salary of Tk.4500 per month plus 1.25% commission on the sales Taka amount he achieves in the month. How much sales, in lakh Taka, he has to achieve in a month in order to g",
      "options": {
        "a": "3",
        "b": "3.6",
        "c": "2.4",
        "d": "5.6",
        "e": "None of these"
      },
      "answer": "C",
      "id": 899,
      "serial_in_topic": 144
    },
    {
      "topic": "bank_percentage",
      "q_num": 150,
      "question": "A salesman gets a salary of Tk.1500 per month plus 1.25% commission on the sales Taka amount he achieves in the month. How much sales, in lakh Taka, he has to achieve in a month in order to get a tota",
      "options": {
        "a": "3",
        "b": "1.6",
        "c": "2.4",
        "d": "5.6",
        "e": "None of these"
      },
      "answer": "B",
      "id": 900,
      "serial_in_topic": 145
    },
    {
      "topic": "bank_percentage",
      "q_num": 151,
      "question": "A salesman gets a salary of Tk. 3000 per month plus 1.25% commission on the sales Taka amount he achieves in the month. How much sales, in lakh Taka, he has to achieve in a month in order to get a tot",
      "options": {
        "a": "3",
        "b": "3.6",
        "c": "4",
        "d": "5.6",
        "e": "None of these"
      },
      "answer": "B",
      "id": 901,
      "serial_in_topic": 146
    },
    {
      "topic": "bank_percentage",
      "q_num": 152,
      "question": "A salesman is paid a monthly salary of tk. 5000 plus a 5% commission on all his sales. What should be his total annual sales, in taka, in taka, in order for him to have gross annual total earnings or",
      "options": {
        "a": "1.6",
        "b": "10",
        "c": "16",
        "d": "8",
        "e": "None of these"
      },
      "answer": "A",
      "id": 902,
      "serial_in_topic": 147
    },
    {
      "topic": "bank_percentage",
      "q_num": 153,
      "question": "A sales person earns as commission 5% on all sales between Tk.2000 and 6000, and 8% on all sales over Tk.6000. If in a week his commission is Tk.460, what were his total sales?",
      "options": {
        "a": "8000",
        "b": "9000",
        "c": "10000",
        "d": "12000",
        "e": "None"
      },
      "answer": "A",
      "id": 903,
      "serial_in_topic": 148
    },
    {
      "topic": "bank_percentage",
      "q_num": 154,
      "question": "A salesperson receives a salary of Tk. 100 a week and a commission of 5% on all sales. What must be the amount of sales for a week in which the persons total weekly income is Tk.360?",
      "options": {
        "a": "Tk. 6,200",
        "b": "Tk. 5,200",
        "c": "Tk. 2,600",
        "d": "Tk. 7,200",
        "e": "Tk. 5,600"
      },
      "answer": "B",
      "id": 904,
      "serial_in_topic": 149
    },
    {
      "topic": "bank_percentage",
      "q_num": 155,
      "question": "A salesman receives daily wage of Tk. 250 and earns a commission of 15% on all sales he makes. How much Taka worth of sales does he needs to make in order to bring his total daily income of Tk. 1,000",
      "options": {
        "a": "Tk. 4,500",
        "b": "Tk. 5,000",
        "c": "Tk. 5,500",
        "d": "Tk. 6,000",
        "e": "Tk. 7,500"
      },
      "answer": "B",
      "id": 905,
      "serial_in_topic": 150
    },
    {
      "topic": "bank_percentage",
      "q_num": 156,
      "question": "Price of paper has increased by 40%. How much paper usage must be curtailed so that expenditure for paper remains the same?",
      "options": {
        "a": "0.29%",
        "b": "0.12%",
        "c": "0.17%",
        "d": "0.24%",
        "e": "None of these"
      },
      "answer": "A",
      "id": 906,
      "serial_in_topic": 151
    },
    {
      "topic": "bank_percentage",
      "q_num": 157,
      "question": "Price of paper has increased by 30%. How much paper usage must be curtailed so that expenditure for paper remains the same?",
      "options": {
        "a": "0.29%",
        "b": "0.12%",
        "c": "0.17%",
        "d": "0.24%",
        "e": "None of these"
      },
      "answer": "E",
      "id": 907,
      "serial_in_topic": 152
    },
    {
      "topic": "bank_percentage",
      "q_num": 158,
      "question": "Price of paper has increased by 20%. What percent of the paper usage must be curtailed so the the expenditure for paper remains the same?",
      "options": {
        "a": "0.09%",
        "b": "0.12%",
        "c": "0.17%",
        "d": "None of these"
      },
      "answer": "C",
      "id": 908,
      "serial_in_topic": 153
    },
    {
      "topic": "bank_percentage",
      "q_num": 159,
      "question": "The length of a rectangle is increased by 50%.By what percent would the width have to be decreased to maintain the same area?",
      "options": {
        "a": "0.33%",
        "b": "0%",
        "c": "0%",
        "d": "0.67%"
      },
      "answer": "A",
      "id": 909,
      "serial_in_topic": 154
    },
    {
      "topic": "bank_percentage",
      "q_num": 160,
      "question": "The length of a rectangle is increased by 60%.By what percent would the width have to be decreased to maintain the same area?",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "60",
        "d": "0.62%",
        "e": "None of these"
      },
      "answer": "E",
      "id": 910,
      "serial_in_topic": 155
    },
    {
      "topic": "bank_percentage",
      "q_num": 161,
      "question": "Price of paper has increased by 20%.How much paper usage must be curtailed so that expenditure for paper remains the same?",
      "options": {
        "a": "0.09%",
        "b": "0.12%",
        "c": "0.17%",
        "d": "0.24%",
        "e": "None of these"
      },
      "answer": "C",
      "id": 911,
      "serial_in_topic": 156
    },
    {
      "topic": "bank_percentage",
      "q_num": 162,
      "question": "price of paper has decreased by 40%.How much paper usage must be enhanced so that expenditure for paper remains the same?",
      "options": {
        "a": "0.29%",
        "b": "0.23%",
        "c": "0.67%",
        "d": "0.24%",
        "e": "None of these"
      },
      "answer": "C",
      "id": 912,
      "serial_in_topic": 157
    },
    {
      "topic": "bank_percentage",
      "q_num": 163,
      "question": "Price of paper has decreased by 30%.How much paper usage must be enhanced so that expenditure for paper remains the same?",
      "options": {
        "a": "0.29%",
        "b": "0.23%",
        "c": "0.67%",
        "d": "0.24%",
        "e": "None of these"
      },
      "answer": "E",
      "id": 913,
      "serial_in_topic": 158
    },
    {
      "topic": "bank_percentage",
      "q_num": 164,
      "question": "Price of paper has decreased by 20%.How much paper usage must be enhanced so that expenditure for paper remains the same?",
      "options": {
        "a": "0.09%",
        "b": "0.12%",
        "c": "0.17%",
        "d": "0%",
        "e": "None of these"
      },
      "answer": "D",
      "id": 914,
      "serial_in_topic": 159
    },
    {
      "topic": "bank_percentage",
      "q_num": 165,
      "question": "Price of paper has increased by 25%.How much paper usage must be curtailed expenditure for paper remains the same?",
      "options": {
        "a": "0%",
        "b": "0.12%",
        "c": "0.17%",
        "d": "0.24%",
        "e": "None of these"
      },
      "answer": "A",
      "id": 915,
      "serial_in_topic": 160
    },
    {
      "topic": "bank_percentage",
      "q_num": 166,
      "question": "Price of pen has increased by 25%.How much pen usage must curtailed so that expentidure for pen remains the same?",
      "options": {
        "a": "0%",
        "b": "0.12%",
        "c": "0.17%",
        "d": "0.24%",
        "e": "None of these"
      },
      "answer": "A",
      "id": 916,
      "serial_in_topic": 161
    },
    {
      "topic": "bank_percentage",
      "q_num": 167,
      "question": "When price of sugar was raised by 25%,a person cut down sugar consumption in such a way that his expenditure on sugar was unchanged.By what percentage the person reduced sugar consumption?",
      "options": {
        "a": "15",
        "b": "18",
        "c": "20",
        "d": "None of these"
      },
      "answer": "C",
      "id": 917,
      "serial_in_topic": 162
    },
    {
      "topic": "bank_percentage",
      "q_num": 168,
      "question": "When price of rice was raised by 25%,a person cut down sugar consumption in such a way that his expenditure on rice was unchanged.By what percentage the person reduced sugar consumption?",
      "options": {
        "a": "15",
        "b": "18",
        "c": "20",
        "d": "None of these"
      },
      "answer": "C",
      "id": 918,
      "serial_in_topic": 163
    },
    {
      "topic": "bank_percentage",
      "q_num": 169,
      "question": "If an organization increases its staff salary by 25%,by what percent must it now decrease the salary to return to the orginal amount?",
      "options": {
        "a": "15",
        "b": "18",
        "c": "20",
        "d": "None of these"
      },
      "answer": "C",
      "id": 919,
      "serial_in_topic": 164
    },
    {
      "topic": "bank_percentage",
      "q_num": 170,
      "question": "Price of onion gose up by 25%.By how much should usage be reduced to keep total expense for onion as before?",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0.33%",
        "d": "0%",
        "e": "0.17%"
      },
      "answer": "B",
      "id": 920,
      "serial_in_topic": 165
    },
    {
      "topic": "bank_percentage",
      "q_num": 171,
      "question": "Due to booming business,a company increased its staff salary by 25%.By what5 percent must it now decrease the salary to return to the oriinal amount?",
      "options": {
        "a": "15",
        "b": "18",
        "c": "20",
        "d": "22.5",
        "e": "None of these"
      },
      "answer": "C",
      "id": 921,
      "serial_in_topic": 166
    },
    {
      "topic": "bank_percentage",
      "q_num": 172,
      "question": "price of paper has decreased by 20%. How much paper usage must be enhanced so that expenditure for paper remains the same?",
      "options": {
        "a": "0.29%",
        "b": "0%",
        "c": "0.67%",
        "d": "0%",
        "e": "None of these"
      },
      "answer": "B",
      "id": 922,
      "serial_in_topic": 167
    },
    {
      "topic": "bank_percentage",
      "q_num": 173,
      "question": "price of wheat has decreased by 20%. How much wheat usage must be enhanced so that expenditure for wheat remains the same?",
      "options": {
        "a": "0.29%",
        "b": "0%",
        "c": "0.67%",
        "d": "0%",
        "e": "None of these"
      },
      "answer": "B",
      "id": 923,
      "serial_in_topic": 168
    },
    {
      "topic": "bank_percentage",
      "q_num": 174,
      "question": "Mr. Shabbir sells has business English Book to Mr. Firoz and makes a profit of 25%. Mr. Firoz sells it to Mr. Ruhi at a loss of 20%. If Mr. Ruhi buys it for Tk. 300, what price Mr. Shabbir pa",
      "options": {
        "a": "310",
        "b": "300",
        "c": "140",
        "d": "150",
        "e": "None of these"
      },
      "answer": "B",
      "id": 924,
      "serial_in_topic": 169
    },
    {
      "topic": "bank_percentage",
      "q_num": 175,
      "question": "Mr. Opu sells a pen to Mr. Basher and makes a profit of 25%. Mr. Basher sells it to Mr. Nur at a loss of 20%. If Mr.Nur buys it for Tk. 100, what price Mr. Opu paid for it?",
      "options": {
        "a": "310",
        "b": "300",
        "c": "140",
        "d": "100",
        "e": "None of these"
      },
      "answer": "D",
      "id": 925,
      "serial_in_topic": 170
    },
    {
      "topic": "bank_percentage",
      "q_num": 176,
      "question": "The price of a house rises by 25 percent and them falls by 20 percent. The price after these changes is:",
      "options": {
        "a": "20 percent greater them the original pric",
        "b": "5 percent greater them the original pric",
        "c": "The same as the original pric",
        "d": "5 percent less them the original pric"
      },
      "answer": "C",
      "id": 926,
      "serial_in_topic": 171
    },
    {
      "topic": "bank_percentage",
      "q_num": 177,
      "question": "In a school, 25% more students were enrolled in Januar. But in February, 20% of the students left and the number of students remained was 100. What was the original number of students?",
      "options": {
        "a": "105",
        "b": "100",
        "c": "85",
        "d": "80",
        "e": "None of these"
      },
      "answer": "B",
      "id": 927,
      "serial_in_topic": 172
    },
    {
      "topic": "bank_percentage",
      "q_num": 178,
      "question": "X sells a product to Y and makes a profit of 25%. Y sells it to Z at a loss of 20%. If Z busy it for Tk. 140, what price X paid for it?",
      "options": {
        "a": "210",
        "b": "175",
        "c": "140",
        "d": "150",
        "e": "None of these"
      },
      "answer": "C",
      "id": 928,
      "serial_in_topic": 173
    },
    {
      "topic": "bank_percentage",
      "q_num": 179,
      "question": "Price of paper has increased by 33.33%. How much paper usage must be curtailed so that expenditure for paper remains the same?",
      "options": {
        "a": "0%",
        "b": "0.12%",
        "c": "0.17%",
        "d": "0.24%",
        "e": "None of these"
      },
      "answer": "A",
      "id": 929,
      "serial_in_topic": 174
    },
    {
      "topic": "bank_percentage",
      "q_num": 180,
      "question": "Price of potatoes has increased by 33.33%. How much potato usage must be curtailed so that expenditure for potatoes remains the same?",
      "options": {
        "a": "0%",
        "b": "0.12%",
        "c": "0.17%",
        "d": "0.24%",
        "e": "None of these"
      },
      "answer": "A",
      "id": 930,
      "serial_in_topic": 175
    },
    {
      "topic": "bank_percentage",
      "q_num": 181,
      "question": "Price of paper has decreased by 25%. How much paper usage must be enchanced so that expenditure for paper remains the same?",
      "options": {
        "a": "0.29%",
        "b": "0.33%",
        "c": "0.67%",
        "d": "0%",
        "e": "None of these"
      },
      "answer": "B",
      "id": 931,
      "serial_in_topic": 176
    },
    {
      "topic": "bank_percentage",
      "q_num": 182,
      "question": "Price of glass has decreased by 25%. How much glass usage must be enhanced so that expenditure for glass remains the same?",
      "options": {
        "a": "0.29%",
        "b": "0.33%",
        "c": "0.67%",
        "d": "0%",
        "e": "None of these"
      },
      "answer": "B",
      "id": 932,
      "serial_in_topic": 177
    },
    {
      "topic": "bank_percentage",
      "q_num": 183,
      "question": "The salary of Mr. X is 33.33% more than that of Mr. Y, and the salary of Mr. Y is 25% less than that of Mr. Z. If the salary of Mr. Z is Tk. 2222, what is the salary of Mr. X?",
      "options": {
        "a": "2222",
        "b": "1800",
        "c": "1750",
        "d": "1500",
        "e": "None of these"
      },
      "answer": "A",
      "id": 933,
      "serial_in_topic": 178
    },
    {
      "topic": "bank_percentage",
      "q_num": 184,
      "question": "The salary of Mr. X is 33.33% more than that of Mr. Y, and the salary of Mr. Y is 25% less than that of Mr. Z. If the salary of Mr. Z is Tk. 20000, what is the salary of Mr. X?",
      "options": {
        "a": "20000",
        "b": "18000",
        "c": "17500",
        "d": "15000",
        "e": "None of these"
      },
      "answer": "A",
      "id": 934,
      "serial_in_topic": 179
    },
    {
      "topic": "bank_percentage",
      "q_num": 185,
      "question": "Three workers, X, Y and Z are paid a total of Tk. 6600 for a particular practice. X is paid 133.33% of the amount paid to Y and Y is paid 75% of amount paid to Z. How much is paid to Z?",
      "options": {
        "a": "1750",
        "b": "1850",
        "c": "1950",
        "d": "2400",
        "e": "None of these"
      },
      "answer": "D",
      "id": 935,
      "serial_in_topic": 180
    },
    {
      "topic": "bank_percentage",
      "q_num": 186,
      "question": "Three workers, X, Y and Z are paid a total of Tk. 5,500 for a particular practice. X is paid 133.33% of the amount paid to Y and Y is paid 75% of amount paid to Z. How much is paid to Z?",
      "options": {
        "a": "1750",
        "b": "1850",
        "c": "1950",
        "d": "2000",
        "e": "None of these"
      },
      "answer": "D",
      "id": 936,
      "serial_in_topic": 181
    },
    {
      "topic": "bank_percentage",
      "q_num": 187,
      "question": "The price of a newspaper rises from Tk.10 to Tk. 20. What is the percent increase in price?",
      "options": {
        "a": "2%",
        "b": "1%",
        "c": "3%",
        "d": "4%",
        "e": "None of these"
      },
      "answer": "B",
      "id": 937,
      "serial_in_topic": 182
    },
    {
      "topic": "bank_percentage",
      "q_num": 188,
      "question": "The price of a newspaper rises from Tk.20 to Tk.40. What is the percent increase in price?",
      "options": {
        "a": "2%",
        "b": "1%",
        "c": "3%",
        "d": "4%",
        "e": "None of these"
      },
      "answer": "B",
      "id": 938,
      "serial_in_topic": 183
    },
    {
      "topic": "bank_percentage",
      "q_num": 189,
      "question": "Karim bought a ticket to crieket match for Tk. 25 and later sold the ticket to Rahim for Tk. 75. What was the percent increase in the rice of the ticket?",
      "options": {
        "a": "4%",
        "b": "3%",
        "c": "2%",
        "d": "1%",
        "e": "None of these"
      },
      "answer": "C",
      "id": 939,
      "serial_in_topic": 184
    },
    {
      "topic": "bank_percentage",
      "q_num": 190,
      "question": "If the population of a town was 20000 in 1970 and 16000 in 1980, what was the percent decline in the towns population?",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0%",
        "d": "0%",
        "e": "0%"
      },
      "answer": "C",
      "id": 940,
      "serial_in_topic": 185
    },
    {
      "topic": "bank_percentage",
      "q_num": 191,
      "question": "If a stock average was 500 points at the beginning of week and 400 points at the end of the same week, by what percent has it decreased during the week?",
      "options": {
        "a": "20",
        "b": "22",
        "c": "25",
        "d": "27",
        "e": "30"
      },
      "answer": "C",
      "id": 941,
      "serial_in_topic": 186
    },
    {
      "topic": "bank_percentage",
      "q_num": 192,
      "question": "A share of stock in ABC Enterprises cost E dollars on January 1, 1995. 1 year later, the share increased to M dollars. The fraction by which the cost of the share of stock has increased in the year is",
      "options": {
        "a": "M-E/E",
        "b": "E-M/M",
        "c": "E/M",
        "d": "M/E",
        "e": "M-E/ES"
      },
      "answer": "A",
      "id": 942,
      "serial_in_topic": 187
    },
    {
      "topic": "bank_percentage",
      "q_num": 193,
      "question": "The Consumer Price Index (CPI) was 105 in 2002 and 110 in 2003. What was the rate of inflation in 2003 based on 2002?",
      "options": {
        "a": "0%",
        "b": "0.05%",
        "c": "0.04%",
        "d": "0.04%",
        "e": "0%"
      },
      "answer": "B",
      "id": 943,
      "serial_in_topic": 188
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 194,
      "question": "X sells an item to Y at a profit of 28% on his cost and Y sells the same to Z at a loss of 25% on his cost. If Y has thus sold the item to Z Tk. 2 less than the cost of the item to X then What is the",
      "options": {
        "a": "100",
        "b": "50",
        "c": "200",
        "d": "150",
        "e": "250"
      },
      "answer": "B",
      "id": 944,
      "serial_in_topic": 1
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 195,
      "question": "Xs score is 10% higher than Ys sore and Zs score is 10% lower than Xs. Whose score is the lowest?",
      "options": {
        "a": "Y",
        "b": "X",
        "c": "Z",
        "d": "Y & Z",
        "e": "cant be determined"
      },
      "answer": "C",
      "id": 945,
      "serial_in_topic": 2
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 196,
      "question": "Alis speed is 10% higher than that of Rahim and Karims speed is 10% lower than Alis speed. Which of the following statements is true?",
      "options": {
        "a": "Rahims speed equals to Karims speed",
        "b": "Karims speed is the highest",
        "c": "Rahims speed is the lowest",
        "d": "Alis speed is the lowest",
        "e": "None of these"
      },
      "answer": "E",
      "id": 946,
      "serial_in_topic": 3
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 197,
      "question": "Two years ago, the cost of pen A was Tk. 70 more than that of pen B. But due to high demand, the cost of pen A has increased by 100% and that of pen B has increased by Tk.20. If today you need a total",
      "options": {
        "a": "30",
        "b": "40",
        "c": "50",
        "d": "70",
        "e": "None of these"
      },
      "answer": "A",
      "id": 947,
      "serial_in_topic": 4
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 198,
      "question": "A price of a pen is same as that of a screwdriver. If the price of a pen is raised by 15% and the price of a screwdriver is decreased by 3%, how much or less will it cost to by 3 screwdrivers",
      "options": {
        "a": "6% more",
        "b": "6%less",
        "c": "4% more",
        "d": "4%less",
        "e": "None of these"
      },
      "answer": "A",
      "id": 948,
      "serial_in_topic": 5
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 199,
      "question": "A price of a pen is same as that of a screwdriver. If the price of a pen is raised by 20% and the price of a screwdriver is decreased by 10%, how much or less will it cost to by 5 screwdrivers and 5 p",
      "options": {
        "a": "5% more",
        "b": "6% less",
        "c": "4% more",
        "d": "4% less",
        "e": "None of these"
      },
      "answer": "A",
      "id": 949,
      "serial_in_topic": 6
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 200,
      "question": "One dozen eggs and ten pounds of apples are currently the same price.If the price of a dozen eggs rise by 10% and the price of apples gose up by 2%,how much more will it cost to buy a dozen eggs and t",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0%",
        "d": "0%"
      },
      "answer": "B",
      "id": 950,
      "serial_in_topic": 7
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 201,
      "question": "A hammer and screwdriver currently have the same price.If the price of a hammer rises by 6% and the price of a screwdriver gose up 4%,how much more will ti cost to buy 4 hammers & 4 screwdrivers?",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0%",
        "d": "0%",
        "e": "0%"
      },
      "answer": "A",
      "id": 951,
      "serial_in_topic": 8
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 202,
      "question": "A scredriver and a hammer currently have the same price.If the price of a screwdriver rises by 5% and the price of a hammer gose up by 8%,how much more will it cost to buy 3 screwdriver and 3 hammer?",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0.07%",
        "d": "0%",
        "e": "0%"
      },
      "answer": "C",
      "id": 952,
      "serial_in_topic": 9
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 203,
      "question": "One dozen of eggs and ten kilograms of potatoes currently have the same price.If the price of a dozen of eggs rises by 10% and the price of potatoes gose up by 2% per kilograms,how much more it will c",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0%",
        "d": "0%",
        "e": "0.12%"
      },
      "answer": "B",
      "id": 953,
      "serial_in_topic": 10
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 204,
      "question": "One dozen eggs and ten pounds of apples are currently selling at the same price.If the price of a dozen of eggs rises by 10% and the price of the apples gose up by 4%,then how much more will it cost t",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0%",
        "d": "0%",
        "e": "0%"
      },
      "answer": "A",
      "id": 954,
      "serial_in_topic": 11
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 205,
      "question": "A price of a pen is thrice that of a screwdriver.If the price of a pen is raised by 6% and the price of a screwdriver is decreased by 2%,how much or less will it cost to buy 13 screwdrivers a",
      "options": {
        "a": "6% more",
        "b": "6% less",
        "c": "4% more",
        "d": "4% less",
        "e": "None of these"
      },
      "answer": "C",
      "id": 955,
      "serial_in_topic": 12
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 206,
      "question": "A price of a pen is twice that of a screwdriver.If the price of a pen is raised by 4% and the price of a screwdriver is increased by 2%,how much or less will it cost to by 13 screwdrivers and 13 pens?",
      "options": {
        "a": "2% more",
        "b": "6% less",
        "c": "4% more",
        "d": "4% less",
        "e": "None of these"
      },
      "answer": "A",
      "id": 956,
      "serial_in_topic": 13
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 207,
      "question": "The price of a pen is twice that ofa pencil.If the price of the pen increased by 5% and the of the pencil is decreased by 4%,how much more or less (in percentage) will it cost to buy 5 pen and 5 penci",
      "options": {
        "a": "2% less",
        "b": "2.5% less",
        "c": "2.5% more",
        "d": "2% more",
        "e": "None of these"
      },
      "answer": "D",
      "id": 957,
      "serial_in_topic": 14
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 208,
      "question": "A price of a hammer is twice that of a screwdriver.If the price of a hammer is rasied by 5% and the price of a screwdriver is decreased by 4%,how much or less will it cost to by 3 screwdrivers and ham",
      "options": {
        "a": "2% more",
        "b": "2% less",
        "c": "4% more",
        "d": "4% less",
        "e": "None of these"
      },
      "answer": "A",
      "id": 958,
      "serial_in_topic": 15
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 209,
      "question": "In the football league of 1998.Arambag won 50% of their games.In 1999.Arambag won 65% of their games.If there were twice as many games played in the second season as in the first,what percentage of th",
      "options": {
        "a": "1%",
        "b": "1%",
        "c": "0.57%",
        "d": "1%",
        "e": "0%"
      },
      "answer": "B",
      "id": 959,
      "serial_in_topic": 16
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 210,
      "question": "The length and breadth of a container tank are increased by 10% and 20% percent respectvely and the height is decreased by 25%.The volume of the container is decreased by what percent?",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0%",
        "d": "1%",
        "e": "None of these"
      },
      "answer": "A",
      "id": 960,
      "serial_in_topic": 17
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 211,
      "question": "The length and breadth of a container thank are increased by 40% and 60% percent respectively and the heigh is decreased by 75%.The volume of the container is decreased by what percent?",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0%",
        "d": "1%",
        "e": "None of these"
      },
      "answer": "A",
      "id": 961,
      "serial_in_topic": 18
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 212,
      "question": "In redesinging a warehouse,the length is increased by 20%,the breadth is increased by 40% & the hight is decreased by 25%.What is the net increase in the volume of redesined warehouse compared do the",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0%",
        "d": "0%",
        "e": "0%"
      },
      "answer": "D",
      "id": 962,
      "serial_in_topic": 19
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 213,
      "question": "Sobuz sells his mobile set for Tk.1,200 & makes 20% profit.How much did the mobile set cost Sobuz?",
      "options": {
        "a": "Tk. 1,000",
        "b": "Tk.1,120",
        "c": "Tk.1,150",
        "d": "Tk.1,180",
        "e": "Tk.1,560"
      },
      "answer": "A",
      "id": 963,
      "serial_in_topic": 20
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 214,
      "question": "Sabbir sells his mobile for Tk.240 & makes 20% profit.How much did the mobile cost Sabbir?",
      "options": {
        "a": "Tk. 200",
        "b": "Tk.1,120",
        "c": "Tk.1,150",
        "d": "Tk.1,180",
        "e": "Tk.1,560"
      },
      "answer": "A",
      "id": 964,
      "serial_in_topic": 21
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 215,
      "question": "When an article is sold for Tk.250,the seller makes 25% prifot.What is the cost of the article?",
      "options": {
        "a": "150",
        "b": "180",
        "c": "200",
        "d": "None of these"
      },
      "answer": "C",
      "id": 965,
      "serial_in_topic": 22
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 216,
      "question": "A merchant sells a radio for Tk.80 and there by makes a profit of 25% of the cost.What is the radio of cost to slling price?",
      "options": {
        "a": "4,5",
        "b": "3,4",
        "c": "5,6",
        "d": "2,3"
      },
      "answer": "A",
      "id": 966,
      "serial_in_topic": 23
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 217,
      "question": "Babu sells a product for Tk.1,380 & makes 20% profit.How did the product cost babu?",
      "options": {
        "a": "Tk.1,100",
        "b": "Tk.1,120",
        "c": "Tk.1,150",
        "d": "Tk.1,180",
        "e": "Tk.1,560"
      },
      "answer": "C",
      "id": 967,
      "serial_in_topic": 24
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 218,
      "question": "A merchant sells a radio for Tk.125 making a profit of 25% of cost.Radio of cost to slling price?",
      "options": {
        "a": "40973",
        "b": "40972",
        "c": "41035",
        "d": "40942",
        "e": "41033"
      },
      "answer": "E",
      "id": 968,
      "serial_in_topic": 25
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 219,
      "question": "Exaple: Mr.Monju sells his pen at Tk.990/-and thus incurs a loss of 101% on its cost.Find the cost of the pen?",
      "options": {
        "a": "800",
        "b": "1000",
        "c": "1100",
        "d": "500",
        "e": "None of these"
      },
      "answer": "C",
      "id": 969,
      "serial_in_topic": 26
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 220,
      "question": "Mr. Nur sells his pen at tk. 180/- and thus incurs a loss of 10% on its cost. Find the cost of the pen?",
      "options": {
        "a": "200",
        "b": "1000",
        "c": "1100",
        "d": "500",
        "e": "None of these"
      },
      "answer": "A",
      "id": 970,
      "serial_in_topic": 27
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 221,
      "question": "If an article is sold for Tk. 250, the seller makes 25% loss on cost. What is cost?",
      "options": {
        "a": "200",
        "b": "180",
        "c": "150",
        "d": "None of these"
      },
      "answer": "D",
      "id": 971,
      "serial_in_topic": 28
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 222,
      "question": "A reader sells a product at tk.9/- and thus incrus a loss of 10% on his cost. Find the cost of the product.",
      "options": {
        "a": "8",
        "b": "11",
        "c": "10",
        "d": "5",
        "e": "None of these"
      },
      "answer": "C",
      "id": 972,
      "serial_in_topic": 29
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 223,
      "question": "A lead pencil was sold at 20% loss. If the selling price had been Tk.12 more, then the seller could have made a profit of 10%. What was the purchase price of the lead pencil?",
      "options": {
        "a": "45",
        "b": "40",
        "c": "30",
        "d": "25",
        "e": "None of these"
      },
      "answer": "B",
      "id": 973,
      "serial_in_topic": 30
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 224,
      "question": "A lead pencil was sold at 10% loss. If the selling price was Tk. 30 more, then the seller could have made a profit of 20%. What was the purchase price of the lead pencil?",
      "options": {
        "a": "45",
        "b": "40",
        "c": "30",
        "d": "100",
        "e": "None of these"
      },
      "answer": "D",
      "id": 974,
      "serial_in_topic": 31
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 225,
      "question": "A trader sells a product at a loss of 12.5%. If he sells it at Tk. 30 more than what he does, he makes a profit of 25% on his cost. Find cost of the product of the trader.",
      "options": {
        "a": "45",
        "b": "40",
        "c": "30",
        "d": "80",
        "e": "None of these"
      },
      "answer": "D",
      "id": 975,
      "serial_in_topic": 32
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 226,
      "question": "A trader sold a product at a loss of 12.5%. If the selling price was Tk.37.5 more, he would have made a profit of 25%. What was the original price of the product?",
      "options": {
        "a": "45",
        "b": "40",
        "c": "30",
        "d": "100",
        "e": "None of these"
      },
      "answer": "D",
      "id": 976,
      "serial_in_topic": 33
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 227,
      "question": "A pen was sold at 10% loss. If the selling price was Tk. 30 more, then the seller could have made a profit of 5%. What was the purchase price of the pen?",
      "options": {
        "a": "450",
        "b": "400",
        "c": "300",
        "d": "200",
        "e": "None of these"
      },
      "answer": "D",
      "id": 977,
      "serial_in_topic": 34
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 228,
      "question": "A pen was sold at 10% loss. If the selling price was Tk. 6 more, then the seller could have made a profit of 5%. What was the purchase price of the pen?",
      "options": {
        "a": "45",
        "b": "40",
        "c": "30",
        "d": "25",
        "e": "None of these"
      },
      "answer": "B",
      "id": 978,
      "serial_in_topic": 35
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 229,
      "question": "A trader sells a cow ar a loss of 20% on his cost.He would make a profit of 10% on cost,if he could sell the cow at a price which is Tk.1500 more than what was the cost of the cow to the trander in Ta",
      "options": {
        "a": "4500",
        "b": "4000",
        "c": "5000",
        "d": "3600",
        "e": "None of these"
      },
      "answer": "C",
      "id": 979,
      "serial_in_topic": 36
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 230,
      "question": "A trader incrus a loss of 10% from selling an item. If the selling price was Tk.200 more, he would have made a profit of 15%. What was the cost of the item?",
      "options": {
        "a": "800",
        "b": "720",
        "c": "1200",
        "d": "900",
        "e": "None of these"
      },
      "answer": "C",
      "id": 980,
      "serial_in_topic": 37
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 231,
      "question": "A trader sold a product at a loss of 10% on his cost. He could macke a profit of 12.5% on cost if he could sell the product at a price Tk. 18 more than actuale sell price. Find coust of the product?",
      "options": {
        "a": "10",
        "b": "90",
        "c": "80",
        "d": "72",
        "e": "56"
      },
      "answer": "C",
      "id": 981,
      "serial_in_topic": 38
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 232,
      "question": "A trader incrus a loss of 10% on cost of an item on selling it.If he could sell it at Tk. 1500 more he could make a profit of 20% on cost.What was cost of the item in thousand Taka?",
      "options": {
        "a": "4500",
        "b": "4000",
        "c": "5000",
        "d": "3600",
        "e": "None of these"
      },
      "answer": "C",
      "id": 982,
      "serial_in_topic": 39
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 233,
      "question": "A good has been sold at a loss of 12%.If it could be sold by Tk.1,200 more,there would have been a profit of 8%.What is the cost price of that good?",
      "options": {
        "a": "Tk.2,500",
        "b": "Tk.6,000",
        "c": "Tk.8,000",
        "d": "Tk.12,000",
        "e": "Tk.1,5000"
      },
      "answer": "B",
      "id": 983,
      "serial_in_topic": 40
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 234,
      "question": "A dictionary was sold at 10% loss.If the selling price was Tk.40 less,then the seller could have make a profit of 10%.What was the purchase price of the dictionary?",
      "options": {
        "a": "400",
        "b": "200",
        "c": "300",
        "d": "250",
        "e": "None of these"
      },
      "answer": "B",
      "id": 984,
      "serial_in_topic": 41
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 235,
      "question": "A dictionary was sold at 20% loss.If the selling price was Tk. 30 less then the seller could have made a profit of 10%.What was the purchase price of the dictionary?",
      "options": {
        "a": "400",
        "b": "100",
        "c": "300",
        "d": "250",
        "e": "None of these"
      },
      "answer": "B",
      "id": 985,
      "serial_in_topic": 42
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 236,
      "question": "An item was sold at 5% profit.If the cost was 5% less and the selling price was Tk. 5 less,then the trander would have made a profit of 10% on cost.What was the cost of the item?",
      "options": {
        "a": "400",
        "b": "50",
        "c": "300",
        "d": "250",
        "e": "None of these"
      },
      "answer": "B",
      "id": 986,
      "serial_in_topic": 43
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 237,
      "question": "A pen was sold at 20% loss.If the selling price was Tk. 40 less,then the seller could have made a profit of 20%.What was the purchase price of the pen?",
      "options": {
        "a": "400",
        "b": "100",
        "c": "300",
        "d": "250",
        "e": "None of these"
      },
      "answer": "B",
      "id": 987,
      "serial_in_topic": 44
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 238,
      "question": "Tarif bought a shortent Math book from Khan Book centre in Nilkhet and sold it to Monir at a loss of 10%. If he bought it for 20% less and sold it for Tk. 44 more, he would have had a profit",
      "options": {
        "a": "400",
        "b": "200",
        "c": "300",
        "d": "250",
        "e": "None of these"
      },
      "answer": "B",
      "id": 988,
      "serial_in_topic": 45
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 239,
      "question": "Wahid bought a pen and sold it at a loss of 10%. If he bought it for 20% less and sold it for Tk. 66 more, he would have had a profit of 40%. How much did the Math book cost Wahid?",
      "options": {
        "a": "400",
        "b": "200",
        "c": "300",
        "d": "250",
        "e": "None of these"
      },
      "answer": "C",
      "id": 989,
      "serial_in_topic": 46
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 240,
      "question": "A person bought an article and sold it at a loss of 10%. If he had bought it for 20% less and sold it for Tk. 55 more, he would have made a profit of 40%. What was the cost of the article in taka?",
      "options": {
        "a": "350",
        "b": "300",
        "c": "250",
        "d": "150",
        "e": "None of these"
      },
      "answer": "C",
      "id": 990,
      "serial_in_topic": 47
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 241,
      "question": "A shirt was sold at 6% profit. If the purchase price were 4% less and the selling price were Tk.4 more, the profit would be 12.5%. What was the purchase price of the shirt?",
      "options": {
        "a": "240",
        "b": "220",
        "c": "200",
        "d": "180",
        "e": "None of these"
      },
      "answer": "C",
      "id": 991,
      "serial_in_topic": 48
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 242,
      "question": "A shirt was sold at 20% profit. If the purchase price was 20% less and the selling price was Tk.5 less, the profit would be 25%. What was the purchase price of the shirt?",
      "options": {
        "a": "400",
        "b": "200",
        "c": "300",
        "d": "250",
        "e": "None of these"
      },
      "answer": "E",
      "id": 992,
      "serial_in_topic": 49
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 243,
      "question": "A shirt was sold at 6% profit. If the purchase price was 4% less and selling price was Tk.4 less, the profit would be 12.5%. What was the purchase price of the shirt?",
      "options": {
        "a": "240",
        "b": "220",
        "c": "200",
        "d": "180",
        "e": "None of these"
      },
      "answer": "C",
      "id": 993,
      "serial_in_topic": 50
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 244,
      "question": "An item was sold at 6% profit. If the cost was 4% less and the selling price was Tk. 4 more, then the trader would have made a profit of 12.5%. What was the cost of the item?",
      "options": {
        "a": "240",
        "b": "220",
        "c": "200",
        "d": "180",
        "e": "None of these"
      },
      "answer": "C",
      "id": 994,
      "serial_in_topic": 51
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 245,
      "question": "Opu buys some mangoes at the rate of 4 mangoes per Taka and then sells those at the rate of 5 mangoes per Tk. What will be his Loss rate?",
      "options": {
        "a": "10",
        "b": "15",
        "c": "20",
        "d": "25",
        "e": "None of these"
      },
      "answer": "C",
      "id": 995,
      "serial_in_topic": 52
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 246,
      "question": "Bashar buys some mangoes at the rate of 3 mangoes per Taka and then sells those at the rate of 4 mangoes per Tk. What will be his loss rate?",
      "options": {
        "a": "10",
        "b": "15",
        "c": "20",
        "d": "25",
        "e": "None of these"
      },
      "answer": "D",
      "id": 996,
      "serial_in_topic": 53
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 247,
      "question": "Belal buys some mangoes at the rate of 6 mangoes per Taka and then sells those at the rate of 5 mangoes per Tk. What will be his profit rate?",
      "options": {
        "a": "10",
        "b": "15",
        "c": "20",
        "d": "25",
        "e": "None of these"
      },
      "answer": "C",
      "id": 997,
      "serial_in_topic": 54
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 248,
      "question": "Asad buy 21 lemons per Taka and then sells 20 lemons per Tk. What will be his profit rate?",
      "options": {
        "a": "10",
        "b": "15",
        "c": "20",
        "d": "5",
        "e": "None of these"
      },
      "answer": "D",
      "id": 998,
      "serial_in_topic": 55
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 249,
      "question": "If Rafiq buys equal number of two types of bananas at the rate of 2 bananas per taka and 4 bananas per taka, and then sells those at the rate of 3 bananas per taka, then what will be his prof",
      "options": {
        "a": "12% loss",
        "b": "2% profit",
        "c": "0",
        "d": "1% loss",
        "e": "None of these"
      },
      "answer": "E",
      "id": 999,
      "serial_in_topic": 56
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 250,
      "question": "If Firoz buys equal number of two types of bananas at the rate of 9 bananas per taka and 11 bananas per taka, and then sells those at the rate of 10 bananas per taka, then what will be his profit or l",
      "options": {
        "a": "12.5% loss",
        "b": "1% profit",
        "c": "0",
        "d": "1% loss",
        "e": "None of these"
      },
      "answer": "D",
      "id": 1000,
      "serial_in_topic": 57
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 251,
      "question": "Sumi buys equale number of two types of chocolates at the rate of Tk. 1/2 and Tk. 1/4 respectively. If she now sells those at the rate of Tk. 1/3 what will be her profit/loss?",
      "options": {
        "a": "25% loss",
        "b": "25% profit",
        "c": "0.00%",
        "d": "11.1% loss",
        "e": "None of these"
      },
      "answer": "D",
      "id": 1001,
      "serial_in_topic": 58
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 252,
      "question": "Nila buys equale number of two types of chocolates at the rate of Tk. 1/4 and Tk. 1/6 respectively. If she now sells those at the rate of Tk. 1/5 what will be her profit/loss?",
      "options": {
        "a": "4% loss",
        "b": "25% profit",
        "c": "0",
        "d": "11.1% loss",
        "e": "None of these"
      },
      "answer": "A",
      "id": 1002,
      "serial_in_topic": 59
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 253,
      "question": "You buy equal number of two types of chocolate at the rate of 1/9 and Tk. 1/11 respectively. If you now sell then at the rate of Tk. 1/10 what will be your profit/loss?",
      "options": {
        "a": "2% loss",
        "b": "2% profit",
        "c": "0",
        "d": "1% loss",
        "e": "1% loss"
      },
      "answer": "D",
      "id": 1003,
      "serial_in_topic": 60
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 254,
      "question": "If you buy equal number of two types of chocolate at the rate of tk. 1/4 and tk 1/6 respectively and sell all of them at the rate of tk 1/5 , what will be your profit/loss?",
      "options": {
        "a": "1% loss",
        "b": "2% profit",
        "c": "2% loss",
        "d": "4% profit",
        "e": "4% loss"
      },
      "answer": "E",
      "id": 1004,
      "serial_in_topic": 61
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 255,
      "question": "Rimi purchased 6 apples for Tk. 5 & sold 5 apples for Tk. 6. What was her profit margin?",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0%",
        "d": "0%",
        "e": "0%"
      },
      "answer": "E",
      "id": 1005,
      "serial_in_topic": 62
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 256,
      "question": "Rony purchased 5 apples for Tk. 6 & sold 6 apples for Tk. 5. What was her loss rate?",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0%",
        "d": "0%",
        "e": "None of these"
      },
      "answer": "E",
      "id": 1006,
      "serial_in_topic": 63
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 257,
      "question": "Mr. Y purchased 12 mangoes for tk. 10& sold 10 mangoes for tk. 12. What was his profit margin?",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0%",
        "d": "0%",
        "e": "0%"
      },
      "answer": "E",
      "id": 1007,
      "serial_in_topic": 64
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 258,
      "question": "A trader purchases some pen at the rate of tk. 10 per dozen. If he sells all the pen at a rate of tk. 120 per hundred pens, what will be his profit in percent?",
      "options": {
        "a": "33.33",
        "b": "44",
        "c": "45",
        "d": "48",
        "e": "None of these"
      },
      "answer": "E",
      "id": 1008,
      "serial_in_topic": 65
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 259,
      "question": "Shaon bought 30 mangoes for tk 55 and he then found that 20% of the mangoes were damaged. Finally he sold the rest at the rate of tk 40 per dozen. How much profit in taka did the make?",
      "options": {
        "a": "28",
        "b": "25",
        "c": "24",
        "d": "20",
        "e": "None of these"
      },
      "answer": "B",
      "id": 1009,
      "serial_in_topic": 66
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 260,
      "question": "Sohel bought 10 mangoes for tk 60 and he then found that 10% of the mangoes were damaged. Finally he sold the rest at the rate of tk 120 per dozen. How much profit in taka did the make?",
      "options": {
        "a": "28",
        "b": "26",
        "c": "24",
        "d": "30",
        "e": "None of these"
      },
      "answer": "D",
      "id": 1010,
      "serial_in_topic": 67
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 261,
      "question": "Mr. Karim bought 20 mangoes for tk 55. he found that 10% of the mangoes were damaged and sold the rest at the rate of tk 54 per dozen. How much profit in taka did he make?",
      "options": {
        "a": "28",
        "b": "26",
        "c": "24",
        "d": "20",
        "e": "None of these"
      },
      "answer": "B",
      "id": 1011,
      "serial_in_topic": 68
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 262,
      "question": "Mr.X bought 20 mongoes for tk.55.He found that 10% of the manegose were damage & he sold the mangose at the rate of tk.60 per dozen.How much profit did he make?",
      "options": {
        "a": "25",
        "b": "30",
        "c": "35",
        "d": "40",
        "e": "None of these"
      },
      "answer": "C",
      "id": 1012,
      "serial_in_topic": 69
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 263,
      "question": "A Pen sells at tk.70.This price gives a retailer a profit of 40% on its cost.What will be the new retail in tk,if he cuts his profit to 20% of cost?",
      "options": {
        "a": "50",
        "b": "50.5",
        "c": "56",
        "d": "58",
        "e": "60"
      },
      "answer": "E",
      "id": 1013,
      "serial_in_topic": 70
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 264,
      "question": "A Pencil sells at tk. 60.This price gives a retailer a profit of 20% on its cost.What will be the new retail price,in tk,if he cuts his profit to 10% of cost?",
      "options": {
        "a": "50",
        "b": "50.5",
        "c": "55",
        "d": "58",
        "e": "60"
      },
      "answer": "C",
      "id": 1014,
      "serial_in_topic": 71
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 265,
      "question": "An article sells at tk.60.This price gives a retailer a profit of 20% on its cost.What will be the new retail price,in tk,if be cuts his profit to 12% of cost?",
      "options": {
        "a": "50",
        "b": "45",
        "c": "56",
        "d": "50.5",
        "e": "55"
      },
      "answer": "C",
      "id": 1015,
      "serial_in_topic": 72
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 266,
      "question": "A man made a loss of 20% on his cost by selling a pen at Tk.200.What should be his slling price in Taka if he wants to makes a profit of 10% on cost?",
      "options": {
        "a": "250",
        "b": "275",
        "c": "300",
        "d": "225",
        "e": "None of these"
      },
      "answer": "B",
      "id": 1016,
      "serial_in_topic": 73
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 267,
      "question": "A seller of pen was asking for such a price that would enable him to offer a 10% discount and still make a profit of 20% on cost.If cost of a pen was Tk.90,what was his asking price?",
      "options": {
        "a": "Tk.132",
        "b": "Tk.136",
        "c": "Tk.120",
        "d": "Tk.142",
        "e": "None of these"
      },
      "answer": "C",
      "id": 1017,
      "serial_in_topic": 74
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 268,
      "question": "A seller of pen was asking for such a price that would enable him to offer a 20% discount and still make a profit of 20% on cost.If the cost of a pen was Tk.40,what was his asking price?",
      "options": {
        "a": "Tk.132",
        "b": "Tk.136",
        "c": "Tk.60",
        "d": "Tk.142",
        "e": "None of these"
      },
      "answer": "C",
      "id": 1018,
      "serial_in_topic": 75
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 269,
      "question": "A seller of pen was asking for such a price that would enable him to offer a 10% discount and still make a profit of 20% on cost.If the cost of a pen was Tk.30,what was his asking price?",
      "options": {
        "a": "Tk.32",
        "b": "Tk.36",
        "c": "Tk.40",
        "d": "Tk.42",
        "e": "None of these"
      },
      "answer": "C",
      "id": 1019,
      "serial_in_topic": 76
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 270,
      "question": "A T-shirt marked Tk.48 is offered at discount of 25% during Ed sale.At this reduced price the shopkeeper makes a profit of 20% on the cost.The cos to the shopkeeper is.",
      "options": {
        "a": "Tk.29",
        "b": "Tk.30",
        "c": "Tk.32",
        "d": "Tk.36",
        "e": "Tk.40"
      },
      "answer": "B",
      "id": 1020,
      "serial_in_topic": 77
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 271,
      "question": "Suma can now purehase 30 more bananas with Tk.120 due to a reduction in price by 25%.Calculate the current price of one dozen of bananas.",
      "options": {
        "a": "12",
        "b": "30",
        "c": "32",
        "d": "36",
        "e": "None of these"
      },
      "answer": "A",
      "id": 1021,
      "serial_in_topic": 78
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 272,
      "question": "You can now purchase 25 more bananas with Tk. 100 due to a reduction in price by 25%. Calculate the current price of one dozen of bananas.",
      "options": {
        "a": "24",
        "b": "30",
        "c": "32",
        "d": "12",
        "e": "None of these"
      },
      "answer": "D",
      "id": 1022,
      "serial_in_topic": 79
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 273,
      "question": "You can now purchase 5 more bananas with Tk. 75 due to a reduction in price by 20%. Calculate the current price of one dozen of bananas.",
      "options": {
        "a": "24",
        "b": "30",
        "c": "32",
        "d": "36",
        "e": "None of these"
      },
      "answer": "D",
      "id": 1023,
      "serial_in_topic": 80
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 274,
      "question": "By selling 12 oranges for a Taka, a trader profits 25%. How many far a Takas should he sell to gain 50%?",
      "options": {
        "a": "30",
        "b": "25",
        "c": "10",
        "d": "22",
        "e": "None of these"
      },
      "answer": "C",
      "id": 1024,
      "serial_in_topic": 81
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 275,
      "question": "The cost of 1 dozen bananas is 24 Tk. In order to gain 25% profit, how many bananas need to sell for 50 Tk?",
      "options": {
        "a": "30",
        "b": "25",
        "c": "20",
        "d": "22",
        "e": "None of these"
      },
      "answer": "C",
      "id": 1025,
      "serial_in_topic": 82
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 276,
      "question": "The cost of 1 dozen bananas is 36 Tk. In order to gain 20% profit, how many bananas need to sell for 54 Tk?",
      "options": {
        "a": "30",
        "b": "25",
        "c": "20",
        "d": "15",
        "e": "None of these"
      },
      "answer": "D",
      "id": 1026,
      "serial_in_topic": 83
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 277,
      "question": "Before going to Harvard to complete his Ph. D in economies, Mr. Masud sold his two laptops for Tk. 75600 each. On one he gains 20%, and on the other he loses 20%. How much did he gains or los",
      "options": {
        "a": "2% gains",
        "b": "2% loss",
        "c": "1% loss",
        "d": "4% gains",
        "e": "4% loss"
      },
      "answer": "E",
      "id": 1027,
      "serial_in_topic": 84
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 278,
      "question": "Monir sold his two pens for Tk. 300 each. On one he gains 30%, and on the other he loses 30%. How much did he gains or loss on the basis of whole transaction?",
      "options": {
        "a": "2% gains",
        "b": "9% loss",
        "c": "1",
        "d": "4% gains",
        "e": "4% loss"
      },
      "answer": "B",
      "id": 1028,
      "serial_in_topic": 85
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 279,
      "question": "When a pen was sold at Tk. 180 then the trader loses Tk. 20. What was his percent loss?",
      "options": {
        "a": "10",
        "b": "20",
        "c": "30",
        "d": "40",
        "e": "None of these"
      },
      "answer": "A",
      "id": 1029,
      "serial_in_topic": 86
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 280,
      "question": "How much interest will Tk. 10,000 earn in 6 month at an annual rate of 10%?",
      "options": {
        "a": "9000",
        "b": "7500",
        "c": "6000",
        "d": "500",
        "e": "None of these"
      },
      "answer": "D",
      "id": 1030,
      "serial_in_topic": 87
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 281,
      "question": "How much interest will Tk. 5,000 earn in 10 year at an annual rate of 5%?",
      "options": {
        "a": "900",
        "b": "2500",
        "c": "600",
        "d": "5000",
        "e": "None of these"
      },
      "answer": "B",
      "id": 1031,
      "serial_in_topic": 88
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 282,
      "question": "What is the total interest on Tk 800 at 12.5% per annual for 11 months?",
      "options": {
        "a": "Tk 125",
        "b": "Tk 130",
        "c": "Tk225",
        "d": "Tk 335",
        "e": "None of these"
      },
      "answer": "E",
      "id": 1032,
      "serial_in_topic": 89
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 283,
      "question": "How much interest will Tk. 10,000 earn in 9 months at an annual rate of 6%?",
      "options": {
        "a": "900",
        "b": "750",
        "c": "600",
        "d": "450",
        "e": "None of these"
      },
      "answer": "D",
      "id": 1033,
      "serial_in_topic": 90
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 284,
      "question": "What is the total interest on Tk. 8000.00 at 12.5% per annuam for 9 month (In Taka)?",
      "options": {
        "a": "75",
        "b": "110",
        "c": "88",
        "d": "22",
        "e": "None of these"
      },
      "answer": "E",
      "id": 1034,
      "serial_in_topic": 91
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 285,
      "question": "What is the total amount of interest (in Taka)on Tk. 160 at the rate of 12.5% per annum for 9 months?",
      "options": {
        "a": "16",
        "b": "15",
        "c": "20",
        "d": "12.5",
        "e": "None of these"
      },
      "answer": "B",
      "id": 1035,
      "serial_in_topic": 92
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 286,
      "question": "The interest charged on a loan is P per Tk. 1000 for the first quarter (three months), and q per Tk. 1000 for each month after the first quarter. How much interest will be charged for the first year o",
      "options": {
        "a": "10(p+q)",
        "b": "10(p+9q)",
        "c": "4p+9q",
        "d": "9(p+q)",
        "e": "None of these"
      },
      "answer": "B",
      "id": 1036,
      "serial_in_topic": 93
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 287,
      "question": "What will be the amount of interest on the loan of Tk 5,00,000  8% simple interest for 9 months in Taka?",
      "options": {
        "a": "40000",
        "b": "20000",
        "c": "35000",
        "d": "25000",
        "e": "30000"
      },
      "answer": "E",
      "id": 1037,
      "serial_in_topic": 94
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 288,
      "question": "How much simple interest will Tk. 2000 earn in 18 months at an annual rate of 6%?",
      "options": {
        "a": "Tk. 120",
        "b": "Tk. 180",
        "c": "Tk. 216",
        "d": "Tk. 1800",
        "e": "Tk. 2160"
      },
      "answer": "B",
      "id": 1038,
      "serial_in_topic": 95
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 289,
      "question": "At 10% Interest rate what amount of money will produce total interset of Tk. 5,000 in 5 years?",
      "options": {
        "a": "9000",
        "b": "7500",
        "c": "6000",
        "d": "10000",
        "e": "None of these"
      },
      "answer": "D",
      "id": 1039,
      "serial_in_topic": 96
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 290,
      "question": "At 5% Interest rate what amount of money will produce total interest of Tk. 2,500 in 10 years?",
      "options": {
        "a": "9000",
        "b": "7500",
        "c": "6000",
        "d": "5000",
        "e": "None of these"
      },
      "answer": "D",
      "id": 1040,
      "serial_in_topic": 97
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 291,
      "question": "What amount of money invested would earn interest of Tk.200 over 4 years at 10% simple interest rates?",
      "options": {
        "a": "400",
        "b": "500",
        "c": "600",
        "d": "None of these"
      },
      "answer": "B",
      "id": 1041,
      "serial_in_topic": 98
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 292,
      "question": "An amount deposited for six months at an interest rate of 8% per annum yields Tk.17/- as interest. Then what is the amount deposited?",
      "options": {
        "a": "100",
        "b": "40",
        "c": "200",
        "d": "1700",
        "e": "None of these"
      },
      "answer": "E",
      "id": 1042,
      "serial_in_topic": 99
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 293,
      "question": "How many years are needed if Tk. 10,000 was diposited at an interest rate of 10% per annual yields Tk.5,000 as interest?",
      "options": {
        "a": "9",
        "b": "7",
        "c": "6",
        "d": "5",
        "e": "None of these"
      },
      "answer": "D",
      "id": 1043,
      "serial_in_topic": 100
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 294,
      "question": "How many years in needed if Tk. 5,000 was diposited at an interest rate of 5%. Per annual yields Tk.2,500 as interest.",
      "options": {
        "a": "10",
        "b": "7",
        "c": "6",
        "d": "5",
        "e": "None of these"
      },
      "answer": "A",
      "id": 1044,
      "serial_in_topic": 101
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 295,
      "question": "For how many years does a person need to invest his Tk 3000 at 7% to earn Tk 420 in simple interest?",
      "options": {
        "a": "1 year",
        "b": "2 years",
        "c": "3 years",
        "d": "4 years",
        "e": "None of these"
      },
      "answer": "B",
      "id": 1045,
      "serial_in_topic": 102
    },
    {
      "topic": "bank_profit_loss",
      "q_num": 296,
      "question": "A man borrowed Taka 100 at 6.5% per year and had to pay Taka 2.14 as interest when he repaid the loan. For how many days did he borrow the money?",
      "options": {
        "a": "70",
        "b": "80",
        "c": "100",
        "d": "120",
        "e": "150"
      },
      "answer": "D",
      "id": 1046,
      "serial_in_topic": 103
    },
    {
      "topic": "bank_interest",
      "q_num": 297,
      "question": "What annual rate was paid if Tk. 10,000 earned TK. 5,000 as in interest in 5 years?",
      "options": {
        "a": "9",
        "b": "7",
        "c": "6",
        "d": "10",
        "e": "None of these"
      },
      "answer": "D",
      "id": 1047,
      "serial_in_topic": 1
    },
    {
      "topic": "bank_interest",
      "q_num": 298,
      "question": "What annual rate was paid if TK. 5,000 earned TK. 2,500 as in interest in 10 years?",
      "options": {
        "a": "9",
        "b": "7",
        "c": "6",
        "d": "5",
        "e": "None of these"
      },
      "answer": "D",
      "id": 1048,
      "serial_in_topic": 2
    },
    {
      "topic": "bank_interest",
      "q_num": 299,
      "question": "What annual rate was paid if Tk. 50,000 earned Tk. 3,000 in interest in two years?",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0%",
        "d": "0%"
      },
      "answer": "B",
      "id": 1049,
      "serial_in_topic": 3
    },
    {
      "topic": "bank_interest",
      "q_num": 300,
      "question": "What simple interest rate will Sumon need to secure to make Tk 2500 in interest on a Tk 10000 principal over 5 years?",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0%",
        "d": "0%",
        "e": "0%"
      },
      "answer": "B",
      "id": 1050,
      "serial_in_topic": 4
    },
    {
      "topic": "bank_interest",
      "q_num": 301,
      "question": "A man borrows Tk.360 and pays it back in 12 monthly payments of Tk. 31.50. What is his interest rate?",
      "options": {
        "a": "0.01%",
        "b": "0.04%",
        "c": "0%",
        "d": "0%",
        "e": "0%"
      },
      "answer": "C",
      "id": 1051,
      "serial_in_topic": 5
    },
    {
      "topic": "bank_interest",
      "q_num": 302,
      "question": "How much money would a man have to invest at the rate of 5% per year, to have Tk. 40000 at the end of 20 year?",
      "options": {
        "a": "20000",
        "b": "30000",
        "c": "20050",
        "d": "17005",
        "e": "None of these"
      },
      "answer": "A",
      "id": 1052,
      "serial_in_topic": 6
    },
    {
      "topic": "bank_interest",
      "q_num": 303,
      "question": "How much money would a man have to invest at the rate of 10% per year, to have Tk.3000 at the end of 20 year?",
      "options": {
        "a": "1000",
        "b": "1300",
        "c": "2005",
        "d": "1700",
        "e": "None of these"
      },
      "answer": "A",
      "id": 1053,
      "serial_in_topic": 7
    },
    {
      "topic": "bank_interest",
      "q_num": 304,
      "question": "How much money would a man have to invest at the rate of 5% per year, to have Tk. 1470 at the end of the year?",
      "options": {
        "a": "1400",
        "b": "1300",
        "c": "2005",
        "d": "1700",
        "e": "None of these"
      },
      "answer": "A",
      "id": 1054,
      "serial_in_topic": 8
    },
    {
      "topic": "bank_interest",
      "q_num": 305,
      "question": "A borrower pays 7% interest per year on the first Tk. 700 he borrows and 6% interest per year on the part of the loan in excess of Tk. 700. How much interest will borrowers pay on a loan of T",
      "options": {
        "a": "400",
        "b": "469",
        "c": "369",
        "d": "367",
        "e": "450"
      },
      "answer": "D",
      "id": 1055,
      "serial_in_topic": 9
    },
    {
      "topic": "bank_interest",
      "q_num": 306,
      "question": "A borrower pays 8% interest per year on the first Tk. 600 he borrows and 7% per year on the loan in excess of Tk. 600. How much interest will borrows pay on a loan of Tk. 6000 for 1 year?",
      "options": {
        "a": "Tk. 378",
        "b": "Tk. 420",
        "c": "Tk. 426",
        "d": "Tk. 486",
        "e": "Tk. 480"
      },
      "answer": "C",
      "id": 1056,
      "serial_in_topic": 10
    },
    {
      "topic": "bank_interest",
      "q_num": 307,
      "question": "A Tk. 500 investment and a Tk. 1500 investment have a combined yearly return of 8.5 percent of the total of the two investments. If the Tk. 500 investment a yearly return of 7 percent, what percent ye",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0.11%",
        "d": "0%",
        "e": "0%"
      },
      "answer": "A",
      "id": 1057,
      "serial_in_topic": 11
    },
    {
      "topic": "bank_interest",
      "q_num": 308,
      "question": "A man deposits Tk 600 in a bank at 10% interest rate compounded annually. At the end of the second year, the total amount including interest will become.",
      "options": {
        "a": "660",
        "b": "720",
        "c": "726",
        "d": "626",
        "e": "None of these"
      },
      "answer": "C",
      "id": 1058,
      "serial_in_topic": 12
    },
    {
      "topic": "bank_interest",
      "q_num": 309,
      "question": "A man deposits tk 1,000 in a bank at 10% interest rate compounded annually. At the end of the second year, the total amount including interest will become.",
      "options": {
        "a": "1200",
        "b": "1210",
        "c": "1130",
        "d": "1626",
        "e": "None of these"
      },
      "answer": "B",
      "id": 1059,
      "serial_in_topic": 13
    },
    {
      "topic": "bank_interest",
      "q_num": 310,
      "question": "If Tk. 1 were invested at 8 percent interest compounded annually, the total value of the investment, in taka, at the end of 6 years would be-",
      "options": {},
      "answer": "B",
      "id": 1060,
      "serial_in_topic": 14
    },
    {
      "topic": "bank_interest",
      "q_num": 311,
      "question": "The compound interest at 10% per annum on a certain amount of money for two years is Tk. 10.50. Then what is the principal amount in Taka?",
      "options": {
        "a": "105",
        "b": "50",
        "c": "90",
        "d": "60"
      },
      "answer": "A",
      "id": 1061,
      "serial_in_topic": 15
    },
    {
      "topic": "bank_interest",
      "q_num": 312,
      "question": "An amount of money is invested in a savings account for 2 years. It increases by Tk. 62.50 in two years, after annual compounding at the rate of 10% per year. What was the amount, in Taka, invested in",
      "options": {
        "a": "400",
        "b": "250",
        "c": "200",
        "d": "300",
        "e": "None of these"
      },
      "answer": "B",
      "id": 1062,
      "serial_in_topic": 16
    },
    {
      "topic": "bank_interest",
      "q_num": 313,
      "question": "What will Tk. 1,000 be worth after 3 years if it earns interest at the rate of 5% compounded annually?",
      "options": {
        "a": "1157.63",
        "b": "1150.00",
        "c": "1160.00",
        "d": "1175.00",
        "e": "1180.00"
      },
      "answer": "A",
      "id": 1063,
      "serial_in_topic": 17
    },
    {
      "topic": "bank_interest",
      "q_num": 314,
      "question": "Mr. Muinul deposits Tk. 100 in an account that pays 10% interest compounded annually. How much money will there be in the account after 2 years?",
      "options": {
        "a": "Tk.120",
        "b": "Tk. 110",
        "c": "Tk. 121",
        "d": "Tk. 125",
        "e": "Tk. 131"
      },
      "answer": "C",
      "id": 1064,
      "serial_in_topic": 18
    },
    {
      "topic": "bank_interest",
      "q_num": 315,
      "question": "If an interest amount of Tk 4620 in two years is earned on an investment of Tk. 22000, the rate of interest (compounded annually) would be-",
      "options": {
        "a": "0.10%",
        "b": "0.10%",
        "c": "0.10%",
        "d": "0.11%"
      },
      "answer": "B",
      "id": 1065,
      "serial_in_topic": 19
    },
    {
      "topic": "bank_interest",
      "q_num": 316,
      "question": "How much interest will Tk. 5000 earn at an annual rate 10% in one year if the interest is compounded every 6 months?",
      "options": {
        "a": "720",
        "b": "512.5",
        "c": "726",
        "d": "626",
        "e": "None of these"
      },
      "answer": "B",
      "id": 1066,
      "serial_in_topic": 20
    },
    {
      "topic": "bank_interest",
      "q_num": 317,
      "question": "A one year deposit of Tk 100,000 was collected at an annual interest rate of 10%. Interest is compounded half yearly. Find out the total interest on the deposit in a year.",
      "options": {
        "a": "Tk. 160.00",
        "b": "Tk. 163.20",
        "c": "Tk. 249.73",
        "d": "Tk. 332.80",
        "e": "Tk. 2160.00"
      },
      "answer": "B",
      "id": 1067,
      "serial_in_topic": 21
    },
    {
      "topic": "bank_interest",
      "q_num": 319,
      "question": "Mrs. Najmon Nahar invests Tk.10000 in Jamuna Bank at 4% interest. How much additional money must he invest at 7% interest so that the total annual income will be equal to 5% of her entire inv",
      "options": {
        "a": "20000",
        "b": "22000",
        "c": "5000",
        "d": "6260",
        "e": "None of these"
      },
      "answer": "C",
      "id": 1068,
      "serial_in_topic": 22
    },
    {
      "topic": "bank_interest",
      "q_num": 320,
      "question": "Shila invests Tk. 5,000 in Jamuna Bank at 6% interest. How much additional money must he invest at 9% interest so that the total annual income will be equal to 8% of her entire investment?",
      "options": {
        "a": "10000",
        "b": "22000",
        "c": "26000",
        "d": "6260",
        "e": "None of these"
      },
      "answer": "A",
      "id": 1069,
      "serial_in_topic": 23
    },
    {
      "topic": "bank_interest",
      "q_num": 321,
      "question": "Mr. X invest Tk. 2400 in a bank at 5% interest. How much additional money must he invest at 8% interest so that the total annual income will be equal to 6% of his entire investment?",
      "options": {
        "a": "1200",
        "b": "2400",
        "c": "3000",
        "d": "3600"
      },
      "answer": "A",
      "id": 1070,
      "serial_in_topic": 24
    },
    {
      "topic": "bank_interest",
      "q_num": 322,
      "question": "Mr. Hakim deposited a total Tk. 8000 in Dhaka Bank prime Bank, and in one year his interest income was Tk. 480. If Dhaka bank offers 7% and prime Bank offers 5% interest, then find the amound",
      "options": {
        "a": "6000",
        "b": "7000",
        "c": "7026",
        "d": "4000",
        "e": "None of these"
      },
      "answer": "D",
      "id": 1071,
      "serial_in_topic": 25
    },
    {
      "topic": "bank_interest",
      "q_num": 323,
      "question": "Two banks offered interest rates of 6% & 7% respectively on saving account. Mr. X deposited a total amount of Tk. 4000 in the banks & in one year his interest income was Tk. 250. Find the investment i",
      "options": {
        "a": "3000",
        "b": "2000",
        "c": "3500",
        "d": "2500",
        "e": "None of these"
      },
      "answer": "E",
      "id": 1072,
      "serial_in_topic": 26
    },
    {
      "topic": "bank_interest",
      "q_num": 324,
      "question": "Mr. Harun had Tk. 2000 to invest. He invested part of it at 5% per year and the remainder at 4% per year. After one year his investment grew to Tk. 2095. How much of the investment was at the 5% rate?",
      "options": {
        "a": "Tk. 500",
        "b": "Tk. 750",
        "c": "Tk. 1000",
        "d": "Tk. 1250",
        "e": "Tk. 1500"
      },
      "answer": "D",
      "id": 1073,
      "serial_in_topic": 27
    },
    {
      "topic": "bank_interest",
      "q_num": 325,
      "question": "Two banks offered interest rates of 6% and 7% respectively on savings account. Mr. X deposited a total amount of Tk. 4000 in the banks and in one year his interest income was Tk 250. Find the investme",
      "options": {
        "a": "Tk.1920",
        "b": "Tk. 4000",
        "c": "Tk. 4800",
        "d": "Tk. 7200",
        "e": "Tk. 8000"
      },
      "answer": "E",
      "id": 1074,
      "serial_in_topic": 28
    },
    {
      "topic": "bank_mixture",
      "q_num": 327,
      "question": "40 kgs of salt water 20% is salt; In another mixture 5% is salt; How many kgs of 2nd mixture must be added to the first mixture in order to get a mixture that is 15% salt?",
      "options": {
        "a": "5",
        "b": "8",
        "c": "10",
        "d": "20",
        "e": "None of these"
      },
      "answer": "D",
      "id": 1075,
      "serial_in_topic": 1
    },
    {
      "topic": "bank_mixture",
      "q_num": 328,
      "question": "Of 50 kgs of salt of water 20% is salt; Of another mixture 10% is salt; How many kgs of 2nd mixture must be added to the first mixture in order to get a mixture that is 15% salt?",
      "options": {
        "a": "5",
        "b": "8",
        "c": "10",
        "d": "50",
        "e": "None of these"
      },
      "answer": "D",
      "id": 1076,
      "serial_in_topic": 2
    },
    {
      "topic": "bank_mixture",
      "q_num": 329,
      "question": "Coffee A costs 75 cents per pound. It is mixed with coffee B, which normally costs 80 cents per pound, to from a mixture that costs 78 cents per pound. If there are 10 pounds of the mix, how many poun",
      "options": {
        "a": "3",
        "b": "6",
        "c": "4.5",
        "d": "5",
        "e": "8"
      },
      "answer": "B",
      "id": 1077,
      "serial_in_topic": 3
    },
    {
      "topic": "bank_mixture",
      "q_num": 330,
      "question": "Coffee A normally costs 100 taka per pound. It is mixed with coffee B, which normally costs 70 taka per pound, to from a mixture which costs 88 taka per pound. If there is 10 pound of the mix, how man",
      "options": {
        "a": "4",
        "b": "5",
        "c": "6",
        "d": "7",
        "e": "None of these"
      },
      "answer": "C",
      "id": 1078,
      "serial_in_topic": 4
    },
    {
      "topic": "bank_mixture",
      "q_num": 331,
      "question": "Of 24 Kgs of salt water 8% is salt; of another mixture 4% is salt. How many Kgs of the second mixture should be added to the first mixture in order to get a mixture that is 5% salt?",
      "options": {
        "a": "48",
        "b": "56",
        "c": "64",
        "d": "72",
        "e": "None of these"
      },
      "answer": "D",
      "id": 1079,
      "serial_in_topic": 5
    },
    {
      "topic": "bank_mixture",
      "q_num": 332,
      "question": "How many kgs of tea at Tk. 75 per Kg must be blended with 300 kgs of tea at Tk. 50 per kg to make a mixture worth Tk. 60 per kg?",
      "options": {
        "a": "200",
        "b": "180",
        "c": "190",
        "d": "120",
        "e": "215"
      },
      "answer": "A",
      "id": 1080,
      "serial_in_topic": 6
    },
    {
      "topic": "bank_mixture",
      "q_num": 333,
      "question": "A mixture of 16 liter of milk and water contains 10% of water. How much water must be added to make 20% of water in new mixture?",
      "options": {
        "a": "2",
        "b": "8",
        "c": "10",
        "d": "20",
        "e": "None of these"
      },
      "answer": "A",
      "id": 1081,
      "serial_in_topic": 7
    },
    {
      "topic": "bank_mixture",
      "q_num": 334,
      "question": "A mixture of 18 liter of milk and water contains 20% of water. How much water must be added to make 10% of water in new mixture?",
      "options": {
        "a": "2",
        "b": "8",
        "c": "10",
        "d": "20",
        "e": "None of these"
      },
      "answer": "A",
      "id": 1082,
      "serial_in_topic": 8
    },
    {
      "topic": "bank_mixture",
      "q_num": 335,
      "question": "How much salt must we add to 10 grams of a 20% salt solution to strengthen it into a 50% solution?",
      "options": {
        "a": "5 gm",
        "b": "3 gm",
        "c": "6 gm",
        "d": "4 gm",
        "e": "None of these"
      },
      "answer": "C",
      "id": 1083,
      "serial_in_topic": 9
    },
    {
      "topic": "bank_mixture",
      "q_num": 336,
      "question": "How much water must be added to 10 gallons of 10% brine solution to decrease the concentration to 8%.",
      "options": {
        "a": "1.5gal",
        "b": "2.0 gal",
        "c": "2.5 gal",
        "d": "3.0 gal",
        "e": "3.5 gal"
      },
      "answer": "C",
      "id": 1084,
      "serial_in_topic": 10
    },
    {
      "topic": "bank_mixture",
      "q_num": 337,
      "question": "A mixture of 16 liter of milk and water contains 10% of water. How much water must be added to make 80% of milk in new mixture?",
      "options": {
        "a": "2",
        "b": "8",
        "c": "10",
        "d": "20",
        "e": "None of these"
      },
      "answer": "A",
      "id": 1085,
      "serial_in_topic": 11
    },
    {
      "topic": "bank_mixture",
      "q_num": 338,
      "question": "A mixture of 18 liter of milk and water contains 20% of water. How much water must be added to make 90% of milk in new mixture?",
      "options": {
        "a": "2",
        "b": "8",
        "c": "10",
        "d": "20",
        "e": "None of these"
      },
      "answer": "A",
      "id": 1086,
      "serial_in_topic": 12
    },
    {
      "topic": "bank_mixture",
      "q_num": 339,
      "question": "A boy goes to school with a speed of 200 km/hr. It he takes 3 hours then, the distance is-",
      "options": {
        "a": "400",
        "b": "500",
        "c": "600",
        "d": "700",
        "e": "None of these"
      },
      "answer": "C",
      "id": 1087,
      "serial_in_topic": 13
    },
    {
      "topic": "bank_speed_train",
      "q_num": 340,
      "question": "A man goes to Dhaka with a speed of 50 km/hr. If he takes 4 hours then the distance is:",
      "options": {
        "a": "400 km",
        "b": "500 km",
        "c": "600 km",
        "d": "200 km",
        "e": "None of these"
      },
      "answer": "D",
      "id": 1088,
      "serial_in_topic": 1
    },
    {
      "topic": "bank_speed_train",
      "q_num": 341,
      "question": "Nazrul crosses a street 600m long in 5 minutes. His speed in km per hour is-",
      "options": {
        "a": "7.2 km/h",
        "b": "7.5 km/h",
        "c": "7.1 km/h",
        "d": "7 km/h",
        "e": "None of these"
      },
      "answer": "A",
      "id": 1089,
      "serial_in_topic": 2
    },
    {
      "topic": "bank_speed_train",
      "q_num": 342,
      "question": "Riad crosses a street 200km long in 3 hours. His speed in meters /second is?",
      "options": {
        "a": "19.52 m/s",
        "b": "17.50 m/s",
        "c": "16.52 m/s",
        "d": "18.52 m/s",
        "e": "None of these"
      },
      "answer": "D",
      "id": 1090,
      "serial_in_topic": 3
    },
    {
      "topic": "bank_speed_train",
      "q_num": 343,
      "question": "A motorist travels x miles in y hours and z minutes. Whate is his average speed in miles per hour?",
      "options": {},
      "answer": "D",
      "id": 1091,
      "serial_in_topic": 4
    },
    {
      "topic": "bank_speed_train",
      "q_num": 344,
      "question": "Bimal sprinted 100 meters in 10.61 seconds. Find his velocity in kilometers/hour, round to nearest kilometer?",
      "options": {
        "a": "36",
        "b": "34",
        "c": "33",
        "d": "3",
        "e": "None of these"
      },
      "answer": "B",
      "id": 1092,
      "serial_in_topic": 5
    },
    {
      "topic": "bank_speed_train",
      "q_num": 345,
      "question": "A train covers the distance x between two cities in y hours, arriving 2 hours late. What rate would permit the train to arrive on schedule?",
      "options": {
        "a": "x/y-2",
        "b": "x/(y-2)",
        "c": "xy-2",
        "d": "x/(y+2)",
        "e": "None of these"
      },
      "answer": "D",
      "id": 1093,
      "serial_in_topic": 6
    },
    {
      "topic": "bank_speed_train",
      "q_num": 346,
      "question": "G. M. Sharif covers 10.2 km with a speed of 3.4 km/hr. The time takes to cover this distance is?",
      "options": {
        "a": "3 Hours",
        "b": "5 Hours",
        "c": "6 Hours",
        "d": "4 Hours",
        "e": "None of these"
      },
      "answer": "A",
      "id": 1094,
      "serial_in_topic": 7
    },
    {
      "topic": "bank_speed_train",
      "q_num": 347,
      "question": "Mr. Habib covers 30 km with a speed of 10 km/hr. Find the time taken to cover this distance.",
      "options": {
        "a": "3 Hours",
        "b": "5 Hours",
        "c": "6 Hours",
        "d": "4 Hours",
        "e": "None of these"
      },
      "answer": "A",
      "id": 1095,
      "serial_in_topic": 8
    },
    {
      "topic": "bank_speed_train",
      "q_num": 348,
      "question": "Gimu covers a certain distance by car driving at 70 km/hr and he returns back at the starting point riding on a scooter at 55 km/hr. Find his average speed for the whole journey?",
      "options": {
        "a": "60 km/hr",
        "b": "62.1 km/hr",
        "c": "61.6 km/hr",
        "d": "63.5 km/hr",
        "e": "None of these"
      },
      "answer": "C",
      "id": 1096,
      "serial_in_topic": 9
    },
    {
      "topic": "bank_speed_train",
      "q_num": 349,
      "question": "A man travels a distance at a rate of 20 miles/h and returns at the rate of 30 miles/hr. What is his average speed?",
      "options": {
        "a": "60 km/hr",
        "b": "62.1 km/hr",
        "c": "24 km/hr",
        "d": "63.5 km/hr",
        "e": "None of these"
      },
      "answer": "C",
      "id": 1097,
      "serial_in_topic": 10
    },
    {
      "topic": "bank_speed_train",
      "q_num": 350,
      "question": "A man travels a distance at a rate of 20 miles/h & returns at the rate of 30 miles/hour. What is his average speed?",
      "options": {
        "a": "24",
        "b": "25.5",
        "c": "25",
        "d": "26",
        "e": "None of these"
      },
      "answer": "A",
      "id": 1098,
      "serial_in_topic": 11
    },
    {
      "topic": "bank_speed_train",
      "q_num": 351,
      "question": "A man travels from A to B at a speed of 20 km./hr. He makes the return journey at a speed of 30 km./hr. What was his average speed?",
      "options": {
        "a": "20",
        "b": "22",
        "c": "23",
        "d": "25",
        "e": "None of these"
      },
      "answer": "E",
      "id": 1099,
      "serial_in_topic": 12
    },
    {
      "topic": "bank_speed_train",
      "q_num": 352,
      "question": "The distance between Dhaka and Bogra is 300 kilometers. A car travels from Dhaka to Bogra at 100 kilometers per hour and return from Bogra to Dhaka along the same route at 60 kilometers per hour. What",
      "options": {
        "a": "90 km/hr",
        "b": "80 km/hr",
        "c": "75 km/hr",
        "d": "70 km/hr",
        "e": "65 km/hr"
      },
      "answer": "C",
      "id": 1100,
      "serial_in_topic": 13
    },
    {
      "topic": "bank_speed_train",
      "q_num": 353,
      "question": "Mohsina traveled from A to B at a speed of 4 km/hr and returned from B to A at a speed of 5 km/hr. If the round trip required 9 hours what was the distance in km in the round trip?",
      "options": {
        "a": "9",
        "b": "12",
        "c": "15",
        "d": "18",
        "e": "40"
      },
      "answer": "E",
      "id": 1101,
      "serial_in_topic": 14
    },
    {
      "topic": "bank_speed_train",
      "q_num": 354,
      "question": "A motorcyclist rode to work at an average speed of 15 miles per hour and returned home along the same route at an average speed of 45 miles per hour. If this entire traveling time was I hour, What was",
      "options": {
        "a": "15",
        "b": "22.5",
        "c": "30",
        "d": "36.5",
        "e": "45"
      },
      "answer": "B",
      "id": 1102,
      "serial_in_topic": 15
    },
    {
      "topic": "bank_speed_train",
      "q_num": 355,
      "question": "Mr. Karim traveled from A to B at a speed of 3 km./hr and returned from B to A and speed of 5 km./hr. If the round trip required 8 hours what was the distance between A & B in km?",
      "options": {
        "a": "9",
        "b": "12",
        "c": "15",
        "d": "18",
        "e": "20"
      },
      "answer": "C",
      "id": 1103,
      "serial_in_topic": 16
    },
    {
      "topic": "bank_speed_train",
      "q_num": 356,
      "question": "A man runs at a speed 3 times that at which he walks. He runs a distance & comes back walking. The total time taken by him is hours. What is the distance in miles if he runs 9 miles per hour?",
      "options": {
        "a": "9",
        "b": "4.5",
        "c": "3",
        "d": "1",
        "e": "None of these"
      },
      "answer": "B",
      "id": 1104,
      "serial_in_topic": 17
    },
    {
      "topic": "bank_speed_train",
      "q_num": 357,
      "question": "Habib travels a distance of 20 km at a speed of 30 km/hr and them comes back at twice the speed. The total time he took is how many minutes?",
      "options": {
        "a": "20",
        "b": "30",
        "c": "40",
        "d": "45",
        "e": "60"
      },
      "answer": "E",
      "id": 1105,
      "serial_in_topic": 18
    },
    {
      "topic": "bank_speed_train",
      "q_num": 358,
      "question": "A person travels a distance of 60 km at a speed of 90 km/hr and them comes back at twice the speed. The total time he took is how many minutes?",
      "options": {
        "a": "40",
        "b": "60",
        "c": "40",
        "d": "45",
        "e": "50"
      },
      "answer": "B",
      "id": 1106,
      "serial_in_topic": 19
    },
    {
      "topic": "bank_speed_train",
      "q_num": 359,
      "question": "A train crosses a platform 100 m long in 60 second at a speed of 45 km/h. The length of the train is?",
      "options": {
        "a": "600",
        "b": "50",
        "c": "550",
        "d": "700",
        "e": "None of these"
      },
      "answer": "B",
      "id": 1107,
      "serial_in_topic": 20
    },
    {
      "topic": "bank_speed_train",
      "q_num": 360,
      "question": "A train crosses a bridge 400m long in 25 seconds at a speed of 72 km/h. The length of the train is?",
      "options": {
        "a": "100",
        "b": "650",
        "c": "550",
        "d": "700",
        "e": "None of these"
      },
      "answer": "A",
      "id": 1108,
      "serial_in_topic": 21
    },
    {
      "topic": "bank_speed_train",
      "q_num": 361,
      "question": "A train 300 meters long crossed a platform of 900 meters long in I minute 12 seconds. The speed of the train in km/hour was",
      "options": {
        "a": "45",
        "b": "60",
        "c": "50",
        "d": "54",
        "e": "64"
      },
      "answer": "B",
      "id": 1109,
      "serial_in_topic": 22
    },
    {
      "topic": "bank_speed_train",
      "q_num": 362,
      "question": "A railway platform 131 metres long; in how many seconds is it cleared by the mail train which is 67 metres long and travels at the rate of 45 km/h.",
      "options": {
        "a": "15.48 second",
        "b": "12.5 second",
        "c": "15.84 second",
        "d": "8 second",
        "e": "None of these"
      },
      "answer": "C",
      "id": 1110,
      "serial_in_topic": 23
    },
    {
      "topic": "bank_speed_train",
      "q_num": 363,
      "question": "A goods train of length 500 metres long crosses a platform at the rate 74.16 km/h. If the length of the platform is 221 metres, how many seconds is it cleared by the goods train?",
      "options": {
        "a": "15 second",
        "b": "12 second",
        "c": "35 second",
        "d": "8 second",
        "e": "None of these"
      },
      "answer": "C",
      "id": 1111,
      "serial_in_topic": 24
    },
    {
      "topic": "bank_speed_train",
      "q_num": 364,
      "question": "Two train 121m and 99 m in length respectively are running in opposite direction, on at the rate of 40 km/h and the other at the rate of 32 km/h. In what time will they be completely clear of",
      "options": {
        "a": "11.5 second",
        "b": "10 second",
        "c": "10.5 second",
        "d": "11 second",
        "e": "None of these"
      },
      "answer": "D",
      "id": 1112,
      "serial_in_topic": 25
    },
    {
      "topic": "bank_speed_train",
      "q_num": 365,
      "question": "Two trains 132 metres and 108 metres long are running in oppositte direction, one at the rate of 32 km/h and another one at the rate of 40 km/h. From the moment they meet they will cross each other?",
      "options": {
        "a": "11.5 second",
        "b": "10 second",
        "c": "10.5 second",
        "d": "12 second",
        "e": "None of these"
      },
      "answer": "D",
      "id": 1113,
      "serial_in_topic": 26
    },
    {
      "topic": "bank_speed_train",
      "q_num": 366,
      "question": "A train 150m long is running with a speed of 68 km/h. In what time will it pass a man who is running at 8 km/h in the same direction in where the train is going?",
      "options": {
        "a": "8s",
        "b": "9s",
        "c": "10s",
        "d": "7s",
        "e": "None of these"
      },
      "answer": "B",
      "id": 1114,
      "serial_in_topic": 27
    },
    {
      "topic": "bank_speed_train",
      "q_num": 367,
      "question": "Two trains, one of 100 meter size with an hourly speed of 100 km and the other of 200 meters with a speed of 90 km per hour start from one station at a time on two parallel lines in the same direction",
      "options": {
        "a": "1.8 min",
        "b": "2 min",
        "c": "3.2 min",
        "d": "3.6 min",
        "e": "0.95 min"
      },
      "answer": "A",
      "id": 1115,
      "serial_in_topic": 28
    },
    {
      "topic": "bank_speed_train",
      "q_num": 368,
      "question": "Two train running on the same routs travel at the rate of 20 and30 miles per hour. If the 1st train starts out an hour earlier, how long will it take the second train to catch up with it?",
      "options": {
        "a": "2 hrs",
        "b": "3 hrs",
        "c": "4 hrs",
        "d": "5 hrs",
        "e": "None of these"
      },
      "answer": "A",
      "id": 1116,
      "serial_in_topic": 29
    },
    {
      "topic": "bank_speed_train",
      "q_num": 369,
      "question": "Lucky leaves home for school reading her bicycle at a rate of 12 mp/h. Twenty minutes after she leaves, her mother sees Luckys English paper on her bed and leaves to bring it to her mother drives at 3",
      "options": {
        "a": "2hrs",
        "b": "3 hrs",
        "c": "4 hrs",
        "d": "6 hrs",
        "e": "None of these"
      },
      "answer": "D",
      "id": 1117,
      "serial_in_topic": 30
    },
    {
      "topic": "bank_speed_train",
      "q_num": 370,
      "question": "Two train running on the same route travel at the rate of 25 and 30 miles per hour. If the first train starts out and hour earlier, how long will it take the second train to catch up with it?",
      "options": {
        "a": "2 hrs",
        "b": "3 hrs",
        "c": "4 hrs",
        "d": "5 hrs",
        "e": "None of these"
      },
      "answer": "D",
      "id": 1118,
      "serial_in_topic": 31
    },
    {
      "topic": "bank_speed_train",
      "q_num": 371,
      "question": "Ali starts from his home at 5 am & travels towards Chittagong at 30 km/hr. Belal starts from the same home at 7 am & travels along the same route towards Chittagong. Overtaking Ali at exactly 11 am at",
      "options": {
        "a": "35",
        "b": "40",
        "c": "45",
        "d": "48",
        "e": "50"
      },
      "answer": "C",
      "id": 1119,
      "serial_in_topic": 32
    },
    {
      "topic": "bank_speed_train",
      "q_num": 372,
      "question": "A man stated at 8 am. From his home, walked at the rate of 2 km/hr and reached his office 45 minutes late. The next day he started at the same time and walked at the rate of 4 km/hr and reach",
      "options": {
        "a": "6 km",
        "b": "4 km",
        "c": "9 km",
        "d": "12 km",
        "e": "None of these"
      },
      "answer": "B",
      "id": 1120,
      "serial_in_topic": 33
    },
    {
      "topic": "bank_speed_train",
      "q_num": 373,
      "question": "Mr. X walks to his office at the rate of 4 miles/hours. If he increases his walking speed by 7 miles/hr, he could reach his office 11/2 hour earlier than the previous time. What is the distance, in mi",
      "options": {
        "a": "16 mlies",
        "b": "15 mlies",
        "c": "14 mlies",
        "d": "12 mlies",
        "e": "10 mlies"
      },
      "answer": "C",
      "id": 1121,
      "serial_in_topic": 34
    },
    {
      "topic": "bank_speed_train",
      "q_num": 374,
      "question": "A man started at 8",
      "options": {
        "a": "6 km.",
        "b": "7.5 km.",
        "c": "9 km.",
        "d": "12 km.",
        "e": "None of these"
      },
      "answer": "B",
      "id": 1122,
      "serial_in_topic": 35
    },
    {
      "topic": "bank_speed_train",
      "q_num": 375,
      "question": "Mr. X walks to his office at the rate of 4 miles/hours. If he increases his walking speed by 1 miles/hr, he could reach his office 1/2 hour earlier than the previous time. What is the distance, in mil",
      "options": {
        "a": "10",
        "b": "12",
        "c": "16",
        "d": "20",
        "e": "24"
      },
      "answer": "A",
      "id": 1123,
      "serial_in_topic": 36
    },
    {
      "topic": "bank_speed_train",
      "q_num": 376,
      "question": "Anwar usually walks to his house from his office at a speed of 8 km per hour. It takes him 10 minutes longer to walk the same distance at 6 km per hour. What is the distance (in km) between his house",
      "options": {
        "a": "7",
        "b": "6",
        "c": "5",
        "d": "4",
        "e": "None of these"
      },
      "answer": "D",
      "id": 1124,
      "serial_in_topic": 37
    },
    {
      "topic": "bank_speed_train",
      "q_num": 377,
      "question": "Mr. X walks to his office from home at an average speed of 4 miles/hour. If he increased his average speed to 7 mph, he can reach office 1.5 hours earlier than previous time. Find distance of his offi",
      "options": {
        "a": "16",
        "b": "15",
        "c": "14",
        "d": "12",
        "e": "10"
      },
      "answer": "C",
      "id": 1125,
      "serial_in_topic": 38
    },
    {
      "topic": "bank_speed_train",
      "q_num": 378,
      "question": "A man traveled one-fourth of the total distance of his trip by car. He traveled the remaining distance on foot. The ratio of his walking time to driving time was 15:1. Calculate the ratio of his drivi",
      "options": {
        "a": "04:00",
        "b": "05:01",
        "c": "15:04",
        "d": "15:01",
        "e": "None of these"
      },
      "answer": "C",
      "id": 1126,
      "serial_in_topic": 39
    },
    {
      "topic": "bank_speed_train",
      "q_num": 379,
      "question": "A man had traveled 1/3 of the total distance of his trip when his car broke down. He finished the journey on foot, spending twenty times as long walking as he had spent driving speed than his walking",
      "options": {
        "a": "10",
        "b": "12",
        "c": "15",
        "d": "20",
        "e": "None of these"
      },
      "answer": "A",
      "id": 1127,
      "serial_in_topic": 40
    },
    {
      "topic": "bank_speed_train",
      "q_num": 380,
      "question": "A bus uses one liter of diesel to travel 15 km. After an engine tune-up, the bus travels 15% farther on one liter. How many liters of diesel(to the nearest tenth) will it take for the bus to travel 15",
      "options": {
        "a": "8.5",
        "b": "8.7",
        "c": "8.9",
        "d": "90",
        "e": "10"
      },
      "answer": "C",
      "id": 1128,
      "serial_in_topic": 41
    },
    {
      "topic": "bank_speed_train",
      "q_num": 381,
      "question": "A car uses one liter of petrol to travel 17 miles. After a tune-up, the car travels 17% farther on one. How many liters of petrol (to the nearest tenth) will it take for the car to travel 170 miles af",
      "options": {
        "a": "8.1",
        "b": "7.9",
        "c": "9.3",
        "d": "9.1",
        "e": "8.5"
      },
      "answer": "E",
      "id": 1129,
      "serial_in_topic": 42
    },
    {
      "topic": "bank_speed_train",
      "q_num": 382,
      "question": "If 4.83 kilometers are equivalent to 3 miles, then 7 miles are equivalent to how many kilometers?",
      "options": {
        "a": "8.83",
        "b": "9.67",
        "c": "10.57",
        "d": "11.27",
        "e": "None of these"
      },
      "answer": "D",
      "id": 1130,
      "serial_in_topic": 43
    },
    {
      "topic": "bank_speed_train",
      "q_num": 383,
      "question": "If A can do a Practice in 10 days and B can do the Practice in 15 days. If A and B can work together, then in how many days they can finish the Practice?",
      "options": {
        "a": "4",
        "b": "5",
        "c": "6",
        "d": "25",
        "e": "None of these"
      },
      "answer": "C",
      "id": 1131,
      "serial_in_topic": 44
    },
    {
      "topic": "bank_speed_train",
      "q_num": 384,
      "question": "A can do a work in 3 minutes, while B can do the same wark in 6 minute. How long will it take to complete the Practice if both of them worked together?",
      "options": {
        "a": "1",
        "b": "2",
        "c": "3",
        "d": "4",
        "e": "None of these"
      },
      "answer": "B",
      "id": 1132,
      "serial_in_topic": 45
    },
    {
      "topic": "bank_speed_train",
      "q_num": 385,
      "question": "One pipe can fill a pool in 6 hours, and a second pipe can fill the same pool in 12 hours. If both pipes work together, how long will it take to fill the pool?",
      "options": {
        "a": "3 hours",
        "b": "3/5 hours",
        "c": "4 hours",
        "d": "4.5 hours"
      },
      "answer": "C",
      "id": 1133,
      "serial_in_topic": 46
    },
    {
      "topic": "bank_speed_train",
      "q_num": 386,
      "question": "Arif can do a work in 45 minutes, while Babu can do the same work in 30 minute. How long will it take to complete the Practice if both of them worke together?",
      "options": {
        "a": "21",
        "b": "18",
        "c": "15",
        "d": "12",
        "e": "None of these"
      },
      "answer": "B",
      "id": 1134,
      "serial_in_topic": 47
    },
    {
      "topic": "bank_speed_train",
      "q_num": 387,
      "question": "A mother can do a Practice as fast as her 2 daughters work together. If one daughter does the Practice alone in 3 hours & the other does it alone in 6 hours, how many hours does it take the mother to",
      "options": {
        "a": "2",
        "b": "2",
        "c": "4",
        "d": "6",
        "e": "None of these"
      },
      "answer": "B",
      "id": 1135,
      "serial_in_topic": 48
    },
    {
      "topic": "bank_speed_train",
      "q_num": 388,
      "question": "Karim can do a Practice in 15 minutes and his brother takes twice as long to do same Practice. If they work together, how long will it take to complete the Practice?",
      "options": {
        "a": "5",
        "b": "7.5",
        "c": "10",
        "d": "12.5",
        "e": "None of these"
      },
      "answer": "C",
      "id": 1136,
      "serial_in_topic": 49
    },
    {
      "topic": "bank_speed_train",
      "q_num": 389,
      "question": "One worker can do a Practice in n hours, while int takes a second worker m hours to do the same Practice. How long does it take both workers?",
      "options": {
        "a": "m+n",
        "b": "1/m+1/n",
        "c": "m+n/m n",
        "d": "n m/m+n",
        "e": "None of these"
      },
      "answer": "D",
      "id": 1137,
      "serial_in_topic": 50
    },
    {
      "topic": "bank_speed_train",
      "q_num": 390,
      "question": "Rahat can mov the lawn in 5 hours and Halim can mov the lawn in 4 hours. How long will it take to mov the lawn together?",
      "options": {
        "a": "5 hours",
        "b": "4 1/2 hours",
        "c": "2 2/9 hours",
        "d": "4 hours",
        "e": "6 hours"
      },
      "answer": "C",
      "id": 1138,
      "serial_in_topic": 51
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 391,
      "question": "If Gazi can seal 40 envelopes in one minute and Kamal can do the same Practice in 80 seconds, how many minutes will the two of them working together take to seal 350 envelopes?",
      "options": {
        "a": "4 minutes",
        "b": "5 minutes",
        "c": "6 minutes",
        "d": "7 minutes",
        "e": "8 minutes"
      },
      "answer": "C",
      "id": 1139,
      "serial_in_topic": 1
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 392,
      "question": "If A can do a Practice in 10 days and A and B can do the Practice in 6 days by working together, then in how many days B can finish the Practice?",
      "options": {
        "a": "14",
        "b": "15",
        "c": "23",
        "d": "25",
        "e": "None of these"
      },
      "answer": "B",
      "id": 1140,
      "serial_in_topic": 2
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 393,
      "question": "If A can do a Practice in 15 days and A and B can do the Practice in 6 days by working together, then in how many days B can finish the Practice?",
      "options": {
        "a": "5",
        "b": "10",
        "c": "23",
        "d": "25",
        "e": "None of these"
      },
      "answer": "B",
      "id": 1141,
      "serial_in_topic": 3
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 394,
      "question": "A and B can build a wall in 3 days. B can do it alone in 5 days. How many days would it take A to do this Practice alone?",
      "options": {
        "a": "0.2",
        "b": "7.5",
        "c": "5",
        "d": "6.4",
        "e": "None of these"
      },
      "answer": "B",
      "id": 1142,
      "serial_in_topic": 4
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 395,
      "question": "Worker W produces n units in 5 hours. Worker V and W, working independently but at the same time, produce n units in 2 hours. How would it take V alone to produce n units?",
      "options": {
        "a": "1 hr. 25 min",
        "b": "2 hr. 40 min",
        "c": "2 hr. 20 min",
        "d": "None of these"
      },
      "answer": "D",
      "id": 1143,
      "serial_in_topic": 5
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 396,
      "question": "If A can do a Practice in 10 days and B can do the Practice in 15 days. On a particular month, they worked together for 4 days, after which A left and B had to finish the rest of the work alo",
      "options": {
        "a": "4",
        "b": "5",
        "c": "6",
        "d": "25",
        "e": "None of these"
      },
      "answer": "B",
      "id": 1144,
      "serial_in_topic": 6
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 397,
      "question": "Arif can do a particular work in 1 hour while Asif can do the same work in 1.5 hours. On a particular day, they worked together for half an hour, after which Arif left and Asif had to finish the rest",
      "options": {
        "a": "15",
        "b": "16",
        "c": "17",
        "d": "18",
        "e": "None of these"
      },
      "answer": "D",
      "id": 1145,
      "serial_in_topic": 7
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 398,
      "question": "Working alone, Abu can do a Practice in 40 days. Labu can do the same Practice in 60 days working alone. They start working together and work for 18 days, when Harun joined them. The three then worke",
      "options": {
        "a": "72",
        "b": "96",
        "c": "120",
        "d": "80",
        "e": "None of these"
      },
      "answer": "C",
      "id": 1146,
      "serial_in_topic": 8
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 399,
      "question": "It takes Karim an hour to do a Practice that Rahim can do in 40 minutes. One morning they worked together for 12 minutes; then Karim went away and Rahim finished the Practice. How long did it take him",
      "options": {
        "a": "15",
        "b": "16",
        "c": "17",
        "d": "20",
        "e": "None of these"
      },
      "answer": "D",
      "id": 1147,
      "serial_in_topic": 9
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 400,
      "question": "Ram can do a Practice in 20 days, while Sham can do the same Practice in 25 days. After working for 10 days together, Sham left and Ram finished the Practice. How many days did Ram take to finish the",
      "options": {
        "a": "4",
        "b": "5",
        "c": "6",
        "d": "25",
        "e": "None of these"
      },
      "answer": "B",
      "id": 1148,
      "serial_in_topic": 10
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 402,
      "question": "If A, B and C can complete a work 1, 2 and 3 days respectively. Then how long would it take if they work together?",
      "options": {
        "a": "2",
        "b": "11-Jun",
        "c": "13-Jun",
        "d": "5",
        "e": "None of these"
      },
      "answer": "B",
      "id": 1149,
      "serial_in_topic": 11
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 403,
      "question": "Three workers can do a Practice in 12 days. Each of the two workers does twice as fast as the third. How long would it take one of the faster workers to do the Practice himself?",
      "options": {
        "a": "24",
        "b": "30",
        "c": "32",
        "d": "None of these"
      },
      "answer": "B",
      "id": 1150,
      "serial_in_topic": 12
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 404,
      "question": "Three workers can do a Practice in 12 days. Two of the workers work twice as fast as the third. How long would it take one of the faster workers to do the Practice alone?",
      "options": {
        "a": "30",
        "b": "35",
        "c": "40",
        "d": "42",
        "e": "None of these"
      },
      "answer": "B",
      "id": 1151,
      "serial_in_topic": 13
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 405,
      "question": "Three pipes are used to fill a pool with water. Individually they can fill the pool in 9 hours, 6 hours and 3 hours. How many minutes will it take to fill the pool if three pipes are used simultaneous",
      "options": {
        "a": "1.63",
        "b": "11",
        "c": "54",
        "d": "56.4",
        "e": "98"
      },
      "answer": "A",
      "id": 1152,
      "serial_in_topic": 14
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 406,
      "question": "An empty water tank can be filled in 30 minutes by opening one pipe and the full tank can be emptied in 40 minutes by opening the other pipe. If both pipes are opened together while the tank",
      "options": {
        "a": "1.5",
        "b": "1.2",
        "c": "1",
        "d": "2",
        "e": "1.6"
      },
      "answer": "D",
      "id": 1153,
      "serial_in_topic": 15
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 407,
      "question": "An empty water tank can be filled in 10 minutes by opening one pipe and the full tank can be emptied in 20 minutes by opening the other pipe.If both pipes are opened together wihle the tank is empty,i",
      "options": {
        "a": "15",
        "b": "12",
        "c": "10",
        "d": "19",
        "e": "16"
      },
      "answer": "C",
      "id": 1154,
      "serial_in_topic": 16
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 408,
      "question": "An empty water tank can be filled in 40 minutes by opening one pipe and the full tank can be emptied in 120 minutes by opening the other pipe.If both pipes are opened together while the tank is empty,",
      "options": {
        "a": "1.5",
        "b": "1.2",
        "c": "1",
        "d": "2",
        "e": "1.6"
      },
      "answer": "C",
      "id": 1155,
      "serial_in_topic": 17
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 409,
      "question": "There are two taps in a water tank.The first tap pumps water in the tank and the second one drains it out.The first tap takes 30 minutes to make the tank full and the second tap needs 40 minutes to dr",
      "options": {
        "a": "30 min.",
        "b": "2 hours",
        "c": "1 hours",
        "d": "40 min.",
        "e": "None of these"
      },
      "answer": "B",
      "id": 1156,
      "serial_in_topic": 18
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 410,
      "question": "A tank is 3/4 full.Fill-pipe A can fill the tank in 12 minutes.Drain-pipe B can empty it in 8 minutes.If both pipes are open,how long will it take to empty the tank?",
      "options": {
        "a": "8 minutes",
        "b": "12 minutes",
        "c": "16 minutes",
        "d": "18 minutes",
        "e": "15 minutes"
      },
      "answer": "D",
      "id": 1157,
      "serial_in_topic": 19
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 411,
      "question": "If A can do a Practice in 10 days and B can do the Practice in 15 days.They worked together to complete the practice & received a total payment of Tk.250.How much payment in taka should B re",
      "options": {
        "a": "100",
        "b": "50",
        "c": "60",
        "d": "125",
        "e": "None of these"
      },
      "answer": "A",
      "id": 1158,
      "serial_in_topic": 20
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 412,
      "question": "Jalil can do a particular Practice in 4 days. Karim can do the same Practice in 5 days. They worked together to complete the Practice & received a total payment of Tk. 450. How much payment in Taka sh",
      "options": {
        "a": "275",
        "b": "200",
        "c": "225",
        "d": "250",
        "e": "None of these"
      },
      "answer": "D",
      "id": 1159,
      "serial_in_topic": 21
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 413,
      "question": "Adil makes a box in 5 minutes; Ali takes 7 minutes to make a box. What will be ratio of the number of boxes produced by adil to number of boxes produced by Ali if the work 5 & a half hours?",
      "options": {
        "a": "5 to 6",
        "b": "5 to 7",
        "c": "6 to 5",
        "d": "7 to 5",
        "e": "2 to 1"
      },
      "answer": "D",
      "id": 1160,
      "serial_in_topic": 22
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 414,
      "question": "A man works twice as much as his assistant. The man can finish a Practice in 12 days. Find the number of days in which the man and his assistant can finish the Practice if they work together.",
      "options": {
        "a": "6",
        "b": "10",
        "c": "12",
        "d": "8",
        "e": "None of these"
      },
      "answer": "D",
      "id": 1161,
      "serial_in_topic": 23
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 415,
      "question": "3 men or 4 women can do a work in 23 days. How many days will it require to complete the work if 2 men and 5 women work together?",
      "options": {
        "a": "10",
        "b": "12",
        "c": "14",
        "d": "16",
        "e": "18"
      },
      "answer": "B",
      "id": 1162,
      "serial_in_topic": 24
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 416,
      "question": "1 men or 2 women can do a work in 9 days. How many days will it require to complete the work if 2 men and 5 women work together?",
      "options": {
        "a": "9",
        "b": "12",
        "c": "14",
        "d": "16",
        "e": "18"
      },
      "answer": "A",
      "id": 1163,
      "serial_in_topic": 25
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 417,
      "question": "6 men or 8 women can do a work in 18 days. How many days will it require to complete the work if 3 men and 5 women work together?",
      "options": {
        "a": "10",
        "b": "12",
        "c": "14",
        "d": "16",
        "e": "18"
      },
      "answer": "D",
      "id": 1164,
      "serial_in_topic": 26
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 418,
      "question": "If 9 men or 15 women can do a work in 16 days, how long will it take 3 men & 7 women to complete the same Practice?",
      "options": {
        "a": "12",
        "b": "15",
        "c": "18",
        "d": "20",
        "e": "None of these"
      },
      "answer": "D",
      "id": 1165,
      "serial_in_topic": 27
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 419,
      "question": "If 9 men can do a Practice in 3 days. Then how many men can do the Practice in 9 days?",
      "options": {
        "a": "2",
        "b": "3",
        "c": "4",
        "d": "5",
        "e": "None of these"
      },
      "answer": "B",
      "id": 1166,
      "serial_in_topic": 28
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 420,
      "question": "If 3 men can do a Practice in 9 days. Then how many men can do the Practice in 3 days?",
      "options": {
        "a": "2",
        "b": "9",
        "c": "14",
        "d": "15",
        "e": "None of these"
      },
      "answer": "B",
      "id": 1167,
      "serial_in_topic": 29
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 421,
      "question": "If 6 men can complete a work in 10 days, how many men can complete tha work in 6 days?",
      "options": {
        "a": "8",
        "b": "10",
        "c": "12",
        "d": "15",
        "e": "None of these"
      },
      "answer": "B",
      "id": 1168,
      "serial_in_topic": 30
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 422,
      "question": "If 4 workers can do a Practice in 48 days, how long will it take 3 warkers to finish the same Practice?",
      "options": {
        "a": "76",
        "b": "72",
        "c": "70",
        "d": "None of these"
      },
      "answer": "D",
      "id": 1169,
      "serial_in_topic": 31
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 423,
      "question": "A company employs 15 persons working 44 hours a week. If 4 persons are ill, how many hours a week would the rest have to work to make up the time lost?",
      "options": {
        "a": "60",
        "b": "55",
        "c": "50",
        "d": "None of these"
      },
      "answer": "A",
      "id": 1170,
      "serial_in_topic": 32
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 424,
      "question": "If m men can do a Practice in 10 days, how many days will it take for 10 men to complete the Practice assuming that they work at the same rate?",
      "options": {
        "a": "m",
        "b": "10/m",
        "c": "100m",
        "d": "10m"
      },
      "answer": "A",
      "id": 1171,
      "serial_in_topic": 33
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 425,
      "question": "55 men can finish a work in 42 days. How many additional men must be engaged to complete the work 9 days earlier?",
      "options": {
        "a": "15",
        "b": "16",
        "c": "17",
        "d": "18",
        "e": "None of these"
      },
      "answer": "A",
      "id": 1172,
      "serial_in_topic": 34
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 426,
      "question": "A man & a boy can finish a Practice working together for 4 day. The man can work as much as two boys can do. Then in how many days the man can do it alone?",
      "options": {
        "a": "6",
        "b": "8",
        "c": "12",
        "d": "23",
        "e": "None of these"
      },
      "answer": "A",
      "id": 1173,
      "serial_in_topic": 35
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 427,
      "question": "Five men and two boys can complete a work in 6 days. Two boys can work as much as a man can . Then in how many days can three men together complete the work?",
      "options": {
        "a": "8",
        "b": "9",
        "c": "10",
        "d": "12",
        "e": "None of these"
      },
      "answer": "D",
      "id": 1174,
      "serial_in_topic": 36
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 428,
      "question": "If it takes 4 days for 3 machines to do a certain Practice, it will take two machines to do the same Practice in-",
      "options": {
        "a": "6 days",
        "b": "4 days",
        "c": "5 days",
        "d": "2 days",
        "e": "12 days"
      },
      "answer": "B",
      "id": 1175,
      "serial_in_topic": 37
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 429,
      "question": "If 9 men can make 3 building in 30 days. Then how many men can make 2 building in 9 days?",
      "options": {
        "a": "2",
        "b": "3 0",
        "c": "14",
        "d": "15",
        "e": "None of these"
      },
      "answer": "A",
      "id": 1176,
      "serial_in_topic": 38
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 430,
      "question": "(a)If 18 men can make 6 building in 60 days. Then how many men can make 12 building in 15 days?",
      "options": {
        "a": "2",
        "b": "3 0",
        "c": "144",
        "d": "15",
        "e": "None of these"
      },
      "answer": "A",
      "id": 1177,
      "serial_in_topic": 39
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 431,
      "question": "A clerk in a bank counter can serve 10 customers in half an hour. At this rate how many customers can the clerk serve in 2.5 hours?",
      "options": {
        "a": "30",
        "b": "40",
        "c": "50",
        "d": "60",
        "e": "70"
      },
      "answer": "C",
      "id": 1178,
      "serial_in_topic": 40
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 432,
      "question": "A service center can wash 8 cars in 18 minutes. At this rate, how many cars can the center wash in 3 hours?",
      "options": {
        "a": "13",
        "b": "41",
        "c": "125",
        "d": "80",
        "e": "405"
      },
      "answer": "D",
      "id": 1179,
      "serial_in_topic": 41
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 433,
      "question": "If 16 workers can finish a Practice in 3 hours. How long should it take 5 workers to finish half of the same Practice?",
      "options": {
        "a": "3 1/2 hours",
        "b": "4 1/16 hours",
        "c": "9 3/5 hours",
        "d": "3/5 hours",
        "e": "4 4/5 hours"
      },
      "answer": "E",
      "id": 1180,
      "serial_in_topic": 42
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 434,
      "question": "Club A has 20 members and club B has 28. If, 6 people belong to both clubs then how many people belong to the two clubs?",
      "options": {
        "a": "43",
        "b": "42",
        "c": "35",
        "d": "36",
        "e": "None of these"
      },
      "answer": "B",
      "id": 1181,
      "serial_in_topic": 43
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 435,
      "question": "Club A has 10 members and club B has 18. If, 4 people belong to both clubs then how many people belong to the two clubs?",
      "options": {
        "a": "24",
        "b": "42",
        "c": "35",
        "d": "36",
        "e": "None of these"
      },
      "answer": "A",
      "id": 1182,
      "serial_in_topic": 44
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 436,
      "question": "In an examination, 52% students failed in English and 42% failed in Mathematics. If 17% failed in both subjects, find the percentage of students who passed in both subjects.",
      "options": {
        "a": "23",
        "b": "20",
        "c": "18",
        "d": "25",
        "e": "22"
      },
      "answer": "D",
      "id": 1183,
      "serial_in_topic": 45
    },
    {
      "topic": "bank_work_pipes",
      "q_num": 437,
      "question": "Club A has 20 members and club B has 28. If total of 45 belong to the two clubs, how many people belong to both clubs?",
      "options": {
        "a": "3",
        "b": "4",
        "c": "5",
        "d": "6",
        "e": "None of these"
      },
      "answer": "A",
      "id": 1184,
      "serial_in_topic": 46
    },
    {
      "topic": "bank_sets_venn",
      "q_num": 438,
      "question": "Club A has 10 members and club B has 28. If a total of 24 belong to the two clubs, how many people belong to both clubs?",
      "options": {
        "a": "13",
        "b": "14",
        "c": "15",
        "d": "16",
        "e": "None of these"
      },
      "answer": "B",
      "id": 1185,
      "serial_in_topic": 1
    },
    {
      "topic": "bank_sets_venn",
      "q_num": 439,
      "question": "Club A has 20 members and club B has 28. If a total of 42 belong to the two clubs, how many people belong to both clubs?",
      "options": {
        "a": "3",
        "b": "4",
        "c": "5",
        "d": "6",
        "e": "None of these"
      },
      "answer": "D",
      "id": 1186,
      "serial_in_topic": 2
    },
    {
      "topic": "bank_sets_venn",
      "q_num": 440,
      "question": "In the Baridhara area, 90% of the population own a car, 15% own a jeep, and every body owns one or the other or both. What is percentage of jeep owners who own cars?",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0.33%",
        "d": "0%",
        "e": "1%"
      },
      "answer": "A",
      "id": 1187,
      "serial_in_topic": 3
    },
    {
      "topic": "bank_sets_venn",
      "q_num": 441,
      "question": "In a City 90% of the population own a car, 15% own a motorcycle, and everybody owns one of the other or both. What is the percentage of motorcycle owners who own cars?",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0.33%",
        "d": "0%",
        "e": "1%"
      },
      "answer": "A",
      "id": 1188,
      "serial_in_topic": 4
    },
    {
      "topic": "bank_sets_venn",
      "q_num": 442,
      "question": "In a survey of group of people, It was found that 50% had iodine deficiency, 30% had daibetes & 20% had both. What % of people in the group had none of these two elements?",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0%",
        "d": "0%",
        "e": "None of these"
      },
      "answer": "D",
      "id": 1189,
      "serial_in_topic": 5
    },
    {
      "topic": "bank_sets_venn",
      "q_num": 443,
      "question": "In a group of 25 married couples, 26 people have brown hair, 22 people have blue eyes, and 9 people have both brown hair and blue eyes. How many people have neither blue eyes nor brown hair?",
      "options": {
        "a": "11",
        "b": "15",
        "c": "25",
        "d": "30",
        "e": "None of these"
      },
      "answer": "A",
      "id": 1190,
      "serial_in_topic": 6
    },
    {
      "topic": "bank_sets_venn",
      "q_num": 444,
      "question": "In a survey of group of people, it was found that 30% had iodine deficiency, 20% had diabetes & 10% had bot. What % of people in the group had None of these two elements?",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0%",
        "d": "1%",
        "e": "None of these"
      },
      "answer": "D",
      "id": 1191,
      "serial_in_topic": 7
    },
    {
      "topic": "bank_sets_venn",
      "q_num": 445,
      "question": "In a group of 15 married couples, 16 people have brown hair, 12 people have blue eyes, and 4 people have both brown hair and blue eyes. How many people have neither blue eyes nor broun hair?",
      "options": {
        "a": "6",
        "b": "15",
        "c": "25",
        "d": "30",
        "e": "None of these"
      },
      "answer": "A",
      "id": 1192,
      "serial_in_topic": 8
    },
    {
      "topic": "bank_sets_venn",
      "q_num": 446,
      "question": "In a class of 82 students 46 are taking French 26, are taking German and 11 students are taking both French and German. How many students are not enrolled in either course?",
      "options": {
        "a": "11",
        "b": "18",
        "c": "22",
        "d": "24",
        "e": "None of these"
      },
      "answer": "E",
      "id": 1193,
      "serial_in_topic": 9
    },
    {
      "topic": "bank_sets_venn",
      "q_num": 447,
      "question": "In a survey of group of people, it was found that 60% had iodine deficiency, 30% had diabetes & 16% had both. What % of people in the group had none of these two elements?",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0%",
        "d": "0%",
        "e": "None of these"
      },
      "answer": "A",
      "id": 1194,
      "serial_in_topic": 10
    },
    {
      "topic": "bank_sets_venn",
      "q_num": 448,
      "question": "In a survey of Chittagong City, it was found that 70% of the people surveyed watched television news, 35% read a newspaper, and 25% read a newspaper and watched television news. What percent of the pe",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0%",
        "d": "0%",
        "e": "0%"
      },
      "answer": "B",
      "id": 1195,
      "serial_in_topic": 11
    },
    {
      "topic": "bank_sets_venn",
      "q_num": 449,
      "question": "In survey of the town of Sherpur it was found that 70% of the people surveyed watched the news on TV,35% read a newspaper, 25% read a newspaper and watched the news on TV. What percent of the people s",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0%",
        "d": "0%",
        "e": "0%"
      },
      "answer": "C",
      "id": 1196,
      "serial_in_topic": 12
    },
    {
      "topic": "bank_sets_venn",
      "q_num": 450,
      "question": "In a survey of the people in Chittagong, it was found that 65% of the people surveyed watched the news on television, 40% read a newspaper, and 25% read a newspaper and watched the news on television.",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "0%",
        "d": "0%",
        "e": "0%"
      },
      "answer": "E",
      "id": 1197,
      "serial_in_topic": 13
    },
    {
      "topic": "bank_sets_venn",
      "q_num": 451,
      "question": "In a survey of the town of Brahmanbaria, it was found that 65% of the people surveyed watched the news on television, 40% read a newspaper, and 25% read a newspaper and watched the news on television.",
      "options": {
        "a": "1%",
        "b": "0%",
        "c": "0%",
        "d": "0%",
        "e": "0%"
      },
      "answer": "B",
      "id": 1198,
      "serial_in_topic": 14
    },
    {
      "topic": "bank_sets_venn",
      "q_num": 452,
      "question": "Of the 65 cars on a car lot, 45 have air conditioning, 30 have power windows and 12 have both air conditioning and power windows. How many of the cars on the lot have neither air conditioning nor powe",
      "options": {
        "a": "5",
        "b": "10",
        "c": "4",
        "d": "2",
        "e": "None of these"
      },
      "answer": "D",
      "id": 1199,
      "serial_in_topic": 15
    },
    {
      "topic": "bank_sets_venn",
      "q_num": 453,
      "question": "In a class of 24 students, one half of the students liked movie A and one- tthird liked movie B, and one fourth liked both thee movies. How many students liked neither of a movie?",
      "options": {
        "a": "6",
        "b": "8",
        "c": "9",
        "d": "10",
        "e": "11"
      },
      "answer": "D",
      "id": 1200,
      "serial_in_topic": 16
    },
    {
      "topic": "bank_sets_venn",
      "q_num": 454,
      "question": "There are 145 computers in a school, of them 70 have color monitor, 75 have sound box and 15 have both color monitor and sound box. How many computers have neither color monitor nor sound box?",
      "options": {
        "a": "2",
        "b": "10",
        "c": "15",
        "d": "18",
        "e": "21"
      },
      "answer": "C",
      "id": 1201,
      "serial_in_topic": 17
    },
    {
      "topic": "bank_sets_venn",
      "q_num": 455,
      "question": "In a certain town 40% of the people have brown hair, 25% have brown eyes, and 10% have both brown hair and brown eyes. What percentages of the people in the town have neither brown hair nor brown eyes",
      "options": {
        "a": "35",
        "b": "40",
        "c": "45",
        "d": "50",
        "e": "55"
      },
      "answer": "C",
      "id": 1202,
      "serial_in_topic": 18
    },
    {
      "topic": "bank_sets_venn",
      "q_num": 456,
      "question": "In a certain class of a high school, 40% of the students have passed Mathematics, 25 have passed English and 10% have passed both Mathematics and English. What percentage of the students have passed n",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "1%",
        "d": "0%",
        "e": "None of these"
      },
      "answer": "B",
      "id": 1203,
      "serial_in_topic": 19
    },
    {
      "topic": "bank_sets_venn",
      "q_num": 457,
      "question": "In a group of 15, 7 have studied English, 8 have studied French, and 3 have not studied cither. How many of these have studied both English and French?",
      "options": {
        "a": "0",
        "b": "3",
        "c": "4",
        "d": "5",
        "e": "7"
      },
      "answer": "B",
      "id": 1204,
      "serial_in_topic": 20
    },
    {
      "topic": "bank_sets_venn",
      "q_num": 458,
      "question": "In a certain group of 36 people, 18 people are wearing hats, 24 people are wearing sweaters. If 6 people are wearing neither hat nor sweater, how many people are wearing both a hat and a sweater?",
      "options": {
        "a": "30",
        "b": "22",
        "c": "12",
        "d": "8",
        "e": "6"
      },
      "answer": "B",
      "id": 1205,
      "serial_in_topic": 21
    },
    {
      "topic": "bank_sets_venn",
      "q_num": 459,
      "question": "In EMBA exam 70% students passed in English and 65% passed in English and 65% passed in Mathematics and 27% of the students failed in both subjects.If only 248 students passed in both subject",
      "options": {
        "a": "300",
        "b": "400",
        "c": "500",
        "d": "600",
        "e": "None of these"
      },
      "answer": "B",
      "id": 1206,
      "serial_in_topic": 22
    },
    {
      "topic": "bank_sets_venn",
      "q_num": 460,
      "question": "In BBA exam 60% students passed in English and 50% passed in Mathematics and 40% of the students failed in both subjects. If only 200 students passed in both subject,the total number of students appea",
      "options": {
        "a": "300",
        "b": "400",
        "c": "500",
        "d": "600",
        "e": "None of these"
      },
      "answer": "B",
      "id": 1207,
      "serial_in_topic": 23
    },
    {
      "topic": "bank_sets_venn",
      "q_num": 461,
      "question": "In an exam,90% passed in hisotry and 85% passed in English.If none of the students failed in both subjects and 225 passed in both subjects,calculate the number of students who have attended the exam.",
      "options": {
        "a": "250",
        "b": "275",
        "c": "300",
        "d": "325",
        "e": "None of these"
      },
      "answer": "B",
      "id": 1208,
      "serial_in_topic": 24
    },
    {
      "topic": "bank_sets_venn",
      "q_num": 462,
      "question": "In a PhD preliminary exam,90% passed in history and 85% passed in English.If none of the students failed in both subjects and 225 passed in both subject,calculate the number of students who h",
      "options": {
        "a": "250",
        "b": "275",
        "c": "300",
        "d": "325",
        "e": "None of these"
      },
      "answer": "C",
      "id": 1209,
      "serial_in_topic": 25
    },
    {
      "topic": "bank_sets_venn",
      "q_num": 463,
      "question": "In a MBA exam,60% passed in history and 50% passed in English.If none of the students failed in both subjects and 30 passed in both subject,calculate the number of students who have attended the exam.",
      "options": {
        "a": "250",
        "b": "275",
        "c": "300",
        "d": "325",
        "e": "None of these"
      },
      "answer": "C",
      "id": 1210,
      "serial_in_topic": 26
    },
    {
      "topic": "bank_sets_venn",
      "q_num": 464,
      "question": "20% of the families in the Chittagong city have a car,30% have a refrigerator and 40% have a TV set,Again 10% have a car and a refrigeator,15% have a refrigerator and a TV and 8% have a car a",
      "options": {
        "a": "10",
        "b": "38",
        "c": "60",
        "d": "62",
        "e": "None of these"
      },
      "answer": "D",
      "id": 1211,
      "serial_in_topic": 27
    },
    {
      "topic": "bank_sets_venn",
      "q_num": 465,
      "question": "10% of the families in the Sirajgonj city have a car, 20% have a refrigerator and 30% have a TV set, Again 10% have a car and a refrigerator, 15% have a refrigerator and a TV and 8% have a car and TV,",
      "options": {
        "a": "10",
        "b": "38",
        "c": "60",
        "d": "32",
        "e": "None of these"
      },
      "answer": "D",
      "id": 1212,
      "serial_in_topic": 28
    },
    {
      "topic": "bank_sets_venn",
      "q_num": 466,
      "question": "20% of the families in the Dhaka city have a car, 30% have a refrigerator and 40% have a TV set, Again 10% have a car and a refrigerator, 15% have a refrigerator and a TV and 8% have a car an",
      "options": {
        "a": "10",
        "b": "38",
        "c": "60",
        "d": "62",
        "e": "None of these"
      },
      "answer": "E",
      "id": 1213,
      "serial_in_topic": 29
    },
    {
      "topic": "bank_sets_venn",
      "q_num": 467,
      "question": "10% of the families in the Kustia city have a car, 20% have a refrigerator and 30% have a TV set, Again 10% have a car and a refrigerator, 15% have a refrigerator and a TV and 8% have a car and TV, 5%",
      "options": {
        "a": "10",
        "b": "38",
        "c": "60",
        "d": "62",
        "e": "None of these"
      },
      "answer": "E",
      "id": 1214,
      "serial_in_topic": 30
    },
    {
      "topic": "bank_sets_venn",
      "q_num": 468,
      "question": "20% of the families in the Dhaka city have a car, 30% have a refrigerator and 40% have a TV set, Again 10% have a car and a refrigerator, 15% have a refrigerator and a TV and 8% have a car and TV, 5%",
      "options": {
        "a": "10",
        "b": "38",
        "c": "60",
        "d": "62",
        "e": "None of these"
      },
      "answer": "B",
      "id": 1215,
      "serial_in_topic": 31
    },
    {
      "topic": "bank_sets_venn",
      "q_num": 469,
      "question": "In a survey of employees, 53% of those asked were in favor of at least one of the 3 proposals made by the management, 30% of them were in in favor of proposal A, 20% favored proposal B, and 1",
      "options": {
        "a": "2",
        "b": "10",
        "c": "12",
        "d": "20",
        "e": "22"
      },
      "answer": "A",
      "id": 1216,
      "serial_in_topic": 32
    },
    {
      "topic": "bank_sets_venn",
      "q_num": 470,
      "question": "In a sorvey of soft drink preferences, 68% of those surveyed liked at least one of the drinls: Coke, Fanta, Sprite. 40% of those surveyed liked Coke, 35% liked Fanta & 25% liked Sprite. If 5% of those",
      "options": {
        "a": "17",
        "b": "22",
        "c": "27",
        "d": "100",
        "e": "None of these"
      },
      "answer": "C",
      "id": 1217,
      "serial_in_topic": 33
    },
    {
      "topic": "bank_sets_venn",
      "q_num": 471,
      "question": "In a survey of employees, 73% of those asked were in favor of at least one of the 3 proposals made by the management, 50% of them were in in favor of proposal A, 30% favored proposal B, and 20% favore",
      "options": {
        "a": "5",
        "b": "10",
        "c": "12",
        "d": "20",
        "e": "22"
      },
      "answer": "E",
      "id": 1218,
      "serial_in_topic": 34
    },
    {
      "topic": "bank_sets_venn",
      "q_num": 472,
      "question": "80 students are enrolled in Management, Accounting and Marketing. 50 students are in Management, 40 are in Accounting, and 30 are in Marketing. 15 students are enrolled in all three courses.",
      "options": {
        "a": "8",
        "b": "5",
        "c": "6",
        "d": "9",
        "e": "10"
      },
      "answer": "E",
      "id": 1219,
      "serial_in_topic": 35
    },
    {
      "topic": "bank_sets_venn",
      "q_num": 473,
      "question": "70 students are enrolled in Management, Accounting and Marketing. 40 students are in Management, 35 are in Accounting, and 30 are in Marketing. 15 students are enrolled in all three courses. How many",
      "options": {
        "a": "8",
        "b": "5",
        "c": "6",
        "d": "9",
        "e": "7"
      },
      "answer": "B",
      "id": 1220,
      "serial_in_topic": 36
    },
    {
      "topic": "bank_sets_venn",
      "q_num": 474,
      "question": "In a class of 120 students, 60% can speak French and the rest can speak English only. If 25% of those in the class who can speak French can also speak English, how many of the students in the class ca",
      "options": {
        "a": "54",
        "b": "60",
        "c": "66",
        "d": "84",
        "e": "None of these"
      },
      "answer": "C",
      "id": 1221,
      "serial_in_topic": 37
    },
    {
      "topic": "bank_sets_venn",
      "q_num": 475,
      "question": "In a sports club, 34 boys play football and 27 boys play cricket. Of those, 13 boys play both cricket and football. What is the ratio of the number of boys who play only cricket to those who play only",
      "options": {
        "a": "03:02:16",
        "b": "07:11",
        "c": "04:03",
        "d": "02:02",
        "e": "None of these"
      },
      "answer": "D",
      "id": 1222,
      "serial_in_topic": 38
    },
    {
      "topic": "bank_sets_venn",
      "q_num": 476,
      "question": "In a class off 120 students, 60 percent can speak French and the rest can speak only English. If 25 percent of those in the class who can speak French can also speak English, how many of the students",
      "options": {
        "a": "54",
        "b": "60",
        "c": "66",
        "d": "84",
        "e": "90"
      },
      "answer": "C",
      "id": 1223,
      "serial_in_topic": 39
    },
    {
      "topic": "bank_sets_venn",
      "q_num": 477,
      "question": "Mr. Niaz spends 60% of his income on food, 20% on clothing, and 5% on gifts and the remaining Tk.3000 on charity. What is his income In Taka thousands?",
      "options": {
        "a": "8",
        "b": "9",
        "c": "10",
        "d": "20",
        "e": "None of these"
      },
      "answer": "D",
      "id": 1224,
      "serial_in_topic": 40
    },
    {
      "topic": "bank_fractions_word",
      "q_num": 478,
      "question": "Mr. Nurun Nabi spends 40% of his monthly income on food. 35% on education, and the rest tk.1, 200/- is seved. Then what is his monthly income?",
      "options": {
        "a": "2000",
        "b": "1500",
        "c": "4800",
        "d": "1000",
        "e": "None of these"
      },
      "answer": "C",
      "id": 1225,
      "serial_in_topic": 1
    },
    {
      "topic": "bank_fractions_word",
      "q_num": 479,
      "question": "Mr. X spends 72% of his income on clothing, 20% on food, and 5% on gifts and the remaining Tk.330 on lottery tickets. What is his income in Taka thousands?",
      "options": {
        "a": "8",
        "b": "9",
        "c": "10",
        "d": "11",
        "e": "12"
      },
      "answer": "D",
      "id": 1226,
      "serial_in_topic": 2
    },
    {
      "topic": "bank_fractions_word",
      "q_num": 480,
      "question": "There are 30 students enrolled on a business school.Of the enrolled students,90% took the final exam.1/3 rd of the students who took the final exam passed it.How many students passed the fina",
      "options": {
        "a": "3",
        "b": "4",
        "c": "5",
        "d": "9",
        "e": "None of these"
      },
      "answer": "D",
      "id": 1227,
      "serial_in_topic": 3
    },
    {
      "topic": "bank_fractions_word",
      "q_num": 481,
      "question": "There are 100 students enrolled on a Future Practice course.Of the enrolled students,90% took the final exam.2/3 rd of the students who took the final exam passed it.How many students passed the final",
      "options": {
        "a": "45",
        "b": "35",
        "c": "15",
        "d": "33",
        "e": "60"
      },
      "answer": "E",
      "id": 1228,
      "serial_in_topic": 4
    },
    {
      "topic": "bank_fractions_word",
      "q_num": 482,
      "question": "There are 50 students enrolled on a business school.Of the enrolled students,90% took the final exam.2/3 rd of the students who took the final exam passed it.How many students passed the final exam?",
      "options": {
        "a": "45",
        "b": "35",
        "c": "34",
        "d": "33",
        "e": "30"
      },
      "answer": "E",
      "id": 1229,
      "serial_in_topic": 5
    },
    {
      "topic": "bank_fractions_word",
      "q_num": 483,
      "question": "Last year 60 students enrolled in the Business Communication course of the enrolled students.90% took the final exam.Two-third if the students who took the final exam passed the final exam.What percen",
      "options": {
        "a": "0%",
        "b": "0%",
        "c": "1%",
        "d": "1%",
        "e": "None of these"
      },
      "answer": "A",
      "id": 1230,
      "serial_in_topic": 6
    },
    {
      "topic": "bank_fractions_word",
      "q_num": 484,
      "question": "Seventy five percent of the students entering BBA program are from Dhaka city.Two-third of them majored in finance and of the finance majors,3/4 worked in multinational companies.What fraction of the",
      "options": {
        "a": "40910",
        "b": "40912",
        "c": "40916",
        "d": "40920",
        "e": "None of these"
      },
      "answer": "E",
      "id": 1231,
      "serial_in_topic": 7
    },
    {
      "topic": "bank_fractions_word",
      "q_num": 485,
      "question": "Mr.Saifur spends 1/5 th of his monthly income on food 1/4 th on education and the rest tk.11 lacs is saved.Then what is his monthly income in lacs?",
      "options": {
        "a": "20",
        "b": "15",
        "c": "12",
        "d": "10",
        "e": "None of these"
      },
      "answer": "A",
      "id": 1232,
      "serial_in_topic": 8
    },
    {
      "topic": "bank_fractions_word",
      "q_num": 486,
      "question": "Mr.Monju spends 1/5 th of his monthly income on food th on education and the rest tk.22 thousand is saved.Then what is his monthly income in thousand?",
      "options": {
        "a": "40",
        "b": "50",
        "c": "20",
        "d": "10",
        "e": "None of these"
      },
      "answer": "A",
      "id": 1233,
      "serial_in_topic": 9
    },
    {
      "topic": "bank_fractions_word",
      "q_num": 487,
      "question": "A gentleman spends 2/5 th of his monthly income on 1/4 food. 1/4 th on education, and the rest tk. 200/- is saved. Then what is his monthly income?",
      "options": {
        "a": "2000",
        "b": "1500",
        "c": "1200",
        "d": "1000",
        "e": "None of these"
      },
      "answer": "E",
      "id": 1234,
      "serial_in_topic": 10
    },
    {
      "topic": "bank_fractions_word",
      "q_num": 488,
      "question": "One Monday a store- owner received a shipment of books. On Tuesday he sold half of them; on Wednesday, after two more were sold, he had exactly 2/5th of the books left. How many books were in the ship",
      "options": {
        "a": "10",
        "b": "20",
        "c": "30",
        "d": "40",
        "e": "50"
      },
      "answer": "B",
      "id": 1235,
      "serial_in_topic": 11
    },
    {
      "topic": "bank_fractions_word",
      "q_num": 489,
      "question": "At the first stop on her route, a driver unloaded 2/5 of the packages in hen van. After she unloaded another three packages in her next stop, half of the original number of packages in the van remaine",
      "options": {
        "a": "10",
        "b": "18",
        "c": "25",
        "d": "30",
        "e": "36"
      },
      "answer": "D",
      "id": 1236,
      "serial_in_topic": 12
    },
    {
      "topic": "bank_fractions_word",
      "q_num": 490,
      "question": "A number of building blocks were purchased to construct a wall, at a cost of Taka 40 each, but only 5/6 of them were used. If the unused 290 bricks were returned and their cost refunded, what was the",
      "options": {
        "a": "Tk. 76,000",
        "b": "Tk. 22,800",
        "c": "Tk. 30,400",
        "d": "Tk.41,400",
        "e": "Tk. 58,000"
      },
      "answer": "E",
      "id": 1237,
      "serial_in_topic": 13
    },
    {
      "topic": "bank_fractions_word",
      "q_num": 491,
      "question": "X took 1/5 of the chocolates from a box and Y took 1/4 of the remaining chocolates. If 24 chocolates were left in the box, how many chocolates did the box contain originally?",
      "options": {
        "a": "25",
        "b": "35",
        "c": "40",
        "d": "75",
        "e": "80"
      },
      "answer": "C",
      "id": 1238,
      "serial_in_topic": 14
    },
    {
      "topic": "bank_fractions_word",
      "q_num": 492,
      "question": "A took 1/5 of the chocolates from a box and B took 1/4 of the remaining chocolates. If 12 chocolates were left in the box, How many chocolates did the box contain originally?",
      "options": {
        "a": "20",
        "b": "35",
        "c": "40",
        "d": "75",
        "e": "80"
      },
      "answer": "A",
      "id": 1239,
      "serial_in_topic": 15
    },
    {
      "topic": "bank_fractions_word",
      "q_num": 493,
      "question": "You took 1/3 of the chocolates from a box and your brother took 3/3 of the remaining chocolates. If 20 chocolates were left in the box, how many chocolates did the box contain originally?",
      "options": {
        "a": "25",
        "b": "45",
        "c": "50",
        "d": "75",
        "e": "80"
      },
      "answer": "D",
      "id": 1240,
      "serial_in_topic": 16
    },
    {
      "topic": "bank_fractions_word",
      "q_num": 494,
      "question": "Before anybody could notice, Arif took 1/3 of the chocolates from a box. Later, his theer sisters arrived and the remaining chocolates were distributed eqully among the four of them. Arif received a t",
      "options": {
        "a": "16",
        "b": "18",
        "c": "21",
        "d": "24",
        "e": "None of these"
      },
      "answer": "A",
      "id": 1241,
      "serial_in_topic": 17
    }
  ]
};
