<button class="button" on:click={loginUser}>Get Started</button>

<style>
  .button {
    display: flex;
    background-color: orange;
    color: white;
    text-align: center;
    text-decoration: none;
    height: 40px;
    box-sizing: border-box;
    z-index: 12;
    }
</style>

<script>
  // Firebase 
  import {auth, provider} from '../js/firebase.js';

  function loginUser() {
      auth.signInWithRedirect(provider);
  }

</script>