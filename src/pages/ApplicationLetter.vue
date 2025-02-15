<script setup lang="ts">
import logoIkapeksi from '@/assets/logos/ikapeksi.png'
import saveToPDF from '@/utils/saveToPDF';
import signatureKetum from '@/assets/signatures/ttd_ketum.png';
import signatureSekre from '@/assets/signatures/ttd_sekre.png';
import stample from '@/assets/signatures/stample.png';
import SignaturePad from 'signature_pad';
import trimCanvas from '@/utils/trimCanvas';
import { onMounted, onUnmounted, ref, shallowRef } from 'vue';
import useEventListener from '@/hooks/useEventListener';

const a4PaperPage1 = shallowRef<HTMLDivElement>()
const a4PaperPage2 = shallowRef<HTMLDivElement>()
const saveDoc = () => {
   if (a4PaperPage1.value && a4PaperPage2.value) {
      a4PaperPage1.value.style.display = 'block'
      a4PaperPage2.value.style.display = 'block'
      saveToPDF([a4PaperPage1.value, a4PaperPage2.value], 'blanko-pendaftaran-kta-inpeksi')
      a4PaperPage1.value.style.display = 'none'
      a4PaperPage2.value.style.display = 'none'
   }
}

const
   signatureOrientation = ref<'portrait' | 'landscape'>('portrait'),
   signatureCanvas = shallowRef<HTMLCanvasElement>(),
   sigDataUrl = ref<string | null>(null),
   canvasIsShown = ref(false);
let signaturePad: SignaturePad | undefined = undefined
function resizeCanvas() {
   if (!signatureCanvas.value || !signaturePad) return

   const ratio = Math.max(window.devicePixelRatio || 1, 1);
   signatureCanvas.value.width = signatureCanvas.value.offsetWidth * ratio;
   signatureCanvas.value.height = signatureCanvas.value.offsetHeight * ratio;
   signatureCanvas.value.getContext("2d")?.scale(ratio, ratio);

   signaturePad.minWidth = 2.5;
   signaturePad.maxWidth = 7;

   signaturePad?.clear();
}

const applySignature = () => {
   if (signaturePad) {
      sigDataUrl.value = trimCanvas(signatureCanvas.value as HTMLCanvasElement)
      showSignatureCanvas(false)
      signatureOrientation.value = window.innerWidth < 1024 ? 'landscape' : 'portrait'
   }
}

const showSignatureCanvas = (show: boolean) => {
   if (show) {
      canvasIsShown.value = true
      document.body.style.overflow = 'hidden'
      signaturePad?.clear()
   } else {
      document.body.style.overflow = 'auto'
      canvasIsShown.value = false
   }
}

useEventListener(window, 'resize', () => {
   if (!signatureCanvas.value || !signaturePad) return

   const ratio = Math.max(window.devicePixelRatio || 1, 1);
   signatureCanvas.value.width = signatureCanvas.value.offsetWidth * ratio;
   signatureCanvas.value.height = signatureCanvas.value.offsetHeight * ratio;
   signatureCanvas.value.getContext("2d")?.scale(ratio, ratio);

   signaturePad.minWidth = 2.5;
   signaturePad.maxWidth = 7;

   signaturePad?.clear();
})

onMounted(() => {
   if (signatureCanvas.value) {
      signaturePad = new SignaturePad(signatureCanvas.value);
      resizeCanvas();
   }
})
onUnmounted(() => {
   document.body.style.overflow = 'auto'
})
</script>

