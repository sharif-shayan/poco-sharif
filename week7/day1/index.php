<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>my first php page</title>
</head>
<body>
<?php
define(NAME,"Sharif");
//echo "Hallo, this my first php page";
$text = "this is my text";
$new_text = "this my new text";

$str = "10";
$int = 20;
$sum = $str + $int;
echo $sum;



function getName(){
    echo $name;
}
getName();



$woman = array(
    "name" => "Susanne",
    "age" => 38, 
    "country" => "Germany"
  );
  echo $woman["name"];
  
?>  

<p><?php echo $text; ?></p>
<p><?php echo $text . "" . $new_text; ?></p>
<p><?php echo NAME; ?></p>
<p><?php echo "$text waw i mix variables and strings. $new_text"; ?></p>


</body>
</html>

