<button class="button" on:click={login}>Sign in with Google</button>

<style>
  .button {
    background-color: orange;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    }
</style>

<script>
  // Firebase 
  import {auth, provider} from '../js/firebase.js';

  function login() {
    auth.signInWithPopup(provider);
  }

</script>