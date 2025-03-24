
<template>
  <div>
    <h2>Login</h2>
    <input v-model="email" placeholder="Email" />
    <input v-model="pin" type="password" placeholder="PIN" />
    <button @click="login">Login</button>
    <router-link to="/forgot-pin">Forgot PIN?</router-link>
    <router-link to="/signup">Sign Up</router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const pin = ref('');
const router = useRouter();

const login = () => {
  if (email.value === 'test@test.com' && pin.value === '1234') {
    alert('Login successful');
    router.push('/wallet');
  } else {
    alert('Invalid credentials');
  }
};
</script>
