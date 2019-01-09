import './assets/normalize.css';
import './assets/fonts.less';

import Vue from 'vue';
import MyHeader from './components/MyHeader.vue';
import MyFooter from './components/MyFooter.vue';
// import './registerServiceWorker';

// Vue.use(MyFooter);

Vue.config.productionTip = process.env.NODE_ENV !== 'production';

/* eslint-disable no-new */
// new Vue({
//   components: {
//     'my-header': MyHeader,
//     // 'my-footer': MyFooter,
//   },
// }).$mount('#app');
// new Vue({
//   el: 'my-header',
//   render: h => h(MyHeader),
// });

// new Vue({
//   el: 'my-footer',
//   render: h => h(MyFooter),
// });

// Vue.component('my-footer', {
//   render: h => h(MyFooter),
// });

Vue.component('my-header', MyHeader);

new Vue({
  el: '#app',
  // components: { MyHeader },
});

// new Vue({
  // render: h => h({
  //   name: 'app',
  //   components: { MyHeader, MyFooter },
  //   // components: {
  //     // 'my-header': MyHeader,
  //     // 'my-footer': MyFooter,
  //   // },
  // }),
  // render: h => h(MyHeader, MyFooter),
  // template: '',
  // components: { MyHeader, MyFooter },
// }).$mount('#app');
