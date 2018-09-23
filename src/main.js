import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './App.vue'
import Data from './components/Data.vue'

const routes =[
    // this is a querry string
    {path:'/data/:type',component:Data}

]

const router = new VueRouter ({
    routes
})


new Vue({
     el:'#app',
     router, 
     render: h=> h(App)
 })