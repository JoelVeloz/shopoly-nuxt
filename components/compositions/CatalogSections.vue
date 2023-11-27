<script setup lang="ts">

import TheBreadcrumbs from '@@/components/compositions/TheBreadcrumbs.vue';
import CatalogTable from '@@/components/compositions/CatalogTable.vue';
import type { IItem } from '@/interfaces/IItem';
import type { ISection } from '@/interfaces/ISection';


defineProps<{
    section: ISection,
    productsData: IItem[],
    loading: boolean,
    totalPages: number
}>();
</script>
<template>
    <TheBreadcrumbs class="col-span-12" v-if="section.type=='breadcrumbs'"/>
    <CatalogTable v-else-if="section.type=='catalog'" class="col-span-12 overflow-hidden" :catalog-products="productsData" :loading="loading" :pages="totalPages" />
        
</template>
