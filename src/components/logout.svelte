<button class="button" on:click={logout}>Logout</button>

<style>
  .button {
    background-color: #888;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    }
</style>

<script>
  // Firebase 
  import {auth, provider} from '../js/firebase.js';

  function logout() {
    auth.signOut();
  }
</script>