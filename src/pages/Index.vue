<template>
  <q-page class="flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
    <FeedCard/>
  </div>
  </q-page>
</template>

<script>
import  FeedCard from "./../components/FeedCard";
export default {
  components: {
    FeedCard,
  },
  name: 'PageIndex',
  data() {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
}
</script>

<style lang="stylus">
.my-card
  width: 100%
  max-width: 350px
</style>
