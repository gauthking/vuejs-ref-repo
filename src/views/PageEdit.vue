<template>
    <h1>
        edit page
    </h1>
    <p>{{ route.params.index }}</p>

    <form action="" class="container mb-3">
        <div class="row">
            <div class="col-md-8">
                <div class="mb-3">
                    <label for="" class="form-label">Page Title</label>
                    <input type="text" class="form-control" v-model="page.pageTitle">
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Content</label>
                    <textarea rows="5" class="form-control" type="text" v-model="page.content"></textarea>
                </div>
            </div>
            <div class="col">
                <div class="mb-3">
                    <label for="" class="form-label">Link Text</label>
                    <input type="text" class="form-control" v-model="page.link.text">
                </div>
                <div class="row mb-3">
                    <div class="form-check">
                        <input type="checkbox" class="form-check-box" v-model="page.published">
                        <label for="gridCheck1" class="form-check-label">Published</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="mb-3">
            <button class="btn btn-primary me-2" @click="submit">Edit</button>
            <button class="btn btn-secondary me-2" @click="goBack">Cancel</button>
            <button class="btn btn-danger me-2" @click="deletePage">Delete</button>
        </div>
    </form>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { inject } from 'vue';
import router from '@/routes';

const route = useRoute();
const pages = inject('$pages')
const eventBus = inject('$eventBus')

const { index } = defineProps(['index'])

let page = pages.getSinglePage(index)

function submit() {
    pages.editPage(index, page);
    eventBus.$emit('page-updated', {
        index, page
    })
    goBack()
}

function deletePage() {
    pages.removePage(index);
    eventBus.$emit('page-deleted', { index })
    goBack()

}

function goBack() {
    router.push({ path: "/pages" })
}

</script>