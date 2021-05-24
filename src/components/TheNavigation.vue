<template>
   <nav>
      <ul>
         <li>
            <router-link to="/">Доставка</router-link>
         </li>
         <li class="galka">
            >
         </li>
         <li>
            <router-link to="/payment">Оплата</router-link>
         </li>
      </ul>
   </nav>
</template>

<style scoped>
ul {
   list-style: none;
   margin: 0;
   padding: 0;   
   display: flex;
   justify-content: left;
   align-items: center;
   padding: 20px 0 0 40px;
}
a { 
   text-decoration: none;     
   cursor: pointer;
   color: #979797
}
.galka { 
   margin: 0 15px;  
}
.router-link-active {
   color: #101D94;
}
</style>