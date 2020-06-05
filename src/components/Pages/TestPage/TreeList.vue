<template>
    <div class="tree-box">
        <TreeListItem :list="listData"></TreeListItem>
    </div>
</template>

<script>
    import TreeListItem from './TreeListItem.vue'
    export default {
        name: "TreeList",
        data(){
            return{
                listData:[{
                    name:'第一级',
                    children:[
                        {
                            name:'第一级-1',
                            children:false
                        },
                        {
                            name:'第一级-2',
                            children:false
                        },
                        {
                            name:'第一级-3',
                            children:false
                        }
                    ]
                },{
                    name:'第二级',
                    children:[
                        {
                            name:'第二级-1',
                            children:false
                        },
                        {
                            name:'第二级-2',
                            children:false
                        },
                        {
                            name:'第二级-3',
                            children:false
                        }
                    ]
                }]
            }
        },
        components:{TreeListItem}
    }
</script>

<style scoped lang="scss">
    .tree-box{
        background: black;
    }
</style>