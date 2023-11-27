<script setup lang="ts">
import TheBreadcrumbs from '@/components/compositions/TheBreadcrumbs.vue';
import CartTable from '~/components/compositions/CartTable.vue';
import OrderSummary from '@/components/compositions/OrderSummary.vue';
import cartStore from '@/stores/cartStore';
import { storeToRefs } from 'pinia';

const { totalItems } = cartStore();
const { items: cartData } = storeToRefs(cartStore());


definePageMeta({
  layout: 'app'
})
const selected = ref('transfer');
</script>
<template>
  <TheBreadcrumbs class="col-span-12" />
  <section
    class="col-span-12 w-full container mx-auto flex-grow max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10">
    <h2 class="mx-auto px-5 text-2xl font-bold md:hidden">
      Complete Address
    </h2>
    <!-- form  -->
    <section class="grid w-full max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10">
      <table class="hidden lg:table mx-5">
        <thead class="h-16 bg-neutral-100 dark:bg-neutral-600">
          <tr>
            <th>ADDRESS</th>

            <th >PAYMENT METHOD</th>
            <th class="bg-neutral-600 dark:bg-neutral-100 text-white dark:text-neutral-800">ORDER REVIEW</th>
          </tr>
        </thead>
      </table>

      <CartTable class="w-full " :total-items="totalItems" :cart-data="cartData" :edittable="false" />
        
      <div class="flex w-full items-center justify-between">
        <NuxtLink href="/cart/checkout" class="text-sm text-violet-900 dark:text-violet-500">&larr; Volver</NuxtLink>

        <NuxtLink href="/cart/success">
          <BaseButton class="px-4 py-2">Confirmar Orden</BaseButton>
        </NuxtLink>

      </div>
    </section>

    <!-- Summary  -->

    <section class="mx-auto w-full px-4 md:max-w-[400px]">
      <OrderSummary :items="cartData" />
    </section>
  </section>
</template>