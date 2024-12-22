<script setup lang="ts">
import imgCloud from '@/assets/decorations/cloud.png'
import Selection from '@/components/forms/Selection.vue';
import TextInput from '@/components/forms/TextInput.vue';
</script>

<template>
   <div class="grid grid-cols-2">
      <div class="px-8 py-12 relative min-h-screen bg-gradient-to-b from-primary-lighter to-primary-darker">
         <div>
            <h1 class="text-center text-3xl font-bold mb-8">PENDAFTARAN ANGGOTA</h1>
            <ul class="steps w-full">
               <li class="step step-success">data diri</li>
               <li class="step">data alamat</li>
               <li class="step">data usaha</li>
            </ul>
         </div>
         <form action="" class="relative z-10 grid grid-cols-2 gap-4">
            <TextInput placeholder="nama">Nama Lengkap</TextInput>
            <TextInput placeholder="16 digit angka">NIK</TextInput>
            <TextInput placeholder="tempat lahir">Tempat Lahir</TextInput>
            <TextInput type="date">Tanggal Lahir</TextInput>
            <div>
               <div class="label">
                  <span class="label-text font-bold">Jenis Kelamin</span>
               </div>
               <div class="flex justify-between mt-2">
                  <div class="flex items-center gap-2">
                     <input type="radio" name="radio-2" class="radio radio-primary" checked />
                     <label for="">Laki - Laki</label>
                  </div>
                  <div class="flex items-center gap-2">
                     <input type="radio" name="radio-2" class="radio radio-primary" />
                     <label for="">Perempuan</label>
                  </div>
               </div>
            </div>
            <Selection label="Agama">
               <option value="Islam">Islam</option>
               <option value="Protestan">Kristen Protestan</option>
               <option value="Katolik">Kristen Katolik</option>
               <option value="Konghucu">Konghucu</option>
               <option value="Budha">Budha</option>
               <option value="Hindu">Hindu</option>
            </Selection>
            <TextInput placeholder="example@email.com">Email</TextInput>
            <TextInput placeholder="+62....">No. HP / WhatsApp</TextInput>
            <Selection label="Profesi">
               <option value="20">Pensiunan</option>
               <option value="19">Mengurus Rumah Tangga</option>
               <option value="18">Wiraswasta</option>
               <option value="17">Pelajar/Mahasiswa</option>
               <option value="15">Pegawai/Karyawan</option>
               <option value="14">Pengusaha</option>
               <option value="13">Pengrajin</option>
               <option value="12">Pedagang</option>
               <option value="11">Arsitek</option>
               <option value="10">Apoteker</option>
               <option value="9">Paramedis</option>
               <option value="8">Advokat</option>
               <option value="7">Akuntan</option>
               <option value="6">Insinyur</option>
               <option value="5">Dokter</option>
               <option value="4">Nelayan</option>
               <option value="3">Petani</option>
               <option value="2">Dosen</option>
               <option value="1">Guru</option>
               <option value="0">Lain-lain</option>
            </Selection>
            <TextInput placeholder="Profesi Lainnya">Profesi Lainnya</TextInput>
            <Selection label="Pekerjaan">
               <option value="1">Negeri/TNI/POLRI</option>
               <option value="2">Instansi Swasta</option>
               <option value="3">Wiraswasta</option>
               <option value="4">Belum Bekerja</option>
            </Selection>
            <TextInput placeholder="Nama Instansi / Tempat Kerja">Nama Instansi / Tempat Kerja</TextInput>
            <TextInput placeholder="Lembaga Pemagangan Jepang">Lembaga Pemagangan Jepang</TextInput>
            <div>
               <div class="label">
                  <span class="label-text font-bold">Tahun Keberangkatan dan kepulangan</span>
               </div>
               <div class="grid grid-cols-2 gap-4">
                  <TextInput placeholder="Berangkat"></TextInput>
                  <TextInput placeholder="Pulang"></TextInput>
               </div>
            </div>
         </form>

         <img :src="imgCloud" class="absolute bottom-0 left-0 w-full h-1/2 object-cover pointer-events-none">
      </div>
      <div class="bg-white">

      </div>
   </div>
</template>