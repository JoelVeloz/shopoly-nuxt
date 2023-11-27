<script setup lang="ts">

import TheHeader from '@@/components/compositions/TheHeader.vue';
import TheNavbar from '@@/components/compositions/TheNavbar.vue';
import TheFooter from '@@/components/compositions/TheFooter.vue';
import Toast from '@@/components/Toast.vue';
import LoaderComponent from '@@/components/LoaderComponent.vue';
import { onMounted, provide, ref } from 'vue';
import { useCategory } from '@@/composables/useCategory';
import { useItem } from '@@/composables/useItem';
const triggers = ref<string[]>([]);
provide('triggers', triggers)

const { getAllCategories, loading: loadingCategories } = useCategory();

const { getAllSettings, loading: loadingSettings } = useSettings();
const { getAllItems, loading: loadingItems } = useItem();
onMounted(() => {
    getAllCategories();
    getAllItems();
    getAllSettings();
})

useHead({
    title: "Shopoly Nuxt"
})
</script>
<template>
    <ClientOnly>
        <TheHeader />
        <TheNavbar />

        <div v-if="loadingCategories && loadingItems"
            class="fixed top-0 w-screen h-screen flex justify-center items-center bg-gray-50 dark:bg-gray-950 z-50">
            <LoaderComponent :message="'Cargando algo fantástico...'" />
        </div>
        <main v-else v-bind="$attrs" class="mx-auto grid grid-cols-12 min-h-[90vh]">

            <slot></slot>
        </main>
        <TheFooter />

        <div class="fixed bottom-0 right-0 m-8 z-50">
            <Toast v-for="(trigger, index) in triggers" :key="`succ-${index}-${trigger}`" :alertType="trigger" />
        </div>


    </ClientOnly>
</template>