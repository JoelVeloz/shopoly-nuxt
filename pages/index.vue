<script setup lang="ts">
import HomeSections from '@/components/compositions/HomeSections.vue';

import { views } from "@/assets/settings.json"


</script>
<template>
    
    <HomeSections 
    v-for="(section, index) in views.home.sections" :key="`${section.title}-${index}`" 
   :section="(section as any)"/>
    
    

</template>