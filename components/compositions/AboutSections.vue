<script setup lang="ts">
import HeroSection from '@components/compositions/HeroSection.vue';

import CompanyLogo from '@components/CompanyLogo.vue';

import { mission_familyp, mission_interiorp, mission_materialsp } from "@@/constants/assets"
import { about_bg } from '@@/constants/assets';
import { type ISection } from '@/interfaces/ISection';

defineProps<{
    section: ISection,
}>();
</script>
<template>
    <HeroSection v-if="section.type==='hero'" 
    :title="section.title"
    :subtitle="section.subtitle"
    :alignment="section.alignment" 
    :image="about_bg" 
    class="col-span-12"/>
    
    <section class="col-span-12 flex-grow my-10" v-else-if="section.type ==='logo'">
        <div class="my-6 flex flex-col gap-3">
            <CompanyLogo class="mx-auto" :size="'lg'" />
            <p class="text-center text-sm">{{section.title ?? "Desde 1999"}}</p>
        </div>
    </section>


    <section class="col-span-12 mx-auto flex max-w-[600px] flex-col items-center justify-center px-5" v-else-if="section.type==='grid'">
        <div class="grid grid-cols-1 gap-3 lg:grid-cols-3" v-if="section.model==='pictures'">
                <img class="object-cover" :src="mission_familyp" alt="Family in living room" />
                <img class="object-cover" :src="mission_interiorp" alt="Interior" />
                <img class="object-cover" :src="mission_materialsp" alt="Materials" />
            </div>
    </section>

    <section class="col-span-12 mx-auto flex max-w-[600px] flex-col items-center justify-center px-5 mb-4" v-else-if="section.type==='text'">
            <h2 class="w-full text-left text-xl font-bold mt-4" v-if="section.title && section?.title?.length > 0">{{ section.title ?? 'Nuestra Misión:'}}</h2>
            <p class="py-3" v-if="section.subtitle && section?.subtitle?.length > 0">
                {{ section.subtitle ?? `Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                placeat odit, est eum dolorem esse totam iusto necessitatibus
                eligendi illo doloribus vero aperiam atque tempora repudiandae
                molestiae nemo distinctio quisquam!`}}
            </p>
    </section>
    <!-- <AboutMissionValues v-else-if="section.type==='mission-vision'" class="col-span-12"/> -->
</template>
