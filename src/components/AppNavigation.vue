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
        <h3 class="text-center text--darken-2 pb-3 pt-3" color="#322670">Joe Holt - Portfolio</h3>
        <v-list-item 
          v-for="(item, index) in items" 
          :key="item.title">
          <div class="full-width">
            <v-list-item-content>
              <v-btn
                class="nav--button"
                @click="clickNavbar(index)"
                text
                v-scroll-to="item.scroll"
                >{{ item.title }}</v-btn
              >
            </v-list-item-content>
            <v-divider v-if="index != items.length - 1"></v-divider>
          </div>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- View on larger displays -->
    <v-app-bar app fixed flat>

      <v-app-bar-nav-icon
        color="#4640c6"
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      >
      <v-icon>mdi-reorder-horizontal</v-icon>
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
        { title: 'Experience', scroll: '#experience' },
        { title: 'Projects', scroll: '#projects' },
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
