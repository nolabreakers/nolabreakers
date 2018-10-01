<template>
  <div id="main">
    <section-hero />
    <section-about />
    <section-members />
   
  </div>
</template>

<script>
import SectionHero from '~/components/SectionHero.vue'
import SectionAbout from '~/components/SectionAbout.vue'
import SectionMembers from '~/components/SectionMembers'

export default {
  components: {
    SectionHero,
    SectionAbout,
    SectionMembers,
  }
}
</script>

<style lang="scss">
 
</style>

