import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import MealsList from "../views/MealsList.vue";
import DefaultLayout from "../components/DefaultLayout.vue"
import GuestLayout from "../components/GuestLayout.vue"
import MealsByName from "../views/MealsByName.vue";
import MealsByIngredient from "../views/MealsByIngredient.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import Ingredients from "../views/Ingredients.vue"
import MealDetails from "../views/MealDetails.vue";

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children:[
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/by-ingredient/:ingredient?',
        name: 'byIngredient',
        component: MealsByIngredient
      },
      {
        path: '/ingredients',
        name: 'ingredients',
        component: Ingredients
      },
      {
        path: '/by-letter/:letter?',
        name: 'byLetter',
        component: MealsByLetter
      },
      {
        path: '/by-name/:name?',
        name: 'byName',
        component: MealsByName
      },
      {
        path: '/meal/:id?',
        name: 'mealDetails',
        component: MealDetails
      },
      // {
      //   path: '/letter/:letter',
      //   name: 'byLetter',
      //   component: MealsList
      // }
    ]
  },
  {
    path: '/guest',
    component: GuestLayout,
    children: [

    ]
  }
] 
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router