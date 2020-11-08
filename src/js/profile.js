import {auth} from '../js/firebase.js';
import { network } from '../js/networkCheck.js';

if (network == true) {
  profileApi()
} else {
  console.log("Offline");
}

export async function profileApi() {
  auth.currentUser.getIdToken().then(function(token) {
    console.log('Sending request to', apiUrl+"api/profile", 'with ID token in Authorization header.');
    var req = new XMLHttpRequest();
    req.onload = function() {
      console.log(req.responseText);
    };
    req.onerror = function() {
      this.responseContainer.innerText = 'There was an error';
    };
    req.open('GET', apiUrl+"api/profile", true);
    req.setRequestHeader('Authorization', 'Bearer ' + token);
    req.send();
  });
} 