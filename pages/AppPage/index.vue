/* eslint-disable */
<template>
	<div class="stlive">
		<main-navbar />
		<!-- header html code start -->
		<div class="STlive_header" id="scrollView3">
			<div class="STlive_des">
				<p><strong>SweTrack Live App</strong></p>
				<p><small>{{$t('title_desc')}}</small></p>
				<div class="imgcardbtns">
					<router-link class="btn btn-info"  to="/swetrackLitePage" @click="scroll_view($event)">{{$t('feature')}}</router-link>
					<a href="#" class="btn btn-primary" style="padding-top: 10px; padding-bottom: 10px;">{{$t('video')}}</a>
				</div>
			</div>
			<div class="STlive_img">
				<img src="~/assets/Images_Website/SweTrackLite/Images/ny1.png" class="imgSTlive_img"/>
			</div>
		</div>
		<!-- header html code end -->

		<!-- section1 html code start -->
		<div class="m_section1" id="scrollView1">
			<p><strong>{{$t('feature_plus')}}</strong></p>
			<p>{{$t('feature_plus_desc')}}</p>
			<div class="m_s1_main">
				<div class="m_s1_card">
					<div class="m_s1_c_sub" @click="isShow=0, sShow=0">
						<img src="~/assets/Images_Website/AppPage_HomePage/AppPage_HomePage/Icons/Geofenceicon1.svg" class="m_s1_c_icon"/>
						<p><strong>{{$t('low_geofence')}}</strong></p>
						<p  :class="{ 'bolde': sShow==0?true:false }">{{$t('low_geofence_desc')}} </p>
					</div>
					<div class="m_s1_c_sub" @click="isShow=1, sShow=1">
						<img src="~/assets/Images_Website/AppPage_HomePage/AppPage_HomePage/Icons/AlarmIcon1.svg" class="m_s1_c_icon"/>
						<p><strong>{{$t('alarm')}}</strong></p>
						<p  :class="{ 'bolde': sShow==1?true:false }">{{$t('alarm_desc')}} </p>
					</div>
					<div class="m_s1_c_sub" @click="isShow=2, sShow=2">
						<img src="~/assets/Images_Website/AppPage_HomePage/AppPage_HomePage/Icons/3686DestinationonMap2.svg" class="m_s1_c_icon"/>
						<p><strong>{{$t('position_history')}}</strong></p>
						<p  :class="{ 'bolde': sShow==2?true:false }">{{$t('posi_his_desc')}} </p>
					</div>
				</div>
				<div class="m_s1_card">
					<img src="~/assets/Images_Website/AppPage_HomePage/AppPage_HomePage/GIFS/Geofence.gif" class="m_s1_c_img" :class="{ 'd-none': isShow==0?false:true }"/>
					<img src="~/assets/Images_Website/AppPage_HomePage/AppPage_HomePage/GIFS/Alarm.gif" class="m_s1_c_img" :class="{ 'd-none': isShow==1?false:true }"/>
					<img src="~/assets/Images_Website/AppPage_HomePage/AppPage_HomePage/GIFS/Location_History.gif" class="m_s1_c_img" :class="{ 'd-none': isShow==2?false:true }"/>
					<img src="~/assets/Images_Website/AppPage_HomePage/AppPage_HomePage/GIFS/Livesparning.gif" class="m_s1_c_img" :class="{ 'd-none': isShow==3?false:true }"/>
					<img src="~/assets/Images_Website/AppPage_HomePage/AppPage_HomePage/GIFS/Control_Panel.gif" class="m_s1_c_img" :class="{ 'd-none': isShow==4?false:true }"/>
					<img src="~/assets/Images_Website/AppPage_HomePage/AppPage_HomePage/GIFS/tailor.gif" class="m_s1_c_img" :class="{ 'd-none': isShow==5?false:true }"/>
				</div>
				<div class="m_s1_card">
					<div class="m_s1_c_sub" @click="isShow=3, sShow=3">
						<img src="~/assets/Images_Website/AppPage_HomePage/AppPage_HomePage/Icons/LiveTracking.svg" class="m_s1_c_icon"/>
						<p><strong>{{$t('tracking')}}</strong></p>
						<p  :class="{ 'bolde': sShow==3?true:false }">{{$t('tracking_desc')}}</p>
					</div>
					<div class="m_s1_c_sub" @click="isShow=4, sShow=4">
						<img src="~/assets/Images_Website/AppPage_HomePage/AppPage_HomePage/Icons/controlpanelicon1.svg" class="m_s1_c_icon"/>
						<p><strong>{{$t('controlpanel')}}</strong></p>
						<p  :class="{ 'bolde': sShow==4?true:false }">{{$t('con_desc')}} </p>
					</div>
					<div class="m_s1_c_sub" @click="isShow=5, sShow=5">
						<img src="~/assets/Images_Website/AppPage_HomePage/AppPage_HomePage/Icons/Equalizer11.svg" class="m_s1_c_icon"/>
						<p><strong>{{$t('cus_account')}}</strong></p>
						<p  :class="{ 'bolde': sShow==5?true:false }">{{$t('cus_account_desc')}} </p>
					</div>
				</div>
			</div>
		</div>
		<!-- section1 html code end -->

		<!-- section2 html code start -->
		<div class="m_section2" id="scrollView2">
			<p><strong>{{$t('features_maxitracker')}}</strong></p>
			<p>{{$t('battery')}} </p>
			<VueSlickCarousel v-bind="settings2" ref="carousel2" style="padding-bottom: 40px;padding-top:40px;">
				<div>
					<div class="s2_main">
						<div class="m_s2_card">
							<img src="~/assets/Images_Website/AppPage_HomePage/AppPage_HomePage/GIFS/Geofence.gif" class="m_s2_c_img"/>
						</div>
						<div class="m_s2_c_sub">
							<img src="~/assets/Images_Website/AppPage_HomePage/AppPage_HomePage/Icons/Geofenceicon1.svg" class="m_s2_c_icon"/>
							<p><strong>{{$t('low_geofence')}}</strong></p>
							<p>{{$t('low_geofence_desc')}}</p>
						</div>
					</div>
				</div>
				<div>
					<div class="s2_main">
						<div class="m_s2_card">
							<img src="~/assets/Images_Website/AppPage_HomePage/AppPage_HomePage/GIFS/Alarm.gif" class="m_s2_c_img"/>
						</div>
						<div class="m_s2_c_sub">
							<img src="~/assets/Images_Website/AppPage_HomePage/AppPage_HomePage/Icons/AlarmIcon1.svg" class="m_s2_c_icon"/>
							<p><strong>{{$t('alarm')}}</strong></p>
							<p>{{$t('alarm_desc')}}</p>
						</div>
					</div>
				</div>
				<div>
					<div class="s2_main">
						<div class="m_s2_card">
							<img src="~/assets/Images_Website/AppPage_HomePage/AppPage_HomePage/GIFS/Location_History.gif" class="m_s2_c_img"/>
						</div>
						<div class="m_s2_c_sub">
							<img src="~/assets/Images_Website/AppPage_HomePage/AppPage_HomePage/Icons/3686DestinationonMap2.svg" class="m_s2_c_icon"/>
							<p><strong>{{$t('position')}}</strong></p>
							<p>{{$t('posi_his_desc')}}</p>
						</div>
					</div>
				</div>
				<div>
					<div class="s2_main">
						<div class="m_s2_card">
							<img src="~/assets/Images_Website/AppPage_HomePage/AppPage_HomePage/GIFS/Livesparning.gif" class="m_s2_c_img"/>
						</div>
						<div class="m_s2_c_sub">
							<img src="~/assets/Images_Website/AppPage_HomePage/AppPage_HomePage/Icons/LiveTracking.svg" class="m_s2_c_icon"/>
							<p><strong>{{$t('tracking')}}</strong></p>
							<p>{{$t('tracking_desc')}}</p>
						</div>
					</div>
				</div>
				<div>
					<div class="s2_main">
						<div class="m_s2_card">
							<img src="~/assets/Images_Website/AppPage_HomePage/AppPage_HomePage/GIFS/Control_Panel.gif" class="m_s2_c_img"/>
						</div>
						<div class="m_s2_c_sub">
							<img src="~/assets/Images_Website/AppPage_HomePage/AppPage_HomePage/Icons/controlpanelicon1.svg" class="m_s2_c_icon"/>
							<p><strong>{{$t('controlpanel')}}</strong></p>
							<p>{{$t('con_desc')}}</p>
						</div>
					</div>
				</div>
				<div>
					<div class="s2_main">
						<div class="m_s2_card">
							<img src="~/assets/Images_Website/AppPage_HomePage/AppPage_HomePage/GIFS/tailor.gif" class="m_s2_c_img"/>
						</div>
						<div class="m_s2_c_sub">
							<img src="~/assets/Images_Website/AppPage_HomePage/AppPage_HomePage/Icons/Equalizer11.svg" class="m_s2_c_icon"/>
							<p><strong>{{$t('cus_account')}}</strong></p>
							<p>{{$t('cus_account_desc')}}</p>
						</div>
					</div>
				</div>
			</VueSlickCarousel>
		</div>
		<!-- section2 html code end -->

		<!-- section5 html code start -->
		<div class="section5">
			<div>
				<p><strong>{{$t('download_today')}}</strong></p>
				<p><strong>{{$t('down')}}</strong></p>
				<p>{{$t('small_gps_1')}} <br> {{$t(small_gps_2)}}</p>
				<div class="imgcardbtns2">
					<a href="https://apps.apple.com/se/app/swetrack-live/id1179391248" class="btn btn-primary"><img src="~/assets/Images_Website/SweTrackLite/Icons/appstorebtn.svg" class="appgooglebtn_img"/>App Store</a>
					<a href="https://play.google.com/store/apps/details?id=com.smobile.swetrack2&hl=en&gl=US" class="btn btn-info"><img src="~/assets/Images_Website/SweTrackLite/Icons/googleplaybtn.svg"  class="appgooglebtn_img"/>Google Play</a>
				</div>
			</div>
		</div>
		<!-- section5 html code end -->
		<main-footer />
	</div>
