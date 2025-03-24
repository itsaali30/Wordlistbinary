<template>
  <h2>Wallet Balance: {{ balance }} Coins</h2>
  <button @click="buy">Buy</button>
  <button @click="sell">Sell</button>
  <button @click="viewTransactions">Transactions</button>
</template>

<script setup>
import { useRouter } from 'vue-router';

const balance = 500;
const router = useRouter();

const buy = () => router.push('/wallet/buy-sell');
const sell = () => router.push('/wallet/buy-sell');
const viewTransactions = () => router.push('/wallet/transactions');
</script>

