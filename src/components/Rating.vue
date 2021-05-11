<template>
    <div>
        <i class="nes-icon star" v-for="index in fullstars" :key="`star${index}`"></i>
        <i class="nes-icon star is-half" v-if="partstar"></i>
        <i class="nes-icon star is-transparent" v-for="index in emptystars" :key="`emptystar${index}`"></i>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props: {
        value: Number
    },
    computed: {
        fullstars(): number {
            return Math.floor(this.value);
        },
        partstar(): boolean {
            return this.value % 1 >= 0.5;
        },
        emptystars(): number {
            const fullstars = Math.floor(this.value);
            return this.value % 1 >= 0.5 ? 5 - fullstars - 1 : 5 - fullstars;
        }
    }
});
</script>

<style></style>
