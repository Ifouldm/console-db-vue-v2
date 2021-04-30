<template>
    <div>
        <Loading v-if="loading" />
        <Error :error="error" v-if="error" />
        <div class="content">
            <h1>Games</h1>
            <label for="console-select">Console Select</label>
            <div class="nes-select">
                <select required id="console-select" v-model="selection" @change="filter">
                    <option value="" disabled selected hidden>Select...</option>
                    <option v-for="console in consoles" :key="console.name">{{ console.name }}</option>
                </select>
            </div>
        </div>
        <div class="grid">
            <div class="cell" v-for="game in games" :key="game.gameId">
                <GameView :game="game" />
            </div>
        </div>
        <Pagination :perPage="20" :totalRecords="page.totalPages" @pageChange="onPageChange" :value="page.number" />
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import GameView from "../components/GameCard.vue";
import Loading from "../components/Loading.vue";
import Error from "../components/Error.vue";
import Pagination from "../components/Pagination.vue";

export default {
    components: { GameView, Loading, Error, Pagination },
    name: "Games",
    data() {
        return {
            selection: "",
            currentPage: 0
        };
    },
    computed: mapState(["games", "error", "loading", "page", "consoles"]),
    methods: {
        ...mapActions(["loadGames", "loadFilteredGames"]),
        onPageChange: function pageChange(pageNo) {
            this.currentPage = pageNo;
            if (this.selection) {
                this.filter();
            } else {
                this.loadGames(this.currentPage);
            }
        },
        filter() {
            this.loadFilteredGames({ consoleSel: this.selection, pageNo: this.currentPage });
        }
    },
    mounted() {
        this.loadGames(0);
    }
};
</script>
