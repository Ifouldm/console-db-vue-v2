<template>
    <div class="content">
        <Loading v-if="loading" />
        <Error error="error" v-if="error" />
        <div class="nes-container is-rounded" v-if="game">
            <h3 class="title">{{ game.gameName }}</h3>
            <div class="subtitle">{{ game.developer }}</div>
            <hr />
            <img :src="imageLink" />
            <p>Genres:</p>
            <ul class="genres">
                <li v-for="genre in game.genres" :key="genre">{{ genre }}</li>
            </ul>
            <p class="description">{{ game.description }}</p>
            <div class="details">
                <div class="players">Players: {{ game.players }}</div>
                <div class="rating">
                    <Rating :value="Number(game.score)" />
                </div>
                <div class="year">Year: {{ game.year }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Loading from "../components/Loading.vue";
import Error from "../components/Error.vue";
import Rating from "../components/Rating.vue";

export default {
    name: "gameDetails",
    methods: {
        ...mapActions(["loadGame"])
    },
    mounted() {
        this.loadGame(this.$route.params.id);
    },
    computed: {
        ...mapState(["game", "error", "loading"]),
        imageLink() {
            return `../images/${this.game.console}/Named_Boxarts/${this.game.gameName}.png`;
        }
    },
    components: {
        Rating,
        Loading,
        Error
    }
};
</script>

<style scoped>
img {
    max-width: 150px;
    max-height: 150px;
}

.nes-container {
    margin: 1rem;
}
</style>
