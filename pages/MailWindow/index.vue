<template>
  <div class="mail-wraper">
    <div>
      <label>{{$t('to')}}: &nbsp;</label>
      <input type="text" id="to-whom" value="info@swetrack.com">
    </div>
    <div>
      <textarea></textarea>
    </div>
    <button class="btn btn-info" style="margin-top: 30px;">{{$t('send')}}</button>
  </div>
</template>
<script>
	import VueSlickCarousel from 'vue-slick-carousel'
	import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  import headerConfig from '~/config/head'


export default {
	name: 'MailWindowPage',

	head() {
   		 return headerConfig.mailwindow;
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
<style>
.mail-wraper{
  padding: 30px;
  text-align: left;
}
.mail-wraper textarea{
  width: 560px;
  height: 400px;
}
#to-whom{
  margin-bottom: 20px;
  border: none;
  outline: none;
  border-bottom: solid 1px #BBB;
  font-size: 20px;
  color: #666;
}
.btn {
  padding: 5px 15px;
  font-size: 20px;
  cursor: pointer;
}
.btn.btn-info {
  background: #3c17a1;
  box-shadow: 0px 0px 28px 3px rgba(0, 0, 0, 0.1);
  color: #fff;
}
</style>
