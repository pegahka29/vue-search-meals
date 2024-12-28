<template>
  <div class="flex flex-col p-8">
    <div>
      <input type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Search for meals...">
    </div>
    <div class="flex gap-2 justify-center items-center mt-2">
      <router-link v-for="letter of letters" :to="{name: 'byLetter', params: {letter}}" :key="letter">
        {{ letter }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import {computed} from 'vue'
import store from '../store'

const meals = computed(() => store.state.meals)
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
</script>
