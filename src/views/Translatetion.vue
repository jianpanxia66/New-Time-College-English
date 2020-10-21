<template>
  <div id="app">
  	  <h1>在线翻译</h1>
  	  <h5 class="text-muted">简单 / 易用  / 便捷</h5>
      <translateForm v-on:formDelivery="translateText"></translateForm>
      <translateOutput v-text="translationText"></translateOutput>
  </div>
</template>
<script>
	
	import TranslateForm from '../components/TranslateForm'
  import TranslateOutput from '../components/TranslateOutput'
  import md5 from 'md5'
	
export default {
  name: 'App',
  created:function(){
    this.$http.defaults.baseURL = 'https://openapi.youdao.com/api'
  },
  data:function(){
  	// return{
  	// 	translationText:""
    // }
    return{
      q:"",                                                  //需要翻译的文本
      from:'',                                               //源语言
      to:'',                                                 //目标语言
      appKey:'5b3d599145e982b3',                                       //应用 ID
      salt:2,                                                //随机数（自己随便写个数）
      secret_key:'FcDvrAOkSjC3FqNF8EUBaVBysFue1NfA',                                      //密钥      
      translationText:[]                             //有道返回的翻译结果
    }
  },
  components:{
  	TranslateForm,TranslateOutput
  },
  methods:{
  	translateText:function(text,language){
  		//alert(text);
  		//this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180802T072252Z.7fb2f98c9da21370.977ca030bf49a05272c581c24562ffbc22ec54ba&lang='+language+'&text='+text).then((response)=>{
  			//console.log(response.body.text[0]);
  			//this.translationText=response.body.text[0];
      //})
      this.q=text;
      this.to=language;
      //利用组件vue-resource做 http请求，最后的 sign 要做MD5处理 这里的地址做了跨域处理
      this.$http.get('/youdao/api/api?q='+this.q+'&appKey='+this.appKey+'&salt='+this.salt+'&from='+this.from+'&to='+this.to+'&sign='+this.$md5(this.appKey+this.q+this.salt+this.secret_key))
        .then((data) =>{                            //data是有道API返回的结果对象
        if(data.body.basic!=null){                //下面看不懂可以试着输出 data 对象看一下就懂了
        this.translationtext=[];
        this.translationtext=data.body.basic.explains;                      //词汇的基本释义（输入正确时不一定有结果）
        this.translationText.splice(0,0,data.body.translation[0]);          //翻译结果（输入正确时必有结果）
        }else{
          this.translationText=[];
          this.translationText.push(data.body.translation[0]);
        }
      })
  	}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
