//code for HTTP redirect!
//Will redirect localhost too, so be careful
//I am a mad scientist

//RewriteEngine On
//RewriteCond %{HTTP_HOST} ^ [NC]
//RewriteCond %{SERVER_PORT} 80
//RewriteRule ^(.*)$ https://goosenews.ca/chatx/$1 [R,L]

//Code for notifications - rando testing ya know
function notifyMe() {
  if (!("Notification" in window)) {
    alert(
      "This browser does not support desktop notification, please use a different browser!"
    );
  }
  //Check if notification permission has been granted
  else if (Notification.permission === "granted") {
    //Make notification
    var notification = new Notification("Hi there!");
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== "denied") {
    //Ask for permission
    Notification.requestPermission().then(function (permission) {
      //Check if permission was granted
      if (permission === "granted") {
        var notification = new Notification("Hi there!");
      }
      if (permission === "denied") {
        alert(
          "For UGCW to be able to notifiy you about new text messages, please enable notifications!"
        );
      }
    });
  }
}

/*
workin on reply to div
*/
