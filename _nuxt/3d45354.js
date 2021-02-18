(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{225:function(t,e,n){"use strict";(function(t){n(29),n(15),n(228),n(36),n(50);var r=n(234),o=(n(38),n(7)),c=n(23);e.a={data:function(){return Object(c.a)({counties:[],vaccine_sites:[],available_sites:[],vaccine_sites_default:[]},"vaccine_sites_default",[])},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return self=t,e.next=3,t.$axios.get("https://newjersey.github.io/nj-vaccine-scraper/data.json");case 3:t.vaccine_sites_default=e.sent,t.vaccine_sites=t.vaccine_sites_default.data,t.setFilter();case 6:case"end":return e.stop()}}),e)})))()},methods:{setFilter:function(){this.vaccine_sites.map((function(a,b){null!=a.official&&self.counties.push(a.official.County),null!=a.available&&self.available_sites.push(a.available)})),self.counties=Object(r.a)(new Set(self.counties)),self.available_sites=Object(r.a)(new Set(self.available_sites)),self.counties.sort((function(a,b){return b<a?1:a<b?-1:0}))},reset:function(){this.vaccine_sites=this.vaccine_sites_default.data,this.setFilter()},formatDate:function(e){return new Date(e).toLocaleDateString(t.env.lang)||""},changeCounty:function(t){self=this,console.log(t.target.value);var e=[];this.vaccine_sites_default.data.map((function(a,b){a.official&&a.official.County==t.target.value&&e.push(a)})),console.log(e),this.vaccine_sites=e},changeAvail:function(t){self=this,console.log(t.target.value);var e=[];this.vaccine_sites_default.data.map((function(a,b){a.available&&a.available==t.target.value&&e.push(a)})),console.log(e),this.vaccine_sites=e}}}}).call(this,n(107))},226:function(t,e,n){var r=n(67),o=n(8),c=n(13),l=n(18).f,f=n(103),v=n(230),d=f("meta"),_=0,h=Object.isExtensible||function(){return!0},x=function(t){l(t,d,{value:{objectID:"O"+ ++_,weakData:{}}})},meta=t.exports={REQUIRED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!c(t,d)){if(!h(t))return"F";if(!e)return"E";x(t)}return t[d].objectID},getWeakData:function(t,e){if(!c(t,d)){if(!h(t))return!0;if(!e)return!1;x(t)}return t[d].weakData},onFreeze:function(t){return v&&meta.REQUIRED&&h(t)&&!c(t,d)&&x(t),t}};r[d]=!0},227:function(t,e,n){var content=n(233);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("1b7833da",content,!0,{sourceMap:!1})},228:function(t,e,n){"use strict";var r=n(229),o=n(231);t.exports=r("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},229:function(t,e,n){"use strict";var r=n(2),o=n(4),c=n(68),l=n(14),f=n(226),v=n(158),d=n(66),_=n(8),h=n(5),x=n(159),y=n(37),m=n(160);t.exports=function(t,e,n){var w=-1!==t.indexOf("Map"),C=-1!==t.indexOf("Weak"),k=w?"set":"add",E=o[t],S=E&&E.prototype,j=E,A={},F=function(t){var e=S[t];l(S,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(C&&!_(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return C&&!_(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(C&&!_(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(c(t,"function"!=typeof E||!(C||S.forEach&&!h((function(){(new E).entries().next()})))))j=n.getConstructor(e,t,w,k),f.REQUIRED=!0;else if(c(t,!0)){var O=new j,z=O[k](C?{}:-0,1)!=O,R=h((function(){O.has(1)})),I=x((function(t){new E(t)})),D=!C&&h((function(){for(var t=new E,e=5;e--;)t[k](e,e);return!t.has(-0)}));I||((j=e((function(e,n){d(e,j,t);var r=m(new E,e,j);return null!=n&&v(n,r[k],{that:r,AS_ENTRIES:w}),r}))).prototype=S,S.constructor=j),(R||D)&&(F("delete"),F("has"),w&&F("get")),(D||z)&&F(k),C&&S.clear&&delete S.clear}return A[t]=j,r({global:!0,forced:j!=E},A),y(j,t),C||n.setStrong(j,t,w),j}},230:function(t,e,n){var r=n(5);t.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},231:function(t,e,n){"use strict";var r=n(18).f,o=n(69),c=n(105),l=n(35),f=n(66),v=n(158),d=n(104),_=n(106),h=n(12),x=n(226).fastKey,y=n(25),m=y.set,w=y.getterFor;t.exports={getConstructor:function(t,e,n,d){var _=t((function(t,r){f(t,_,e),m(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),h||(t.size=0),null!=r&&v(r,t[d],{that:t,AS_ENTRIES:n})})),y=w(e),C=function(t,e,n){var r,o,c=y(t),l=k(t,e);return l?l.value=n:(c.last=l={index:o=x(e,!0),key:e,value:n,previous:r=c.last,next:void 0,removed:!1},c.first||(c.first=l),r&&(r.next=l),h?c.size++:t.size++,"F"!==o&&(c.index[o]=l)),t},k=function(t,e){var n,r=y(t),o=x(e);if("F"!==o)return r.index[o];for(n=r.first;n;n=n.next)if(n.key==e)return n};return c(_.prototype,{clear:function(){for(var t=y(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,h?t.size=0:this.size=0},delete:function(t){var e=y(this),n=k(this,t);if(n){var r=n.next,o=n.previous;delete e.index[n.index],n.removed=!0,o&&(o.next=r),r&&(r.previous=o),e.first==n&&(e.first=r),e.last==n&&(e.last=o),h?e.size--:this.size--}return!!n},forEach:function(t){for(var e,n=y(this),r=l(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:n.first;)for(r(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!k(this,t)}}),c(_.prototype,n?{get:function(t){var e=k(this,t);return e&&e.value},set:function(t,e){return C(this,0===t?0:t,e)}}:{add:function(t){return C(this,t=0===t?0:t,t)}}),h&&r(_.prototype,"size",{get:function(){return y(this).size}}),_},setStrong:function(t,e,n){var r=e+" Iterator",o=w(e),c=w(r);d(t,e,(function(t,e){m(this,{type:r,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=c(this),e=t.kind,n=t.last;n&&n.removed;)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),_(e)}}},232:function(t,e,n){"use strict";n(227)},233:function(t,e,n){(e=n(51)(!1)).push([t.i,'.container{margin:0 auto;min-height:100vh;justify-content:center;align-items:center;text-align:center}.header{padding-top:10px;padding-left:10px;flex:1 100%;height:100px;background-color:#609e09;flex-direction:row;background-repeat:no-repeat}.title{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:60px;color:#35495e;letter-spacing:1px;flex:1 100%}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}',""]),t.exports=e},234:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(100);var o=n(139);function c(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},235:function(t,e,n){"use strict";n.r(e);var r=n(225).a,o=(n(232),n(33)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("div",[n("h3",{staticClass:"title"},[t._v("\n        New Jersey Vaccine Availability\n      ")]),t._v(" "),n("div",{staticStyle:{"text-align":"left"}},[n("p",[t._v("  How to use this site:")]),t._v(" "),t._m(1),t._v(" "),n("b",[t._v("Available:")]),t._v(" "),n("select",{staticClass:"form-multiselect   mt-2 border rounded-lg text-indigo-900",on:{change:function(e){return t.changeAvail(e)}}},[n("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("Choose")]),t._v(" "),t._l(t.available_sites,(function(e){return n("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])}))],2),t._v(" "),n("b",[t._v("  County:")]),t._v(" "),n("select",{staticClass:"form-multiselect   mt-2 border rounded-lg text-indigo-900",on:{change:function(e){return t.changeCounty(e)}}},[n("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("Choose")]),t._v(" "),t._l(t.counties,(function(e){return n("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])}))],2),t._v(" "),n("button",{staticClass:"mr-5 bg-gray-200 hover:bg-gray-300 border border-gray-400 text-black font-bold py-2 px-6 rounded-md",on:{click:function(e){return t.reset()}}},[t._v("\n  Reset\n")]),t._v(" "),n("br"),n("br")]),t._v(" "),n("div",{staticClass:"flex flex-col h-screen"},[n("div",{staticClass:"flex-grow overflow-auto"},[n("table",{staticClass:"relative w-full border"},[t._m(2),t._v(" "),n("tbody",{staticClass:"divide-y bg-red-100"},t._l(t.vaccine_sites,(function(e,r){return n("tr",[n("td",{staticClass:"px-2 py-2 text-center"},[t._v(t._s(e.available))]),t._v(" "),n("td",{staticClass:"px-2 py-2 text-center"},[t._v(t._s(e.name))]),t._v(" "),t._l(e.official,(function(e,r){return"Facility Address"==r?n("td",{staticClass:"px-2 py-2 text-center"},[t._v(t._s(e))]):t._e()})),t._v(" "),t._l(e.official,(function(e,r){return"County"==r?n("td",{staticClass:"px-2 py-2 text-center"},[t._v(t._s(e))]):t._e()})),t._v(" "),t._l(e.official,(function(e,r){return"Minimum Age"==r?n("td",{staticClass:"px-2 py-2 text-center"},[t._v(t._s(e))]):t._e()})),t._v(" "),t._l(e.official,(function(e,r){return"Phone Number for Appointments + Questions"==r?n("td",{staticClass:"px-2 py-2 text-center"},[t._v(t._s(e))]):t._e()})),t._v(" "),t._l(e.official,(function(e,r){return"Facility Website"==r?n("td",{staticClass:"px-2 py-2 text-center"},[n("a",{attrs:{href:e}},[t._v(t._s(e))])]):t._e()}))],2)})),0)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("img",{attrs:{src:"https://smarter.nj.gov/images/nj-state-logo-white.png",width:"80px",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("1. Select your County with the dropdown below")]),this._v(" "),e("li",[this._v("2. Scroll down to see a list of vaccine sites with available appointments. This information is updated regularly.")]),this._v(" "),e("li",[this._v("3. Reach out to convenient locations to schedule an appointment.")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{staticClass:"sticky top-0 px-2 py-2 text-red-900 bg-red-300"},[t._v("AVAILABLE")]),t._v(" "),n("th",{staticClass:"sticky top-0 px-2 py-2 text-red-900 bg-red-300"},[t._v("Facility Name")]),t._v(" "),n("th",{staticClass:"sticky top-0 px-2 py-2 text-red-900 bg-red-300"},[t._v("Facility Address")]),t._v(" "),n("th",{staticClass:"sticky top-0 px-2 py-2 text-red-900 bg-red-300"},[t._v("County")]),t._v(" "),n("th",{staticClass:"sticky top-0 px-2 py-2 text-red-900 bg-red-300"},[t._v("Minimum Age")]),t._v(" "),n("th",{staticClass:"sticky top-0 px-2 py-2 text-red-900 bg-red-300"},[t._v("Phone Number")]),t._v(" "),n("th",{staticClass:"sticky top-0 px-2 py-2 text-red-900 bg-red-300"},[t._v("Facility Website")])])])}],!1,null,null,null);e.default=component.exports}}]);