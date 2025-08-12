<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "PopUp",
  props:{
    title:{
      type:String,
      default:"!"
    },
    message:{
      type:String,
      default:"No message"
    },
    show:{
      type:Boolean,
      default:false
    },
    close:{
      type:Function,
      default:()=>{}
    }
  },
})
</script>

<template>
  <transition name="popup" mode="out-in">
    <div class="bg-white flex flex-col items-center p-4 rounded-2xl absolute w-full z-3 h-full" @click="close" v-if="show">
      <h2>{{ title }}</h2><br>
      <p class="text-justify">{{ message }}</p>
    </div>
  </transition>
</template>

<style scoped>
  .popup-enter-from,.popup-leave-to{
    opacity: 0;
  }

  .popup-enter-active,.popup-leave-active{
    transition: all ease 0.3s;
  }

</style>