<script setup lang="ts">
    import CompanyLogo from '@components/CompanyLogo.vue';
    // import GroupedLinks from '@components/compositions/GroupedLinks.vue';
    import {linkedin, linkedin_dark, github, github_dark, telegram, telegram_dark} from '@@/constants/assets';
    import { useDark } from '@vueuse/core';

    const isDark = useDark();

    const socialNetworks =() => (isDark.value ? [
        {image: linkedin_dark, link: "https://www.linkedin.com/in/joel-veloz-233305211/"},
        {image: github_dark, link: "https://github.com/JoelVeloz"},
        {image: telegram_dark, link: "https://wa.link/wwzttw"}
    ] : [ {image: linkedin, link: "https://www.linkedin.com/in/joel-veloz-233305211/"},
        {image: github, link: "https://github.com/JoelVeloz"},
        {image: telegram, link: "https://wa.link/wwzttw"}])

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
            <img
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