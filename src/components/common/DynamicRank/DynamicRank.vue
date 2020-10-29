<template>
    <div class="rank-list-box">
        <transition-group  name="flip-list" tag="div">
            <div class="rank-list-item" v-for="(item,index) in rankList" v-bind:key="item.name">
                <div class="name">{{item.name}}</div>
                <XbProgressBar width="300" height="40" :percent="item.value" :color="index > 2 ? 'rgba(47,102,185,1)':'rgba(249,219,60,1)'"></XbProgressBar>
                <div class="value">{{parseInt(item.value)}}</div>
            </div>
        </transition-group>

        <div class="btn" @click="rankEvent" v-show="isBtn">开始</div>
    </div>
</template>

<script>
    import XbProgressBar from '@cc/XbProgressBar/XbProgressBar.vue'
    export default {
        name: "DynamicRank",
        data(){
            return{
                rankList:[
                    {
                    name:'成都',
                    value:10
                },{
                    name:'内江',
                    value:10
                },{
                    name:'自贡',
                    value:10
                },{
                    name:'资阳',
                    value:10
                },{
                    name:'宜宾',
                    value:10
                },{
                    name:'南充',
                    value:10
                },{
                    name:'甘孜',
                    value:10
                },{
                    name:'阿坝',
                    value:10
                },{
                    name:'广元',
                    value:10
                }],
                rankListRest:[
                    {
                        name:'成都',
                        value:10
                    },{
                        name:'内江',
                        value:10
                    },{
                        name:'自贡',
                        value:10
                    },{
                        name:'资阳',
                        value:10
                    },{
                        name:'宜宾',
                        value:10
                    },{
                        name:'南充',
                        value:10
                    },{
                        name:'甘孜',
                        value:10
                    },{
                        name:'阿坝',
                        value:10
                    },{
                        name:'广元',
                        value:10
                    }
                ],
                isBtn:true
            }
        },
        mounted(){

        },
        methods:{
            rankEvent(){
                let that = this;
                this.isBtn = false;
                that.arrayFormatting();
                let timing = 0;
                window.requestAnimationFrame(handler);
                function handler() {
                    timing ++;
                    that.arrayFormatting();
                    if(timing <= 1500){
                        window.requestAnimationFrame(handler);
                    }else {
                        // that.rankList = that.rankListRest;
                        that.isBtn = true
                    }
                }

            },
            arrayFormatting(){
                this.rankList = this.rankList.map(item =>{
                    return {
                        name:item.name,
                        value:item.value + this.$tool.random(1,10) * 0.01
                    }
                });
                this.rankList.sort(compare('value'));

                function compare(property){
                    return function(a,b){
                        let value1 = a[property];
                        let value2 = b[property];
                        return value2 - value1;
                    }
                }
            }
        },
        components:{
            XbProgressBar
        }
    }
</script>

<style scoped lang="scss">
    .rank-list-box{
        height: 640px;
        padding-top: 20px;
        padding-left: 20px;
        .rank-list-item{
            margin-top: 20px;
            display: flex;
            align-items: center;
            color: white !important;
            font-weight: bold;
            font-size: 24px;
            .name{
                margin-right: 20px;
            }
            .value{
                margin-left: 20px;
            }
        }
        .btn{
            font-size: 26px;
            font-weight: bold;
            margin-top: 20px;
            cursor: pointer;
            color: chartreuse;
        }
    }
    .flip-list-move{
        transition: transform 1s;
    }


</style>