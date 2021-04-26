<template>
    <div class="nes-container with-title">
        <p class="title">{{ console.name }}</p>
        <div class="subtitle">{{ console.brand }}</div>
        <hr />
        <p class="description">{{ console.description }}</p>
        <ConsoleImage :imgUrl="console.photoUrl" />
        <img :src="console.logoUrl" />
        <div class="action-bar">
            <router-link class="nes-btn is-primary" :to="{ name: 'console', params: { id: console.id } }">
                {{ console.name }}
            </router-link>
            <div class="nes-badge">
                <span class="is-primary">
                    <time datetime="17/02/2021">17th February 2021</time>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import ConsoleImage from "./ConsoleImage.vue";

export default {
    name: "Console",
    props: ["console"],
    methods: {
        boop(event) {
            console.log("boop", event);
        }
    },
    components: { ConsoleImage }
};
</script>

<style>
.nes-container {
    margin: 1rem;
}

.action-bar {
    display: flex;
    justify-content: space-between;
}

img {
    max-width: 200px;
}
</style>
