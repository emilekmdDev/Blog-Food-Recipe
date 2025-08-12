<script lang="ts">
import axios from 'axios'
import {defineComponent} from 'vue'
import Recette from "@/components/Recette.vue";

export default defineComponent({
  name: "RecettesView",
  components:{
    Recette
  },

  data(){
    return{
      cathName:this.$route.params.cathName,
      data:[]
    }
  },
  methods:{
    async loadData(){
      try{
        const response  = await  axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.cathName}`)
        if (response.status==200){
          this.data=response.data.meals
        }
      } catch (err){
        console.log('erreur lors du chargement des recettes',err)
      }
    }
  },
  created(){
    this.loadData()
  }
})

</script>

<template>
  <div class="flex flex-col  items-center justify-center py-[1rem]">
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 p-10">
      <template v-for="meal in data" :key="meal.idMeal">
        <Recette class="w-40 sm:w-full md:w-full" :strMeal="meal.strMeal" :srcImg="meal.strMealThumb" :idMeal="meal.idMeal" :cathName="cathName"></Recette>
      </template>
    </div>
  </div>
</template>

<style scoped>
</style>