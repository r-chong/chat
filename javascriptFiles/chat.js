'use strict';
////////////////////
/*Chat >> VARIABLES*/
////////////////////
let uiChatTextbox = document.getElementById('chatTextbox');
let uiChatSubmit = document.getElementById('chatSubmit');
let chatLogContainer = document.getElementById('log_cont');
let chatControlsContainer = document.getElementById('chatControlsContainer');
let uiHideDetails = document.getElementById('detailsToggle');
let uiChatLog = document.getElementById('chatLog');

function textboxKeyup(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    sendString();
    uiChatSubmit.click();
  }
}

//Functions used to display chat correctly
function scrollBottom() {
  chatLogContainer.scrollTop = chatLogContainer.scrollHeight;
}

function replaceHashtags(impureString) {
  let cleanString = impureString.replace(
    /(\#\w+)/g,
    function (unformattedText) {
      return '<chat-hashtag>' + unformattedText + '</chat-hashtag>';
    }
  );
  return cleanString;
}

function replaceLinks(impureString) {
  let cleanString = impureString.replace(
    /(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=])*)/gi,
    function (url) {
      return '<a' + " target='_blank'" + " href='" + url + "'>" + url + '</a>';
    }
  );
  return cleanString;
}

//Formats chat messages to look like SMS but Geniusised
function chatMessageFormatter() {
  let chatMsgs = document.querySelectorAll('.chatline');
  for (let i = 0; i < chatMsgs.length; i++) {
    let username = getCookie('user');
    let msg = chatMsgs[i]['outerHTML'];
    if (
      msg.includes('<span class="chat-message__content">[' + username + ']:')
    ) {
      chatMsgs[i].classList.add('chat-msg--me');
    }
    //use else if to add specific colors based on other usernames make it BETTER
  }
}

//Show or hide details
function detailsToggle() {
  var element = document.getElementsByClassName('details');
  if (uiHideDetails.checked == false) {
    //if details hidden, show details
    for (let i = 0; i < element.length; i++) {
      element[i].classList.remove('hidden');
    }
  } else if (uiHideDetails.checked == true) {
    //if details shown, hide details
    for (let i = 0; i < element.length; i++) {
      element[i].classList.add('hidden');
    }
  }
}
//Function to format user input and then send it to the DB
function sendString() {
  var dirty = uiChatTextbox.innerText;
  var clean = DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: [
      'b',
      'em',
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
  //Replaces the reply placeholder
  clean = clean.replace(/\↪️/g, msgTxtContent);
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
    "<img src='Assets/yee.jpg' class='customEmoji'>"
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
  clean = clean.replace(
    /\:(egg)\:/gim,
    "<img src='Assets/gifs/thinkegg.gif' class='customEmoji'>"
  );
  clean = clean.replace(
    /\:(um)\:/gim,
    "<img src='Assets/gifs/um_actually.gif'>"
  );
  clean = clean.replace(
    /\:(deal)\:/gim,
    "<img  class='chat__sticker' src='Assets/gifs/dealwithit.gif' "
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
  clean = clean.replace(
    /\:(dance)\:/gim,
    "<img class='chat__sticker' src='Assets/gifs/dance.gif'>"
  );
  //Random quote
  var random_number = Math.floor(Math.random() * quoteNum);
  var generated_quote = quoteArray[random_number][0];
  var generated_quote_authour = quoteArray[random_number][1];
  console.log(generated_quote + ' - ' + generated_quote_authour);
  clean = clean.replace(
    /\:(quote)\:/gim,
    generated_quote + ' - ' + generated_quote_authour
  );
  clean = replaceLinks(clean);
  clean = replaceHashtags(clean);
  var savestring = clean;
  //IMPROVEMENT: Why not just use var clean? Wat? Why make another variable?
  if (savestring != '') {
    var username = getCookie('user');
    // the updated save string [user] + savestring

    savestring = '[' + username + ']: ' + savestring;

    // save the chat string
    saveToDB(savestring, getChatFromDB);
    // set the textbox to empty
    uiChatTextbox.innerText = '';
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
      onSuccess();
    }
  };
  var apikey = getCookie('logged_in');
  var poststring = 'action=save&savestring=' + savestring + '&apikey=' + apikey;
  xhttp.open('POST', 'chat.php', true);
  xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); // php seems to need this
  xhttp.send(poststring);
}

//Function to get chat from DB AND display it correctly
function getChatFromDB() {
  var xhttp = new XMLHttpRequest();
  // run this when the readstate changes
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var responses = JSON.parse(this.responseText);
      var formatted_chatlog = '';
      // let username = getCookie('user');
      for (let i = 0; i < responses.length; i++) {
        formatted_chatlog =
          formatted_chatlog +
          '<div class="chatline">' +
          '<span class="details">' +
          responses[i]['date'] +
          // '[' + username + ']' Add username to chat details, DO NOT REMOVE -Reese
          '</span>' +
          '<span class="chat-message__content">' +
          responses[i]['chatstring'] + //message content
          '</span></div > ';
      }
      uiChatLog.innerHTML = formatted_chatlog;
      scrollBottom();
      detailsToggle();
      chatMessageFormatter();
    }
  };
  var poststring = 'action=getchat&apikey=' + getCookie('logged_in');
  xhttp.open('POST', 'chat.php', true);
  xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); // php seems to need this
  xhttp.send(poststring);
}

function executeChatFuncs() {
  uiChatSubmit.addEventListener('click', function () {
    sendString();
    getChatFromDB();
    uiChatTextbox.focus();
  });
  uiChatTextbox.addEventListener('keyup', textboxKeyup);
  uiHideDetails.addEventListener('click', detailsToggle);
}

document.addEventListener('readystatechange', (event) => {
  if (event.target.readyState === 'loaded') {
    executeChatFuncs();
  } else if (event.target.readyState === 'complete') {
    executeChatFuncs();
  }
});
