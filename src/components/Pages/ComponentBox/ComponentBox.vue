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
        <div class="component-box-item">
            <div class="component-box-item-title">树结构<a :download="downloadUrl + 'ComponentFile/TreeCp.vue'" :href="downloadUrl + 'ComponentFile/TreeCp.vue'">组件下载</a></div>
            <div class="component-box-item-content">
                <TreeCp :list="treeList"></TreeCp>
            </div>
        </div>
    </div>
</template>

<script>
    import InstrumentRing from '@cc/InstrumentRing/InstrumentRing.vue'
    import DynamicRank from '@cc/DynamicRank/DynamicRank.vue'
    import TreeCp from '@cc/TreeCp/TreeCp.vue'
    export default {
        name: "ComponentBox",
        data(){
            return{
                downloadUrl:window.defaultUrl,
                treeList:{
                    name:'外层盒子',          //名字
                    unfold:true,              //是否展开,默认展开
                    childrenList:[            //子项列表
                        {
                            name:'第一级 一',
                            unfold:false,
                            childrenList:[
                                {
                                    name:'第二级 一',
                                    unfold:true,
                                    childrenList:[
                                        {
                                            name:'第三级 一',
                                            unfold:true,
                                            childrenList:[
                                                {
                                                    name:'第四级 一',
                                                    unfold:true,
                                                    childrenList:[
                                                        {
                                                            name:'第五级 一',
                                                            unfold:true,
                                                            childrenList:[
                                                                {
                                                                    name:'第六级 一',
                                                                    unfold:true,
                                                                    childrenList:[
                                                                        {
                                                                            name:'第七级 一',
                                                                            unfold:true,
                                                                            childrenList:[
                                                                                {
                                                                                    name:'第八级 一',
                                                                                    unfold:true,

                                                                                },
                                                                            ]
                                                                        },
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            name:'第五级 二',
                                                            unfold:true,
                                                        }
                                                    ]
                                                },
                                                {
                                                    name:'第四级 二',
                                                    unfold:true,
                                                }
                                            ]
                                        },
                                        {
                                            name:'第三级 二',
                                            unfold:true,
                                        }
                                    ]
                                },
                                {
                                    name:'第二级 二',
                                    unfold:true,
                                }
                            ]
                        },{
                            name:'第一级 二',
                            unfold:true,
                            childrenList:[
                                {
                                    name:'第二级 一',
                                    unfold:true,
                                    childrenList:[
                                        {
                                            name:'第三级 一',
                                            unfold:true,
                                            childrenList:[
                                                {
                                                    name:'第四级 一',
                                                    unfold:true,
                                                },
                                                {
                                                    name:'第四级 二',
                                                    unfold:true,
                                                }
                                            ]
                                        },
                                        {
                                            name:'第三级 二',
                                            unfold:true,
                                        }
                                    ]
                                },
                                {
                                    name:'第二级 二',
                                    unfold:true,
                                }
                            ]
                        }]
                }
            }
        },
        mounted(){

        },
        components:{
            InstrumentRing,
            DynamicRank,
            TreeCp
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
                padding: 20px;
            }
        }
    }
</style>