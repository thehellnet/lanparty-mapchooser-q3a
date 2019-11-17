<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          :alt="game.name"
          class="shrink mr-2"
          contain
          :src="compute_game_icon_filename(game.tag)"
          transition="scale-transition"
          width="40"
        />
        <div class="mapchooser-game-title">{{ game.name }}</div>
      </div>
      <v-spacer></v-spacer>
      <div>Map Chooser</div>
    </v-app-bar>

    <v-content>
      <MapChooser />
    </v-content>
  </v-app>
</template>

<script>
import MapChooser from "./components/MapChooser";

export default {
  name: "App",

  components: {
    MapChooser
  },

  data: () => ({
    game: {
      tag: "q3a",
      name: "Quake 3 Arena"
    },
    compute_game_icon_filename(tag) {
      return require(`./assets/games/${tag}.png`);
    }
  })
};
</script>
<style lang="scss">
.v-application {
  min-height: 100vh;
  display: flex;
}

.mapchooser-game-title {
  margin-left: 1em;
  font-size: x-large;
  font-weight: bold;
}
</style>
