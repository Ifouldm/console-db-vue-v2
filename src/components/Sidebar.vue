<template>
    <div class="drawer">
        <div class="nes-container is-rounded">
            <h4>Console DB</h4>
            <h6>The Console Database</h6>
            <router-link class="nes-btn is-primary" :to="item.link" v-for="item in items" :key="item.title">
                <mdicon :name="item.icon" /> {{ item.title }}
            </router-link>
            <LoginForm />
        </div>
    </div>
</template>

<script>
import LoginForm from "./LoginForm.vue";

export default {
    name: "Sidebar",
    components: {
        LoginForm
    },
    data() {
        return {
            items: [
                { title: "home", icon: "home", link: { name: "home" } },
                { title: "consoles", icon: "nintendo-game-boy", link: { name: "consoles" } },
                { title: "games", icon: "gamepad", link: { name: "games" } },
                { title: "search", icon: "magnify", link: { name: "search" } },
                { title: "about", icon: "information-outline", link: { name: "about" } }
            ]
        };
    }
};
</script>

<style scoped>
.drawer {
    margin: 1rem;
}

.nes-btn {
    margin-bottom: 1rem;
    text-transform: uppercase;
}

.nes-container {
    display: flex;
    flex-direction: column;
}
</style>
