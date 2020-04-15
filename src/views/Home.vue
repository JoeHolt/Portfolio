<template>
  <span>
    <projects></projects>
    <general-image-header v-if="false"></general-image-header>
    <experience-timeline v-if="false"></experience-timeline>
  </span>
</template>

<script>
// @ is an alias to /src
import GeneralImageHeader from '@/components/GeneralImageHeader';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import Projects from '@/components/Projects';

export default {
  name: 'Home',
  components: {
    GeneralImageHeader,
    ExperienceTimeline,
    Projects
  }
};
</script>
