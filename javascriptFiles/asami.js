/*

I am begging you, please leave this page

This is just bad code written by me

PLEASE LEAVE!

Still here?
GET TH'AHENQUOTE OUTTA HERE



*/
let textbox = document.getElementById('chatTextbox');
//For ASAMI aka the suggestion provider
let matchedWords, matchesFound, wordsDontExist, word, inputLastWord;
var wordList = fetch('./javascriptFiles/words.json')
  .then((response) => response.json())
  .then((json) => {
    wordList = json;
  });
function suggestionProvider(event) {
  /*is the event parameter needed? Make this BETTER 
  (i would remove it, but too lazy to test the website)
  its 1:39AM rn, 2021-07-22 and I am dead tired of ASAMI, pog help me
  */
  if (textbox.innerText != '') {
    variableResetter();

    let input = textbox.innerText.split(' ');
    if (input[input.length - 1] != '') {
      inputLastWord = input[input.length - 1];
    } else {
      inputLastWord = input[input.length - 2];
    }
    //Clean the last word, but leaves '<' and ':'
    inputLastWord = inputLastWord.replace(/[.,\/#!$%\^&\*;{}=\-_`~()]/g, '');
    //First letter and second letter allow for us to access the right array
    let firstLetter = inputLastWord.charAt(0);
    let secondLetter = inputLastWord.charAt(1);
    let firstTwoLetters = firstLetter.concat(secondLetter);
    //The last word is turned into a regex expression for matching
    inputLastWord = new RegExp(inputLastWord.toLowerCase(), 'g');
    /*Murphy's law is that "Everything that can go wrong, will go wrong." 
    Thus we must check if the wordList (array) exist*/
    try {
      word = wordList[firstTwoLetters][0];
    } catch (error) {
      wordsDontExist = error instanceof TypeError;
    }
    //Checks to make sure that the array itself exists
    if (wordsDontExist == false) {
      wordsArrayCreator(firstTwoLetters);
    }
  } else {
    toggleSuggestionBox('hidden');
  }
  //make this BETTER
}
function variableResetter() {
  //Reset all the variables
  matchedWords = [];
  matchesFound = 0;
  wordsDontExist = false;
  inputLastWord = '';
}
function wordsArrayCreator(accessLetter) {
  let wordsLength = wordList[accessLetter].length;
  if (wordsLength < 14) {
    for (let i = 0; matchesFound < wordsLength; i++) {
      word = wordList[accessLetter][i];
      if (matchedWords.indexOf(word) == -1) {
        matchedWords.push(word);
        matchesFound += 1;
      }
    }
    assignDataToSuggestionBtn(matchedWords, inputLastWord);
  } else if (wordsLength >= 14) {
    for (let i = 0; matchesFound < 14; i++) {
      word = wordList[accessLetter][i];
      matchedWords.push(word);
      matchesFound += 1;
    }
    assignDataToSuggestionBtn(matchedWords);
  }
}
function toggleSuggestionBox(state) {
  suggestionBox.style.visibility = state;
}
function assignDataToSuggestionBtn(wordsToAssign) {
  let suggestionBtn = document.getElementsByTagName('suggestion-btn');
  for (let btn = 0; btn < suggestionBtn.length; btn++) {
    if (wordsToAssign[btn] != undefined) {
      let clonedBtn = suggestionBtn[btn].cloneNode(true);
      //Button is cloned, so that the event listener, etc is all replaced and reset
      suggestionBtn[btn].parentNode.replaceChild(clonedBtn, suggestionBtn[btn]);
      suggestionBtn[btn].textContent = wordsToAssign[btn];
      suggestionBtn[btn].addEventListener('click', replaceTextboxData);
      toggleSuggestionBox('visible');
      suggestionBtn[btn].style.visibility = 'visible';
    } else {
      suggestionBtn[btn].style.visibility = 'hidden';
    }
  }
}

function replaceTextboxData(event) {
  event.preventDefault;
  if (textbox.innerText != '') {
    let textboxValue = textbox.innerText.split(' ');
    if (textboxValue[textboxValue.length - 1] != '') {
      textboxValue[textboxValue.length - 1] = '';
      textboxValue[textboxValue.length - 1] = event.target.textContent;
    } else {
      textboxValue[textboxValue.length - 2] = '';
      textboxValue[textboxValue.length - 2] = event.target.textContent;
    }
    textboxValue = textboxValue.join(' ');
    textbox.innerText = textboxValue;
    textbox.focus();
  } else {
    textbox.innerText = event.target.textContent;
  }
}

// Create a class for the element
class WordCount extends HTMLButtonElement {
  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
  }
}

function asamiInitializer() {
  textbox = document.getElementById('chatTextbox');
  textbox.addEventListener('input', suggestionProvider);
  customElements.define('suggestion-btn', WordCount, { extends: 'button' });
}
document.addEventListener('readystatechange', (event) => {
  if (event.target.readyState === 'loaded') {
    asamiInitializer();
  } else if (event.target.readyState === 'complete') {
    asamiInitializer();
  }
});
