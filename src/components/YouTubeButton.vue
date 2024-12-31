<template>
  <a :href="href" target="_blank"
     class="px-3 rounded py-2 border-2 border-red-600 hover:bg-red-600 hover:text-white transition-colors">
<!--    <slot/>-->
    YouTube
  </a>
</template>
<script setup lang="ts">
const porps = defineProps({
  href: String
})
</script>
<style scoped>

</style>