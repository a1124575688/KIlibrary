<template>
    <div>
        <div class="component-box">
            <div class="box-warp">
                <div class="title">
                    <div>圆环</div>
                    <div @click="lookCode('http://note.youdao.com/noteshare?id=a02fabbd76fd3f31c75f45e360aa2422')">(点击查看)</div>
                </div>
                <div class="box">
                    <InstrumentRing></InstrumentRing>
                </div>
            </div>

            <!--<div v-highlight class="code-text">-->
                <!--<pre><code>{{te}}</code></pre>-->
            <!--</div>-->
        </div>
    </div>
</template>

<script>
    import InstrumentRing from '@cc/InstrumentRing/InstrumentRing.vue'
    export default {
        name: "ComponentDom",
        components:{InstrumentRing},
        data(){
            return{

            }
        },
        created() {
            let fs = require('fs');
            let file = fs.readFileSync('src/components/Pages/ComponentDom/ComponentDom.vue', "utf8");
            console.log(file);
        },
        methods:{
            lookCode(url){
                window.open(url)
            }
        }
    }
</script>

<style scoped lang="scss">
    .component-box{
        display: flex;
        .box-warp{
            margin-right: 40px;
            .title{
                display: flex;
                align-items: flex-end;
                text-align: center;
                font-size: 24px;
                font-weight: bold;
                color: white;
                margin-bottom: 20px;
                div:last-child{
                    font-size: 18px;
                    font-weight: normal !important;
                    cursor: pointer;
                    margin-left: 10px;
                }
            }
            .box{
                margin: 0 auto;
            }
        }
    }
</style>