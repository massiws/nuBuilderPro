<?php

require_once('nucommon.php'); 

$uploaddir      = sys_get_temp_dir();
$dq             = '"';
$J              = array();
nuDebug(print_r($_FILES ,1));
foreach ($_FILES as $key){                          //-- loop through uploaded files

	$uploadfile = $uploaddir .'/'. basename($key['name']);

	if(move_uploaded_file($key['tmp_name'], $uploadfile)){
	   $status = "File uploaded ready for saving..\n";
	}else{
	   $status = "Upload failed";
	}

	$name      = $key['name'];
	$type      = $key['type'];
	$error     = $key['error'];
	$size      = $key['size'];

	$J[]       = "{ |name| : |$name|,  |type| : |$type|,  |error| : |$error|,  |size| : |$size| }" ;

}

$JSON          = '[ ' . implode(', ', str_replace('|', '"', $J)) . ' ]';


$scr           = "

<script>

function nuloadstats(){

	parent.nuSetHash('FILES' , '$JSON');
	parent.nuSetEdited();
	
}

</script>

<html><body onload='nuloadstats()'>$status</body></html>

";

print $scr;

?> 
