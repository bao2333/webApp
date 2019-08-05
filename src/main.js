import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './plugins/element.js'
import './static/css/reset.css'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    next()
})



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
