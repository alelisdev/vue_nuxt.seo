/* eslint-disable */
<template>
	<div>
		<main-navbar :isBlack='true' :isSelected = 2 />
		<div class="sweLiteTracker">
			<!-- header html code start -->
			<div class="maxitracker_header">
				<div class="maxitracker_path"><router-link to="/">{{$t('home')}}</router-link> > <router-link to="/productLandingPage">{{$t('products')}}</router-link> > <router-link to="/swetrackLitePage">SweTrack Lite</router-link></div>
				<div class="head_img">
					<img src="~/assets/Images_Website/HomePage/Images/Track_liten.png" class="m_s2_c_img"/>
				</div>
				<div class="head_title">
					<b><router-link to="/productLandingPage"><u>{{$t('products')}}</u></router-link><span>></span><router-link to="/swetrackLitePage">SweTrack Lite</router-link></b>
					<p><strong>SweTrack Lite</strong><small>Rek 499:-</small></p>
					<div class="flexbtn">{{$t('bestsellers')}}</div>
					<p>{{$t('mobile_app')}}</p>
					<div class="head_video">
						<p><strong>{{$t('weight')}}:</strong><br>26g</p>
						<p><strong>{{$t('width')}}:</strong><br>2,5 cm</p>
						<p><strong>{{$t('length')}}:</strong><br>7,3 cm</p>
						<!-- <img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Images/video.png" class="video_img1"/> -->
					</div>
					<p>{{$t('bus_own')}}</p>
					<!-- <img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Images/video.png" class="video_img2"/> -->
					<router-link to="/retailerPage" class="hittabtn">{{$t('find_dealer')}}</router-link>
				</div>
			</div>
			<!-- header html code end -->
			<!-- section1 html code start -->
			<div class="m_section1">
				<p><strong>{{$t('feature_lite')}}</strong></p>
				<p>{{$t('gps_connect1')}}<br> {{$t('gps_connect2')}}</p>
				<div class="m_s1_main">
					<div class="m_s1_card">
						<div class="m_s1_c_sub">
							<img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/6913CellPhone1.svg" class="m_s1_c_icon"/>
							<p><strong>{{$t('control_app')}}  </strong></p>
							<p>{{$t('gps_tracker')}}</p>
						</div>
						<div class="m_s1_c_sub">
							<img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/hearts011.svg" class="m_s1_c_icon"/>
							<p><strong>{{$t('energy_saving_feature')}}</strong></p>
							<p>{{$t('energy_saving_feature_desc')}}</p>
						</div>
						<div class="m_s1_c_sub">
							<img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/LiveTracking.svg" class="m_s1_c_icon"/>
							<p><strong>{{$t('tracking')}}</strong></p>
							<p>{{$t('gps_move')}}</p>
						</div>
					</div>
					<div class="m_s1_card">
						<img src="~/assets/Images_Website/HomePage/Images/Track_liten.png" class="m_s1_c_img"/>
					</div>
					<div class="m_s1_card">
						<div class="m_s1_c_sub">
							<img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/Geofence icon1.svg" class="m_s1_c_icon"/>
							<p><strong>{{$t('geost_fencing')}}</strong></p>
							<p>{{$t('geo_fence')}}</p>
						</div>
						<div class="m_s1_c_sub">
							<img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/3686DestinationonMap2.svg" class="m_s1_c_icon m_w_10"/>
							<p class="m_t_5"><strong>{{$t('history')}}</strong></p>
							<p>{{$t('select_see')}}</p>
						</div>
						<div class="m_s1_c_sub">
							<img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/magnetforcephysicsscience1.svg" class="m_s1_c_icon"/>
							<p><strong>{{$t('easyinstall')}}</strong></p>
							<p>{{$t('two_cable')}} </p>
						</div>
					</div>
				</div>
			</div>
			<!-- section1 html code end -->
			<!-- section2 html code start -->
			<div class="m_section2">

				<div class="m_s2_card">
					<img src="~/assets/Images_Website/Product_SweTrackLite/Icons/battery1.svg" class="m_s2_c_icon"/>
					<p><strong>{{$t('power_con')}}</strong></p>
					<p>≈ 40 mA</p>
				</div>
				<div class="m_s2_card">
					<img src="~/assets/Images_Website/Product_SweTrackLite/Icons/battery2.svg" class="m_s2_c_icon"/>
					<p><strong>{{$t('batter_backup')}}</strong></p>
					<p>100 mAh</p>
				</div>
				<div class="m_s2_card">
					<img src="~/assets/Images_Website/Product_SweTrackLite/Icons/battery3.svg" class="m_s2_c_icon"/>
					<p><strong>{{$t('elec_sys')}}</strong></p>
					<p>9 - 36 volt</p>
				</div>

			</div>
			<!-- section2 html code end -->
			<!-- section12 html code start -->
			<div class="m_section12">
				<div class="m_s12_card1">
					<p ><strong>w</strong></p>
				</div>
				<div class="m_s12_card2">
					<VueSlickCarousel v-bind="settings1" ref="carousel1">
						<div>
							<img src="~/assets/Images_Website/Product_SweTrackLite/Icons/battery1.svg" class="m_s2_c_icon"/>
							<p><strong>{{$t('power_con')}}</strong></p>
							<p>≈ 40 mA</p>
						</div>
						<div>
							<img src="~/assets/Images_Website/Product_SweTrackLite/Icons/battery2.svg" class="m_s2_c_icon"/>
							<p><strong>{{$t('batter_backup')}}</strong></p>
							<p>100 mAh</p>
						</div>
						<div>
							<img src="~/assets/Images_Website/Product_SweTrackLite/Icons/battery3.svg" class="m_s2_c_icon"/>
							<p><strong>{{$t('elec_sys')}}</strong></p>
							<p>9 - 36 volt</p>
						</div>
					</VueSlickCarousel>
				</div>
				<div class="m_s12_card3">
					<p><strong>{{$t('features_maxitracker')}}</strong></p>
					<p>{{$t('battery')}} </p>
				</div>
				<div  class="m_s12_card4">
					<img src="~/assets/Images_Website/HomePage/Images/SweTrack_Lite.png" class="m_s12_c_img"/>
				</div>
				<VueSlickCarousel v-bind="settings2" ref="carousel2" style="margin-bottom: 40px;">
					<div class="m_s12_card5">
						<img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/6913CellPhone1.svg" class="m_s1_c_icon"/>
						<p><strong>{{$t('control_app')}}  </strong></p>
						<p>{{$t('gps_tracker')}}</p>
					</div>
					<div class="m_s12_card5">
						<img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/hearts011.svg" class="m_s1_c_icon"/>
						<p><strong>{{$t('energy_saving_feature')}}</strong></p>
						<p>{{$t('energy_saving_feature_desc')}} </p>
					</div>
					<div class="m_s12_card5">
						<img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/LiveTracking.svg" class="m_s1_c_icon"/>
						<p><strong>{{$t('tracking')}}</strong></p>
						<p>{{$t('gps_move')}}</p>
					</div>
					<div class="m_s12_card5">
						<img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/Geofence icon1.svg" class="m_s1_c_icon"/>
						<p><strong>{{$t('geost_fencing')}}</strong></p>
						<p>{{$t('geo_fence')}}</p>
					</div>
					<div class="m_s12_card5">
						<img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/3686DestinationonMap2.svg" class="m_s1_c_icon"/>
						<p><strong>{{$t('history')}}</strong></p>
						<p>{{$t('select_see')}}</p>
					</div>
					<div class="m_s12_card5">
						<img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/magnetforcephysicsscience1.svg" class="m_s1_c_icon"/>
						<p><strong>{{$t('easyinstall')}}</strong></p>
						<p>{{$t('two_cable')}}</p>
					</div>
				</VueSlickCarousel>

			</div>
			<!-- section12 html code end -->
			<!-- section3 html code start -->
			<div class="m_section3">
				<div class="m_s3_des">
					<p><strong>SweTrack Live App</strong></p>
					<p><small>{{$t('live_app_desc')}}</small></p>
					<div class="imgcardbtns">
						<router-link to="/apppage" class="btn btn-info">{{$t('feature')}}</router-link>
						<a href="https://www.youtube.com/channel/UCAsKxqJliZPSB8Pip7dZ8rg" class="btn btn-primary">{{$t('video')}}</a>
					</div>
				</div>
				<div class="m_s3_img">
					<img src="~/assets/Images_Website/SweTrackLite/Images/ny1.png" class="imgm_s3_img"/>
				</div>
			</div>
			<!-- section3 html code end -->
			<!-- section4 html code start -->
			<div class="m_section4">
				<div class="m_s4_card">
					<p>{{$t('keep_track')}}</p>
					<p><strong>{{$t('avalible')}} </strong></p>
					<a  href="https://www.youtube.com/channel/UCAsKxqJliZPSB8Pip7dZ8rg" class="btn btn-info">{{$t('video')}}</a>
				</div>
			</div>
			<!-- section4 html code end -->
			<!-- section5 html code start -->
			<div class="m_section5">
				<div class="m_s5_btns">
					<router-link to="/swetrackLitePage" class="btn btn-info">Lite</router-link>
					<router-link to="/swetrackPlusPage" class="btn btn-primary">Plus</router-link>
					<router-link to="/maxiTrackerPage" class="btn btn-primary">Maxi</router-link>
				</div>
				<table class="customers">
					<tr>
						<th> </th>
						<th>
							<div class="m_s5_t_c_sign"></div>
						</th>
						<th>
							<div class="m_s5_t_c_sign" style="display:none"></div>
						</th>
						<th>
							<div class="m_s5_t_c_sign" style="display:none"></div>
						</th>
					</tr>
					<tr>
						<th> </th>
						<th>
							<div class="m_s5_t_card">
								<div class="m_s5_t_c1_imgs"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Images/table_SweTrackLite.png"  class="m_s5_t_c1_img"/></div>
								<div class="m_s5_t_c_des"><p><strong>SweTrack Lite</strong><br>Rek: 499:-</p></div>
							</div>
						</th>
						<th>
							<div class="m_s5_t_card">
								<div class="m_s5_t_c1_imgs"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Images/table_MaxiTracker.png"  class="m_s5_t_c1_img"/></div>
								<div class="m_s5_t_c_des"><p><strong>MaxiTracker</strong><br>Rek: 990:-</p></div>
							</div>
						</th>
						<th>
							<div class="m_s5_t_card">
								<div class="m_s5_t_c1_imgs"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Images/table_SweTrackPlus.png"  class="m_s5_t_c1_img"/></div>
								<div class="m_s5_t_c_des"><p><strong>SweTrack Plus</strong><br>Rek: 799:-</p></div>
							</div>
						</th>
					</tr>
					<tr>
						<td><strong>{{$t('price')}}</strong></td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td>Dataplan</td>
						<td><div  class="m_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/minus.svg"  class="m_s5_t_icon"/></div>49 :-/mån</td>
						<td><div  class="m_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/minus.svg"  class="m_s5_t_icon"/></div>49 :-/mån</td>
						<td><div  class="m_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/minus.svg"  class="m_s5_t_icon"/></div>49 :-/mån</td>
					</tr>
					<tr>
						<td><strong>{{$t('spec')}}</strong></td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td>{{$t('dimension')}} (H, B, L)</td>
						<td><div  class="m_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/minus.svg"  class="m_s5_t_icon"/></div>1,2 x 2,5 x 7,3</td>
						<td><div  class="m_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/minus.svg"  class="m_s5_t_icon"/></div>2,9 x 5,8 x 8,5</td>
						<td><div  class="m_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/minus.svg"  class="m_s5_t_icon"/></div>1,2 x 2,5 x 7,3</td>
					</tr>
					<tr>
						<td>{{$t('built_battery')}}</td>
						<td><div  class="m_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/minus.svg"  class="m_s5_t_icon"/></div>100 mAh</td>
						<td><div  class="m_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/minus.svg"  class="m_s5_t_icon"/></div>6000 mAh</td>
						<td><div  class="m_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/minus.svg"  class="m_s5_t_icon"/></div>>100 mAh</td>
					</tr>
					<tr>
						<td>{{$t('power_con')}}</td>
						<td><div  class="m_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/minus.svg"  class="m_s5_t_icon"/></div>>40 mA</td>
						<td><div  class="m_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/minus.svg"  class="m_s5_t_icon"/></div>{{$t('not_available')}}</td>
						<td><div  class="m_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/minus.svg"  class="m_s5_t_icon"/></div>40 mA</td>
					</tr>
					<tr>
						<td>{{$t('elec_sys')}}</td>
						<td><div  class="m_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/minus.svg"  class="m_s5_t_icon"/></div>9-36 volt</td>
						<td><div  class="m_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/minus.svg"  class="m_s5_t_icon"/></div>{{$t('no_require')}}</td>
						<td><div  class="m_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/minus.svg"  class="m_s5_t_icon"/></div>7-90 volt </td>
					</tr>
					<tr>
						<td>{{$t('update_inter')}}</td>
						<td><div  class="m_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/minus.svg"  class="m_s5_t_icon"/></div>2 min</td>
						<td><div  class="m_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/minus.svg"  class="m_s5_t_icon"/></div>2 min</td>
						<td><div  class="m_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/minus.svg"  class="m_s5_t_icon"/></div>2 min</td>
					</tr>
					<tr>
						<td>GPS</td>
						<td><div  class="m_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/check.svg"  class="m_s5_t_icon respon"/></div><p>{{$t('yes')}}</p></td>
						<td><div  class="m_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/check.svg"  class="m_s5_t_icon respon"/></div><p>{{$t('yes')}}</p></td>
						<td><div  class="m_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/check.svg"  class="m_s5_t_icon respon"/></div><p>{{$t('yes')}}</p></td>
					</tr>
					<tr>
						<td>{{$t('mo_sen')}}</td>
						<td><div  class="m_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/check.svg"  class="m_s5_t_icon respon"/></div><p>{{$t('yes')}}</p></td>
						<td><div  class="m_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/check.svg"  class="m_s5_t_icon respon"/></div><p>{{$t('yes')}}</p></td>
						<td><div  class="m_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/check.svg"  class="m_s5_t_icon respon"/></div><p>{{$t('yes')}}</p></td>
					</tr>
					<tr>
						<td>Magnet</td>
						<td><div  class="m_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/X.svg"  class="m_s5_t_icon respon"/></div><p>{{$t('no')}}</p></td>
						<td><div  class="m_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/check.svg"  class="m_s5_t_icon respon"/></div><p>{{$t('yes')}}</p></td>
						<td><div  class="m_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/X.svg"  class="m_s5_t_icon respon"/></div><p>{{$t('no')}}</p></td>
					</tr>
					<tr>
						<td>{{$t('waterproof')}}</td>
						<td><div  class="m_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/check.svg"  class="m_s5_t_icon respon"/></div><p>{{$t('yes')}}</p></td>
						<td><div  class="m_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/check.svg"  class="m_s5_t_icon respon"/></div><p>{{$t('yes')}}</p></td>
						<td><div  class="m_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/check.svg"  class="m_s5_t_icon respon"/></div><p>{{$t('yes')}}</p></td>
					</tr>
					<tr>
						<td>{{$t('pac_con')}} </td>
						<td><div  class="m_s5_t_icons minus"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/minus.svg"  class="m_s5_t_icon"/></div>{{$t('tra_tra')}} & {{$t('ins_man')}}</td>
						<td><div  class="m_s5_t_icons minus"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/minus.svg"  class="m_s5_t_icon"/></div>{{$t('tra_tra')}} & {{$t('ins_man')}}</td>
						<td><div  class="m_s5_t_icons minus"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/minus.svg"  class="m_s5_t_icon"/></div>{{$t('tra_tra')}} & {{$t('ins_man')}}</td>
					</tr>
					<tr class="d-none-lt-1100">
						<th style="padding-top:10px ; border-right: none"> </th>
						<th style="padding-top:10px">

						</th>
						<th style="padding-top:10px ">
							<router-link  to="/maxiTrackerPage" class="btn btn-info">{{$t('readmore')}}</router-link>
						</th>
						<th style="padding-top:10px ">
							<router-link  to="/swetrackPlusPage" class="btn btn-info">{{$t('readmore')}}</router-link>
						</th>
					</tr>
				</table>
				<div class="m_s5_text">{{$t('int_sim')}}
					<a  to="#" >{{$t('operating')}} </a></div>
				</div>
				<!-- section5 html code end -->
			</div>
			<main-footer />
		</div>
	</template>

	<script>
		/* eslint-disable */
		import VueSlickCarousel from 'vue-slick-carousel'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import headerConfig from '~/config/head'

