import Vue from 'vue';
import Vuex from 'vuex';
import { fetchArtistsList, fetchChartsList, fetchMusicsList } from "../api/index.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        artists : [],
        charts : [],
        musics : [],
    },
    getters: {
        fetchedArtists(state) {
            return state.artists;
        },
        fetchedCharts(state) {
            return state.charts;
        },
        fetchedMusics(state) {
            return state.musics;
        }
    },
    mutations: {
        SET_ARTISTS(state, artists) {
            state.artists = artists;
        },
        SET_CHARTS(state, charts) {
            state.charts = charts;
        },
        SET_MUSICS(state, musics) {
            state.musics = musics;
        },
    },
    actions: {
        FETCH_ARTISTS(context) {
            fetchArtistsList()
            .then(response => {
                console.log(response.data);
                context.commit('SET_ARTISTS',response.data);
    
            })
            .catch(error => {
                console.log(error);
            })
        },
        FETCH_CHARTS({ commit }) {
            fetchChartsList()
            .then(({ data }) => {
                commit('SET_CHARTS',data);

            })
            .catch(error => {
                console.log(error);
            })
        },
        FETCH_MUSICS({ commit }) {
            fetchMusicsList()
            .then(({ data }) => {
                commit('SET_MUSICS',data);

            })
            .catch(error => {
                console.log(error);
            })
        },
    }
});