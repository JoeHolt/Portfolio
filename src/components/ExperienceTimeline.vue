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
      <v-card class="elevation-3" v-if="experience.noCard !== true">
        <v-card-title class="headline noselect">{{
          experience.company
        }}</v-card-title>
        <v-card-subtitle class="subtitle-1 noselect">
          {{ experience.title }}
        </v-card-subtitle>
        <v-card-text class="noselect">
          <span>
            {{ experience.description }}
          </span>
          <ul>
            <li v-for="project in experience.projects" v-bind:key="project">
              {{ project }}
            </li>
          </ul>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions
          v-show="experience.skills.length"
          class="text-center ml-1 mt-1"
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
</template>

<script>
import SkillPill from '@/components/SkillPill';
export default {
  name: 'ExperienceTimeline',
  components: {
    SkillPill
  },
  data() {
    return {
      coursesOpened: false,
      experiences: [
        {
          company: 'University of Wisconsin-Madison',
          title: "Bachelor's in Computer Science (3.7/4.0 GPA)",
          start: 'May 2021 (expected)',
          end: 'Present',
          color: '#9b0000',
          description:
            'I am currently attending the University of Wisconsin-Madison Honors College of Letters and Science in pursuit of a degree in Computer Science. I began my journey at the University of Wisconsin in Fall 2018, and plan to graduate in Spring 2021. Throughout my time at UW-Madison, I have gained invaluable skills and made connections with people from across the globe:',
          projects: [
            'Theta Tau, professional co-ed egineering fraternity - Exec Board / Treasurer',
            'NEXT'
          ],
          skills: [
            {
              title: 'Course Work',
              category: 'expand',
              expanded_discription:
                'A list of the most relevant courses I took at UW-Madison',
              expanded: [
                {
                  category: 'Artificial Intelligence',
                  items: [
                    {
                      name: 'Introduction to Artificial Intelligcent',
                      description:
                        'Linear & logistic regression, clustering, neural networks, state space search, game theory.'
                    },
                    {
                      name: 'Introduction to Neural Networks',
                      description:
                        'Back-propagation, deep learning, self-organizing maps, support vector machines, clustering, fuzzy logic,  simulated annealing, genetic and evolution algorithms.'
                    },
                    {
                      name: 'Matrix Methods in Machine Learning',
                      description:
                        'Linear equations, regression, regularization, the singular value decomposition,  iterative algorithms, the lasso, support vector machines, kernel methods, clustering, dictionary learning, neural networks, and deep learning.'
                    }
                  ]
                },
                {
                  category: 'Theory',
                  items: [
                    {
                      name: 'Introduction to Algorithms',
                      description:
                        'Recursion, divide and concquer, greedy, graph theory, dynammic programming, network flow, NP/NP-hard, and asymptotic analysis.'
                    },
                    {
                      name: 'Data Structures and Object Oriented Design',
                      description:
                        'Polymorphism, overloading, classes, inheritance, arrays, hash tables, linked lists, trees (binary, AVL, RB, B-tree), queue, stack, heap'
                    },
                    {
                      name: 'Basic Programming',
                      description:
                        'Through the computer science into programming track, I learned to program & create user interfaces with Java.'
                    }
                  ]
                },
                {
                  category: 'Application',
                  items: [
                    {
                      name: 'Introduction to Operating Systems',
                      description:
                        'Process schueling, virtual address space, locks & concurrent systems, presistent storage, RAID, filsystems and journaling.'
                    },
                    {
                      name: 'Introduction to Information Security [Pending]',
                      description:
                        'Cryptographic primitives, penetration testing, security protocols, system security, and emerging topics.'
                    },
                    {
                      name: 'Database Design and Implementation [Pending]',
                      description:
                        'Hands-on experience with relational and network-based database systems. Implementation techniques for database systems. File organization, query processing, concurrency control, rollback and recovery, integrity and consistency, and view implementation.'
                    },
                    {
                      name: 'Introduction to Computer Networks [Pending]',
                      description:
                        'Architecture of computer networks and network protocols, protocol layering, reliable transmission, congestion control, flow control, naming and addressing, unicast and multicast routing, network security, network performance widely used protocols'
                    }
                  ]
                },
                {
                  category: 'Math',
                  items: [
                    {
                      name: 'Calculus and Analystical Geometry',
                      description:
                        'Advanced integration techniques, differential equations, convergence, series, vectors, dot product'
                    },
                    {
                      name: 'Multi-variable Calculus',
                      description:
                        'Vector valued functions, partial derivitives, multiple integrals and integration of vector fields.'
                    },
                    {
                      name: 'Descrete Math',
                      description:
                        'Foundational knowledge in logic, sets, functions, algorithms, counting, probability, relations, graphs, trees, formal mathematical proofs (focus on induction)'
                    },
                    {
                      name: 'Introduction to Linear Algebra',
                      description:
                        'Linear equations and matricies, real vector spaces, linear transformations and matricies, determinants, Eigenvalues and Eigenvectors and inner product spaces.'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          company: 'Amazon',
          title: 'Sowftware Development Engineering Intern',
          start: 'May 2020',
          end: 'Present',
          color: '#FF9900',
          description:
            'Starting this May, I will be working as a Software Development Engineering Intern for Amazon Seattle! I am super excited to begin work and continue expanding my computer science skills!',
          skills: []
        },
        {
          company: 'PegEx',
          title: 'Junior Software Developer',
          start: 'May 2019',
          end: 'Present',
          color: '#99cc33',
          description:
            'Starting in May 2019, I began working as a full-stack web devevelopment internship at PegEx, a Software as a Service company for waste management companies. Upon completion of my internship, I was promoted to Junior Developer where I have continued to work part-time during the school year. Some of my favorite projects thus far can be seen bellow:',
          projects: [
            'Added Microsoft SSO to the web app',
            'Implemented dynamic translation strings throughout platform',
            'Refactored the platforms widget system',
            'Built a dynamic form builder for complex web forms'
          ],
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
          description:
            'Starting August before my freshman year of college, I started working as a research assistent at the University of Wisconsin-Madison NEXT Machine Learning Lab under faculty member Dr. Robert Nowak. In this position I have done research in the fields of active learning, humor and clustering. Some of the most notable projects I worked on:',
          projects: [
            'Facial Emotion Regonition and Clustering Demo',
            'AHA: AI Humor Assistent',
            'Adaptive Size to Improve Model Training Speeds'
          ],
          skills: [
            { title: 'Python', category: 'lang' },
            { title: 'Clustering', category: 'tool' },
            { title: 'Algorithms', category: 'dev' },
            { title: 'Research', category: 'dev' },
            { title: 'Regression', category: 'tool' }
          ]
        },
        {
          company: 'USA Clean',
          title: 'Web Development Intern',
          start: 'November 2017',
          end: 'May 2018',
          color: '#1891c7',
          description:
            "While I was in high school, I worked as a web development intern for USA Clean. During this time, I gained experience with both writing and deploying websites. I was able to work with Amazon Web Service's EC2 and S3 to create live product pages with a focus on responsive design.",
          skills: [
            { title: 'HTML', category: 'lang' },
            { title: 'CSS', category: 'lang' },
            { title: 'AWS', category: 'tool' },
            { title: 'Linux', category: 'dev' },
            { title: 'JavaScript', category: 'lang' }
          ]
        }
      ]
    };
  }
};
</script>

<style>
.experience-timeline {
  height: 95vh;
  background-color: white;
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
