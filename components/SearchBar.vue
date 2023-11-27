<script setup lang="ts">
import BaseIcon from '@components/BaseIcon.vue';
import BaseButton from '@components/BaseButton.vue';
import { onMounted, onUnmounted, ref } from 'vue';
import { useQueryItem } from '@@/composables/useQueryItem';
const {data:queryData,updateQuery, loading} = useQueryItem();

const query = ref('')
const targetElement = ref<HTMLElement>() ;
const handleClickOutside = () => {
    queryData.value = []
    // if (!targetElement.value.contains(event.target)) {
       
    // }
}
onMounted(()=> {
    document.body.addEventListener('click', handleClickOutside);
})

onUnmounted(()=>{
    document.body.removeEventListener('click', handleClickOutside);
})
</script>
<template>
    <form class="flex items-center h-9 border dark:border-gray-400 relative" ref="targetElement">
        <BaseIcon :icon="'search'"></BaseIcon>

        <input class="hidden w-11/12 outline-none md:block bg-transparent" type="search" 
        @change="updateQuery(query)"
        placeholder="Muebles de diseñador..." v-model="query" />
        <div class="absolute bg-white text-black top-full z-30 w-full rounded-b-sm border border-gray-400">
            
            <span v-if="loading" class="block p-4 py-2"> Cargando...</span>
            <ul v-else-if="queryData?.length > 0">
                <li v-for="(data,index) in queryData" :key="`dataquery-${index}`"
                @click="queryData = [];$router.push('/product-detail'); " 
                class="p-4 py-2 hover:bg-violet-100 active:bg-violet-300 cursor-pointer">
                    {{ data.name }}
                </li>
            </ul>
           
        </div>
       
        <BaseButton @click.prevent="" class="h-full ml-auto">
            Buscar
        </BaseButton>
    </form>
</template>