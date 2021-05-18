<template>
   <form action="">
      <h2>Информация для доставки</h2>
      <div class="form-control">
         <label for="">Получатель</label>
         <input type="text" placeholder="ФИО">
      </div>
      <div class="form-control">
         <label for="">Адрес</label>
         <input type="text" placeholder="Город">
         <input type="text" placeholder="Адрес"> 
         <div>     
         <input type="text" placeholder="Страна">
         <input type="text" placeholder="Индекс">
         </div>          
      </div>
      <button>Продолжить</button>
   </form>
</template>

<style scoped>
   form {      
      text-align: left;    
      padding: 0 40.5px;          
   }
   h2 {
      font-weight: 300;
      font-size: 26px;
      line-height: 31px;
      color: #101D94;
   }
   .form-control {
      margin: 15px 0 15px 0;
      display: flex;
      flex-direction: column;      
      align-content: left;
   }
   label {      
      text-align: left;
      font-weight: 300;
      font-size: 16px;
      line-height: 18px;
      color: #101D94;
   }
   input {
      margin-top: 10px;
      background: #FFFFFF;
      border: 1px solid #DEDCDC;
      box-sizing: border-box;
      border-radius: 5px;
      padding: 10px;      
   }   
   input:first-child { 
      margin-right: 20px;     
      max-width: 180px;
   }
   input:last-child {      
      max-width: 120px;
   }
   button {
      background: rgba(25, 165, 39, 0.8);
      border-radius: 5px;
      text-align: left;
      color: #fff;
      padding: 12px 39px;
      border: #fff;
   }   
</style>