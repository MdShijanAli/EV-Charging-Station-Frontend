<template>
    <div class="relative ms-auto" ref="dropdownContainer">
      <!-- Dropdown Button -->
      <button 
        @click="toggleDropdown" 
        type="button" 
        class="nav-link p-2">
        <span class="flex items-center gap-2">
          <img src="/assets/images/flags/us.jpg" alt="flag-image" class="h-3" />
          <div class="lg:block hidden">
            <span>English</span>
            <i class="ri-arrow-down-s-line"></i>
          </div>
        </span>
      </button>
  
      <!-- Dropdown Menu -->
      <div
        v-show="dropdownOpen"
        class="absolute right-0 mt-2 w-40 z-50 transition-all duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg py-2"
      >
        <a
          href="javascript:void(0);"
          class="flex items-center gap-2.5 py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
        >
          <img src="/assets/images/flags/germany.jpg" alt="flag-image" class="h-4" />
          <span>German</span>
        </a>
        <a
          href="javascript:void(0);"
          class="flex items-center gap-2.5 py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
        >
          <img src="/assets/images/flags/italy.jpg" alt="flag-image" class="h-4" />
          <span>Italian</span>
        </a>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const dropdownOpen = ref(false); // Tracks dropdown visibility
  const dropdownContainer = ref(null); // Reference to dropdown container
  
  const toggleDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value;
  };
  
  const closeDropdown = (event) => {
    // Ensure dropdown is closed only if clicked outside the container
    if (dropdownContainer.value && !dropdownContainer.value.contains(event.target)) {
      dropdownOpen.value = false;
    }
  };
  
  // Attach click listener for outside clicks
  const onClickOutside = (event) => closeDropdown(event);
  
  onMounted(() => {
    document.addEventListener("click", onClickOutside);
  });
  
  onUnmounted(() => {
    document.removeEventListener("click", onClickOutside);
  });
  </script>
  