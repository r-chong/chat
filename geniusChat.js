'use strict';
////////////////////
/*VARIABLES*/
////////////////////
//Context menu variables
var mainMenuDisplayed = false;
var mainMenuBox = document.getElementById('mainContextMenu');
var replyMenuDisplayed = false;
var replyMenuBox = document.getElementById('replyContextMenu');
var mainMenuReload = document.getElementById('contextMenuChatReload');
var mainMenuLogout = document.getElementById('contextMenuLogout');
//Login Page variables
var uiPassVisiblityEye = document.getElementById('password_visiblity');
var uiLoginContainer = document.getElementById('loginContainer');
var uiLoginButton = document.getElementById('loginSubmit');
var uiLoginUserField = document.getElementById('loginUser');
var uiLoginPassField = document.getElementById('loginPass');
//Tabs(Settings, Resources, Chat) variables
var uiMainContainer = document.getElementById('container');
var uiLockscreen = document.getElementById('lockscreen');
var uiChatLog = document.getElementById('chatLog');
var uiChatTextbox = document.getElementById('chatTextbox');
var uiChatReload = document.getElementById('reload');
var uiChatSubmit = document.getElementById('chatSubmit');
var uiLogout = document.getElementById('logout');
var uiChatFlush = document.getElementById('chatFlush');
var uiPageTitle = document.getElementById('pageTitle');
var uiHideDetails = document.getElementById('detailsToggle');
var uiChatTab = document.getElementById('chatTab');
var uiResourcesTab = document.getElementById('resourcesTab');
var uiSettingsTab = document.getElementById('settingsTab');
var uiSpiritTab = document.getElementById('spiritTab');
//IMPROVEMENT: Remove 'ui' from all variables
////////////////////
/*Cookie Creation*/
////////////////////
function setCookie(cname, cvalue, exdays) {
  //sets the cookie name, the cookie itself, and the days until expiry
  var d = new Date(); //makes new date function
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();
  document.cookie =
    cname + '=' + cvalue + ';' + expires + ';path=/;SameSite=Strict';
  //samesite is needed for firefox compatibilty old code is below (in case of bugs)
  //document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  //^Leave till 2021-07-01
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
////////////////////
/*Login/Page Setup Functions*/
////////////////////
function check_auth(apikey) {
  //console.log("check_auth");
  //console.log(logged_in);
  //return;
  var logged_in = apikey;
  if (
    logged_in !==
    'bf44550db31d8f59b5da10e3a00a5072a481810b0dadfc6cfcc1f948b5f170f8'
  ) {
    //console.log("you are not logged in");
    //show loginContainer page
    uiMainContainer.classList.add('hide');
    body.classList.add('lockscreen');
    uiLoginUserField.focus();
  } else {
    login_setup();
    getChatFromDB();
  }
}
function login_setup() {
  //console.log("you are logged in");
  uiMainContainer.classList.remove('hide');
  body.classList.remove('lockscreen');
  uiLoginContainer.classList.add('hide');
  uiLogout.classList.remove('hide');
  uiChatTextbox.focus();
}

function loginValidation() {
  //console.log(uiLoginUserField.value);
  //console.log(uiLoginPassField.value);
  let user = uiLoginUserField.value;
  let pass = uiLoginPassField.value;
  getAuth(user, pass);
}
uiLoginButton.addEventListener('click', function () {
  loginValidation();
});
uiLoginContainer.addEventListener('keyup', function (event) {
  if (event.code == 'Enter') {
    loginValidation();
    console.log('pressed enter');
  }
});
//Login Page Password Visibility Event Listener
uiPassVisiblityEye.addEventListener('click', function () {
  var pass_input = uiLoginPassField;
  if (pass_input.type == 'text') {
    pass_input.type = 'password';
    uiPassVisiblityEye.className = 'fa fa-eye';
    uiPassVisiblityEye.setAttribute('z-index', '1');
  } else {
    pass_input.type = 'text';
    uiPassVisiblityEye.className = 'fa fa-eye-slash';
    uiPassVisiblityEye.setAttribute('z-index', '1');
  }
});
////////////////////
/*TABS*/
////////////////////

////////////////////
/*Tabs> Tab display functions*/
////////////////////
document.getElementById('chat').addEventListener('click', function (element) {
  openTab(element);
  setPageTitle(element.target.id);
  //The ID is the page name
});
document
  .getElementById('resources')
  .addEventListener('click', function (element) {
    openTab(element);
    setPageTitle(element.target.id);
  });
document
  .getElementById('settings')
  .addEventListener('click', function (element) {
    openTab(element);
    setPageTitle(element.target.id);
  });
document.getElementById('spirit').addEventListener('click', function (element) {
  openTab(element);
  setPageTitle(element.target.id);
});

function openTab(element) {
  //console.log("opentab");
  //console.log(this.document.activeElement);
  var el = element.target;
  var tabname = el.id;
  //declare all variables
  var tabindex, tabcontent;
  //finds all tabcontent
  tabcontent = document.getElementsByClassName('tabcontent');
  //console.log('tabcontent');
  for (tabindex = 0; tabindex < tabcontent.length; tabindex++) {
    tabcontent[tabindex].style.display = 'none';
    // making it so the tabcontent is not displayed
  }
  clearActiveTabs();
  //display the tabcontent that is selected
  //document.getElementById(tabname).style.display = "block";  // not sure why this is here... this is what is throwing off the tabs when clicked
  tabcontent[0].style.display = 'block';
  //console.log(evt);
  el.className += ' active';
  el.className += ' pattern__stripes-1';
  document.getElementById(tabname + 'Tab').style.display = 'block'; // I added ids of tabname+"Tab" to each tab content to get them to be callable with their tabname
}

function setPageTitle(tabname) {
  let tabnameToTitleCase = titleCase(tabname);
  //The two 'ifs' are special cases
  if (tabname == 'chat') {
    uiPageTitle.innerHTML = 'Genius Chat';
    uiChatTextbox.focus();
  } else if (tabname == 'spirit') {
    uiPageTitle.innerHTML = 'Spirit World';
  } else {
    uiPageTitle.innerHTML = tabnameToTitleCase;
  }
}

function clearActiveTabs() {
  // clear active from the tablinks
  var tab_button = document.getElementsByClassName('nav__sidebar-content');
  ////console.log('tablinks');
  ////console.log(tablinks);
  for (var tabindex = 0; tabindex < tab_button.length; tabindex++) {
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
//For custom context menu (do not remove)
//Displaying a context menu itself should be a function, but can't be
function openContextMenu(event) {
  event.preventDefault();
  if (replyMenuDisplayed == true) {
    replyMenuBox.style.display = 'none';
  } else if (mainMenuDisplayed == true) {
    mainMenuBox.style.display = 'none';
  }
  var left = arguments[0].clientX;
  var top = arguments[0].clientY;
  let eventParentElement = event.target.parentElement.className;
  let eventGrandParentElement =
    event.target.parentElement.parentElement.className;

  if (
    eventParentElement.includes('chatline') ||
    eventGrandParentElement.includes('chat-message__content')
  ) {
    displayContextMenu(left, top, replyMenuBox);
    replyMenuDisplayed = true;
    let msgTxtContent = event.target.parentElement.textContent;
    let finalMsg = '<code>' + msgTxtContent + '</code>';
    document
      .getElementById('replyButton')
      .addEventListener('click', function () {
        uiChatTextbox.value = finalMsg;
      });
  } else if (
    eventParentElement.includes('loginpg') ||
    eventGrandParentElement.includes('loginpg')
  ) {
    displayContextMenu(left, top, mainMenuBox);
    mainMenuReload.classList.add('hide');
    mainMenuLogout.classList.add('hide');
  } else {
    displayContextMenu(left, top, mainMenuBox);
    mainMenuReload.classList.remove('hide');
    mainMenuLogout.classList.remove('hide');
  }
}
document
  .getElementById('body')
  .addEventListener('contextmenu', openContextMenu, false);
function displayContextMenu(leftPosition, topPosition, menu) {
  menu.style.left = leftPosition + 'px';
  menu.style.top = topPosition + 'px';
  menu.style.display = 'block';
  mainMenuDisplayed = true;
}
//For messages
window.addEventListener(
  'click',
  function () {
    if (replyMenuDisplayed == true) {
      replyMenuBox.style.display = 'none';
    }
    if (mainMenuDisplayed == true) {
      mainMenuBox.style.display = 'none';
    }
  },
  true
);
////////////////////
/*Tabs > Chat Related Functions*/
////////////////////
//Submit button listener
uiChatSubmit.addEventListener('click', function () {
  sendString();
  getChatFromDB();
});

uiChatTextbox.addEventListener('keyup', function (event) {
  if (event.code === 'Enter') {
    event.preventDefault();
    sendString();
    uiChatSubmit.click();
  }
  if (event.code === 'NumpadEnter') {
    event.preventDefault();
    sendString();
    uiChatSubmit.click();
  }
});

//Chat reload listeners
uiChatReload.addEventListener('click', function () {
  getChatFromDB();
  uiChatTextbox.focus();
});

uiChatReload.addEventListener('mouseover', function () {
  getChatFromDB();
  uiChatTextbox.focus();
});

uiChatReload.addEventListener('mousedown', function () {
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
//Functions used to display chat correctly
function scrollBottom() {
  var objDiv = document.getElementById('log_cont');
  objDiv.scrollTop = objDiv.scrollHeight;
}
function hashtag() {
  //	console.log('test123');
  //var tempray = $("#mainpg #log").html();
  //console.log(tempray);
  $('#chatLog').html(function (_, html) {
    return html.replace(/(\#\w+)/g, '<span class="hashtag">$1</span>');
  });
}
function findlinks() {
  var hrefURL = '';
  $('#mainpg #chatLog').html(function (_, html) {
      return html.replace(
      /(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=])*)/gi,
      '<a class="link" target="_blank" href="$1">$1</a>'
  ); // the $1 will be subsituted by the link
  });
}
//Formats chat messages to look like SMS but Geniusised
function chatMessageFormatter() {
  let chatMsgs = document.querySelectorAll('.chatline');
  for (let i = 0; i < chatMsgs.length; i++) {
    let msg = chatMsgs[i]['outerHTML'];
    if (msg.includes('<span class="chat-message__content">')) {
      chatMsgs[i].classList.add('chat-msg--me');
      //why not just work on chat-message__content? Why the new class?
    }
    let msg_box = chatMsgs[i];
    msg_box.addEventListener('dragend', function (event) {
      let msgTxtContent = event.target.textContent;
      let finalMsg = '<code>' + msgTxtContent + '</code>';
      uiChatTextbox.value = finalMsg;
      console.log('Jun 18, 10:44pm [YIP]: ughhhhh, replies are such a DRAG');
    });
    //use else if to add specific colors based on other usernames
  }
}
//Show or hide details
function detailsToggle() {
  var element = document.getElementsByClassName('details');
  if (uiHideDetails.checked == false) {
    //if details off, show details
    for (let i = 0; i < element.length; i++) {
      element[i].classList.remove('hidden');
      //console.log(element[i].className);
    }
  } else if (uiHideDetails.checked == true) {
    //check if details off, hide details
    for (let i = 0; i < element.length; i++) {
      element[i].classList.add('hidden');
      //console.log(element[i].className);
    }
  }
}
uiHideDetails.addEventListener('click', detailsToggle);
//Function to format user input and then send it to the DB
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
      'code',
    ],
    FORBID_ATTR: ['style', 'class', 'id', 'href', 'src', 'onclick'],
  }); //clean that yucky stuff
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
    /\:(lmao)\:/gi,
    "<img src='Assets/lmao.png' style='width:40px;height:40px;' class='customEmoji'>"
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
    /(brr)/gim,
    "<img class='chat__sticker' src='Assets/gifs/brrr.gif'>"
  );
  clean = clean.replace(
    /\:(bye)\:/gim,
    "<img class='chat__sticker' src='Assets/gifs/bye.gif'>"
  );

  clean = clean.replace(
    /\:(vibe)\:/gim,
    "<img class='chat__sticker' src='Assets/gifs/vibe.gif'>"
  );
  clean = clean.replace(
    /\:(ugh)\:/gim,
    "<img class='chat__sticker' src='Assets/gifs/ugh.gif'>"
  );
  clean = clean.replace(
    /\:(huh)\:/gim,
    "<img class='chat__sticker' src='Assets/huh.jpg'>"
  );
  //Troll reese
  //lol
  let date = new Date();
  let dayNumber = date.getDay();
  if (dayNumber == '6') {
    clean = oldEnglish(clean);
  }
  var savestring = clean;
  //IMPROVEMENT: Why not just use var clean? Wat? Why make another variable?

  //var savestring = DOMPurify.sanitize(dirty, {FORBID_TAGS: ['style']}); //clean that yucky stuff
  //console.log(savestring);
  if (savestring != '') {
    var username = getCookie('user');
    // the updated save string [user] + savestring
    //savestring = '[' + username + ']:' + savestring; //bookmark!!!
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
  chatMessageFormatter();
  scrollBottom();
}
//Function to save objects to the DB
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
  //console.log(poststring);
  xhttp.open('POST', 'chat.php', true);
  xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); // php seems to need this
  xhttp.send(poststring);
  //console.log('saved to db');
}
//Function to get chat from DB AND display it correctly
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
      var username = getCookie('user');

      for (let i = 0; i < responses.length; i++) {
        formatted_chatlog =
          formatted_chatlog +
          '<div class="chatline" draggable="false">' +
          '<span class="details">' + responses[i]['date'] + ' [' + username + ']:' + '</span>' + //date/time, username (details)
          '<span class="chat-message__content">' + responses[i]['chatstring'] + //message content
          '</span></div>';
        //Compiled_chatlog isnt used anywhere, delete it?
        compiled_chatlog = formatted_chatlog;
      }
      uiChatLog.innerHTML = formatted_chatlog; // this.responseText should be from python
      uiChatLog.scrollTop = uiChatLog.scrollHeight; // this allows for the scrolling to the bottom of the textarea
      hashtag();
      findlinks();
      detailsToggle();
      scrollBottom();
      chatMessageFormatter();
    }
  };
  var poststring = 'action=getchat&apikey=' + getCookie('logged_in');
  //console.log(poststring);
  xhttp.open('POST', 'chat.php', true);
  xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); // php seems to need this
  xhttp.send(poststring);
}
//Validates user credentials on login page
function getAuth(user, pass) {
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
      //^Why is this needed? It isn't used anywhere...
      check_auth(responses.apikey);
      // change hide settings
      // load chat
      // to streamline, make this into a callable function
    }
  };
  var poststring = 'user=' + user + '&pass=' + pass;
  //console.log(poststring);
  xhttp.open('POST', 'auth.php', true);
  xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); // php seems to need this
  xhttp.send(poststring);
}
//Chat flush
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

