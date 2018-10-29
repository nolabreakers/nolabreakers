<template>
  <div class="section hgroup pos-r flex align-items-center">
    <div class="container pos-r">
      <h1><span>NoLa</span> <br> Breakers</h1>
      <p class="tagline">Yeah, we can do the worm...</p>
      <a href="#" v-scroll-to="'#about'" class="btn dib">Learn More</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'section-hero',
}
</script>
<style lang="scss" scoped>
.hgroup {
   height:100vh;
   background-color: #000;
   background-position: bottom center;
   background-repeat: no-repeat;
   background-size: cover;
   @include responBgImg('hero-bg-black-sm.jpg','hero-bg-black-sm@2x.jpg','hero-bg-black.jpg','hero-bg-black@2x.jpg');
   justify-content: center;
   &:before {
     content:'';
     position: absolute;
     top: 0;
     left: 0;
     width:100%;
     height:100%;
     background:black;
     z-index: 0;
     background: radial-gradient(rgba(12, 12, 12, 0), rgba(0, 0, 0, 0.5803921568627451), black);
   }
   .container {
     color:white;
     width:90%;
 
     z-index: 2;
     text-align: left;
     .tagline {
       text-transform: uppercase;
       text-shadow:1px 1px 1px #000;
       letter-spacing: 5px;
       margin:1rem 0;
     }
     h1 {
       text-shadow:1px 1px 1px #000;
       margin:1rem 0;
     }
     .btn {
       line-height: 45px;
       border: 2px solid white;
       text-align: center;
       padding:0 2%;
       margin: 1rem 0 0;
       color:white;
     }
   }
 }
</style>

