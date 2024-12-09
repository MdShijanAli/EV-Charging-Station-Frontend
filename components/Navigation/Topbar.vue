<script setup>
import { useSidebarPanelsStore } from '~/stores/sidebarPanels';
import Language from './Language.vue';

const sidebarPanelsStore = useSidebarPanelsStore();

</script>

<template>
<!-- Topbar Start -->
<header class="app-header flex items-center px-4 gap-3.5">

<!-- Sidenav Menu Toggle Button -->
<button @click="sidebarPanelsStore.sidebarToggle()" id="button-toggle-menu" class="nav-link p-2">
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

<!-- Light/Dark Toggle Button -->
<NavigationDarkMode />

<!-- Fullscreen Toggle Button -->
<NavigationFullScreen />

<!-- Profile Dropdown Button -->
<NavigationProfile />

</header>
<!-- Topbar End -->
</template>