<template>
    <v-card height="100%" elevation="2" outlined>
        <v-card-title>{{ game.gameName }}</v-card-title>
        <v-card-subtitle>{{ game.developer }}</v-card-subtitle>
        <v-divider></v-divider>
        <v-img :src="imageLink" max-height="150" max-width="150" />
        <v-card-text>
            <p class="description">{{ game.description }}</p>
        </v-card-text>
        <v-card-actions>
            <v-btn color="primary" elevation="2" :to="{ name: 'game', params: { id: game.gameId } }">
                Details
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: "game",
    props: ["game"],
    methods: {
        boop(event) {
            console.log("boop", event);
        }
    },
    computed: {
        imageLink() {
            return `../images/${this.game.console}/Named_Boxarts/${this.game.gameName}.png`;
        }
    }
};
</script>

<style></style>
