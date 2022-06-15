<script setup lang="ts">
import CurrentTime from "./components/CurrentTime.vue"
import TimeItem from "./components/TimeItem.vue"
import AddTime from "./components/AddTime.vue"
</script>

<template>
  <CurrentTime />
  <div id="time-grid" class="grid grid-cols-5 gap-2 mx-4">
    <AddTime />
    <TimeItem />
    <TimeItem />
    <TimeItem />
  </div>
  <div
    class="fixed bottom-0 left-3 right-3 px-4 py-3 bg-violet-200 rounded-tl-md rounded-tr-md"
  >
    <div>
      Created by
      <a
        href="https://github.com/skepfusky"
        class="text-violet-700 font-bold underline"
        >this idiot</a
      >
    </div>

    <div>Using Node <span id="node-version"></span> and Electron <span id="electron-version"></span></div>
  </div>
</template>

<style>
body {
  @apply bg-slate-100;
}
#time-grid > * {
  @apply rounded-md p-6;
}
</style>
