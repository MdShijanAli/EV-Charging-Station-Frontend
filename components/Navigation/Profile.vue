<template>
    <div class="relative">
      <!-- Dropdown button -->
      <button
        @click="toggleDropdown"
        type="button"
        class="nav-link flex items-center gap-2.5 px-3 bg-black/5 border-x border-black/10"
      >
        <img src="/assets/images/users/shijan.png" alt="user-image" class="rounded-full w-8 h-8 object-cover" />
        <span class="md:flex flex-col gap-0.5 text-start hidden">
          <h5 class="text-sm">Md Shijan Ali</h5>
          <span class="text-xs">CEO</span>
        </span>
      </button>
  
      <!-- Custom Dropdown Menu -->
      <div
        v-if="dropdownOpen"
        class="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-lg border py-2 border-gray-200 dark:border-gray-700 dark:bg-gray-800"
      >
        <!-- item-->
        <h6 class="flex items-center py-2 px-3 text-xs text-gray-800 dark:text-gray-400">Welcome!</h6>
  
        <!-- item-->
        <a href="pages-profile.html" class="flex items-center gap-2 py-1.5 px-4 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
          <i class="ri-account-circle-line text-lg align-middle"></i>
          <span>My Account</span>
        </a>
  
        <!-- item-->
        <a href="pages-profile.html" class="flex items-center gap-2 py-1.5 px-4 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
          <i class="ri-settings-4-line text-lg align-middle"></i>
          <span>Settings</span>
        </a>
  
        <!-- item-->
        <a href="pages-faqs.html" class="flex items-center gap-2 py-1.5 px-4 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
          <i class="ri-customer-service-2-line text-lg align-middle"></i>
          <span>Support</span>
        </a>
  
        <!-- item-->
        <a href="auth-lock-screen.html" class="flex items-center gap-2 py-1.5 px-4 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
          <i class="ri-lock-password-line text-lg align-middle"></i>
          <span>Lock Screen</span>
        </a>
  
        <!-- item-->
        <a href="auth-logout-2.html" class="flex items-center gap-2 py-1.5 px-4 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
          <i class="ri-logout-box-line text-lg align-middle"></i>
          <span>Logout</span>
        </a>
      </div>
    </div>
  </template>
  
  <script setup>
  
  const dropdownOpen = ref(false) // To control the dropdown visibility
  
  // Toggle the dropdown
  const toggleDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value
  }
  
  // Close the dropdown when clicking outside
  const closeDropdown = (event) => {
    if (!event.target.closest('.relative')) {
      dropdownOpen.value = false
    }
  }
  
  // Listen to clicks outside of the dropdown to close it
  document.addEventListener('click', closeDropdown)
  </script>
  
  <style scoped>
  .relative {
    position: relative;
  }
  
  .absolute {
    position: absolute;
    top: 100%; /* Align it below the button */
    right: 0;  /* Align it to the right */
    width: 200px; /* Dropdown width */
    background-color: white;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
  
  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 8px 16px;
  }
  
  a:hover {
    background-color: #f0f0f0;
  }
  
  i {
    font-size: 16px;
  }
  
  /* Optional: Adjust for dark mode */
  .dark {
    background-color: #2d2d2d;
  }
  </style>
  