import Vue from 'vue'
import App from './App'
import store from  './store'
import uView from "uview-ui"

Vue.use(uView);

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount() // 为了兼容小程序及app端必须这样写才有效果
