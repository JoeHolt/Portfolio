<template>
  <v-container fluid fill-height pb-0 class="general-image-header">
    <v-row style="height: 100%">
      <!-- Image half of screen -->
      <v-col class="gih--img_container" :cols="7">
        <img src="@/assets/simple_joe.png" class="gih--header_img"/>
      </v-col>
      <!-- Text half of screen -->
      <v-col :cols="5">
        <!-- Make a new grid to center on this side -->
        <v-container fill-height>
          <v-row>
            <v-col class="mr-12">
              <p class="display-1 font-weight-bold grey--text text--lighten-1 text-xs-center mb-0">{{ preTitle }}</p>
              <p class="display-4 font-weight-black white--text text-xs-center mb-4">{{ title }}</p>
              <p class="headline grey--text text--lighten-2 gih--text-separator">{{ description }}</p>
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
      description: 'Thank you for visiting my portfolio! I am a Computer Science student at the University of Wisconsin-Madison. I am interest in high performance computing and aritifical intelligence. Please feel free to contact me with any questions or concerns!'
    };
  }
};
</script>

<style>

.general-image-header {
  background-color: #6c5ce7;
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
