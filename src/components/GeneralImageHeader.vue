<template>
  <v-container fluid fill-height pb-0 class="general-image-header">
    <v-row class="header">
      <!-- Image half of screen -->
      <v-col class="header--img_container" pa-0 :cols="6">
        <img src="@/assets/simple_joe.png" class="header--img"/>
      </v-col>
      <!-- Text half of screen -->
      <v-col :cols="6">
        <!-- Make a new grid to center on this side -->
        <v-container fluid fill-height pa-0>
          <v-row>
            <v-col class="mr-8">
              <p class="display-1 font-weight-bold grey--text text--lighten-1 text-xs-center mb-0">{{ preTitle }}</p>
              <p class="display-4 font-weight-black white--text text-xs-center mb-8">{{ title }}</p>
              <p class="body-1 white--text">{{ description }}</p>
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
      description: 'I\'m a computer science student at the University of Wisconsin-Madison. I enjoy programming, playing guitar and general fitness. I hope you enjoy my portfolio!'
    };
  }
};
</script>

<style scoped>

.general-image-header {
  background-color: #6c5ce7;
}

.img {
  max-width: 100%;
}

.header {
  height: 100%;
}

.header--img_container {
  padding: 0;
  height: 100%;
  width: 100%;
  display: flex;
}

.header--img {
  width: 100%;
  align-self: flex-end;
}

</style>
