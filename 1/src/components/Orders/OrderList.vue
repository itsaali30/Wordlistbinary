
<template>
  <div>
    <h2>Seller List</h2>
    <input v-model="search" placeholder="Search seller" />
    <ul>
      <li v-for="seller in filteredSellers" :key="seller.id">
        {{ seller.name }} - Coins: {{ seller.qty }}
        <router-link :to="'/orders/' + seller.id">View Details</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const sellers = ref([
  { id: 1, name: 'Seller A', qty: 100 },
  { id: 2, name: 'Seller B', qty: 200 }
]);

const search = ref('');

const filteredSellers = computed(() => {
  return sellers.value.filter(seller =>
    seller.name.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>
