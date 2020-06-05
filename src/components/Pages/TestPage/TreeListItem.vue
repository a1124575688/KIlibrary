<template>
    <div>{{list.name}}</div>
</template>

<script>
    export default {
        name: "TreeListItem.vue",
        props:['list'],
        data(){
            return{
                itemList:this.list
            }
        },

    }
</script>

<style scoped>
    .tree-box-item-2{
        margin-left: 20px;
    }
</style>