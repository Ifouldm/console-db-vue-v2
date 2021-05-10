import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { ConsoleModel, GameModel } from "../types";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        consoles: [] as Array<ConsoleModel>,
        gameConsole: {} as ConsoleModel,
        games: [] as Array<GameModel>,
        game: {} as GameModel,
        page: {},
        loading: false,
        error: null as null | string
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
            console.log(game);
            state.game = game;
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
                .get(`${process.env.VUE_APP_API_ROOT}/consoles?size=50`)
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
                .get(`${process.env.VUE_APP_API_ROOT}/games?page=${pageNo}`)
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
        loadFilteredGames(context, { consoleSel, pageNo }) {
            context.commit("setLoading", true);
            axios
                .get(`${process.env.VUE_APP_API_ROOT}/gamesFiltered?console=${consoleSel}&page=${pageNo}`)
                .then(res => {
                    context.commit("setLoading", false);
                    context.commit("setError", null);
                    context.commit("updateGames", res.data.content);
                    context.commit("setPageData", {
                        number: res.data.pageable.pageNumber,
                        size: res.data.pageable.pageSize,
                        totalElements: res.data.totalElements,
                        totalPages: res.data.totalElements
                    });
                })
                .catch(err => {
                    context.commit("setLoading", false);
                    context.commit("setError", err);
                });
        },
        loadGame(context, gameId) {
            context.commit("setLoading", true);
            axios
                .get(`${process.env.VUE_APP_API_ROOT}/games/${gameId}`)
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
                .get(`${process.env.VUE_APP_API_ROOT}/consoles/${consoleId}`)
                .then(res => {
                    context.commit("setLoading", false);
                    context.commit("setError", null);
                    context.commit("updateConsole", res.data);
                })
                .catch(err => {
                    context.commit("setLoading", false);
                    context.commit("setError", err);
                });
        }
    }
});
