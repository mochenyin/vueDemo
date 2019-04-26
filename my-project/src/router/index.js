import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import World from '@/components/World'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: 'hello'
  },
  {
    path: '/hello',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/world',
    name: 'World',
    component: World
  }]
export default new Router({
  routes
})
