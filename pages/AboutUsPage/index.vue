/* eslint-disable */
<template>
	<div class="hello">
		<main-navbar :isSelected = 4 />
		<!-- header html code start -->
		<div class="produkter_header">
			<div class="produkter_title">
				<p><span>{{$t('about_small_desc')}}</span></p>
				<p><strong>{{$t('about')}}</strong></p>
				<p class="breadcrumb_links"><router-link to="/">{{$t('lowercase_homepage')}}</router-link> > <router-link to="/aboutUsPage">{{$t('lowercase_about')}}</router-link></p>
				<p><small>{{$t('invisable')}}</small></p>
			</div>
		</div>
		<!-- header html code end -->
		<!-- section2 html code start -->
		<div class="section2">
			<div class="s2_imgs sdf" id="s2_b"><img src="~/assets/Images_Website/AboutUs/AboutUs/Images/Internet Connection2 2.png" class="s2_img"/></div>
			<div class="s2_desc">
				<p><strong>{{$t('swetrack_meaning1')}}<br> <span>{{$t('swetrack_meaning2')}}</span> </strong></p>
				<p>{{$t('swetrack_meaning_desc1')}}<br><br>

					{{$t('swetrack_meaning_desc2')}} <span>{{$t('swetrack_meaning_desc3')}}</span>{{$t('swetrack_meaning_desc4')}}<br><br>

					<span>{{$t('swetrack_meaning_desc5')}}</span>{{$t('swetrack_meaning_desc6')}}</p>
				</div>
				<div class="s2_imgs" id="s2_a"><img src="~/assets/Images_Website/AboutUs/AboutUs/Images/Internet Connection2 2.png" class="s2_img"/></div>
			</div>
			<!-- section2 html code end -->
			<!-- section1 html code start -->
			<div class="section1">
				<VueSlickCarousel v-bind="settings" ref="carousel" class="carousel-card">
					<div>
						<div class="s1_card">
							<img src="~/assets/Images_Website/AboutUs/AboutUs/Icons/icon_1.svg"/>
							<p><strong>{{$t('solution_for_everyone')}}</strong></p>
							<p>{{$t('solution_desc')}} </p>
							<router-link to="/b2bPage" class="btn btn-info">{{$t('readmore')}}</router-link>
						</div>
					</div>
					<div>
						<div class="s1_card">
							<img src="~/assets/Images_Website/AboutUs/AboutUs/Icons/icon_1.svg"/>
							<p><strong>{{$t('hardware_services')}}</strong></p>
							<p>{{$t('hardware_desc')}}</p>
							<router-link to="/palLandingPage" class="btn btn-info">{{$t('readmore')}}</router-link>
						</div>
					</div>
					<div>
						<div class="s1_card">
							<img src="~/assets/Images_Website/AboutUs/AboutUs/Icons/icon_1.svg"/>
							<p><strong>{{$t('software_services')}}</strong></p>
							<p>{{$t('software_desc')}}</p>
							<router-link to="/palLandingPage" class="btn btn-info">{{$t('readmore')}}</router-link>
						</div>
					</div>
				</VueSlickCarousel>
			</div>
			<!-- section1 html code end -->
			<!-- section4 html code start -->
			<div class="m_section4">
				<div class="m_s4_card">
					<p>{{$t('question')}}</p>
					<p><strong>{{$t('question_desc1')}}<br> {{$t('question_desc2')}}</strong></p>
					<br>
					<router-link  to="/mailWindow" class="btn btn-info">{{$t('support')}}</router-link>
				</div>
			</div>
			<!-- section4 html code end -->
			<!-- section5 html code start -->
			<div class="m_section5">
				<p><strong>{{$t('gps1')}}<span> &nbsp;{{$t('gps2')}}</span></strong></p>
				<p><small>{{$t('gps_desc1')}}<br> {{$t('gps_desc2')}}<br> {{$t('gps_desc3')}}</small></p>
				<p class="brinner">{{$t('gps_small_desc')}}</p>
			</div>
			<!-- section5 html code end -->
			<!-- section6 html code start -->
			<div class="section6">
				<div class="s6_mar_0">
					<div class="s6_year" @click="isShow==1?isShow=0:isShow=1">
						<p>20<span>13</span></p>
						<div class="blue_line"></div>
					</div>
					<p class="s6_res">{{$t('founded')}} <br>Electronics AB</p>
					<div class="s6_desc" :class="{ 'show': isShow==1?true:false }">
						<p>{{$t('desc_2013_1')}}<br><br>
							{{$t('desc_2013_2')}}<br><br>
							{{$t('desc_2013_3')}}
						</p>
					</div>
					
				</div>
				<div class="s6_mar_20">
					<div class="s6_year" @click="isShow==2?isShow=0:isShow=2">
						<p>20<span>14</span></p>
						<div class="blue_line"></div>
					</div>
					<p class="s6_res">{{$t('tailor')}}  <br>{{$t('differapp')}}</p>
					<div class="s6_desc" :class="{ 'show': isShow==2?true:false }">
						<p>{{$t('desc_2014_1')}}<br><br>
						{{$t('desc_2014_2')}}</p>
					</div>
					
				</div>
				<div class="s6_mar_0">
					<div class="s6_year" @click="isShow==3?isShow=0:isShow=3">
						<p>20<span>16</span></p>
						<div class="blue_line"></div>
					</div>
					<p class="s6_res">{{$t('tailor')}} <br>{{$t('differapp')}}</p>
					<div class="s6_desc" :class="{ 'show': isShow==3?true:false }">
						<p>{{$t('desc_2016_1')}}<br><br>
						{{$t('desc_2016_2')}}</p>
					</div>
					
				</div>
				<div class="s6_mar_20">
					<div class="s6_year" @click="isShow==4?isShow=0:isShow=4">
						<p>20<span>18</span></p>
						<div class="blue_line"></div>
					</div>
					<p class="s6_res">{{$t(('milestone'))}} <br>SweTrack Lite</p>
					<div class="s6_desc" :class="{ 'show': isShow==4?true:false }">
						<p>{{$t('desc_2018')}} </p>
					</div>
					
				</div>
				<div class="black_line"></div>
			</div>
			<!-- section6 html code end -->
			<main-footer />
		</div>
	</template>

	<script>
	/* eslint-disable */
	import VueSlickCarousel from 'vue-slick-carousel'
	import 'vue-slick-carousel/dist/vue-slick-carousel.css'
	// optional style for arrows & dots
	import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
	import headerConfig from '../../config/head'

	export default {
	name: 'AboutPage',

	head() {
    return headerConfig.about;
  	},
	  
	data () {
		return {
			fadeShow: 0,
			isShow: 0,
			settings:{
				"infinite": false,
				"speed": 500,
				"slidesToShow": 3,
				"slidesToScroll": 3,
				"initialSlide": 0,
				"arrows": false,
				"responsive": [
				{
					"breakpoint": 1100,
					"settings": {
						"slidesToShow": 1,
						"slidesToScroll": 1,
						"infinite": true,
						"dots": true,
						"dotsClass": "slick-dots custom-dot-class",
					}
				},
				]
			}
		}
	},
	components: {
		VueSlickCarousel
	}
}
</script>
<style>
.slick-dots{
	bottom: -60px;
}
</style>
<style scoped>
.d-none{
	display: none !important;
}
.text_style{
	font-style: normal !important;
	font-weight: 500 !important;
	font-size: 17px !important;
	line-height: 25px !important;
	color: rgba(31, 151, 239, 0.57) !important;
}

