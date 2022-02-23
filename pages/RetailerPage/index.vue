/* eslint-disable */
<template>
	<div class="retailer">
		<main-navbar  :isSelected = 7 />
		<!-- header html code start -->
		<div class="retailer_header">
			<div class="retailer_title">
				<p><span>{{$t('near_dealer')}}</span></p>
				<p><strong>{{$t('reseller')}}</strong></p>
				<p class="breadcrumb_links"><router-link to="/">{{$t('home')}}</router-link> > <router-link to="/retailerPage">{{$t('reseller')}}</router-link></p>
				<p class="d-none-lt-1100"><small>{{$t('retailer_desc1')}}<br>{{$t('retailer_desc2')}}</small></p>
				<p class="d-none-gt-1100"><small>{{$t('europe1')}}<br>{{$t('europe2')}}</small></p>
			</div>
		</div>
		<!-- header html code end -->
		<!-- body html code start -->
		<div class="retailer_body">
			<div>
				<div class="search-alpha-wrap" :class="{ 'search-clicked': search_clicked }">
					<div class="search-alpha">
						<span @click="search_alpha('A')" :class="{ 'color-blue': isSelected == 'A'?true:false }">A</span>
						<span @click="search_alpha('B')" :class="{ 'color-blue': isSelected == 'B'?true:false }">B</span>
						<span @click="search_alpha('C')" :class="{ 'color-blue': isSelected == 'C'?true:false }">C</span>
						<span @click="search_alpha('D')" :class="{ 'color-blue': isSelected == 'D'?true:false }">D</span>
						<span @click="search_alpha('E')" :class="{ 'color-blue': isSelected == 'E'?true:false }">E</span>
						<span @click="search_alpha('F')" :class="{ 'color-blue': isSelected == 'F'?true:false }">F</span>
						<span @click="search_alpha('G')" :class="{ 'color-blue': isSelected == 'G'?true:false }">G</span>
						<span @click="search_alpha('H')" :class="{ 'color-blue': isSelected == 'H'?true:false }">H</span>
						<span @click="search_alpha('I')" :class="{ 'color-blue': isSelected == 'I'?true:false }">I</span>
						<span @click="search_alpha('J')" :class="{ 'color-blue': isSelected == 'J'?true:false }">J</span>
						<span @click="search_alpha('K')" :class="{ 'color-blue': isSelected == 'K'?true:false }">K</span>
						<span @click="search_alpha('L')" :class="{ 'color-blue': isSelected == 'L'?true:false }">L</span>
						<span @click="search_alpha('M')" :class="{ 'color-blue': isSelected == 'M'?true:false }">M</span>
						<span @click="search_alpha('N')" :class="{ 'color-blue': isSelected == 'N'?true:false }">N</span>
						<span @click="search_alpha('O')" :class="{ 'color-blue': isSelected == 'O'?true:false }">O</span>
						<span @click="search_alpha('P')" :class="{ 'color-blue': isSelected == 'P'?true:false }">P</span>
						<span @click="search_alpha('Q')" :class="{ 'color-blue': isSelected == 'Q'?true:false }">Q</span>
						<span @click="search_alpha('R')" :class="{ 'color-blue': isSelected == 'R'?true:false }">R</span>
						<span @click="search_alpha('S')" :class="{ 'color-blue': isSelected == 'S'?true:false }">S</span>
						<span @click="search_alpha('T')" :class="{ 'color-blue': isSelected == 'T'?true:false }">T</span>
						<span @click="search_alpha('U')" :class="{ 'color-blue': isSelected == 'U'?true:false }">U</span>
						<span @click="search_alpha('V')" :class="{ 'color-blue': isSelected == 'V'?true:false }">V</span>
						<span @click="search_alpha('W')" :class="{ 'color-blue': isSelected == 'W'?true:false }">W</span>
						<span @click="search_alpha('X')" :class="{ 'color-blue': isSelected == 'X'?true:false }">X</span>
						<span @click="search_alpha('Y')" :class="{ 'color-blue': isSelected == 'Y'?true:false }">Y</span>
						<span @click="search_alpha('Z')" :class="{ 'color-blue': isSelected == 'Z'?true:false }">Z</span>
						<span @click="search_alpha('Å')" :class="{ 'color-blue': isSelected == 'Å'?true:false }">Å</span>
						<span @click="search_alpha('Ä')" :class="{ 'color-blue': isSelected == 'Ä'?true:false }">Ä</span>
						<span @click="search_alpha('Ö')" :class="{ 'color-blue': isSelected == 'Ö'?true:false }">Ö</span>
					</div>
					<img src="~/assets/Images_Website/Retailer/Images/ic_blue_search.svg" class="search_ic" @click="search_clicked = true;">
					<input type="text" id="search-input" v-model="search_input" v-on:keyup="search_change">
					<span @click="search_clicked = false; search_input=''; retailers = retailerData" class="search-hide">&times;</span>
				</div>
				<div class="row">
					<div class="col-8 bdr-blue">
						<span @click="search_country('Sverige')" :class="{ 'color-blue': isSelected == 'Sverige'?true:false }">{{$t('sweden')}}</span>
						<span @click="search_country('Norge')" :class="{ 'color-blue': isSelected == 'Norge'?true:false }">{{$t('norway')}}</span>
						<span @click="search_country('Danmark')" :class="{ 'color-blue': isSelected == 'Danmark'?true:false }">{{$t('demark')}}</span>
						<span @click="search_country('Finland')" :class="{ 'color-blue': isSelected == 'Finland'?true:false }">Finland</span>
						<span @click="search_country('Storbritannien')" :class="{ 'color-blue': isSelected == 'Storbritannien'?true:false }">{{$t('uk')}}</span>
						<span @click="search_country('Övriga världen')" :class="{ 'color-blue': isSelected == 'Övriga världen'?true:false }">{{$t('rest_world')}}</span>
					</div>
					<div class="col-4">
						<span @click="search_pro('swetracklite')" :class="{ 'color-blue': isSelected == 'swetracklite'?true:false }">SweTrack Lite</span>
						<span @click="search_pro('swetrackplus')" :class="{ 'color-blue': isSelected == 'swetrackplus'?true:false }">SweTrack Plus</span>
						<span @click="search_pro('maxitracker')" :class="{ 'color-blue': isSelected == 'maxitracker'?true:false }">MaxiTracker</span>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-4 d-flex" v-for="(retailer, index) in retailers" :key="retailer.companyName" :class="{ 'bdr-grey': index%3==2?false:true }">
				<div><img :src="require('~/assets/Images_Website/Retailer/Images/Retailer logotypes/'+retailer.logo)"></div>	
					<div>
						<p v-if="index==0?(true):(retailer.companyName[0]==retailers[index-1].companyName[0]?false:true)" class="pro-alpha">{{ retailer.companyName[0] }}</p>
						<p class="pro-name">{{ retailer.companyName }}</p>
						<p class="pro-country">{{ retailer.country }}</p>
						<div class="pro-url">
							<a :href="retailer.companyUrl">{{$t('goto')}}&#8594;</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- body html code end -->
		<main-footer />
	</div>
