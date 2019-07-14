    <template>
  <div>
    <!-- 导航 -->
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <!-- 小屏幕导航按钮 logo 在里面需要添加容器navbar-header -->
        <div class="navbar-header">
          <button
            class="navbar-toggle mynavbar"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a href class="navbar-brand">蓝天demo</a>
        </div>
        <!-- 导航 -->
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right" ref="nav">
            <li class="nav-item">
              <a href="#home" class="nav-link">首页</a>
            </li>
            <li class="nav-item">
              <a href="#bbs" class="nav-link">vue</a>
            </li>
            <li class="nav-item">
              <a href="#html5">node.js</a>
            </li>
            <li class="nav-item">
              <a href="#course">小程序</a>
            </li>
               <li class="nav-item">
              <a href="#apps">小程序</a>
            </li>
            <li class="nav-item">
              <a href="#contact">数据库</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- 导航 -->
    <!-- home -->
    <section id="home">
      <div class="lvjing">
        <div class="container">
          <div class="row wow fadeInUp" data-wow-duration='2s'
          data-wow-delay='0.3s'
          >
            <div class="col-md-5">
              <h1 class="home-h1">小米笔记本烧菜就是好吃</h1>
              <p class="home-p">
                买到就是赚到，既可以打办公，
                <br />游戏还可以烧菜小米才是最棒的
                纯粹娱乐不要乱传
              </p>
              <img src="../../static/image/iphone.png" class="img-responsive home-img" alt />
            </div>
            <div class="col-md-7"></div>
          </div>
        </div>
      </div>
    </section>
    <!-- home -->
    <!-- bbs data-wow-iteration='2'-->
    <section id="bbs">
      <div class="container">
        <div class="row wow fadeInLeft"
        data-wow-duration='2s'
        data-wow-delay='1s'
        >
          <div class="col-md-4 bbs-div">
            <img src="../../static/image/circle-red-3.png" class="bbs-img img-responsive" alt />
            <h3>小米之家</h3>
            <p>高达奢华，简约至上</p>
          </div>
          <div class="col-md-4 bbs-div">
            <img src="../../static/image/circle-red-2.png" class="bbs-img img-responsive" alt />
            <h3>丝滑般顺畅</h3>
            <p>还在为无人受理烦恼吗？快来小米体验点</p>
          </div>
          <div class="col-md-4 bbs-div">
            <img src="../../static/image/circle-blue-4.png" class="bbs-img img-responsive" alt />
            <h3>手擒京东，脚踩淘宝</h3>
            <p>最低的价格获取最高的汇报</p>
          </div>
        </div>
      </div>
    </section>
    <!-- bbs -->
    <!-- html5 -->
    <section id="html5">
      <div class="container">
        <div class="col-md-6 wow fadeInLeft" data-wow-delay='0.3s'
         data-wow-duration='2.1s'>
          <h2>HTML5</h2>
          <P>移动互联网应用及相关业务已经深刻影响到普通百姓的日常生活，应用场景非常广泛。</P>
          <P>
            <span class="html5-icon glyphicon glyphicon-grain"></span> Bootstrap 优站精选频道收集了众多基于 Bootstrap 构建、设计精美的、有创意的网站。。
          </P>
          <P>
            <span class="html5-icon glyphicon glyphicon-grain"></span>React 起源于 Facebook 的内部项目，是一个用于构建用户界面的 JavaScript 库。
          </P>
          <P>
            <span class="html5-icon glyphicon glyphicon-grain"></span> Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。
            Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。
          </P>
        </div>
        <div class="col-md-6 wow fadeInRight" data-wow-delay='0.3s' data-wow-duration='2.1s'>
          <img src="../../static/image/c4-pic2.png" class="img-responsive" alt />
        </div>
      </div>
    </section>
    <!-- html5 -->
    <!-- react -->
    <section id="react">
      <div class="container wow fadeInUp" data-wow-delay='0.51s' data-wow-offset='10'>
        <div class="col-md-6 ">
          <img src="../../static/image/react.png" class="img-responsive react-img" alt />
        </div>
        <div class="col-md-6 wow fadeInUp">
          <h2>React</h2>
          <P>用于构建用户界面的 JavaScript 框架</P>
          <P>
            <span class="react-icon glyphicon glyphicon-grain"></span>React 起源于 Facebook 的内部项目，是一个用于构建用户界面的 JavaScript 库。
          </P>
          <P>
            <span class="react-icon glyphicon glyphicon-grain"></span> Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。
            Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。
          </P>
        </div>
      </div>
    </section>
    <!-- react -->
    <!-- course -->
    <section id="course">
      <div class="container">
        <div class="row wow fadeIn"   data-wow-delay='1s'>
          <div class="col-md-12">
            <h2>前端技术</h2>
          </div>
          <div class="col-md-3">
            <div class="course">
              <img src="../../static/image/class/expo.png" class="img-responsive" alt />
              <a href class="btn btn-info" role="toolbar">加入学习</a>
            </div>
          </div>
          <div class="col-md-3">
            <div class="course">
              <img src="../../static/image/class/react.png" class="img-responsive" alt />
              <a href class="btn btn-info" role="toolbar">加入学习</a>
            </div>
          </div>
          <div class="col-md-3">
            <div class="course">
              <img src="../../static/image/class/jqueryapi.png" class="img-responsive" alt />
              <a href class="btn btn-info" role="toolbar">加入学习</a>
            </div>
          </div>
          <div class="col-md-3">
            <div class="course">
              <img src="../../static/image/class/nodejs.png" class="img-responsive" alt />
              <a href class="btn btn-info" role="toolbar">加入学习</a>
            </div>
          </div>
          <!-- 下面 -->
          <!-- 下面class -->
          <div class="col-md-3">
            <div class="course">
              <img src="../../static/image/class/typescript.png" class="img-responsive" alt />
              <a href class="btn btn-info" role="toolbar">加入学习</a>
            </div>
          </div>
          <div class="col-md-3">
            <div class="course">
              <img src="../../static/image/class/vuejs.png" class="img-responsive" alt />
              <a href class="btn btn-info" role="toolbar">加入学习</a>
            </div>
          </div>
          <div class="col-md-3">
            <div class="course">
              <img src="../../static/image/class/webpack.png" class="img-responsive" alt />
              <a href class="btn btn-info" role="toolbar">加入学习</a>
            </div>
          </div>
          <div class="col-md-3">
            <div class="course">
              <img src="../../static/image/class/npm.png" class="img-responsive" alt />
              <a href class="btn btn-info" role="toolbar">加入学习</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- course -->
    <!-- app -->
    <section id="apps">
      <div class="container wow fadeInUp" data-wow-delay='0.51s' >
        <div class="row">
          <div class="col-md-6">
            <h2>小米视频app下载</h2>
            <p>
              此版本仅适用于小米手机及MIUI系统 使用中有任何问题请联系客服QQ群：487226126 小米视频集电
              影、电视剧、动漫、音乐、新闻、娱乐、体育、直播、高清海量影视视频在线观看和下载，专为
              小米手机订制的视频娱乐客户端产品 ，为小米用户提供能了操作便捷的客户端，极致影音播放体验。
              应用参数 语言：简体中文类别：影音图像 大小：8M 海量影视 已收录的热门视频已突破10万部；涵盖...
            </p>
            <button class="btn btn-primary appbtn">
              <span class="glyphicon glyphicon-save"></span>
              安卓版
            </button>
            <button class="btn btn-primary appbtn">
              <span class="glyphicon glyphicon-save"></span>
              苹果版
            </button>
          </div>
          <div class="col-md-6">
            <img src="../../static/image/app下载.png" class="img-responsive" alt />
          </div>
        </div>
      </div>
    </section>
    <!-- app -->
    <!-- contact -->
    <section id="contact">
      <div class="lvjing">
        <div class="container">
          <div class="row">
            <div class="col-md-6 wow fadeInLeft" data-wow-delay='0.3s'
         data-wow-duration='2.1s' >
              <h2>联系作者:刘蓝天</h2>
              <p class="contactp">
                刘蓝天，热爱编程，性格奇怪，机会主义者，不会浪费任何一次机会，喜欢狼，向往狼性法则
                。对于向我求助的人尽量帮忙，热心肠，但是对于不努力，想占便宜，光说不做的人非常厌恶。
              </p>
              <address>
                <p class="contactAddp">
                  <span class="glyphicon glyphicon-home"></span>&nbsp;&nbsp;地址:河南省郑州市金水区三泉路66号
                </p>
                <p class="contactAddp">
                  <span class="glyphicon glyphicon-phone-alt"></span>&nbsp;&nbsp;联系电话:18336465466
                </p>
                <p class="contactAddp">
                  <span class="glyphicon glyphicon-envelope"></span>&nbsp;&nbsp;QQ邮箱:229236940@qq.com
                </p>
              </address>
            </div>
            <div class="col-md-6 wow fadeInRight" data-wow-delay='0.3s' data-wow-duration='2.1s'>
                <form action="" method="post">
                    <div class="col-md-6">
                        <input type="text" class="form-control contactInput" placeholder="您的姓名"/>
                    </div>
                    <div class="col-md-6">
                          <input type="text" class="form-control contactInput" placeholder="您的邮箱"/>
                    </div>
                    <div class="col-md-12">
                          <input type="text" class="form-control contactInput" placeholder="标题"/>
                    </div>
                    <div class="col-md-12">
                         <textarea name="" id=""
                         rows="5"
                         class="form-control contactInput" placeholder="留言"></textarea>
                    </div>
                    <div class="col-md-8">
                     <input type="submit" class="form-control contactInput" value="提交" />
                    </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- contact -->
    <!-- footer -->
    <footer id="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <p>禁止商业化 | 如果商业化将追究法律责任</p>
                </div>
            </div>
        </div>
    </footer>
    <!-- footer -->
  </div>
