/* eslint-disable */
<template>
  <div>
    <nav class="navbar" id="nav" :class="{ 'nav-fix': !view.atTopOfPage, 'mobile-nav-show': mobileNavShow, 'back-black': isBlack }" >
      <button class="navbar-toggler navbar-toggler-right" type="button"  @click="mobileNavShow = true" :class="{ 'show': !mobileNavShow }">
        <img src="../assets/Images_Website/HomePage/hambergur.svg">
      </button>
      <button class="navbar-toggler navbar-toggler-right" type="button"  @click="mobileNavShow = false"  :class="{ 'show': mobileNavShow }">
        &times;
      </button>
      <nuxt-link class="navbar-brand" :to="localePath('/')">
        <img src="../assets/Images_Website/HomePage/Images/SweTrackLogoWhite 1.png">
        <img src="../assets/Images_Website/HomePage/Images/logo_black.png">
      </nuxt-link>
      <ul class="mobile-nav navbar-nav">
        <li class="nav-item">
          <nuxt-link class="nav-link" :class="{'active': isSelected==1?true:false}" :to="localePath('/')">{{$t('home')}}</nuxt-link>
        </li>
        <li class="nav-item" :class="{ 'dropdown-show': dropdown_show }">
          <nuxt-link class="nav-link dropdown-toggle" :class="{'active': isSelected==2?true:false}" :to="localePath('/productsLandingPage')">{{$t('products')}}</nuxt-link>
          <span class="dropdown-icon" @click="dropdown_show = !dropdown_show"></span>
          <div class="dropdown-menu" >
            <div class="dropdown-item">
              <nuxt-link :to="localePath('/swetrackLitePage')">
                <span>{{$t('nav_product1.swetrack_lite')}}</span>
              </nuxt-link>
            </div>
            <div class="dropdown-item">
              <nuxt-link :to="localePath('/maxiTrackerPage')">
                <span>{{$t('nav_product2.maxitracker')}}</span>
              </nuxt-link>
            </div>
            <div class="dropdown-item">
              <nuxt-link :to="localePath('/swetrackPlusPage')">
                <span>{{$t('nav_product3.swetrack_plus')}}</span>
              </nuxt-link>
            </div>
          </div>
        </li>
        <li class="nav-item" :class="{ 'dropdown-show': dropdown2_show }">
          <nuxt-link class="nav-link dropdown-toggle" :class="{'active': isSelected==3?true:false}" :to="localePath('/forCompanyPage')">{{$t('business')}}</nuxt-link>
          <span class="dropdown-icon" @click="dropdown2_show = !dropdown2_show">>         </span>
          <div class="dropdown-menu" >
            <div class="dropdown-item">
              <nuxt-link :to="localePath('/b2bPage')">
                <span>{{$t('nav_business1.B2B')}}</span>
              </nuxt-link>
            </div>
            <div class="dropdown-item">
              <nuxt-link :to="localePath('/palLandingPage')">
                <span>{{$t('nav_business2.personalized_solutions')}}</span>
              </nuxt-link>
            </div>
          </div>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" :class="{'active': isSelected==4?true:false}" :to="localePath('/aboutUsPage')">{{$t('about')}}</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" :class="{'active': isSelected==5?true:false}" :to="localePath('/contactUsPage')">{{$t('contact')}}</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" :class="{'active': isSelected==6?true:false}" :to="localePath('/willDO')">{{$t('thanks')}}</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" :class="{'active': isSelected==7?true:false}" :to="localePath('/retailerPage')">{{$t('reseller')}}</nuxt-link>
        </li>
      </ul>
      <div class="collapse navbar-collapse" id="navb">
        <ul class="navbar-nav mr-auto web-nav" id="nav-link-main">
          <li class="nav-item">
            <nuxt-link class="nav-link" :class="{'active': isSelected==1?true:false}" :to="localePath('/')">{{$t('home')}}</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link dropdown-toggle" :class="{'active': isSelected==2?true:false}" :to="localePath('/productsLandingPage')">{{$t('products')}}</nuxt-link>
            <div class="dropdown-menu" >
              <div class="dropdown-item">
                <label>{{$t('bestsellers')}}</label>
                <nuxt-link :to="localePath('/swetrackLitePage')">
                  <span>{{$t('nav_product1.swetrack_lite')}}</span>
                  <svg width="12" height="16" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg"><path d="M9.11118 8.2229L0.739212 1.76371C0.598851 1.65537 0.508915 1.49776 0.489196 1.32556C0.469478 1.15336 0.521588 0.980659 0.634063 0.845462C0.746539 0.710265 0.910168 0.623647 1.08895 0.604653C1.26773 0.585661 1.44702 0.635853 1.58739 0.744189L10.6206 7.72103C10.7 7.78195 10.764 7.85931 10.8081 7.94737C10.8521 8.03543 10.875 8.13191 10.875 8.22966C10.875 8.3274 10.8521 8.42389 10.8081 8.51195C10.764 8.60001 10.7 8.67737 10.6206 8.73829L1.58738 15.6904C1.51813 15.746 1.43805 15.7878 1.35182 15.8132C1.2656 15.8386 1.17497 15.8472 1.08525 15.8385C0.995529 15.8298 0.908524 15.8039 0.829329 15.7623C0.750134 15.7208 0.680346 15.6644 0.62405 15.5966C0.567756 15.5287 0.526087 15.4507 0.501489 15.3672C0.476891 15.2836 0.469859 15.1961 0.480803 15.1099C0.491745 15.0237 0.520442 14.9405 0.565215 14.8651C0.609989 14.7897 0.669934 14.7236 0.741543 14.6708L9.11118 8.2229Z" stroke-width="1.965645" stroke-miterlimit="10"/></svg>
                </nuxt-link>
              </div>
              <div class="dropdown-item">
                <label>{{$t('flexible')}}</label>
                <nuxt-link :to="localePath('/maxiTrackerPage')">
                  <span>{{$t('nav_product2.maxitracker')}}</span>
                  <svg width="12" height="16" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg"><path d="M9.11118 8.2229L0.739212 1.76371C0.598851 1.65537 0.508915 1.49776 0.489196 1.32556C0.469478 1.15336 0.521588 0.980659 0.634063 0.845462C0.746539 0.710265 0.910168 0.623647 1.08895 0.604653C1.26773 0.585661 1.44702 0.635853 1.58739 0.744189L10.6206 7.72103C10.7 7.78195 10.764 7.85931 10.8081 7.94737C10.8521 8.03543 10.875 8.13191 10.875 8.22966C10.875 8.3274 10.8521 8.42389 10.8081 8.51195C10.764 8.60001 10.7 8.67737 10.6206 8.73829L1.58738 15.6904C1.51813 15.746 1.43805 15.7878 1.35182 15.8132C1.2656 15.8386 1.17497 15.8472 1.08525 15.8385C0.995529 15.8298 0.908524 15.8039 0.829329 15.7623C0.750134 15.7208 0.680346 15.6644 0.62405 15.5966C0.567756 15.5287 0.526087 15.4507 0.501489 15.3672C0.476891 15.2836 0.469859 15.1961 0.480803 15.1099C0.491745 15.0237 0.520442 14.9405 0.565215 14.8651C0.609989 14.7897 0.669934 14.7236 0.741543 14.6708L9.11118 8.2229Z" stroke-width="1.965645" stroke-miterlimit="10"/></svg>
                </nuxt-link>
              </div>
              <div class="dropdown-item">
                <label>{{$t('novelty')}}</label>
                <nuxt-link :to="localePath('/swetrackPlusPage')">
                  <span>{{$t('nav_product3.swetrack_plus')}}</span>
                  <svg width="12" height="16" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg"><path d="M9.11118 8.2229L0.739212 1.76371C0.598851 1.65537 0.508915 1.49776 0.489196 1.32556C0.469478 1.15336 0.521588 0.980659 0.634063 0.845462C0.746539 0.710265 0.910168 0.623647 1.08895 0.604653C1.26773 0.585661 1.44702 0.635853 1.58739 0.744189L10.6206 7.72103C10.7 7.78195 10.764 7.85931 10.8081 7.94737C10.8521 8.03543 10.875 8.13191 10.875 8.22966C10.875 8.3274 10.8521 8.42389 10.8081 8.51195C10.764 8.60001 10.7 8.67737 10.6206 8.73829L1.58738 15.6904C1.51813 15.746 1.43805 15.7878 1.35182 15.8132C1.2656 15.8386 1.17497 15.8472 1.08525 15.8385C0.995529 15.8298 0.908524 15.8039 0.829329 15.7623C0.750134 15.7208 0.680346 15.6644 0.62405 15.5966C0.567756 15.5287 0.526087 15.4507 0.501489 15.3672C0.476891 15.2836 0.469859 15.1961 0.480803 15.1099C0.491745 15.0237 0.520442 14.9405 0.565215 14.8651C0.609989 14.7897 0.669934 14.7236 0.741543 14.6708L9.11118 8.2229Z" stroke-width="1.965645" stroke-miterlimit="10"/></svg>
                </nuxt-link>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link dropdown-toggle" :class="{'active': isSelected==3?true:false}" :to="localePath('/forCompanyPage')">{{$t('business')}}</nuxt-link>
            <div class="dropdown-menu" >
              <div class="dropdown-item">
                <label>{{$t('streamline')}}</label>
                <nuxt-link :to="localePath('/b2bPage')">
                  <span>{{$t('nav_business1.b2b')}}</span>
                  <svg width="12" height="16" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg"><path d="M9.11118 8.2229L0.739212 1.76371C0.598851 1.65537 0.508915 1.49776 0.489196 1.32556C0.469478 1.15336 0.521588 0.980659 0.634063 0.845462C0.746539 0.710265 0.910168 0.623647 1.08895 0.604653C1.26773 0.585661 1.44702 0.635853 1.58739 0.744189L10.6206 7.72103C10.7 7.78195 10.764 7.85931 10.8081 7.94737C10.8521 8.03543 10.875 8.13191 10.875 8.22966C10.875 8.3274 10.8521 8.42389 10.8081 8.51195C10.764 8.60001 10.7 8.67737 10.6206 8.73829L1.58738 15.6904C1.51813 15.746 1.43805 15.7878 1.35182 15.8132C1.2656 15.8386 1.17497 15.8472 1.08525 15.8385C0.995529 15.8298 0.908524 15.8039 0.829329 15.7623C0.750134 15.7208 0.680346 15.6644 0.62405 15.5966C0.567756 15.5287 0.526087 15.4507 0.501489 15.3672C0.476891 15.2836 0.469859 15.1961 0.480803 15.1099C0.491745 15.0237 0.520442 14.9405 0.565215 14.8651C0.609989 14.7897 0.669934 14.7236 0.741543 14.6708L9.11118 8.2229Z" stroke-width="1.965645" stroke-miterlimit="10"/></svg>
                </nuxt-link>
              </div>
              <div class="dropdown-item">
                <label>{{$t('unlimited')}}</label>
                <nuxt-link :to="localePath('/palLandingPage')">
                  <span>{{$t('nav_business2.personalized_solutions')}}</span>
                  <svg width="12" height="16" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg"><path d="M9.11118 8.2229L0.739212 1.76371C0.598851 1.65537 0.508915 1.49776 0.489196 1.32556C0.469478 1.15336 0.521588 0.980659 0.634063 0.845462C0.746539 0.710265 0.910168 0.623647 1.08895 0.604653C1.26773 0.585661 1.44702 0.635853 1.58739 0.744189L10.6206 7.72103C10.7 7.78195 10.764 7.85931 10.8081 7.94737C10.8521 8.03543 10.875 8.13191 10.875 8.22966C10.875 8.3274 10.8521 8.42389 10.8081 8.51195C10.764 8.60001 10.7 8.67737 10.6206 8.73829L1.58738 15.6904C1.51813 15.746 1.43805 15.7878 1.35182 15.8132C1.2656 15.8386 1.17497 15.8472 1.08525 15.8385C0.995529 15.8298 0.908524 15.8039 0.829329 15.7623C0.750134 15.7208 0.680346 15.6644 0.62405 15.5966C0.567756 15.5287 0.526087 15.4507 0.501489 15.3672C0.476891 15.2836 0.469859 15.1961 0.480803 15.1099C0.491745 15.0237 0.520442 14.9405 0.565215 14.8651C0.609989 14.7897 0.669934 14.7236 0.741543 14.6708L9.11118 8.2229Z" stroke-width="1.965645" stroke-miterlimit="10"/></svg>
                </nuxt-link>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" :class="{'active': isSelected==4?true:false}" :to="localePath('/aboutUsPage')">{{$t('about')}}</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" :class="{'active': isSelected==5?true:false}" :to="localePath('/contactUsPage')">{{$t('contact')}}</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" :class="{'active': isSelected==6?true:false}" to="#">{{$t('thanks')}}</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" :class="{'active': isSelected==7?true:false}" :to="localePath('/retailerPage')">{{$t('reseller')}}</nuxt-link>
          </li>
        </ul>
        <div id="nav-search">
          <button id="nav-search-btn" @click='click_search'>
            <img src="../assets/Images_Website/HomePage/ic_search.svg">
            <img src="../assets/Images_Website/HomePage/Images/ic_black_search.svg">
          </button>
          <input type="text" id="nav-search-input" @blur="disable_search">
          <span id="cancel" @click="disable_search">x</span>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
