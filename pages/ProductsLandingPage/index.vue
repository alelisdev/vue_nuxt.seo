/* eslint-disable */
<template>
  <div class="hello">
    <main-navbar :isSelected = 2 />
    <!-- header html code start -->
      <div class="produkter_header">
        <div class="produkter_title">
            <p><span>{{$t('gain_full')}}</span></p>
            <p><strong>{{$t('products')}}</strong></p>
            <p class="breadcrumb_links"><router-link to="/">{{$t('home')}}</router-link>><router-link to="/productsLandingPage">{{$t('products')}}</router-link></p>
            <p><small>{{$t('pro_header1')}}<br> {{$t('pro_header2')}}</small></p>
            <div><button class="test-start" @click="scroll_view">Test</button></div>
        </div>
      </div>
    <!-- header html code end -->
    <!-- section3 html code start -->
      <div class="p_section3">
        <h3>{{$t('products')}}</h3>
        <p>{{$t('discover')}}</p>
        <VueSlickCarousel v-bind="settings" ref="carousel">
          <div class="p_s3_card">
            <div class="p_s3_c1_imgs"><router-link to="/swetrackLitePage"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Images/Bastsaliaresign.png"  class="p_s5_c1_img"/></router-link></div>
            <div class="p_s3_c_des"><p><strong>SweTrack Lite</strong><br>Rek: 499:-<br><span><router-link to="/swetrackLitePage">{{$t('readmore')}}</router-link></span></p></div>
          </div>
          <div class="p_s3_card">
            <div class="p_s3_c1_imgs bdl"><router-link to="/maxiTrackerPage"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Images/flexibelsign.png"  class="p_s5_c1_img mid"/></router-link></div>
            <div class="p_s3_c_des max-des"><p><strong>MaxiTracker</strong><br>Rek: 990:-<br><span><router-link to="/maxiTrackerPage">{{$t('readmore')}}</router-link></span></p></div>
          </div>
          <div class="p_s3_card">
            <div class="p_s3_c1_imgs bdl"><router-link to="/swetrackPlusPage"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Images/nyhetsign.png"  class="p_s5_c1_img"/></router-link></div>
            <div class="p_s3_c_des"><p><strong>SweTrack Plus</strong><br>Rek: 799:-<br><span><router-link to="/swetrackPlusPage">{{$t('readmore')}}</router-link></span></p></div>
          </div>
        </VueSlickCarousel>
      </div>
    <!-- section3 html code end -->
    <!-- section2 html code start -->
      <div class="p_section2" :class="{ 'd-none': isShow==0?false:true }" id="scrollView3">
        <div class="p_s2_card">
          <p class="d-none-lt-1100">{{$t('personal_test')}}</p>
          <p class="d-none-gt-1100">{{$t('rec_quiz')}}</p>
          <p><strong>{{$t('right_product')}}</strong></p>
          <button class="btn btn-info" @click="isShow=1">{{$t('to_test')}}</button>
        </div>
      </div>
    <!-- section2 html code end -->
    <!-- section2 html code start -->
      <div class="p_section21">
        <!-- Q Start -->
        <div class="quiz-card" :class="{ 'd-none': isShow==1?false:true }">
          <p>{{$t('best_product')}}</p>
          <p class='quiz-small'>{{$t('flex_test1')}}<br> {{$t('flex_test2')}}<br> {{$t('flex_test3')}} </p>
          <p class='quiz-small'></p>
          <div class="quiz-btn">
            <button class="btn btn-info" @click="isShow=2">{{$t('start_test')}}</button>
            <button class="btn btn-primary" @click="isShow=0">{{$t('cancel')}}</button>
          </div>
        </div>
        <!-- Q1 -->
        <div class="quiz-card" :class="{ 'd-none': isShow==2?false:true }">
          <p>{{$t('access')}}</p>
          <button class="btn btn-info" @click="isShow=3">{{$t('yes')}}</button>
          <button class="btn btn-info" @click="isShow=7">{{$t('no')}}</button>
          <div><button class='btn btn-uline' @click="isShow=0"><u>{{$t('cancel')}}</u></button></div>
        </div>
        <!-- Q2 -->
        <div class="quiz-card" :class="{ 'd-none': isShow==3?false:true }">
          <p>{{$t('vehicle')}}</p>
          <button class="btn btn-info" @click="isShow=4">{{$t('yes')}}</button>
          <button class="btn btn-info" @click="isShow=5">{{$t('no')}}</button>
          <div>
            <button class='btn btn-uline' @click="isShow=2">&#8592; <u>{{$t('back')}}</u></button>
            <button class='btn btn-uline' @click="isShow=0"><u>{{$t('cancel')}}</u> &times;</button>
          </div>
        </div>
        <!-- Q3-1 -->
        <div class="quiz-card" :class="{ 'd-none': isShow==4?false:true }">
          <p>{{$t('portable')}}</p>
          <button class="btn btn-info" @click="isShow=7">{{$t('yes')}}</button>
          <button class="btn btn-info" @click="isShow=8">{{$t('no')}}</button>
          <div>
            <button class='btn btn-uline' @click="isShow=3">&#8592; <u>{{$t('back')}}</u></button>
            <button class='btn btn-uline' @click="isShow=0"><u>{{$t('cancel')}}</u> &times;</button>
          </div>
        </div>
        <!-- Q3-2 -->
        <div class="quiz-card" :class="{ 'd-none': isShow==5?false:true }">
          <p>{{$t('portable')}}</p>
          <button class="btn btn-info" @click="isShow=7">{{$t('yes')}}</button>
          <button class="btn btn-info" @click="isShow=6">{{$t('no')}}</button>
          <div>
            <button class='btn btn-uline' @click="isShow=3">&#8592; <u>{{$t('back')}}</u></button>
            <button class='btn btn-uline' @click="isShow=0"><u>{{$t('cancel')}}</u> &times;</button>
          </div>
        </div>
        <!-- Q4 -->
        <div class="quiz-card" :class="{ 'd-none': isShow==6?false:true }">
          <p>{{$t(start_stop)}}</p>
          <button class="btn btn-info" @click="isShow=8">{{$t('yes')}}</button>
          <button class="btn btn-info" @click="isShow=9">{{$t('no')}}</button>
          <div>
            <button class='btn btn-uline' @click="isShow=5">&#8592; <u>{{$t('back')}}</u></button>
            <button class='btn btn-uline' @click="isShow=0"><u>{{$t('cancel')}}</u> &times;</button>
          </div>
        </div>
      </div>
      <div class="p_s21_m_result" :class="{ 'd-none': isShow==7?false:true }">
        <div class="p_s21_m_r_card">
          <p><strong>{{$t('recommend')}}<br><span>MaxiTracker</span></strong></p>
          <p>{{$t('perfect1')}}<br> {{$t('perfect2')}}<br> {{$t('perfect3')}}</p>
          <div>
            <router-link  to="/maxiTrackerPage" class="btn btn-info">{{$t('readmore')}}</router-link>
            <button class="btn btn-info d-none-lt-1100" @click="isShow=2">{{$t('repeat_test')}} </button>
          </div>
        </div>
        <div class="p_s21_m_r_img">
          <div class="p_s3_c1_imgs"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Images/flexibelsign.png"  class="p_s5_c1_img"/></div>
          <div class="p_s3_c_des"><p><strong>MaxiTracker</strong><br>Rek: 990:-</p></div>
          <div><button class="btn btn-info d-none-gt-1100 final" @click="isShow=2">{{$t('repeat_test')}} </button></div>
        </div>
        <div class="triangle-up"></div>
      </div>

      <div class="p_s21_m_result" :class="{ 'd-none': isShow==8?false:true }">
        <div class="p_s21_m_r_card">
          <p><strong>{{$t('recommend')}}<br><span>SweTrack Plus</span></strong></p>
          <p>{{$t('upgrade_version1')}}<br> {{$t('upgrade_version2')}}<br> {{$t('upgrade_version3')}} </p>
          <div>
            <router-link  to="/swetrackPlusPage" class="btn btn-info">{{$t('readmore')}}</router-link>
            <button class="btn btn-info d-none-lt-1100" @click="isShow=2">{{$t('repeat_test')}}  </button>
          </div>
        </div>
        <div class="p_s21_m_r_img">
          <div class="p_s3_c1_imgs"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Images/nyhetsign.png"  class="p_s5_c1_img"/></div>
          <div class="p_s3_c_des"><p><strong>SweTrack Plus</strong><br>Rek: 799:-</p></div>
          <div><button class="btn btn-info d-none-gt-1100 final" @click="isShow=2">{{$t('repeat_test')}}  </button></div>
        </div>
        <div class="triangle-up"></div>
      </div>
      <div class="p_s21_m_result" :class="{ 'd-none': isShow==9?false:true }">

        <div class="p_s21_m_r_card">
          <p><strong>{{$t('recommend')}}<br><span>SweTrack Lite</span></strong></p>
          <p>{{$t('mobile_app1')}}<br> {{$t('mobile_app2')}}<br> {{$t('mobile_app3')}}</p>
          <div>
            <router-link  to="/swetrackLitePage" class="btn btn-info">{{$t('readmore')}}</router-link>
            <button class="btn btn-info d-none-lt-1100" @click="isShow=2">{{$t('repeat_test')}}  </button>
          </div>
        </div>
        <div class="p_s21_m_r_img">
          <div class="p_s3_c1_imgs"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Images/Bastsaliaresign.png"  class="p_s5_c1_img"/></div>
          <div class="p_s3_c_des"><p><strong>SweTrack Lite</strong><br>Rek: 499:-  </p></div>
          <div><button class="btn btn-info d-none-gt-1100 final" @click="isShow=2">{{$t('repeat_test')}} </button></div>
        </div>
        <div class="triangle-up"></div>
      </div>
    <!-- section2 html code end -->
    <!-- section4 html code start -->
      <div class="p_section4">
        <div class="p_s4_card">
          <p>{{$t('online_store1')}}<span class="d-none-lt-1100"> {{$t('online_store2')}}</span></p>
          <p><strong>{{$t('re_country1')}}<br>{{$t('re_country2')}} </strong></p>
          <router-link to="/retailerPage" class="btn btn-info">{{$t('reseller')}}</router-link>
        </div>
      </div>
    <!-- section4 html code end -->
    <!-- section5 html code start -->
      <div class="p_section5">
        <div class="p_s5_btns">
          <button class="btn" :class="{ 'btn-primary': !maxi_clicked, 'btn-info': maxi_clicked }" @click="maxi_clicked=true, lite_clicked=false, plus_clicked=false">Maxi</button>
          <button class="btn" :class="{ 'btn-primary': !lite_clicked, 'btn-info': lite_clicked }" @click="maxi_clicked=false, lite_clicked=true, plus_clicked=false">Lite</button>
          <button class="btn" :class="{ 'btn-primary': !plus_clicked, 'btn-info': plus_clicked }" @click="maxi_clicked=false, lite_clicked=false, plus_clicked=true">Plus</button>
        </div>
        <table class="customers" :class="{ 'maxi-clicked': maxi_clicked, 'lite-clicked': lite_clicked, 'plus-clicked': plus_clicked }">
          <tr>
            <th> </th>
            <th>
              <div class="p_s5_t_c_sign" style="display:none"></div>
            </th>
            <th>
              <div class="p_s5_t_c_sign" style="display:none"></div>
            </th>
            <th>
              <div class="p_s5_t_c_sign" style="display:none"></div>
            </th>
          </tr>
          <tr>
            <th> </th>
            <th>
              <div class="p_s5_t_card">
                <div class="p_s5_t_c1_imgs"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Images/table_SweTrackLite.png"  class="p_s5_t_c1_img"/></div>
                <div class="p_s5_t_c_des"><p><strong>SweTrack Lite</strong><br>Rek: 499:-</p></div>
              </div>
            </th>
            <th>
              <div class="p_s5_t_card">
                <div class="p_s5_t_c1_imgs"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Images/table_MaxiTracker.png"  class="p_s5_t_c1_img"/></div>
                <div class="p_s5_t_c_des"><p><strong>MaxiTracker</strong><br>Rek: 990:-</p></div>
              </div>
            </th>
            <th>
              <div class="p_s5_t_card">
                <div class="p_s5_t_c1_imgs"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Images/table_SweTrackPlus.png"  class="p_s5_t_c1_img"/></div>
                <div class="p_s5_t_c_des"><p><strong>SweTrack Plus</strong><br>Rek: 799:-</p></div>
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
            <td><div  class="p_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/minus.svg"  class="p_s5_t_icon"/></div>49 :-/mån</td>
            <td><div  class="p_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/minus.svg"  class="p_s5_t_icon"/></div>49 :-/mån</td>
            <td><div  class="p_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/minus.svg"  class="p_s5_t_icon"/></div>49 :-/mån</td>
          </tr>
          <tr>
            <td><strong>{{$t('spec')}}</strong></td>
            <td> </td>
            <td> </td>
            <td> </td>
          </tr>
          <tr>
            <td>{{$t('dimension')}} (H, B, L)</td>
            <td><div  class="p_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/minus.svg"  class="p_s5_t_icon"/></div>1,2 x 2,5 x 7,3</td>
            <td><div  class="p_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/minus.svg"  class="p_s5_t_icon"/></div>2,9 x 5,8 x 8,5</td>
            <td><div  class="p_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/minus.svg"  class="p_s5_t_icon"/></div>1,2 x 2,5 x 7,3</td>
          </tr>
          <tr>
            <td>{{$t('built_battery')}}</td>
            <td><div  class="p_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/minus.svg"  class="p_s5_t_icon"/></div>100 mAh</td>
            <td><div  class="p_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/minus.svg"  class="p_s5_t_icon"/></div>6000 mAh</td>
            <td><div  class="p_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/minus.svg"  class="p_s5_t_icon"/></div>>100 mAh</td>
          </tr>
          <tr>
            <td>{{$t('power_con')}}</td>
            <td><div  class="p_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/minus.svg"  class="p_s5_t_icon"/></div>>40 mA</td>
            <td><div  class="p_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/minus.svg"  class="p_s5_t_icon"/></div>{{$t('not_available')}}</td>
            <td><div  class="p_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/minus.svg"  class="p_s5_t_icon"/></div>40 mA</td>
          </tr>
          <tr>
            <td>{{$t('elec_sys')}}</td>
            <td><div  class="p_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/minus.svg"  class="p_s5_t_icon"/></div>9-36 volt</td>
            <td><div  class="p_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/minus.svg"  class="p_s5_t_icon"/></div>{{$t('no_require')}}</td>
            <td><div  class="p_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/minus.svg"  class="p_s5_t_icon"/></div>7-90 volt </td>
          </tr>
          <tr>
            <td>{{$t('update_inter')}}</td>
            <td><div  class="p_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/minus.svg"  class="p_s5_t_icon"/></div>2 min</td>
            <td><div  class="p_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/minus.svg"  class="p_s5_t_icon"/></div>2 min</td>
            <td><div  class="p_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/minus.svg"  class="p_s5_t_icon"/></div>2 min</td>
          </tr>
          <tr>
            <td>GPS</td>
            <td><div  class="p_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/check.svg"  class="p_s5_t_icon respon"/></div><p>{{$t('yes')}}</p></td>
            <td><div  class="p_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/check.svg"  class="p_s5_t_icon respon"/></div><p>{{$t('yes')}}</p></td>
            <td><div  class="p_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/check.svg"  class="p_s5_t_icon respon"/></div><p>{{$t('yes')}}</p></td>
          </tr>
          <tr>
            <td>{{$t('mo_sen')}}</td>
            <td><div  class="p_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/check.svg"  class="p_s5_t_icon respon"/></div><p>{{$t('yes')}}</p></td>
            <td><div  class="p_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/check.svg"  class="p_s5_t_icon respon"/></div><p>{{$t('yes')}}</p></td>
            <td><div  class="p_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/check.svg"  class="p_s5_t_icon respon"/></div><p>{{$t('yes')}}</p></td>
          </tr>
          <tr>
            <td>Magnet</td>
            <td><div  class="p_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/X.svg"  class="p_s5_t_icon respon"/></div><p>{{$t('no')}}</p></td>
            <td><div  class="p_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/check.svg"  class="p_s5_t_icon respon"/></div><p>{{$t('yes')}}</p></td>
            <td><div  class="p_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/X.svg"  class="p_s5_t_icon respon"/></div><p>{{$t('no')}}</p></td>
          </tr>
          <tr>
            <td>{{$t('waterproof')}}</td>
            <td><div  class="p_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/check.svg"  class="p_s5_t_icon respon"/></div><p>{{$t('yes')}}</p></td>
            <td><div  class="p_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/check.svg"  class="p_s5_t_icon respon"/></div><p>{{$t('yes')}}</p></td>
            <td><div  class="p_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/check.svg"  class="p_s5_t_icon respon"/></div><p>{{$t('yes')}}</p></td>
          </tr>
          <tr>
            <td>{{$t('pac_con')}} </td>
            <td class="last-txt"><div  class="p_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/minus.svg"  class="p_s5_t_icon"/></div><p>{{$t('tra_tra')}} &<br>{{$t('ins_man')}}</p></td>
            <td class="last-txt"><div  class="p_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/minus.svg"  class="p_s5_t_icon"/></div><p>{{$t('tra_tra')}} &<br>{{$t('ins_man')}}</p></td>
            <td class="last-txt"><div  class="p_s5_t_icons"><img src="~/assets/Images_Website/MaxiTracker/Product_MaxiTracker/Icons/minus.svg"  class="p_s5_t_icon"/></div><p>{{$t('tra_tra')}} &<br>{{$t('ins_man')}}</p></td>
          </tr>
          <tr>
            <td style="padding-top:20px; border-right: none"> </td>
            <td style="padding-top:20px" class="tac">
              <router-link  to="/maxiTrackerPage" class="btn btn-info">{{$t('readmore')}}</router-link>
            </td>
            <td style="padding-top:20px " class="tac">
              <router-link  to="/swetrackLitePage" class="btn btn-info">{{$t('readmore')}}</router-link>
            </td>
            <td style="padding-top:20px " class="tac">
              <router-link  to="/swetrackPlusPage" class="btn btn-info">{{$t('readmore')}}</router-link>
            </td>
          </tr>
        </table>
        <div class="p_s5_text">{{$t('sim_card')}} </div>
      </div>
    <!-- section5 html code end -->
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
  name: 'HelloWorld',

  head() {
   		return headerConfig.productslanding;
  },

  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      maxi_clicked: true,
      lite_clicked: false,
      plus_clicked: false,
      isShow: 0,
      settings:{
        "infinite": false,
        "speed": 500,
        "slidesToShow": 3,
        "slidesToScroll": 3,
        "initialSlide": 0,
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
    VueSlickCarousel },
  methods:{
    scroll_view(){
      var scroll_div = document.getElementById('scrollView3')
      var yPosition = scroll_div.getBoundingClientRect().top + window.scrollY - 106
      window.scrollTo(0, yPosition)
    }
  }
}
</script>
<style>
a,
a:hover,
a:focus {
  text-decoration: none;
}
a{color:#FFF;}
a:hover{
  color: #3BC9DB;
}
button, button:focus, button:hover{
  background: transparent;
  border: none;
  outline: none;
}

.slick-slide img{
  display: inline-block !important;
}
</style>


<style scoped>

a,
a:hover,
a:focus {
  text-decoration: none;
}
.quiz-card{
  padding: 50px 0;
}
.quiz-card>div{
  padding-top: 30px;
}
.quiz-card .btn{
  width: 120px;
  padding-left: 10px;
  padding-right: 10px;
}
.quiz-card:first-child .btn{
  width: 200px;
}
@media(max-width:1400px) {
  .p_s2_card strong {
    font-size: 25px;
    line-height: 35px;
  }
}
@media(max-width:1100px){
  .quiz-card .btn, .quiz-card .btn.btn-info{
    font-size: 12px;
    width: 95px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .quiz-card:first-child .btn{
    width: 161px;
    font-weight: bold;
  }
}
.quiz-card p{
  margin-bottom: 50px;
  font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 54px;
color: #FFFFFF;
}
.quiz-card p.quiz-small{
  font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 17px;
line-height: 25px;
text-align: center;
color: #FFFFFF;
}
/* .p_section2, .quiz-card, .p_s21_m_result{
  display: none;
} */
.produkter_header {
  padding: 140px 0 40px 140px;
  background-image: url("~/assets/Images_Website/Products_LandingPage/Products_LandingPage/Images/backgroundgrad.svg"),
    url("~/assets/Images_Website/Products_LandingPage/Products_LandingPage/Images/FyD3OWBuXnY.png");
  background-size: cover, cover;
  background-position: center, center;
}
.produkter_title{
  margin-bottom: 50px;
  text-align: left;
}
.produkter_title>p{
  font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 18px;
display: flex;
align-items: center;
color: #FFFFFF;
margin: 0;
}
.produkter_title>p:nth-child(4){
  margin-top: 30px;
}
.produkter_title>p>a{
  margin-right: 5px;
}
.produkter_title>p>a+a{
  margin-left: 5px;
}
.produkter_title>p>span{
  display: flex;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 25px;
  text-transform: uppercase;
  color: #3BC9DB;
}
.produkter_title>div:last-child{
  margin-top: 30px;
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
  display: flex;
}
.produkter_title i{
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  align-items: center;
  color: #fff;
  display: flex;
}
.produkter_title small{
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  text-align: left;
  letter-spacing: 0.75px;
  color: #fff;
  display: flex;
}
.test-start{
  border: none;
  outline: none;
  background-color: #3BC9DB;
  width: 127px;
  height: 48px;
  line-height: 48px;
  color: #FFF;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 15.8474px;
  cursor: pointer;
}
@media(min-width: 1100px){
  .test-start{
    display: none;
  }
}
@media only screen and (max-width: 1100px) {
.produkter_header {
  padding: 140px 20px 40px 20px;
}
.produkter_title{
  text-align: center;
  align-items: center;
  margin-bottom: 50px;
}
.produkter_title>p>span{
  display: none;
}
.produkter_title>p{
  text-align: center;
  display: block;
}
.produkter_title strong{
  display: block;
  font-style: normal;
  font-weight: strong;
  font-size: 48px;
  line-height: 50px;
  text-align: center;
  text-transform: inherit;
  margin-bottom: 20px;
}
.produkter_title i{
  display: block;
  font-weight: 600;
  font-size: 18px;
  line-height: 74px;
  align-items: center;
  text-align: center;
  font-style: i;
  letter-spacing: 0.75px;
}
.produkter_title small{
  text-align: center;
  display: block;
}
.produkter_title i>span{
  color: #3BC9DB;
}
.quiz-card p.quiz-small{
  font-weight: 300;
  font-size: 12px;
  line-height: 20px;
}
}

.p_section2{
  padding: 70px 100px;
  background-image:url("~/assets/Images_Website/Products_LandingPage/Products_LandingPage/Images/back2gard.svg"),
  url("~/assets/Images_Website/Products_LandingPage/Products_LandingPage/Images/lostighway_t20_kozdE2.png");
  background-size: cover,cover;
  background-position: center, center;
}
.p_s2_card{
  width: 45%;
  height: 50%;
  padding: 2%;
  background-color: #fff;
}
.p_s2_card p{
  font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 17px;
line-height: 25px;
text-transform: uppercase;
color: #000000;
}
.p_s2_card strong{
  font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 44px;
text-align: center;
color: #000000;
}
.p_s2_card .btn{
  font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 26px;
text-align: center;
letter-spacing: 0.56px;
text-transform: uppercase;
color: #FFFFFF;
background: #1F97EF;
}
.btn+.btn{
  margin-left: 10px;
}
@media only screen and (max-width: 1100px) {
.p_section2{
  padding: 40px 10%;
}
  .p_s2_card{
  width: 100%;
  padding: 5%;
  background: none;
}
.p_s2_card p{
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 28px;
  text-transform: none;
  text-align: center;
  color: #FFFFFF;
}
.p_s2_card p:nth-child(2) {
  margin-bottom: 8px;
}
.p_s2_card p:nth-child(3){
  width: 160px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
}
.p_s2_card strong{
  font-family: Poppins;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 20px;
  text-transform: none;
  text-align: center;
  color: #FFFFFF;
}
.slick-slider{
  padding-bottom: 70px;
}
}

.p_section21{
  padding: 0 10%;
  background-image: url("~/assets/Images_Website/Products_LandingPage/Products_LandingPage/Images/blackback.svg");
  background-size: cover;
  background-color: #151515;
  background-position: center;
}
.p_s21_card{
  width: 100%;
  padding: 2%;
  background: none;
}
.p_s21_card p{
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 54px;
  color: #FFFFFF;
}
.p_s21_card strong{
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 25px;
  text-align: center;
  color: #FFFFFF;
}


.p_section3{
  padding: 20px 20px 20px;
  overflow: hidden;
}
.p_section3>h3{
  font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 40px;
line-height: 46px;
text-align: center;
color: #333333;
margin-bottom: 20px;
}
.p_section3>p{
  font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 15px;
line-height: 26px;
text-align: center;
letter-spacing: 0.6px;
color: #373737;
margin-bottom: 40px;
}
.p_s3_card{
  float: left;
}
.p_s3_c1_imgs.bdl{
  border-left: solid 1px #efefef;
}
.p_s5_c1_img{
  width: 30%;
}
.p_s5_c1_img.mid {
  width: 30%;
}
.p_s3_card p{
  font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 17px;
line-height: 25px;
text-align: center;

color: #000000;
}
.p_s3_card strong{
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 25px;
  text-align: center;
  color: #000000;
}
.p_s3_card span>a{
  font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 17px;
line-height: 45px;
text-align: center;
text-transform: uppercase;
color: #1F97EF;
}
.p_s3_card span>a:hover{
  color: #3BC9DB;
}
.p_section4{
  padding: 40px 40px 40px 80px;
  margin-top: 10px;
  background-image: url("~/assets/Images_Website/Products_LandingPage/Products_LandingPage/Images/Group5508.png");
  background-size: cover;
  background-position: center;
}
.p_s4_card{
  padding: 2%;
  background: none;
  text-align: left;
}
.p_s4_card p{
  margin-bottom: 35px;
}
.p_s4_card p:first-child{
  font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 44px;
color: #FFFFFF;
margin-top:0;
margin-bottom: 25px;
}
.p_s4_card strong{
  font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
text-align: left;
color: #FFFFFF;
}
.p_s4_card .btn{
  text-align: center;
letter-spacing: 0.56px;
text-transform: uppercase;
color: #FFFFFF;
font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 26px;
background-color: rgba(59,201,219,0.75);
padding: 15px 30px;
border-radius:0;
}
.p_s4_card a.btn.btn-info{
  background: #3BC9DB;
}
.p_s2_card button {
  background: #1F97EF;
}
.p_s2_card .btn.btn-info:hover{
  background: #158add;
}
@media only screen and (max-width: 1100px) {
.p_section3{
  padding-top:0;
  padding-bottom: 0;
  padding: 10px 10px 10px;
}
.p_section3>h3{
  display: none;
}
.p_section3>p{
  display: none;
}
.p_s3_card{
  background-color: #FAFAFA;
  padding-top: 70px;
  padding-bottom: 0px;
}
.p_section4{
  padding: 5% 5%;
}
  .p_s4_card{
  width: 100%;
  padding: 5%;
  background: none;
  text-align: center;
}
.p_s4_card p{
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 28px;
  text-align: center;
  color: #FFFFFF;
}
.p_s4_card p:first-child{
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 28px;
  text-align: center;
  color: #FFFFFF;
  font-family: Poppins;
}
.p_s4_card strong{
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: #FFFFFF;
}
.p_section4 .btn {
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
}
.p_section4 .btn-info {
  background: #3BC9DB;
  box-shadow: 0px 0px 28px 3px rgba(0, 0, 0, 0.1);
  color: #fff;
}
}

.p_section5{
  padding: 5% 10%;
}
.p_s5_t_icon{
  width: 30%;
  height: 10px;
  margin-right: 10%;
}
.p_s5_t_c_sign{
  width: 100%;
  height: 19px;
  background-color: #1F97EF;
}
.customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
.customers tr>td{
  font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 18px;
color: #000000;
}
.customers tr>td.last-txt{
  font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 10px;
line-height: 15px;
color: #000000;
}
.customers tr>td:first-child{
  font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 17px;
line-height: 25px;
color: #000000;
}
.customers td, .customers th {
  padding: 8px;
}
.customers td+td, .customers th+th{
  border-left:1px solid #ddd;
}
.customers tr:first-child{
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 25px;
  color: #000000;
  border-right: none;
}

.customers tr:nth-child(even){
  background-color: #f2f2f2;
}

/*.customers tr:hover {
  background-color: #ddd;
}*/
.customers td {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
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
.customers tr:last-child td{
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
.p_s5_t_card {
  width: 100%;
  height: 15vw;
  margin-top: 35px;
  float: left;
  flex-direction: column;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.p_s5_t_c1_img {
  width: 35%;
  float: left;
}
.p_s5_t_c1_imgs {
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.p_s5_t_c_des {
  width: 100%;
  float: left;
  flex-direction: column;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.p_s5_t_c_des p {
  font-family: Poppins;
font-style: normal;
font-weight: 400;
font-size: 17px;
line-height: 25px;
text-align: center;
color: #000000;
}
.p_s5_t_c_des p>strong {
  font-weight: 600;
  color: #000 !important;
}
.p_s5_t_c_des span {
  font-weight: 550;
  color: #3bc9db;
}
.p_section5 .btn-info {
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
color: #FFFFFF !important;
}
.p_section5 .btn-info:hover{
  background:#158add;
}
.p_s5_text{
  padding: 5% 0%;
  width: 50%;
  color: #000000;
  text-align: left;
  font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 18px;
}
.p_s5_t_icons{
  width: 20%;
  float: left;
}
.customers tr>td:first-child strong{
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 25px;
  text-align: center;
  color: #1F97EF!important;
  margin-left: -20%;
}
.customers tr>td>p{
  margin: 0;
}
.p_s5_btns{
  display: none;
}
.p_s5_btns .btn-primary{
  background: none;
  margin-left: 0;
  border-radius: 50px;
  box-shadow: none;
  width: 30%;
}
.p_s5_btns .btn-info{
  background-color: black;
  margin-left: 0;
  border-radius: 50px;
  width: 30%;
}
.p_section5>.btn-info{
  display: none;
}
.p_s5_btns .btn {
  padding: 15px 5px;
  font-size: 10px;
  font-size: 15px;
}
@media only screen and (max-width: 1100px) {
  .section1 {
    flex-direction: column;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .p_s5_t_card {
    width: 100%;
    height: 35vw;
    float: none;
  }
  .p_s5_t_c1_img {
    width: 20%;
    float: left;
  }
  .p_s5_t_c_des {
    width: 50%;
    float: left;
    text-align: left;
  }
  .p_s5_t_c_des p {
    font-size: 3.5vw;
  }
  .p_s5_t_c_des strong {
    font-weight: 550;
  }
  .p_s5_t_c_des span {
    display: none;
  }
.customers td, .customers th{display: none;}
.customers td:first-child, .customers th:first-child{display: table-cell;}
.maxi-clicked td:nth-child(2), .maxi-clicked th:nth-child(2){display: table-cell;}
.lite-clicked td:nth-child(3), .lite-clicked th:nth-child(3){display: table-cell;}
.plus-clicked td:nth-child(4), .plus-clicked th:nth-child(4){display: table-cell;}
.p_s5_text{
  padding: 5%;
  width: 100%;
  padding-top: 10%;
}
.customers tr:first-child{
  display: none;
}
.customers tr:last-child td:first-child {
  display: none;
}
.customers tr:last-child td {
  padding-left: 35%;
}
.p_s5_t_card {
  display: none;
}
.p_s5_text{
  font-style: i;
}
.p_s5_t_icon{
  display: none;
}
.p_s5_t_icon.respon{
  margin-left: 70%;
  display: block;
  width: 20px;
}
.customers p{
  display: none;
}
.customers td{
  width: 30%;
  border-right: none;
}
.customers th {
  width: 30%;
}
.p_s5_btns{
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
}

.p_section5>.btn-info{
  display: block;
  width: 30%;
  margin-left: 30%;
}
.customers tr>td:first-child{
  font-size: 15px;
}

.p_section5{
  padding: 30px 10px;
}
.customers td+td, .customers th+th{
  border-left: none;
}
}
.p_s21_m_result{
  position: relative;
  height: 400px;
  background-image: url("~/assets/Images_Website/Products_LandingPage/Products_LandingPage/Images/blackback.svg");
  background-size: cover;
  background-color: #151515;
  background-position: center;
  margin-top: 33px;
}
.p_s21_m_result .btn{
  font-size: 12px;
  padding: 12px 46px;
}
.p_s21_m_result .btn+.btn.btn-info{
  padding: 0;
  width: 140px;
  height: 40px;
  line-height: 40px;
}
.p_s21_m_r_card{
  width: 55%;
  padding-left: 10%;
  padding-top: 50px;
  background: none;
  float: left;
  text-align: left;
}
.p_s21_m_r_card p{
  font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 23px;
color: #FFFFFF;
  text-align: left;
  margin-bottom: 20px;
}
.p_s21_m_r_card strong{
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 30px;
  color: #FFFFFF;
}
.customers tr>td:first-child strong{
  margin-left: 0;
}
.p_s21_m_r_card strong{
  text-align: left;
  font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 54px;
color: #FFFFFF;
}
.p_s21_m_r_card strong>span{
  color: #1F97EF;
}
.p_s21_m_r_img{
  width: 45%;
  height: 400px;
  padding-top: 50px;
  float: left;
  background-color:  #F9F9F9;
}
.p_s21_m_r_img .p_s5_c1_img{
  width: 150px;
}
.p_s21_m_r_img strong{
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 25px;
  text-align: center;
  color: #000000;
}
.triangle-up {
  position: absolute;
	width: 0px;
  height: 0px;
  right: 45%;
	border-left: 100px solid transparent;
  border-bottom: 400px solid #F9F9F9;;
  float: left;
}
@media only screen and (max-width: 1100px) {
.p_s21_m_r_card{
width: 60%;
    padding-top: 50px;
    padding-right: 50px;
    padding-left: 10px;
    padding-bottom: 30px;
    background: none;
    position: relative;
    text-align: center;
}
.p_s21_m_r_card:after{
    position: absolute;
    right: -20px;
    top: -20px;
    height: 110%;
    width: 50px;
    background: #f9f9f9;
    transform: rotate(-5deg);
    content: '';
}
.p_s21_m_r_card p{
  font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 23px;
color: #FFFFFF;
  text-align: left;
  margin-bottom: 20px;
}
.p_s21_m_r_card strong{
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 30px;
  color: #FFFFFF;
}
.customers tr>td:first-child strong{
  margin-left: 0;
}
.p_s21_m_r_card strong{
  text-align: left;
  font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 54px;
color: #FFFFFF;
}
.p_s21_m_r_card strong>span{
  color: #1F97EF;
}
.p_s21_m_r_img{
  width: 40%;
  padding-top: 50px;
  float: left;
  background-color:  #F9F9F9;
}
.p_s21_m_r_img .p_s5_c1_img{
  width: 60%;
}
.p_s21_m_r_img strong{
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: #000000;
}
.triangle-up {
  position: absolute;
	width: 0px;
  height: 0px;
  right: 45%;
	border-left: 100px solid transparent;
  border-bottom: 400px solid #F9F9F9;;
  float: left;
}
.p_s21_m_result{
  display: flex;
  overflow: hidden;
  height: auto;
}
.triangle-up {
  display: none;
}
.p_s21_m_r_card p{
font-weight: normal;
font-size: 13px;
line-height: 20px;
text-align: center;
color: #FFFFFF;
margin-bottom: 40px;
}
.p_s21_m_r_card p>br{
  display: none;
}
.p_s21_m_r_img{
  padding-top: 50px;
  background-color:  #F9F9F9;
  position: relative;
  height: auto;
  padding-bottom: 30px;
}
.p_s21_m_r_card strong{
  font-weight: 500;
font-size: 14px;
line-height: 22px;
text-align: center;
}
.btn.btn-info, .btn.btn-primary{
font-size: 9px;
line-height: 1.5;
padding: 8px 20px;
}
.btn.btn-primary {
  font-size: 12px;
}
.p_section5 .btn-info:hover {
  background: #132439;
  font-size: 12px;
  font-family: Poppins
}
.p_s5_btns .btn-info {
  background: #132439;
  font-size: 12px;
  font-family: Poppins;
  text-transform: unset;
}
.quiz-card p{
  font-weight: 500;
font-size: 19px;
line-height: 28px;
}
.btn.btn-uline{
  margin: 0;
  padding: 0;
}
.btn.btn-uline+.btn.btn-uline{
  margin-left: 20px;
}
.btn.btn-info.final{
  background: #242424;
}
}
@media(max-width:1100px){
  .customers .btn.btn-info{
    font-size:11px;
    padding: 10px 14px;
  }
  .quiz-card>div {
    display: flex;
    justify-content: center;
  }
}
</style>
