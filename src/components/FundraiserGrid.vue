<template>
  <section :id="$vnode.key" class="fundraiser-grid">
    <div class="container fundraiser__container p-0">
      <h2 class="text-center fundraiser-grid__title pt-5">{{ fundraiser.label }}</h2>
      <div class="row">
        <div 
          v-for="(site, index) in fundraiser.sites"
          :key="site.id"
          :class="['col-md-4 text-center fundraiser__col', {'d-none': index >= itemsToShow}]"
        >
          <router-link :to="`events/${$vnode.key}/${site.id}`">
            <fundraiser-single 
              :img-base-dir="$vnode.key"
              :fundraiser="site"
              :key="site.id"
            />
          </router-link>
        </div>
      </div>
      <div class="extra-content" v-if="expanded">
        <slot></slot>
      </div>
      <div class="see-more-container py-5 text-right">
        <a 
          href="#" 
          @click.prevent.stop="expanded = !expanded"
          class="font-weight-bold see-more-link text-secondary"
        >
          {{ expanded ? 'See less' : 'See more' }}
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import FundraiserSingle from "./FundraiserSingle.vue"

export default {
  name: 'FundraiserGrid',

  components: {
    FundraiserSingle,
  },

  props: {
    fundraiser: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },

  data () {
    return {
      expanded: false
    }
  },

  computed: {
    itemsToShow () {
      if (this.expanded) {
        return 9
      }

      return 6
    }
  }
}
</script>

<style lang="scss">
  .fundraiser-grid__title {
    font-size: 2.5rem;
    margin-bottom: 0;
    margin-bottom: 5px;
  }

  .fundraiser__container {
    .row {
      margin-left: -30px;
      margin-right: -30px;

      > .col,
      > [class*="col-"] {
        padding-right: 30px;
        padding-left: 30px;
      }
    }
  }

  .fundraiser-grid__image {
    max-width: 220px;
    min-height: 90px;
    object-fit: contain;
  }

  .see-more-link,
  .extra-content a { 
    text-decoration: underline; 
  }
</style>