</template>
    <script>

   import {WOW} from 'wowjs'
    export default {
        mounted(){
            this.pages()
        },
        methods:{
            pages(){
                new WOW().init()
                // 导航跳转插件
               $('.nav').singlePageNav({
                   offset:70
               })
            //    小屏幕导航点击关闭
            $('.navbar-collapse a').click(function(){
                $('.navbar-collapse').collapse('hide')
            })
            }
        }
    };
</script>
    <style lang="scss" scoped>
.navbar-default {
  border: none;
  background-color: #3f3f3f;
  box-shadow: 0 2px 8px 0px rgba(255, 255, 2555, 0.25);
}
.navbar-default .navbar-collapse,
.navbar-default .navbar-form {
  border: 1px solid #3f3f3f;
}

.navbar-brand {
  display: inline-block;
  color: #fff;
}
.navbar-default .navbar-brand {
  font-size: 26px;
  font-weight: 400;
  height: 70px;
  line-height: 35px;
}
.navbar-default .navbar-nav > li > a {
  font-size: 16px;
  height: 70px;
  font-weight: 400;
  line-height: 35px;
}

.navbar-default .navbar-brand:hover,
.navbar-default .navbar-brand:focus {
  color: #fff;
}
.navbar-default .navbar-nav > li > a:hover,
.navbar-default .navbar-nav > li > a:focus {
  color: #fff;
}
// 小屏幕
.navbar-default .mynavbar {
  margin-top: 17px;
}
.navbar-default .mynavbar:hover {
  background-color: #fff;
}
// home
#home {
  background: url("../../static/image/home.jpg");
  background-size: cover;
  margin-top: 70px;
  text-align: center;
  width: 100%;
}

