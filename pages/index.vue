<template>
  <div id="main">
    <section-hero />
    <section-about />
    <!-- <slider /> -->
   <section-members />
   
  </div>
</template>

<script>
import SectionHero from '~/components/SectionHero.vue'
import SectionAbout from '~/components/SectionAbout.vue'
import SectionMembers from '~/components/SectionMembers'
// import SectionMembersTwo from '~/components/SectionMembersTWO'
//import Slider from '~/components/Slider'

export default {
  components: {
    SectionHero,
    SectionAbout,
    SectionMembers
    //Slider
    //SectionMembersTwo,
  }
}
</script>

<style lang="scss">
 
</style>

