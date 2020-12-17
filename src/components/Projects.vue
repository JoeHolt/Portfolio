<template>
  <v-container class="projects" style="max-width: 100%; min-height: 95vh">
    <v-row
      justify="center"
      align="center"
      style="min-height: 95vh;"
      class="ma-3"
    >
      <div class="mt-8 mb-1">
        <p class="headline text-center text-weight--bold black--text">
          I enjoy developing products that have an impact on peoples lives.
        </p>
      </div>
      <v-row>
        <v-col cols="12">
          <v-row align="center" justify="center">
            <v-card
              v-for="project in projects"
              :key="project.name"
              width="22vw"
              class="ma-3"
            >
              <div
                :style="computeBackgroundStyle(project)"
                style="height: 13vw;"
              >
                <v-icon
                  color="white"
                  :class="
                    project.img_small
                      ? 'projects--card-img__small'
                      : 'projects--card-img'
                  "
                  x-large
                  >{{ project.img }}</v-icon
                >
              </div>
              <v-card-title v-text="project.name"></v-card-title>
              <v-card-subtitle v-text="project.subtitle"></v-card-subtitle>
              <v-card-text
                class="text--primary"
                style="height: 15vh"
                v-text="project.description"
              ></v-card-text>
              <v-card-actions>
                <v-btn
                  text
                  color="deep-purple"
                  target="_blank"
                  :href="project.url"
                  :disabled="project.no_url"
                  >View Source</v-btn
                >
                <v-spacer></v-spacer>
                <v-btn icon @click="project.show = !project.show">
                  <v-icon>{{
                    project.show ? 'mdi-chevron-up' : 'mdi-chevron-down'
                  }}</v-icon>
                </v-btn>
              </v-card-actions>
              <!-- Skills -->
              <v-expand-transition>
                <div v-show="project.show">
                  <v-divider></v-divider>
                  <v-row style="width: 100%">
                    <v-col cols="12">
                      <v-row
                        align="start"
                        justify="start"
                        no-gutters
                        class="ml-2 mr-2"
                      >
                        <skill-pill
                          v-for="skill in project.skills"
                          :key="skill.title"
                          class="ma-1"
                          :title="skill.title"
                          :category="skill.category"
                        >
                        </skill-pill>
                      </v-row>
                    </v-col>
                  </v-row>
                </div>
              </v-expand-transition>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
import SkillPill from '@/components/SkillPill';
import projectData from '@/data/projects';
export default {
  name: 'Projects',
  components: {
    SkillPill
  },
  data() {
    return {
      projects: []
    };
  },
  methods: {
    computeBackgroundStyle(project) {
      let sty =
        'background-image: linear-gradient(to bottom right, ' +
        project.color1 +
        ', ' +
        project.color2 +
        ');';
      return sty;
    }
  },
  created() {
    this.projects = projectData.projects;
  }
};
</script>

<style>
.projects {
  color: 'gray';
  width: 100%;
}

.projects--card-img {
  width: 100%;
  text-align: center;
  font-size: 13vw !important;
}

.projects--card-img__small {
  width: 100%;
  text-align: center;
  padding-top: 5vh;
  font-size: 12vh !important;
}
</style>
