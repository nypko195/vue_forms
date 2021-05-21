<template>
   <form @submit.prevent="sumbitForm">
      <h2>Информация для доставки</h2>
      <div class="form-control delivery__user"
      :class="{invalid: userNameValidation === 'invalid'}">
         <label for="user-name">Получатель</label>
         <input
         id="user-name"
         name="user-name"
         v-model.trim="userName"
         @blur="validateInput"
         type="text" placeholder="ФИО">
      </div>
      <div class="form-control delivery__address"
      :class="{invalid: userAddressValidation === 'invalid'}">
         <label for="user-address">Адрес</label>
         <input type="text"
         name="sity"
         v-model="userSity"
         placeholder="Город"
         @blur="validateInputAddress">
         <input type="text"
         name="address"
         v-model="userAddress"
         placeholder="Адрес"
         @blur="validateInputAddress"> 
         <div>     
         <input type="text"
         name="country"
         v-model="userCountry"
         placeholder="Страна"
         @blur="validateInputAddress">
         <input type="text"
         name="index"
         v-model="userIndex"
         placeholder="Индекс"
         @blur="validateInputAddress">
         </div>          
      </div>
      <button class="delivery__btn">Продолжить</button>
   </form>
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
         userAddressValidation: 'pending',
         
      }
   },
   methods: {
      // sumbitForm() {
      //    if(this.userAddressValidation == 'invalid' || this.userAddressValidation == 'invalid') {
            
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
      width: 100%;
      background: #FFFFFF;
      border: 1px solid #DEDCDC;
      box-sizing: border-box;
      border-radius: 5px;
      padding: 10px;      
   } 
   .form-control.invalid input {
      border: 2px solid red;
   }  
   .delivery__address input:first-child { 
      margin-right: 20px;     
      max-width: 180px;
   }
   .delivery__address input:last-child {      
      max-width: 120px;
   }
   .delivery__btn {
      background: rgba(25, 165, 39, 0.8);
      border-radius: 5px;
      text-align: left;
      color: #fff;
      padding: 12px 39px;
      border: #fff;
   }   
</style>