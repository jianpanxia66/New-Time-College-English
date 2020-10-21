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
        <!-- 背单词 -->
        <mt-navbar v-model="select">
            <mt-tab-item id="1">英语三法</mt-tab-item>
            <mt-tab-item id="2">英语语法</mt-tab-item>
            <mt-tab-item id="3">英语日常口语</mt-tab-item>
    </mt-navbar>
        <!-- tab-container -->
        <div>
          <mt-tab-container v-model="select">
            <mt-tab-container-item id="1">
              <div>    
                  <p class="p-titt">
                      <img src="../../assets/images/word.jpg" alt="">
                      <img src="../../assets/images/word2.jpg" alt="">
                      <img src="../../assets/images/word1.jpg" alt="">
                  </p>
           </div>
        </mt-tab-container-item>
             <mt-tab-container-item id="2" style="margin-top:5px">
                 <img src="../../assets/images/yufa1.jpg" alt="">
                 <img src="../../assets/images/yufa2.jpg" alt="">
                 <img src="../../assets/images/yufa3.jpg" alt="">       
                 <img src="../../assets/images/yufa4.jpg" alt="">  
                 <img src="../../assets/images/yufa5.jpg" alt="">                           
                 <img src="../../assets/images/yufa6.jpg" alt="">                           
                 <img src="../../assets/images/yufa7.jpg" alt="">                                                                     
        </mt-tab-container-item>
             <mt-tab-container-item id="3" class="c1">
                        <p>1. I see． 我明白了。</p>
                        <p>2. I quit! 我不干了!</p>
                        <p>3.Hold on． 等一等。</p>
                        <p>4.Not bad． 还不错。</p>
                        <p>5.Not yet． 还没。</p>
                        <p>6.Shut up! 闭嘴!</p>
                        <p>7.Cheer up! 振作起来!</p>
                        <p>8.Have fun! 玩得开心</p>
                        <p>9.Just wonderful! 简直太棒了!</p>
                        <p>10.Are you kidding? 你在开玩笑吧!</p>
                        <p>13.What day is it today? 今天星期几？</p>
                        <p>14. It's Monday today. 今天是星期一。</p>
                        <p>11.Who is the lady in white? 穿白衣服的那位小姐是谁</p>
                        <p>12. Could you introduce me to her? 你能把我介绍给她吗？</p>
                        <p>15.Do you have any brothers or sisters? 你有兄弟或姐妹吗？</p>
                        <p>16. No, I'm a single son. 没有，我是独生子。</p>
                        <p>17.What's the time by your watch? 你的表几点了？</p>
                        <p>18.My watch is two minutes fast. 我的表快了两分钟。</p>
       </mt-tab-container-item>  
  </mt-tab-container>
            </div> 
         </div>
</template>
<script>
export default {
    data(){
         return {
                select:'1',
              

        }
    }
}
</script>
<style>

</style>
