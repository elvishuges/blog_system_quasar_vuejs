<template>
<q-card class="my-card">
    <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" basic>
        <div class="absolute-bottom text-h6">
            Title
        </div>
    </q-img>

    <q-card-section class="ellipsis-2-lines" >
        {{ lorem }}
    </q-card-section>
    <q-card-actions>
        <q-btn
          color="primary"
          size="sm"
          label="like"
        />
        <q-btn
          color="primary"
          size="sm"
          label="dislike"
        />
    </q-card-actions>
</q-card>
</template>

<script>
export default {
    props: {
        propName: {
            type: Number,
            default: null
        },
    },
    name: 'EssentialLink',
    data() {
        return {
            expanded: false,
            lorem: ' quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }

    },
}
</script>

<style lang="sass" scoped>
.my-card
</style>
