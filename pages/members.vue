<template>
  <div class="members-page">
    <section class='hero'>
      <h2 class="text-center">Members</h2>
    </section>
    <section class="section-1">
      <div class="container">
        <div class="member-wrap flex" v-for="member in members" :key="member.name">
        <div class="img-wrap" :style="{backgroundImage: `url(${member.image.sm})`}">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">
        </div>
          <div class="text-wrap db">
            <h3 class="">{{member.name}}</h3>
            <p>{{member.bio | excerpt}}</p>
            <a class="read-more" @click="openModal(member)" v-if="member.bio">Read More</a>
          </div>
        </div>
      </div>
      <modal v-show="showModal" @close="showModal = false">
        <div slot="modalContent">
          <img v-if="modal.image && modal.image.sm" :src="modal.image.sm">
          <h3 v-if="modal.name">{{modal.name}}</h3>
          <div v-if="modal.bio" v-html="modal.bio"></div>
        </div>
      </modal>
    </section>
  </div>
</template>
<script>
import {members} from '~/assets/js/members.js'
import Modal from '~/components/Modal.vue'
export default {
  components:{
    Modal
  },
  data() {
    return {
      members: members.sort(function (a, b) {return Math.random() - 0.5;}),
      modal: {},
      showModal: false,
    }
  },
  methods:{
    openModal: function(el){
      this.modal = el
      this.showModal = true;
    }
  },
  filters: {
    excerpt: function(val){
      if(!val) return
      let str = val.replace(/<(?:.|\n)*?>/gm, '')
      return str.substring(0,800) + '...'
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
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
     .img-wrap {
       flex:1 1 30%;
       line-height: 0;
       background-size:cover;
       background-position: top center;
       img {
         width:100%;
         height:auto;
       }
     }
     .text-wrap {
       padding:1rem 2rem 2rem;
       flex:1 1 70%;
       h3 {
         margin-bottom:20px;
       }
       p {
         font-weight: 100;
         font-size:20px;
         line-height: 1.4;
       }
       .read-more {
         line-height:40px;
         border:1px solid black;
         padding:0 25px;
       }
     }
   }
 }
</style>
