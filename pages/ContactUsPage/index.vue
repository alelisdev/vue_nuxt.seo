/* eslint-disable */
<template>
	<div class="contacPage">
		<main-navbar :isSelected = 5 />
		<!-- header html code start -->
		<div class="produkter_header">
			<div class="produkter_title">
				<p><small>{{$t('whereweare')}}</small></p>
				<p><strong>{{$t('contact')}}</strong></p>
				<p class="breadcrumb_links"><router-link to="/">{{$t('home')}}</router-link> > <router-link to="/contactUsPage">{{$t('contact')}}</router-link></p>
				<p id="header_show">{{$t('contactheader')}}</p>
			</div>
		</div>
		<!-- header html code end -->
		<!-- section3 html code start -->
		<div class="section3">
			<div class="s3_desc">
				<p class="mgb-20"><strong>{{$t('contact')}}</strong></p>
				<p class="mgb-20"><small>{{$t('contact_desc')}} </small></p>
				<div class="s3_line"></div>
				<p><span>{{$t('tech_support')}}</span></p>
				<p class="common">{{$t('tech_need')}}</p>
				<p class="mgb-20"><a @click="send_mail('support@swetrack.com')">support@swetrack.com</a>{{$t('tech_fill')}} </p>
				<p><span>{{$t('finance')}} </span></p>
				<p class="common">{{$t('for_question')}}</p>
				<p class="mgb-20"><a @click="send_mail('ekonomi@swetrack.com')">ekonomi@swetrack.com</a></p>
				<p><span>{{$t('oem')}}</span></p>
				<p class="common">{{$t('interest_contact')}}</p>
				<p class="mgb-20"><a @click="send_mail('info@swetrack.com')">info@swetrack.com</a></p>
				<div class="s3_adress">
					<p>{{$t('address')}}: </p>
					<a>{{$t('address_desc')}} </a>
				</div>
			</div>
			<div class="s3_conter">
				<p><strong>{{$t('office')}}</strong></p>
				<p>{{$t('postal_address')}}:</p>
				<p>SweTrack Electronics AB</p>
				<p>Norrbackagatan 60, </p>
				<p>113 34 Stockholm</p>
			</div>
			<form class="s3_input" @submit="send_mail">
				<div class="s3_name_in">
					<div class="s3_i_name_d">
						<p>{{$t('name')}}</p>
						<input class="s3_i_name" :placeholder="$t('name')" v-model="name">
					</div>
					<div class="s3_i_telephon_d">
						<p>{{$t('phone')}}</p>
						<input class="s3_i_telephon" :placeholder="$t('phone')" v-model="phone">
					</div>
				</div>
				<div class="s3_i_email_d">
					<p>Email</p>
					<input class="s3_i_email" placeholder="Email" v-model="email">
				</div>
				<p>{{$t('short_message')}}</p>
				<textarea rows="6" cols="100%" :placeholder="$t('message')" v-model="message"></textarea>
				<button type="submit" class="btn btn-info">{{$t('send')}}</button>
			</form>
		</div>
		<!-- section3 html code end -->
		<main-footer />
	</div>
</template>

<script>
	/* eslint-disable */
  import emailjs from 'emailjs-com'
  import { mailConfig } from '../../config';

	export default {
		name: 'ContactPage',
		data () {
			return {
        name: '',
        email: '',
        phone: '',
        message: ''
			}
		},
		methods:{
			send_mail(e){
        try {
          e.preventDefault()
          if (this.name !== '' && this.email !== '' && this.phone !== '' && this.message !== '') {
            emailjs.sendForm(mailConfig.service_id, mailConfig.template_id, e.target, mailConfig.user_id, {
              name: this.name,
              email: this.email,
              phone: this.phone,
              message: this.message
            })
          } else {
            alert('please fill all fields')
          }
        } catch(error) {
            console.log({error})
        }
				// window.open('mailto:' + email)
			}
		}
	}
</script>

<style scoped>
a,
a:hover,
a:focus {
	text-decoration: none;
	cursor: pointer;
}
.btn {
	padding: 12px 40px;
	font-size: 10px;
	font-size: 1.5vw;
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
	padding: 150px 0% 80px 10%;
	background-image: url("~/assets/Images_Website/Products_LandingPage/Products_LandingPage/Images/backgroundgrad.svg"),
	url("~/assets/Images_Website/ContactUs/ContactUs/Images/Skärmavbild20210108kl.10.391.png");
	background-size: cover, cover;
	background-position: top center, top center;
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
	line-height: 70px;
	display: flex;
	align-items: center;
	color: #FFFFFF;
	margin: 0;
}
.produkter_title small{
	font-family: Poppins;
	font-style: normal;
	font-weight: 600;
	font-size: 17px;
	line-height: 25px;
	text-transform: uppercase;
	color: #3BC9DB;
}
#header_show{
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 24px;
	display: flex;
	align-items: center;
	text-align: center;
	letter-spacing: 0.75px;
	color: #FFFFFF;
	display: none;
}

