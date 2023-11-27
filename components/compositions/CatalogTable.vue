<script setup lang="ts">
import LoaderComponent from '@@/components/LoaderComponent.vue'
import CatalogFilters from '@@/components/compositions/CatalogFilters.vue';
import ProductCard from '@@/components/ProductCard.vue';
import GridOptions from '@components/compositions/GridOptions.vue'
import type { IItem } from '@/interfaces/IItem';


defineProps<{
  catalogProducts: (IItem)[],
  loading: boolean,
  pages: number;
}>()



</script>
<template>
  <section class="w-full  container mx-auto flex-grow max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10">
    <CatalogFilters />
    <div class="w-full">
      <!-- Table Filters> -->
      <GridOptions :pages="pages" :loading="loading"/>
      <!-- /Table Filters -->

      <section class="mx-auto grid max-w-[1200px] grid-cols-2 gap-3 px-5 pb-10 lg:grid-cols-3">
        <ProductCard v-if="!loading" :product="product" v-for="product in catalogProducts"
          :key="`catalog-${product.name}`" />
        <div v-else class="w-full col-span-full place-content-center">
          <LoaderComponent />
        </div>
      </section>
  </div>
</section></template>