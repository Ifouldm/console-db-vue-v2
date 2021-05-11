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
            <ResultsList v-else :searchResults="searchResults" />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapMutations, mapState } from "vuex";
import axios from "axios";
import Error from "../components/Error.vue";
import Loading from "../components/Loading.vue";
import ResultsList from "../components/ResultsList.vue";

export default Vue.extend({
    components: { Loading, Error, ResultsList },
    data() {
        return {
            searchTerm: "",
            searchResults: {}
        };
    },
    computed: mapState(["error", "loading"]),
    methods: {
        ...mapMutations(["setLoading", "setError"]),
        search() {
            this.setLoading(true);
            axios
                .get(`http://localhost:8080/api/search?searchTerm=${this.searchTerm}`)
                .then(res => {
                    this.setLoading(false);
                    this.setError(null);
                    this.searchResults = res.data;
                })
                .catch(err => {
                    this.setLoading(false);
                    this.setError(err);
                });
        }
    }
});
</script>
