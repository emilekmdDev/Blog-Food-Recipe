<script setup>
  import {globalColor} from "@/stores/counter.js";
  const theme = globalColor();
</script>

<template>
  <nav class="fixed top-0 left-0 min-sm:flex w-full items-center justify-center z-10" :style="{backgroundColor: theme.accentColor}">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">

          <button type="button" command="--toggle" commandfor="mobile-menu" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-orange-500 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 in-aria-expanded:hidden">
              <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 not-in-aria-expanded:hidden">
              <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4 select-none">
              <router-link to="/" class="rounded-md px-3 py-2 text-sm font-medium text-gray-200 hover:bg-orange-500 hover:text-white navUpHover" active-class="bg-orange-600">Home</router-link>
              <router-link to="/todefine" class="rounded-md px-3 py-2 text-sm font-medium text-gray-200 hover:bg-orange-500 hover:text-white navUpHover" active-class="bg-orange-600">Meal</router-link>
              <router-link to="/todefine" class="rounded-md px-3 py-2 text-sm font-medium text-gray-200 hover:bg-orange-500 hover:text-white navUpHover" active-class="bg-orange-600">Ingredient</router-link>
              <router-link to="/todefine" class="rounded-md px-3 py-2 text-sm font-medium text-gray-200 hover:bg-orange-500 hover:text-white navUpHover" active-class="bg-orange-600">About</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-disclosure id="mobile-menu" hidden class="block sm:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <router-link to="/" class="block rounded-md px-3 py-2 text-base font-medium text-gray-200 hover:bg-orange-500 hover:text-white" active-class="bg-orange-600">Home</router-link>
        <router-link to="/todefine" class="block rounded-md px-3 py-2 text-base font-medium text-gray-200 hover:bg-orange-500 hover:text-white" active-class="bg-orange-600">Meal</router-link>
        <router-link to="/todefine" class="block rounded-md px-3 py-2 text-base font-medium text-gray-200 hover:bg-orange-500 hover:text-white" active-class="bg-orange-600">Ingredient</router-link>
        <router-link to="/todefine" class="block rounded-md px-3 py-2 text-base font-medium text-gray-200 hover:bg-orange-500 hover:text-white" active-class="bg-orange-600">About</router-link>
      </div>
    </el-disclosure>
  </nav>

  <transition name="fade">
    <div :key="$route.fullPath" class="current-view my-10">
      <router-view class="mt-20"></router-view>
    </div>
  </transition>

  <footer class="footer h-40 p-5 flex items-center justify-center" :style="{background:theme.accentColor} ">
    <p>Enjoy your meal !</p>
  </footer>
</template>

<style lang="scss">

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

*::selection{
  background: #df0000;
  color: white;
}

</style>