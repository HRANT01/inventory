<template>
  <div class="right-items">
    <div v-for="item in rightItems" :key="item.id" class="item">
      <button
        @click="setRightItem(item)"
        :class="[
          { selected: selectedRightItem && selectedRightItem.id === item.id },
        ]"
      >
        {{ item.name }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useItemStore } from "../store/items";

const { rightItems, setRightItem } = useItemStore();
const selectedRightItem = computed(() => useItemStore().getSelectedRightItem);
</script>

<style scoped>
.item {
  display: inline-block;
  margin: 5px;
}

.selected {
  background-color: #00a97f;
  color: white;
  border: none;
}

.selectedRightItem {
  border: 5px solid black;
  color: white;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  min-width: 40%;
}
</style>
