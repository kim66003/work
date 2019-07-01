<?php

  include_once 'database.php';
  $conn = OpenCon();
  echo "Connected Successfully." . "<br>";

  $surveyJSON = file_get_contents("php://input");
  $object = json_decode($surveyJSON);
  var_dump($object);
  $objectValues = get_object_vars($object);
  $arrayValues = array_values($objectValues);
  $arrayKeys = array_keys($objectValues);
  print_r($arrayValues);
  print_r($arrayKeys);
  $stringValues = implode(',', $arrayValues);
  $stringKeys = implode(',', $arrayKeys);
  print_r($string);
  $placeholders = array();
  for ($x = 0; $x <= sizeof($arrayKeys); $x++) {
    array_push($placeholders,'?');
}
  print_r($placeholders);

  function insertTest() {
    $sql = 'INSERT INTO results($stringKeys) VALUES($stringKeys)';
    $stmt = $conn->prepare($sql);
    $stmt->execute($arrayValues);

}



  // INSERT DATA
  // $title = 'Post Five';
  // $body = 'This is post five';
  // $author = 'Kevin';
  // $sql = 'INSERT INTO posts(title, body, author) VALUES(:title, :body, :author)';
  // $stmt = $pdo->prepare($sql);
  // $stmt->execute(['title' => $title, 'body' => $body, 'author' => $author]);
  // echo 'Post Added';

  CloseCon($conn);

?>
