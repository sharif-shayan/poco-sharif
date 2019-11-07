<?php include "header.php" ?>
<?php
define(NAME,"Sharif");

echo "Hallo, this my first php page <br>";
$text = "<br> this is my text";
$new_text = "this my new text";

$str = "10";
$int = 20;
$sum = $str + $int;
echo "sum of str and int is: " . $sum;

function getName(){
    echo $name;
}
getName();

$woman = array(
    "name" => "Susanne",
    "age" => 38, 
    "country" => "Germany"
  );
  echo " <br> my name is: " . $woman["name"];
//server pass: caQqPPcVoGc  
?>
<?php echo $text . "<br>"; ?>
<?php echo $text . "<br>" . $new_text; ?>
<?php echo "<br>" . NAME; ?>
<?php echo "$text waw i mix variables and strings. $new_text";?>



