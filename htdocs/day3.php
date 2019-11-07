<?php

session_start();

$_SESSION['user']['fname'] = "Susanne";
$_SESSION['user']['lang'] = "de";
$_SESSION['loggedIn'] = "true";

setcookie("user", $_SESSION['user']['fname'], time() + (86400 * 30), '/');

$mySalary = 4000;
$myTaxes = 3000;

print("<pre>");
print($_REQUEST);
print("</pre>");

$lang =$_GET["lang"];
$text = " ";
switch($lang){
    case "en":
    default:
    $text = "this is my english text";
    break;
    case "de":
    $text = "this is my germen text";
    break;
    case "lt":
    $text = "this is my latin text";
    break;
}
foreach($_POST as $key => $value){
    echo $key.": ".$value."<br>";
}
calculateRest();
echo($rest);

function calculateRest(){
   /* global $myTaxes;
    global $myTaxes;
    $rest = $mySalary - $myTaxes;*/
    $GLOBALS["rest"] = $GLOBALS["mySalary"] - $GLOBALS["myTaxes"];//this line is insted of 3 abov line
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTML form</title>
</head>
<body>
<nav>
    <ul>
        <li><a href="?lang=en"></a>english</li>
        <li><a href="?lang=de"></a>germen</li>
        <li><a href="?lang=lt"></a>latin</li>
    </ul>
</nav>

<form action="forupload.php" method="post"
    enctype="multipart/form-data">
      <label for="file">Forupload:
      <input type="file" name="file" id="file">
      <br />
      <input type="submit" name="uploadBtn" value="Upload">
    </form>

<p>
    <?php
    echo $text;
    ?>
</p>
<form method="post">
  <label for="user">Username: </label>
  <input type="text" name="user" id="user"><br>
  <label for="pwd">Password: </label>
  <input type="password" name="pwd" id="pwd"><br>
  <input type="submit" name="submit" value="Login">
</form>
</body>
</html>