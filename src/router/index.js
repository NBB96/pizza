import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Menu from '../components/Menu'
import Login from '../components/Login'
import Register from '../components/Register'
import Admin from '../components/Admin'
import About from '../components/about/About'
import Contact from '../components/about/Contact'
import History from '../components/about/History'
import Delivery from '../components/about/Delivery'
import OrderingGuide from '../components/about/OrderingGuide'
import Phone from '../components/about/contact/Phone'
import PersonName from '../components/about/contact/PersonName'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', name: "homeLink", components: {
        default: Home,
        'orderingGuide': OrderingGuide,
        'delivery': Delivery,
        'history': History
      }
    },
    { path: '/menu', name: 'menuLink', component: Menu },
    {
      path: '/admin', name: 'adminLink', component: Admin,
      // beforeEnter: (to, from, next) => {
      //   console.log(this)
      //   // if(this.$store.getters.isLogin===true){
      //   //   next()
      //   // }else{
      //   //   alert('请先登陆')
      //   // }
      // }
    },
    { path: '/login', name: 'loginLink', component: Login },
    { path: '/register', name: 'registerLink', component: Register },
    {
      path: '/about', name: 'aboutLink', component: About, redirect: '/contact',
      children: [
        {
          path: '/contact', name: 'contactLink', component: Contact, redirect: '/personname',
          children: [
            { path: '/phone', name: 'phoneNumber', component: Phone },
            { path: '/personname', name: 'personName', component: PersonName }
          ]
        },
        { path: '/history', name: 'historyLink', component: History },
        { path: '/delivery', name: 'deliveryLink', component: Delivery },
        { path: '/orderingGuide', name: 'orderingGuideLink', component: OrderingGuide }
      ]
    },
    { path: '*', redirect: '/' }
  ],
  scrollBehavior(to, from, savedPosition) {
    // return {x:0,y:100}
    // return {selector:'.btn'}
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