////////////////////
/*Tabs > Settings tab*/
////////////////////
//Logout from Genius Chat
function logout() {
  uiLogout.classList.add('hide');
  uiLoginContainer.classList.remove('hide');
  uiMainContainer.classList.add('hide');
  document.cookie = 'logged_in=0';
}
uiLogout.addEventListener('click', logout);

////////////////////
/*Tabs > Settings tab > Mode Related Functions*/
////////////////////
document.getElementById('modeDefault').addEventListener('change', set_mode);
document.getElementById('modeDark').addEventListener('change', set_mode);
document.getElementById('modeMo').addEventListener('change', set_mode);

//Find which mode is set
function findMode() {
  let radioButtons = document.getElementsByClassName('mode__radio-button');
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      var mode = radioButtons[i].id;
    }
  }
  return mode;
  //console.log(mode);
}
//set the body class to the appropriate mode
//let previousMode = ["body",];
var previousMode2 = 'body';
//Should be merged into set_mode
function setPreferredMode() {
  var currentMode = findMode();
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
  var mode = findMode();
  if (mode == 'modeDark') {
    var modeClass = 'dark';
  } else if (mode == 'modeMo') {
    var modeClass = 'mo';
  } else if (mode == 'modeDefault') {
    var modeClass = 'body';
  }
  setPreferredMode();
  //list of stuff to change mode
  let unprocessedItems = [
    'body',
    'chatLog',
    'chatFlush',
    'resources',
    'chat',
    'settings',
    'spirit',
    'chatTextbox',
    'chatSubmit',
    'logout',
  ];
  var itemsLength = unprocessedItems.length;
  //console.log(eleLength);
  //remove class name from body
  //////////////////////////////////////////////////////////////////////////////
  //var eleBody = document.getElementById(ele);
  //ele.className = '';
  //eleLog.className = '';
  for (var loopClassName = 0; loopClassName < itemsLength; loopClassName++) {
    //adding mode to ele array
    //ele[loopClassName].className = '';
    var eleClass = document.getElementById(unprocessedItems[loopClassName]);
    //console.log(typeof(eleClass));
    //var currentIndex = previousMode[];
    //console.log(currentIndex);
    //where is this being used?
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
      //le[loopClassList].classList.add(modeClass);
      document.getElementById(ele[loopClassList]).add(modeClass);
    }
  */
  //console.log(mode);
}

