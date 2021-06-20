/* 
This script is meant for emote data and dynamic emote creation.
Data within this file can be accessed within other JS files (kinda cool)
*/
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

//Example Sticker Array (WIP for Genius Chat 4.0)
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
//Dynamic emoji button creation
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
	let unprocessedButtons = document.getElementsByClassName(buttonClass);
	for (let i = 0; i < unprocessedButtons.length; i++) {
		unprocessedButtons[i].addEventListener('click', function (object) {
			if (object.target.value.indexOf('&#') !== -1) {
				uiChatTextbox.value += object.target.innerHTML;
			} else if (object.target.value.indexOf(':') !== -1) {
				uiChatTextbox.value += object.target.value;
			}
			uiChatTextbox.focus();
		});
		unprocessedButtons[i].addEventListener('mouseenter', function (object) {
			object.target.classList.add('pattern__stripes-1');
			uiChatTextbox.focus();
		});
		unprocessedButtons[i].addEventListener('mouseleave', function (object) {
			object.target.classList.remove('pattern__stripes-1');
			uiChatTextbox.focus();
		});
	}
}
dyanmic_button_creation('emote', 'emoji_dropdown', emojiData);