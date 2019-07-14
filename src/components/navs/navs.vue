<template>
  <div>
    <div class="container">
      <div class="row navs">
        <ul class="nav">
          <li class="col-md-2 navs-li">
            <a href="#">VUE</a>
            <ul class="navs-li-ul">
              <li class="col-md-12">vue-cli</li>
              <li class="col-md-12">axios</li>
              <li class="col-md-12">vuex</li>
            </ul>
          </li>
          <li class="col-md-2 navs-li">
            <a href>小程序</a>
            <ul class="navs-li-ul">
              <li class="col-md-12">组件开发</li>
              <li class="col-md-12">页面配置</li>
              <li class="col-md-12">api开发文档</li>
            </ul>
          </li>
          <li class="col-md-2 navs-li">
            <a href>JAVASCRIPT</a>
            <ul class="navs-li-ul">
              <li class="col-md-12">es6</li>
              <li class="col-md-12">面向对象编程</li>
              <li class="col-md-12">api开发文档</li>
            </ul>
          </li>
          <li class="col-md-2 navs-li">
            <a href>NODE.JS</a>
            <ul class="navs-li-ul">
              <li class="col-md-12">express框架</li>
              <li class="col-md-12">mongodb数据库</li>
              <li class="col-md-12">api开发文档</li>
            </ul>
          </li>
          <li class="col-md-2 navs-li">
            <a href>其他</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>

export default {};
</script>
<style lang="scss" scoped>
.navs-li {
  text-align: center;
  margin-left: 15px;
  cursor: pointer;
}
.navs-li a {
  color: #313131;
}
.navs-li:nth-child(1) {
  margin-left: 50px;
}
.navs-li-ul li:hover {
  background-color: #eeeeee;
}

.navs-li > ul {
  list-style: none;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.3);
  border-radius: 3px;
  opacity: 0;
  transition: all 0.2s ease-in-out;
}
.nav li:hover > ul{opacity: 1;margin: 0;}
</style>


