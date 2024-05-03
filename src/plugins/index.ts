import {App} from 'vue';
import {vuetify} from "@/plugins/vuetify";
import router from "@/plugins/router";
import pinia from "@/plugins/pinia";

export const definePlugins = (app): App => {
    app.use(vuetify);
    app.use(router);
    app.use(pinia);

    return app;
};