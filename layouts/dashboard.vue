<script setup>
import Sidebar from "~/components/Sidebar/Sidebar.vue";
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
          <Sidebar class="dashboard-sidebar" />
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
/* Dashboard layout styles */
.dashboard-layout {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.dashboard-sidebar {
  width: 250px; /* Adjust width as per design */
  background-color: #f8f9fa; /* Light gray background */
  overflow-y: auto;
}

.dashboard-main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.dashboard-content {
  flex: 1;
  padding: 20px; /* Adjust padding as needed */
  overflow-y: auto;
}
</style>
