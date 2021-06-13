//Variables
//Login Page
var uiPassVisiblityEye = document.getElementById('password_visiblity');
var uiLoginContainer = document.getElementById('loginContainer');
var uiLoginButton = document.getElementById('loginSubmit');
var uiLoginUserField = document.getElementById('loginUser');
var uiLoginPassField = document.getElementById('loginPass');
//Tabs(Settings, Resources, Chat)
var uiMainContainer = document.getElementById('container');
var uiChatLog = document.getElementById('chatLog');
var uiChatTextbox = document.getElementById('chatTextbox');
var uiChatReload = document.getElementById('reload');
var uiChatSubmit = document.getElementById('chatSubmit');
var uiLogout = document.getElementById('logout');
var uiChatFlush = document.getElementById('chatFlush');
/////////////////////////
//Data's (such as stickers/emoji arrays, etc)
var emojiData = [
  ['Rolling on Floor Laughing', '&#129315;'],
  ['Sunglasses, developed by Mo', '&#128526;'],
  ['Loudly crying', '&#128557;'],
  ['Shocked', '&#128561;'],
  ['Unamused', '&#128530;'],
  ['Smirking', '&#128527;'],
  ["Sleeping, RIP Mo's sleep", '&#128564;'],
  ['Mad', '&#128548;'],
  ['Madder', '&#128544;'],
  ['MADDEST', '&#128545;'],
  ['MAD AS AHEN QUOTE', '&#129324;'],
  ['The YIP have arrived.', '&#129488;'],
  ['BRUV, AHEN QUOTE.', '&#129318;'],
  ['The YIP have arrived, again.', '&#128373;'],
  ['Thumbs up, developed by Mo', '&#128077;'],
  ['NOICE', '&#128076;'],
  ["Hello! Bye! I'm waving.", '&#128075;'],
  ['Eyes, the YIP is watching you..', '&#128064;'],
  ['One + ninety-nine = hundred', '&#128175;'],
  ['Fire Nation', '&#128293;'],
  ['Earth Nation (no offense, we love Earth)', '&#128169;'],
  ['Water Nation', '&#127754;'],
  ['Air Nation', '&#9992;'],
  ['BIG BRAIN', '&#129504;'],
  ['Helpless...', '👁️&#128068👁️'],
];

//Example Sticker Array (WIP for UGCW 3.30 or smth)
var stickerData = [
  ['stickerChatName', 'stickerName', 'stickerFilename', 'stickerTitle'],
  [
    ':dogeputin:',
    'Miny Doge',
    'doge1',
    "<img src='Assets/dogeputinMicro.png' class='customEmoji'>",
  ],
  [
    ':dogeputinXL',
    'Much Big Doge',
    'doge2',
    "<img src='Assets/dogeputinMedium.png' class='customEmoji'>",
  ],
];
/////////////////////////////
//cookies
/////////////////////////////

function setCookie(cname, cvalue, exdays) {
  //sets the cookie name, the cookie itself, and the days until expiry
  var d = new Date(); //makes new date function
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();
  document.cookie =
    cname + '=' + cvalue + ';' + expires + ';path=/;SameSite=Strict';
  //samesite is needed for firefox compatibilty
  ///document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + '='; //adds the equals symbol because you cant put that in brackets
  var decodedCookie = decodeURIComponent(document.cookie); //decodes it or something
  var ca = decodedCookie.split(';'); //splits all cookies (divided by the semicolons)
  for (let i = 0; i < ca.length; i++) {
    //repeats as many cookies as there are
    var c = ca[i]; //sets ca to c
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      //if cookie is found
      return c.substring(name.length, c.length); //return value of that cookie
    }
  }
  return ''; //else return nothing
}

/////////////////////////////
//opentab
/////////////////////////////

