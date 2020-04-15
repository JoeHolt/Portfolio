<template>
  <span>
    <general-image-header v-if="true"></general-image-header>
    <image-overlay-header v-if="false"></image-overlay-header>
  </span>
</template>

<script>
// @ is an alias to /src
import ImageOverlayHeader from '@/components/ImageOverlayHeader.vue';
import GeneralImageHeader from '@/components/GeneralImageHeader.vue';

export default {
  name: 'Home',
  components: {
    ImageOverlayHeader,
    GeneralImageHeader
  }
};
</script>
