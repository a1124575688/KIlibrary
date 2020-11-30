<template>
    <div class="left-nav">
        <div class="nav-title">目录</div>
        <div class="directory-list">
            <div class="directory-item" v-for="item in directoryList" :key="item.name">
                <div class="item-name" @click="itemEvent(item)">
                    <img :src="require('@image/三角右.png')" :class="{'img-rotate':item.open}">
                    <div>{{item.name}}</div>
                </div>
                <div class="item-child"></div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "leftNav",
        data(){
            return{
                directoryList:[
                    {
                        name:'原型统筹',
                        open:false
                    },
                    {
                        name:'组件查看',
                        open:false
                    }
                ]
            }
        },
        methods: {
            itemEvent(item){
                item.open = !item.open
            }
        },
        components:{

        }
    }
</script>
<style scoped lang="scss">
   .left-nav{
       width: 300px;
       height: 876px;
       background-color: #fafafa;
       margin-top: 60px;
       position: fixed;
       left: 0;
       top: 0;
       .nav-title{
           font-size: 14px;
           font-weight: 500;
           color: #262626;
           margin-top: 30px;
           margin-left: 24px;
           margin-bottom: 30px;
       }
       .directory-list{
           .directory-item{
               cursor: pointer;
               .item-name{
                   display: flex;
                   align-items: center;
                   height: 26px;
                   img{
                       margin: 0 8px;
                       transition: .2s;
                   }
                   .img-rotate{
                       transform: rotate(90deg);
                   }
                   div{
                       font-size: 12px;
                       color: #595959;
                   }
               }
               .item-name:hover{
                   background: #f5f5f5;
               }
           }
       }
    }
</style>