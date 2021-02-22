import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        consoles: [],
        games: [],
        page: {},
        loading: false,
        error: null,
    },
    mutations: {
        updateConsoles(state, consoleList) {
            state.consoles = consoleList;
        },
        updateGames(state, gameList) {
            state.games = gameList;
        },
        setLoading(state, value) {
            state.loading = value;
        },
        setError(state, errorMessage) {
            state.error = errorMessage;
        },
        setPageData(state, pageData) {
            state.page = pageData;
        },
    },
    actions: {
        loadConsoles(context) {
            context.commit('setLoading', true);
            axios.get('http://localhost:8080/api/consoles')
                .then((res) => {
                    context.commit('setLoading', false);
                    context.commit('setError', null);
                    context.commit('updateConsoles', res.data._embedded.consoles);
                })
                .catch((err) => {
                    context.commit('setLoading', false);
                    context.commit('setError', err);
                });
        },
        loadGames(context, pageNo) {
            context.commit('setLoading', true);
            axios.get(`http://localhost:8080/api/games?page=${pageNo}`)
                .then((res) => {
                    context.commit('setLoading', false);
                    context.commit('setError', null);
                    context.commit('updateGames', res.data._embedded.game);
                    context.commit('setPageData', res.data.page);
                })
                .catch((err) => {
                    context.commit('setLoading', false);
                    context.commit('setError', err);
                });
        },
    },
});
