<button class="button" on:click={login}>Sign in with Google</button>

<style>
  .button {
    display: flex;
    background-color: orange;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    padding: 20px;
    width: 100%;
    }
</style>

<script>
  // Firebase 
  import {auth, provider} from '../js/firebase.js';

  function login() {
    auth.signInWithPopup(provider);
  }

</script>