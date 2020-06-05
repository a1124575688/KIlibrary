<template>
    <div class="fn-text-box">
        <div class="fn-text-item" v-for="(item,index) in pageData" :key="item.name">
            <div class="fn-text">{{index + 1}}.{{item.title}}</div>
            <pre class="fn-code-show">{{item.content}}</pre>
        </div>
    </div>
</template>

<script>
    import pageData from '@com/createData'
    export default {
        name: "FnText",
        created(){
            console.log('pageData',pageData)
        },
        data(){
            return{
                pageData:pageData.fnTextPageData
            }
        }
    }
</script>

<style scoped lang="scss">
    .fn-text-box{
        height: 900px;
        overflow-y: auto;
        .fn-text-item{
            margin-top: 10px;
            .fn-text{
                font-size: 22px;
                color: black;
                font-weight: bold;
            }
            .fn-code-show{
                font-size: 20px;
                color: black;
                padding-left: 20px;
            }
        }
    }
</style>