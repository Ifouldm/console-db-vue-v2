<template>
    <div class="footer">{{ new Date().getFullYear() }} — <strong>Console DB</strong></div>
</template>

<script>
export default {
    name: "FooterElement"
};
</script>

<style scoped>
.footer {
    border: 4px solid black;
    padding: 1rem;
    color: #ffffff;
    background-color: #257e9c;
    background-image: url("../assets/banner.jpg");
}
</style>
