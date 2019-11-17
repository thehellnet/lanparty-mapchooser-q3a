<template>
  <v-card light>
    <v-card-title>{{ this.olgMap.tag }}</v-card-title>
    <v-card-text>{{ this.olgMap.name }}</v-card-text>
  </v-card>
</template>

<script>
import OlgMap from "../models/olgmap.model";

export default {
  name: "MapDetail",
  props: {
    olgMap: { type: OlgMap, required: true }
  }
};
</script>

<style scoped></style>
