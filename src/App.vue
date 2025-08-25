<script setup>
import Button from "./components/Button.vue";
import Headers from "./components/Headers.vue";
</script>

<template>
  <div class="main">
    <Headers />
    <div class="buttons">
      <Button />
    </div>
  </div>
</template>

<style scoped>
.main {
  height: 100vh;
}
.buttons {
  display: flex;
  justify-content: center;
}
</style>
