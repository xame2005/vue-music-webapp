<template lang="pug">
  #app
    v-header
    router-view
    v-footer
</template>

<script>
import VFooter from "@/components/layout/Footer.vue";
import VHeader from "@/components/layout/Header.vue";

export default {
  name: "app",

  components: {
    VFooter,
    VHeader
  }
};
</script>

<style lang="scss">
@import "./scss/main.scss";

.results {
  margin-top: 50px;
}

.is-active {
  border: 3px #23d160 solid;
}
</style>
