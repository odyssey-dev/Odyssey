import {auth} from '../js/firebase.js';
import {userstate, userprofile} from '../js/store.js';

auth.onAuthStateChanged(user => {
  if (user){
    // console.log(user);
    userstate.set(true);
    userprofile.set({
      displayName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      photoUrl: user.photoURL,
      uid: user.uid
    });
    console.log("set",userprofile);
  } else {
    userstate.set(false);
    userprofile.set(0);
    console.log("unset",userprofile);
  }
});