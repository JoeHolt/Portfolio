<template>
  <v-timeline class="ml-6 mr-6">
    <v-timeline-item
      v-for="experience in experiences"
      :key="experience.company"
      :color="experience.color"
    >
      <template v-slot:opposite>
        <span
          class="headline font-weight-bold noselect"
          :style="'color: ' + experience.color"
          v-text="experience.start"
          >
        </span>
      </template>
      <v-card class="elevation-3">
        <v-card-title class="headline noselect">{{ experience.company }}</v-card-title>
        <v-card-subtitle class="subtitle-1 noselect"> {{ experience.title }} </v-card-subtitle>
        <v-card-text class="noselect">
          <span>
            {{ experience.description }}
          </span>
          <ul>
            <li v-for="project in experience.projects" v-bind:key="project">{{project}}</li>
          </ul>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions v-show="experience.skills.length" class="text-center ml-1 mt-1">
          <div v-for="skill in experience.skills" v-bind:key="skill.title">
            <v-chip
              v-if="skill.category !== 'expand'"
              class="noselect mb-2 mr-2"
              :color="mapSkill(skill.category)"
              pill
              outlined
              >
              {{ skill.title }} 
            </v-chip>
            <div v-else style="width: 100%;">
              <v-dialog
                v-model="coursesOpened"
                width="70vw"
              >
                <template v-slot:activator="{ on }">
                  <v-btn 
                    text
                    class="font-weight-black"
                    color="#6c5ce7"
                    v-on="on"
                    >
                    {{ skill.title }}
                  </v-btn>
                </template>
                <!-- pop over view -->
                <v-card>
                  <v-card-title 
                    class="headline font-weight-bold deep-purple--text"
                    >
                    {{ experience.company }} - {{ skill.title }}
                  </v-card-title>
                  <v-card-subtitle
                    class="subtitle-1 font-weight-medium">
                    {{ skill.expanded_discription }}
                  </v-card-subtitle>
                  <v-divider></v-divider>

                  <v-card-actions>
		    <v-spacer></v-spacer>
                    <v-btn
                      class="font-weight-black"
                      color="#6c5ce7"
                      text
                      @click="coursesOpened = false"
                      >
                      Close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </div>
        </v-card-actions>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import mappings from '@/data/mappings.js';
export default {
  name: 'ExperienceTimeline',
  data() {
    return {
      coursesOpened: false,
      experiences: [
        {
          company: 'University of Wisconsin-Madison',
          title: 'Bachelor\'s in Computer Science (3.7/4.0 GPA)',
          start: 'May 2021 (expected)',
          end: 'Present',
          color: '#9b0000',
          description: 'I am currently attending the University of Wisconsin-Madison honors college of Letters and Science in persuit of a degree in Computer Science. I began my journey at UW in fall 2018, and will be graduating next fall. Throughout my time at UW-Madison, I have gained invaluable skills and made connections with people from across the globe:',
          projects: ['Theta Tau - Exec Board / Treasurer', 'NEXT', 'Natatorium with the Boys'],
          skills: [ 
            { title: 'Course Work', 
              category: 'expand', 
              expanded_discription: 'A list of the most relevant courses I took at UW-Madison',
              expanded: [
                { name: 'Operating Systems', description: 'CS 537' },
                { name: 'Algorithms', description: 'CS 577' },
              ]
            } 
          ]
        },
        {
          company: 'Amazon',
          title: 'Sowftware Development Engineer',
          start: 'May 2020',
          end: 'Present',
          color: '#FF9900',
          description: 'Starting this May, I will be working as a Software Development Intern for Amazon Seattle! I am super excited to begin work and continue expanding my computer science skills!',
          skills: []
        },
        {
          company: 'PegEx',
          title: 'Junior Software Developer',
          start: 'May 2019',
          end: 'Present',
          color: '#99cc33',
          description: 'Starting in August 2019, I began a full-stack web dev summer internship at PegEx, a Software as a Service company for waste management companies. Upon completion of my internship, I was promoted to Junior Developer where I have continued to work part-time during the school year. Some of my favorite projects thus far can be seen bellow:',
          projects: ['Added Microsoft SSO to the web app', 'Implemented dynamic translation strings throughout platform', 'Refactored the platforms widget system', 'Built a dynamic form builder for complex web forms'],
          skills: [
            { title: 'Vue', category: 'tool' },
            { title: 'Frontend', category: 'dev' },
            { title: 'Backend', category: 'dev' },
            { title: 'Kubernetes', category: 'tool' },
            { title: 'SCRUM', category: 'plan' },
            { title: 'MySQL', category: 'tool' }
          ]
        },
        {
          company: 'UW-Madison NEXT Machine Learning Lab',
          title: 'Reseasrch Assistent',
          start: 'August 2018',
          end: 'Present',
          color: '#c5050c',
          description: 'Starting August before my freshman year of colllege, I started working as a research assistent at the University of Wisconsin-Madison NEXT Machine Learning Lab under faculty member Dr. Robert Nowak. In this position I have done research in the fields of active learning, humor and clustering. Some of the most notable projects I worked on:',
          projects: ['Facial Emotion Regonition and Clustering Demo', 'AHA: AI Humor Assistent', 'Adaptive Size to Improve Model Training Speeds'],
          skills: [
            { title: 'Python', category: 'lang' },
            { title: 'Clustering', category: 'tool' },
            { title: 'Algorithms', category: 'dev' },
            { title: 'Research', category: 'dev' },
            { title: 'Regression', category: 'tool' },
          ]
        },
        {
          company: 'USA Clean',
          title: 'Web Development Intern',
          start: 'November 2017',
          end: 'May 2018',
          color: '#1891c7',
          description: 'While I was in high school, I worked as a web development intern for USA Clean. During this time, I gained experience with both writing and deploying websites. I was able to work with Amazon Web Service\'s EC2 and S3 to create live product pages with a focus on responsive design.',
          skills: [
            { title: 'HTML', category: 'lang' },
            { title: 'CSS', category: 'lang' },
            { title: 'AWS', category: 'tool' },
            { title: 'Linux', category: 'dev' },
            { title: 'JavaScript', category: 'lang' }
          ]
        },
      ]
    };
  },
  methods: {
    mapSkill (cat) {
      return mappings.mapSkillToColor(cat);
    }
  }
};
</script>

<style>
.experience-timeline {
  height: 95vh;
  background-color: white;
}
</style>
