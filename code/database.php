<?php

function OpenCon()
{
  $dbServername = "localhost";
  $dbUsername = "root";
  $dbPassword = ")wYeG6!Hxxm}aTdm";
  $dbName = "survey_diversity";
  $charSet = "utf8mb4";
  $options = [
  PDO::ATTR_EMULATE_PREPARES   => false, // turn off emulation mode for "real" prepared statements
  PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION, //turn on errors in the form of exceptions
  PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC, //make the default fetch be an associative array
  ];

  // Set DSN
  $dsn = 'mysql:host=' . $dbServername . ';dbname=' . $dbName . ';charset=' . $charSet;

  // Create a PDO instance
  // $conn = new mysqli($dbServername, $dbUsername, $dbPassword, $dbName) or die("Connect failed: %s\n". $conn -> error);
  try {
    $conn = new PDO($dsn, $dbUsername, $dbPassword, $options);
    // $conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
  } catch (Exception $e) {
    error_log($e->getMessage());
    exit('Connection failed!');
  }


  return $conn;
}

function CloseCon($conn)
{
  $conn = null;
}

?>
