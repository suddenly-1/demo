webpackJsonp([1],{"+Kib":function(t,e){},"3XfU":function(t,e){},"4ZmG":function(t,e){},"76Xz":function(t,e,s){t.exports=s.p+"static/img/error.d44fdc0.png"},A0Hl:function(t,e){},Drwf:function(t,e){},Ggiq:function(t,e){},JRsF:function(t,e,s){t.exports=s.p+"static/img/loading.5c9b352.gif"},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s("briU");var i=s("xd7I"),n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"g-tabber"},[s("router-link",{staticClass:"g-tabber-item",attrs:{to:"/home"}},[s("i",{staticClass:"iconfont iconshouye"}),t._v(" "),s("span",[t._v("首页")])]),t._v(" "),s("router-link",{staticClass:"g-tabber-item",attrs:{to:"/category"}},[s("i",{staticClass:"iconfont iconleimupinleifenleileibie"}),t._v(" "),s("span",{staticClass:"tabber-tit"},[t._v("分类")])]),t._v(" "),s("router-link",{staticClass:"g-tabber-item",attrs:{to:"/cart"}},[s("i",{staticClass:"iconfont icongouwuche1"}),t._v(" "),s("span",{staticClass:"tabber-tit"},[t._v("购物车")])]),t._v(" "),s("router-link",{staticClass:"g-tabber-item",attrs:{to:"/personal"}},[s("i",{staticClass:"iconfont icongerenzhongxin"}),t._v(" "),s("span",{staticClass:"tabber-tit"},[t._v("我的")])])],1)},staticRenderFns:[]};var a={name:"App",components:{CTabber:s("C7Lr")({name:""},n,!1,function(t){s("aIgT")},"data-v-70d508e2",null).exports}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"g-container",attrs:{id:"app"}},[e("div",{staticClass:"g-view-container"},[e("keep-alive",[e("router-view")],1)],1)])},staticRenderFns:[]};var o=s("C7Lr")(a,r,!1,function(t){s("3XfU")},null,null).exports,c=s("7LQH"),l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"baseHeader"},[e("div",{staticClass:"baseHeader-left"},[this._t("left")],2),this._v(" "),e("div",{staticClass:"baseHeader-center"},[this._t("center")],2),this._v(" "),e("div",{staticClass:"baseHeader-right"},[this._t("right")],2)])},staticRenderFns:[]};var u=s("C7Lr")({name:"BaseHeader"},l,!1,function(t){s("P5v9")},"data-v-4741a82f",null).exports,d={name:"HomeHeader",components:{BaseHeader:u},methods:{goToSearch:function(){this.$router.push("/search")}}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"homeHeader"},[e("base-header",[e("div",{attrs:{slot:"left"},slot:"left"},[e("i",{staticClass:"iconfont iconsaoyisao"})]),this._v(" "),e("div",{staticClass:"slot-center",attrs:{slot:"center"},on:{click:this.goToSearch},slot:"center"},[e("i",{staticClass:"iconfont iconsousuo"}),this._v(" "),e("div",{staticClass:"center-text"},[this._v("好货5折起")])]),this._v(" "),e("div",{attrs:{slot:"right"},slot:"right"},[e("i",{staticClass:"iconfont iconxiaoxi"})])])],1)},staticRenderFns:[]};var p=s("C7Lr")(d,m,!1,function(t){s("pg3m")},"data-v-00c21096",null).exports,f={name:"BaseLoading",props:{text:{type:String,default:"加载中···"}},data:function(){return{loadingText:this.text}},watch:{text:function(t){this.loadingText=t}},methods:{setText:function(t){this.loadingText=t}}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"baseLoading"},[e("img",{staticClass:"baseLoading-img",attrs:{src:s("WAac")}}),this._v(" "),e("p",{staticClass:"baseLoading-text"},[this._v(this._s(this.loadingText))])])},staticRenderFns:[]};var v=s("C7Lr")(f,h,!1,function(t){s("gzut")},"data-v-3879944f",null).exports,g={name:"slide",props:{direction:{type:String,default:"horizontal",validator:function(t){return["horizontal","vertical"].indexOf(t)>-1}},interval:{type:Number,default:3e3,validator:function(t){return t>0}},loop:{type:Boolean,default:!0},pagination:{type:Boolean,default:!0},slides:{type:Array,default:function(){return[]}}},data:function(){return{swiperOptions:{},keySwiper:Math.random()}},watch:{slides:function(t){0!==t.length&&(this.swiperOptions.loop=!(t.length<=1)&&this.loop,this.keySwiper=Math.random())}},methods:{init:function(){this.swiperOptions={watchOverflow:!0,slidesPerView:1,direction:this.direction,loop:!(this.slides.length<=1)&&this.loop,autoplay:!!this.interval&&{delay:this.interval,disableOnInteraction:!1},pagination:{el:this.pagination?".swiper-pagination":null}}}},created:function(){this.init()}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("swiper",{key:this.keySwiper,ref:"swiper",attrs:{options:this.swiperOptions}},[this._t("default"),this._v(" "),this.pagination?e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}):this._e()],2)},staticRenderFns:[]};var A=s("C7Lr")(g,b,!1,function(t){s("u1dL")},"data-v-76b1d816",null).exports,_=s("rVsN"),w=s.n(_),C=[{id:"000",picUrl:"//m.360buyimg.com/mobilecms/s700x280_jfs/t1/29602/28/6448/147417/5c5018e1Ed6bdfbfe/44777b12d731ad4b.jpg!cr_1125x445_0_171!q70.jpg.dpg"},{id:"001",picUrl:"//m.360buyimg.com/mobilecms/s700x280_jfs/t1/62209/31/8290/134650/5d64d205Ea6e6c062/1be4546f8299369a.jpg!cr_1125x445_0_171!q70.jpg.dpg"},{id:"002",picUrl:"//m.360buyimg.com/mobilecms/s700x280_jfs/t1/58165/17/9614/133139/5d6f6f2eE2a81db03/19a2b51610591d3c.jpg!cr_1125x445_0_171!q70.jpg.dpg"},{id:"003",picUrl:"//m.360buyimg.com/mobilecms/s700x280_jfs/t1/38364/38/13953/98600/5d51359eE5caf4a1a/4a3dc7e660995817.jpg!cr_1125x445_0_171!q70.jpg.dpg"},{id:"004",picUrl:"//m.360buyimg.com/mobilecms/s700x280_jfs/t1/81007/22/9267/147869/5d70835aE0c18c9f5/e8f199dfd060070c.jpg!cr_1125x445_0_171!q70.jpg.dpg"},{id:"005",picUrl:"//m.360buyimg.com/mobilecms/s700x280_jfs/t1/46607/3/7121/145056/5d4b7940Eb5370d55/f8a21652fdfe2bdb.jpg!cr_1125x445_0_171!q70.jpg.dpg"},{id:"006",picUrl:"//m.360buyimg.com/mobilecms/s700x280_jfs/t1/82291/32/9061/142302/5d6cc0cbE56c619e2/ff5f531b487e900a.jpg!cr_1125x445_0_171!q70.jpg.dpg"}],y=function(t){return new w.a(function(e){if(t){var s=t,i=[s[Math.floor(Math.random()*s.length)]];0===(s=function(t){for(var e=t.length,s=e,i=void 0;s--;)if(s!==(i=Math.floor(Math.random()*e))){var n=[t[i],t[s]];t[s]=n[0],t[i]=n[1]}return t}(s.filter(function(){return Math.random()>=.5}))).length&&e(i),e(s)}throw new Error("获取错误！")}).catch(function(t){if(t)return console.log(t),[{picUrl:s("NeAH")}]}).then(function(t){return new w.a(function(e){setTimeout(function(){e(t)},400)})})},x=[{id:"001",picUrl:"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png.webp",name:"超市"},{id:"002",picUrl:"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png.webp",name:"数码电器"},{id:"003",picUrl:"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png.webp",name:"服饰"},{id:"004",picUrl:"//m.360buyimg.com/mobilecms/s120x120_jfs/t17725/156/1767366877/17404/f45d418b/5ad87bf0N66c5db7c.png.webp",name:"生鲜"},{id:"005",picUrl:"//m.360buyimg.com/mobilecms/s120x120_jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png.webp",name:"充值缴费"},{id:"006",picUrl:"//m.360buyimg.com/mobilecms/s120x120_jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png.webp",name:"9.9元拼"},{id:"007",picUrl:"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/7068/29/8987/5605/5c120da2Ecae1cc3a/016033c7ef3e0c6c.png.webp",name:"领劵"},{id:"008",picUrl:"//m.360buyimg.com/mobilecms/s120x120_jfs/t16828/63/2653634926/5662/d18f6fa1/5b03b779N5c0b196f.png.webp",name:"赚钱"},{id:"009",picUrl:"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/22262/9/1470/4527/5c120cd0E5d3c6c66/4792ec307a853e9f.png.webp",name:"会员"},{id:"010",picUrl:"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/14555/23/1446/4195/5c120e71E947f3ca1/cdbad904f61e1fb7.png.webp",name:"全球购"},{id:"011",picUrl:"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/19745/21/1415/4886/5c120cbbEe58af0bf/4d19bf58d42fc9c4.png.webp",name:"美妆馆"},{id:"012",picUrl:"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/27748/22/1419/4913/5c120d0eEa52ea62f/3c2b78a40edc97b2.png.webp",name:"旅行"},{id:"013",picUrl:"//m.360buyimg.com/mobilecms/s120x120_jfs/t5842/205/151189300/13247/a6de2d/591d94edNc42fb94d.png.webp",name:"物流查询"}],k={name:"HomeBanner",components:{BaseSlide:A,BaseLoading:v},data:function(){return{slides:[]}},created:function(){this.getSliders()},methods:{update:function(){return this.getSliders()},getSliders:function(){var t=this;return y(C).then(function(e){t.slides=e})}}},E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"homeBanner"},[this.slides.length?e("base-slide",{attrs:{slides:this.slides}},this._l(this.slides,function(t,s){return e("swiper-slide",{key:s},[e("img",{staticClass:"img",attrs:{src:t.picUrl}})])}),1):e("div",{staticClass:"loading"},[e("base-loading",{staticClass:"baseLoading"})],1)],1)},staticRenderFns:[]};var T=s("C7Lr")(k,E,!1,function(t){s("xkky")},"data-v-61ffc192",null).exports,$={name:"BaseNavbar",components:{BaseLoading:v},data:function(){return{nav:[],swiperOptions:{pagination:{el:".swiper-pagination"}}}},computed:{pages:function(){var t=[];return this.nav.forEach(function(e,s){var i=Math.floor(s/10);t[i]||(t[i]=[]),t[i].push(e)}),t}},methods:{gitNavbarData:function(){var t,e=this;return(t=x,new w.a(function(e){throw t&&e(t),new Error("获取错误！")}).catch(function(t){t&&console.log(t)}).then(function(t){return new w.a(function(e){setTimeout(function(){e(t)},400)})})).then(function(t){e.nav=t})}},created:function(){this.gitNavbarData()}},L={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"navbar"},[t.pages.length?s("swiper",{attrs:{options:t.swiperOptions}},[t._l(t.pages,function(e,i){return s("swiper-slide",{key:i},[s("ul",{staticClass:"navbar-list"},t._l(e,function(e){return s("li",{key:e.id,staticClass:"navbar-item"},[s("img",{staticClass:"navbar-img",attrs:{src:e.picUrl}}),t._v(" "),s("p",{staticClass:"navbar-name"},[t._v(t._s(e.name))])])}),0)])}),t._v(" "),s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):s("div",{staticClass:"loading"},[s("base-loading",{staticClass:"baseLoading"})],1)],1)},staticRenderFns:[]};var U=s("C7Lr")($,L,!1,function(t){s("A0Hl")},"data-v-cc8762ec",null).exports,H=s("Muz9"),j=s.n(H),q=s("6yg2"),B=s.n(q),D=function(t,e,s){return t+=(t.indexOf("?")<0?"?":"&")+function(t){var e=[];for(var s in t)e.push([s,t[s]]);return e.map(function(t){return t.join("=")}).join("&")}(e),new w.a(function(e,i){B()(t,s,function(t,s){t?i(t):e(s)})})},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return D("https://ju.taobao.com/json/tg/ajaxGetItemsV2.json",{page:t,psize:e,type:0,frontCatId:""},{param:"callback",timeout:1e4}).then(function(t){if("200"===t.code)return t;throw new Error("获取错误！")}).catch(function(t){t&&console.log(t)}).then(function(t){return new w.a(function(e){setTimeout(function(){e(t)},200)})})},S={name:"HomeRecommend",components:{BaseLoading:v},data:function(){return{recommends:[],currentPage:1,totalPage:5,recomendEnd:!1}},methods:{update:function(){return this.getRecommends()},getRecommends:function(){var t=this;return this.currentPage>this.totalPage?R(this.currentPage).then(function(e){t.recomendEnd=!0,t.$emit("recommends-end",t.recommends)}):R(this.currentPage).then(function(e){e&&(t.currentPage++,t.recommends=t.recommends.concat(e.itemList),t.$emit("recommends",t.recommends))})}},created:function(){this.getRecommends()}},I={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"recommend"},[t._m(0),t._v(" "),t.recommends.length?s("ul",{staticClass:"recommend-list"},t._l(t.recommends,function(e,i){return s("li",{key:i,staticClass:"recommend-item"},[s("div",{staticClass:"recommend-item-img"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.baseinfo.picUrlNew,expression:"item.baseinfo.picUrlNew"}],staticClass:"img"})]),t._v(" "),s("p",{staticClass:"recommend-item-text"},[t._v(t._s(e.name.shortName))]),t._v(" "),s("p",{staticClass:"recommend-item-formerPrice"},[t._v("￥"+t._s(e.price.origPrice))]),t._v(" "),s("div",{staticClass:"recommend-item-info"},[s("span",{staticClass:"price"},[t._v("￥"),s("span",{staticClass:"price-active"},[t._v(t._s(e.price.actPrice))])]),t._v(" "),s("span",{staticClass:"number"},[t._v(t._s(e.remind.soldCount)+"件已售")])])])}),0):s("div",{staticClass:"loading"},[s("base-loading")],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.recomendEnd,expression:"recomendEnd"}],staticClass:"recomend-end"},[t._v("没有更多内容！")])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"recommend-title"},[e("h4",{staticClass:"title"},[this._v("热门推荐")])])}]};var N=s("C7Lr")(S,I,!1,function(t){s("nLZ8")},"data-v-7271b5ce",null).exports,Q={name:"BaseScroll",components:{BaseLoading:v},props:{scrollbar:{type:Boolean,default:!0},pullDown:{type:Boolean,default:!0},pullUp:{type:Boolean,default:!0},recommendsData:{type:[Object,Array]}},data:function(){return{swiperOptions:{direction:"vertical",slidesPerView:"auto",freeMode:!0,setWrapperSize:!0,scrollbar:{el:this.scrollbar?".swiper-scrollbar":null,hide:!0},on:{sliderMove:this.scroll,touchEnd:this.touchEnd},observer:!0,observeParents:!0},loadingText:"再拉，再拉就刷给你看",loadingTextUp:"再拉，再拉就刷给你看",pullDownActive:!1}},watch:{recommendsData:function(){this.update()}},methods:{scrollToTop:function(){this.$refs.swiper&&this.$refs.swiper.swiper.slideTo(0,300,!1)},update:function(){var t=this;this.$nextTick(function(){t.$refs.swiper&&t.$refs.swiper.swiper.update(),t.$refs.swiper.swiper.scrollbar.updateSize()})},scroll:function(){var t=this.$refs.swiper.swiper;if(!this.pullDownActive)if(t.translate>0){if(!this.pullDown)return;t.translate>80?this.$refs.loading.setText("够了啦，松开人家嘛"):this.$refs.loading.setText("再拉，再拉就刷给你看")}else if(t.isEnd){if(!this.pullUp)return;Math.abs(t.translate)+t.height-50>parseInt(t.$wrapperEl.css("height"))?this.$refs.loadingUp.setText("够了啦，松开人家嘛"):this.$refs.loadingUp.setText("再拉，再拉就刷给你看")}},touchEnd:function(){if(this.$emit("scroll-end",this.$refs.swiper.swiper.translate,this.$refs.swiper.swiper.height),!this.pullDownActive){var t=this.$refs.swiper.swiper;if(t.translate>=80){if(!this.pullDown)return;this.pullDownActive=!0,t.allowTouchMove=!1,t.setTransition(t.params.speed),t.setTranslate(80),t.params.virtualTranslate=!0,this.$refs.loading.setText("刷呀刷呀，好累啊，喵^ω^"),this.$emit("pull-down",this.pullDownEnd)}else if(t.isEnd){var e=parseInt(t.$wrapperEl.css("height"));if(Math.abs(t.translate)+t.height-50>e){if(!this.pullUp)return;this.pullDownActive=!0,t.allowTouchMove=!1,t.setTransition(t.params.speed),t.setTranslate(-(e+50-t.height)),t.params.virtualTranslate=!0,this.$refs.loading.setText("刷呀刷呀，好累啊，喵^ω^"),this.$emit("pull-up",this.pullUpEnd)}}}},pullDownEnd:function(){this.pullDownActive=!1;var t=this.$refs.swiper.swiper;t.params.virtualTranslate=!1,this.$refs.loading.setText("刷新完了哦"),t.allowTouchMove=!0,t.setTransition(t.params.speed),t.setTranslate(0)},pullUpEnd:function(){this.pullDownActive=!1;var t=this.$refs.swiper.swiper;t.params.virtualTranslate=!1,this.$refs.loading.setText("刷新完了哦"),t.allowTouchMove=!0,t.setTransition(t.params.speed)}}},F={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"baseScroll"},[s("swiper",{ref:"swiper",attrs:{options:t.swiperOptions}},[t.pullDown?s("div",{staticClass:"scroll-pull-down"},[s("base-loading",{ref:"loading",attrs:{text:t.loadingText}})],1):t._e(),t._v(" "),s("swiper-slide",[t._t("default")],2),t._v(" "),t.pullUp?s("div",{staticClass:"scroll-pull-up"},[s("base-loading",{ref:"loadingUp",attrs:{text:t.loadingTextUp}})],1):t._e(),t._v(" "),t.scrollbar?s("div",{staticClass:"swiper-scrollbar",attrs:{slot:"scrollbar"},slot:"scrollbar"}):t._e()],1)],1)},staticRenderFns:[]};var O=s("C7Lr")(Q,F,!1,function(t){s("OqP1")},"data-v-037a9133",null).exports,P={name:"BaseBacktop",props:{visible:{type:Boolean,default:!1}},methods:{backToTop:function(){this.$emit("backtop")}}},z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"backtop"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.visible,expression:"visible"}],staticClass:"backtop",on:{click:this.backToTop}},[e("i",{staticClass:"iconfont iconfanhuidingbu"})])])},staticRenderFns:[]};var M={name:"home",components:{HomeHeader:p,HomeBanner:T,HomeNavbar:U,HomeRecommend:N,BaseScroll:O,BaseBacktop:s("C7Lr")(P,z,!1,function(t){s("nxhA")},"data-v-194bd4e3",null).exports},data:function(){return{recommends:[],visible:!1,pullUp:!0}},methods:{pullDownUpdate:function(t){this.$refs.updateBanner.update().then(t)},updateRecommends:function(t){this.recommends=t},recommendsEnd:function(){this.pullUp=!1},pullUpUpdate:function(t){this.$refs.updateRecommend.update().then(t)},backtop:function(){this.$refs.scroll.scrollToTop(),this.visible=!1},scrollEnd:function(t,e){this.visible=t<0&&-t>e}}},G={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("home-header"),t._v(" "),s("base-scroll",{ref:"scroll",attrs:{recommendsData:t.recommends,pullUp:t.pullUp},on:{"scroll-end":t.scrollEnd,"pull-down":t.pullDownUpdate,"pull-up":t.pullUpUpdate}},[s("home-banner",{ref:"updateBanner"}),t._v(" "),s("home-navbar"),t._v(" "),s("home-recommend",{ref:"updateRecommend",on:{recommends:t.updateRecommends,"recommends-end":t.recommendsEnd}})],1),t._v(" "),s("base-backtop",{attrs:{visible:t.visible},on:{backtop:t.backtop}})],1)},staticRenderFns:[]};var J=s("C7Lr")(M,G,!1,function(t){s("kPE1")},"data-v-070bc96e",null).exports,Y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"particulars"},[e("div",{staticClass:"particulars-icon",on:{click:this.goBack}},[e("i",{staticClass:"iconfont iconfanhui"})])])},staticRenderFns:[]};var V=s("C7Lr")({name:"particulars",methods:{goBack:function(){this.$router.back()}}},Y,!1,function(t){s("hs4L")},"data-v-3c8f86e0",null).exports,K={name:"SearchHeader",components:{BaseHeader:u},data:function(){return{query:""}},watch:{query:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,s=null;return function(){for(var i=this,n=arguments.length,a=Array(n),r=0;r<n;r++)a[r]=arguments[r];s&&clearTimeout(s),s=setTimeout(function(){t.apply(i,a)},e)}}(function(){this.$emit("query",this.query)})},methods:{goBack:function(){this.$router.back()},clearQuery:function(){this.query=""}}},W={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"searchHeader"},[s("base-header",[s("div",{attrs:{slot:"left"},slot:"left"},[s("i",{staticClass:"iconfont iconfanhui",on:{click:t.goBack}})]),t._v(" "),s("div",{staticClass:"search-center",attrs:{slot:"center"},slot:"center"},[s("i",{staticClass:"iconfont iconsousuo"}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"search-input",attrs:{type:"text",placeholder:"好货5折起"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),t._v(" "),t.query?s("i",{staticClass:"iconfont iconguanbi",on:{click:t.clearQuery}}):t._e()])])],1)},staticRenderFns:[]};var Z=s("C7Lr")(K,W,!1,function(t){s("mDDu")},"data-v-9ee1ab92",null).exports,X=s("3cXf"),tt=s.n(X),et=window.localStorage,st=function(t,e){void 0!==e&&et.setItem(t,function(t){return tt()(t)}(e))},it=function(t,e){var s=function(t){if("string"!=typeof t)return;try{return JSON.parse(t)}catch(e){return t||void 0}}(et.getItem(t));return void 0===s?e:s},nt=function(t){et.removeItem(t)};var at={methods:{$_search_historyStorage:function(t){var e=it("search-history-keyword-key",[]);0!==e.length&&(e=e.filter(function(e){return e!==t})),e.unshift(t),st("search-history-keyword-key",e)}}},rt={name:"SearchHot",components:{BaseLoading:v},mixins:[at],data:function(){return{hots:[]}},methods:{getHotData:function(){var t=this;return j.a.get("https://www.imooc.com/api/search/hot",{timeout:1e4}).then(function(t){if(t)return t.data.hotKeyWord;throw new Error("获取错误！")}).catch(function(t){t&&console.log(t)}).then(function(t){return new w.a(function(e){setTimeout(function(){e(t)},200)})}).then(function(e){e&&(t.hots=e.owner)})}},created:function(){this.getHotData()}},ot={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hot"},[s("h4",{staticClass:"hot-title"},[t._v("热门搜索")]),t._v(" "),t.hots.length?s("ul",{staticClass:"hot-list"},t._l(t.hots,function(e,i){return s("li",{key:i,staticClass:"hot-item",on:{click:function(s){return t.$_search_historyStorage(e.hotWord)}}},[s("router-link",{staticClass:"hot-item-link",attrs:{to:"particulars"}},[s("span",{staticClass:"hot-item-name"},[t._v(t._s(e.hotWord))])])],1)}),0):s("div",{staticClass:"hot-loading"},[s("base-loading")],1)])},staticRenderFns:[]};var ct=s("C7Lr")(rt,ot,!1,function(t){s("+Kib")},"data-v-148831c8",null).exports,lt={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"confirm"},[s("div",{staticClass:"confirm-wrapper"},[s("div",{staticClass:"confirm-wrapper-text"},[t._v("确认清空吗？")]),t._v(" "),s("div",{staticClass:"confirm-wrapper-select"},[s("div",{staticClass:"confirm-wrapper-select-no",on:{click:t.no}},[t._v("取消")]),t._v(" "),s("div",{staticClass:"confirm-wrapper-select-ok",on:{click:t.ok}},[t._v("确定")])])])])},staticRenderFns:[]};var ut={name:"SearchHistory",mixins:[at],components:{BaseConfirm:s("C7Lr")({name:"baseConfirm",data:function(){return{visible:!1}},methods:{show:function(){this.visible=!0},no:function(){this.visible=!1},ok:function(){this.$emit("confirm-ok"),this.visible=!1}}},lt,!1,function(t){s("4ZmG")},"data-v-8ce343e0",null).exports},data:function(){return{historys:[]}},methods:{getStorageHistory:function(){this.historys=it("search-history-keyword-key")},clearHistory:function(){this.$refs.confirm.show()},confirmOk:function(){nt("search-history-keyword-key"),this.getStorageHistory()}},created:function(){this.getStorageHistory()}},dt={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"history"},[s("div",{staticClass:"history-info"},[s("h4",{staticClass:"history-title"},[t._v("历史搜索")]),t._v(" "),s("i",{staticClass:"iconfont iconlajitong1",on:{click:t.clearHistory}})]),t._v(" "),s("transition-group",{staticClass:"history-list",attrs:{tag:"ul",name:"historyItem"}},t._l(t.historys,function(e,i){return i<10?s("li",{key:e,staticClass:"history-item",on:{click:function(s){return t.$_search_historyStorage(e)}}},[s("router-link",{attrs:{to:"particulars"}},[s("span",{staticClass:"history-item-name"},[t._v(t._s(e))])])],1):t._e()}),0),t._v(" "),s("base-confirm",{ref:"confirm",on:{"confirm-ok":t.confirmOk}})],1)},staticRenderFns:[]};var mt=s("C7Lr")(ut,dt,!1,function(t){s("ThT+")},"data-v-1eddfdf0",null).exports,pt={name:"SearchResult",components:{BaseLoading:v},props:{query:{type:String}},mixins:[at],data:function(){return{results:[],loading:!1}},watch:{query:function(t){this.getResultData(t)}},methods:{getResultData:function(t){var e=this;if(t)return this.loading=!0,function(t){return D("https://suggest.taobao.com/sug",{q:t,code:"utf-8",area:"c2c",nick:"",sid:null},{param:"callback",timeout:1e4}).then(function(t){if(t.result)return t.result;throw new Error("获取错误！")}).catch(function(t){t&&console.log(t)}).then(function(t){return new w.a(function(e){setTimeout(function(){e(t)},200)})})}(t).then(function(t){e.results=t,e.loading=!1})}}},ft={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search-result"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"loading"},[s("base-loading")],1),t._v(" "),s("ul",{directives:[{name:"show",rawName:"v-show",value:!t.loading&&t.results.length,expression:"!loading && results.length"}],staticClass:"result-list"},t._l(t.results,function(e,i){return s("li",{key:i,staticClass:"result-item",on:{click:function(s){return t.$_search_historyStorage(e[0])}}},[s("router-link",{attrs:{to:"particulars"}},[s("span",{staticClass:"result-item-name"},[t._v(t._s(e[0]))])])],1)}),0),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading&&!t.results.length,expression:"!loading && !results.length"}],staticClass:"no-result"},[t._v("没有搜索结果")])])},staticRenderFns:[]};var ht={name:"search",components:{SearchHeader:Z,SearchHot:ct,SearchHistory:mt,SearchResult:s("C7Lr")(pt,ft,!1,function(t){s("Ggiq")},"data-v-67b5f4c8",null).exports},data:function(){return{query:"",hide:!1}},methods:{getQuery:function(t){this.query=t},getStorageHistoryData:function(){return this.$refs.history.getStorageHistory()},updataQuery:function(){return this.$refs.header.clearQuery()}},activated:function(){this.getStorageHistoryData(),this.updataQuery(),this.query=""}},vt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"search"},[e("div",{staticClass:"header"},[e("search-header",{ref:"header",on:{query:this.getQuery}})],1),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!this.query,expression:"!query"}],staticClass:"g-content-container"},[e("search-hot"),this._v(" "),e("div",{staticClass:"history-content"},[e("search-history",{ref:"history"})],1)],1),this._v(" "),e("search-result",{directives:[{name:"show",rawName:"v-show",value:this.query,expression:"query"}],attrs:{query:this.query}})],1)},staticRenderFns:[]};var gt=s("C7Lr")(ht,vt,!1,function(t){s("QPLy")},"data-v-2558fa2a",null).exports;i.a.use(c.a);var bt=new c.a({routes:[{name:"home",path:"/home",component:J},{name:"particulars",path:"/particulars",component:V},{name:"search",path:"/search",component:gt},{path:"*",redirect:"home"}]}),At=s("iDdd"),_t=s.n(At),wt=s("DMPO"),Ct=s.n(wt),yt=s("6uK8");s("Drwf"),s("d4tr");_t.a.attach(document.body),i.a.use(Ct.a),i.a.config.productionTip=!1,i.a.use(yt.a,{preLoad:1.1,error:s("76Xz"),loading:s("JRsF"),attempt:3}),new i.a({el:"#app",router:bt,components:{App:o},template:"<App/>"})},NeAH:function(t,e,s){t.exports=s.p+"static/img/404.ed7cf35.png"},OqP1:function(t,e){},P5v9:function(t,e){},QPLy:function(t,e){},"ThT+":function(t,e){},WAac:function(t,e){t.exports="data:image/gif;base64,R0lGODlhEAALAPQAAP///wAAANra2tDQ0Orq6gYGBgAAAC4uLoKCgmBgYLq6uiIiIkpKSoqKimRkZL6+viYmJgQEBE5OTubm5tjY2PT09Dg4ONzc3PLy8ra2tqCgoMrKyu7u7gAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCwAAACwAAAAAEAALAAAFLSAgjmRpnqSgCuLKAq5AEIM4zDVw03ve27ifDgfkEYe04kDIDC5zrtYKRa2WQgAh+QQJCwAAACwAAAAAEAALAAAFJGBhGAVgnqhpHIeRvsDawqns0qeN5+y967tYLyicBYE7EYkYAgAh+QQJCwAAACwAAAAAEAALAAAFNiAgjothLOOIJAkiGgxjpGKiKMkbz7SN6zIawJcDwIK9W/HISxGBzdHTuBNOmcJVCyoUlk7CEAAh+QQJCwAAACwAAAAAEAALAAAFNSAgjqQIRRFUAo3jNGIkSdHqPI8Tz3V55zuaDacDyIQ+YrBH+hWPzJFzOQQaeavWi7oqnVIhACH5BAkLAAAALAAAAAAQAAsAAAUyICCOZGme1rJY5kRRk7hI0mJSVUXJtF3iOl7tltsBZsNfUegjAY3I5sgFY55KqdX1GgIAIfkECQsAAAAsAAAAABAACwAABTcgII5kaZ4kcV2EqLJipmnZhWGXaOOitm2aXQ4g7P2Ct2ER4AMul00kj5g0Al8tADY2y6C+4FIIACH5BAkLAAAALAAAAAAQAAsAAAUvICCOZGme5ERRk6iy7qpyHCVStA3gNa/7txxwlwv2isSacYUc+l4tADQGQ1mvpBAAIfkECQsAAAAsAAAAABAACwAABS8gII5kaZ7kRFGTqLLuqnIcJVK0DeA1r/u3HHCXC/aKxJpxhRz6Xi0ANAZDWa+kEAA7AAAAAAAAAAAA"},aIgT:function(t,e){},d4tr:function(t,e){},gzut:function(t,e){},hs4L:function(t,e){},kPE1:function(t,e){},mDDu:function(t,e){},nLZ8:function(t,e){},nxhA:function(t,e){},pg3m:function(t,e){},u1dL:function(t,e){},xkky:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.23f365f5b8e2a7c8282d.js.map