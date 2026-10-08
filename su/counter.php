<?php
/**
 * counter.php
 * -----------
 * Tracks both page VIEWS and PDF DOWNLOADS.
 *
 * POST ?type=view     -> increments page view count, returns {views, downloads}
 * POST ?type=download -> increments download count, returns {views, downloads}
 * GET                 -> returns current totals without incrementing
 *
 * All counts stored in counter_data.json
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$dataFile = __DIR__ . '/counter_data.json';

function read_data($file) {
    if (!file_exists($file)) {
        return ['views' => 0, 'downloads' => 0];
    }
    $raw = @file_get_contents($file);
    $decoded = json_decode($raw, true);
    if (is_array($decoded)) {
        return [
            'views'     => isset($decoded['views'])     ? (int)$decoded['views']     : 0,
            'downloads' => isset($decoded['downloads']) ? (int)$decoded['downloads'] : (isset($decoded['count']) ? (int)$decoded['count'] : 0),
        ];
    }
    return ['views' => 0, 'downloads' => 0];
}

$method = $_SERVER['REQUEST_METHOD'];
$type   = isset($_GET['type']) ? $_GET['type'] : '';

$handle = fopen($dataFile, file_exists($dataFile) ? 'r+' : 'w+');
if ($handle === false) {
    http_response_code(500);
    echo json_encode(['error' => 'Unable to access counter storage']);
    exit;
}

flock($handle, LOCK_EX);

$raw     = stream_get_contents($handle);
$decoded = json_decode($raw, true);

$views     = 0;
$downloads = 0;

if (is_array($decoded)) {
    $views     = isset($decoded['views'])     ? (int)$decoded['views']     : 0;
    $downloads = isset($decoded['downloads']) ? (int)$decoded['downloads'] : (isset($decoded['count']) ? (int)$decoded['count'] : 0);
}

if ($method === 'POST') {
    if ($type === 'view') {
        $views += 1;
    } elseif ($type === 'download') {
        $downloads += 1;
    } else {
        // backward compat: plain POST = download
        $downloads += 1;
    }

    $payload = json_encode([
        'views'      => $views,
        'downloads'  => $downloads,
        'updated_at' => date('c')
    ]);

    ftruncate($handle, 0);
    rewind($handle);
    fwrite($handle, $payload);
    fflush($handle);
}

flock($handle, LOCK_UN);
fclose($handle);

echo json_encode(['views' => $views, 'downloads' => $downloads]);
