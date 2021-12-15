<template>
    <div class="p-md bg-light">
        <h1>Login</h1>
        <form action="#" @submit.prevent="handleLogin">
            <div class="form-row">
                <input type="email" v-model="formData.email">
            </div>
            <div class="form-row">
                <input type="password" v-model="formData.password">
            </div>
            <div class="form-row">
                <button type="submit">Sign In</button>
            </div>
        </form>
    </div>
</template>

<script>

export default {
    name: 'Home',
    data() {
        return {
            formData: {
                email: '',
                password: ''
            }
        };
    }
}
</script>
