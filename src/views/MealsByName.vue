<template>
  <div class="p-8 pb-0">
    <input type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Search for meals..."
           @change="searchMeals"
           v-model="keyword">
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <div v-for="meal in meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
      <router-link to="/">
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl w-full h-48 object-cover">
      </router-link>
      <div class="p-3">
        <h3 class="font-bold">{{ meal.strMeal }}</h3>
        <p class="mb-4"></p>
        <div class="flex justify-between items-center">
          <a :href="meal.strYoutube" target="_blank"
             class="px-3 rounded py-2 border-2 border-red-600 hover:bg-red-600 hover:text-white transition-colors">Youtube</a>
        </div>
      </div>
    </div>
  </div>

</template>
<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import store from '../store'
import {useRoute} from "vue-router";

const keyword = ref('')
const meals = computed(() => store.state.searchMeals)
const route = useRoute()

function searchMeals() {
  store.dispatch('searchMeals', keyword.value)
}

onMounted(() => {
  keyword.value = route.params.name
  if (keyword.value) {
    searchMeals()
  }
})
</script>