<template>
   <form class="payment" 
   @submit.prevent="sumbitForm">
      <h2 class="payment__title">Оплата</h2>
      <div class="form__control payment__user"
      :class="{invalidPay}">
         <label for="user-pay"
         class="payment__user-lbl pay-lbl">Имя на карте</label>
         <input type="text"
         placeholder="Konstantin Ivanov"
         class="payment__user-inp pay-inp"
         name="user-pay"
         id="user-pay"
         v-model="userPay"
         @blur="payValidation">
      </div>
      <div class="form__control payment__card"
      :class="{invalidCard}">
         <label for="user-card"
         class="payment__card-lbl pay-lbl">Номер карты</label>
         <input type="text"
         class="payment__card-inp pay-inp"
         placeholder="ХХХХ ХХХХ ХХХХ ХХХХ"
         name="user-card"
         id="user-card"
         v-model="userCard"
         @blur="cardValidation">         
      </div>
      <div class="payment__info"      >
         <div class="form__control"
         :class="{invalidInfo}">
            <label for="user-date"
            class="payment__info-lbl pay-lbl">Срок</label>
            <input type="text"
            class="payment__info-inp pay-inp"
            placeholder="MM/YY"
            name="user-date"
            id="user-date"
            v-model="userDate"
            @blur="infoValidation">
         </div>
         <div class="form__control"
         :class="{invalidInfo}">
            <label for="user-cvv"            
            class="payment__info-lbl pay-lbl">CVV</label>
            <input type="text"
            maxlength="3"
            class="payment__info-inp pay-inp"
            name="user-cvv"
            id="user-cvv"
            v-model="userCvv"
            @blur="infoValidation">
         </div>
      </div>
      <!-- <button class="payment__btn">Оплатить</button> -->
      <router-link to="/thank" class="payment__btn" @click="home">Оплатить</router-link>  
   </form>
</template>

<script>
export default {
   data() {
      return {
         form: '',
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
      },
      home() {
         setTimeout(() => {
      this.$router.push('/');
   }, 3000);
}
   },
   computed: {
      invalidPay() {
         return this.userPayValidation == 'invalid';
      },
      invalidCard() {
         return this.userCardValidation == 'invalid';
      },
      invalidInfo() {
         return this.userInfoValidation == 'invalid';
      }
   },
   watch: {
      userPay: function() {
         const regPay = /[a-zA-Z]/;
         if(regPay.test(this.userPay)) {
            this.userPayValidation = 'valid';
         } else {
            this.userPay = '';
         }
      },
      // userCard: function() {
      //    const regCard = /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}/;
      //    if(regCard.test(this.userCard)) {
      //       console.log(this.userCard);
      //       this.userCardValidation = 'valid';
      //    }  else {
      //       this.userCard = '';
      //    }
      // },
      userDate: function() {
         const regDate = /\d/;
         if(regDate.test(this.userDate)) {           
            this.userInfoValidation = 'valid'
         } else {
            this.userDate = ''
         }
      },
      userCvv: function() {
         const regCvv = /^[0-9]{3}$/;
         if(regCvv.test(this.userCvv) ) {
            this.userInfoValidation = 'valid';
         } else {
            this.userCvv 
         }
      },      
   }
}
</script>

<style>
   .payment {        
      text-align: left;     
      padding: 0 40.5px;          
   }
   .payment__title {
      font-weight: 300;
      font-size: 26px;
      line-height: 31px;
      color: #101D94;
   }
   .form__control {
      margin: 10px 0 10px 0;
      display: flex;
      flex-direction: column;
      align-content: left;
   }
   .pay-lbl {      
      text-align: left;
      font-weight: 300;
      font-size: 16px;
      line-height: 18px;
      color: #101D94;
   }
   .pay-inp {
      margin-top: 10px;
      background: #FFFFFF;
      border: 1px solid #DEDCDC;
      box-sizing: border-box;
      border-radius: 5px;
      padding: 10px;
   }
   .payment__info-inp {
      width: 95px;      
   } 
   .payment__info .form__control:last-child {
      margin-left: 30px;   
   }   
   .payment__btn {
      display: inline-block;
      text-decoration: none;
      background: rgba(25, 165, 39, 0.8);
      border-radius: 5px;
      text-align: center;
      color: #fff;
      padding: 12px 0 14px 0;
      width: 180px;
      border: #fff;
   }
   .payment__btn a {
      font-size: 16px;
      line-height: 19px;
      font-weight: 500;
   }
   .payment__info {
      display: flex;
      flex-direction: row;            
   }
   .form__control.invalidPay .pay-inp,
   .form__control.invalidCard .pay-inp,
   .form__control.invalidInfo .pay-inp {
      border: 2px solid red;
   }   
</style>