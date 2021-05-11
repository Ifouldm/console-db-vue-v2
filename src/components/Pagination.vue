<template>
    <div class="pagination">
        <button class="nes-btn" :class="{ 'is-disabled': !hasPrev }" @click="prev">
            &lt;
        </button>
        <button
            class="nes-btn"
            @click="gotoPage(page)"
            v-for="page in availPages"
            :key="page"
            :class="{ 'is-primary': page === currentPage }"
        >
            {{ page }}
        </button>
        <button class="nes-btn" :class="{ 'is-disabled': !hasNext }" @click="next">
            &gt;
        </button>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props: {
        totalRecords: Number,
        perPage: Number
    },
    data() {
        return {
            currentPage: 1
        };
    },
    computed: {
        totalPages(): number {
            return Math.ceil(this.totalRecords / this.perPage);
        },
        availPages(): Set<number> {
            return new Set(
                [1, this.currentPage - 1, this.currentPage, this.currentPage + 1, this.totalPages]
                    .sort((a, b) => a - b)
                    .filter(pageNo => pageNo <= this.totalPages && pageNo >= 1)
            );
        },
        hasNext(): boolean {
            return this.currentPage < this.totalPages;
        },
        hasPrev(): boolean {
            return this.currentPage > 1;
        }
    },
    methods: {
        prev(): void {
            if (this.hasPrev) {
                this.currentPage -= 1;
                this.$emit("pageChange", this.currentPage);
            }
        },
        next(): void {
            if (this.hasNext) {
                this.currentPage += 1;
                this.$emit("pageChange", this.currentPage);
            }
        },
        gotoPage(pageNo: number): void {
            if (pageNo > 0 && pageNo <= this.totalPages) {
                this.currentPage = pageNo;
                this.$emit("pageChange", this.currentPage);
            }
        }
    }
});
</script>

<style>
.pagination {
    margin: 1rem;
    display: flex;
    gap: 0.5rem;
}
</style>
