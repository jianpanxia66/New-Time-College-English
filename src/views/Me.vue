<template>
    <div>
        <mt-header></mt-header>
        <!-- 底部 -->
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
    </div>
</template>
<script>
export default {
    data(){
        return{
               
                  tabbar:'home',
            
        }
    },
    watch:{
         tabbar(value){
                if(value == 'home'){
                 this.$router.push('/Cause').catch(e=>{});
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