/* eslint-disable */
<template>
  <div class="cook">
  <main-navbar />
    <!-- header html code start -->
      <div class="cook_header">
        <div class="cook_title">
            <p><span>{{$t('about_cookie')}}</span></p>
            <p><strong>Cookies</strong></p>
            <p class="breadcrumb_links"><router-link to="/">{{$t('home')}}</router-link>&nbsp;>&nbsp;<router-link to="/cookie_page">Cookies</router-link></p>
            <p><small>{{$t('cookie_header')}}</small></p>
        </div>
      </div>
    <!-- header html code end -->
    <!-- body html code start -->
      <div class="cook_body">
        <p>
        	<strong>{{$t('what_cookie')}}</strong><br>
            {{$t('cookie_desc')}}
			<br>{{$t('cookie_store')}}<br><br>
            {{$t('cookie_off')}}
        </p>
      </div>
    <!-- body html code end -->
    <main-footer />
  </div>
</template>

<script>
/* eslint-disable */
import headerConfig from "~/config/head"

export default {
  name: 'Cookiepage',

head() {
    return headerConfig.cookie;
  	},

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
}
</script>

<style scoped>
.cook_header {
  padding: 150px 0% 100px 10%;
  background-image: url("~/assets/Images_Website/CookiePage/CookiePage/Images/backgroundgrad.svg"),
    url("~/assets/Images_Website/CookiePage/CookiePage/Images/FyD3OWBuXnY.png");
  background-size: cover, cover;
  background-position: top center, top center;
}

.cook_title>p>span{
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 25px;
  text-transform: uppercase;
  color: #3BC9DB;
}
.cook_title strong{
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 54.5455px;
  line-height: 74px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #FFFFFF;
}
.cook_title p{
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.2;
  display: flex;
  align-items: center;
  color: #FFFFFF;
}
.cook_title small{
  display: none;
}
.cook_body{
  padding: 2.5% 15%;
}
.cook_body p{
  font-family: Poppins;
  font-Weight :400;
  font-style: normal;
  font-Size :12px;
  Line-height :26px;
  text-align: left;
  color: #000000;
}
.cook_body strong{
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 26px;
  letter-spacing: 0.25px;
  color: #000000;
}
@media only screen and (max-width: 900px) {
.cook_header {
  padding: 150px 10% 100px 10%;
}
.cook_title{
  text-align: center;
  align-items: center;
}
.cook_title p{
  text-align: center;
  line-height: 1.2;
  display: block;
}
.cook_title>p>span{
  display: none;
}
.cook_title strong{
  display: block;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  text-align: center;
  text-transform: inherit;
}
.cook_title i{
  display: block;
  font-weight: 600;
  font-size: 18px;
  line-height: 74px;
  align-items: center;
  text-align: center;
  font-style: i;
  letter-spacing: 0.75px;
}
.cook_title small{
  display: block;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.75px;
  color: #fff;
}
.cook_title i>span{
  color: #3BC9DB;
}
.cook_body{
  padding: 40px;
}
.cook_body strong{
  font-size: 17px;
  line-height: 35px;
}
}
</style>
