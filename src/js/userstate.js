import {auth} from '../js/firebase.js';
import {userstate} from '../js/store.js';

var userProfile = {};

auth.onAuthStateChanged(user => {
  if (user){
    userstate.set(true);

    userProfile = {
      displayName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      photoUrl: user.photoURL,
      uid: user.uid
    };
  } else {
    userstate.set(false);
    userProfile = {};
  }
});