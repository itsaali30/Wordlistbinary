
<template>
  <div>
    <h2>Order Details</h2>
    <p>Seller ID: {{ $route.params.id }}</p>
    <p>Available Coins: 500</p>
    <p>Price per Coin: $10</p>
    <input v-model="utr" placeholder="Enter UTR" />
    <input type="file" @change="uploadProof" />
    <button @click="submitOrder">Submit Order</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const utr = ref('');

const uploadProof = (event) => {
  const file = event.target.files[0];
  if (file) {
    alert("Proof uploaded!");
  }
};

const submitOrder = () => {
  alert(`Order submitted with UTR: ${utr.value}`);
};
</script>
