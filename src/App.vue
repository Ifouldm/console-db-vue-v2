<template>
    <div>
        <div class="vert">
            <Sidebar />
            <div class="horiz">
                <Appbar />
                <section>
                    <router-view></router-view>
                </section>
                <Footer />
            </div>
        </div>
    </div>
</template>

<script>
import Appbar from "./components/Appbar.vue";
import Footer from "./components/Footer.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
    name: "App",
    components: {
        Appbar,
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

.banner {
    width: 100%;
}

.footer {
    width: 100%;
    position: relative;
    bottom: 0;
}
</style>
