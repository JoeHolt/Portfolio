<template>
  <v-container fluid pb-0 :class="className('general-image-header')">
    <v-row class="full-height">
      <!-- Image half of screen -->
      <v-col class="gih--img_container noselect" cols="12" md="7" order="1" order-md="0">
        <img src="@/assets/simple_joe_fixed.png" class="gih--header_img" />
      </v-col>
      <!-- Text half of screen -->
      <v-col cols="12" md="5" order="0" order-md="1">
        <!-- Make a new grid to center on this side -->
        <v-container class="full-height">
          <v-row class="gih--spacing-btn" align="start" justify="start">
          </v-row>
          <v-row class="gih--spacing-content" align="center">
            <v-col class="mr-12">
              <p
                class="display-1 font-weight-bold grey--text text--lighten-1 text-xs-center noselect mb-0"
              >
                {{ preTitle }}
              </p>
              <p
                class="display-4 font-weight-black white--text text-xs-center mb-4 noselect"
              >
                {{ title }}
              </p>
              <p class="headline grey--text text--lighten-2 mb-4 noselect">
                {{ description }}
              </p>
              <v-divider class="gih--text-separator"></v-divider>
              <v-btn
                class="deep-purple--text"
                depressed
                color="white"
                :x-large="true"
                >Contact Me</v-btn
              >
            </v-col>
          </v-row>
          <v-row class="gih--spacing-btn" align="end" justify="start">
            <v-btn text x-large class="white--text" v-scroll-to="'#experience'">
              <v-icon color="white" class="mr-2" large>mdi-chevron-down</v-icon>
              EXPERIENCE
            </v-btn>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import introData from '@/data/intro';
export default {
  name: 'IntroHeader',
  data() {
    return {
      preTitle: '',
      title: '',
      description: ''
    };
  },
  created () {
    this.title = introData.title;
    this.preTitle = introData.preTitle;
    this.description = introData.description;
  },
  computed: {
    screenIsSmall () {
      return !this.$vuetify.breakpoint.mdAndUp
    }
  },
  methods: {
    className (cName) {
      if (!this.screenIsSmall) {
        return cName;
      }
      return cName + '--small';
    }
  }
};
</script>

<style>
.general-image-header {
  background-image: linear-gradient(to bottom right, #3031b4, #6c5ce7);
  height: 95vh;
}

.general-image-header--small {
  background-image: linear-gradient(to bottom right, #3031b4, #6c5ce7);
}

.gih--spacing-btn {
  height: 10%; 
  opacity: 70%;
}

.gih--spacing-content {
  height: 80%;
}

.gih--text-separator {
  margin-bottom: 12vh !important;
}

.gih--img_container {
  padding: 0;
  height: 100%;
  width: 100%;
  display: flex;
}

.gih--header_img {
  width: 90%;
  height: auto;
  align-self: flex-end;
  margin: 0 auto;
}
</style>
