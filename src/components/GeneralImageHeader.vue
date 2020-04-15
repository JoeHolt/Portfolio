<template>
  <v-container fluid pb-0 class="general-image-header">
    <v-row style="height: 100%">
      <!-- Image half of screen -->
      <v-col class="gih--img_container noselect" :cols="7">
        <img src="@/assets/simple_joe.png" class="gih--header_img"/>
      </v-col>
      <!-- Text half of screen -->
      <v-col :cols="5">
        <!-- Make a new grid to center on this side -->
        <v-container style="height: 100%;">
          <v-row style="height: 100%;" align="center">
            <v-col class="mr-12">
              <p class="display-1 font-weight-bold grey--text text--lighten-1 text-xs-center noselect mb-0">{{ preTitle }}</p>
              <p class="display-4 font-weight-black white--text text-xs-center mb-4 noselect">{{ title }}</p>
              <p class="headline grey--text text--lighten-2 mb-4 noselect">{{ description }}</p>
              <v-divider class="gih--text-separator"></v-divider>
              <v-btn class="deep-purple--text" depressed color="white" :x-large="true">Contact Me</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'GeneralImageHeader',
  data () {
    return {
      preTitle: 'HELLO, I\'M...',
      title: 'JOE HOLT',
      description: 'Thank you for visiting my portfolio! I am a Computer Science student at the University of Wisconsin-Madison with interests in High Performance Computing and Aritifical Intelligence. Please feel free to contact me with any questions or concerns!'
    };
  }
};
</script>

<style>

.general-image-header {
  background-image: linear-gradient(to bottom right, #3031b4, #6c5ce7);
  height: 95vh;
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
