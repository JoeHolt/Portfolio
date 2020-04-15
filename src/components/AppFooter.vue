<template>
  <v-footer fluid padless absolute app class="footer">
    <v-card
      style="flex-grow: 1"
      flat
      tile
      class="deep-purple lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in social"
          :key="icon.icon"
          style="background-color: rebeccapurple"
          class="mx-4 deep-purple--text"
          color="white"
          dark
          fab
          icon
        >
          <v-icon color="white">{{icon.icon}}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0" v-if="false">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
        Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
        accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a
        sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
        lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
        iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor
        vel ut orci. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus.
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
        { icon: 'mdi-twitter', url: '' },
        { icon: 'mdi-instagram', url: '' },
        { icon: 'mdi-linkedin', url: '' },
        { icon: 'mdi-facebook', url: '' }
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