</template>
<script>
	import retailerDatas from '~/assets/json/retailer.json'
	import headerConfig from '~/config/head'

	export default {
		name: 'RetailerPage',

		head() {
   		 return headerConfig.retailer;
  		},

		data () {
			return {
				retailers: [],
				isSelected: '',
				search_clicked: false,
				search_input: '',
				retailerData: retailerDatas
			}
		},
		mounted(){
			this.init_retailer()
		},
		methods: {
			init_retailer(){
				for(var i = 0; i < this.retailerData.length ; i++){
					for(var j = i + 1; j < this.retailerData.length ; j++){
						if(this.retailerData[i].companyName.toLowerCase() > this.retailerData[j].companyName.toLowerCase()){
							var temp = this.retailerData[i].companyName
							this.retailerData[i].companyName = this.retailerData[j].companyName
							this.retailerData[j].companyName = temp
						}
					}
				}
				this.retailers = this.retailerData
			},
			search_alpha(alpha){
				this.retailers = []
				if(alpha == this.isSelected){
					this.retailers = this.retailerData
					this.isSelected = ''
				}
				else {this.isSelected = alpha
					for(var i=0;i<this.retailerData.length;i++){
						var first_letter = this.retailerData[i].companyName[0]
						if(first_letter == alpha){
							this.retailers.push(this.retailerData[i])
						}
					}
				}
			},
			search_country(country){
				this.retailers = []
				if(this.isSelected == country){
					this.isSelected = ''
					this.retailers = this.retailerData
				}else{
					this.isSelected = country
					for(var i=0;i<this.retailerData.length;i++){
						var country_name = this.retailerData[i].country
						if(country_name.indexOf(country) > -1){
							this.retailers.push(this.retailerData[i])
						}
					}
				}
			},
			search_pro(product){
				this.retailers = []
				if(this.isSelected == product){
					this.isSelected = ''
					this.retailers = this.retailerData
				}else{
					this.isSelected = product
					for(var i=0;i<this.retailerData.length;i++){
						var pro_name = this.retailerData[i].products
						for(var j=0;j<pro_name.length;j++){
							var low_pro = pro_name[j].toLowerCase()
							if(low_pro.indexOf(product) > -1){
								this.retailers.push(this.retailerData[i])
								break
							}
						}
					}
				}
			},
			search_change(){
				this.retailers = []
				this.isSelected = ''
				for(var i=0;i<this.retailerData.length;i++){
					var companyName = this.retailerData[i].companyName.toLowerCase()
					if(companyName.indexOf(this.search_input) > -1){
						this.retailers.push(this.retailerData[i])
					}
				}
			}
		}
	}
