(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18e77db8"],{"2a0a":function(t,e,i){"use strict";var n=i("3ee9"),o=i.n(n);o.a},"3ee9":function(t,e,i){},"567a":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"register-two"},[i("BaseNav",{staticStyle:{border:"none"}}),i("BaseTop"),i("div",{staticClass:"content"},[i("h2",[t._v("请输入验证码")]),i("h3",[t._v("短信验证码已发送至 +86 "+t._s(t.mobile))]),i("div",{staticClass:"input-content"},[i("div",{staticClass:"item"},[i("input",{directives:[{name:"focus",rawName:"v-focus"},{name:"model",rawName:"v-model.trim",value:t.inp_1,expression:"inp_1",modifiers:{trim:!0}}],ref:"inp_1",attrs:{type:"tel",maxlength:"1"},domProps:{value:t.inp_1},on:{input:[function(e){e.target.composing||(t.inp_1=e.target.value.trim())},function(e){return t.inputWrite(1)}],keydown:function(e){return t.deleteCode(e)},blur:function(e){return t.$forceUpdate()}}})]),i("div",{staticClass:"item"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.inp_2,expression:"inp_2",modifiers:{trim:!0}}],ref:"inp_2",attrs:{type:"tel",maxlength:"1"},domProps:{value:t.inp_2},on:{input:[function(e){e.target.composing||(t.inp_2=e.target.value.trim())},function(e){return t.inputWrite(2)}],keydown:function(e){return t.deleteCode(e)},blur:function(e){return t.$forceUpdate()}}})]),i("div",{staticClass:"item"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.inp_3,expression:"inp_3",modifiers:{trim:!0}}],ref:"inp_3",attrs:{type:"tel",maxlength:"1"},domProps:{value:t.inp_3},on:{input:[function(e){e.target.composing||(t.inp_3=e.target.value.trim())},function(e){return t.inputWrite(3)}],keydown:function(e){return t.deleteCode(e)},blur:function(e){return t.$forceUpdate()}}})]),i("div",{staticClass:"item"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.inp_4,expression:"inp_4",modifiers:{trim:!0}}],ref:"inp_4",attrs:{type:"tel",maxlength:"1"},domProps:{value:t.inp_4},on:{input:[function(e){e.target.composing||(t.inp_4=e.target.value.trim())},function(e){return t.inputWrite(4)}],keydown:function(e){return t.deleteCode(e)},blur:function(e){return t.$forceUpdate()}}})]),i("div",{staticClass:"item"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.inp_5,expression:"inp_5",modifiers:{trim:!0}}],ref:"inp_5",attrs:{type:"tel",maxlength:"1"},domProps:{value:t.inp_5},on:{input:[function(e){e.target.composing||(t.inp_5=e.target.value.trim())},function(e){return t.inputWrite(5)}],keydown:function(e){return t.deleteCode(e)},blur:function(e){return t.$forceUpdate()}}})]),i("div",{staticClass:"item"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.inp_6,expression:"inp_6",modifiers:{trim:!0}}],ref:"inp_6",attrs:{type:"tel",maxlength:"1"},domProps:{value:t.inp_6},on:{input:[function(e){e.target.composing||(t.inp_6=e.target.value.trim())},function(e){return t.inputWrite(6)}],keydown:function(e){return t.deleteCode(e)},blur:function(e){return t.$forceUpdate()}}})])]),i("div",{staticClass:"btn",on:{click:function(e){return e.stopPropagation(),t.next(e)}}},[t._v("下一步")]),i("div",{staticClass:"tip"},[i("div",{staticClass:"sendMessage"},[i("div",{directives:[{name:"show",rawName:"v-show",value:"send"==t.showItem,expression:"showItem=='send'"}],staticClass:"send",on:{click:function(e){return e.stopPropagation(),t.reSend(e)}}},[t._v("重新发送验证码")]),i("div",{directives:[{name:"show",rawName:"v-show",value:"resend"==t.showItem,expression:"showItem=='resend'"}],staticClass:"resend"},[t._v(t._s(t.time)+" 秒后重新发送")])])])]),t.isBaseLoad?i("BaseLoad"):t._e(),t.isBaseLoadPage?i("BaseLoadPage"):t._e()],1)},o=[],r=i("a34a"),s=i.n(r),a=i("c973"),c=i.n(a),u=i("2c98"),p={data:function(){return{mobile:"",inp_1:"",inp_2:"",inp_3:"",inp_4:"",inp_5:"",inp_6:"",showItem:"resend",time:60,timer:null,isBaseLoad:!1,isBaseLoadPage:!0}},mounted:function(){this.mobile=this.$route.query.mobile,this.countdown(),this.isBaseLoadPage=!1},computed:{code:function(){return"".concat(this.inp_1).concat(this.inp_2).concat(this.inp_3).concat(this.inp_4).concat(this.inp_5).concat(this.inp_6)}},methods:{inputWrite:function(t){if(this["inp_".concat(t)].length>0){if(this.$refs["inp_".concat(t)].blur(),6==t)return 0;this.$refs["inp_".concat(t+1)].focus()}},deleteCode:function(t){8==t.keyCode&&this.toInit()},toInit:function(){for(var t=0;t<6;t++)this["inp_".concat(t+1)]="",this.$refs["inp_".concat(t+1)].blur();this.$refs["inp_".concat(1)].focus()},countdown:function(){var t=this;clearInterval(this.timer),this.$nextTick(function(){t.timer=setInterval(function(){t.time--,0==t.time&&(clearInterval(t.timer),t.time=60,t.showItem="send")},1e3)})},reSend:function(){this.$textTip("发送成功"),this.showItem="resend",this.countdown(),Object(u["o"])({mobile:this.mobile})},next:function(){var t=c()(s.a.mark(function t(){var e;return s.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,this.isBaseLoad=!0,e=/\d{6}/,e.test(this.code)){t.next=5;break}throw"验证码格式不正确";case 5:return t.next=7,Object(u["c"])({code:this.code,mobile:this.mobile});case 7:this.$goUrl("/registerPassword?code=".concat(this.code,"&mobile=").concat(this.mobile)),this.isBaseLoad=!1,t.next=16;break;case 11:t.prev=11,t.t0=t["catch"](0),this.toInit(),this.$textTip(t.t0),this.isBaseLoad=!1;case 16:case"end":return t.stop()}},t,this,[[0,11]])}));function e(){return t.apply(this,arguments)}return e}()}},d=p,m=(i("2a0a"),i("2877")),l=Object(m["a"])(d,n,o,!1,null,"35d62c2f",null);e["default"]=l.exports}}]);