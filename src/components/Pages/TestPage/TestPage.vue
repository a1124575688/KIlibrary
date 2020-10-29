<template>
    <div class="test-box">
        <TreeCp :list="treeList"></TreeCp>
    </div>
</template>

<script>
    /*插入要调试的组件*/
    import TreeCp from '@cp/TestPage/TreeCp.vue'
    export default {
        name: "TestPage",
        components:{TreeCp},
        data(){
          return{
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
                                      unfold:false,
                                      childrenList:[
                                          {
                                              name:'第四级 一',
                                              unfold:false,
                                              childrenList:[
                                                  {
                                                      name:'第五级 一',
                                                      unfold:false,
                                                      childrenList:[
                                                          {
                                                              name:'第六级 一',
                                                              unfold:false,
                                                              childrenList:[
                                                                  {
                                                                      name:'第七级 一',
                                                                      unfold:false,
                                                                      childrenList:[
                                                                          {
                                                                              name:'第八级 一',
                                                                              unfold:false,

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
        methods:{

        },
        mounted(){

        }
    }
</script>

<style scoped lang="scss">
    .test-box{

    }
</style>