function openTab() {
  ////console.log("opentab");
  ////console.log(this.document.activeElement);
  var el = this.document.activeElement;
  var tabname = el.id;

  //declare all variables
  //is tab_button even needed?
  var tabindex, tabcontent, tab_button;

  //finds all tabcontent
  tabcontent = document.getElementsByClassName('tabcontent');
  ////console.log('tabcontent');

  for (tabindex = 0; tabindex < tabcontent.length; tabindex++) {
    tabcontent[tabindex].style.display = 'none'; // making it so the tabcontent is not displayed
  }

  clearActiveTabs();

  // display the tabcontent that is selected
  //document.getElementById(tabname).style.display = "block";  // not sure why this is here... this is what is throwing off the tabs when clicked
  tabcontent[0].style.display = 'block';
  ////console.log(evt);
  el.className += ' active';
  el.className += ' pattern__stripes-1';

  document.getElementById(tabname + 'Content').style.display = 'block'; // I added ids of tabname+"Content" to each tab content to get them to be callable with their tabname
  if (tabname == 'Chat') {
    document.getElementById('titleMNCW').innerHTML = 'Genius Chat';
    uiChatTextbox.focus();
  }
  if (tabname == 'Sections') {
    document.getElementById('titleMNCW').innerHTML = 'Resources';
  }
  if (tabname == 'Other') {
    document.getElementById('titleMNCW').innerHTML = 'Settings';
  }
  if (tabname == 'Spirit') {
    document.getElementById('titleMNCW').innerHTML = 'Spirit World';
  }
}

function clearActiveTabs() {
  // clear active from the tablinks
  tab_button = document.getElementsByClassName('nav__sidebar-content');
  ////console.log('tablinks');
  ////console.log(tablinks);

  for (tabindex = 0; tabindex < tab_button.length; tabindex++) {
    //console.log(tab_button[tabindex].className);
    //tablinks[tabindex].classList.remove("active"); // alternative command
    ////console.log('here');
    ////console.log(tablinks[tabindex].className.replace("active", ""));
    tab_button[tabindex].className = tab_button[tabindex].className.replace(
      ' active',
      ''
    ); // this one needs to be assigned back to the element
    tab_button[tabindex].className = tab_button[tabindex].className.replace(
      ' pattern__stripes-1',
      ''
    ); // this one needs to be assigned back to the element

    //tablinks[tabindex].className = "";
  }
}

/*
function getTabIndex(tabName){document.getElementBy}
this part messed it up for some reason
var ui_chat = document.getElementById("Chat");
ui_chat.onclick = function(){
//	//console.log(ui_chat);
openTab(ui_chat, ui_chat.value);
};
*/

/////////////////////////////
//details
/////////////////////////////

var toggle = true;
function details_toggle() {
  //console.log(toggle);
  var element = document.getElementsByClassName('details');
  ////console.log(object);
  if (toggle == false) {
    //if it is off, turn on --> remove hide
    ////console.log(element);
    toggle = true;
    // Iterate through the retrieved elements and remove hidden
    for (let i = 0; i < element.length; i++) {
      element[i].classList.remove('hidden');
      //console.log(element[i].className);
    }
  } else {
    //if on, turn off --> add hide
    toggle = false;
    //console.log("nay");

    // Iterate through the retrieved elements and add hidden
    for (let i = 0; i < element.length; i++) {
      element[i].classList.add('hidden');
      //console.log(element[i].className);
    }
  }
}
function READ_details_toggle() {
  var element = document.getElementsByClassName('details');
  if (toggle == false) {
    //check if details off, hide details
    for (let i = 0; i < element.length; i++) {
      element[i].classList.add('hidden');
      //console.log(element[i].className);
    }
  } else {
    //if details off, show details
    for (let i = 0; i < element.length; i++) {
      element[i].classList.remove('hidden');
      //console.log(element[i].className);
    }
  }
}
//Login Page Password Visibility Event Listener
uiPassVisiblityEye.addEventListener('click', function () {
  var pass_input = uiLoginPassField;
  if (pass_input.type == 'text') {
    pass_input.type = 'password';
    uiPassVisiblityEye.className = 'fa fa-eye';
  } else {
    pass_input.type = 'text';
    uiPassVisiblityEye.className = 'fa fa-eye-slash';
  }
});

/////////////////////////////
//misc
/////////////////////////////

function scrollBottom() {
  var objDiv = document.getElementById('log_cont');
  objDiv.scrollTop = objDiv.scrollHeight;
}

function getEmoji(y) {
  var x = uiChatTextbox;
  x.value += y.name;
}

//console.log("load");

//run functions on startup
//console.log(toggle);
READ_details_toggle();
scrollBottom();
//$(document).ready(function(){

/*$("#mainpg #log").html(function(_, html){
 return html.replace(/(\#\w+)/g, '<span class="hashtag">$1</span>');
});*/

