<template>
   <form   
   class="delivery" 
   @submit.prevent="sumbitForm('Форма не готова', $event)">
      <h2 class="delivery__title">Информация для доставки</h2>
      <div class="form-control delivery__user"
      :class="{invalidName}">
         <label for="user-name"
         class="delivery__user-lbl dlvr-lbl">Получатель</label>
         <input
         class="delivery__user-inp dlvr-inp"
         id="user-name"
         name="user-name"
         v-model.trim="userName"
         @blur="validateInput"
         type="text" placeholder="ФИО">
      </div>
      <div class="form-control delivery__address">
         <label for="user-address"
         class="delivery__address-lbl dlvr-lbl">Адрес</label>
         <input type="text"         
         class="delivery__address-inp dlvr-inp"
         :class="{invalidAddressCity}"
         name="sity"
         v-model="userSity"
         placeholder="Город"
         @blur="validateInputAddressCity">
         <input type="text"
         class="delivery__address-inp dlvr-inp"
         :class="{invalidAddress}"
         name="address"
         v-model="userAddress"
         placeholder="Адрес"
         @blur="validateInputAddress"> 
         <div>     
         <input type="text"
         class="delivery__address-inp dlvr-inp"
         :class="{invalidAddressCountry}"
         name="country"
         v-model="userCountry"
         placeholder="Страна"
         @blur="validateInputAddressCountry">
         <input type="text"
         class="delivery__address-inp dlvr-inp"
         :class="{invalidAddressIndex}"
         name="index"
         v-model="userIndex"
         placeholder="Индекс"
         @blur="validateInputAddressIndex">
         </div>          
      </div>
      <button 
      class="delivery__btn" 
      @click="transitionPayment"
      :disabled="formValidation"> Продолжить</button>     
   </form >
</template>

<script>
export default {
   data() {
      return {                      
         userName: '',
         userNameValidation: 'pending',         
         userSity: '',
         userAddress: '',
         userCountry: '',
         userIndex: '',         
         userAddressValidCity: 'pending',  
         userAddressValid: 'pending',
         userAddressValidCountry: 'pending',  
         userAddressValidIndex: 'pending',          
      }
   },
   methods: { 
      //событие перехода к оплате
      transitionPayment() {
         this.$router.push('/payment');
      },
      //проверка именни
      validateInput() {         
         if(this.userName === '') {
            this.userNameValidation = 'invalid';
         } else {
            this.userNameValidation = 'valid'           
         }
      },
      //проверка города
      validateInputAddressCity() {
         if(this.userSity == '') {
            this.userAddressValidCity = 'invalid';
         } else {
            this.userAddressValidCity = 'valid';
         }
      },  
      //проверка адреса
      validateInputAddress() {
         if(this.userAddress == '') {
            this.userAddressValid = 'invalid';
         } else {
            this.userAddressValid = 'valid';
         }
      },
      //проверка страны
      validateInputAddressCountry(){
         if(this.userCountry == '') {
            this.userAddressValidCountry = 'invalid';
         } else {
            this.userAddressValidCountry = 'valid';
         }
      },
      //проверка индекса
      validateInputAddressIndex(){
         if(this.userIndex == '') {
            this.userAddressValidIndex = 'invalid';
         } else {
            this.userAddressValidIndex = 'valid';
         }
      },          
   },
   computed: { 
      //проверка валидности ипутов для перехода 
      formValidation: function() {
         return this.userNameValidation == 'invalid' 
         || this.userName == '' 
         || this.userAddressValidCity == 'invalid'
         || this.userSity === '' 
         || this.userAddress === '' 
         || this.userCountry === '' 
         || this.userIndex === ''
      },
      //проверка для класса  
      invalidName: function() {
         return this.userNameValidation == 'invalid';
      },
      //проверка для класса 
      invalidAddressCity: function() {
         return this.userAddressValidCity == 'invalid'           
      },
      //проверка для класса  
      invalidAddress: function() {
         return this.userAddressValid == 'invalid'           
      },
      //проверка для класса 
      invalidAddressCountry: function() {
         return this.userAddressValidCountry == 'invalid'           
      },
      //проверка для класса  
      invalidAddressIndex: function() {
         return this.userAddressValidIndex == 'invalid';
      },           
   },
   watch: {
      //фильтр ввода фио
      userName: function() {
         const reg = /[а-яА-Яa-zA-Z]/;
         if(reg.test(this.userName)) {
            this.userNameValidation = 'valid'
         } else {
            return this.userName = '';           
         }
      },
      //фильтр для индекса
      userIndex: function() {
         const regInd = /\d/;
         if(regInd.test(this.userIndex)) {
            this.userNameValidation = 'valid'
         } else {
            return this.userIndex = '';
         }
      },    
   }
}
</script>

<style>
   .delivery {        
      text-align: left;    
      padding: 0 40.5px;          
   }
   .delivery__title {
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
   .dlvr-lbl {      
      text-align: left;
      font-weight: 300;
      font-size: 16px;
      line-height: 18px;
      color: #101D94;
   }
   .dlvr-inp {
      margin-top: 10px;
      width: 100%;
      background: #FFFFFF;
      border: 1px solid #DEDCDC;
      box-sizing: border-box;
      border-radius: 5px;
      padding: 10px;      
   } 
   .form-control.invalidName .dlvr-inp,
   .invalidAddressCity,
   .invalidAddress,
   .invalidAddressCountry,
   .invalidAddressIndex {
      border: 2px solid red;
   }   
   .delivery__address .dlvr-inp:first-child { 
      margin-right: 20px;     
      max-width: 180px;
   }
   .delivery__address .dlvr-inp:last-child {      
      max-width: 120px;
   }
   .delivery__btn {
      display: inline-block;
      background: rgba(25, 165, 39, 0.8);
      border-radius: 5px;
      text-align: center;
      color: #fff;      
      border: #fff;
      text-decoration: none;
      padding: 12px 0 14px 0;
      width: 180px;
   } 
   .delivery__btn a {
      font-size: 16px;
      line-height: 19px;
      font-weight: 500;           
   }  
</style>