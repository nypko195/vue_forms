<template>
   <img @click="home" class="thank-user" src="../../img/bg.png" alt="Cпасибо">
   
</template>

<script>
export default {
   methods: {
      home() {
         setTimeout(() => {
      this.$router.push('/');
   }, 3000);
}
      }
   }
</script>

<style scoped>
   .thank-user {      
      margin: 0 auto;      
      padding-top: calc(50% - (93px / 2));      
   }
</style>