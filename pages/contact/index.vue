<script setup lang="ts">
import ContactSections from "@/components/compositions/ContactSections.vue";

import { views } from "@/assets/settings.json"

</script>
<template>
  <ContactSections v-for="(section, index) in views.contact.sections" :key="`${section.type}-${index}`" 
  :section="section"></ContactSections>
</template>