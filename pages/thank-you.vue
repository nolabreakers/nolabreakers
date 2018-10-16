<template>
  <section class="thankyou flex align-items-center">
   <div class="container"> 
     <h1>Thank You</h1>
      <h3>We'll get back with you shortly</h3>
     <div class="btn-wrap"><nuxt-link to="/" class="btn text-white">Return Home</nuxt-link></div>
  </div>
  </section>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  .thankyou {
    background:black;
    color:white;
    height:100vh;
    h3 {
      margin-top:2rem;
      line-height: 3rem;
    }
    .btn-wrap {
      margin-top:4rem;
      .btn {
        line-height: 45px;
        border: 2px solid white;
        text-align: center;
        padding: 0 2%;
      }
    }
  }
</style>
