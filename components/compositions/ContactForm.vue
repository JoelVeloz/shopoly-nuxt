<script setup lang="ts">
import BaseInput from '@components/BaseInput.vue';
import BaseCheckbox from '@components/BaseCheckbox.vue';
import BaseButton from '@components/BaseButton.vue';
import BaseSelect from '@components/BaseSelect.vue';
const options = [
    {
        value: '',
        text: 'Por favor, elija una categoría'
    },
    {
        value: 'delivery',
        text: 'Envíos'
    }, {
        value: 'support',
        text: 'Soporte'
    }, {
        value: 'profile',
        text: 'Perfil'
    }, {
        value: 'careers',
        text: 'Trabajo'
    }, {
        value: 'another',
        text: 'Otro'
    }]
</script>
<template>
    <!-- Form  -->

    <form class="mx-auto my-5 max-w-[600px] px-5 pb-10" action="">
        <div class="mx-auto">
            <div class="my-3 flex w-full gap-2">
                <BaseInput class="w-1/2" type="email" placeholder="Correo" />
                <BaseInput class="w-1/2" type="text" placeholder="Nombre Completo" />

            </div>
        </div>

        <BaseSelect :options="options" />


        <BaseInput :is-text-area="true" class="w-full" placeholder="Déjanos saber de que trata con un comentario...">
        </BaseInput>

        <div class="lg:items:center container mt-4 flex flex-col justify-between lg:flex-row">
            <div class="flex items-center">
                <BaseCheckbox>
                    He leído y acepto los
                    <NuxtLink to="#" class="text-violet-900">términos &amp; condiciones</NuxtLink>

                </BaseCheckbox>

            </div>
            <BaseButton :type="'primary'" class="my-3 px-4 py-2 lg:my-0">
                Enviar
            </BaseButton>
        </div>
    </form>
</template>