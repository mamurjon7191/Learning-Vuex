<template>
  <div>
    <h1>{{ counter }}</h1>
    <button v-on:click="removeCounter(value)">-</button>
    <input type="number" v-model="value" />
    <button v-on:click="addCounter(value)">+</button>
    <div>
      <a class="random" v-on:click="addRandomNumber">Add by random number</a>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
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
    ...mapActions(["addRandomNumber"]),
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
.random {
  padding: 0.3rem;
  background-color: green;
  color: white;
  cursor: pointer;
}
div {
  padding: 1rem;
}
</style>
