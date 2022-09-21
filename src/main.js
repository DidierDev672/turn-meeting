import { createApp } from 'vue';
import ToastPlugin from "vue-toast-notification";
import App from './App.vue';
import router from "./router";
import store from "./store";

import 'vue-toast-notification/dist/theme-sugar.css';

const app = createApp(App)
app.use(ToastPlugin, {
    position: 'top'
})
app.use(router)
app.use(store)
app.mount("#app")