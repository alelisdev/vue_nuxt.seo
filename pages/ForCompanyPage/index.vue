/* eslint-disable */
<template>
	<div class="hello">
		<main-navbar :isSelected = 3 />
		<!-- header html code start -->
		<div class="produkter_header">
			<div class="produkter_title">
				<p style="margin-bottom: 0;"><strong>{{$t('upper_forcompanies')}}</strong></p>
				<p style="margin: 0;margin-bottom: 30px;" class="breadcrumb_links"><router-link to="/">{{$t('home')}}</router-link> > <router-link to="/forCompanyPage">{{$t('forcompanies')}} </router-link></p>
				<p><small>{{$t('forcompany_header1')}}<br> {{$t('forcompany_header2')}}</small></p>
			</div>
		</div>
		<!-- header html code end -->
		<!-- section1 html code start -->
		<div class="section1">
			<div class="s1_card1">
				<p><strong>{{$t('bus_solution')}}</strong></p>
				<p>{{$t('bus_solution_desc')}}</p>
			</div>
			<div class="s1_card2">
				<p><strong>B2B</strong></p>
				<p>{{$t('com_b2b_desc')}}</p>
				<router-link to="/b2bPage" class="btn btn-info">{{$t('readmore')}}</router-link>
				<div class="mid-line"></div>
			</div>

			<div class="s1_card2">
				<p><strong>CUSTOMIZATION</strong></p>
				<p>{{$t('cus_desc1')}}<br>
				{{$t('cus_desc2')}}</p>
				<router-link to="/palLandingPage" class="btn btn-info">{{$t('readmore')}} </router-link>
			</div>
			<div class="s1_card3">
				<p><strong>{{$t('helpyou1')}}<br>{{$t('helpyou2')}} </strong></p><br><br><br>
				<router-link to="/contactUsPage" class="btn btn-info">{{$t('contact')}}</router-link>
			</div>
			<div class="s1_line"></div>
		</div>
		<!-- section1 html code end -->
		<!-- section2 html code start -->
		<div class="section2">
			<div class="s2_desc">
				<VueSlickCarousel v-bind="settings" ref="carousel1">
					<div>
						<div class="carousel-card">
							<div class="s2_d_text">
								<p class="d-none-lt-1100">{{$t('earlier')}} <span>{{$t('area_app')}}</span></p>
								<p><strong>{{$t('electric_scooter')}}</strong></p>
								<p class="d-none-gt-1100">{{$t('electric_scooter_desc1')}}<br> <br>{{$t('electric_scooter_desc2')}}</p>
								<p class="d-none-lt-1100">{{$t('electric_scooter_desc1')}}<br> <br>{{$t('electric_scooter_desc2')}}</p>
							</div>
							<div class="carousel-img">
								<img src="~/assets/Images_Website/ForCompanies/ForCompanies/Images/Rectangle813252.png" class="s2_img"/>
							</div>
						</div>
					</div>
					<div>
						<div class="carousel-card">
							<div class="s2_d_text">
								<p class="d-none-lt-1100">{{$t('earlier')}} <span>{{$t('area_app')}}</span></p>
								<p><strong>{{$t('company_cars')}}</strong></p>
								<p class="d-none-gt-1100">{{$t('company_cars_desc1')}}<br>
									<br>{{$t('company_cars_desc2')}} 
 								</p>
								<p class="d-none-lt-1100">{{$t('company_cars_desc1')}}<br>
									<br> {{$t('company_cars_desc2')}}
								</p>
							</div>
							<div class="carousel-img">
								<img src="~/assets/Images_Website/ForCompanies/ForCompanies/Images/Rectangle8132521.png" class="s2_img"/>
							</div>
						</div>
					</div>
					<div>
						<div class="carousel-card">
							<div class="s2_d_text">
								<p class="d-none-lt-1100">{{$t('earlier')}} <span>{{$t('area_app')}}</span></p>
								<p><strong>{{$t('electric_bicycle')}}</strong></p>
								<p class="d-none-gt-1100">{{$t('electric_bicycle_desc1')}}<br> 
									<br>{{$t('electric_bicycle_desc2')}}
								</p>
								<p class="d-none-lt-1100">{{$t('electric_bicycle_desc1')}}<br>
									<br>{{$t('electric_bicycle_desc2')}}
								</p>
							</div>
							<div class="carousel-img">
								<img src="~/assets/Images_Website/ForCompanies/ForCompanies/Images/Rectangle81325211.png" class="s2_img"/>
							</div>
						</div>
					</div>
					<div>
						<div class="carousel-card">
							<div class="s2_d_text">
								<p class="d-none-lt-1100">{{$t('earlier')}} <span>{{$t('area_app')}}</span></p>
								<p><strong>{{$t('trucks')}}</strong></p>
								<p class="d-none-gt-1100">{{$t('trucks_desc1')}}<br> 
									<br>{{$t('trucks_desc2')}}
								</p>
								<p class="d-none-lt-1100">{{$t('trucks_desc1')}}<br> 
									<br>{{$t('trucks_desc2')}}
								</p>
							</div>
							<div class="carousel-img">
								<img src="~/assets/Images_Website/ForCompanies/ForCompanies/Images/Rectangle8132523.png" class="s2_img"/>
							</div>
						</div>
					</div>
				</VueSlickCarousel>
				<div class="s2_d_num">
					<div id="s2_d_n_1" @click="go_to(0)" :class="{ 'clicked':fadeShow==0?true:false }">01</div>
					<div id="s2_d_n_2" @click="go_to(1)" :class="{ 'clicked':fadeShow==1?true:false }">02</div>
					<div id="s2_d_n_3" @click="go_to(2)" :class="{ 'clicked':fadeShow==2?true:false }">03</div>
					<div id="s2_d_n_4" @click="go_to(3)" :class="{ 'clicked':fadeShow==3?true:false }">04</div>
				</div>
				<div class="s2_d_btn">
					<div id="prov_btn" @click="slide_prev"><img src="~/assets/Images_Website/ForCompanies/ForCompanies/Icons/arrow 5.svg" class="s2_img"/></div>
					<div id="next_btn" @click="slide_next"><img src="~/assets/Images_Website/ForCompanies/ForCompanies/Icons/arrow 4.svg" class="s2_img"/></div>
				</div>
			</div>
			<p>{{$t('earlier')}} <span>{{$t('area_app')}}</span></p>
			<!-- </div> -->
		</div>
		<!-- section2 html code end -->
		<!-- section4 html code start -->
		<div class="m_section4">
			<div class="m_s4_card">
				<p>{{$t('whoweare')}} </p>
				<p><strong>{{$t('whoweare_desc1')}}<br>{{$t('whoweare_desc2')}}</strong></p>
				<p><router-link  to="/aboutUsPage" class="btn btn-info">{{$t('about')}}</router-link></p>
			</div>
		</div>
		<!-- section4 html code end -->

		<!-- section3 html code start -->
		<div class="section3">
			<div class="s3_desc">
				<p><strong><br>{{$t('interest')}}<br>{{$t('cooperation')}}</strong></p>
				<p>{{$t('cooper_desc')}}</p><br>
			</div>
			<p>{{$t('support_form')}}</p>
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

		<!-- section5 html code start -->
		<div class="section5 d-none-lt-1100">
			<div>
				<p><strong>{{$t('interesting')}}</strong></p>
				<p>{{$t('europe1')}}<br>{{$t('europe2')}}</p>
				<div class="imgcardbtns">
					<router-link to="/retailerPage" class="btn btn-primary">{{$t('reseller')}}</router-link>
				</div>
			</div>
		</div>
		<!-- section5 html code end -->
		<main-footer />
	</div>
