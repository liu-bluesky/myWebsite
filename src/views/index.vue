<template>
  <div >
    <header>
      <navs></navs>   
    </header>
    <!-- <swipers></swipers> -->
    <section>
      <info></info>
    </section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <footer></footer>
  </div>
</template>

<script>
import navs from '../components/navs/navs'
import swipers from '../components/swiper/swiper'
import info from '../components/info/info'
export default {
    components:{
        navs,
        swipers,
        info,
    }
};
</script>

<style>

</style>
