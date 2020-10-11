import {auth} from '../js/firebase.js';
import {userstate, userprofile} from '../js/store.js';

auth.onAuthStateChanged(user => {
  if (user){
    userstate.set(true);
    userprofile.set({
      displayName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      photoUrl: user.photoURL,
      uid: user.uid
    });
  } else {
    userstate.set(false);
    userprofile.set(0);
  }
});