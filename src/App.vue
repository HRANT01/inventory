<template>
  <div class="app">
    <div class="top-bar">
      <div class="items-container">
        <SelectedItems />
      </div>

      <div v-if="selectedRightItem" class="selected-right-item">
        <div class="selectedRightItem">
          {{ selectedRightItem.name }}
        </div>
      </div>
      <div v-else class="no-selection">No item selected.</div>
    </div>

    <div class="main-content">
      <div class="left-block">
        <ItemList />
      </div>

      <div class="right-block">
        <RightItems
          :rightItems="rightItems"
          :setRightItem="setRightItem"
          :selectedRightItem="selectedRightItem"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useItemStore } from "./store/items";
import ItemList from "./components/ItemsList.vue";
import SelectedItems from "./components/SelectedItem.vue";
import RightItems from "./components/RightItems.vue";
import { computed } from "vue";

const { rightItems, setRightItem } = useItemStore();

const selectedRightItem = computed(() => useItemStore().getSelectedRightItem);
</script>

<style scoped>
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 90%;
  margin: 20px auto;
  height: 40vh;
}

.main-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: auto;
}

.left-block,
.right-block {
  min-width: 40%;
}

.selected-right-item {
  min-width: 40%;
}

.no-selection {
  border: 5px solid black;
  color: white;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  min-width: 40%;
}

.selectedRightItem {
  border: 5px solid black;
  color: white;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  min-width: 40%;
}

.items-container {
  min-width: 40%;
  border: 5px solid black;
}
</style>
