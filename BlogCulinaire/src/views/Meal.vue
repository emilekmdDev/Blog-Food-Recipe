<script setup lang="ts">
import SearBar from '@/components/SearBar.vue';
import {onMounted, ref} from "vue";
import axios from "axios";
import LoadingPage from "@/components/LoadingPage.vue";

const cathegories = ref([])
const meals = ref([])
const finishload=ref(false)

const loadAllCath = async () => {
  try {
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    if (response.status === 200) {
      cathegories.value = response.data.categories;
    }
  }catch(error){
    console.log(error)
  }
}

const loadAllMeal = async () => {
  if (cathegories.value.length > 0) {
    try{
      let tmpResponse = ''
      let response = []
      for (let i = 0; i < cathegories.value.length; i++) {
        tmpResponse  = await  axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cathegories.value[i].strCategory}`)
        response = response.concat(tmpResponse)
      }
      meals.value = response
    }catch (error){
      console.log(error)
    }
  }
}

onMounted(async ()=>{
  await loadAllCath()
  await loadAllMeal()
  finishload.value = true
})
</script>

<template>
  <SearBar :fx="loadAllMeal"></SearBar>
  <loading-page v-if="!finishload"></loading-page>
  <div>
    {{meals}}
    <!--  {{ cathegories}}-->
  </div>
</template>

<style scoped>

</style>