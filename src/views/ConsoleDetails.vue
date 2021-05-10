<template>
    <div class="contents">
        <Loading v-if="loading" />
        <Error error="error" v-if="error" />
        <div class="nes-container is-rounded" v-if="gameConsole">
            <h3 class="title">{{ gameConsole.name }}</h3>
            <div class="subtitle">{{ gameConsole.brand }}</div>
            <hr />
            <img :src="gameConsole.logoUrl" />
            <img :src="gameConsole.photoUrl" />
            <p class="description">{{ gameConsole.description }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapState } from "vuex";
import Loading from "../components/Loading.vue";
import Error from "../components/Error.vue";

export default Vue.extend({
    name: "consoleDetails",
    methods: {
        ...mapActions(["loadConsole"])
    },
    mounted() {
        this.loadConsole(this.$route.params.id);
    },
    computed: {
        ...mapState(["gameConsole", "error", "loading"])
    },
    components: {
        Loading,
        Error
    }
});
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
