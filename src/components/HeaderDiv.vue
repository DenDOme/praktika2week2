<template>
    <div class="header">
        <router-link class="header_link" to="/">Home</router-link>
        <router-link class="header_link" v-show="!userAuthed" to="/login">Login</router-link>
        <router-link class="header_link" v-show="!userAuthed" to="/register">Register</router-link>
        <router-link class="header_link" v-show="userAuthed" to="/cart">Cart</router-link>
        <router-link class="header_link" v-show="userAuthed" to="/order">Orders</router-link>
        <button class="logout_btn" v-show="userAuthed" @click="logout">logout</button>
    </div>
</template>

<script>
export default{
    name: 'HeaderDiv',
    computed: {
        userAuthed() {
            return this.$store.getters.isAuthenticated
        }
    },
    methods:{
        logout(){
            this.$store.dispatch('AUTH_LOGOUT').then(() => this.$router.push('/')).catch((error) => {
                console.error('Logout failed:', error);
            });
        }
    }
}
</script>

<style scoped>
.header{
    background: #047275;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content:space-around;
}
.header_link{
    color: #fff;
    text-decoration: none;
    font-size: 25px;
}
.logout_btn{
    height: 32px;
    width: 65px;
    font-size: 17px;
    background: #fff;
    border: 0;
    border-radius: 10px;
    color: #000;
}
</style>