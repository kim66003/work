<?php

  // $surveyJSON = file_get_contents("php://input");
  // $object = json_decode($surveyJSON);
  // var_dump($object);
  // echo $object->waarom_belangrijk;
  //
  // include_once 'database.php';
  // $conn = OpenCon();
  // echo "Connected Successfully. THANK GOD." . "<br>";
  //
  // $sql = "SELECT * from results;";
  // $result = mysqli_query($conn, $sql);
  // $resultCheck = mysqli_num_rows($result);
  //
  // if ($resultCheck > 0) {
  //   while($row = mysqli_fetch_assoc($result)) {
  //     echo $row['waarom_belangrijk'];
  //   }
  //   print_r ($object);

    // foreach($object as $item) {
    //    mysql_query("INSERT INTO `results` (diversiteit_belangrijk,waarom_belangrijk,waarom_niet_belangrijk,checkbox_stellingen,toelichting_stellingen,matrix1,radio1,matrix2,radio2,matrix3,radio3,matrix4,radio4,matrix5,radio5,matrix6,radio6,matrix7,radio7,matrix8,radio8,matrix9,radio9,matrix10,radio10,matrix11,radio11,matrix12,radio12,radio_postnl,comment_postnl,comment_postnl2,radio_motivatie_organisatie,comment_motivatie,checkbox_perspectieven) VALUES ('".$item['response']."','".$item['price']."','".$item['quantity']."')") or die(mysql_error());
    //
    //  }
  // }
  //
  //
  // CloseCon($conn);

?>

<?php

// function OpenCon()
// {
//   // $dsn = 'mysql:host=localhost;dbname=survey_diversity';
//   $dbServername = "localhost";
//   $dbUsername = "root";
//   $dbPassword = ")wYeG6!Hxxm}aTdm";
//   $dbName = "survey_diversity";
//
//   // Set DSN
//   $dsn = 'mysql:host=' . $dbServername . ';dbname=' . $dbName;
//
//   // Create a PDO instance
//   // $conn = new mysqli($dbServername, $dbUsername, $dbPassword, $dbName) or die("Connect failed: %s\n". $conn -> error);
//   $conn = new PDO($dsn, $dbUsername, $dbPassword);
//   $conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
//
//   // PDO query
//   $stmt = $conn->query('SELECT * FROM results');
//   while($row = $stmt->fetch()){
//     echo $row->waarom_belangrijk . '<br>';
//   }
//
//   // User Input
//   $divers = '1';
//
//   // Positional Params
//   $sql = 'SELECT * FROM results WHERE radio1 = ?';
//   $stmt = $conn->prepare($sql);
//   $stmt->execute([$divers]);
//   $results = $stmt->fetchAll();
//   // var_dump($results);
//   foreach($results as $result){
//     echo $result->toelichting_stellingen . '<br>';
//   }
//
//   $stmt = $conn->prepare('SELECT * FROM results WHERE radio1 = ?');
//   $stmt->execute([$divers]);
//   $postCount = $stmt->rowCount();
//
//   echo $postCount;
//
//   return $conn;
// }
//
// OpenCon();
//
// function CloseCon($conn)
// {
//   $conn = null;
// }

?>
