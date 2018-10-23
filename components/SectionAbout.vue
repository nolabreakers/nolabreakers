<template>
  <section id="about" class="about shadowed pos-r flex justify-center align-items-center">
    <div class="container">
      <div class="text-wrap  pos-r">
        <h2>About</h2>
        <p>The Nola Breakers consist of a group of professional dancers that come from different dance backgrounds. The Nola Breakers started as competitive dancers. With years of experience they  gathered together to form a team of great versatility. Although, the Nola Breakers love the competing aspect, they’ve branched out to perform their craft in front of large audiences. Members of the Nola Breakers have appeared in Hollywood movies, to performing at NBA halftime shows.</p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name:'section-about'
}
</script>
<style lang="scss" scoped>
 .about {
   min-height: 50vh;
   background: black url(~/assets/images/index/about-bg.jpg) no-repeat center;
   background-attachment: fixed;
   background-size: cover;
   padding:4rem 0;
   &::before {
     content:'';
     position: absolute;
     width:100%;
     height:100%;
     top:0;
     left:0;
     opacity:.9;
     background:white;
   }
   .container {
    .text-wrap {
      text-align: center;
      max-width:960px;
      margin: 0 auto;
      top:10%;
      .h1{
        margin-bottom:2rem;
      }
      p{
        font-size:18px;
        line-height:24px;
      }
    }
   }
 }
</style>

