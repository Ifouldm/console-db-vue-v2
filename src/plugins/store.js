import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        consoles: [],
        gameConsole: null,
        games: [],
        game: null,
        results: [],
        page: {},
        loading: false,
        error: null
    },
    mutations: {
        updateConsoles(state, consoleList) {
            state.consoles = consoleList;
        },
        updateConsole(state, gameConsole) {
            state.gameConsole = gameConsole;
        },
        updateGames(state, gameList) {
            state.games = gameList;
        },
        updateGame(state, game) {
            state.game = game;
        },
        updateResults(state, results) {
            state.results = results;
        },
        setLoading(state, value) {
            state.loading = value;
        },
        setError(state, errorMessage) {
            state.error = errorMessage;
        },
        setPageData(state, pageData) {
            state.page = pageData;
        }
    },
    actions: {
        loadConsoles(context) {
            context.commit("setLoading", true);
            axios
                .get("http://localhost:8080/api/consoles")
                .then(res => {
                    context.commit("setLoading", false);
                    context.commit("setError", null);
                    context.commit("updateConsoles", res.data._embedded.consoles);
                })
                .catch(err => {
                    context.commit("setLoading", false);
                    context.commit("setError", err);
                });
        },
        loadGames(context, pageNo) {
            context.commit("setLoading", true);
            axios
                .get(`http://localhost:8080/api/games?page=${pageNo}`)
                .then(res => {
                    context.commit("setLoading", false);
                    context.commit("setError", null);
                    context.commit("updateGames", res.data._embedded.game);
                    context.commit("setPageData", res.data.page);
                })
                .catch(err => {
                    context.commit("setLoading", false);
                    context.commit("setError", err);
                });
        },
        loadGame(context, gameId) {
            context.commit("setLoading", true);
            axios
                .get(`http://localhost:8080/api/games/${gameId}`)
                .then(res => {
                    context.commit("setLoading", false);
                    context.commit("setError", null);
                    context.commit("updateGame", res.data);
                })
                .catch(err => {
                    context.commit("setLoading", false);
                    context.commit("setError", err);
                });
        },
        loadConsole(context, consoleId) {
            context.commit("setLoading", true);
            axios
                .get(`http://localhost:8080/api/consoles/${consoleId}`)
                .then(res => {
                    context.commit("setLoading", false);
                    context.commit("setError", null);
                    context.commit("updateConsole", res.data);
                })
                .catch(err => {
                    context.commit("setLoading", false);
                    context.commit("setError", err);
                });
        },
        searchAction(context, searchTerm) {
            context.commit("setLoading", true);
            axios
                .get(`http://localhost:8080/api/search?searchTerm=${searchTerm}`)
                .then(res => {
                    context.commit("setLoading", false);
                    context.commit("setError", null);
                    context.commit("searchResults", res.data);
                })
                .catch(err => {
                    context.commit("setLoading", false);
                    context.commit("setError", err);
                });
        }
    }
});
