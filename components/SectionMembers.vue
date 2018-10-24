<template>
  <section class="members flex justify-center align-items-center pos-r overflow-hidden">
    <div class="container">
      <h2 >Members</h2>
        <div class="row">
         <nuxt-link tag="div" :to="{name: 'members', params: {member} }" class="member-wrap col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center"  v-for="member in members" :key="member.name">
            <div class="member full-width dib overflow-hidden text-center pos-r" >
              <img :src="member.image.sm" alt="" class="full-width height-auto">
              <span class="name pos-a text-white">{{member.name}}</span>
              <div class="bio pos-a full-width full-height flex">
                <div class="bio-content">
                  <h4>{{member.name}}</h4>
                  <p>{{member.bio | excerpt}}</p>
                  <span class="btn dib read-more">Read More</span>
                </div>
              </div>
            </div>
         </nuxt-link>
        </div>
      <div class="text-center">
        <nuxt-link to="/members" class="btn dib view-all">View All Members</nuxt-link>
      </div>
    </div>
  </section>
  
</template>
<script>
import {members} from '~/assets/js/members.js'
export default { 
  data() {
    return {
      members: ''
    }
  },
  methods:{
    updateMembers(){
      const people = members.sort(function (a, b) {return Math.random() - 0.5;}).slice(0,4)
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
  beforeMount(){
    this.updateMembers()
  }
}
</script>
<style lang="scss" scoped>
  .members {
    background:black;
    color:white;
    min-height:50vh;
    padding:8vh 0;
    .container {
      h2 {
       margin:4vh 0 8vh;
       text-align: center;
      }
      .btn.view-all {
        color:white;
        border:1px solid white;
        margin-top:3rem;
      }
    }
  }
</style>
