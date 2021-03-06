import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import vueCountryRegionSelect from 'vue-country-region-select'

Vue.use(vueCountryRegionSelect)

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