export default {
	name: 'Tracklite',

	head() {
   		 return headerConfig.swetracklite;
  	},

	data () {
		return {
			msg: 'Welcome to Your Vue.js App',
			settings1: {
				"slidesToShow": 1,
				"slidesToScroll": 1,
				"infinite": true,
				"dots": false,
				"autoplay":true,
				"autoplaySpeed": 4000,
				"arrows": false
			},
			settings2: {
				"slidesToShow": 1,
				"slidesToScroll": 1,
				"infinite": true,
				"dots": true,
				"autoplay":false,
				"autoplaySpeed": 4000,
				"arrows": false,
				"dotsClass": "slick-dots custom-dot-class"
			}
		}
	},
	components: {
		VueSlickCarousel },
	}
</script>

<style scoped>
.sweLiteTracker{
	margin-top:108px;
}
.maxitracker_header{
	width: 100%;
	padding: 0;
}

.head_img {
	max-width: 60%;
	width: 60%;
	height: 600px;	
	background: radial-gradient(#FFFFFF, #a0a6ae);
	float: left;
}
.head_title{
	width: 40%;
	height: 100%;
	padding-left: 2.5%;
	padding-right: 2.5%;
	float: left;
	margin-top: -1px;
	border-bottom: rgba(0, 0, 0, 0.1) solid 2px;
}
.head_video{
	display: flex;
	flex-direction: row;
	/*	justify-content: space-around;	*/
	column-gap: 5%;
	align-items: center;

}
.video_img1{
	height: 80px;
}
.video_img2{
	display: none;
}
.head_title>p{
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 15px;
	line-height: 130%;
	color: #363636;
	text-align: justify;
	display: flex;
	justify-content: space-between;
}
.head_title>b{
	font-family: Montserrat;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 26px;
	display: flex;
	align-items: center;
	letter-spacing: 0.56px;
	margin-top: 30px;
}
.head_title>b>a{
	color: #1F97EF;
}
.head_title>b span {
	padding-left: 10px;
	padding-right: 10px;
}
.head_title>p>strong{
	font-family: Montserrat;
	font-style: normal;
	font-weight: 600;
	font-size: 36px;
	line-height: 44px;
	letter-spacing: 0.055em;
	text-transform: capitalize;
	color: #132439;
}
.head_title>p>small{
	font-family: Montserrat;
	font-style: normal;
	font-weight: 600;
	font-size: 17px;
	line-height: 21px;
	text-align: center;
	color: #000000;
	padding-top: 18px;
}
.flexbtn{
	width: 152px;
	height: 38px;
	background-color: #1F97EF;
	font-family: Montserrat;
	font-style: normal;
	font-weight: normal;
	font-size: 17px;
	line-height: 21px;
	text-align: center;
	color: #FFFFFF;
	display: flex;
	justify-content: space-around;
	align-items: center;
	cursor: pointer;
	border-radius: 0px;
	transition: .3s;
}
.flexbtn:hover {
	background: #36A5F6!important;
}
.head_video{
	border-bottom: rgba(0, 0, 0, 0.1) solid 1px;
	padding-bottom: 20px;
}
.head_video p{
	font-family: Poppins;
	font-style: normal;
	font-weight: 500;
	font-size: 17px;
	line-height: 158.4%;
	color: #363636;
	text-align:left;
}
.head_video strong{
	font-family: Poppins;
	font-style: normal;
	font-weight: bold;
	font-size: 17px;
	line-height: 158.4%;
	color: #363636;
}

.hittabtn{
	width: 100%;
	height: 38px;
	margin-top: 38px;
	background: #132439;
	font-style: normal;
	font-weight: 600;
	font-size: 17px;
	line-height: 21px;
	text-align: center;
	text-transform: uppercase;
	color: #FFFFFF;
	display: flex;
	justify-content: space-around;
	align-items: center;
	font-family: Montserrat;
	font-style: normal;
	font-weight: 600;
	font-size: 17px;
	line-height: 21px;
	text-align: center;
	text-transform: uppercase;
	color: #FFFFFF;
}
.maxitracker_path{
	display: none;
}
img.m_w_10 {
	width: 10%;
}
p.m_t_5 {
	margin-top: 5px;
}
.m_section1{
	padding: 50px 15% 120px;
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
}
.m_s1_c_img{
	width:80%;
	margin-top: 10%;
	padding-right: 30px;
}

.m_s2_c_img{
	margin-left: auto;
	margin-right: auto;
	margin-top: 100px;
	max-height: 360px;
	max-width: 240px;
	width: 50%;
	height: auto;
}

.m_section1>p{
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 15px;
	line-height: 26px;
	display: flex;
	align-items: center;
	text-align: center;
	letter-spacing: 0.6px;
	color: #373737;
	display: flex;
	align-items: center;
	letter-spacing: 0.6px;
	color: #373737;
}
.m_s1_c_sub p{
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 15px;
	line-height: 26px;
	display: flex;
	align-items: left;
	color: #949494;
	text-align: left;
	margin-bottom: 0px;
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
	display: flex;
	align-items: center;
}
.m_s1_c_sub strong{
	font-family: Poppins;
	font-style: normal;
	font-weight: 500;
	font-size: 22px;
	line-height: 26px;
	display: flex;
	text-align:left;
	color: #333333;
}
.m_s1_c_sub{
	height: 200px;
	display: flex;
	flex-direction: column;
}

.m_section2{
	background: linear-gradient(176.63deg, #1F97EF 26.33%, #132439 229.99%);
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	padding: 25px 10% 8px;
}
.m_s2_card1 p{
	text-align: justify;
}
.m_s2_card{
	width: 30%;
}
.m_s2_card img {
	width: auto;
	height: auto;
	max-width: 45px;
}
.m_section2 p{
	font-family: Poppins;
	font-style: normal;
	font-size: 16px;
	line-height: 16px;
	text-align: center;
	letter-spacing: 0.583333px;
	color: #FFFFFF;
}
.m_section2 strong{
	font-family: Poppins;
	font-style: normal;
	font-weight: 500;
	font-size: 22px;
	line-height: 16px;
	text-align: center;
	letter-spacing: 0.583333px;
	color: #FFFFFF;
}

.m_s12_card1{
	width: 100%;
	opacity: 0.0000001;
}
.m_s12_card2{
	width: 100%;
	padding: 5% 10%;
	background-color: #1F97EF;
}
.m_s12_card3{
	width: 100%;
}
.m_s12_card4{
	width: 100%;
}
.m_s12_card5{
	width: 100%;
	padding: 10%;
	padding-bottom: 30px;
}
.m_s12_c_img{
	width: 45%;
	margin-left: -10%;
}
.m_s12_card2 p{
	font-style: normal;
	font-weight: 300;
	font-size: 14px;
	line-height: 130%;
	text-align: center;
	letter-spacing: 0.511912px;
	color: #FFFFFF;
}
.m_s12_card2 strong{
	font-style: normal;
	font-weight: 500;
	font-size: 17px;
	line-height: 25px;
	text-align: center;
	color: #FFFFFF;

}
.m_s12_card3 p{
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 15px;
	line-height: 26px;
	text-align: center;
	letter-spacing: 0.6px;
	color: #373737;
}
.m_s12_card3 strong{
	font-family: Poppins;
	font-style: normal;
	font-weight: 500;
	font-size: 17px;
	line-height: 25px;
	text-align: center;
	color: #000000;
}
.m_s12_card5 p{
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 15px;
	line-height: 26px;
	text-align: center;
	color: #333333;
}
.m_s12_card5 p+p{
	display: inline-block;
	max-width: 450px;
}
.m_s12_card5 strong{
	font-family: Poppins;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 21px;
	text-align: center;
	text-transform: uppercase;
	color: #1F97EF;
}
.m_section12{
	display: none;
}
a,
a:hover,
a:focus {
	text-decoration: none;
}
.m_section3 {
	padding: 50px 5% 0% 5%;
	background-image: url("~/assets/Images_Website/SweTrackLite/Images/Heroimagebackground11.png");
	background-size: cover, cover;
	background-position: top center, top center;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	margin-bottom: 10px;
}
.m_s3_des {
	width: 100%;
	height: 100%;
	float: left;
	text-align: left;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
}
.imgm_s3_img {
	width: 50%;
	margin-top: 5%;
	margin-bottom: -4px;
}
.m_s3_des strong {
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
.m_s3_des small {
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
.m_s3_des span {
	color: #3bc9db;
}

.imgcardbtns {
	margin-top: 20px;
}
.btn {
	padding: 8px 40px;
	font-size: 10px;
	font-size: 1.5vw;
	border-radius: 0;
}
.btn.btn-info {
	background:#1F97EF;
	box-shadow: 0px 0px 28px 3px rgba(0, 0, 0, 0.1);
	color: #fff;
	cursor: pointer;
}
.imgcardbtns .btn.btn-info{
	background: linear-gradient(176.63deg, #1F97EF 26.33%, #132439 229.99%);
    padding: 16px 39px;
}
.imgcardbtns .btn.btn-primary {
	padding: 16px 53px;
}
.imgcardbtns .btn{
	font-family: Montserrat;
	font-style: normal;
	font-weight: bold;
	font-size: 14px;
	text-align: center;
	letter-spacing: 0.56px;
	text-transform: uppercase;
}
.btn.btn-info:hover {
	background: #36A5F6!important;
}
.btn.btn-primary {
	background: #ffffff;
	box-shadow: 0px 0px 28px 3px rgba(0, 0, 0, 0.1);
	color: #000;
	margin-left: 0.5vw;
}
.btn.btn-primary:hover {
	background: #ddd
}
.btn.btn-outline {
	background-color: blue;
	color: #fff;
	border: solid 1px #fff;
}
.m_s3_img {
	position: relative;
}
.m_section4{
	padding:50px 70px;
	background-image: url("~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Images/handofyoungwomanusingD1.png");
	background-size: 150%;
	background-position: center;
}
.m_s4_card{
	width: 55%;
	max-width: 700px;
    padding: 30px 20px 40px;
	background-color: #fff;
}
.m_s4_card a {
	font-family: Montserrat;
	font-size: 14px;
	font-weight: bold;
	text-transform: uppercase;
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
.m_s4_card p:nth-child(2) {
	padding-bottom: 10px;
}
.m_s4_card strong{
	font-family: Montserrat;
	font-style: normal;
	font-weight: 600;
	font-size: 36px;
	line-height: 44px;
	text-align: center;
	color: #000000;
	text-transform: none;
}
.m_section5{
	padding: 20px 10%;
}
.m_s5_t_icon{
	width: 30%;
	height: 10px;
	margin-right: 10%;
}
.m_s5_t_c_sign{
	width: 100%;
	height: 19px;
	background-color: #1F97EF;
}
.customers {
	font-family: Arial, Helvetica, sans-serif;
	border-collapse: collapse;
	width: 100%;
}

.customers td, .customers th {
	padding: 4px;
}
.customers td+td, .customers th+th {
	border-left: 1px solid #ddd;
}
.customers tr:first-child{
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 17px;
	line-height: 25px;
	text-align: left;
	color: #000000;
}

.customers tr:nth-child(even){
	background-color: #f2f2f2;
}

.customers tr:hover {
	/*	background-color: #ddd;	*/
}
.customers td {
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 18px;
	color: #000000;
}
.customers th {
	padding-bottom: 12px;
	text-align: left;
	color: #000000;
	width: 25%;
	padding: 0;
	background-color: #fff;
}
.customers td{
	padding-left: 5%;
	text-align: left;
}
.section1 {
	padding: 5%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
}
.m_s5_t_card {
	width: 100%;
	height: 15vw;
	margin-top: 20px;
	float: left;
	flex-direction: column;
	display: flex;
	justify-content: space-around;
	align-items: center;
}

.m_s5_t_c1_img {
	width: 35%;
	float: left;
}
.m_s5_t_c1_imgs {
	width: 100%;
	flex-direction: column;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.m_s5_t_c_des {
	width: 100%;
	float: left;
	flex-direction: column;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.m_s5_t_c_des p {
	font-size: 13.6px;
	line-height: 30px;
}
.m_s5_t_c_des strong {
	font-weight: 550;
}
.m_s5_t_c_des span {
	font-weight: 550;
	color: #3bc9db;
}
.btn {
	padding: 8px 40px;
	font-size: 10px;
	font-size: 15px;
}
.m_section5 .btn-info {
	background:#1F97EF;
	box-shadow: 0px 0px 28px 3px rgba(0, 0, 0, 0.1);
	color: #fff!important;
	margin-left: 20%;
	cursor: pointer;
	padding: 5px 20px;
	margin-top: 20px;
	display:inline-block;
	font-family: Montserrat;
	font-style: normal;
	font-weight: bold;
	font-size: 14px;
	letter-spacing: 0.56px;
}
.m_s5_text{
	padding: 20px 0%;
	width: 50%;
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 18px;
	color: #000000;
	text-align: left;
}
.m_s5_t_icons{
	width: 20%;
	float: left;
}
.customers>tr>th strong{
	font-family: Poppins!important;
	font-style: normal!important;
	font-weight: 600!important;
	font-size: 17px!important;
	line-height: 25px!important;
	text-align: center!important;
	color: #000000!important;
}
.customers strong{
	font-style: normal;
	font-weight: 500;
	font-size: 17px;
	line-height: 25px;
	text-align: center;
	color: #1F97EF!important;
}
.m_s5_btns{
	display: none;
}
.m_s5_btns .btn-primary{
	background: none;
	margin-left: 0;
	border-radius: 50px;
	box-shadow: none;
	width: 30%;
}
.m_s5_btns .btn-info{
	background: black;
	margin-left: 0;
	border-radius: 50px;
	width: 30%;
}
.m_s5_btns .btn {
	padding: 15px 5px;
	font-size: 10px;
	font-size: 15px;
}

.customers p{
	margin: 2px;
}
.m_s5_t_icons{
	height: 20px;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
}
.m_s5_text a{
	font-style: italic;
	text-decoration: underline;
	color: #000;

}
@media(min-width: 1101px){
	.maxitracker_header{
		height: 600px;
	}
}
@media only screen and (max-width: 1400px) {

	.m_s4_card strong {
		font-size: 25px
	}
	.m_s1_c_sub strong {
		font-size: 20px;
	}
	.m_s1_c_sub p {
		font-size: 13px;
	}
}
@media only screen and (max-width: 1100px) {

	.head_title{
		padding: 2.5%;
		border-bottom: none;
	}
	.head_img {
		width: 100%;
		max-width: 100%;
		height: auto;
	}
	.head_title{
		padding: 0% 10%;
		width: 100%;
		padding-top: 5%;
	}
	.head_video {
		justify-content: start;
	}
	.head_video p:nth-child(2), p:nth-child(3) {
		padding-left: 10%;
	}
	p:nth-child(3) {
		padding-left: 0px;
	}
	
	.m_s2_c_img{
		margin-bottom: 100px;
	}
	
	.m_s12_card5 p:last-child {
		padding-left: 0px;
	    margin-top: 0px;
	}
	.video_img1{
		display: none;
	}
	.video_img2{
		display: block;
		width: 100%;
		margin-bottom: 20px;
		margin-top: 20px;
	}
	.hittabtn{
		width: 100%;
		margin-top: 20px;
	}

	.head_title>b{
		display: none;
	}
	.maxitracker_path{
		display: block;
		width: 100%;
		height: 40px;
		color: #FFF;
		text-align: center;
		padding: 10px 0;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		background-color: #1F97EF;
	}
	.maxitracker_path>a>span{
		color: #fff;
	}
	.head_title>p>strong{
		font-family: Montserrat;
		font-style: normal;
		font-weight: 600;
		font-size: 25px;
		line-height: 30px;
		text-align: center;
		color: #000000;
	}
	.head_title>p>small{
		font-family: Poppins;
		font-style: normal;
		font-weight: normal;
		font-size: 15px;
		line-height: 22px;
		text-align: center;
		color: #000000;
		padding-top: 10px;
	}
	.flexbtn{
		font-family: Montserrat;
		font-style: normal;
		font-weight: normal;
		font-size: 12.3026px;
		line-height: 15px;
		text-align: center;
		color: #FFFFFF;
	}
	.head_title>p {
		font-family: Poppins;
		font-style: normal;
		font-weight: normal;
		font-size: 12px;
		line-height: 158.4%;
		color: #363636;
		text-align: left;
	}
	.head_title p:nth-child(2) {
		/*padding-top: 20px;*/
	}
	.hittabtn {
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 11.9992px;
		line-height: 15px;
		text-align: center;
		text-transform: uppercase;
		color: #FFFFFF;
	}
	.sweLiteTracker {
		margin-top: 65px;
	}
	td div.minus {
		display: none;
	}
}


@media(min-width: 1100px){
	.m_s1_c_icon{
		width: 8%;
	}
}

@media only screen and (max-width: 1100px) {
	.m_section12{
		display: block;
	}
}



@media only screen and (max-width: 1100px) {
	.m_section3 {
		padding: 10% 5% 0% 5%;
	}
	.m_s3_des strong {
		text-transform: none;
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 17px;
		line-height: 8px;
	}
	.m_s3_des small {
		display: none;
	}
	.m_s3_des {
		width: 100%;
		height: 100%;
		float: left;
		text-align: center;
	}
	.m_s3_des p:first-child {
		margin-bottom: 0px;
	}
	.imgm_s3_img {
		width: 100%;
		margin-top: 5vw;
	}
	.imgcardbtns .btn {
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 10.64px;
	}
	.imgcardbtns {
		margin-top: 0vw;
	}
	.imgcardbtns .btn.btn-primary{
		padding:8px 25px;
	}
	.imgcardbtns .btn.btn-info{
		padding:8px 15px;
	}
}


@media only screen and (max-width: 1100px) {
	.m_section4{
		padding: 5% 10%;
	}
	.m_s4_card{
		width: 100%;
		max-width: none;
		padding: 5%;
		background: none;
	}
	.m_s4_card p{
		font-family: Poppins;
		font-style: normal;
		font-weight: 500;
		font-size: 19px;
		line-height: 28px;
		text-align: center;
		color: #FFFFFF;
	}
	.m_s4_card strong{
		font-family: Poppins;
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
		font-weight: strong;
		font-size: 12px;
		line-height: 26px;
		align-items: center;
		text-align: center;
		letter-spacing: 0.56px;
		text-transform: uppercase;
	    font-weight: bold;
    	font-family: 'Montserrat';
	}
	.m_section4 .btn-info {
		background: #1F97EF;
		box-shadow: 0px 0px 28px 3px rgba(0, 0, 0, 0.1);
		color: #fff;
	}
}


@media only screen and (max-width: 1100px) {
	.section1 {
		flex-direction: column;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.m_s5_t_card {
		width: 100%;
		height: 35vw;
		float: none;
	}
	.m_s5_t_c1_img {
		width: 20%;
		float: left;
	}
	.m_s5_t_c_des {
		width: 50%;
		float: left;
		text-align: left;
	}
	.m_s5_t_c_des p {
		font-size: 3.5vw;
	}
	.m_s5_t_c_des strong {
		font-weight: 550;
	}
	.m_s5_t_c_des span {
		display: none;
	}
	.customers td:nth-child(2){display: none;}
	.customers th:nth-child(2){display: none;}
	.customers td:nth-child(3){display: none;}
	.customers th:nth-child(3){display: none;}
	.m_s5_text{
		padding: 5%;
		width: 100%;
	}
	.customers tr:first-child{
		display: none;
	}
	.m_s5_t_card {
		display: none;
	}
	.m_s5_text{
		/*font-style: italic;*/
		font-family: Poppins;
		font-style: italic;
		font-weight: normal;
		font-size: 12px;
		line-height: 18px;
		color: #000000;
	}
	.m_s5_t_icon{
		display: none;
	}
	.m_s5_t_icon.respon{
		margin-left: 60%;
		display: block;
		width: 20px;
	}
	.customers p{
		display: none;
	}
	.customers td{
		width: 50%!important;
		border-right: none;
	}
	.m_s5_btns{
		display: block;
		width: 96%;
		height: 50px;
		border-radius: 50px;
		padding: 2%;
		background-color: #f2f2f2;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		margin-bottom: 15px;
	}
	.m_s5_t_icons {
		display: none;
	}
	table.customers .m_s5_t_icons {
		display: flex;
	}
	.m_section1{
		display: none;
	}
	.m_section2{
		display: none;
	}
	.customers th {
		width: 50%!important;
	}
	table .btn-info{
		display: none;
	}
	.m_s5_t_icon{
		width: 50%;
		margin-right: -150%;
		margin-top: 0;
	}
	.customers td{
		padding-left: 2%;
		font-family: Poppins;
		font-style: normal;
		font-weight: normal;
		font-size: 12px;
		line-height: 22px;
		color: #000000;
	}
	.customers td+td, .customers th+th {
		border-left: unset;
	}
	.maxitracker_path>a:nth-child(3){
		color: black;
	}
	.m_section5{
		padding: 30px 10px;
	}

	.m_s5_btns .btn{
		padding: 5px;
		margin-top: 0;
	}

	.m_s12_card5 p[data-v-20ac9ad2] {
		font-family: Poppins;
		font-style: normal;
		font-weight: normal;
		font-size: 15px;
		line-height: 26px;
		text-align: center;
		color: #333333;
	}
	div.minus {
		display: none !important;
	}
	
}


</style>
