<template lang="pug">
  <div id="app">
    <p v-model="showValue">{{value}}</p>
    <p v-if="showValue">{{value}}</p>
    <p v-else>{{'Algo más'}}</p>
    <p v-else-if="true">{{'Algo mas'}}</p>
    <ul>
      <li v-for="i in items">{{i}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      showValue: false,
      value: "Algo",
      items: [1, 2, 3, 4, 5]
    };
  }
};
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