</template>

<script>
// optional style for arrows & dots
/* eslint-disable */
import VueSlickCarousel from 'vue-slick-carousel'
import headerConfig from '../../config/head'
// import MainNavbar from '..//MainNavbar'
// import MainFooter from './MainFooter'
export default {
	name: 'Apppage',

	head() {
    return headerConfig.app;
  	},

	data () {
		return {
			isShow: 0,
			sShow: 6,
			settings2: {
				"slidesToShow": 1,
				"slidesToScroll": 1,
				"infinite": true,
				"dots": true,
		// "autoplay":true,
		// "autoplaySpeed": 4000,
		"arrows": false,
		"dotsClass": "slick-dots custom-dot-class"
	}
}
},
components: {
	VueSlickCarousel },
	methods:{
		scroll_view(e){
			e.preventDefault()
			let scroll_div = document.getElementById('scrollView3').clientHeight - 106
			window.scrollTo(0, scroll_div)
		}
	}
}
</script>

<style scoped>
a,
a:hover,
a:focus {
	text-decoration: none;
}
.STlive_header {
	padding: 20px 5% 0% 5%;
	padding-top: 150px;
	background-image: url("~/assets/Images_Website/SweTrackLite/Images/Heroimagebackground11.png");
	background-size: cover, cover;
	background-position: top center, top center;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
}
.STlive_des {
	width: 100%;
	height: 100%;
	float: left;
	text-align: left;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
}
.imgSTlive_img {
	width: 50%;
	margin-top: 5%;
	margin-bottom: -4px;
}
.STlive_des strong {
	font-family: Montserrat;
	font-style: normal;
	font-weight: bold;
	font-size: 42px;
	line-height: 26px;
	display: flex;
	align-items: center;
	text-align: center;
	color: #FFFFFF;
	text-align:center;
}
.STlive_des small {
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 17px;
	line-height: 26px;
	display: flex;
	align-items: center;
	text-align: center;
	letter-spacing: 1.7px;
	color: #FFFFFF;
}
.STlive_des span {
	color: #3bc9db;
}

