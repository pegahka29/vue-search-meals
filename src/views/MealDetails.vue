<template>
  <div v-if="meal" class="max-w-[800px] mx-auto p-8">
    <h1 class="text-5xl font-semibold mb-3">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-full ">
    <div class="grid grid-cols-1 md:grid-cols-3 text-lg py-2">
      <strong class="font-bold"> Category: </strong>{{ meal.strCategory }}
      <strong class="font-bold"> Area: </strong>{{ meal.strArea }}
      <strong class="font-bold"> Tags: </strong>{{ meal.strTags }}
    </div>
    <div>
      {{ meal.strInstructions }}
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl font-bold mb-2">
          Ingredients:
        </h2>
        <ul>
          <template v-for="(el,ind) of new Array(20)" :key="ind">
            <li v-if="meal[`strIngredient${ind + 1}`]">
              {{ ind + 1 }} . {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-bold mb-3">
          Measures:
        </h2>
        <ul>
          <template v-for="(el,ind) of new Array(20)" :key="ind">
            <li v-if="meal[`strMeasure${ind + 1}`]">
              {{ ind + 1 }} . {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div class="mt-4">
        <you-tube-button :href="meal.strYoutube"/>
        <a :href="meal.strSource" target="_blank"
           class="ml-3 px-3 rounded py-2 border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors">
          Source
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import axiosClient from "../axiosClient";
import YouTubeButton from "../components/YouTubeButton.vue";

const route = useRoute()
const meal = ref()
onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then(({data}) => {
      meal.value = data.meals[0] || {}
    })
})
</script>