.lvjing {
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.45);

  padding: 90px 0;
}
.home-h1 {
  color: #ffffff;
  font-weight: 800;
  margin-top: 0;
}
.home-p {
  color: #ffffff;
}
.home-img {
  position: relative;
  left: 0;
  bottom: -90px;
  display: inline-block;
}
// bbs
#bbs {
  padding: 80px 0;
  text-align: center;

}
.bbs-div {
  padding: 15px;
  transition: box-shadow 0.3s ease-in-out;
  border-radius: 15px;
}
.bbs-div:hover {
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.25);
}
.bbs-img {
  width: 40%;
  margin: 0 auto;
}
#bbs h3 {
  font-weight: 600;
}
#html5,
#react,
#course {
  background-color: #f8f8f8;
  padding: 80px 0;
}
#html5 h2,
#react h2,
#course h2 {
  font-weight: bold;
}
#html5 p,
#react p {
  line-height: 25px;
}
.html5-icon,
.react-icon {
  color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  line-height: 40px;
  text-align: center;
  font-size: 20px;
  margin-right: 20px;
}
.html5-icon {
  background-color: #c700b4;
}
#react {
  background-color: #fff;
}
.react-icon {
  background-color: #222222;
}
.react-img {
}
// course
#course {
  text-align: center;
}
#course h2 {
  padding-bottom: 60px;
}
.course {
  background-color: #ffffff;
}
.course img {
  width: 100%;
}
.course a {
  display: inline-block;
  background-color: #f2f2f2;
  text-decoration: none;
  margin: 20px;
  padding: 8px 40px;
  border-radius: 5px;
  color: #222;
  border: 1px solid #748080;
}
.course a:hover {
  background-color: #e5e5e5;
}
#course .col-md-3 {
  padding-bottom: 40px;
}
// app
#apps {
  padding: 80px 0;
}
#apps h2 {
  font-weight: bold;
}
#apps p {
  padding: 30px 0;
}
.appbtn {
  padding: 5px 30px;
  background-color: #222222c9;
  border: none;
  border-radius: 3px;
  margin-top: 10px;
  margin-left: 15px;
}
.appbtn:hover {
  background-color: #222222db;
}
// contact
#contact {
  background: url("../../static/image/dt.png") no-repeat;
  background-size: cover;
  color: #fff;
  width: 100%;
}
#contact h2{
    font-weight: bold;
     font-size: 37px;
     margin-top: 0;
    }
    .contactp{
        font-size: 15px;
        margin: 25px 0 ;
    }
    .contactAddp{
        font-size: 15px;
        padding: 10px 0;
    }
    .contactInput{
        border: none;
        border-radius: 2px;
        margin-bottom: 30px;
        height: 60px;
    }
   #contact textarea.contactInput{
       height: auto;
   }
   #contact input[type="submit"]{
       font-weight: bold;
       font-size: 15px;
      color: #ffffff;
      background-color: #3f3f3f;
      transition: background-color .3s ease
   }
    #contact input[type="submit"]:hover{
        background-color: #2e2e2e;
    }
    #footer{
        font-weight: 400;
        text-align: center;
        padding: 20px 0;
        color: #eeeeee;
        font-size: 12px;
        background-color: #3f3f3f;
    }
</style>


