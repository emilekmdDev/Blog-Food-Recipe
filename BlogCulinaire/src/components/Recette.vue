<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Recette",

  props:{
    strMeal:{
      type:String,
      default:''
    },
    srcImg:{
      type:String,
      default:''
    },
    idMeal:{
      type:String,
    },
    cathName:{
      type:String
    }
  },

  methods:{
  }
})
</script>

<template>
  <div class="relative overflow-hidden rounded-2xl ring-3 ring-white group">
    <router-link
        :to="{ name: 'RecetteDetails', params: { cathName: cathName, idMeal: idMeal } }"
    >
      <img :src="srcImg" class="transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:opacity-[0.5] w-full"/>
      <p class="absolute min-sm:top-[40%] max-sm:opacity-100  left-0 w-full text-center p-1 opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10 text-2xl font-bold">
        {{ strMeal }}
      </p>
    </router-link>
  </div>
</template>

<style scoped lang="scss">
</style>