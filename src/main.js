import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material'
import VueRouter from 'vue-router'
import Routes from './routes'


Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueMaterial)

const router =new VueRouter({
  routes:Routes
})

new Vue({
  render: h => h(App),
  router:router,
}).$mount('#app')
