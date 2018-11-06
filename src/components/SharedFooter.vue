<template>
  <footer 
    class="footer" 
    id="footer"
  >
    <div class="footer__contents pb-4">
      <div class="container">
        <div class="footer__col footer__navigation-col">
          <template v-if="$slots.footer__navigation">
            <slot name="footer__navigation"></slot>
          </template>
          <template v-else>
            <ul class="footer__navigation">
              <li><a href="#">News</a></li>
              <li><a href="#">Discussions</a></li>
              <li><a href="#">Donate</a></li>
              <li><a href="#">Volunteer</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Tech support</a></li>
              <li><a href="#">Site Feedback</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </template>
        </div>
        <div class="footer__col footer__logo-col">
          <div class="footer__logo-container">
            <p> A project of: </p>
            <router-link to='/'>
              <img
              class='footer__logo'
              :src="imgUrl"
              alt="Maximum for Good Logo"
              >
            </router-link>
          </div>
        </div>
        <div class="footer__col footer__logo-col">
          <div class="footer__motto">
            <template v-if="$slots.footer__motto">
              <slot name="footer__motto"></slot>
            </template>
            <template v-else>
              <p> Helping non-profits and their supporters <br/> <strong>RAISE MONEY.  RAISE AWARENESS. <br/> CHANGE THE WORLD</strong>  </p>
              <button class="btn btn-primary">Learn More</button>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__copyright">
      <div class="container-fluid">
        <template v-if="$slots.footer__copyright">
          <slot name="footer__copyright"></slot>
        </template>
        <p> <small>Copyright (c) 2006-2019 DailySource.  All rights reserved.  Terms of Service.</small> </p>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'SharedFooter',

    props: {
      imgUrl: {
        type: String,
        default: require('../assets/maximum-for-good-logo.png'),
      }
    }
  }
  
</script>

<style lang="scss">
  #footer {
    color: #666666;
    padding: 0;
    background-color: #d7d7d7;
    border-top: 1px solid #8D99AE;

    * {
      box-sizing: border-box;
    }

    p {
      margin-top: 0;
    }
  }

  .footer__contents {
    display: flex;
    justify-content: space-between;
    padding-top: 1em;
    padding-bottom: 1em;
    

    > .container {
      display: flex;
      padding-left: 1em;
      padding-right: 1em;
    }
  }

  .footer__col {
    padding-left: 1em;
    padding-right: 1em;
    flex: 0 1;
    flex-basis: 33%;
  }

  .footer__navigation {
    list-style: none;
    columns: 2;
    margin-left: 0;
    padding: 0;
    margin-top: 12px;
  }

  .footer__navigation a,
  .footer__navigation a:visited {
    color: #05204A;
    text-transform: none;
  }

  .footer__logo-container { 
    text-align: center; 
  }

  .footer__logo-container img { 
    max-width: 180px; 
    width: 100%;
  }


  .footer__motto {
    font-size: 1.125em;
    text-align: center;
    line-height: 30px;

    .btn {
      font-size: 0.75em;
      padding: .5em;
      letter-spacing: normal;
    }
  }

  .footer__copyright {
    text-align: center;
    background-color: darken(#bdbdbd, 1%);
    padding-bottom: 0.375em;

    p {
      margin-bottom: 0;
      color: #fff;
      text-align: cener;
    }
  }

  .footer__logo {
    margin-top: 1em;
  }
</style>
