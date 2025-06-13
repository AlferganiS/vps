<?php
session_start();

// Get the raw POST data (the fingerprint)
$fingerprint = file_get_contents('php://input');

$timestamp = date('Y-m-d H:i:s');

// Debug: Log the received fingerprint
error_log("[$timestamp] Received fingerprint: $fingerprint" . PHP_EOL, 3, '/tmp/debug_bfp_php.txt');

// Check if the fingerprint is valid
if (strlen($fingerprint) < 1) {
  error_log("Fingerprint is empty" . PHP_EOL, 3, '/tmp/debug_bfp_php.txt');
  exit(0);
}

$username = "abdoosalem25";
$password = 'gKOJZWn4nNpF3bni';
$dbName = 'fingerprints';
$collectionName = 'browserFP';

function getClientCodeHash($m)
{
  $session = 'sess_' . session_id();
  $filter = ['data.head' => true];
  $options = [
    'projection' => ['_id' => 0, 'data.hash' => 1, 'data.totalSequence' => 1]
  ];
  $query = new \MongoDB\Driver\Query($filter, $options);
  $rows = $m->executeQuery('fingerprints.' . 'sess_' . session_id(), $query);
  $hash = '';

  foreach ($rows as $r) {
    $hash = $r->data->hash;
  }
  error_log("this is hash --> [$hash]");
  return $hash;
}

function isJson($string)
{
  json_decode($string, true);
  return (json_last_error() === JSON_ERROR_NONE);
}


function getDataLength($m)
{
  $session = 'sess_' . session_id();
  $filter = ['data.head' => true];
  $options = [
    'projection' => ['_id' => 0, 'data.hash' => 1, 'data.totalSequence' => 1, 'data.datalen' => 1]
  ];
  $query = new \MongoDB\Driver\Query($filter, $options);
  $rows = $m->executeQuery("fingerprints." . 'sess_' . session_id(), $query);
  $dataLength = 0;

  foreach ($rows as $r) {
    if (!empty($r->data->datalen)) {
      return $r->data->datalen;
    }
  }

  return $dataLength;
}

function recreateData($m)
{
  $session = 'sess_' . session_id();
  $filter = ['data.head' => true];
  $options = [
    'projection' => ['_id' => 0, 'data.hash' => 1, 'data.totalSequence' => 1]
  ];
  $query = new \MongoDB\Driver\Query($filter, $options);
  $rows = $m->executeQuery("fingerprints." . 'sess_' . session_id(), $query);
  $hash = '';
  $totalSequence = 0;

  foreach ($rows as $r) {
    if (!empty($r->data->totalSequence)) {
      $totalSequence = intval($r->data->totalSequence);
    }
  }

  $dataBlob = '';

  for ($i = 0; $i <= $totalSequence; $i++) {
    $filter = ['data.sequence' => $i];
    $options = [
      'projection' => ['_id' => 0, 'data.parts' => 1, 'data.sequence' => 1]
    ];
    $query = new \MongoDB\Driver\Query($filter, $options);
    $rows = $m->executeQuery("fingerprints." . 'sess_' . session_id(), $query);
    foreach ($rows as $r) {
      if (!empty($r->data->parts)) {
        $dataBlob = $dataBlob . $r->data->parts;
      }
    }
  }
  return $dataBlob;
}

function insertDB($m, $bulk)
{
  $bulk = new MongoDB\Driver\BulkWrite;

  $f_print = recreateData($m);
  $decode = json_decode($f_print, true);


  if (isJson($m)) {

    $d_f_print = $decode;

  }
  error_log("this is fingerprint --> [$f_print]");

  error_log("this is decode --> [$decode]");

  $host = $_SERVER['HTTP_HOST']; // Always just "wildcard.mydomain.com"
  $subdomain = explode('.', $host)[0]; // Always just "wildcard"

  $doc = [
    '_id' => new MongoDB\BSON\ObjectID,
    'fingerprint' => $d_f_print,
    'webGLData_hash' => hash('sha256', $f_print['webGLData']),
    'canvas_hash' => hash('sha256', $f_print['canvas']),
    'session_id' => 'sess_' . $subdomain . '_' . session_id(),
    'client_fingerprint_hash' => getClientCodeHash($m),
    'server_fingerprint_hash' => hash('sha256', $f_print),
    'received_data_length' => strlen($f_print),
    'sent_data_length' => getDataLength($m)
  ];
  $bulk->insert($doc);
  $m->executeBulkWrite("fingerprints.browserFP", $bulk);
}

try {
  // Initialize MongoDB connection
  $m = new MongoDB\Driver\Manager("mongodb://${username}:${password}@localhost/$dbName");
  $bulk = new MongoDB\Driver\BulkWrite;

  // Initialize session variables if not set
  if (empty($_SESSION['counter'])) {
    $_SESSION['counter'] = 0;
  }

  if (empty($_SESSION['totalSequence'])) {
    $_SESSION['totalSequence'] = 0;
  }

  // Decode the received fingerprint data
  $data = json_decode($fingerprint, true);

  // Debug: Log the decoded data
  error_log("Decoded data: " . print_r($data, true) . PHP_EOL, 3, '/tmp/debug_bfp_php.txt');

  // Update session variables based on the data
  if ($data['totalSequence']) {
    $_SESSION['totalSequence'] = $data['totalSequence'];
  }

  $_SESSION['counter'] = $_SESSION['counter'] + 1;

  // Create the document to insert into MongoDB
  $doc = [
    '_id' => new MongoDB\BSON\ObjectID,
    'data' => $data,
    'counter' => $_SESSION['counter'],
    'totalSequence' => $_SESSION['totalSequence']
  ];

  // Insert the document into MongoDB
  $bulk->insert($doc);
  $m->executeBulkWrite("fingerprints." . 'sess_' . session_id(), $bulk);

  // Check if it's time to insert the complete data into the main collection
  if ($_SESSION['totalSequence'] + 1 == $_SESSION['counter'] and ($_SESSION['totalSequence'] != 0)) {
    insertDB($m, $bulk);
  }

} catch (MongoDB\Driver\Exception\Exception $e) {
  $filename = basename(__FILE__);
  error_log("Exception:" . $e->getMessage() . PHP_EOL, 3, '/tmp/debug_bfp_php.txt');
  error_log("In file:" . $e->getFile() . PHP_EOL, 3, '/tmp/debug_bfp_php.txt');
  error_log("Line: #" . $e->getLine() . PHP_EOL, 3, '/tmp/debug_bfp_php.txt');
}
