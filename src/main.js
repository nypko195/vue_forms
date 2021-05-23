import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import UserAddress from './components/UserAddress.vue';
import UserPayment from './components/UserPayment.vue';
import ThankUser from './components/ThankUser.vue';

import App from './App.vue';

const router = createRouter({
   routes: [
      { path: '/', component: UserAddress},
      { path: '/payment', component: UserPayment},
      { path: '/thank', component: ThankUser},
   ],
   history: createWebHistory(),
});

const app = createApp(App);

app.use(router);

app.mount('#app');


