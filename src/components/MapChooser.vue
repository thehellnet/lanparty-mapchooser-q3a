<template>
  <v-container fluid style="mapchooser-container">
    <v-row>
      <v-col xl="4" lg="5" md="5" cols="12">
        <div class="mapchooser-title">Server</div>
        <div class="mapchooser-actions">
          <v-btn color="error" x-large block v-on:click="mapRestart()"
            >MAP RESTART
          </v-btn>
        </div>
        <div class="mapchooser-actions">
          <v-btn color="green" x-large block v-on:click="randomMap()"
            >RANDOM MAP
          </v-btn>
        </div>
      </v-col>
      <v-col xl="8" lg="7" md="7" cols="12">
        <div class="mapchooser-title">Map list</div>
        <v-carousel height="auto" hide-delimiters>
          <v-carousel-item v-for="(item, i) in maps" :key="i">
            <div class="mapchooser-map-container">
              <v-row>
                <v-col xl="7" lg="6" md="5" cols="12">
                  <v-img
                    class="mapchooser-map-image"
                    :alt="item.tag"
                    :src="require(`@/assets/levelshots/q3a/${item.tag}.jpg`)"
                  />
                </v-col>
                <v-col xl="5" lg="6" md="7" cols="12">
                  <MapDetail :olgMap="item" />
                  <div class="mapchooser-actions">
                    <v-btn
                      color="blue"
                      x-large
                      block
                      v-on:click="mapRun(item.tag)"
                      >RUN
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import OlgMap from "../models/olgmap.model";
import MapDetail from "./MapDetail";
import apiService from "../services/api";

export default {
  name: "MapChooser",
  components: { MapDetail },
  data: () => ({
    maps: [
      new OlgMap("q3dm0", "Introduction"),
      new OlgMap("q3dm1", "Arena Gate"),
      new OlgMap("q3dm2", "House of Pain"),
      new OlgMap("q3dm3", "Arena of Death"),
      new OlgMap("q3dm4", "Place of Many Deaths"),
      new OlgMap("q3dm5", "The Forgotten Place"),
      new OlgMap("q3dm6", "The Camping Grounds"),
      new OlgMap("q3dm7", "Temple of Retribution"),
      new OlgMap("q3dm8", "Brimstone Abbey"),
      new OlgMap("q3dm9", "Hero's Keep"),
      new OlgMap("q3dm10", "The Nameless Place"),
      new OlgMap("q3dm11", "Deva Station"),
      new OlgMap("q3dm12", "The Dredwerkz"),
      new OlgMap("q3dm13", "Lost World"),
      new OlgMap("q3dm14", "Grim Dungeons"),
      new OlgMap("q3dm15", "Demon Keep"),
      new OlgMap("q3dm16", "Bouncy Map"),
      new OlgMap("q3dm17", "The Longest Yard"),
      new OlgMap("q3dm18", "Space Chamber"),
      new OlgMap("q3dm19", "Apocalypse Void")
    ]
  }),
  methods: {
    async mapRestart() {
      let loader = this.$loading.show();
      await apiService.mapRestart();
      loader.hide();
    },
    async randomMap() {
      let loader = this.$loading.show();
      await apiService.randomMap();
      loader.hide();
    },
    async mapRun(tag) {
      let loader = this.$loading.show();
      await apiService.mapRun(tag);
      loader.hide();
    }
  }
};
</script>

<style lang="scss">
.mapchooser-container {
  min-height: 100%;
}

.mapchooser-title {
  text-align: center;
  font-size: x-large;
  font-weight: bold;
  margin-bottom: 1em;
}

.mapchooser-actions {
  margin-top: 1em;
}

.mapchooser-map-container {
  margin-left: 5em;
  margin-right: 5em;
  margin-bottom: 5em;
}

.mapchooser-map-image {
}
</style>
