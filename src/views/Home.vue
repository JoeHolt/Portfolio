<template>
  <span>
    <projects id="projects"></projects>
    <general-image-header id="about"></general-image-header>
    <experience-timeline id="experience"></experience-timeline>
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
    var container = this.$el.querySelector("#about");
    container.scrollIntoView(false);
  },
  components: {
    GeneralImageHeader,
    ExperienceTimeline,
    Projects
  },
  methods : {
  }
};
</script>
