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
            <v-btn
            color="primary"
            elevation="2"
            :to="{ name: 'game', params: { id: game.gameId } }"
            >
                Details
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: 'game',
    props: ['game'],
    methods: {
        boop(event) { console.log('boop', event); },
    },
};
</script>

<style>
</style>
