webpackJsonp([0],{0:function(t,e){},"07PK":function(t,e){},"8vdg":function(t,e){},Dq1k:function(t,e){},EGRu:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row",attrs:{id:"translateForm"}},[a("div",{staticClass:"col-md-6 col-md-offset-3"},[a("form",{staticClass:"well form-inline",attrs:{id:"transforms"},on:{submit:t.formSubmit}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.textToTranslate,expression:"textToTranslate"}],staticClass:"form-control",attrs:{type:"text",placeholder:"输入需要翻译的内容"},domProps:{value:t.textToTranslate},on:{input:function(e){e.target.composing||(t.textToTranslate=e.target.value)}}}),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.language,expression:"language"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.language=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"en"}},[t._v("English")]),t._v(" "),a("option",{attrs:{value:"ru"}},[t._v("Russian")]),t._v(" "),a("option",{attrs:{value:"ko"}},[t._v("Korean")]),t._v(" "),a("option",{attrs:{value:"ja"}},[t._v("Janpenese")]),t._v(" "),a("option",{attrs:{value:"ht"}},[t._v("Haitian (Creole)")])]),t._v(" "),a("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"翻译"}})])])])},staticRenderFns:[]};var r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"translateOutput"}},[e("h1",[this._v(this._s(this.translationText))])])},staticRenderFns:[]};var o={name:"App",created:function(){this.$http.defaults.baseURL="https://openapi.youdao.com/api"},data:function(){return{q:"",from:"",to:"",appKey:"5b3d599145e982b3",salt:2,secret_key:"FcDvrAOkSjC3FqNF8EUBaVBysFue1NfA",translationText:[]}},components:{TranslateForm:a("VU/8")({name:"translateFrom",data:function(){return{textToTranslate:"",language:""}},methods:{formSubmit:function(t){this.$emit("formDelivery",this.textToTranslate,this.language),t.preventDefault()}},created:function(){this.language="en"}},s,!1,function(t){a("8vdg")},null,null).exports,TranslateOutput:a("VU/8")({name:"translateOutput",props:["translationText"]},r,!1,function(t){a("EGRu")},null,null).exports},methods:{translateText:function(t,e){var a=this;this.q=t,this.to=e,this.$http.get("/youdao/api/api?q="+this.q+"&appKey="+this.appKey+"&salt="+this.salt+"&from="+this.from+"&to="+this.to+"&sign="+this.$md5(this.appKey+this.q+this.salt+this.secret_key)).then(function(t){null!=t.body.basic?(a.translationtext=[],a.translationtext=t.body.basic.explains,a.translationText.splice(0,0,t.body.translation[0])):(a.translationText=[],a.translationText.push(t.body.translation[0]))})}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("h1",[t._v("在线翻译")]),t._v(" "),a("h5",{staticClass:"text-muted"},[t._v("简单 / 易用  / 便捷")]),t._v(" "),a("translateForm",{on:{formDelivery:t.translateText}}),t._v(" "),a("translateOutput",{domProps:{textContent:t._s(t.translationText)}})],1)},staticRenderFns:[]};var l=a("VU/8")(o,i,!1,function(t){a("SivT")},null,null).exports,u=a("/ocq"),c=a("gORT");n.a.use(u.a);var p=new u.a({routes:[{path:"/",name:"HelloWorld",component:c.default}]}),v=a("8+8L"),d=a("NC6I"),f=a.n(d);n.a.use(v.a),n.a.prototype.$md5=f.a,n.a.config.productionTip=!1,new n.a({el:"#app",router:p,components:{App:l},template:"<App/>"})},SivT:function(t,e){},XS5n:function(t,e,a){"use strict";var n={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};e.a=n},gORT:function(t,e,a){"use strict";var n=a("07PK"),s=a.n(n),r=a("XS5n");var o=function(t){a("Dq1k")},i=a("VU/8")(s.a,r.a,!1,o,"data-v-63a63f57",null);e.default=i.exports}},["NHnr"]);
//# sourceMappingURL=app.e0dc5dfe5b79607a240f.js.map