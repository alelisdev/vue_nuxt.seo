/* eslint-disable */
<template>
	<div class="homepage">
		<main-navbar :isSelected=1 />
		<!-- header html code start -->
		<div class="home_header">
			<div class="imgcard row">
				<div class="card_des col-6">
					<p><strong>{{$t('smartand')}} <span>{{$t('efficient')}}</span><br>{{$t('trackingsolutions')}} </strong></p>
					<p><small>{{$t('real_small')}}</small></p>
					<div class="imgcardbtns">
						<router-link to="/productsLandingPage" class="btn btn-info">{{$t('products')}}</router-link>
						<router-link to="/forCompanyPage" class="btn btn-primary">{{$t('services')}}</router-link>
					</div>
					<div class="icons">
						{{$t('followus')}}
						<img src="~assets/Images_Website/HomePage/Icons/minus.svg" class="imgcard_icon"/>
						<a href="https://www.facebook.com/swetrack/"><img src="~assets/Images_Website/HomePage/Icons/Facebook_logo.svg" class="imgcard_icon"></a>
						<a href="https://www.linkedin.com/company/swetrack-electronicsab"><img src="~assets/Images_Website/HomePage/Icons/Linked_logo.svg" class="imgcard_icon"></a>
						<a href="https://www.instagram.com/swetrack_sweden/?hl=en"><img src="~assets/Images_Website/HomePage/Icons/Instagram_logo.svg" class="imgcard_icon"></a>
						<a href="https://www.youtube.com/channel/UCAsKxqJliZPSB8Pip7dZ8rg"><img src="~assets/Images_Website/HomePage/Icons/video.svg" class="imgcard_icon"></a>
					</div>
				</div>
				<div class="card_img col-6">
					<img src="~assets/Images_Website/HomePage/Images/Group5505.png" class="imgcard_img"/>
				</div>
			</div>
		</div>
		<!-- header html code end -->
		<!-- section1 html code start -->
		<div class="section1">
			<div class="section1_card bor">
				<div class="section1_imgs">
					<router-link to="/swetrackLitePage">
						<img src="~assets/Images_Website/HomePage/Images/SweTrack_Lite.png"  class="section1_img"/>
					</router-link>
				</div>
				<div class="section1_des">
					<router-link to="/swetrackLitePage">
						<p><strong>{{$t('nav_product1.swetrack_lite')}}</strong><br>Rek: 499:-<br><span>{{$t('readmore')}} &#8594;</span></p>
					</router-link>
				</div>
				<div class="section1_right">
					<router-link to="/swetrackLitePage">
						<img src="~assets/Images_Website/HomePage/Icons/Arrow-Right 2.svg"  class="section1_right"/>
						<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
					</router-link>
				</div>
			</div>
			<div class="section1_card bor">
				<div class="section1_imgs">
					<router-link to="/maxiTrackerPage">
						<img src="~assets/Images_Website/HomePage/Images/MaxiTracker.png"  class="section1_img"/>
					</router-link>
				</div>
				<div class="section1_des">
					<router-link to="/maxiTrackerPage">
						<p><strong>{{$t('nav_product2.maxitracker')}}</strong><br>Rek: 990:-<br><span>{{$t('readmore')}} &#8594;</span></p>
					</router-link>
				</div>
				<div class="section1_right">
					<router-link to="/maxiTrackerPage">
						<img src="~assets/Images_Website/HomePage/Icons/Arrow-Right 2.svg"  class="section1_right"/>
						<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
					</router-link>
				</div>
			</div>
			<div class="section1_card">
				<div class="section1_imgs">
					<router-link to="/swetrackPlusPage">
						<img src="~assets/Images_Website/HomePage/Images/SweTrack_Plus_med_rak_skugga 1.png"  class="section1_img"/>
					</router-link>
				</div>
				<div class="section1_des">
					<router-link to="/swetrackPlusPage">
						<p><strong>{{$t('nav_product3.swetrack_plus')}}</strong><br>Rek: 799:-<br><span>{{$t('readmore')}} &#8594;</span></p>
					</router-link>
				</div>
				<div class="section1_right">
					<router-link to="/swetrackPlusPage">
						<img src="~assets/Images_Website/HomePage/Icons/Arrow-Right 2.svg"  class="section1_right"/>
						<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
					</router-link>
				</div>
			</div>
		</div>
		<!-- section1 html code end -->
		<!-- carousel html code start-->
		<div class="carousel-wrap">
			<div class="carousel-link">
				<span @click="goto_slide('1')" class="slide-link" :class="{ 'isActive': isActive==1?true:false }">{{$t('geofence')}}</span>
				<span @click="goto_slide('2')" class="slide-link" :class="{ 'isActive': isActive==2?true:false }">{{$t('tracking')}}</span>
				<span @click="goto_slide('3')" class="slide-link" :class="{ 'isActive': isActive==3?true:false }">{{$t('alarm')}}</span>
				<span @click="goto_slide('4')" class="slide-link" :class="{ 'isActive': isActive==4?true:false }">{{$t('position')}}</span>
				<span @click="goto_slide('5')" class="slide-link" :class="{ 'isActive': isActive==5?true:false }">{{$t('energysavingmode')}}</span>
			</div>
			<div class="carousel">
				<VueSlickCarousel v-bind="settings" ref="carousel" style="padding-bottom: 30px;">
					<div class="row" :class="{ 'd-none': first_slide }">
						<div class="col-6 left-img">
							<img src="~assets/Images_Website/HomePage/Images/home_anim_11.png">
							<img src="~assets/Images_Website/HomePage/GIFS/home_anim.png">
						</div>
						<div class="col-6">
							<div class="carousel-card">
								<p class="carousel-title">{{$t('nav_product1.swetrack_lite')}}</p>
								<p class="carousel-text">
									<span>{{$t('swetrack1')}}</span><br>
									{{$t('swetrack2')}}
								</p>
								<img src="~assets/Images_Website/HomePage/ic_mobile.svg">
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-6 left-img">
							<img src="~assets/Images_Website/HomePage/Images/anim1.png">
							<img src="~assets/Images_Website/HomePage/GIFS/home_anim_1.gif">
						</div>
						<div class="col-6">
							<div class="carousel-card">
								<p class="carousel-title">{{$t('geofence')}}</p>
								<p class="carousel-text">
									<span>{{$t('geofence1')}}</span><br>
									{{$t('geofence2')}}
								</p>
								<img src="~assets/Images_Website/HomePage/ic_mobile.svg">
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-6 left-img" >
							<img src="~assets/Images_Website/HomePage/Images/anim2.png">
							<img src="~assets/Images_Website/HomePage/GIFS/home_anim_2.gif">
						</div>
						<div class="col-6">
							<div class="carousel-card back-blue-2">
								<p class="carousel-title">{{$t('tracking')}}</p>
								<p class="carousel-text">
									<span>{{$t('tracking1')}}</span><br>
									{{$t('tracking2')}}
								</p>
								<img src="~assets/Images_Website/HomePage/ic_mobile1.svg">
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-6 left-img">
							<img src="~assets/Images_Website/HomePage/Images/anim3.png">
							<img src="~assets/Images_Website/HomePage/GIFS/home_anim_3.gif">
						</div>
						<div class="col-6">
							<div class="carousel-card back-blue-3">
								<p class="carousel-title">{{$t('alarm')}}</p>
								<p class="carousel-text">
									<span>{{$t('alarm1')}}</span><br>
									{{$t('alarm2')}}
								</p>
								<img src="~assets/Images_Website/HomePage/ic_mobile2.svg">
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-6 left-img">
							<img src="~assets/Images_Website/HomePage/Images/anim4.png">
							<img src="~assets/Images_Website/HomePage/GIFS/home_anim_4.gif">
						</div>
						<div class="col-6">
							<div class="carousel-card back-blue-4">
								<p class="carousel-title">{{$t('position')}}</p>
								<p class="carousel-text">
									<span>{{$t('position1')}}</span><br>
									{{$t('position2')}}
								</p>
								<img src="~assets/Images_Website/HomePage/ic_mobile3.svg">
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-6 left-img">
							<img src="~assets/Images_Website/HomePage/Images/anim5.png">
							<img src="~assets/Images_Website/HomePage/GIFS/home_anim_5.gif">
						</div>
						<div class="col-6">
							<div class="carousel-card">
								<p class="carousel-title">{{$t('energysavingmode')}}</p>
								<p class="carousel-text">
									<span>{{$t('energysavingmode1')}}</span><br>
									{{$t('energysavingmode2')}}
								</p>
								<img src="~assets/Images_Website/HomePage/ic_mobile.svg">
							</div>
						</div>
					</div>
				</VueSlickCarousel>
				<span class="carousel-prev-btn" @click = 'showPrev'><img src="~assets/Images_Website/HomePage/arrow_left.svg"></span>
				<span class="carousel-next-btn" @click = 'showNext'><img src="~assets/Images_Website/HomePage/arrow_right.svg"></span>
			</div>
		</div>
		<!-- carousel html code end -->
		<!-- section3 html code start -->
		<div class="section3">
			<div class="section3_des">
				<div style="width:100%; height:100%">

					<strong>{{$t('nav_product1.swetrack_lite')}}</strong>
					<div class="check-com">
						<p>
							<img src="~assets/Images_Website/HomePage/Icons/Group.svg" class="section3_check" />
							<span>{{$t('samefunctions')}}</span>
						</p>
					</div>
					<div class="check-com">
						<p>
							<img src="~assets/Images_Website/HomePage/Icons/Group.svg" class="section3_check" />
							<span>{{$t('nobindings')}}</span>
						</p>
					</div>
					<div class="check-com">
						<p>
							<img src="~assets/Images_Website/HomePage/Icons/Group.svg" class="section3_check" />
							<span>{{$t('easytouse')}}</span>
						</p>
					</div>
				</div>
				<div class="section3_btn"><router-link to="https://swetrack.com/weblive/login.html" class="btn btn-info">{{$t('webapplication')}}</router-link></div>
			</div>
			<div class="section3_imgs"><img src="~assets/Images_Website/HomePage/Images/Laptop 08 1.png" class="section3_img" /></div>
		</div>
		<!-- section3 html code end -->
		<!-- section4 html code start -->
		<div class="section4">
			<p>{{$t('why')}}</p>
			<div>
				<div class="section4_card">
					<img src="~assets/Images_Website/HomePage/Icons/Making-Money 1.svg"/>
					<p><strong>{{$t('affordable')}}</strong></p>
					<p>{{$t('affordable_desc')}}</p>
				</div>
				<div class="section4_card">
					<img src="~assets/Images_Website/HomePage/Icons/Business Icons-09 1.svg"/>
					<p><strong>{{$t('concept')}}</strong></p>
					<p>{{$t('concept_desc')}}</p>
				</div>
				<div class="section4_card">
					<img src="~assets/Images_Website/HomePage/Icons/4 103.svg"/>
					<p><strong>{{$t('firstclass')}}</strong></p>
					<p>{{$t('firstclass_desc')}}</p>
				</div>
				<div class="section4_card">
					<img src="~assets/Images_Website/HomePage/Icons/Business Icons-14 1.svg"/>
					<p><strong>{{$t('easyinstall')}}</strong></p>
					<p>{{$t('easyinstall_desc')}}</p>
				</div>
			</div>
		</div>
		<!-- section4 html code end -->
		<!-- section5 html code start -->
		<div class="section5">
			<div>
				<p><strong>{{$t('interesting')}}</strong></p>
				<p>{{$t('interesting_desc')}} </p>
				<div class="imgcardbtns">
					<span class="btn btn-primary" @click="send_mail">{{$t('support')}}</span>
				<!--	<router-link to="https://swetrack.zendesk.com/hc/sv" class="btn btn-info">Support center</router-link> -->
					<a class="btn btn-info" href="https://swetrack.zendesk.com/hc/sv" target="_blank">{{$t('supportcenter')}}</a>
				</div>
			</div>
		</div>
		<div class="cookie-wraper" :class="{ 'cookie-hide': cookie_hide }">
			<div class="cookie-wrap-show">
				<span class="cookie-close-btn" @click="cookie_accept($event, 0)">&times;</span>
				<p>{{$t('cookiemessage')}} <router-link to="/cookie_page" @click="cookie_accept($event, 1)">{{$t('readmore')}}</router-link></p>
			</div>
		</div>
		<!-- section5 html code end -->
		<main-footer />
	</div>
