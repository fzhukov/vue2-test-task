import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.directive('visible', (el, binding) => {
  // eslint-disable-next-line no-param-reassign
  el.style.visibility = binding.value ? 'visible' : 'hidden';
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
