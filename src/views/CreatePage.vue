<template>
    <div class="container ab-3">
        <form action="">
            <div class="mb-3">
                <label for="" class="form-label">
                    Page Title
                </label>
                <input v-model="pageTitle" type="text" class="form-control">
                <!-- <input :value="pageTitle" type="text" class="form-control" @input="(e) => pageTitle = e.target.value"> -->
                <!-- two way binding in the input tag -->
            </div>
            <div class="mb-3">
                <label for="" class="form-label">
                    Page Link
                </label>
                <input v-model="linkURL" type="text" class="form-control">

            </div>
            <div class="mb-3">
                <label for="" class="form-label">
                    callout text
                </label>
                <input v-model="linkText" type="text" class="form-control">

            </div>
            <div class="ab-3">
                <label for="" class="form-label">Content</label>
                <textarea v-model="content" rows="5" class="form-control"></textarea>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" v-model="published">
                <label for="gridCheck1" class="form-check-label">Published</label>
            </div>
            <div class="mb-3">
                <button :disabled="isFormInvalid" @click.prevent="submitForm" class="btn btn-primary">Create Page</button>
            </div>
        </form>
    </div>
</template>


<script setup>
import { ref, inject, computed, watch } from "vue";
import { useRouter } from "vue-router";
const eventBus = inject('$eventBus');
const pages = inject('$pages')
const router = useRouter()


let pageTitle = ref('');
let content = ref('');
let linkText = ref('');
let published = ref(true);

function submitForm() {
    if (!pageTitle || !content || !linkText) {
        alert("Please fill the form fields");
        return;
    }
    let newPage = {
        pageTitle: pageTitle.value,
        content: content.value,
        link: {
            text: linkText.value,
        },
        published
    };
    pages.addPage(newPage);
    eventBus.$emit('page-created', newPage);
    router.push({ path: '/pages' })
}


const isFormInvalid = computed(() => !pageTitle || !content || !linkText);

watch(pageTitle, (newTitle, oldTitle) => {
    if (linkText.value == oldTitle) {
        linkText.value = newTitle
    }
})

</script>

<!-- <script>
export default {
    emits: {
        pageCreated(pageObj) {
            if (!pageObj.pageTitle) {
                return false;
            }
            if (!pageObj.content) {
                return false;
            }
            if (!pageObj.link || !pageObj.link.text || !pageObj.link.url) {
                return false;
            }

            return true;
        }
    },
    props: ['pageCreated'],
    // computed doesn't mutate any state, it works on the existing state vals to perform some computations
    computed: {
        isFormInvalid() {
            return !this.pageTitle || !this.content;
        }
    },
    data() {
        return {
            pageTitle: "",
            content: "",
            linkText: "",
            linkURL: "",
            published: true
        }
    },
    methods: {
        submitForm() {
            if (!this.pageTitle || !this.content) {
                alert("Fill out all the fields before continuing...")
                return
            }

            this.$emit("pageCreated", {
                pageTitle: this.pageTitle, content: this.content, link: { text: this.linkText, url: this.linkURL }, published: this.published
            })

            // this.pageCreated({ pageTitle: this.pageTitle, content: this.content, link: { text: this.linkText, url: this.linkURL }, published: this.published })

            this.pageTitle = "";
            this.content = "";
            this.linkText = "";
            this.linkURL = "";
            this.published = true;
        }
    },
    // watcher . watches for a state or property to change and based on that we can perform any operations
    watch: {
        pageTitle(newTitle, oldTitle) {
            if (this.linkText == oldTitle) {
                this.linkText = newTitle
            }
        }
    }

} -->
<!-- </script> -->