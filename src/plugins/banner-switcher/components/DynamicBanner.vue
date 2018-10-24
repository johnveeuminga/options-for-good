<template>
  <section 
    class="dynamic-banner"
    :style="{'background-image': `url('${getBgImage()}')`}"
  >
    <div class="dynamic-banner__content">
      <slot></slot>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'DynamicBanner',

  methods: {
    getBgImage () {
      if (this.selected === null || this.selected === 'url') return this.url

      return require(`@/assets/${this.bgImage}`)
    }
  },

  computed: {
    ...mapState({
      selected: state => state.banner.selected,
      url: state => state.banner.url,
    }),
    
    ...mapGetters({
      bgImage: 'getCurrentLocalImage'
    }),
  },
}
</script>
