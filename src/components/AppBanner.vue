<template>
  <section id="banner">
    <div class="banner__content">
      <div class="container text-center">
        <h2>A Host of Options to Do Good</h2>
        <div class="btn btn-lg btn-primary">Donate</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  #banner {
    min-height: calc(95vh - 128px);
    // background-attachment: fixed;
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
      background-color: rgba(255,255,255,.06)
    }
  }

  .banner__content {
    position: absolute;
    bottom: 15%;
    left: 0;
    right: 0;
    color: #fff;

    h2 {
      font-size: 2.75rem;
      text-shadow: 0 2px 2px rgba(0,0,0,.7);
      margin-bottom: .375em; 
      font-weight: 900;
    }

    .btn {
      font-weight: 700;
      text-transform: uppercase;
    }
  }
</style>
