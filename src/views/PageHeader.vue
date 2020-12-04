<template>
    <div class="page-header">
        <img :src="require('@image/1606899329_894881.png')" width="52">
        <div class="nav-title">
            <div>个人中心</div>
            <div class="bias-line">/</div>
            <div>{{getNavText.first}}</div>
            <div class="bias-line">/</div>
            <div style="font-weight: bold">{{getNavText.second}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PageHeader",
        computed:{
            getNavText(){
                return this.$store.state.headNavText
            }
        }
    }
</script>

<style scoped lang="scss">
    .page-header{
        width: 100%;
        height: 60px;
        box-shadow: 0 2px 5px rgba(0,0,0,.08);
        font-size: 14px;
        padding-left: 24px;
        display: flex;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 2;
        background: white;
        .nav-title{
            display: flex;
            align-items: center;
            margin-left: 30px;
            div{
                font-size: 14px;
                color: #595959;
                cursor: pointer;
            }
            div:hover{
                color: #8c8c8c;
            }
            .bias-line{
                margin: 0 5px;
            }
        }
    }
</style>