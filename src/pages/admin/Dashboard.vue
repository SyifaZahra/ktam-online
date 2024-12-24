<script setup lang="ts">
import useEventListener from "@/hooks/useEventListener";
import { Chart, registerables } from "chart.js";
import { onUnmounted, ref, shallowRef } from "vue";
import { onMounted } from "vue";

const myChart = shallowRef<HTMLCanvasElement>();
const time = ref('');
const date = ref('');
const intervalId = setInterval(() => {
   const now = new Date()
   // Format time
   time.value = now.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
   })
   
   // Format date
   date.value = now.toLocaleDateString('id-ID', {
      weekday: 'long',
      day: 'numeric',
      year: 'numeric'
   }).toLowerCase()
}, 1000);

let chart: Chart;
onMounted(() => {
   Chart.register(...registerables);
   Chart.defaults.color = '#fff';
   Chart.defaults.font.size = 16;

   // Data untuk grafik (ganti dengan data Anda)
   const data = {
      labels: ["January", "February", "March", "April", "May", "june", "july", "august", "september", "october", "november", "december"],
      datasets: [
         {
            label: "Data Pendaftar per-bulan",
            data: new Array(12).fill(0).map(() => (Math.random() * (100 - 10) + 10)),
            backgroundColor: "rgba(75, 192, 192, 0)",
            borderColor: "rgba(255, 255, 255, 1)",
            borderWidth: 3,
         }
      ],
   };

   // Opsi untuk grafik
   const options = {
      responsive: false,
      plugins: {
         legend: {
            position: "top",
         },
         tooltip: {
            mode: "index",
            intersect: false,
         },
      },
      scales: {
         x: {
            border: {
               display: true
            },
            grid: {
               display: false,
               color: "#ffffff"
            },
         },
         y: {
            border: {
               display: true
            },
            beginAtZero: true,
            grid: {
               // display: false,
               color: "#ffffff"
            }
         },
      },
   };

   // Membuat Chart
   if (myChart.value) {
      chart = new Chart(myChart.value.getContext('2d') as any, {
         type: "line", // Jenis grafik (ubah sesuai kebutuhan, misalnya: 'line', 'pie', dll)
         data,
         options: options as any,
      });
   }
})
onUnmounted(() => {
   clearInterval(intervalId);
});
useEventListener(window, 'resize', () => {
   if (chart) {
      chart.resize();
   }
});
</script>