</script>

<style scoped>
.retailer_header {
	padding: 160px 0% 70px 10%;
	background-image: url("~/assets/Images_Website/CookiePage/CookiePage/Images/backgroundgrad.svg"),
	url("~/assets/Images_Website/Retailer/Images/FyD3OWBuXnY.png");
	background-size: cover, cover;
	background-position: top center, center center;
}
.retailer_title>p{
	font-family: Montserrat;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 1.3;
	color: #FFFFFF;
	margin: 0;
}
.retailer_title>p>span{
	font-family: Poppins;
	font-style: normal;
	font-weight: 600;
	font-size: 17px;
	line-height: 25px;
	text-transform: uppercase;
	color: #3BC9DB;
}
.retailer_title strong{
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
.retailer_title i{
	letter-spacing: 0.75px;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 25px;
	align-items: center;
	color: #fff;
	display: flex;
}
.retailer_title p{
	text-align: left;
}
.retailer_title small{
	font-family: Montserrat;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 22px;
	display: flex;
	align-items: center;
	color: #FFFFFF;
	margin-top: 20px;
}
.retailer_body{
	padding: 50px 100px;
}
.retailer_body .row .col-4.d-flex>div{
	flex: 1;
}
.retailer_body .row .col-4{
	align-items: center;
}
.retailer_body .row .col-4 img{
	width: auto;
	height: auto;
	max-width: 45%;
	max-height: 45%;
}
.retailer_body .row .col-4 div{
	text-align: left;
}
.retailer_body .row .col-4 p{
	text-align: left;
}
.retailer_body .row .col-4, .retailer_body .row .col-8{
	display: flex;
}
.retailer_body .row .col-4>span, .retailer_body .row .col-8>span{
	padding: 0px;
	margin: 20px 0 10px;
	flex: 1;
	cursor: pointer;
	font-family: Poppins;
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	color: #636363;
}
.retailer_body .row .col-4>span+span, .retailer_body .row .col-8>span+span{
	border-left: solid 1px #ccc;
}
.retailer_body>.row .col-4{
	padding: 10px;
	margin: 30px 0;
}
.bdr-grey{
	border-right: solid 1px #CCC;
}
.retailer_body>.row .col-4>div{
	text-align: center;
}
.pro-name{
	font-family: Poppins;
	font-style: normal;
	font-weight: 600;
	font-size: 20px;
	line-height: 36px;
	color: #000000;
	margin-bottom: 0;
	margin-top: 0px;
}
.pro-country{
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 18px;
	color: #000000;
	margin-bottom: 20px;
	margin-top: 0;
}
.retailer_body .row .col-4 a{
	font-family: Poppins;
	font-style: normal;
	font-weight: 500;
	font-size: 17px;
	line-height: 25px;
	color: #1F97EF;
}
.bdr-blue{
	border-right: solid 1px #1F97EF;
}
.search-alpha-wrap{
	border-bottom: solid 1px #1F97EF;
	position: relative;
	padding: 10px 40px;
	min-height: 47px;
}
.search-hide{
	position: absolute;
	top: 0;
	right: 10px;
	color: #1F97EF;
	font-size: 30px;
	cursor: pointer;
	opacity: 0;
	transition: .4s;
}
.search-alpha{
	display: flex;
}
.search-alpha>span{
	flex: 1;
	cursor: pointer;
	font-family: Poppins;
	font-style: normal;
	font-weight: 600;
	font-size: 20px;
}
.search-alpha>span+span{
	border-left: solid 1px #999;
}
.search_ic{
	position: absolute;
	right: 0;
	bottom: 10px;
	cursor: pointer;
	z-index: 10;
	transition: .4s;
}
.color-blue{
	color: #1F97EF !important;
}
#search-input{
	border: none;
	outline: none;
	font-size: 20px;
	line-height: 24px;
	padding: 1px;
	width: 100%;
	margin-left: 5px;
	display: none;
}
.search-clicked .search-alpha{
	display: none;
}
.search-clicked .search_ic{
	right: calc( 100% - 30px );
}
.search-clicked #search-input{
	display: block;
}
.search-clicked .search-hide{
	opacity: 1;
}
.pro-alpha{
	display: none;
}
@media only screen and (max-width: 1100px) {
	.retailer_header {
		padding: 160px 10% 70px 10%;
	}
	.retailer_title{
		text-align: center;
		align-items: center;
	}
	.retailer_title>p>span{
		display: none;
	}
	.retailer_title p{
		text-align: center;
		color: #FFF;
		font-style: italic;
	}
	.retailer_title strong{
		display: block;
		font-style: normal;
		font-weight: bold;
		font-size: 36px;
		line-height: 56px;
		text-align: center;
		text-transform: none;
	}
	.retailer_title i{
		display: block;
		font-weight: 600;
		font-size: 18px;
		line-height: 74px;
		align-items: center;
		text-align: center;
		font-style: i;
		letter-spacing: 0.75px;
	}
	.retailer_title small{
		font-family: Poppins;
		display: block;
		font-style: normal;
		font-weight: normal;
		font-size: 18px;
		line-height: 24px;
		text-align: center;
		letter-spacing: 0.75px;
		color: #fff;
	}
	.retailer_title i>span{
		color: #3BC9DB;
	}
	.retailer_body{
		padding: 50px 20px;
	}
	.retailer_body .row .col-4>div:first-child{
		display: none;
	}
	.bdr-grey{
		border: none;
	}
	.pro-country, .pro-url{
		display: none;
	}
	.retailer_body>.row .col-4{
		margin: 0;
		padding: 5px 0;
	}
	.pro-name{
		font-size: 12px;
		line-height: 26px;
		font-weight: 400;
	}
	.pro-alpha{
		display: block;
		margin: 30px 0;
		font-size: 13px;
		line-height: 27px;
		font-weight: 600;
	}
	.search_ic{
		display: none;
	}
	.search-hide{
		display: none;
	}
	.search-alpha{
		display: flex;
		text-align: left;
		flex-wrap: wrap;
	}
	.search-alpha>span{
		padding: 0 10px;
		font-size: 15px;
		line-height:22px;
		border: none !important;
		flex: none;
	}
	.search-alpha-wrap{
		border: none;
		padding: 10px 0;
	}
	.bdr-blue{
		border: none;
	}
	.retailer_body .row .col-4, .retailer_body .row .col-8{
	  flex-wrap: wrap;
	}
	.retailer_body .row .col-4>span, .retailer_body .row .col-8>span{
		padding: 0px 10px;
		flex: none;
		font-size: 15px;
		line-height: 1;
		color: #000;
		border-left: none !important;
		border-right: solid 1px #000;
	}
	.retailer_body .row .col-4>span:last-child, .retailer_body .row .col-8>span:last-child{
		border-right: none;
	}
	.retailer_body>div>.row>.col-4{
		display: none;
	}
	.retailer_body>.row{
		margin: 0 10px;
	}
}

@media only screen and (max-width: 1400px) {

	.pro-name {
		font-size: 15px;
	}
	.retailer_body .row .col-4 a {
		font-size: 15px;
	}
	.retailer_body .row .col-4>span, .retailer_body .row .col-8>span {
		font-size: 13px;
	}
}
</style>
