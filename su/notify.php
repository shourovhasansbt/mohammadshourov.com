<?php
/**
 * notify.php
 * ----------
 * On every PDF download, sends the complete filled-in cover page
 * details to a Telegram chat — including the student's name and ID,
 * so the full submission is recorded, not just an aggregate summary.
 *
 * $fields below is the allow-list of what gets forwarded; anything not
 * listed is dropped even if the client posts it.
 *
 * Move BOT_TOKEN out of source (env var / Azure App Settings) when
 * you get a chance — same idea as not committing any other secret.
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$BOT_TOKEN = '8898223212:AAHkkTc8Vb9_mgcSzpJJZxC5QvthkyP-65s';
$CHAT_ID   = '-1003940246865';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'POST only']);
    exit;
}

// Allow-list of fields this endpoint will ever look at and forward.
$fields = [
    'docTitle'      => 'Document Type',
    'name'          => 'Student Name',
    'studentId'     => 'Student ID',
    'courseTitle'   => 'Course Title',
    'courseCode'    => 'Course Code',
    'section'       => 'Section',
    'session'       => 'Session',
    'sessionYear'   => 'Session Year',
    'experiment'    => 'Experiment Name',
    'toName'        => 'Submitted To',
    'toDesignation' => 'Designation',
    'toDepartment'  => 'Department',
    'subDate'       => 'Date of Submission',
];

// Plain-text cleanup only. Telegram is called without parse_mode, so HTML
// entities would show up literally in the message — escape control
// characters and collapse whitespace instead, never HTML-escape.
function clean_value($raw, $max = 200) {
    $value = preg_replace('/[\x00-\x1F\x7F]+/u', ' ', (string)$raw);
    $value = (string)$value;
    $value = trim((string)preg_replace('/\s+/u', ' ', $value));
    if (function_exists('mb_strlen') && mb_strlen($value, 'UTF-8') > $max) {
        $value = mb_substr($value, 0, $max - 1, 'UTF-8') . '...';
    }
    return $value;
}

$lines = ['📄 New cover page download'];
foreach ($fields as $key => $label) {
    if (!isset($_POST[$key])) continue;
    $value = clean_value($_POST[$key]);
    if ($value !== '') {
        $lines[] = "{$label}: {$value}";
    }
}
$text = implode("\n", $lines);

// Telegram rejects anything over 4096 chars, so trim rather than fail.
if (function_exists('mb_strlen') && mb_strlen($text, 'UTF-8') > 4096) {
    $text = mb_substr($text, 0, 4093, 'UTF-8') . '...';
}

$url = "https://api.telegram.org/bot{$BOT_TOKEN}/sendMessage";
$payload = http_build_query([
    'chat_id' => $CHAT_ID,
    'text'    => $text,
]);

$result = ['sent' => false, 'error' => null];
$ch = curl_init($url);
if ($ch === false) {
    $result['error'] = 'curl_init failed';
} else {
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    $response = curl_exec($ch);
    $curlErr  = curl_error($ch);
    curl_close($ch);

    if ($response === false) {
        $result['error'] = "Telegram unreachable: {$curlErr}";
    } else {
        $decoded = json_decode($response, true);
        if (is_array($decoded) && !empty($decoded['ok'])) {
            $result['sent'] = true;
        } else {
            $result['error'] = is_array($decoded) && isset($decoded['description'])
                ? $decoded['description']
                : substr((string)$response, 0, 200);
        }
    }
}

echo json_encode($result);
