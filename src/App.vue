<script setup>
import Button from "./components/Button.vue";
// import Card from "./components/Card.vue";
import Headers from "./components/Headers.vue";

// const data = {
//   contentCardForeign: "Fox",
//   contentCardTranslate: "Лиса",
//   numberCard: "01",
// };
</script>

<template>
  <div class="main">
    <Headers />
    <div class="buttons">
      <Button />
    </div>
    <!-- <Card v-bind="data" /> -->
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