</template>

<script>
	import VueSlickCarousel from 'vue-slick-carousel'
	import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import headerConfig from '~/config/head'


export default {
	name: 'ForCompanyPage',

	head() {
   		 return headerConfig.forcompany;
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
		slide_prev(){
			this.$refs.carousel1.prev()
			this.fadeShow = this.fadeShow==0?this.fadeShow = 3:--this.fadeShow
		},
		slide_next(){
			this.$refs.carousel1.next()
			this.fadeShow = this.fadeShow==3?this.fadeShow = 0:++this.fadeShow
		},
		go_to(num){
			this.$refs.carousel1.goTo(num)
			this.fadeShow = num
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
	font-weight: 600;
	font-size: 18px;
	line-height: 22px;
	color: #FFFFFF;
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
.s2_d_text{
	opacity: 1;
	transition: opacity .3s;
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 17px;
	line-height: 25px;
	color: #000000;
	opacity: 1;
	transition-delay: .2s;
	transition: opacity .3s;
}
.s2_d_text.fade{
	opacity: 0;
	display: none;
	transition-delay: .2s;
	transition: opacity .3s;
}



.produkter_header {
	padding: 120px 0% 60px 10%;
	background-image: url("~/assets/Images_Website/Products_LandingPage/Products_LandingPage/Images/backgroundgrad.svg"),
	url("~/assets/Images_Website/ForCompanies/ForCompanies/Images/FyD3OWBuXnY.png");
	background-size: cover, 100% 100%;
	background-position: center, center;
}

.produkter_title>p>span{
	font-style: normal;
	font-weight: 600;
	font-size: 17px;
	line-height: 25px;
	text-transform: uppercase;
	align-items: center;
	color: #3BC9DB;
	display: flex;
	;
}
.produkter_title strong{
	font-family: Raleway;
	font-style: normal;
	font-weight: bold;
	font-size: 54.5455px;
	line-height: 74px;
	align-items: center;
	text-transform: uppercase;
	color: #fff;
	display: flex;
}
.produkter_title p{
	font-family: Montserrat;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 22px;
	text-align: left;
	color: #FFFFFF;
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

.section5{
	padding: 30px;
	padding-bottom: 50px;
	background-image: url("~/assets/Images_Website/HomePage/Images/ISCAbstractBackgroundV2063.png");
	background-size: cover;
	background-position: bottom center;
}
.section5 p{
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	line-height: 30px;
	text-align: center;

	color: #FFFFFF;
}
.section5 strong{
	font-family: Montserrat;
	font-style: normal;
	font-weight: 600;
	font-size: 36px;
	line-height: 44px;
	color: #FFF;
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
	padding: 10px 30px;
	background: #ffffff;
	border: #fff solid 2px;
	box-shadow: 0px 0px 28px 3px rgba(0, 0, 0, 0.1);
	font-family: Montserrat;
	font-style: normal;
	font-weight: bold;
	font-size: 17px;
	line-height: 21px;
	text-align: center;
	text-transform: uppercase;
	color: #1F97EF;
	border-radius: 0;
	transition: color .3s;
}
.section5 .btn.btn-primary:hover{
	color: #3BC9DB;
}
.imgcardbtns{
	margin-top: 45px;
}
.section1{
	display: flex;
	flex-direction: row;
	position: relative;
	padding: 0% 5%;
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
	height: 200px;
	width: 0;
	border-left: 3px solid #E9ECED;
	top: 25px;
	left: 50%;
	z-index: 2;
}
.s1_card1{
	width: 25%;
	float: left;
	background-color: #132439;
	height: 400px;
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
	color: #F4F4F4;
}
.s1_card1 strong{
	font-family: Montserrat;
	font-style: normal;
	font-weight: 600;
	font-size: 30px;
	color: #FFFFFF;
	line-height: 39px;
}
.s1_card2{
	width: 25%;
	float: left;
	height: 400px;
	padding: 3%;
	text-align: left;
	background-color: #FFFFFF;
	box-shadow: 0px 4px 0px rgb(148 148 148 / 25%);
}
.s1_card2 p{
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 17px;
	line-height: 25px;
	color: #020202;
	margin-bottom: 50px;
}
.s1_card2 strong{
	font-family: Montserrat;
	font-style: normal;
	font-weight: 600;
	font-size: 30px;
	line-height: 39px;
	color: #1F97EF;
}
.s1_card3{
	width: 25%;
	float: left;
	background-color: #F5F5F5;
	height: 400px;
	padding: 2.5%;
	box-shadow: 0px 4px 0px rgb(148 148 148 / 25%);
}
.s1_card3 strong{
	font-family: Montserrat;
	font-style: normal;
	font-weight: 600;
	font-size: 30px;
	line-height: 37px;
	text-align: center;
	color: #000000;
}
.section1 .btn {
	padding: 12px 20px;
}
.s1_card2 .btn-info {
	border-radius: 0px;
}
.s1_card3 .btn-info {
	background:#132439;
	box-shadow: 0px 0px 28px 3px rgba(0, 0, 0, 0.1);
	color: #fff;
	border-radius: 30px;
	padding: 20px 40px;
	transition: .4s;
}
.section2{
	display: flex;
	flex-direction: row;
	padding: 0%;
	padding-left: 100px;
}
.img-carousel{
	width: 50%;
}
.s2_desc{
	position: relative;
	display: flex;
	flex-direction: column;
	padding: 0px;
	width: 100%;
	text-align: left;
}
.carousel-card{
	display:flex;
}
.s2_d_text{
	flex: 45%;
	padding-right: 50px;
}
.carousel-img{
	flex: 55%;
}
.s2_d_text>p:first-child{
	font-style: normal;
	font-weight: 500;
	font-size: 30px;
	line-height: 39px;
	text-transform: uppercase;
	color: #171717;
	margin-top: 50px;
	margin-bottom: 100px;
}
.s2_d_text>p:first-child>span{
	font-weight: 600;
}
.s2_d_text p{
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 17px;
	line-height: 25px;
	color: #000000;
	padding-right: 20px;
}
.s2_d_text strong{
	font-family: Montserrat;
	font-style: normal;
	font-weight: bold;
	font-size: 26.0615px;
	line-height: 32px;
	text-transform: uppercase;
	color: #1F97EF;
}
.s2_d_text strong.fade{
	display: none;
	opacity: 0;
	transition: opacity .3s;
}
.s2_d_num{
	position: relative;
	position: absolute;
	display: flex;
	bottom: 80px;
}
.s2_d_num>div{
	position: absolute;
	bottom: 0px;
	display: flex;
	margin-right: 30px;
	font-style: normal;
	font-weight: 500;
	font-size: 22px;
	cursor: pointer;
	transition: .3s;
}
.s2_d_num>div.clicked{
	color: #1F97EF;
	font-size: 26px;
	font-weight: 800;
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
	bottom: 40px;
}
.s2_d_btn>div{
	margin-right: 10px;
	width: 14px;
	position: absolute;
	bottom: 0px;
}
#next_btn{
	left: 30px;
}
.s2_imgs{
	display: flex;
	width: 50%;
	height: 450px;
}
.s2_img{
	width: 100%;
	object-fit: cover;
	cursor: pointer;
}
#s2_a{
	display: none;
}
.section2>p{
	display: none;
}
.m_section4{
	padding: 30px 50px;
	background-image: url("~/assets/Images_Website/ForCompanies/ForCompanies/Images/AbstractNetworkBackground_052.png");
	background-size: 100%, 100%;
	background-position: center;
	margin-top: 30px;
}
.m_s4_card{
	max-width: 800px;
	padding: 20px 30px;
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
.m_s4_card p:last-child{
	margin-top: 40px;
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
	text-align: left;
	padding-right: 80px;
}
.s3_desc strong{
	font-family: Montserrat;
	font-style: normal;
	font-weight: 600;
	font-size: 40px;
	line-height: 50px;
	letter-spacing: 1.5px;
	color: #363636;
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
	text-align: left;
}
.s3_desc p:first-child{
	margin-top: 50px;
	text-align: left;
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
	border-radius: 5px;
	margin: 2.5% 0px;
    width: 100%;
	height: 35px;
	font-size: 16px;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	border: none;
	border-radius: 0;
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
@media only screen and (max-width: 1400px) {
	
	.s1_card1 strong {
		font-size: 14px;
	}
	.s1_card1 p {
		font-size: 12px;
    	line-height: 30px;
	}
	.s1_card2 strong {
		font-size: 20px;
	}
	.s1_card2 p {
		font-size: 12px;
	}
	.s1_card3 strong {
		font-size: 20px;
	}
	.btn.btn-info {
		font-size: 15px;
	}
	.s1_card3 .btn-info {
		padding: 10px 30px;
	}
	.nav-item {
		padding-right: 0px;
	}
	#nav-search {
		margin-left: 20px;
	}
	.s2_d_num {
		position: unset;
		margin-top: 18px;
	}
	.s2_d_num>div.clicked {
		font-size: 18px;
	}
	.s2_d_num>div {
		font-size: 20px;
	}
	.s2_d_btn {
		display: none;
	}
	.s3_desc {
		text-align: center;
	}
	.carousel-img {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.s2_d_text p:nth-child(4) {
		font-size: 15px;
	}
	.s2_d_text>p:first-child {
		margin-bottom: 0px;
		font-size: 25px;
	}
	.s2_d_text strong {
		font-size: 20px;
	}
}
@media only screen and (max-width: 1100px) {
	.produkter_header {
		padding: 130px 5% 100px 5%;
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
		font-size: 48px;
		text-transform: unset;
	}
	.produkter_title a{
		font-style: italic;
	}
	.produkter_title p{
		text-align: center;
	}
/* .produkter_title a{
  display: block;
  font-weight: 600;
  font-size: 18px;
  line-height: 74px;
  align-items: center;
  text-align: center;
  font-style: italic;
  letter-spacing: 0.75px;
  } */
  .produkter_title small{
  	text-align: center;
  	display: block;
  	font-family: 'Poppins';
  }
  .produkter_title a>span{
  	color: #3BC9DB;
  }
}




@media only screen and (max-width: 1100px) {
	.section1{
		display: flex;
		flex-direction: column;
		position: relative;
		padding-bottom: 0px;
		transform: translate(0, -70px);
		background-color: transparent;

	}
	.s1_card1{
		width: 100%;
		padding: 5%;
	}
	.s1_card2{
		width: 100%;
		padding: 5%;
	}
	.s1_card3{
		width: 100%;
		padding: 5%;
	}
	.s1_line{
		display: none;
	}
	.s1_card1, .s1_card2, .s1_card3{
		height: auto;
		padding: 30px 20px;
		float: none;
		margin-top: 0;
		box-shadow: 0px 4px 4px rgb(0 0 0 / 20%);
	}
	.s1_card1 p{
		font-size: 12px;
		line-height: 26px;
		font-weight: normal;
	}
	.s1_card1 strong{
		font-size: 14px;
		line-height: 21px;
		font-family: 'Poppins'
	}
	.s1_card2 p{
		margin-bottom: 20px;
		font-size: 13px;
	}
	.s1_card2 strong{
		font-size: 18px;
	}
	.s1_card2 .btn-info{
		font-size: 12px;
	}
	.s1_card3 strong{
		font-size: 24px;
		line-height: 36px;
		font-family: 'Poppins'
	}
	.s1_card3 .btn-info{
		font-size: 12px;
	}
	.s1_card2 p:first-child {
		margin-bottom: 0px;
	}
	.s1_card2 p:nth-child(2) {
		margin-top: 0px;
	}
	.s1_card3 br:first-child, br:nth-child(2) {
		display: none;
	}
	.s1_card3 {
		padding-bottom: 70px;
		background: #EEEEEE;
	}
}



@media only screen and (max-width: 1100px) {
	.section2{
		display: flex;
		flex-direction: column;
		flex-flow: column-reverse;
		padding: 0%;
	}
	.img-carousel{
		width: 100%;
	}
	.s2_imgs{
		display: flex;
		width: 100%;
	}
	.s2_desc{
		margin: 0;
		width: 100%;
		padding-bottom: 20px;
	}
	#s2_a{
		display: block;
		height: 70vw;
	}
	#s2_b{
		display: none;
	}
	.section2>p{
		display: block;
		font-family: Poppins;
		font-style: normal;
		font-weight: 500;
		font-size: 17px;
		line-height: 25px;
		color: #000000;
		margin-top: -30px;
	}
	.s2_d_text strong{
		font-size: 14px;
		line-height: 21px;
	}
	.s2_d_text p{
		font-size: 14px;
		line-height: 26px;
	}
	.section2>p>span{
		font-weight: 600;
	}
	.s2_desc>p{
		display: none;
	}
	.carousel-card{
		flex-direction: column;
		flex-flow: column-reverse;
	}
	.s2_d_text{
		padding-right: 0;
		padding: 0 20px;
	}
	.s2_d_num, .s2_d_btn{
		left: 20px;
	}
	.s2_d_btn {
		display: unset;
	}
	.s2_d_btn>div {
	    top: 70px;
    	width: 10px;
	}
	.s2_d_num>div {
		font-size: 18px;
		padding-left: 20px;
	}
}


@media only screen and (max-width: 1100px) {
	.m_section4{
		padding: 5% 10%;
		background-size: cover;
		margin-top: 70px;
	}
	.m_s4_card{
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
		text-transform: none;
	}
	.m_s4_card strong{
		font-style: normal;
		font-weight: normal;
		font-size: 12px;
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
	.m_section4 .btn.btn-info {
		background: #1F97EF;
		box-shadow: 0px 0px 28px 3px rgba(0, 0, 0, 0.1);
		color: #fff;
		font-size: 12px;
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
		display: none;
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
	.s3_i_email_d {
		width: 97%;
		margin-left: 2.5%;
	}
	.s3_line{
		display: block;
	}
	.section3>p{
		display: block;
	}
	.s2_d_num>div.clicked {
		font-size: 20px;
	}
	.mid-line {
	    height: 1px;
	    width: 80%;
	    margin: auto;
	    margin-top: 40px;
	    background: #EEEEEE;
	}
	.section1 .s1_card2:nth-child(3) {
		padding-top: 0px;
	}
	.section1 .s1_card2:nth-child(3) p:first-child {
		margin-top: 0px;
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

