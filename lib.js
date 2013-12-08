var wifiNames = ['Wi Believe I Can Fi',
                 'Hide Yo Kids Hide Yo WiFi',
                 'Pineapple'];
var shuffleNames = wifiNames.slice(0)
var counter = 0;

//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle(o){ //v1.0
  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

// Returns a random wifi name string
function randomWifiName() {
  if (counter == wifiNames.length) {
    shuffleNames = shuffle(wifiNames);
    counter = 0;
  }
  document.getElementById('name').innerHTML = shuffleNames[counter++];
//  document.getElementById('name').innerHTML =  wifiNames[Math.floor(Math.random() * wifiNames.length)];
}

window.onload = function() {
  randomWifiName();
}
