<template>
    <img :src="imgUrl" alt="Console Photo" />
</template>

<script>
export default {
    name: "ConsoleImage",
    props: ["imgUrl"]
};
</script>

<style scoped>
img {
    max-width: 400px;
}
</style>
