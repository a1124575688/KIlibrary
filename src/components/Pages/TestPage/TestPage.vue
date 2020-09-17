<template>
    <div class="test-box">
        <CircleRing></CircleRing>
    </div>
</template>

<script>
    /*插入要调试的组件*/

    import CircleRing from '@cc/CanvasAmRing/CircleRing.vue'
    export default {
        name: "TestPage",
        data(){
          return{

          }
        },
        methods:{
        },
        mounted(){

        },
        components:{
            CircleRing
        },
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
        .list-box{
            width: 200px;
            height: 500px;
            /*overflow-y: auto;*/
            border: 1px solid white;
            .list-item{
                height: 100px;
                width: 100%;
                border: 1px solid white;
                /*transform: translateX(20px);*/
            }
        }
        .fade-enter,.fade-leave-to{
            opacity: 0;
            transform: translateX(20px);
        }
        .fade-enter-to,.fade-leave{
           opacity: 1;
            transform: translateX(0);
        }
        .fade-enter-active,.fade-leave-active{
            transition: 5s;
        }

    }
</style>