<template>
  <NavigationTopbar @click="$emit('toggle-sidebar')" />
</template>

<script setup>
const emit = defineEmits(["toggle-sidebar"]);
</script>