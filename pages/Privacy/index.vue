/* eslint-disable */
<template>
  <div class="privacy">
  <main-navbar />
    <!-- header html code start -->
      <div class="privacy_header">
        <div class="privacy_title">
            <p><span>{{$t('per_infor')}}</span></p>
            <p><strong>{{$t('pp')}}</strong></p>
            <p class="breadcrumb_links"><router-link to="/">{{$t('pp')}}</router-link>&nbsp;>&nbsp;<router-link to="/cookiePage">Cookies</router-link></p><br>
            <p><small>{{$t('pp')}}</small></p>
       </div>
      </div>
    <!-- header html code end -->
    <!-- body html code start -->
      <div class="privacy_body">
      <p>   <strong>{{$t('pp')}}</strong><br>
            {{$t('pp_desc')}}
<br><br>
            <strong>GDPR</strong><br>
            {{$t('gdpr_desc')}}
<br><br>
            <strong>{{$t('swetrack_live')}}</strong><br>
            {{$t('payment')}}

<br><br>
            
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
  name: 'PrivacyPage',

  head() {
   		 return headerConfig.privacy;
  	},

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
}
</script>

<style scoped>
.privacy_header {
  padding: 150px 0% 100px 10%;
  background-image: url("~/assets/Images_Website/CookiePage/CookiePage/Images/backgroundgrad.svg"),
    url("~/assets/Images_Website/CookiePage/CookiePage/Images/FyD3OWBuXnY.png");
  background-size: cover, cover;
  background-position: top center, top center;
}

.privacy_title>p>span{
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 25px;
  text-transform: uppercase;
  color: #3BC9DB;
;
}
.privacy_title strong{
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
.privacy_title p{
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.2;
  display: flex;
  align-items: center;
  color: #FFFFFF;
}
.privacy_title small{
  display: none;
}
.privacy_body{
  padding: 2.5% 15%;
}
.privacy_body p{
  font-family: Poppins;
  font-Weight :400;
  font-style: normal;
  font-Size :17px;
  Line-height :26px;
  text-align: justify;
  color: #000000;
}
.privacy_body strong{
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 26px;
  letter-spacing: 0.25px;
  color: #000000;
}
@media only screen and (max-width: 900px) {
.privacy_header {
  padding: 140px 10% 100px 10%;
}
.privacy_title{
  text-align: center;
  align-items: center;
}
.privacy_title>p>span{
  display: none;
}
.privacy_title strong{
  display: block;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  text-align: center;
  text-transform: inherit;
}
.privacy_title p{
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  text-align: center;
  font-style: italic;
  letter-spacing: 0.75px;
  display: block;
}
.privacy_title small{
  display: block;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.75px;
  color: #fff;
}
.privacy_title i>span{
  color: #3BC9DB;
}
.privacy_body{
  padding: 40px;
}
.privacy_body strong{
  font-size: 17px;
  line-height: 35px;
}
}
</style>
