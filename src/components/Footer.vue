<template>
    <div class="footer content">
        <div class="nes-container is-rounded">{{ new Date().getFullYear() }} — <strong>Console DB</strong></div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "FooterElement"
});
</script>

<style scoped>
.nes-container {
    color: #ffffff;
    background-color: #257e9c;
    background-image: url("../assets/banner.jpg");
}
</style>
