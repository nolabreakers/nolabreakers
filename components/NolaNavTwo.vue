<template>
  <header class="pos-a full-width" :class="{ active: isActive }" >
    <nav class="flex align-items-center">
      <div class="logo"><img src="~/assets/images/logo/logo-sm-4.svg" alt=""></div>
      <div class="links flex align-items-center">
        <ul class="full-width dib">
          <li class="dib"><a href="">About</a></li>
          <li class="dib"><a href="">Members</a></li>
          <li class="dib"><a href="">Media</a></li>
          <li class="dib"><a href="">Contact</a></li>
          
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: 'nola-nav-two',
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    menu(){
      this.isActive = !this.isActive
    }
  }
}
</script>
<style lang="scss" scoped>
 header {
  padding:0 5%;
  top:0;
  left:0;
  z-index:9;
   nav {
     justify-content: space-around;
     .logo{
       color:white;
       flex:1 1 20%;
       img{
        max-width:80px;
        height:auto;
        padding: 3% 0;
       }
     }
     .links {
      flex:1 1 80%;
      text-align: right;
      justify-content: flex-end;
      ul{
        li {
          text-align: center;
          a {
           line-height: 45px;
           color:white;
           padding: 0 25%;
           text-shadow:1px 1px 1px #000;
           font-family: $font-3;
           font-weight: 100;
         }
        }
      } 
     }
   }
 }
 
  
  
 
</style>
