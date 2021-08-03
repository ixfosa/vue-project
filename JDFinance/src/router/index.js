import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/home/index.vue"
import Money from "@/components/money/index.vue"
import Ious from "@/components/ious/index.vue"
import Raise from "@/components/raise/index.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/money',
      name: 'money',
      component: Money
    },
    {
      path: '/ious',
      name: 'ious',
      component: Ious
    },
    {
      path: '/raise',
      name: 'raise',
      component: Raise
    },
  ]
})
