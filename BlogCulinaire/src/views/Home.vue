<script lang="ts">
import {defineComponent} from 'vue'
import Cathegorie from "@/components/Cathegorie.vue";
import axios from 'axios';

export default defineComponent({
  name: "Home",
  components:{Cathegorie},
  data(){
    return{
      cathegories:[]
    }
  },

  async beforeMount(){
    try{
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      if( response.status === 200 ){
        this.cathegories = response.data.categories
      }
    }catch (e){
      console.log(e)
    }
  }
})
</script>

<template>
  <div>
    <div class="top flex flex-col items-center justify-center">
      <h1>TASTE MANIA </h1>
      <img src="../assets/Adobe%20Express%20-%20file.png" class="w-100">
    </div>
    <div class="grid grid-cols-2 min-sm:grid-cols-4  gap-x-2 gap-y-4 mx-2">
      <template v-for="cat in cathegories">
        <Cathegorie class="max:h-200" :idCategory="cat.idCategory" :strCategory="cat.strCategory"  :src_img="cat.strCategoryThumb" :desc="cat.strCategoryDescription" />
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
    img {
      filter: saturate(120%);
    }
</style>