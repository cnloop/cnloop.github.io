(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10f992dd"],{3191:function(t,e,a){"use strict";a.d(e,"f",function(){return i}),a.d(e,"e",function(){return n}),a.d(e,"a",function(){return r}),a.d(e,"d",function(){return o}),a.d(e,"g",function(){return u}),a.d(e,"h",function(){return c}),a.d(e,"j",function(){return p}),a.d(e,"i",function(){return d}),a.d(e,"b",function(){return h}),a.d(e,"c",function(){return l});var s=a("b775");function i(t){return Object(s["a"])({url:"api.php/index/index/IndexNotice",method:"get",params:t})}function n(t){return Object(s["a"])({url:"/api.php/index/index/IndexChange",method:"get",params:t})}function r(t){return Object(s["a"])({url:"/api.php/index/index/getMiddleMenu",method:"get",params:t})}function o(t){return Object(s["a"])({url:"/api.php/index/index/IndexItems",method:"post",data:t})}function u(t){return Object(s["a"])({url:"/api.php/tuiguang/tuiguang/tuiguangCate",method:"get",params:t})}function c(t){return Object(s["a"])({url:"/api.php/tuiguang/tuiguang/tuiguangSucai",method:"post",data:t})}function p(t){return Object(s["a"])({url:"/api.php/tuiguang/tuiguang/getBac",method:"post",data:t})}function d(t){return Object(s["a"])({url:"/api.php/index/index/IndexPopup",method:"get",params:t})}function h(t){return Object(s["a"])({url:"/api.php/member/coupon/checkTui",method:"get",params:t})}function l(t){return Object(s["a"])({url:"/api.php/index/index/getCoupon",method:"post",data:t})}},"3f82":function(t,e,a){},"9c11":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"share-material"},[a("BaseNav",[t._v(t._s(t.title?t.title:"")+"推广素材")]),a("div",{staticClass:"content"},[t.typeCate?a("MaterialList",{attrs:{type:t.typeCate,id:t.id,isCPA:t.isCPA}}):t._e()],1)],1)},i=[],n=a("a34a"),r=a.n(n),o=a("c973"),u=a.n(o),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"material-list"},[a("BaseScroll",{ref:"base-scroll",on:{refresh:t.refresh,loadMore:t.loadMore}},[a("div",{staticClass:"list-top"},t._l(t.listData,function(e,s){return a("div",{key:s,ref:"content",refInFor:!0,staticClass:"content"},[a("div",{staticClass:"title"},[t._v(t._s(e.title))]),a("div",{staticClass:"date"},[t._v(t._s(e.addtime))]),a("div",{staticClass:"article",domProps:{innerHTML:t._s(e.Contents)}}),a("div",{staticClass:"slide",on:{click:function(a){return a.stopPropagation(),t.showImagePreview(e.pic)}}},t._l(e.pic,function(t,e){return a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"pic"}],key:"p_"+e})}),0),a("div",{staticClass:"func"},[a("div",{staticClass:"copy",on:{click:function(a){return a.stopPropagation(),t.copyText(e.Contents,e.shareurl)}}},[t._v("一键复制")]),a("div",{staticClass:"make",on:{click:function(a){return a.stopPropagation(),t.makePost(e.tid,e.id)}}},[t._v("生成海报")]),t.showBtn&&e.pic.length>0?a("div",{staticClass:"save",on:{click:function(a){return a.stopPropagation(),t.saveImages(e.pic)}}},[t._v("保存图片")]):t._e()])])}),0),t.isBaseEmpty?a("div",{staticClass:"list-bottom"},[a("base-bottom"),a("base-bottom"),a("base-empty")],1):t._e()]),t.isBasePoster?a("BasePoster",{attrs:{isBasePoster:t.isBasePoster,img:t.poster},on:{"update:isBasePoster":function(e){t.isBasePoster=e},"update:is-base-poster":function(e){t.isBasePoster=e}}}):t._e(),t.isBaseImgPre?a("BaseImgPre",{attrs:{isBaseImgPre:t.isBaseImgPre,imgs:t.imgs},on:{"update:isBaseImgPre":function(e){t.isBaseImgPre=e},"update:is-base-img-pre":function(e){t.isBaseImgPre=e}}}):t._e(),t.isBaseYjPop?a("BaseYjPop",{on:{closeBaseYjPop:t.closeBaseYjPop}}):t._e(),t.isBaseYjPayPop?a("BaseYjPayPop",{attrs:{isBaseYjPayPop:t.isBaseYjPayPop,price:t.price},on:{"update:isBaseYjPayPop":function(e){t.isBaseYjPayPop=e},"update:is-base-yj-pay-pop":function(e){t.isBaseYjPayPop=e}}}):t._e(),t.isBaseload?a("BaseLoad"):t._e(),t.isBaseLoadPage?a("BaseLoadPage"):t._e()],1)},p=[],d=a("3191"),h=a("4b61"),l=a("2c98"),f={props:{type:{type:Number,default:0},id:{required:!0},isCPA:{default:!1}},data:function(){return{page:0,num:30,listData:[],poster:"",imgs:[],price:0,isBasePoster:!1,isBaseImgPre:!1,isBaseEmpty:!1,isBaseYjPop:!1,isBaseYjPayPop:!1,isBaseload:!1,isBaseLoadPage:!0}},mounted:function(){var t=u()(r.a.mark(function t(){return r.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$waitTime(1e3);case 3:this.isBaseLoadPage=!1,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),this.isBaseLoadPage=!1;case 9:case"end":return t.stop()}},t,this,[[0,6]])}));function e(){return t.apply(this,arguments)}return e}(),methods:{refresh:function(t){this.getList(t,!0)},loadMore:function(t){this.getList(t)},getList:function(){var t=u()(r.a.mark(function t(e,a){var s,i=arguments;return r.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,!a){t.next=13;break}return this.page=1,t.next=5,Object(d["h"])({num:this.num,page:this.page,type:this.type,id:this.id});case 5:s=t.sent,this.isBaseEmpty=!1,this.$refs["base-scroll"].setLoadText(!0),this.listData=s.data,this.$refs["base-scroll"].stopRefresh(),this.$textTip("刷新成功"),t.next=19;break;case 13:return this.page=this.page+1,t.next=16,Object(d["h"])({num:this.num,page:this.page,type:this.type,id:this.id});case 16:s=t.sent,this.listData=this.listData.concat(s.data),e();case 19:1==s.total_page&&this.$refs["base-scroll"].stopLoad(),t.next=30;break;case 22:if(t.prev=22,t.t0=t["catch"](0),this.$refs["base-scroll"].stopRefresh(),this.$refs["base-scroll"].stopLoad(),0==this.listData.length&&(this.$refs["base-scroll"].setLoadText(),this.isBaseEmpty=!0),2==i.length&&this.$textTip("刷新成功"),i.length){t.next=30;break}throw t.t0;case 30:case"end":return t.stop()}},t,this,[[0,22]])}));function e(e,a){return t.apply(this,arguments)}return e}(),makePost:function(){var t=u()(r.a.mark(function t(e,a){var s;return r.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,this.isBaseload=!0,!this.isCPA){t.next=9;break}return t.next=5,this.checkYjToProduct();case 5:if(s=t.sent,!s){t.next=9;break}throw this.isBaseYjPop=!0,"请支付保证金";case 9:return t.next=11,Object(d["j"])({type:this.type,tid:e,uid:this.$getUser().ID,id:a});case 11:return this.poster=t.sent,t.next=14,this.$preloadImg(this.poster);case 14:this.isBaseload=!1,this.isBasePoster=!0,t.next=22;break;case 18:t.prev=18,t.t0=t["catch"](0),this.$textTip(t.t0),this.isBaseload=!1;case 22:case"end":return t.stop()}},t,this,[[0,18]])}));function e(e,a){return t.apply(this,arguments)}return e}(),saveImages:function(t){Object(h["e"])(t)},copyText:function(t,e){var a=t.replace(/<\/?.+?>/g,""),s=a.replace(/&nbsp;/g,""),i=s.replace(/&nbsp/g,""),n=i.replace(/ /g,"");this.$isNull(e)||(n=n+" 传送门："+e),this.$copy(n)},showImagePreview:function(t){this.imgs=t,this.isBaseImgPre=!0},checkYjToProduct:function(){var t=u()(r.a.mark(function t(){var e;return r.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(l["g"])({id:this.id});case 2:if(e=t.sent,100086!=e.result){t.next=7;break}return t.abrupt("return",!0);case 7:if(1e5!=e.result){t.next=11;break}return t.abrupt("return",!1);case 11:throw e.message;case 12:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),closeBaseYjPop:function(t){"pay"==t.type?(this.isBaseYjPop=!1,this.isBaseYjPayPop=!0,this.price=t.price):this.isBaseYjPop=!1}},computed:{showBtn:function(){return"h5"!=this.$store.getters.platform}}},m=f,g=(a("ea80"),a("2877")),P=Object(g["a"])(m,c,p,!1,null,"00142d27",null),b=P.exports,v=a("acd9"),B={components:{MaterialList:b},data:function(){return{type:"",title:"",productData:null}},mounted:function(){var t=u()(r.a.mark(function t(){return r.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.id=this.$route.query.id,this.title=this.$route.query.title,this.type=this.$route.query.type,t.next=6,this.getProductDetail();case 6:t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}},t,this,[[0,8]])}));function e(){return t.apply(this,arguments)}return e}(),computed:{typeCate:function(){return"dai"==this.type?1:"card"==this.type?2:0},isCPA:function(){if(this.productData&&2==this.productData.info.D_type&&1==this.productData.info.Itype)return!0}},methods:{getProductDetail:function(){var t=u()(r.a.mark(function t(){return r.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(v["c"])({id:this.id});case 2:this.productData=t.sent;case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},y=B,x=(a("ac09"),Object(g["a"])(y,s,i,!1,null,"bc9fb7b8",null));e["default"]=x.exports},aa08:function(t,e,a){},ac09:function(t,e,a){"use strict";var s=a("3f82"),i=a.n(s);i.a},acd9:function(t,e,a){"use strict";a.d(e,"a",function(){return i}),a.d(e,"f",function(){return n}),a.d(e,"e",function(){return r}),a.d(e,"b",function(){return o}),a.d(e,"c",function(){return u}),a.d(e,"d",function(){return c});var s=a("b775");function i(t){return Object(s["a"])({url:"/api.php/item/item/getCardDatas",method:"post",data:t})}function n(t){return Object(s["a"])({url:"/api.php/news/news/getSimpleNews",method:"get",params:t})}function r(t){return Object(s["a"])({url:"/api.php/tuiguang/tuiguang/getRec",method:"post",data:t})}function o(t){return Object(s["a"])({url:"/api.php/tuiguang/tuiguang/getItems",method:"post",data:t})}function u(t){return Object(s["a"])({url:"/api.php/item/item/itemDetail",method:"post",data:t})}function c(t){return Object(s["a"])({url:"/api.php/item/item/itemHaibao",method:"post",data:t})}},ea80:function(t,e,a){"use strict";var s=a("aa08"),i=a.n(s);i.a}}]);