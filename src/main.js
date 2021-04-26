import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./plugins/store";
import icons from "./plugins/icons";
import "../node_modules/nes.css/css/nes.min.css";

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    icons,
    render: h => h(App)
}).$mount("#app");
