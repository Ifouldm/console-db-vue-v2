<template>
    <v-img :src=imgUrl alt="Console Photo" />
</template>

<script>
export default {
    name: 'ConsoleImage',
    props: ['imgUrl'],
};
</script>