document
  .getElementById('notificationSwitch')
  .addEventListener('click', function () {
    if (!('Notification' in window)) {
      alert('Never gonna give you up...never gonna let you down!');
    } else if (Notification.permission === 'granted') {
      var notification = new Notification(
        'Never gonna give you up, never gonna let you down!'
      );
    } else if (Notification.permission !== 'denied') {
      //Ask for permission
      Notification.requestPermission().then(function (permission) {
        if (permission === 'granted') {
          var notification = new Notification(
            'Never gonna give you up...never gonna let you down!'
          );
        } else if (permission === 'denied') {
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
////////////////////
/*Misc*/
////////////////////
//A function to turn strings into 'Title Case' (there is no default function)
function titleCase(string) {
  string = string.toLowerCase().split(' ');
  for (var i = 0; i < string.length; i++) {
    string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
  }
  return string.join(' ');
}

//Temporary array to troll reese
const oldEnglishWords = [
  ['you', 'thou'],
  ['you?', 'thou?'],
  ['you!', 'thou!'],
  ['MUBB', 'MUBBETH'],
  ['are', 'art'],
  ['have', 'hath'],
  ['between', 'betwixt'],
  ['here', 'hither'],
  ['where', 'wither'],
  ['will', 'wilt'],
  ['when ', 'whence'],
  ['has', 'hast'],
  ['pog', 'jesu'],
  ['this', 'tis'],
  ['hello', 'good morrow to you'],
  ['hey', 'ho'],
  ['yourself', 'thyself'],
];
//Clunky function made in 30 min, make it BETTER
function oldEnglish(string) {
  string = string.toLowerCase().split(' ');
  for (var i = 0; i < string.length; i++) {
    for (var k = 0; k < oldEnglishWords.length; k++) {
      if (string[i] == oldEnglishWords[k][0]) {
        string[i] = oldEnglishWords[k][1];
      }
    }
  }
  return string.join(' ');
}

//Get rid of this after Sticker Array is functioning
//Worst code I've written in my life - Mo
//Like who uses such indescriptive variables? X??
function getEmoji(y) {
  var x = uiChatTextbox;
  x.value += y.name;
}

//Unused functions, code
/*
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
  xhttp.open("GET", "chat.php?action=test", true);
  xhttp.send();
  //console.log('saved to db');
}
*/

//Let this be
console.log(
  '%cWelcome to the place where all the Genius happens!',
  'color: red; font-size: 30px;'
);
console.log(
  `%c
░░░░░░░░░▄░░░░░░░░░░░░░░▄░░░░
░░░░░░░░▌▒█░░░░░░░░░░░▄▀▒▌░░░
░░░░░░░░▌▒▒█░░░░░░░░▄▀▒▒▒▐░░░
░░░░░░░▐▄▀▒▒▀▀▀▀▄▄▄▀▒▒▒▒▒▐░░░
░░░░░▄▄▀▒░▒▒▒▒▒▒▒▒▒█▒▒▄█▒▐░░░
░░░▄▀▒▒▒░░░▒▒▒░░░▒▒▒▀██▀▒▌░░░
░░▐▒▒▒▄▄▒▒▒▒░░░▒▒▒▒▒▒▒▀▄▒▒▌░░
░░▌░░▌█▀▒▒▒▒▒▄▀█▄▒▒▒▒▒▒▒█▒▐░░
░▐░░░▒▒▒▒▒▒▒▒▌██▀▒▒░░░▒▒▒▀▄▌░
░▌░▒▄██▄▒▒▒▒▒▒▒▒▒░░░░░░▒▒▒▒▌░
▀▒▀▐▄█▄█▌▄░▀▒▒░░░░░░░░░░▒▒▒▐░
▐▒▒▐▀▐▀▒░▄▄▒▄▒▒▒▒▒▒░▒░▒░▒▒▒▒▌
▐▒▒▒▀▀▄▄▒▒▒▄▒▒▒▒▒▒▒▒░▒░▒░▒▒▐░
░▌▒▒▒▒▒▒▀▀▀▒▒▒▒▒▒░▒░▒░▒░▒▒▒▌░
░▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒░▒░▒░▒▒▄▒▒▐░░
░░▀▄▒▒▒▒▒▒▒▒▒▒▒░▒░▒░▒▄▒▒▒▒▌░░
░░░░▀▄▒▒▒▒▒▒▒▒▒▒▄▄▄▀▒▒▒▒▄▀░░░
░░░░░░▀▄▄▄▄▄▄▀▀▀▒▒▒▒▒▄▄▀░░░░░
░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▀▀░░░░░░░░`,
  'font-family:monospace'
);
//What do these lines do?? They hide the tabs at the top. BTW we should use the comments on GH cuz this is gonna clutter up fast
document.getElementById('resourcesTab').style.display = 'none';
document.getElementById('settingsTab').style.display = 'none';
document.getElementById('spiritTab').style.display = 'none';
//The rest makes sense
var loginCookie = getCookie('logged_in');
console.log(loginCookie);
check_auth(loginCookie);
scrollBottom();
checkPreferredMode();
set_mode();
setInterval(function () {
  if (loginCookie != 0) {
    getChatFromDB();
  }
  console.trace();
}, 60 * 1000); // 60 * 1000 milsec (every 60 seconds)
