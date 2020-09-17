<template>
    <div class="fn-text-box">
        <el-collapse v-model="activeNames" @change="handleChange" class="fn-text-item">
            <el-collapse-item :title="index + 1 + '.' + item.title" :name="index + 1"  v-for="(item,index) in pageData" :key="item.name">
                <pre class="fn-code-show">{{item.content}}</pre>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
    import pageData from '@com/createData'
    export default {
        name: "FnText",
        created(){

        },
        data(){
            return{
                pageData:pageData.fnTextPageData,
                activeNames: ['1']
            }
        },
        methods:{
            handleChange(val) {
                console.log(val)
            },
        }
    }
</script>

<style scoped lang="scss">
    .fn-text-box{
        height: 900px;
        overflow-y: auto;
        .fn-text-item{
            margin-top: 20px;
            .fn-text{
                font-size: 22px;
                color: black;
                font-weight: bold;
            }
            .fn-code-show{
                font-size: 20px;
                color: black;
                padding: 20px;
                margin-top: 10px;
                border: 1px solid #ccc;
                background-color: #f5f5f5;
            }
        }
    }
</style>