function hashtag() {
  //	console.log('test123');
  //var tempray = $("#mainpg #log").html();
  //console.log(tempray);
  $('#mainpg #chatLog').html(function (_, html) {
    return html.replace(/(\#\w+)/g, '<span class="hashtag">$1</span>');
  });
}

function findlinks() {
  //console.log("test345");
  //OLD var regex = /(?:(?:https?|ftp):\/\/|\b(?:[a-z\d]+\.))(?:(?:[^\s()<>]+|\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))?\))+(?:\((?:[^\s()<>]+|(?:\(?:[^\s()<>]+\)))?\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))?/ig
  var hrefURL = '';
  //var tempray = $("#mainpg #log").html();
  ////console.log(tempray);
  $('#mainpg #chatLog').html(function (_, html) {
    // "<a class=\"txtlink\" href=\"\">$1</a>"

    //return html.replace(/(http)(s)/ig, "success: $1 $2");    // this works - first match, then second match

    //return html.replace(/((?:(?:https?|ftp):\/\/|\b(?:[a-z\d]+\.))(?:(?:[^\s()<>]+|\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))?\))+(?:\((?:[^\s()<>]+|(?:\(?:[^\s()<>]+\)))?\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’])))?/ig, "<a href=\"$1\">test</a>");
    //return html.replace(/((?:(?:https?|ftp):\/\/|\b(?:[a-z\d]+\.))(?:(?:[^\s()<>]+|\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))?\))+(?:\((?:[^\s()<>]+|(?:\(?:[^\s()<>]+\)))?\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’])))?/ig, "test");
    return html.replace(
      /(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=])*)/gi,
      '<a class="link" target="_blank" href="$1">$1</a>'
    ); // i used a different regex - and use the $1 in the quotes
  });
}
//Formats chat messages to look like SMS but Geniusised
function format_chat_messages() {
  var chatMsgs = document.querySelectorAll('.chatline');
  for (let i = 0; i < chatMsgs.length; i++) {
    let username = getCookie('user');
    let msg = chatMsgs[i]['outerHTML'];
    if (msg.includes('<span class="chat-message__name">[' + username + ']:')) {
      chatMsgs[i].classList.add('chat-msg--me');
    }
    //use else if to add specific colors based on other usernames
  }
}
//function findlinks2 () {
//	const linkRx = /<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1/;
//
//	$("#mainpg #log").html(function(_, html){
//	return html.replace(linkRx);
//}
//});
// $(document).ready(function() {
//   $(".emote").click(function () {
//  	// $(this).toggleClass("pattern__stripes-2");
// 	$(this).addClass('pattern__stripes-2');
// 	$(this).removeClass('pattern__stripes-2');
//   });
// })
// $("#reload").mouseenter(
//    function(){$(this).addClass('pattern__stripes-1') },
//    function(){$(this).removeClass('pattern__stripes-1') }
// );
/////////////////////////////////////////////////////////////////////////
document.getElementById('SectionsContent').style.display = 'none';
document.getElementById('OtherContent').style.display = 'none';
document.getElementById('SpiritContent').style.display = 'none';
//////////////////////////
//main js
////////////////////////////
// if logged_in cookie not set - show log in screen
var logincookie = getCookie('logged_in');
check_auth(logincookie);

setInterval(function () {
  if (logincookie != 0) {
    getChatFromDB();
  }
}, 60 * 1000); // 60 * 1000 milsec (every 60 seconds)

function login_setup() {
  //console.log("you are logged in");
  //document.getElementById('container').className = '';
  uiMainContainer.classList.remove('hide');
  uiLoginContainer.classList.add('hide');
  uiLogout.classList.remove('hide');
  uiChatTextbox.focus();
}

function logout() {
  uiLogout.classList.add('hide');
  uiLoginContainer.classList.remove('hide');
  uiMainContainer.classList.add('hide');
  document.cookie = 'logged_in=0';
}

