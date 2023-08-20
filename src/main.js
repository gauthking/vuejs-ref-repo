// Entry point of the VUE Application
import { createApp, VueElement } from "vue";
import App from './App.vue'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import $eventBus from "./utils/Events"
import $pages from "./data"
import router from "./routes";

const app = createApp(App)

app.use(router)

// app.config.globalProperties.$eventBus = $eventBus;
// app.config.globalProperties.$pages = $pages;

app.provide('$pages', $pages);
app.provide('$eventBus', $eventBus);

app.mount("#app")