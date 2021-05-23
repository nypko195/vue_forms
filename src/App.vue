<template>
   <base-container>
   <the-navigation></the-navigation>
   <router-view></router-view>      
   </base-container>
</template>

<script>
import TheNavigation from './components/TheNavigation.vue';
import BaseContainer from './components/BaseContainer.vue';


export default {
   components: {
      BaseContainer,      
      TheNavigation,     
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