import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import {definePlugins} from "@/plugins/index";

const app = createApp(App);
definePlugins(app);
app.mount('#app');