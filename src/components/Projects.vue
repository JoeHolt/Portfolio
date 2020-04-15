<template>
  <v-container class="projects" style="max-width: 100%">
    <div class="mt-5">
      <p class="display-3 text-center font-weight-medium deep-purple--text"> Projects </p>
      <p class="display-1 text-center gray--text"> Check it out </p>
    </div>
    <v-row>
      <v-col cols="12">
        <v-row align="center" justify="center">
          <v-card v-for="x in 8" :key="x" width="300px" class="ma-3">
            <div
              :style="'background-color: ' + projects[0].color1"
              style="height: 180px;">
              <v-icon color="white" class="projects--card-img" x-large>{{ projects[0].img }}</v-icon>
            </div>
            <v-card-title v-text="projects[0].name"></v-card-title>
            <v-card-subtitle v-text="projects[0].subtitle"></v-card-subtitle>
            <v-card-text class="text--primary" v-text="projects[0].description"></v-card-text>
            <v-card-actions>
              <v-btn text color="deep-purple" target="_blank" :href="projects[0].url">View Source</v-btn>
              <v-spacer></v-spacer>
              <v-btn icon @click="projects[0].show = !projects[0].show"> 
                <v-icon>{{ projects[0].show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
              <!-- Skills -->

            </v-card-actions>
            <v-expand-transition>
              <div v-show="projects[0].show">
                <v-divider></v-divider>
                <h2>Skills will go here</h2>
              </div>
            </v-expand-transition>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          name: 'SwiftBoard for iPhone',
          color1: '#6c5ce7',
          color2: '#6c5ce7',
          show: false,
          img: 'mdi-keyboard',
          url: 'https://www.google.com',
          subtitle: 'An Android-esque keyboard for iOS',
          description: 'While in high school, I developed and release this as my first app on the App Store.', 
          bullets: []
        }
      ]
    };
  },
  methods: {
  },
  created () {
    console.log(this.projects[0]);
  }
};
</script>

<style>

.projects {
  color: "gray";
  height: 95vh;
  width: 100%;
}

.projects--card-img {
  width: 100%;
  text-align: center;
  font-size: 180px !important;
}

</style>
