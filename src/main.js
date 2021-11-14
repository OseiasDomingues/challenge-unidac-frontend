import Vue from 'vue'
import App from './App.vue'
import VueTheMask from 'vue-the-mask'
import router from './routes/router.js'

Vue.config.productionTip = false

Vue.use(VueTheMask)

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')