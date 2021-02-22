<template>
    <v-container>
        <v-alert color="red" v-if=loading>LOADING</v-alert>
        <v-alert color="light-blue" elevation="2" dismissible v-if=error>{{error}}</v-alert>
        <v-col cols="12">
            <v-row v-for="console in consoles" v-bind:key="console.id">
            <ConsoleView
                v-bind:console="console" />
            </v-row>
        </v-col>
    </v-container>
</template>

<script>
import axios from 'axios';
import ConsoleView from '../components/ConsoleCard.vue';

export default {
    components: { ConsoleView },
    name: 'Consoles',
    mounted() {
        this.loading = true;
        axios.get('http://localhost:8080/api/consoles')
            .then((res) => {
                this.loading = false;
                this.error = null;
                this.consoles = res.data._embedded.consoles;
            })
            .catch((err) => {
                this.loading = false;
                this.error = err;
            });
    },
    data() {
        return {
            error: null,
            loading: true,
            consoles: [],
        };
    },
};
</script>
