<template>
  <div class="experience-timeline">
    <v-timeline 
      align-top
      class="experience-frame pt-10 pb-10" 
      >
      <v-timeline-item
        v-for="(experience, idx) in exps"
        :key="experience.company"
        color="#2c3747"
      >
        <template v-slot:opposite v-if="idx!=10000">
          <span
            class="headline font-weight-bold noselect"
            :style="'color: #8686ad'"
            v-text="makeDateRange(experience)"
          >
          </span>
        </template>
        <v-card 
          class="elevation-4 white--text " 
          :color="idx % 2== 0 ? '#6c5ce7' : '#f68937'" 
          v-if="experience.noCard !== true">
          <v-card-title class="headline noselect font-weight-bold">{{
            makeTitle(experience)
          }}</v-card-title>
          <v-card-subtitle class="subtitle-1 noselect white--text">
            {{ experience.title }}
          </v-card-subtitle>
          <v-card-text class="noselect white subtitle-1 pt-3">
            <span>
              {{ experience.description }}
            </span>
            <ul class="pt-3">
              <li v-for="project in experience.projects" v-bind:key="project">
                {{ project }}
              </li>
            </ul>
          </v-card-text>
          <v-divider class="white"></v-divider>
          <v-card-actions
            v-show="experience.skills.length"
            class="text-center pl-3 pt-1 white"
          >
            <div v-for="skill in experience.skills" v-bind:key="skill.title">
              <skill-pill
                v-if="skill.category !== 'expand'"
                :title="skill.title"
                :category="skill.category"
              ></skill-pill>
              <div v-else style="width: 100%;">
                <v-dialog v-model="coursesOpened" width="35vw">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      text
                      class="font-weight-black mb-1"
                      color="#6c5ce7"
                      v-on="on"
                    >
                      {{ skill.title }}
                    </v-btn>
                  </template>
                  <!-- pop over view -->
                  <v-toolbar
                    color="#6c5ce7"
                    class="courses--header headline font-weight-bold"
                    dark
                    flat
                  >
                    <v-toolbar-title class="noselect"
                      >{{ experience.company }} -
                      {{ skill.title }}</v-toolbar-title
                    >
                    <v-spacer></v-spacer>
                    <v-btn icon @click="coursesOpened = false">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                  </v-toolbar>
                  <!-- Listing skills -->
                  <v-list two-line subheader class="noselect">
                    <div v-for="subject in skill.expanded" :key="subject.title">
                      <v-subheader>{{ subject.category }}</v-subheader>
                      <v-list-item
                        v-for="course in subject.items"
                        :key="course.name"
                      >
                        <v-list-item-content>
                          <v-list-item-title>{{ course.name }}</v-list-item-title>
                          <v-list-item-subtitle
                            class="course--subtitle"
                            v-text="course.description"
                          ></v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </div>
                  </v-list>
                </v-dialog>
              </div>
            </div>
          </v-card-actions>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
import SkillPill from '@/components/SkillPill';
import experience from '@/data/experience';
export default {
  name: 'ExperienceTimeline',
  components: {
    SkillPill
  },
  data () {
    return {
      coursesOpened: false,
      exps: experience.experiences
    };
  },
  created () {
    this.exps.sort((a, b) => a.order > b.order);
  },
  methods: {
    makeTitle (exp) {
      // exp.company + ' (' + exp.start + '-' + exp.end + ')'; 
      return exp.company;
    },
    makeDateRange (exp) {
      return exp.start + ' - ' + exp.end; 
    }
  }
};
</script>

<style>
.experience-timeline {
  background-color: #353557;
}

.experience-frame {
  margin: 0 15% 0 15%;
}

.course--subtitle {
  white-space: normal;
  word-wrap: break-word;
  -webkit-line-clamp: unset !important;
}

.courses--header {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  z-index: 100;
}
</style>
