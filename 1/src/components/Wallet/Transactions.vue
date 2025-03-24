
<template>
  <div>
    <h2>Transaction History</h2>
    <ul>
      <li v-for="(txn, index) in transactions" :key="index">
        {{ txn.type }} - {{ txn.amount }} Coins - {{ txn.date }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const transactions = [
  { type: "Buy", amount: 100, date: "2025-03-25" },
  { type: "Sell", amount: 50, date: "2025-03-24" },
  { type: "Buy", amount: 200, date: "2025-03-23" }
];
</script>
