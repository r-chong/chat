console.log("emoji")

//function copyEmoji() {
//	  /* Get the text field */
//	  var copyText = document.getElementById("emojiField");
//
//	  /* Select the text field */
//	  copyText.select();
//	  copyText.setSelectionRange(0, 99999); /* For mobile devices */
//
//	  /* Copy the text inside the text field */
//	  document.execCommand("copy");
//
//	  /* Alert the copied text */
//	  alert("Copied the text: " + copyText.value);
//}

function copyEmoji2(emoji) {
	  /* Get the emoji num */
	  var emojiCode = emoji.getAttribute("data-emojiCode");
	  console.log(emojiCode);
	  
	  var copyText = document.getElementById("emojiField");
	  copyText.select();
	  copyText.setSelectionRange(0, 99999); /* For mobile devices */
	  
	  document.execCommand("insertText");
	  
	  /* Copy the emoji*/
	  document.execCommand("copy");

	  /* Alert the copied text */
	  alert("Copied the text: " + emojiCode.value);
}

//document.getElementById("copyButton").addEventListener("click", function() {
//  alert("Hello World!");
//});
//
//document.getElementById("copyButton").addEventListener("click", copyEmoji() {
//	console.log("clicked")
//});