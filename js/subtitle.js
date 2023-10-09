// script to generate random greetings

function changeSub(num) {
  document.getElementById("subtitle").innerText = say[num];
}


var say = [];
say[0] = "This Website has reached its end of life";
say[1] = "This Website has reached its end of life";
say[2] = "This Website has reached its end of life";
say[3] = "This Website has reached its end of life";
say[4] = "This Website has reached its end of life";
say[5] = "This Website has reached its end of life";
say[6] = "This Website has reached its end of life";
say[7] = "This Website has reached its end of life";

// pick a random greeting
var howmany = say.length;
var bRand = 0;
bRand = Math.random();
bRand = Math.floor(bRand * howmany);
sayWhat = say[bRand];
document.getElementById("subtitle").innerText = sayWhat;

function changeSplash(num) {
  document.getElementById("subtitle").innerText = say[num];
  var ret = "Set current splash to splash " + num + ", " + say[num];
  return ret;
}
