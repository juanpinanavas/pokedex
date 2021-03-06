import './plugins'
import './styles/app.scss'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  el: '#app',
  mounted() {
    this.$router.push({ name: 'home' }).catch(()=>{})
  }
})
