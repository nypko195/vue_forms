<template>
   <base-container>
   <the-navigation></the-navigation>
   <router-view></router-view>
      <user-address></user-address>
      <user-payment></user-payment>
      <thank-user></thank-user>
   </base-container>
</template>

<script>
import TheNavigation from './components/TheNavigation.vue';
import BaseContainer from './components/BaseContainer.vue';
import ThankUser from './components/ThankUser.vue';

export default {
   components: {
      BaseContainer,      
      TheNavigation,
      ThankUser,     
   }
}
</script>


<style>
   body {
      max-width: 1280px;
      margin: 0 auto;
      text-align: center;
      background-color: #F7F8FF;
   }
</style>