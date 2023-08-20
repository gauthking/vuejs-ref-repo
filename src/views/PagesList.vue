<template>
    <p>This is the pages list</p>
    <p>{{ data.counter }}</p>
    <button @click.prevent="click">Counter Check</button>
    <button @click.prevent="data.counter = 0">Reset</button>

    <div class="mt-2">
        <h1>Pages</h1>
        <div class="text-end">
            <router-link to="/pages/create" class="btn btn-primary">Create Page</router-link>

        </div>
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Link Text</th>
                    <th>Is Published</th>
                </tr>
            </thead>
            <tbody>
                <tr @click="goToPage(index)" v-for="(page, index) in $pages.getAllPages()" :key="index">
                    <td>{{ page.pageTitle }}</td>
                    <td>{{ page.link.text }}</td>
                    <td>{{ page.published }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref, reactive, inject } from "vue";
import { useRouter } from "vue-router";

// const counter = ref(0); // could be of any type {value:0}

// if the value to be changed is of object based then use reactive hook

const data = reactive({ counter: 0 })
const $pages = inject('$pages')
const router = useRouter()

function click() {
    // counter.value++;
    data.counter++;
}

function goToPage(index) {
    router.push({ path: `pages/${index}/edit` })
}
// export default {
//     data() {
//         return {
//             counter: 0;
//         }
//     },
//     methods: {
//         click() {
//             this.counter++;
//         }
//     }
// }

</script>

<style scoped>
.table .table-hover tr:hover {
    cursor: pointer;
}
</style>