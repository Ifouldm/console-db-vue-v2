<template>
    <div>
        <LoadingAlert v-if="loading" />
        <ErrorAlert error="error" v-if="error" />
        <div class="grid">
            <div class="cell" v-for="console in consoles" v-bind:key="console.id">
                <ConsoleCard :console="console" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ConsoleCard from "../components/ConsoleCard.vue";
import LoadingAlert from "../components/Loading.vue";
import ErrorAlert from "../components/Error.vue";

export default {
    components: { ConsoleCard, LoadingAlert, ErrorAlert },
    name: "Consoles",
    computed: mapState(["consoles", "error", "loading"]),
    methods: {
        ...mapActions(["loadConsoles"])
    },
    mounted() {
        this.loadConsoles();
    }
};
</script>
