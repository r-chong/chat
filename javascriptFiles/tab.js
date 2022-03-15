'use strict';
////////////////////
/*General/Tabs >> VARIABLES*/
////////////////////
//Context menu related variables
let disableContextMenu = false;
let contextMenuSwitch = document.getElementById('contextMenuSwitch');
let mainMenuBox = document.getElementById('mainContextMenu');
let mainMenuReload = document.getElementById('contextMenuChatReload');
let mainMenuLogout = document.getElementById('contextMenuLogout');
let messageMenuBox = document.getElementById('messageContextMenu');
let messageReply = document.getElementById('messageReply');
let msgTxtContent;
//Navigation bar related variables
let navbar = document.getElementById('navbar');
let navbarChat = document.getElementById('chat');
let navbarResources = document.getElementById('resources');
let navbarSettings = document.getElementById('settings');
let navbarSpiritWorld = document.getElementById('spirit');
let navbarChatReload = document.getElementById('reload');
//Tabs(Settings, Resources, Chat) variables
let uiMainContainer = document.getElementById('container');
let uiLogout = document.getElementById('logout');
let uiChatFlush = document.getElementById('chatFlush');
let uiPageTitle = document.getElementById('pageTitle');
let uiChatTab = document.getElementById('chatTab');
let uiResourcesTab = document.getElementById('resourcesTab');
let uiSettingsTab = document.getElementById('settingsTab');
let uiSpiritTab = document.getElementById('spiritTab');
let cookieAlertCloseBtn = document.getElementById('cookieAlertCloseBtn');
let notificationSwitch = document.getElementById('notificationSwitch');
let modeSwitch = document.getElementById('modeSwitch');

//IMPROVEMENT: Remove 'ui' from all variables make this BETTER

////////////////////
/*General > Cookie Creation*/
////////////////////
function setCookie(cname, cvalue, exdays) {
  //sets the cookie name, the cookie itself, and the days until expiry
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();
  document.cookie =
    cname + '=' + cvalue + ';' + expires + ';SameSite=None;Secure;path=/';
}

