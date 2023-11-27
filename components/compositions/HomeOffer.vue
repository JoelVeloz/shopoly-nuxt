<script setup lang="ts">
import BaseButton from '@components/BaseButton.vue';
import {sale_bagep} from "@@/constants/assets"
defineProps<{
  title?: string,
  subtitle?: string,
  accentText?: string,
  action?: 'redirect-product-detail' | 'redirect-catalog' | string 

}>();
</script>
<template>
    <!-- Special offer card -->

    <div class="col-span-12 w-full mx-auto max-w-[1200px] px-5">
      <section
        class="mt-10 flex max-w-[1200px] justify-between bg-violet-900 px-5"
      >
        <div class="py-8 px-3 lg:px-16">
          <p class="text-white">{{title ?? 'OFERTA DE TEMPORADA'}}</p>
          <h2 class="pt-6 text-5xl font-bold text-yellow-400">{{accentText ?? '15% DESCUENTO'}}</h2>
          <p class="pt-4 text-white w-1/2 ">
            {{subtitle ?? `SILLAS DE HOGAR, 
            MESAS & MANTELES`}}
         </p>
          <BaseButton
            v-if="action"
            class="mt-6 px-4 py-2 duration-100"
          >
            Cómpralo Ya
          </BaseButton>
        </div>

        <img
          class="-mr-5 hidden w-[550px] object-cover md:block"
          :src="sale_bagep"
          alt="Rainbow credit card with macbook on a background"
        />
      </section>
    </div>

    <!-- /Special offer card -->
</template>