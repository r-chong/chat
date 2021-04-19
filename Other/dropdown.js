  
//Text Dropdown Functions
function ttylText() {
    document.getElementById("textbox").value += "Talk to you later!";
}
function mubbText() {
    document.getElementById("textbox").value += "May the Great Union (of the Genius Collaborators) be blessed!";
}
function cyaText() {
    document.getElementById("textbox").value += "Cya later, MUBB!";
}
function yipText() {
    document.getElementById("textbox").value += "Comrade, does the YIP need to visit thou!?👀";
}

//Quick Action Functions
function chatClear() {
  document.getElementById("textbox").value = "";
}
function chatFlusherButton() {
  var i = 0;
  while (i < 1601) {
    document.getElementById("textbox").value += "-";
    i++;
  }
}

//Emoji Dropdown Functions
function roflEmoji() {
    document.getElementById("textbox").value += "🤣";
}
function coolGlassesEmoji() {
    document.getElementById("textbox").value += "😎";
}
function loudlyCryingEmoji() {
    document.getElementById("textbox").value += "😭";
}
function shockedEmoji() {
    document.getElementById("textbox").value += "😱";
}
function unamusedEmoji() {
    document.getElementById("textbox").value += "😒";
}
function smirkingEmoji() {
    document.getElementById("textbox").value += "😏";
}
function sleepingEmoji() {
    document.getElementById("textbox").value += "😴";
}
function eyeEmoji() {
    document.getElementById("textbox").value += "👀";
}
function thumbsUpEmoji() {
    document.getElementById("textbox").value += "👍";
}
function hundredPercentEmoji() {
    document.getElementById("textbox").value += "💯";
}
function madEmoji() {
    document.getElementById("textbox").value += "😤";
}
function wavingEmoji() {
    document.getElementById("textbox").value += "👋";
}
function madderEmoji() {
    document.getElementById("textbox").value += "😠";
}
function madAsAhenQuoteEmoji() {
    document.getElementById("textbox").value += "😡";
}
function fireNationEmoji() {
    document.getElementById("textbox").value += "🔥";
}
function earthNationEmoji() {
    document.getElementById("textbox").value += "💩";
}
function waterNationEmoji() {
    document.getElementById("textbox").value += "🌊";
}
function airNationEmoji() {
    document.getElementById("textbox").value += "✈️";
}
function yipEmoji() {
    document.getElementById("textbox").value += "🧐";
}
function ahenquotesEmoji() {
    document.getElementById("textbox").value += "🤦‍♀️";
}
function niceEmoji() {
    document.getElementById("textbox").value += "👌";
}
function bigBrainEmoji() {
    document.getElementById("textbox").value += "🧠";
}
function helplessFaceEmoji() {
    document.getElementById("textbox").value += "👁️👄👁️";
}
function yipVTwoEmoji() {
    document.getElementById("textbox").value += "🕵️";
}

//Emote Dropdown Functions
function shrugEmoticon() {
    document.getElementById("textbox").value += "¯\_(ツ)_/¯";
}
function happyEmoticon() {
    document.getElementById("textbox").value += ":-)";
}
function sadEmoticon() {
    document.getElementById("textbox").value += ":-(";
}
function winkEmoticon() {
    document.getElementById("textbox").value += ";‑)";
}

//Misc Functions (reload on hover of reload button function)
function reloadOnHover(x) {
    console.log("reloaded");
    getChatFromDB();
}
//Below is the code for the context menu
var menuDisplayed = false;
var menuBox = null;

window.addEventListener(
  "contextmenu",
  function () {
    var left = arguments[0].clientX;
    var top = arguments[0].clientY;

    menuBox = window.document.querySelector(".menu");
    menuBox.style.left = left + "px";
    menuBox.style.top = top + "px";
    menuBox.style.display = "block";

    arguments[0].preventDefault();

    menuDisplayed = true;
  },
  false
);

window.addEventListener(
  "click",
  function () {
    if (menuDisplayed == true) {
      menuBox.style.display = "none";
    }
  },
  true
);