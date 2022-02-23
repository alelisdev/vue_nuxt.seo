/* eslint-disable */
<template>
	<div class="hello">
		<main-navbar :isSelected = 3 />
		<!-- header html code start -->
		<div class="produkter_header">
			<div class="produkter_title">
				<p><span>{{$t('streamline')}}</span></p>
				<p><strong>b2b</strong></p>
				<p class="breadcrumb_links"><router-link to="/">{{$t('lowercase_homepage')}}</router-link>&nbsp; > &nbsp;<router-link to="/forCompanyPage">{{$t('forcompanies')}}</router-link> <router-link to="/b2bPage"><span>&nbsp;> &nbsp;B2B</span></router-link></p><br>
				<p><small>{{$t('b2b_desc')}}</small></p>
			</div>
		</div>
		<!-- header html code end -->

		<!-- section1 html code start -->
		<div class="section1" id="section1_before">
			<div class="s1_card" :class="{ 'wid_long': fadeShow1==2?true:false,  'wid_small': fadeShow2==4||fadeShow3==6?true:false }">
				<div class="s1_c_setting" :class="{'colums': fadeShow2==4||fadeShow3==6?true:false }">
					<p><strong>{{$t('streamline')}}</strong></p>
					<img src="~/assets/Images_Website/B2B_LandingPage/B2B_LandingPage/Icons/Path 808.svg"/>
				</div>
				<div style="display:flex">
					<div style="padding:5px">
						<p :class="{ 'd-none': fadeShow2==4||fadeShow3==6?true:false}">
							{{$t('stream_desc1')}}
						</p>
					</div>
					<div style="padding:5px">
						<p :class="{ 'd-none': fadeShow1==2?false:true }"><b>{{$t('iot')}}</b><br>
							{{$t('iot_desc')}}
						</p>
					</div>
				</div>
				<span class="triangle"  @click="fadeShow1=2, fadeShow2=3, fadeShow3=5" :class="{ 'd-none': fadeShow1==1?false:true }">+</span>
				<span class="triangle" @click="fadeShow1=1" :class="{ 'd-none': fadeShow1==2?false:true }">&minus;</span>
			</div>

			<div class="s1_card" :class="{ 'wid_long': fadeShow2==4?true:false, 'wid_small': fadeShow1==2||fadeShow3==6?true:false }">
				<div class="s1_c_setting" :class="{'colums': fadeShow1==2||fadeShow3==6?true:false }">
					<p><strong>{{$t('integration')}}</strong></p>
					<img src="~/assets/Images_Website/B2B_LandingPage/B2B_LandingPage/Icons/Path 808.svg"/>
				</div>
				<div style="display:flex">
					<div style="padding:5px">
						<p :class="{ 'd-none': fadeShow1==2||fadeShow3==6?true:false}">{{$t('integration_desc1')}}<br><br>
							{{$t('integration_desc2')}}
						</p>
					</div>
					<div style="padding:5px">
						<p :class="{ 'd-none': fadeShow2==4?false:true }">{{$t('integration_desc3')}}<br>
							<b>{{$t('integration_desc4')}}</b><br>
							{{$t('integration_desc5')}}
						</p>
					</div>
				</div>
				<span class="triangle"  @click="fadeShow2=4, fadeShow1=1, fadeShow3=5" :class="{ 'd-none': fadeShow2==3?false:true }">+</span>
				<span class="triangle" @click="fadeShow2=3" :class="{ 'd-none': fadeShow2==4?false:true }">&minus;</span>
			</div>

			<div class="s1_card" :class="{ 'wid_small': fadeShow1==2||fadeShow2==4?true:false, 'wid_long': fadeShow3==6?true:false}">
				<div class="s1_c_setting" :class="{ 'colums': fadeShow1==2||fadeShow2==4?true:false}">
					<p><strong>{{$t('become_reseller')}}</strong></p>
					<img src="~/assets/Images_Website/B2B_LandingPage/B2B_LandingPage/Icons/Path 808.svg"/>
				</div>
				<div style="display:flex">
					<div style="padding:5px">
						<p :class="{ 'd-none': fadeShow1==2||fadeShow2==4?true:false}">{{$t('become_desc1')}}<br><br>
							{{$t('become_desc2')}}<br> <br>{{$t('become_desc3')}}
						</p>
					</div>
					<div style="padding:5px">
						<p :class="{ 'd-none': fadeShow1==2?true:false, 'd-none': fadeShow2==4?true:false, 'd-none': fadeShow3==5?true:false }">{{$t('become_desc4')}}<br><br>
							{{$t('become_desc5')}}
						</p>			
					</div>
				</div>
				<span class="triangle"  @click="fadeShow3=6, fadeShow1=1, fadeShow2=3" :class="{ 'd-none': fadeShow3==5?false:true }">+</span>
				<span class="triangle" @click="fadeShow3=5" :class="{ 'd-none': fadeShow3==6?false:true }">&minus;</span>
			</div>
		</div>
		<!-- section1 html code end -->
		<!-- section1 html code start -->
		<div class="section1"  id="section1_after">
			<div class="s1_card" :class="{ 'heignt_long': fadeShow1==2?true:false,  'height_small': fadeShow2==4||fadeShow3==6?true:false }">
				<div class="s1_c_setting" :class="{'colums': fadeShow2==4||fadeShow3==6?true:false }">
					<img src="~/assets/Images_Website/B2B_LandingPage/B2B_LandingPage/Icons/circle_pecent.svg">
					<p><strong>{{$t('streamline')}}</strong></p>
				</div>
				<p>{{$t('stream_bus_desc1')}}</p>
				<p :class="{ 'd-none': fadeShow1==2?false:true }">
					{{$t('stream_bus_desc2')}}
				</p>
				<p :class="{ 'd-none': fadeShow1==2?false:true }"><b>{{$t('iot')}}</b><br>
					{{$t('iot_desc')}}
				</p>
				<img  src="~/assets/Images_Website/B2B_LandingPage/B2B_LandingPage/Icons/plus_trangle.svg" class="btn btn-info"  @click="fadeShow1=2, fadeShow2=3, fadeShow3=5, scroll_view(3)" :class="{ 'd-none': fadeShow1==1?false:true }"/>
				<img  src="~/assets/Images_Website/B2B_LandingPage/B2B_LandingPage/Icons/minuse_trangle.svg" class="btn btn-info" @click="fadeShow1=1, scroll_view(3)" :class="{ 'd-none': fadeShow1==2?false:true }"/>
			</div>

			<div class="s1_card" :class="{ 'heignt_long': fadeShow2==4?true:false, 'height_small': fadeShow1==2||fadeShow3==6?true:false }">
				<div class="s1_c_setting" :class="{'colums': fadeShow1==2||fadeShow3==6?true:false }">
					<img src="~/assets/Images_Website/B2B_LandingPage/B2B_LandingPage/Icons/circle_pecent.svg">
					<p><strong>{{$t('integration')}}</strong></p>
				</div>
				<p>{{$t('hide_inte_desc1')}}</p>
				<p :class="{ 'd-none': fadeShow2==4?false:true }">{{$t('hide_inte_desc2')}}</p>
				<p :class="{ 'd-none': fadeShow2==4?false:true }">{{$t('hide_inte_desc2')}}</p>
				<img  src="~/assets/Images_Website/B2B_LandingPage/B2B_LandingPage/Icons/plus_trangle.svg" class="btn btn-info"  @click="fadeShow1=1, fadeShow2=4, fadeShow3=5, scroll_view(4)" :class="{ 'd-none': fadeShow2==3?false:true }"/>
				<img  src="~/assets/Images_Website/B2B_LandingPage/B2B_LandingPage/Icons/minuse_trangle.svg" class="btn btn-info" @click="fadeShow2=3, scroll_view(4)" :class="{ 'd-none': fadeShow2==4?false:true }"/>
			</div>

			<div class="s1_card" :class="{ 'height_small': fadeShow1==2||fadeShow2==4?true:false, 'heignt_long': fadeShow3==6?true:false}">
				<div class="s1_c_setting" :class="{ 'colums': fadeShow1==2||fadeShow2==4?true:false}">
					<img src="~/assets/Images_Website/B2B_LandingPage/B2B_LandingPage/Icons/circle_pecent.svg">
					<p><strong>{{$t('become_reseller')}}</strong></p>
				</div>
				<p>{{$t('hide_inte_desc1')}}</p>
				<p :class="{ 'd-none': fadeShow1==2?true:false, 'd-none': fadeShow2==4?true:false, 'd-none': fadeShow3==5?true:false }">Effektivisera din verksamhet genom våra redan färdiga produkter och tjänster. Få en full överblick över era resurser såsom maskinparken, leveranser och diverse fordon genom vårt breda utbud av spårsändare.  Effektivisera din verksamhet genom våra redan färdiga produkter och tjänster. Få en full överblick över era resurser såsom maskinparken, leveranser och diverse fordon genom vårt breda</p>
				<p :class="{ 'd-none': fadeShow1==2?true:false, 'd-none': fadeShow2==4?true:false, 'd-none': fadeShow3==5?true:false }">Effektivisera din verksamhet genom våra redan färdiga produkter och tjänster. Få en full överblick över era resurser såsom maskinparken, leveranser och diverse fordon genom vårt breda utbud av spårsändare.  Effektivisera din verksamhet genom våra redan färdiga produkter och tjänster. Få en full överblick över era resurser såsom maskinparken, leveranser och diverse fordon genom vårt breda</p>
				<img  src="~/assets/Images_Website/B2B_LandingPage/B2B_LandingPage/Icons/plus_trangle.svg" class="btn btn-info"  @click="fadeShow1=1, fadeShow2=3, fadeShow3=6, scroll_view(5)" :class="{ 'd-none': fadeShow3==5?false:true }"/>
				<img  src="~/assets/Images_Website/B2B_LandingPage/B2B_LandingPage/Icons/minuse_trangle.svg" class="btn btn-info" @click="fadeShow3=5, scroll_view(5)" :class="{ 'd-none': fadeShow3==6?false:true }"/>
			</div>
		</div>
		<!-- section1 html code end -->
		<!-- section4 html code start -->
		<div class="m_section4">
			<div class="m_s4_card">
				<p>{{$t('nav_business2.personalized_solutions')}}</p>
				<p><strong>{{$t('gostep1')}}<br>{{$t('gostep2')}}</strong></p>
				<router-link  to="/palLandingPage" class="btn btn-info">{{$t('readmore')}}</router-link>
			</div>
		</div>
		<!-- section4 html code end -->
		<!-- section3 html code start -->
		<div class="section3">
			<div class="s3_desc">
				<p><strong>{{$t('inter')}}<br class="d-none-gt-1100">{{$t('tellmore')}}</strong></p>
				<p class="d-none-lt-1100">{{$t('side_article')}} </p><br>
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
	// import MainNavbar from './MainNavbar'
	// import MainFooter from './MainFooter'
	import headerConfig from "~/config/head"
	export default {
		name: 'B2BPage',

	head() {
    return headerConfig.b2b;
  	},

		data () {
			return {
				fadeShow1: 1,
				fadeShow2: 3,
				fadeShow3: 5
			}
		},
		methods:{
			scroll_view(num){
				setTimeout(function () {
					var scroll_div = document.getElementsByClassName('s1_c_setting')[num]
					var yPosition = scroll_div.getBoundingClientRect().top + window.scrollY - 108
					window.scrollTo(0, yPosition)
				}, 100)
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
	border-radius: 0;
}
.btn.btn-info {
	background:#1F97EF;
	font-family: Montserrat;
	font-style: normal;
	font-weight: bold;
	font-size: 14px;
	line-height: 26px;
	text-align: center;
	letter-spacing: 0.56px;
	text-transform: uppercase;
	color: #FFFFFF;
	transition: .3s;
}
.btn.btn-info:hover{
	background: #36A5F6;
}
#section1_after .btn.btn-info:hover{
	background: none;
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
	padding: 180px 0% 50px 10%;
	background-image: url("~/assets/Images_Website/Products_LandingPage/Products_LandingPage/Images/backgroundgrad.svg"),
	url("~/assets/Images_Website/B2B_LandingPage/B2B_LandingPage/Images/FyD3OWBuXnY.png");
	background-position: top center, center center;
	background-size: cover;
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
.produkter_title{
	max-width: 880px;
}
.produkter_title strong{
	font-family: Raleway;
	font-style: normal;
	font-weight: bold;
	font-size: 54.5455px;
	line-height: 74px;
	text-transform: uppercase;
	color: #FFFFFF;
}
.produkter_title p{
	font-family: Montserrat;
	font-style: normal;
	font-weight: normal;
	font-size: 17px;
	line-height: 26px;
	display: flex;
	align-items: center;
	color: #FFFFFF;
	margin: 0;
}
.produkter_title small{
	font-family: Montserrat;
	font-style: normal;
	font-weight: normal;
	font-size: 17px;
	line-height: 26px;
	color: #FFFFFF;
}
.after{
	display: none!important;
}
.section1{
	display: flex;
	flex-direction: row;
	position: relative;
	padding: 0% 20px;
	width: 100%;
	background-color: #FAFAFA;
	overflow: hidden;
}
.s1_card{
	position: relative;
	width: 33.3333333333333%;
	height: 350px;
	margin: 1% 0;
	padding: 20px;
	text-align: left;
	background-color: #fff;
	transition: .5s;
}

.section1 a{
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 22px;
	color: #FFFFFF;
}
.s1_card p{
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 22px;
	color: #000000;
	margin-right: 20px;
}
.s1_card strong{
	font-family: Montserrat;
	font-style: normal;
	font-weight: bold;
	font-size: 22px;
	line-height: 32px;
	text-transform: uppercase;
	color: #515151;
	margin-right: 10px;
}
.section1 .btn {
	padding: 0px;
}
.s1_card .btn-info {
	background: none;
	border-radius: 3px;
	position: absolute;
	bottom: -39px;
	right: -39px;
	border: none;
	box-shadow: none;
}
.triangle{
	position: absolute;
	right: 0;
	bottom: 0;
	z-index: 2;
	width: 0;
	height: 0;
	border-bottom: solid 40px #1f97ef;
	border-top: solid 40px transparent;
	border-left: solid 40px transparent;
	border-right: solid 40px #1f97ef;
	color: #FFF;
	cursor: pointer;
	font-size: 40px;
	font-weight: 300;
	line-height:30px;
	transition: .6s;
}
.triangle:hover{
	color: #000;
}
.s1_c_setting{
	display: flex;
}
.m_section4{
	padding: 50px 80px;
	background-image: url("~/assets/Images_Website/B2B_LandingPage/B2B_LandingPage/Images/sdfa1.png");
	background-size: cover;
	background-position: center;
}
.m_s4_card{
	width: 40%;
	height: 50%;
	padding: 20px;
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
	text-align: left;
	align-items: center;
	justify-content: center;
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
	margin-right: 20%;
}
.s3_desc p:first-child{
	margin-bottom: 40px;
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
	width: 100%;
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
.wid_small{
	width: 180px!important;
	text-align: center;
	transition: .5s;
}
.wid_small .s1_c_setting img{
	width: 80px;
	margin-left: calc(50% - 40px);
	display: inline-block;
}
.s1_card.wid_small strong{
	font-size: 16px;
}
.wid_long{
	width: 100%!important;
	transition: .5s;
}
.heignt_long{
	max-height: 2000px;
	transition: .5s;
}
.height_small{
	transition: .5s;
}
.colums{
	display: flex;
	flex-direction: column;
}
@media only screen and (max-width: 1650px) {
	.m_s4_card strong {
		font-size: 25px;
	}
}
@media only screen and (max-width: 1400px) {

	.s1_card p {
		max-height: 69%;
		font-size: 11px;
	}
	.triangle {
	    border-bottom: solid 25px #1f97ef;
	    border-top: solid 25px transparent;
	    border-left: solid 25px transparent;
	    border-right: solid 25px #1f97ef;
	    font-size: 25px;
	    line-height: 25px;
	}
	.s1_card strong {
		font-size: 15px;
	}
	.s1_c_setting {
		align-items: center;
	}
	.s1_c_setting img {
		width: auto;
		height: auto;
		max-height: 30px;
		max-width: 30px;
	}
	.m_s4_card strong {
		font-size: 20px;
    	line-height: 35px;
	}
	.m_s4_card .btn {
		padding: 12px 25px;
	}
}
@media only screen and (min-width: 1100px) {
	#section1_after{
		display: none;
	}
}
@media only screen and (max-width: 1100px) {
	.produkter_header {
		padding: 140px 5% 50px 5%;
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
	.produkter_title p{
		display: block;
		font-weight: 600;
		font-size: 18px;
		line-height: 30px;
		align-items: center;
		text-align: center;
		font-style: italic;
		letter-spacing: 0.75px;
	}
	.produkter_title small{
		text-align: center;
		display: block;
		font-size: 18px;
		font-family: Poppins;
	}
	.produkter_title a>span{
		color: #3BC9DB;
	}
}


@media(min-width: 1100px){
	.s1_card+.s1_card{
		margin-left: 15px;
	}
}

@media only screen and (max-width: 1100px) {
	.section1{
		display: flex;
		flex-direction: column;
		position: relative;
		padding: 10%;
		padding-bottom: 50px;
	}
	.s1_card{
		width: 100%;
		margin: 0%;
	}
	.s1_card p{
		font-size: 13px;
	}
	.s1_c_setting{
		display: flex;
		flex-direction: column;
	}
	.s1_c_setting img{
		width: 50px;
	}
	.s1_card strong{
		font-size: 16px;
	}
}
@media only screen and (max-width: 1100px) {
	.m_section4{
		padding: 5% 0;
	}
	.s1_card{
		height: auto;
		overflow: hidden;
		padding-bottom: 55px;
		margin-top: 20px;
		box-shadow: 5px 5px 10px #aaa;
	}
	#section1_before{
		display: none;
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
		font-size: 15px;
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
	.s3_desc p:first-child{
		margin: 0;
	}
	.s3_desc>p>strong{
		display: block;
		font-weight: 500;
		font-size: 17px;
		line-height: 25px;
		text-align: center;
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
		font-size: 16px;
	    padding-left: 4px;
	    font-family: 'Poppins';
	    padding-left: 0px;
	}
	.s3_line{
		display: block;
	}
	.section3>p{
		display: block;
	}
	.s3_i_email_d {
		width: 97%;
		margin-left: 2.5%;
	}
}


</style>

