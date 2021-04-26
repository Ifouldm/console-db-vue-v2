<template>
    <v-alert color="light-blue" elevation="2" dismissible>{{error}}</v-alert>
</template>

<script>
export default {
    props: ['error'],
};
</script>
