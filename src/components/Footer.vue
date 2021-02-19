<template>
    <v-footer app padless>
      <v-col
        class="text-center"
        cols="12"
      >
          {{ new Date().getFullYear() }} — <strong>Console DB</strong>
    </v-col>
    </v-footer>
</template>

<script>
export default {
    name: 'FooterElement',
};
</script>

<style>
</style>