/* eslint-disable */

/* eslint-disable */
export default {
  name: "HelloWorld",
  data() {
    return {
      view: {
        atTopOfPage: true
      },
      mobileNavShow:false,
      dropdown_show: false,
      dropdown2_show: false
    };
  },
  props:{
    isBlack:{
      type: Boolean,
      default: false
    },
    isSelected:{
      type: Number,
      default: 0
    }
  },
  components: {},
  beforeMount () {
    window.addEventListener('scroll', this.nav_fix)
  },
  mounted() {
    window.addEventListener("scroll", this.nav_fix)
    // window.addEventListener.scroll = this.nav_fix
  },
  methods: {
    click_search(){
      let link_main = document.getElementById("nav-link-main")
      let nav_search = document.getElementById("nav-search")
      if(!nav_search.classList.contains('show')){
        link_main.style.display = 'none'
        nav_search.classList.add('show')
        if(window.innerWidth < 1100){
          let navb = document.getElementById("navb")
          navb.style.left = '20px'
          navb.style.right = '20px'
          document.getElementsByClassName('navbar-brand')[0].style.opacity = 0
          document.getElementsByClassName('navbar-toggler')[0].style.opacity = 0
        }
        document.getElementById('nav-search-input').focus()
        document.getElementById("cancel").style.display = 'block'
      } else {
        let link_main = document.getElementById("nav-link-main")
        let nav_search = document.getElementById("nav-search")
        let nav_search_input = document.getElementById('nav-search-input')
        if(nav_search.classList.contains('show')){
          nav_search.classList.remove('show')
          nav_search_input.value = ''
          link_main.removeAttribute('style')
          if(window.innerWidth < 1100){
            let navb = document.getElementById("navb")
            navb.removeAttribute("style")
            document.getElementsByClassName('navbar-brand')[0].removeAttribute("style")
            document.getElementsByClassName('navbar-toggler')[0].removeAttribute("style")
          }
        }
      }
    },
    disable_search(){
      let link_main = document.getElementById("nav-link-main")
      let nav_search = document.getElementById("nav-search")
      let nav_search_input = document.getElementById('nav-search-input')
      document.getElementById("cancel").style.display = 'none'
      if(nav_search.classList.contains('show')){
        nav_search.classList.remove('show')
        nav_search_input.value = ''
        link_main.removeAttribute('style')
        if(window.innerWidth < 1100){
          let navb = document.getElementById("navb")
          navb.removeAttribute("style")
          document.getElementsByClassName('navbar-brand')[0].removeAttribute("style")
          document.getElementsByClassName('navbar-toggler')[0].removeAttribute("style")
        }
      }
    },
    nav_fix(){
      // when the user scrolls, check the pageYOffset
      if(window.pageYOffset>0){
          // user is scrolled
          if(this.view.atTopOfPage) this.view.atTopOfPage = false
      }else{
          // user is at top of page
          if(!this.view.atTopOfPage) this.view.atTopOfPage = true
      }
    }
  },
};
</script>

