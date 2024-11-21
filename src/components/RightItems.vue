<template>
  <div class="right-items">
    <div v-for="item in rightItems" :key="item.id" class="item">
      <button
        @click="setRightItem(item)"
        :class="{
          selected: selectedRightItem && selectedRightItem.id === item.id,
        }"
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

defineProps({
  rightItems: {
    type: Array,
    required: true,
  },
  setRightItem: {
    type: Function,
    required: true,
  },
  selectedRightItem: {
    type: Object,
    required: true,
  },
});
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
</style>
