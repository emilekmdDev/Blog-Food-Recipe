<script setup lang="ts">
  import {ref} from "vue";
  import { DefineProps } from "vue";

  const props = defineProps({
    fx:{
      type:Function,
      required:true,
    }
  })
  const search = ()=>{
    if (searchText.value){
      props.fx
    }
  }

  const searchText = ref('')
</script>

<template>
  <div class="flex flex-col  items-center justify-center py-[1rem]">
    <form class="flex space-x-4 w-[500px] justify-around border border-gray-300 items-center bg-white rounded-2xl px-5 py-1 max-sm:w-[300px]" @submit.prevent="search">
      <input type="text" class="outline-none w-full" v-model="searchText">
      <button type="submit" class="cursor-pointer border-none bg-transparent">
        <i class="ri-search-line"></i>
      </button>
    </form>
  </div>
</template>

<style scoped>

</style>