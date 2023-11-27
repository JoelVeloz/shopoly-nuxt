<script setup lang="ts">
import TheBreadcrumbs from '@/components/compositions/TheBreadcrumbs.vue';
import CartItem from '@/components/CartItem.vue';
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
      <table class="hidden lg:table">
        <thead class="h-16 bg-neutral-100 dark:bg-neutral-600">
          <tr>
            <th>ADDRESS</th>

            <th class="bg-neutral-600 dark:bg-neutral-100 text-white dark:text-neutral-800">PAYMENT METHOD</th>
            <th>ORDER REVIEW</th>
          </tr>
        </thead>
      </table>

      <div class="py-5">
        <form class="flex w-full flex-col gap-3 h-full" action="">
          <div class="flex w-full flex-col h-full">
            <h2 class="mt-10 text-left text-xl font-medium">
              Método de Pago
            </h2>
            <URadio class="my-4 mb-24" v-model="selected" v-bind="{ 'value': 'transfer', 'label': 'Transferencia' }" />

          </div>

          <!-- <div class="flex w-full flex-col">
            <label class="flex" for="name">Card Holder</label>
            <input class="w-full border px-4 py-2 lg:w-1/2" type="text" placeholder="SARAH JOHNSON" />
          </div> -->

          <!-- <div class="flex items-center gap-5 lg:w-1/2">
            <div class="flex flex-col">
              <label class="flex" for="name">Expiry Date</label>

              <div class="flex w-[150px] items-center gap-1">
                <input x-mask="99" class="w-1/2 border px-4 py-2 text-center" name="" id="" placeholder="10" />

                <span>&bsol;</span>

                <input x-mask="99" class="w-1/2 border px-4 py-2 text-center" name="" id="" placeholder="36" />
              </div>
            </div>

            <div class="flex flex-col w-[60px] lg:w-[110px]">
              <label class="flex" for="">CVV/CVC</label>
              <input x-mask="999" class="w-full border py-2 text-center lg:w-1/2" type="password"
                placeholder="&bull;&bull;&bull;" />
            </div>
          </div> -->

          <!-- another payment-methods -->
          <!-- 
          <h2 class="mt-10 text-left text-xl font-medium">
            Another methods:
          </h2>
          <section class="my-4 grid w-fit grid-cols-3 gap-4 lg:grid-cols-5">
            <img class="w-[100px] cursor-pointer" src="./assets/images/payment-method-bitcoin.svg" alt="bitcoin icon" />
            <img class="w-[100px] cursor-pointer" src="./assets/images/payment-method-paypal.svg" alt="paypal icon" />
            <img class="w-[100px] cursor-pointer" src="./assets/images/payment-method-stripe.svg" alt="stripe icon" />
            <img class="w-[100px] cursor-pointer" src="./assets/images/payment-method-visa.svg" alt="visa icon" />
            <img class="w-[100px] cursor-pointer" src="./assets/images/payment-method-mastercard.svg"
              alt="mastercard icon" />
          </section> -->
          <!-- another payment-methods -->
        </form>
      </div>

      <div class="flex w-full items-center justify-between">
        <NuxtLink href="/cart/checkout" class="text-sm text-violet-900 dark:text-violet-500">&larr; Volver</NuxtLink>

        <NuxtLink href="/cart/review">
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