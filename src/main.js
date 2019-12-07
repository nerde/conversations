import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import NotFound from './NotFound.vue'

import routes from './routes'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

const app = new Vue({
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent() {
      return routes[this.currentRoute] || NotFound
    }
  },
  render(h) { return h(this.ViewComponent) }
}).$mount('#app')

window.addEventListener('popstate', () => { app.currentRoute = window.location.pathname })
