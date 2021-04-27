<template lang="pug">
    section.hero.is-success
        .hero-head
          header.navbar
            .container
              .navbar-start
                .navbar-item
                    strong 📻 Vue Music
            .navbar-end.navbar-menu
              router-link.nav-item(to="/") Buscar
              router-link.nav-item(to="about") Nosotros
        .hero-body
          .container.has-text-centered
            h1.title Vue Music
            h2.subtitle Canciones que están Vue-nísimas
            v-player
</template>

<script>
import VPlayer from "@/components/Player.vue";
export default {
  components: {
    VPlayer
  }
};
</script>
