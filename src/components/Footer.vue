<template>
    <div class="content">
        <div class="nes-container is-rounded">{{ new Date().getFullYear() }} — <strong>Console DB</strong></div>
    </div>
</template>

<script>
export default {
    name: "FooterElement"
};
</script>

<style scoped>
.content {
    padding: 1rem;
}

.nes-container {
    color: #ffffff;
    background-color: #257e9c;
    background-image: url("../assets/banner.jpg");
}
</style>
