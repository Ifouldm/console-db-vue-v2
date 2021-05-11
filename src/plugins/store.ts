import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { ConsoleModel, GameModel, Page } from "../types";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        consoles: [] as Array<ConsoleModel>,
        gameConsole: {} as ConsoleModel,
        games: [] as Array<GameModel>,
        game: {} as GameModel,
        page: {} as Page,
        loading: false,
        error: null as null | string
    },
    mutations: {
        updateConsoles(state, consoleList: Array<ConsoleModel>) {
            state.consoles = consoleList;
        },
        updateConsole(state, gameConsole: ConsoleModel) {
            state.gameConsole = gameConsole;
        },
        updateGames(state, gameList: Array<GameModel>) {
            state.games = gameList;
        },
        updateGame(state, game: GameModel) {
            state.game = game;
        },
        setLoading(state, value: boolean) {
            state.loading = value;
        },
        setError(state, errorMessage: string) {
            state.error = errorMessage;
        },
        setPageData(state, pageData: Page) {
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
        loadGames(context, pageNo: Number) {
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
        loadGame(context, gameId: string) {
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
        loadConsole(context, consoleId: string) {
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
