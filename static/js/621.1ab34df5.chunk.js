"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[621],{1207:function(e,t,n){n.d(t,{M1:function(){return g},TP:function(){return m},_L:function(){return l},q5:function(){return y},z1:function(){return f}});var r=n(5861),o=n(7757),a=n.n(o),i=n(4569),s=n.n(i),c="e1127228e5b086ad27f085a5b4b021d7",u="https://api.themoviedb.org/3/";function l(){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("".concat(u,"/trending/movie/day?api_key=").concat(c));case 3:return t=e.sent,n=t.data.results.map((function(e){return{id:e.id,movieName:e.original_title}})),e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function f(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&language=en-US&query=").concat(t,"&page=1&include_adult=true"));case 3:return n=e.sent,r=n.data.results.map((function(e){return{id:e.id,movieName:e.original_title}})),e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function m(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("".concat(u,"movie/").concat(t,"?api_key=").concat(c,"&language=en-US"));case 3:return n=e.sent,r=[n.data].map((function(e){return{poster:"https://themoviedb.org/t/p/w500/".concat(e.poster_path),tag:e.tagline,movieName:e.original_title,userScore:e.vote_average,overview:e.overview,genres:e.genres.map((function(e){return e.name}))}})),e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function g(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("".concat(u,"movie/").concat(t,"/credits?api_key=").concat(c,"&language=en-US"));case 3:return n=e.sent,r=n.data.cast.map((function(e){return{castId:e.cast_id,name:e.original_name,character:e.character,castMemberPhoto:"https://themoviedb.org/t/p/w500/".concat(e.profile_path)}})),e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function y(e){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("".concat(u,"movie/").concat(t,"/reviews?api_key=").concat(c,"&language=en-US"));case 3:return n=e.sent,r=n.data.results.map((function(e){return{reviewId:e.id,author:e.author,review:e.content}})),e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}},621:function(e,t,n){n.r(t),n.d(t,{default:function(){return ee}});var r=n(885),o=n(2791),a=n(1207),i=n(3504),s=n(6871);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=n(907);var p=n(181);function m(e){return function(e){if(Array.isArray(e))return(0,f.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,p.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=v(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var g=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=v(e))&&(r&&(r+=" "),r+=t);return r},h=["theme","type"],y=["delay","staleId"];function b(e){return"number"===typeof e&&!isNaN(e)}function T(e){return"boolean"===typeof e}function E(e){return"string"===typeof e}function _(e){return"function"===typeof e}function O(e){return E(e)||_(e)?e:null}function C(e){return null!=e}function I(e){return(0,o.isValidElement)(e)||E(e)||_(e)||b(e)}var w={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},L={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function x(e){var t=e.enter,n=e.exit,r=e.appendPosition,a=void 0!==r&&r,i=e.collapse,s=void 0===i||i,c=e.collapseDuration,u=void 0===c?300:c;return function(e){var r=e.children,i=e.position,c=e.preventExitTransition,l=e.done,d=e.nodeRef,f=e.isIn,p=a?t+"--"+i:t,v=a?n+"--"+i:n,g=(0,o.useRef)(0);return(0,o.useLayoutEffect)((function(){var e=d.current,t=p.split(" "),n=function n(r){var o;r.target===d.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===g.current&&"animationcancel"!==r.type&&(o=e.classList).remove.apply(o,m(t)))};!function(){var r;(r=e.classList).add.apply(r,m(t)),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)}()}),[]),(0,o.useEffect)((function(){var e=d.current,t=function t(){e.removeEventListener("animationend",t),s?function(e,t,n){void 0===n&&(n=300);var r=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all "+n+"ms",requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,l,u):l()};f||(c?t():(g.current=1,e.className+=" "+v,e.addEventListener("animationend",t)))}),[f]),o.createElement(o.Fragment,null,r)}}function P(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var k={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(r){var o=setTimeout((function(){r.apply(void 0,m([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(o)}))}},N=function(e){var t=e.theme,n=e.type,r=d(e,h);return o.createElement("svg",l({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-"+n+")"},r))};var S={info:function(e){return o.createElement(N,l({},e),o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return o.createElement(N,l({},e),o.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return o.createElement(N,l({},e),o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return o.createElement(N,l({},e),o.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return o.createElement("div",{className:"Toastify__spinner"})}};function R(e){var t=e.theme,n=e.type,r=e.isLoading,a=e.icon,i=null,s={theme:t,type:n};return!1===a||(_(a)?i=a(s):(0,o.isValidElement)(a)?i=(0,o.cloneElement)(a,s):E(a)||b(a)?i=a:r?i=S.spinner():function(e){return e in S}(n)&&(i=S[n](s))),i}function D(e){var t=(0,o.useReducer)((function(e){return e+1}),0),n=(0,r.Z)(t,2)[1],a=(0,o.useState)([]),i=(0,r.Z)(a,2),s=i[0],c=i[1],u=(0,o.useRef)(null),l=(0,o.useRef)(new Map).current,f=function(e){return-1!==s.indexOf(e)},p=(0,o.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:f,getToast:function(e){return l.get(e)}}).current;function v(e){var t=e.containerId;!p.props.limit||t&&p.containerId!==t||(p.count-=p.queue.length,p.queue=[])}function g(e){c((function(t){return C(e)?t.filter((function(t){return t!==e})):[]}))}function h(){var e=p.queue.shift();L(e.toastContent,e.toastProps,e.staleId)}function w(e,t){var r=t.delay,a=t.staleId,i=d(t,y);if(I(e)&&!function(e){return!u.current||p.props.enableMultiContainer&&e.containerId!==p.props.containerId||l.has(e.toastId)&&null==e.updateId}(i)){var s=i.toastId,c=i.updateId,f=i.data,m=p.props,v=function(){return g(s)},w=null==c;w&&p.count++;var x,N,S={toastId:s,updateId:c,data:f,containerId:i.containerId,isLoading:i.isLoading,theme:i.theme||m.theme,icon:null!=i.icon?i.icon:m.icon,isIn:!1,key:i.key||p.toastKey++,type:i.type,closeToast:v,closeButton:i.closeButton,rtl:m.rtl,position:i.position||m.position,transition:i.transition||m.transition,className:O(i.className||m.toastClassName),bodyClassName:O(i.bodyClassName||m.bodyClassName),style:i.style||m.toastStyle,bodyStyle:i.bodyStyle||m.bodyStyle,onClick:i.onClick||m.onClick,pauseOnHover:T(i.pauseOnHover)?i.pauseOnHover:m.pauseOnHover,pauseOnFocusLoss:T(i.pauseOnFocusLoss)?i.pauseOnFocusLoss:m.pauseOnFocusLoss,draggable:T(i.draggable)?i.draggable:m.draggable,draggablePercent:i.draggablePercent||m.draggablePercent,draggableDirection:i.draggableDirection||m.draggableDirection,closeOnClick:T(i.closeOnClick)?i.closeOnClick:m.closeOnClick,progressClassName:O(i.progressClassName||m.progressClassName),progressStyle:i.progressStyle||m.progressStyle,autoClose:!i.isLoading&&(x=i.autoClose,N=m.autoClose,!1===x||b(x)&&x>0?x:N),hideProgressBar:T(i.hideProgressBar)?i.hideProgressBar:m.hideProgressBar,progress:i.progress,role:i.role||m.role,deleteToast:function(){var e=P(l.get(s),"removed");l.delete(s),k.emit(4,e);var t=p.queue.length;if(p.count=C(s)?p.count-1:p.count-p.displayedToast,p.count<0&&(p.count=0),t>0){var r=C(s)?1:p.props.limit;if(1===t||1===r)p.displayedToast++,h();else{var o=r>t?t:r;p.displayedToast=o;for(var a=0;a<o;a++)h()}}else n()}};S.iconOut=R(S),_(i.onOpen)&&(S.onOpen=i.onOpen),_(i.onClose)&&(S.onClose=i.onClose),S.closeButton=m.closeButton,!1===i.closeButton||I(i.closeButton)?S.closeButton=i.closeButton:!0===i.closeButton&&(S.closeButton=!I(m.closeButton)||m.closeButton);var D=e;(0,o.isValidElement)(e)&&!E(e.type)?D=(0,o.cloneElement)(e,{closeToast:v,toastProps:S,data:f}):_(e)&&(D=e({closeToast:v,toastProps:S,data:f})),m.limit&&m.limit>0&&p.count>m.limit&&w?p.queue.push({toastContent:D,toastProps:S,staleId:a}):b(r)?setTimeout((function(){L(D,S,a)}),r):L(D,S,a)}}function L(e,t,n){var r=t.toastId;n&&l.delete(n);var o={content:e,props:t};l.set(r,o),c((function(e){return[].concat(m(e),[r]).filter((function(e){return e!==n}))})),k.emit(4,P(o,null==o.props.updateId?"added":"updated"))}return(0,o.useEffect)((function(){return p.containerId=e.containerId,k.cancelEmit(3).on(0,w).on(1,(function(e){return u.current&&g(e)})).on(5,v).emit(2,p),function(){l.clear(),k.emit(3,p)}}),[]),(0,o.useEffect)((function(){p.props=e,p.isToastActive=f,p.displayedToast=s.length})),{getToastToRender:function(t){var n=new Map,r=Array.from(l.values());return e.newestOnTop&&r.reverse(),r.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:u,isToastActive:f}}function M(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function j(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function A(e){var t=(0,o.useState)(!1),n=(0,r.Z)(t,2),a=n[0],i=n[1],s=(0,o.useState)(!1),c=(0,r.Z)(s,2),u=c[0],l=c[1],d=(0,o.useRef)(null),f=(0,o.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,o.useRef)(e),m=e.autoClose,v=e.pauseOnHover,g=e.closeToast,h=e.onClick,y=e.closeOnClick;function b(t){if(e.draggable){f.didMove=!1,document.addEventListener("mousemove",C),document.addEventListener("mouseup",I),document.addEventListener("touchmove",C),document.addEventListener("touchend",I);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=M(t.nativeEvent),f.y=j(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function T(){if(f.boundingRect){var t=f.boundingRect,n=t.top,r=t.bottom,o=t.left,a=t.right;e.pauseOnHover&&f.x>=o&&f.x<=a&&f.y>=n&&f.y<=r?O():E()}}function E(){i(!0)}function O(){i(!1)}function C(t){var n=d.current;f.canDrag&&n&&(f.didMove=!0,a&&O(),f.x=M(t),f.y=j(t),"x"===e.draggableDirection?f.delta=f.x-f.start:f.delta=f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate"+e.draggableDirection+"("+f.delta+"px)",n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function I(){document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",I),document.removeEventListener("touchmove",C),document.removeEventListener("touchend",I);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate"+e.draggableDirection+"(0)",t.style.opacity="1"}}(0,o.useEffect)((function(){p.current=e})),(0,o.useEffect)((function(){return d.current&&d.current.addEventListener("d",E,{once:!0}),_(e.onOpen)&&e.onOpen((0,o.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;_(e.onClose)&&e.onClose((0,o.isValidElement)(e.children)&&e.children.props)}}),[]),(0,o.useEffect)((function(){return e.pauseOnFocusLoss&&function(){document.hasFocus()||O();window.addEventListener("focus",E),window.addEventListener("blur",O)}(),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",E),window.removeEventListener("blur",O))}}),[e.pauseOnFocusLoss]);var w={onMouseDown:b,onTouchStart:b,onMouseUp:T,onTouchEnd:T};return m&&v&&(w.onMouseEnter=O,w.onMouseLeave=E),y&&(w.onClick=function(e){h&&h(e),f.canCloseOnClick&&g()}),{playToast:E,pauseToast:O,isRunning:a,preventExitTransition:u,toastRef:d,eventHandlers:w}}function B(e){var t=e.closeToast,n=e.theme,r=e.ariaLabel,a=void 0===r?"close":r;return o.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":a},o.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function F(e){var t=e.delay,n=e.isRunning,r=e.closeToast,a=e.type,i=e.hide,s=e.className,u=e.style,d=e.controlledProgress,f=e.progress,p=e.rtl,m=e.isIn,v=e.theme,h=l(l({},u),{},{animationDuration:t+"ms",animationPlayState:n?"running":"paused",opacity:i?0:1});d&&(h.transform="scaleX("+f+")");var y=g("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+v,"Toastify__progress-bar--"+a,c({},"Toastify__progress-bar--rtl",p)),b=_(s)?s({rtl:p,type:a,defaultClassName:y}):g(y,s),T=c({},d&&f>=1?"onTransitionEnd":"onAnimationEnd",d&&f<1?null:function(){m&&r()});return o.createElement("div",l({role:"progressbar","aria-hidden":i?"true":"false","aria-label":"notification timer",className:b,style:h},T))}F.defaultProps={type:L.DEFAULT,hide:!1};var z=function(e){var t=A(e),n=t.isRunning,r=t.preventExitTransition,a=t.toastRef,i=t.eventHandlers,s=e.closeButton,u=e.children,d=e.autoClose,f=e.onClick,p=e.type,m=e.hideProgressBar,v=e.closeToast,h=e.transition,y=e.position,b=e.className,T=e.style,E=e.bodyClassName,O=e.bodyStyle,C=e.progressClassName,I=e.progressStyle,w=e.updateId,L=e.role,x=e.progress,P=e.rtl,k=e.toastId,N=e.deleteToast,S=e.isIn,R=e.isLoading,D=e.iconOut,M=e.theme,j=g("Toastify__toast","Toastify__toast-theme--"+M,"Toastify__toast--"+p,c({},"Toastify__toast--rtl",P)),z=_(b)?b({rtl:P,position:y,type:p,defaultClassName:j}):g(j,b),H=!!x,U={closeToast:v,type:p,theme:M},Z=null;return!1===s||(Z=_(s)?s(U):o.isValidElement(s)?o.cloneElement(s,U):B(U)),o.createElement(h,{isIn:S,done:N,position:y,preventExitTransition:r,nodeRef:a},o.createElement("div",l(l({id:k,onClick:f,className:z},i),{},{style:T,ref:a}),o.createElement("div",l(l({},S&&{role:L}),{},{className:_(E)?E({type:p}):g("Toastify__toast-body",E),style:O}),null!=D&&o.createElement("div",{className:g("Toastify__toast-icon",c({},"Toastify--animate-icon Toastify__zoom-enter",!R))},D),o.createElement("div",null,u)),Z,(d||H)&&o.createElement(F,l(l({},w&&!H?{key:"pb-"+w}:{}),{},{rtl:P,theme:M,delay:d,isRunning:n,isIn:S,closeToast:v,hide:m,type:p,style:I,className:C,controlledProgress:H,progress:x}))))},H=x({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),U=(x({enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0}),x({enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"}),x({enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"}),(0,o.forwardRef)((function(e,t){var n=D(e),r=n.getToastToRender,a=n.containerRef,i=n.isToastActive,s=e.className,u=e.style,d=e.rtl,f=e.containerId;function p(e){var t=g("Toastify__toast-container","Toastify__toast-container--"+e,c({},"Toastify__toast-container--rtl",d));return _(s)?s({position:e,rtl:d,defaultClassName:t}):g(t,O(s))}return(0,o.useEffect)((function(){t&&(t.current=a.current)}),[]),o.createElement("div",{ref:a,className:"Toastify",id:f},r((function(e,t){var n=t.length?l({},u):l(l({},u),{},{pointerEvents:"none"});return o.createElement("div",{className:p(e),style:n,key:"container-"+e},t.map((function(e,n){var r=e.content,a=e.props;return o.createElement(z,l(l({},a),{},{isIn:i(a.toastId),style:l(l({},a.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-"+a.key}),r)})))})))})));U.displayName="ToastContainer",U.defaultProps={position:w.TOP_RIGHT,transition:H,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:B,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var Z,q=new Map,Q=[];function V(){return Math.random().toString(36).substring(2,9)}function G(e){return e&&(E(e.toastId)||b(e.toastId))?e.toastId:V()}function W(e,t){return q.size>0?k.emit(0,e,t):Q.push({content:e,options:t}),t.toastId}function X(e,t){return l(l({},t),{},{type:t&&t.type||e,toastId:G(t)})}function Y(e){return function(t,n){return W(t,X(e,n))}}function K(e,t){return W(e,X(L.DEFAULT,t))}K.loading=function(e,t){return W(e,X(L.DEFAULT,l({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},K.promise=function(e,t,n){var r,o=t.pending,a=t.error,i=t.success;o&&(r=E(o)?K.loading(o,n):K.loading(o.render,l(l({},n),o)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},c=function(e,t,o){if(null!=t){var a=l(l(l({type:e},s),n),{},{data:o}),i=E(t)?{render:t}:t;return r?K.update(r,l(l({},a),i)):K(i.render,l(l({},a),i)),o}K.dismiss(r)},u=_(e)?e():e;return u.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),u},K.success=Y(L.SUCCESS),K.info=Y(L.INFO),K.error=Y(L.ERROR),K.warning=Y(L.WARNING),K.warn=K.warning,K.dark=function(e,t){return W(e,X(L.DEFAULT,l({theme:"dark"},t)))},K.dismiss=function(e){q.size>0?k.emit(1,e):Q=Q.filter((function(t){return C(e)&&t.options.toastId!==e}))},K.clearWaitingQueue=function(e){return void 0===e&&(e={}),k.emit(5,e)},K.isActive=function(e){var t=!1;return q.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},K.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,r=q.get(n||Z);return r?r.getToast(e):null}(e,t);if(n){var r=n.props,o=n.content,a=l(l(l({},r),t),{},{toastId:t.toastId||e,updateId:V()});a.toastId!==e&&(a.staleId=e);var i=a.render||o;delete a.render,W(i,a)}}),0)},K.done=function(e){K.update(e,{progress:1})},K.onChange=function(e){return k.on(4,e),function(){k.off(4,e)}},K.POSITION=w,K.TYPE=L,k.on(2,(function(e){Z=e.containerId||e,q.set(Z,e),Q.forEach((function(e){k.emit(0,e.content,e.options)})),Q=[]})).on(3,(function(e){q.delete(e.containerId||e),0===q.size&&k.off(0).off(1).off(5)}));var J=n(184);function $(e){var t=e.handleMoviesSubmit,n=(0,o.useState)(""),a=(0,r.Z)(n,2),i=a[0],s=a[1];return(0,J.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==i.trim("")?(t(i),s("")):K.error("Please enter a search request")},children:[(0,J.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:i,onChange:function(e){s(e.currentTarget.value)}}),(0,J.jsx)("button",{type:"submit",children:(0,J.jsx)("span",{children:"Search"})}),(0,J.jsx)(U,{})]})}function ee(){var e,t=(0,s.TH)(),n=new URLSearchParams(t.search),c=(0,o.useState)(n.get(null!==(e="search")?e:"")),u=(0,r.Z)(c,2),l=u[0],d=u[1],f=(0,o.useState)([]),p=(0,r.Z)(f,2),m=p[0],v=p[1];return(0,o.useEffect)((function(){l&&a.z1(l).then(v)}),[l]),(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)($,{handleMoviesSubmit:function(e){d(e),v([])}}),m&&(0,J.jsx)(J.Fragment,{children:(0,J.jsx)("ul",{children:m.map((function(e){return(0,J.jsx)("li",{children:(0,J.jsx)(i.rU,{to:{pathname:"/movies/".concat(e.id,"?search=").concat(l)},children:e.movieName})},e.id)}))})})]})}}}]);
//# sourceMappingURL=621.1ab34df5.chunk.js.map