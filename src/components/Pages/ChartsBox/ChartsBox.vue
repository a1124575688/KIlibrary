<template>
    <div class="charts-box">
        <div class="charts-box-item" v-for="(item,index) in chartList" :key="index">
            <div class="chart-title">{{item.title}}</div>
            <div class="chart-dom" :id="item.id"></div>
        </div>
    </div>
</template>

<script>
    import chartList from './InitCharts.js'
    export default {
        name: "ChartsBox",
        data(){
            return{
                chartList:chartList
            }
        },
        mounted() {
            for(let item of this.chartList){
                let chart = this.$echarts.init(document.getElementById(item.id))
                chart.setOption(item.options)
            }

        }
    }
</script>

<style scoped lang="scss">
    .charts-box{
        width: 100%;
        height: 1000px;
        display: flex;
        flex-wrap: wrap;
        .charts-box-item{
            width: 500px;
            background: #1b2739;
            height: 400px;
            margin-right: 30px;
            border: 1px solid rgba(255,255,255,0.8);
            .chart-title{
                font-size: 18px;
                height: 40px;
                line-height: 40px;
                padding-left: 22px;
                background: white;
                color: black;
            }
            .chart-dom{
                width: 100%;
                height: 358px;
            }
        }
    }



</style>