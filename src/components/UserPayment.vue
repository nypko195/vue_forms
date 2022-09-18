<template>
   <form class="payment" 
   @submit.prevent="sumbitForm">
      <h2 class="payment__title">Оплата</h2>
      <div class="form__control payment__user">
         <label 
            for="user-pay"
            class="payment__user-lbl pay-lbl"
         >
            Имя на карте
         </label>
         <input 
            type="text"
            placeholder="Konstantin Ivanov"
            class="payment__user-inp pay-inp"
            :class="{invalidPay}"
            name="user-pay"
            id="user-pay"
            v-model="userPay"
            @blur="payValidation"
         />
      </div>
      <div class="form__control payment__card">
         <label 
            for="user-card"
            class="payment__card-lbl pay-lbl"
         >
            Номер карты
         </label>
         <input 
            type="text"
            :class="{invalidCard}"
            class="payment__card-inp pay-inp"
            placeholder="ХХХХ ХХХХ ХХХХ ХХХХ"
            name="user-card"
            id="user-card"
            v-model="userCard"
            @blur="cardValidation"
         />         
      </div>
      <div class="payment__info">
         <div class="form__control">
            <label 
               for="user-date"
               class="payment__info-lbl pay-lbl"
            >
               Срок
            </label>
            <input 
               type="text"
               class="payment__info-inp pay-inp"
               :class="{invalidTerm}"
               placeholder="MM/YY"
               name="user-date"
               id="user-date"
               v-model="userDate"
               @blur="termValidation"
            />
         </div>
         <div class="form__control">
            <label 
               for="user-cvv"            
               class="payment__info-lbl pay-lbl"
            >
               CVV
            </label>
            <input 
               type="text"
               maxlength="3"
               class="payment__info-inp pay-inp"
               :class="{invalidCvv}"
               name="user-cvv"
               id="user-cvv"
               v-model="userCvv"
               @blur="cvvValidation"
            />
         </div>
      </div>
      <button 
         class="payment__btn"
         @click="home"
         :disabled="formValidation"
      >
         Оплатить
      </button>
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
         userTermValidation: 'pending',
         userCvv: '',
         userCvvValidation: 'pending',        
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
      termValidation() {
         if(this.userDate == '') {
            this.userTermValidation = 'invalid';
         } else {
            this.userTermValidation = 'valid';
         }
      },
      cvvValidation() {
         if(this.userCvv == '') {
            this.userCvvValidation = 'invalid';
         } else {
            this.userCvvValidation = 'valid';
         }
      },
      home() {
      this.$router.push('/thank');
         setTimeout(() => {
      this.$router.push('/');
   }, 1000);
}
   },
   computed: {
      formValidation: function() {
         return this.userPayValidation == 'invalid' 
         || this.userCardValidation == 'invalid'
         || this.userTermValidation == 'invalid'
         || this.userTermValidation == 'invalid'
         || this.userCvvValidation == 'invalid'
         || this.userPay == ''
         || this.userCard == ''
         || this.userDate == ''
         || this.userCvv == ''
      },
      invalidPay() {
         return this.userPayValidation == 'invalid';
      },
      invalidCard() {
         return this.userCardValidation == 'invalid';
      },
      invalidTerm() {
         return this.userTermValidation == 'invalid';
      },
      invalidCvv() {
         return this.userCvvValidation == 'invalid';
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
         const regDate = /\d([0-9]2)(\/)([0-9]2)/;//не работает.
         if(regDate.test(this.userDate)) {           
            this.userTermValidation = 'valid'
         } else {
            this.userDate = ''
         }
      },
      userCvv: function() {
         const regCvv = /\d/;
         if(regCvv.test(this.userCvv) ) {
            this.userCvvValidation = 'valid';
         } else {
            return this.userCvv = ''; 
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
   .invalidPay,
   .invalidCard,
   .invalidTerm,
   .invalidCvv {
      border: 2px solid red;
   }   
</style>