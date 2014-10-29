<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<meta http-equiv='Content-type' content='text/html;charset=UTF-8'>

<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
<meta name="apple-mobile-web-app-capable" content="yes" />

<title>nuBuilder</title>

<link rel="apple-touch-icon" href="apple-touch-icon.png"/>

<link rel="stylesheet" href="jquery/jquery-ui.css" />
<script src="jquery/jquery-1.8.3.js" type='text/javascript'></script>
<script src="jquery/jquery-ui.js" type='text/javascript'></script>
<script src="ace/ace.js" type="text/javascript" charset="utf-8"></script>

<?php
require_once('nucommon.php');

jsinclude('nuformat.js');
jsinclude('nucalendar.js');
jsinclude('nucommon.js');
jsinclude('nueditform.js');
jsinclude('nubrowseform.js');

print $GLOBALS['nuSetup']->set_css;  //-- html header

$h = isset($_SESSION['home']) ? $_SESSION['home'] : '';
$t = isset($_SESSION['title']) ? $_SESSION['title'] : '';
$i = isset($_GET['i']) ? $_GET['i'] : '';
$u = isset($_GET['u']) ? $_GET['u'] : '';
$p = isset($_GET['p']) ? $_GET['p'] : '';
$k = isset($_GET['k']) ? $_GET['k'] : '';

$l  = nuGetLanguage();
$de = $GLOBALS['nuSetup']->set_denied;


print "

<style>
.nuSelected              {cursor:move;outline:2px solid red}
</style>

<script>

window.nuDenied     = '$de';
window.nuUsername   = '$u';
window.nuPassword   = '$p';
window.nuPrimaryKey = '$k';

$l

function nuGetID(){
	return '$i';
}

function nuGetHome(){
	return '$h';
}

function nuGetTitle(){
	return '$t';
}

function nuHomeWarning(){

	if(nuFORM.edited == '1'){
		return nuTranslate('Leave This Form Without Saving?')+'  '+nuTranslate('Doing this will return you to the login screen.');
	}
	return nuTranslate('Doing this will return you to the login screen.');
}

function nuWindowWarning(){

	if(nuFORM.edited == '1' && nuFORM.parent_form_id  != 'nurunreport' && nuFORM.parent_form_id  != 'nurunphp'){
		return nuTranslate('Leave This Form Without Saving?');
	}
    return null;
}

window.onbeforeunload = nuHomeWarning;

</script>

";

?>


<script>

window.nuShiftKey    = false;
window.nuControlKey  = false;
window.nuTimeout     = false;
window.nuMoveable    = false;

$(document).ready(function() {

	$('title').html(nuGetTitle());

	var i            = nuGetID();

	window.nuSession = new nuBuilderSession();

	if(i === ''){                                                            //-- Main Desktop

		if(window.nuUsername == '' && window.nuPassword == ''){
			toggleModalMode();
		}else{
			nuLogin(window.nuUsername, window.nuPassword, window.nuPrimaryKey);
		}

	}else{                                                                  //-- iFrame or new window
		var pSession  = nuGetParentSession();
		nuSession.setSessionID(pSession.nuSessionID);
		var w         = document.defaultView.parent.nuSession.getWindowInfo(i,pSession);

//-- added by sc 2014-01-24

		var alreadyDefined   = Array();

		for (var key in w){
			alreadyDefined.push(key);
		}

		for (var key in document.defaultView.parent.nuFORM){
			if(alreadyDefined.indexOf(key) == -1){
				w[key] = document.defaultView.parent.nuFORM[key];           //-- add values from parent values (so they can be used as hash variables)
			}
		}

//-- end added by sc

		nuBuildForm(w);                                                     //-- Edit or Browse

	}

});



</script>
</head>
<body onkeydown="nuKeyPressed(event, true);" onkeyup="nuKeyPressed(event, false);">
</body>
</html>
