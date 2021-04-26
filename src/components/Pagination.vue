<template>
    <div class="pagination">
        <button class="nes-btn" :class="{ 'is-disabled': !hasPrev }" @click="prev">
            P
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
            N
        </button>
    </div>
</template>

<script>
export default {
    props: ["totalRecords", "perPage"],
    data() {
        return {
            currentPage: 1
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.totalRecords / this.perPage);
        },
        availPages() {
            return new Set(
                [1, this.currentPage - 1, this.currentPage, this.currentPage + 1, this.totalPages]
                    .sort((a, b) => a - b)
                    .filter(pageNo => pageNo <= this.totalPages && pageNo >= 1)
            );
        },
        hasNext() {
            return this.currentPage < this.totalPages;
        },
        hasPrev() {
            return this.currentPage > 1;
        }
    },
    methods: {
        prev() {
            if (this.hasPrev) {
                this.currentPage -= 1;
                this.$emit("pageChange", this.currentPage);
            }
        },
        next() {
            if (this.hasNext) {
                this.currentPage += 1;
                this.$emit("pageChange", this.currentPage);
            }
        },
        gotoPage(pageNo) {
            if (pageNo > 0 && pageNo <= this.totalPages) {
                this.currentPage = pageNo;
                this.$emit("pageChange", this.currentPage);
            }
        }
    }
};
</script>

<style>
.nes-btn {
    margin: 0.5rem;
}
</style>
