<template>
    <div class="">
        <ag-charts-vue :options="dynamicOption" />
    </div>
</template>
  
<script>
import { AgChartsVue } from 'ag-charts-vue';
import dataSample from './data_sample.json';

export default {
    name: 'BarChart',
    props: {
        msg: String
    },
    components: {
        AgChartsVue,
    },
    data() {
        return {
            totalCountFrames: 0,
            timer: null,
            dataSample,
            chLength: 0,
            chAmount: 0,
            colors: {
                0: '#555555',
                1: '#3D702E',
                2: '#9EFDFF',
                3: '#5dab46'
            },
            options: {
                theme: {
                    palette: {
                        fills: [],
                    },
                    overrides: {
                        bar: {
                            autoSize: true,
                            series: {
                                stroke: "transparent",
                                strokeWidth: 1,
                            },
                        },
                    },
                },
                title: {
                    text: "Frameplan",
                    spacing: 30,
                },
                data:[],
                series: [],
                axes: [
                    {
                        type: "category",
                        position: "left",
                        line: {
                            enabled: false,
                        },
                        tick: {
                            values: ['Inroute 1', 'Inroute 2'],
                        },
                        gridLine: {
                            enabled: true,
                        },
                    },
                    {
                        type: "number",
                        position: "top",
                        nice: false,
                        min: 0,
                        max: 0,
                        label: {
                            enabled: true,
                        },
                        tick: {
                            interval: 10,
                        },
                        gridLine: {
                            width: 2,
                        },
                    },
                ],
                legend: {
                    enabled: false,
                },
            },
        };
    },
    methods: {
        initRequest() {
            this.axios.get("/api/postreq")
                .then(response => {
                    console.log(response.data.value);
                    this.dataSample.reply = response.data.value;
                    this.optionExample()
                })
                .catch(function (error) {
                    console.log(error);
                });

            
        },
        optionExample() {

            var fillColorstInroute = [];
            this.dataSample.reply.forEach(element => {
                fillColorstInroute.push(this.colors[element]);
            });
            this.totalCountFrames = this.dataSample.reply.length;
            var serieDynamicInroute = [];

            for (let index = 0; index < this.totalCountFrames; index++) {
                let element = {
                    type: "bar",
                    direction: "horizontal",
                    xKey: "inroute",
                    yKey: `serie${index}`,
                    stacked: true,
                }
                serieDynamicInroute.push(element)

            }
            var data = [];
            var framePlansqueletor = { inroute: 'Inroute 1' };
            for (let index = 0; index < this.totalCountFrames; index++) {
                framePlansqueletor[`serie${index}`] = 1;
            }
            data.push(framePlansqueletor);
            this.options.theme.palette.fills = fillColorstInroute;
            this.options.data = data;
            console.log('this.options.data:', this.options.data)
            this.options.series = serieDynamicInroute;
            this.options.axes[1].max = this.totalCountFrames;
            console.log('this.options.theme.palette.fills:', this.options.theme.palette.fills)
            const options = {
                theme: {
                    palette: {
                        fills: fillColorstInroute,
                    },
                    overrides: {
                        bar: {
                            autoSize: true,
                            series: {
                                stroke: "transparent",
                                strokeWidth: 1,
                            },
                        },
                    },
                },
                title: {
                    text: "Frameplan",
                    spacing: 30,
                },

                data: data,
                series: serieDynamicInroute,
                axes: [
                    {
                        type: "category",
                        position: "left",
                        line: {
                            enabled: false,
                        },
                        tick: {
                            values: ['Inroute 1', 'Inroute 2'],
                        },
                        gridLine: {
                            enabled: true,
                        },
                    },
                    {
                        type: "number",
                        position: "top",
                        nice: false,
                        min: 0,
                        max: this.totalCountFrames,
                        label: {
                            enabled: true,
                        },
                        tick: {
                            interval: 10,
                        },
                        gridLine: {
                            width: 2,
                        },
                    },
                ],
                legend: {
                    enabled: false,
                },
            };
            return options
        },
    },
    created() {
        
        this.initRequest();
    },
    computed: {
        dynamicOption(){
            return this.optionExample();
        }
    },
    mounted() {
        //this.timer = setInterval(() => {
/*         this.timer = setTimeout(() => {
        this.dataSample.reply.unshift(...this.dataSample.reply.splice(-1));
      }, 100) */
   },
    beforeDestroy() {
      //clearInterval(this.timer)
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
</style>
  