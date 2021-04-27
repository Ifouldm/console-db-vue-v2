<template>
    <div>
        <div class="vert">
            <Sidebar />
            <div class="horiz">
                <Banner />
                <section>
                    <router-view></router-view>
                </section>
                <Footer />
            </div>
        </div>
    </div>
</template>

<script>
import Banner from "./components/Banner.vue";
import Footer from "./components/Footer.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
    name: "App",
    components: {
        Banner,
        Footer,
        Sidebar
    }
};
</script>

<style>
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
    position: relative;
    bottom: 0;
}

.contents {
    padding: 1rem;
}
</style>