function check_auth(apikey) {
  //console.log("check_auth");
  //var logged_in = getCookie("logged_in");
  var logged_in = apikey;
  //console.log(logged_in);
  //return;

  if (
    logged_in !=
    'bf44550db31d8f59b5da10e3a00a5072a481810b0dadfc6cfcc1f948b5f170f8'
  ) {
    // not logged in
    //console.log("you are not logged in");
    //alert("Incorrect password, please try again."); //error msg?
    // show loginContainer page

    //uiMainContainer.classList.remove('hide');
    uiMainContainer.classList.add('hide');
  } // logged in
  else {
    login_setup();
    getChatFromDB();
  }
}

uiLoginButton.addEventListener('click', function () {
  console.log('you clicked submit');
  console.log(uiLoginUserField.value);
  console.log(uiLoginPassField.value);
  user = uiLoginUserField.value;
  pass = uiLoginPassField.value;
  getAuth(user, pass);
});

uiLoginContainer.addEventListener('keyup', function (event) {
  if (event.code === 'Enter') {
    console.log(uiLoginUserField.value);
    console.log(uiLoginPassField.value);
    user = uiLoginUserField.value;
    pass = uiLoginPassField.value;
    getAuth(user, pass);
  }
});

async function pauseMe() {
  await sleep(2000);
  //console.log("MS since start:", Date.now() - start);
}

////////////////////////////////////
// CHAT AREA
////////////////////////////////////
// when the submit button is hit
uiChatSubmit.addEventListener('click', function () {
  sendString();
  getChatFromDB();
});

uiChatTextbox.addEventListener('keyup', function (event) {
  if (event.code === 'Enter') {
    event.preventDefault();
    sendString();
  }
  if (event.code === 'NumpadEnter') {
    event.preventDefault();
    sendString();
  }
});
// Logout
uiLogout.addEventListener('click', function () {
  logout();
});

function enlargeReload() {
  //document.getElementById("reload").width = "110%";
  //var el = document.getElementById("reload");
  //console.log(uiChatReload);
  //el.style.width="12%";
  //el.style.height="7.5%";
  uiChatReload.style.backgroundColor = '#c2f5ff';
}

//reload		// reload chat
uiChatReload.addEventListener('click', function () {
  getChatFromDB();
  uiChatTextbox.focus();
});

uiChatReload.addEventListener('mousedown', function () {
  enlargeReload();
  uiChatReload.classList.remove('pattern__stripes-1');
  uiChatReload.classList.add('pattern__stripes-2');
});

uiChatReload.addEventListener('mouseup', function () {
  uiChatReload.style.backgroundColor = 'initial';
  uiChatReload.classList.remove('pattern__stripes-2');
});

uiChatReload.addEventListener('mouseleave', function () {
  uiChatReload.style.backgroundColor = 'initial';
  uiChatReload.classList.remove('pattern__stripes-1');
});

uiChatReload.addEventListener('mouseenter', function () {
  uiChatReload.classList.add('pattern__stripes-1');
});

