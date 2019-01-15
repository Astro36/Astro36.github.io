import './styles/normalize.css';
import './styles/card.less';
import './styles/container.less';
import './styles/fonts.less';
import './styles/footer.less';
import './styles/highlighter.less';
import './styles/list.less';
import './styles/main.less';
import './styles/markdown.less';

import Vue from 'vue';
import TheHeader from './components/TheHeader.vue';

// import './registerServiceWorker';

const globals = {
  url: 'https://Astro36.github.io',
  title: 'Memory Star',
  author: {
    name: 'Seungjae Park',
    avatar: 'https://github.com/Astro36.png',
    email: 'astr36@naver.com',
    github: 'https://github.com/Astro36',
  },
};

Object.assign(Vue.prototype, Object.entries(globals)
  .reduce((accumulator, [key, value]) => {
    accumulator[`$${key}`] = value;
    return accumulator;
  }, {}));

Vue.config.productionTip = process.env.NODE_ENV !== 'production';

Vue.component('the-header', TheHeader);

/* eslint-disable no-new */
new Vue({
  el: '#app',
});
