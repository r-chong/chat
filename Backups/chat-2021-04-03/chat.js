
		/////////////////////////////
		//cookies
		/////////////////////////////
		
		function setCookie(cname, cvalue, exdays) { //sets the cookie name, the cookie itself, and the days until expiry
		  var d = new Date(); //makes new date function
		  d.setTime(d.getTime() + (exdays*24*60*60*1000));
		  var expires = "expires="+ d.toUTCString();
		  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
		}
		
		function getCookie(cname) {
		  var name = cname + "="; //adds the equals symbol because you cant put that in brackets
		  var decodedCookie = decodeURIComponent(document.cookie); //decodes it or something
		  var ca = decodedCookie.split(';'); //splits all cookies (divided by the semicolons)
		  for(var i = 0; i <ca.length; i++) { //repeats as many cookies as there are
			var c = ca[i]; //sets ca to c
			while (c.charAt(0) == ' ') {
			  c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {//if cookie is found 
			  return c.substring(name.length, c.length);//return value of that cookie
			}
		  }
		  return ""; //else return nothing
		}
		
		/////////////////////////////
		//opentab
		/////////////////////////////

			function openTab2()
			{
				console.log('opentab2');
				console.log(this.document.activeElement);
				var el = this.document.activeElement;
				var tabname = el.id;
				

				//declare all variables 
				var tabindex, tabcontent, tablinks;
				
				//finds all tabcontent 
				tabcontent = document.getElementsByClassName("tabcontent");
				//console.log('tabcontent');

				for (tabindex = 0; tabindex < tabcontent.length; tabindex++) {
					tabcontent[tabindex].style.display = "none"; // making it so the tabcontent is not displayed
				}
				
				clearActiveTablinks();
				
				
				// display the tabcontent that is selected
				//document.getElementById(tabname).style.display = "block";  // not sure why this is here... this is what is throwing off the tabs when clicked
				tabcontent[0].style.display = "block";
				//console.log(evt);
				el.className += " active";
				
				document.getElementById(tabname+"Content").style.display = "block"; // I added ids of tabname+"Content" to each tab content to get them to be callable with their tabname
			}   
			
			function clearActiveTablinks()
			{
				// clear active from the tablinks
				tablinks = document.getElementsByClassName("tablinks");
				//console.log('tablinks');
				//console.log(tablinks);
				
				for (tabindex = 0; tabindex < tablinks.length; tabindex++) {
					console.log(tablinks[tabindex].className);
					//tablinks[tabindex].classList.remove("active"); // alternative command
					//console.log('here');
					//console.log(tablinks[tabindex].className.replace("active", ""));
					tablinks[tabindex].className = tablinks[tabindex].className.replace(" active", "");  // this one needs to be assigned back to the element
					
					//tablinks[tabindex].className = "";
				}			
			}
			
			/*
			function getTabIndex(tabName)
			{
				document.getElementBy
			}
			*/
			
			//this part messed it up for some reason
		////to here
		//var ui_chat = document.getElementById("Chat");
		//
		//ui_chat.onclick = function(){
		//	//test();
		//	console.log(ui_chat);
		//	openTab(ui_chat, ui_chat.value);
		//
		//};
		
		/////////////////////////////
		//details
		/////////////////////////////
		
		var toggle = true;
			function details_toggle() {
				console.log(toggle)
				var element = document.getElementsByClassName("details");
				//console.log(object);
				if (toggle == false) { //if it is off, turn on --> remove hide
					//console.log(element);
					toggle = true
					
					// Iterate through the retrieved elements and remove hidden
					for(var i = 0; i < element.length; i++)
					{
						element[i].classList.remove('hidden');
						console.log(element[i].className);
					}
				} else { //if on, turn off --> add hide
					toggle = false
					console.log("nay");
					
					// Iterate through the retrieved elements and add hidden
					for(var i = 0; i < element.length; i++)
					{
						element[i].classList.add('hidden');
						console.log(element[i].className);
					}
				}
			}
		
			function READ_details_toggle() {
				var element = document.getElementsByClassName("details");
				if (toggle == false) { //check if details off, hide details
					for(var i = 0; i < element.length; i++)
					{
						element[i].classList.add('hidden');
						console.log(element[i].className);
					}
				} else { //if details off, show details
					for(var i = 0; i < element.length; i++)
					{
						element[i].classList.remove('hidden');
						console.log(element[i].className);
					}
				}
			}
			
			function passwordVisibility() {
				var x = document.getElementById("loginPass");
				if (x.type == "text") {
				  x.type = "password";
				  //$("#password_container_text").text("hide");
				} else {
				  x.type = "text";
				  //$("#password_container_text").text("show");
				}
			}
		/////////////////////////////
		//misc
		/////////////////////////////
		
		function scrollBottom() {	
				var objDiv = document.getElementById("log_cont");
					objDiv.scrollTop = objDiv.scrollHeight;
			};
		
		function getEmoji(y) {
			var x = document.getElementById("textbox");
			console.log(y.value);
			x.value += y.name;
			window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');	
		}
		
		/////////////////////////////
		//window.onload
		/////////////////////////////
		
		window.onload = function(){
		
		
		console.log('load');
		
		//run functions on startup
		console.log(toggle);
		READ_details_toggle();
		scrollBottom();
		//$(document).ready(function(){
			
			
			/*
			 $("#mainpg #log").html(function(_, html){
				return html.replace(/(\#\w+)/g, '<span class="hashtag">$1</span>');   
			 });
			*/
			
			function hashtag(){
				console.log('test123');
				
				//var tempray = $("#mainpg #log").html();
			
				//console.log(tempray);				
				
				 $("#mainpg #log").html(function(_, html){
				return html.replace(/(\#\w+)/g, "<span class=\"hashtag\">$1</span>");  
				});
			 };
			
			function findlinks(){
			console.log('test345');
			//OLD var regex = /(?:(?:https?|ftp):\/\/|\b(?:[a-z\d]+\.))(?:(?:[^\s()<>]+|\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))?\))+(?:\((?:[^\s()<>]+|(?:\(?:[^\s()<>]+\)))?\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))?/ig
			var hrefURL = ''
			
			//var tempray = $("#mainpg #log").html();
			//console.log(tempray);				
			
			 $("#mainpg #log").html(function(_, html){
				 
				 // "<a class=\"txtlink\" href=\"\">$1</a>"
			

				//return html.replace(/(http)(s)/ig, "success: $1 $2");    // this works - first match, then second match
				
				//return html.replace(/((?:(?:https?|ftp):\/\/|\b(?:[a-z\d]+\.))(?:(?:[^\s()<>]+|\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))?\))+(?:\((?:[^\s()<>]+|(?:\(?:[^\s()<>]+\)))?\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’])))?/ig, "<a href=\"$1\">test</a>");   
				//return html.replace(/((?:(?:https?|ftp):\/\/|\b(?:[a-z\d]+\.))(?:(?:[^\s()<>]+|\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))?\))+(?:\((?:[^\s()<>]+|(?:\(?:[^\s()<>]+\)))?\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’])))?/ig, "test");   
				return html.replace(/(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=])*)/ig, "<a class=\"link\" target=\"_blank\" href=\"$1\">$1</a>");  // i used a different regex - and use the $1 in the quotes
			});
		 };
		
		//function findlinks2 () {
		//	const linkRx = /<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1/;
		//	
		//	$("#mainpg #log").html(function(_, html){
		//	return html.replace(linkRx);   
		//}	
			
			
		 //});		
		
		/////////////////////////////////////////////////////////////////////////
	
		document.getElementById("SectionsContent").style.display = "none";
		document.getElementById("OtherContent").style.display = "none";
	
		////////////////////////////
		//main js
		////////////////////////////
		
		function test()
		{
			console.log('test');
		}
	
		var ui_logout = document.getElementById("logout");
		var ui_login = document.getElementById("login");
		var ui_container = document.getElementById("container");
		var ui_loginSubmit = document.getElementById("loginSubmit");
		
		// if logged_in cookie not set - show log in screen
		var logincookie = getCookie("logged_in");
		check_auth(logincookie);
		
		
		setInterval(function() {
			if(logincookie !=0)
			{
				getChatFromDB();
			}
		}, 60 * 1000); // 60 * 1000 milsec
		
		function login_setup(){
			console.log('you are logged in');
			//document.getElementById('container').className = '';
			ui_container.classList.remove("hide");
			
			document.getElementById('login').classList.add("hide");
			document.getElementById('logout').classList.remove("hide");		
		}
		
		function logout(){
			ui_logout.classList.add("hide");
			ui_login.classList.remove("hide");
			ui_container.classList.add("hide");
			document.cookie = "logged_in=0";
		}
		
		function check_auth(apikey){
			console.log('check_auth');
			//var logged_in = getCookie("logged_in");
			var logged_in = apikey;
			//console.log(logged_in);
			//return;
			
			if(logged_in !='bf44550db31d8f59b5da10e3a00a5072a481810b0dadfc6cfcc1f948b5f170f8') // not logged in
			{
				console.log('you are not logged in');
				//alert("incorrect password"); //error msg?
				// show login page
			
				//ui_container.classList.remove('hide');
				ui_container.classList.add('hide');
			}
			else // logged in
			{
				login_setup();

				getChatFromDB();
				
			}
		}
		
		
		ui_loginSubmit.onclick = function(){
			console.log('you clicked submit');
			
			var user = document.getElementById("loginUser").value;
			var pass = document.getElementById("loginPass").value;
			
			//console.log(pass);
			
			getAuth(user, pass);
			
			//pauseMe();

			//check_auth(logincookie);
			
			
			
		};
		
		 ui_login.addEventListener("keyup", function(event) {
		  if (event.keyCode === 13) {
			console.log('you pressed enter')
		   
		    var user = document.getElementById("loginUser").value;
			var pass = document.getElementById("loginPass").value;
			
			console.log(pass);
			
			getAuth(user, pass);
		  }
		});
		
			async function pauseMe() {
			  await sleep(2000);
			  console.log('MS since start:', Date.now() - start);
			}		
		
		////////////////////////////////////
		// CHAT AREA
		////////////////////////////////////
		
		// when the submit button is hit
		document.getElementById("submit").onclick = function(){
			sendString();
			getChatFromDB();
		}
		
		// when enter is pressed
		var textbox = document.getElementById("textbox");
		
		
		textbox.addEventListener("keyup", function(event) {
		  if (event.keyCode === 13) {
		   event.preventDefault();
		   sendString();
		   //document.getElementById("myBtn").click();
		  }
		});
		
		
		// Logout
		ui_logout.onclick = function(){
			logout();		
		};
		
		function enlargeReload() {
			//document.getElementById("reload").width = "110%";
			var el = document.getElementById("reload");
			console.log(el);
			//el.style.width="12%";
			//el.style.height="7.5%";
			el.style.backgroundColor = "#c2f5ff";
		}
		
//reload		// reload chat
		document.getElementById("reload").onclick = function(){		
			console.log('reload clicked');
			getChatFromDB();
		};
		
		document.getElementById("reload").onmousedown = function() { 
			enlargeReload();	
		} 
		
		document.getElementById("reload").onmouseup = function() {
			document.getElementById("reload").style.backgroundColor = "initial";
		}
		
		document.getElementById("reload").onmouseleave = function () {
			document.getElementById("reload").style.backgroundColor = "initial";
		}
		
		function sendString(){	
			console.log('sendstring');
		
			var textbox = document.getElementById("textbox");  // this references the textbox OBJECT
			var dirty = textbox.value;
			var clean = DOMPurify.sanitize(dirty, {FORBID_TAGS: ['style','img']}); //clean that yucky stuff
			clean = clean.replace(/\+/g,'%2b');
			clean = clean.replace(/\"/g,'\\"');
			clean = clean.replace(/\&/g,'%26');
			clean = clean.replace(/\:-/g,'\−');
			//Custom Emojis
			clean = clean.replace(":dogeputin:","<img src='Assets/dogeputinMicro.png' class='customEmoji'>")
			clean = clean.replace(":dogeputinXL:","<img src='Assets/dogeputinMedium.png'")
			clean = clean.replace(":dogedance:","<img src='Assets/dogedance.gif'")
			clean = clean.replace(":lmao:","<img src='Assets/lmao.png' class='customEmoji'")
			clean = clean.replace(":thonk:","<img src='Assets/thooonk.png' class='customEmoji'")
			clean = clean.replace(":wgat:","<img src='Assets/wat.ico' class='customEmoji'")
			clean = clean.replace(":bigoof:","<img src='Assets/bigoof.png' class='customEmoji'")
			clean = clean.replace(":elonlol:","<img src='Assets/elonloltransparent.png' class='customEmoji'")
			clean = clean.replace(":yee:","<img src='Assets/yee.jpg' class='customEmoji'")
			
			var savestring = clean;
			//var savestring = DOMPurify.sanitize(dirty, {FORBID_TAGS: ['style']}); //clean that yucky stuff
			
			//console.log(savestring);
			if(savestring!="")
				{
				var username = getCookie("user");
				// the updated save string [user] + savestring
				
				savestring = "["+username+"]: " + savestring; 			
				
				// save the chat string
				saveToDB(savestring, getChatFromDB);
				

				// get saved chat to enter into thelog
				// returned_log 
				//getChatFromDB();
				
				
				// update the chat log
				//var thelog = document.getElementById("log");
				
				//console.log('the log 54')
				//console.log(thelog);
				//alert(thelog);
				//console.log(thelog.value);
				

				//console.log(thelog);
				
				// set the textbox to empty
				textbox.value = "";	
				}
			scrollBottom();
		}
			
		function saveToDB(savestring, onSuccess) {
		  var xhttp = new XMLHttpRequest();
		  
		  // run this when the readstate changes
		  xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
			  //document.getElementById("demo").innerHTML = this.responseText;
			  //console.log(this.responseText);
			  onSuccess();
			}
		  };
		  
		  var apikey = getCookie("logged_in");
		  var poststring = "action=save&savestring=" + savestring + "&apikey=" + apikey;
		  console.log(poststring);
		  xhttp.open("POST", "chat.php", true);
		  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); // php seems to need this
		  xhttp.send(poststring);
		  console.log('saved to db');
		  
		  
		}			
			

		 
		function getChatFromDB() {
		
		  var xhttp = new XMLHttpRequest();
		  
		  // run this when the readstate changes
		  xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
			  //document.getElementById("log").innerHTML = this.responseText; // this.responseText should be from python
			  //console.log(this.responseText);
			  var responses = JSON.parse(this.responseText);
			  console.log('js responses: ');
			  console.log(responses);
			  //console.log(typeof(responses));
			  //console.log(responses[0][0]);
			  //responses.forEach()
			  
			  var formatted_chatlog = '';
			  var compiled_chatlog = '';
			  var mentions = '';
			  var You = document.getElementById("loginUser").value;
			  //var mentionRegex = /\@/g;
			  
			  for(i=0; i<responses.length; i++)
			  {
				//console.log(responses[i]["ID"]);
				formatted_chatlog = formatted_chatlog + "<div class=\"chatline\">" + "<span class=\"details\">" + responses[i]["date"] + "</span>" + " " + responses[i]["chatstring"] + "</div>" //\n";
				compiled_chatlog = formatted_chatlog;
			//	mentions = compiled_chatlog.search(mentionRegex+You);
			//	console.log(mentions);
			//	if (mentions > 0) {
			//		mentions.classList.add("mention");
			//	}
			//	
			  }
			  
			  var ui_log = document.getElementById("log");
			  ui_log.innerHTML = formatted_chatlog; // this.responseText should be from python
			  
			  ui_log.scrollTop = ui_log.scrollHeight; // this allows for the scrolling to the bottom of the textarea
			  
			  hashtag();
			  findlinks();
			  
			  READ_details_toggle();
			  scrollBottom();
			}
		  };
		  
		  //console.log(getCookie("logged_in"));
		  var poststring = "action=getchat&apikey=" + getCookie("logged_in");
		  //console.log(poststring);
		  xhttp.open("POST", "chat.php", true);
		  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); // php seems to need this
		  xhttp.send(poststring);
		}	
			
		function getAuth(user, pass) {
			console.log('getAuth');
		
		  var xhttp = new XMLHttpRequest();
		  
		  // run this when the readstate changes
		  xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
			
				// what to do if this request works
				
			  //console.log(this.responseText);
			  var responses = JSON.parse(this.responseText); //  use if response is json
			  //var responses = this.responseText;
			  
			  //console.log('js responses: ');
			  //console.log(responses);
			  //console.log(typeof(responses));
			  //console.log(responses[0][0]);
			  //responses.forEach()
			  
			// set cookie
			document.cookie = 'logged_in=' + responses.apikey;
			document.cookie = 'user=' + responses.user;
			//console.log(document.cookie);
			
			//document.cookie = "expires=Thu, 01 Jan 1970 00:00:00 UTC;";
			
			//console.log(document.cookie);
			
			var logged_in = getCookie("logged_in");
			check_auth(responses.apikey);
			
			// change hide settings
			
			// load chat
			
			
			// to streamline, make this into a callable function
			  
			}
		
		  };
		  
		  var poststring = "user=" + user + "&pass=" + pass;
		  console.log(poststring);
		  xhttp.open("POST", "auth.php", true);
		  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); // php seems to need this
		  xhttp.send(poststring);
		 
		}	
		
		// if any radio buttons are pressed
		document.getElementById("modeDefault").addEventListener("change", set_mode);
		document.getElementById("modeDark").addEventListener("change", set_mode);
		document.getElementById("modeMo").addEventListener("change", set_mode);
		
		// find which one is pressed/active
		
		function tell_me_the_mode() { 
		
            var ele = document.getElementsByName('mode'); 
              
            for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked) 
				{
					var mode = ele[i].id;

				}
            } 
			
			return mode;
			//console.log(mode);
        } 
		
		// set the body class to the appropriate mode

		//let previousMode = ["body",];
		var previousMode2 = "body";
		
		function setPreferredMode() {
			var currentMode = tell_me_the_mode();
			console.log("below is active element");
			console.log(currentMode);
			setCookie("mode",currentMode,365) //sets cookie
		}
		
		function checkPreferredMode() {
			var preferredMode = getCookie("mode")//finds mode
			console.log(preferredMode);
			
			if (preferredMode != "") { //if not empty
				//alert("your preferred mode is "+preferredMode);
				//console.log("here");
				//console.log(preferredMode);
				document.getElementById(preferredMode).checked = true;//set mode to preferredMode
			}else{
				//alert("no cookie found");
				setCookie("mode","body",365)
				//set mode to body
			}
		}
		
		function set_mode()
		{	
			console.log("previousMode2 below");
			console.log(previousMode2);
			
			var mode = tell_me_the_mode();
			
			if(mode=="modeDark")
			{
				var modeClass = "dark";
			}
			
			if(mode=="modeMo")
			{
				var modeClass = "mo";
			}

			if(mode=="modeDefault")
			{
				var modeClass = "body";
			}			
			
			setPreferredMode();
			//list of stuff to change mode VVVV
			var ele = [
			"body",
			"log",
			"Sections",
			"Chat",
			"Other",
			"textbox",
			"submit",
			"vHist",
			"logout",
			];
		
			var eleLength = ele.length
			//console.log(eleLength);
			
			//remove class name from body
//////////////////////////////////////////////////////////////////////////////
			//var eleBody = document.getElementById(ele);
			
			//ele.className = '';
			//eleLog.className = '';
						
			var loopClassName;
			
			for (loopClassName = 0; loopClassName < eleLength; loopClassName++) {  //adding mode to ele array
			  //ele[loopClassName].className = '';
			  var eleClass = document.getElementById(ele[loopClassName]);
			  //console.log(typeof(eleClass));
			  
			  //var currentIndex = previousMode[];
			  //console.log(currentIndex);
			  var modeClassReplaced = eleClass.classList.remove(previousMode2);
			  //eleClass.className = modeClassReplaced;
			  
			  //eleClass.className = 'tablinks ';
			  eleClass.classList.add(modeClass);
			  
			  //console.log(eleClass.classList);
			}
			previousMode2 = modeClass;
			//add class name to body
			
			//eleBody.classList.add(modeClass);
			//eleLog.classList.add(modeClass);
			
			//var loopClassList;
			
			/*
			for (loopClassList = 0; loopClassList < 6; loopClassList++) {
			  //ele[loopClassList].classList.add(modeClass);
			  document.getElementById(ele[loopClassList]).add(modeClass);
			}
			*/
			
			//console.log(mode);
			//document.getElementById.
			
			
		}
			
		checkPreferredMode();
		set_mode();
		
		function testApi()
		{
		var xhttp = new XMLHttpRequest();
		
		// run this when the readstate changes
		  xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
			  //document.getElementById("demo").innerHTML = this.responseText;
			  //console.log('api response: ');
			  //console.log(this.responseText);
			  //onSuccess();
			}
		  };
		  
		  var poststring = "action=save&savestring=" + 'this is a test' + '&apikey=12';
		  xhttp.open("POST", "chat.php", true); // post
		  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); // php seems to need this
		  xhttp.send(poststring); // post
		  
		  /*
		  xhttp.open("GET", "chat.php?action=test", true);
		  xhttp.send();
		  console.log('saved to db');
		  */
		}	
		
	}