<style lang="css">
*, *:before, *:after {
    box-sizing: border-box;
}
a, a:focus, a:hover{
  text-decoration: none;
}
.mr-auto{
  margin-right: auto;
}
nav{
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
  height: 108px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 40px;
  transition: background-color .3s;
}
#nav.nav-fix{
  background-color: #000;
}
#nav.back-black{
  background-color: #000;
}
nav a{
  cursor: pointer;
  transition: color .3s;
}
nav a:hover{
  color: #3bc9db;
}
nav a>svg{
  margin-top: 3px;
  fill: #181818;
  margin-left: 20px;
  transition: fill .3s;
}
nav a:hover>svg{
  fill: #3bc9db;
}
.navbar-brand{
  display: inline-block;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-right: 10px;
  line-height: inherit;
  white-space: nowrap;
}
.navbar-brand>img{
  width: 180px;
  height: 35px;
}
.navbar-brand>img:first-child{
  display:block;
}
.navbar-brand>img+img{
  display: none;
}
.navbar-toggler{
  display: none;
  font-size: 46px;
}
.navbar-nav{
  flex-direction: row;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  padding-left: 5%;
  margin-bottom: 0;
  list-style: none;
}
.navbar-collapse{
  position: relative;
  display: flex;
  flex-basis: auto;
  flex-grow: 1;
  align-items: center;
}
#nav-search{
  display: flex;
  flex: row nowrap;
  margin-right: 20px;
  width: 70px;
  display: none;
}
#nav-search.show{
  width: 100%;
}
#nav-search-btn, #nav-search-btn:active, #nav-search-btn:hover, #nav-search-btn:focus{
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  margin-right: 20px;
}
#nav-search-btn>img{
  width: 37px;
  height: 37px;
}
#nav-search-btn>img:first-child{
  display: block;
}
#nav-search-btn>img+img{
  display: none;
}
#nav-search-input{
  display:none;
  background-color: transparent;
  border: none;
  outline: none;
  border-bottom: solid 1px #FFF;
  width: 100%;
  color: #FFF;
  font-size: 20px;
  letter-spacing: 2px;
}
span#cancel {
  display: none;
  font-size: 30px;
  color: white;
}
span#cancel:hover {
  cursor: pointer;
}
#nav-search.show #nav-search-input{
  display: block;
}
.nav-item{
  padding: 5px 15px;
  position: relative;
}
.nav-link{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  position: relative;
}
.dropdown-item {
    display: block;
    width: 100%;
    padding: 10px 20px;
    clear: both;
    font-weight: 400;
    color: #212529;
    text-align: left;
    white-space: nowrap;
    padding: 15px 30px;
    background-color: transparent;
}
.dropdown-item>label{
  display: block;
  font-style: normal;
  font-weight: normal;
  font-size: 12.1395px;
  line-height: 15px;
  color: #6B6B6B;
}
.dropdown-item a{
  display: flex;
  justify-content: space-between;
  color: #181818;
  font-size: 21px;
  line-height: 26px;
  font-weight: 600;
  margin-top: 3px;
}
.nav-link.active{
  color: #3BC9DB;
}
@media only screen and (max-width: 1400px) {

  .nav-item {
    padding: 5px 6px;
  }
  .navbar-nav {
    padding-left: 0px;
  }
  .nav-link {
    font-size: 14px;
  }
}
@media(min-width: 1100px){
  .mobile-nav.navbar-nav{
    display: none;
  }
  .dropdown-toggle::after {
      display: inline-block;
      width: 0;
      height: 0;
      margin-left: .255em;
      vertical-align: .255em;
      content: "";
      border-top: .3em solid;
      border-right: .3em solid transparent;
      border-bottom: 0;
      border-left: .3em solid transparent;
  }
  .nav-item:hover .dropdown-toggle::after{
    margin-left: .255em;
    vertical-align: .255em;
    content: "";
    border-top: 0;
    border-right: .3em solid transparent;
    border-bottom: .3em solid;
    border-left: .3em solid transparent;
  }
  .nav-item:hover .dropdown-menu{
    opacity: 1;
    z-index: 21;
    transform: translateY(0) scale(1, 1);
  }
  .dropdown-menu{
    min-width: 300px;
    opacity: 0;
    z-index: -1;
    position: absolute;
    top: 100%;
    left: 0;
    border-radius: 5px;
    background-color: #FFF;
    transform: translateY(10px) scale(0, 0);
    transition: opacity .7s;
    font-family: 'proxima-nova', sans-serif;
  }
  .dropdown-item+.dropdown-item{
    border-top: solid 1px #EFEFEF;
  }
}

