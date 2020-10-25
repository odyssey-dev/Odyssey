<p class="logout" on:click={logout}>Logout</p>

<style>
  .logout {
    color: #E50000;
    text-align: left;
    font-size: inherit;
    margin: 0;
    }
</style>

<script>
  // Firebase 
  import {auth, provider} from '../js/firebase.js';

  export function logout() {
    auth.signOut();
  }
</script>