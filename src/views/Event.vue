<template>
  <base-layout 
    :show-banner="false"
  >
    <div class="event__content">
      <div class="container event py-4" :id="event.id">
        <p class='note-text'><span class="font-weight-bold">Note:</span> This website is still being built, and is partly done. When new pages are being built by web developers, they often host them at developer domains and links similar to the one you see in your address bar.</p>
      </div>
    </div>
  </base-layout>
</template>

<script>
import BaseLayout from '@/layouts/Base'

export default {
  name: 'EventPage',

  data () {
    return {
      event: null,
    }
  },

  components: {
    BaseLayout,
  },

  methods: {
    getEvent () {
      const {category, id} = this.$route.params
      this.event = this.$store.getters['fundraisers/getFundraiser'](category, id)
    }
  },

  watch: {
    event: {
      handler: 'getEvent',
      immediate: true,
    }
  }
}
</script>

<style lang='scss'>
  .note-text {
    font-size: 1.25rem;
    max-width: 75%;
    margin-left: auto;
    margin-right: auto;
    text-align:center;
    margin-top: 2.75rem;
  }

  .event__content {
    min-height: 400px;
  }
</style>