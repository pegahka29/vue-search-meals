<template>
  <div class="p-8 pb-0">
    <input type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Search for meals..."
           @change="searchMeals"
           v-model="keyword">
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem  v-for="meal in meals" :key="meal.idMeal" :meal="meal"/>
  </div>


</template>
<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import store from '../store'
import {useRoute} from "vue-router";
import MealItem from "../components/MealItem.vue";

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