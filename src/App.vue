<template lang="pug">
  #app
    section.section
      nav.nav.has-shadow
        .container
          input.input.is-large(type="text", placeholder="Buscar Canciones", v-model="searchQuery")
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times;
      .container.results
        .columns
          .column(v-for="t in tracks") {{t.name}} - {{t.artists[0].name}}
      .container
        p
        small {{searchMessage}}
</template>

<script>
import trackService from "./services/trae.js";

export default {
  name: "app",

  data() {
    return {
      searchQuery: "",
      tracks: []
    };
  },

  computed: {
    searchMessage() {
      return `Encontrados: ${this.tracks.length}`;
    }
  },
  methods: {
    search() {
      if (!this.searchQuery) {
        return;
      }
      trackService.search(this.searchQuery).then(res => {
        this.tracks = res.tracks.items;
      });
    }
  }
};
</script>

<style lang="scss">
@import "./scss/main.scss";

.results {
  margin-top: 50px;
}
</style>
