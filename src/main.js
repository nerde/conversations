import Vue from 'vue'
import App from './App.vue'
import NotFound from './NotFound.vue'

Vue.config.productionTip = false

const routes = {
  '/': App
}

new Vue({
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
