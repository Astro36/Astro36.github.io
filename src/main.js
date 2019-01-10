import './assets/normalize.css';
import './assets/fonts.less';
import './assets/main.less';

import Vue from 'vue';
import MyFooter from './components/MyFooter.vue';
import MyHeader from './components/MyHeader.vue';
import MyNavigation from './components/MyNavigation.vue';
// import './registerServiceWorker';

Vue.config.productionTip = process.env.NODE_ENV !== 'production';

Vue.component('my-footer', MyFooter);
Vue.component('my-header', MyHeader);
Vue.component('my-navigation', MyNavigation);

/* eslint-disable no-new */
new Vue({
  el: '#app',
});
