import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router.js'
import store from './store.js'
import '@com/common.css'
import {tool} from '@com/tools.js';
import echarts from 'echarts';
import Hljs from 'highlight.js';
import 'highlight.js/styles/monokai.css'; // 代码高亮风格，选择更多风格需导入 node_modules/hightlight.js/styles/ 目录下其它css文件

let Highlight = {};
// 自定义插件
Highlight.install = function (Vue) {
  // 自定义指令 v-highlight
  Vue.directive('highlight', {
    // 被绑定元素插入父节点时调用
    inserted: function(el) {
      let blocks = el.querySelectorAll('pre code');
      for (let i = 0; i < blocks.length; i++) {
        Hljs.highlightBlock(blocks[i]);
      }
    },
    // 指令所在组件的 VNode 及其子 VNode 全部更新后调用
    componentUpdated: function(el) {
      let blocks = el.querySelectorAll('pre code');
      for (let i = 0; i < blocks.length; i++) {
        Hljs.highlightBlock(blocks[i]);
      }
    }
  })
};
Vue.use(Highlight);

Vue.config.productionTip = false;
Vue.prototype.$tool = tool;
Vue.prototype.$echarts = echarts;

//默认本地环境
window.defaultUrl = process.env.BASE_URL;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
