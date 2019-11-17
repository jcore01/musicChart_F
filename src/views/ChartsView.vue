<template>
    <div style="margin-top:30px;">
        charts
        <div v-for="mcchart in chartsitems">{{ mcchart }}</div>
    </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters({
            chartsitems: 'fetchedCharts'
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
        this.$store.dispatch('FETCH_CHARTS');
        // fetchChartsList()
        // .then(response => this.charts = response.data)
        // .catch(error => console.error(error));
    },
}

</script>


<style>

</style>