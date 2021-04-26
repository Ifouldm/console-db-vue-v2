<template>
    <div class="nes-container with-title">
        <p class="title">{{ game.gameName }}</p>
        <div class="subtitle">{{ game.developer }}</div>
        <hr />
        <img :src="imageLink" />
        <p class="description">{{ game.description }}</p>
        <div class="action-bar">
            <router-link class="nes-btn is-primary" :to="{ name: 'game', params: { id: game.gameId } }">
                Details
            </router-link>
        </div>
    </div>
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

<style scoped>
img {
    max-width: 150px;
    max-height: 150px;
}

.nes-container {
    margin: 1rem;
}

.action-bar {
    display: flex;
    justify-content: space-between;
}
</style>
