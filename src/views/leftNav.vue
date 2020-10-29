<template>
    <div class="left-nav">
        <el-menu
                default-active="chart"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                :router="true"
        >
            <el-menu-item index="component">
                <i class="el-icon-setting"></i>
                <span slot="title">组件库</span>
            </el-menu-item>
            <el-menu-item index="testPage">
                <i class="el-icon-edit-outline"></i>
                <span slot="title">页面调试</span>
            </el-menu-item>
            <el-menu-item index="mapBox">
                <i class="el-icon-map-location"></i>
                <span slot="title">mapBox地图</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script>
    export default {
        name: "leftNav",
        methods: {
            handleOpen(key, keyPath) {
                console.log(key,keyPath)
            },
            handleClose(key, keyPath) {
                console.log(key,keyPath)
            }
        },
        components:{}
    }
</script>
<style scoped>
   .left-nav{
       width: 240px;
       height: 1080px;
    }
    .left-nav/deep/.el-menu{
        border-right: unset !important;
    }
</style>