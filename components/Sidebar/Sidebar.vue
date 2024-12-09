<template>
  <div :class="['app-menu', { 'collapsed': !sidebarPanelsStore.isSidebarOpen }]">
    <NuxtLink to="/dashboard" class="logo-box border-b border-gray-500">
      <!-- Light Logo -->
      <div class="logo-light">
        <img src="/assets/images/logo.png" class="logo-lg h-[22px]" alt="Light logo">
        <img src="/assets/images/logo-sm.png" class="logo-sm h-[22px]" alt="Small logo">
      </div>

      <!-- Dark Logo -->
      <div class="logo-dark">
        <img src="/assets/images/logo-dark.png" class="logo-lg h-[22px]" alt="Dark logo">
        <img src="/assets/images/logo-sm.png" class="logo-sm h-[22px]" alt="Small logo">
      </div>
    </NuxtLink>

    <!-- Sidenav Menu Toggle Button -->
    <button id="button-hover-toggle" class="absolute top-5 end-2 rounded-full p-1.5 z-50" @click="sidebarPanelsStore.sidebarToggle">
      <span class="">Menu Toggle Button</span>
      <i class="ri-checkbox-blank-circle-line text-xl"></i>
    </button>

    <!-- Menu -->
    <div class="scrollbar" data-simplebar>
      <ul class="menu my-5" data-fc-type="accordion">
        <!-- Render Menu Items -->
        <li v-for="(item, index) in menuItems" :key="index" class="menu-item">
          <a href="javascript:void(0)" class="menu-link" @click="toggleSubMenu(index)">
            <span class="menu-icon">
              <i :class="item.icon"></i>
            </span>
            <span v-if="sidebarPanelsStore.isSidebarOpen" class="menu-text">{{ item.text }}</span>
            <span v-if="item.badge && sidebarPanelsStore.isSidebarOpen" class="badge bg-success rounded-full">{{ item.badge }}</span>
            <span v-if="item.subMenu && sidebarPanelsStore.isSidebarOpen" class="menu-arrow"></span>
          </a>

          <!-- Sub Menu with Transition -->
          <transition 
            name="submenu-transition"
            @before-enter="beforeEnter"
            @enter="enter"
            @leave="leave"
          >
            <ul v-if="item.subMenu && openSubMenu === index && sidebarPanelsStore.isSidebarOpen" class="sub-menu">
              <li v-for="(subItem, subIndex) in item.subMenu" :key="subIndex" class="menu-item">
                <a :href="subItem.link" class="menu-link">
                  <span class="menu-text">{{ subItem.text }}</span>
                </a>
              </li>
            </ul>
          </transition>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useSidebarPanelsStore } from "~/stores/sidebarPanels";

// Access the sidebar state and toggle function from the Pinia store
const sidebarPanelsStore = useSidebarPanelsStore();

// Menu items data for the sidebar
const menuItems = ref([
  {
    text: 'Dashboard',
    icon: 'ri-home-4-line',
    badge: '2',
    subMenu: [
      { text: 'Analytics', link: 'dashboard-analytics.html' },
      { text: 'Ecommerce', link: 'index.html' }
    ]
  },
  {
    text: 'Calendar',
    icon: 'ri-calendar-event-line',
    subMenu: null
  },
  {
    text: 'Email',
    icon: 'ri-mail-line',
    subMenu: [
      { text: 'Inbox', link: 'apps-email-inbox.html' },
      { text: 'Read Email', link: 'apps-email-read.html' }
    ]
  }
]);

// Track which submenu is open
const openSubMenu = ref(null);

// Function to toggle the submenu
const toggleSubMenu = (index) => {
  if (openSubMenu.value === index) {
    openSubMenu.value = null; // Close if it's already open
  } else {
    openSubMenu.value = index; // Open the clicked submenu
  }
};

// Transition hooks for submenu animation
const beforeEnter = (el) => {
  el.style.maxHeight = '0'; // Start with collapsed height
  el.style.opacity = '0';  // Start with invisible opacity
};

const enter = (el, done) => {
  el.offsetHeight; // Trigger reflow for transition
  el.style.transition = 'all max-height 0.3s ease-in-out, opacity 0.3s ease-in-out';
  el.style.maxHeight = `${el.scrollHeight}px`; // Expand to full height
  el.style.opacity = '1'; // Fade in
  done();
};

const leave = (el, done) => {
  el.style.transition = 'all max-height 0.3s ease-in-out, opacity 0.3s ease-in-out';
  el.style.maxHeight = '0'; // Collapse to height 0
  el.style.opacity = '0'; // Fade out
  done();
};
</script>



<style scoped>
.app-menu {
  width: 200px;
  opacity: 1;
  transition: width 0.1s ease-in-out, opacity 0.1s ease-in-out;
  overflow: hidden;
}

.app-menu.collapsed {
  opacity: 0; 
  pointer-events: none;
  position: absolute; 
}

.menu-text,
.badge,
.menu-arrow {
  transition: opacity 0.3s ease-in-out;
  opacity: 1; /* Fully visible in expanded state */
}

.app-menu.collapsed .menu-text,
.app-menu.collapsed .badge,
.app-menu.collapsed .menu-arrow {
  opacity: 0; /* Hidden in collapsed state */
  pointer-events: none; /* Prevent interaction */
}

.logo-lg {
  display: block;
}

.logo-sm {
  display: none;
}

.app-menu.collapsed .logo-lg {
  display: none;
}

.app-menu.collapsed .logo-sm {
  display: block;
}
</style>
