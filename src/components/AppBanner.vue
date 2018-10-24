<template>
  <section id="banner">
    <div class="banner__content">
      <div class="container text-center">
        <h2>A Host of Options to Do Good</h2>
      </div>
    </div>
    <div class="banner__scroll-down-container">
      <button 
        @click="smoothScroll('content', 800, -70)"
        class="scroll-down-btn btn btn-outline-primary" 
      >
        <i class="fas fa-angle-down"></i>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  #banner {
    min-height: calc(100vh - 128px);
    background-size: cover;
    background-position: center;
    background-image: url('../assets/banner-image.jpg');
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,.4)
    }
  }

  .banner__content {
    position: absolute;
    bottom: 8%;
    left: 0;
    right: 0;
    color: #fff;

    h2 {
      font-size: 2.75rem;
      // text-shadow: 0 2px 2px rgba(0,0,0,.7);
      margin-bottom: .375em; 
      font-weight: 900;
    }

    .btn {
      font-weight: 700;
      text-transform: uppercase;
    }
  }

  .banner__scroll-down-container {
    position: absolute;
    bottom: 2%;
    left: 0;
    right: 0;
    text-align: center;
  }

  .btn.scroll-down-btn {
    border-radius: 100%;
    border-width: 2px;
    border-color: #EF4836;
    color: #EF4836;
    font-size: 1.25em;
    padding: 0;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    i {
      transition: margin-top .2s ease;
      margin-top: 0;
    }

    &:hover i{
      margin-top: .125em;
    }
  }
</style>
