<?php

$salt = '4324324j32k;4l2432';

if(isset($_GET['pw'])){
	$pw = $_GET['pw'];
	$salted_pw = $pw . $salt;
	echo hash('sha256', $salted_pw);
	die();
}

$user = $_POST['user'];
$pass = $_POST['pass'];
$salted_pass = $pass . $salt;

$passwords = array(
	'reese' => 'f082c4d1de716d08383a823d9857cfeb34ce13a56a5647afb18d6cf346ec3387', 
	'mo' => '6f4876a40f18b2b53e31d2ce9be8ec0eda6e4fccb190fe469ba3daf0a6ea2b99', 
	'neha' => '88bda16190768bbcad886c9dbefb9270d6ca7639376175d388856d7eaeaa9729', 
	'YIP' => '98f7dc92668cb0fe61e66a48b3ba772068505eceee29a7d7945b45bd0442a7ca'
	//'leandre' => 'c67cf26cad70fe785d4b5e55a4d689712365cae5f11fbb70ca9a260fd7cfe93f'
 );

//echo hash('sha256', $pass);

if(isset($passwords[$user]) && $passwords[$user] == hash('sha256', $salted_pass))
{
	echo '{"apikey":"bf44550db31d8f59b5da10e3a00a5072a481810b0dadfc6cfcc1f948b5f170f8", "user":"'.$user.'"}';
}
else
{
	echo '{"apikey": "0", "user": "0"}';
}	


?>