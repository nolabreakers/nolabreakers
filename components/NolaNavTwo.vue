<template>
  <header class="pos-a full-width" :class="{ active: isActive }" >
    <div class="container">
      <nav class="">
        <div class="logo-wrap dib">
          <nuxt-link to="/" class="logo dib"><img src="~/assets/images/logo/logo-sm-4.svg" alt="" class="full-width height-auto"></nuxt-link>
        </div>
        <div class="links dib">
          <ul class="dib">
            <li class="dib" v-for="link in navLinks" :key="link.name">
              <nuxt-link class="db" :to="link.to">{{link.name}}</nuxt-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  name: 'nola-nav-two',
  
  data() {
    return {
      isActive: false,
      navLinks: [
        {name:'About',to:'/#about'},
        {name:'Members',to:'/members'},
        {name:'Media',to:'/media'},
        {name:'Contact',to:'/#contact'},
      ],
      urlHash: ''
    }
  },
  methods: {
    menu(){
      this.isActive = !this.isActive
    },
    getHash: function(){
     this.urlHash = window.location.hash || ''
    }
  },
  mounted() {
    this.getHash() 
  }
}
</script>
<style lang="scss" scoped>
 header {
  top:0;
  left:0;
  z-index:9;
   nav {
     justify-content: space-around;
     .logo-wrap {
       width:19%;
       vertical-align: middle;
       img{
        max-width:80px;
       }
     }
     .links {
       width: 80%;
      text-align: right;
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
