<template>
  <div class="home">
    <div class="">no title</div>
    <button @click="logout">logout</button>
  </div>
</template>

<script>

export default {
  displayName: 'LogoutView',
  methods: {
    logout() {
      this.$store.dispatch('AUTH_LOGOUT').then(() => this.$router.push('/login')).catch((error) => {
        // Handle error here
        console.error('Logout failed:', error);
        // Display error message or perform other actions
      });
    }
  }
}
</script>
