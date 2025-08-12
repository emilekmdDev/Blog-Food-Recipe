<script lang="ts">
import axios from 'axios';
import {defineComponent} from 'vue'
import {data} from "autoprefixer";

export default defineComponent({
  name: "Details",
  data(){
    return{
      idMeal:this.$route.params.idMeal,
      data:null,
      computedData:null,
      isloading:true,
      ingredients:[],
    }
  },
  watch:{
    data(nouveau,ancien){
      if(nouveau){
        this.isloading=false;
        this.computeData
      }
    }
  },
  methods:{
    async loadData(){
      try{
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.idMeal}`)
        if (response.status===200 && response.data.meals){
          this.data=response.data.meals[0]
        }
      }catch (e){
        console.log("erreur lors du chargement de details",e)
      }
    },
    embedeUrl(url){
      const idVideo = url.split('v=')[1]
      return  `https://www.youtube.com/embed/${idVideo}`
    },
  },

  computed:{
    computeData(){
      let ingredient_name = [],mesure = [];
      for (let i = 1; i <= 20 ; i++) {
        for (const key in this.data) {
          if(key===`strIngredient${i}` && this.data[key]) ingredient_name.push(this.data[key])
          if(key===`strMeasure${i}` && this.data[key]) mesure.push(this.data[key])
        }
      }

      for (let i = 0; i < ingredient_name.length ; i++) {
        this.ingredients.push({'ingredient_name':ingredient_name[i],'mesure':mesure[i]})
      }
    }
  },

  created(): any {
    this.loadData()
  }
})
</script>

<template>
  <div v-if="!isloading" class="flex flex-col  gap-8 p-3 min-sm:p-10">
    <div class="flex flex-row max-sm:flex-col items-center justify-center gap-6 ">
      <h1 class="self-start" >{{ data.strCategory	 }} : {{ data.strMeal }}</h1>
      <div class="self-start min-sm:self-end flex items-center justify-center opacity-30">
        <i class='bxr  bxs-location text-3xl '  ></i>
        <p>{{data.strArea}}</p>
      </div>
    </div>
    <h3 class="bg-red-700 w-fit p-2 px-4 rounded-full font-black text-white">Recipe</h3>
    <p class="text-justify">{{data.strInstructions}}</p>
    <div>
      <iframe
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          :src="embedeUrl(data.strYoutube)"
          allowfullscreen
          class="w-full h-70 rounded-2xl min-md:rounded-3xl min-sm:h-100 min-lg:h-180"
      ></iframe>
    </div>
    <div class="min-sm:grid min-sm:grid-cols-3 bg-white  py-10 px-10 border-2 gap-x-40 border-gray-100 items-center justify-center">
      <template v-for="ingredient in ingredients">
        <div class="grid grid-cols-2 items-center  [&_*]:mt-2  gap-10">
          <div class="">{{ingredient.ingredient_name[0].toUpperCase()+ingredient.ingredient_name.slice(1)}}</div>
          <span class="bg-amber-100 p-2 text-center w-40 rounded-2xl font-semibold">{{ingredient.mesure}}</span>
        </div>
      </template>
    </div>
  </div>
  <div v-else>
    chargement
  </div>
</template>

<style scoped>
</style>