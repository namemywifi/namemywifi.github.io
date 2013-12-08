var wifiNames = ['Wi Believe I Can Fi',
                 'Hide Yo Kids Hide Yo WiFi',
                 'Pineapple'];
// Returns a random wifi name string
function randomWifiName() {
  var ret = wifiNames[Math.floor(Math.random() * wifiNames.length)];
  return ret;
}
