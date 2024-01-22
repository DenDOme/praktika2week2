<template>
    <div>
    <h1>Your Orders:</h1>
    <ul>
      <li v-for="order in orders" :key="order.id">
        Order ID: {{ order.id }} |
        Products: {{ order.products.join(', ') }} |
        Order Price: {{ order.order_price }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    displayName: 'Orders',
    data() {
        return {
        orders: [],
        };
    },
    mounted() {
        this.fetchOrders();
    },
    methods: {
        fetchOrders() {
        const token = localStorage.getItem('myAppToken');
        fetch('https://jurapro.bhuser.ru/api-shop/order',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then((response) => response.json())
            .then((data) => {
            this.orders = data.data;
            })
            .catch((error) => {
            console.error('Error fetching orders:', error);
            });
        },
  },
}

</script>