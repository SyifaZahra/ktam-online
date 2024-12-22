<script setup lang="ts">
import BtnBlueVarian from '@/components/buttons/BtnBlueVarian.vue';
import BtnGreenVarian from '@/components/buttons/BtnGreenVarian.vue';
import { shallowRef } from 'vue';

const inputPhoto = shallowRef<HTMLInputElement>();
</script>

<template>
   <div class="min-h-screen bg-gradient-to-b from-primary-lighter to-primary-darker flex justify-center items-center">
      <div class="container grid grid-cols-10 gap-6 xl:px-4">
         <div class="bg-white rounded-xl shadow-md lg:col-span-6 col-span-10 pb-8 py-6 px-8">
            <h1 class="text-3xl font-bold mb-6">INFORMASI <br> PEMBUATAN KTAM ONLINE</h1>
            <ol class="list-inside list-decimal">
               <li>
                  Permohonan Online hanya untuk pemohon KTA Baru. Bukan KTAM Lama/Rusak/Hilang.
               </li>
               <li>
                  Pemohon mengisi data diri secara lengkap dan benar
               </li>
               <li>
                  Biaya Pendaftaran Anggota :
                  <ul class="list-disc list-inside ml-4">
                     <li>
                        <strong>Rp. 50.000</strong>
                        ( Mendapatkan KTA dan Sticker Ikapeksi )
                     </li>
                     <li>
                        <strong>Rp. 250.000</strong>
                        ( Mendapatkan KTA, Jaket Anggota Ikapeksi dan Sticker )
                        <strong>
                           ditransfer ke nomer rekening DPP IKAPEKSI INDONESIA ( ……………………………
                        </strong>
                     </li>
                  </ul>
               </li>
               <li>
                  Pemohon mengunduh file Formulir Pendaftaran Anggota Ikapeksi yang terletak pada kanan bawah “Cetak
                  Formulir”.
               </li>
               <li>
                  Setelah Form Permohonan Anggota di tanda tangan setelah itu uplod file , beserta pas photo berwarna,
                  dan
                  bukti transfer biaya KTA.
               </li>
               <li>
                  Ukuran file total maksimal 2MB dengan format JPG atau PDF
               </li>
               <li>
                  Setelah berhasil upload persyaratan silakan menghubungi Admin KTA DPP agar minta segera diproses
                  KTA-nya.
               </li>
               <li>
                  Pemohon menunggu proses verifikasi diterima/dikembalikan hingga pengiriman dilakukan oleh admin DPP.
               </li>
               <li>
                  Kartu Tanda Anggota yang sudah jadi akan dikirim melalui ekspedisi dengan biaya kirim ditanggung
                  pemohon
                  yang dibayarkan langsung ke kurir saat menerima paket.
               </li>
               <li>
                  Informasi lebih lanjut bisa menghubungi nomor layanan KTA Ikapeksi Permohonan KTAM Lama/Hilang/Rusak
                  silakan menghubungi nomer WA Admin Pusat: …………………………………….
               </li>
            </ol>
         </div>
         <div class="bg-white rounded-xl shadow-md lg:col-span-4 col-span-10 p-6">
            <div class="flex gap-4">
               <div @click="inputPhoto?.click()" class="w-32 h-32 bg-gray-400 rounded-xl flex flex-col justify-center items-center group cursor-pointer">
                  <svg class="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
                     <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                     <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                     <g id="SVGRepo_iconCarrier">
                        <title></title>
                        <g data-name="Layer 6" id="Layer_6">
                           <path class="cls-1"
                              d="M5,5V27H27V5ZM25,7V17.83l-3.5-3.25-5.71,6.33L12,18.83,7,23.65V7ZM8.49,25l3.86-3.71,3.86,2.13,5.41-6L25,20.56V25Z">
                           </path>
                           <rect class="cls-1" height="2" width="1.81" x="11.06" y="15"></rect>
                        </g>
                     </g>
                  </svg>
                  <p class="text-white text-sm">foto anda</p>
   
                  <input type="file" hidden ref="inputPhoto" accept=".jpg,.pdf">
               </div>
               <div>
                  <h2 class="text-xl font-semibold">your name</h2>
                  <p class="italic">examle@email.com</p>
               </div>
            </div>
            <div class="badge bg-yellow-400 badge-md mt-2 w-32 h-auto text-center">menunggu berkas</div>

            <div class="flex gap-3 mt-6">
               <RouterLink :to="{name: 'application-letter'}">
                  <BtnGreenVarian class="grow text-white">Tanda tangan berkas</BtnGreenVarian>
               </RouterLink>
               <BtnBlueVarian class="grow">Upload Bukti Pembayaran</BtnBlueVarian>
            </div>
         </div>
      </div>
   </div>
</template>