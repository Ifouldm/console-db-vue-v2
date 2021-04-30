<template>
    <div class="footer content">
        <div class="nes-container is-rounded">{{ new Date().getFullYear() }} — <strong>Console DB</strong></div>
    </div>
</template>

<script>
export default {
    name: "FooterElement"
};
</script>

<style scoped>
.nes-container {
    color: #ffffff;
    background-color: #257e9c;
    background-image: url("../assets/banner.jpg");
}
</style>
