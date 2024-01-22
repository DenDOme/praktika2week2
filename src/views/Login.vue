<template>
    <form class="login" @submit.prevent="login">
        <h1>Sign in</h1>
        <label>email</label>
        <input type="email" required v-model="email" />
        <label>password</label>
        <input type="password" required v-model="password" />
        <hr />
        <button type="submit">Login</button>
    </form>
</template>

<script>
export default {
    displayName: 'LoginView',
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        login() {
            const newUser = {
                email: this.email,
                password: this.password
            };
            this.$store.dispatch('AUTH_REQUEST', newUser).then(() => this.$router.push("/"));
        }
    }
}
</script>

<style scoped>
.login {
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 10px;
    margin: 0 auto;
}

.login input,
button {
    border: 1px solid black;
    border-radius: 5px;
}

hr {
    margin: 10px 0;
}
</style>