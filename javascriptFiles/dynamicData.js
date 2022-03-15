/*
This script is meant for data and dynamic emote creation.
Data within this file can be accessed within other JS files (kinda cool)
*/
let chatTextbox = document.getElementById("chatTextbox");
var emojiData = [
  ["lol", "&#128514;"],
  ["Rolling on Floor Laughing", "&#129315;"],
  ["Sunglasses, developed by Mo", "&#128526;"],
  ["Loudly crying", "&#128557;"],
  ["Shocked", "&#128561;"],
  ["Unamused", "&#128530;"],
  ["Smirking", "&#128527;"],
  ["Sleeping, RIP Mo's sleep", "&#128564;"],
  ["Mad", "&#128544;"],
  ["Madder", "&#128548;"],
  ["MADDEST", "&#128545;"],
  ["MAD AS AHEN QUOTE", "&#129324;"],
  ["The YIP have arrived.", "&#129488;"],
  ["BRUV, AHEN QUOTE.", "&#129318;"],
  ["The YIP have arrived, again.", "&#128373;"],
  ["Thumbs up, developed by Mo", "&#128077;"],
  ["NOICE", "&#128076;"],
  ["Hello! Bye! I'm waving.", "&#128075;"],
  ["Eyes, the YIP is watching you..", "&#128064;"],
  ["One + ninety-nine = hundred", "&#128175;"],
  ["Fire Nation", "&#128293;"],
  ["Earth Nation (no offense, we love Earth)", "&#128169;"],
  ["Water Nation", "&#127754;"],
  ["Air Nation", "&#9992;"],
  ["BIG BRAIN", "&#129504;"],
  ["Helpless...", "👁️&#128068👁️"],
];

//Dynamic emoji button creation
function dynamic_button_creation(buttonClass, injectionLocation, data) {
  for (let i = 0; i < data.length; i++) {
    var btn = document.createElement("BUTTON");
    btn.className = buttonClass;
    var buttonData = data[i];
    btn.innerHTML = buttonData[1];
    btn.value = buttonData[1];
    btn.title = buttonData[0];
    document.getElementById(injectionLocation).appendChild(btn);
  }
  let unprocessedButtons = document.getElementsByClassName(buttonClass);
  for (let i = 0; i < unprocessedButtons.length; i++) {
    unprocessedButtons[i].addEventListener("click", function (object) {
      chatTextbox.innerText += object.target.innerHTML;
      chatTextbox.focus();
    });
    unprocessedButtons[i].addEventListener("mouseenter", function (object) {
      object.target.classList.add("ui-hover");
      chatTextbox.focus();
    });
    unprocessedButtons[i].addEventListener("mouseleave", function (object) {
      object.target.classList.remove("ui-hover");
      chatTextbox.focus();
    });
  }
}

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "interactive") {
    dynamic_button_creation("emote", "emoji_dropdown", emojiData);
  } else if (event.target.readyState === "complete") {
    dynamic_button_creation("emote", "emoji_dropdown", emojiData);
  }
});
