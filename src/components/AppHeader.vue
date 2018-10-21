<template>
  <header id="masthead" class="bg-light">
    <div class="container header-top py-1 d-flex justify-content-between align-items-center">
      <a href="#" class="logo-link">
        <img src="../assets/logo.png" alt="CalendarForGood">
      </a>

      <div class="header-top__nav-section">
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <router-link to="/register" class="nav-link">Register</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link pr-0">Login</router-link>
          </li>
        </ul>
        <ul class="nav social-nav justify-content-end">
          <li class="nav-item">
            <a href="#" class="nav-link bg-facebook">
              <i class="fab fa-facebook-f"></i>
              <span class="sr-only">Facebook</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link bg-twitter">
              <i class="fab fa-twitter"></i>
              <span class="sr-only">Twitter</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link bg-instagram">
              <i class="fab fa-instagram"></i>
              <span class="sr-only">Instagram</span>
            </a>
          </li>
        </ul>
      </div>
    
    </div>

    <nav id="main-nav" :class="['navbar',' navbar-expand-md', 'navbar-dark', 'bg-secondary', 'py-0', { 'sticky' : sticky }]">
      <div class="container">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-content" aria-controls="navbar-content" aria-expanded="false" aria-label="Toggle Navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbar-content">
            <ul class="navbar-nav justify-content-center w-100">
              <li class="nav-item">
                <router-link to="/about" class="nav-link">Home</router-link>                
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link">About</router-link>                
              </li>
              <li class="nav-item">
                <router-link to="/volunteer" class="nav-link">Videos</router-link>
              </li>
              <li class="nav-item ml-auto">
                <router-link to="/donate" class="nav-link font-weight-bold text-uppercase bg-primary text-white">Donate</router-link>
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
  .navbar-dark {
    .navbar-nav {
      .nav-link {
        color: #fff;
        transition: color .2s ease;
        padding: 1rem;

        &:hover {
          color: $primary;
        }
      }

      .nav-item:last-child {
        .nav-link {
          padding-left: 1.625rem;
          padding-right: 1.625rem;
          letter-spacing: 0.075rem;
        }
      }
    } 
  }

  .logo-link {
    img {
      max-width: 200px;
    }
  }

  .social-nav {
    text-align: right;

    .nav-item {
      padding-left: .25em;
      padding-right: .25em;
      &:last-child {
        padding-right: 0;
      }
      .nav-link {
        width: 25px;
        height: 25px;
        display: flex;
        align-items:center;
        justify-content: center;
        padding: 0;
        color: #fff;
        background-color: $primary;
        border-radius: 100%;
        transition: background-color .2s ease;
        font-size: 0.875em;
    
        &:hover {
          background-color: $secondary !important;
        }
      }
    }
  }

  .header-top__nav-section {
    .nav-link {
      color: $secondary;
      padding: .5rem;
    }
  }
</style>
