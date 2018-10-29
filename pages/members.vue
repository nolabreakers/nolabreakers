<template>
  <div class="members-page">
    <section class='hero'>
      <h2 class="text-center">Meet the Nola Breakers</h2>
    </section>
    <section class="section-1">
      <div class="container">
      <div class="row">
        <div class="member-wrap col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center"  v-for="member in members" :key="member.name">
            <div class="member dib overflow-hidden text-center pos-r" @click="openModal(member)">
              <picture class="dib full-width">
                <source media="(min-width:768px)" :srcset="`${member.image.lg}, ${member.image.lg2x} 1.5x`" >
                <img :src="member.image.sm" alt="" :srcset="`${member.image.sm2x} 1.5x`" class="full-width height-auto">
              </picture>
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
            <transition name="fade">
              <picture class="dib full-width" v-if="modal.image && modal.image.modal.lg">
                <source media="(min-width:768px)" :srcset="`${modal.image.modal.lg}, ${modal.image.modal.lg2x} 1.5x`" >
                <img :src="modal.image.modal.lg" :key="modal.image.modal.lg" alt="" :srcset="`${modal.image.sm2x} 1.5x`" class="full-width height-auto">
              </picture>
            </transition>
            <h3 v-if="modal.name" class="name pos-a text-white">{{modal.name}}</h3>
          </div>
          <div class="bio-wrap">
            <div v-if="modal.bio" class="bio" v-html="modal.bio"></div>
            <div v-if="modal.video" class="video">
              <no-ssr>
              <youtube :video-id="modal.video" @ready='videoReady' @playing="videoPlaying" @paused="stopVideo" @ended="stopVideo" :class="{playing: isPlaying}" class="video-wrapper" :player-vars="{showInfo: 0}" />
              </no-ssr>
            </div>
          </div>
        </div>
      </modal>
    </section>
    <section-contact />
  </div>
</template>
<script>
import {members} from '~/assets/js/members.js'
import Modal from '~/components/Modal.vue'
import SectionContact from '~/components/SectionContact'
export default {
  components:{
    Modal,
    SectionContact
  },
  data() {
    return {
      members: '',
      modal: {},
      showModal: false,
      userId:'',
      player:'',
      isPlaying: false
    }
  },
  methods:{
    
    checkMatchMedia: function(){
      if (window.matchMedia("(min-width: 768px)").matches) {
        if (window.matchMedia("(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)").matches){
          return 'lg2x'
        }
        return 'lg'
      } 
      else if (window.matchMedia("(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)").matches) {
        return 'sm2x'
      } 
      else {
        return 'sm'
      }
    },
     preLoadImgs: function(){
      this.members.forEach(member => {
        (new Image()).src = member.image.modal[`${this.checkMatchMedia()}`]
      })
    },
    openModal: function(el){
      this.modal = el
      this.showModal = true;
      document.body.classList.add('overflow-hidden')
    },
    closeModal: function(){
      this.showModal = false
      this.stopVideo()
      document.body.classList.remove('overflow-hidden')
    },
    updateMembers: function(){
      const people = members.sort(function (a, b) {return Math.random() - 0.5;})
      this.members = people
    },
    videoReady(event){
      this.player = event.target
    },
    videoPlaying(){
      this.isPlaying = true
    },
    playVideo(){
      this.player.playVideo()
    }, 
    stopVideo: function(){
      this.isPlaying = false
      if(this.modal.video){
        this.player.pauseVideo()
      }
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
    this.preLoadImgs()

  }
}
</script>
<style lang="scss" scoped >
 .hero {
   background:black;
   padding:5rem 0;
   h2 {color:white;}
 }
 .section-1 {
   padding:4rem 0;
   @media screen and (max-width:992px){
     padding:4rem 0 0;
   }
   .modal {
     .img-wrap {
       max-height:400px;
       .name {
         text-shadow:1px 1px 1px #000;
         top:40%;
         left:2rem;
       }
     }
     .bio-wrap {
       padding:2rem 2rem 4rem;
        .video {
          max-width: 700px;
          padding-top: .8rem;
        }
     }
   }
 }
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}
.fade-enter-active {
  transition-delay: .25s;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

</style>
