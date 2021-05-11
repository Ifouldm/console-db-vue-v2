<template>
    <div class="content">
        <div class="nes-container is-rounded">
            <h1>Banner</h1>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "Banner"
});
</script>

<style scoped>
.nes-container {
    color: #ffffff;
    background-color: #257e9c;
    background-image: url("../assets/banner.jpg");
}
</style>
