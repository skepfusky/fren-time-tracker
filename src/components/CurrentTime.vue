<template>
  <div
    class="bg-violet-600 text-white px-6 py-3 mb-3 rounded-bl-xl rounded-br-xl shadow-lg"
  >
    <div>Your current time and date:</div>
    <div class="font-bold">{{ currentTime12 }} &bull; {{ currentTime24 }}</div>
    <div class="font-bold">{{ currentDate }}</div>
  </div>
</template>

<script setup lang="ts">
import moment from "moment-timezone";
import { ref, nextTick } from "vue";

const currentTime12 = ref("Loadng...");
const currentTime24 = ref("Loadng...");
const currentDate = ref("Loadng...");

nextTick(() => {
  setInterval(() => {
    currentTime12.value = moment().format("HH:mm A");
    currentTime24.value = moment().format("HH:mm:ss");
    currentDate.value = moment().format("MMMM DD YYYY");
  }, 1000);
});
</script>
