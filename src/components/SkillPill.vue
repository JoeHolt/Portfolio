<template>
  <v-chip class="noselect mb-2 mr-2" :color="mapSkill(category)" pill outlined>
    {{ title }}
  </v-chip>
</template>

<script>
import mappings from '@/data/mappings.js';
export default {
  name: 'SkillPill',
  props: {
    title: String,
    category: String
  },
  data() {
    return {};
  },
  methods: {
    mapSkill(cat) {
      return mappings.mapSkillToColor(cat);
    }
  }
};
</script>

<style scoped></style>
