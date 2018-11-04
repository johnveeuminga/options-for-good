<template>
  <div class="layout-base">
    <app-header />
    <app-banner v-if="showBanner" />
    <main class="site-content" id="content">
      <slot></slot>
    </main>
    <shared-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppBanner from '@/components/AppBanner.vue'
import SharedFooter from '@/components/SharedFooter.vue'

export default {
  name: 'BaseLayout',

  components: {
    AppHeader,
    AppBanner,
    SharedFooter,
  },

    props: {
    showBanner: {
      type: Boolean,
      default: true,
    }
  },

}
</script>
