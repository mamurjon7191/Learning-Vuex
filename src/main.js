import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";

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
  actions: {
    async addRandomNumber(context) {
      let data = await axios.get(
        "https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new"
      );
      context.commit("addCounter", data.data);
    },
  },
});

const app = createApp(App);

app.use(store);
app.mount("#app");
