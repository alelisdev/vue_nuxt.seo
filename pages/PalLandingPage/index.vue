/* eslint-disable */
<template>
	<div class="hello">
		<main-navbar :isSelected = 3 />
		<!-- header html code start -->
		<div class="produkter_header">
			<div class="produkter_title">
				<p><span>{{$t('about_small_desc')}} </span></p>
				<p class="before"><strong>{{$t('cus_project')}}</strong></p>
				<p class="after"><strong>pal</strong></p>
				<p class="before"><router-link to="/">{{$t('home')}}</router-link> &nbsp;>&nbsp; <router-link to="/forCompanyPage">{{$t('forcompanies')}}</router-link> &nbsp;>&nbsp; <router-link to="/palLandingPage">{{$t('nav_business2.personalized_solutions')}}  </router-link></p>
				<p class="after breadcrumb_links"><router-link to="/">{{$t('home')}}</router-link> &nbsp;>&nbsp; <router-link to="/forCompanyPage">{{$t('forcompanies')}}</router-link> &nbsp;>&nbsp; <router-link to="/palLandingPage"><span>PAL</span></router-link></p>
				<p><small>{{$t('invisable1')}}<br> {{$t('invisable2')}}</small></p>
			</div>
		</div>
		<!-- header html code end -->
		<!-- section1 html code start -->
		<div class="section1">
			<div class="s1_card1">
				<p><strong>{{$t('nav_business2.personalized_solutions')}} </strong></p>
				<p>{{$t('bus_solution_desc')}} </p>
			</div>
			<div class="s1_card2 before_view">
				<p><strong>{{$t('hard_solution')}}</strong></p>
				<div class="browser_data" @click="slideShow(1)">
					<p :class="{ 'text_style': fadeShow==1?true:false }">{{$t('hard_integration')}} </p>
					<p class="direct_right" :class="{ 'text_style': fadeShow==1?true:false,  'd-none': fadeShow==1?true:false  }">→</p><p class="direct_down" :class="{ 'text_style': fadeShow==1?true:false, 'd-none': fadeShow==1?false:true }">↓&nbsp;</p>
				</div>
				<div class="browser_data" @click="slideShow(2)">
					<p :class="{ 'text_style': fadeShow==2?true:false }">{{$t('cus_hard')}}</p>
					<p class="direct_right" :class="{ 'text_style': fadeShow==2?true:false,  'd-none': fadeShow==2?true:false  }">→</p><p class="direct_down" :class="{ 'text_style': fadeShow==2?true:false, 'd-none': fadeShow==2?false:true }">↓&nbsp;</p>
				</div>
				<div class="browser_data" @click="slideShow(3)">
					<p :class="{ 'text_style': fadeShow==3?true:false }">OEM-{{$t('hard')}}</p>
					<p class="direct_right" :class="{ 'text_style': fadeShow==3?true:false,  'd-none': fadeShow==3?true:false  }">→</p><p class="direct_down" :class="{ 'text_style': fadeShow==3?true:false, 'd-none': fadeShow==3?false:true }">↓&nbsp;</p>
				</div>
			</div>
			<div class="s1_card2 before_view">
				<p><strong>{{$t('Software solutions')}}</strong></p>
				<div class="browser_data" @click="slideShow(4)">
					<p :class="{ 'text_style': fadeShow==4?true:false }">{{$t('own_app')}} </p>
					<p class="direct_right" :class="{ 'text_style': fadeShow==4?true:false,  'd-none': fadeShow==4?true:false  }">→</p><p class="direct_down" :class="{ 'text_style': fadeShow==4?true:false, 'd-none': fadeShow==4?false:true }">↓&nbsp;</p>
				</div>
				<div class="browser_data" @click="slideShow(5)">
					<p :class="{ 'text_style': fadeShow==5?true:false }">{{$t('cus_app')}}</p>
					<p class="direct_right" :class="{ 'text_style': fadeShow==5?true:false,  'd-none': fadeShow==5?true:false  }">→</p><p class="direct_down" :class="{ 'text_style': fadeShow==5?true:false, 'd-none': fadeShow==5?false:true }">↓&nbsp;</p>
				</div>
			</div>
			<div class="s1_card2 after_view">
				<p><strong>{{$t('hard_solution')}}</strong></p>
				<div class="browser_data" @click="fadeShow==6?fadeShow=0:fadeShow=6">
					<p :class="{ 'text_style': fadeShow==6?true:false }">{{$t('hard_integration')}} </p>
					<p class="direct_right" :class="{ 'text_style': fadeShow==6?true:false,  'd-none': fadeShow==6?true:false  }">→</p><p class="direct_down" :class="{ 'text_style': fadeShow==6?true:false, 'd-none': fadeShow==6?false:true }">↓&nbsp;</p>
				</div>
				<!-- section2 html code start -->
				<div class="section2" :class="{ 'd-none': fadeShow==6?false:true }">
					<div class="s2_desc">
						<p>{{$t('earlier')}} <span>{{$t('area_app')}}</span></p>
						<div class="s2_d_text">
							<p><span>{{$t('hard_solution')}}</span></p>
							<p><strong>{{$t('hard_integration')}}</strong></p>
							<p>{{$t('hard_need')}}<br>
								{{$t('hard_integration_desc')}}<br>
								<br>{{$t('hard_integration_desc1')}}<br>
								<br>{{$t('hard_integration_desc2')}}<br>
								<br>{{$t('hard_integration_desc3')}}
							</p>
						</div>
					</div>
					<div class="s2_imgs" id="s2_a"><img src="~/assets/Images_Website/PAL_LandingPage/PAL_LandingPage/Images/Bild4.png" class="s2_img"/></div>
				</div>
				<!-- section2 html code end -->
				<div class="browser_data" @click="fadeShow==7?fadeShow=0:fadeShow=7">
					<p :class="{ 'text_style': fadeShow==7?true:false }">{{$t('cus_hard')}}</p>
					<p class="direct_right" :class="{ 'text_style': fadeShow==7?true:false,  'd-none': fadeShow==7?true:false  }">→</p><p class="direct_down" :class="{ 'text_style': fadeShow==7?true:false, 'd-none': fadeShow==7?false:true }">↓&nbsp;</p>
				</div>
				<!-- section2 html code start -->
				<div class="section2" :class="{ 'd-none': fadeShow==7?false:true }">
					<div class="s2_desc">
						<p>{{$t('earlier')}} <span>{{$t('area_app')}}</span></p>
						<div class="s2_d_text">
							<p><span>{{$t('upper_hard_solution')}}</span></p>
							<p><strong>{{$t('upper_cus_hard')}}</strong></p>
							<p>{{$t('cus_hard_desc')}}<br>
							<br>{{$t('hard_integration_desc3')}}
							</p>
						</div>
					</div>
					<div class="s2_imgs" id="s2_a"><img src="~/assets/Images_Website/PAL_LandingPage/PAL_LandingPage/Images/Bild2.png" class="s2_img"/></div>
				</div>
				<!-- section2 html code end -->
				<div class="browser_data" @click="fadeShow==8?fadeShow=0:fadeShow=8">
					<p :class="{ 'text_style': fadeShow==8?true:false }">OEM-{{$t('hard')}}</p>
					<p class="direct_right" :class="{ 'text_style': fadeShow==8?true:false,  'd-none': fadeShow==8?true:false  }">→</p><p class="direct_down" :class="{ 'text_style': fadeShow==8?true:false, 'd-none': fadeShow==8?false:true }">↓&nbsp;</p>
				</div>
				<!-- section2 html code start -->
				<div class="section2" :class="{ 'd-none': fadeShow==8?false:true }">
					<div class="s2_desc">
						<p>{{$t('earlier')}} <span>{{$t('area_app')}}</span></p>
						<div class="s2_d_text">
							<p><span>{{$t('upper_hard_solution')}}</span></p>
							<p><strong>OEM {{$t('upper_hard')}}</strong></p>
							<p>{{$t('upper_hard_desc')}}<br> {{$t('upper_hard_desc1')}}<br>
							<br>{{$t('hard_integration_desc3')}}
							</p>
							</div>
						</div>
						<div class="s2_imgs" id="s2_a"><img src="~/assets/Images_Website/PAL_LandingPage/PAL_LandingPage/Images/Bild3.png" class="s2_img"/></div>
					</div>
					<!-- section2 html code end -->
				</div>
				<div class="s1_card2 after_view">
					<p><strong>{{$t('soft_solution')}}</strong></p>
					<div class="browser_data" @click="fadeShow==9?fadeShow=0:fadeShow=9">
						<p :class="{ 'text_style': fadeShow==9?true:false }">{{$t('own_app')}} </p>
						<p class="direct_right" :class="{ 'text_style': fadeShow==9?true:false,  'd-none': fadeShow==9?true:false  }">→</p><p class="direct_down" :class="{ 'text_style': fadeShow==9?true:false, 'd-none': fadeShow==9?false:true }">↓&nbsp;</p>
					</div>
					<!-- section2 html code start -->
					<div class="section2"  :class="{ 'd-none': fadeShow==9?false:true }">
						<div class="s2_desc">
							<p>{{$t('earlier')}} <span>{{$t('area_app')}}</span></p>
							<div class="s2_d_text">
								<p><span>{{$t('soft_solution')}}</span></p>
								<p><strong>{{$t('own_app')}}</strong></p>
								<p>{{$t('own_app_desc1')}}<br>
								<br>{{$t('own_app_desc2')}}<br> 
								<br>{{$t('own_app_desc3')}}<br>
								<br>{{$t('hard_integration_desc3')}}
								</p>
							</div>
						</div>
						<div class="s2_imgs" id="s2_a"><img src="~/assets/Images_Website/PAL_LandingPage/PAL_LandingPage/Images/Bild.png" class="s2_img"/></div>
					</div>
					<!-- section2 html code end -->
					<div class="browser_data" @click="fadeShow==10?fadeShow=0:fadeShow=10">
						<p :class="{ 'text_style': fadeShow==10?true:false }">{{$t('cus_app')}}</p>
						<p class="direct_right" :class="{ 'text_style': fadeShow==10?true:false,  'd-none': fadeShow==10?true:false  }">→</p><p class="direct_down" :class="{ 'text_style': fadeShow==10?true:false, 'd-none': fadeShow==10?false:true }">↓&nbsp;</p>
					</div>
					<!-- section2 html code start -->
					<div class="section2" :class="{ 'd-none': fadeShow==10?false:true }">
						<div class="s2_desc">
							<p>{{$t('earlier')}} <span>{{$t('area_app')}}</span></p>
							<div class="s2_d_text">
								<p><span>{{$t('soft_solution')}}</span></p>
								<p><strong>{{$t('own_app')}}</strong></p>
								<p>{{$t('own_app_desc1')}}<br> 
									{{$t('own_app_desc2')}}<br>
									<br>{{$t('own_app_desc3')}}<br>
									<br>{{$t('own_app_desc4')}}
									</p>
							</div>
						</div>
						<div class="s2_imgs" id="s2_a"><img src="~/assets/Images_Website/PAL_LandingPage/PAL_LandingPage/Images/Bild5.png" class="s2_img"/></div>
					</div>
					<!-- section2 html code end -->
				</div>
				<div class="s1_card3">
					<p><strong>{{$t('helpyou1')}}</strong></p><br>
					<router-link to="/contactUsPage" class="btn btn-info">{{$t('contact')}}</router-link>
				</div>
				<div class="s1_line"></div>
			</div>
			<!-- section1 html code end -->
			<!-- section2 html code start -->
			<div class="section2" :class="{ 'd-none': fadeShow==0?true:false }">
				<div class="s2_desc">
					<div class="carousel-btns">
						<span @click="fadeShow==1?fadeShow=5:fadeShow=--fadeShow, slideShow(11)">&lt;</span>
						<span @click="fadeShow==5?fadeShow=1:fadeShow=++fadeShow, slideShow(12)">&gt;</span>
					</div>
					<VueSlickCarousel v-bind="settings" ref="carousel1" style="padding-bottom: 30px;">
						<div>
							<div class="carousel-card">
								<div class="s2_d_text">
									<p><span>{{$t('hard_solution')}}</span></p>
									<p><strong>{{$t('hard_integration')}}</strong></p>
									<p>{{$t('hard_need')}}<br>
									<br>{{$t('hard_integration_desc')}}<br>

									<br>{{$t('hard_integration_desc1')}}<br>
									
									<br>{{$t('hard_integration_desc2')}}<br>
									
									<br>{{$t('hard_integration_desc3')}}
									</p>
								</div>
								<div>
									<img src="~/assets/Images_Website/PAL_LandingPage/PAL_LandingPage/Images/Bild4.png" class="s2_img">
								</div>
							</div>
						</div>
						<div>
							<div class="carousel-card">
								<div class="s2_d_text">
									<p><span>{{$t('upper_hard_solution')}}</span></p>
									<p><strong>{{$t('upper_cus_hard')}} </strong></p>
									<p>{{$t('cus_hard_desc')}}<br>
									<br>{{$t('hard_integration_desc3')}}
									</p>
								</div>
								<div>
									<img src="~/assets/Images_Website/PAL_LandingPage/PAL_LandingPage/Images/Bild2.png" class="s2_img">
								</div>
							</div>
						</div>
						<div>
							<div class="carousel-card">
								<div class="s2_d_text">
									<p><span>{{$t('upper_hard_solution')}}</span></p>
									<p><strong>{{$t('upper_cus_hard')}} </strong></p>
									<p>{{$t('cus_hard_desc')}}<br>
									<br>{{$t('hard_integration_desc3')}}
									</p>
									</div>
									<div>
										<img src="~/assets/Images_Website/PAL_LandingPage/PAL_LandingPage/Images/Bild3.png" class="s2_img">
									</div>
								</div>
							</div>
							<div>
								<div class="carousel-card">
									<div class="s2_d_text">
										<p><span>{{$t('soft_solution')}}</span></p>
										<p><strong>{{$t('own_app')}}</strong></p>
										<p>{{$t('own_app_desc1')}}<br>
										<br>{{$t('own_app_desc2')}}<br> 
										<br>{{$t('own_app_desc3')}}<br>
										<br>{{$t('own_app_desc4')}}
										</p>
									</div>
									<div>
										<img src="~/assets/Images_Website/PAL_LandingPage/PAL_LandingPage/Images/Bild.png" class="s2_img">
									</div>
								</div>
							</div>
							<div>
								<div class="carousel-card">
									<div class="s2_d_text">
										<p><span>{{$t('soft_solution')}}</span></p>
										<p><strong>{{$t('upper_cus_app')}}</strong></p>
										<p>{{$t('com_solution')}}<br> 
 
										<br>{{$t('match_need')}}<br>
										
										<br>{{$t('other_offer')}}<br>
										
										<br>{{$t('hard_integration_desc3')}}<br>
										
										</p>
									</div>
									<div>
										<img src="~/assets/Images_Website/PAL_LandingPage/PAL_LandingPage/Images/Bild5.png" class="s2_img">
									</div>
								</div>
							</div>
						</VueSlickCarousel>
					</div>
				</div>
				<!-- section2 html code end -->
				<!-- section4 html code start -->
				<div class="m_section4">
					<div class="m_s4_card">
						<p>{{$t('upper_efficient')}}</p>
						<p><strong>{{$t('getstart1')}}<br>{{$t('getstart2')}}</strong></p>
						<router-link  to="/b2bPage" class="btn btn-info">B2B</router-link>
					</div>
				</div>
				<!-- section4 html code end -->

				<!-- section3 html code start -->
				<div class="section3">
					<div class="s3_desc">
						<p><strong>{{$t('interest')}} <br class="d-none-lt-1100">{{$t('cooperation')}}</strong></p>
						<p class="d-none-lt-1100">{{$t('cooper_desc')}} </p><br>
					</div>
					<div class="s3_input">
						<div class="s3_name_in">
							<div class="s3_i_name_d">
								<p>{{$t('name')}}</p>
								<input class="s3_i_name" :placeholder="$t('name')">
							</div>
							<div class="s3_i_telephon_d">
								<p>{{$t('phone')}}</p>
								<input class="s3_i_telephon" :placeholder="$t('phone')">
							</div>
						</div>
						<div class="s3_i_email_d">
							<p>Email</p>
							<input class="s3_i_email" placeholder="Email">
						</div>
						<p>{{$t('short_message')}}</p>
						<textarea rows="6" cols="100%" :placeholder="$t('message')"></textarea>
						<button type="submit" class="btn btn-info">{{$t('send')}}</button>
					</div>
				</div>
				<!-- section3 html code end -->
				<main-footer />
			</div>
		</template>

		<script>
			/* eslint-disable */
			import VueSlickCarousel from 'vue-slick-carousel'
			import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import headerConfig from '~/config/head'

