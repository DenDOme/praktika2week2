<template>
    <div class="cart-item" v-for="cart in carts" :key="cart.id">
      <h3>{{ cart.name }}</h3>
      <p>{{ cart.description }}</p>
      <p>{{ cart.price }}</p>
    </div>
</template>

<script>
export default {
    displayName: 'Cart',
    computed: {
        carts(){
            console.log(this.$store.getters.carts)
            return this.$store.getters.carts
        }
    },
    mounted(){
        this.$store.dispatch('GET_CARD_DATAS')
    },
    methods: {
        
    }
}

</script>