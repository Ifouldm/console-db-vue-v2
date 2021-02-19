<template>
    <v-col cols="6">
        <v-row v-for="console in consoles" v-bind:key="console.id">
          <ConsoleView
            v-bind:console="console" />
        </v-row>
    </v-col>
</template>

<script>
import axios from 'axios';
import ConsoleView from '../components/ConsoleCard.vue';

export default {
    components: { ConsoleView },
    name: 'Consoles',
    mounted() {
        axios.get('http://localhost:8080/api/consoles')
            .then((res) => {
                console.log(res);
                this.consoles = res.data._embedded.consoles;
            })
            .catch((err) => console.error(err));
    },
    data() {
        return {
            consoles: [],
        };
    },
};
</script>
