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

  <section class="col-span-12 mx-auto px-4 w-full">
    <div class="flex flex-col">
      <p class="text-center text-3xl font-bold">
        We Accepted your order!
      </p>
      <div class="text-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="mx-auto my-3 h-[60px] w-[60px] text-green-500">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>

        <p>Thank you, <span class="font-bold">Sarah Johnson!</span></p>
        <p>You can check your order status on your orders list!</p>

        <div class="mt-10">
          <NuxtLink to="/history">
            <BaseButton class="mx-auto bg-amber-400 px-4 py-2">My Historial</BaseButton>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>