function getCookie(cname) {
  //function runs thru & splits all cookies by the semicolons.
  //if cookie is found, return value of cookie
  var name = cname + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

////////////////////
/*Tabs> Tab display & Navbar related functions*/
////////////////////
function chatFlush() {
  let chatFlushWarning =
    'You are about to trigger a chat flush.\nDo NOT use the chat for 2.5 seconds.';
  if (confirm(chatFlushWarning)) {
    for (let i = 0; i < 100; i++) {
      saveToDB('-', getChatFromDB);
    }
  }
  scrollBottom();
}

function navBtnClickHandler(element) {
  let tabButtonParent = element.target.parentElement;
  if (element.target.id == '') {
    openTab(tabButtonParent, tabButtonParent.id);
    setPageTitle(tabButtonParent.id);
  } else {
    openTab(element.target, element.target.id);
    setPageTitle(element.target.id);
  }
}

function openTab(element, elementId) {
  //declare all variables
  let tabindex, tabcontent;
  //gets all tabcontent
  tabcontent = document.getElementsByClassName('tabcontent');
  for (tabindex = 0; tabindex < tabcontent.length; tabindex++) {
    tabcontent[tabindex].style.display = 'none';
    // making it so the tabcontent is not displayed
  }
  clearActiveTabs();
  //display the tabcontent that is selected
  tabcontent[0].style.display = 'block';
  element.className += ' active';
  element.className += ' ui-hover';

  document.getElementById(elementId + 'Tab').style.display = 'block';
  //I added ids of elementId+"Tab" to each tab content to get them to be callable with their elementId
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
  let tab_button = document.getElementsByClassName('nav__sidebar-content');

  for (let tabindex = 0; tabindex < tab_button.length; tabindex++) {
    tab_button[tabindex].className = tab_button[tabindex].className.replace(
      ' active',
      ''
    ); // this one needs to be assigned back to the element
    tab_button[tabindex].className = tab_button[tabindex].className.replace(
      ' ui-hover',
      ''
    ); // this one needs to be assigned back to the element
    //tablinks[tabindex].className = "";
  }
}
////////////////////
/* Tabs > Custom Context Menu*/
////////////////////
//For custom context menu (do not remove)
function openContextMenu(event) {
  let parentEle = event.target.parentElement.className;
  let grandParentEle = event.target.parentElement.parentElement.className;
  let contextMenuConditions =
    disableContextMenu === false &&
    parentEle.includes('chat__controls-container') === false;

  const contextMenu = {
    event: event,
    left: arguments[0].clientX,
    top: arguments[0].clientY,
    isLoginPage:
      parentEle.includes('loginpg') || grandParentEle.includes('loginpg'),
    isChatMessage:
      parentEle.includes('chatline') || grandParentEle.includes('chatline'),
  };
  hideContextMenu();
  if (contextMenuConditions) {
    event.preventDefault();
    chooseContextMenu(contextMenu);
  }
}

function replyToMessage(message) {
  msgTxtContent = '<code>' + message + '</code>';
  uiChatTextbox.innerText = '↪️';
}

function chooseContextMenu({ event, left, top, isLoginPage, isChatMessage }) {
  if (isLoginPage) {
    //Display login page context menu
    displayContextMenu(left, top, mainMenuBox, true);
  } else if (isChatMessage) {
    //Display chat message context menu
    displayContextMenu(left, top, messageMenuBox, false);
    let message = event.target.parentElement.textContent;
    messageReply.addEventListener('click', () => replyToMessage(message));
  } else {
    //Display regular context menu
    displayContextMenu(left, top, mainMenuBox, false);
  }
}

function displayContextMenu(
  leftPosition,
  topPosition,
  menu,
  hideSensitiveButtons
) {
  menu.style.left = leftPosition + 'px';
  menu.style.top = topPosition + 'px';
  menu.style.display = 'block';
  if (hideSensitiveButtons === true) {
    mainMenuReload.classList.add('hide');
    mainMenuLogout.classList.add('hide');
  } else {
    mainMenuReload.classList.remove('hide');
    mainMenuLogout.classList.remove('hide');
  }
}

function hideContextMenu() {
  mainMenuBox.style.display = 'none';
  messageMenuBox.style.display = 'none';
}

function setContextMenuState(event) {
  event.preventDefault;
  disableContextMenu = event.target.checked;
}

////////////////////
/*Tabs > Settings tab*/
////////////////////
function logout() {
  let loginModal = document.getElementById('loginModal');
  loginModal.style.display = 'block';
  uiMainContainer.classList.add('hide');
  document.cookie = 'logged_in=0';
}

////////////////////
/*Tabs > Settings tab > Mode Related Functions*/
////////////////////
//Find which mode is set
function findMode(element) {
  let mode;
  if (element.checked) {
    mode = 'dark';
  } else {
    mode = 'body';
  }
  return mode;
}

function changeMode(event) {
  let mode = findMode(event.target);
  //Change mode of body (all other elements will inherit)
  setCookie('mode', mode, 365);
  if (mode === 'dark') {
    document.body.classList.add(mode);
  } else {
    document.body.classList.remove('dark');
  }
}

function setModeSwitchState() {
  var preferredMode = getCookie('mode');
  if (preferredMode === 'dark') {
    modeSwitch.checked = true;
  } else {
    modeSwitch.checked = false;
  }
}

function setPageMode() {
  let mode = getCookie('mode');
  if (mode === 'dark') {
    document.body.classList.add(mode);
  } else {
    setCookie('mode', 'body', 365);
  }
}

function chatNotifier() {
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
}

////////////////////
/*Misc*/
////////////////////
function titleCase(string) {
  string = string.toLowerCase().split(' ');
  for (let i = 0; i < string.length; i++) {
    string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
  }
  return string.join(' ');
}

function executeTabFuncs() {
  //Whole document/window event listeners
  document.addEventListener('contextmenu', openContextMenu, false);
  window.addEventListener('click', hideContextMenu);

  navbarChatReload.addEventListener('mouseenter', function () {
    navbarChatReload.classList.add('active');
    getChatFromDB();
  });
  navbarChatReload.addEventListener('mouseleave', function () {
    navbarChatReload.classList.remove('active');
  });
  navbarChatReload.addEventListener('click', getChatFromDB);
  navbarChat.addEventListener('click', navBtnClickHandler);
  navbarResources.addEventListener('click', navBtnClickHandler);
  navbarSettings.addEventListener('click', navBtnClickHandler);
  navbarSpiritWorld.addEventListener('click', navBtnClickHandler);
  uiChatFlush.addEventListener('click', chatFlush);

  //Settings page event listener
  contextMenuSwitch.addEventListener('click', setContextMenuState);
  uiLogout.addEventListener('click', logout);
  notificationSwitch.addEventListener('click', chatNotifier);

  //Mode event listeners
  modeSwitch.addEventListener('change', changeMode);
  scrollBottom();
}

document.addEventListener('readystatechange', (event) => {
  if (event.target.readyState === 'interactive') {
    executeTabFuncs();
  } else if (event.target.readyState === 'complete') {
    executeTabFuncs();
  }
});
