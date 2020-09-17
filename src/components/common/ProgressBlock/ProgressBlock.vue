<template>
    <div class="progress-block-box" :class="{'rotate-style':isRotate}">
        <div class="progress-block-item" v-for="(i,key) in leftDistance" :key="key" :style="getStyle">
            <div class="progress-block-percent" :style="{left:i + '%',background:colorArray[key]}"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProgressBlock",
        data(){
            return{
                leftDistance:[],
            }
        },
        props:{
            percent:{
                default:60
            },
            isRotate:{
                default:false
            },
            /*1C8DFF,2C9BFF,3DA9FF,4EB8FF,5dc4ff*/
            colorArray:{
                default:['#1C8DFF','#2C9BFF','#3DA9FF','#4EB8FF','#5dc4ff']
            }
        },
        created(){
            this.formattingData()
        },
        methods:{
            getStyle(){

            },
            formattingData(){
                const ratio = 100/this.colorArray.length; //每一个所占比例
                let remainder = this.percent % ratio; //余数
                let int = parseInt(this.percent / ratio); //个数

                for(let item of this.colorArray){
                    this.leftDistance.push(-100)
                }

                if(this.percent >= 100){
                    this.leftDistance = this.leftDistance.map(()=>{
                        return 0
                    })
                }else if(this.percent < ratio){
                    this.leftDistance[0] = -100 + (remainder/ratio * 100)
                }else {
                    for(let i = 0 ; i < int ;i ++){
                        this.leftDistance[i] = 0;
                        this.leftDistance[int] = -100 + (remainder/ratio * 100)
                    }
                }

            }
        }
    }
</script>

<style scoped lang="scss">
    .rotate-style{
        transform: rotate(180deg);
    }
    .progress-block-box{
        display: flex;
        align-items: center;
        .progress-block-item{
            width:13px;
            height:32px;
            border-radius:6px;
            margin-right: 10px;
            background: rgb(66,74,85);
            position: relative;
            overflow: hidden;
            .progress-block-percent{
                position: absolute;
                width: 100%;
                height: 100%;
                left: -100%;
                top: 0;
                background:rgba(26, 139, 255, 1);
            }
        }
    }
</style>