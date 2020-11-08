export var network;

export function checkNetwork() {
  if (navigator.onLine) {
    console.log('checkNetwork: Online');
    network = true;
    // network.set("true");
  } else {
    console.log('checkNetwork: Offline');
    network = false;
    // network.set("false");
  }
}