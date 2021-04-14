<template lang="pug">
  <div id="app">
    <input v-model="name">
    <button v-on:click="format">Format</button>
    <h1>{{ formatName }}</h1>
  </div>
</template>

<script>
export default {
  name: "app",

  data() {
    return {
      name: "",
      formatName: ""
    };
  },
  methods: {
    format() {
      this.formatName = this.name
        .split(" ")
        .join("-")
        .toUpperCase();
    }
  }
};
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
