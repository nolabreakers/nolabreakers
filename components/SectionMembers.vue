<template>
  <section class="members flex justify-center align-items-center pos-r overflow-hidden">
    <div class="container">
      <h2 >Members</h2>
        <div class="row">
         <nuxt-link tag="div" :to="{name: 'members', params: {member} }" class="member-wrap col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center"  v-for="member in members" :key="member.name">
            <div class="member dib overflow-hidden text-center pos-r" >
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
        <nuxt-link to="/members" class="btn dib">View All Members</nuxt-link>
      </div>
    </div>
  </section>
  
</template>
<script>
import {members} from '~/assets/js/members.js'
export default { 
  data() {
    return {
      members: members.sort(function (a, b) {return Math.random() - 0.5;}).slice(0,8),
    }
  },
  filters: {
    excerpt: function(val){
      if(!val) return
      let str = val.replace(/<(?:.|\n)*?>/gm, '')
      return str.substring(0,150) + '...'
    }
  },
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
      .member-wrap{
        margin-bottom:1rem;
        .member {
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
              border-color:black;
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
        @media screen and (max-width:1200px){
          &:nth-child(7),
          &:nth-child(8){
            display: none;
          }
        }
        @media screen and (max-width:1024px){
          &:nth-child(5),
          &:nth-child(6){
            display: none;
          }
        }
        @media screen and (max-width:767px){
          &:nth-child(4) {
            display: none;
          }
        }
      }
 
      .btn {
        color:white;
        border:1px solid white;
        margin-top:3rem;
      }
    }
  }
</style>
