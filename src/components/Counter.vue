<template>
  <div>
    <h1>{{ counter }}</h1>
    <button v-on:click="addCounter(value)">+</button>
    <input type="number" v-model="value" />
    <button v-on:click="addCounter(value)">+</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      value: 1,
    };
  },
  computed: {
    ...mapState(["counter"]),
  },
  methods: {
    ...mapMutations(["addCounter", "removeCounter"]),
  },
};
</script>

<style>
.counter {
  font-size: 2rem;
}
button {
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  border: none;
  font-weight: bold;
  cursor: pointer;
}
input {
  text-align: center;
  margin: 0 0.5rem;
  padding: 0.4rem;
  font-size: 1rem;
  outline: none;
}
</style>
