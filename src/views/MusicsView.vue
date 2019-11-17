<template>
    <div style="margin-top:30px;">
        musics
        <div v-for="mcmusic in musicsitems">{{ mcmusic }}</div>
    </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters({
            musicsitems: 'fetchedMusics'
        }),
        // #2
        // ...mapState({
        //     fetchedartist: state => state.
        // });
        // #1
        // artists() {
        //     return this.$store.state.artists;
        // }
    },
    created() {
        this.$store.dispatch('FETCH_MUSICS');
        // var vm = this;
        // fetchMusicsList()
        //     .then(response => this.musiclists = response.data)
        //     .catch(error => console.error(error));
    },

}
</script>

<style>

</style>