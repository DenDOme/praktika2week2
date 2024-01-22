<template>
    <div class="cart-item" v-for="cart in carts" :key="cart.id">
      <h3>{{ cart.name }}</h3>
      <p>{{ cart.description }}</p>
      <p>{{ cart.price }}</p>
      <button @click="removeItem(cart.id)">DELETE</button>
    </div>
    <button @click="placeOrder">ORDER</button>
</template>

<script>
export default {
    displayName: 'Cart',
    computed: {
        carts(){
            return this.$store.getters.carts
        }
    },
    mounted(){
        this.$store.dispatch('GET_CARD_DATAS')
    },
    methods: {
        placeOrder(){
            this.$store.dispatch('PLACE_ORDER').then(() => this.$router.push('/order'))
        },
        removeItem(itemId){
            this.$store.dispatch('REMOVE_CARD_ITEM',itemId)
        }
    }
}

</script>