<?php

    $myFile = file_get_contents('data.json');

    $toDoListString = json_decode($myFile, true);

    $newTask = [
        'task' => $_POST['addTask']['task'],
        'completed' => false
    ];

    $toDoListString[] = $newTask;

    json_encode($toDoListString);

    file_put_contents('data.json', json_encode($toDoListString));

    $response = [
        'success' => true,
        'message' => 'Ok',
        'code' => 200,
    ];

    header('Content-Type: application/json');

    echo json_encode($response);

?>