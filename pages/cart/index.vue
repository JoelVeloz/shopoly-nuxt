<script setup lang="ts">
import TheBreadcrumbs from '@/components/compositions/TheBreadcrumbs.vue';
import CartItem from '@/components/CartItem.vue';
import CartTable from '~/components/compositions/CartTable.vue';
import OrderSummary from '@/components/compositions/OrderSummary.vue';
import cartStore from '@/stores/cartStore';
import { storeToRefs } from 'pinia';

const {totalItems} = cartStore();
const { items:cartData } = storeToRefs(cartStore()); 


definePageMeta({
    layout: 'app'
})
</script>
<template>
      <TheBreadcrumbs class="col-span-12" />
      <section 
        class="col-span-12 w-full container mx-auto flex-grow max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10"
      >
       
        <CartTable :total-items="totalItems" :cart-data="cartData" />

        <!-- Summary  -->

        <section class="mx-auto w-full px-4 md:max-w-[400px]">
            <OrderSummary :items="cartData" />
        </section>
      </section>

</template>