<template>
  <div class="swiper-container">
    <!--/*options我们对轮播图的所有配置*/-->
    <swiper v-bind:options="swiperOption">
      <swiper-slide v-for="itemsimg in itemImgs" :key="itemsimg.id">
        <img :src="itemsimg.img" alt  class="img-responsive center-block"/>
      </swiper-slide>
      <!--分页slot 负责看见这个公共类似display-->
      <div class="swiper-pagination" slot="pagination"></div>
      <!--前后按钮-->
      <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      itemImgs: [
        { id: 0, img: "https://i1.mifile.cn/a4/xmad_15590358701464_sEyqY.jpg" },
        { id: 1, img: "https://i1.mifile.cn/a4/xmad_15590357922113_dZxos.jpg" },
        { id: 2, img: "https://i1.mifile.cn/a4/xmad_15590487108559_JOpcA.jpg" },
        { id: 3, img: "https://i1.mifile.cn/a4/xmad_15586683348207_opnBm.jpg" },
        { id: 4, img: "https://i1.mifile.cn/a4/xmad_15590297188488_lNBWg.jpg" }
      ],
      swiperOption: {
        autoplay: {
         stopOnLastSlide: false,
    disableOnInteraction: true,
        },
        loop: true,
        direction: "horizontal",
        paginationClickable: true,
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
          dynamicBullets: true,
          dynamicMainBullets: 2
        },
        navigation: {
          nextEl: ".swiper-button-prev",
          prevEl: ".swiper-button-next"
        },
               preventClicks : false,//默认true
            effect : 'fade',
      }
    };
  },
  components: {
        swiper,
      swiperSlide
  },

  computed: {
  
  },
  mounted() {
    // current swiper instance
 
  }
};
</script>
<style lang="sass" scoped>

</style>