<template>
   <div class="bg-gray-200 h-max">
      <div class="min-h-screen h-full flex flex-col lg:flex-row justify-center items-center lg:items-start gap-4">
         <!-- ACTUAL PDF PAGE-1 -->
         <div ref="a4PaperPage1" class="fixed -z-50" :style="{ display: 'none' }">
            <div class="flex flex-col relative bg-white py-10 px-16"
               :style="{ height: '297mm', width: '210mm', minHeight: '297mm', minWidth: '210mm', fontFamily: 'serif'}">
               <div class="text-center">
                  <img :src="logoIkapeksi" class="inline-block w-[10em]">
                  <h1 class="text-2xl font-bold mt-3">BLANKO PENDAFTARAN <br> KTA INPEKSI</h1>
               </div>

               <div class="mt-10">
                  <h1 class="text-xl">Data Diri</h1>
                  <table class="ml-6">
                     <tbody>
                        <tr>
                           <td class="min-w-[20ch] align-top">Nama Lengkap</td>
                           <td class="align-top">:</td>
                           <td class="align-top w-full">......................................................</td>
                        </tr>
                        <tr>
                           <td class="align-top">NIK</td>
                           <td class="align-top">:</td>
                           <td class="align-top"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
                              labore dolor obcaecati voluptate nobis, praesentium illo magni. Vel nostrum nobis odio
                              nesciunt nisi cupiditate delectus iure quaerat, odit facere expedita.</td>
                        </tr>
                        <tr>
                           <td class="align-top">Tempat, Tangga Lahir</td>
                           <td class="align-top">:</td>
                           <td class="align-top w-full">......................................................</td>
                        </tr>
                        <tr>
                           <td class="align-top">Jenis Kelamin</td>
                           <td class="align-top">:</td>
                           <td class="align-top w-full">......................................................</td>
                        </tr>
                        <tr>
                           <td class="align-top">Agama</td>
                           <td class="align-top">:</td>
                           <td class="align-top w-full">......................................................</td>
                        </tr>
                        <tr>
                           <td class="align-top">Email</td>
                           <td class="align-top">:</td>
                           <td class="align-top w-full">......................................................</td>
                        </tr>
                        <tr>
                           <td class="align-top">No. Telp/HP</td>
                           <td class="align-top">:</td>
                           <td class="align-top w-full">......................................................</td>
                        </tr>
                        <tr>
                           <td class="align-top">Profesis</td>
                           <td class="align-top">:</td>
                           <td class="align-top w-full">......................................................</td>
                        </tr>
                        <tr>
                           <td class="align-top">Pekerjaan</td>
                           <td class="align-top">:</td>
                           <td class="align-top w-full">......................................................</td>
                        </tr>
                        <tr>
                           <td class="align-top">Nama Instansi</td>
                           <td class="align-top">:</td>
                           <td class="align-top w-full">......................................................</td>
                        </tr>
                        <tr>
                           <td class="align-top">Lembaga Pemagangan Jepang</td>
                           <td class="align-top">:</td>
                           <td class="align-top w-full">......................................................</td>
                        </tr>
                        <tr>
                           <td class="align-top">Tahun Keberangkatan</td>
                           <td class="align-top">:</td>
                           <td class="align-top w-full">......................................................</td>
                        </tr>
                        <tr>
                           <td class="align-top">Tahun Kepulangan</td>
                           <td class="align-top">:</td>
                           <td class="align-top w-full">......................................................</td>
                        </tr>
                        <tr>
                           <td class="align-top">Nama Perusahaan Jepang</td>
                           <td class="align-top">:</td>
                           <td class="align-top w-full">......................................................</td>
                        </tr>
                        <tr>
                           <td class="align-top">Bidang Kerja di Jepang</td>
                           <td class="align-top">:</td>
                           <td class="align-top w-full">......................................................</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
         <!-- ACTUAL PDF PAGE-2 -->
         <div ref="a4PaperPage2" class="fixed -z-50" :style="{ display: 'none' }">
            <div class="flex flex-col relative bg-white py-10 px-16"
               :style="{ height: '297mm', width: '210mm', minHeight: '297mm', minWidth: '210mm', fontFamily: 'serif'}">
               <div>
                  <h1 class="text-[1.25em]">Data Alamat</h1>
                  <table class="ml-[1.5em]">
                     <tbody>
                        <tr>
                           <td class="min-w-[20ch] align-top">Profinsi</td>
                           <td class="align-top">:</td>
                           <td class="align-top w-full">......................................................</td>
                        </tr>
                        <tr>
                           <td class="min-w-[20ch] align-top">Kabupaten</td>
                           <td class="align-top">:</td>
                           <td class="align-top w-full">......................................................</td>
                        </tr>
                        <tr>
                           <td class="min-w-[20ch] align-top">Desa / Kelurahan</td>
                           <td class="align-top">:</td>
                           <td class="align-top w-full">......................................................</td>
                        </tr>
                        <tr>
                           <td class="min-w-[20ch] align-top">Alamat</td>
                           <td class="align-top">:</td>
                           <td class="align-top w-full">......................................................</td>
                        </tr>
                        <tr>
                           <td class="min-w-[20ch] align-top">Kode Pos</td>
                           <td class="align-top">:</td>
                           <td class="align-top w-full">......................................................</td>
                        </tr>
                     </tbody>
                  </table>
               </div>

               <div class="mt-10 grow">
                  <h1 class="text-[1.25em]">Data Usaha / Pekerjaan</h1>
                  <table class="ml-[1.5em]">
                     <tbody>
                        <tr>
                           <td class="min-w-[20ch] align-top">Nama Usaha</td>
                           <td class="align-top">:</td>
                           <td class="align-top w-full">......................................................</td>
                        </tr>
                        <tr>
                           <td class="min-w-[20ch] align-top">Jabatan</td>
                           <td class="align-top">:</td>
                           <td class="align-top w-full">......................................................</td>
                        </tr>
                        <tr>
                           <td class="min-w-[20ch] align-top">Alamat Usaha</td>
                           <td class="align-top">:</td>
                           <td class="align-top w-full">......................................................</td>
                        </tr>
                        <tr>
                           <td class="min-w-[20ch] align-top">Nama Instansi Bekerja</td>
                           <td class="align-top">:</td>
                           <td class="align-top w-full">......................................................</td>
                        </tr>
                        <tr>
                           <td class="min-w-[20ch] align-top">Bidang Usaha</td>
                           <td class="align-top">:</td>
                           <td class="align-top w-full">......................................................</td>
                        </tr>
                        <tr>
                           <td class="min-w-[20ch] align-top">Alamat Instansi Bekerja</td>
                           <td class="align-top">:</td>
                           <td class="align-top w-full">......................................................</td>
                        </tr>
                        <tr>
                           <td class="min-w-[20ch] align-top">Tahun Berdiri</td>
                           <td class="align-top">:</td>
                           <td class="align-top w-full">......................................................</td>
                        </tr>
                     </tbody>
                  </table>
               </div>

               <div class="flex justify-between my-10">
                  <div class="relative min-w-40 text-center">
                     <h1>Pemohon</h1>
                     <img v-if="sigDataUrl" :src="sigDataUrl" :class="{'-rotate-90 pl-10 pr-6' : signatureOrientation == 'landscape', 'pb-6': signatureOrientation != 'landscape'}" class="mt-[1.3rem] absolute z-10 top-0 left-0 w-full h-full object-contain">
                     <p :class="{'mt-28': sigDataUrl}">Mr.Anonimous</p>
                  </div>
                  <div class="relative min-w-40">
                     <h1 class="text-center">Ketua</h1>
                     <img :src="signatureKetum" class="mt-[1.3rem] absolute z-10 top-0 left-0 w-full h-full object-contain pb-6">
                     <img :src="stample" class="mt-[1.3rem] absolute z-10 -top-10 left-32 object-contain pb-6">
                     <p class="mt-28 text-center">Supriyanto</p>
                  </div>
                  <div class="relative min-w-40">
                     <h1 class="text-center">Sekertatris</h1>
                     <img :src="signatureSekre" class="mt-[1.3rem] absolute z-10 top-0 left-0 w-full h-full object-contain pb-6">
                     <p class="mt-28 text-center">Rohwan, SH, MH</p>
                  </div>
               </div>
            </div>
         </div>

         <!-- DISPLAYED PDF -->
         <div class="flex flex-col relative bg-white py-[2.5em] px-[4em] w-screen md:aspect-[1/1.414] aspect-auto"
            :style="{ maxHeight: 'auto', maxWidth: '210mm', fontSize: 'clamp(12px, 2vw, 16px)', fontFamily: 'serif' }">
            <div class="text-center">
               <img :src="logoIkapeksi" class="inline-block w-[10em]">
               <h1 class="text-[1.5em] font-bold mt-3">BLANKO PENDAFTARAN <br> KTA INPEKSI</h1>
            </div>

            <div class="mt-10">
               <h1 class="text-[1.25em]">Data Diri</h1>
               <table class="ml-[1.5em]">
                  <tbody>
                     <tr>
                        <td class="min-w-[20ch] align-top">Nama Lengkap</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="align-top">NIK</td>
                        <td class="align-top">:</td>
                        <td class="align-top"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
                           labore dolor obcaecati voluptate nobis, praesentium illo magni. Vel nostrum nobis odio
                           nesciunt nisi cupiditate delectus iure quaerat, odit facere expedita.</td>
                     </tr>
                     <tr>
                        <td class="align-top">Tempat, Tangga Lahir</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="align-top">Jenis Kelamin</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="align-top">Agama</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="align-top">Email</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="align-top">No. Telp/HP</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="align-top">Profesis</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="align-top">Pekerjaan</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="align-top">Nama Instansi</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="align-top">Lembaga Pemagangan Jepang</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="align-top">Tahun Keberangkatan</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="align-top">Tahun Kepulangan</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="align-top">Nama Perusahaan Jepang</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="align-top">Bidang Kerja di Jepang</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                  </tbody>
               </table>
            </div>

            <div class="mt-10">
               <h1 class="text-[1.25em]">Data Alamat</h1>
               <table class="ml-[1.5em]">
                  <tbody>
                     <tr>
                        <td class="min-w-[20ch] align-top">Profinsi</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="min-w-[20ch] align-top">Kabupaten</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="min-w-[20ch] align-top">Desa / Kelurahan</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="min-w-[20ch] align-top">Alamat</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="min-w-[20ch] align-top">Kode Pos</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                  </tbody>
               </table>
            </div>

            <div class="mt-10 grow">
               <h1 class="text-[1.25em]">Data Usaha / Pekerjaan</h1>
               <table class="ml-[1.5em]">
                  <tbody>
                     <tr>
                        <td class="min-w-[20ch] align-top">Nama Usaha</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="min-w-[20ch] align-top">Jabatan</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="min-w-[20ch] align-top">Alamat Usaha</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="min-w-[20ch] align-top">Nama Instansi Bekerja</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="min-w-[20ch] align-top">Bidang Usaha</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="min-w-[20ch] align-top">Alamat Instansi Bekerja</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="min-w-[20ch] align-top">Tahun Berdiri</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                  </tbody>
               </table>
            </div>

            <div class="flex justify-between my-10">
               <div class="relative min-w-[10em] text-center">
                  <h1>Pemohon</h1>
                  <div v-if="!sigDataUrl" @click="showSignatureCanvas(true)"
                     class="lg:h-[7em] lg:w-[12em] w-[9em] h-full lg:px-[2em] bg-gray-200 inline-flex justify-center items-center cursor-pointer lg:text-sm text-xs">
                     klik untuk tanda tangan
                  </div>
                  <img v-if="sigDataUrl" :src="sigDataUrl" :class="{'-rotate-90 pl-6' : signatureOrientation == 'landscape', 'pb-6': signatureOrientation != 'landscape'}" class="mt-[1.3em] absolute z-10 top-0 left-0 w-full h-full object-contain">
                  <p :class="{'mt-[5em]': sigDataUrl}">Mr.Anonimous</p>
               </div>
               <div class="relative min-w-[10em]">
                  <h1 class="text-center">Ketua</h1>
                  <img :src="signatureKetum" class="mt-[1.3em] absolute z-10 top-0 left-0 w-full h-full object-contain pb-6">
                  <img :src="stample" class="mt-[1.3em] absolute z-10 -top-10 left-[8em] lg:scale-100 scale-90 object-contain pb-6">
                  <p class="mt-[5em] text-center">Supriyanto</p>
               </div>
               <div class="relative min-w-[10em]">
                  <h1 class="text-center">Sekertatris</h1>
                  <img :src="signatureSekre" class="mt-[1.3em] absolute z-10 top-0 left-0 w-full h-full object-contain pb-6">
                  <p class="mt-[5em] text-center">Rohwan, SH, MH</p>
               </div>
            </div>
         </div>

         <div class="mt-4 flex flex-col w-fit gap-4">
            <button @click="saveDoc"
               class="py-2 px-8 rounded-btn bg-[#1677FE] shadow-md font-semibold text-white">Download Dokumen</button>
            <button @click="showSignatureCanvas(true)"
               class="py-2 px-8 rounded-btn bg-[#54a10f] shadow-md font-semibold text-white">{{ sigDataUrl ? 'Ulangi Tanda Tangan' : 'Tanda Tangan' }}</button>
            <RouterLink :to="{ name: 'regist-detail' }"
               class="text-center py-2 px-8 rounded-btn bg-gray-300 shadow-md font-semibold">Keluar</RouterLink>
         </div>
      </div>

      <div class="fixed top-0 left-0 z-50 w-screen p-5 h-screen transition-opacity duration-300"
         :class="{ 'opacity-100 pointer-events-auto': canvasIsShown, 'opacity-0 pointer-events-none': !canvasIsShown }">
         <div class="relative w-full h-full">
            <div
               class="absolute w-fit lg:w-full right-0 z-50 flex lg:flex-row flex-col p-4 gap-5 items-center lg:items-start order-2">
               <h1 class="lg:text-3xl text-xl text-black lg:hidden block" :style="{ writingMode: 'vertical-lr' }">Gambar
                  Tanda Tangan</h1>
               <h1 class="lg:text-3xl text-xl text-black hidden lg:block">Gambar Tanda Tangan</h1>

               <button @click="signaturePad?.clear()" :style="{ writingMode: 'vertical-lr' }" ref="isLandscape"
                  class="block lg:hidden text-center py-8 px-2 rounded-btn bg-red-500 text-white shadow-md font-semibold">hapus</button>
               <button @click="signaturePad?.clear()"
                  class="hidden lg:block lg:py-2 lg:px-8 text-center py-8 px-2 rounded-btn bg-red-500 text-white shadow-md font-semibold">hapus</button>

               <button @click="applySignature" :style="{ writingMode: 'vertical-lr' }"
                  class="block lg:hidden text-center py-8 px-2 rounded-btn bg-green-500 text-white shadow-md font-semibold">simpan</button>
               <button @click="applySignature"
                  class="hidden lg:block lg:py-2 lg:px-8 text-center py-8 px-2 rounded-btn bg-green-500 text-white shadow-md font-semibold">simpan</button>
            </div>
            <button @click="showSignatureCanvas(false)"
               class="absolute border border-black rounded-lg top-0 lg:right-0 lg:left-auto right-auto left-0 text-3xl p-2 leading-none z-50 font-sans">×</button>
            <canvas ref="signatureCanvas"
               class="w-full h-full cursor-crosshair bg-white rounded-lg transition-transform duration-300"
               :class="{ 'translate-y-0': canvasIsShown, '-translate-y-10': !canvasIsShown }"></canvas>
         </div>
      </div>
   </div>
</template>