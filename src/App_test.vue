<template>
 <!--CSS background-color-->

 <div  class="relative1">
  <span>{{ myTxt }}</span>
   <p>relative 表現的和static一樣，除非你增加了一些額外的屬性。</p>

 </div>

 <div  class="relative2" >

   在一個設定為 position: relative 的元素內設定 top 、right、bottom 和 left 屬性，會使其元素「相對地」調整其原本該出現的所在位置，而不管這些「相對定位」過的元素如何在頁面上移動位或增加了多少空間，都不會影響到原本其他元素所在的位置。
 </div>


</template>

<script setup>
  let myTxt= '<div class="relative1">';
</script>

<style  scoped>
*{
  padding: 5px 15px;
}
span{
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 3px 3px 0;
  color: white;
  background-color: green;
  display: inline-block;
  
}

.relative1{
  padding: 5px 15px;
  position: relative;
  border: 1px solid green;
  
}

.relative2{
  position: relative;
  top: -10px;
  left: 20px;
  background-color: white;
  width: 500px;
  border: 1px solid red;
}


</style>