<script setup lang="ts">
</script>

<template>
   <div class="form-control w-full">
      <div class="label">
         <span class="label-text font-bold"><slot /></span>
      </div>
      <input type="text" v-bind="$attrs" class="input w-full" />
   </div>
</template>