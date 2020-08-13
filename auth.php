<?php

if(isset($_GET['pw'])){
	echo hash('sha256', $_GET['pw']);
	die();
}

$user = $_POST['user'];
$pass = $_POST['pass'];

$passwords = array(
	'reese' => 'f68f2afbe950538490b401c5020f5df92bc995883883f31147a9b65af411372f', 
	'mo' => '18885f27b5af9012df19e496460f9294d5ab76128824c6f993787004f6d9a7db',
	'neha' => '75b84fb03547de33760829aa26136d7056e69c33062bb4b433732ee67fa8c60e',
	'leandre' => 'c67cf26cad70fe785d4b5e55a4d689712365cae5f11fbb70ca9a260fd7cfe93f'
 );

 // to get the hash password to save in here go to:
 // localhost/chat/auth.php?pw=enteryourpasshere
 
/*
4e63df399ec4fc6cc006d3f318e87c86eefb97841d76a22ff3aebe85f05ca917 - kb
0ef8ebaaa14a93bf6bee4da2dbc728230d17d73917ff0a5c15c54582783492d6 - rm
d584e20dbe7ac9d3c09375a33a8448057d4fd07232053a65489e9feea072609b - cb
*/

//echo hash('sha256', $pass);

if(isset($passwords[$user]) && $passwords[$user] == hash('sha256', $pass))
{
	echo '{"apikey":"bf44550db31d8f59b5da10e3a00a5072a481810b0dadfc6cfcc1f948b5f170f8", "user":"'.$user.'"}';
}
else
{
	echo '{"apikey": "0", "user": "0"}';
}	


?>