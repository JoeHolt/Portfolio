<template>
  <span>
    <!-- Only visible on smaller displays -->
    <v-navigation-drawer
      app
      v-model="drawer"
      class="gray lighten-2"
      disable-resize-watcher
    >
      <v-list>
        <v-list-item v-for="item in items" :key="item.title">
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
            <!-- <v-divider :key="`divider-${index}`"></v-divider> -->
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- View on larger displays -->
    <v-app-bar app fixed flat style="height: 65px;">
      <v-app-bar-nav-icon
        color="black"
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      >
        <v-icon>mdi-dots-vertical</v-icon>
      </v-app-bar-nav-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <v-toolbar-title class="noselect">{{ appTitle }}</v-toolbar-title>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <div
        class="hidden-sm-and-down"
        v-for="(item, index) in items"
        :key="index"
      >
        <span v-if="index != 0" class="pl-4"></span>
        <v-btn
          color="#6c5ce7"
          @click="clickNavbar(index)"
          text
          :outlined="active == index"
	  v-scroll-to="item.scroll"
          >{{ item.title }}</v-btn
        >
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
      active: 0,
      items: [
        { title: 'About', scroll: '#about' },
        { title: 'Projects', scroll: '#projects' },
        { title: 'Experience', scroll: '#experience' }
      ]
    };
  },
  methods: {
    clickNavbar(index) {
      this.active = index;
    }
  }
};
</script>
