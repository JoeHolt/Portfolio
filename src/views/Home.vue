<template>
  <span>
    <general-image-header v-if="true"></general-image-header>
    <experience-timeline></experience-timeline>
  </span>
</template>

<script>
// @ is an alias to /src
import GeneralImageHeader from '@/components/GeneralImageHeader';
import ExperienceTimeline from '@/components/ExperienceTimeline';

export default {
  name: 'Home',
  components: {
    GeneralImageHeader,
    ExperienceTimeline
  }
};
</script>
