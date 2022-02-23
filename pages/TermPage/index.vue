/* eslint-disable */
<template>
  <div class="term">
    <main-navbar />
    <!-- header html code start -->
      <div class="team_header">
        <div class="team_title">
            <p><span>{{$t('our_service')}}</span></p>
            <p><strong>{{$t('term_condition')}}</strong></p>
            <p class="breadcrumb_links"><router-link to="/">{{$t('home')}}</router-link>&nbsp;>&nbsp;<router-link to="/cookiePage">Cookies</router-link></p><br>
            <p><small>{{$t('cookie_header')}}</small></p>
        </div>
      </div>
    <!-- header html code end -->
    <!-- body html code start -->
      <div class="team_body">
        <p>
            <strong>{{$t('gen_term')}}</strong><br>
            {{$t('general_term')}}
<br><br>
            <strong>{{$t('gen_term_desc1')}}</strong><br>
            {{$t('gen_term_desc2')}}
<br><br>
            {{$t('gen_term_desc3')}}
<br><br>
            {{$t('gen_term_desc4')}}
<br><br>
            {{$t('gen_term_desc5')}}
<br><br>
            {{$t('gen_term_desc6')}}
<br><br>
            {{$t('gen_term_desc7')}}

<br><br>    <strong> {{$t('gen_term_desc8')}}</strong><br>
            {{$t('gen_term_desc9')}}

<br><br>     {{$t('gen_term_desc10')}}

<br><br>     {{$t('gen_term_desc11')}}

<br><br>     {{$t('gen_term_desc12')}}

<br><br>
            <strong> {{$t('gen_term_desc13')}}</strong><br>
             {{$t('gen_term_desc14')}}
<br><br>
            <strong> {{$t('gen_term_desc15')}}</strong><br>
             {{$t('gen_term_desc16')}}

<br><br>     {{$t('gen_term_desc17')}}

<br><br>     {{$t('gen_term_desc18')}}

<br><br>    
            <strong> {{$t('gen_term_desc19')}}</strong><br>
             {{$t('gen_term_desc20')}}
<br><br>    
            <strong> {{$t('gen_term_desc21')}}</strong><br>
             {{$t('gen_term_desc22')}}
<br><br>     {{$t('gen_term_desc23')}}
          
<br><br>    
            <strong> {{$t('gen_term_desc24')}}</strong><br>
             {{$t('gen_term_desc25')}}
<br><br>
            <strong> {{$t('gen_term_desc26')}}</strong><br>
             {{$t('gen_term_desc27')}}
<br><br>
            <strong> {{$t('gen_term_desc28')}}</strong><br>
             {{$t('gen_term_desc29')}}
<br><br>
            <strong> {{$t('gen_term_desc30')}}</strong><br>
             {{$t('gen_term_desc31')}}
<br><br>
            <strong> {{$t('gen_term_desc32')}}</strong><br>
             {{$t('gen_term_desc33')}}
<br><br>
            <strong> {{$t('gen_term_desc34')}}</strong><br>
             {{$t('gen_term_desc35')}}
<br><br>
            <strong> {{$t('gen_term_desc36')}}</strong><br>
             {{$t('gen_term_desc37')}}
</p>
      </div>
    <!-- body html code end -->
    <main-footer />
  </div>
</template>

<script>
/* eslint-disable */
// import MainNavbar from './MainNavbar'
// import MainFooter from './MainFooter'

export default {
  name: 'TermPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
}
</script>

<style scoped>
.team_header {
  padding: 150px 0% 100px 10%;
  background-image: url("~/assets/Images_Website/CookiePage/CookiePage/Images/backgroundgrad.svg"),
    url("~/assets/Images_Website/CookiePage/CookiePage/Images/FyD3OWBuXnY.png");
  background-size: cover, cover;
  background-position: top center, top center;
}

.team_title>p>span{
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 25px;
  text-transform: uppercase;
  color: #3BC9DB;
;
}
.team_title strong{
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
.team_title p{
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.2;
  display: flex;
  align-items: center;
  color: #FFFFFF;
}
.team_title small{
  display: none;
}
.team_body{
  padding: 2.5% 15%;
}
.team_body p{
  font-family: Poppins;
  font-Weight :400;
  font-style: normal;
  font-Size :12px;
  Line-height :26px;
  text-align: justify;
  color: #000000;
}
.team_body strong{
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 26px;
  letter-spacing: 0.25px;
  color: #000000;
}
@media only screen and (max-width: 900px) {
.team_header {
  padding: 140px 10% 100px 10%;
}
.team_title{
  text-align: center;
  align-items: center;
}
.team_title>p>span{
  display: none;
}
.team_title strong{
  display: block;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  text-align: center;
  text-transform: inherit;
}
.team_title p{
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  text-align: center;
  letter-spacing: 0.75px;
  display: block;
}
.team_title small{
  display: block;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.75px;
  color: #fff;
}
.team_title i>span{
  color: #3BC9DB;
}
.team_body{
  padding: 40px;
}
.team_body strong{
  font-size: 17px;
  line-height: 35px;
}
}
</style>
