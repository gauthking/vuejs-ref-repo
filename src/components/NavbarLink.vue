<template>
    <li>

        <router-link :to="`/${index}`" class="nav-link" active-class="active" aria-current="page"
            :title="` This page goes to the ${page.link.text}`">{{ page.link.text }}</router-link>
    </li>
</template>

<script>

export default {
    props: ['page', 'index'],
    // computed: {
    //     activeClasses() {
    //         return {
    //             active: this.isActive,
    //             emphasize: this.isActive
    //         }
    //     }
    // }
}
</script>
<!-- 
<style>
.emphasize {
    text-decoration: underline !important;
}
</style> -->