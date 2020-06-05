<template>
    <div class="test-box">
        <test></test>
    </div>
</template>

<script>
    import test from './TreeList.vue'
    /*插入要调试的组件*/
    export default {
        name: "TestPage",
        components:{test}
    }
</script>

<style scoped lang="scss">
    .test-box{
        color: black;
    }
</style>