function sendString() {
  //console.log("sendstring");
  var dirty = uiChatTextbox.value;
  //var clean = DOMPurify.sanitize(dirty, {FORBID_TAGS: ['style','img','div','video','source','input','picture','label','canvas','legend','form','button',]}); //clean that yucky stuff
  var clean = DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: [
      'b',
      'em',
      'strong',
      'mark',
      'del',
      'a',
      'ins',
      'code',
      'sup',
      'sub',
      'progress',
      'ol',
      'ul',
      'li',
      'h1',
      'h2',
      'h3',
      'h4',
    ],
    FORBID_ATTR: ['style', 'class', 'id', 'href', 'src', 'onclick'],
  }); //clean that yucky stuff
  /***HIGHLY EXPERIMENTAL***/
  /******
  clean = clean.replace(
    /\https:((.*)snipboard.io(.*))\.jpg/gim,
    "<img src='https:$.jpg'><p>$</p>"
  );
  ********/
  clean = clean.replace(/\_\_(.*)\_\_/gim, '<em>$1</em>');
  clean = clean.replace(/\-\-(.*)\-\-/gim, '<del>$1</del>');
  clean = clean.replace(/\*\*(.*)\*\*/gim, '<b>$1</b>');
  clean = clean.replace(/\!\!(.*)\!\!/gim, '<h1>$1</h1>');
  clean = clean.replace(/\+/g, '%2b');
  clean = clean.replace(/\"/g, '\\"');
  clean = clean.replace(/\&/g, '%26');
  clean = clean.replace(/\:-/g, '−');
  //Custom Emojis (stickers)
  clean = clean.replace(
    /\:(dogeputin)\:/gim,
    "<img src='Assets/dogeputinMicro.png' class='customEmoji'>"
  );

  clean = clean.replace(
    /\:(dogeputinXL)\:/gim,
    "<img src='Assets/dogeputinMedium.png' class='customEmoji'>"
  );
  clean = clean.replace(
    /\:(lmao)\:/gim,
    "<img src='Assets/lmao.png' class='customEmoji'>"
  );
  clean = clean.replace(
    /\:(thonk)\:/gim,
    "<img src='Assets/thooonk.png' class='customEmoji'>"
  );
  clean = clean.replace(
    /\:(wgat)\:/gim,
    "<img src='Assets/wat.ico' class='customEmoji'>"
  );
  clean = clean.replace(
    /\:(bigoof)\:/gim,
    "<img src='Assets/bigoof.png' class='customEmoji'>"
  );
  clean = clean.replace(
    /\:(elonlol)\:/gim,
    "<img src='Assets/elonloltransparent.png' class='customEmoji'>"
  );
  clean = clean.replace(
    /\:(yee)\:/gim,
    "<img src='Assets/yee.jpg' style='height:40px;width:40px;'>"
  );
  //gifs
  clean = clean.replace(
    /\:(dogedance)\:/gim,
    "<img src='Assets/gifs/dogedance.gif'>"
  );
  clean = clean.replace(
    /\:(hyperthink)\:/gim,
    "<img src='Assets/gifs/hyperthink.gif'>"
  );
  clean = clean.replace(
    /\:(readtwice)\:/gim,
    "<img src='Assets/gifs/nandato.gif'>"
  );
  clean = clean.replace(
    /\:(nosense)\:/gim,
    "<img src='Assets/gifs/logic_fails_me.gif'>"
  );
  clean = clean.replace(/\:(egg)\:/gim, "<img src='Assets/gifs/thinkegg.gif'>");
  clean = clean.replace(
    /\:(um)\:/gim,
    "<img src='Assets/gifs/um_actually.gif'>"
  );
  clean = clean.replace(
    /\:(deal)\:/gim,
    "<img src='Assets/gifs/dealwithit.gif'>"
  );
  clean = clean.replace(
    /\:(notsimple)\:/gim,
    "<img class='chat__sticker' src='Assets/gifs/notsimple.gif'>"
  );
  clean = clean.replace(
    /\:(bye)\:/gim,
    "<img class='chat__sticker' src='Assets/gifs/bye.gif'>"
  );
  var savestring = clean;
  //Why not just use clean? Wat?
  //var savestring = DOMPurify.sanitize(dirty, {FORBID_TAGS: ['style']}); //clean that yucky stuff
  //console.log(savestring);
  if (savestring != '') {
    var username = getCookie('user');
    // the updated save string [user] + savestring

    savestring = '[' + username + ']:' + savestring;

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
    uiChatTextbox.value = '';
  }
  scrollBottom();
}

function saveToDB(savestring, onSuccess) {
  var xhttp = new XMLHttpRequest();

  // run this when the readstate changes
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      //document.getElementById("demo").innerHTML = this.responseText;
      //console.log(this.responseText);
      onSuccess();
    }
  };

  var apikey = getCookie('logged_in');
  var poststring = 'action=save&savestring=' + savestring + '&apikey=' + apikey;
  console.log(poststring);
  xhttp.open('POST', 'chat.php', true);
  xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); // php seems to need this
  xhttp.send(poststring);
  console.log('saved to db');
}

