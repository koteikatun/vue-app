<script setup>
const { label, stat } = defineProps({
  label: String,
  stat: String,
});
</script>

<template>
  <div class="stat">
    <div class="stat-name">{{ label }}</div>
    <div class="stat-value">{{ stat }}</div>
  </div>
</template>

<style scope>
.stat {
  display: flex;
  font-size: 28px;
  justify-content: space-between;
  gap: 16px;
}

.stat-name {
  font-weight: 700;
  text-transform: uppercase;
}

.stat-value {
  font-weight: 500;
}
</style>
