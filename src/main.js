import Vue from 'vue'
import App from './App.vue'

import './assets/styles/global.styl';

Vue.config.productionTip = false

const root = document.createElement('div');
root.setAttribute('id', 'myApp');
document.body.appendChild(root);

new Vue({
  render: h => h(App)
}).$mount(root)
