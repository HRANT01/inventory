<template>
  <div class="selected-items">
    <div>Selected Items:</div>
    <div class="items-container">
      <div v-for="item in selectedItems" :key="item.id" class="item">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { useItemStore } from "../store/items";

const { selectedLeftItems } = useItemStore();
const selectedItems = selectedLeftItems;
</script>

<style scoped>
.selected-items {
  min-height: 120px;
}

.items-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.item {
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
}
</style>
