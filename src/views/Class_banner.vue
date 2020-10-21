<template>

	<div id="commodity_right_enjoy_two">
        <div class="commodity_righ_content clr">
            <div class="commodity_righ_content_gpods commodity_right_right_enjoy_two_div" v-for="item in goodsimg" :key="item.id">
                <div class="goods_img"><img :src="item.src" alt=""></div>
                <div class="goods_name"><a href="#">{{item.goodsName}}</a></div>
                <div class="tx fw jifen">{{item.jifen}}</div>
            </div>
        </div>
	</div>
</template> 
<script>
export default {
   
    data(){
        return{
           goodsimg:[
               {src:require('../assets/class/image.jpg'),goodsName:'三天带你摆脱哑巴英语',jfen:18881,},
               {src:require('../assets/class/image (1).png'),goodsName:'如何像美国人一样流利说英语',jfen:18882},
               {src:require('../assets/class/image (2).png'),goodsName:'刷抖音般上瘾的全能英语蜕变课',jfen:18883},
               {src:require('../assets/class/image.png'),goodsName:'看漫画速拓英文10000词',jfen:18884},
               {src:require('../assets/class/image (3).png'),goodsName:'5天英语全能挑战',jfen:18885},
               {src:require('../assets/class/image (4).jpg'),goodsName:'零基础学英语',jfen:18886},
               {src:require('../assets/class/image (5).jpg'),goodsName:'口语教练',jfen:18887},
               {src:require('../assets/class/image (6).jpg'),goodsName:'三天速学英语',jfen:18888}

           ]
        }
    },

}
</script>
