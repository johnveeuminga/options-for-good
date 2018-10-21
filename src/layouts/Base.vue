<template>
  <div class="layout-base">
    <app-header />
    <main class="site-content" id="content">
      <slot></slot>
    </main>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
// import AppBanner from '@/components/AppBanner.vue'

export default {
  name: 'BaseLayout',

  components: {
    AppHeader,
    // AppBanner,
  },

}
</script>
