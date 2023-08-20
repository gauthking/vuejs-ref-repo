<template>
    <div v-if="page" class="container">
        <h1>{{ page.pageTitle }}</h1>
        <p>{{ page.content }}</p>
        <p>{{ this.$route.params.index }}</p>
    </div>
</template>


<script>
export default {
    props: ['index'],
    inject: ['$pages'],
    data() {
        page: null
    },
    created() {
        // console.log(this.$route.params)
        this.page = this.$pages.getSinglePage(this.$route.params.index)

        //watching the params to change the content in the same component
        // this.$watch(() => this.$route.params, (newParams, prevParams) => {
        //     this.page = this.$pages.getSinglePage(newParams.index)
        // })
    },
    watch: {
        index(newIndex, oldIndex) {
            this.page = this.$pages.getSinglePage(newIndex)
        }
    }

}
</script>