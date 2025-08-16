<script lang="ts">
import {defineComponent} from 'vue'
import PopupInfo from "@/components/PopupInfo.vue";

export default defineComponent({
  name: "Cathegorie",
  components:{PopupInfo},
  data(){
    return{
      showPopup:false
    }
  },
  props:[
      'strCategory',
      'src_img',
      'desc'
  ],
  methods:{
    close(){
      this.showPopup=false
    },

  }
})
</script>

<template>
  <div class="bg-white relative flex flex-col items-center justify-center rounded-2xl p-[1rem] overflow-x-hidden overflow-y-auto ">
    <PopupInfo  class="absolute top-0 left-0 " :title="strCategory" :message="desc" :show="showPopup" :close="close"></PopupInfo>
    <div>
      <router-link :to="{name: 'RecetteView',params:{cathName:strCategory}}">
        <img :src="src_img" class="min-w-50 rounded-2xl object-cover">
      </router-link>
    </div>
    <h3 class="font-medium">{{ strCategory }}</h3>
    <p @click.self="showPopup=!showPopup" class="line-clamp-3 text-base hover:bg-amber-50 pt-2 rounded-2xl cursor-pointer text-gray-700 w-full px-[1rem] pt-2 overflow-x-hidden">{{ desc }}</p>
  </div>
</template>

<style scoped lang="scss">

</style>