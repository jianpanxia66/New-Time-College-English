<template>
    <div>
        <!-- 顶部开始导航开始-->
       <div id="app">
        <mt-header title="新时代英语" class="header">
             <!-- 未登录 -->
             <div slot="right" class="top-bar">
              <!-- {{}} -->
            <span>你好,访客</span>
             |<router-link to="/" class="top-tit" target="_blank" >注册</router-link>
             |<router-link to="/login" class="top-tit" target="_blank">登录</router-link>
        </div>
             <!--已登录 -->
                  <!-- <div slot="right" class="shortcut">
                  <mt-button type="danger" @click="logout ">注销</mt-button>
                  </div> -->
     </mt-header>
     <!-- 顶部开始导航结束-->
    </div>
    <!-- 输入框开始 -->
          <!--图标-->
      <div class="top-show">
          <div class="logo">
              <img src="../assets/icon/fanyi1.png" alt="">
          </div>     
          <!-- 搜索框 -->
          <div class="top-search">
              <!-- <mt-search placeholder="请输入内容" ></mt-search>
          <mt-button slot="append"></mt-button> -->
          <div class="form-input-wrap f-l">
         <form action="" class="input-kw-form">
            <input type="text" placeholder="请输入您的搜索内容">
            <mt-button>
              <img src="../assets/search.png" alt="">
            </mt-button>
         </form>
       </div>
          </div>
      </div>
    <!-- 输入框结束 -->      
      <!-- 选项卡开始-->
      <div class="top-nav" style="z-index:50" >
        <ul class="ul">
          <li>
                <div @click="wordin" class="li-rl">
                   <img src="../assets/images/word.png"  class="item-img" alt="">
                </div>
                    <span class="span">必备单词</span>
          </li>
              <li>
                  <div class="li-rl" @click="listenin">
                     <img src="../assets/images/listen.png"  class="item-img" alt="" >
                  </div>
                   <span class="span">听力训练</span>
              </li>
                  <li>
                    <router-link to="reading" class="li-rk">
                  <div class="li-rl">
                     <img src="../assets/images/reading.png"  class="item-img" alt="" >
                  </div>
                   <span class="span">阅读分析</span>
                </router-link>
              </li>
                 <li>
                   <router-link to="composition" class="li-rk">
                  <div class="li-rl">
                     <img src="../assets/images/composition.png"  class="item-img" alt="" >
                  </div>
                   <span class="span">高分作文</span>
                </router-link>
              </li>
                  <li>
                    <router-link to="/six" class="li-rk">
                  <div class="li-rl">
                     <img src="../assets/images/six.png"  class="item-img" alt="" >
                  </div>
                   <span class="span">六级词汇</span>
                </router-link>
              </li>   
            </ul>
      <!-- 选项卡结束-->
      <!-- 面板开始 -->
        <div class="main">
           <!--轮播图开始-->
             <div class="top-swipe">
              <mt-swipe  :show-indicators="false" class="mt-swipe">
                  <mt-swipe-item class="mst">
                    <router-link to="/">
                     <img src="../assets/images/2.jpg" alt="">
                   </router-link>
                  </mt-swipe-item>
                  <mt-swipe-item class="mst">
                    <router-link to="/">
                     <img src="../assets/images/3.jpg" alt="">
                   </router-link>
                  </mt-swipe-item>
                  <mt-swipe-item class="mst">
                    <router-link to="/">
                     <img src="../assets/images/4.jpg" alt="">
                    </router-link>
                  </mt-swipe-item>
               </mt-swipe>
            </div>
            <!-- 轮播图结束 -->
            <!-- 正体内容开始 -->
            <!-- 面板开始 -->
                <div class="main">
                    <mt-tab-container>
                      <mt-tab-container-item>
                          <!-- 单一文章 -->
                          <div class="article"> 
                              <!-- 标题连接开始 -->
                              <div class="article-subject">推荐英语课外读物</div>
                              <!-- 结束 -->
                              <!-- 缩略图开始 -->
                              <div class="article-wrapper">
                                <div class="article-image">
                                  <img src="../assets/images/DAV.jpg" alt="">
                                </div>
                                <div class="article-desc">
                                  David Hockney: A Bigger Picture<br>
                                  大卫·霍克尼：一幅更大的图片</div>
                              </div>
                              <!-- 缩略图结束 -->
                          </div>
                      </mt-tab-container-item>
                    </mt-tab-container>
                </div>
             <!-- 正体内容结束 -->
          </div>  
        </div>
      <!-- 面板结束 -->
            
      <!-- 底部选项卡开始 -->
      <div >
          <mt-tabbar fixed class="down-tab" v-model="tabbar">
             <mt-tab-item  id="home">
                首页
                <img src="../assets/icon/home-red.png" alt="" slot="icon" v-if="tabbar == 'home'">
                 <img src="../assets/icon/home.png" alt="" slot="icon" v-else>
            </mt-tab-item>
             <mt-tab-item  id="fanyi">
                 翻译
                <img src="../assets/icon/fanyi-red.png" alt="" slot="icon" v-if="tabbar == 'fanyi'">
                <img src="../assets/icon/fanyi.png" alt="" slot="icon" v-else>
            </mt-tab-item>
             <mt-tab-item  id="class">
                 精品课
                <img src="../assets/icon/class-red.png" alt="" slot="icon" v-if="tabbar == 'class'">
                <img src="../assets/icon/class.png" alt="" slot="icon" v-else>     
             </mt-tab-item>
             <mt-tab-item id="me">
                 我的
                 <img src="../assets/icon/me-red.png" alt="" slot="icon" v-if="tabbar == 'me'">
                 <img src="../assets/icon/me.png" alt="" slot="icon" v-else>
             </mt-tab-item>
         </mt-tabbar>
      </div>
      <!-- 底部选项卡结束 -->
    </div>
