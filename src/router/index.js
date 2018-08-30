import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Newslist from '../components/news/newslist'
import Newsdetail from '../components/news/newsdetail'
import Piclist from '../components/picShare/piclist'
import Pic from '../components/picShare/pic'
import Goodslist from '../components/goods/goodslist'
import Goodsdetail from '../components/goods/goodsdetail'
import Map from '../components/map/cmap'
import Weather from '../components/map/weather'
import Shopcart from '../components/shop/shopCart'
import Bannerdetail from '../components/banner/bannerdetail'
import My from '../components/common/my'

Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      redirect: {name: 'index'}
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/bannerdetail/:id',
      component: Bannerdetail
    },
    {
      path: '/news/list',
      component: Newslist
    },
    {
      path: '/news/detail',
      name: 'newsdetail',
      component: Newsdetail
    },
    {
      path: '/picshare/piclist',
      component: Piclist
    },
    {
      path: '/picshare/pic',
      component: Pic
    },
    {
      path: '/goods/goodslist',
      component: Goodslist
    },
    {
      path: '/goods/goodsdetail',
      name: 'goodsdetail',
      component: Goodsdetail
    },
    {
      path: '/map',
      component: Map
    },
    {
      path: '/weather',
      component: Weather
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component: Shopcart
    },
    {
      path: '/my',
      component: My
    }
  ]
})
