<template>
  <div class="members-page">
    <section class='hero'>
      <h2 class="text-center">Members</h2>
    </section>
    <section class="section-1">
      <div class="container">
      <div class="row">
        <div class="member-wrap col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center"  v-for="member in members" :key="member.name">
            <div class="member dib overflow-hidden text-center pos-r" @click="openModal(member)">
              <img :src="member.image.sm" alt="" class="full-width height-auto">
              <span class="name pos-a text-white">{{member.name}}</span>
              <div class="bio pos-a full-width full-height flex">
                <div class="bio-content">
                  <h4>{{member.name}}</h4>
                  <p>{{member.bio | excerpt}}</p>
                  <span class="btn dib read-more" >Read More</span>
                </div>
              </div>
            </div>
         </div>
        </div>
      </div>
      <modal v-show="showModal" @close="closeModal">
        <div slot="modalContent" class="modal">
          <div class="img-wrap pos-r full-width overflow-hidden">
            <img v-if="modal.image && modal.image.modal.lg" :src="modal.image.modal.lg" class="full-width">
            <h3 v-if="modal.name" class="name pos-a text-white">{{modal.name}}</h3>
          </div>
          <div v-if="modal.bio" class="bio" v-html="modal.bio"></div>
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
      members: '',
      modal: {},
      showModal: false,
      userId:''
    }
  },
  methods:{
    openModal: function(el){
      console.log({el})
      this.modal = el
      this.showModal = true;
      document.body.classList.add('overflow-hidden')
    },
    closeModal: function(){
      this.showModal = false
      document.body.classList.remove('overflow-hidden')
    },
    updateMembers: function(){
      const people = members.sort(function (a, b) {return Math.random() - 0.5;})
      this.members = people
    }
  },
  filters: {
    excerpt: function(val){
      if(!val) return
      let str = val.replace(/<(?:.|\n)*?>/gm, '')
      return str.substring(0,150) + '...'
    }
  },
  created(){
    if(this.$route.params.member) {
      this.openModal(this.$route.params.member)
    }
  },
   beforeMount(){
    this.updateMembers()
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
   padding:4rem 0;
   .modal {
     .img-wrap {
       background:black;
       max-height:400px;
       .name {
         text-shadow:1px 1px 1px #000;
         top:40%;
         left:2rem;
       }
     }
     .bio {
       padding:2rem 2rem 4rem;
     }
   }
 }
 .member-wrap{
    margin-bottom:1rem;
    .member {
      cursor: pointer;
      width:100%;
      line-height: 0;
      filter: grayscale(1);
      transition: .3s ease;
      .name{
        letter-spacing: -30px;
        left: -10px;
        position: absolute;
        color: rgba(255, 255, 255, 0.44);
        bottom: 50px;
        font-size: calc(8vh + 9vw);
      }
      .bio {
        top: 14%;
        top: 0;
        left: 0;
        line-height: 1.5;
        background: white;
        padding: 5%;
        opacity:0;
        transition: .5s ease;
        color:black;
        align-items: center;
        padding: 1rem;
        &:before {
          content: '';
          width: 100%;
          height: 100%;
          border: 3px solid white;
          top: -2.5px;
          left: -2.8px;
          position: absolute;
          transition: .5s ease;
          transform: scale(1.5);
          
        }
        h4 {
          font-size:2rem;
          margin-bottom:1rem;
        }
        p {
          text-align: left;
        }
        .btn {
          color:black;
          border:1px solid black;
          margin-top:1rem;
        }
      }
      &:hover {
      filter: grayscale(0);
      .bio {
        opacity:0.9;
        transform: scale(.9);
        &:before{
          transform: scale(1.05);
        }
      }
    }
    }
  }
</style>
