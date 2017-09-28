import Vue from 'vue'
import Router from 'vue-router'
import kfzptMain from '@/components/kfzptMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'kfzptMain',
      component: kfzptMain
    }
  ]
})
