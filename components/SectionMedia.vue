<template>
  <section  class="media text-center">
    <div class="container" >
      <h2 id="media" class="text-white">Media</h2>
      <div class="row">
        <div class="col-xs-12 pos-r">
          <transition name="fade" key="play">
          <div class="svg-wrap pos-a" @click="playVideo" v-show="!isPlaying">
            <img src="/images/video/play-button.svg" alt="play" class="responsive-img">
          </div>
          </transition>
          <div class="video-wrapper pos-r" :style="{backgroundImage: `url(${videoPoster})`}" @click="playVideo">
            <no-ssr>
              <youtube class="video"
              :video-id="videoId" 
              @ready="videoReady" 
              @playing="videoPlaying" 
              @paused="stopVideo" 
              @ended="stopVideo" 
              :class="{playing: isPlaying}" />
            </no-ssr>   
          </div>
          <ul class="video-thumbs ">
            <li class="dib" v-for="vid in videos" :key="vid.id">
              <a class="db" @click="changeVideo(vid)">{{vid.name}}</a>
            </li>
          </ul>
          <div class="hide">
            <nuxt-link to="/media" class="btn">View All Videos</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>

export default {
  data() {
    return {
      player: ' ',
      videoId: 'iuFEzo5ydAo',
      videoPoster: '',
      videos: [
        {
          name:'1',
          id:'iuFEzo5ydAo', 
          poster: {
            sm: '/images/video/buku-3-sm.jpg',
            sm2x: '/images/video/buku-3-sm@2x.jpg',
            lg: '/images/video/buku-3.jpg',
            lg2x: '/images/video/buku-3@2x.jpg'
          } 
         },
        {
          name:'2',
          id:'ORgGaknmJeM',
          poster: {
            sm: '/images/video/buku-2-sm.jpg', 
            sm2x: '/images/video/buku-2-sm@2x.jpg',
            lg: '/images/video/buku-2.jpg',
            lg2x: '/images/video/buku-2@2x.jpg' 
          }
        },
        {
          name:'3',
          id:'V-wrZxYAZKk',
          poster: { 
            sm:'/images/video/buku-1-sm.jpg',
            sm2x:'/images/video/buku-1-sm@2x.jpg',
            lg: '/images/video/buku-1.jpg', 
            lg2x: '/images/video/buku-1@2x.jpg'
          }
        },
        
      ],
      isPlaying: false
    }
  },
  methods: {
    checkMatchMedia: function(){
      if (window.matchMedia("(min-width: 768px)").matches) {
        if (window.matchMedia("(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)").matches){
          return 'lg2x'
        }
        return 'lg'
      } 
      else if (window.matchMedia("(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)").matches) {
        return 'sm2x'
      } 
      else {
        return 'sm'
      }
    },
    changeVideo: function(vid){
      this.videoId = vid.id
      this.videoPoster = vid.poster[`${this.checkMatchMedia()}`]
      this.playVideo()
    },
    videoReady: function(event){
      this.player = event.target
    },
    videoPlaying: function(){
      this.isPlaying = true
    },
    playVideo: function(){
      this.player.playVideo()
    }, 
    stopVideo: function(){
      this.isPlaying = false
     this.player.pauseVideo()
    },
    preLoadImgs: function(){
      this.videos.forEach(video => {
        (new Image()).src = video.poster[`${this.checkMatchMedia()}`]
      })
      
    }
  },
  beforeMount(){
    this.preLoadImgs()
    this.videoPoster = this.videos[0].poster[`${this.checkMatchMedia()}`]
  }
  
}
</script>
<style lang="scss" scoped>
.media {
  padding:8vh 0;
  background-image: linear-gradient(black 55%,black 1%,  white 45%);
  @media screen and (max-width:600px){
    padding: 4rem 0 0;
  }
  .container {
    max-width:1400px;
  }
  h2 {
    margin: 0 0 8vh;
    @media screen and (max-width:600px){
          margin:0 0 3rem;
        }
    } 
   .svg-wrap {
    z-index:999;
    width:10%;
    left:calc(50% - 5%);
    top:30%;
    pointer-events: none;
    @media screen and (min-width:600px){
    top:38%;
    }
  }
  .video-wrapper {
    background-size:cover;
    background-position: center;
    cursor: pointer;
    filter: grayscale(100%);
    transition: 1s ease;
    &:hover {
      filter:grayscale(0)
    }
    .video{
      opacity: 0;
      transition: opacity .3s ease;
      &.playing {
        opacity:1;
      }
    }
  }
  .video-thumbs {
    margin-top:1.5rem;
    a {
      text-decoration: underline;
      color:black;
      padding:5px;
      font-weight: 400;
      cursor: pointer;
    }
  }
  .btn {
    border:1px solid black;
    margin-top:1.5rem;
    color:black;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition-delay: .3s;
    transition: opacity .5s
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0
  }
 }
</style>
