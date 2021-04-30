<template>
    <div class="resultList">
        <div class="nes-container with-title" v-for="result in searchResults.content" :key="result.id">
            <p class="title">{{ result.gameName }}</p>
            <p class="detail">Console: {{ result.console }}</p>
            <a :href="`/game/${result.gameId}`" class="nes-btn is-primary">{{ result.gameName }}</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "SearchResults",
    props: {
        searchResults: {}
    }
};
</script>

<style></style>
