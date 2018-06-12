import Vue from 'vue'
import Router from 'vue-router'
import PackageRomaing from '@/components/PackageRoaming'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PackageRoaming',
      component: PackageRomaing
    }
  ]
})
