<template>
   <section>      
      <slot></slot>
   </section>
</template>

<script>
export default {
   methods: {
      // uAdr() {
      //    if()
      // }
   }  
}
</script>

<style scoped>
   section {
      height: 520px;
      width: 402px;
      background-color: #fff;
      margin: 0 auto;
      margin-top: 250px;
      border-radius: 24px;  
      box-shadow: 0px 0px 10px #EBF0FF;    
   }
   div {
      display: flex;
      padding: 20px 0 0 40px;
   }
   button {
      font-size: 12px;
      line-height: 14px;
      border: none;
      outline: none;            
      background-color: #fff;
   }
</style>