<template>
<v-app>
    <Sidebar />
    <Appbar />
    <v-main>
        <v-container fluid>
            <router-view></router-view>
        </v-container>
    </v-main>
    <Footer />
</v-app>
</template>

<script>
import Appbar from './components/Appbar.vue';
import Footer from './components/Footer.vue';
import Sidebar from './components/Sidebar.vue';

export default {
    name: 'App',

    components: {
        Appbar, Footer, Sidebar,
    },

    data: () => ({
    //
    }),
};
</script>
