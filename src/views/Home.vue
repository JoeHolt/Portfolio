<template>
  <span>
    <projects></projects>
    <general-image-header></general-image-header>
    <experience-timeline></experience-timeline>
  </span>
</template>

<script>
// @ is an alias to /src
import GeneralImageHeader from '@/components/GeneralImageHeader';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import Projects from '@/components/Projects';

export default {
  name: 'Home',
  mounted() {
    window.scrollTo(300, 0);
  },
  components: {
    GeneralImageHeader,
    ExperienceTimeline,
    Projects
  }
};
</script>
