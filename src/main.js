import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import First from './pages/First.vue'
import Second from './pages/Second.vue'

Vue.use(VueRouter)



const router = new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {
      path:'/first',
      name:'first',
      component:First
    },{
      path:'/second',
      name:'second',
      component:Second
    }
  ]
})


/* eslint-disable no-new */
/*
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

const app = new Vue({
  router
}).$mount('#app')
*/
new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app')
