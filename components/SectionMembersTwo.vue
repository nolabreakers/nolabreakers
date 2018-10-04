<template>
  <section class="members flex justify-center align-items-center pos-r">
    <div class="container">
      <h2 >Members</h2>
      <div class="slider pos-r">
         <div class="slide" v-for="member in members" :key="member.name">
           <img :src="member.image" alt="">
            <a class="member db">
              <p class="pos-a">{{member.name}}</p>
            </a>
         </div>
      </div>
    </div>
  </section>
</template>
<script>
import members from '~/assets/js/members.json'
export default {
  data() {
    return {
      members
    }
  }
}
</script>
