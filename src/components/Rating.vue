<template>
    <div>
        <i class="nes-icon star" v-for="index in fullstars" :key="index"></i>
        <i class="nes-icon star is-half" v-if="partstar"></i>
        <i class="nes-icon star is-transparent" v-for="index in emptystars" :key="index"></i>
    </div>
</template>

<script>
export default {
    props: {
        value: Number
    },
    computed: {
        fullstars() {
            return Math.floor(this.value);
        },
        partstar() {
            return this.value % 1 >= 0.5;
        },
        emptystars() {
            const fullstars = Math.floor(this.value);
            return this.value % 1 >= 0.5 ? 5 - fullstars - 1 : 5 - fullstars;
        }
    }
};
</script>

<style></style>
