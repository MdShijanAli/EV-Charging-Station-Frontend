<script setup>
import Sidebar from "~/components/Sidebar/Sidebar.vue";

const isSidebarOpen = ref(true); // Sidebar state
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value; // Toggle open/close state
};
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
          <Sidebar :isOpen="isSidebarOpen" class="dashboard-sidebar" />
          <div class="dashboard-main">
            <NavigationNavbar @toggle-sidebar="toggleSidebar" />
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

.dashboard-sidebar {
  width: 250px; /* Default sidebar width */
  transition: width 0.3s; /* Smooth transition */
}
.dashboard-sidebar.collapsed {
  width: 80px; /* Collapsed width */
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