a,
a:hover,
a:focus {
	text-decoration: none;
}
.btn {
	padding: 12px 40px;
	font-size: 10px;
	font-size: 1.5vw;
	border-radius: 5px;
}
.btn.btn-info {
	background:#1F97EF;
	box-shadow: 0px 0px 28px 3px rgba(0, 0, 0, 0.1);
	color: #fff;
}
.btn.btn-primary {
	background: #ffffff;
	box-shadow: 0px 0px 28px 3px rgba(0, 0, 0, 0.1);
	color: #000;
	margin-left: 1vw;
}
.btn.btn-outline {
	background-color: blue;
	color: #fff;
	border: solid 1px #fff;
}


.produkter_header {
	padding: 130px 0% 80px 10%;
	background-image: url("~/assets/Images_Website/Products_LandingPage/Products_LandingPage/Images/backgroundgrad.svg"),
	url("~/assets/Images_Website/ForCompanies/ForCompanies/Images/FyD3OWBuXnY.png");
	background-size: cover, cover;
	background-position: top center, top center;
	text-align: left;
}

.produkter_title>p>span{
	font-family: Poppins;
	font-style: normal;
	font-weight: 600;
	font-size: 17px;
	line-height: 25px;
	text-transform: uppercase;
	color: #3BC9DB;
}
.produkter_title strong{
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
.produkter_title p{
	font-family: Montserrat;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 74px;
	display: flex;
	align-items: center;
	color: #FFFFFF;
	margin: 0;
}
.produkter_title small{
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 24px;
	text-align: left;
	letter-spacing: 0.75px;
	color: #fff;
	display: none;
}
.after{
	display: none!important;
}
.section2{
	display: flex;
	flex-direction: row;
	padding: 5%;
}
.s2_desc{
	position: relative;
	display: flex;
	flex-direction: column;
	padding: 10px;
	width: 60%;
	text-align: left;
}
.s2_desc p{
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 32px;
	letter-spacing: 0.30733px;
	color: #595959;
}
.s2_desc>p>span{
	font-weight: 600;
	font-style: italic;
	color: #1F97EF;
}

.s2_desc strong{
	font-family: Montserrat;
	font-style: normal;
	font-weight: normal;
	font-size: 44px;
	line-height: 61px;
	letter-spacing: 1.84398px;
	color: #000000;
}
.s2_desc>p>strong>span{
	color: #1F97EF;
	font-weight: 600;
}
.s2_imgs{
	display: flex;
	align-items: center;
	width: 40%;
	padding: 10px;
}
.s2_img{
	width: auto;
	height: auto;
	max-width: 100%;
	max-height: 80%;
}
#s2_a{
	display: none;
}
.section1{
	position: relative;
	padding: 0% 10%;
	width: 100%;
	background-color: #FAFAFA;
}
.carousel-card{
	padding: 50px 0px;
}
.s1_card{
	position: relative;
	width: 90%;
	height: 350px;
	margin: 5%;
	padding: 20px;
	text-align: left;
	background-color: #fff;
}
.m_section4{
	padding: 50px 10%;
	background-image: radial-gradient(grey, transparent), url("~/assets/Images_Website/AboutUs/AboutUs/Images/Support_Image.png");
	background-size: 100%, 100%;
	background-position: center;
}
.m_s4_card{
	width: 55%;
	height: 50%;
	padding: 2%;
	background-color: #fff;
}
.m_s4_card p{
	font-family: Poppins;
	font-style: normal;
	font-weight: 600;
	font-size: 17px;
	line-height: 25px;
	text-align: center;
	text-transform: uppercase;
	color: #000000;
}
.m_s4_card strong{
	font-family: Montserrat;
	font-style: normal;
	font-weight: 600;
	font-size: 32px;
	line-height: 44px;
	text-align: center;
	color: #000000;
	text-transform: none;
}
.m_s4_card .btn.btn-info{
	font-family: Montserrat;
	font-style: normal;
	font-weight: bold;
	font-size: 14px;
	line-height: 26px;
	border-radius: 0;
	transition: .3s;
}
.m_s4_card .btn.btn-info:hover{
	background: #36A5F6;
}
.m_section5{
	padding: 5% 10%;
	text-align: left;
	background-color: #F7F7F7;
}
.m_section5 p{
	font-family: Poppins;
	font-style: italic;
	font-weight: normal;
	font-size: 14px;
	line-height: 26px;
	text-align: center;
	color: #333333;
	text-align: left;
}
.m_section5 strong{
	font-family: Montserrat;
	font-style: normal;
	font-weight: 500;
	font-size: 40px;
	line-height: 43px;
	color: #333333;
}
.m_section5 small{
	font-family: Montserrat;
	font-style: normal;
	font-weight: normal;
	font-size: 17px;
	line-height: 32px;
	color: #333333;
}
.m_section5>p>strong>span{
	color: #1F97EF;
}
.brinner{
	display: none;
}
.section6{
	position: relative;
	padding: 0px 10%;
	padding-bottom: 30px;
}
.s6_mar_0, .s6_mar_20{
	text-align: left;
	margin-top: 50px;
}
.s6_desc{
	padding-right: 50px;
	max-width: 930px;
}
.s6_desc p{
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 15px;
	line-height: 22px;
	color: #707070;
}
.s6_year p{
	font-style: normal;
	font-weight: normal;
	font-size: 71px;
	line-height: 1;
	color: #132439;
	margin:  0;
}
.s6_year{
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
}
.s6_year span{
	font-weight: 600;
	color: #1F97EF;
}
.blue_line{
	border: #1F97EF solid 2px;
	height: 0%;
	width: 100%;
	background-color: #1F97EF;
}
.black_line{
	position: absolute;
	width: 0;
	height: 110%;
	border: #000 solid 2px;
	bottom: 0;
	right: 10%;
	background-color: #000;
}
.s6_mar_20{
	margin-left: 20%;
}
.s6_res{
	display: none;
}
.section1 a{
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 22px;
	color: #FFFFFF;
}
.s1_card p{
	font-family: Montserrat;
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 22px;
	letter-spacing: 0.25px;
	color: #737373;
}
.s1_card strong{
	font-family: Montserrat;
	font-style: normal;
	font-weight: bold;
	font-size: 24px;
	line-height: 32px;
	letter-spacing: 0.1px;
	color: #252B42;
}
.section1 .btn {
	padding: 12px 20px;
}
.s1_card .btn-info {
	border-radius: 1px;
	position: absolute;
	bottom: 20px;
	left: 20px;
	font-family: Montserrat;
	font-style: normal;
	font-weight: 600;
	font-size: 15px;
	color: #FFFFFF;
	transition: .3s;
}
.s1_card .btn-info:hover{
	background: #36A5F6;
}
@media only screen and (max-width: 1600px) {
	.s1_card p {
		font-size: 12px;
	}
}
@media only screen and (max-width: 1400px) {
  
    .s1_card img {
    	width: auto;
    	height: auto;
    	max-width: 30px;
    	max-height: 30px;
    }
    .s1_card p {
    	margin: 5px 0px;
    }
    .s1_card strong {
    	font-size: 20px;
    }
    .s1_card p:nth-child(3) {
	    max-height: 58%;
    	font-size: 12px;
    }
    .section1 .btn {
    	padding: 8px 13px;
    }
    .s1_card .btn-info {
    	font-size: 13px;
    }
    .m_s4_card strong {
    	font-size: 25px;
    }
    .s1_card p {
    	font-size: 12px;
    }
}
@media(min-width:1100px){
	.s2_desc strong br:nth-child(2){
		display: none;
	}
}
@media only screen and (max-width: 1100px) {
	.produkter_header {
		padding: 130px 5% 80px 5%;
	}
	.produkter_title{
		text-align: center;
		align-items: center;
	}
	.produkter_title>p>span{
		display: none;
	}
	.produkter_title strong{
		display: block;
		font-size: 40px;
		line-height: 50px;
	}
	.produkter_title a{
		font-weight: 600;
		font-size: 18px;
		line-height: 74px;
		align-items: center;
		text-align: center;
		font-style: italic;
		letter-spacing: 0.75px;
	}
	.produkter_title small{
		text-align: center;
		display: block;
	}
	.produkter_title a>span{
		color: #3BC9DB;
	}
	.produkter_title small{
		display: block;
	}
}

