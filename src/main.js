import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router.js'
import '@com/common.css'
import {tool} from '@com/tools.js';
import echarts from 'echarts';

Vue.config.productionTip = false;
Vue.prototype.$tool = tool;
Vue.prototype.$echarts = echarts;

//默认本地环境
window.defaultUrl = process.env.BASE_URL;

Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
