<template lang="pug">
  #app
    v-header
    v-loader(v-show="isLoading")
    section.section(v-show="!isLoading")
      nav.nav.has-shadow
        .container
          input.input.is-large(type="text", placeholder="Buscar Canciones", v-model="searchQuery")
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times;
      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
            v-track(:track="t")
      .container
        p
        small {{searchMessage}}
    v-footer
</template>

<script>
import trackService from "@/services/trae.js";
import VFooter from "@/components/layout/Footer.vue";
import VHeader from "@/components/layout/Header.vue";

import VTrack from "@/components/Track.vue";
import VLoader from "@/components/shared/Loader.vue";

export default {
  name: "app",

  data() {
    return {
      searchQuery: "",
      tracks: [],

      isLoading: false
    };
  },

  components: {
    VFooter,
    VHeader,
    VTrack,
    VLoader
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

      this.isLoading = true;
      trackService.search(this.searchQuery).then(res => {
        this.tracks = res.tracks.items;
        this.isLoading = false;
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
