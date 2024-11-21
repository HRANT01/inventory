<template>
  <div class="item-list">
    <div v-for="item in items" :key="item.id" class="item">
      <button @click="toggleItem(item)" :class="{ selected: isSelected(item) }">
        {{ item.name }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { useItemStore } from "../store/items";

const { leftItems, selectedLeftItems, toggleLeftItem } = useItemStore();
const items = leftItems;

const isSelected = (item) => selectedLeftItems.some((i) => i.id === item.id);

const toggleItem = (item) => {
  toggleLeftItem(item);
};
</script>

<style scoped>
.item {
  display: inline-block;
  margin: 5px;
}

.selected {
  background-color: #00a97f;
  color: white;
}
</style>
