<template>
  <div class="md:flex hidden">
    <button 
      @click.prevent="toggleFullscreen" 
      data-toggle="fullscreen" 
      type="button" 
      class="nav-link p-2 hidden lg:block" 
      :class="{ 'md:inline-block': !isFullscreen }"
    >
      <span class="sr-only">Fullscreen Mode</span>
      <span class="flex items-center justify-center">
        <i :class="[isFullscreen ? 'ri-fullscreen-exit-line' : 'ri-fullscreen-line', 'text-2xl']"></i>
      </span>
    </button>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

// Fullscreen state
const isFullscreen = ref(false);

// Toggle fullscreen mode
const toggleFullscreen = () => {
  const elem = document.documentElement;

  if (!isFullscreen.value) {
    // Request fullscreen
    const requestFullScreen =
      elem.requestFullscreen ||
      elem.webkitRequestFullscreen ||
      elem.msRequestFullscreen;

    if (requestFullScreen) {
      requestFullScreen.call(elem).catch((error) => {
        console.error('Error entering fullscreen:', error);
      });
    }
  } else {
    // Exit fullscreen
    const exitFullscreen =
      document.exitFullscreen ||
      document.webkitExitFullscreen ||
      document.msExitFullscreen;

    if (exitFullscreen) {
      exitFullscreen.call(document).catch((error) => {
        console.error('Error exiting fullscreen:', error);
      });
    }
  }
};

// Update fullscreen state based on the actual state
const updateFullscreenState = () => {
  isFullscreen.value = !!(
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.msFullscreenElement
  );
};

// Listen to fullscreen changes
onMounted(() => {
  document.addEventListener('fullscreenchange', updateFullscreenState);
  document.addEventListener('webkitfullscreenchange', updateFullscreenState);
  document.addEventListener('msfullscreenchange', updateFullscreenState);
});

onUnmounted(() => {
  document.removeEventListener('fullscreenchange', updateFullscreenState);
  document.removeEventListener('webkitfullscreenchange', updateFullscreenState);
  document.removeEventListener('msfullscreenchange', updateFullscreenState);
});
</script>
