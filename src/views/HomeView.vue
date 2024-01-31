<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="te amo katherine"/>
    <BarChart msg="te amo katherine"/>
    <MapLeaflet msg="te amo katherine"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import BarChart from '@/components/BarChart.vue';
import MapLeaflet from '@/components/MapLeaflet.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    BarChart,
    MapLeaflet
  },

}
</script>
