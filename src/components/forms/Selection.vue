<script setup lang="ts">
const { label, defaultSelection, containerClass, defaultValue } = defineProps<{ label?: string, defaultSelection?: string, containerClass?: string, defaultValue?: string }>()
</script>

<template>
   <div v-bind:class="containerClass">
      <div class="label" v-if="label">
         <span class="label-text font-bold">{{ label }}</span>
      </div>
      <select class="select select-bordered w-full" v-bind="$attrs">
         <option :value="defaultValue" disabled selected>{{ defaultSelection || "-- pilih --" }}</option>
         <slot />
      </select>
   </div>
</template>