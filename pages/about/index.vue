<script setup lang="ts">
//@ts-nocheck
import { views } from "@assets/settings.json"
import AboutSections from '@/components/compositions/AboutSections.vue';

definePageMeta({
    layout: 'app'
})
</script>
<template>
    
    <AboutSections v-for="(section, index) in views.about.sections" :key="`${section.type}-${index}`" 
   :section="section"/>
   
</template>