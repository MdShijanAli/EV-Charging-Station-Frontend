<template>
    <div class="app-menu">
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
      <button id="button-hover-toggle" class="absolute top-5 end-2 rounded-full p-1.5 z-50" @click="toggleMenu">
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
              <span class="menu-text">{{ item.text }}</span>
              <span v-if="item.badge" class="badge bg-success rounded-full">{{ item.badge }}</span>
              <span v-if="item.subMenu" class="menu-arrow"></span>
            </a>
  
            <!-- Sub Menu with Transition -->
            <transition 
              name="submenu-transition"
              @before-enter="beforeEnter"
              @enter="enter"
              @leave="leave"
            >
              <ul v-if="item.subMenu && openSubMenu === index" class="sub-menu">
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
  import { ref } from 'vue';
  
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
  
  const openSubMenu = ref(null); // Track which submenu is open
  
  // Toggle Submenu Open/Close
  const toggleSubMenu = (index) => {
    if (openSubMenu.value === index) {
      openSubMenu.value = null; // Close if it's already open
    } else {
      openSubMenu.value = index; // Open the clicked submenu
    }
  };
  
  const toggleMenu = () => {
    // Handle side menu toggle if needed
  };
  
  // Transition Hooks
  const beforeEnter = (el) => {
    el.style.maxHeight = '0'; // Start with 0 max-height (collapsed)
    el.style.opacity = '0'; // Start with 0 opacity (invisible)
  };
  
  const enter = (el, done) => {
    el.offsetHeight; // Trigger reflow (important for the transition to be applied)
    el.style.transition = 'all max-height 0.3s ease-in-out, opacity 0.3s ease-in-out';
    el.style.maxHeight = `${el.scrollHeight}px`; // Expand to the full height of the submenu
    el.style.opacity = '1'; // Fade in (set opacity to 1)
    done();
  };
  
  const leave = (el, done) => {
    el.style.transition = 'all max-height 0.3s ease-in-out, opacity 0.3s ease-in-out';
    el.style.maxHeight = '0'; // Collapse to 0 height (submenu is hidden)
    el.style.opacity = '0'; // Fade out (set opacity to 0)
    done();
  };
  </script>
  
  <style scoped>
  /* Animation styles for submenu */
  .submenu-transition-enter-active,
  .submenu-transition-leave-active {
    transition: all max-height 0.3s ease, opacity 0.3s ease;
  }
  
  .submenu-transition-enter, 
  .submenu-transition-leave-to /* .submenu-transition-leave-active in <2.1.8 */ {
    max-height: 0;
    opacity: 0;
    transition: all max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }
  
  .sub-menu {
    overflow: hidden; /* Hide the content while collapsing */
  }
  </style>
  