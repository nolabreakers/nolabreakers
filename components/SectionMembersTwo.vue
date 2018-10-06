<template>
  <section class="members flex justify-center align-items-center pos-r overflow-hidden">
    <div class="container">
      <h2 >Members</h2>
      <div class="crew-wrap pos-r">
        <div class="grid flex ">
         <nuxt-link tag="div" :to="{name: 'members', params: {member} }" class="member-wrap pos-r"  v-for="member in members" :key="member.name">
            <a class="member db pos-a overflow-hidden" :style="{backgroundImage: `url(${member.image.sm})`}">
              <p class="pos-a">{{member.name}}</p>
            </a>
         </nuxt-link>
        </div>
      </div>
      <div class="text-center">
        <nuxt-link to="/members" class="btn">View All Members</nuxt-link>
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
  }
}
</script>
<style lang="scss" scoped>
  .members {
    background:black;
    color:white;
    min-height:50vh;
    .container {
      padding:8vh 0;
     
      h2 {
       margin:4vh 0 8vh;
       text-align: center;
      }
      .grid {
        flex-wrap: wrap;
        .member-wrap{
          min-height: 40vh;
          height: calc(40vh + 4vw);
          width: 25%;
          .member {
            width: calc(100% - 1.5rem);
            height: calc(100% - 1.5rem);
            left: calc(1.5rem / 2);
            border:1px solid #fff;
            background-size: cover;
            background-position: bottom center;
            filter: grayscale(1);
            transition: .3s ease;
          
            &:hover {
              filter: grayscale(0);
            }
            p { 
              bottom:0;
              left:0;
              width:100%;
              font-size: calc(3.5vh + 3.5vw);
              font-weight: 900;
              font-family: $font-2;
              letter-spacing: -25px;
              color:rgba(255, 255, 255, 0.3);
              
            }
          }
        }
      }
      .btn {
        color:white;
        border:1px solid white;
        margin-top:2rem;
      }
    }
  }
</style>
