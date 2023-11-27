<script setup lang="ts">
import { IItem } from '@@/interfaces/IItem';
import ProductCard from '@components/ProductCard.vue';

 defineProps<{
    recommendedProducts: (IItem)[],
    maxItems: number
}>();
</script>
<template>
    <!-- Recommendations -->
    <section
      class="mx-auto grid max-w-[1200px] grid-cols-2 gap-3 px-5 pb-10 lg:grid-cols-4"
      
    >
      
      <ProductCard v-for="pId in maxItems"  :key="`recomm-${recommendedProducts[pId-1].name}`" :product="recommendedProducts[pId-1]"/>

    </section>
    <!-- /Recommendations -->

</template>