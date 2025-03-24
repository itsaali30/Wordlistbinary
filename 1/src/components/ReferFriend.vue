
<template>
  <div>
    <h2>Refer a Friend</h2>
    <input v-model="referralCode" placeholder="Referral Code" />
    <button @click="copyReferral">Copy Referral Link</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const referralCode = ref("REF123456");

const copyReferral = () => {
  navigator.clipboard.writeText(referralCode.value);
  alert("Referral link copied!");
};
</script>
