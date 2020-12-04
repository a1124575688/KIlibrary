<template>
    <div class="left-nav">
        <div class="nav-title">目录</div>
        <div class="directory-list">
            <div class="directory-item" v-for="item in directoryList" :key="item.name">
                <div class="item-name" @click="itemEvent(item)">
                    <img :src="require('@image/三角右.png')" :class="{'img-rotate':item.open}">
                    <div>{{item.name}}</div>
                </div>
                <div class="item-child" v-show="item.child.open">
                    <router-link v-for="key in item.child.list" :key="key.name" :to="{path:key.path}" tag="div" @click.native="setName(key.name)">{{key.name}}</router-link>
                </div>
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
                        name:'小步创想组件',
                        open:true,
                        child:{
                            open:true,
                            list:[{
                                name:'开发常用组件',
                                path:'/svgRing'
                            },{
                                name:'各种账号2',
                                path:'/mapBox'
                            }]
                        }
                    },
                    {
                        name:'组件查看',
                        open:false,
                        child:{
                            open:false,
                            list:[{
                                name:'各种账号'
                            },{
                                name:'各种账号2'
                            }]
                        }
                    }
                ]
            }
        },
        methods: {
            itemEvent(item){
                item.open = !item.open;
                item.child.open = !item.child.open
                this.$store.commit('setHeadNavText',{
                    first:item.name
                })
            },
            setName(name){
                this.$store.commit('setHeadNavText',{
                    second:name
                })
            }
        },
        components:{

        }
    }
</script>
<style scoped lang="scss">
    .router-link-active{
        color: #25b864 !important;
    }
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
               .item-child{
                   div{
                       font-size: 12px;
                       color: #595959;
                       padding-left: 48px;
                       margin-top: 10px;
                       height: 26px;
                       line-height: 26px;
                   }
                   div:hover{
                       background: #f5f5f5;
                       color: rgba(89,89,89,.8);
                   }
               }
           }
       }
    }
</style>