</template>
<script>
export default {
    data(){
        return{
                active:'1',
                tabbar:'home',
                searchContant:null,

        }
    },
    methods:{
          wordin(){
            if(this.$store.state.a==0){
              console.log(`1111`)
              this.$router.push('/word')
          }
          },
          listenin(){
                if(this.$store.state.a==0){
              console.log(`2222`)
              this.$router.push('/listen')
          }
          },
          readingin(){
                if(this.$store.state.a==0){
              console.log(`3333`)
              this.$router.push('/login')
          }
          }

    },
     
    watch:{
         tabbar(value){
                if(value == 'home'){
                 this.$router.push('/home').catch(e=>{});
               }
               if(value == 'fanyi'){
                this.$router.push('/fanyi').catch(e=>{});
          }
               if(value == 'class'){
                this.$router.push('/class').catch(e=>{});
          }
               if(value == 'me'){
                this.$router.push('/me').catch(e=>{});
          }
      }
        }
    }

</script>
<style scoped>
  /* 文章 */
.article{
    /* height: 40px; */
    padding-bottom: 10px;
    border-bottom: 1px solid green;
    margin:2px
  }
  .article-subject{
    font-size: 16px;
    line-height: 20px;
    font-weight: bold;
  }
  .article-image img{
    width: 112px;
    border-radius: 10px;
  }
  .article-wrapper{
    display: flex;
    align-items: center
  }

.mt-swipe{
  position: relative;
}
.mst{
  position: absolute;
}
.top-bar{
  font-size: 18px;
  color: #fff;
  text-align: center;
}
.header{
  /* color: #959595; */
  background-color: #b83827;
  font-size: 18px;
  width: 24rem;
  height: 50px;
  margin-left: -10px;
  margin-top: -10px;
}
.top-bar .top-tit{
  color:gainsboro;
  padding: 0 10px;
  font-size: 18px
}
.top-show .logo img{
  width: 50px;
  height: 45px;
  float: left;
  margin-top: 10px;
}
/* .space {
  padding: 0 10px;
  color: #959595;
} */

.top-search input{
  width: 220px;
  height: 36px;
  margin-top: 12px;
 border: 1px solid #b83827;
  /* float: left; */
  margin-left: 20px;
  font-size: 15px;
  border-right: none;
}
.top-search button{
  /* background-color: rgba(246, 250, 247, 0.856); */
  border: 1px solid #b83827;
  width: 50px;
  height: 40px;
  /* margin-right:20px; */
  margin-top: 10px;
  border-radius: 0%
}
.top-nav{
  width: 400px;
  /* height: 120px; */
  /* background-color:#b83827; */
  margin-left: 2px;
  position: relative;
  /* margin-top: 25px; */
  /* line-height: 50px */
}
.top-nav .ul li{
  float: left;
  background-color: none;
  color:black;
  font-size: 18px;
  list-style: none;
  padding-left:13px;
  margin-right: 9px
}

.top-nav .item .item-img img{
  width: 30px;
  height: 30px;
}
.item-img{
  margin-top: 30px;
  margin-left:25px
}
.top-nav .ul .li-rl {
  text-decoration: none;
  color: #585555;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
}
/* .top-nav .ul li{
  padding-left:6px 
} */
.top-nav .ul .li-rk{
  color: #585555;
  text-decoration: none;
}
.top-nav .ul .li-rl .span{
  /* margin-left:30px;  */
  padding:0 14px
} 
.down-tab{
    color: #585555
}
.top-nav  .li-rl:hover{
   color: #b83827
}
.mt-swipe{
  width: 27rem;
  height: 200px;
  margin-left:-10px;
} 

</style>