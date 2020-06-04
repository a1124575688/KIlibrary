<template>
    <div class="left-nav">
        <el-menu
                default-active="chart"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                :router="true"
                active-text-color="#ffd04b">
            <el-menu-item index="chart">
                <i class="el-icon-s-tools"></i>
                <span slot="title">图表库</span>
            </el-menu-item>
            <el-menu-item index="component">
                <i class="el-icon-setting"></i>
                <span slot="title">组件库</span>
            </el-menu-item>
            <el-menu-item index="testPage">
                <i class="el-icon-document"></i>
                <span slot="title">页面调试(本地使用)</span>
            </el-menu-item>
            <!--<el-submenu index="2">-->
                <!--<template slot="title">-->
                    <!--<i class="el-icon-location"></i>-->
                    <!--<span>导航一</span>-->
                <!--</template>-->
                <!--<el-menu-item-group>-->
                    <!--<template slot="title">分组一</template>-->
                    <!--<el-menu-item index="1-1">选项1</el-menu-item>-->
                    <!--<el-menu-item index="1-2">选项2</el-menu-item>-->
                <!--</el-menu-item-group>-->
                <!--<el-menu-item-group title="分组2">-->
                    <!--<el-menu-item index="1-3">选项3</el-menu-item>-->
                <!--</el-menu-item-group>-->
                <!--<el-submenu index="1-4">-->
                    <!--<template slot="title">选项4</template>-->
                    <!--<el-menu-item index="1-4-1">选项1</el-menu-item>-->
                <!--</el-submenu>-->
            <!--</el-submenu>-->
            <!--<el-menu-item index="3" disabled>-->
                <!--<i class="el-icon-document"></i>-->
                <!--<span slot="title">导航三</span>-->
            <!--</el-menu-item>-->
            <!--<el-menu-item index="4">-->
                <!--<i class="el-icon-setting"></i>-->
                <!--<span slot="title">导航四</span>-->
            <!--</el-menu-item>-->
        </el-menu>
    </div>
</template>
<script>
    export default {
        name: "leftNav",
        methods: {
            handleOpen(key, keyPath) {

            },
            handleClose(key, keyPath) {

            }
        },
        components:{}
    }
</script>
<style scoped>
   .left-nav{
       width: 240px;
       height: 1080px;
       background: #545c64;
    }
    .left-nav/deep/.el-menu{
        border-right: unset !important;
    }
</style>