import {auth} from '../js/firebase.js';
import {userstate, userprofile} from '../js/store.js';
import { getLocation} from '../js/geolocation.js';


auth.onAuthStateChanged(user => {
  if (user){
    userstate.set(true);
    var profile = {
      displayName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      photoUrl: user.photoURL,
      uid: user.uid,
      token: user.xa
    };
    userprofile.set(profile);
    localStorage.setItem('Profile', JSON.stringify(profile));
    getLocation();

    console.log("Auth Ready");
  } else {
    userstate.set(false);
    userprofile.set(0);
  }
});