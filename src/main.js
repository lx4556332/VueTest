// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/global.css'
import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css
import axios from 'axios'
import {Message} from 'element-ui' //导入弹框提示组件
axios.defaults.baseURL='http://localhost:5000/api'

axios.interceptors.request.use(config=>{
   console.log(config);
   config.headers.Authorization=window.sessionStorage.getItem('token')
   return config;
}) 
Vue.prototype.$http=axios
Vue.use(ElementUI) //使用elementUI
Vue.prototype.$message=Message
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
