/*! For license information please see 459.970acf0af76a64cb896e.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[459],{81676:(t,r,e)=>{e.r(r),e.d(r,{default:()=>N});var n=e(40366),o=e.n(n),i=e(58788),c=e(29210),a=e(62804),u=e(63864),l=e(75100),s=(e(42756),e(47960)),f=e(83517),h=e(27878),p=e(60346);const y=(0,e(23218).n9)((function(t){return{"cm-container":{display:"flex",width:"100%",height:"100%"},error:{color:t.tokens.colors.error2},info:{color:t.tokens.colors.brand3},warn:{color:t.tokens.colors.warn2}}}));var v=e(32463).A.create({baseURL:"http://127.0.0.1:8889"}),d=function(t){return v.post("/terminals?cols=".concat(t.cols,"&rows=").concat(t.rows))},m=function(t,r){return v.post("/terminals/".concat(t,"/size?cols=").concat(r.cols,"&rows=").concat(r.rows))},g=e(84436),b=e(36242),w=e(63212);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function x(){x=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(t){l=function(t,r,e){return t[r]=e}}function s(t,r,e,n){var i=r&&r.prototype instanceof m?r:m,c=Object.create(i.prototype),a=new _(n||[]);return o(c,"_invoke",{value:P(t,e,a)}),c}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=s;var h="suspendedStart",p="suspendedYield",y="executing",v="completed",d={};function m(){}function g(){}function b(){}var w={};l(w,c,(function(){return this}));var E=Object.getPrototypeOf,j=E&&E(E(I([])));j&&j!==e&&n.call(j,c)&&(w=j);var L=b.prototype=m.prototype=Object.create(w);function S(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function k(t,r){function e(o,i,c,a){var u=f(t[o],t,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==O(s)&&n.call(s,"__await")?r.resolve(s.__await).then((function(t){e("next",t,c,a)}),(function(t){e("throw",t,c,a)})):r.resolve(s).then((function(t){l.value=t,c(l)}),(function(t){return e("throw",t,c,a)}))}a(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function P(r,e,n){var o=h;return function(i,c){if(o===y)throw Error("Generator is already running");if(o===v){if("throw"===i)throw c;return{value:t,done:!0}}for(n.method=i,n.arg=c;;){var a=n.delegate;if(a){var u=A(a,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var l=f(r,e,n);if("normal"===l.type){if(o=n.done?v:p,l.arg===d)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=v,n.method="throw",n.arg=l.arg)}}}function A(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,A(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var i=f(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,d;var c=i.arg;return c?c.done?(e[r.resultName]=c.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,d):c:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function T(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function N(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function I(r){if(r||""===r){var e=r[c];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(O(r)+" is not iterable")}return g.prototype=b,o(L,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:g,configurable:!0}),g.displayName=l(b,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},r.awrap=function(t){return{__await:t}},S(k.prototype),l(k.prototype,a,(function(){return this})),r.AsyncIterator=k,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var c=new k(s(t,e,n,o),i);return r.isGeneratorFunction(e)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},S(L),l(L,u,"Generator"),l(L,c,(function(){return this})),l(L,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=I,_.prototype={constructor:_,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return a.type="throw",a.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],a=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var u=n.call(c,"catchLoc"),l=n.call(c,"finallyLoc");if(u&&l){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=r,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(c)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),d},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),N(e),d}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;N(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:I(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),d}},r}function E(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function j(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?E(Object(e),!0).forEach((function(r){var n,o,i,c;n=t,o=r,i=e[r],c=function(t,r){if("object"!=O(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=O(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),(o="symbol"==O(c)?c:c+"")in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):E(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function L(t,r,e,n,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void e(t)}a.done?r(u):Promise.resolve(u).then(n,o)}function S(t){return function(){var r=this,e=arguments;return new Promise((function(n,o){var i=t.apply(r,e);function c(t){L(i,n,o,c,a,"next",t)}function a(t){L(i,n,o,c,a,"throw",t)}c(void 0)}))}}function k(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function P(t,r){var e=null;return function(){var n=this,o=arguments;e&&clearTimeout(e),e=setTimeout((function(){t.apply(n,o)}),r)}}function A(){var t,r,e=(0,f.d)(),p=e.onPanelResize,v=e.logger,O=(e.setKeyDownHandlers,y().classes,(0,n.useRef)(null)),E=(0,n.useRef)(null),L=(0,n.useRef)(null),A=(0,n.useRef)(null),T=(0,n.useRef)(0),N=(0,n.useRef)(null),_=(0,g.A)(),I=_.mainApi,R=_.isMainConnected,F=(t=(0,b.qZ)(),r=1,function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,i,c,a=[],u=!0,l=!1;try{if(i=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;u=!1}else for(;!(u=(n=i.call(e)).done)&&(a.push(n.value),a.length!==r);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=e.return&&(c=e.return(),Object(c)!==c))return}finally{if(l)throw o}}return a}}(t,r)||function(t,r){if(t){if("string"==typeof t)return k(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?k(t,r):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];return(0,s.Bd)("panels").t,(0,n.useEffect)((function(){R&&(I.startTerminal(),N.current=setInterval((function(){I.startTerminal()}),2e3))}),[I,R]),(0,n.useEffect)((function(){var t=function(){var t=S(x().mark((function t(){var r,e,n,o,s,f;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=O.current,A.current=new i.Terminal({rendererType:"canvas",fontSize:14,fontFamily:'Consolas, "Courier New", monospace',bellStyle:"sound",cursorBlink:!0,theme:j(j({},c.AdventureTime),{},{background:"#0F1014"}),windowsMode:!0}),E.current=new u.FitAddon,A.current.loadAddon(new a.WebLinksAddon),A.current.loadAddon(E.current),E.current.fit(),A.current.open(r),t.prev=7,t.next=10,d({rows:A.current.rows,cols:A.current.cols});case 10:n=t.sent,e=n.data,t.next=17;break;case 14:t.prev=14,t.t0=t.catch(7),v.debug(JSON.stringify(t.t0));case 17:o="".concat((0,w.l8)()).concat((0,w.Ln)(),":8889/terminals"),s="".concat(o,"/").concat(e),L.current=new WebSocket(s),function t(){L.current.onopen=function(){var t=new l.AttachAddon(L.current);A.current.loadAddon(t),v.debug("terminal connection opened")},L.current.onmessage=function(t){},L.current.onclose=function(r){v.debug("terminal connection closed"),r&&v.debug(JSON.stringify(r)),setTimeout((function(){T.current<=30?(v.debug("链接失败，重试"),L.current=new WebSocket(s),t(),A.current.clear(),T.current+=1):v.debug("链接失败，重试次数已达上限")}),300)},L.current.onerror=function(t){v.debug("与服务器连接丢失异常"),t&&v.debug(JSON.stringify(t))}}(),f=P(S(x().mark((function t(){var r;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,void 0,void 0,r={rows:null===(n=A.current)||void 0===n?void 0:n.rows,cols:null===(o=A.current)||void 0===o?void 0:o.cols},t.next=6,m(e,r);case 6:E.current.fit(),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(2),v.debug("resize request fail"),v.debug(JSON.stringify(t.t0));case 13:case"end":return t.stop()}var n,o}),t,null,[[2,9]])}))),3e3),A.current.onResize((function(){f()})),p((function(t,r){f()}));case 25:case"end":return t.stop()}}),t,null,[[7,14]])})));return function(){return t.apply(this,arguments)}}();setTimeout((function(){t()}),500)}),[]),(0,n.useEffect)((function(){(null==F?void 0:F.Terminal.processStatus.status)===b.fh.OK&&N.current&&clearInterval(N.current)}),[F]),o().createElement(h.A,{style:{height:"100%"}},o().createElement("div",{className:"terminal-container",ref:O}))}function T(t){var r=(0,n.useMemo)((function(){return(0,p.A)({PanelComponent:A,panelId:t.panelId})}),[]);return o().createElement(r,t)}A.displayName="InnerTerminal";const N=o().memo(T)}}]);