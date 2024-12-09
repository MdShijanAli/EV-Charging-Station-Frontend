import { defineStore } from 'pinia';

export const useSidebarPanelsStore = defineStore('sidebarPanels', {
  state: () => ({
    isSidebarOpen: true, // Default to open
  }),
  actions: {
    sidebarToggle() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
});
