<?php

date_default_timezone_set ('America/Toronto');

include 'config.php';

//$query_string = $_POST;
//$query_string = 'action=save&savestring=[Reese]: php test'; # I use this so that I can test the script in the dos commandline, I can see more errors this way
//query_string = 'action=getchat&apikey=12' # I use this so that I can test the script in the dos commandline, I can see more errors this way

//var_dump($query_string);
//echo 'hello from chat.php';

//echo $_REQUEST['action'];
$action = $_REQUEST['action'];

if(isset($_REQUEST['apikey']))
	$apikey = $_REQUEST['apikey'];
else
	die('i dead');

/*
if(isset($_REQUEST['chatstring']))
	$chatstring = $_REQUEST['chatstring'];
*/

//var_dump($action);



$db = mysqli_connect($host, $user, $password, $database);


if ($apikey!='bf44550db31d8f59b5da10e3a00a5072a481810b0dadfc6cfcc1f948b5f170f8')
	die('api error');


if ($action == 'save')
{
	$savestring = $_POST['savestring'];
	//echo 'i am saving';
	save_chatstring($db, $savestring);

	//echo 'i am reloading';
	load_chatlog($db);
}


//$action = $_POST['action'];
//$apikey = $_POST['apikey'];

if ($action == 'getchat')
{
	//$savestring = $_POST['savestring'];
	//echo 'loading chat';
	load_chatlog($db);

}

function save_quote($db, $chatstring)
{
	//2020-07-19 23:43:08
	$date = date("M d, h:ia");
	$sql = "INSERT INTO chatlog (chatstring, note, `date`) VALUE (\"This worked? - Mo\", '', \"$date\")";
	$result = mysqli_query ($db, $sql);
	echo $sql;
	//return $result;

}



function save_chatstring($db, $chatstring)
{
	//2020-07-19 23:43:08
	$date = date("M d, h:ia");
	$sql = "INSERT INTO chatlog (chatstring, note, `date`) VALUE (\"$chatstring\", '', \"$date\")";
	$result = mysqli_query ($db, $sql);
	echo $sql;
	//return $result;

}

function load_chatlog($db)
{

	$sql = "SELECT chatstring, ID, `date` FROM (SELECT chatstring, ID, `date` FROM chatlog ORDER BY id DESC LIMIT 100) sub ORDER BY id ASC";
	//$sql = "SELECT chatstring, ID, `date` FROM (SELECT chatstring, ID, `date` FROM chatlog ORDER BY id DESC LIMIT 100) sub ORDER BY id ASC";
	$result = mysqli_query ($db, $sql);
	//var_dump($result);

	while ($row[] = mysqli_fetch_assoc($result))
	{

	}
	array_pop($row);

	//var_dump($row);

	echo json_encode($row); // send back a json string -  - make sure all other echos are off for js receipt of info

	//myresult = mycursor.fetchall()
	#return (myresult)

	#date_time = now.strftime("%m/%d/%Y, %H:%M:%S")

	#myresult_json = myresult #json.dumps(myresult)
	//myresult_json = json.dumps(myresult)
	#print(type(myresult[1][2]))
	//print(myresult_json)
	#print(type(myresult))
	#print('end chatlog')
	#print(json.dumps(myresult))


	#for x in myresult:
	#  print(x)

	# send back the values in json
}
?>