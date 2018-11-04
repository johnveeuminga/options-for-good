<template>
  <div class="fundraiser__img-wrap">
    <img 
      :src="img" 
      v-if="img"
      :alt="imgAlt" 
      class="img-fluid fundraiser__img"
      :id="imgId"
    >
  </div>
</template>

<script>
export default {
  name: "FundraiserImage",

  props: {
    imgName: {
      type: String,
      required: true,
    },

    imgAlt: {
      type: String,
      required: true,
    },

    imgId: {
      type: String,
      required: false,
    },
  },

  data () {
    return {
      img: null
    }
  },

  methods: {
    getImg () {
      this.img = require(`@/assets/logos/${this.imgName}`)
    }
  },

  watch: {
    img: {
      immediate: true,
      handler: 'getImg'
    }
  },
}
</script>

<style lang="scss">
  .fundraiser__img-wrap {
    text-align: center;
    margin-left: auto;
    margin-right: auto;

    a {
      display: block;
    }

    img {
      width: enlarge(240px);
      max-width: 100%;
      min-height: 90px;
      object-fit: contain;
      margin-left: auto;
      margin-right: auto;
    }
  }

  #quitathon-img,
  #volunteerathon-img,
  #colleges-for-good-img,
  #giving-at-thanksgiving-img,
  #purposeful-presidents-day-img,
  #freeathon-img  {
    width: enlarge(260px);
  }

  #homes-for-the-earth-img {
    width: enlarge(265px);
  }

  #environmental-debt-img {
    width: enlarge(280px);
  }

  #world-wealth-calculator,
  #maps-for-the-poor {
    margin-top: 30px;
  }

  #insight-in-mind-img {
    margin-top: 45px;
  }

  #colleges-for-good-width {
    width: enlarge(290px);
  }

  #insight-in-mind-img,
  #world-wealth-calculator-img {
    width: enlarge(320px);
  }

  #loseathon-img {
    width: enlarge(165px);
  }

  #run-for-good-img,
  #bake-for-good-img,
  #ride-for-good-img   {
    width: enlarge(180px);
  }

  #conscience-or-cotton-img,
  #polar-plunge-img,
  #bake-for-good-img {
    width: enlarge(200px);
  }

  #stands-for-freedom-img,
  #christmas-for-good-img,
  #bowling-for-bucks-img,
  #crowdsourcing-for-the-poor-img,
  #balanced-giving-img,
  #environmental-cliff-img,
  #waste-less-food-img,
  #benevolent-birthdays-img,
  #maps-for-the-poor-img {
    width: enlarge(220px);
  }

  #leagues-for-good-img,
  #resolutions-for-good-img,
  #counters-for-the-poor-img {
    width: enlarge(235px);
  }

  #counters-for-the-poor-img {
    margin-top: 25px;
  }

  #families-for-good-img{
    width: 350px;
    margin-top: 15px;
  }

  #walk-for-good {
    width: 360px;
  }

  #walk-for-good,
  #waste-less-food-img,
  #families-for-good-img,
  #environmental-debt-img,
  #freeathon-img {
    margin-top: 10px;
  }
</style>
