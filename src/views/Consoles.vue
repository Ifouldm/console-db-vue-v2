<template>
    <div>
        <div class="content">
            <h1>Consoles</h1>
            <LoadingAlert v-if="loading" />
            <ErrorAlert error="error" v-if="error" />
        </div>
        <div class="grid">
            <div class="cell" v-for="consoleObj in consoles" v-bind:key="consoleObj.id">
                <ConsoleCard :consoleObj="consoleObj" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import ConsoleCard from "../components/ConsoleCard.vue";
import LoadingAlert from "../components/Loading.vue";
import ErrorAlert from "../components/Error.vue";

export default Vue.extend({
    components: { ConsoleCard, LoadingAlert, ErrorAlert },
    name: "Consoles",
    computed: mapState(["consoles", "error", "loading"])
});
</script>
