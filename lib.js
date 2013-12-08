var wifiNames = ['Wi Believe I Can Fi',
                 'Hide Yo Kids Hide Yo WiFi',
                 'Pineapple'];

// Returns a random wifi name string
function randomWifiName() {
  document.getElementById('name').innerHTML =  wifiNames[Math.floor(Math.random() * wifiNames.length)];
}

window.onload = function() {
  randomWifiName();
}