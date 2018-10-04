<template>
  <div class="members-page">
    <section class='hero'>
      <h2 class="text-center">Members</h2>
    </section>
    <section class="section-1">
      <div class="container">
        
  
           <div class="member-wrap flex" v-for="member in members" :key="member.name">
            <div class="img-wrap">
               <img :src="member.image" alt="">
            </div>
              <div class="text-wrap db">
                <h3 class="">{{member.name}}</h3>
                <div v-html="member.bio"></div>
              </div>
           </div>
      </div>
    </section>
  </div>
</template>
<script>
import {members} from '~/assets/js/members.js'
export default {
  data() {
    return {
      members,
      modal: {
        name: '',
        image: ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
 .hero {
   background:black;
   padding:5rem 0;
   h2 {color:white;}
 }
 .section-1 {
   padding:3rem 0;
   .member-wrap {
     margin-bottom:2rem;
     .img-wrap {
       flex:1 1 30%;
       img {
         width:100%;
         height:auto;
       }
     }
     .text-wrap {
       padding-left:2rem;
       flex:1 1 70%;
       h3 {
         font-size:30px;
         margin-bottom:20px;
       }
     }
   }
 }
</style>
