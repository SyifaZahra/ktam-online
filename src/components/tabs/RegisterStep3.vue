<script setup lang="ts">
import imgCloud from '@/assets/decorations/cloud.png'
import TextInput from '@/components/forms/TextInput.vue';
import logoIkapeksi from '@/assets/logos/ikapeksi.png'
import logoIkapeksiBersatu from '@/assets/logos/ikapeksi-bersatu.png'
import BtnBlueVarian from '../buttons/BtnBlueVarian.vue';
</script>

<template>
   <div class="grid lg:grid-cols-2 grid-cols-1 w-full">
      <div class="px-8 py-12 relative min-h-screen bg-gradient-to-b from-primary-lighter to-primary-darker">
         <div class="mb-10">
            <h1 class="text-center text-3xl font-bold mb-8">PENDAFTARAN ANGGOTA</h1>
            <ul class="steps w-full">
               <li class="step step-success">data diri</li>
               <li class="step step-success">data alamat</li>
               <li class="step step-success">data usaha</li>
            </ul>
         </div>
         <form action="" class="relative z-10 grid md:grid-cols-2 grid-cols-1 gap-4">
            <TextInput placeholder="nama usaha">Nama Usaha</TextInput>
            <TextInput placeholder="Nama Perusahaan">Nama Perusahaan / Instansi Bekerja</TextInput>
            <TextInput placeholder="bidang usaha">Bidang Usaha</TextInput>
            <TextInput placeholder="Alamat Perusahaan">Alamat Perusahaan / Instansi Bekerja</TextInput>
            <TextInput placeholder="alamat usaha">Alamat Usaha</TextInput>
            <TextInput placeholder="Jabatan Posisi">Jabatan Posisi</TextInput>
            <TextInput placeholder="YYYY" type="number">Tahun Berdiri Usaha</TextInput>

            <div class="md:col-span-2 text-center mt-10">
               <BtnBlueVarian>Sebelumnya</BtnBlueVarian>
            </div>
         </form>

         <img :src="imgCloud" class="absolute bottom-0 left-0 w-full h-1/2 object-cover pointer-events-none">
      </div>
      <div class="bg-white lg:flex hidden flex-col gap-10 justify-center items-center">
         <img class="relative z-10 max-w-96 min-w-40 w-3/6" :src="logoIkapeksi" alt="">
         <img class="relative z-10 max-w-96 min-w-40 w-3/6" :src="logoIkapeksiBersatu" alt="">
      </div>
   </div>
</template>