<template>
   <form @submit.prevent="sumbitForm">
      <h2>Оплата</h2>
      <div class="form-control payment__user"
      :class="{invalid: userPayValidation === 'invalid'}">
         <label for="user-pay">Имя на карте</label>
         <input type="text"
         placeholder="Konstantin Ivanov"
         name="user-pay"
         id="user-pay"
         v-model="userPay"
         @blur="payValidation">
      </div>
      <div class="form-control payment__card"
      :class="{invalid: userCardValidation === 'invalid'}">
         <label for="user-card">Номер карты</label>
         <input type="nubmer"
         placeholder="ХХХХ ХХХХ ХХХХ ХХХХ"
         name="user-card"
         id="user-card"
         v-model="userCard"
         @blur="cardValidation">         
      </div>
      <div class="payment__info"      >
         <div class="form-control"
         :class="{invalid: userInfoValidation === 'invalid'}">
            <label for="user-date">Срок</label>
            <input type="number"
            placeholder="MM/YY"
            name="user-date"
            id="user-date"
            v-model="userDate"
            @blur="infoValidation">
         </div>
         <div class="form-control"
         :class="{invalid: userInfoValidation === 'invalid'}">
            <label for="user-cvv">CVV</label>
            <input type="number"
            name="user-cvv"
            id="user-cvv"
            v-model="userCvv"
            @blur="infoValidation">
         </div>
      </div>
      <button class="payment__btn">Оплатить</button>
   </form>
</template>

<script>
export default {
   data() {
      return {
         userPay: '',
         userPayValidation: 'pending',
         userCard: '',
         userCardValidation: 'pending',
         userDate: '',
         userCvv: '',
         userInfoValidation: 'pending',
      }
   },
   methods: {      
      payValidation() {
         if (this.userPay === '') {
            this.userPayValidation = 'invalid';
         } else {
            this.userPayValidation ='valid';
         }
      },
      cardValidation() {
         if(this.userCard === '') {
            this.userCardValidation = 'invalid';
         } else {
            this.userCardValidation = 'valid';
         }
      },
      infoValidation() {
         if(this.userDate == '' || this.userCvv == '') {
            this.userInfoValidation = 'invalid';
         } else {
            this.userInfoValidation = 'valid';
         }
      }
   }
}
</script>

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
   .payment__info .form-control input {
      width: 95px;      
   } 
   .payment__info .form-control:last-child {
      margin-left: 30px;   
   }   
   .payment__btn {
      background: rgba(25, 165, 39, 0.8);
      border-radius: 5px;
      text-align: left;
      color: #fff;
      padding: 12px 39px;
      border: #fff;
   }
   .payment__info {
      display: flex;
      flex-direction: row;            
   }
   .form-control.invalid input {
      border: 2px solid red;
   } 
</style>