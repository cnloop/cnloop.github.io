(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1db9fe24"],{"7cb6":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"notice"},[a("BaseNav",[t._v("平台公告")]),a("BaseTop"),a("BaseScroll",{ref:"base-scroll",staticClass:"content",on:{refresh:t.refresh,loadMore:t.loadMore}},[a("div",{staticClass:"list-top"},t._l(t.listData,function(e){return a("div",{key:e.ID,staticClass:"item",on:{click:function(s){return s.stopPropagation(),t.$goUrl("/noticeDetail?id="+e.ID)}}},[a("div",{staticClass:"top"},[t._v(t._s(e.AddTime))]),a("div",{staticClass:"bottom"},[a("div",{staticClass:"title"},[t._v(t._s(e.Title))]),a("div",{staticClass:"desc",domProps:{innerHTML:t._s(e.Subtitle)}}),a("div",{staticClass:"see"},[a("div",{staticClass:"text"},[t._v("查看")]),a("img",{attrs:{src:s("ff3a")}})])])])}),0),t.isBaseEmpty?a("div",{staticClass:"list-bottom"},[a("base-bottom",{staticStyle:{background:"#f6f7fb"}}),a("base-bottom",{staticStyle:{background:"#f6f7fb"}}),a("base-empty")],1):t._e()]),t.isBaseLoadPage?a("BaseLoadPage"):t._e()],1)},i=[],n=s("a34a"),c=s.n(n),o=s("c973"),r=s.n(o),l=s("2c98"),b={data:function(){return{page:0,num:30,listData:[],isBaseEmpty:!1,isBaseLoadPage:!0}},mounted:function(){var t=r()(c.a.mark(function t(){return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$waitTime(1e3);case 3:this.isBaseLoadPage=!1,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),this.isBaseLoadPage=!1;case 9:case"end":return t.stop()}},t,this,[[0,6]])}));function e(){return t.apply(this,arguments)}return e}(),methods:{refresh:function(t){this.getList(t,!0)},loadMore:function(t){this.getList(t)},getList:function(){var t=r()(c.a.mark(function t(e,s){var a,i=arguments;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,!s){t.next=13;break}return this.page=1,t.next=5,Object(l["i"])({type:2,num:this.num,page:this.page});case 5:a=t.sent,this.isBaseEmpty=!1,this.$refs["base-scroll"].setLoadText(!0),this.listData=a.data,this.$refs["base-scroll"].stopRefresh(),this.$textTip("刷新成功"),t.next=19;break;case 13:return this.page=this.page+1,t.next=16,Object(l["i"])({type:2,num:this.num,page:this.page});case 16:a=t.sent,this.listData=this.listData.concat(a.data),e();case 19:1==a.pages&&this.$refs["base-scroll"].stopLoad(),t.next=30;break;case 22:if(t.prev=22,t.t0=t["catch"](0),this.$refs["base-scroll"].stopRefresh(),this.$refs["base-scroll"].stopLoad(),0==this.listData.length&&(this.$refs["base-scroll"].setLoadText(),this.isBaseEmpty=!0),2==i.length&&this.$textTip("刷新成功"),i.length){t.next=30;break}throw t.t0;case 30:case"end":return t.stop()}},t,this,[[0,22]])}));function e(e,s){return t.apply(this,arguments)}return e}()},beforeRouteEnter:function(t,e,s){document.documentElement.style.backgroundColor="#f6f7fb",s()},beforeRouteLeave:function(t,e,s){document.documentElement.style.backgroundColor="#fff",s()}},h=b,u=(s("c0ee"),s("2877")),d=Object(u["a"])(h,a,i,!1,null,"28409af2",null);e["default"]=d.exports},c0ee:function(t,e,s){"use strict";var a=s("fe8b"),i=s.n(a);i.a},fe8b:function(t,e,s){},ff3a:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAUCAYAAAC07qxWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc4RUUxQkRERUM3NTExRThBMTQ1RkY3RTIyOTcxQjk2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc4RUUxQkRFRUM3NTExRThBMTQ1RkY3RTIyOTcxQjk2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzhFRTFCREJFQzc1MTFFOEExNDVGRjdFMjI5NzFCOTYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzhFRTFCRENFQzc1MTFFOEExNDVGRjdFMjI5NzFCOTYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/IBYuAAAA6klEQVR42ozTwQoBQRwG8DGexGuInL2AixJqi13RUtxYNw5EaSWiEAd3LyAv4BmcXD3A+Kb+q23NzJr6+g77M/M3LKu3+64QgsWFM8amdmfQZTFLwhoyBnaM0J8MV2gLWQC7ph0Z8Abl0BgtLSTso2xkBtzUQsJLwvPoGDz6ScIWjdHTwtDMDWQU7JyQl6lbQHnUFfF4zD0/qFPcsFsW9UTWGKWsPBoojbojF6CC8suE0ClAPxAoR2gLVAw/+x4NlEHdkANQSfnL0HES7VVIruTrLYKZdkAV079HojNQ1XijeBWO/7wKHwEGAKh0kZ19ED4jAAAAAElFTkSuQmCC"}}]);