<script setup lang="ts">
import BtnBlueVarian from '@/components/buttons/BtnBlueVarian.vue';
import TextInput from '../forms/TextInput.vue';
</script>

<template>
   <h1 class="text-center text-3xl font-bold">Cek Pendaftaran</h1>

   <form class="mt-6 border-none">
      <TextInput placeholder="Nama Lengkap" class="border-black/50">Nama Lengkap</TextInput>
      <TextInput placeholder="16 digit angka" class="border-black/50">NIK</TextInput>

      <div class="text-center">
         <RouterLink :to="{name: 'regist-detail'}">
            <BtnBlueVarian class="mt-8 inline-flex">
               <!-- SEARCH ICON -->
               <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M15 15L11.8889 11.8889M13.4444 7.22222C13.4444 8.87246 12.7889 10.4551 11.622 11.622C10.4551 12.7889 8.87246 13.4444 7.22222 13.4444C5.57199 13.4444 3.98934 12.7889 2.82245 11.622C1.65555 10.4551 1 8.87246 1 7.22222C1 5.57199 1.65555 3.98934 2.82245 2.82245C3.98934 1.65555 5.57199 1 7.22222 1C8.87246 1 10.4551 1.65555 11.622 2.82245C12.7889 3.98934 13.4444 5.57199 13.4444 7.22222Z"
                     stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
               </svg>
               Cari
            </BtnBlueVarian>
         </RouterLink>
      </div>
   </form>
</template>