<script setup lang="ts">
import moment from "moment-timezone";

const p = withDefaults(
  defineProps<{
    name: string
    setTime?: string
    setDate?: string
  }>(),
  {
    name: "Maxstep",
    setTime: moment().format("HH:mm A"),
    setDate: moment().format("MMMM DD YYYY")
  }
)
</script>

<template>
  <div class="shadow-md flex flex-col items-center bg-white">
    <div>{{ name }}</div>
    <div>{{ setTime }}</div>
    <div>{{ setDate }}</div>
  </div>
</template>
