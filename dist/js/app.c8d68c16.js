(function(t){function e(e){for(var r,i,s=e[0],c=e[1],u=e[2],p=0,f=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("64a9")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("8c4f"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h3",[t._v("StarVerse Router")]),n("h4",[n("router-link",{staticClass:"link",attrs:{to:"/data/people"}},[t._v("Meet the characters  ")]),t._v(" ||\n        "),n("router-link",{staticClass:"link",attrs:{to:"/data/planets"}},[t._v("Explore the planets")])],1),n("router-view")],1)},i=[],s=(n("034f"),n("2877")),c={},u=Object(s["a"])(c,o,i,!1,null,null,null),l=u.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-12"},t._l(t.items,(function(e){return n("Item",{key:e.id,attrs:{"passed-item":e,type:t.type}})})),1)},f=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-4",on:{click:t.switchItem}},[n("div",{staticClass:"item-card"},[n("div",{staticClass:"card-block"},[n("h4",{staticClass:"card-title"},[t._v(t._s(t.item.name))]),t._l(t.item,(function(e,r,a){return n("div",[a<5?n("div",[n("strong",[t._v(t._s(r))]),t._v(":"+t._s(e)+"\n            ")]):t._e()])}))],2)])])},d=[],v={props:["passedItem","type"],data:function(){return{item:{}}},methods:{switchItem:function(){var t=this,e=Math.floor(63*Math.random())+1;fetch("https://swapi.dev/api/".concat(this.type,"/").concat(e),{method:"GET"}).then((function(t){return t.json()})).then((function(e){return t.item=e}))}},created:function(){this.item=this.passedItem}},m=v,y=Object(s["a"])(m,h,d,!1,null,null,null),_=y.exports,b={data:function(){return{type:this.$route.params.type,items:[]}},watch:{$route:"fetchItems"},methods:{fetchItems:function(){var t=this;this.items=[],this.type=this.$route.params.type;var e=[1,13,14];for(var n in e){var r=e[n];fetch("https://swapi.dev/api/".concat(this.type,"/").concat(r),{method:"GET"}).then((function(t){return t.json()})).then((function(e){return t.items.push(e)}))}}},created:function(){this.fetchItems()},components:{Item:_}},w=b,j=Object(s["a"])(w,p,f,!1,null,null,null),O=j.exports;r["a"].use(a["a"]);var g=[{path:"/data/:type",component:O}],k=new a["a"]({routes:g});new r["a"]({el:"#app",router:k,render:function(t){return t(l)}})},"64a9":function(t,e,n){}});
//# sourceMappingURL=app.c8d68c16.js.map