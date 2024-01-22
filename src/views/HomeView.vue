<template>
  <div class="home">
    <button v-show="userAuthed" @click="logout">logout</button>
    <router-link v-show="!userAuthed" to="/login">Login</router-link>
    <router-link v-show="!userAuthed" to="/register">Register</router-link>
    <router-link v-show="userAuthed" to="/cart">Cart</router-link>
    <router-link v-show="userAuthed" to="/order">Orders</router-link>
  </div>
  <div class="catalog-grid">
    <div class="catalog-item" v-for="product in products" :key="product.id">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <p>{{ product.price }}</p>
      <button v-show="userAuthed" @click="addToCart(product.id)">Add to Cart</button>
    </div>
  </div>
</template>

<script>

export default {
  displayName: 'Catalog',
  computed: {
    products() {
      return this.$store.getters.products
    },
    userAuthed() {
      return this.$store.getters.isAuthenticated
    }
  },
  mounted() {
    this.$store.dispatch('GET_PRODUCTS')
  },
  methods: {
    addToCart(productId){
      const token = localStorage.getItem('myAppToken');
      fetch(`https://jurapro.bhuser.ru/api-shop/cart/${productId}`,{
        method: 'POST',
        headers: {
          'Content-Type':'application/json',
          'Authorization': `Bearer ${token}`
        },
      }).then((response) => {response.json()}).catch((error) => {console.error('error',error)});
    },
    logout() {
      this.$store.dispatch('AUTH_LOGOUT').then(() => this.$router.push('/')).catch((error) => {
        console.error('Logout failed:', error);
      });
    },
  }
}
</script>

<style scoped>
.catalog-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.catalog-item {
  width: 50%;
  text-align: center;
  margin: 0 auto;
}
</style>