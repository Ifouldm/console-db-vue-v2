<template>
    <img :src="imgUrl" alt="Console Photo" />
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "ConsoleImage",
    props: ["imgUrl"]
});
</script>

<style scoped>
img {
    max-width: 400px;
}
</style>
