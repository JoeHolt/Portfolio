<template>
  <v-container fluid fill-height class="header--image">
    <v-row justify-center align-center class="header--image-layer">
      <v-col>
        <div class="display-4 font-weight-black white--text text-xs-center mb-3">{{ title }}</div>
        <div class="header--description display-1 font-weight-bold white--text text-xs-center">{{ description }}</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ImageOverlayHeader',
  data () {
    return {
      title: 'HELLO, I\'M JOE',
      description: 'I\'m a Computer Science student at the University of Wisconsin-Madison. I hope you enjoy my portfolio.'
    };
  }
};
</script>

<style scoped>

.header--image {
  background-size: cover;
  width: 100%;
  height: 100%;
  background-image: url('../assets/header-boys.jpeg');
}

.header--image-layer {
  background-color: rgba(102, 25, 255, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.header--description {
  text-align: center;
  width: 60%;
}

</style>
