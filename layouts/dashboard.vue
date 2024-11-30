<script setup lang="ts">
import Sidebar from '~/components/Sidebar/Sidebar.vue';
</script>

<template>
    <div>
      <NavigationNavbar />
      <Sidebar />
      <slot></slot>
    </div>
</template>