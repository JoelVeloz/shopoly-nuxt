<script setup lang="ts">
import BaseIcon from '@components/BaseIcon.vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const getRouteName = () => {
  switch(route.name) {
    case 'Catalog':
      return 'Catálogo';
    case 'Cart':
      return 'Carrito';
    
    default:
      return route.name;
  }
}

</script>
<template>
  <nav class="mx-auto w-full mt-4 max-w-[1200px] px-5">
    <ul class="flex items-center gap-2">
      <li class="cursor-pointer">
        <NuxtLink to="/">
          <BaseIcon icon="home" />
        </NuxtLink>
      </li>

      <li class="flex items-center gap-2">
        <span class="mx-2 text-gray-500">
          <BaseIcon icon="chevron-right" />
        </span>
        <span class="text-gray-500">{{getRouteName()}}</span>

      </li>


    </ul>
  </nav>
  <!-- /breadcrumbs  -->
</template>