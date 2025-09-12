<script setup>
import { ref } from "vue";
import Button from "./Button.vue";
import Input from "./Input.vue";
import IconLocation from "../icons/IconLocation.vue";

const emit = defineEmits({
  selectCity(payload) {
    return payload;
  },
});

let city = ref("Moscow");
let isEdited = ref(false);

function select() {
  isEdited.value = false;
  emit("selectCity", "London");
}

function edit() {
  isEdited.value = true;
}

</script>
<template>
  <div class="city-select">
    {{ city }}
    <div v-show="isEdited" class="city-input">
      <Input placeholder="Введите город" v-model="city" />
      <Button @click="select()"> Сохранить </Button>
    </div>
    <div v-show="!isEdited">
      <Button @click="edit()">
        <IconLocation />
        Изменить город
      </Button>
    </div>
  </div>
</template>

<style scoped>
.city-input {
  display: flex;
  gap: 12px;
}

.city-select {
  width: 420px;
}
</style>
