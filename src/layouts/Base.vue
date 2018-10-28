<template>
  <div class="layout-base">
    <app-header />
    <app-banner v-if="showBanner" />
    <main class="site-content" id="content">
      <slot></slot>
    </main>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppBanner from '@/components/AppBanner.vue'

export default {
  name: 'BaseLayout',

  components: {
    AppHeader,
    AppBanner,
  },

    props: {
    showBanner: {
      type: Boolean,
      default: false,
    }
  },

}
</script>
