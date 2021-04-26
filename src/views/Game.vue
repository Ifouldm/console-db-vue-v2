<template>
    <v-card class="game-card" elevation="2" outlined>
        <Loading v-if="loading" />
        <Error error="error" v-if="error" />
        <v-card-title wrap>{{ game.gameName }}</v-card-title>
        <v-card-subtitle>{{ game.developer }}</v-card-subtitle>
        <v-divider></v-divider>
        <v-img :src="imageLink" max-height="150" max-width="150" />
        <v-card-text>
            <p class="description">{{ game.description }}</p>
        </v-card-text>
        <v-card-actions>
            <v-col> Players: {{ game.players }} </v-col>
            <v-col>
                <v-rating
                    color="green"
                    background-color="green"
                    empty-icon="mdi-star-outline"
                    full-icon="mdi-star"
                    half-icon="mdi-star-half"
                    length="5"
                    size="32"
                    :value="parseInt(game.score)"
                ></v-rating>
            </v-col>
            <v-col> Year: {{ game.year }} </v-col>
        </v-card-actions>
    </v-card>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
    name: "gameDetails",
    methods: {
        ...mapActions(["loadGame"])
    },
    mounted() {
        this.loadGame(this.$route.params.id);
    },
    computed: {
        ...mapState(["game", "error", "loading", "page"]),
        imageLink() {
            return `../images/${this.game.console}/Named_Boxarts/${this.game.gameName}.png`;
        }
    }
};
</script>
