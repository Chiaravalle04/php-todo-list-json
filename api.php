<?php 

    $myFile = file_get_contents('data.json');

    $toDoListString = json_decode($myFile, true);

    $response = [
        'success' => true,
        'message' => 'Ok',
        'code' => 200,
        'list' => $toDoListString
    ];

    header('Content-Type: application/json');

    echo json_encode($response);

?>