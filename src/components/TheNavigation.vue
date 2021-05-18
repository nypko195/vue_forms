<template>
   <nav>
      <ul>
         <li>
            <router-link to="/address">Доставка</router-link>
         </li>
         <li class="gal">
            >
         </li>
         <li>
            <router-link to="/payment">Оплата</router-link>
         </li>
      </ul>
   </nav>
</template>


<style scoped>
   nav {   
}

ul {
   list-style: none;
   margin: 0;
   padding: 0;   
   display: flex;
   justify-content: left;
   align-items: center;
   padding: 20px 0 0 40px;
}

li {  
   
}

a { 
   text-decoration: none;     
   cursor: pointer;
   color: #979797
}
.gal { 
   margin: 0 15px;  
}
.router-link-active {
   color: #101D94;
}
</style>