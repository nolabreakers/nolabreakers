<template>
  <div id="main">
    <section-hero />
    <section-about  />
    <section-members />
    <section-media />
    <section-contact />
  </div>
</template>

<script>
import SectionHero from '~/components/SectionHero.vue'
import SectionAbout from '~/components/SectionAbout.vue'
import SectionMembers from '~/components/SectionMembers'
import SectionMedia from '~/components/SectionMedia'
import SectionContact from '~/components/SectionContact'

export default {
  components: {
    SectionHero,
    SectionAbout,
    SectionMembers,
    SectionMedia,
    SectionContact
  }
}
</script>

<style lang="scss">
 
</style>

