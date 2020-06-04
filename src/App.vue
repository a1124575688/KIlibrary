<template>
  <div id="app">
    <leftNav></leftNav>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>

import leftNav from '@views/leftNav.vue'
export default {
  name: 'App',
  components: {
    leftNav
  }
}
</script>

<style>
  #app{
    width: 1920px;
    height: 1080px;
    display: flex;
}
  .main{
    flex: 1;
    padding: 40px;
  }
</style>
