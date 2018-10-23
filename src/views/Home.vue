<template>
  <div class="home">
    <base-layout>
      <fundraiser-grid 
        :fundraiser="fundraisers['innovative-fundraising']"
        :key="'innovative-fundraising'"
      >
      </fundraiser-grid>
      <fundraiser-grid 
        :fundraiser="fundraisers['year-round-holiday-options']"
        :key="'year-round-holiday-options'"
      >
        <div class="year-round-holiday-options__extra-content text-right">
          <p class="mb-2">To see all the holiday and seasonal options, visit <a href="#" class="text-primary">Calendar for Good</a></p>
        </div>
      </fundraiser-grid>
      <fundraiser-grid 
        :fundraiser="fundraisers['fundraising-classics']"
        :key="'fundraising-classics'"
      >
      </fundraiser-grid>
      <fundraiser-grid 
        :fundraiser="fundraisers['help-the-poorest-half']"
        :key="'help-the-poorest-half'"
      >
      </fundraiser-grid>
      <fundraiser-grid 
        :fundraiser="fundraisers['free-modern-day-slaves']"
        :key="'free-modern-day-slaves'"
      >
      </fundraiser-grid>
      <fundraiser-grid 
        :fundraiser="fundraisers['help-the-earth']"
        :key="'help-the-earth'"
      >
      </fundraiser-grid>
      <fundraiser-grid 
        :fundraiser="fundraisers['do-good-together']"
        :key="'do-good-together'"
      >
      </fundraiser-grid>
    </base-layout>
  </div>
</template>

<script>
import BaseLayout from '@/layouts/Base.vue'
import FundraiserGrid from '@/components/FundraiserGrid'

import { mapState } from 'vuex'

export default {
  name: 'home',

  components: {
    BaseLayout,
    FundraiserGrid,
  },

  computed: {
    ...mapState({
      fundraisers: state => state.fundraisers.data
    })
  }
}
</script>

<style lang="scss">
  .fundraiser-grid {
    > .container {
      border-top: 2px solid #ddd;
    }

    &:first-child {
      > .container {
        border-top: 0;
      }
    }
  }

  // #innovative-fundraising {
  //   background-color: #e5eef4;
  // }

  #year-round-holiday-options {
    background-color: #eaf7ff;
  }

  // #fundraising-classics {
  //   background-color: #f8f1e2;
  // }

  #help-the-poorest-half {
    background-color: #f8f1e2;
  }

  // #free-modern-day-slaves {
  //   background-color: #e5eef4;
  // }

  #help-the-earth {
    background-color: #e1f7ea;
  }

  // #do-good-together {
  //   background-color: #f3eeff;
  // }
</style>
