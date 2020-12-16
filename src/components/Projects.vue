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
export default {
  name: 'Projects',
  components: {
    SkillPill
  },
  data() {
    return {
      projects: [
        {
          name: 'WiscEnroll Mobile',
          color1: '#9b0000',
          color2: '#9b0000',
          show: false,
          img_small: false,
          img: 'mdi-school-outline',
          no_url: true,
          url: 'https://www.google.com',
          subtitle: 'Course Enroll for iOS Devices',
          description:
            "I created an iOS front end for UW-Madison's course enrollment app, pulling and updating live user data from the UW system. The source code is private.",
          skills: [
            { title: 'Swift', category: 'lang' },
            { title: 'SwiftUI', category: 'tool' },
            { title: 'MVC', category: 'dev' },
            { title: 'URLRequest', category: 'tool' },
            { title: 'iOS', category: 'platform' },
            { title: 'macOS', category: 'platform' }
          ]
        },
        {
          name: 'SwiftBoard for iPhone',
          color1: '#6c5ce7',
          color2: '#6c5ce7',
          show: false,
          img_small: false,
          img: 'mdi-keyboard',
          no_url: true,
          url: 'https://www.google.com',
          subtitle: 'An Android-esque keyboard for iOS',
          description:
            'While in high school, I developed and release SwiftBoard for iPhone as my first app on the App Store. SwiftBoard is an iOS keyboard extension that adds extra functionality on top of the stock keyboard. The source code is private.',
          skills: [
            { title: 'Swift', category: 'lang' },
            { title: 'UIKit', category: 'tool' },
            { title: '10,000+ units', category: 'acomplisment' },
            { title: 'Xcode', category: 'tool' },
            { title: '$5,000+ revenue', category: 'acomplisment' },
            { title: 'MVC', category: 'dev' },
            { title: 'iOS', category: 'platform' }
          ]
        },
        {
          name: 'NEXT Face Demo',
          color1: '#9b0000',
          color2: '#9b0000',
          show: false,
          img_small: true,
          img: 'mdi-face-recognition',
          no_url: false,
          url: 'https://github.com/stsievert/next-face-demo',
          subtitle: 'Predict Facial Emotion',
          description:
            "Alongside UW-Madison NEXT researchers, I developed a demo that, given an input of the user's face, predicts their emotion. My demo was showcased at the Wisconsin Science Festival.",
          skills: [
            { title: 'Python', category: 'lang' },
            { title: 'Bokeh', category: 'tool' },
            { title: 'Jupyter', category: 'dev' },
            { title: 'SciKitLearn', category: 'tool' },
            { title: 'Web', category: 'platform' },
            { title: 'AI', category: 'tool' }
          ]
        },
        {
          name: 'JoeHolt.dev',
          color1: '#00c853',
          color2: '#00c853',
          show: false,
          img_small: false,
          img: 'mdi-chart-bubble',
          url: 'https://github.com/JoeHolt/joeholt.github.io',
          subtitle: 'The Best Website Out There',
          description: "I created the website you are currently reading as a way to showcase the work I have done in the field of computer science. The website represents the cumulation of my design skills.",
          skills: [
            { title: 'JavaScript', category: 'lang' },
            { title: 'Vue', category: 'tool' },
            { title: 'Design', category: 'dev' },
            { title: 'MVC', category: 'dev' },
            { title: 'Web', category: 'platform' }
          ]
        },
        {
          name: 'Spartan',
          color1: '#3d5afe',
          color2: '#3d5afe',
          show: false,
          img_small: true,
          img: 'mdi-align-vertical-bottom',
          url: 'https://github.com/JoeHolt/Spartan-Manufacturing-Web',
          subtitle: 'Inventory Tracker for my High School',
          description:
            'While in high school, I created a multiplatform inventory tracker for my school\'s tech ed department. The tool was designed to track inventories of raw materials, and completed products while being supported on a variety of platforms. The tool is still used today.',
          skills: [
            { title: 'Python', category: 'lang' },
            { title: 'JavaScript', category: 'lang' },
            { title: 'Swift', category: 'lang' },
            { title: 'Multiplatform', category: 'platform' },
            { title: 'Web', category: 'platform' },
            { title: 'iOS', category: 'platform' },
            { title: 'macOS', category: 'platform' }
          ]
        },
        {
          name: 'AHA: AI Assisted Humor',
          color1: '#ff6f00',
          color2: '#ff6f00',
          show: false,
          img_small: true,
          img: 'mdi-emoticon-lol-outline',
          url: 'https://github.com/nextml/AHA',
          subtitle: 'Preduct Caption Relative Humor',
          description:
            'Working along side my fellow researchers, I created a demo that assists users by predicting the relative humor in captions for a New Yorker Caption Contest cartoon.',
          skills: [
            { title: 'Python', category: 'lang' },
            { title: 'JavaScript', category: 'lang' },
            { title: 'Web', category: 'platform' },
            { title: 'AI', category: 'tool' }
          ]
        }
      ]
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
  created() {}
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
