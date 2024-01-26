<template>
    <div class="">
        <ag-charts-vue :options="options" />
    </div>
</template>
  
<script>
import { AgChartsVue } from 'ag-charts-vue';

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
            options: {
                // Data: Data to be displayed in the chart
                data: [
                    { month: "Jan", avgTemp: 2.3, iceCreamSales: 162000 },
                    { month: "Mar", avgTemp: 6.3, iceCreamSales: 302000 },
                    { month: "May", avgTemp: 16.2, iceCreamSales: 800000 },
                    { month: "Jul", avgTemp: 22.8, iceCreamSales: 1254000 },
                    { month: "Sep", avgTemp: 14.5, iceCreamSales: 950000 },
                    { month: "Nov", avgTemp: 8.9, iceCreamSales: 200000 },
                ],
                // Series: Defines which chart type and data to use
                series: [{ type: "bar", xKey: "month", yKey: "iceCreamSales" }],
            },
        };
    },
    methods: {
        initRequest(){
            this.axios.get("https://www.google.com/")
        .then(response => {
            this.datas = response.data
            console.log(response.data);
        })
          .catch(function (error) {
             console.log(error);
        });
        },
        async initRequest2() {
            const response = await fetch("/api/postreq", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "some": "Key",
                    "and": "Another"
                })
            })
            console.log(response)
        }
    },
    created() {
        this.initRequest();
    },
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
  