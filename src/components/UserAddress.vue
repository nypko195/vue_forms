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
      <div class="form-control delivery__address"
      :class="{invalidAddress}">
         <label for="user-address"
         class="delivery__address-lbl dlvr-lbl">Адрес</label>
         <input type="text"
         class="delivery__address-inp dlvr-inp"
         name="sity"
         v-model="userSity"
         placeholder="Город"
         @blur="validateInputAddress">
         <input type="text"
         class="delivery__address-inp dlvr-inp"
         name="address"
         v-model="userAddress"
         placeholder="Адрес"
         @blur="validateInputAddress"> 
         <div>     
         <input type="text"
         class="delivery__address-inp dlvr-inp"
         name="country"
         v-model="userCountry"
         placeholder="Страна"
         @blur="validateInputAddress">
         <input type="text"
         class="delivery__address-inp dlvr-inp"
         name="index"
         v-model="userIndex"
         placeholder="Индекс"
         @blur="validateInputAddress">
         </div>          
      </div>
      <!-- <button class="delivery__btn"> Продолжить</button> -->
      <router-link to="/payment" class="delivery__btn">Продолжить</router-link>
   </form>
</template>

<script>
export default {
   data() {
      return {   
         userNameV: '',              
         userName: '',
         userNameValidation: 'pending',         
         userSity: '',
         userAddress: '',
         userCountry: '',
         userIndex: '',         
         userAddressValidation: 'pending',         
      }
   },
   methods: { 
      // sumbitForm() {
      //    if(this.userAddressValidation == 'invalid' || 
      //    this.userName == '' || 
      //    this.userAddressValidation == 'invalid') {            
      //    }
      // },     
      validateInput() {         
         if(this.userName === '') {
            this.userNameValidation = 'invalid';
         } else {
            this.userNameValidation = 'valid'           
         }
      },
      validateInputAddress() {
         if(this.userSity === '' || this.userAddress === '' || this.userCountry === '' || this.userIndex === '') {
            this.userAddressValidation = 'invalid';
         } else {
            this.userAddressValidation = 'valid';
         }
      },       
   },
   computed: {
      invalidName: function() {
         return this.userNameValidation == 'invalid';
      },
      invalidAddress: function() {
         return this.userAddressValidation == 'invalid';
      },  
         
   },
   watch: {
      userName: function() {
         const reg = /[а-яА-Яa-zA-Z]/;
         if(reg.test(this.userName)) {
            this.userNameValidation = 'valid'
         } else {
            return this.userName = '';           
         }
      },
      
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
   .form-control.invalidAddress .dlvr-inp {
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