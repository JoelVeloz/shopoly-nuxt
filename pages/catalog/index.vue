<script setup lang="ts">
import { useItem } from '@/composables/useItem';
import { views } from "@/assets/settings.json"
import  CatalogSections from "@/components/compositions/CatalogSections.vue"
const { data: productsData, loading, totalPages } = useItem();


</script>
<template>
    <CatalogSections
    class="col-span-12"
    v-for="(section, index) in views.catalog.sections" :key="`${section.type}-${index}`" 
    :section="section"
    :productsData="productsData"
    :loading="loading"
    :totalPages="totalPages"

    />
 

    <!-- <div class="col-span-12" v-for="(section, index) in views.home.sections" :key="`${section.title}-${index}`">
        
        <TheBreadcrumbs class="col-span-12" v-if="section.type==='breadcrumbs'"/>
        <CatalogTable v-if="section.type==='catalog'" class="col-span-12 overflow-hidden" :catalog-products="productsData" :loading="loading" :pages="totalPages" />
    </div> -->
</template>