<script setup lang="ts">
import HeroSection from "@@/components/compositions/HeroSection.vue";
// import { ISubsidiary } from "@/interfaces/ISubsidiary.ts";
import SubsidiaryCard from "@components/SubsidiaryCard.vue"
import ContactForm from "@@/components/compositions/ContactForm.vue";
import { ISection } from "@/interfaces/ISection";

import { contactbg } from '@@/constants/assets';

defineProps<{
  section: ISection,
}>();

</script>
<template>
  <HeroSection v-if="section.type === 'hero'" :alignment="section.alignment" :title="section.title"
    :subtitle="section.subtitle" :image="contactbg" :action="section.action" class="col-span-12" />
  <!-- <ContactHero class="col-span-12" v-if="section.type==='hero'" /> -->

  <section class="col-span-12 w-full flex-grow" v-if="section.type === 'subsidiaries' || section.type === 'contact-form'">
    <section v-if="section.type === 'subsidiaries'"
      class="mx-auto w-full my-6 grid max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10 lg:grid-cols-3 lg:pt-10">
      <SubsidiaryCard v-for="subsidiary in section.content" :key="subsidiary.name" :subsidiary="subsidiary" />


    </section>

    <!-- Contact section  -->

    <section class="mx-auto my-5 text-center" v-else-if="section.type === 'contact-form'">
      <h2 class="text-3xl font-bold">{{ section.title ?? "¿Aún Tienes Dudas?"}}</h2>
      <p>{{ section.subtitle ?? "Llena el formulario y te responderemos en la mayor brevedad posible" }}</p>

      <ContactForm />
    </section>

    <!-- /Form  -->
  </section>
</template>
