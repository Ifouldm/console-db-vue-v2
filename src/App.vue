<template>
    <div>
        <div class="vert">
            <Sidebar />
            <div class="horiz">
                <Banner />
                <section class="main">
                    <router-view></router-view>
                </section>
                <Footer />
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import Banner from "./components/Banner.vue";
import Footer from "./components/Footer.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
    name: "App",
    components: {
        Banner,
        Footer,
        Sidebar
    },
    methods: {
        ...mapActions(["loadConsoles"])
    },
    mounted() {
        this.loadConsoles();
    }
};
</script>

<style>
html,
body {
    min-height: 100vh;
}

* {
    box-sizing: border-box;
}

.vert {
    display: flex;
}

.horiz {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
}

.horiz:nth-child(1) {
    flex: 2;
}

.horiz:nth-child(2) {
    flex: 8;
}

.banner {
    width: 100%;
}

.footer {
    width: 100%;
    bottom: 0;
    left: inherit;
}

.main {
    min-height: 75vh;
}

.content {
    padding: 1rem;
}
</style>
