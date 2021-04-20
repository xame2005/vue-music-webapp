<template lang="pug">
  #app
    section.section
      nav.nav.has-shadow
        .container
          input.input.is-large(type="text", placeholder="Buscar Canciones", v-model="searchQuery")
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times;
          p
            small {{searchMessage}}

      .container.results
        .columns
          .column(v-for="t in tracks") {{t.name}} - {{t.artist}}
</template>

<script>
const tracks = [
  { name: "Cancion 1", artist: "Artista 1" },
  { name: "Cancion 2", artist: "Artista 2" },
  { name: "Cancion 3", artist: "Artista 3" }
];
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
      this.tracks = tracks;
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
