<template>
  <header class="site-header" id="site-header">
    <div class="container">
      <div class="header-top d-flex justify-content-between align-items-center py-1">
        <img 
          :src="logo" 
          class="navbar-logo" 
          alt="CalendarForGood"
        >
        <div class="header-top__nav-section">
          <ul class="nav justify-content-end">
            <li class="nav-item">
              <router-link to="/register" class="nav-link px-1 header-top__link text-secondary">Register</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login" class="nav-link px-1 pr-0 header-top__link text-secondary">Login</router-link>
            </li>
          </ul>
          <ul class="nav social-nav justify-content-end">
            <li class="nav-item social-nav__item">
              <a href="#" class="nav-link social-nav__link">
                <i class="fab fa-facebook-f"></i>
                <span class="sr-only">Facebook</span>
              </a>
            </li>
            <li class="nav-item social-nav__item">
              <a href="#" class="nav-link social-nav__link">
                <i class="fab fa-twitter"></i>
                <span class="sr-only">Twitter</span>
              </a>
            </li>
            <li class="nav-item social-nav__item">
              <a href="#" class="nav-link social-nav__link">
                <i class="fab fa-instagram"></i>
                <span class="sr-only">Instagram</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div :class="['header-nav bg-secondary', { sticky: this.sticky }]">
      <nav class="navbar navbar-expand-lg py-0" id="main-nav">
        <div class="container">
          <div class="collapse navbar-collapse" id="navbar-content">
            <ul class="navbar-nav w-100">
              <li class="nav-item"><router-link to="/" class="nav-link main-nav__link">Home</router-link></li>
              <li class="nav-item"><router-link to="/" class="nav-link main-nav__link">About Us</router-link></li>
              <li class="nav-item"><router-link to="/" class="nav-link main-nav__link">Volunteer</router-link></li>
              <li class="nav-item"><router-link to="/" class="nav-link main-nav__link">Nonprofits</router-link></li>
              <li class="nav-item"><router-link to="/" class="nav-link main-nav__link">Contact Us</router-link></li>
              <li class="nav-item ml-auto"><router-link to="/" class="nav-link bg-primary text-white main-nav__link">Donate</router-link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',

  data() {
    return {
     sticky: false,
     navPosition: false,
     logo: null,
    }
  },

  mounted() {
    //eslint-disable-next-line
    this.navPosition = document.getElementById('main-nav').offsetTop
    window.addEventListener( 'scroll', this.handleScroll )
  },

  methods: {
    handleScroll () {
      if( window.scrollY >= this.navPosition ) {
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    },

    getLogo () {
      if (this.$route.name === 'event') {
        const {category, id} = this.$route.params

        const event = this.$store.getters['fundraisers/getFundraiser'](category, id)
        this.logo = require(`@/assets/logos/${category}/${event.imgName}`)
      } else {
        this.logo = require('@/assets/logo.png')
      }
    },
  },

  watch: {
    logo: {
      immediate: true,
      handler: 'getLogo',
    },
  }
}
</script>

<style lang="scss">
  .navbar-logo {
    max-width: 200px;
  }

  .nav-link {
    color: $secondary;
    transition: color .2s ease;

    &:hover {
      color: $primary;
    }
  }

  .main-nav__link {
    padding-top: 1em !important;
    padding-bottom: 1em !important;
    font-weight: 600;
    color: #fff;

    .nav-item:last-child & {
      padding-left: 1.5em !important;
      padding-right: 1.5em !important;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: .02em;
    }
  }

  .social-nav__link {
    width: 24px;
    height: 24px;
    border-radius: 100%;
    padding: 0 !important;
    display: flex !important;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: $secondary;
    transition: background-color .2s ease;
    font-size: 0.875em;

    &:hover {
      background-color: $primary;
      color: #fff;
    }
  }

  .social-nav__item {
    margin-left: .25em;
    margin-right: .25em;

    &:last-child {
      margin-right: 0;
    }
  }

  .header-nav.sticky {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
  }
</style>