@media(min-width: 1100px){
	.s2_desc{
		padding-left: 50px;
	}
}

@media only screen and (max-width: 1100px) {
	.section2{
		display: flex;
		flex-direction: column;
		padding: 10%;
	}
	.s2_imgs{
		display: flex;
		width: 100%;
	}
	.s2_desc{
		display: flex;
		width: 100%;
	}
	#s2_a{
		display: block;
	}
	#s2_b{
		display: none;
	}
	.section2>p{
		display: block;
		font-style: normal;
		font-weight: 500;
		font-size: 20px;
		line-height: 27px;
		text-transform: uppercase;
		color: #171717;
	}
	.section2>p>span{
		font-weight: 600;
	}
}


@media(min-width: 1100px){
	.s1_card{
		box-shadow: 0 10px 16px 0 rgb(200 200 200 / 20%), 0 6px 20px 0 rgb(200 200 200 / 19%);
		background-color: #FFF;
	}
}


@media only screen and (max-width: 1100px) {
	.section1{
		position: relative;
		padding: 10%;
		padding-bottom: 70px;

	}
	.s1_card{
		width: 100%;
		margin: 0%;
		height: 400px;
		padding-top: 50px;
	}
	.s2_desc strong{
		font-size: 18px;
		line-height: 30px;
		font-family: 'Poppins';
	}
	.s2_desc strong br {
		display: none;
	}
	.s2_desc p:last-child {
		font-size: 13px;
	}
	.s2_desc strong br:first-child{
		display: none;
	}
	/*.s1_card .btn-info{
		position: relative;
		left: 0;
		bottom: -10px;
	}*/
	.slick-list{
		box-shadow: 0 10px 16px 0 rgb(200 200 200 / 20%), 0 6px 20px 0 rgb(200 200 200 / 19%);
		background-color: #FFF;
	}
	.s1_card strong{
		font-family: Poppins;
		font-style: normal;
		font-weight: 600;
		font-size: 14px;
		line-height: 21px;
	}
	.s1_card p{
		font-family: Poppins;
		font-style: normal;
		font-weight: normal;
		font-size: 12px;
		line-height: 26px;
	}
}

