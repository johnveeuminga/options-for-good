<template>
  <div class="fundraiser__img-wrap">
    <a href="#">
      <img 
        :src="img" 
        v-if="img"
        :alt="imgAlt" 
        class="img-fluid fundraiser__img"
        :id="imgId"
      >
    </a>
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

  mounted () {
    // We make sure that the image is existing before displaying the image.
    // This prevents module not found error if an image is not found
    import(`@/assets/logos/${this.imgName}`)
      .then(img => {
        this.img = img.default
      })
      .catch(err => {
        //eslint-disable-next-line
        console.log(err)
      })
  }
}
</script>

<style lang="scss">
  .fundraiser__img-wrap {
    text-align: center;

    a {
      display: block;
    }

    img {
      max-width: 220px;
      min-height: 90px;
      object-fit: contain;
    }
  }

  #quitathon-img,
  #volunteerathon-img,
  #homes-for-the-earth-img,
  #colleges-for-good-img {
    max-width: 240px;
  }

  #environmental-debt-img {
    max-width: 260px;
  }

  #insight-in-mind-img,
  #world-wealth-calculator-img {
    max-width: 300px;
  }

  #loseathon-img {
    max-width: 145px;
  }

  #bake-for-good-img {
    max-width: 160px;
  }

  #run-for-good-img,
  #ride-for-good-img,
  #stands-for-freedom-img,
  #conscience-or-cotton-img {
    max-width: 180px;
  }

  #christmas-for-good-img,
  #bowling-for-bucks-img,
  #polar-plunge-img,
  #crowdsourcing-for-the-poor-img,
  #counters-for-the-poor-img,
  #balanced-giving-img {
    max-width: 200px;
  }
</style>
