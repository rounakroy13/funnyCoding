// Load a page from another page with 10sec interval.

var win1 = window.open("https://www.google.com/");

timer1 = setInterval(function(){win1.location.href="https://www.google.com/"},10000);
