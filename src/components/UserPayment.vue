<template>
   <form action="">
      <h2>Оплата</h2>
      <div class="form-control">
         <label for="">Имя на карте</label>
         <input type="text" placeholder="Konstantin Ivanov">
      </div>
      <div class="form-control">
         <label for="">Номер карты</label>
         <input type="text" placeholder="ХХХХ ХХХХ ХХХХ ХХХХ">         
      </div>
      <div class="string">
         <div class="form-control">
            <label for="">Срок</label>
            <input type="text" placeholder="MM/YY">
         </div>
         <div class="form-control">
            <label for="">CVV</label>
            <input type="text">
         </div>
      </div>
      <button>Оплатить</button>
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
   div {
      margin: 10px 0 10px 0;
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
   .string .form-control input {
      width: 95px;      
   } 
   .string .form-control:last-child {
      margin-left: 30px;   
   }   
   button {
      background: rgba(25, 165, 39, 0.8);
      border-radius: 5px;
      text-align: left;
      color: #fff;
      padding: 12px 39px;
      border: #fff;
   }
   .string {
      display: flex;
      flex-direction: row;
      
   }

</style>