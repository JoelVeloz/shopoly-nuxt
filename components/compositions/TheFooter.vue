
<script setup lang="ts">
//@ts-nocheck
import CompanyLogo from '@components/CompanyLogo.vue';
  import {linkedin, linkedin_dark, github, github_dark, telegram, telegram_dark} from '@@/constants/assets';
    import { useDark } from '@vueuse/core';

    const { data  } = useSettings();
    const isDark = useDark();

    const socialNetworks =() => (isDark.value ? [
        {image: linkedin_dark, link: data.value?.settings?.facebook_url ?? null },
        {image: github_dark, link: data.value?.settings?.instagram_url ?? null},
        {image: telegram_dark, link: data.value?.settings?.tiktok_url ?? null}
    ] : [ {image: linkedin, link: data.value?.settings?.facebook_url ?? null},
        {image: github, link: data.value?.settings?.instagram_url ?? null},
        {image: telegram, link: data.value?.settings?.tiktok_url ?? null}])

    // const footerGroups = [
    //     {
    //         title: 'CARACTERÍSTICAS',
    //         links: [{route: '/', name: 'Marketing'}, {route: '/', name: 'Comercial'}, {route: '/', name: 'Analítica'},{route: '/', name: 'Mercadería'}]
    //     },
    //     {
    //         title: 'SOPORTE',
    //         links: [{route: '/', name: 'Precios'}, {route: '/', name: 'Guías'}, {route: '/', name: 'Auditorías'}, {route: '/', name: 'Galería'}]
    //     },
    //     {
    //         title: 'Documentación',
    //         links: [{route: '/', name: 'Términos'}, {route: '/', name: 'Condiciones'}, {route: '/', name: 'Privacidad'}, {route: '/', name: 'Licensia'}]
    //     },
    //     {
    //         title: 'Envíos',
    //         links: [{route: '/', name: 'Países'}, {route: '/', name: 'Especial'}, {route: '/', name: 'Restricciones'}, {route: '/', name: 'Pagos'}]
    //     }
    
    // ]

 
</script>
<template>
    
    <footer
      class="mx-auto w-full max-w-[1200px] justify-between py-10 flex flex-col lg:flex-row"
    >
      <div class="ml-5">
        <CompanyLogo />
        <p class="pl-0">

          Lorem ipsum dolor sit amet consectetur <br />
          adipisicing elit.
        </p>
        <div class="mt-10 flex gap-3 ">
          <a :href="socialnwk.link" v-for="(socialnwk) in socialNetworks()" :key="socialnwk.link">
            <img v-if="socialnwk.link != null"
              class="h-5 w-5 cursor-pointer"
              :src="socialnwk.image"
              alt="social network icon"
            />
          </a>
         
        </div>
      </div>

      <!-- <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <GroupedLinks v-for="(group,index) in footerGroups" :key="`${group.title}-${index}`" :title="group.title" :links="group.links" />
      </div> -->
      
    </footer>
    <!-- /Desktop Footer  -->
    <section class="h-11 bg-amber-400 dark:text-amber-800">
      <div
        class="mx-auto flex max-w-[1200px] items-center justify-between px-4 pt-2"
      >
        <p>&copy; Shopoly, 2023</p>
       
      </div>
    </section>
</template>