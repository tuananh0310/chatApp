(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(t,e,r){t.exports=r(48)},42:function(t,e,r){},44:function(t,e,r){},48:function(t,e,r){"use strict";r.r(e);var n=r(9),o=r.n(n),a=r(30),i=r.n(a),c=(r(42),r(0)),u=r(13),l=(r(44),r(24)),s=(r(49),r(46),r(31)),h=r(32);function f(){f=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(F){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),i=new O(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return k()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(F){return{type:"throw",arg:F}}}t.wrap=u;var s={};function h(){}function p(){}function d(){}var m={};c(m,o,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(j([])));y&&y!==e&&r.call(y,o)&&(m=y);var g=d.prototype=h.prototype=Object.create(m);function w(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var n;this._invoke=function(o,a){function i(){return new e(function(n,i){!function n(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(h).then(function(t){s.value=t,i(s)},function(t){return n("throw",t,i,c)})}c(u.arg)}(o,a,n,i)})}return n=n?n.then(i,i):i()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=d,c(g,"constructor",d),c(d,"constructor",p),p.displayName=c(d,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(E.prototype),c(E.prototype,a,function(){return this}),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},w(g),c(g,i,"Generator"),c(g,o,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}l.a.initializeApp({apiKey:"AIzaSyCcFhLiXX8ulInqA2kGqWK6xopkI0xU1Ug",authDomain:"chat-app-dcaf1.firebaseapp.com",projectId:"chat-app-dcaf1",storageBucket:"chat-app-dcaf1.appspot.com",messagingSenderId:"305953239821",appId:"1:305953239821:web:71dad4bad14822272f7644",measurementId:"G-265R0NTDW3"});var p=l.a.auth(),d=l.a.firestore();function m(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{onClick:function(){var t=new l.a.auth.GoogleAuthProvider;p.signInWithPopup(t)}},"\u0110\u0103ng nh\u1eadp b\u1eb1ng Google \u0111\u1ec3 chat v\u1edbi Tu\u1ea5n Anh ^^"))}function v(){return p.currentUser&&o.a.createElement("button",{className:"sign-out",onClick:function(){return p.signOut()}},"Sign Out")}function y(){var t=Object(n.useRef)(),e=d.collection("messages"),r=e.orderBy("createAt").limit(25),a=Object(h.a)(r,{idField:"id"}),i=Object(u.a)(a,1)[0],s=Object(n.useState)(""),m=Object(u.a)(s,2),v=m[0],y=m[1],w=function(){var r=Object(c.a)(f().mark(function r(n){var o,a,i;return f().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return n.preventDefault(),o=p.currentUser,a=o.uid,i=o.photoURL,r.next=4,e.add({text:v,createAt:l.a.firestore.FieldValue.serverTimestamp(),uid:a,photoURL:i});case 4:y(""),t.current.scrollIntoView({behavior:"smooth"});case 6:case"end":return r.stop()}},r)}));return function(t){return r.apply(this,arguments)}}();return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,i&&i.map(function(t){return o.a.createElement(g,{key:t.id,message:t})})),o.a.createElement("form",{onSubmit:w},o.a.createElement("input",{value:v,onChange:function(t){return y(t.target.value)},placeholder:"say something nice"}),o.a.createElement("button",{type:"submit"},"Sent")))}function g(t){var e=t.message,r=e.text,n=e.uid,a=e.photoURL,i=n===p.currentUser.uid?"sent":"received";return o.a.createElement("div",{className:"message ".concat(i)},o.a.createElement("img",{src:a}),o.a.createElement("p",null,r))}var w=function(){var t=Object(s.a)(p),e=Object(u.a)(t,1)[0];return o.a.createElement("div",{className:"App"},o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:"App-header"},o.a.createElement("h1",null,"\ud83d\udcac"),o.a.createElement(v,null))),o.a.createElement("section",null,e?o.a.createElement(y,null):o.a.createElement(m,null)))},E=function(t){t&&t instanceof Function&&r.e(1).then(r.bind(null,50)).then(function(e){var r=e.getCLS,n=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;r(t),n(t),o(t),a(t),i(t)})};i.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,null))),E()}},[[34,3,2]]]);
//# sourceMappingURL=main.9e993c95.chunk.js.map