@media(max-width: 1100px){
  nav{
    padding: 10px 10px;
    height: 65px;
  }
  #nav.mobile-nav-show{
    background-color: #FFF;
  }
  #nav-search-btn, #nav-search-btn:active, #nav-search-btn:hover, #nav-search-btn:focus{
    margin-right: 0;
  }
  #nav-search{
    margin-right: 0;
    width: unset;
  }
  .navbar{
    border-bottom: solid 1px #eee;
  }
  #nav.nav-fix, #nav.back-black{
    border-bottom: none;
  }
  .navbar-brand{
    position: relative;
    margin: 0 auto;
    top: 0;
    left: 0;
  }
  .web-nav.navbar-nav{
    display: none;
  }
  .nav-link{
    color: #181818;
    font-size: 17px;
  }
  .dropdown-item a {
    font-size: 15px;
  }
  #navb{
    position:absolute;
    right: 0;
  }
  .navbar-toggler, .navbar-toggler:focus, .navbar-toggler:hover{
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    position: absolute;
  }
  .navbar-toggler.show{
    display: flex;
    align-items: center;
    font-size: 38px;
  }
  .navbar-toggler>img{
    width: 30px;
  }
  .navbar-toggler.show > img {
    width: 20px;
  }
  .navbar-brand>img:first-child {
      width: auto;
      height: auto;
      max-width: 150px;
  }
  #nav-search-btn>img:first-child {
      display: block;
      width: auto;
      height: auto;
      max-width: 30px;
  }
  .mobile-nav-show{
    background-color: #FFF;
  }
  .mobile-nav.navbar-nav{
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #FFF;
    margin-top: 0;
    flex-direction:column;
  }
  .mobile-nav.navbar-nav {
    -moz-transition-duration: 0.3s;
    -webkit-transition-duration: 0.3s;
    -o-transition-duration: 0.3s;
    transition-duration: 0.3s;
  }
  .mobile-nav.navbar-nav{
    max-height: 0;
    overflow: hidden;
  }
  .mobile-nav-show .mobile-nav.navbar-nav{
    max-height: 800px;
    overflow: hidden;
  }
  .mobile-nav.navbar-nav .nav-item{
    position: relative;
    text-align: left;
    padding: 10px 20px;
    font-size: 28px;
    border-top: solid 1px #eee;
  }
  .mobile-nav.navbar-nav .dropdown-toggle:after{
    display: none;
  }
  .mobile-nav-show .navbar-brand>img:first-child{
    display:none;
  }
  .mobile-nav-show .navbar-brand>img+img{
    display: block;
    width: auto;
    height: auto;
  }
  .mobile-nav-show #nav-search-btn>img:first-child{
    display: none;
  }
  .mobile-nav-show #nav-search-btn>img+img{
    display: block;
    width: auto;
    height: auto;
    max-width: 30px;
  }
  .dropdown-icon{
    position: absolute;
    top: 10px;
    cursor: pointer;
    right: 20px;
    transform: rotate(90deg);
    transition: .3s;
  }
  .dropdown-show .dropdown-icon{
    transform: rotate(270deg);
    color: #3bc9db;
  }
  .dropdown-menu{
    max-height: 0;
    overflow: hidden;
    transition: .3s;
  }
  .dropdown-show .dropdown-menu{
    max-height:300px;
    overflow: hidden;
  }
  .dropdown-item{
    padding: 10px 20px;
  }
}

</style>
