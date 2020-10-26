<template>
<q-toolbar class="bg-white text-grey">
    <q-btn v-if="smallWindowSize" flat @click="changeDrawer" round dense icon="menu" />
    <q-btn v-if="!smallWindowSize" :to="{ name: 'feed', }" class="q-mr-sm" style="color: #767676;" flat label="Página inicial" />
    <q-btn v-if="!smallWindowSize" class="q-mr-sm" style="color: #767676;" flat label="Hoje" />
    <q-btn v-if="!smallWindowSize" class="q-mr-sm" style="color: #767676;" flat label="Seguindo" />

    <q-input style="width: 300px;" color="greey-12" outlined borderless dense rounded standout v-model="text" input-class="text-right" class="q-ml-md">
        <template v-slot:append>
            <q-icon v-if="text === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
        </template>
    </q-input>
    <q-space></q-space>

    <q-btn dark flat round dense icon="chat" class="q-mr-xs" />
    <q-btn flat round dense icon="logout" />
</q-toolbar>
</template>

<script>
export default {
    props: {
        drawer: {
            type: Boolean,
            default: false
        },
        setDrawer: Function
    },
    data() {
        return {
            text: ''
        }
    },
    computed: {
        smallWindowSize() {
            return this.$q.screen.lt.sm ?
                true :
                false
        }
    },
    methods: {
        changeDrawer() {
            this.setDrawer(!this.drawer)
        }
    },
}
</script>

<style>

</style>
