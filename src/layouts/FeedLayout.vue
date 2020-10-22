<template>
   <q-layout view="hHh Lpr lff" >
      <q-header elevated class="bg-black">
        <q-toolbar class="bg-white text-grey">
          <q-btn v-if="smallWindowSize" flat @click="drawer = !drawer" round dense icon="menu" />
          <q-btn v-if="!smallWindowSize"  class="q-mr-sm" style="color: #767676;" flat label="Página inicial" />
          <q-btn v-if="!smallWindowSize"  class="q-mr-sm" style="color: #767676;" flat label="Hoje" />
          <q-btn v-if="!smallWindowSize"  class="q-mr-sm" style="color: #767676;" flat label="Seguindo" />
          <q-input color="greey-12" outlined  borderless dense rounded standout v-model="text" input-class="text-right" class="q-ml-md">
          <template v-slot:append>
            <q-icon v-if="text === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
          </template>
        </q-input>
        <q-space></q-space>
        <q-btn dark flat round dense icon="chat" class="q-mr-xs" />
        <q-btn flat round dense icon="logout" />
        </q-toolbar>
      </q-header>
      <Drawer :setDrawer="setDrawer" :drawer="drawer" />
      <q-page-container>
        <q-page padding>
          <FeedCard/>
        </q-page>
      </q-page-container>
    </q-layout>
</template>

<script>

const linksData = [
  {
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
import Drawer from 'components/Drawer.vue'
import FeedCard from 'components/FeedCard.vue'

export default {
  components: {
    Drawer,
    FeedCard
  },

  data () {
    return {
      text: '',
      drawer:false,
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  },
  mounted () {

  },
  methods: {
    setDrawer(value) {
        this.drawer = value
      }
  },
  computed: {
    smallWindowSize () {
      return this.$q.screen.lt.sm
        ? true
        : false
    }
  }
}
</script>