function getChatFromDB() {
  var xhttp = new XMLHttpRequest();

  // run this when the readstate changes
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      //document.getElementById("log").innerHTML = this.responseText; // this.responseText should be from python
      //console.log(this.responseText);
      var responses = JSON.parse(this.responseText);
      //console.log('js responses: ');
      //console.log(responses);
      //console.log(typeof(responses));
      //console.log(responses[0][0]);
      //responses.forEach()

      var formatted_chatlog = '';
      var compiled_chatlog = '';
      var mentions = '';
      var You = uiLoginUserField.value;
      //var mentionRegex = /\@/g;

      for (let i = 0; i < responses.length; i++) {
        formatted_chatlog =
          formatted_chatlog +
          '<div class="chatline">' +
          '<span class="details">' +
          responses[i]['date'] +
          '</span>' +
          '<span class="chat-message__name">' +
          responses[i]['chatstring'] +
          '</span></div>';

        compiled_chatlog = formatted_chatlog;
      }
      uiChatLog.innerHTML = formatted_chatlog; // this.responseText should be from python

      uiChatLog.scrollTop = uiChatLog.scrollHeight; // this allows for the scrolling to the bottom of the textarea
      format_chat_messages();
      hashtag();
      findlinks();
      READ_details_toggle();
      scrollBottom();
    }
  };

  //console.log(getCookie("logged_in"));
  var poststring = 'action=getchat&apikey=' + getCookie('logged_in');
  //console.log(poststring);
  xhttp.open('POST', 'chat.php', true);
  xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); // php seems to need this
  xhttp.send(poststring);
}

function getAuth(user, pass) {
  console.log('getAuth');

  var xhttp = new XMLHttpRequest();

  // run this when the readstate changes
  xhttp.onreadystatechange = function () {
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

      var logged_in = getCookie('logged_in');
      check_auth(responses.apikey);

      // change hide settings

      // load chat

      // to streamline, make this into a callable function
    }
  };

  var poststring = 'user=' + user + '&pass=' + pass;
  console.log(poststring);
  xhttp.open('POST', 'auth.php', true);
  xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); // php seems to need this
  xhttp.send(poststring);
}

// if any radio buttons are pressed
document.getElementById('modeDefault').addEventListener('change', set_mode);
document.getElementById('modeDark').addEventListener('change', set_mode);
document.getElementById('modeMo').addEventListener('change', set_mode);

// find which one is pressed/active

function tell_me_the_mode() {
  var ele = document.getElementsByClassName('mode__radio-button');
  for (let i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      var mode = ele[i].id;
    }
  }
  return mode;
  //console.log(mode);
}
// set the body class to the appropriate mode
//let previousMode = ["body",];
var previousMode2 = 'body';

function setPreferredMode() {
  var currentMode = tell_me_the_mode();
  //console.log("below is active element");
  //console.log(currentMode);
  setCookie('mode', currentMode, 365); //sets cookie
}

function checkPreferredMode() {
  var preferredMode = getCookie('mode'); //finds mode
  //console.log(preferredMode);
  if (preferredMode != '') {
    //if not empty
    //alert("your preferred mode is "+preferredMode);
    //console.log("here");
    //console.log(preferredMode);
    document.getElementById(preferredMode).checked = true; //set mode to preferredMode
  } else {
    //alert("no cookie found");
    setCookie('mode', 'body', 365);
    //set mode to body
  }
}

