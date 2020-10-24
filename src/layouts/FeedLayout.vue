<template>
<q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-black">
        <ToolBar :setDrawer="setDrawer" :drawer="drawer" />
    </q-header>
    <Drawer :setDrawer="setDrawer" :drawer="drawer" />
    <q-page-container>
        <q-page>
            <div class="q-pa-md row">
                <div v-for="i in 12" class="q-pa-md col-xs-12 col-sm-4 col-md-3 col-lg-3" :key="i">
                 <FeedCard/>
                </div>
            </div>
        </q-page>
    </q-page-container>
</q-layout>
</template>

<script>
import Drawer from 'components/Drawer.vue'
import FeedCard from 'components/FeedCard.vue'
import ToolBar from 'components/ToolBar.vue'

const feedlist = [{
        title: 'Docs',
        caption: 'quasar.dev',
        icon: 'school',
        link: 'https://quasar.dev'
    },
    {
        title: 'Github',
        caption: 'github.com/quasarframework',
        icon: 'code',
        link: 'https://github.com/quasarframework'
    },
    {
        title: 'Discord Chat Channel',
        caption: 'chat.quasar.dev',
        icon: 'chat',
        link: 'https://chat.quasar.dev'
    },
    {
        title: 'Forum',
        caption: 'forum.quasar.dev',
        icon: 'record_voice_over',
        link: 'https://forum.quasar.dev'
    },
    {
        title: 'Twitter',
        caption: '@quasarframework',
        icon: 'rss_feed',
        link: 'https://twitter.quasar.dev'
    },
    {
        title: 'Facebook',
        caption: '@QuasarFramework',
        icon: 'public',
        link: 'https://facebook.quasar.dev'
    },
    {
        title: 'Quasar Awesome',
        caption: 'Community Quasar projects',
        icon: 'favorite',
        link: 'https://awesome.quasar.dev'
    }
]

export default {
    components: {
        Drawer,
        FeedCard,
        ToolBar
    },

    data() {
        return {
            text: '',
            drawer: false,
            leftDrawerOpen: false,
            feedCardList: feedlist
        }
    },
    mounted() {

    },
    methods: {
        setDrawer(value) {
            this.drawer = value
        }
    },
    computed: {
        smallWindowSize() {
            return this.$q.screen.lt.sm ?
                true :
                false
        }
    }
}
</script>

<style lang="stylus">

</style>
