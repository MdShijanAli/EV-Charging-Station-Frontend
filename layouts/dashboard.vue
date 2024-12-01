<script setup lang="ts">
import Sidebar from "~/components/Sidebar/Sidebar.vue";
</script>

<template>
  <ClientOnly>
    <Suspense>
      <template #default>
        <div>
          <NuxtLoadingIndicator :duration="4000" :throttle="1" />
          <NavigationNavbar />
          <Sidebar />
          <slot></slot>
        </div>
      </template>

      <!-- loading state via #fallback slot -->
      <template #fallback>
        <LoaderPageLoadingSpinner />
      </template>
    </Suspense>
  </ClientOnly>
</template>