export default {
	name: 'PalLandingPage',

	head() {
   		 return headerConfig.pallanding;
  	},

	data () {
		return {
			fadeShow: 0,
			settings:{
				"dots": false,
				"dotsClass": "slick-dots custom-dot-class",
				"edgeFriction": 0.35,
				"infinite": false,
				"speed": 500,
				"slidesToShow": 1,
				"slidesToScroll": 1,
				"arrows": false,
				"infinite": true,
				"draggable": false
			}
		}
	},
	components: {
		VueSlickCarousel
	},
	methods: {
		slideShow(num){
			if(num == 11){
				this.$refs.carousel1.prev()
			}else if(num == 12){
				this.$refs.carousel1.next()
			}else{
				this.$refs.carousel1.goTo(num-1)
				this.fadeShow = num
			}
		}
	}
}
</script>

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
	font-family: Montserrat;
	font-style: normal;
	font-weight: bold;
	font-size: 14px;
	line-height: 26px;
	text-align: center;
	letter-spacing: 0.56px;
	text-transform: uppercase;
	color: #FFFFFF;
	border-radius: 0;
	transition: .3s;
}
.btn.btn-info:hover{
	background: #36A5F6;
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
	padding: 160px 0% 100px 10%;
	background-image: url("~/assets/Images_Website/Products_LandingPage/Products_LandingPage/Images/backgroundgrad.svg"),
	url("~/assets/Images_Website/PAL_LandingPage/PAL_LandingPage/Images/FyD3OWBuXnY.png");
	background-size: cover, cover;
	background-position: top center, center center;
	background-repeat: no-repeat, no-repeat;
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
	margin:0;
}
.produkter_title small{
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 24px;
	text-align: left;
	letter-spacing: 0.75px;
	color: #fff;
	display: flex;
}
.after{
	display: none!important;
}
 .section5{
  	padding-top: 5%;
  	padding-left: 24%;
  	padding-right: 24%;
  	padding-bottom: 5%;
  	background-image: url("~/assets/Images_Website/HomePage/Images/ISCAbstractBackgroundV2063.png");
  	background-size: cover;
  	background-position: bottom center;
  }
  .section5 p{
  	color: #fff;
  	font-size: 18px;
  }
  .section5 strong{
  	font-size: 2.5vw;
  	color: #fff;
  }
  .section5 .btn {
  	padding: 1vw 4vw;
  	font-size: 1.5vw;
  }
  .section5 .btn.btn-info {
  	padding: 1vw 2vw;
  	background: none;
  	border: #fff solid 2px;
  	box-shadow: 0px 0px 28px 3px rgba(0, 0, 0, 0.1);
  	color: #fff;
  	margin-left: 5vw;
  }
  .section5 .btn.btn-primary {
  	padding: 1vw 4.5vw;
  	background: #ffffff;
  	border: #fff solid 2px;
  	box-shadow: 0px 0px 28px 3px rgba(0, 0, 0, 0.1);
  	color: #000;
  }
  .produkter_title p.before:nth-child(4){
	line-height: 1.1;
	margin-bottom: 30px;
}


