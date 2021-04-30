import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./plugins/store";
import icons from "./plugins/icons";
import { auth } from "./plugins/firebase";
import "../node_modules/nes.css/css/nes.min.css";

Vue.config.productionTip = false;

let app;
auth.onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            router,
            store,
            icons,
            render: h => h(App)
        }).$mount("#app");
    }
});
