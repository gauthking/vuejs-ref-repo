<template>
    <navbar :pages="pages"></navbar>

    <router-view></router-view>


    <!-- <page-viewer v-if="pages.length > 0" :page="pages[activePage]"></page-viewer>
    <create-page @page-created="pageCreated"></create-page> -->
</template>

<script>
import Navbar from './components/Navbar.vue';
// import PageViewer from './components/PageViewer.vue';
// import CreatePage from './components/CreatePage.vue';

export default {
    components: { Navbar },
    created() {
        // this.getPages();
        // console.log(this.pages)
        // this.$eventBus.$on('activated', (index) => {
        //     this.activePage = index
        // })
    },
    // data() {
    //     return {
    //         // activePage: 0,
    //         // pages: []
    //     };
    // },
    methods: {
        // async getPages() {
        //     let res = await fetch('data.json');
        //     let data = await res.json();
        //     this.pages = data;
        // },
        pageCreated(pageObj) {
            this.pages.push(pageObj)
        }
    }
}
</script>