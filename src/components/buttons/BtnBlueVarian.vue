<script setup lang="ts">
import twMerge from '@/utils/twMerge';
</script>

<template>
   <button :class="twMerge('group hover:-translate-y-1 transition-transform duration-300 relative w-fit py-2 px-8 text-white font-bold rounded-xl', $attrs.class as string)">
      <div class="absolute group-hover:blur-md rounded-xl left-0 top-0 w-full h-full bg-gradient-to-r from-btn-gradient-second-from to-btn-gradient-second-to transition-all duration-300"></div>
      <div class="absolute rounded-xl left-0 top-0 w-full h-full bg-gradient-to-r from-btn-gradient-second-from to-btn-gradient-second-to"></div>

      <div class="relative z-10 gap-2 items-center flex justify-center">
         <slot />
      </div>
   </button>
</template>