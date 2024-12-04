<script setup>
import Language from './Language.vue';

const emit = defineEmits(["toggle-sidebar"]);

</script>

<template>
<!-- Topbar Start -->
<header class="app-header flex items-center px-4 gap-3.5">

<!-- Sidenav Menu Toggle Button -->
<button @click="$emit('toggle-sidebar')" id="button-toggle-menu" class="nav-link p-2">
    <span class="sr-only">Menu Toggle Button</span>
    <span class="flex items-center justify-center">
        <i class="ri-menu-2-fill text-2xl"></i>
    </span>
</button>

<!-- Topbar Search Input -->
<NavigationSearchBar />

<Language />

<!-- Notification Bell Button -->
<NavigationNotification />


<!-- Theme Setting Button -->
<NavigationThemeSwitching />

<!-- Light/Dark Toggle Button -->
<NavigationDarkMode />

<!-- Fullscreen Toggle Button -->
<NavigationFullScreen />

<!-- Profile Dropdown Button -->
<NavigationProfile />

</header>
<!-- Topbar End -->
</template>