.imgcardbtns {
	margin-top: 40px;
}
.btn {
	padding: 10px 40px;
	font-size: 10px;
	font-size: 1.5vw;
	border-radius: 3px!important;
}
.STlive_header .btn-info {
	background:#1F97EF;
	box-shadow: 0px 0px 28px 3px rgba(0, 0, 0, 0.1);
	color: #fff;
	background: linear-gradient(176.63deg, #1F97EF 26.33%, #132439 229.99%);
	cursor: pointer;
	font-size: 14px;
	border-radius: 0px !important;
	font-family: Montserrat;
	font-style: normal;
	font-weight: bold;
}
.STlive_header .btn-info:hover {
	background: #36A5F6!important;
}
.STlive_header .btn-primary {
	background: #ffffff;
	box-shadow: 0px 0px 28px 3px rgba(0, 0, 0, 0.1);
	color: #000;
	margin-left: 1vw;
	font-size: 14px;
	border-radius: 0px !important;
	font-family: Montserrat;
	font-style: normal;
	font-weight: bold;
	padding: 10px 54px;
}
.STlive_header .btn-primary:hover {
	background: #ddd;
}
.STlive_header .btn-outline {
	background-color: blue;
	color: #fff;
	border: solid 1px #fff;
}
.STlive_img {
	position: relative;
}

@media only screen and (max-width: 1100px) {
	.STlive_header {
		padding: 150px 5% 0% 5%;
	}
	.STlive_des strong {
		text-transform: none;
	}
	.STlive_des>p+p {
		display: none;
	}
	.STlive_des {
		width: 100%;
		height: 100%;
		float: left;
		text-align: center;
	}
	.imgSTlive_img {
		width: 90%;
		margin-top: 12vw;
	}
	.STlive_des strong {
		font-size: 6vw;
	}
	.btn {
		padding: 10px 30px;
		font-size: 2vw;
	}
	.imgcardbtns {
		margin-top: 0vw;
	}
}

.m_section1{
	padding: 40px 10%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
}
.m_s1_main{
	padding: 0;
}
.m_s1_card{
	width: 31%;
	float: left;
	margin: 1%;
	overflow: hidden;
}
.m_s1_c_img{
	width: 344%;
	margin-top: -30%;
	margin-left: -125%;
}
.m_section1 p{
	font-family: Roboto;
	font-style: normal;
	font-weight: 300;
	font-size: 15px;
	line-height: 26px;
	display: flex;
	align-items: center;
	text-align: center;
	letter-spacing: 0.6px;
	color: #949494;
}
.m_s1_c_sub p{
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 17px;
	line-height: 26px;
	color: #949494;
	text-align: left;
}
.m_section1>p>strong{
	font-family: Montserrat;
	font-style: normal;
	font-weight: bold;
	font-size: 40px;
	line-height: 26px;
	display: flex;
	align-items: center;
	text-align: center;
	color: #333333;
}
.m_s1_c_sub>p>strong{
	font-family: Roboto;
	font-style: normal;
	font-weight: 500;
	font-size: 22px;
	line-height: 26px;
	display: flex;
	align-items: center;
	color: #333333;
}
.m_section1>p{
	text-align: center;
}
.m_s1_c_icon{
	margin-left: -90%;
	width: 30px;
}
.m_s1_c_sub{
	height: 300px;
	position: relative;
	z-index: 2;
	cursor: pointer;
}

.m_section2{
	display: flex;
	flex-direction: column;
	margin: 5%;
	display: none;
}
.m_s2_card{
	display: flex;
	width: 100%;
	overflow: hidden;
}
.m_s2_c_img{
	width: 205%;
	margin-left: -51%;
	margin-top: -70px;
	margin-bottom: -50px;
}
.m_section2>p{
	font-style: normal;
	font-weight: normal;
	font-size: 24px;
	line-height: 28px;
	text-align: center;
	letter-spacing: 0.6px;
	color: #373737;
}
.m_section2>p>strong{
	font-style: normal;
	font-weight: 600;
	font-size: 30px;
	line-height: 40px;
	text-align: center;
	color: #1D1D1D;
}
.s2_main{
	display: flex;
	flex-direction: column;
	background-color: #FAFAFA;
}
.m_s2_c_sub{
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
}
.m_s2_c_icon{
	width: 30px;
	margin-bottom: 10px;
}
.m_s2_c_sub p{
	font-style: normal;
	font-weight: 300;
	font-size: 16px;
	line-height: 24px;
	text-align: center;
	color: #1D1D1D;
	display: inline-block;
	max-width: 350px;
}
.m_s2_c_sub strong{
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 21px;
	text-align: center;
	text-transform: uppercase;
	color: #1F97EF;
}
@media only screen and (max-width: 1100px) {
	.m_section1{
		display: none;
	}
	.m_section2{
		display: block;
	}
	.STlive_header .btn-info, .STlive_header .btn-primary{
		font-size: 10px;
	}
	.STlive_header .btn-primary{
		padding: 10px 45px;
	}
	.slick-slider{
		padding-top:40px;
		padding-bottom: 40px;
		margin-top: 20px;
		background-color: #fafafa;
	}
}

.section5{
	padding-top: 30px;
	padding-left: 20%;
	padding-right: 20%;
	padding-bottom: 50px;
	background-image: url("~/assets/Images_Website/SweTrackLite/Images/backgroundgrad.svg");
	background-size: cover;
	background-position: bottom center;
}
.section5 p{
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 22px;
	line-height: 33px;
	text-align: center;
	color: #FFFFFF;
}
.section5 strong{
	font-family: Montserrat;
	font-style: normal;
	font-weight: 600;
	font-size: 36px;
	line-height: 44px;
	text-align: center;
	color: #FFFFFF;
}
.section5 .btn {
	padding: 15px 30px;
	font-size: 1.2vw;
	border-radius: 3px;
}
.section5 .btn-info {
	background: #132439;
	box-shadow: 0px 0px 28px 3px rgba(0, 0, 0, 0.1);
	color: #fff;
	margin-left: 30px;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 23px;
	color: #FFFFFF;
	padding: 10px 20px;
}
.section5 .btn-info:hover {
	background: #1C395C;
	transition: all 0.3s;
}
.section5 .btn-primary {
	background: #132439;
	box-shadow: 0px 0px 28px 3px rgba(0, 0, 0, 0.1);
	color: #fff;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 23px;
	color: #FFFFFF;
	padding: 10px 20px;
}
.section5 .btn-primary:hover {
	background: #1C395C;
	transition: all 0.3s;
}
.appgooglebtn_img{
	margin-bottom: -10px;
	margin-right: 10px;
}
.section5>div>p:nth-child(2){
	display:none;
}
.imgcardbtns2{
	margin-top: 40px;
}
@media only screen and (max-width: 1100px) {
	.section5{
		padding: 10%;
	}
	.section5>div>p:nth-child(2){
		display:block;
	}
	.imgcardbtns2 {
		margin-top: 35px;
	}
	.section5>div>p:first-child{
		display:none;
	}
	.section5 p{
		font-family: Poppins;
		font-style: normal;
		font-weight: 300;
		font-size: 12px;
		line-height: 20px;
		text-align: center;
		color: #FFFFFF;
	}
	.section5 strong{
		font-family: Poppins;
		font-style: normal;
		font-weight: 500;
		font-size: 19px;
		line-height: 28px;
		text-align: center;
		color: #FFFFFF;
	}
	.section5 .btn {
		font-size: 12px;
	}
	.section5 .btn {
		padding: 10px 10px;
	}
	.appgooglebtn_img{
		margin-right: 5px;
	    width: auto;
	    height: auto;
	    max-width: 20px;
	    padding-bottom: 4px;
	}
	.s2_main{
		display: block;
	}
	.m_s2_c_img{
		max-height: 1500px;
	}
	.m_section2>p {
		font-family: Poppins;
		font-style: normal;
		font-weight: normal;
		font-size: 15px;
		line-height: 26px;
		text-align: center;
		letter-spacing: 0.6px;
		color: #373737;
		margin: 0;
	}
	.m_section2>p>strong {
		font-family: Poppins;
		font-style: normal;
		font-weight: 500;
		font-size: 17px;
		line-height: 25px;
		text-align: center;
		color: #000000;
	}
	.m_s2_c_sub p {
		font-family: Poppins;
		font-style: normal;
		font-weight: 300;
		font-size: 12px;
		line-height: 20px;
		text-align: center;
		color: #000000;
		margin: 0;
	}
	.m_s2_c_sub p:last-child {
		padding-bottom: 20px;
	}

	.m_s2_c_sub strong {
		font-family: Poppins;
		font-style: normal;
		font-weight: 600;
		font-size: 14px;
		line-height: 21px;
		text-align: center;
		text-transform: uppercase;
		color: #1F97EF;
		margin-top: 10px;
	}
	section5 .btn-info {
		margin-left: 10px;
	}
	.section5 .btn-info {
		margin-left: 10px;
	}
	.m_s2_c_icon {
		width: auto;
	    height: auto;
	    max-width: 20px;
	    max-height: 20px;
	    margin-top: 10px;
	}
}
@media(max-width: 800px){
	.m_s2_c_img{
		max-height: 1200px;
	}
}
@media(max-width: 600px){
	.m_s2_c_img{
		max-height: 900px;
	}
}
@media(max-width: 400px){
	.m_s2_c_img{
		max-height: 500px;
	}
}
.bolde{
	color: black!important;
}
</style>
