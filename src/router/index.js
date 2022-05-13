import Vue from 'vue'
import VueRouter from 'vue-router'
import landingPage from '../views/landingpage.vue'
import healthyArticle from '../views/healthyarticle.vue'
import healthyArticlesDetail from '../views/healthyarticledetail.vue'
import obatVitamin from '../views/obat.vue'
import obatvitaminDetail from '../views/obatdetail.vue'
import statistikCovid from '../views/statcovid.vue'
import kalkulatorBMI from '../views/kalkulatorbmi.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landingPage',
    component: landingPage
  },
  {
    path: '/healthyarticles',
    name: 'healthyArticles',
    component: healthyArticle,
  },
  {
    path: '/healthyarticles/detailtopic/:index',
    name: 'healthyArticlesDetail',
    component: healthyArticlesDetail,
  },
  {
    path: '/obatvitamin',
    name: 'obatVitamin',
    component: obatVitamin,
  },
  {
    path: '/obatvitamin/detailobat/:index',
    name: 'obatvitaminDetail',
    component: obatvitaminDetail,
  },
  {
    path: '/statistikcovid19id',
    name: 'statistikCovid',
    component: statistikCovid,
  },
  {
    path: '/kalkulatorBMI',
    name: 'kalkulatorBMI',
    component: kalkulatorBMI,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