@media only screen and (max-width: 1100px) {
	.m_section4{
		padding: 5% 10%;
		background-image: radial-gradient(#423b3b, transparent), url("~/assets/Images_Website/AboutUs/AboutUs/Images/Support_Image.png");
		background-size: 225% 205%;
		opacity: 0.9;
	}
	.m_s4_card{
		width: 100%;
		padding: 5%;
		background: none;
	}
	.m_s4_card p{
		font-style: normal;
		font-weight: 500;
		font-size: 19px;
		line-height: 28px;
		text-align: center;
		color: #FFFFFF;
	}
	.m_s4_card strong{
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		line-height: 20px;
		text-align: center;
		color: #FFFFFF;
	}
	.m_section4 .btn {
		padding: 8px 40px;
		font-size: 10px;
		font-size: 1.5vw;
		font-style: normal;
		font-weight: bold;
		font-size: 14px;
		line-height: 26px;
		align-items: center;
		text-align: center;
		letter-spacing: 0.56px;
		text-transform: uppercase;
	}
	.m_section4 .btn-info {
		background: #1F97EF;
		box-shadow: 0px 0px 28px 3px rgba(0, 0, 0, 0.1);
		color: #fff;
	}
}

@media only screen and (max-width: 1100px) {
	.m_section5{
		background-color: transparent;
	}
	.m_section5 strong{
		display: none;
	}
	.m_section5 small{
		display: none;
	}
	.brinner{
		display: block;
		font-style: italic;
		max-width: 250px;
		margin: 20px auto;
	}
	.produkter_title p{
		justify-content:center;
	}
}


@media only screen and (max-width: 1100px) {
	.s6_desc{
		padding-right: 0;
		text-align: center;
		max-height:0;
		overflow: hidden;
		transition: .5s;
	}
	.s6_desc.show{
		max-height: 1000px;
		overflow: hidden;
	}
	.blue_line{
		display: none;
	}
	.black_line{
		display: none;
	}
	.s6_mar_20{
		margin-left: 0%;
	}
	.s6_year p{
		font-style: normal;
		font-weight: normal;
		font-size: 32px;
		line-height: 37px;
		text-align: center;
		color: #132439;
		cursor: pointer;
	}
	.s6_res{
		display: block;
		font-family: Poppins;
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 19px;
		text-align: center;
		color: #595959;
	}
}

</style>

