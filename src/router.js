import Vue from 'vue'
import Router from 'vue-router'
import Orgs from './views/Orgs.vue'
import CreateOrg from './views/CreateOrg.vue'
import OrgInfo from './views/OrgInfo.vue'
import SignUp from './views/SignUp.vue'
import Login from './views/Login.vue'
import RecoverPassword from './views/RecoverPassword.vue'
import PageNotFound from './views/PageNotFound.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // Organisations
    {
      path: '/organisations/create',
      name: 'create_org',
      component: CreateOrg
    },
    {
      path: '/organisations/:orgId',
      name: 'organisationInformation',
      component: OrgInfo,
      props: true
    },
    // account
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/recover',
      name: 'recover',
      component: RecoverPassword
    },
    {
      path: '/',
      name: '',
      component: Orgs
    },
    {
      path: '*',
      component: PageNotFound
    }
  ]
})
