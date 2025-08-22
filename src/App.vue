<script setup>
let currentDate = new Date().toLocaleDateString('ru-RU');
</script>

<template>
  <div>
    {{ currentDate }}
  </div>
</template>

<style scoped></style>
