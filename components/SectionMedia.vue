<template>
  <section  class="media text-center">
    <div class="container" >
      <h2 id="media" class="h1 text-white">Media</h2>
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
      videoPoster: '/images/video/buku-1.jpg',
      videos: [
        {name:'1',id:'iuFEzo5ydAo', poster: '/images/video/buku-3.jpg' },
        {name:'2',id:'ORgGaknmJeM',poster: '/images/video/buku-2.jpg' },
        {name:'3',id:'V-wrZxYAZKk',poster: '/images/video/buku-1.jpg' },
        
      ],
      isPlaying: false
    }
  },
  methods: {
    changeVideo: function(vid){
      this.videoId = vid.id;
      this.videoPoster = vid.poster;
      this.playVideo();
    },
    videoReady: function(event){
      this.player = event.target;
    },
    videoPlaying: function(){
      this.isPlaying = true;
    },
    playVideo: function(){
      this.player.playVideo();
    }, 
    stopVideo: function(){
      this.isPlaying = false;
     this.player.pauseVideo();
    },
    preLoadImgs: function(){
      this.videos.forEach(video => {
        (new Image()).src = video.poster;
      })
      
    }
  },
  beforeMount(){
    this.preLoadImgs()
  }
  
}
</script>
<style lang="scss" scoped>
.media {
  padding:8vh 0;
  background-image: linear-gradient(black 55%,black 1%,  white 45%);
  .container {
    max-width:1400px;
  }
  h2 {
    margin: 0 0 8vh;
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
