<?php

  include_once 'database.php';
  $conn = OpenCon();
  echo "Connected Successfully." . "<br>";

  $surveyJSON = file_get_contents("php://input");
  $arr = json_decode($surveyJSON, true);
  var_dump($arr);

  $diversiteit_belangrijk = $arr['diversiteit_belangrijk'];
  $waarom_belangrijk = $arr['waarom_belangrijk'];
  $waarom_niet_belangrijk = $arr['waarom_niet_belangrijk'];
  $checkbox_stellingen = implode(',', $arr['checkbox_stellingen']);
  $toelichting_stellingen = $arr['toelichting_stellingen'];
  $matrix1 = $arr['matrix1'];
  print_r($matrix1);
  print_r(implode(',', $matrix1));
  $radio1 = $arr['radio1'];
  $radio2 = $arr['radio2'];
  $radio3 = $arr['radio3'];
  $radio4 = $arr['radio4'];
  $radio5 = $arr['radio5'];
  $radio6 = $arr['radio6'];
  $radio7 = $arr['radio7'];
  $radio8 = $arr['radio8'];
  $radio9 = $arr['radio9'];
  $radio10 = $arr['radio10'];
  $radio11 = $arr['radio11'];
  $radio12 = $arr['radio12'];
  $radio_postnl = $arr['radio_postnl'];
  $comment_postnl = $arr['comment_postnl'];
  $radio_motivatie_organisatie = $arr['radio_motivatie_organisatie'];
  $comment_motivatie = $arr['comment_motivatie'];
  $checkbox_perspectieven = implode(',', $arr['checkbox_perspectieven']);

  $sql = 'INSERT INTO results(diversiteit_belangrijk, waarom_belangrijk, waarom_niet_belangrijk, checkbox_stellingen, toelichting_stellingen, radio1, radio2, radio3, radio4, radio5, radio6, radio7, radio8, radio9, radio10, radio11, radio12, radio_postnl, comment_postnl, radio_motivatie_organisatie, comment_motivatie, checkbox_perspectieven, matrix1) VALUES(:diversiteit_belangrijk, :waarom_belangrijk, :waarom_niet_belangrijk, :checkbox_stellingen, :toelichting_stellingen, :radio1, :radio2, :radio3, :radio4, :radio5, :radio6, :radio7, :radio8, :radio9, :radio10, :radio11, :radio12, :radio_postnl, :comment_postnl, :radio_motivatie_organisatie, :comment_motivatie, :checkbox_perspectieven, :matrix1)';
  $stmt = $conn->prepare($sql);
  $stmt->execute(['diversiteit_belangrijk' => $diversiteit_belangrijk, 'waarom_belangrijk' => $waarom_belangrijk, 'waarom_niet_belangrijk' => $waarom_niet_belangrijk, 'checkbox_stellingen' => $checkbox_stellingen, 'toelichting_stellingen' => $toelichting_stellingen, 'radio1' => $radio1, 'radio2' => $radio2, 'radio3' => $radio3, 'radio4' => $radio4, 'radio5' => $radio5, 'radio6' => $radio6, 'radio7' => $radio7, 'radio8' => $radio8, 'radio9' => $radio9, 'radio10' => $radio10, 'radio11' => $radio11, 'radio12' => $radio12, 'radio_postnl' => $radio_postnl, 'comment_postnl' => $comment_postnl, 'radio_motivatie_organisatie' => $radio_motivatie_organisatie, 'comment_motivatie' => $comment_motivatie, 'checkbox_perspectieven' => $checkbox_perspectieven, 'matrix1' => $matrix1]);
  echo 'Post Added';

//   $arrValues = get_arr_vars($arr);
//   $arrayValues = array_values($arrValues);
//   $arrayKeys = array_keys($arrValues);
//   print_r($arrayValues);
//   print_r($arrayKeys);
//   $stringValues = implode(',', $arrayValues);
//   $stringKeys = implode(',', $arrayKeys);
//   print_r($string);
//   $placeholders = array();
//   for ($x = 0; $x <= sizeof($arrayKeys); $x++) {
//     array_push($placeholders,'?');
// }
//   print_r($placeholders);
//
//   function insertTest() {
//     $sql = 'INSERT INTO results($stringKeys) VALUES($stringKeys)';
//     $stmt = $conn->prepare($sql);
//     $stmt->execute($arrayValues);
//
// }



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
