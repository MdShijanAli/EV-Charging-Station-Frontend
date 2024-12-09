<script setup>
import Sidebar from "~/components/Sidebar/Sidebar.vue";
import { useSidebarPanelsStore } from "~/stores/sidebarPanels";

// Access the sidebar state and toggle function from the Pinia store
const sidebarPanelsStore = useSidebarPanelsStore();
</script>

<template>
  <ClientOnly>
    <Suspense>
      <!-- Main Dashboard Layout -->
      <template #default>
        <div class="dashboard-layout">
          <NuxtLoadingIndicator
            :duration="4000"
            :throttle="1"
            color="#ff0000"
          />
          <Sidebar />
          <div class="dashboard-main">
            <NavigationNavbar />
            <!-- Dynamic content for each page -->
            <main class="dashboard-content">
              <slot />
            </main>
          </div>
        </div>
      </template>

      <!-- Fallback loading spinner -->
      <template #fallback>
        <LoaderPageLoadingSpinner />
      </template>
    </Suspense>
  </ClientOnly>
</template>

<style scoped>
.dashboard-layout {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.dashboard-main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.dashboard-content {
  flex: 1;
  overflow-y: auto;
}
</style>
