<template>
  <span>
    <intro-page id="about"></intro-page>
    <experience-timeline id="experience"></experience-timeline>
    <projects id="projects"></projects>
  </span>
</template>

<script>
// @ is an alias to /src
import IntroPage from '@/components/IntroPage';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import Projects from '@/components/Projects';

export default {
  name: 'Home',
  mounted() {
    var container = this.$el.querySelector("#about");
    container.scrollIntoView(false);
  },
  components: {
    IntroPage,
    ExperienceTimeline,
    Projects
  },
  methods : {
  }
};
</script>
