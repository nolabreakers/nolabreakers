<template>
  <header :class="{ active: isActive }" >
    <!-- logo -->
   <div class="logo-wrap">
      <div class="logo"><img src="~/assets/images/logo/logo-boy-white.svg" alt="NOLA Breakers"></div>
      <!-- menu -->
      <div class="navbar-toggle" :class="{ active: isActive }" @click="menu()" type="button" data-toggle="navoverlay">
       <div class="screen"></div>
        <div class="line-wrap">
          <span class="icon-bar top"></span>
          <span class="icon-bar middle"></span>
          <span class="icon-bar bottom"></span>
        </div>
      </div>
   </div>
    <!-- nav -->
    <div class="nav-wrap">
      <div class="nav-inner">
        <nav>
          <ul>
            <li><a ><img src="~/assets/images/nav2/home.svg" alt=""></a></li>
            <li><a><img src="~/assets/images/nav2/about.svg" alt=""></a></li>
            <li><a><img src="~/assets/images/nav2/members.svg" alt=""></a></li>
            <li><a><img src="~/assets/images/nav2/media.svg" alt=""></a></li>
            <li><a><img src="~/assets/images/nav2/contact.svg" alt=""></a></li>
          </ul>
        </nav>
        <div class="social">
          <ul>
            <li><a href=""><img src="~/assets/images/nav2/facebook.svg"> </a></li>
            <li><a href=""><img src="~/assets/images/nav2/instagram.svg"></a></li>
            <li><a href=""><img src="~/assets/images/nav2/youtube.svg"></a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'nola-nav',
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
    .logo-wrap{
      position:fixed;
      z-index:9999;
      .logo {
        background:$blue;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 75px;
        width: 75px;
        z-index:999;
        transition: background .2s ease-in-out;
        img { 
          width:55%;
        }
      }
      .navbar-toggle {
        background: #3a4750;
        display: flex;
        width: 75px;
        height: 75px;
        justify-content: center;
        align-items: center;
        z-index: 999;
        cursor: pointer; 
        .line-wrap {
          position: relative;
          left: -3px;
          .icon-bar {
            background: #fff;
            display: block;
            width: 40px;
            height: 4px;
            border-radius: 1px;
            position: relative;
            transform: rotate(0deg);
            transition: all 300ms ease-in-out;
            &+.icon-bar {
              margin-top: 4px;
              }
            }
          }
        &:hover:not(.active) {
          .icon-bar {
            
            &.top {
              top: 7.5px;
              transform: rotate(90deg);
            }
            &.middle {
              left: 0px;
    
            }
            &.bottom {
              bottom: 7.5px;
              transform: rotate(-90deg);
            }
          }
        } 
      }//navbar-toggle
    }
    .nav-wrap{
      position: absolute;
      width: 100%;
      height: 100%;
      background: $blue url("~/assets/images/nav-bg.jpg")  no-repeat top center; 
      background-size: cover;
      opacity:0;
      transition: opacity .3s ease;
      overflow: hidden;
      pointer-events: none;
      .nav-inner {
        width: calc(36vh + 9vw);
        margin-left: auto;
        padding: 3%;
        li {
          margin-bottom:2vh;
          a{
            display:block;
            img {
              cursor: pointer;
            }
          }
        }
        .social {
          border-top: 5px solid white;
          padding-top: 6%;
          ul {
            display: flex;
            justify-content: space-evenly;
            width: 100%;
            li {
              &:nth-child(2) {
                margin: 0 6%;
              }
              a {
                display: block;
                img {
                  width: 100%;
                }
              }
            }
          } 
        }
      }
    }
  &.active {
    .logo-wrap{
      .navbar-toggle { 
        background:black; 
        transition: all 300ms ease-in-out;
        .icon-bar {
          // transition: all 300ms ease-in-out;
          &.top{
            transform: rotate(-45deg);
            top: 4px;
          }
          &.middle{
            width: 0;
            height: 0;
            left:50%;
          }
          &.bottom{
            transform: rotate(45deg);
            margin: 0;
            top: -4px;
          }
        }
      }
    }
    .nav-wrap {
      opacity: 1;
      pointer-events: all;
    }
  }

  }// header
  
  
 
</style>
