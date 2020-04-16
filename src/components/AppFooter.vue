<template>
  <v-footer fluid padless absolute app class="footer">
    <v-card
      style="flex-grow: 1"
      flat
      tile
      class="deep-purple text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in social"
          :key="icon.icon"
          style="background-color: #f5f5f5"
          class="mx-4 text-center"
          :href="icon.url"
          target="_blank"
          dark
          fab
          icon
        >
          <v-icon large color="deep-purple">{{ icon.icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Joseph Holt</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      social: [
        { icon: 'mdi-twitter', url: 'https://twitter.com/_joeholt_' },
        { icon: 'mdi-instagram', url: 'https://www.instagram.com/_joeholt_/' },
        {
          icon: 'mdi-linkedin',
          url: 'https://www.linkedin.com/in/josephpholt'
        },
        { icon: 'mdi-facebook', url: 'https://www.facebook.com' }
      ]
    };
  }
};
</script>

<style>
.footer {
  padding-left: 15vw;
  padding-right: 15vw;
}
</style>
