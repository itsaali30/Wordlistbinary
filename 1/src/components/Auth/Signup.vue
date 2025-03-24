<template>
  <div>
    <h2>Sign Up</h2>
    <input v-model="email" placeholder="Email" />
    <input v-model="pin" type="password" placeholder="PIN" />
    <input v-model="confirmPin" type="password" placeholder="Confirm PIN" />
    <button @click="signup">Sign Up</button>
    <router-link to="/login">Already have an account? Login</router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const pin = ref('');
const confirmPin = ref('');
const router = useRouter();

const signup = () => {
  if (pin.value !== confirmPin.value) {
    alert("PINs do not match!");
  } else {
    alert("Sign Up successful! Please log in.");
    router.push('/login');
  }
};
</script>

