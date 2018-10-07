<template>
  <section id="about" class="about shadowed pos-r flex justify-center align-items-center">
    <div class="container">
      <div class="text-wrap  pos-r">
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur augue sit amet ultricies volutpat. Vestibulum nec nisl vel nibh lacinia vulputate. Mauris pellentesque nibh a felis scelerisque aliquam. Cras molestie nisi dolor, nec gravida sem tempor eu. Proin et purus odio. Aliquam molestie, erat id laoreet mollis, lacus quam molestie ex, ut pulvinar dolor nibh eget nulla. Suspendisse potenti.</p>
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

