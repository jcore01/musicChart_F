<template>
    <div style="margin-top:30px;">
        Artists
        <div v-for="mcartist in artistsitems">{{ mcartist }}</div>
        <!-- <p v-for="mcartist in artistsitems">{{ mcartist }}
            <a v-bind:href="mcartist."
        </p> -->
    </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters({
            artistsitems: 'fetchedArtists'
        }),
        // #2
        // ...mapState({
        //     fetchedartist: state => state.artists
        // });
        // #1
        // artists() {
        //     return this.$store.state.artists;
        // }
    },
    created() {
        this.$store.dispatch('FETCH_ARTISTS');
        // var vm = this;
        // fetchArtistsList()
        //     .then(response => this.mcartists = response.data)
        //     .catch(error => console.error(error));
    },
}
</script>


<style>

</style>