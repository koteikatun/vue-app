<script setup>
const data = defineModel({type: String});
</script>

<template>
  <input
    v-model="data"
    class="input"
  />
</template>

<style scoped>
.input {
  width: 260px;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  height: 53px;
  padding: 15px 20px;
  color: var(--color-primary);
  background: var(--color-bg-card);
  box-shadow: 1px 2px 4px 0px var(--color-bg-main);
}

.input::placeholder {
  color: var(--color-text-placeholder);
}
</style>
