<template>
    <div class="lg:flex hidden">
      <button
        @click.prevent="toggleThemeMode"
        id="light-dark-mode"
        type="button"
        class="nav-link p-2"
      >
        <span class="sr-only">Light/Dark Mode</span>
        <span class="flex items-center justify-center">
          <i class="ri-moon-line text-2xl block dark:hidden"></i>
          <i class="ri-sun-line text-2xl hidden dark:block"></i>
        </span>
      </button>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  
  const currentTheme = ref('light');
  
  const toggleThemeMode = () => {
    if (typeof window !== 'undefined' && window.config) {
      const html = document.documentElement;
  
      if (window.config.theme === 'light') {
        window.config.theme = 'dark';
        html.setAttribute('data-mode', 'dark');
      } else {
        window.config.theme = 'light';
        html.setAttribute('data-mode', 'light');
      }
  
      // Save the updated config to sessionStorage
      sessionStorage.setItem('__ATTEX_CONFIG__', JSON.stringify(window.config));
      currentTheme.value = window.config.theme;
    }
  };
  
  onMounted(() => {
    if (typeof window !== 'undefined' && window.config) {
      // Set initial theme based on config
      currentTheme.value = window.config.theme;
      document.documentElement.setAttribute('data-mode', window.config.theme);
    }
  });
  </script>
  