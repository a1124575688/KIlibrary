<template>
    <div class="test-box">
        <div @click="btnEvent($event)">按钮</div>
        <div class="wd" :class="{'close-pop':isClose}" :style="{left:distanceX,top:distanceY}">
        </div>
    </div>
</template>

<script>
    /*插入要调试的组件*/

    export default {
        name: "TestPage",
        data(){
          return{
              isClose:false,
              distanceX:'50%',
              distanceY:'50%'
          }
        },
        methods:{
            btnEvent(e){
                this.isClose = !this.isClose;
                if(this.isClose){
                    this.distanceX = e.clientX + 'px';
                    this.distanceY = e.clientY + 'px';
                }else {
                    this.distanceX = '50%';
                    this.distanceY = '50%';
                }


            }
        },
        mounted(){

        },
        components:{},
    }
</script>

<style scoped lang="scss">
    .test-box{
        width: 150px;
        height: 100%;
        padding-left: 20px;
        padding-top: 20px;
        *{
            color: black;
        }
        div{
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
        }
        .wd{
            width: 500px;
            height: 500px;
            border: 3px solid crimson;
            position: absolute;
            left: 50%;
            top: 50%;
            transition: .5s;
            overflow: hidden;
            white-space: nowrap;
        }
        .close-pop{
            transform: scale(0);
            width: 0;
            height: 0;
        }
    }
</style>