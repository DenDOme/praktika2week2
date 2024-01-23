<template>
    <HeaderDiv/>
    <div class="cart-item" v-for="cart in carts" :key="cart.id">
      <h3>{{ cart.name }}</h3>
      <p>{{ cart.description }}</p>
      <p>{{ cart.price }}</p>
      <button @click="removeItem(cart.id)">DELETE</button>
    </div>
    <button v-show="carts.length > 0" @click="placeOrder">ORDER</button>
</template>

<script>
import HeaderDiv from '../components/HeaderDiv.vue'

export default {
    displayName: 'Cart',
    components:{
        HeaderDiv
    },
    computed: {
        carts(){
            return this.$store.getters.carts
        },
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

<style scoped>

</style>