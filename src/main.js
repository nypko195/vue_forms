import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import UserAddress from './components/UserAddress.vue';
import UserPayment from './components/UserPayment.vue';

import App from './App.vue';

const router = createRouter({
   routes: [
      { path: '/address', component: UserAddress},
      { path: '/payment', component: UserPayment},
   ],
   history: createWebHistory(),
});

const app = createApp(App);

app.use(router);

app.mount('#app');


