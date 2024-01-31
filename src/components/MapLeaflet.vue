<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Hola MAPA
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <l-map :center="center" :zoom="zoom" class="map" ref="map" @update:zoom="zoomUpdated" @update:center="centerUpdated">
      <l-tile-layer :url="url">
      </l-tile-layer>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  name: 'MapLeaflet',
  props: {
    msg: String
  },
  components: {
    LMap,
    LTileLayer
  },
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      center: [49.1193089, 6.1757156],
      zoom: 12,
    }
  },
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
      console.log(this.markers)
    },
    centerUpdated(center) {
      this.center = center;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.map {
   position: absolute;
   width: 100%;
   height: 100%;
   overflow :hidden
 }
</style>
