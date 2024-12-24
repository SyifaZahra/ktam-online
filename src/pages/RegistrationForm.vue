<script setup lang="ts">
import RegisterStep1 from '@/components/tabs/RegisterStep1.vue';
import RegisterStep2 from '@/components/tabs/RegisterStep2.vue';
import RegisterStep3 from '@/components/tabs/RegisterStep3.vue';
import { MotionComponent } from '@vueuse/motion';
</script>

<template>
   <div class="carousel w-full overflow-y-hidden">
      <MotionComponent class="w-full carousel-item" :visible="{ opacity: 1, y: 0, transition: { ease: 'linear', bounce: 0 } }" :initial="{ opacity: 0, y: 100, transition: { ease: 'linear', bounce: 0 } }">
         <RegisterStep1 />
      </MotionComponent>
      <MotionComponent class="w-full carousel-item" :visible="{ opacity: 1, y: 0, transition: { ease: 'linear', bounce: 0 } }" :initial="{ opacity: 0, y: 100, transition: { ease: 'linear', bounce: 0 } }">
         <RegisterStep2 />
      </MotionComponent>
      <MotionComponent class="w-full carousel-item" :visible="{ opacity: 1, y: 0, transition: { ease: 'linear', bounce: 0 } }" :initial="{ opacity: 0, y: 100, transition: { ease: 'linear', bounce: 0 } }">
         <RegisterStep3 />
      </MotionComponent>
   </div>
   <!-- <div class="grid grid-cols-12 gap-4 grid-rows-5 min-h-screen w-full p-8">
      <div class="col-span-1 bg-gradient-to-bl from-violet-300 to-violet-500 row-span-5 rounded-3xl"></div>
      <div class="col-span-8 bg-gradient-to-bl from-violet-300 to-violet-500 row-span-3 rounded-2xl"></div>
      <div class="col-span-3 bg-gradient-to-bl from-violet-300 to-violet-500 row-span-1 rounded-2xl"></div>
      <div class="col-span-3 bg-gradient-to-bl from-violet-300 to-violet-500 row-span-2 rounded-2xl"></div>
      <div class="col-span-8 bg-gradient-to-bl from-violet-300 to-violet-500 row-span-2 rounded-2xl"></div>
      <div class="col-span-3 bg-gradient-to-bl from-violet-300 to-violet-500 row-span-2 rounded-2xl"></div>
   </div> -->
</template>