@media only screen and (max-width: 1100px) {
	.produkter_header {
		padding: 170px 5% 100px 5%;
	}
	#header_show{
		display: block;
	}
	.produkter_title>p>small{
		display: none;
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
		line-height: 1.2;
		text-transform: unset;
	}
	.produkter_title p{
		font-weight: 600;
		font-size: 18px;
		line-height: 74px;
		display: block;
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
}

.section3{
	display: flex;
	padding: 5% 10%;
}
.s3_desc{
	display: flex;
	padding: 0 2.5%;
	flex-direction: column;
	width: 50%;
	text-align: left;
}
.s3_desc p.common {
	margin-top: 15px;
}
.s3_desc strong{
	font-family: Montserrat;
	font-style: normal;
	font-weight: 600;
	font-size: 50px;
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
	color: #000000;
	margin: 0;
}
.s3_desc p.mgb-20{
	margin-bottom: 30px;
}
.s3_desc p>small{
	font-style: normal;
	font-weight: normal;
	font-size: 15px;
	line-height: 20px;
	letter-spacing: 0.25px;
	color: #595959;
	margin: 4px 0px;
}
.s3_desc span{
	font-family: Montserrat;
	font-style: normal;
	font-weight: 600;
	font-size: 20px;
	line-height: 26px;
	letter-spacing: 0.25px;
	color: #000000;
	margin-top: 90px;
	/*	border-bottom: 1px solid #1F97EF;	*/
	padding-bottom: 5px;
}
.s3_desc a{
	font-style: normal;
	font-weight: 500;
	font-size: 17px;
	line-height: 25px;
	color: #1F97EF;
}
.s3_input{
	position: relative;
	display: flex;
	width: 50%;
	flex-direction: column;
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 16px;
	letter-spacing: 0.583333px;
	color: #595959;
	padding: 20px 0;
}
.s3_name_in{
	display: flex;
	width: 100%;
}
.s3_name_in div:first-child {
	margin-right: 10px;
}
.s3_input input{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
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
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 16px;
}
.s3_i_name_d, .s3_i_telephon_d{
	width: 50%;
	text-align: left;
}
.s3_i_name, .s3_i_telephon{
	width: 100%;
}
.s3_i_email_d{
	width: 100%;
	text-align: left;
	margin-top: 3%;
	margin-bottom: 3%;
}
.s3_i_email{
	width: 100%;
}
.s3_input .btn-info{
	bottom: 0%;
    padding: 20px 0%;
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
.s3_input .btn-info:hover{
	background: #36A5F6;
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
textarea:focus{
	border-color: #3BC9DB;
}
.s3_line{
	display: none;
	height: 0;
	width: 100%;
	border: gray solid 1px;
	margin-bottom: 30px;
}
.s3_adress{
	width: 100%;
	text-align: left;
}
.s3_conter{
	display: none;
}
@media only screen and (max-width: 1100px) {
	.section3{
		flex-direction: column;
	}
	textarea{
		border:none;
		border-bottom: solid 1px #595959;
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
	.s3_adress{
		display: none;
	}
	.s3_conter{
		display: block;
		text-align: left;
		padding-left: 15px;
		background: #EEEEEE;
	}
	.s3_conter>p{
		font-family: Poppins;
		font-style: normal;
		font-size: 15px;
		line-height: 26px;
		color: #333333;
	}
	.s3_conter>p:nth-child(2){
		font-size: 16px;
		color: #000;
		font-weight: 600;
		margin-bottom: 5px;
	}
	.s3_conter>p:nth-child(3), p:nth-child(4) {
		margin: 0px;
	}
	.s3_conter>p:last-child {
		margin-top: 0px;
	}
	.s3_desc span{
		border-bottom: none;
	}
	.s3_conter>p>strong{
		font-family: Poppins;
		font-style: normal;
		font-weight: 500;
		font-size: 20px;
		line-height: 30px;
		color: #000000;
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
		border: 1px solid #DCDCDC;
	}
	.s3_desc strong{
		font-size: 28px;
		line-height: 42px;
		font-family: Poppins;
	}
	.s3_i_email_d {
		width: 97%;
		margin-left: 2.5%;
	}
	.s3_input>p {
		margin-left: 2.5%;
	}
	.s3_desc p.mgb-20 {
		margin-bottom: 10px;
	}
}

@media only screen and (max-width: 1400px) {

	.s3_i_name_d {
		margin-right: 0px;
	}
}
</style>
