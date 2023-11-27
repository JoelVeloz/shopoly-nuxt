<script setup lang="ts">

import FilterGroup from '@components/FilterGroup.vue';
import type { IFilter } from "@/interfaces/IFilter";
import type { ICategoryFilter } from "@/interfaces/ICategoryFilter";
import { useCategory } from '@@/composables/useCategory';
import { type Ref,ref } from 'vue';
// import { IPriceFilter } from "@/interfaces/IPriceFilter.ts";
// import { IAttributeFilter } from "@/interfaces/IAttributeFilter.ts";
// import { IColorFilter } from "@/interfaces/IColorFilter.ts";

const { data:categoriesData, loading } = useCategory();
const filters: Ref<(IFilter)[]> = ref([
{
    title: 'Categorías',
    keywords: categoriesData.value.map((currValue) => {
      return {
        key: currValue.name??'Unknown',
        results: 10
      }
    }),
    type: 'Category'

  } as ICategoryFilter
  // {
  //   title: 'Marcas',

  //   keywords: [{
  //     key: 'APEX',
  //     results: 12
  //   },
  //   {
  //     key: 'Call of SOFA',
  //     results: 15
  //   },
  //   {
  //     key: 'Puff B&G',
  //     results: 14
  //   },
  //   {
  //     key: 'Recargaloya',
  //     results: 124
  //   }],
  //   type: 'Category'
  // } as ICategoryFilter,
  // {
  //   title: 'Precio',
  //   currency: 'dollar',
  //   type: 'Price'
  // } as IPriceFilter,
  // {
  //   title: 'Talla',
  //   keywords: ['XS', 'S', 'M', 'L', 'XL'],
  //   type: 'Attribute'
  // } as IAttributeFilter,
  // {
  //   title: 'Color',
  //   keywords: ["Grey", "Indigo", "Maroon"],
  //   type: 'Color'
  // } as IColorFilter,
  ]);

</script>
<template>
  <!-- sidebar  -->
  <section class="hidden w-[300px] flex-shrink-0 px-4 lg:block -mt-5" :key="loading.toString()">
  
    <div v-for="filter in filters" :key="`${filter.title}-${categoriesData}`" class="flex border-b last:border-none py-5">
      <FilterGroup :filter="filter" />
    </div>


  </section>
  <!-- /sidebar  -->
</template>