<template>
  <div>
    <h1 class="">Welcome to my NUXT Project</h1>

    <div class="h-full flex justify-center items-center">
      <NuxtLink to="/dashboard">
        <button class="px-3 py-1 bg-green-800 text-white rounded-md">
          Go Dashboard
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
});
</script>