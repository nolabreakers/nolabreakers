<template>
  <header class="full-width pos-a" :class="{ active: isActive }" >
    <div class="container">
      <nav class="">
        <div class="logo-wrap dib">
          <nuxt-link to="/" class="logo dib"><img src="~/assets/images/logo/logo-sm-4.svg" alt="" class="full-width height-auto"></nuxt-link>
        </div>
        <div class="links dib">
          <ul class="dib">
            <li class="dib" v-for="link in navLinks" :key="link.name">
             <!-- <a v-if="link.name == 'About'" href="/#about" v-scroll-to="`${link.to}`">{{link.name}}</a> -->
             <a v-if="$nuxt.$route.name == 'index' && link.name == 'About'" href="#" v-scroll-to="'#about'">{{link.name}}</a>
             <a v-else-if="link.name == 'About'" href="/#about"  @click="scrollToHash(link.to)">{{link.name}}</a>
             <a v-else-if="link.name == 'Contact'" href="#bla" v-scroll-to="'#contact'">{{link.name}}</a>
              <nuxt-link v-else class="db" :to="link.to">{{link.name}}</nuxt-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  name: 'nola-nav',
  data() {
    return {
      isActive: false,
      navLinks: [
        {name:'About',to:'/#about',},
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
    scrollToHash (link) {
      var hash = $nuxt.$route.hash || link.substring(1);
      this.$nextTick(() => {
        this.$scrollTo(hash, 0, { offset: 0 })
      })
    },
    
  },
  beforeMount() {
   if ($nuxt.$route.hash) {
      this.scrollToHash()
   }
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
       padding-top:10px;
       width:19%;
       
       img{
        max-width:80px;
       }
     }
     .links {
       width: 80%;
      text-align: right;
      vertical-align: top;
      ul{
        li {
          text-align: center;
          a {
           line-height: 45px;
           color:white;
           padding: 0 1.3vw;
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
