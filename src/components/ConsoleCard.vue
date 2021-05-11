<template>
    <div class="nes-container with-title">
        <p class="title">{{ consoleObj.name }}</p>
        <div class="subtitle">{{ consoleObj.brand }}</div>
        <hr />
        <ConsoleImage :imgUrl="photoUrl" />
        <img :src="logoUrl" />
        <div class="action-bar">
            <router-link class="nes-btn is-primary" :to="{ name: 'console', params: { id: consoleObj.id } }">
                {{ consoleObj.name }}
            </router-link>
            <div class="nes-badge">
                <span class="is-primary">
                    <time datetime="17/02/2021">17th February 2021</time>
                </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import ConsoleImage from "./ConsoleImage.vue";
import { ConsoleModel } from "../types/index.js";

export default Vue.extend({
    name: "Console",
    props: {
        consoleObj: {
            type: Object as PropType<ConsoleModel>
        }
    },
    methods: {
        boop(event: Event) {
            console.log("boop", event);
        }
    },
    computed: {
        photoUrl(): string {
            return `${process.env.VUE_APP_IMAGES_ROOT}/${this.consoleObj.name}.jpg`;
        },
        logoUrl(): string {
            return `${process.env.VUE_APP_IMAGES_ROOT}/${this.consoleObj.name} Logo.png`;
        }
    },
    components: { ConsoleImage }
});
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
