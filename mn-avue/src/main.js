/*
 * @Author: mn
 * @Date: 2020-11-23 17:31:05
 * @Description: main入口
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import ElementUI from 'element-ui';
import "@assets/style/element-variables.scss"
Vue.use(ElementUI);

// Avue组件库
import Avue from './components/avuex/index'
Vue.use(Avue);
//引入样式
import '@/assets/style/reset.scss'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
