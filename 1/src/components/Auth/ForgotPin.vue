
<template>
  <div>
    <h2>Forgot PIN</h2>
    <input v-model="email" placeholder="Enter your registered email" />
    <button @click="resetPin">Reset PIN</button>
    <router-link to="/login">Back to Login</router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');

const resetPin = () => {
  if (email.value) {
    alert(`PIN reset link sent to ${email.value}`);
  } else {
    alert("Please enter your registered email.");
  }
};
</script>
