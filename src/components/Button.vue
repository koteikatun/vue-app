<script setup>
const emit = defineEmits({
  startGame(payload) {
    return payload;
  },
});

function startGame() {
  emit("startGame", true);
}
</script>

<template>
  <button class="button" @click="startGame()">Начать игру</button>
</template>

<style scoped>
.button {
  border: none;
  border-radius: 100px;
  /* padding: 16px 10px; */
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  /* text-align: center; */
  color: var(--color-primary);
  font-family: var(--font);
  background: var(--color-bg-main);
  width: 335px;
  height: 68px;
  /* margin: 686px 531px; */
  cursor: pointer;
}
</style>
