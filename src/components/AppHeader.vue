<template>
  <header id="masthead">
    <nav class="navbar navbar-expand-lg navbar-light" id="main-nav">
      <div class="container">
        <a href="#" class="navbar-brand">
          <img src="../assets/logo.png" class="navbar-logo" alt="Options for Good">
        </a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">About</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Videos</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',

  data() {
    return {
     sticky: false,
     navPosition: false,
    }
  },

  mounted() {
    //eslint-disable-next-line
    this.navPosition = document.getElementById('main-nav').offsetTop
    window.addEventListener( 'scroll', this.handleScroll )
  },

  methods: {
    handleScroll() {
      if( window.scrollY >= this.navPosition ) {
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    }
  }
}
</script>

<style lang="scss">
  #masthead {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 999;
  }

  #main-nav {
    background-color: transparent;

    .navbar-logo {
      max-width: 200px;
    }

    .nav-link {
      color: $secondary;
      transition: color .2s ease;
      font-weight: 600;

      &:hover {
        color: $primary;
      }
    }
  }
</style>
