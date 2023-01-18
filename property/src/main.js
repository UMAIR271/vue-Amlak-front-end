import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store/index";
import createPersistedState from "vuex-persistedstate";
import Vue from "vue";
import Vuex from "vuex";
import Flickity from "vue-flickity";

const store = new Vuex.Store({
  state: {
    data: [],
    type: String,
  },
  mutations: {
    updateData(state, payload) {
      state.data = payload;
    },
  },
  plugins: [createPersistedState()],
});
export default {
  setup() {
    return {
      store,
    };
  },
};
// register component globally
const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
Vue.component("flickity-slider", Flickity);
