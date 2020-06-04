<template>
    <div class="component-box">
        <div class="component-box-item">
            <div class="component-box-item-title">进度圆环<a :download="downloadUrl + 'ComponentFile/InstrumentRing.vue'" :href="downloadUrl + 'ComponentFile/InstrumentRing.vue'">组件下载</a></div>
            <div class="component-box-item-content">
                <InstrumentRing></InstrumentRing>
            </div>
        </div>
        <div class="component-box-item">
            <div class="component-box-item-title">动态排序<a :download="downloadUrl + 'ComponentFile/DynamicRank.vue'" :href="downloadUrl + 'ComponentFile/DynamicRank.vue'">组件下载</a></div>
            <div class="component-box-item-content">
                <DynamicRank></DynamicRank>
            </div>
        </div>
    </div>
</template>

<script>
    import InstrumentRing from '@cc/InstrumentRing/InstrumentRing.vue'
    import DynamicRank from '@cc/DynamicRank/DynamicRank.vue'
    export default {
        name: "ComponentBox",
        data(){
            return{
                downloadUrl:window.defaultUrl
            }
        },
        mounted(){

        },
        components:{
            InstrumentRing,
            DynamicRank
        }
    }
</script>

<style scoped lang="scss">
    .component-box{
        width: 100%;
        height: 810px;
        overflow-y: auto;
        .component-box-item{
            background: #1b2739;
            margin-right: 30px;
            margin-top: 20px;
            .component-box-item-title{
                font-size: 24px;
                height: 40px;
                line-height: 40px;
                background: white;
                color: black;
                a{
                    color: cornflowerblue;
                    font-size: 18px;
                    margin-left: 30px;
                }
            }
            .component-box-item-content{

            }
        }
    }
</style>