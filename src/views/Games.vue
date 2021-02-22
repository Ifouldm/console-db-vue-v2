<template>
    <v-container>
        <v-alert color="red" v-if=loading>LOADING</v-alert>
        <v-alert color="light-blue" elevation="2" dismissible v-if=error>{{error}}</v-alert>
        <v-col cols="12">
            <v-row v-for="game in games" :key="game.gameId">
                <GameView :game=game />
            </v-row>
        </v-col>
        <v-pagination
            @input=onPageChange
            :v-model=page.number
            :length=page.totalPages
            total-visible="7" />
        {{page.number}}
    </v-container>
</template>

<script>
import axios from 'axios';
import GameView from '../components/GameCard.vue';

export default {
    components: { GameView },
    name: 'Games',
    methods: {
        getGames: function getGames(pageNo = 1) {
            axios.get(`http://localhost:8080/api/games?page=${pageNo}`)
                .then((res) => {
                    this.loading = false;
                    this.error = null;
                    this.games = res.data._embedded.game;
                    this.page.totalPages = res.data.page.totalPages;
                })
                .catch((err) => {
                    this.loading = false;
                    this.error = err;
                });
        },
        onPageChange: function pageChange(pageNo) {
            this.getGames(pageNo);
        },
    },
    mounted() {
        this.loading = true;
        this.getGames();
    },
    data() {
        return {
            page: {},
            error: null,
            loading: true,
            games: [],
        };
    },
};
</script>
