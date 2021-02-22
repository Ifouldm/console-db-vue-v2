<template>
    <v-card
        class="mb-5"
        elevation="2"
        outlined
        width=80%>
        <v-card-title>{{game.gameName}}</v-card-title>
        <v-card-subtitle>{{game.developer}}</v-card-subtitle>
        <v-divider class="mx-4"></v-divider>
        <v-card-text>
            <p class='description'>{{game.description}}</p>
        </v-card-text>
        <v-card-actions>
        <v-col>
            Players: {{game.players}}
        </v-col>
        <v-col>
            <v-rating
                color="green"
                background-color="green"
                empty-icon="mdi-star-outline"
                full-icon="mdi-star"
                half-icon="mdi-star-half"
                length="5"
                size="32"
                :value=parseInt(game.score)
                ></v-rating>
        </v-col>
        <v-col>
            Year: {{game.year}}
        </v-col>
        </v-card-actions>
    </v-card>
</template>

<script>
import axios from 'axios';

export default {
    name: 'gameDetails',
    mounted() {
        this.loading = true;
        axios.get(`http://localhost:8080/api/games/${this.$route.params.id}`)
            .then((res) => {
                this.loading = false;
                this.error = null;
                this.game = res.data;
            })
            .catch((err) => {
                this.loading = false;
                this.error = err;
            });
    },
    data() {
        return {
            loading: false,
            error: null,
            game: null,
        };
    },
};
</script>

<style>
</style>
