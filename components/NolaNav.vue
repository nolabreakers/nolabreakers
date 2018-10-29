<template>
  <header class="full-width pos-a" :class="{ active: isActive }" v-cloak>
    <div class="container">
      <nav class="">
        <div class="logo-wrap dib">
          <nuxt-link to="/" class="logo dib"><img src="~/assets/images/logo/logo-sm-4.svg" alt="" class="full-width height-auto"></nuxt-link>
        </div>
 
          <div class="links dib" @click="closeMenu">
            
            <ul class="dib" :class="{opened : menuOpen}">
              <li class="dib" v-for="link in navLinks" :key="link.name">
              <!-- about link -->
              <a v-if="$nuxt.$route.name == 'index' && link.name == 'About'" href="#" v-scroll-to="'#about'">{{link.name}}</a>
              <a v-else-if="link.name == 'About'" href="/#about"  @click="scrollToHash(link.to)">{{link.name}}</a>
              <!-- media link -->
              <a v-else-if="$nuxt.$route.name == 'index' && link.name == 'Media'" href="#" v-scroll-to="'#media'">{{link.name}}</a>
              <a v-else-if="link.name == 'Media'" href="/#media"  @click="scrollToHash(link.to)">{{link.name}}</a>
              <a v-else-if="link.name == 'Contact'" href="#" v-scroll-to="'#contact'">{{link.name}}</a>
                <nuxt-link v-else class="db" :to="link.to">{{link.name}}</nuxt-link>
              </li>
            </ul>
          </div>
 
        <div class="menu-btn" @click.prevent="menu" v-if="mobileView">
          <button class="nav-toggle" :class="{opened : menuOpen}">
            <span class="bar-top"></span>
            <span class="bar-mid"></span>
            <span class="bar-bot"></span>
          </button>
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
        {name:'Media',to:'/#media'},
        {name:'Contact',to:'/#contact'},
      ],
      urlHash: '',
      views: {
        mobileMenu: false
      },
      menuOpen: false
    }
  },
  methods: {
    closeMenu() {
      this.menuOpen = !this.menuOpen
    },
    menu(){
      this.isActive = !this.isActive
      this.menuOpen = !this.menuOpen
    },
    scrollToHash (link) {
      var hash = $nuxt.$route.hash || link.substring(1);
      this.$nextTick(() => {
        this.$scrollTo(hash, 0, { offset: 0 })
      })
    },
    mobileView() {
      this.views.mobileMenu = (window.matchMedia("(max-width: 600px)").matches) ? true : false
    }
    
  },
  beforeMount() {
    this.mobileView()
    if ($nuxt.$route.hash) {
        this.scrollToHash()
    }
  }
}
</script>
<style lang="scss" scoped>
[v-cloak] > * { display:none }
[v-cloak]::before { content: "loading…" }
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
        min-width:74px
       }
     }
     .links {
      width: 80%;
      text-align: right;
      vertical-align: top;
      ul {
        li {
          text-align: center;
          a {
           line-height: 45px;
           color:white;
           padding: 0 1.3vw;
           text-shadow:1px 1px 1px #000;
           font-family: $font-3;
         }
        }
        @media screen and (max-width:600px) {
          background:black;
          position: absolute;
          width:100%;
          top: 44px;
          left:0;
          height:0;
          overflow: hidden;
          transition: min-height .4s ease;
          pointer-events: none;
          min-height:0;
         
          li {
            display:block;
            text-align: left;
            border-top:.5px solid #232323;
            padding-left:10px;
          }
          &.opened {
            pointer-events: all;
            min-height:182px;
          }
        }
      } 
     }
   }
   @media screen and (max-width:600px){
     height: 49px;
     background:black;
     position: fixed;
     z-index: 9999999;
     padding-bottom:5px;
   }
 }
 .menu-btn {
   position: absolute;
   right:10px;
   top: 15px;
  .nav-toggle {
    position: relative;
    background: transparent;
    border: 1px solid transparent;
    &:focus {
      outline-width: 0;
    }
    span {
      background: white;
      display: block;
      transform: rotate(0deg);
      transition: .2s ease all;
      border-radius: 2px;
      height: 2px;
      width: 25px;
      margin-bottom: 4px;
      &.bar-bot {
        margin-bottom: 0;
      }
    }
    &.opened {
      .bar-top {
        transform: rotate(45deg);
        transform-origin: 15% 15%;
      }
      .bar-mid {
        opacity: 0;
      }
      .bar-bot {
        transform: rotate(-45deg);
        transform-origin: 15% 95%;
      }
    }
  }
  @media screen and (min-width:601px){
    display: none;
  }
}

</style>