function set_mode() {
  //console.log("previousMode2 below");
  //console.log(previousMode2);
  var mode = tell_me_the_mode();
  if (mode == 'modeDark') {
    var modeClass = 'dark';
  } else if (mode == 'modeMo') {
    var modeClass = 'mo';
  } else if (mode == 'modeDefault') {
    var modeClass = 'body';
  }
  setPreferredMode();
  //list of stuff to change mode
  var ele = [
    'body',
    'chatLog',
    'chatFlush',
    'Sections',
    'Chat',
    'Other',
    'Spirit',
    'SpiritContent',
    'chatTextbox',
    'chatSubmit',
    'logout',
  ];

  var eleLength = ele.length;
  ////console.log(eleLength);
  //remove class name from body
  //////////////////////////////////////////////////////////////////////////////
  //var eleBody = document.getElementById(ele);
  //ele.className = '';
  //eleLog.className = '';
  for (var loopClassName = 0; loopClassName < eleLength; loopClassName++) {
    //adding mode to ele array
    //ele[loopClassName].className = '';
    var eleClass = document.getElementById(ele[loopClassName]);
    ////console.log(typeof(eleClass));
    //var currentIndex = previousMode[];
    ////console.log(currentIndex);
    var modeClassReplaced = eleClass.classList.remove(previousMode2);
    //eleClass.className = modeClassReplaced;
    //eleClass.className = 'tablinks ';
    eleClass.classList.add(modeClass);
    ////console.log(eleClass.classList);
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
  ////console.log(mode);
  //document.getElementById.
}

checkPreferredMode();
set_mode();

function testApi() {
  var xhttp = new XMLHttpRequest();

  // run this when the readstate changes
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      //document.getElementById("demo").innerHTML = this.responseText;
      ////console.log('api response: ');
      ////console.log(this.responseText);
      //onSuccess();
    }
  };

  var poststring = 'action=save&savestring=' + 'this is a test' + '&apikey=12';
  xhttp.open('POST', 'chat.php', true); // post
  xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); // php seems to need this
  xhttp.send(poststring); // post

  /*
        xhttp.open("GET", "chat.php?action=test", true);
        xhttp.send();
        //console.log('saved to db');
        */
}
function dyanmic_button_creation(buttonClass, injectionLocation, data) {
  for (let i = 0; i < data.length; i++) {
    var btn = document.createElement('BUTTON');
    btn.className = buttonClass;
    var buttonData = data[i];
    btn.innerHTML = buttonData[1];
    btn.value = buttonData[1];
    btn.title = buttonData[0];
    document.getElementById(injectionLocation).appendChild(btn);
  }
  var unproccessedElements = document.getElementsByClassName(buttonClass);
  for (let i = 0; i < unproccessedElements.length; i++) {
    unproccessedElements[i].addEventListener('click', function (object) {
      if (object.target.value.indexOf('&#') !== -1) {
        uiChatTextbox.value += object.target.innerHTML;
      } else if (object.target.value.indexOf(':') !== -1) {
        uiChatTextbox.value += object.target.value;
      }
      uiChatTextbox.focus();
    });
    unproccessedElements[i].addEventListener('mouseenter', function (object) {
      object.target.classList.add('pattern__stripes-1');
      uiChatTextbox.focus();
    });
    unproccessedElements[i].addEventListener('mouseleave', function (object) {
      object.target.classList.remove('pattern__stripes-1');
      uiChatTextbox.focus();
    });
  }
}
//Dyanmically create emoji dropdown buttons
dyanmic_button_creation('emote', 'emoji_dropdown', emojiData);
//Dyanmically create emote dropdown buttons

/***HIGHLY EXPERIMENTAL***/
/********/
document
  .getElementById('notificationSwitch')
  .addEventListener('click', function () {
    if (!('Notification' in window)) {
      alert('Never gonna give you up...never gonna let you down!');
    } else if (Notification.permission === 'granted') {
      var notification = new Notification(
        'Never gonna give you up...never gonna let you down!'
      );
    } else if (Notification.permission !== 'denied') {
      //Ask for permission
      Notification.requestPermission().then(function (permission) {
        if (permission === 'granted') {
          var notification = new Notification(
            'Never gonna give you up...never gonna let you down!'
          );
        }
        if (permission === 'denied') {
          alert('Never gonna give you up...never gonna let you down!');
        }
      });
    } else {
      alert('Never gonna give you up...never gonna let you down!');
    }
  });
//check if page reloaded, or else show cookie stuff
var perfEntries = performance.getEntriesByType('navigation');
for (let i = 0; i < perfEntries.length; i++) {
  var p = perfEntries[i];
  //Events can be Reload, Navigate or backforward
  if (p.type == 'reload') {
    document.getElementById('cookieAlert').style.display = 'none';
    uiChatLog.scrollTop = uiChatLog.scrollHeight;
  } else {
    document
      .getElementById('cookieAlertCloseBtn')
      .addEventListener('click', function () {
        document.getElementById('cookieAlert').remove();
      });
    uiChatLog.scrollTop = uiChatLog.scrollHeight;
  }
}
/***HIGHLY EXPERIMENTAL***/
/********/
uiChatFlush.addEventListener('click', function () {
  if (
    confirm(
      'You are about to trigger a chat flush.\nDo NOT use the chat for 2.5 seconds.'
    )
  ) {
    for (i = 0; i < 100; i++) {
      uiChatTextbox.value += '-';
      sendString();
      uiChatTextbox.focus();
    }
  } else {
    uiChatTextbox.focus();
  }
  uiChatLog.scrollTop = uiChatLog.scrollHeight;
});

console.log(
  '%cWelcome to the place where all the Genius happens!',
  'color: red; font-size: 30px;'
);
//Doesnt work.....sigh
window.addEventListener('DOMContentLoaded', (event) => {
  uiChatLog.scrollTop = uiChatLog.scrollHeight;
});
