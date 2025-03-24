
<template>
  <div>
    <h2>Send Coins to a Friend</h2>
    <input v-model="friendId" placeholder="Friend ID" />
    <input v-model="email" placeholder="Friend Email" />
    <input v-model="pin" type="password" placeholder="Confirm PIN" />
    <button @click="sendCoins">Send Coins</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const friendId = ref('');
const email = ref('');
const pin = ref('');

const sendCoins = () => {
  alert(`Coins sent to ${friendId.value} - ${email.value}`);
};
</script>
