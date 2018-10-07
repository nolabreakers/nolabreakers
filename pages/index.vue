<template>
  <div id="main">
    <section-hero />
    <section-about  />
    <section-members />
    <section-media />
  </div>
</template>

<script>
import SectionHero from '~/components/SectionHero.vue'
import SectionAbout from '~/components/SectionAbout.vue'
import SectionMembers from '~/components/SectionMembers'
import SectionMedia from '~/components/SectionMedia'
//import Slider from '~/components/Slider'

export default {
  head(){
    return {
      script: [
        {src: 'https://www.youtube.com/iframe_api', defer: true}
      ]
    }
  },
  components: {
    SectionHero,
    SectionAbout,
    SectionMembers,
    SectionMedia
  }
}
</script>

<style lang="scss">
 
</style>

