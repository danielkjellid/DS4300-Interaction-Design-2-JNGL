import Vue from 'vue'
import VueRouter from 'vue-router'

import Explore from '../views/Explore'
import List from '../views/List'
import Position from '../views/Position'
import Favorites from '../views/Favorites'
import Profile from '../views/Profile'
import Place from '../views/Place'

Vue.use(VueRouter)

// application routes and view associated
const routes = [
  {
    path: '/',
    name: 'Explore',
    component: Explore
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/position',
    name: 'Position',
    component: Position
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites
  },
  {
    path: '/profile/:id',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/place/:id',
    name: 'Place',
    component: Place
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
