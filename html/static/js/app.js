webpackJsonp([1],{101:function(t,e){},102:function(t,e){},108:function(t,e,n){function a(t){n(101)}var s=n(44)(n(52),n(109),a,null,null);t.exports=s.exports},109:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"bodycam",attrs:{id:"camera"}},[n("div",["police"===t.mesleka?n("div",[t._m(0)]):t._e(),t._v(" "),"ambulance"===t.mesleka?n("div",[t._m(1)]):t._e(),t._v(" "),n("p",{attrs:{id:"data"}},[t._v(t._s(t.timestamp))]),t._v(" "),n("p",{attrs:{id:"stopien"}},[t._v(t._s(t.meslek))]),t._v(" "),n("p",{attrs:{id:"dane"}},[t._v(t._s(t.firstname)+" "+t._s(t.lastname))])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("REC "),n("i",{staticClass:"fa fa-circle text-danger Blink",staticStyle:{color:"red"}}),t._v(" LOS SANTOS POLICE DEPARTMENT ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("REC "),n("i",{staticClass:"fa fa-circle text-danger Blink",staticStyle:{color:"red"}}),t._v(" LOS SANTOS MEDICAL SERVICE ")])}]}},110:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("notification"),t._v(" "),!0===t.show?n("div",{on:{contextmenu:function(t){t.stopPropagation()}}},[n("div",{},[n("div",{attrs:{id:"app"}},[n("router-view")],1)])]):t._e()],1)},staticRenderFns:[]}},26:function(t,e,n){"use strict";var a=n(60),s=n.n(a),r=n(53),o=n.n(r),i=n(57),u=n.n(i),c=n(58),f=n.n(c),l=n(59),m=n.n(l),p=n(27),d=function(){function t(){var e=this;f()(this,t),window.addEventListener("message",function(t){var n=t.data.event;void 0!==n&&"function"==typeof e["on"+n]?e["on"+n](t.data):void 0!==t.data.show&&p.a.commit("SET_PHONE_VISIBILITY",t.data.show)})}return m()(t,[{key:"post",value:function(){function t(t,n){return e.apply(this,arguments)}var e=u()(s.a.mark(function t(e,n){var a,r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=void 0===n?"{}":o()(n),t.next=3,window.jQuery.post("http://gks_bodycam/"+e,a);case 3:return r=t.sent,t.abrupt("return",JSON.parse(r));case 5:case"end":return t.stop()}},t,this)}));return t}()},{key:"kapat",value:function(){function t(){return e.apply(this,arguments)}var e=u()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.post("kapat"));case 1:case"end":return t.stop()}},t,this)}));return t}()},{key:"onupdateMyFirstname",value:function(t){p.a.commit("SET_MY_FIRSTNAME",t.firstname)}},{key:"onupdateMyListname",value:function(t){p.a.commit("SET_MY_LISTNAME",t.lastname)}},{key:"onupdateMyMeslek",value:function(t){p.a.commit("SET_MY_MESLEK",t.meslek)}},{key:"onupdateMyMesleka",value:function(t){p.a.commit("SET_MY_MESLEKA",t.mesleka)}}]),t}(),v=new d;e.a=v},27:function(t,e,n){"use strict";var a=n(15),s=n(25),r=n(50),o=n(49);a.a.use(s.b),e.a=new s.b.Store({modules:{phone:r.a,news:o.a},strict:!0})},45:function(t,e,n){"use strict";var a={inserted:function(t){t.focus()}};e.a=a},46:function(t,e,n){"use strict";var a=n(15),s=n(111),r=n(108),o=n.n(r);a.a.use(s.a),e.a=new s.a({routes:[{path:"/",name:"menu",component:o.a},{path:"*",redirect:"/"}]})},47:function(t,e,n){function a(t){n(102)}var s=n(44)(n(51),n(110),a,null,null);t.exports=s.exports},48:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(15),s=n(47),r=n.n(s),o=n(46),i=n(27),u=n(26),c=n(45);a.a.config.productionTip=!1,a.a.prototype.$bus=new a.a,a.a.prototype.$phoneAPI=u.a,window.Vue=a.a,window.store=i.a,a.a.directive("autofocus",c.a),window.APP=new a.a({el:"#app",store:i.a,router:o.a,render:function(t){return t(r.a)}})},49:function(t,e,n){"use strict";var a={firstname:"Gürkan Selim",lastname:"Albayrak",meslek:"Bodycam Açılıyor. Lütfen Bekleyiniz.",mesleka:""},s={firstname:function(t){return t.firstname},lastname:function(t){return t.lastname},meslek:function(t){return t.meslek},mesleka:function(t){return t.mesleka}},r={},o={SET_MY_FIRSTNAME:function(t,e){t.firstname=e},SET_MY_LISTNAME:function(t,e){t.lastname=e},SET_MY_MESLEK:function(t,e){t.meslek=e},SET_MY_MESLEKA:function(t,e){t.mesleka=e}};e.a={state:a,getters:s,actions:r,mutations:o}},50:function(t,e,n){"use strict";var a=n(26),s={show:!1},r={show:function(t){return t.show}},o={closePhone:function(){a.a.closePhone()}},i={SET_PHONE_VISIBILITY:function(t,e){t.show=e,t.tempoHide=!1}};e.a={state:s,getters:r,actions:o,mutations:i}},51:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(28),s=n.n(a),r=n(25);e.default={name:"app",data:function(){return{}},methods:{},computed:s()({},n.i(r.a)(["show"])),watch:{show:function(){this.$router.push({path:"/"})}}}},52:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(28),s=n.n(a),r=n(25);e.default={components:{},created:function(){setInterval(this.getNow,1e3)},props:["loading"],data:function(){return{timestamp:""}},computed:s()({},n.i(r.a)(["firstname","lastname","meslek","mesleka"])),methods:{getNow:function(){var t=new Date,e=t.getDate()+"-"+(t.getMonth()+1)+"-"+t.getFullYear(),n=t.getHours()+":"+t.getMinutes()+":"+t.getSeconds(),a=e+" "+n;this.timestamp=a}}}}},[48]);