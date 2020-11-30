<template>
  <div id="app">
    <PageHeader></PageHeader>
    <LeftNav></LeftNav>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>

import PageHeader from '@views/PageHeader.vue'
import LeftNav from '@views/LeftNav.vue'
export default {
  name: 'App',
  components: {
    PageHeader,
    LeftNav
  },
  created() {
    console.log('process.env.npm_config_argv',process.env)
  },
}
</script>

<style lang="scss" scoped>
  #app{
    width: 1920px;
    height: 1080px;
    .main{
      width: 1604px;
      margin-left: 300px;
      margin-top: 60px;
    }
}

</style>
