import { createRouter, createWebHistory } from 'vue-router';


import UserAddress from '../../components/UserAddress.vue';
import UserPayment from '../../components/UserPayment.vue';
import ThankUser from '../../components/ThankUser.vue';


const router = createRouter({
   routes: [
      { path: '/', component: UserAddress},
      { path: '/payment', component: UserPayment},
      { path: '/thank', component: ThankUser},
   ],
   history: createWebHistory(),
});

export default router;