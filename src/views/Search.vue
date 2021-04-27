<template>
    <div>
        <div class="nes-container">
            <h1>Search</h1>
            <form>
                <div class="nes-field">
                    <label for="search-field">Search Term</label>
                    <input type="text" id="search-field" class="nes-input" v-model="searchTerm" />
                    <input type="submit" @click.prevent="search" class="nes-btn" />
                </div>
            </form>
        </div>
        <div class="nes-container with-title">
            <p class="title">Results</p>
            <Loading v-if="loading" />
            <Error :error="error" v-if="error" />
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Error from "../components/Error.vue";
import Loading from "../components/Loading.vue";

export default {
    components: { Loading, Error },
    data() {
        return {
            searchTerm: ""
        };
    },
    computed: mapState(["searchResults", "error", "loading"]),
    methods: {
        ...mapActions(["searchAction"]),
        search() {
            this.searchAction();
        }
    }
};
</script>
