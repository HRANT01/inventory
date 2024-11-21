import { defineStore } from "pinia";

export const useItemStore = defineStore("itemStore", {
  state: () => ({
    leftItems: [
      { id: 1, name: "Shoes 1" },
      { id: 2, name: "Shoes 2" },
      { id: 3, name: "Shoes 3" },
      { id: 4, name: "Shoes 4" },
      { id: 5, name: "T-shirt 1" },
      { id: 6, name: "T-shirt 2" },
      { id: 7, name: "T-shirt 3" },
      { id: 8, name: "T-shirt 4" },
    ],
    rightItems: [
      { id: 11, name: "Jacket 1" },
      { id: 12, name: "Jacket 2" },
      { id: 13, name: "Jacket 3" },
      { id: 14, name: "Jacket 4" },
      { id: 15, name: "Hoodie 1" },
      { id: 16, name: "Hoodie 2" },
      { id: 17, name: "Hoodie 3" },
      { id: 18, name: "Hoodie 4" },
    ],
    selectedLeftItems: [],
    selectedRightItem: null,
  }),

  actions: {
    toggleLeftItem(item) {
      const index = this.selectedLeftItems.findIndex((i) => i.id === item.id);
      if (index === -1) {
        if (this.selectedLeftItems.length < 6) {
          this.selectedLeftItems.push(item);
        }
      } else {
        this.selectedLeftItems.splice(index, 1);
      }
    },

    setRightItem(item) {
      this.selectedRightItem = item;
    },
  },

  getters: {
    getSelectedRightItem(state) {
      return state.selectedRightItem;
    },
  },
});
