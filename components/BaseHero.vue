<script setup lang="ts">
defineProps<{
  image: string
}>();
</script>
<template>
  <div class="relative">
    <img class="w-full object-cover brightness-50 filter lg:h-[500px]" :src="image" :alt="`Hero image ${image}`" />

    <div
      class="absolute top-1/2 left-1/2 mx-auto flex w-11/12 max-w-[1200px] -translate-x-1/2 -translate-y-1/2 flex-col text-center text-white lg:ml-5">
      <slot></slot>

    </div>
  </div>
</template>