</template>

<script>
	/* eslint-disable */
	// import MainNavbar from './MainNavbar'
	// import MainFooter from './MainFooter'
	import VueSlickCarousel from 'vue-slick-carousel'
	import 'vue-slick-carousel/dist/vue-slick-carousel.css'
	// optional style for arrows & dots
	import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
	import headerConfig from '~/config/head';

	/* eslint-disable */
	export default {
		name: "HomePage",
		head() {
			return headerConfig.term;
		},
		data() {
			return {
				msg: "Welcome to Your Vue.js App",
				cookie_hide: false,
				isActive: 0,
				first_slide: false,
				settings:{
					"dots": true,
					"dotsClass": "slick-dots custom-dot-class",
					"edgeFriction": 0.35,
					"infinite": false,
					"speed": 500,
					"slidesToShow": 1,
					"slidesToScroll": 1,
					"arrows": true,
					"infinite": true
				}
			};
		},
		components: {
			// MainNavbar,
			// MainFooter,
			VueSlickCarousel
		},
		mounted() {
			if(localStorage.cookie_accepted){
				this.cookie_hide = true
			}
		},
		methods: {
			showNext() {
				  // this.first_slide = true
				  // if(this.isActive>4) this.$refs.carousel.goTo(1)
				  // else this.$refs.carousel.next()
				  // this.isActive = this.isActive>4?1:++this.isActive
				  this.isActive = this.isActive>4?0:++this.isActive
				  this.$refs.carousel.next()
				},
				showPrev() {
			  // this.first_slide = true
			  // if(this.isActive<2) this.$refs.carousel.goTo(5)
			  // else this.$refs.carousel.prev()
			  // this.isActive = this.isActive<2?5:--this.isActive
			  this.isActive = this.isActive<1?5:--this.isActive
			  this.$refs.carousel.prev()
			},
			goto_slide(slide_num){
				this.first_slide = true
				this.$refs.carousel.goTo(slide_num)
				this.isActive = slide_num
			},
			send_mail(){
				window.open("/mailwindow", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=500,width=500,height=500");
			},
			cookie_accept(e, number){
				e.preventDefault()
				localStorage.cookie_accepted = true
				this.cookie_hide = !this.cookie_hide
				if(number == 1){
					window.location = '/cookiepage'
				}
			}
		}
	};
</script>
<style>
.cookie-wrap-show {
	position: absolute;
	bottom: 0;
	left: 0;
	padding: 20px 50px;
	background-color: #000;
	right: 0;
}
.cookie-wrap-show p {
	color: white;
}
.slick-dots li button:before{
	opacity: .5;
}
.slick-dots li.slick-active button:before{
	opacity: 1;
}
.homepage .slick-dots.custom-dot-class>li:first-child{
	display:none;
}
</style>
<style scoped>
.carousel-wrap{
	background-color: #FAFAFA;
}
.carousel{
	position: relative;
	width: 70%;
	margin-left: 15%;
}
.carousel-prev-btn, .carousel-next-btn{
	position: absolute;
	top: 50%;
	cursor: pointer;
	font-size: 14px;
	transform: translateY(-50%);
}
.carousel-prev-btn>img, .carousel-next-btn>img{
	width: 40px;
	height: 40px;
}
.carousel-prev-btn{
	left: -15%;
}
.carousel-next-btn{
	right: -15%;
}
.carousel-card{
	background-color:#166fb0;
	padding: 40px 40px;
}
.carousel-title{
	color: #FFF;
	text-align: left;
	margin: 0;
	font-family: Montserrat;
	font-style: normal;
	font-weight: 600;
	font-size: 36px;
	line-height: 44px;
	color: #FFFFFF;
	margin-bottom: 10px;
}
.carousel-text{
	color: #FFF;
	text-align: left;
	margin: 0;
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 17px;
	line-height: 30px;
	color: #FFFFFF;
}
.carousel-text>span{
	font-weight: 600;
}
.carousel-card{
	text-align: left;
}
.carousel img:first-child{
	width: 30%;
	margin-left: 18%;
}
.carousel img+img{
	margin-left: -65%;
	width: 160%;
}
.carousel .col-5, .carousel .col-7, .carousel .col-6{
	display: flex;
	align-items: center;
}
.carousel .left-img {
	background-image: url("~assets/Images_Website/HomePage/Images/Vector.png");
	background-repeat: no-repeat;
	background-position: center;
	background-size: 80%;
}
.carousel .carousel-card img{
	width: 40px;
	height: 40px;
	margin-top: 20px;
	margin-left: -10px;
}
.carousel-wrap{
	padding-top: 70px;
}
.carousel-wrap .slide-link{
	padding: 0 20px;
	cursor: pointer;
	font-family: Poppins;
	font-style: normal;
	font-weight: 500;
	font-size: 17px;
	line-height: 25px;
	text-transform: uppercase;
	transition: color .3s;
}
.carousel-wrap .slide-link:hover{
	color: #1F97EF;
}
.carousel-wrap .slide-link.isActive{
	color: #1F97EF;
}
.carousel-link{
	display: none;
}
.back-blue-2{
	background-color: #0E4975;
}
.back-blue-3{
	background-color: #4786B5;
}
.back-blue-4{
	background-color: #314A5C;
}
a,
a:hover,
a:focus {
	text-decoration: none;
}
.home_header {
	padding: 5% 5% 5% 10%;
	background-image: url("~assets/Images_Website/HomePage/Images/background.svg"),
	url("~assets/Images_Website/HomePage/Images/Background_052.png");
	background-size: cover, cover;
	background-position: top center, top center;
}
.imgcard {
	margin-top: 30px;
	width: 100%;
}

.card_des {
	width: 50%;
	height: 100%;
	float: left;
	text-align: left;
	padding-top: 50px;
}
.card_des>p{
	margin-bottom: 40px
}
.imgcard_img {
	width: 100%;
}
.card_des strong {
	text-transform: uppercase;
	align-items: center;
	color: #fff;
	font-family: Raleway;
	font-style: normal;
	font-weight: bold;
	font-size: 54.5455px;
	line-height: 74px;
}
.card_des small {
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 22px;
	line-height: 33px;
	color: #ffffff;
}
.card_des span {
	color: #3bc9db;
}

.imgcardbtns {
	margin-top: 40px;
	padding-top: 30px;
}
.btn {
	padding: 10px 30px;
	cursor: pointer;
	font-family: Montserrat;
	font-style: normal;
	font-weight: 600;
	font-size: 17.9062px;
	line-height: 22px;
}
.imgcardbtns .btn.btn-info {
	background: #3bc9db;
	box-shadow: 0px 0px 28px 3px rgba(0, 0, 0, 0.1);
	color: #fff;
}
.btn.btn-primary {
	background: #ffffff;
	box-shadow: 0px 0px 28px 3px rgba(0, 0, 0, 0.1);
	color: #000;
	margin-left: 20px;
}
.btn.btn-outline {
	background-color: blue;
	color: #fff;
	border: solid 1px #fff;
}
.icons {
	margin-top: 7vw;
	width: 50%;
	font-family: Montserrat;
	font-style: normal;
	font-weight: 600;
	font-size: 20px;
	line-height: 24px;
	color: #fff;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.imgcard_icon {
	width: 20px;
}
.icons>a:first-child>.imgcard_icon{
	width: 12px;
}
.icons>.imgcard_icon{
	width: 30px;
}
.icons>a:last-child>.imgcard_icon{
	width: 28px;
}
.icons>a:nth-child(2)>.imgcard_icon{
	width: 12px;
}
.card_img {
	position: relative;
}
.section1 {
	padding: 50px 5% 50px;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
}
.section1_card {
	width: 30%;
	height: 15vw;
	float: left;
	flex-direction: row;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.section1_card.bor {
	border-right: #ccc solid 1px;
}

.section1_imgs {
	width: 30%;
	float: left;
}
.section1_img {
	width: 85%;
	cursor: pointer;
	transition: width .3s;
}
.section1_imgs:hover .section1_img {
	width: 95%;
}
.section1_des {
	width: 40%;
	float: left;
	text-align: left;
}
.section1_des p {
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 27px;

	color: #000000;
}
.section1_des strong {
	font-family: Poppins;
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	line-height: 27px;
}
.section1_des span {
	font-family: Poppins;
	font-style: normal;
	font-weight: 600;
	font-size: 17.9062px;
	line-height: 27px;
	cursor: pointer;
	color: #1F97EF;
	transition: color .3s;
}
.section1_des a:hover>span{
	color: #3BC9DB;
}
.section1_right {
	display: none;
}
.section1_right a {
	color: unset;
}
.section3{
	position: relative;
	padding: 5% 5% 0 15%;
	background-image: url("~assets/Images_Website/HomePage/Images/Heroimagebackground1.png");
	background-size: cover;
	background-position: bottom center;
	display: flex;
}
.section3_des{
	width: 45%;
	float: left;
	margin-bottom: 4.5%;
}
.section3_imgs{
	width: 55%;
	float: left;
	margin-bottom: -4%;
}
.section3_img{
	width: 80%;
}
.section3 p{
	text-align: left;
	/*	line-height: 3.5vw;	*/
	color: #fff;
	font-size: 1.2vw;
}
.section3 strong{
	font-family: Montserrat;
	font-style: normal;
	font-weight: 600;
	font-size: 64px;
	line-height: 78px;
	color: #FFFFFF;
	display: block;
	text-align: left;
}
.section3 p>span{
	margin-left: 10px;
	font-family: Poppins;
	font-style: normal;
	font-weight: 600;
	font-size: 17px;
	line-height: 25px;
	color: #FFFFFF;
}
.section3_btn{
	text-align: left;
}
.section3_btn a{
	background-color: #1F97EF;
	font-size: 15px;
}
.section4{
	padding: 50px 30px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
}
.section4_card{
	width: 25%;
	float: left;
	padding: 1%;
}
.section4>p{
	font-family: Montserrat;
	font-style: normal;
	font-weight: 600;
	font-size: 36px;
	line-height: 44px;
	text-align: center;
	color: #000000;
}
.section4 img{
	width: 25%;
}
.section4_card p{
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 28px;
	text-align: center;
}
.section4_card strong{
	font-family: Poppins;
	font-style: normal;
	font-weight: 600;
	font-size: 17px;
	line-height: 25px;
	text-align: center;
	color: #000000;
}
.section5{
	padding: 20px 20px 50px;
	background-image: url("~assets/Images_Website/HomePage/Images/ISCAbstractBackgroundV2063.png");
	background-size: cover;
	background-position: bottom center;
}
.section5 p{
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 27px;
	text-align: center;
	color: #FFFFFF;
}
.section5 strong{
	font-family: Montserrat;
	font-style: normal;
	font-weight: 600;
	font-size: 36px;
	line-height: 44px;
	color: #FFFFFF;
}
.section5 .btn {
	padding: 10px 30px;
	font-size: 17px;
}
.section5 .btn.btn-info {
	background: none;
	border: #fff solid 2px;
	box-shadow: 0px 0px 28px 3px rgba(0, 0, 0, 0.1);
	color: #fff;
	margin-left: 20px;
	font-family: Montserrat;
	font-style: normal;
	font-weight: bold;
	line-height: 21px;
	text-align: center;
	text-transform: uppercase;
	transition: .3s;
}
.section5 .btn.btn-info:hover{
	color: #3BC9DB;
	background: #FFFFFF;
}
.section5 .btn{
	width: 227px;
}
.section5 .btn.btn-primary {
	background: #ffffff;
	border: #fff solid 2px;
	box-shadow: 0px 0px 28px 3px rgba(0, 0, 0, 0.1);
	color: #000;
	font-family: Montserrat;
	font-style: normal;
	font-weight: bold;
	line-height: 21px;
	margin-left: 0;
	padding: 10px 68px;
	/* identical to box height */

	text-align: center;
	text-transform: uppercase;

	color: #1F97EF;
	transition: .3s;
}
.section5 .btn.btn-primary:hover{
	color: #3BC9DB;
}
@media only screen and (max-width: 1400px) {

	.card_des strong {
		font-size: 40px;
	}
	.carousel-card {
		padding: 20px 20px;
	}
	.carousel-text {
		font-size: 14px;
	}
	.carousel-title {
		font-size: 20px;
	}
}
@media(min-width: 1100px){
	.carousel-link{
		display: block;
	}
	.cookie-wraper{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 1004;
		cursor: not-allowed;
	}
	.cookie-wrap{
		position: absolute;
		bottom: 0;
		left: 0;
		padding: 20px 50px;
		background-color: #000;
		right: 0;
	}
	.cookie-close-btn{
		position:absolute;
		top: 5px;
		right: 20px;
		font-size: 28px;
		cursor: pointer;
		color: #FFF;
	}
	.cookie-close-btn:hover{
		color: #1f97ef;
	}
	.cookie-wrap p{
		font-size: 20px;
		margin: 0;
		text-align: center;
		color: #FFF;
		letter-spacing: 2px;
	}
	.cookie-wrap p>a{
		color: #FFF;
	}
	.cookie-wrap p>a:hover{
		color: #1f97ef;
	}
	.cookie-wraper.cookie-hide{
		display: none;
	}
	.section3 .btn.btn-info{
		position: absolute;
		bottom: 0;
		left: 15%;
		transform: translateY(50%);
		border-radius: 0;
	}
	.section3 .btn.btn-info:hover {
		background: #319EEE;
		opacity: unset;
	}
}
@media only screen and (max-width: 1100px) {
	.carousel-card{
		background-color: transparent;
		color: #181818;
		padding: 10px 10px;
	}
	.carousel-title{
		color: #1F97EF;
		text-align: center;
		font-size: 14px;
		margin-bottom: 0px;
		line-height: 35px;
	}
	.carousel-text{
		color: #181818;
		text-align: center;
		font-size: 12px;
	}
	.carousel .carousel-card img{
		display: none !important;
	}
	.carousel{
		position: relative;
		width: 90%;
		margin-left: 5%;
		padding-bottom: 10px;
	}
	.carousel img:first-child{
		display: none !important;
	}
	.carousel .col-6{
		justify-content: center;
	}
	.carousel .col-6:last-child{
		margin-top: -50px;
	}
	.carousel img+img{
		width: 200%;
		margin-left: 0;
	}
	.carousel .carousel-prev-btn>img, .carousel .carousel-next-btn>img{
		display: block;
	}
	.carousel-prev-btn{
		left: 0;
		top: 30%;
	}
	.carousel-next-btn{
		right: 0;
		top: 30%;
	}
	.custom-dot-class li {
		padding: 20px 10px;
	}
	.home_header {
		padding: 5% 5% 15vw 5%;
		padding-top: 130px;
	}
	.card_des strong {
		text-transform: none;
	}
	.card_des small {
		display: none;
	}
	.icons {
		display: none;
	}
	.card_des {
		width: 100%;
		height: 100%;
		float: left;
		text-align: center;
	}
	.imgcard_img {
		width: 100%;
		margin-top: 12vw;
		margin-left: -15%;
	}
	.card_des strong {
		font-size: 25px;
		line-height: 1.3;
	}
	.btn {
		padding: 10px 30px;
		font-size: 12px;
		line-height: 14px;
	}
	.imgcard{
		margin-top: 0;
	}
	.card_des{
		padding-top: 0;
	}
	.card_des>p {
		margin-bottom: 0px;
	}
	.imgcardbtns {
		margin-top: 0px;
		margin-bottom: 20px;
	}
	.section1_img {
		width: 100%;
	}
}


@media only screen and (max-width: 1100px) {
	.section1 {
		flex-direction: column;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.section1_card {
		width: 90%;
		height: 35vw;
		float: none;
	}
	.section1_card.bor {
		border-right: none;
		border-bottom: rgb(206, 204, 204) solid 1px;
	}
	.section1_imgs {
		width: 20%;
		float: left;
	}
	.section1_des {
		width: 50%;
		float: left;
		text-align: left;
	}
	.section1_des p {
		font-size: 3.5vw;
	}
	.section1_des strong {
		font-weight: 550;
		font-size: 14px;
	}
	.section1_des span {
		display: none;
	}
	.section1_right {
		display: block;
		float: left;
	}
	.section1_right img {
		display: none;
	}
	.carousel-wrap{
		margin-left: 5%;
		width: 90%;
		padding-top: 0px;
		margin-bottom: 25px;
	}
}


@media only screen and (max-width: 1100px) {
	.section3{
		padding: 5%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
	.section3 p{
		line-height: 10vw;
		color: #fff;
		font-size: 12px;
		padding-left: 17%;
		padding-right: 10%;
		display: flex;
		align-items: center;
		padding-bottom: 10px;
	}
	.section3 img.section3_check {
		width: auto;
		height: auto;
		max-width: 16px;
	}
	.section3 strong{
		font-size: 7vw;
		font-weight: 500;
		color: #fff;
		text-align: center;
		font-family: 'Poppins';
	}
	.section3_des{
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
	.section3_imgs{
		width: 100%;
		margin-top: 8%;
		margin-bottom: -15%;
		padding-left: 2.5%;
		}.section3 a{
			margin-left: auto;
		}
		.section3_img{
			width: 90%;
		}
		.section3 .btn.btn-info{
			padding: 15px 45px;
		}
		.section3_btn{
			margin-top: 40px;
		}
		.section3 p>span{
			font-size: 12px;
		}
	}




	@media only screen and (max-width: 1100px) {
		.section4_card{
			width: 100%;
			padding: 5%;
		}
		.section4 span{
			display: none;
		}
		.section4>p{
			font-size: 17px;
		}
		.cookie-wraper{
			display: none;
		}
		.section4_card p:nth-child(2) {
			margin-bottom: 0px;
		}
		.section4_card p:last-child {
			margin-top: 0px;
		}
		.section4_card strong {
			font-size: 14px;
		}
	}




	@media only screen and (max-width: 1100px) {
		.section5{
			padding: 5%;
			padding-bottom: 50px;
			padding-top: 50px;
		}
		.section5 p{
			font-size: 12px;
		}
		.section5 div p:first-child {
			margin-bottom: 0px;
		}
		.section5 div p:nth-child(2) {
			margin-top: 0px;
		}
		.section5 strong{
			font-size: 17px;
			color: #fff;
			font-family: Poppins;
		}
		.section5 .btn {
			font-size: 12px;
			padding: 10px;
		}
		.section5 .btn.btn-primary{
			padding: 10px 37px;
		}
	}

</style>
