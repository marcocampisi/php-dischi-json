<?php
    $data = file_get_contents('data.json');

    $discs = json_decode($data, true);

    header('Content-Type: application/json');

    echo json_encode($discs);
?>