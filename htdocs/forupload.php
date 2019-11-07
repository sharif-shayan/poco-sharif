<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if (isset($_POST["uploadBtn"]) && $_POST["uploadBtn"] == "Upload") {
    if ($_FILES["file"] > 0) {
      echo "You have selected a file to upload";

      $fileName = $_FILES["uploadedFile"]["name"];
$fileNameCmps = explode(".", $fileName);
$fileExtension = strtolower(end($fileNameCmps));

$newFileName = md5(time() . $fileName) . '.' . $fileExtension;
  
      print('<pre>');
      print_r($_FILES["file"]);
      print('</pre>');
    }
  }

?>