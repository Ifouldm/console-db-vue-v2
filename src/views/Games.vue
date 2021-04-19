<template>
    <v-container>
        <Loading v-if="loading" />
        <Error error="error" v-if="error" />
        <v-row>
            <v-col lg="3" md="4" sm="12" xs="12" v-for="game in games" :key="game.gameId">
                <GameView :game="game" />
            </v-col>
        </v-row>
        <v-pagination
            class="mt-3"
            @input="onPageChange"
            :length="page.totalPages"
            total-visible="7"
            :value="page.number"
        />
    </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
import GameView from "../components/GameCard.vue";
import Loading from "../components/Loading.vue";
import Error from "../components/Error.vue";

export default {
    components: { GameView, Loading, Error },
    name: "Games",
    computed: mapState(["games", "error", "loading", "page"]),
    methods: {
        ...mapActions(["loadGames"]),
        onPageChange: function pageChange(pageNo) {
            this.loadGames(pageNo);
        }
    },
    mounted() {
        this.loadGames(1);
    }
};
</script>
