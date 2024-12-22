<script setup lang="ts">
import logoIkapeksi from '@/assets/logos/ikapeksi.png'
import logoIkapeksiBersatu from '@/assets/logos/ikapeksi-bersatu.png'
import svgWave from '@/assets/decorations/wave.png'
import RegisterInfo from '@/components/tabs/RegisterInfo.vue';
import CheckRegister from '@/components/tabs/CheckRegister.vue';
import { useInView } from '@/hooks/useInView';
import { onMounted, onUnmounted, shallowRef } from 'vue';

const rootelement = shallowRef<HTMLDivElement>()
const page1 = shallowRef<HTMLDivElement>()
const page2 = shallowRef<HTMLDivElement>()

const [elementInView, observe, disconnect] = useInView({'page-1': page1, 'page-2': page2}, rootelement, { threshold: 0.5 })

onMounted(() => {observe()})
onUnmounted(() => {disconnect()})
</script>

<template>
   <div class="bg-gradient-to-b from-primary-lighter to-primary-darker min-h-screen flex flex-col items-center">
      <div class="relative w-full max-h-[21rem] h-screen flex flex-col gap-8 pt-6 justify-start items-center">
         <img class="relative z-10 max-w-52 w-3/6" :src="logoIkapeksi" alt="">
         <img class="relative z-10 max-w-52 w-3/6" :src="logoIkapeksiBersatu" alt="">

         <img class="absolute left-0 top-0 w-full sm:max-h-96 max-h-[21rem] h-screen object-fill" :src="svgWave" alt="">
      </div>

      <div class="text-black bg-white rounded-xl min-h-96 p-8 w-3/4 max-w-[1080px] my-10 lg:grid hidden gap-4 grid-cols-12 items-center">
         <div class="flex flex-col justify-center pb-4 col-span-6">
            <RegisterInfo />
         </div>
         <div class="h-full w-1 rounded-full bg-[#6BBDA8]"></div>
         <div class="flex flex-col justify-center pb-4 col-span-5">
            <CheckRegister />
         </div>
      </div>
      
      <div class="text-black bg-white rounded-xl min-h-96 p-8 w-3/4 max-w-[1080px] my-10 lg:hidden block">
         <div ref="rootelement" class="carousel w-full">
            <div ref="page1" :class="{'opacity-100 translate-x-0' : elementInView['page-1'], 'opacity-0 translate-y-10' : !elementInView['page-1']}" class="transition-all duration-500 carousel-item w-full flex flex-col justify-center pb-4">
               <RegisterInfo />
            </div>
            <div ref="page2" :class="{'opacity-100 translate-x-0' : elementInView['page-2'], 'opacity-0 translate-y-10' : !elementInView['page-2']}"  class="transition-all duration-500 carousel-item w-full flex flex-col justify-center pb-4">
               <CheckRegister />
            </div>
         </div>
         <div class="flex w-full justify-center gap-2 py-2">
            <div :class="{'bg-black w-8': elementInView['page-1']}" class="origin-center transition-all duration-300 w-1.5 h-1.5 rounded-full border border-black"></div>
            <div :class="{'bg-black w-8': elementInView['page-2']}" class="origin-center transition-all duration-300 w-1.5 h-1.5 rounded-full border border-black"></div>
         </div>
      </div>
   </div>
</template>