.section1{
	display: flex;
	flex-direction: row;
	position: relative;
	padding: 0% 10%;
	width: 100%;
	background-color: #FAFAFA;
	padding-bottom: 50px;

}
.s1_card1, .s1_card2, .s1_card3{
	margin-top: -50px;
}
.section1 a{
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 22px;
	color: #FFFFFF;
}
.s1_line{
	position: absolute;
	height: 150px;
	width: 0;
	border: 1px solid #E9ECED;
	top: 55px;
	left: 50%;
	z-index: 2;
}
.s1_card1{
	width: 25%;
	float: left;
	height: 400px;
	background-color: #F5F5F5;
	padding: 2.5%;
	text-align: left;
	box-shadow: 0px 4px 0px rgb(148 148 148 / 25%);
}
.s1_card1 p{
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 17px;
	line-height: 32px;
	color: #000000;
}
.s1_card1 strong{
	font-family: Montserrat;
	font-style: normal;
	font-weight: 600;
	font-size: 24px;
	line-height: 39px;
	color: #000000;
}
.s1_card2{
	display: flex;
	flex-direction: column;
	width: 25%;
	float: left;
	height: 400px;
	padding: 2.5%;
	text-align: left;
	background-color: #FFFFFF;
	box-shadow: 0px 4px 0px rgb(148 148 148 / 25%);
}
.s1_card2>div{
	position: relative;
	cursor: pointer;
	display: flex;
	justify-content: space-between;
}
.s1_card2>div p {
	margin: 6px 0px;
}
.direct_right{
	font-style: normal;
	font-weight: 500;
	font-size: 17px;
	line-height: 25px;
	color: rgba(31, 151, 239, 0.57);
}
/* .s1_card2>div:hover p, .s1_card2>div:hover p:after, .s1_card2>div:hover p:before{
  color: rgba(31, 151, 239, 0.57);
  } */
  .direct_right, .direct_down{
  	position: absolute;
  	right: 0%;
  }
