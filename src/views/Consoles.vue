<template>
    <v-container>
        <LoadingAlert v-if=loading />
        <ErrorAlert error=error v-if=error />
        <v-col cols="12">
            <v-row v-for="console in consoles" v-bind:key="console.id">
            <ConsoleView
                v-bind:console="console" />
            </v-row>
        </v-col>
    </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ConsoleView from '../components/ConsoleCard.vue';
import LoadingAlert from '../components/Loading.vue';
import ErrorAlert from '../components/Error.vue';

export default {
    components: { ConsoleView, LoadingAlert, ErrorAlert },
    name: 'Consoles',
    computed: mapState(['consoles', 'error', 'loading']),
    methods: {
        ...mapActions(['loadConsoles']),
    },
    mounted() {
        this.loadConsoles();
    },
};
</script>
