'use strict';
////////////////////
/*Login Page >> VARIABLES*/
////////////////////
let uiPassVisiblityEye = document.getElementById('password_visiblity');
let uiLoginContainer = document.getElementById('loginContainer');
let uiLoginButton = document.getElementById('loginSubmit');
let uiLoginUserField = document.getElementById('loginUser');
let uiLoginPassField = document.getElementById('loginPass');
let loginCelebrateBtn = document.getElementById('celebrate');
let confettiNum = Math.floor(Math.random() * 4);
let oldConfettiNum = confettiNum;
let cookieAlert = document.getElementById('cookieAlert');
let loginModal = document.getElementById('loginModal');
////////////////////
/*Login/Page Setup Functions*/
////////////////////

function checkAuth(apikey) {
  var logged_in = apikey;
  if (
    logged_in !==
    'bf44550db31d8f59b5da10e3a00a5072a481810b0dadfc6cfcc1f948b5f170f8'
  ) {
    uiMainContainer.classList.add('hide'); //security measure
    loginModal.style.display = 'block';
    uiLoginUserField.focus();
  } else {
    login_setup();
    getChatFromDB();
  }
}

//Validates user credentials on login page
function getAuth(user, pass) {
  var xhttp = new XMLHttpRequest();
  // run this when the readstate changes
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var responses = JSON.parse(this.responseText); // use if response is json
      // set cookie
      document.cookie = 'logged_in=' + responses.apikey;
      document.cookie = 'user=' + responses.user;
      checkAuth(responses.apikey);
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

function login_setup() {
  //console.log("you are logged in");
  loginModal.style.display = 'none';
  uiMainContainer.classList.remove('hide');
  uiChatTextbox.focus();
}

function loginValidation() {
  let user = uiLoginUserField.value;
  let pass = uiLoginPassField.value;
  getAuth(user, pass);
}

function loginKeyEnter(event) {
  if (event.key === 'Enter') {
    loginValidation();
  }
  console.log('pressed enter');
}

//Login Page Password Visibility Event Listener
function passwordVisiblity() {
  let pass_input = uiLoginPassField;
  if (pass_input.type == 'text') {
    pass_input.type = 'password';
    uiPassVisiblityEye.innerText = 'visibility';
  } else {
    pass_input.type = 'text';
    uiPassVisiblityEye.innerText = 'visibility_off';
  }
}
////////////////////
/*Login/Page Setup Functions > Cookie Alert*/
////////////////////
function hideCookieAlert() {
  cookieAlert.style.display = 'none';
}

function showCookieAlert() {
  cookieAlert.classList.remove('cookie-alert__container--hidden');
  cookieAlert.classList.add('cookie-alert__container');
  cookieAlertCloseBtn.addEventListener('click', hideCookieAlert);
  setTimeout(hideCookieAlert, 3000);
}

function displayCookieAlert() {
  //Entry types can be Reload, Navigate or backforward
  let pageEntryTypes = performance.getEntriesByType('navigation');
  let entryType = pageEntryTypes[0];
  //check if page reloaded, or else show cookie stuff
  if (entryType.type == 'reload') {
    hideCookieAlert();
  } else {
    showCookieAlert();
  }
}

////////////////////
/*Login/Page Setup Functions >> Confetti Functions*/
////////////////////
/*
Reporter: So how much confett-
Genius Chat: Yes.
 */
function basicConfetti() {
  confetti({
    particleCount: 2000,
    spread: 10000,
  });
}

function cannonConfeti() {
  confetti({
    particleCount: 500,
    spread: 70,
    origin: { y: 0.6 },
  });
}

function longConfetti() {
  var duration = 3 * 1000;
  var end = Date.now() + duration;

  (function frame() {
    // launch a few confetti from the left edge
    confetti({
      particleCount: 7,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
    });
    // and launch a few from the right edge
    confetti({
      particleCount: 7,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
    });

    // keep going until we are out of time
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

function sideConfetti() {
  var end = Date.now() + 3 * 1000;

  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

function fireWorkConfetti() {
  var duration = 5 * 1000;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  var interval = setInterval(function () {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
}

function confettiNumGenerator() {
  confettiNum = Math.floor(Math.random() * 5);
  while (confettiNum == oldConfettiNum) {
    confettiNum = Math.floor(Math.random() * 5);
  }
  oldConfettiNum = confettiNum;
}

function confettiPicker() {
  //Make a new confetti each time
  confettiNumGenerator();
  //Call different confetti each time
  if (confettiNum == '0') {
    basicConfetti();
  } else if (confettiNum == '1') {
    longConfetti();
  } else if (confettiNum == '2') {
    sideConfetti();
  } else if (confettiNum == '3') {
    fireWorkConfetti();
  } else {
    cannonConfeti();
  }
}

////////////////////
/*Login/Page Setup Functions >> Event Handler Attachments*/
////////////////////
function executeLoginFuncs() {
  //Let this be
  console.log(
    '%cWelcome to the place where all the Genius happens!',
    'color: inherit; font-size: 30px;'
  );
  var loginCookie = getCookie('logged_in');
  //Reload chat is in this script, becuase it depends on a certain cookie
  function reloadChat() {
    if (loginCookie != 0) {
      getChatFromDB();
      console.trace();
    }
  }
  checkAuth(loginCookie);
  setModeSwitchState();
  setPageMode();
  displayCookieAlert();

  //Login page event listeners
  loginCelebrateBtn.addEventListener('click', confettiPicker);
  uiPassVisiblityEye.addEventListener('click', passwordVisiblity);
  uiLoginButton.addEventListener('click', loginValidation);
  uiLoginContainer.addEventListener('keyup', loginKeyEnter);

  //Misc
  setInterval(reloadChat, 60 * 1000); // 60 * 1000 milsec (every 60 seconds)
}

document.addEventListener('readystatechange', (event) => {
  if (event.target.readyState === 'interactive') {
    executeLoginFuncs();
  } else if (event.target.readyState === 'complete') {
    executeLoginFuncs();
  }
});
