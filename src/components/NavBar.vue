<script setup lang="ts">

</script>

<template>
  <header class="bg-white shadow h-16 flex items-stretch justify-between">
    <router-link :to="{name: 'home'}" class="inline-flex items-center h-full px-5">Home</router-link>
    <div class="flex items-center gap-1">
      <router-link :to="{name:'byName'}" class="px-2 h-full hover:bg-purple-100 inline-flex items-center transition-colors">Search Meals</router-link>
      <router-link :to="{name:'byLetter'}" class="px-2 h-full hover:bg-purple-100 inline-flex items-center transition-colors">Meals By Letter</router-link>
      <router-link :to="{name:'ingredients'}" class="px-2 h-full hover:bg-purple-100 inline-flex items-center transition-colors">Meals By Ingredients</router-link>
    </div>
  </header>

</template>

<style scoped>

</style>