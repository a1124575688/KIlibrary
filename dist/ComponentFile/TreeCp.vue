<template>
    <div class="tree-list" :class="{'no-height':!list.unfold}">
        <div class="tree-list-item" v-for="(item,index) in list.childrenList" :key="index">
            <div class="item-box" @click="listEvent(item)" :class="{'font-bold':item.childrenList}">
                <img :src="require('@image/三角.png')" class="item-icon" :class="{'check-item':item.unfold}" v-if="item.childrenList">
                <div class="item-name">{{item.name}}</div>
            </div>
            <TreeCp :list="item"></TreeCp>
        </div>
    </div>
</template>

<script>
    /**
     * 只是个模板,可根据据悉需求更改
     * */
    import TreeCp from '@cp/TestPage/TreeCp.vue'
    export default {
        name: "TreeCp",
        components:{TreeCp},
        props:{
            list:{
                default(){
                    return {
                        name:'无参数',
                    }
                }
            }
        },
        methods:{
            listEvent(item){
                //当前点击项
                console.log('item',item)
                item.unfold = !item.unfold
            }
        }
    }
</script>

<style scoped lang="scss">
    .tree-list{
        color: rgba(255,255,255,1);
        transition: .5s;
        overflow: hidden;
        .tree-list-item{
            position: relative;
            left: 20px;
            .item-box{
                display: flex;
                align-items: center;
                cursor: pointer;
                .item-icon{
                    transition: .2s;
                    margin-right: 4px;
                }
            }
        }
    }

    .check-item{
        transform: rotate(90deg);
    }
    .no-height{
        height: 0;
    }
    .font-bold{
        font-weight: bold;
        font-size: 18px;
    }

</style>