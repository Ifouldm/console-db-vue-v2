<template>
    <v-card
        class="mb-5"
        elevation="2"
        outlined
        width=80%>
        <v-card-title>{{console.name}}</v-card-title>
        <v-card-subtitle>{{console.brand}}</v-card-subtitle>
        <v-divider class="mx-4"></v-divider>
        <v-card-text>
            <p class='description'>{{console.description}}</p>
            <ConsoleImage :imgUrl=console.photoUrl />
        </v-card-text>
        <v-img max-width="200" :src=console.logoUrl />
        <v-card-actions>
            <v-btn
            color="primary"
            elevation="2"
            >
                {{console.name}}
            </v-btn>
            <v-chip color="orange" outlined>
                <time datetime='17/02/2021'>17th February 2021</time>
            </v-chip>
        </v-card-actions>
    </v-card>
</template>

<script>
import ConsoleImage from './ConsoleImage.vue';

export default {
    name: 'Console',
    props: ['console'],
    methods: {
        boop(event) { console.log('boop', event); },
    },
    components: { ConsoleImage },
};
</script>

<style>
</style>
