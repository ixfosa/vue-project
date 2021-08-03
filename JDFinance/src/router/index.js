import Vue from 'vue'
import Router from 'vue-router'
import Index from "@/components/home/index.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      components: Index
    }
  ]
})
