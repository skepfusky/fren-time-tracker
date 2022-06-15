<template>
  <div class="shadow-md flex flex-col items-center bg-white">
    <div>{{ name }}</div>
    <div>{{ setTime }}</div>
    <div>{{ setDate }}</div>
  </div>
</template>

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
    setTime: moment().tz("America/New_York").format("HH:mm A")
  }
)
</script>
