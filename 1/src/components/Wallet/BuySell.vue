
<template>
  <div>
    <h2>Buy / Sell Coins</h2>
    <input v-model="amount" type="number" placeholder="Enter amount" />
    <button @click="buy">Buy</button>
    <button @click="sell">Sell</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const amount = ref(0);

const buy = () => alert(`Bought ${amount.value} coins!`);
const sell = () => alert(`Sold ${amount.value} coins!`);
</script>
