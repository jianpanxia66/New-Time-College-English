    <template>
        <div>
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
            <mt-navbar v-model="composition">
                <mt-tab-item id="1">高分作文展示</mt-tab-item>
                <mt-tab-item id="2">高分作文常用句型</mt-tab-item>
                <mt-tab-item id="3">高分作文模板</mt-tab-item>
        </mt-navbar>
        <!-- 内容 -->
          <mt-tab-container v-model="composition">
        <div>
                <mt-tab-container-item id="1">
                        <div>
                            <p class="tit">Youth</p>
                            <p>
                            
                                <img src="../../assets/images/compositionyi.jpg" alt="">
                            </p>
                        </div>
             </mt-tab-container-item>
                    <mt-tab-container-item id="2" class="item-juxing">
                     <img src="../../assets/images/juxing1.jpg" alt="">
                     <img src="../../assets/images/juxing2.jpg" alt="">
                     <img src="../../assets/images/juxing3.jpg" alt="">
                     <img src="../../assets/images/juxing4.jpg" alt="">
                     <img src="../../assets/images/juxing5.jpg" alt="">           
            </mt-tab-container-item>
                     <mt-tab-container-item id="3" class="item-img">
                         <img src="../../assets/images/composition1.png" alt="">
                     <img src="../../assets/images/composition2.png" alt="">
                     <img src="../../assets/images/composition3.png" alt="">
                     <img src="../../assets/images/composition6.png" alt="">
                     <img src="../../assets/images/composition4.png" alt="">   
                     <img src="../../assets/images/composition5.png" alt="">                     
                     <img src="../../assets/images/composition7.png" alt="">                                                            
             </mt-tab-container-item>
        </div>
          </mt-tab-container>
        </div>
    </template>
    <script>
    export default {
        data(){
            return {
                    composition:'1',
                

            }
        }
    }
    </script>
    <style>
        .tit{
            font-size: 20px;
            color: aqua;
            margin-left: 160px;
        }

        .item-img img{
            width: 415px;

        }
        .item-juxing img{
            width: 420px
        }
    </style>
    