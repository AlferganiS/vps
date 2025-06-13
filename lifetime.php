<?php

session_start();

function get_client_ip()
{
    $ipaddress = '';
    if (getenv('HTTP_CLIENT_IP'))
        $ipaddress = getenv('HTTP_CLIENT_IP');
    else if (getenv('HTTP_X_FORWARDED_FOR'))
        $ipaddress = getenv('HTTP_X_FORWARDED_FOR');
    else if (getenv('HTTP_X_FORWARDED'))
        $ipaddress = getenv('HTTP_X_FORWARDED');
    else if (getenv('HTTP_FORWARDED_FOR'))
        $ipaddress = getenv('HTTP_FORWARDED_FOR');
    else if (getenv('HTTP_FORWARDED'))
        $ipaddress = getenv('HTTP_FORWARDED');
    else if (getenv('REMOTE_ADDR'))
        $ipaddress = getenv('REMOTE_ADDR');
    else
        $ipaddress = 'UNKNOWN';
    return $ipaddress;
}

if (!isset($_POST['data'])) {
    exit(0);
} else {
    try {
        $client_time = intval($_POST['data']);
    } catch (Exception $e) {
        exit(0);
    }
}

if (isset($_SESSION['first_seen_time'])) {
    if ($client_time > $_SESSION['last_seen_time']) {
        $_SESSION['last_seen_time'] = $client_time;
    }
} else {
    $_SESSION['first_seen_time'] = $client_time;
    $_SESSION['last_seen_time'] = $client_time;
    $_SESSION['client_ip'] = get_client_ip();
}

if (isset($_SESSION['lifetime_ping_counter'])) {
    $_SESSION['lifetime_ping_counter']++;
} else {
    $_SESSION['lifetime_ping_counter'] = 1;
}

?>