var wifiNames = ['Wi Believe I Can Fi',
                 'Hide Yo Kids Hide Yo Wi-Fi',
                 'Pretty fly for a Wi-Fi',
                 'Abraham Linksys',
                 'Pineapple'];
var shuffleNames = wifiNames.slice(0)
var counter = 0;

function shuffle(arr){
  for (var i = 0; i < arr.length; i++) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp; 
  }
  return arr;
}

// Returns a random wifi name string
function randomWifiName() {
  if (counter == 0) {
    shuffleNames = shuffle(wifiNames);
  }
  document.getElementById('name').innerHTML = shuffleNames[counter++];
  if (counter == wifiNames.length) {
    counter = 0
  }
}

window.onload = function() {
  randomWifiName();
}
