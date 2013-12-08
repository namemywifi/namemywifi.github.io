var wifiNames = ['Wi Believe I Can Fi',
                 'Drop It Like It\'s Hotspot',
                 'Turn Wi-Fi Off',
                 'Bill Wi, the Science Fi',
                 'Hide Yo Kids Hide Yo Wi-Fi',
                 'Keep It On the Download',
                 'Pretty Fly For a Wi-Fi',
                 'FBI Surveillance Van',
                 'Winternet Is Coming',
                 'Router? I Hardly Know Her!',
                 'New England Clam Rowda',
                 'The LAN Before Time',
                 'Wi-Fi When You Can Negotiate?',
                 'It Burns When IP',
                 'The Promised LAN',
                 'Abraham Linksys',
                 'Get Off my WLAN',
                 'Wu-Tang Lan',
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