/* .direct_right:before{
  content: '\2192';
}
.direct_right:after{
  content: '\2193';
  display: none;
  } */
  .direct_right:before, .direct_right:after{
  	position: absolute;
  	font-size: 14px;
  	color: #000;
  	right: 0;
  }
  .s1_card2 p{
  	font-family: Poppins;
  	font-style: normal;
  	font-weight: 500;
  	font-size: 17px;
  	line-height: 25px;
  	color: #000000;
  	transition: .3s;
  }
  .browser_data:hover>p{
  	color:rgba(31, 151, 239, 0.57) !important
  }
  .s1_card2 strong{
  	font-family: Montserrat;
  	font-style: normal;
  	font-weight: 600;
  	font-size: 22px;
  	line-height: 39px;
  	color: #1F97EF;
  }
  .s1_card3{
  	width: 25%;
  	float: left;
  	padding: 2.5%;
  	background-color: #132439;
  	box-shadow: 0px 4px 0px rgb(148 148 148 / 25%);
  }
  .s1_card3 p {
  	margin-bottom: 40px;
  }
  .s1_card3 strong{
  	font-family: Montserrat;
  	font-style: normal;
  	font-weight: 600;
  	font-size: 24px;
  	line-height: 37px;
  	text-align: center;
  	color: #FFFFFF;
  }
  .section1 .btn {
  	padding: 12px 20px;
  }
  .s1_card2 .btn-info {
  	border-radius: 3px;
  }
  .s1_card3 .btn-info {
  	background:white;
  	box-shadow: 0px 0px 28px 3px rgba(0, 0, 0, 0.1);
  	border-radius: 30px;
  	font-family: Montserrat;
  	font-style: normal;
  	font-weight: bold;
  	font-size: 17px;
  	line-height: 21px;
  	text-align: center;
  	text-transform: uppercase;
  	color: #000000;
  }
  .after_view{
  	display: none;
  }
  .section2{
  	display: flex;
  	flex-direction: row;
  	padding: 0%;
  }
  .s2_desc{
  	position: relative;
  	display: flex;
  	flex-direction: column;
  	width: 95%;
  	text-align: left;
  	margin-left: 5%;
  }
  .carousel-btns{
  	position: absolute;
  	z-index: 10;
  	left: 20px;
  	bottom: 50px;
  }
  .carousel-btns>span{
  	font-size: 24px;
  	color: #000;
  	cursor: pointer;
  	transition: .3s;
  }
  .carousel-btns>span+span{
  	margin-left: 15px;
  }
  .carousel-btns>span:hover{
  	color:#1F97EF;
  }
  .carousel-card{
  	display: flex;
  }
  .carousel-card>div:last-child{
  	flex: 42%;
  }
  .s2_desc>p{
  	font-style: normal;
  	font-weight: 500;
  	font-size: 25px;
  	line-height: 27px;
  	text-transform: uppercase;
  	color: #171717;
  }
  .s2_desc>p>span{
  	font-weight: 600;
  }
  .s2_d_text{
  	padding-top: 30px;
  	padding-right: 50px;
  	padding-left: 20px;
  	padding-bottom: 40px;
  	flex: 58%;
  }
  .s2_d_text p{
  	font-family: Poppins;
  	font-style: normal;
  	font-weight: normal;
  	font-size: 14px;
  	line-height: 20px;
  	color: #000000;
  }
  .s2_d_text strong{
  	font-family: Montserrat;
  	font-style: normal;
  	font-weight: bold;
  	font-size: 20px;
  	line-height: 24px;
  	text-transform: uppercase;
  	color: #000000;
  }
  .s2_d_text span{
  	font-family: Montserrat;
  	font-style: normal;
  	font-weight: bold;
  	font-size: 14px;
  	line-height: 16px;
  	letter-spacing: 0.583333px;
  	text-transform: uppercase;
  	color: #1F97EF;
  }
  .s2_d_num{
  	position: relative;
  	position: absolute;
  	display: flex;
  	bottom: 60px;
  }
  .s2_d_num>div{
  	position: absolute;
  	bottom: 0px;
  	display: flex;
  	margin-right: 30px;
  	font-style: normal;
  	font-weight: 500;
  	font-size: 22px;
  }
  .s2_d_num>div:hover{
  	font-style: normal;
  	font-weight: 600;
  	font-size: 30px;
  	color: #1F97EF;
  	transition: all 0.5s;
  }
  #s2_d_n_2{
  	left: 50px;
  }
  #s2_d_n_3{
  	left: 100px;
  }
  #s2_d_n_4{
  	left: 150px;
  }
  .s2_d_btn{
  	position: relative;
  	position: absolute;
  	display: flex;
  	bottom: 20px;
  }
  .s2_d_btn>div{
  	margin-right: 10px;
  	width: 14px;
  	position: absolute;
  	bottom: 0px;
  }
  .s2_d_btn>div:hover{
  	width: 16px;
  	transition: all 0.5s;
  }
  #next_btn{
  	left: 30px;
  }
  .s2_imgs{
  	width: 45%;
  }
  .s2_img{
  	width: 100%;
  	margin-right: 2px;
  }
  #s2_a{
  	display: none;
  }
  .section2>p{
  	display: none;
  }
  .m_section4{
  	padding: 40px 10%;
  	background-image: url("~/assets/Images_Website/PAL_LandingPage/PAL_LandingPage/Images/section4.png");
  	background-size: cover;
  	background-position: center;
  }
  .m_s4_card{
  	width: 45%;
  	height: 50%;
  	padding: 30px 0;
  	padding-bottom: 40px;
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
  .m_s4_card p:nth-child(2){
  	margin-bottom: 30px;
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
  .section3{
  	display: flex;
  	padding: 5% 10%;
  }
  .s3_desc{
  	display: flex;
  	padding: 2.5%;
  	flex-direction: column;
  	width: 50%;
  	align-items: start;
  	justify-content: center;
  	text-align: left;
  }
  .s3_desc strong{
  	font-family: Montserrat;
  	font-style: normal;
  	font-weight: 600;
  	font-size: 40px;
  	line-height: 50px;
  	letter-spacing: 1.5px;
  	color: #363636;
  	display: block;
  }
  .s3_desc p{
  	font-family: Poppins;
  	font-style: normal;
  	font-weight: normal;
  	font-size: 17px;
  	line-height: 26px;
  	letter-spacing: 0.25px;
  	color: #595959;
  	margin: 4px 0px;
  }
  .s3_desc p:first-child{
  	margin-bottom: 30px;
  }
  .s3_input{
  	position: relative;
  	display: flex;
  	width: 50%;
  	flex-direction: column;
  	font-family: Montserrat;
  	font-style: normal;
  	font-weight: 500;
  	font-size: 14px;
  	line-height: 16px;
  	letter-spacing: 0.583333px;
  	color: #595959;
  }
  .s3_name_in{
  	display: flex;
  	width: 100%;
  }
  .s3_name_in div:first-child {
  	margin-right: 10px;
  }
  .s3_input input{
  	border-radius: 5px;
  	font-size: 16px;
  	margin: 0%;
  	border: #595959 solid 1px;
  	outline: none;
  	padding: 8px 14px;
  	width: 100%;
  }
  .s3_input input:focus{
  	border-color: #3BC9DB;
  }
  .s3_input p{
  	text-align: left;
  }
  .s3_input>p{
  	text-align: left;
  }
  .s3_i_name_d, .s3_i_telephon_d{
  	width: 50%;
  	text-align: left;
  }
  .s3_i_name, .s3_i_telephon{
  	width: 95%;
  }
  .s3_i_email_d{
  	width: 100%;
  	text-align: left;
  }
  .s3_i_email{
  	width: 100%;
  }
  .s3_input .btn-info{
  	bottom: 0%;
  	padding: 20px 0% ;
  	border-radius: 0px;
  	margin: 2.5% 0px;
  	height: 35px;
  	font-size: 16px;
  	display: flex;
  	flex-direction: row;
  	justify-content: space-around;
  	align-items: center;
  	width: 100%;
  	border: none;
  }
  textarea{
  	border-radius: 5px;
  	font-family: Montserrat;
  	font-style: normal;
  	font-weight: 500;
  	font-size: 16px;
  	line-height: 20px;
  	padding: 8px 10px;
  }
  .s3_input input{
  	font-family: Montserrat;
  	font-style: normal;
  	font-weight: 500;
  	font-size: 16px;
  }
  textarea:focus{
  	border-color: #3BC9DB;
  }
  .s3_conter{
  	display: none;
  }
  .section3>p{
  	font-style: normal;
  	font-weight: 600;
  	font-size: 25px;
  	line-height: 30px;
  	color: #000000;
  	text-align: left;
  	display: none;
  }
  @media only screen and (max-width: 1700px) {
  	.s1_card1 strong {
  		font-size: 20px;
  	}
  }
  @media only screen and (max-width: 1600px) {
		.s1_card1 p {
			font-size: 15px;
		}
  }
  @media only screen and (max-width: 1400px) {

  	.s1_card1 strong {
  		font-size: 20px;
  		line-height: 30px;
  	}
  	.s1_card1 p {
  		font-size: 14px;
    	line-height: 25px;
  	}
  	.s1_card2 strong {
  		font-size: 20px;
  	}
  	.s1_card2 p {
  		font-size: 14px;
    	line-height: 20px;
  	}
  	.s1_card3 strong {
  		font-size: 20px;
  	}
  	.s1_card3 .btn-info {
  		font-size: 15px;
  	}
  	.m_s4_card strong {
  		font-size: 24px;
  	}
  }

  @media only screen and (max-width: 1400px) {
  
    	.carousel-card div:last-child {
    		display: flex;
    		justify-content: center;
    		align-items: center;
    	}
    	.s3_desc {
    		text-align: center;
    	}
    	.s3_desc p:first-child {
    		width: 100%;
    		text-align: left;
    	}
    	.s3_desc p:nth-child(2) {
    		text-align: left;
    	}
	}
 
@media only screen and (max-width: 1100px) {
	.produkter_header {
		padding: 120px 5% 100px 5%;
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
	.before{
		display: none!important;
	}
	.after{
		display: block!important;
	}
}

  @media only screen and (max-width: 1100px) {
  	.section1{
  		display: flex;
  		flex-direction: column;
  		position: relative;
  		padding-bottom: 50px;

  	}
  	.s1_card1{
  		width: 100%;
  		padding: 5%;
  		height: auto;
  		padding-bottom: 80px;
  		background: #EEEEEE;
  		box-shadow: 0px 0px 2px 2px rgb(148 148 148 / 25%);
  	}
  	.s1_card2{
  		width: 100%;
  		padding: 5%;
  	}
  	.s1_card3{
  		width: 100%;
  		padding: 5%;
  		padding-bottom: 50px;
  	}
  	.s1_line{
  		display: none;
  	}
  	.s1_card2{
  		height: auto;
  		padding-bottom: 90px;
  		box-shadow: 0px 3px 2px 2px rgb(148 148 148 / 25%);
  	}
  	.after_view{
  		display: block;
  		border-top: 1px solid #f5f5f5;
  	}
  	.before_view{
  		display: none;
  	}
  	.s1_card3 strong{
  		font-family: Poppins;
  		font-style: normal;
  		font-weight: 600;
  		font-size: 24px;
  		line-height: 36px;
  		text-align: center;
  	}
  	.s1_card3 .btn-info{
  		background-color: #1F97EF;
  		font-family: Montserrat;
  		font-style: normal;
  		font-weight: bold;
  		font-size: 12px;
  		color: #FFFFFF;
  	}
  	.s1_card1 p {
  		font-size: 12px;
  	}
  	.s1_card2.after_view p:first-child {
  		margin-bottom: 5px;
  	}
  }
  

  @media only screen and (max-width: 1100px) {
  	.section2{
  		display: none;
  		flex-direction: column;
  		padding: 0%;
  		flex-flow: column-reverse;
  	}
  	.s2_imgs{
  		display: flex;
  		width: 100%;
  	}
  	.s2_desc{
  		margin: 0;
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
  	.s2_desc>p{
  		display: none;
  	}
  }

  
  @media only screen and (max-width: 1100px) {
  	.m_s4_card{
  		width: 100%;
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
  		font-size: 16px;
  		line-height: 20px;
  		font-weight: 600;
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
  	textarea{
  		border: none;
  		border-bottom: #000 solid 1px;
  		border-radius: 0%;
  	}
  	.section3{
  		flex-direction: column;
  	}
  	.s3_desc{
  		padding: 0%;
  		width: 100%;
  	}
  	.s3_input{
  		width: 100%;
  	}
  	.s3_input .btn-info{
  		position: relative;
  		margin-top: 30px;
  	}
  	.s3_desc span{
  		text-decoration: none;
  	}
  	.s3_input>p{
  		display: none;
  	}
  	.s3_conter{
  		display: block;
  		text-align: left;
  	}
  	.s3_name_in{
  		display: flex;
  		flex-direction: column;
  	}
  	.s3_i_name_d, .s3_i_telephon_d{
  		width: 97%;
  		text-align: left;
  		margin: 2.5%;
  	}
  	.s3_i_name_d>p, .s3_i_telephon_d>p{
  		display: none;
  	}
  	.s3_i_email_d>p{
  		display: none;
  	}
  	.s3_input input{
  		border: none;
  		border-bottom: #595959 solid 1px;
  		border-radius: 0%;
  		padding-left: 0px;
  	}
  	.s3_line{
  		display: block;
  	}
  	.section3>p{
  		display: block;
  	}
  	.s3_desc strong{
  		font-family: Poppins;
  		font-style: normal;
  		font-weight: 500;
  		font-size: 20px;
  		line-height: 30px;
  	}
  	.s3_i_email_d {
  		width: 97%;
  		margin-left: 2.5%;
  	}
  }

 @media only screen and (max-width: 900px) {
  	.section5{
  		padding: 5%;
  	}
  	.section5 strong{
  		font-size: 28px;
  		color: #fff;
  	}
  	.section5 .btn {
  		font-size: 14px;
  	}
  }
</style>

