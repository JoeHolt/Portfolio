<template>
  <v-app>
    <app-navigation></app-navigation>

    <v-content transition="slide-x-transition">
      <!-- Displays the view the app will display -->
      <router-view></router-view>
    </v-content>
    
    <app-footer v-if="true"></app-footer>

  </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';
import AppFooter from '@/components/AppFooter';

export default {
  name: 'App',
  components: {
    AppNavigation,
    AppFooter
  },
  created () {
    document.title = 'Joe Holt | Portfolio';
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

@import './assets/styles/nav.css';
@import './assets/styles/general.css';
</style>
