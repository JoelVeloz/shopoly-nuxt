<script setup lang="ts">
import HeroSection from './HeroSection.vue';
import HomeBadges from '@@/components/compositions/HomeBadges.vue';
import HomeCategories from '@@/components/compositions/HomeCategories.vue';
import HomeSlider from '@@/components/compositions/HomeSlider.vue';
import HomeOffer from '@@/components/compositions/HomeOffer.vue';
import RecommendedProducts from '@components/compositions/RecommendedProducts.vue';
import { useItem } from '@@/composables/useItem';
import { type ISection } from '@/interfaces/ISection';

defineProps<{
    section: ISection
}>();


const { data: productData } = useItem();

const maxRecommendedItems = 8;
</script>
<template>
    <HeroSection 
    v-if="section.type==='hero'" 
    :alignment="section.alignment" 
    :title="section.title"
    :subtitle="section.subtitle"
    :action="section.action" 
    class="col-span-12" />
   
    <HomeBadges :badges="section.content" v-else-if="section.type === 'badges'" class="col-span-12 py-12" />

    <div v-else-if="section.type === 'grid' && section.model === 'categories'"
        class="col-span-12 mx-auto max-w-[1200px] w-full my-12">
        <h2 class="w-full mb-5 flex px-5">
            {{ section.title }}
        </h2>
        <HomeCategories class="block" />
    </div>


    <div v-else-if="section.type === 'slider'" class="col-span-12 mx-auto max-w-[1200px] w-full mt-12">
        <h2 class="px-5 mb-5">{{ section.title }}</h2>
        <!-- Slider  -->
        <ClientOnly>

            <HomeSlider />
        </ClientOnly>
        <!-- /Slider  -->
    </div>


    <HomeOffer v-else-if="section.type === 'banner'"  
    :title="section.title"
    :subtitle="section.subtitle"
    :accent-text="section['accent-text']"
    :action="section.action"
    class="my-12" />


    <div v-else-if="section.type === 'grid' && section.model === 'products'" class="col-span-12 mx-auto max-w-[1200px]">
        <p class="px-5 mt-10 mb-5">{{ section.title }}</p>
        <RecommendedProducts v-if="productData.length > maxRecommendedItems" :recommended-products="productData"
            :max-items="maxRecommendedItems" />
    </div>
</template>