<template>
   <div class="flex justify-center items-center bg-blue-200">
      <div class="">
         <div class="grid grid-cols-12 gap-4 xl:grid-rows-5 lg:grid-rows-10 grid-rows-10 w-screen xl:h-screen p-4">
            <div class="z-50 lg:col-span-1 col-span-12 min-w-16 bg-gradient-to-b from-primary-lighter-2 to-primary-darker w-20 xl:row-span-5 lg:row-span-10 row-span-1 rounded-3xl">
               <ul class="text-white flex lg:flex-col flex-row items-center lg:pt-9 gap-10 h-full">
                  <!-- humburger bar -->
                  <li class="">
                     <a href="#">
                        <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M2 2H30M2 11.5H30M2 21H30" stroke="white" stroke-width="3" stroke-linecap="round"
                              stroke-linejoin="round" />
                        </svg>
                     </a>
                  </li>
                  <div class="lg:pt-10 flex gap-10 lg:flex-col flex-row grow ">
                     <!-- home -->
                     <li class="group relative"><a href="#">
                           <svg width="28" height="31" viewBox="0 0 28 31" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                 d="M0 27.4571V11.5143C0 10.9533 0.12425 10.4219 0.37275 9.92C0.62125 9.41809 0.963667 9.00476 1.4 8.68L11.9 0.708571C12.5125 0.236191 13.2125 0 14 0C14.7875 0 15.4875 0.236191 16.1 0.708571L26.6 8.68C27.0375 9.00476 27.3805 9.41809 27.629 9.92C27.8775 10.4219 28.0012 10.9533 28 11.5143V27.4571C28 28.4314 27.657 29.2658 26.971 29.9602C26.285 30.6546 25.4613 31.0012 24.5 31H19.25C18.7542 31 18.3388 30.8299 18.004 30.4898C17.6692 30.1497 17.5012 29.7293 17.5 29.2286V20.3714C17.5 19.8695 17.332 19.4491 16.996 19.1102C16.66 18.7712 16.2447 18.6012 15.75 18.6H12.25C11.7542 18.6 11.3388 18.7701 11.004 19.1102C10.6692 19.4503 10.5012 19.8707 10.5 20.3714V29.2286C10.5 29.7305 10.332 30.1515 9.996 30.4916C9.66 30.8317 9.24467 31.0012 8.75 31H3.5C2.5375 31 1.71383 30.6534 1.029 29.9602C0.344166 29.2669 0.00116667 28.4326 0 27.4571Z"
                                 fill="white" />
                           </svg>
                        </a>
                        <div
                           class="text-lg text-white ml-2 absolute group-hover:opacity-100 opacity-0 w-40 bg-[#77B0FF] rounded-[0_10px_10px_0] py-2 text-center transition-all duration-300 -translate-x-4 group-hover:translate-x-0 top-1/2 -translate-y-1/2 left-9 -z-10">
                           Home</div>
                     </li>
                     <!-- pendaftar -->
                     <li class="group relative"><a href="#">
                           <svg width="31" height="31" viewBox="0 0 31 31" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <mask id="mask0_102_91" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0"
                                 width="31" height="31">
                                 <path
                                    d="M1 15.1918C1 7.35476 7.35476 1 15.1918 1C23.0288 1 29.3836 7.35476 29.3836 15.1918C29.3836 23.0288 23.0288 29.3836 15.1918 29.3836C7.35476 29.3836 1 23.0288 1 15.1918Z"
                                    fill="white" stroke="white" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                 <path d="M8.8844 15.1917L13.615 19.9223L21.4993 12.038" stroke="black" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                              </mask>
                              <g mask="url(#mask0_102_91)">
                                 <path d="M33.8447 -3H-4V34.8447H33.8447V-3Z" fill="white" />
                              </g>
                           </svg>
                        </a>
                        <div
                           class="text-lg text-white ml-2 absolute group-hover:opacity-100 opacity-0 w-40 bg-[#77B0FF] rounded-[0_10px_10px_0] py-2 text-center transition-all duration-300 -translate-x-4 group-hover:translate-x-0 top-1/2 -translate-y-1/2 left-9 -z-10">
                           pendaftar</div>
                     </li>
                     <!-- bukti bayar -->
                     <li class="group relative"><a href="#">
                           <svg width="28" height="23" viewBox="0 0 28 23" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                 d="M4.5 0.383545C3.30653 0.383545 2.16193 0.857651 1.31802 1.70156C0.474106 2.54548 0 3.69007 0 4.88354V6.38354H28V4.88354C28 3.69007 27.5259 2.54548 26.682 1.70156C25.8381 0.857651 24.6935 0.383545 23.5 0.383545H4.5ZM0 17.8835V8.38354H28V17.8835C28 19.077 27.5259 20.2216 26.682 21.0655C25.8381 21.9094 24.6935 22.3835 23.5 22.3835H4.5C3.30653 22.3835 2.16193 21.9094 1.31802 21.0655C0.474106 20.2216 0 19.077 0 17.8835ZM19 14.3835C18.7348 14.3835 18.4804 14.4889 18.2929 14.6764C18.1054 14.864 18 15.1183 18 15.3835C18 15.6488 18.1054 15.9031 18.2929 16.0907C18.4804 16.2782 18.7348 16.3835 19 16.3835H22C22.2652 16.3835 22.5196 16.2782 22.7071 16.0907C22.8946 15.9031 23 15.6488 23 15.3835C23 15.1183 22.8946 14.864 22.7071 14.6764C22.5196 14.4889 22.2652 14.3835 22 14.3835H19Z"
                                 fill="white" />
                           </svg>
                        </a>
                        <div
                           class="text-lg text-white ml-2 absolute group-hover:opacity-100 opacity-0 w-40 bg-[#5FA1FF] rounded-[0_10px_10px_0] py-2 text-center transition-all duration-300 -translate-x-4 group-hover:translate-x-0 top-1/2 -translate-y-1/2 left-9 -z-10">
                           penerimaan</div>
                     </li>
                     <!-- anggota -->
                     <li class="group relative"><a href="#">
                           <svg width="29" height="29" viewBox="0 0 29 29" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                 d="M14.5 14.5C12.5062 14.5 10.7995 13.7901 9.37969 12.3703C7.9599 10.9505 7.25 9.24375 7.25 7.25C7.25 5.25625 7.9599 3.54948 9.37969 2.12969C10.7995 0.709896 12.5062 0 14.5 0C16.4937 0 18.2005 0.709896 19.6203 2.12969C21.0401 3.54948 21.75 5.25625 21.75 7.25C21.75 9.24375 21.0401 10.9505 19.6203 12.3703C18.2005 13.7901 16.4937 14.5 14.5 14.5ZM0 25.375V23.925C0 22.8979 0.264625 21.9542 0.793875 21.0939C1.32313 20.2335 2.02517 19.5762 2.9 19.1219C4.77292 18.1854 6.67604 17.4834 8.60937 17.0157C10.5427 16.5481 12.5062 16.3137 14.5 16.3125C16.4937 16.3113 18.4573 16.5457 20.3906 17.0157C22.324 17.4858 24.2271 18.1878 26.1 19.1219C26.976 19.575 27.6787 20.2323 28.2079 21.0939C28.7372 21.9554 29.0012 22.8991 29 23.925V25.375C29 26.3719 28.6454 27.2256 27.9361 27.9361C27.2268 28.6466 26.3731 29.0012 25.375 29H3.625C2.62812 29 1.77504 28.6454 1.06575 27.9361C0.356458 27.2268 0.00120833 26.3731 0 25.375Z"
                                 fill="white" />
                           </svg>
                        </a>
                        <div
                           class="text-lg text-white ml-2 absolute group-hover:opacity-100 opacity-0 w-40 bg-[#5199FF] rounded-[0_10px_10px_0] py-2 text-center transition-all duration-300 -translate-x-4 group-hover:translate-x-0 top-1/2 -translate-y-1/2 left-9 -z-10">
                           anggota</div>
                     </li>
                  </div>
                  <div class="mb-5 py-5">
                     <!-- setiing -->
                     <li class="mb-5 group relative"><a href="#">
                           <svg width="29" height="30" viewBox="0 0 29 30" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                 d="M12.7103 30C12.0249 30 11.435 29.775 10.9405 29.325C10.446 28.875 10.1475 28.325 10.0449 27.675L9.70221 25.2C9.3722 25.075 9.06148 24.925 8.77006 24.75C8.47864 24.575 8.1928 24.3875 7.91255 24.1875L5.55173 25.1625C4.9171 25.4375 4.28248 25.4625 3.64785 25.2375C3.01322 25.0125 2.51821 24.6125 2.16282 24.0375L0.373162 20.9625C0.0177694 20.3875 -0.0837709 19.775 0.06854 19.125C0.220851 18.475 0.56355 17.9375 1.09664 17.5125L3.11476 16.0125C3.08937 15.8375 3.07668 15.6685 3.07668 15.5055V14.493C3.07668 14.331 3.08937 14.1625 3.11476 13.9875L1.09664 12.4875C0.56355 12.0625 0.220851 11.525 0.06854 10.875C-0.0837709 10.225 0.0177694 9.6125 0.373162 9.0375L2.16282 5.9625C2.51821 5.3875 3.01322 4.9875 3.64785 4.7625C4.28248 4.5375 4.9171 4.5625 5.55173 4.8375L7.91255 5.8125C8.19179 5.6125 8.48372 5.425 8.78834 5.25C9.09296 5.075 9.39758 4.925 9.70221 4.8L10.0449 2.325C10.1464 1.675 10.445 1.125 10.9405 0.675C11.436 0.225 12.026 0 12.7103 0H16.2897C16.9751 0 17.5655 0.225 18.061 0.675C18.5565 1.125 18.8546 1.675 18.9551 2.325L19.2978 4.8C19.6278 4.925 19.939 5.075 20.2315 5.25C20.5239 5.425 20.8092 5.6125 21.0874 5.8125L23.4483 4.8375C24.0829 4.5625 24.7175 4.5375 25.3522 4.7625C25.9868 4.9875 26.4818 5.3875 26.8372 5.9625L28.6268 9.0375C28.9822 9.6125 29.0838 10.225 28.9315 10.875C28.7792 11.525 28.4364 12.0625 27.9034 12.4875L25.8852 13.9875C25.9106 14.1625 25.9233 14.3315 25.9233 14.4945V15.5055C25.9233 15.6685 25.8979 15.8375 25.8472 16.0125L27.8653 17.5125C28.3984 17.9375 28.7411 18.475 28.8934 19.125C29.0457 19.775 28.9442 20.3875 28.5888 20.9625L26.761 24.0375C26.4056 24.6125 25.9106 25.0125 25.276 25.2375C24.6414 25.4625 24.0067 25.4375 23.3721 25.1625L21.0874 24.1875C20.8082 24.3875 20.5163 24.575 20.2117 24.75C19.907 24.925 19.6024 25.075 19.2978 25.2L18.9551 27.675C18.8536 28.325 18.5555 28.875 18.061 29.325C17.5665 29.775 16.9761 30 16.2897 30H12.7103ZM14.5762 20.25C16.0485 20.25 17.3051 19.7375 18.3458 18.7125C19.3866 17.6875 19.907 16.45 19.907 15C19.907 13.55 19.3866 12.3125 18.3458 11.2875C17.3051 10.2625 16.0485 9.75 14.5762 9.75C13.0784 9.75 11.8153 10.2625 10.7867 11.2875C9.75805 12.3125 9.24426 13.55 9.24527 15C9.24629 16.45 9.76059 17.6875 10.7882 18.7125C11.8158 19.7375 13.0784 20.25 14.5762 20.25Z"
                                 fill="white" />
                           </svg>
                        </a>
                        <div
                           class="text-lg text-white ml-2 absolute group-hover:opacity-100 opacity-0 w-40 bg-[#2881FE] rounded-[0_10px_10px_0] py-2 text-center transition-all duration-300 -translate-x-4 group-hover:translate-x-0 top-1/2 -translate-y-1/2 left-9 -z-10">
                           setting</div>
                     </li>
                     <!-- logout -->
                     <li class="group relative"><a href="#">
                           <svg width="29" height="29" viewBox="0 0 29 29" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                 d="M29 14.5L23.2 8.7V13.05H11.6V15.95H23.2V20.3M26.1 23.2C24.274 25.6346 21.7283 27.433 18.8234 28.3404C15.9186 29.2479 12.8018 29.2183 9.9147 28.2559C7.02757 27.2935 4.51644 25.4472 2.73699 22.9783C0.957542 20.5095 0 17.5433 0 14.5C0 11.4567 0.957542 8.49055 2.73699 6.0217C4.51644 3.55285 7.02757 1.70647 9.9147 0.744092C12.8018 -0.218282 15.9186 -0.247858 18.8234 0.659554C21.7283 1.56697 24.274 3.36536 26.1 5.8H22.1415C20.4672 4.32341 18.4024 3.36131 16.1949 3.02913C13.9873 2.69696 11.7308 3.00883 9.69614 3.92732C7.66146 4.84581 5.93502 6.3319 4.724 8.20727C3.51298 10.0826 2.86882 12.2676 2.86882 14.5C2.86882 16.7324 3.51298 18.9174 4.724 20.7927C5.93502 22.6681 7.66146 24.1542 9.69614 25.0727C11.7308 25.9912 13.9873 26.303 16.1949 25.9709C18.4024 25.6387 20.4672 24.6766 22.1415 23.2H26.1Z"
                                 fill="white" />
                           </svg>
                        </a>
                        <div
                           class="text-lg text-white ml-2 absolute group-hover:opacity-100 opacity-0 w-40 bg-[#2881FE] rounded-[0_10px_10px_0] py-2 text-center transition-all duration-300 -translate-x-4 group-hover:translate-x-0 top-1/2 -translate-y-1/2 left-9 -z-10">
                           logout</div>
                     </li>
                  </div>
               </ul>
            </div>
            <div class="xl:col-span-8 lg:col-span-11 col-span-12 bg-gradient-to-b from-primary-lighter-2 to-primary-darker lg:row-span-3 row-span-2 rounded-2xl">
               <canvas ref="myChart" class="p-5 w-full h-full"></canvas>
            </div>
            <div class="xl:col-span-3 lg:col-span-11 col-span-12 bg-gradient-to-b from-primary-lighter-2 to-primary-darker row-span-1 rounded-2xl">
               <div class="h-full w-full rounded-md flex justify-center items-center gap-4">
                  <div class="">
                     <svg width="75" height="75" viewBox="0 0 69 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                           d="M48.1828 30.6375C48.1828 34.65 46.7548 38.4982 44.2127 41.3354C41.6707 44.1727 38.223 45.7667 34.628 45.7667C31.0331 45.7667 27.5854 44.1727 25.0434 41.3354C22.5013 38.4982 21.0732 34.65 21.0732 30.6375C21.0732 26.625 22.5013 22.7768 25.0434 19.9395C27.5854 17.1023 31.0331 15.5083 34.628 15.5083C38.223 15.5083 41.6707 17.1023 44.2127 19.9395C46.7548 22.7768 48.1828 26.625 48.1828 30.6375Z"
                           fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                           d="M33.2455 75.9948C15.1719 75.1854 0.741089 58.5735 0.741089 38.2021C0.741089 17.3125 15.9123 0.37915 34.6281 0.37915C53.3439 0.37915 68.5151 17.3125 68.5151 38.2021C68.5151 59.0917 53.3439 76.0251 34.6281 76.0251H34.1638C33.8566 76.0251 33.5505 76.015 33.2455 75.9948ZM12.8828 62.0684C12.6294 61.2563 12.5432 60.3909 12.6305 59.5365C12.7178 58.6821 12.9763 57.8606 13.387 57.133C13.7977 56.4054 14.3499 55.7904 15.0026 55.3336C15.6554 54.8768 16.392 54.5899 17.1576 54.4943C30.3668 52.8623 38.9707 53.0098 52.1155 54.5284C52.8822 54.6175 53.6206 54.9007 54.2744 55.3565C54.9282 55.8122 55.4802 56.4285 55.8884 57.1584C56.2965 57.8883 56.5501 58.7125 56.6297 59.5683C56.7094 60.424 56.613 61.2888 56.348 62.0967C61.9819 55.735 65.1369 47.1472 65.1264 38.2021C65.1264 19.4022 51.4716 4.16145 34.6281 4.16145C17.7846 4.16145 4.12979 19.4022 4.12979 38.2021C4.12979 47.499 7.46935 55.9259 12.8828 62.0684Z"
                           fill="white" />
                     </svg>
                  </div>
                  <div class="flex flex-col items-center">
                     <h1 class="font-bold text-xl">JUMLAH ANGGOTA </h1>
                     <h3 class="font-bold text-6xl">1,899</h3>
                  </div>
               </div>
            </div>
            <div class="xl:col-span-3 lg:col-span-11 grid grid-rows-6 grid-cols-2 overflow-hidden shadow-lg col-span-12 bg-white row-span-2 rounded-2xl">
               <div class="p-6 flex items-center gap-4 row-span-2 col-span-2">
                  <div class="bg-blue-500 p-4 rounded-2xl">
                     <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.3784 41.8108C32.5286 41.8108 41.5676 32.7717 41.5676 21.6216C41.5676 10.4714 32.5286 1.43237 21.3784 1.43237C10.2282 1.43237 1.18921 10.4714 1.18921 21.6216C1.18921 32.7717 10.2282 41.8108 21.3784 41.8108Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M19.1351 12.6487V23.8649H30.3513" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                     </svg>
                  </div>
                  <h2 class="text-2xl font-bold">Pendafatar</h2>
               </div>

               <div class="row-span-4 col-span-1 flex flex-col justify-center items-center bg-blue-500 p-6 text-white">
                  <p class="text-sm font-medium mb-4">BELUM BAYAR</p>
                  <p class="text-6xl font-bold">15</p>
               </div>
               <div class="row-span-4 col-span-1 flex flex-col justify-center items-center bg-blue-400 p-6 text-black">
                  <p class="text-sm font-medium mb-4">MENUNGGU KONFIRMASI</p>
                  <p class="text-6xl font-bold">20</p>
               </div>
            </div>
            <div class="xl:col-span-8 carousel gap-6 lg:col-span-11 col-span-12 row-span-2 rounded-2xl">
               <div
                  class="carousel-item bg-white rounded-[3rem] p-6 min-w-56 shadow-lg flex-1 flex flex-col items-center justify-between">
                  <div class="flex items-center justify-center flex-grow">
                     <p class="sm:text-xl text-center">
                        calon anggota membuat akun untuk pengajuan KTA
                     </p>
                  </div>
                  <div
                     class="md:w-20 md:h-20 w-16 h-16 min-h-16 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg mt-4">
                     01
                  </div>
               </div>

               <div
                  class="carousel-item bg-white rounded-[3rem] p-6 min-w-56 shadow-lg flex-1 flex flex-col items-center justify-between">
                  <div class="flex items-center justify-center flex-grow">
                     <p class="sm:text-xl text-center">
                        admin menyetujui pembuatan akun calon pendaftar
                     </p>
                  </div>
                  <div
                     class="md:w-20 md:h-20 w-16 h-16 min-h-16 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg mt-4">
                     02
                  </div>
               </div>

               <div
                  class="carousel-item bg-white rounded-[3rem] p-6 min-w-56 shadow-lg flex-1 flex flex-col items-center justify-between">
                  <div class="flex items-center justify-center flex-grow">
                     <p class="sm:text-xl text-center">
                        pendaftar akan di beri notifikasi jika pembuatan KTA berhasil
                     </p>
                  </div>
                  <div
                     class="md:w-20 md:h-20 w-16 h-16 min-h-16 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg mt-4">
                     03
                  </div>
               </div>

               <div
                  class="carousel-item bg-white rounded-[3rem] p-6 min-w-56 shadow-lg flex-1 flex flex-col items-center justify-between">
                  <div class="flex items-center justify-center flex-grow">
                     <p class="sm:text-xl text-center">
                        pendaftar dapat menggunakan akun yang telah di buat untuk masuk dan mencetak KTA
                     </p>
                  </div>
                  <div
                     class="md:w-20 md:h-20 w-16 h-16 min-h-16 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg mt-4">
                     04
                  </div>
               </div>
            </div>
            <div class="xl:col-span-3 lg:col-span-11 col-span-12 p-8 relative overflow-hidden bg-gradient-to-bl from-purple-500 to-blue-500 row-span-2 rounded-2xl">
               <svg class="absolute right-0 top-1/2 -translate-y-1/2 w-3/5 opacity-50" viewBox="0 0 213 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M27.3276 47.7412L39.8987 55.9246L27.3276 47.7412ZM116.076 39.8203C123.019 44.3399 132.311 42.3755 136.83 35.4327C141.35 28.4899 139.386 19.1978 132.443 14.6782L116.076 39.8203ZM123.463 180.803L110.892 172.619L110.892 172.619L123.463 180.803ZM171.187 76.6473L163.004 89.2183L163.004 89.2183L171.187 76.6473ZM56.003 132.102C30.5202 115.513 23.31 81.4075 39.8987 55.9246L14.7566 39.5578C-10.8713 78.9262 0.267703 131.616 39.6362 157.244L56.003 132.102ZM39.8987 55.9246C56.4874 30.4418 90.5931 23.2316 116.076 39.8203L132.443 14.6782C93.0743 -10.9496 40.3844 0.189328 14.7566 39.5578L39.8987 55.9246ZM100.212 122.1C117.112 133.101 121.893 155.72 110.892 172.619L136.034 188.986C156.075 158.201 147.364 116.999 116.579 96.9582L100.212 122.1ZM110.892 172.619C99.891 189.519 77.2729 194.3 60.3733 183.299L44.0065 208.441C74.7917 228.482 115.994 219.771 136.034 188.986L110.892 172.619ZM187.413 62.6242C185.851 65.0232 182.32 65.9965 179.371 64.0762L163.004 89.2183C179.446 99.9216 201.7 95.6659 212.555 78.991L187.413 62.6242ZM179.371 64.0762C176.421 62.156 175.882 58.5331 177.443 56.134L152.301 39.7672C141.446 56.442 146.562 78.515 163.004 89.2183L179.371 64.0762Z" fill="white"/>
               </svg>


               <div class="relative z-10 flex flex-col h-full">
                  <h1 class="text-white text-5xl font-bold mb-2">
                     {{ time }}
                  </h1>
                  <p class="text-white/90 text-xl mb-8">
                     {{ date }}
                  </p>
                  <div class="space-y-1 mt-auto">
                     <h2 class="text-white text-2xl font-medium">
                        Selamat Datang
                     </h2>
                     <p class="text-white text-2xl font-medium">
                        Admin
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>