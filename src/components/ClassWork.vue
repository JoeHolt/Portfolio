<template>
  <v-dialog v-model="open" width="35vw">
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
        >{{ company }} -
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
</template>

<script>
export default {
  name: 'ClassWork',
  props: {
    company: String,
    skill: Object,
  },
  data() {
    return {
      open: false
    };
  },
  methods: {
  }
};
</script>

<style scoped></style>
