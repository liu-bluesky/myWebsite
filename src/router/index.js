import Vue from 'vue'
import Router from 'vue-router'
import indexs from '../views/index.vue'
import demo from '../demo/demo.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'demo',
      component: demo
    }
  ]
})
