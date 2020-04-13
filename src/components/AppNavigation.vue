<!-- https://www.freecodecamp.org/news/how-to-build-a-single-page-application-using-vue-js-vuex-vuetify-and-firebase-838b40721a07/ -->
<template>
  <span>
    <!-- Only visible on smaller displays -->
    <v-navigation-drawer
      app
      v-model="drawer"
      color="#b2bec3"
      disable-resize-watcher
    >
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-tile :key="index">
            <v-list-tile-content>
              {{ item.title }}
            </v-list-tile-content>
          </v-list-tile>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
    <!-- View on larger displays -->
    <v-app-bar app fixed>
      <v-toolbar-side-icon color="black" class="hidden-md-and-up" @click="drawer = !drawer">
        <v-icon>mdi-dots-vertical</v-icon>  
      </v-toolbar-side-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <div v-for="(item, index) in items" :key="index">
        <v-btn color="#6c5ce7" text>{{ item.title }}</v-btn>
      </div>
    </v-app-bar>
  </span>
</template>
<script>
// @ is an alias to /src
export default {
  name: 'AppNavigation',
  data() {
    return {
      appTitle: 'JOE HOLT',
      drawer: false,
      items: [{ title: 'About' }, { title: 'Projects' }, { title: 'Experience' }]
    };
  }
};
</script>
