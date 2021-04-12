<?php
  session_start();
  $dsn = 'mysql:host=localhost; dbname=FinalProject';

  try{
    $conn = new PDO($dsn, "root", "");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if(isset($_POST["submitBtn"])){
      $date = $_COOKIE["day"];
      $movie = $_COOKIE["movie"];
      $time = $_COOKIE["time"];
      $selectedSeats = $_COOKIE["selectedSeats"];

      $firstName = $_POST["firstName"];
      $lastName = $_POST["lastName"];

      $conn->query("INSERT INTO people(FirstName,LastName,Date,Movie,Time,SelectedSeats) VALUES('$firstName','$lastName','$date','$movie','$time','$selectedSeats')");
      echo "You're All Set!";
    }
  }catch(PDOException $e){
    echo $e;
  }

?>