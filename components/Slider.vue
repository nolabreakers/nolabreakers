<template>
  <div class="wrapper">
    <div class='carousel-view'>
      <transition-group
        class='carousel'
        tag="div">
        <div
          v-for="slide in slides" 
          class='slide'
          :key="slide.name"
          :style="{ backgroundImage: `url('${slide.image}')` }">
          <h4> {{ slide.name }} </h4>
        </div>
      </transition-group>
      <div class='carousel-controls'>
        <button class='carousel-controls__button' @click="previous">prev</button>
        <button class='carousel-controls__button' @click="next">next</button>
      </div>
    </div>
  </div>
</template>
<script>
import members from '~/assets/js/members.json'
export default {
  data() {
    return {
      slides: members
    }
  },
  methods: {
    next () {
      const first = this.slides.shift()
      this.slides = this.slides.concat(first)
    },
    previous () {
      const last = this.slides.pop()
      this.slides = [last].concat(this.slides)
    }
  }
}
</script>
<style lang="scss" scoped>

.carousel-view {
  overflow: hidden;
  max-width: 80%;
  margin:0 auto;
  color:white;
}
.carousel {
 display: flex;
  width: 100%;
  position: relative;
  height: 50vh;
  left:-100%;
}
.slide {
    background-size: cover;
    flex: 0 0 100%;
    transition: opacity 2s ease, transform 1s ease;
    width:100%; 
  //transition: transform 0.3s ease-in-out;
}
.slide:first-of-type {
 opacity: 0;
}
.slide:last-of-type {
  opacity: 0;
}

</style>