import { createApp } from "vue";
import App from "./App.vue";

import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      counter: 200,
    };
  },
  mutations: {
    addCounter(state, payload) {
      state.counter = state.counter + payload;
    },
    removeCounter(state, payload) {
      state.counter = state.counter - payload;
    },
  },
});

const app = createApp(App);

app.use(store);
app.mount("#app");
