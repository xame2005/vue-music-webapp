<template lang="pug">
  main
    v-notification(v-show="showNotification")
      p(slot="body") No se encontraron resultados
    v-loader(v-show="isLoading")
    section.section(v-show="!isLoading")
      nav.nav
        .container
          input.input.is-large(type="text", placeholder="Buscar Canciones", v-model="searchQuery", @keyup.enter="search")
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times;
      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
            v-track(:class="{'is-active': t.id==selectedTrack}", :track="t", @select="setSelectedTrack")
      .container
        p
        small {{searchMessage}}
</template>

<script>
import trackService from "@/services/track.js";
import VTrack from "@/components/Track.vue";
import VLoader from "@/components/shared/Loader.vue";
import VNotification from "@/components/shared/Notification.vue";

export default {
  name: "app",

  data() {
    return {
      searchQuery: "",
      tracks: [],

      isLoading: false,
      showNotification: false,

      selectedTrack: ""
    };
  },

  components: {
    VTrack,
    VLoader,
    VNotification
  },

  computed: {
    searchMessage() {
      return `Encontrados: ${this.tracks.length}`;
    }
  },

  watch: {
    showNotification() {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false;
        }, 3000);
      }
    }
  },

  methods: {
    search() {
      if (!this.searchQuery) {
        return;
      }

      this.isLoading = true;
      trackService.search(this.searchQuery).then(res => {
        this.showNotification = res.tracks.total === 0;
        this.tracks = res.tracks.items;
        this.isLoading = false;
      });
    },

    setSelectedTrack(id) {
      this.selectedTrack = id;
    }
  }
};
</script>

<style lang="scss">
.results {
  margin-top: 50px;
}

.is-active {
  border: 3px #23d160 solid;
}
</style>
