/*!
 * Vue.js v0.12.9
 * (c) 2015 Evan You
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):"object"==typeof exports?exports.Vue=e():t.Vue=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){function i(t){this._init(t)}var r=n(1),s=r.extend;s(i,n(9)),i.options={replace:!0,directives:n(25),elementDirectives:n(47),filters:n(50),transitions:{},components:{},partials:{}};var o=i.prototype;Object.defineProperty(o,"$data",{get:function(){return this._data},set:function(t){t!==this._data&&this._setData(t)}}),s(o,n(52)),s(o,n(53)),s(o,n(54)),s(o,n(58)),s(o,n(60)),s(o,n(61)),s(o,n(62)),s(o,n(63)),s(o,n(64)),s(o,n(65)),t.exports=r.Vue=i},function(t,e,n){var i=n(4),r=i.extend;r(e,i),r(e,n(5)),r(e,n(6)),r(e,n(2)),r(e,n(7)),r(e,n(8))},function(t,e,n){function i(t,e){var n,r,s;for(n in e)r=t[n],s=e[n],t.hasOwnProperty(n)?h.isObject(r)&&h.isObject(s)&&i(r,s):t.$add(n,s);return t}function r(t,e){var n=Object.create(t);return e?l(n,a(e)):n}function s(t){if(t.components)for(var e,n=t.components=a(t.components),i=Object.keys(n),r=0,s=i.length;s>r;r++){var o=i[r];h.commonTagRE.test(o)||(e=n[o],h.isPlainObject(e)&&(e.id=e.id||o,n[o]=e._Ctor||(e._Ctor=h.Vue.extend(e))))}}function o(t){var e=t.props;h.isPlainObject(e)?t.props=Object.keys(e).map(function(t){var n=e[t];return h.isPlainObject(n)||(n={type:n}),n.name=t,n}):h.isArray(e)&&(t.props=e.map(function(t){return"string"==typeof t?{name:t}:t}))}function a(t){if(h.isArray(t)){for(var e,n={},i=t.length;i--;){e=t[i];var r=e.id||e.options&&e.options.id;r&&(n[r]=e)}return n}return t}var h=n(1),c=n(3),l=h.extend,u=Object.create(null);u.data=function(t,e,n){return n?t||e?function(){var r="function"==typeof e?e.call(n):e,s="function"==typeof t?t.call(n):void 0;return r?i(r,s):s}:void 0:e?"function"!=typeof e?t:t?function(){return i(e.call(this),t.call(this))}:e:t},u.el=function(t,e,n){if(n||!e||"function"==typeof e){var i=e||t;return n&&"function"==typeof i?i.call(n):i}},u.created=u.ready=u.attached=u.detached=u.beforeCompile=u.compiled=u.beforeDestroy=u.destroyed=u.props=function(t,e){return e?t?t.concat(e):h.isArray(e)?e:[e]:t},u.paramAttributes=function(){},c._assetTypes.forEach(function(t){u[t+"s"]=r}),u.watch=u.events=function(t,e){if(!e)return t;if(!t)return e;var n={};l(n,t);for(var i in e){var r=n[i],s=e[i];r&&!h.isArray(r)&&(r=[r]),n[i]=r?r.concat(s):[s]}return n},u.methods=u.computed=function(t,e){if(!e)return t;if(!t)return e;var n=Object.create(t);return l(n,e),n};var f=function(t,e){return void 0===e?t:e};e.mergeOptions=function p(t,e,n){function i(i){var r=u[i]||f;a[i]=r(t[i],e[i],n,i)}s(e),o(e);var r,a={};if(e.mixins)for(var h=0,c=e.mixins.length;c>h;h++)t=p(t,e.mixins[h],n);for(r in t)i(r);for(r in e)t.hasOwnProperty(r)||i(r);return a},e.resolveAsset=function(t,e,n){for(var i=h.camelize(n),r=t[e][n]||t[e][i];!r&&t._parent&&(!c.strict||t._repeat);)t=t._parent.$options,r=t[e][n]||t[e][i];return r}},function(t,e,n){t.exports={prefix:"v-",debug:!1,strict:!1,silent:!1,proto:!0,interpolate:!0,async:!0,warnExpressionErrors:!0,_delimitersChanged:!0,_assetTypes:["component","directive","elementDirective","filter","transition","partial"],_propBindingModes:{ONE_WAY:0,TWO_WAY:1,ONE_TIME:2},_maxUpdateCount:100};var i=["{{","}}"];Object.defineProperty(t.exports,"delimiters",{get:function(){return i},set:function(t){i=t,this._delimitersChanged=!0}})},function(t,e,n){function i(t,e){return e?e.toUpperCase():""}e.isReserved=function(t){var e=(t+"").charCodeAt(0);return 36===e||95===e},e.toString=function(t){return null==t?"":t.toString()},e.toNumber=function(t){if("string"!=typeof t)return t;var e=Number(t);return isNaN(e)?t:e},e.toBoolean=function(t){return"true"===t?!0:"false"===t?!1:t},e.stripQuotes=function(t){var e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e!==n||34!==e&&39!==e?!1:t.slice(1,-1)},e.camelize=function(t){return t.replace(/-(\w)/g,i)},e.hyphenate=function(t){return t.replace(/([a-z\d])([A-Z])/g,"$1-$2").toLowerCase()};var r=/(?:^|[-_\/])(\w)/g;e.classify=function(t){return t.replace(r,i)},e.bind=function(t,e){return function(n){var i=arguments.length;return i?i>1?t.apply(e,arguments):t.call(e,n):t.call(e)}},e.toArray=function(t,e){e=e||0;for(var n=t.length-e,i=new Array(n);n--;)i[n]=t[n+e];return i},e.extend=function(t,e){for(var n in e)t[n]=e[n];return t},e.isObject=function(t){return null!==t&&"object"==typeof t};var s=Object.prototype.toString;e.isPlainObject=function(t){return"[object Object]"===s.call(t)},e.isArray=Array.isArray,e.define=function(t,e,n,i){Object.defineProperty(t,e,{value:n,enumerable:!!i,writable:!0,configurable:!0})},e.debounce=function(t,e){var n,i,r,s,o,a=function(){var h=Date.now()-s;e>h&&h>=0?n=setTimeout(a,e-h):(n=null,o=t.apply(r,i),n||(r=i=null))};return function(){return r=this,i=arguments,s=Date.now(),n||(n=setTimeout(a,e)),o}},e.indexOf=function(t,e){for(var n=0,i=t.length;i>n;n++)if(t[n]===e)return n;return-1},e.cancellable=function(t){var e=function(){return e.cancelled?void 0:t.apply(this,arguments)};return e.cancel=function(){e.cancelled=!0},e}},function(t,e,n){e.hasProto="__proto__"in{};var i=e.inBrowser="undefined"!=typeof window&&"[object Object]"!==Object.prototype.toString.call(window);if(e.isIE9=i&&navigator.userAgent.toLowerCase().indexOf("msie 9.0")>0,e.isAndroid=i&&navigator.userAgent.toLowerCase().indexOf("android")>0,i&&!e.isIE9){var r=void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend,s=void 0===window.onanimationend&&void 0!==window.onwebkitanimationend;e.transitionProp=r?"WebkitTransition":"transition",e.transitionEndEvent=r?"webkitTransitionEnd":"transitionend",e.animationProp=s?"WebkitAnimation":"animation",e.animationEndEvent=s?"webkitAnimationEnd":"animationend"}e.nextTick=function(){function t(){i=!1;var t=n.slice(0);n=[];for(var e=0;e<t.length;e++)t[e]()}var e,n=[],i=!1;if("undefined"!=typeof MutationObserver){var r=1,s=new MutationObserver(t),o=document.createTextNode(r);s.observe(o,{characterData:!0}),e=function(){r=(r+1)%2,o.data=r}}else e=setTimeout;return function(r,s){var o=s?function(){r.call(s)}:r;n.push(o),i||(i=!0,e(t,0))}}()},function(t,e,n){function i(t,e){e&&3===e.nodeType&&!e.data.trim()&&t.removeChild(e)}var r=(n(1),n(3));e.query=function(t){if("string"==typeof t){t=document.querySelector(t)}return t},e.inDoc=function(t){var e=document.documentElement,n=t&&t.parentNode;return e===t||e===n||!(!n||1!==n.nodeType||!e.contains(n))},e.attr=function(t,e){e=r.prefix+e;var n=t.getAttribute(e);return null!==n&&t.removeAttribute(e),n},e.before=function(t,e){e.parentNode.insertBefore(t,e)},e.after=function(t,n){n.nextSibling?e.before(t,n.nextSibling):n.parentNode.appendChild(t)},e.remove=function(t){t.parentNode.removeChild(t)},e.prepend=function(t,n){n.firstChild?e.before(t,n.firstChild):n.appendChild(t)},e.replace=function(t,e){var n=t.parentNode;n&&n.replaceChild(e,t)},e.on=function(t,e,n){t.addEventListener(e,n)},e.off=function(t,e,n){t.removeEventListener(e,n)},e.addClass=function(t,e){if(t.classList)t.classList.add(e);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}},e.removeClass=function(t,e){if(t.classList)t.classList.remove(e);else{for(var n=" "+(t.getAttribute("class")||"")+" ",i=" "+e+" ";n.indexOf(i)>=0;)n=n.replace(i," ");t.setAttribute("class",n.trim())}},e.extractContent=function(t,n){var r,s;if(e.isTemplate(t)&&t.content instanceof DocumentFragment&&(t=t.content),t.hasChildNodes())for(i(t,t.firstChild),i(t,t.lastChild),s=n?document.createDocumentFragment():document.createElement("div");r=t.firstChild;)s.appendChild(r);return s},e.isTemplate=function(t){return t.tagName&&"template"===t.tagName.toLowerCase()},e.createAnchor=function(t,e){return r.debug?document.createComment(t):document.createTextNode(e?" ":"")}},function(t,e,n){var i=n(1);e.commonTagRE=/^(div|p|span|img|a|br|ul|ol|li|h1|h2|h3|h4|h5|code|pre)$/,e.checkComponent=function(t,n){var r=t.tagName.toLowerCase();if("component"===r){var s=t.getAttribute("is");return t.removeAttribute("is"),s}return!e.commonTagRE.test(r)&&i.resolveAsset(n,"components",r)?r:(r=i.attr(t,"component"))?r:void 0},e.initProp=function(t,n,r){if(e.assertProp(n,r)){var s=n.path;s in t?i.define(t,s,r,!0):t[s]=r,t._data[s]=r}},e.assertProp=function(t,e){if(null===t.raw&&!t.required)return!0;var n,r=t.options,s=r.type,o=!0;if(s&&(s===String?(n="string",o=typeof e===n):s===Number?(n="number",o="number"==typeof e):s===Boolean?(n="boolean",o="boolean"==typeof e):s===Function?(n="function",o="function"==typeof e):s===Object?(n="object",o=i.isPlainObject(e)):s===Array?(n="array",o=i.isArray(e)):o=e instanceof s),!o)return!1;var a=r.validator;return a&&!a.call(null,e)?!1:!0}},function(t,e,n){},function(t,e,n){function i(t){return new Function("return function "+r.classify(t)+" (options) { this._init(options) }")()}var r=n(1),s=n(3);e.util=r,e.config=s,e.nextTick=r.nextTick,e.compiler=n(13),e.parsers={path:n(16),text:n(10),template:n(22),directive:n(12),expression:n(19)},e.cid=0;var o=1;e.extend=function(t){t=t||{};var e=this,n=i(t.name||e.options.name||"VueComponent");return n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.cid=o++,n.options=r.mergeOptions(e.options,t),n["super"]=e,n.extend=e.extend,s._assetTypes.forEach(function(t){n[t]=e[t]}),n},e.use=function(t){var e=r.toArray(arguments,1);return e.unshift(this),"function"==typeof t.install?t.install.apply(t,e):t.apply(null,e),this},s._assetTypes.forEach(function(t){e[t]=function(e,n){return n?("component"===t&&r.isPlainObject(n)&&(n.name=e,n=r.Vue.extend(n)),void(this.options[t+"s"][e]=n)):this.options[t+"s"][e]}})},function(t,e,n){function i(t){return t.replace(v,"\\$&")}function r(){p._delimitersChanged=!1;var t=p.delimiters[0],e=p.delimiters[1];l=t.charAt(0),u=e.charAt(e.length-1);var n=i(l),r=i(u),s=i(t),o=i(e);h=new RegExp(n+"?"+s+"(.+?)"+o+r+"?","g"),c=new RegExp("^"+n+s+".*"+o+r+"$"),a=new f(1e3)}function s(t,e,n){return t.tag?e&&t.oneTime?'"'+e.$eval(t.value)+'"':o(t.value,n):'"'+t.value+'"'}function o(t,e){if(m.test(t)){var n=d.parse(t)[0];return n.filters?"this._applyFilters("+n.expression+",null,"+JSON.stringify(n.filters)+",false)":"("+t+")"}return e?t:"("+t+")"}var a,h,c,l,u,f=n(11),p=n(3),d=n(12),v=/[-.*+?^${}()|[\]\/\\]/g;e.parse=function(t){p._delimitersChanged&&r();var e=a.get(t);if(e)return e;if(t=t.replace(/\n/g,""),!h.test(t))return null;for(var n,i,s,o,l,u,f=[],d=h.lastIndex=0;n=h.exec(t);)i=n.index,i>d&&f.push({value:t.slice(d,i)}),o=n[1].charCodeAt(0),l=42===o,u=64===o,s=l||u?n[1].slice(1):n[1],f.push({tag:!0,value:s.trim(),html:c.test(n[0]),oneTime:l,twoWay:u}),d=i+n[0].length;return d<t.length&&f.push({value:t.slice(d)}),a.put(t,f),f},e.tokensToExp=function(t,e){return t.length>1?t.map(function(t){return s(t,e)}).join("+"):s(t[0],e,!0)};var m=/[^|]\|[^|]/},function(t,e,n){function i(t){this.size=0,this.limit=t,this.head=this.tail=void 0,this._keymap=Object.create(null)}var r=i.prototype;r.put=function(t,e){var n={key:t,value:e};return this._keymap[t]=n,this.tail?(this.tail.newer=n,n.older=this.tail):this.head=n,this.tail=n,this.size===this.limit?this.shift():void this.size++},r.shift=function(){var t=this.head;return t&&(this.head=this.head.newer,this.head.older=void 0,t.newer=t.older=void 0,this._keymap[t.key]=void 0),t},r.get=function(t,e){var n=this._keymap[t];if(void 0!==n)return n===this.tail?e?n:n.value:(n.newer&&(n===this.head&&(this.head=n.newer),n.newer.older=n.older),n.older&&(n.older.newer=n.newer),n.newer=void 0,n.older=this.tail,this.tail&&(this.tail.newer=n),this.tail=n,e?n:n.value)},t.exports=i},function(t,e,n){function i(){_.raw=o.slice(v,h).trim(),void 0===_.expression?_.expression=o.slice(m,h).trim():b!==v&&r(),(0===h||_.expression)&&g.push(_)}function r(){var t,e=o.slice(b,h).trim();if(e){t={};var n=e.match(x);t.name=n[0],n.length>1&&(t.args=n.slice(1).map(s))}t&&(_.filters=_.filters||[]).push(t),b=h+1}function s(t){var e=A.test(t)?t:C.stripQuotes(t);return{value:e||t,dynamic:!e}}var o,a,h,c,l,u,f,p,d,v,m,g,_,b,y,C=n(1),$=n(11),k=new $(1e3),w=/^[^\{\?]+$|^'[^']*'$|^"[^"]*"$/,x=/[^\s'"]+|'[^']+'|"[^"]+"/g,A=/^in$|^-?\d+/;e.parse=function(t){var e=k.get(t);if(e)return e;for(o=t,l=u=!1,f=p=d=v=m=0,b=0,g=[],_={},y=null,h=0,c=o.length;c>h;h++)if(a=o.charCodeAt(h),l)39===a&&(l=!l);else if(u)34===a&&(u=!u);else if(44!==a||d||f||p)if(58!==a||_.expression||_.arg)if(124===a&&124!==o.charCodeAt(h+1)&&124!==o.charCodeAt(h-1))void 0===_.expression?(b=h+1,_.expression=o.slice(m,h).trim()):r();else switch(a){case 34:u=!0;break;case 39:l=!0;break;case 40:d++;break;case 41:d--;break;case 91:p++;break;case 93:p--;break;case 123:f++;break;case 125:f--}else y=o.slice(v,h).trim(),w.test(y)&&(m=h+1,_.arg=C.stripQuotes(y)||y);else i(),_={},v=m=b=h+1;return(0===h||v!==h)&&i(),k.put(t,g),g}},function(t,e,n){var i=n(1);i.extend(e,n(14)),i.extend(e,n(24))},function(t,e,n){function i(t,e){var n=e._directives.length;return t(),e._directives.slice(n)}function r(t,e,n,i){return function(r){s(t,e,r),n&&i&&s(n,i)}}function s(t,e,n){for(var i=e.length;i--;)e[i]._teardown(),n||t._directives.$remove(e[i])}function o(t,e){var n=t.nodeType;return 1===n&&"SCRIPT"!==t.tagName?a(t,e):3===n&&w.interpolate&&t.data.trim()?h(t,e):null}function a(t,e){var n,i=t.hasAttributes();if(i&&(n=v(t,e)),n||(n=p(t,e)),n||(n=d(t,e)),!n&&i&&(n=_(t.attributes,e)),"TEXTAREA"===t.tagName){var r=n;n=function(t,e){e.value=t.$interpolate(e.value),r&&r(t,e)},n.terminal=!0}return n}function h(t,e){var n=x.parse(t.data);if(!n)return null;for(var i,r,s=document.createDocumentFragment(),o=0,a=n.length;a>o;o++)r=n[o],i=r.tag?c(r,e):document.createTextNode(r.value),s.appendChild(i);return l(n,s,e)}function c(t,e){function n(n){t.type=n,t.def=D(e,"directives",n),t.descriptor=A.parse(t.value)[0]}var i;return t.oneTime?i=document.createTextNode(t.value):t.html?(i=document.createComment("v-html"),n("html")):(i=document.createTextNode(" "),n("text")),i}function l(t,e){return function(n,i){for(var r,s,o,a=e.cloneNode(!0),h=$.toArray(a.childNodes),c=0,l=t.length;l>c;c++)r=t[c],s=r.value,r.tag&&(o=h[c],r.oneTime?(s=n.$eval(s),r.html?$.replace(o,T.parse(s,!0)):o.data=s):n._bindDir(r.type,o,r.descriptor,r.def));$.replace(i,a)}}function u(t,e){for(var n,i,r,s=[],a=0,h=t.length;h>a;a++)r=t[a],n=o(r,e),i=n&&n.terminal||"SCRIPT"===r.tagName||!r.hasChildNodes()?null:u(r.childNodes,e),s.push(n,i);return s.length?f(s):null}function f(t){return function(e,n,i){for(var r,s,o,a=0,h=0,c=t.length;c>a;h++){r=n[h],s=t[a++],o=t[a++];var l=$.toArray(r.childNodes);s&&s(e,r,i),o&&o(e,l,i)}}}function p(t,e){var n=t.tagName.toLowerCase();if(!$.commonTagRE.test(n)){var i=D(e,"elementDirectives",n);return i?g(t,n,"",e,i):void 0}}function d(t,e,n){var i=$.checkComponent(t,e,n);if(i){var r=function(t,e,n){t._bindDir("component",e,{expression:i},E,n)};return r.terminal=!0,r}}function v(t,e){if(null!==$.attr(t,"pre"))return m;for(var n,i,r=0,s=O.length;s>r;r++)if(i=O[r],null!==(n=$.attr(t,i)))return g(t,i,n,e)}function m(){}function g(t,e,n,i,r){var s=A.parse(n)[0];r=r||i.directives[e];var o=function(t,n,i){t._bindDir(e,n,s,r,i)};return o.terminal=!0,o}function _(t,e){for(var n,i,r,s,o,a,h=t.length,c=[];h--;)n=t[h],i=n.name,r=n.value,0===i.indexOf(w.prefix)?(o=i.slice(w.prefix.length),a=D(e,"directives",o),a&&c.push({name:o,descriptors:A.parse(r),def:a})):w.interpolate&&(s=y(i,r,e),s&&c.push(s));return c.length?(c.sort(C),b(c)):void 0}function b(t){return function(e,n,i){for(var r,s,o,a=t.length;a--;)if(r=t[a],r._link)r._link(e,n);else for(o=r.descriptors.length,s=0;o>s;s++)e._bindDir(r.name,n,r.descriptors[s],r.def,i)}}function y(t,e,n){var i=x.parse(e),r="class"===t;if(i){for(var s=r?"class":"attr",o=n.directives[s],a=i.length,h=!0;a--;){var c=i[a];c.tag&&!c.oneTime&&(h=!1)}return{def:o,_link:h?function(n,i){i.setAttribute(t,n.$interpolate(e))}:function(n,a){var h=x.tokensToExp(i,n),c=r?A.parse(h)[0]:A.parse(t+":"+h)[0];r&&(c._rawClass=e),n._bindDir(s,a,c,o)}}}}function C(t,e){return t=t.def.priority||0,e=e.def.priority||0,t>e?1:-1}var $=n(1),k=n(15),w=n(3),x=n(10),A=n(12),T=n(22),D=$.resolveAsset,E=n(23),O=["repeat","if"];e.compile=function(t,e,n,s){var a=n||!e._asComponent?o(t,e):null,h=a&&a.terminal||"SCRIPT"===t.tagName||!t.hasChildNodes()?null:u(t.childNodes,e);return function(t,e){var n=$.toArray(e.childNodes),o=i(function(){a&&a(t,e,s),h&&h(t,n,s)},t);return r(t,o)}},e.compileAndLinkProps=function(t,e,n){var s=k(e,n),o=i(function(){s(t,null)},t);return r(t,o)},e.compileAndLinkRoot=function(t,e,n){var s,o,a=n._containerAttrs,h=n._replacerAttrs;11!==e.nodeType&&(n._asComponent?(a&&(s=_(a,n)),h&&(o=_(h,n))):o=_(e.attributes,n));var c,l=t._context;l&&s&&(c=i(function(){s(l,e)},l));var u=i(function(){o&&o(t,e)},t);return r(t,u,l,c)},m.terminal=!0},function(t,e,n){function i(t){return function(e,n){e._props={};for(var i,o,c,l,u=t.length;u--;)if(i=t[u],o=i.path,e._props[o]=i,c=i.options,null===i.raw)s.initProp(e,i,r(c));else if(i.dynamic)e._context&&(i.mode===h.ONE_TIME?(l=e._context.$get(i.parentPath),s.initProp(e,i,l)):e._bindDir("prop",n,i,a));else{var f=i.raw;l=c.type===Boolean&&""===f?!0:f.trim()?s.toBoolean(s.toNumber(f)):f,s.initProp(e,i,l)}}}function r(t){if(!t.hasOwnProperty("default"))return t.type===Boolean?!1:void 0;var e=t["default"];return s.isObject(e),"function"==typeof e&&t.type!==Function?e():e}var s=n(1),o=n(10),a=n(17),h=n(3)._propBindingModes,c=n(16).identRE,l=/^data-/,u=/^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/,f=/^(true|false)$|^\d.*/;t.exports=function(t,e){for(var n,r,a,p,d,v,m,g,_=[],b=e.length;b--;)if(n=e[b],r=n.name,d=s.camelize(r.replace(l,"")),c.test(d)){if(a=s.hyphenate(r),p=t.getAttribute(a),null===p&&(a="data-"+a,p=t.getAttribute(a)),v={name:r,raw:p,path:d,options:n,mode:h.ONE_WAY},null!==p){t.removeAttribute(a);var y=o.parse(p);y&&(v.dynamic=!0,v.parentPath=o.tokensToExp(y),g=1===y.length,m=f.test(v.parentPath),m||g&&y[0].oneTime?v.mode=h.ONE_TIME:!m&&g&&y[0].twoWay&&u.test(v.parentPath)&&(v.mode=h.TWO_WAY))}else n&&n.required;_.push(v)}return i(_)}},function(t,e,n){function i(t){if(void 0===t)return"eof";var e=t.charCodeAt(0);switch(e){case 91:case 93:case 46:case 34:case 39:case 48:return t;case 95:case 36:return"ident";case 32:case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"ws"}return e>=97&&122>=e||e>=65&&90>=e?"ident":e>=49&&57>=e?"number":"else"}function r(t){function e(){var e=t[d+1];return v===y&&"'"===e||v===C&&'"'===e?(d++,r=e,m[u](),!0):void 0}var n,r,s,o,a,h,c,l=[],d=-1,v=p,m=[];for(m[f]=function(){void 0!==s&&(l.push(s),s=void 0)},m[u]=function(){void 0===s?s=r:s+=r};null!=v;)if(d++,n=t[d],"\\"!==n||!e()){if(o=i(n),c=A[v],a=c[o]||c["else"]||x,a===x)return;if(v=a[0],h=m[a[1]],h&&(r=a[2],r=void 0===r?n:"*"===r?r+n:r,h()),v===w)return l.raw=t,l}}function s(t){return l.test(t)?"."+t:+t===t>>>0?"["+t+"]":"*"===t.charAt(0)?"[o"+s(t.slice(1))+"]":'["'+t.replace(/"/g,'\\"')+'"]'}function o(t){}var a=n(1),h=n(11),c=new h(1e3),l=e.identRE=/^[$_a-zA-Z]+[\w$]*$/,u=0,f=1,p=0,d=1,v=2,m=3,g=4,_=5,b=6,y=7,C=8,$=9,k=10,w=11,x=12,A=[];A[p]={ws:[p],ident:[m,u],"[":[g],eof:[w]},A[d]={ws:[d],".":[v],"[":[g],eof:[w]},A[v]={ws:[v],ident:[m,u]},A[m]={ident:[m,u],0:[m,u],number:[m,u],ws:[d,f],".":[v,f],"[":[g,f],eof:[w,f]},A[g]={ws:[g],0:[_,u],number:[b,u],"'":[y,u,""],'"':[C,u,""],ident:[$,u,"*"]},A[_]={ws:[k,f],"]":[d,f]},A[b]={0:[b,u],number:[b,u],ws:[k],"]":[d,f]},A[y]={"'":[k],eof:x,"else":[y,u]},A[C]={'"':[k],eof:x,"else":[C,u]},A[$]={ident:[$,u],0:[$,u],number:[$,u],ws:[k],"]":[d,f]},A[k]={ws:[k],"]":[d,f]},e.compileGetter=function(t){var e="return o"+t.map(s).join("");return new Function("o",e)},e.parse=function(t){var n=c.get(t);return n||(n=r(t),n&&(n.get=e.compileGetter(n),c.put(t,n))),n},e.get=function(t,n){return n=e.parse(n),n?n.get(t):void 0},e.set=function(t,n,i){var r=t;if("string"==typeof n&&(n=e.parse(n)),!n||!a.isObject(t))return!1;for(var s,h,c=0,l=n.length;l>c;c++)s=t,h=n[c],"*"===h.charAt(0)&&(h=r[h.slice(1)]),l-1>c?(t=t[h],a.isObject(t)||(o(n),t={},s.$add(h,t))):a.isArray(t)?t.$set(h,i):h in t?t[h]=i:(o(n),t.$add(h,i));return!0}},function(t,e,n){var i=n(1),r=n(18),s=n(3)._propBindingModes;t.exports={bind:function(){var t=this.vm,e=t._context,n=this._descriptor,o=n.path,a=n.parentPath;this.parentWatcher=new r(e,a,function(e){i.assertProp(n,e)&&(t[o]=e)});var h=this.parentWatcher.value;if("$data"===o?t._data=h:i.initProp(t,n,h),n.mode===s.TWO_WAY){var c=this;t.$once("hook:created",function(){c.childWatcher=new r(t,o,function(t){e.$set(a,t)})})}},unbind:function(){this.parentWatcher.teardown(),this.childWatcher&&this.childWatcher.teardown()}}},function(t,e,n){function i(t,e,n,i){var r="function"==typeof e;if(this.vm=t,t._watchers.push(this),this.expression=r?e.toString():e,this.cb=n,this.id=++l,this.active=!0,i=i||{},this.deep=!!i.deep,this.user=!!i.user,this.twoWay=!!i.twoWay,this.lazy=!!i.lazy,this.dirty=this.lazy,this.filters=i.filters,this.preProcess=i.preProcess,this.deps=[],this.newDeps=null,r)this.getter=e,this.setter=void 0;else{var s=h.parse(e,i.twoWay);this.getter=s.get,this.setter=s.set}this.value=this.lazy?void 0:this.get(),this.queued=this.shallow=!1}function r(t){var e,n,i;for(e in t)if(n=t[e],s.isArray(n))for(i=n.length;i--;)r(n[i]);else s.isObject(n)&&r(n)}var s=n(1),o=n(3),a=n(20),h=n(19),c=n(21),l=0,u=i.prototype;u.addDep=function(t){var e=this.newDeps,n=this.deps;if(s.indexOf(e,t)<0){e.push(t);var i=s.indexOf(n,t);0>i?t.addSub(this):n[i]=null}},u.get=function(){this.beforeGet();var t,e=this.vm;try{t=this.getter.call(e,e)}catch(n){}return this.deep&&r(t),this.preProcess&&(t=this.preProcess(t)),this.filters&&(t=e._applyFilters(t,null,this.filters,!1)),this.afterGet(),t},u.set=function(t){var e=this.vm;this.filters&&(t=e._applyFilters(t,this.value,this.filters,!0));try{this.setter.call(e,e,t)}catch(n){}},u.beforeGet=function(){a.target=this,this.newDeps=[]},u.afterGet=function(){a.target=null;for(var t=this.deps.length;t--;){var e=this.deps[t];e&&e.removeSub(this)}this.deps=this.newDeps,this.newDeps=null},u.update=function(t){this.lazy?this.dirty=!0:o.async?(this.shallow=this.queued?t?this.shallow:!1:!!t,this.queued=!0,c.push(this)):this.run()},u.run=function(){if(this.active){var t=this.get();if(t!==this.value||(s.isArray(t)||this.deep)&&!this.shallow){var e=this.value;this.value=t,this.cb(t,e)}this.queued=this.shallow=!1}},u.evaluate=function(){var t=a.target;this.value=this.get(),this.dirty=!1,a.target=t},u.depend=function(){for(var t=this.deps.length;t--;)this.deps[t].depend()},u.teardown=function(){if(this.active){this.vm._isBeingDestroyed||this.vm._watchers.$remove(this);for(var t=this.deps.length;t--;)this.deps[t].removeSub(this);this.active=!1,this.vm=this.cb=this.value=null}},t.exports=i},function(t,e,n){function i(t,e){var n=x.length;return x[n]=e?t.replace(b,"\\n"):t,'"'+n+'"'}function r(t){var e=t.charAt(0),n=t.slice(1);return v.test(n)?t:(n=n.indexOf('"')>-1?n.replace(C,s):n,e+"scope."+n)}function s(t,e){return x[e]}function o(t,e){g.test(t),x.length=0;var n=t.replace(y,i).replace(_,"");n=(" "+n).replace(k,r).replace(C,s);var o=h(n);return o?{get:o,body:n,set:e?c(n):null}:void 0}function a(t){var e,n;return t.indexOf("[")<0?(n=t.split("."),n.raw=t,e=u.compileGetter(n)):(n=u.parse(t),e=n.get),{get:e,set:function(t,e){u.set(t,n,e)}}}function h(t){try{return new Function("scope","return "+t+";")}catch(e){}}function c(t){try{return new Function("scope","value",t+"=value;")}catch(e){}}function l(t){t.set||(t.set=c(t.body))}var u=(n(1),n(16)),f=n(11),p=new f(1e3),d="Math,Date,this,true,false,null,undefined,Infinity,NaN,isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,parseInt,parseFloat",v=new RegExp("^("+d.replace(/,/g,"\\b|")+"\\b)"),m="break,case,class,catch,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,in,instanceof,let,return,super,switch,throw,try,var,while,with,yield,enum,await,implements,package,proctected,static,interface,private,public",g=new RegExp("^("+m.replace(/,/g,"\\b|")+"\\b)"),_=/\s/g,b=/\n/g,y=/[\{,]\s*[\w\$_]+\s*:|('[^']*'|"[^"]*")|new |typeof |void /g,C=/"(\d+)"/g,$=/^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/,k=/[^\w$\.]([A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\])*)/g,w=/^(true|false)$/,x=[];e.parse=function(t,n){t=t.trim();var i=p.get(t);if(i)return n&&l(i),i;var r=e.isSimplePath(t)?a(t):o(t,n);return p.put(t,r),r},e.isSimplePath=function(t){return $.test(t)&&!w.test(t)&&"Math."!==t.slice(0,5)}},function(t,e,n){function i(){this.subs=[]}var r=n(1);i.target=null;var s=i.prototype;s.addSub=function(t){this.subs.push(t)},s.removeSub=function(t){this.subs.$remove(t)},s.depend=function(){i.target.addDep(this)},s.notify=function(){for(var t=r.toArray(this.subs),e=0,n=t.length;n>e;e++)t[e].update()},t.exports=i},function(t,e,n){function i(){a=[],h=[],c={},l={},u=f=!1}function r(){s(a),f=!0,s(h),i()}function s(t){for(var e=0;e<t.length;e++){var n=t[e],i=n.id;c[i]=null,n.run()}}var o=n(1),a=(n(3),[]),h=[],c={},l={},u=!1,f=!1;e.push=function(t){var e=t.id;if(null==c[e]){if(f&&!t.user)return void t.run();var n=t.user?h:a;c[e]=n.length,n.push(t),u||(u=!0,o.nextTick(r))}}},function(t,e,n){function i(t){var e=a.get(t);if(e)return e;var n=document.createDocumentFragment(),i=t.match(l),r=u.test(t);if(i||r){var s=i&&i[1],o=c[s]||c._default,h=o[0],f=o[1],p=o[2],d=document.createElement("div");for(d.innerHTML=f+t.trim()+p;h--;)d=d.lastChild;for(var v;v=d.firstChild;)n.appendChild(v)}else n.appendChild(document.createTextNode(t));return a.put(t,n),n}function r(t){if(s.isTemplate(t)&&t.content instanceof DocumentFragment)return t.content;if("SCRIPT"===t.tagName)return i(t.textContent);for(var n,r=e.clone(t),o=document.createDocumentFragment();n=r.firstChild;)o.appendChild(n);return o}var s=n(1),o=n(11),a=new o(1e3),h=new o(1e3),c={_default:[0,"",""],legend:[1,"<fieldset>","</fieldset>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]};c.td=c.th=[3,"<table><tbody><tr>","</tr></tbody></table>"],c.option=c.optgroup=[1,'<select multiple="multiple">',"</select>"],c.thead=c.tbody=c.colgroup=c.caption=c.tfoot=[1,"<table>","</table>"],c.g=c.defs=c.symbol=c.use=c.image=c.text=c.circle=c.ellipse=c.line=c.path=c.polygon=c.polyline=c.rect=[1,'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events"version="1.1">',"</svg>"];var l=/<([\w:]+)/,u=/&\w+;/,f=s.inBrowser?function(){var t=document.createElement("div");return t.innerHTML="<template>1</template>",!t.cloneNode(!0).firstChild.innerHTML}():!1,p=s.inBrowser?function(){var t=document.createElement("textarea");return t.placeholder="t","t"===t.cloneNode(!0).value}():!1;e.clone=function(t){var n=t.cloneNode(!0);if(!t.querySelectorAll)return n;var i,r,s;if(f&&(r=t.querySelectorAll("template"),r.length))for(s=n.querySelectorAll("template"),i=s.length;i--;)s[i].parentNode.replaceChild(e.clone(r[i]),s[i]);if(p)if("TEXTAREA"===t.tagName)n.value=t.value;else if(r=t.querySelectorAll("textarea"),r.length)for(s=n.querySelectorAll("textarea"),i=s.length;i--;)s[i].value=r[i].value;return n},e.parse=function(t,n,s){var o,a;return t instanceof DocumentFragment?n?e.clone(t):t:("string"==typeof t?s||"#"!==t.charAt(0)?a=i(t):(a=h.get(t),a||(o=document.getElementById(t.slice(1)),o&&(a=r(o),h.put(t,a)))):t.nodeType&&(a=r(t)),a&&n?e.clone(a):a)}},function(t,e,n){var i=n(1),r=n(3),s=n(22);t.exports={isLiteral:!0,bind:function(){this.el.__vue__||(this.anchor=i.createAnchor("v-component"),i.replace(this.el,this.anchor),this.keepAlive=null!=this._checkParam("keep-alive"),this.readyEvent=this._checkParam("wait-for"),this.refID=this._checkParam(r.prefix+"ref"),this.keepAlive&&(this.cache={}),null!==this._checkParam("inline-template")&&(this.template=i.extractContent(this.el,!0)),this._pendingCb=this.componentID=this.Component=null,this._isDynamicLiteral?this.transMode=this._checkParam("transition-mode"):this.resolveComponent(this.expression,i.bind(this.initStatic,this)))},initStatic:function(){var t=this.build(),e=this.anchor;this.setCurrent(t),this.readyEvent?t.$once(this.readyEvent,function(){t.$before(e)}):t.$before(e)},update:function(t){this.setComponent(t)},setComponent:function(t,e,n,r){this.invalidatePending(),t?this.resolveComponent(t,i.bind(function(){this.unbuild(!0);var t=this.build(e);n&&n(t);var i=this;this.readyEvent?t.$once(this.readyEvent,function(){i.transition(t,r)}):this.transition(t,r)},this)):(this.unbuild(!0),this.remove(this.childVM,r),this.unsetCurrent())},resolveComponent:function(t,e){var n=this;this._pendingCb=i.cancellable(function(i){n.componentID=t,n.Component=i,e()}),this.vm._resolveComponent(t,this._pendingCb)},invalidatePending:function(){this._pendingCb&&(this._pendingCb.cancel(),this._pendingCb=null)},build:function(t){if(this.keepAlive){var e=this.cache[this.componentID];if(e)return e}if(this.Component){var n=this._host||this.vm,i=s.clone(this.el),r=n.$addChild({el:i,data:t,template:this.template,_linkerCachable:!this.template,_asComponent:!0,_isRouterView:this._isRouterView,_context:this.vm},this.Component);return this.keepAlive&&(this.cache[this.componentID]=r),r}},unbuild:function(t){var e=this.childVM;e&&!this.keepAlive&&e.$destroy(!1,t)},remove:function(t,e){var n=this.keepAlive;t?t.$remove(function(){n||t._cleanup(),e&&e()}):e&&e()},transition:function(t,e){var n=this,i=this.childVM;switch(this.unsetCurrent(),this.setCurrent(t),n.transMode){case"in-out":t.$before(n.anchor,function(){n.remove(i,e)});break;case"out-in":n.remove(i,function(){t._isDestroyed||t.$before(n.anchor,e)});break;default:n.remove(i),t.$before(n.anchor,e)}},setCurrent:function(t){this.childVM=t;var e=t._refID||this.refID;e&&(this.vm.$[e]=t)},unsetCurrent:function(){var t=this.childVM;this.childVM=null;var e=t&&t._refID||this.refID;e&&(this.vm.$[e]=null)},unbind:function(){if(this.invalidatePending(),this.unbuild(),this.unsetCurrent(),this.cache){for(var t in this.cache)this.cache[t].$destroy();this.cache=null}}}},function(t,e,n){function i(t,e){var n=e.template,i=h.parse(n,!0);if(i){var c=i.firstChild,l=c.tagName&&c.tagName.toLowerCase();return e.replace?(t===document.body,i.childNodes.length>1||1!==c.nodeType||"component"===l||o.resolveAsset(e,"components",l)||c.hasAttribute(a.prefix+"component")||o.resolveAsset(e,"elementDirectives",l)||c.hasAttribute(a.prefix+"repeat")?i:(e._replacerAttrs=r(c),s(t,c),c)):(t.appendChild(i),t)}}function r(t){return 1===t.nodeType&&t.hasAttributes()?o.toArray(t.attributes):void 0}function s(t,e){for(var n,i,r=t.attributes,s=r.length;s--;)n=r[s].name,i=r[s].value,e.hasAttribute(n)?"class"===n&&(i=e.getAttribute(n)+" "+i,e.setAttribute(n,i)):e.setAttribute(n,i)}var o=n(1),a=n(3),h=n(22);e.transclude=function(t,e){return e&&(e._containerAttrs=r(t)),o.isTemplate(t)&&(t=h.parse(t)),e&&(e._asComponent&&!e.template&&(e.template="<content></content>"),e.template&&(e._content=o.extractContent(t),t=i(t,e))),t instanceof DocumentFragment&&(o.prepend(o.createAnchor("v-start",!0),t),t.appendChild(o.createAnchor("v-end",!0))),t}},function(t,e,n){e.text=n(27),e.html=n(28),e.attr=n(29),e.show=n(30),e["class"]=n(32),e.el=n(33),e.ref=n(34),e.cloak=n(35),e.style=n(26),e.transition=n(36),e.on=n(39),e.model=n(40),e.repeat=n(45),e["if"]=n(46),e._component=n(23),e._prop=n(17)},function(t,e,n){function i(t){if(u[t])return u[t];var e=r(t);return u[t]=u[e]=e,e}function r(t){t=t.replace(c,"$1-$2").toLowerCase();var e=s.camelize(t),n=e.charAt(0).toUpperCase()+e.slice(1);if(l||(l=document.createElement("div")),e in l.style)return t;for(var i,r=o.length;r--;)if(i=a[r]+n,i in l.style)return o[r]+t}var s=n(1),o=["-webkit-","-moz-","-ms-"],a=["Webkit","Moz","ms"],h=/!important;?$/,c=/([a-z])([A-Z])/g,l=null,u={};t.exports={deep:!0,update:function(t){
    this.arg?this.setProp(this.arg,t):"object"==typeof t?this.objectHandler(t):this.el.style.cssText=t},objectHandler:function(t){var e,n,i=this.cache||(this.cache={});for(e in i)e in t||(this.setProp(e,null),delete i[e]);for(e in t)n=t[e],n!==i[e]&&(i[e]=n,this.setProp(e,n))},setProp:function(t,e){if(t=i(t))if(null!=e&&(e+=""),e){var n=h.test(e)?"important":"";n&&(e=e.replace(h,"").trim()),this.el.style.setProperty(t,e,n)}else this.el.style.removeProperty(t)}}},function(t,e,n){var i=n(1);t.exports={bind:function(){this.attr=3===this.el.nodeType?"data":"textContent"},update:function(t){this.el[this.attr]=i.toString(t)}}},function(t,e,n){var i=n(1),r=n(22);t.exports={bind:function(){8===this.el.nodeType&&(this.nodes=[],this.anchor=i.createAnchor("v-html"),i.replace(this.el,this.anchor))},update:function(t){t=i.toString(t),this.nodes?this.swap(t):this.el.innerHTML=t},swap:function(t){for(var e=this.nodes.length;e--;)i.remove(this.nodes[e]);var n=r.parse(t,!0,!0);this.nodes=i.toArray(n.childNodes),i.before(n,this.anchor)}}},function(t,e,n){var i="http://www.w3.org/1999/xlink",r=/^xlink:/;t.exports={priority:850,update:function(t){this.arg?this.setAttr(this.arg,t):"object"==typeof t&&this.objectHandler(t)},objectHandler:function(t){var e,n,i=this.cache||(this.cache={});for(e in i)e in t||(this.setAttr(e,null),delete i[e]);for(e in t)n=t[e],n!==i[e]&&(i[e]=n,this.setAttr(e,n))},setAttr:function(t,e){null!=e&&e!==!1?r.test(t)?this.el.setAttributeNS(i,t,e):this.el.setAttribute(t,e):this.el.removeAttribute(t),"value"===t&&"value"in this.el&&(this.el.value=e)}}},function(t,e,n){var i=n(31);t.exports=function(t){var e=this.el;i.apply(e,t?1:-1,function(){e.style.display=t?"":"none"},this.vm)}},function(t,e,n){var i=n(1);e.append=function(t,e,n,i){r(t,1,function(){e.appendChild(t)},n,i)},e.before=function(t,e,n,s){r(t,1,function(){i.before(t,e)},n,s)},e.remove=function(t,e,n){r(t,-1,function(){i.remove(t)},e,n)},e.removeThenAppend=function(t,e,n,i){r(t,-1,function(){e.appendChild(t)},n,i)},e.blockAppend=function(t,n,r){for(var s=i.toArray(t.childNodes),o=0,a=s.length;a>o;o++)e.before(s[o],n,r)},e.blockRemove=function(t,n,i){for(var r,s=t.nextSibling;s!==n;)r=s.nextSibling,e.remove(s,i),s=r};var r=e.apply=function(t,e,n,r,s){var o=t.__v_trans;if(!o||!o.hooks&&!i.transitionEndEvent||!r._isCompiled||r.$parent&&!r.$parent._isCompiled)return n(),void(s&&s());var a=e>0?"enter":"leave";o[a](n,s)}},function(t,e,n){function i(t){for(var e={},n=t.trim().split(/\s+/),i=n.length;i--;)e[n[i]]=!0;return e}var r=n(1),s=r.addClass,o=r.removeClass;t.exports={bind:function(){var t=this._descriptor._rawClass;t&&(this.prevKeys=t.trim().split(/\s+/))},update:function(t){this.arg?t?s(this.el,this.arg):o(this.el,this.arg):t&&"string"==typeof t?this.handleObject(i(t)):r.isPlainObject(t)?this.handleObject(t):this.cleanup()},handleObject:function(t){this.cleanup(t);for(var e=this.prevKeys=Object.keys(t),n=0,i=e.length;i>n;n++){var r=e[n];t[r]?s(this.el,r):o(this.el,r)}},cleanup:function(t){if(this.prevKeys)for(var e=this.prevKeys.length;e--;){var n=this.prevKeys[e];t&&t.hasOwnProperty(n)||o(this.el,n)}}}},function(t,e,n){t.exports={isLiteral:!0,bind:function(){this.vm.$$[this.expression]=this.el},unbind:function(){delete this.vm.$$[this.expression]}}},function(t,e,n){n(1);t.exports={isLiteral:!0,bind:function(){var t=this.el.__vue__;t&&(t._refID=this.expression)}}},function(t,e,n){var i=n(3);t.exports={bind:function(){var t=this.el;this.vm.$once("hook:compiled",function(){t.removeAttribute(i.prefix+"cloak")})}}},function(t,e,n){var i=n(1),r=n(37);t.exports={priority:1e3,isLiteral:!0,bind:function(){this._isDynamicLiteral||this.update(this.expression)},update:function(t,e){var n=this.el,s=this.el.__vue__||this.vm,o=i.resolveAsset(s.$options,"transitions",t);t=t||"v",n.__v_trans=new r(n,t,o,s),e&&i.removeClass(n,e+"-transition"),i.addClass(n,t+"-transition")}}},function(t,e,n){function i(t,e,n,i){this.el=t,this.enterClass=e+"-enter",this.leaveClass=e+"-leave",this.hooks=n,this.vm=i,this.pendingCssEvent=this.pendingCssCb=this.cancel=this.pendingJsCb=this.op=this.cb=null,this.typeCache={};var s=this;["enterNextTick","enterDone","leaveNextTick","leaveDone"].forEach(function(t){s[t]=r.bind(s[t],s)})}var r=n(1),s=n(38),o=r.addClass,a=r.removeClass,h=r.transitionEndEvent,c=r.animationEndEvent,l=r.transitionProp+"Duration",u=r.animationProp+"Duration",f=1,p=2,d=i.prototype;d.enter=function(t,e){this.cancelPending(),this.callHook("beforeEnter"),this.cb=e,o(this.el,this.enterClass),t(),this.callHookWithCb("enter"),this.cancel=this.hooks&&this.hooks.enterCancelled,s.push(this.enterNextTick)},d.enterNextTick=function(){var t=this.getCssTransitionType(this.enterClass),e=this.enterDone;t===f?(a(this.el,this.enterClass),this.setupCssCb(h,e)):t===p?this.setupCssCb(c,e):this.pendingJsCb||e()},d.enterDone=function(){this.cancel=this.pendingJsCb=null,a(this.el,this.enterClass),this.callHook("afterEnter"),this.cb&&this.cb()},d.leave=function(t,e){this.cancelPending(),this.callHook("beforeLeave"),this.op=t,this.cb=e,o(this.el,this.leaveClass),this.callHookWithCb("leave"),this.cancel=this.hooks&&this.hooks.leaveCancelled,this.pendingJsCb||s.push(this.leaveNextTick)},d.leaveNextTick=function(){var t=this.getCssTransitionType(this.leaveClass);if(t){var e=t===f?h:c;this.setupCssCb(e,this.leaveDone)}else this.leaveDone()},d.leaveDone=function(){this.cancel=this.pendingJsCb=null,this.op(),a(this.el,this.leaveClass),this.callHook("afterLeave"),this.cb&&this.cb()},d.cancelPending=function(){this.op=this.cb=null;var t=!1;this.pendingCssCb&&(t=!0,r.off(this.el,this.pendingCssEvent,this.pendingCssCb),this.pendingCssEvent=this.pendingCssCb=null),this.pendingJsCb&&(t=!0,this.pendingJsCb.cancel(),this.pendingJsCb=null),t&&(a(this.el,this.enterClass),a(this.el,this.leaveClass)),this.cancel&&(this.cancel.call(this.vm,this.el),this.cancel=null)},d.callHook=function(t){this.hooks&&this.hooks[t]&&this.hooks[t].call(this.vm,this.el)},d.callHookWithCb=function(t){var e=this.hooks&&this.hooks[t];e&&(e.length>1&&(this.pendingJsCb=r.cancellable(this[t+"Done"])),e.call(this.vm,this.el,this.pendingJsCb))},d.getCssTransitionType=function(t){if(!(!h||document.hidden||this.hooks&&this.hooks.css===!1)){var e=this.typeCache[t];if(e)return e;var n=this.el.style,i=window.getComputedStyle(this.el),r=n[l]||i[l];if(r&&"0s"!==r)e=f;else{var s=n[u]||i[u];s&&"0s"!==s&&(e=p)}return e&&(this.typeCache[t]=e),e}},d.setupCssCb=function(t,e){this.pendingCssEvent=t;var n=this,i=this.el,s=this.pendingCssCb=function(o){o.target===i&&(r.off(i,t,s),n.pendingCssEvent=n.pendingCssCb=null,!n.pendingJsCb&&e&&e())};r.on(i,t,s)},t.exports=i},function(t,e,n){function i(){for(var t=document.documentElement.offsetHeight,e=0;e<s.length;e++)s[e]();return s=[],o=!1,t}var r=n(1),s=[],o=!1;e.push=function(t){s.push(t),o||(o=!0,r.nextTick(i))}},function(t,e,n){var i=n(1);t.exports={acceptStatement:!0,priority:700,bind:function(){if("IFRAME"===this.el.tagName&&"load"!==this.arg){var t=this;this.iframeBind=function(){i.on(t.el.contentWindow,t.arg,t.handler)},i.on(this.el,"load",this.iframeBind)}},update:function(t){if("function"==typeof t){this.reset();var e=this.vm;this.handler=function(n){n.targetVM=e,e.$event=n;var i=t(n);return e.$event=null,i},this.iframeBind?this.iframeBind():i.on(this.el,this.arg,this.handler)}},reset:function(){var t=this.iframeBind?this.el.contentWindow:this.el;this.handler&&i.off(t,this.arg,this.handler)},unbind:function(){this.reset(),i.off(this.el,"load",this.iframeBind)}}},function(t,e,n){var i=n(1),r={text:n(42),radio:n(43),select:n(41),checkbox:n(44)};t.exports={priority:800,twoWay:!0,handlers:r,bind:function(){this.checkFilters(),this.hasRead&&!this.hasWrite;var t,e=this.el,n=e.tagName;if("INPUT"===n)t=r[e.type]||r.text;else if("SELECT"===n)t=r.select;else{if("TEXTAREA"!==n)return;t=r.text}t.bind.call(this),this.update=t.update,this.unbind=t.unbind},checkFilters:function(){var t=this.filters;if(t)for(var e=t.length;e--;){var n=i.resolveAsset(this.vm.$options,"filters",t[e].name);("function"==typeof n||n.read)&&(this.hasRead=!0),n.write&&(this.hasWrite=!0)}}}},function(t,e,n){function i(t){function e(t){l.isArray(t)&&(n.el.innerHTML="",r(n.el,t),n.forceUpdate())}var n=this,i=f.parse(t)[0];this.optionWatcher=new u(this.vm,i.expression,e,{deep:!0,filters:i.filters}),e(this.optionWatcher.value)}function r(t,e){for(var n,i,s=0,o=e.length;o>s;s++)n=e[s],n.options?(i=document.createElement("optgroup"),i.label=n.label,r(i,n.options)):(i=document.createElement("option"),"string"==typeof n?i.text=i.value=n:(null!=n.value&&(i.value=n.value),i.text=n.text||n.value||"",n.disabled&&(i.disabled=!0))),t.appendChild(i)}function s(){for(var t,e=this.el.options,n=0,i=e.length;i>n;n++)e[n].hasAttribute("selected")&&(this.multiple?(t||(t=[])).push(e[n].value):t=e[n].value);"undefined"!=typeof t&&(this._initValue=this.number?l.toNumber(t):t)}function o(t){return Array.prototype.filter.call(t.options,a).map(h)}function a(t){return t.selected}function h(t){return t.value||t.text}function c(t,e){for(var n=t.length;n--;)if(t[n]==e)return n;return-1}var l=n(1),u=n(18),f=n(12);t.exports={bind:function(){var t=this,e=this.el;this.forceUpdate=function(){t._watcher&&t.update(t._watcher.get())};var n=this._checkParam("options");n&&i.call(this,n),this.number=null!=this._checkParam("number"),this.multiple=e.hasAttribute("multiple"),this.listener=function(){var n=t.multiple?o(e):e.value;n=t.number?l.isArray(n)?n.map(l.toNumber):l.toNumber(n):n,t.set(n)},l.on(e,"change",this.listener),s.call(this),this.vm.$on("hook:attached",this.forceUpdate)},update:function(t){var e=this.el;e.selectedIndex=-1;for(var n,i=this.multiple&&l.isArray(t),r=e.options,s=r.length;s--;)n=r[s],n.selected=i?c(t,n.value)>-1:t==n.value},unbind:function(){l.off(this.el,"change",this.listener),this.vm.$off("hook:attached",this.forceUpdate),this.optionWatcher&&this.optionWatcher.teardown()}}},function(t,e,n){var i=n(1);t.exports={bind:function(){function t(){var t=s?i.toNumber(n.value):n.value;e.set(t)}var e=this,n=this.el,r=null!=this._checkParam("lazy"),s=null!=this._checkParam("number"),o=parseInt(this._checkParam("debounce"),10),a=!1;i.isAndroid||(this.onComposeStart=function(){a=!0},this.onComposeEnd=function(){a=!1,e.listener()},i.on(n,"compositionstart",this.onComposeStart),i.on(n,"compositionend",this.onComposeEnd)),this.hasRead||"range"===n.type?this.listener=function(){if(!a){var r;try{r=n.value.length-n.selectionStart}catch(s){}0>r||(t(),i.nextTick(function(){var t=e._watcher.value;if(e.update(t),null!=r){var s=i.toString(t).length-r;n.setSelectionRange(s,s)}}))}}:this.listener=function(){a||t()},o&&(this.listener=i.debounce(this.listener,o)),this.event=r?"change":"input",this.hasjQuery="function"==typeof jQuery,this.hasjQuery?jQuery(n).on(this.event,this.listener):i.on(n,this.event,this.listener),!r&&i.isIE9&&(this.onCut=function(){i.nextTick(e.listener)},this.onDel=function(t){(46===t.keyCode||8===t.keyCode)&&e.listener()},i.on(n,"cut",this.onCut),i.on(n,"keyup",this.onDel)),(n.hasAttribute("value")||"TEXTAREA"===n.tagName&&n.value.trim())&&(this._initValue=s?i.toNumber(n.value):n.value)},update:function(t){this.el.value=i.toString(t)},unbind:function(){var t=this.el;this.hasjQuery?jQuery(t).off(this.event,this.listener):i.off(t,this.event,this.listener),this.onComposeStart&&(i.off(t,"compositionstart",this.onComposeStart),i.off(t,"compositionend",this.onComposeEnd)),this.onCut&&(i.off(t,"cut",this.onCut),i.off(t,"keyup",this.onDel))}}},function(t,e,n){var i=n(1);t.exports={bind:function(){var t=this,e=this.el;this.listener=function(){t.set(e.value)},i.on(e,"change",this.listener),e.checked&&(this._initValue=e.value)},update:function(t){this.el.checked=t==this.el.value},unbind:function(){i.off(this.el,"change",this.listener)}}},function(t,e,n){var i=n(1);t.exports={bind:function(){var t=this,e=this.el;this.listener=function(){t.set(e.checked)},i.on(e,"change",this.listener),e.checked&&(this._initValue=e.checked)},update:function(t){this.el.checked=!!t},unbind:function(){i.off(this.el,"change",this.listener)}}},function(t,e,n){function i(t,e,n){var i=t.$el.previousSibling;if(i){for(;(!i.__vue__||i.__vue__.$options._repeatId!==n)&&i!==e;)i=i.previousSibling;return i.__vue__}}function r(t){for(var e=-1,n=new Array(t);++e<t;)n[e]=e;return n}function s(t){for(var e={},n=0,i=t.length;i>n;n++)e[t[n].$key]=t[n];return e}function o(t){var e=typeof t;return null==t||"string"===e||"number"===e||"boolean"===e}var a=n(1),h=n(3),c=a.isObject,l=a.isPlainObject,u=n(10),f=n(19),p=n(22),d=n(13),v=0,m=0,g=1,_=2,b=3;t.exports={bind:function(){var t=this.expression.match(/(.*) in (.*)/);t&&(this.arg=t[1],this._watcherExp=t[2]),this.id="__v_repeat_"+ ++v,this.start=a.createAnchor("v-repeat-start"),this.end=a.createAnchor("v-repeat-end"),a.replace(this.el,this.end),a.before(this.start,this.end),this.template=a.isTemplate(this.el)?p.parse(this.el,!0):this.el,this.idKey=this._checkParam("track-by");var e=+this._checkParam("stagger");this.enterStagger=+this._checkParam("enter-stagger")||e,this.leaveStagger=+this._checkParam("leave-stagger")||e,this.refID=this._checkParam(h.prefix+"ref"),this.elID=this._checkParam(h.prefix+"el"),this.checkIf(),this.checkComponent(),this.cache=Object.create(null)},checkIf:function(){null!==a.attr(this.el,"if")},checkComponent:function(){this.componentState=m;var t=this.vm.$options,e=a.checkComponent(this.el,t);if(e){this.Component=null,this.asComponent=!0,null!==this._checkParam("inline-template")&&(this.inlineTemplate=a.extractContent(this.el,!0));var n=u.parse(e);if(n){var i=u.tokensToExp(n);this.componentGetter=f.parse(i).get}else this.componentId=e,this.pendingData=null}else{this.Component=a.Vue,this.inline=!0,this.template=d.transclude(this.template);var r=a.extend({},t);r._asComponent=!1,this._linkFn=d.compile(this.template,r)}},resolveComponent:function(){this.componentState=g,this.vm._resolveComponent(this.componentId,a.bind(function(t){this.componentState!==b&&(this.Component=t,this.componentState=_,this.realUpdate(this.pendingData),this.pendingData=null)},this))},resolveDynamicComponent:function(t,e){var n,i=Object.create(this.vm);for(n in t)a.define(i,n,t[n]);for(n in e)a.define(i,n,e[n]);var r=this.componentGetter.call(i,i),s=a.resolveAsset(this.vm.$options,"components",r);return s.options?s:a.Vue},update:function(t){if(this.componentId){var e=this.componentState;e===m?(this.pendingData=t,this.resolveComponent()):e===g?this.pendingData=t:e===_&&this.realUpdate(t)}else this.realUpdate(t)},realUpdate:function(t){this.vms=this.diff(t,this.vms),this.refID&&(this.vm.$[this.refID]=this.converted?s(this.vms):this.vms),this.elID&&(this.vm.$$[this.elID]=this.vms.map(function(t){return t.$el}))},diff:function(t,e){var n,r,s,o,h,l,u=this.idKey,f=this.converted,p=this.start,d=this.end,v=a.inDoc(p),m=this.arg,g=!e,_=new Array(t.length);for(o=0,h=t.length;h>o;o++)n=t[o],r=f?n.$value:n,l=!c(r),s=!g&&this.getVm(r,o,f?n.$key:null),s?(s._reused=!0,s.$index=o,(u||f||l)&&(m?s[m]=r:a.isPlainObject(r)?s.$data=r:s.$value=r)):(s=this.build(n,o,!0),s._reused=!1),_[o]=s,g&&s.$before(d);if(g)return _;var b=0,y=e.length-_.length;for(o=0,h=e.length;h>o;o++)s=e[o],s._reused||(this.uncacheVm(s),s.$destroy(!1,!0),this.remove(s,b++,y,v));var C,$,k,w=0;for(o=0,h=_.length;h>o;o++)s=_[o],C=_[o-1],$=C?C._staggerCb?C._staggerAnchor:C._fragmentEnd||C.$el:p,s._reused&&!s._staggerCb?(k=i(s,p,this.id),k!==C&&this.move(s,$)):this.insert(s,w++,$,v),s._reused=!1;return _},build:function(t,e,n){var i={$index:e};this.converted&&(i.$key=t.$key);var r=this.converted?t.$value:t,s=this.arg;s?(t={},t[s]=r):l(r)?t=r:(t={},i.$value=r);var h=this.Component||this.resolveDynamicComponent(t,i),c=this._host||this.vm,u=c.$addChild({el:p.clone(this.template),data:t,inherit:this.inline,template:this.inlineTemplate,_meta:i,_repeat:this.inline,_asComponent:this.asComponent,_linkerCachable:!this.inlineTemplate&&h!==a.Vue,_linkFn:this._linkFn,_repeatId:this.id,_context:this.vm},h);n&&this.cacheVm(r,u,e,this.converted?i.$key:null);var f=this;return"object"===this.rawType&&o(r)&&u.$watch(s||"$value",function(t){f.filters,f._withLock(function(){f.converted?f.rawValue[u.$key]=t:f.rawValue.$set(u.$index,t)})}),u},unbind:function(){if(this.componentState=b,this.refID&&(this.vm.$[this.refID]=null),this.vms)for(var t,e=this.vms.length;e--;)t=this.vms[e],this.uncacheVm(t),t.$destroy()},cacheVm:function(t,e,n,i){var r,s=this.idKey,o=this.cache,h=!c(t);i||s||h?(r=s?"$index"===s?n:t[s]:i||n,o[r]||(o[r]=e)):(r=this.id,t.hasOwnProperty(r)?null===t[r]&&(t[r]=e):a.define(t,r,e)),e._raw=t},getVm:function(t,e,n){var i=this.idKey,r=!c(t);if(n||i||r){var s=i?"$index"===i?e:t[i]:n||e;return this.cache[s]}return t[this.id]},uncacheVm:function(t){var e=t._raw,n=this.idKey,i=t.$index,r=t.hasOwnProperty("$key")&&t.$key,s=!c(e);if(n||r||s){var o=n?"$index"===n?i:e[n]:r||i;this.cache[o]=null}else e[this.id]=null,t._raw=null},insert:function(t,e,n,i){t._staggerCb&&(t._staggerCb.cancel(),t._staggerCb=null);var r=this.getStagger(t,e,null,"enter");if(i&&r){var s=t._staggerAnchor;s||(s=t._staggerAnchor=a.createAnchor("stagger-anchor"),s.__vue__=t),a.after(s,n);var o=t._staggerCb=a.cancellable(function(){t._staggerCb=null,t.$before(s),a.remove(s)});setTimeout(o,r)}else t.$after(n)},move:function(t,e){t.$after(e,null,!1)},remove:function(t,e,n,i){function r(){t.$remove(function(){t._cleanup()})}if(t._staggerCb)return t._staggerCb.cancel(),void(t._staggerCb=null);var s=this.getStagger(t,e,n,"leave");if(i&&s){var o=t._staggerCb=a.cancellable(function(){t._staggerCb=null,r()});setTimeout(o,s)}else r()},getStagger:function(t,e,n,i){i+="Stagger";var r=t.$el.__v_trans,s=r&&r.hooks,o=s&&(s[i]||s.stagger);return o?o.call(t,e,n):e*this[i]},_preProcess:function(t){this.rawValue=t;var e=this.rawType=typeof t;if(l(t)){for(var n,i=Object.keys(t),s=i.length,o=new Array(s);s--;)n=i[s],o[s]={$key:n,$value:t[n]};return this.converted=!0,o}return this.converted=!1,"number"===e?t=r(t):"string"===e&&(t=a.toArray(t)),t||[]}}},function(t,e,n){function i(t){t._isAttached||t._callHook("attached")}function r(t){t._isAttached&&t._callHook("detached")}var s=n(1),o=n(13),a=n(22),h=n(31),c=n(11),l=new c(1e3);t.exports={bind:function(){var t=this.el;if(t.__vue__)this.invalid=!0;else{this.start=s.createAnchor("v-if-start"),this.end=s.createAnchor("v-if-end"),s.replace(t,this.end),s.before(this.start,this.end),s.isTemplate(t)?this.template=a.parse(t,!0):(this.template=document.createDocumentFragment(),this.template.appendChild(a.clone(t)));var e=(this.vm.constructor.cid||"")+t.outerHTML;this.linker=l.get(e),this.linker||(this.linker=o.compile(this.template,this.vm.$options,!0,this._host),l.put(e,this.linker))}},update:function(t){this.invalid||(t?this.unlink||this.link(a.clone(this.template),this.linker):this.teardown())},link:function(t,e){var n=this.vm;if(this.unlink=e(n,t),h.blockAppend(t,this.end,n),s.inDoc(n.$el)){var r=this.getContainedComponents();r&&r.forEach(i)}},teardown:function(){if(this.unlink){var t;s.inDoc(this.vm.$el)&&(t=this.getContainedComponents()),h.blockRemove(this.start,this.end,this.vm),t&&t.forEach(r),this.unlink(),this.unlink=null}},getContainedComponents:function(){function t(t){for(var e,r=n;e!==i;){if(e=r.nextSibling,r===t.$el||r.contains&&r.contains(t.$el))return!0;r=e}return!1}var e=this.vm,n=this.start.nextSibling,i=this.end;return e.$children.length&&e.$children.filter(t)},unbind:function(){this.unlink&&this.unlink()}}},function(t,e,n){e.content=n(48),e.partial=n(49)},function(t,e,n){function i(t,e,n){for(var i=document.createDocumentFragment(),r=0,o=t.length;o>r;r++){var a=t[r];n&&!a.__v_selected?i.appendChild(s(a)):n||a.parentNode!==e||(a.__v_selected=!0,i.appendChild(s(a)))}return i}var r=n(1),s=n(22).clone;t.exports={bind:function(){for(var t=this.vm,e=t;e.$options._repeat;)e=e.$parent;var n,r=e.$options._content;if(!r)return void this.fallback();var s=e._context,o=this._checkParam("select");if(o){var a=r.querySelectorAll(o);a.length?(n=i(a,r),n.hasChildNodes()?this.compile(n,s,t):this.fallback()):this.fallback()}else{var h=this,c=function(){h.compile(i(r.childNodes,r,!0),s,t)};e._isCompiled?c():e.$once("hook:compiled",c)}},fallback:function(){this.compile(r.extractContent(this.el,!0),this.vm)},compile:function(t,e,n){t&&e&&(this.unlink=e.$compile(t,n)),t?r.replace(this.el,t):r.remove(this.el)},unbind:function(){this.unlink&&this.unlink()}}},function(t,e,n){var i=n(1),r=n(22),s=n(10),o=n(13),a=n(11),h=new a(1e3),c=n(46);t.exports={link:c.link,teardown:c.teardown,getContainedComponents:c.getContainedComponents,bind:function(){var t=this.el;this.start=i.createAnchor("v-partial-start"),this.end=i.createAnchor("v-partial-end"),i.replace(t,this.end),i.before(this.start,this.end);var e=t.getAttribute("name"),n=s.parse(e);n?this.setupDynamic(n):this.insert(e)},setupDynamic:function(t){var e=this,n=s.tokensToExp(t);this.unwatch=this.vm.$watch(n,function(t){e.teardown(),e.insert(t)},{immediate:!0,user:!1})},insert:function(t){var e=i.resolveAsset(this.vm.$options,"partials",t);if(e){var n=r.parse(e,!0),s=(this.vm.constructor.cid||"")+e,o=this.compile(n,s);this.link(n,o)}},compile:function(t,e){var n=h.get(e);if(n)return n;var i=o.compile(t,this.vm.$options,!0);return h.put(e,i),i},unbind:function(){this.unlink&&this.unlink(),this.unwatch&&this.unwatch()}}},function(t,e,n){var i=n(1);e.json={read:function(t,e){return"string"==typeof t?t:JSON.stringify(t,null,Number(e)||2)},write:function(t){try{return JSON.parse(t)}catch(e){return t}}},e.capitalize=function(t){return t||0===t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""},e.uppercase=function(t){return t||0===t?t.toString().toUpperCase():""},e.lowercase=function(t){return t||0===t?t.toString().toLowerCase():""};var r=/(\d{3})(?=\d)/g;e.currency=function(t,e){if(t=parseFloat(t),!isFinite(t)||!t&&0!==t)return"";e=e||"$";var n=Math.abs(t).toFixed(2),i=n.slice(0,-3),s=i.length%3,o=s>0?i.slice(0,s)+(i.length>3?",":""):"",a=n.slice(-3),h=0>t?"-":"";return e+h+o+i.slice(s).replace(r,"$1,")+a},e.pluralize=function(t){var e=i.toArray(arguments,1);return e.length>1?e[t%10-1]||e[e.length-1]:e[0]+(1===t?"":"s")};var s={esc:27,tab:9,enter:13,"delete":46,up:38,left:37,right:39,down:40};e.key=function(t,e){if(t){var n=s[e];return n||(n=parseInt(e,10)),function(e){return e.keyCode===n?t.call(this,e):void 0}}},e.key.keyCodes=s,i.extend(e,n(51))},function(t,e,n){function i(t,e){if(r.isPlainObject(t)){for(var n in t)if(i(t[n],e))return!0}else if(r.isArray(t)){for(var s=t.length;s--;)if(i(t[s],e))return!0}else if(null!=t)return t.toString().toLowerCase().indexOf(e)>-1}var r=n(1),s=n(16);e.filterBy=function(t,e,n,r){return n&&"in"!==n&&(r=n),null==e?t:(e=(""+e).toLowerCase(),t.filter(function(t){return r?i(s.get(t,r),e):i(t,e)}))},e.orderBy=function(t,e,n){if(!e)return t;var i=1;return arguments.length>2&&(i="-1"===n?-1:n?-1:1),t.slice().sort(function(t,n){return"$key"!==e&&"$value"!==e&&(t&&"$value"in t&&(t=t.$value),n&&"$value"in n&&(n=n.$value)),t=r.isObject(t)?s.get(t,e):t,n=r.isObject(n)?s.get(n,e):n,t===n?0:t>n?i:-i})}},function(t,e,n){var i=n(1).mergeOptions;e._init=function(t){t=t||{},this.$el=null,this.$parent=t._parent,this.$root=t._root||this,this.$children=[],this.$={},this.$$={},this._watchers=[],this._directives=[],this._childCtors={},this._isVue=!0,this._events={},this._eventsCount={},this._eventCancelled=!1,this._isFragment=!1,this._fragmentStart=this._fragmentEnd=null,this._isCompiled=this._isDestroyed=this._isReady=this._isAttached=this._isBeingDestroyed=!1,this._unlinkFn=null,this._context=t._context||t._parent,this.$parent&&this.$parent.$children.push(this),this._reused=!1,this._staggerOp=null,t=this.$options=i(this.constructor.options,t,this),this._data={},this._initScope(),this._initEvents(),this._callHook("created"),t.el&&this.$mount(t.el)}},function(t,e,n){function i(t,e,n){if(n){var i,s,o,a;for(s in n)if(i=n[s],c.isArray(i))for(o=0,a=i.length;a>o;o++)r(t,e,s,i[o]);else r(t,e,s,i)}}function r(t,e,n,i,s){var o=typeof i;if("function"===o)t[e](n,i,s);else if("string"===o){var a=t.$options.methods,h=a&&a[i];h&&t[e](n,h,s)}else i&&"object"===o&&r(t,e,n,i.handler,i)}function s(){this._isAttached||(this._isAttached=!0,this.$children.forEach(o))}function o(t){!t._isAttached&&l(t.$el)&&t._callHook("attached")}function a(){this._isAttached&&(this._isAttached=!1,this.$children.forEach(h))}function h(t){t._isAttached&&!l(t.$el)&&t._callHook("detached")}var c=n(1),l=c.inDoc;e._initEvents=function(){var t=this.$options;i(this,"$on",t.events),i(this,"$watch",t.watch)},e._initDOMHooks=function(){this.$on("hook:attached",s),this.$on("hook:detached",a)},e._callHook=function(t){var e=this.$options[t];if(e)for(var n=0,i=e.length;i>n;n++)e[n].call(this);this.$emit("hook:"+t)}},function(t,e,n){function i(){}function r(t,e){var n=new c(e,t,null,{lazy:!0});return function(){return n.dirty&&n.evaluate(),h.target&&n.depend(),n.value}}var s=n(1),o=n(13),a=n(55),h=n(20),c=n(18);e._initScope=function(){this._initProps(),this._initMeta(),this._initMethods(),this._initData(),this._initComputed()},e._initProps=function(){var t=this.$options,e=t.el,n=t.props;e=t.el=s.query(e),this._propsUnlinkFn=e&&n?o.compileAndLinkProps(this,e,n):null},e._initData=function(){var t=this._data,e=this.$options.data,n=e&&e();if(n){this._data=n;for(var i in t)null===this._props[i].raw&&n.hasOwnProperty(i)||n.$set(i,t[i])}var r,o,h=this._data,c=Object.keys(h);for(r=c.length;r--;)o=c[r],s.isReserved(o)||this._proxy(o);a.create(h,this)},e._setData=function(t){t=t||{};var e=this._data;this._data=t;var n,i,r,o=this.$options.props;if(o)for(r=o.length;r--;)i=o[r].name,"$data"===i||t.hasOwnProperty(i)||t.$set(i,e[i]);for(n=Object.keys(e),r=n.length;r--;)i=n[r],s.isReserved(i)||i in t||this._unproxy(i);for(n=Object.keys(t),r=n.length;r--;)i=n[r],this.hasOwnProperty(i)||s.isReserved(i)||this._proxy(i);e.__ob__.removeVm(this),a.create(t,this),this._digest()},e._proxy=function(t){var e=this;Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return e._data[t]},set:function(n){e._data[t]=n}})},e._unproxy=function(t){delete this[t]},e._digest=function(){for(var t=this._watchers.length;t--;)this._watchers[t].update(!0);var e=this.$children;for(t=e.length;t--;){var n=e[t];n.$options.inherit&&n._digest()}},e._initComputed=function(){var t=this.$options.computed;if(t)for(var e in t){var n=t[e],o={enumerable:!0,configurable:!0};"function"==typeof n?(o.get=r(n,this),o.set=i):(o.get=n.get?r(n.get,this):i,o.set=n.set?s.bind(n.set,this):i),Object.defineProperty(this,e,o)}},e._initMethods=function(){var t=this.$options.methods;if(t)for(var e in t)this[e]=s.bind(t[e],this)},e._initMeta=function(){var t=this.$options._meta;if(t)for(var e in t)this._defineMeta(e,t[e])},e._defineMeta=function(t,e){var n=new h;Object.defineProperty(this,t,{enumerable:!0,configurable:!0,get:function(){return h.target&&n.depend(),e},set:function(t){t!==e&&(e=t,n.notify())}})}},function(t,e,n){function i(t){if(this.value=t,this.dep=new h,o.define(t,"__ob__",this),o.isArray(t)){var e=a.proto&&o.hasProto?r:s;e(t,c,l),this.observeArray(t)}else this.walk(t)}function r(t,e){t.__proto__=e}function s(t,e,n){for(var i,r=n.length;r--;)i=n[r],o.define(t,i,e[i])}var o=n(1),a=n(3),h=n(20),c=n(56),l=Object.getOwnPropertyNames(c);n(57),i.create=function(t,e){var n;return t&&t.hasOwnProperty("__ob__")&&t.__ob__ instanceof i?n=t.__ob__:!o.isObject(t)||Object.isFrozen(t)||t._isVue||(n=new i(t)),n&&e&&n.addVm(e),n};var u=i.prototype;u.walk=function(t){for(var e,n,i=Object.keys(t),r=i.length;r--;)e=i[r],n=e.charCodeAt(0),36!==n&&95!==n&&this.convert(e,t[e])},u.observe=function(t){return i.create(t)},u.observeArray=function(t){for(var e=t.length;e--;)this.observe(t[e])},u.convert=function(t,e){var n=this,i=n.observe(e),r=new h;Object.defineProperty(n.value,t,{enumerable:!0,configurable:!0,get:function(){if(h.target&&(r.depend(),i&&i.dep.depend(),o.isArray(e)))for(var t,n=0,s=e.length;s>n;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend();return e},set:function(t){t!==e&&(e=t,i=n.observe(t),r.notify())}})},u.addVm=function(t){(this.vms||(this.vms=[])).push(t)},u.removeVm=function(t){this.vms.$remove(t)},t.exports=i},function(t,e,n){var i=n(1),r=Array.prototype,s=Object.create(r);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=r[t];i.define(s,t,function(){for(var n=arguments.length,i=new Array(n);n--;)i[n]=arguments[n];var r,s=e.apply(this,i),o=this.__ob__;switch(t){case"push":r=i;break;case"unshift":r=i;break;case"splice":r=i.slice(2)}return r&&o.observeArray(r),o.dep.notify(),s})}),i.define(r,"$set",function(t,e){return t>=this.length&&(this.length=t+1),this.splice(t,1,e)[0]}),i.define(r,"$remove",function(t){return this.length?("number"!=typeof t&&(t=i.indexOf(this,t)),t>-1?this.splice(t,1):void 0):void 0}),t.exports=s},function(t,e,n){var i=n(1),r=Object.prototype;i.define(r,"$add",function(t,e){if(!this.hasOwnProperty(t)){var n=this.__ob__;if(!n||i.isReserved(t))return void(this[t]=e);if(n.convert(t,e),n.dep.notify(),n.vms)for(var r=n.vms.length;r--;){var s=n.vms[r];s._proxy(t),s._digest()}}}),i.define(r,"$set",function(t,e){this.$add(t,e),this[t]=e}),i.define(r,"$delete",function(t){if(this.hasOwnProperty(t)){delete this[t];var e=this.__ob__;if(e&&!i.isReserved(t)&&(e.dep.notify(),e.vms))for(var n=e.vms.length;n--;){var r=e.vms[n];r._unproxy(t),r._digest()}}})},function(t,e,n){var i=n(1),r=n(59),s=n(13);e._compile=function(t){var e=this.$options,n=this._host;if(e._linkFn)this._initElement(t),this._unlinkFn=e._linkFn(this,t,n);else{var r=t;t=s.transclude(t,e),this._initElement(t);var o,a=s.compileAndLinkRoot(this,t,e),h=this.constructor;e._linkerCachable&&(o=h.linker,o||(o=h.linker=s.compile(t,e)));var c=o?o(this,t):s.compile(t,e)(this,t,n);this._unlinkFn=function(){a(),c(!0)},e.replace&&i.replace(r,t)}return t},e._initElement=function(t){t instanceof DocumentFragment?(this._isFragment=!0,this.$el=this._fragmentStart=t.firstChild,this._fragmentEnd=t.lastChild,3===this._fragmentStart.nodeType&&(this._fragmentStart.data=this._fragmentEnd.data=""),this._blockFragment=t):this.$el=t,this.$el.__vue__=this,this._callHook("beforeCompile")},e._bindDir=function(t,e,n,i,s){this._directives.push(new r(t,e,this,n,i,s))},e._destroy=function(t,e){if(!this._isBeingDestroyed){this._callHook("beforeDestroy"),this._isBeingDestroyed=!0;var n,i=this.$parent;for(i&&!i._isBeingDestroyed&&i.$children.$remove(this),n=this.$children.length;n--;)this.$children[n].$destroy();for(this._propsUnlinkFn&&this._propsUnlinkFn(),this._unlinkFn&&this._unlinkFn(),n=this._watchers.length;n--;)this._watchers[n].teardown();this.$el&&(this.$el.__vue__=null);var r=this;t&&this.$el?this.$remove(function(){r._cleanup()}):e||this._cleanup()}},e._cleanup=function(){this._data.__ob__&&this._data.__ob__.removeVm(this),this.$el=this.$parent=this.$root=this.$children=this._watchers=this._directives=null,this._isDestroyed=!0,this._callHook("destroyed"),this.$off()}},function(t,e,n){function i(t,e,n,i,r,s){this.name=t,this.el=e,this.vm=n,this.raw=i.raw,this.expression=i.expression,this.arg=i.arg,this.filters=i.filters,this._descriptor=i,this._host=s,this._locked=!1,this._bound=!1,this._bind(r)}var r=n(1),s=n(3),o=n(18),a=n(10),h=n(19),c=i.prototype;c._bind=function(t){if(("cloak"!==this.name||this.vm._isCompiled)&&this.el&&this.el.removeAttribute&&this.el.removeAttribute(s.prefix+this.name),"function"==typeof t?this.update=t:r.extend(this,t),this._watcherExp=this.expression,this._checkDynamicLiteral(),this.bind&&this.bind(),this._watcherExp&&(this.update||this.twoWay)&&(!this.isLiteral||this._isDynamicLiteral)&&!this._checkStatement()){var e=this,n=this._update=this.update?function(t,n){e._locked||e.update(t,n)}:function(){},i=this._preProcess?r.bind(this._preProcess,this):null,a=this._watcher=new o(this.vm,this._watcherExp,n,{filters:this.filters,twoWay:this.twoWay,deep:this.deep,preProcess:i});null!=this._initValue?a.set(this._initValue):this.update&&this.update(a.value);
}this._bound=!0},c._checkDynamicLiteral=function(){var t=this.expression;if(t&&this.isLiteral){var e=a.parse(t);if(e){var n=a.tokensToExp(e);this.expression=this.vm.$get(n),this._watcherExp=n,this._isDynamicLiteral=!0}}},c._checkStatement=function(){var t=this.expression;if(t&&this.acceptStatement&&!h.isSimplePath(t)){var e=h.parse(t).get,n=this.vm,i=function(){e.call(n,n)};return this.filters&&(i=n._applyFilters(i,null,this.filters)),this.update(i),!0}},c._checkParam=function(t){var e=this.el.getAttribute(t);return null!==e&&(this.el.removeAttribute(t),e=this.vm.$interpolate(e)),e},c._teardown=function(){this._bound&&(this._bound=!1,this.unbind&&this.unbind(),this._watcher&&this._watcher.teardown(),this.vm=this.el=this._watcher=null)},c.set=function(t){this.twoWay&&this._withLock(function(){this._watcher.set(t)})},c._withLock=function(t){var e=this;e._locked=!0,t.call(e),r.nextTick(function(){e._locked=!1})},t.exports=i},function(t,e,n){var i=n(1);e._applyFilters=function(t,e,n,r){var s,o,a,h,c,l,u,f,p;for(l=0,u=n.length;u>l;l++)if(s=n[l],o=i.resolveAsset(this.$options,"filters",s.name),o&&(o=r?o.write:o.read||o,"function"==typeof o)){if(a=r?[t,e]:[t],c=r?2:1,s.args)for(f=0,p=s.args.length;p>f;f++)h=s.args[f],a[f+c]=h.dynamic?this.$get(h.value):h.value;t=o.apply(this,a)}return t},e._resolveComponent=function(t,e){var n=i.resolveAsset(this.$options,"components",t);if(n)if(n.options)e(n);else if(n.resolved)e(n.resolved);else if(n.requested)n.pendingCallbacks.push(e);else{n.requested=!0;var r=n.pendingCallbacks=[e];n(function(t){i.isPlainObject(t)&&(t=i.Vue.extend(t)),n.resolved=t;for(var e=0,s=r.length;s>e;e++)r[e](t)},function(t){})}}},function(t,e,n){var i=n(18),r=n(16),s=n(10),o=n(12),a=n(19),h=/[^|]\|[^|]/;e.$get=function(t){var e=a.parse(t);if(e)try{return e.get.call(this,this)}catch(n){}},e.$set=function(t,e){var n=a.parse(t,!0);n&&n.set&&n.set.call(this,this,e)},e.$add=function(t,e){this._data.$add(t,e)},e.$delete=function(t){this._data.$delete(t)},e.$watch=function(t,e,n){var r=this,s=function(t,n){e.call(r,t,n)},o=new i(r,t,s,{deep:n&&n.deep,user:!n||n.user!==!1});return n&&n.immediate&&s(o.value),function(){o.teardown()}},e.$eval=function(t){if(h.test(t)){var e=o.parse(t)[0],n=this.$get(e.expression);return e.filters?this._applyFilters(n,null,e.filters):n}return this.$get(t)},e.$interpolate=function(t){var e=s.parse(t),n=this;return e?1===e.length?n.$eval(e[0].value):e.map(function(t){return t.tag?n.$eval(t.value):t.value}).join(""):t},e.$log=function(t){var e=t?r.get(this._data,t):this._data;e&&(e=JSON.parse(JSON.stringify(e))),console.log(e)}},function(t,e,n){function i(t,e,n,i,o,a){e=s(e);var h=!c.inDoc(e),l=i===!1||h?o:a,u=!h&&!t._isAttached&&!c.inDoc(t.$el);return t._isFragment?r(t,e,l,n):l(t.$el,e,t,n),u&&t._callHook("attached"),t}function r(t,e,n,i){for(var r,s=t._fragmentStart,o=t._fragmentEnd;r!==o;)r=s.nextSibling,n(s,e,t),s=r;n(o,e,t,i)}function s(t){return"string"==typeof t?document.querySelector(t):t}function o(t,e,n,i){e.appendChild(t),i&&i()}function a(t,e,n,i){c.before(t,e),i&&i()}function h(t,e,n){c.remove(t),n&&n()}var c=n(1),l=n(31);e.$nextTick=function(t){c.nextTick(t,this)},e.$appendTo=function(t,e,n){return i(this,t,e,n,o,l.append)},e.$prependTo=function(t,e,n){return t=s(t),t.hasChildNodes()?this.$before(t.firstChild,e,n):this.$appendTo(t,e,n),this},e.$before=function(t,e,n){return i(this,t,e,n,a,l.before)},e.$after=function(t,e,n){return t=s(t),t.nextSibling?this.$before(t.nextSibling,e,n):this.$appendTo(t.parentNode,e,n),this},e.$remove=function(t,e){if(!this.$el.parentNode)return t&&t();var n=this._isAttached&&c.inDoc(this.$el);n||(e=!1);var i,s=this,a=function(){n&&s._callHook("detached"),t&&t()};return this._isFragment&&!this._blockFragment.hasChildNodes()?(i=e===!1?o:l.removeThenAppend,r(this,this._blockFragment,i,a)):(i=e===!1?h:l.remove)(this.$el,this,a),this}},function(t,e,n){function i(t,e,n){var i=t.$parent;if(i&&n&&!s.test(e))for(;i;)i._eventsCount[e]=(i._eventsCount[e]||0)+n,i=i.$parent}var r=n(1);e.$on=function(t,e){return(this._events[t]||(this._events[t]=[])).push(e),i(this,t,1),this},e.$once=function(t,e){function n(){i.$off(t,n),e.apply(this,arguments)}var i=this;return n.fn=e,this.$on(t,n),this},e.$off=function(t,e){var n;if(!arguments.length){if(this.$parent)for(t in this._events)n=this._events[t],n&&i(this,t,-n.length);return this._events={},this}if(n=this._events[t],!n)return this;if(1===arguments.length)return i(this,t,-n.length),this._events[t]=null,this;for(var r,s=n.length;s--;)if(r=n[s],r===e||r.fn===e){i(this,t,-1),n.splice(s,1);break}return this},e.$emit=function(t){this._eventCancelled=!1;var e=this._events[t];if(e){for(var n=arguments.length-1,i=new Array(n);n--;)i[n]=arguments[n+1];n=0,e=e.length>1?r.toArray(e):e;for(var s=e.length;s>n;n++)e[n].apply(this,i)===!1&&(this._eventCancelled=!0)}return this},e.$broadcast=function(t){if(this._eventsCount[t]){for(var e=this.$children,n=0,i=e.length;i>n;n++){var r=e[n];r.$emit.apply(r,arguments),r._eventCancelled||r.$broadcast.apply(r,arguments)}return this}},e.$dispatch=function(){for(var t=this.$parent;t;)t.$emit.apply(t,arguments),t=t._eventCancelled?null:t.$parent;return this};var s=/^hook:/},function(t,e,n){var i=n(1);e.$addChild=function(t,e){e=e||i.Vue,t=t||{};var n,r=this,s=void 0!==t.inherit?t.inherit:e.options.inherit;if(s){var o=r._childCtors;if(n=o[e.cid],!n){var a=e.options.name,h=a?i.classify(a):"VueComponent";n=new Function("return function "+h+" (options) {this.constructor = "+h+";this._init(options) }")(),n.options=e.options,n.linker=e.linker,n.prototype=t._context||this,o[e.cid]=n}}else n=e;t._parent=r,t._root=r.$root;var c=new n(t);return c}},function(t,e,n){function i(){this._isAttached=!0,this._isReady=!0,this._callHook("ready")}var r=n(1),s=n(13);e.$mount=function(t){return this._isCompiled?void 0:(t=r.query(t),t||(t=document.createElement("div")),this._compile(t),this._isCompiled=!0,this._callHook("compiled"),this._initDOMHooks(),r.inDoc(this.$el)?(this._callHook("attached"),i.call(this)):this.$once("hook:attached",i),this)},e.$destroy=function(t,e){this._destroy(t,e)},e.$compile=function(t,e){return s.compile(t,this.$options,!0,e)(this,t)}}])});
/*!
 * jQuery JavaScript Library v1.11.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:19Z
 */

(function( global, factory ) {

    if ( typeof module === "object" && typeof module.exports === "object" ) {
        // For CommonJS and CommonJS-like environments where a proper window is present,
        // execute the factory and get jQuery
        // For environments that do not inherently posses a window with a document
        // (such as Node.js), expose a jQuery-making factory as module.exports
        // This accentuates the need for the creation of a real window
        // e.g. var jQuery = require("jquery")(window);
        // See ticket #14549 for more info
        module.exports = global.document ?
            factory( global, true ) :
            function( w ) {
                if ( !w.document ) {
                    throw new Error( "jQuery requires a window with a document" );
                }
                return factory( w );
            };
    } else {
        factory( global );
    }

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Can't do this because several apps including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
// Support: Firefox 18+
//

    var deletedIds = [];

    var slice = deletedIds.slice;

    var concat = deletedIds.concat;

    var push = deletedIds.push;

    var indexOf = deletedIds.indexOf;

    var class2type = {};

    var toString = class2type.toString;

    var hasOwn = class2type.hasOwnProperty;

    var support = {};



    var
        version = "1.11.3",

    // Define a local copy of jQuery
        jQuery = function( selector, context ) {
            // The jQuery object is actually just the init constructor 'enhanced'
            // Need init if jQuery is called (just allow error to be thrown if not included)
            return new jQuery.fn.init( selector, context );
        },

    // Support: Android<4.1, IE<9
    // Make sure we trim BOM and NBSP
        rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

    // Matches dashed string for camelizing
        rmsPrefix = /^-ms-/,
        rdashAlpha = /-([\da-z])/gi,

    // Used by jQuery.camelCase as callback to replace()
        fcamelCase = function( all, letter ) {
            return letter.toUpperCase();
        };

    jQuery.fn = jQuery.prototype = {
        // The current version of jQuery being used
        jquery: version,

        constructor: jQuery,

        // Start with an empty selector
        selector: "",

        // The default length of a jQuery object is 0
        length: 0,

        toArray: function() {
            return slice.call( this );
        },

        // Get the Nth element in the matched element set OR
        // Get the whole matched element set as a clean array
        get: function( num ) {
            return num != null ?

                // Return just the one element from the set
                ( num < 0 ? this[ num + this.length ] : this[ num ] ) :

                // Return all the elements in a clean array
                slice.call( this );
        },

        // Take an array of elements and push it onto the stack
        // (returning the new matched element set)
        pushStack: function( elems ) {

            // Build a new jQuery matched element set
            var ret = jQuery.merge( this.constructor(), elems );

            // Add the old object onto the stack (as a reference)
            ret.prevObject = this;
            ret.context = this.context;

            // Return the newly-formed element set
            return ret;
        },

        // Execute a callback for every element in the matched set.
        // (You can seed the arguments with an array of args, but this is
        // only used internally.)
        each: function( callback, args ) {
            return jQuery.each( this, callback, args );
        },

        map: function( callback ) {
            return this.pushStack( jQuery.map(this, function( elem, i ) {
                return callback.call( elem, i, elem );
            }));
        },

        slice: function() {
            return this.pushStack( slice.apply( this, arguments ) );
        },

        first: function() {
            return this.eq( 0 );
        },

        last: function() {
            return this.eq( -1 );
        },

        eq: function( i ) {
            var len = this.length,
                j = +i + ( i < 0 ? len : 0 );
            return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
        },

        end: function() {
            return this.prevObject || this.constructor(null);
        },

        // For internal use only.
        // Behaves like an Array's method, not like a jQuery method.
        push: push,
        sort: deletedIds.sort,
        splice: deletedIds.splice
    };

    jQuery.extend = jQuery.fn.extend = function() {
        var src, copyIsArray, copy, name, options, clone,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;

        // Handle a deep copy situation
        if ( typeof target === "boolean" ) {
            deep = target;

            // skip the boolean and the target
            target = arguments[ i ] || {};
            i++;
        }

        // Handle case when target is a string or something (possible in deep copy)
        if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
            target = {};
        }

        // extend jQuery itself if only one argument is passed
        if ( i === length ) {
            target = this;
            i--;
        }

        for ( ; i < length; i++ ) {
            // Only deal with non-null/undefined values
            if ( (options = arguments[ i ]) != null ) {
                // Extend the base object
                for ( name in options ) {
                    src = target[ name ];
                    copy = options[ name ];

                    // Prevent never-ending loop
                    if ( target === copy ) {
                        continue;
                    }

                    // Recurse if we're merging plain objects or arrays
                    if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
                        if ( copyIsArray ) {
                            copyIsArray = false;
                            clone = src && jQuery.isArray(src) ? src : [];

                        } else {
                            clone = src && jQuery.isPlainObject(src) ? src : {};
                        }

                        // Never move original objects, clone them
                        target[ name ] = jQuery.extend( deep, clone, copy );

                        // Don't bring in undefined values
                    } else if ( copy !== undefined ) {
                        target[ name ] = copy;
                    }
                }
            }
        }

        // Return the modified object
        return target;
    };

    jQuery.extend({
        // Unique for each copy of jQuery on the page
        expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

        // Assume jQuery is ready without the ready module
        isReady: true,

        error: function( msg ) {
            throw new Error( msg );
        },

        noop: function() {},

        // See test/unit/core.js for details concerning isFunction.
        // Since version 1.3, DOM methods and functions like alert
        // aren't supported. They return false on IE (#2968).
        isFunction: function( obj ) {
            return jQuery.type(obj) === "function";
        },

        isArray: Array.isArray || function( obj ) {
            return jQuery.type(obj) === "array";
        },

        isWindow: function( obj ) {
            /* jshint eqeqeq: false */
            return obj != null && obj == obj.window;
        },

        isNumeric: function( obj ) {
            // parseFloat NaNs numeric-cast false positives (null|true|false|"")
            // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
            // subtraction forces infinities to NaN
            // adding 1 corrects loss of precision from parseFloat (#15100)
            return !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
        },

        isEmptyObject: function( obj ) {
            var name;
            for ( name in obj ) {
                return false;
            }
            return true;
        },

        isPlainObject: function( obj ) {
            var key;

            // Must be an Object.
            // Because of IE, we also have to check the presence of the constructor property.
            // Make sure that DOM nodes and window objects don't pass through, as well
            if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
                return false;
            }

            try {
                // Not own constructor property must be Object
                if ( obj.constructor &&
                    !hasOwn.call(obj, "constructor") &&
                    !hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
                    return false;
                }
            } catch ( e ) {
                // IE8,9 Will throw exceptions on certain host objects #9897
                return false;
            }

            // Support: IE<9
            // Handle iteration over inherited properties before own properties.
            if ( support.ownLast ) {
                for ( key in obj ) {
                    return hasOwn.call( obj, key );
                }
            }

            // Own properties are enumerated firstly, so to speed up,
            // if last one is own, then all properties are own.
            for ( key in obj ) {}

            return key === undefined || hasOwn.call( obj, key );
        },

        type: function( obj ) {
            if ( obj == null ) {
                return obj + "";
            }
            return typeof obj === "object" || typeof obj === "function" ?
            class2type[ toString.call(obj) ] || "object" :
                typeof obj;
        },

        // Evaluates a script in a global context
        // Workarounds based on findings by Jim Driscoll
        // http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
        globalEval: function( data ) {
            if ( data && jQuery.trim( data ) ) {
                // We use execScript on Internet Explorer
                // We use an anonymous function so that context is window
                // rather than jQuery in Firefox
                ( window.execScript || function( data ) {
                    window[ "eval" ].call( window, data );
                } )( data );
            }
        },

        // Convert dashed to camelCase; used by the css and data modules
        // Microsoft forgot to hump their vendor prefix (#9572)
        camelCase: function( string ) {
            return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
        },

        nodeName: function( elem, name ) {
            return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        },

        // args is for internal usage only
        each: function( obj, callback, args ) {
            var value,
                i = 0,
                length = obj.length,
                isArray = isArraylike( obj );

            if ( args ) {
                if ( isArray ) {
                    for ( ; i < length; i++ ) {
                        value = callback.apply( obj[ i ], args );

                        if ( value === false ) {
                            break;
                        }
                    }
                } else {
                    for ( i in obj ) {
                        value = callback.apply( obj[ i ], args );

                        if ( value === false ) {
                            break;
                        }
                    }
                }

                // A special, fast, case for the most common use of each
            } else {
                if ( isArray ) {
                    for ( ; i < length; i++ ) {
                        value = callback.call( obj[ i ], i, obj[ i ] );

                        if ( value === false ) {
                            break;
                        }
                    }
                } else {
                    for ( i in obj ) {
                        value = callback.call( obj[ i ], i, obj[ i ] );

                        if ( value === false ) {
                            break;
                        }
                    }
                }
            }

            return obj;
        },

        // Support: Android<4.1, IE<9
        trim: function( text ) {
            return text == null ?
                "" :
                ( text + "" ).replace( rtrim, "" );
        },

        // results is for internal usage only
        makeArray: function( arr, results ) {
            var ret = results || [];

            if ( arr != null ) {
                if ( isArraylike( Object(arr) ) ) {
                    jQuery.merge( ret,
                        typeof arr === "string" ?
                            [ arr ] : arr
                    );
                } else {
                    push.call( ret, arr );
                }
            }

            return ret;
        },

        inArray: function( elem, arr, i ) {
            var len;

            if ( arr ) {
                if ( indexOf ) {
                    return indexOf.call( arr, elem, i );
                }

                len = arr.length;
                i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

                for ( ; i < len; i++ ) {
                    // Skip accessing in sparse arrays
                    if ( i in arr && arr[ i ] === elem ) {
                        return i;
                    }
                }
            }

            return -1;
        },

        merge: function( first, second ) {
            var len = +second.length,
                j = 0,
                i = first.length;

            while ( j < len ) {
                first[ i++ ] = second[ j++ ];
            }

            // Support: IE<9
            // Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
            if ( len !== len ) {
                while ( second[j] !== undefined ) {
                    first[ i++ ] = second[ j++ ];
                }
            }

            first.length = i;

            return first;
        },

        grep: function( elems, callback, invert ) {
            var callbackInverse,
                matches = [],
                i = 0,
                length = elems.length,
                callbackExpect = !invert;

            // Go through the array, only saving the items
            // that pass the validator function
            for ( ; i < length; i++ ) {
                callbackInverse = !callback( elems[ i ], i );
                if ( callbackInverse !== callbackExpect ) {
                    matches.push( elems[ i ] );
                }
            }

            return matches;
        },

        // arg is for internal usage only
        map: function( elems, callback, arg ) {
            var value,
                i = 0,
                length = elems.length,
                isArray = isArraylike( elems ),
                ret = [];

            // Go through the array, translating each of the items to their new values
            if ( isArray ) {
                for ( ; i < length; i++ ) {
                    value = callback( elems[ i ], i, arg );

                    if ( value != null ) {
                        ret.push( value );
                    }
                }

                // Go through every key on the object,
            } else {
                for ( i in elems ) {
                    value = callback( elems[ i ], i, arg );

                    if ( value != null ) {
                        ret.push( value );
                    }
                }
            }

            // Flatten any nested arrays
            return concat.apply( [], ret );
        },

        // A global GUID counter for objects
        guid: 1,

        // Bind a function to a context, optionally partially applying any
        // arguments.
        proxy: function( fn, context ) {
            var args, proxy, tmp;

            if ( typeof context === "string" ) {
                tmp = fn[ context ];
                context = fn;
                fn = tmp;
            }

            // Quick check to determine if target is callable, in the spec
            // this throws a TypeError, but we will just return undefined.
            if ( !jQuery.isFunction( fn ) ) {
                return undefined;
            }

            // Simulated bind
            args = slice.call( arguments, 2 );
            proxy = function() {
                return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
            };

            // Set the guid of unique handler to the same of original handler, so it can be removed
            proxy.guid = fn.guid = fn.guid || jQuery.guid++;

            return proxy;
        },

        now: function() {
            return +( new Date() );
        },

        // jQuery.support is not used in Core but other projects attach their
        // properties to it so it needs to exist.
        support: support
    });

// Populate the class2type map
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
        class2type[ "[object " + name + "]" ] = name.toLowerCase();
    });

    function isArraylike( obj ) {

        // Support: iOS 8.2 (not reproducible in simulator)
        // `in` check used to prevent JIT error (gh-2145)
        // hasOwn isn't used here due to false negatives
        // regarding Nodelist length in IE
        var length = "length" in obj && obj.length,
            type = jQuery.type( obj );

        if ( type === "function" || jQuery.isWindow( obj ) ) {
            return false;
        }

        if ( obj.nodeType === 1 && length ) {
            return true;
        }

        return type === "array" || length === 0 ||
            typeof length === "number" && length > 0 && ( length - 1 ) in obj;
    }
    var Sizzle =
        /*!
         * Sizzle CSS Selector Engine v2.2.0-pre
         * http://sizzlejs.com/
         *
         * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2014-12-16
         */
        (function( window ) {

            var i,
                support,
                Expr,
                getText,
                isXML,
                tokenize,
                compile,
                select,
                outermostContext,
                sortInput,
                hasDuplicate,

            // Local document vars
                setDocument,
                document,
                docElem,
                documentIsHTML,
                rbuggyQSA,
                rbuggyMatches,
                matches,
                contains,

            // Instance-specific data
                expando = "sizzle" + 1 * new Date(),
                preferredDoc = window.document,
                dirruns = 0,
                done = 0,
                classCache = createCache(),
                tokenCache = createCache(),
                compilerCache = createCache(),
                sortOrder = function( a, b ) {
                    if ( a === b ) {
                        hasDuplicate = true;
                    }
                    return 0;
                },

            // General-purpose constants
                MAX_NEGATIVE = 1 << 31,

            // Instance methods
                hasOwn = ({}).hasOwnProperty,
                arr = [],
                pop = arr.pop,
                push_native = arr.push,
                push = arr.push,
                slice = arr.slice,
            // Use a stripped-down indexOf as it's faster than native
            // http://jsperf.com/thor-indexof-vs-for/5
                indexOf = function( list, elem ) {
                    var i = 0,
                        len = list.length;
                    for ( ; i < len; i++ ) {
                        if ( list[i] === elem ) {
                            return i;
                        }
                    }
                    return -1;
                },

                booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

            // Regular expressions

            // Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
                whitespace = "[\\x20\\t\\r\\n\\f]",
            // http://www.w3.org/TR/css3-syntax/#characters
                characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

            // Loosely modeled on CSS identifier characters
            // An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
            // Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
                identifier = characterEncoding.replace( "w", "w#" ),

            // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
                attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
                        // Operator (capture 2)
                    "*([*^$|!~]?=)" + whitespace +
                        // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
                    "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
                    "*\\]",

                pseudos = ":(" + characterEncoding + ")(?:\\((" +
                        // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
                        // 1. quoted (capture 3; capture 4 or capture 5)
                    "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
                        // 2. simple (capture 6)
                    "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
                        // 3. anything else (capture 2)
                    ".*" +
                    ")\\)|)",

            // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
                rwhitespace = new RegExp( whitespace + "+", "g" ),
                rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

                rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
                rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

                rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

                rpseudo = new RegExp( pseudos ),
                ridentifier = new RegExp( "^" + identifier + "$" ),

                matchExpr = {
                    "ID": new RegExp( "^#(" + characterEncoding + ")" ),
                    "CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
                    "TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
                    "ATTR": new RegExp( "^" + attributes ),
                    "PSEUDO": new RegExp( "^" + pseudos ),
                    "CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
                        "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
                        "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
                    "bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
                    // For use in libraries implementing .is()
                    // We use this for POS matching in `select`
                    "needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                        whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
                },

                rinputs = /^(?:input|select|textarea|button)$/i,
                rheader = /^h\d$/i,

                rnative = /^[^{]+\{\s*\[native \w/,

            // Easily-parseable/retrievable ID or TAG or CLASS selectors
                rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

                rsibling = /[+~]/,
                rescape = /'|\\/g,

            // CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
                runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
                funescape = function( _, escaped, escapedWhitespace ) {
                    var high = "0x" + escaped - 0x10000;
                    // NaN means non-codepoint
                    // Support: Firefox<24
                    // Workaround erroneous numeric interpretation of +"0x"
                    return high !== high || escapedWhitespace ?
                        escaped :
                        high < 0 ?
                            // BMP codepoint
                            String.fromCharCode( high + 0x10000 ) :
                            // Supplemental Plane codepoint (surrogate pair)
                            String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
                },

            // Used for iframes
            // See setDocument()
            // Removing the function wrapper causes a "Permission Denied"
            // error in IE
                unloadHandler = function() {
                    setDocument();
                };

// Optimize for push.apply( _, NodeList )
            try {
                push.apply(
                    (arr = slice.call( preferredDoc.childNodes )),
                    preferredDoc.childNodes
                );
                // Support: Android<4.0
                // Detect silently failing push.apply
                arr[ preferredDoc.childNodes.length ].nodeType;
            } catch ( e ) {
                push = { apply: arr.length ?

                    // Leverage slice if possible
                    function( target, els ) {
                        push_native.apply( target, slice.call(els) );
                    } :

                    // Support: IE<9
                    // Otherwise append directly
                    function( target, els ) {
                        var j = target.length,
                            i = 0;
                        // Can't trust NodeList.length
                        while ( (target[j++] = els[i++]) ) {}
                        target.length = j - 1;
                    }
                };
            }

            function Sizzle( selector, context, results, seed ) {
                var match, elem, m, nodeType,
                // QSA vars
                    i, groups, old, nid, newContext, newSelector;

                if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
                    setDocument( context );
                }

                context = context || document;
                results = results || [];
                nodeType = context.nodeType;

                if ( typeof selector !== "string" || !selector ||
                    nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

                    return results;
                }

                if ( !seed && documentIsHTML ) {

                    // Try to shortcut find operations when possible (e.g., not under DocumentFragment)
                    if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
                        // Speed-up: Sizzle("#ID")
                        if ( (m = match[1]) ) {
                            if ( nodeType === 9 ) {
                                elem = context.getElementById( m );
                                // Check parentNode to catch when Blackberry 4.6 returns
                                // nodes that are no longer in the document (jQuery #6963)
                                if ( elem && elem.parentNode ) {
                                    // Handle the case where IE, Opera, and Webkit return items
                                    // by name instead of ID
                                    if ( elem.id === m ) {
                                        results.push( elem );
                                        return results;
                                    }
                                } else {
                                    return results;
                                }
                            } else {
                                // Context is not a document
                                if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
                                    contains( context, elem ) && elem.id === m ) {
                                    results.push( elem );
                                    return results;
                                }
                            }

                            // Speed-up: Sizzle("TAG")
                        } else if ( match[2] ) {
                            push.apply( results, context.getElementsByTagName( selector ) );
                            return results;

                            // Speed-up: Sizzle(".CLASS")
                        } else if ( (m = match[3]) && support.getElementsByClassName ) {
                            push.apply( results, context.getElementsByClassName( m ) );
                            return results;
                        }
                    }

                    // QSA path
                    if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
                        nid = old = expando;
                        newContext = context;
                        newSelector = nodeType !== 1 && selector;

                        // qSA works strangely on Element-rooted queries
                        // We can work around this by specifying an extra ID on the root
                        // and working up from there (Thanks to Andrew Dupont for the technique)
                        // IE 8 doesn't work on object elements
                        if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
                            groups = tokenize( selector );

                            if ( (old = context.getAttribute("id")) ) {
                                nid = old.replace( rescape, "\\$&" );
                            } else {
                                context.setAttribute( "id", nid );
                            }
                            nid = "[id='" + nid + "'] ";

                            i = groups.length;
                            while ( i-- ) {
                                groups[i] = nid + toSelector( groups[i] );
                            }
                            newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
                            newSelector = groups.join(",");
                        }

                        if ( newSelector ) {
                            try {
                                push.apply( results,
                                    newContext.querySelectorAll( newSelector )
                                );
                                return results;
                            } catch(qsaError) {
                            } finally {
                                if ( !old ) {
                                    context.removeAttribute("id");
                                }
                            }
                        }
                    }
                }

                // All others
                return select( selector.replace( rtrim, "$1" ), context, results, seed );
            }

            /**
             * Create key-value caches of limited size
             * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
             *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
             *	deleting the oldest entry
             */
            function createCache() {
                var keys = [];

                function cache( key, value ) {
                    // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
                    if ( keys.push( key + " " ) > Expr.cacheLength ) {
                        // Only keep the most recent entries
                        delete cache[ keys.shift() ];
                    }
                    return (cache[ key + " " ] = value);
                }
                return cache;
            }

            /**
             * Mark a function for special use by Sizzle
             * @param {Function} fn The function to mark
             */
            function markFunction( fn ) {
                fn[ expando ] = true;
                return fn;
            }

            /**
             * Support testing using an element
             * @param {Function} fn Passed the created div and expects a boolean result
             */
            function assert( fn ) {
                var div = document.createElement("div");

                try {
                    return !!fn( div );
                } catch (e) {
                    return false;
                } finally {
                    // Remove from its parent by default
                    if ( div.parentNode ) {
                        div.parentNode.removeChild( div );
                    }
                    // release memory in IE
                    div = null;
                }
            }

            /**
             * Adds the same handler for all of the specified attrs
             * @param {String} attrs Pipe-separated list of attributes
             * @param {Function} handler The method that will be applied
             */
            function addHandle( attrs, handler ) {
                var arr = attrs.split("|"),
                    i = attrs.length;

                while ( i-- ) {
                    Expr.attrHandle[ arr[i] ] = handler;
                }
            }

            /**
             * Checks document order of two siblings
             * @param {Element} a
             * @param {Element} b
             * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
             */
            function siblingCheck( a, b ) {
                var cur = b && a,
                    diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
                        ( ~b.sourceIndex || MAX_NEGATIVE ) -
                        ( ~a.sourceIndex || MAX_NEGATIVE );

                // Use IE sourceIndex if available on both nodes
                if ( diff ) {
                    return diff;
                }

                // Check if b follows a
                if ( cur ) {
                    while ( (cur = cur.nextSibling) ) {
                        if ( cur === b ) {
                            return -1;
                        }
                    }
                }

                return a ? 1 : -1;
            }

            /**
             * Returns a function to use in pseudos for input types
             * @param {String} type
             */
            function createInputPseudo( type ) {
                return function( elem ) {
                    var name = elem.nodeName.toLowerCase();
                    return name === "input" && elem.type === type;
                };
            }

            /**
             * Returns a function to use in pseudos for buttons
             * @param {String} type
             */
            function createButtonPseudo( type ) {
                return function( elem ) {
                    var name = elem.nodeName.toLowerCase();
                    return (name === "input" || name === "button") && elem.type === type;
                };
            }

            /**
             * Returns a function to use in pseudos for positionals
             * @param {Function} fn
             */
            function createPositionalPseudo( fn ) {
                return markFunction(function( argument ) {
                    argument = +argument;
                    return markFunction(function( seed, matches ) {
                        var j,
                            matchIndexes = fn( [], seed.length, argument ),
                            i = matchIndexes.length;

                        // Match elements found at the specified indexes
                        while ( i-- ) {
                            if ( seed[ (j = matchIndexes[i]) ] ) {
                                seed[j] = !(matches[j] = seed[j]);
                            }
                        }
                    });
                });
            }

            /**
             * Checks a node for validity as a Sizzle context
             * @param {Element|Object=} context
             * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
             */
            function testContext( context ) {
                return context && typeof context.getElementsByTagName !== "undefined" && context;
            }

// Expose support vars for convenience
            support = Sizzle.support = {};

            /**
             * Detects XML nodes
             * @param {Element|Object} elem An element or a document
             * @returns {Boolean} True iff elem is a non-HTML XML node
             */
            isXML = Sizzle.isXML = function( elem ) {
                // documentElement is verified for cases where it doesn't yet exist
                // (such as loading iframes in IE - #4833)
                var documentElement = elem && (elem.ownerDocument || elem).documentElement;
                return documentElement ? documentElement.nodeName !== "HTML" : false;
            };

            /**
             * Sets document-related variables once based on the current document
             * @param {Element|Object} [doc] An element or document object to use to set the document
             * @returns {Object} Returns the current document
             */
            setDocument = Sizzle.setDocument = function( node ) {
                var hasCompare, parent,
                    doc = node ? node.ownerDocument || node : preferredDoc;

                // If no document and documentElement is available, return
                if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
                    return document;
                }

                // Set our document
                document = doc;
                docElem = doc.documentElement;
                parent = doc.defaultView;

                // Support: IE>8
                // If iframe document is assigned to "document" variable and if iframe has been reloaded,
                // IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
                // IE6-8 do not support the defaultView property so parent will be undefined
                if ( parent && parent !== parent.top ) {
                    // IE11 does not have attachEvent, so all must suffer
                    if ( parent.addEventListener ) {
                        parent.addEventListener( "unload", unloadHandler, false );
                    } else if ( parent.attachEvent ) {
                        parent.attachEvent( "onunload", unloadHandler );
                    }
                }

                /* Support tests
                 ---------------------------------------------------------------------- */
                documentIsHTML = !isXML( doc );

                /* Attributes
                 ---------------------------------------------------------------------- */

                // Support: IE<8
                // Verify that getAttribute really returns attributes and not properties
                // (excepting IE8 booleans)
                support.attributes = assert(function( div ) {
                    div.className = "i";
                    return !div.getAttribute("className");
                });

                /* getElement(s)By*
                 ---------------------------------------------------------------------- */

                // Check if getElementsByTagName("*") returns only elements
                support.getElementsByTagName = assert(function( div ) {
                    div.appendChild( doc.createComment("") );
                    return !div.getElementsByTagName("*").length;
                });

                // Support: IE<9
                support.getElementsByClassName = rnative.test( doc.getElementsByClassName );

                // Support: IE<10
                // Check if getElementById returns elements by name
                // The broken getElementById methods don't pick up programatically-set names,
                // so use a roundabout getElementsByName test
                support.getById = assert(function( div ) {
                    docElem.appendChild( div ).id = expando;
                    return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
                });

                // ID find and filter
                if ( support.getById ) {
                    Expr.find["ID"] = function( id, context ) {
                        if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
                            var m = context.getElementById( id );
                            // Check parentNode to catch when Blackberry 4.6 returns
                            // nodes that are no longer in the document #6963
                            return m && m.parentNode ? [ m ] : [];
                        }
                    };
                    Expr.filter["ID"] = function( id ) {
                        var attrId = id.replace( runescape, funescape );
                        return function( elem ) {
                            return elem.getAttribute("id") === attrId;
                        };
                    };
                } else {
                    // Support: IE6/7
                    // getElementById is not reliable as a find shortcut
                    delete Expr.find["ID"];

                    Expr.filter["ID"] =  function( id ) {
                        var attrId = id.replace( runescape, funescape );
                        return function( elem ) {
                            var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                            return node && node.value === attrId;
                        };
                    };
                }

                // Tag
                Expr.find["TAG"] = support.getElementsByTagName ?
                    function( tag, context ) {
                        if ( typeof context.getElementsByTagName !== "undefined" ) {
                            return context.getElementsByTagName( tag );

                            // DocumentFragment nodes don't have gEBTN
                        } else if ( support.qsa ) {
                            return context.querySelectorAll( tag );
                        }
                    } :

                    function( tag, context ) {
                        var elem,
                            tmp = [],
                            i = 0,
                        // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
                            results = context.getElementsByTagName( tag );

                        // Filter out possible comments
                        if ( tag === "*" ) {
                            while ( (elem = results[i++]) ) {
                                if ( elem.nodeType === 1 ) {
                                    tmp.push( elem );
                                }
                            }

                            return tmp;
                        }
                        return results;
                    };

                // Class
                Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
                        if ( documentIsHTML ) {
                            return context.getElementsByClassName( className );
                        }
                    };

                /* QSA/matchesSelector
                 ---------------------------------------------------------------------- */

                // QSA and matchesSelector support

                // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
                rbuggyMatches = [];

                // qSa(:focus) reports false when true (Chrome 21)
                // We allow this because of a bug in IE8/9 that throws an error
                // whenever `document.activeElement` is accessed on an iframe
                // So, we allow :focus to pass through QSA all the time to avoid the IE error
                // See http://bugs.jquery.com/ticket/13378
                rbuggyQSA = [];

                if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
                    // Build QSA regex
                    // Regex strategy adopted from Diego Perini
                    assert(function( div ) {
                        // Select is set to empty string on purpose
                        // This is to test IE's treatment of not explicitly
                        // setting a boolean content attribute,
                        // since its presence should be enough
                        // http://bugs.jquery.com/ticket/12359
                        docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
                            "<select id='" + expando + "-\f]' msallowcapture=''>" +
                            "<option selected=''></option></select>";

                        // Support: IE8, Opera 11-12.16
                        // Nothing should be selected when empty strings follow ^= or $= or *=
                        // The test attribute must be unknown in Opera but "safe" for WinRT
                        // http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
                        if ( div.querySelectorAll("[msallowcapture^='']").length ) {
                            rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
                        }

                        // Support: IE8
                        // Boolean attributes and "value" are not treated correctly
                        if ( !div.querySelectorAll("[selected]").length ) {
                            rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
                        }

                        // Support: Chrome<29, Android<4.2+, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.7+
                        if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
                            rbuggyQSA.push("~=");
                        }

                        // Webkit/Opera - :checked should return selected option elements
                        // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                        // IE8 throws error here and will not see later tests
                        if ( !div.querySelectorAll(":checked").length ) {
                            rbuggyQSA.push(":checked");
                        }

                        // Support: Safari 8+, iOS 8+
                        // https://bugs.webkit.org/show_bug.cgi?id=136851
                        // In-page `selector#id sibing-combinator selector` fails
                        if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
                            rbuggyQSA.push(".#.+[+~]");
                        }
                    });

                    assert(function( div ) {
                        // Support: Windows 8 Native Apps
                        // The type and name attributes are restricted during .innerHTML assignment
                        var input = doc.createElement("input");
                        input.setAttribute( "type", "hidden" );
                        div.appendChild( input ).setAttribute( "name", "D" );

                        // Support: IE8
                        // Enforce case-sensitivity of name attribute
                        if ( div.querySelectorAll("[name=d]").length ) {
                            rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
                        }

                        // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
                        // IE8 throws error here and will not see later tests
                        if ( !div.querySelectorAll(":enabled").length ) {
                            rbuggyQSA.push( ":enabled", ":disabled" );
                        }

                        // Opera 10-11 does not throw on post-comma invalid pseudos
                        div.querySelectorAll("*,:x");
                        rbuggyQSA.push(",.*:");
                    });
                }

                if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
                        docElem.webkitMatchesSelector ||
                        docElem.mozMatchesSelector ||
                        docElem.oMatchesSelector ||
                        docElem.msMatchesSelector) )) ) {

                    assert(function( div ) {
                        // Check to see if it's possible to do matchesSelector
                        // on a disconnected node (IE 9)
                        support.disconnectedMatch = matches.call( div, "div" );

                        // This should fail with an exception
                        // Gecko does not error, returns false instead
                        matches.call( div, "[s!='']:x" );
                        rbuggyMatches.push( "!=", pseudos );
                    });
                }

                rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
                rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

                /* Contains
                 ---------------------------------------------------------------------- */
                hasCompare = rnative.test( docElem.compareDocumentPosition );

                // Element contains another
                // Purposefully does not implement inclusive descendent
                // As in, an element does not contain itself
                contains = hasCompare || rnative.test( docElem.contains ) ?
                    function( a, b ) {
                        var adown = a.nodeType === 9 ? a.documentElement : a,
                            bup = b && b.parentNode;
                        return a === bup || !!( bup && bup.nodeType === 1 && (
                                adown.contains ?
                                    adown.contains( bup ) :
                                a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
                            ));
                    } :
                    function( a, b ) {
                        if ( b ) {
                            while ( (b = b.parentNode) ) {
                                if ( b === a ) {
                                    return true;
                                }
                            }
                        }
                        return false;
                    };

                /* Sorting
                 ---------------------------------------------------------------------- */

                // Document order sorting
                sortOrder = hasCompare ?
                    function( a, b ) {

                        // Flag for duplicate removal
                        if ( a === b ) {
                            hasDuplicate = true;
                            return 0;
                        }

                        // Sort on method existence if only one input has compareDocumentPosition
                        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                        if ( compare ) {
                            return compare;
                        }

                        // Calculate position if both inputs belong to the same document
                        compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
                            a.compareDocumentPosition( b ) :

                            // Otherwise we know they are disconnected
                            1;

                        // Disconnected nodes
                        if ( compare & 1 ||
                            (!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

                            // Choose the first element that is related to our preferred document
                            if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
                                return -1;
                            }
                            if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
                                return 1;
                            }

                            // Maintain original order
                            return sortInput ?
                                ( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
                                0;
                        }

                        return compare & 4 ? -1 : 1;
                    } :
                    function( a, b ) {
                        // Exit early if the nodes are identical
                        if ( a === b ) {
                            hasDuplicate = true;
                            return 0;
                        }

                        var cur,
                            i = 0,
                            aup = a.parentNode,
                            bup = b.parentNode,
                            ap = [ a ],
                            bp = [ b ];

                        // Parentless nodes are either documents or disconnected
                        if ( !aup || !bup ) {
                            return a === doc ? -1 :
                                b === doc ? 1 :
                                    aup ? -1 :
                                        bup ? 1 :
                                            sortInput ?
                                                ( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
                                                0;

                            // If the nodes are siblings, we can do a quick check
                        } else if ( aup === bup ) {
                            return siblingCheck( a, b );
                        }

                        // Otherwise we need full lists of their ancestors for comparison
                        cur = a;
                        while ( (cur = cur.parentNode) ) {
                            ap.unshift( cur );
                        }
                        cur = b;
                        while ( (cur = cur.parentNode) ) {
                            bp.unshift( cur );
                        }

                        // Walk down the tree looking for a discrepancy
                        while ( ap[i] === bp[i] ) {
                            i++;
                        }

                        return i ?
                            // Do a sibling check if the nodes have a common ancestor
                            siblingCheck( ap[i], bp[i] ) :

                            // Otherwise nodes in our document sort first
                            ap[i] === preferredDoc ? -1 :
                                bp[i] === preferredDoc ? 1 :
                                    0;
                    };

                return doc;
            };

            Sizzle.matches = function( expr, elements ) {
                return Sizzle( expr, null, null, elements );
            };

            Sizzle.matchesSelector = function( elem, expr ) {
                // Set document vars if needed
                if ( ( elem.ownerDocument || elem ) !== document ) {
                    setDocument( elem );
                }

                // Make sure that attribute selectors are quoted
                expr = expr.replace( rattributeQuotes, "='$1']" );

                if ( support.matchesSelector && documentIsHTML &&
                    ( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
                    ( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

                    try {
                        var ret = matches.call( elem, expr );

                        // IE 9's matchesSelector returns false on disconnected nodes
                        if ( ret || support.disconnectedMatch ||
                                // As well, disconnected nodes are said to be in a document
                                // fragment in IE 9
                            elem.document && elem.document.nodeType !== 11 ) {
                            return ret;
                        }
                    } catch (e) {}
                }

                return Sizzle( expr, document, null, [ elem ] ).length > 0;
            };

            Sizzle.contains = function( context, elem ) {
                // Set document vars if needed
                if ( ( context.ownerDocument || context ) !== document ) {
                    setDocument( context );
                }
                return contains( context, elem );
            };

            Sizzle.attr = function( elem, name ) {
                // Set document vars if needed
                if ( ( elem.ownerDocument || elem ) !== document ) {
                    setDocument( elem );
                }

                var fn = Expr.attrHandle[ name.toLowerCase() ],
                // Don't get fooled by Object.prototype properties (jQuery #13807)
                    val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
                        fn( elem, name, !documentIsHTML ) :
                        undefined;

                return val !== undefined ?
                    val :
                    support.attributes || !documentIsHTML ?
                        elem.getAttribute( name ) :
                        (val = elem.getAttributeNode(name)) && val.specified ?
                            val.value :
                            null;
            };

            Sizzle.error = function( msg ) {
                throw new Error( "Syntax error, unrecognized expression: " + msg );
            };

            /**
             * Document sorting and removing duplicates
             * @param {ArrayLike} results
             */
            Sizzle.uniqueSort = function( results ) {
                var elem,
                    duplicates = [],
                    j = 0,
                    i = 0;

                // Unless we *know* we can detect duplicates, assume their presence
                hasDuplicate = !support.detectDuplicates;
                sortInput = !support.sortStable && results.slice( 0 );
                results.sort( sortOrder );

                if ( hasDuplicate ) {
                    while ( (elem = results[i++]) ) {
                        if ( elem === results[ i ] ) {
                            j = duplicates.push( i );
                        }
                    }
                    while ( j-- ) {
                        results.splice( duplicates[ j ], 1 );
                    }
                }

                // Clear input after sorting to release objects
                // See https://github.com/jquery/sizzle/pull/225
                sortInput = null;

                return results;
            };

            /**
             * Utility function for retrieving the text value of an array of DOM nodes
             * @param {Array|Element} elem
             */
            getText = Sizzle.getText = function( elem ) {
                var node,
                    ret = "",
                    i = 0,
                    nodeType = elem.nodeType;

                if ( !nodeType ) {
                    // If no nodeType, this is expected to be an array
                    while ( (node = elem[i++]) ) {
                        // Do not traverse comment nodes
                        ret += getText( node );
                    }
                } else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
                    // Use textContent for elements
                    // innerText usage removed for consistency of new lines (jQuery #11153)
                    if ( typeof elem.textContent === "string" ) {
                        return elem.textContent;
                    } else {
                        // Traverse its children
                        for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
                            ret += getText( elem );
                        }
                    }
                } else if ( nodeType === 3 || nodeType === 4 ) {
                    return elem.nodeValue;
                }
                // Do not include comment or processing instruction nodes

                return ret;
            };

            Expr = Sizzle.selectors = {

                // Can be adjusted by the user
                cacheLength: 50,

                createPseudo: markFunction,

                match: matchExpr,

                attrHandle: {},

                find: {},

                relative: {
                    ">": { dir: "parentNode", first: true },
                    " ": { dir: "parentNode" },
                    "+": { dir: "previousSibling", first: true },
                    "~": { dir: "previousSibling" }
                },

                preFilter: {
                    "ATTR": function( match ) {
                        match[1] = match[1].replace( runescape, funescape );

                        // Move the given value to match[3] whether quoted or unquoted
                        match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

                        if ( match[2] === "~=" ) {
                            match[3] = " " + match[3] + " ";
                        }

                        return match.slice( 0, 4 );
                    },

                    "CHILD": function( match ) {
                        /* matches from matchExpr["CHILD"]
                         1 type (only|nth|...)
                         2 what (child|of-type)
                         3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
                         4 xn-component of xn+y argument ([+-]?\d*n|)
                         5 sign of xn-component
                         6 x of xn-component
                         7 sign of y-component
                         8 y of y-component
                         */
                        match[1] = match[1].toLowerCase();

                        if ( match[1].slice( 0, 3 ) === "nth" ) {
                            // nth-* requires argument
                            if ( !match[3] ) {
                                Sizzle.error( match[0] );
                            }

                            // numeric x and y parameters for Expr.filter.CHILD
                            // remember that false/true cast respectively to 0/1
                            match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
                            match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

                            // other types prohibit arguments
                        } else if ( match[3] ) {
                            Sizzle.error( match[0] );
                        }

                        return match;
                    },

                    "PSEUDO": function( match ) {
                        var excess,
                            unquoted = !match[6] && match[2];

                        if ( matchExpr["CHILD"].test( match[0] ) ) {
                            return null;
                        }

                        // Accept quoted arguments as-is
                        if ( match[3] ) {
                            match[2] = match[4] || match[5] || "";

                            // Strip excess characters from unquoted arguments
                        } else if ( unquoted && rpseudo.test( unquoted ) &&
                                // Get excess from tokenize (recursively)
                            (excess = tokenize( unquoted, true )) &&
                                // advance to the next closing parenthesis
                            (excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

                            // excess is a negative index
                            match[0] = match[0].slice( 0, excess );
                            match[2] = unquoted.slice( 0, excess );
                        }

                        // Return only captures needed by the pseudo filter method (type and argument)
                        return match.slice( 0, 3 );
                    }
                },

                filter: {

                    "TAG": function( nodeNameSelector ) {
                        var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
                        return nodeNameSelector === "*" ?
                            function() { return true; } :
                            function( elem ) {
                                return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                            };
                    },

                    "CLASS": function( className ) {
                        var pattern = classCache[ className + " " ];

                        return pattern ||
                            (pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
                            classCache( className, function( elem ) {
                                return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
                            });
                    },

                    "ATTR": function( name, operator, check ) {
                        return function( elem ) {
                            var result = Sizzle.attr( elem, name );

                            if ( result == null ) {
                                return operator === "!=";
                            }
                            if ( !operator ) {
                                return true;
                            }

                            result += "";

                            return operator === "=" ? result === check :
                                operator === "!=" ? result !== check :
                                    operator === "^=" ? check && result.indexOf( check ) === 0 :
                                        operator === "*=" ? check && result.indexOf( check ) > -1 :
                                            operator === "$=" ? check && result.slice( -check.length ) === check :
                                                operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
                                                    operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
                                                        false;
                        };
                    },

                    "CHILD": function( type, what, argument, first, last ) {
                        var simple = type.slice( 0, 3 ) !== "nth",
                            forward = type.slice( -4 ) !== "last",
                            ofType = what === "of-type";

                        return first === 1 && last === 0 ?

                            // Shortcut for :nth-*(n)
                            function( elem ) {
                                return !!elem.parentNode;
                            } :

                            function( elem, context, xml ) {
                                var cache, outerCache, node, diff, nodeIndex, start,
                                    dir = simple !== forward ? "nextSibling" : "previousSibling",
                                    parent = elem.parentNode,
                                    name = ofType && elem.nodeName.toLowerCase(),
                                    useCache = !xml && !ofType;

                                if ( parent ) {

                                    // :(first|last|only)-(child|of-type)
                                    if ( simple ) {
                                        while ( dir ) {
                                            node = elem;
                                            while ( (node = node[ dir ]) ) {
                                                if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
                                                    return false;
                                                }
                                            }
                                            // Reverse direction for :only-* (if we haven't yet done so)
                                            start = dir = type === "only" && !start && "nextSibling";
                                        }
                                        return true;
                                    }

                                    start = [ forward ? parent.firstChild : parent.lastChild ];

                                    // non-xml :nth-child(...) stores cache data on `parent`
                                    if ( forward && useCache ) {
                                        // Seek `elem` from a previously-cached index
                                        outerCache = parent[ expando ] || (parent[ expando ] = {});
                                        cache = outerCache[ type ] || [];
                                        nodeIndex = cache[0] === dirruns && cache[1];
                                        diff = cache[0] === dirruns && cache[2];
                                        node = nodeIndex && parent.childNodes[ nodeIndex ];

                                        while ( (node = ++nodeIndex && node && node[ dir ] ||

                                                // Fallback to seeking `elem` from the start
                                            (diff = nodeIndex = 0) || start.pop()) ) {

                                            // When found, cache indexes on `parent` and break
                                            if ( node.nodeType === 1 && ++diff && node === elem ) {
                                                outerCache[ type ] = [ dirruns, nodeIndex, diff ];
                                                break;
                                            }
                                        }

                                        // Use previously-cached element index if available
                                    } else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
                                        diff = cache[1];

                                        // xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
                                    } else {
                                        // Use the same loop as above to seek `elem` from the start
                                        while ( (node = ++nodeIndex && node && node[ dir ] ||
                                            (diff = nodeIndex = 0) || start.pop()) ) {

                                            if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
                                                // Cache the index of each encountered element
                                                if ( useCache ) {
                                                    (node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
                                                }

                                                if ( node === elem ) {
                                                    break;
                                                }
                                            }
                                        }
                                    }

                                    // Incorporate the offset, then check against cycle size
                                    diff -= last;
                                    return diff === first || ( diff % first === 0 && diff / first >= 0 );
                                }
                            };
                    },

                    "PSEUDO": function( pseudo, argument ) {
                        // pseudo-class names are case-insensitive
                        // http://www.w3.org/TR/selectors/#pseudo-classes
                        // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
                        // Remember that setFilters inherits from pseudos
                        var args,
                            fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
                                Sizzle.error( "unsupported pseudo: " + pseudo );

                        // The user may use createPseudo to indicate that
                        // arguments are needed to create the filter function
                        // just as Sizzle does
                        if ( fn[ expando ] ) {
                            return fn( argument );
                        }

                        // But maintain support for old signatures
                        if ( fn.length > 1 ) {
                            args = [ pseudo, pseudo, "", argument ];
                            return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
                                markFunction(function( seed, matches ) {
                                    var idx,
                                        matched = fn( seed, argument ),
                                        i = matched.length;
                                    while ( i-- ) {
                                        idx = indexOf( seed, matched[i] );
                                        seed[ idx ] = !( matches[ idx ] = matched[i] );
                                    }
                                }) :
                                function( elem ) {
                                    return fn( elem, 0, args );
                                };
                        }

                        return fn;
                    }
                },

                pseudos: {
                    // Potentially complex pseudos
                    "not": markFunction(function( selector ) {
                        // Trim the selector passed to compile
                        // to avoid treating leading and trailing
                        // spaces as combinators
                        var input = [],
                            results = [],
                            matcher = compile( selector.replace( rtrim, "$1" ) );

                        return matcher[ expando ] ?
                            markFunction(function( seed, matches, context, xml ) {
                                var elem,
                                    unmatched = matcher( seed, null, xml, [] ),
                                    i = seed.length;

                                // Match elements unmatched by `matcher`
                                while ( i-- ) {
                                    if ( (elem = unmatched[i]) ) {
                                        seed[i] = !(matches[i] = elem);
                                    }
                                }
                            }) :
                            function( elem, context, xml ) {
                                input[0] = elem;
                                matcher( input, null, xml, results );
                                // Don't keep the element (issue #299)
                                input[0] = null;
                                return !results.pop();
                            };
                    }),

                    "has": markFunction(function( selector ) {
                        return function( elem ) {
                            return Sizzle( selector, elem ).length > 0;
                        };
                    }),

                    "contains": markFunction(function( text ) {
                        text = text.replace( runescape, funescape );
                        return function( elem ) {
                            return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
                        };
                    }),

                    // "Whether an element is represented by a :lang() selector
                    // is based solely on the element's language value
                    // being equal to the identifier C,
                    // or beginning with the identifier C immediately followed by "-".
                    // The matching of C against the element's language value is performed case-insensitively.
                    // The identifier C does not have to be a valid language name."
                    // http://www.w3.org/TR/selectors/#lang-pseudo
                    "lang": markFunction( function( lang ) {
                        // lang value must be a valid identifier
                        if ( !ridentifier.test(lang || "") ) {
                            Sizzle.error( "unsupported lang: " + lang );
                        }
                        lang = lang.replace( runescape, funescape ).toLowerCase();
                        return function( elem ) {
                            var elemLang;
                            do {
                                if ( (elemLang = documentIsHTML ?
                                        elem.lang :
                                    elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

                                    elemLang = elemLang.toLowerCase();
                                    return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
                                }
                            } while ( (elem = elem.parentNode) && elem.nodeType === 1 );
                            return false;
                        };
                    }),

                    // Miscellaneous
                    "target": function( elem ) {
                        var hash = window.location && window.location.hash;
                        return hash && hash.slice( 1 ) === elem.id;
                    },

                    "root": function( elem ) {
                        return elem === docElem;
                    },

                    "focus": function( elem ) {
                        return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                    },

                    // Boolean properties
                    "enabled": function( elem ) {
                        return elem.disabled === false;
                    },

                    "disabled": function( elem ) {
                        return elem.disabled === true;
                    },

                    "checked": function( elem ) {
                        // In CSS3, :checked should return both checked and selected elements
                        // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                        var nodeName = elem.nodeName.toLowerCase();
                        return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
                    },

                    "selected": function( elem ) {
                        // Accessing this property makes selected-by-default
                        // options in Safari work properly
                        if ( elem.parentNode ) {
                            elem.parentNode.selectedIndex;
                        }

                        return elem.selected === true;
                    },

                    // Contents
                    "empty": function( elem ) {
                        // http://www.w3.org/TR/selectors/#empty-pseudo
                        // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
                        //   but not by others (comment: 8; processing instruction: 7; etc.)
                        // nodeType < 6 works because attributes (2) do not appear as children
                        for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
                            if ( elem.nodeType < 6 ) {
                                return false;
                            }
                        }
                        return true;
                    },

                    "parent": function( elem ) {
                        return !Expr.pseudos["empty"]( elem );
                    },

                    // Element/input types
                    "header": function( elem ) {
                        return rheader.test( elem.nodeName );
                    },

                    "input": function( elem ) {
                        return rinputs.test( elem.nodeName );
                    },

                    "button": function( elem ) {
                        var name = elem.nodeName.toLowerCase();
                        return name === "input" && elem.type === "button" || name === "button";
                    },

                    "text": function( elem ) {
                        var attr;
                        return elem.nodeName.toLowerCase() === "input" &&
                            elem.type === "text" &&

                                // Support: IE<8
                                // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
                            ( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
                    },

                    // Position-in-collection
                    "first": createPositionalPseudo(function() {
                        return [ 0 ];
                    }),

                    "last": createPositionalPseudo(function( matchIndexes, length ) {
                        return [ length - 1 ];
                    }),

                    "eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
                        return [ argument < 0 ? argument + length : argument ];
                    }),

                    "even": createPositionalPseudo(function( matchIndexes, length ) {
                        var i = 0;
                        for ( ; i < length; i += 2 ) {
                            matchIndexes.push( i );
                        }
                        return matchIndexes;
                    }),

                    "odd": createPositionalPseudo(function( matchIndexes, length ) {
                        var i = 1;
                        for ( ; i < length; i += 2 ) {
                            matchIndexes.push( i );
                        }
                        return matchIndexes;
                    }),

                    "lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
                        var i = argument < 0 ? argument + length : argument;
                        for ( ; --i >= 0; ) {
                            matchIndexes.push( i );
                        }
                        return matchIndexes;
                    }),

                    "gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
                        var i = argument < 0 ? argument + length : argument;
                        for ( ; ++i < length; ) {
                            matchIndexes.push( i );
                        }
                        return matchIndexes;
                    })
                }
            };

            Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
            for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
                Expr.pseudos[ i ] = createInputPseudo( i );
            }
            for ( i in { submit: true, reset: true } ) {
                Expr.pseudos[ i ] = createButtonPseudo( i );
            }

// Easy API for creating new setFilters
            function setFilters() {}
            setFilters.prototype = Expr.filters = Expr.pseudos;
            Expr.setFilters = new setFilters();

            tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
                var matched, match, tokens, type,
                    soFar, groups, preFilters,
                    cached = tokenCache[ selector + " " ];

                if ( cached ) {
                    return parseOnly ? 0 : cached.slice( 0 );
                }

                soFar = selector;
                groups = [];
                preFilters = Expr.preFilter;

                while ( soFar ) {

                    // Comma and first run
                    if ( !matched || (match = rcomma.exec( soFar )) ) {
                        if ( match ) {
                            // Don't consume trailing commas as valid
                            soFar = soFar.slice( match[0].length ) || soFar;
                        }
                        groups.push( (tokens = []) );
                    }

                    matched = false;

                    // Combinators
                    if ( (match = rcombinators.exec( soFar )) ) {
                        matched = match.shift();
                        tokens.push({
                            value: matched,
                            // Cast descendant combinators to space
                            type: match[0].replace( rtrim, " " )
                        });
                        soFar = soFar.slice( matched.length );
                    }

                    // Filters
                    for ( type in Expr.filter ) {
                        if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
                            (match = preFilters[ type ]( match ))) ) {
                            matched = match.shift();
                            tokens.push({
                                value: matched,
                                type: type,
                                matches: match
                            });
                            soFar = soFar.slice( matched.length );
                        }
                    }

                    if ( !matched ) {
                        break;
                    }
                }

                // Return the length of the invalid excess
                // if we're just parsing
                // Otherwise, throw an error or return tokens
                return parseOnly ?
                    soFar.length :
                    soFar ?
                        Sizzle.error( selector ) :
                        // Cache the tokens
                        tokenCache( selector, groups ).slice( 0 );
            };

            function toSelector( tokens ) {
                var i = 0,
                    len = tokens.length,
                    selector = "";
                for ( ; i < len; i++ ) {
                    selector += tokens[i].value;
                }
                return selector;
            }

            function addCombinator( matcher, combinator, base ) {
                var dir = combinator.dir,
                    checkNonElements = base && dir === "parentNode",
                    doneName = done++;

                return combinator.first ?
                    // Check against closest ancestor/preceding element
                    function( elem, context, xml ) {
                        while ( (elem = elem[ dir ]) ) {
                            if ( elem.nodeType === 1 || checkNonElements ) {
                                return matcher( elem, context, xml );
                            }
                        }
                    } :

                    // Check against all ancestor/preceding elements
                    function( elem, context, xml ) {
                        var oldCache, outerCache,
                            newCache = [ dirruns, doneName ];

                        // We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
                        if ( xml ) {
                            while ( (elem = elem[ dir ]) ) {
                                if ( elem.nodeType === 1 || checkNonElements ) {
                                    if ( matcher( elem, context, xml ) ) {
                                        return true;
                                    }
                                }
                            }
                        } else {
                            while ( (elem = elem[ dir ]) ) {
                                if ( elem.nodeType === 1 || checkNonElements ) {
                                    outerCache = elem[ expando ] || (elem[ expando ] = {});
                                    if ( (oldCache = outerCache[ dir ]) &&
                                        oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

                                        // Assign to newCache so results back-propagate to previous elements
                                        return (newCache[ 2 ] = oldCache[ 2 ]);
                                    } else {
                                        // Reuse newcache so results back-propagate to previous elements
                                        outerCache[ dir ] = newCache;

                                        // A match means we're done; a fail means we have to keep checking
                                        if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
                                            return true;
                                        }
                                    }
                                }
                            }
                        }
                    };
            }

            function elementMatcher( matchers ) {
                return matchers.length > 1 ?
                    function( elem, context, xml ) {
                        var i = matchers.length;
                        while ( i-- ) {
                            if ( !matchers[i]( elem, context, xml ) ) {
                                return false;
                            }
                        }
                        return true;
                    } :
                    matchers[0];
            }

            function multipleContexts( selector, contexts, results ) {
                var i = 0,
                    len = contexts.length;
                for ( ; i < len; i++ ) {
                    Sizzle( selector, contexts[i], results );
                }
                return results;
            }

            function condense( unmatched, map, filter, context, xml ) {
                var elem,
                    newUnmatched = [],
                    i = 0,
                    len = unmatched.length,
                    mapped = map != null;

                for ( ; i < len; i++ ) {
                    if ( (elem = unmatched[i]) ) {
                        if ( !filter || filter( elem, context, xml ) ) {
                            newUnmatched.push( elem );
                            if ( mapped ) {
                                map.push( i );
                            }
                        }
                    }
                }

                return newUnmatched;
            }

            function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
                if ( postFilter && !postFilter[ expando ] ) {
                    postFilter = setMatcher( postFilter );
                }
                if ( postFinder && !postFinder[ expando ] ) {
                    postFinder = setMatcher( postFinder, postSelector );
                }
                return markFunction(function( seed, results, context, xml ) {
                    var temp, i, elem,
                        preMap = [],
                        postMap = [],
                        preexisting = results.length,

                    // Get initial elements from seed or context
                        elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

                    // Prefilter to get matcher input, preserving a map for seed-results synchronization
                        matcherIn = preFilter && ( seed || !selector ) ?
                            condense( elems, preMap, preFilter, context, xml ) :
                            elems,

                        matcherOut = matcher ?
                            // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
                            postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

                                // ...intermediate processing is necessary
                                [] :

                                // ...otherwise use results directly
                                results :
                            matcherIn;

                    // Find primary matches
                    if ( matcher ) {
                        matcher( matcherIn, matcherOut, context, xml );
                    }

                    // Apply postFilter
                    if ( postFilter ) {
                        temp = condense( matcherOut, postMap );
                        postFilter( temp, [], context, xml );

                        // Un-match failing elements by moving them back to matcherIn
                        i = temp.length;
                        while ( i-- ) {
                            if ( (elem = temp[i]) ) {
                                matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
                            }
                        }
                    }

                    if ( seed ) {
                        if ( postFinder || preFilter ) {
                            if ( postFinder ) {
                                // Get the final matcherOut by condensing this intermediate into postFinder contexts
                                temp = [];
                                i = matcherOut.length;
                                while ( i-- ) {
                                    if ( (elem = matcherOut[i]) ) {
                                        // Restore matcherIn since elem is not yet a final match
                                        temp.push( (matcherIn[i] = elem) );
                                    }
                                }
                                postFinder( null, (matcherOut = []), temp, xml );
                            }

                            // Move matched elements from seed to results to keep them synchronized
                            i = matcherOut.length;
                            while ( i-- ) {
                                if ( (elem = matcherOut[i]) &&
                                    (temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

                                    seed[temp] = !(results[temp] = elem);
                                }
                            }
                        }

                        // Add elements to results, through postFinder if defined
                    } else {
                        matcherOut = condense(
                            matcherOut === results ?
                                matcherOut.splice( preexisting, matcherOut.length ) :
                                matcherOut
                        );
                        if ( postFinder ) {
                            postFinder( null, results, matcherOut, xml );
                        } else {
                            push.apply( results, matcherOut );
                        }
                    }
                });
            }

            function matcherFromTokens( tokens ) {
                var checkContext, matcher, j,
                    len = tokens.length,
                    leadingRelative = Expr.relative[ tokens[0].type ],
                    implicitRelative = leadingRelative || Expr.relative[" "],
                    i = leadingRelative ? 1 : 0,

                // The foundational matcher ensures that elements are reachable from top-level context(s)
                    matchContext = addCombinator( function( elem ) {
                        return elem === checkContext;
                    }, implicitRelative, true ),
                    matchAnyContext = addCombinator( function( elem ) {
                        return indexOf( checkContext, elem ) > -1;
                    }, implicitRelative, true ),
                    matchers = [ function( elem, context, xml ) {
                        var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
                                (checkContext = context).nodeType ?
                                    matchContext( elem, context, xml ) :
                                    matchAnyContext( elem, context, xml ) );
                        // Avoid hanging onto element (issue #299)
                        checkContext = null;
                        return ret;
                    } ];

                for ( ; i < len; i++ ) {
                    if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
                        matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
                    } else {
                        matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

                        // Return special upon seeing a positional matcher
                        if ( matcher[ expando ] ) {
                            // Find the next relative operator (if any) for proper handling
                            j = ++i;
                            for ( ; j < len; j++ ) {
                                if ( Expr.relative[ tokens[j].type ] ) {
                                    break;
                                }
                            }
                            return setMatcher(
                                i > 1 && elementMatcher( matchers ),
                                i > 1 && toSelector(
                                    // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                                    tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
                                ).replace( rtrim, "$1" ),
                                matcher,
                                i < j && matcherFromTokens( tokens.slice( i, j ) ),
                                j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
                                j < len && toSelector( tokens )
                            );
                        }
                        matchers.push( matcher );
                    }
                }

                return elementMatcher( matchers );
            }

            function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
                var bySet = setMatchers.length > 0,
                    byElement = elementMatchers.length > 0,
                    superMatcher = function( seed, context, xml, results, outermost ) {
                        var elem, j, matcher,
                            matchedCount = 0,
                            i = "0",
                            unmatched = seed && [],
                            setMatched = [],
                            contextBackup = outermostContext,
                        // We must always have either seed elements or outermost context
                            elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
                        // Use integer dirruns iff this is the outermost matcher
                            dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
                            len = elems.length;

                        if ( outermost ) {
                            outermostContext = context !== document && context;
                        }

                        // Add elements passing elementMatchers directly to results
                        // Keep `i` a string if there are no elements so `matchedCount` will be "00" below
                        // Support: IE<9, Safari
                        // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
                        for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
                            if ( byElement && elem ) {
                                j = 0;
                                while ( (matcher = elementMatchers[j++]) ) {
                                    if ( matcher( elem, context, xml ) ) {
                                        results.push( elem );
                                        break;
                                    }
                                }
                                if ( outermost ) {
                                    dirruns = dirrunsUnique;
                                }
                            }

                            // Track unmatched elements for set filters
                            if ( bySet ) {
                                // They will have gone through all possible matchers
                                if ( (elem = !matcher && elem) ) {
                                    matchedCount--;
                                }

                                // Lengthen the array for every element, matched or not
                                if ( seed ) {
                                    unmatched.push( elem );
                                }
                            }
                        }

                        // Apply set filters to unmatched elements
                        matchedCount += i;
                        if ( bySet && i !== matchedCount ) {
                            j = 0;
                            while ( (matcher = setMatchers[j++]) ) {
                                matcher( unmatched, setMatched, context, xml );
                            }

                            if ( seed ) {
                                // Reintegrate element matches to eliminate the need for sorting
                                if ( matchedCount > 0 ) {
                                    while ( i-- ) {
                                        if ( !(unmatched[i] || setMatched[i]) ) {
                                            setMatched[i] = pop.call( results );
                                        }
                                    }
                                }

                                // Discard index placeholder values to get only actual matches
                                setMatched = condense( setMatched );
                            }

                            // Add matches to results
                            push.apply( results, setMatched );

                            // Seedless set matches succeeding multiple successful matchers stipulate sorting
                            if ( outermost && !seed && setMatched.length > 0 &&
                                ( matchedCount + setMatchers.length ) > 1 ) {

                                Sizzle.uniqueSort( results );
                            }
                        }

                        // Override manipulation of globals by nested matchers
                        if ( outermost ) {
                            dirruns = dirrunsUnique;
                            outermostContext = contextBackup;
                        }

                        return unmatched;
                    };

                return bySet ?
                    markFunction( superMatcher ) :
                    superMatcher;
            }

            compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
                var i,
                    setMatchers = [],
                    elementMatchers = [],
                    cached = compilerCache[ selector + " " ];

                if ( !cached ) {
                    // Generate a function of recursive functions that can be used to check each element
                    if ( !match ) {
                        match = tokenize( selector );
                    }
                    i = match.length;
                    while ( i-- ) {
                        cached = matcherFromTokens( match[i] );
                        if ( cached[ expando ] ) {
                            setMatchers.push( cached );
                        } else {
                            elementMatchers.push( cached );
                        }
                    }

                    // Cache the compiled function
                    cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

                    // Save selector and tokenization
                    cached.selector = selector;
                }
                return cached;
            };

            /**
             * A low-level selection function that works with Sizzle's compiled
             *  selector functions
             * @param {String|Function} selector A selector or a pre-compiled
             *  selector function built with Sizzle.compile
             * @param {Element} context
             * @param {Array} [results]
             * @param {Array} [seed] A set of elements to match against
             */
            select = Sizzle.select = function( selector, context, results, seed ) {
                var i, tokens, token, type, find,
                    compiled = typeof selector === "function" && selector,
                    match = !seed && tokenize( (selector = compiled.selector || selector) );

                results = results || [];

                // Try to minimize operations if there is no seed and only one group
                if ( match.length === 1 ) {

                    // Take a shortcut and set the context if the root selector is an ID
                    tokens = match[0] = match[0].slice( 0 );
                    if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
                        support.getById && context.nodeType === 9 && documentIsHTML &&
                        Expr.relative[ tokens[1].type ] ) {

                        context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
                        if ( !context ) {
                            return results;

                            // Precompiled matchers will still verify ancestry, so step up a level
                        } else if ( compiled ) {
                            context = context.parentNode;
                        }

                        selector = selector.slice( tokens.shift().value.length );
                    }

                    // Fetch a seed set for right-to-left matching
                    i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
                    while ( i-- ) {
                        token = tokens[i];

                        // Abort if we hit a combinator
                        if ( Expr.relative[ (type = token.type) ] ) {
                            break;
                        }
                        if ( (find = Expr.find[ type ]) ) {
                            // Search, expanding context for leading sibling combinators
                            if ( (seed = find(
                                    token.matches[0].replace( runescape, funescape ),
                                    rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
                                )) ) {

                                // If seed is empty or no tokens remain, we can return early
                                tokens.splice( i, 1 );
                                selector = seed.length && toSelector( tokens );
                                if ( !selector ) {
                                    push.apply( results, seed );
                                    return results;
                                }

                                break;
                            }
                        }
                    }
                }

                // Compile and execute a filtering function if one is not provided
                // Provide `match` to avoid retokenization if we modified the selector above
                ( compiled || compile( selector, match ) )(
                    seed,
                    context,
                    !documentIsHTML,
                    results,
                    rsibling.test( selector ) && testContext( context.parentNode ) || context
                );
                return results;
            };

// One-time assignments

// Sort stability
            support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
            support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
            setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
            support.sortDetached = assert(function( div1 ) {
                // Should return 1, but returns 4 (following)
                return div1.compareDocumentPosition( document.createElement("div") ) & 1;
            });

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
            if ( !assert(function( div ) {
                    div.innerHTML = "<a href='#'></a>";
                    return div.firstChild.getAttribute("href") === "#" ;
                }) ) {
                addHandle( "type|href|height|width", function( elem, name, isXML ) {
                    if ( !isXML ) {
                        return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
                    }
                });
            }

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
            if ( !support.attributes || !assert(function( div ) {
                    div.innerHTML = "<input/>";
                    div.firstChild.setAttribute( "value", "" );
                    return div.firstChild.getAttribute( "value" ) === "";
                }) ) {
                addHandle( "value", function( elem, name, isXML ) {
                    if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
                        return elem.defaultValue;
                    }
                });
            }

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
            if ( !assert(function( div ) {
                    return div.getAttribute("disabled") == null;
                }) ) {
                addHandle( booleans, function( elem, name, isXML ) {
                    var val;
                    if ( !isXML ) {
                        return elem[ name ] === true ? name.toLowerCase() :
                            (val = elem.getAttributeNode( name )) && val.specified ?
                                val.value :
                                null;
                    }
                });
            }

            return Sizzle;

        })( window );



    jQuery.find = Sizzle;
    jQuery.expr = Sizzle.selectors;
    jQuery.expr[":"] = jQuery.expr.pseudos;
    jQuery.unique = Sizzle.uniqueSort;
    jQuery.text = Sizzle.getText;
    jQuery.isXMLDoc = Sizzle.isXML;
    jQuery.contains = Sizzle.contains;



    var rneedsContext = jQuery.expr.match.needsContext;

    var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);



    var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
    function winnow( elements, qualifier, not ) {
        if ( jQuery.isFunction( qualifier ) ) {
            return jQuery.grep( elements, function( elem, i ) {
                /* jshint -W018 */
                return !!qualifier.call( elem, i, elem ) !== not;
            });

        }

        if ( qualifier.nodeType ) {
            return jQuery.grep( elements, function( elem ) {
                return ( elem === qualifier ) !== not;
            });

        }

        if ( typeof qualifier === "string" ) {
            if ( risSimple.test( qualifier ) ) {
                return jQuery.filter( qualifier, elements, not );
            }

            qualifier = jQuery.filter( qualifier, elements );
        }

        return jQuery.grep( elements, function( elem ) {
            return ( jQuery.inArray( elem, qualifier ) >= 0 ) !== not;
        });
    }

    jQuery.filter = function( expr, elems, not ) {
        var elem = elems[ 0 ];

        if ( not ) {
            expr = ":not(" + expr + ")";
        }

        return elems.length === 1 && elem.nodeType === 1 ?
            jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
            jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
                return elem.nodeType === 1;
            }));
    };

    jQuery.fn.extend({
        find: function( selector ) {
            var i,
                ret = [],
                self = this,
                len = self.length;

            if ( typeof selector !== "string" ) {
                return this.pushStack( jQuery( selector ).filter(function() {
                    for ( i = 0; i < len; i++ ) {
                        if ( jQuery.contains( self[ i ], this ) ) {
                            return true;
                        }
                    }
                }) );
            }

            for ( i = 0; i < len; i++ ) {
                jQuery.find( selector, self[ i ], ret );
            }

            // Needed because $( selector, context ) becomes $( context ).find( selector )
            ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
            ret.selector = this.selector ? this.selector + " " + selector : selector;
            return ret;
        },
        filter: function( selector ) {
            return this.pushStack( winnow(this, selector || [], false) );
        },
        not: function( selector ) {
            return this.pushStack( winnow(this, selector || [], true) );
        },
        is: function( selector ) {
            return !!winnow(
                this,

                // If this is a positional/relative selector, check membership in the returned set
                // so $("p:first").is("p:last") won't return true for a doc with two "p".
                typeof selector === "string" && rneedsContext.test( selector ) ?
                    jQuery( selector ) :
                selector || [],
                false
            ).length;
        }
    });


// Initialize a jQuery object


// A central reference to the root jQuery(document)
    var rootjQuery,

    // Use the correct document accordingly with window argument (sandbox)
        document = window.document,

    // A simple way to check for HTML strings
    // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
    // Strict HTML recognition (#11290: must start with <)
        rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

        init = jQuery.fn.init = function( selector, context ) {
            var match, elem;

            // HANDLE: $(""), $(null), $(undefined), $(false)
            if ( !selector ) {
                return this;
            }

            // Handle HTML strings
            if ( typeof selector === "string" ) {
                if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
                    // Assume that strings that start and end with <> are HTML and skip the regex check
                    match = [ null, selector, null ];

                } else {
                    match = rquickExpr.exec( selector );
                }

                // Match html or make sure no context is specified for #id
                if ( match && (match[1] || !context) ) {

                    // HANDLE: $(html) -> $(array)
                    if ( match[1] ) {
                        context = context instanceof jQuery ? context[0] : context;

                        // scripts is true for back-compat
                        // Intentionally let the error be thrown if parseHTML is not present
                        jQuery.merge( this, jQuery.parseHTML(
                            match[1],
                            context && context.nodeType ? context.ownerDocument || context : document,
                            true
                        ) );

                        // HANDLE: $(html, props)
                        if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
                            for ( match in context ) {
                                // Properties of context are called as methods if possible
                                if ( jQuery.isFunction( this[ match ] ) ) {
                                    this[ match ]( context[ match ] );

                                    // ...and otherwise set as attributes
                                } else {
                                    this.attr( match, context[ match ] );
                                }
                            }
                        }

                        return this;

                        // HANDLE: $(#id)
                    } else {
                        elem = document.getElementById( match[2] );

                        // Check parentNode to catch when Blackberry 4.6 returns
                        // nodes that are no longer in the document #6963
                        if ( elem && elem.parentNode ) {
                            // Handle the case where IE and Opera return items
                            // by name instead of ID
                            if ( elem.id !== match[2] ) {
                                return rootjQuery.find( selector );
                            }

                            // Otherwise, we inject the element directly into the jQuery object
                            this.length = 1;
                            this[0] = elem;
                        }

                        this.context = document;
                        this.selector = selector;
                        return this;
                    }

                    // HANDLE: $(expr, $(...))
                } else if ( !context || context.jquery ) {
                    return ( context || rootjQuery ).find( selector );

                    // HANDLE: $(expr, context)
                    // (which is just equivalent to: $(context).find(expr)
                } else {
                    return this.constructor( context ).find( selector );
                }

                // HANDLE: $(DOMElement)
            } else if ( selector.nodeType ) {
                this.context = this[0] = selector;
                this.length = 1;
                return this;

                // HANDLE: $(function)
                // Shortcut for document ready
            } else if ( jQuery.isFunction( selector ) ) {
                return typeof rootjQuery.ready !== "undefined" ?
                    rootjQuery.ready( selector ) :
                    // Execute immediately if ready is not present
                    selector( jQuery );
            }

            if ( selector.selector !== undefined ) {
                this.selector = selector.selector;
                this.context = selector.context;
            }

            return jQuery.makeArray( selector, this );
        };

// Give the init function the jQuery prototype for later instantiation
    init.prototype = jQuery.fn;

// Initialize central reference
    rootjQuery = jQuery( document );


    var rparentsprev = /^(?:parents|prev(?:Until|All))/,
    // methods guaranteed to produce a unique set when starting from a unique set
        guaranteedUnique = {
            children: true,
            contents: true,
            next: true,
            prev: true
        };

    jQuery.extend({
        dir: function( elem, dir, until ) {
            var matched = [],
                cur = elem[ dir ];

            while ( cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery( cur ).is( until )) ) {
                if ( cur.nodeType === 1 ) {
                    matched.push( cur );
                }
                cur = cur[dir];
            }
            return matched;
        },

        sibling: function( n, elem ) {
            var r = [];

            for ( ; n; n = n.nextSibling ) {
                if ( n.nodeType === 1 && n !== elem ) {
                    r.push( n );
                }
            }

            return r;
        }
    });

    jQuery.fn.extend({
        has: function( target ) {
            var i,
                targets = jQuery( target, this ),
                len = targets.length;

            return this.filter(function() {
                for ( i = 0; i < len; i++ ) {
                    if ( jQuery.contains( this, targets[i] ) ) {
                        return true;
                    }
                }
            });
        },

        closest: function( selectors, context ) {
            var cur,
                i = 0,
                l = this.length,
                matched = [],
                pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
                    jQuery( selectors, context || this.context ) :
                    0;

            for ( ; i < l; i++ ) {
                for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
                    // Always skip document fragments
                    if ( cur.nodeType < 11 && (pos ?
                        pos.index(cur) > -1 :

                            // Don't pass non-elements to Sizzle
                        cur.nodeType === 1 &&
                        jQuery.find.matchesSelector(cur, selectors)) ) {

                        matched.push( cur );
                        break;
                    }
                }
            }

            return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
        },

        // Determine the position of an element within
        // the matched set of elements
        index: function( elem ) {

            // No argument, return index in parent
            if ( !elem ) {
                return ( this[0] && this[0].parentNode ) ? this.first().prevAll().length : -1;
            }

            // index in selector
            if ( typeof elem === "string" ) {
                return jQuery.inArray( this[0], jQuery( elem ) );
            }

            // Locate the position of the desired element
            return jQuery.inArray(
                // If it receives a jQuery object, the first element is used
                elem.jquery ? elem[0] : elem, this );
        },

        add: function( selector, context ) {
            return this.pushStack(
                jQuery.unique(
                    jQuery.merge( this.get(), jQuery( selector, context ) )
                )
            );
        },

        addBack: function( selector ) {
            return this.add( selector == null ?
                    this.prevObject : this.prevObject.filter(selector)
            );
        }
    });

    function sibling( cur, dir ) {
        do {
            cur = cur[ dir ];
        } while ( cur && cur.nodeType !== 1 );

        return cur;
    }

    jQuery.each({
        parent: function( elem ) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function( elem ) {
            return jQuery.dir( elem, "parentNode" );
        },
        parentsUntil: function( elem, i, until ) {
            return jQuery.dir( elem, "parentNode", until );
        },
        next: function( elem ) {
            return sibling( elem, "nextSibling" );
        },
        prev: function( elem ) {
            return sibling( elem, "previousSibling" );
        },
        nextAll: function( elem ) {
            return jQuery.dir( elem, "nextSibling" );
        },
        prevAll: function( elem ) {
            return jQuery.dir( elem, "previousSibling" );
        },
        nextUntil: function( elem, i, until ) {
            return jQuery.dir( elem, "nextSibling", until );
        },
        prevUntil: function( elem, i, until ) {
            return jQuery.dir( elem, "previousSibling", until );
        },
        siblings: function( elem ) {
            return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
        },
        children: function( elem ) {
            return jQuery.sibling( elem.firstChild );
        },
        contents: function( elem ) {
            return jQuery.nodeName( elem, "iframe" ) ?
            elem.contentDocument || elem.contentWindow.document :
                jQuery.merge( [], elem.childNodes );
        }
    }, function( name, fn ) {
        jQuery.fn[ name ] = function( until, selector ) {
            var ret = jQuery.map( this, fn, until );

            if ( name.slice( -5 ) !== "Until" ) {
                selector = until;
            }

            if ( selector && typeof selector === "string" ) {
                ret = jQuery.filter( selector, ret );
            }

            if ( this.length > 1 ) {
                // Remove duplicates
                if ( !guaranteedUnique[ name ] ) {
                    ret = jQuery.unique( ret );
                }

                // Reverse order for parents* and prev-derivatives
                if ( rparentsprev.test( name ) ) {
                    ret = ret.reverse();
                }
            }

            return this.pushStack( ret );
        };
    });
    var rnotwhite = (/\S+/g);



// String to Object options format cache
    var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
    function createOptions( options ) {
        var object = optionsCache[ options ] = {};
        jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
            object[ flag ] = true;
        });
        return object;
    }

    /*
     * Create a callback list using the following parameters:
     *
     *	options: an optional list of space-separated options that will change how
     *			the callback list behaves or a more traditional option object
     *
     * By default a callback list will act like an event callback list and can be
     * "fired" multiple times.
     *
     * Possible options:
     *
     *	once:			will ensure the callback list can only be fired once (like a Deferred)
     *
     *	memory:			will keep track of previous values and will call any callback added
     *					after the list has been fired right away with the latest "memorized"
     *					values (like a Deferred)
     *
     *	unique:			will ensure a callback can only be added once (no duplicate in the list)
     *
     *	stopOnFalse:	interrupt callings when a callback returns false
     *
     */
    jQuery.Callbacks = function( options ) {

        // Convert options from String-formatted to Object-formatted if needed
        // (we check in cache first)
        options = typeof options === "string" ?
            ( optionsCache[ options ] || createOptions( options ) ) :
            jQuery.extend( {}, options );

        var // Flag to know if list is currently firing
            firing,
        // Last fire value (for non-forgettable lists)
            memory,
        // Flag to know if list was already fired
            fired,
        // End of the loop when firing
            firingLength,
        // Index of currently firing callback (modified by remove if needed)
            firingIndex,
        // First callback to fire (used internally by add and fireWith)
            firingStart,
        // Actual callback list
            list = [],
        // Stack of fire calls for repeatable lists
            stack = !options.once && [],
        // Fire callbacks
            fire = function( data ) {
                memory = options.memory && data;
                fired = true;
                firingIndex = firingStart || 0;
                firingStart = 0;
                firingLength = list.length;
                firing = true;
                for ( ; list && firingIndex < firingLength; firingIndex++ ) {
                    if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
                        memory = false; // To prevent further calls using add
                        break;
                    }
                }
                firing = false;
                if ( list ) {
                    if ( stack ) {
                        if ( stack.length ) {
                            fire( stack.shift() );
                        }
                    } else if ( memory ) {
                        list = [];
                    } else {
                        self.disable();
                    }
                }
            },
        // Actual Callbacks object
            self = {
                // Add a callback or a collection of callbacks to the list
                add: function() {
                    if ( list ) {
                        // First, we save the current length
                        var start = list.length;
                        (function add( args ) {
                            jQuery.each( args, function( _, arg ) {
                                var type = jQuery.type( arg );
                                if ( type === "function" ) {
                                    if ( !options.unique || !self.has( arg ) ) {
                                        list.push( arg );
                                    }
                                } else if ( arg && arg.length && type !== "string" ) {
                                    // Inspect recursively
                                    add( arg );
                                }
                            });
                        })( arguments );
                        // Do we need to add the callbacks to the
                        // current firing batch?
                        if ( firing ) {
                            firingLength = list.length;
                            // With memory, if we're not firing then
                            // we should call right away
                        } else if ( memory ) {
                            firingStart = start;
                            fire( memory );
                        }
                    }
                    return this;
                },
                // Remove a callback from the list
                remove: function() {
                    if ( list ) {
                        jQuery.each( arguments, function( _, arg ) {
                            var index;
                            while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
                                list.splice( index, 1 );
                                // Handle firing indexes
                                if ( firing ) {
                                    if ( index <= firingLength ) {
                                        firingLength--;
                                    }
                                    if ( index <= firingIndex ) {
                                        firingIndex--;
                                    }
                                }
                            }
                        });
                    }
                    return this;
                },
                // Check if a given callback is in the list.
                // If no argument is given, return whether or not list has callbacks attached.
                has: function( fn ) {
                    return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
                },
                // Remove all callbacks from the list
                empty: function() {
                    list = [];
                    firingLength = 0;
                    return this;
                },
                // Have the list do nothing anymore
                disable: function() {
                    list = stack = memory = undefined;
                    return this;
                },
                // Is it disabled?
                disabled: function() {
                    return !list;
                },
                // Lock the list in its current state
                lock: function() {
                    stack = undefined;
                    if ( !memory ) {
                        self.disable();
                    }
                    return this;
                },
                // Is it locked?
                locked: function() {
                    return !stack;
                },
                // Call all callbacks with the given context and arguments
                fireWith: function( context, args ) {
                    if ( list && ( !fired || stack ) ) {
                        args = args || [];
                        args = [ context, args.slice ? args.slice() : args ];
                        if ( firing ) {
                            stack.push( args );
                        } else {
                            fire( args );
                        }
                    }
                    return this;
                },
                // Call all the callbacks with the given arguments
                fire: function() {
                    self.fireWith( this, arguments );
                    return this;
                },
                // To know if the callbacks have already been called at least once
                fired: function() {
                    return !!fired;
                }
            };

        return self;
    };


    jQuery.extend({

        Deferred: function( func ) {
            var tuples = [
                    // action, add listener, listener list, final state
                    [ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
                    [ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
                    [ "notify", "progress", jQuery.Callbacks("memory") ]
                ],
                state = "pending",
                promise = {
                    state: function() {
                        return state;
                    },
                    always: function() {
                        deferred.done( arguments ).fail( arguments );
                        return this;
                    },
                    then: function( /* fnDone, fnFail, fnProgress */ ) {
                        var fns = arguments;
                        return jQuery.Deferred(function( newDefer ) {
                            jQuery.each( tuples, function( i, tuple ) {
                                var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
                                // deferred[ done | fail | progress ] for forwarding actions to newDefer
                                deferred[ tuple[1] ](function() {
                                    var returned = fn && fn.apply( this, arguments );
                                    if ( returned && jQuery.isFunction( returned.promise ) ) {
                                        returned.promise()
                                            .done( newDefer.resolve )
                                            .fail( newDefer.reject )
                                            .progress( newDefer.notify );
                                    } else {
                                        newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
                                    }
                                });
                            });
                            fns = null;
                        }).promise();
                    },
                    // Get a promise for this deferred
                    // If obj is provided, the promise aspect is added to the object
                    promise: function( obj ) {
                        return obj != null ? jQuery.extend( obj, promise ) : promise;
                    }
                },
                deferred = {};

            // Keep pipe for back-compat
            promise.pipe = promise.then;

            // Add list-specific methods
            jQuery.each( tuples, function( i, tuple ) {
                var list = tuple[ 2 ],
                    stateString = tuple[ 3 ];

                // promise[ done | fail | progress ] = list.add
                promise[ tuple[1] ] = list.add;

                // Handle state
                if ( stateString ) {
                    list.add(function() {
                        // state = [ resolved | rejected ]
                        state = stateString;

                        // [ reject_list | resolve_list ].disable; progress_list.lock
                    }, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
                }

                // deferred[ resolve | reject | notify ]
                deferred[ tuple[0] ] = function() {
                    deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
                    return this;
                };
                deferred[ tuple[0] + "With" ] = list.fireWith;
            });

            // Make the deferred a promise
            promise.promise( deferred );

            // Call given func if any
            if ( func ) {
                func.call( deferred, deferred );
            }

            // All done!
            return deferred;
        },

        // Deferred helper
        when: function( subordinate /* , ..., subordinateN */ ) {
            var i = 0,
                resolveValues = slice.call( arguments ),
                length = resolveValues.length,

            // the count of uncompleted subordinates
                remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

            // the master Deferred. If resolveValues consist of only a single Deferred, just use that.
                deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

            // Update function for both resolve and progress values
                updateFunc = function( i, contexts, values ) {
                    return function( value ) {
                        contexts[ i ] = this;
                        values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
                        if ( values === progressValues ) {
                            deferred.notifyWith( contexts, values );

                        } else if ( !(--remaining) ) {
                            deferred.resolveWith( contexts, values );
                        }
                    };
                },

                progressValues, progressContexts, resolveContexts;

            // add listeners to Deferred subordinates; treat others as resolved
            if ( length > 1 ) {
                progressValues = new Array( length );
                progressContexts = new Array( length );
                resolveContexts = new Array( length );
                for ( ; i < length; i++ ) {
                    if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
                        resolveValues[ i ].promise()
                            .done( updateFunc( i, resolveContexts, resolveValues ) )
                            .fail( deferred.reject )
                            .progress( updateFunc( i, progressContexts, progressValues ) );
                    } else {
                        --remaining;
                    }
                }
            }

            // if we're not waiting on anything, resolve the master
            if ( !remaining ) {
                deferred.resolveWith( resolveContexts, resolveValues );
            }

            return deferred.promise();
        }
    });


// The deferred used on DOM ready
    var readyList;

    jQuery.fn.ready = function( fn ) {
        // Add the callback
        jQuery.ready.promise().done( fn );

        return this;
    };

    jQuery.extend({
        // Is the DOM ready to be used? Set to true once it occurs.
        isReady: false,

        // A counter to track how many items to wait for before
        // the ready event fires. See #6781
        readyWait: 1,

        // Hold (or release) the ready event
        holdReady: function( hold ) {
            if ( hold ) {
                jQuery.readyWait++;
            } else {
                jQuery.ready( true );
            }
        },

        // Handle when the DOM is ready
        ready: function( wait ) {

            // Abort if there are pending holds or we're already ready
            if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
                return;
            }

            // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
            if ( !document.body ) {
                return setTimeout( jQuery.ready );
            }

            // Remember that the DOM is ready
            jQuery.isReady = true;

            // If a normal DOM Ready event fired, decrement, and wait if need be
            if ( wait !== true && --jQuery.readyWait > 0 ) {
                return;
            }

            // If there are functions bound, to execute
            readyList.resolveWith( document, [ jQuery ] );

            // Trigger any bound ready events
            if ( jQuery.fn.triggerHandler ) {
                jQuery( document ).triggerHandler( "ready" );
                jQuery( document ).off( "ready" );
            }
        }
    });

    /**
     * Clean-up method for dom ready events
     */
    function detach() {
        if ( document.addEventListener ) {
            document.removeEventListener( "DOMContentLoaded", completed, false );
            window.removeEventListener( "load", completed, false );

        } else {
            document.detachEvent( "onreadystatechange", completed );
            window.detachEvent( "onload", completed );
        }
    }

    /**
     * The ready event handler and self cleanup method
     */
    function completed() {
        // readyState === "complete" is good enough for us to call the dom ready in oldIE
        if ( document.addEventListener || event.type === "load" || document.readyState === "complete" ) {
            detach();
            jQuery.ready();
        }
    }

    jQuery.ready.promise = function( obj ) {
        if ( !readyList ) {

            readyList = jQuery.Deferred();

            // Catch cases where $(document).ready() is called after the browser event has already occurred.
            // we once tried to use readyState "interactive" here, but it caused issues like the one
            // discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
            if ( document.readyState === "complete" ) {
                // Handle it asynchronously to allow scripts the opportunity to delay ready
                setTimeout( jQuery.ready );

                // Standards-based browsers support DOMContentLoaded
            } else if ( document.addEventListener ) {
                // Use the handy event callback
                document.addEventListener( "DOMContentLoaded", completed, false );

                // A fallback to window.onload, that will always work
                window.addEventListener( "load", completed, false );

                // If IE event model is used
            } else {
                // Ensure firing before onload, maybe late but safe also for iframes
                document.attachEvent( "onreadystatechange", completed );

                // A fallback to window.onload, that will always work
                window.attachEvent( "onload", completed );

                // If IE and not a frame
                // continually check to see if the document is ready
                var top = false;

                try {
                    top = window.frameElement == null && document.documentElement;
                } catch(e) {}

                if ( top && top.doScroll ) {
                    (function doScrollCheck() {
                        if ( !jQuery.isReady ) {

                            try {
                                // Use the trick by Diego Perini
                                // http://javascript.nwbox.com/IEContentLoaded/
                                top.doScroll("left");
                            } catch(e) {
                                return setTimeout( doScrollCheck, 50 );
                            }

                            // detach all dom ready events
                            detach();

                            // and execute any waiting functions
                            jQuery.ready();
                        }
                    })();
                }
            }
        }
        return readyList.promise( obj );
    };


    var strundefined = typeof undefined;



// Support: IE<9
// Iteration over object's inherited properties before its own
    var i;
    for ( i in jQuery( support ) ) {
        break;
    }
    support.ownLast = i !== "0";

// Note: most support tests are defined in their respective modules.
// false until the test is run
    support.inlineBlockNeedsLayout = false;

// Execute ASAP in case we need to set body.style.zoom
    jQuery(function() {
        // Minified: var a,b,c,d
        var val, div, body, container;

        body = document.getElementsByTagName( "body" )[ 0 ];
        if ( !body || !body.style ) {
            // Return for frameset docs that don't have a body
            return;
        }

        // Setup
        div = document.createElement( "div" );
        container = document.createElement( "div" );
        container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
        body.appendChild( container ).appendChild( div );

        if ( typeof div.style.zoom !== strundefined ) {
            // Support: IE<8
            // Check if natively block-level elements act like inline-block
            // elements when setting their display to 'inline' and giving
            // them layout
            div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";

            support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
            if ( val ) {
                // Prevent IE 6 from affecting layout for positioned elements #11048
                // Prevent IE from shrinking the body in IE 7 mode #12869
                // Support: IE<8
                body.style.zoom = 1;
            }
        }

        body.removeChild( container );
    });




    (function() {
        var div = document.createElement( "div" );

        // Execute the test only if not already executed in another module.
        if (support.deleteExpando == null) {
            // Support: IE<9
            support.deleteExpando = true;
            try {
                delete div.test;
            } catch( e ) {
                support.deleteExpando = false;
            }
        }

        // Null elements to avoid leaks in IE.
        div = null;
    })();


    /**
     * Determines whether an object can have data
     */
    jQuery.acceptData = function( elem ) {
        var noData = jQuery.noData[ (elem.nodeName + " ").toLowerCase() ],
            nodeType = +elem.nodeType || 1;

        // Do not set data on non-element DOM nodes because it will not be cleared (#8335).
        return nodeType !== 1 && nodeType !== 9 ?
            false :

            // Nodes accept data unless otherwise specified; rejection can be conditional
        !noData || noData !== true && elem.getAttribute("classid") === noData;
    };


    var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        rmultiDash = /([A-Z])/g;

    function dataAttr( elem, key, data ) {
        // If nothing was found internally, try to fetch any
        // data from the HTML5 data-* attribute
        if ( data === undefined && elem.nodeType === 1 ) {

            var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

            data = elem.getAttribute( name );

            if ( typeof data === "string" ) {
                try {
                    data = data === "true" ? true :
                        data === "false" ? false :
                            data === "null" ? null :
                                // Only convert to a number if it doesn't change the string
                                +data + "" === data ? +data :
                                    rbrace.test( data ) ? jQuery.parseJSON( data ) :
                                        data;
                } catch( e ) {}

                // Make sure we set the data so it isn't changed later
                jQuery.data( elem, key, data );

            } else {
                data = undefined;
            }
        }

        return data;
    }

// checks a cache object for emptiness
    function isEmptyDataObject( obj ) {
        var name;
        for ( name in obj ) {

            // if the public data object is empty, the private is still empty
            if ( name === "data" && jQuery.isEmptyObject( obj[name] ) ) {
                continue;
            }
            if ( name !== "toJSON" ) {
                return false;
            }
        }

        return true;
    }

    function internalData( elem, name, data, pvt /* Internal Use Only */ ) {
        if ( !jQuery.acceptData( elem ) ) {
            return;
        }

        var ret, thisCache,
            internalKey = jQuery.expando,

        // We have to handle DOM nodes and JS objects differently because IE6-7
        // can't GC object references properly across the DOM-JS boundary
            isNode = elem.nodeType,

        // Only DOM nodes need the global jQuery cache; JS object data is
        // attached directly to the object so GC can occur automatically
            cache = isNode ? jQuery.cache : elem,

        // Only defining an ID for JS objects if its cache already exists allows
        // the code to shortcut on the same path as a DOM node with no cache
            id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

        // Avoid doing any more work than we need to when trying to get data on an
        // object that has no data at all
        if ( (!id || !cache[id] || (!pvt && !cache[id].data)) && data === undefined && typeof name === "string" ) {
            return;
        }

        if ( !id ) {
            // Only DOM nodes need a new unique ID for each element since their data
            // ends up in the global cache
            if ( isNode ) {
                id = elem[ internalKey ] = deletedIds.pop() || jQuery.guid++;
            } else {
                id = internalKey;
            }
        }

        if ( !cache[ id ] ) {
            // Avoid exposing jQuery metadata on plain JS objects when the object
            // is serialized using JSON.stringify
            cache[ id ] = isNode ? {} : { toJSON: jQuery.noop };
        }

        // An object can be passed to jQuery.data instead of a key/value pair; this gets
        // shallow copied over onto the existing cache
        if ( typeof name === "object" || typeof name === "function" ) {
            if ( pvt ) {
                cache[ id ] = jQuery.extend( cache[ id ], name );
            } else {
                cache[ id ].data = jQuery.extend( cache[ id ].data, name );
            }
        }

        thisCache = cache[ id ];

        // jQuery data() is stored in a separate object inside the object's internal data
        // cache in order to avoid key collisions between internal data and user-defined
        // data.
        if ( !pvt ) {
            if ( !thisCache.data ) {
                thisCache.data = {};
            }

            thisCache = thisCache.data;
        }

        if ( data !== undefined ) {
            thisCache[ jQuery.camelCase( name ) ] = data;
        }

        // Check for both converted-to-camel and non-converted data property names
        // If a data property was specified
        if ( typeof name === "string" ) {

            // First Try to find as-is property data
            ret = thisCache[ name ];

            // Test for null|undefined property data
            if ( ret == null ) {

                // Try to find the camelCased property
                ret = thisCache[ jQuery.camelCase( name ) ];
            }
        } else {
            ret = thisCache;
        }

        return ret;
    }

    function internalRemoveData( elem, name, pvt ) {
        if ( !jQuery.acceptData( elem ) ) {
            return;
        }

        var thisCache, i,
            isNode = elem.nodeType,

        // See jQuery.data for more information
            cache = isNode ? jQuery.cache : elem,
            id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

        // If there is already no cache entry for this object, there is no
        // purpose in continuing
        if ( !cache[ id ] ) {
            return;
        }

        if ( name ) {

            thisCache = pvt ? cache[ id ] : cache[ id ].data;

            if ( thisCache ) {

                // Support array or space separated string names for data keys
                if ( !jQuery.isArray( name ) ) {

                    // try the string as a key before any manipulation
                    if ( name in thisCache ) {
                        name = [ name ];
                    } else {

                        // split the camel cased version by spaces unless a key with the spaces exists
                        name = jQuery.camelCase( name );
                        if ( name in thisCache ) {
                            name = [ name ];
                        } else {
                            name = name.split(" ");
                        }
                    }
                } else {
                    // If "name" is an array of keys...
                    // When data is initially created, via ("key", "val") signature,
                    // keys will be converted to camelCase.
                    // Since there is no way to tell _how_ a key was added, remove
                    // both plain key and camelCase key. #12786
                    // This will only penalize the array argument path.
                    name = name.concat( jQuery.map( name, jQuery.camelCase ) );
                }

                i = name.length;
                while ( i-- ) {
                    delete thisCache[ name[i] ];
                }

                // If there is no data left in the cache, we want to continue
                // and let the cache object itself get destroyed
                if ( pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache) ) {
                    return;
                }
            }
        }

        // See jQuery.data for more information
        if ( !pvt ) {
            delete cache[ id ].data;

            // Don't destroy the parent cache unless the internal data object
            // had been the only thing left in it
            if ( !isEmptyDataObject( cache[ id ] ) ) {
                return;
            }
        }

        // Destroy the cache
        if ( isNode ) {
            jQuery.cleanData( [ elem ], true );

            // Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
            /* jshint eqeqeq: false */
        } else if ( support.deleteExpando || cache != cache.window ) {
            /* jshint eqeqeq: true */
            delete cache[ id ];

            // When all else fails, null
        } else {
            cache[ id ] = null;
        }
    }

    jQuery.extend({
        cache: {},

        // The following elements (space-suffixed to avoid Object.prototype collisions)
        // throw uncatchable exceptions if you attempt to set expando properties
        noData: {
            "applet ": true,
            "embed ": true,
            // ...but Flash objects (which have this classid) *can* handle expandos
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },

        hasData: function( elem ) {
            elem = elem.nodeType ? jQuery.cache[ elem[jQuery.expando] ] : elem[ jQuery.expando ];
            return !!elem && !isEmptyDataObject( elem );
        },

        data: function( elem, name, data ) {
            return internalData( elem, name, data );
        },

        removeData: function( elem, name ) {
            return internalRemoveData( elem, name );
        },

        // For internal use only.
        _data: function( elem, name, data ) {
            return internalData( elem, name, data, true );
        },

        _removeData: function( elem, name ) {
            return internalRemoveData( elem, name, true );
        }
    });

    jQuery.fn.extend({
        data: function( key, value ) {
            var i, name, data,
                elem = this[0],
                attrs = elem && elem.attributes;

            // Special expections of .data basically thwart jQuery.access,
            // so implement the relevant behavior ourselves

            // Gets all values
            if ( key === undefined ) {
                if ( this.length ) {
                    data = jQuery.data( elem );

                    if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
                        i = attrs.length;
                        while ( i-- ) {

                            // Support: IE11+
                            // The attrs elements can be null (#14894)
                            if ( attrs[ i ] ) {
                                name = attrs[ i ].name;
                                if ( name.indexOf( "data-" ) === 0 ) {
                                    name = jQuery.camelCase( name.slice(5) );
                                    dataAttr( elem, name, data[ name ] );
                                }
                            }
                        }
                        jQuery._data( elem, "parsedAttrs", true );
                    }
                }

                return data;
            }

            // Sets multiple values
            if ( typeof key === "object" ) {
                return this.each(function() {
                    jQuery.data( this, key );
                });
            }

            return arguments.length > 1 ?

                // Sets one value
                this.each(function() {
                    jQuery.data( this, key, value );
                }) :

                // Gets one value
                // Try to fetch any internally stored data first
                elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : undefined;
        },

        removeData: function( key ) {
            return this.each(function() {
                jQuery.removeData( this, key );
            });
        }
    });


    jQuery.extend({
        queue: function( elem, type, data ) {
            var queue;

            if ( elem ) {
                type = ( type || "fx" ) + "queue";
                queue = jQuery._data( elem, type );

                // Speed up dequeue by getting out quickly if this is just a lookup
                if ( data ) {
                    if ( !queue || jQuery.isArray(data) ) {
                        queue = jQuery._data( elem, type, jQuery.makeArray(data) );
                    } else {
                        queue.push( data );
                    }
                }
                return queue || [];
            }
        },

        dequeue: function( elem, type ) {
            type = type || "fx";

            var queue = jQuery.queue( elem, type ),
                startLength = queue.length,
                fn = queue.shift(),
                hooks = jQuery._queueHooks( elem, type ),
                next = function() {
                    jQuery.dequeue( elem, type );
                };

            // If the fx queue is dequeued, always remove the progress sentinel
            if ( fn === "inprogress" ) {
                fn = queue.shift();
                startLength--;
            }

            if ( fn ) {

                // Add a progress sentinel to prevent the fx queue from being
                // automatically dequeued
                if ( type === "fx" ) {
                    queue.unshift( "inprogress" );
                }

                // clear up the last queue stop function
                delete hooks.stop;
                fn.call( elem, next, hooks );
            }

            if ( !startLength && hooks ) {
                hooks.empty.fire();
            }
        },

        // not intended for public consumption - generates a queueHooks object, or returns the current one
        _queueHooks: function( elem, type ) {
            var key = type + "queueHooks";
            return jQuery._data( elem, key ) || jQuery._data( elem, key, {
                    empty: jQuery.Callbacks("once memory").add(function() {
                        jQuery._removeData( elem, type + "queue" );
                        jQuery._removeData( elem, key );
                    })
                });
        }
    });

    jQuery.fn.extend({
        queue: function( type, data ) {
            var setter = 2;

            if ( typeof type !== "string" ) {
                data = type;
                type = "fx";
                setter--;
            }

            if ( arguments.length < setter ) {
                return jQuery.queue( this[0], type );
            }

            return data === undefined ?
                this :
                this.each(function() {
                    var queue = jQuery.queue( this, type, data );

                    // ensure a hooks for this queue
                    jQuery._queueHooks( this, type );

                    if ( type === "fx" && queue[0] !== "inprogress" ) {
                        jQuery.dequeue( this, type );
                    }
                });
        },
        dequeue: function( type ) {
            return this.each(function() {
                jQuery.dequeue( this, type );
            });
        },
        clearQueue: function( type ) {
            return this.queue( type || "fx", [] );
        },
        // Get a promise resolved when queues of a certain type
        // are emptied (fx is the type by default)
        promise: function( type, obj ) {
            var tmp,
                count = 1,
                defer = jQuery.Deferred(),
                elements = this,
                i = this.length,
                resolve = function() {
                    if ( !( --count ) ) {
                        defer.resolveWith( elements, [ elements ] );
                    }
                };

            if ( typeof type !== "string" ) {
                obj = type;
                type = undefined;
            }
            type = type || "fx";

            while ( i-- ) {
                tmp = jQuery._data( elements[ i ], type + "queueHooks" );
                if ( tmp && tmp.empty ) {
                    count++;
                    tmp.empty.add( resolve );
                }
            }
            resolve();
            return defer.promise( obj );
        }
    });
    var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

    var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

    var isHidden = function( elem, el ) {
        // isHidden might be called from jQuery#filter function;
        // in that case, element will be second argument
        elem = el || elem;
        return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
    };



// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
    var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
        var i = 0,
            length = elems.length,
            bulk = key == null;

        // Sets many values
        if ( jQuery.type( key ) === "object" ) {
            chainable = true;
            for ( i in key ) {
                jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
            }

            // Sets one value
        } else if ( value !== undefined ) {
            chainable = true;

            if ( !jQuery.isFunction( value ) ) {
                raw = true;
            }

            if ( bulk ) {
                // Bulk operations run against the entire set
                if ( raw ) {
                    fn.call( elems, value );
                    fn = null;

                    // ...except when executing function values
                } else {
                    bulk = fn;
                    fn = function( elem, key, value ) {
                        return bulk.call( jQuery( elem ), value );
                    };
                }
            }

            if ( fn ) {
                for ( ; i < length; i++ ) {
                    fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
                }
            }
        }

        return chainable ?
            elems :

            // Gets
            bulk ?
                fn.call( elems ) :
                length ? fn( elems[0], key ) : emptyGet;
    };
    var rcheckableType = (/^(?:checkbox|radio)$/i);



    (function() {
        // Minified: var a,b,c
        var input = document.createElement( "input" ),
            div = document.createElement( "div" ),
            fragment = document.createDocumentFragment();

        // Setup
        div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

        // IE strips leading whitespace when .innerHTML is used
        support.leadingWhitespace = div.firstChild.nodeType === 3;

        // Make sure that tbody elements aren't automatically inserted
        // IE will insert them into empty tables
        support.tbody = !div.getElementsByTagName( "tbody" ).length;

        // Make sure that link elements get serialized correctly by innerHTML
        // This requires a wrapper element in IE
        support.htmlSerialize = !!div.getElementsByTagName( "link" ).length;

        // Makes sure cloning an html5 element does not cause problems
        // Where outerHTML is undefined, this still works
        support.html5Clone =
            document.createElement( "nav" ).cloneNode( true ).outerHTML !== "<:nav></:nav>";

        // Check if a disconnected checkbox will retain its checked
        // value of true after appended to the DOM (IE6/7)
        input.type = "checkbox";
        input.checked = true;
        fragment.appendChild( input );
        support.appendChecked = input.checked;

        // Make sure textarea (and checkbox) defaultValue is properly cloned
        // Support: IE6-IE11+
        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

        // #11217 - WebKit loses check when the name is after the checked attribute
        fragment.appendChild( div );
        div.innerHTML = "<input type='radio' checked='checked' name='t'/>";

        // Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
        // old WebKit doesn't clone checked state correctly in fragments
        support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

        // Support: IE<9
        // Opera does not clone events (and typeof div.attachEvent === undefined).
        // IE9-10 clones events bound via attachEvent, but they don't trigger with .click()
        support.noCloneEvent = true;
        if ( div.attachEvent ) {
            div.attachEvent( "onclick", function() {
                support.noCloneEvent = false;
            });

            div.cloneNode( true ).click();
        }

        // Execute the test only if not already executed in another module.
        if (support.deleteExpando == null) {
            // Support: IE<9
            support.deleteExpando = true;
            try {
                delete div.test;
            } catch( e ) {
                support.deleteExpando = false;
            }
        }
    })();


    (function() {
        var i, eventName,
            div = document.createElement( "div" );

        // Support: IE<9 (lack submit/change bubble), Firefox 23+ (lack focusin event)
        for ( i in { submit: true, change: true, focusin: true }) {
            eventName = "on" + i;

            if ( !(support[ i + "Bubbles" ] = eventName in window) ) {
                // Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
                div.setAttribute( eventName, "t" );
                support[ i + "Bubbles" ] = div.attributes[ eventName ].expando === false;
            }
        }

        // Null elements to avoid leaks in IE.
        div = null;
    })();


    var rformElems = /^(?:input|select|textarea)$/i,
        rkeyEvent = /^key/,
        rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
        rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
        rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

    function returnTrue() {
        return true;
    }

    function returnFalse() {
        return false;
    }

    function safeActiveElement() {
        try {
            return document.activeElement;
        } catch ( err ) { }
    }

    /*
     * Helper functions for managing events -- not part of the public interface.
     * Props to Dean Edwards' addEvent library for many of the ideas.
     */
    jQuery.event = {

        global: {},

        add: function( elem, types, handler, data, selector ) {
            var tmp, events, t, handleObjIn,
                special, eventHandle, handleObj,
                handlers, type, namespaces, origType,
                elemData = jQuery._data( elem );

            // Don't attach events to noData or text/comment nodes (but allow plain objects)
            if ( !elemData ) {
                return;
            }

            // Caller can pass in an object of custom data in lieu of the handler
            if ( handler.handler ) {
                handleObjIn = handler;
                handler = handleObjIn.handler;
                selector = handleObjIn.selector;
            }

            // Make sure that the handler has a unique ID, used to find/remove it later
            if ( !handler.guid ) {
                handler.guid = jQuery.guid++;
            }

            // Init the element's event structure and main handler, if this is the first
            if ( !(events = elemData.events) ) {
                events = elemData.events = {};
            }
            if ( !(eventHandle = elemData.handle) ) {
                eventHandle = elemData.handle = function( e ) {
                    // Discard the second event of a jQuery.event.trigger() and
                    // when an event is called after a page has unloaded
                    return typeof jQuery !== strundefined && (!e || jQuery.event.triggered !== e.type) ?
                        jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
                        undefined;
                };
                // Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
                eventHandle.elem = elem;
            }

            // Handle multiple events separated by a space
            types = ( types || "" ).match( rnotwhite ) || [ "" ];
            t = types.length;
            while ( t-- ) {
                tmp = rtypenamespace.exec( types[t] ) || [];
                type = origType = tmp[1];
                namespaces = ( tmp[2] || "" ).split( "." ).sort();

                // There *must* be a type, no attaching namespace-only handlers
                if ( !type ) {
                    continue;
                }

                // If event changes its type, use the special event handlers for the changed type
                special = jQuery.event.special[ type ] || {};

                // If selector defined, determine special event api type, otherwise given type
                type = ( selector ? special.delegateType : special.bindType ) || type;

                // Update special based on newly reset type
                special = jQuery.event.special[ type ] || {};

                // handleObj is passed to all event handlers
                handleObj = jQuery.extend({
                    type: type,
                    origType: origType,
                    data: data,
                    handler: handler,
                    guid: handler.guid,
                    selector: selector,
                    needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
                    namespace: namespaces.join(".")
                }, handleObjIn );

                // Init the event handler queue if we're the first
                if ( !(handlers = events[ type ]) ) {
                    handlers = events[ type ] = [];
                    handlers.delegateCount = 0;

                    // Only use addEventListener/attachEvent if the special events handler returns false
                    if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
                        // Bind the global event handler to the element
                        if ( elem.addEventListener ) {
                            elem.addEventListener( type, eventHandle, false );

                        } else if ( elem.attachEvent ) {
                            elem.attachEvent( "on" + type, eventHandle );
                        }
                    }
                }

                if ( special.add ) {
                    special.add.call( elem, handleObj );

                    if ( !handleObj.handler.guid ) {
                        handleObj.handler.guid = handler.guid;
                    }
                }

                // Add to the element's handler list, delegates in front
                if ( selector ) {
                    handlers.splice( handlers.delegateCount++, 0, handleObj );
                } else {
                    handlers.push( handleObj );
                }

                // Keep track of which events have ever been used, for event optimization
                jQuery.event.global[ type ] = true;
            }

            // Nullify elem to prevent memory leaks in IE
            elem = null;
        },

        // Detach an event or set of events from an element
        remove: function( elem, types, handler, selector, mappedTypes ) {
            var j, handleObj, tmp,
                origCount, t, events,
                special, handlers, type,
                namespaces, origType,
                elemData = jQuery.hasData( elem ) && jQuery._data( elem );

            if ( !elemData || !(events = elemData.events) ) {
                return;
            }

            // Once for each type.namespace in types; type may be omitted
            types = ( types || "" ).match( rnotwhite ) || [ "" ];
            t = types.length;
            while ( t-- ) {
                tmp = rtypenamespace.exec( types[t] ) || [];
                type = origType = tmp[1];
                namespaces = ( tmp[2] || "" ).split( "." ).sort();

                // Unbind all events (on this namespace, if provided) for the element
                if ( !type ) {
                    for ( type in events ) {
                        jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
                    }
                    continue;
                }

                special = jQuery.event.special[ type ] || {};
                type = ( selector ? special.delegateType : special.bindType ) || type;
                handlers = events[ type ] || [];
                tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

                // Remove matching events
                origCount = j = handlers.length;
                while ( j-- ) {
                    handleObj = handlers[ j ];

                    if ( ( mappedTypes || origType === handleObj.origType ) &&
                        ( !handler || handler.guid === handleObj.guid ) &&
                        ( !tmp || tmp.test( handleObj.namespace ) ) &&
                        ( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
                        handlers.splice( j, 1 );

                        if ( handleObj.selector ) {
                            handlers.delegateCount--;
                        }
                        if ( special.remove ) {
                            special.remove.call( elem, handleObj );
                        }
                    }
                }

                // Remove generic event handler if we removed something and no more handlers exist
                // (avoids potential for endless recursion during removal of special event handlers)
                if ( origCount && !handlers.length ) {
                    if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
                        jQuery.removeEvent( elem, type, elemData.handle );
                    }

                    delete events[ type ];
                }
            }

            // Remove the expando if it's no longer used
            if ( jQuery.isEmptyObject( events ) ) {
                delete elemData.handle;

                // removeData also checks for emptiness and clears the expando if empty
                // so use it instead of delete
                jQuery._removeData( elem, "events" );
            }
        },

        trigger: function( event, data, elem, onlyHandlers ) {
            var handle, ontype, cur,
                bubbleType, special, tmp, i,
                eventPath = [ elem || document ],
                type = hasOwn.call( event, "type" ) ? event.type : event,
                namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

            cur = tmp = elem = elem || document;

            // Don't do events on text and comment nodes
            if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
                return;
            }

            // focus/blur morphs to focusin/out; ensure we're not firing them right now
            if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
                return;
            }

            if ( type.indexOf(".") >= 0 ) {
                // Namespaced trigger; create a regexp to match event type in handle()
                namespaces = type.split(".");
                type = namespaces.shift();
                namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type;

            // Caller can pass in a jQuery.Event object, Object, or just an event type string
            event = event[ jQuery.expando ] ?
                event :
                new jQuery.Event( type, typeof event === "object" && event );

            // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.namespace_re = event.namespace ?
                new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
                null;

            // Clean up the event in case it is being reused
            event.result = undefined;
            if ( !event.target ) {
                event.target = elem;
            }

            // Clone any incoming data and prepend the event, creating the handler arg list
            data = data == null ?
                [ event ] :
                jQuery.makeArray( data, [ event ] );

            // Allow special events to draw outside the lines
            special = jQuery.event.special[ type ] || {};
            if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
                return;
            }

            // Determine event propagation path in advance, per W3C events spec (#9951)
            // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
            if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

                bubbleType = special.delegateType || type;
                if ( !rfocusMorph.test( bubbleType + type ) ) {
                    cur = cur.parentNode;
                }
                for ( ; cur; cur = cur.parentNode ) {
                    eventPath.push( cur );
                    tmp = cur;
                }

                // Only add window if we got to document (e.g., not plain obj or detached DOM)
                if ( tmp === (elem.ownerDocument || document) ) {
                    eventPath.push( tmp.defaultView || tmp.parentWindow || window );
                }
            }

            // Fire handlers on the event path
            i = 0;
            while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

                event.type = i > 1 ?
                    bubbleType :
                special.bindType || type;

                // jQuery handler
                handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] && jQuery._data( cur, "handle" );
                if ( handle ) {
                    handle.apply( cur, data );
                }

                // Native handler
                handle = ontype && cur[ ontype ];
                if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
                    event.result = handle.apply( cur, data );
                    if ( event.result === false ) {
                        event.preventDefault();
                    }
                }
            }
            event.type = type;

            // If nobody prevented the default action, do it now
            if ( !onlyHandlers && !event.isDefaultPrevented() ) {

                if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
                    jQuery.acceptData( elem ) ) {

                    // Call a native DOM method on the target with the same name name as the event.
                    // Can't use an .isFunction() check here because IE6/7 fails that test.
                    // Don't do default actions on window, that's where global variables be (#6170)
                    if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {

                        // Don't re-trigger an onFOO event when we call its FOO() method
                        tmp = elem[ ontype ];

                        if ( tmp ) {
                            elem[ ontype ] = null;
                        }

                        // Prevent re-triggering of the same event, since we already bubbled it above
                        jQuery.event.triggered = type;
                        try {
                            elem[ type ]();
                        } catch ( e ) {
                            // IE<9 dies on focus/blur to hidden element (#1486,#12518)
                            // only reproducible on winXP IE8 native, not IE9 in IE8 mode
                        }
                        jQuery.event.triggered = undefined;

                        if ( tmp ) {
                            elem[ ontype ] = tmp;
                        }
                    }
                }
            }

            return event.result;
        },

        dispatch: function( event ) {

            // Make a writable jQuery.Event from the native event object
            event = jQuery.event.fix( event );

            var i, ret, handleObj, matched, j,
                handlerQueue = [],
                args = slice.call( arguments ),
                handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
                special = jQuery.event.special[ event.type ] || {};

            // Use the fix-ed jQuery.Event rather than the (read-only) native event
            args[0] = event;
            event.delegateTarget = this;

            // Call the preDispatch hook for the mapped type, and let it bail if desired
            if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
                return;
            }

            // Determine handlers
            handlerQueue = jQuery.event.handlers.call( this, event, handlers );

            // Run delegates first; they may want to stop propagation beneath us
            i = 0;
            while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
                event.currentTarget = matched.elem;

                j = 0;
                while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

                    // Triggered event must either 1) have no namespace, or
                    // 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
                    if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

                        event.handleObj = handleObj;
                        event.data = handleObj.data;

                        ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
                            .apply( matched.elem, args );

                        if ( ret !== undefined ) {
                            if ( (event.result = ret) === false ) {
                                event.preventDefault();
                                event.stopPropagation();
                            }
                        }
                    }
                }
            }

            // Call the postDispatch hook for the mapped type
            if ( special.postDispatch ) {
                special.postDispatch.call( this, event );
            }

            return event.result;
        },

        handlers: function( event, handlers ) {
            var sel, handleObj, matches, i,
                handlerQueue = [],
                delegateCount = handlers.delegateCount,
                cur = event.target;

            // Find delegate handlers
            // Black-hole SVG <use> instance trees (#13180)
            // Avoid non-left-click bubbling in Firefox (#3861)
            if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

                /* jshint eqeqeq: false */
                for ( ; cur != this; cur = cur.parentNode || this ) {
                    /* jshint eqeqeq: true */

                    // Don't check non-elements (#13208)
                    // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
                    if ( cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click") ) {
                        matches = [];
                        for ( i = 0; i < delegateCount; i++ ) {
                            handleObj = handlers[ i ];

                            // Don't conflict with Object.prototype properties (#13203)
                            sel = handleObj.selector + " ";

                            if ( matches[ sel ] === undefined ) {
                                matches[ sel ] = handleObj.needsContext ?
                                jQuery( sel, this ).index( cur ) >= 0 :
                                    jQuery.find( sel, this, null, [ cur ] ).length;
                            }
                            if ( matches[ sel ] ) {
                                matches.push( handleObj );
                            }
                        }
                        if ( matches.length ) {
                            handlerQueue.push({ elem: cur, handlers: matches });
                        }
                    }
                }
            }

            // Add the remaining (directly-bound) handlers
            if ( delegateCount < handlers.length ) {
                handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
            }

            return handlerQueue;
        },

        fix: function( event ) {
            if ( event[ jQuery.expando ] ) {
                return event;
            }

            // Create a writable copy of the event object and normalize some properties
            var i, prop, copy,
                type = event.type,
                originalEvent = event,
                fixHook = this.fixHooks[ type ];

            if ( !fixHook ) {
                this.fixHooks[ type ] = fixHook =
                    rmouseEvent.test( type ) ? this.mouseHooks :
                        rkeyEvent.test( type ) ? this.keyHooks :
                        {};
            }
            copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

            event = new jQuery.Event( originalEvent );

            i = copy.length;
            while ( i-- ) {
                prop = copy[ i ];
                event[ prop ] = originalEvent[ prop ];
            }

            // Support: IE<9
            // Fix target property (#1925)
            if ( !event.target ) {
                event.target = originalEvent.srcElement || document;
            }

            // Support: Chrome 23+, Safari?
            // Target should not be a text node (#504, #13143)
            if ( event.target.nodeType === 3 ) {
                event.target = event.target.parentNode;
            }

            // Support: IE<9
            // For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
            event.metaKey = !!event.metaKey;

            return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
        },

        // Includes some event props shared by KeyEvent and MouseEvent
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

        fixHooks: {},

        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function( event, original ) {

                // Add which for key events
                if ( event.which == null ) {
                    event.which = original.charCode != null ? original.charCode : original.keyCode;
                }

                return event;
            }
        },

        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function( event, original ) {
                var body, eventDoc, doc,
                    button = original.button,
                    fromElement = original.fromElement;

                // Calculate pageX/Y if missing and clientX/Y available
                if ( event.pageX == null && original.clientX != null ) {
                    eventDoc = event.target.ownerDocument || document;
                    doc = eventDoc.documentElement;
                    body = eventDoc.body;

                    event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
                    event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
                }

                // Add relatedTarget, if necessary
                if ( !event.relatedTarget && fromElement ) {
                    event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
                }

                // Add which for click: 1 === left; 2 === middle; 3 === right
                // Note: button is not normalized, so don't use it
                if ( !event.which && button !== undefined ) {
                    event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
                }

                return event;
            }
        },

        special: {
            load: {
                // Prevent triggered image.load events from bubbling to window.load
                noBubble: true
            },
            focus: {
                // Fire native event if possible so blur/focus sequence is correct
                trigger: function() {
                    if ( this !== safeActiveElement() && this.focus ) {
                        try {
                            this.focus();
                            return false;
                        } catch ( e ) {
                            // Support: IE<9
                            // If we error on focus to hidden element (#1486, #12518),
                            // let .trigger() run the handlers
                        }
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if ( this === safeActiveElement() && this.blur ) {
                        this.blur();
                        return false;
                    }
                },
                delegateType: "focusout"
            },
            click: {
                // For checkbox, fire native event so checked state will be right
                trigger: function() {
                    if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
                        this.click();
                        return false;
                    }
                },

                // For cross-browser consistency, don't fire native .click() on links
                _default: function( event ) {
                    return jQuery.nodeName( event.target, "a" );
                }
            },

            beforeunload: {
                postDispatch: function( event ) {

                    // Support: Firefox 20+
                    // Firefox doesn't alert if the returnValue field is not set.
                    if ( event.result !== undefined && event.originalEvent ) {
                        event.originalEvent.returnValue = event.result;
                    }
                }
            }
        },

        simulate: function( type, elem, event, bubble ) {
            // Piggyback on a donor event to simulate a different one.
            // Fake originalEvent to avoid donor's stopPropagation, but if the
            // simulated event prevents default then we do the same on the donor.
            var e = jQuery.extend(
                new jQuery.Event(),
                event,
                {
                    type: type,
                    isSimulated: true,
                    originalEvent: {}
                }
            );
            if ( bubble ) {
                jQuery.event.trigger( e, null, elem );
            } else {
                jQuery.event.dispatch.call( elem, e );
            }
            if ( e.isDefaultPrevented() ) {
                event.preventDefault();
            }
        }
    };

    jQuery.removeEvent = document.removeEventListener ?
        function( elem, type, handle ) {
            if ( elem.removeEventListener ) {
                elem.removeEventListener( type, handle, false );
            }
        } :
        function( elem, type, handle ) {
            var name = "on" + type;

            if ( elem.detachEvent ) {

                // #8545, #7054, preventing memory leaks for custom events in IE6-8
                // detachEvent needed property on element, by name of that event, to properly expose it to GC
                if ( typeof elem[ name ] === strundefined ) {
                    elem[ name ] = null;
                }

                elem.detachEvent( name, handle );
            }
        };

    jQuery.Event = function( src, props ) {
        // Allow instantiation without the 'new' keyword
        if ( !(this instanceof jQuery.Event) ) {
            return new jQuery.Event( src, props );
        }

        // Event object
        if ( src && src.type ) {
            this.originalEvent = src;
            this.type = src.type;

            // Events bubbling up the document may have been marked as prevented
            // by a handler lower down the tree; reflect the correct value.
            this.isDefaultPrevented = src.defaultPrevented ||
            src.defaultPrevented === undefined &&
                // Support: IE < 9, Android < 4.0
            src.returnValue === false ?
                returnTrue :
                returnFalse;

            // Event type
        } else {
            this.type = src;
        }

        // Put explicitly provided properties onto the event object
        if ( props ) {
            jQuery.extend( this, props );
        }

        // Create a timestamp if incoming event doesn't have one
        this.timeStamp = src && src.timeStamp || jQuery.now();

        // Mark it as fixed
        this[ jQuery.expando ] = true;
    };

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
    jQuery.Event.prototype = {
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,

        preventDefault: function() {
            var e = this.originalEvent;

            this.isDefaultPrevented = returnTrue;
            if ( !e ) {
                return;
            }

            // If preventDefault exists, run it on the original event
            if ( e.preventDefault ) {
                e.preventDefault();

                // Support: IE
                // Otherwise set the returnValue property of the original event to false
            } else {
                e.returnValue = false;
            }
        },
        stopPropagation: function() {
            var e = this.originalEvent;

            this.isPropagationStopped = returnTrue;
            if ( !e ) {
                return;
            }
            // If stopPropagation exists, run it on the original event
            if ( e.stopPropagation ) {
                e.stopPropagation();
            }

            // Support: IE
            // Set the cancelBubble property of the original event to true
            e.cancelBubble = true;
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;

            this.isImmediatePropagationStopped = returnTrue;

            if ( e && e.stopImmediatePropagation ) {
                e.stopImmediatePropagation();
            }

            this.stopPropagation();
        }
    };

// Create mouseenter/leave events using mouseover/out and event-time checks
    jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function( orig, fix ) {
        jQuery.event.special[ orig ] = {
            delegateType: fix,
            bindType: fix,

            handle: function( event ) {
                var ret,
                    target = this,
                    related = event.relatedTarget,
                    handleObj = event.handleObj;

                // For mousenter/leave call the handler if related is outside the target.
                // NB: No relatedTarget if the mouse left/entered the browser window
                if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
                    event.type = handleObj.origType;
                    ret = handleObj.handler.apply( this, arguments );
                    event.type = fix;
                }
                return ret;
            }
        };
    });

// IE submit delegation
    if ( !support.submitBubbles ) {

        jQuery.event.special.submit = {
            setup: function() {
                // Only need this for delegated form submit events
                if ( jQuery.nodeName( this, "form" ) ) {
                    return false;
                }

                // Lazy-add a submit handler when a descendant form may potentially be submitted
                jQuery.event.add( this, "click._submit keypress._submit", function( e ) {
                    // Node name check avoids a VML-related crash in IE (#9807)
                    var elem = e.target,
                        form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ? elem.form : undefined;
                    if ( form && !jQuery._data( form, "submitBubbles" ) ) {
                        jQuery.event.add( form, "submit._submit", function( event ) {
                            event._submit_bubble = true;
                        });
                        jQuery._data( form, "submitBubbles", true );
                    }
                });
                // return undefined since we don't need an event listener
            },

            postDispatch: function( event ) {
                // If form was submitted by the user, bubble the event up the tree
                if ( event._submit_bubble ) {
                    delete event._submit_bubble;
                    if ( this.parentNode && !event.isTrigger ) {
                        jQuery.event.simulate( "submit", this.parentNode, event, true );
                    }
                }
            },

            teardown: function() {
                // Only need this for delegated form submit events
                if ( jQuery.nodeName( this, "form" ) ) {
                    return false;
                }

                // Remove delegated handlers; cleanData eventually reaps submit handlers attached above
                jQuery.event.remove( this, "._submit" );
            }
        };
    }

// IE change delegation and checkbox/radio fix
    if ( !support.changeBubbles ) {

        jQuery.event.special.change = {

            setup: function() {

                if ( rformElems.test( this.nodeName ) ) {
                    // IE doesn't fire change on a check/radio until blur; trigger it on click
                    // after a propertychange. Eat the blur-change in special.change.handle.
                    // This still fires onchange a second time for check/radio after blur.
                    if ( this.type === "checkbox" || this.type === "radio" ) {
                        jQuery.event.add( this, "propertychange._change", function( event ) {
                            if ( event.originalEvent.propertyName === "checked" ) {
                                this._just_changed = true;
                            }
                        });
                        jQuery.event.add( this, "click._change", function( event ) {
                            if ( this._just_changed && !event.isTrigger ) {
                                this._just_changed = false;
                            }
                            // Allow triggered, simulated change events (#11500)
                            jQuery.event.simulate( "change", this, event, true );
                        });
                    }
                    return false;
                }
                // Delegated event; lazy-add a change handler on descendant inputs
                jQuery.event.add( this, "beforeactivate._change", function( e ) {
                    var elem = e.target;

                    if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "changeBubbles" ) ) {
                        jQuery.event.add( elem, "change._change", function( event ) {
                            if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
                                jQuery.event.simulate( "change", this.parentNode, event, true );
                            }
                        });
                        jQuery._data( elem, "changeBubbles", true );
                    }
                });
            },

            handle: function( event ) {
                var elem = event.target;

                // Swallow native change events from checkbox/radio, we already triggered them above
                if ( this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox") ) {
                    return event.handleObj.handler.apply( this, arguments );
                }
            },

            teardown: function() {
                jQuery.event.remove( this, "._change" );

                return !rformElems.test( this.nodeName );
            }
        };
    }

// Create "bubbling" focus and blur events
    if ( !support.focusinBubbles ) {
        jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

            // Attach a single capturing handler on the document while someone wants focusin/focusout
            var handler = function( event ) {
                jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
            };

            jQuery.event.special[ fix ] = {
                setup: function() {
                    var doc = this.ownerDocument || this,
                        attaches = jQuery._data( doc, fix );

                    if ( !attaches ) {
                        doc.addEventListener( orig, handler, true );
                    }
                    jQuery._data( doc, fix, ( attaches || 0 ) + 1 );
                },
                teardown: function() {
                    var doc = this.ownerDocument || this,
                        attaches = jQuery._data( doc, fix ) - 1;

                    if ( !attaches ) {
                        doc.removeEventListener( orig, handler, true );
                        jQuery._removeData( doc, fix );
                    } else {
                        jQuery._data( doc, fix, attaches );
                    }
                }
            };
        });
    }

    jQuery.fn.extend({

        on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
            var type, origFn;

            // Types can be a map of types/handlers
            if ( typeof types === "object" ) {
                // ( types-Object, selector, data )
                if ( typeof selector !== "string" ) {
                    // ( types-Object, data )
                    data = data || selector;
                    selector = undefined;
                }
                for ( type in types ) {
                    this.on( type, selector, data, types[ type ], one );
                }
                return this;
            }

            if ( data == null && fn == null ) {
                // ( types, fn )
                fn = selector;
                data = selector = undefined;
            } else if ( fn == null ) {
                if ( typeof selector === "string" ) {
                    // ( types, selector, fn )
                    fn = data;
                    data = undefined;
                } else {
                    // ( types, data, fn )
                    fn = data;
                    data = selector;
                    selector = undefined;
                }
            }
            if ( fn === false ) {
                fn = returnFalse;
            } else if ( !fn ) {
                return this;
            }

            if ( one === 1 ) {
                origFn = fn;
                fn = function( event ) {
                    // Can use an empty set, since event contains the info
                    jQuery().off( event );
                    return origFn.apply( this, arguments );
                };
                // Use same guid so caller can remove using origFn
                fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
            }
            return this.each( function() {
                jQuery.event.add( this, types, fn, data, selector );
            });
        },
        one: function( types, selector, data, fn ) {
            return this.on( types, selector, data, fn, 1 );
        },
        off: function( types, selector, fn ) {
            var handleObj, type;
            if ( types && types.preventDefault && types.handleObj ) {
                // ( event )  dispatched jQuery.Event
                handleObj = types.handleObj;
                jQuery( types.delegateTarget ).off(
                    handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
                    handleObj.selector,
                    handleObj.handler
                );
                return this;
            }
            if ( typeof types === "object" ) {
                // ( types-object [, selector] )
                for ( type in types ) {
                    this.off( type, selector, types[ type ] );
                }
                return this;
            }
            if ( selector === false || typeof selector === "function" ) {
                // ( types [, fn] )
                fn = selector;
                selector = undefined;
            }
            if ( fn === false ) {
                fn = returnFalse;
            }
            return this.each(function() {
                jQuery.event.remove( this, types, fn, selector );
            });
        },

        trigger: function( type, data ) {
            return this.each(function() {
                jQuery.event.trigger( type, data, this );
            });
        },
        triggerHandler: function( type, data ) {
            var elem = this[0];
            if ( elem ) {
                return jQuery.event.trigger( type, data, elem, true );
            }
        }
    });


    function createSafeFragment( document ) {
        var list = nodeNames.split( "|" ),
            safeFrag = document.createDocumentFragment();

        if ( safeFrag.createElement ) {
            while ( list.length ) {
                safeFrag.createElement(
                    list.pop()
                );
            }
        }
        return safeFrag;
    }

    var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" +
            "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
        rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
        rleadingWhitespace = /^\s+/,
        rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        rtagName = /<([\w:]+)/,
        rtbody = /<tbody/i,
        rhtml = /<|&#?\w+;/,
        rnoInnerhtml = /<(?:script|style|link)/i,
    // checked="checked" or checked
        rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rscriptType = /^$|\/(?:java|ecma)script/i,
        rscriptTypeMasked = /^true\/(.*)/,
        rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

    // We have to close these tags to support XHTML (#13200)
        wrapMap = {
            option: [ 1, "<select multiple='multiple'>", "</select>" ],
            legend: [ 1, "<fieldset>", "</fieldset>" ],
            area: [ 1, "<map>", "</map>" ],
            param: [ 1, "<object>", "</object>" ],
            thead: [ 1, "<table>", "</table>" ],
            tr: [ 2, "<table><tbody>", "</tbody></table>" ],
            col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
            td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

            // IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
            // unless wrapped in a div with non-breaking characters in front of it.
            _default: support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>"  ]
        },
        safeFragment = createSafeFragment( document ),
        fragmentDiv = safeFragment.appendChild( document.createElement("div") );

    wrapMap.optgroup = wrapMap.option;
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;

    function getAll( context, tag ) {
        var elems, elem,
            i = 0,
            found = typeof context.getElementsByTagName !== strundefined ? context.getElementsByTagName( tag || "*" ) :
                typeof context.querySelectorAll !== strundefined ? context.querySelectorAll( tag || "*" ) :
                    undefined;

        if ( !found ) {
            for ( found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++ ) {
                if ( !tag || jQuery.nodeName( elem, tag ) ) {
                    found.push( elem );
                } else {
                    jQuery.merge( found, getAll( elem, tag ) );
                }
            }
        }

        return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
            jQuery.merge( [ context ], found ) :
            found;
    }

// Used in buildFragment, fixes the defaultChecked property
    function fixDefaultChecked( elem ) {
        if ( rcheckableType.test( elem.type ) ) {
            elem.defaultChecked = elem.checked;
        }
    }

// Support: IE<8
// Manipulating tables requires a tbody
    function manipulationTarget( elem, content ) {
        return jQuery.nodeName( elem, "table" ) &&
        jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

        elem.getElementsByTagName("tbody")[0] ||
        elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
            elem;
    }

// Replace/restore the type attribute of script elements for safe DOM manipulation
    function disableScript( elem ) {
        elem.type = (jQuery.find.attr( elem, "type" ) !== null) + "/" + elem.type;
        return elem;
    }
    function restoreScript( elem ) {
        var match = rscriptTypeMasked.exec( elem.type );
        if ( match ) {
            elem.type = match[1];
        } else {
            elem.removeAttribute("type");
        }
        return elem;
    }

// Mark scripts as having already been evaluated
    function setGlobalEval( elems, refElements ) {
        var elem,
            i = 0;
        for ( ; (elem = elems[i]) != null; i++ ) {
            jQuery._data( elem, "globalEval", !refElements || jQuery._data( refElements[i], "globalEval" ) );
        }
    }

    function cloneCopyEvent( src, dest ) {

        if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
            return;
        }

        var type, i, l,
            oldData = jQuery._data( src ),
            curData = jQuery._data( dest, oldData ),
            events = oldData.events;

        if ( events ) {
            delete curData.handle;
            curData.events = {};

            for ( type in events ) {
                for ( i = 0, l = events[ type ].length; i < l; i++ ) {
                    jQuery.event.add( dest, type, events[ type ][ i ] );
                }
            }
        }

        // make the cloned public data object a copy from the original
        if ( curData.data ) {
            curData.data = jQuery.extend( {}, curData.data );
        }
    }

    function fixCloneNodeIssues( src, dest ) {
        var nodeName, e, data;

        // We do not need to do anything for non-Elements
        if ( dest.nodeType !== 1 ) {
            return;
        }

        nodeName = dest.nodeName.toLowerCase();

        // IE6-8 copies events bound via attachEvent when using cloneNode.
        if ( !support.noCloneEvent && dest[ jQuery.expando ] ) {
            data = jQuery._data( dest );

            for ( e in data.events ) {
                jQuery.removeEvent( dest, e, data.handle );
            }

            // Event data gets referenced instead of copied if the expando gets copied too
            dest.removeAttribute( jQuery.expando );
        }

        // IE blanks contents when cloning scripts, and tries to evaluate newly-set text
        if ( nodeName === "script" && dest.text !== src.text ) {
            disableScript( dest ).text = src.text;
            restoreScript( dest );

            // IE6-10 improperly clones children of object elements using classid.
            // IE10 throws NoModificationAllowedError if parent is null, #12132.
        } else if ( nodeName === "object" ) {
            if ( dest.parentNode ) {
                dest.outerHTML = src.outerHTML;
            }

            // This path appears unavoidable for IE9. When cloning an object
            // element in IE9, the outerHTML strategy above is not sufficient.
            // If the src has innerHTML and the destination does not,
            // copy the src.innerHTML into the dest.innerHTML. #10324
            if ( support.html5Clone && ( src.innerHTML && !jQuery.trim(dest.innerHTML) ) ) {
                dest.innerHTML = src.innerHTML;
            }

        } else if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
            // IE6-8 fails to persist the checked state of a cloned checkbox
            // or radio button. Worse, IE6-7 fail to give the cloned element
            // a checked appearance if the defaultChecked value isn't also set

            dest.defaultChecked = dest.checked = src.checked;

            // IE6-7 get confused and end up setting the value of a cloned
            // checkbox/radio button to an empty string instead of "on"
            if ( dest.value !== src.value ) {
                dest.value = src.value;
            }

            // IE6-8 fails to return the selected option to the default selected
            // state when cloning options
        } else if ( nodeName === "option" ) {
            dest.defaultSelected = dest.selected = src.defaultSelected;

            // IE6-8 fails to set the defaultValue to the correct value when
            // cloning other types of input fields
        } else if ( nodeName === "input" || nodeName === "textarea" ) {
            dest.defaultValue = src.defaultValue;
        }
    }

    jQuery.extend({
        clone: function( elem, dataAndEvents, deepDataAndEvents ) {
            var destElements, node, clone, i, srcElements,
                inPage = jQuery.contains( elem.ownerDocument, elem );

            if ( support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {
                clone = elem.cloneNode( true );

                // IE<=8 does not properly clone detached, unknown element nodes
            } else {
                fragmentDiv.innerHTML = elem.outerHTML;
                fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
            }

            if ( (!support.noCloneEvent || !support.noCloneChecked) &&
                (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem) ) {

                // We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
                destElements = getAll( clone );
                srcElements = getAll( elem );

                // Fix all IE cloning issues
                for ( i = 0; (node = srcElements[i]) != null; ++i ) {
                    // Ensure that the destination node is not null; Fixes #9587
                    if ( destElements[i] ) {
                        fixCloneNodeIssues( node, destElements[i] );
                    }
                }
            }

            // Copy the events from the original to the clone
            if ( dataAndEvents ) {
                if ( deepDataAndEvents ) {
                    srcElements = srcElements || getAll( elem );
                    destElements = destElements || getAll( clone );

                    for ( i = 0; (node = srcElements[i]) != null; i++ ) {
                        cloneCopyEvent( node, destElements[i] );
                    }
                } else {
                    cloneCopyEvent( elem, clone );
                }
            }

            // Preserve script evaluation history
            destElements = getAll( clone, "script" );
            if ( destElements.length > 0 ) {
                setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
            }

            destElements = srcElements = node = null;

            // Return the cloned set
            return clone;
        },

        buildFragment: function( elems, context, scripts, selection ) {
            var j, elem, contains,
                tmp, tag, tbody, wrap,
                l = elems.length,

            // Ensure a safe fragment
                safe = createSafeFragment( context ),

                nodes = [],
                i = 0;

            for ( ; i < l; i++ ) {
                elem = elems[ i ];

                if ( elem || elem === 0 ) {

                    // Add nodes directly
                    if ( jQuery.type( elem ) === "object" ) {
                        jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

                        // Convert non-html into a text node
                    } else if ( !rhtml.test( elem ) ) {
                        nodes.push( context.createTextNode( elem ) );

                        // Convert html into DOM nodes
                    } else {
                        tmp = tmp || safe.appendChild( context.createElement("div") );

                        // Deserialize a standard representation
                        tag = (rtagName.exec( elem ) || [ "", "" ])[ 1 ].toLowerCase();
                        wrap = wrapMap[ tag ] || wrapMap._default;

                        tmp.innerHTML = wrap[1] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[2];

                        // Descend through wrappers to the right content
                        j = wrap[0];
                        while ( j-- ) {
                            tmp = tmp.lastChild;
                        }

                        // Manually add leading whitespace removed by IE
                        if ( !support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
                            nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[0] ) );
                        }

                        // Remove IE's autoinserted <tbody> from table fragments
                        if ( !support.tbody ) {

                            // String was a <table>, *may* have spurious <tbody>
                            elem = tag === "table" && !rtbody.test( elem ) ?
                                tmp.firstChild :

                                // String was a bare <thead> or <tfoot>
                                wrap[1] === "<table>" && !rtbody.test( elem ) ?
                                    tmp :
                                    0;

                            j = elem && elem.childNodes.length;
                            while ( j-- ) {
                                if ( jQuery.nodeName( (tbody = elem.childNodes[j]), "tbody" ) && !tbody.childNodes.length ) {
                                    elem.removeChild( tbody );
                                }
                            }
                        }

                        jQuery.merge( nodes, tmp.childNodes );

                        // Fix #12392 for WebKit and IE > 9
                        tmp.textContent = "";

                        // Fix #12392 for oldIE
                        while ( tmp.firstChild ) {
                            tmp.removeChild( tmp.firstChild );
                        }

                        // Remember the top-level container for proper cleanup
                        tmp = safe.lastChild;
                    }
                }
            }

            // Fix #11356: Clear elements from fragment
            if ( tmp ) {
                safe.removeChild( tmp );
            }

            // Reset defaultChecked for any radios and checkboxes
            // about to be appended to the DOM in IE 6/7 (#8060)
            if ( !support.appendChecked ) {
                jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
            }

            i = 0;
            while ( (elem = nodes[ i++ ]) ) {

                // #4087 - If origin and destination elements are the same, and this is
                // that element, do not do anything
                if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
                    continue;
                }

                contains = jQuery.contains( elem.ownerDocument, elem );

                // Append to fragment
                tmp = getAll( safe.appendChild( elem ), "script" );

                // Preserve script evaluation history
                if ( contains ) {
                    setGlobalEval( tmp );
                }

                // Capture executables
                if ( scripts ) {
                    j = 0;
                    while ( (elem = tmp[ j++ ]) ) {
                        if ( rscriptType.test( elem.type || "" ) ) {
                            scripts.push( elem );
                        }
                    }
                }
            }

            tmp = null;

            return safe;
        },

        cleanData: function( elems, /* internal */ acceptData ) {
            var elem, type, id, data,
                i = 0,
                internalKey = jQuery.expando,
                cache = jQuery.cache,
                deleteExpando = support.deleteExpando,
                special = jQuery.event.special;

            for ( ; (elem = elems[i]) != null; i++ ) {
                if ( acceptData || jQuery.acceptData( elem ) ) {

                    id = elem[ internalKey ];
                    data = id && cache[ id ];

                    if ( data ) {
                        if ( data.events ) {
                            for ( type in data.events ) {
                                if ( special[ type ] ) {
                                    jQuery.event.remove( elem, type );

                                    // This is a shortcut to avoid jQuery.event.remove's overhead
                                } else {
                                    jQuery.removeEvent( elem, type, data.handle );
                                }
                            }
                        }

                        // Remove cache only if it was not already removed by jQuery.event.remove
                        if ( cache[ id ] ) {

                            delete cache[ id ];

                            // IE does not allow us to delete expando properties from nodes,
                            // nor does it have a removeAttribute function on Document nodes;
                            // we must handle all of these cases
                            if ( deleteExpando ) {
                                delete elem[ internalKey ];

                            } else if ( typeof elem.removeAttribute !== strundefined ) {
                                elem.removeAttribute( internalKey );

                            } else {
                                elem[ internalKey ] = null;
                            }

                            deletedIds.push( id );
                        }
                    }
                }
            }
        }
    });

    jQuery.fn.extend({
        text: function( value ) {
            return access( this, function( value ) {
                return value === undefined ?
                    jQuery.text( this ) :
                    this.empty().append( ( this[0] && this[0].ownerDocument || document ).createTextNode( value ) );
            }, null, value, arguments.length );
        },

        append: function() {
            return this.domManip( arguments, function( elem ) {
                if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
                    var target = manipulationTarget( this, elem );
                    target.appendChild( elem );
                }
            });
        },

        prepend: function() {
            return this.domManip( arguments, function( elem ) {
                if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
                    var target = manipulationTarget( this, elem );
                    target.insertBefore( elem, target.firstChild );
                }
            });
        },

        before: function() {
            return this.domManip( arguments, function( elem ) {
                if ( this.parentNode ) {
                    this.parentNode.insertBefore( elem, this );
                }
            });
        },

        after: function() {
            return this.domManip( arguments, function( elem ) {
                if ( this.parentNode ) {
                    this.parentNode.insertBefore( elem, this.nextSibling );
                }
            });
        },

        remove: function( selector, keepData /* Internal Use Only */ ) {
            var elem,
                elems = selector ? jQuery.filter( selector, this ) : this,
                i = 0;

            for ( ; (elem = elems[i]) != null; i++ ) {

                if ( !keepData && elem.nodeType === 1 ) {
                    jQuery.cleanData( getAll( elem ) );
                }

                if ( elem.parentNode ) {
                    if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
                        setGlobalEval( getAll( elem, "script" ) );
                    }
                    elem.parentNode.removeChild( elem );
                }
            }

            return this;
        },

        empty: function() {
            var elem,
                i = 0;

            for ( ; (elem = this[i]) != null; i++ ) {
                // Remove element nodes and prevent memory leaks
                if ( elem.nodeType === 1 ) {
                    jQuery.cleanData( getAll( elem, false ) );
                }

                // Remove any remaining nodes
                while ( elem.firstChild ) {
                    elem.removeChild( elem.firstChild );
                }

                // If this is a select, ensure that it displays empty (#12336)
                // Support: IE<9
                if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
                    elem.options.length = 0;
                }
            }

            return this;
        },

        clone: function( dataAndEvents, deepDataAndEvents ) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

            return this.map(function() {
                return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
            });
        },

        html: function( value ) {
            return access( this, function( value ) {
                var elem = this[ 0 ] || {},
                    i = 0,
                    l = this.length;

                if ( value === undefined ) {
                    return elem.nodeType === 1 ?
                        elem.innerHTML.replace( rinlinejQuery, "" ) :
                        undefined;
                }

                // See if we can take a shortcut and just use innerHTML
                if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
                    ( support.htmlSerialize || !rnoshimcache.test( value )  ) &&
                    ( support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
                    !wrapMap[ (rtagName.exec( value ) || [ "", "" ])[ 1 ].toLowerCase() ] ) {

                    value = value.replace( rxhtmlTag, "<$1></$2>" );

                    try {
                        for (; i < l; i++ ) {
                            // Remove element nodes and prevent memory leaks
                            elem = this[i] || {};
                            if ( elem.nodeType === 1 ) {
                                jQuery.cleanData( getAll( elem, false ) );
                                elem.innerHTML = value;
                            }
                        }

                        elem = 0;

                        // If using innerHTML throws an exception, use the fallback method
                    } catch(e) {}
                }

                if ( elem ) {
                    this.empty().append( value );
                }
            }, null, value, arguments.length );
        },

        replaceWith: function() {
            var arg = arguments[ 0 ];

            // Make the changes, replacing each context element with the new content
            this.domManip( arguments, function( elem ) {
                arg = this.parentNode;

                jQuery.cleanData( getAll( this ) );

                if ( arg ) {
                    arg.replaceChild( elem, this );
                }
            });

            // Force removal if there was no new content (e.g., from empty arguments)
            return arg && (arg.length || arg.nodeType) ? this : this.remove();
        },

        detach: function( selector ) {
            return this.remove( selector, true );
        },

        domManip: function( args, callback ) {

            // Flatten any nested arrays
            args = concat.apply( [], args );

            var first, node, hasScripts,
                scripts, doc, fragment,
                i = 0,
                l = this.length,
                set = this,
                iNoClone = l - 1,
                value = args[0],
                isFunction = jQuery.isFunction( value );

            // We can't cloneNode fragments that contain checked, in WebKit
            if ( isFunction ||
                ( l > 1 && typeof value === "string" &&
                !support.checkClone && rchecked.test( value ) ) ) {
                return this.each(function( index ) {
                    var self = set.eq( index );
                    if ( isFunction ) {
                        args[0] = value.call( this, index, self.html() );
                    }
                    self.domManip( args, callback );
                });
            }

            if ( l ) {
                fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
                first = fragment.firstChild;

                if ( fragment.childNodes.length === 1 ) {
                    fragment = first;
                }

                if ( first ) {
                    scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
                    hasScripts = scripts.length;

                    // Use the original fragment for the last item instead of the first because it can end up
                    // being emptied incorrectly in certain situations (#8070).
                    for ( ; i < l; i++ ) {
                        node = fragment;

                        if ( i !== iNoClone ) {
                            node = jQuery.clone( node, true, true );

                            // Keep references to cloned scripts for later restoration
                            if ( hasScripts ) {
                                jQuery.merge( scripts, getAll( node, "script" ) );
                            }
                        }

                        callback.call( this[i], node, i );
                    }

                    if ( hasScripts ) {
                        doc = scripts[ scripts.length - 1 ].ownerDocument;

                        // Reenable scripts
                        jQuery.map( scripts, restoreScript );

                        // Evaluate executable scripts on first document insertion
                        for ( i = 0; i < hasScripts; i++ ) {
                            node = scripts[ i ];
                            if ( rscriptType.test( node.type || "" ) &&
                                !jQuery._data( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

                                if ( node.src ) {
                                    // Optional AJAX dependency, but won't run scripts if not present
                                    if ( jQuery._evalUrl ) {
                                        jQuery._evalUrl( node.src );
                                    }
                                } else {
                                    jQuery.globalEval( ( node.text || node.textContent || node.innerHTML || "" ).replace( rcleanScript, "" ) );
                                }
                            }
                        }
                    }

                    // Fix #11809: Avoid leaking memory
                    fragment = first = null;
                }
            }

            return this;
        }
    });

    jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function( name, original ) {
        jQuery.fn[ name ] = function( selector ) {
            var elems,
                i = 0,
                ret = [],
                insert = jQuery( selector ),
                last = insert.length - 1;

            for ( ; i <= last; i++ ) {
                elems = i === last ? this : this.clone(true);
                jQuery( insert[i] )[ original ]( elems );

                // Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
                push.apply( ret, elems.get() );
            }

            return this.pushStack( ret );
        };
    });


    var iframe,
        elemdisplay = {};

    /**
     * Retrieve the actual display of a element
     * @param {String} name nodeName of the element
     * @param {Object} doc Document object
     */
// Called only from within defaultDisplay
    function actualDisplay( name, doc ) {
        var style,
            elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

        // getDefaultComputedStyle might be reliably used only on attached element
            display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?

                // Use of this method is a temporary fix (more like optmization) until something better comes along,
                // since it was removed from specification and supported only in FF
                style.display : jQuery.css( elem[ 0 ], "display" );

        // We don't have any data stored on the element,
        // so use "detach" method as fast way to get rid of the element
        elem.detach();

        return display;
    }

    /**
     * Try to determine the default display value of an element
     * @param {String} nodeName
     */
    function defaultDisplay( nodeName ) {
        var doc = document,
            display = elemdisplay[ nodeName ];

        if ( !display ) {
            display = actualDisplay( nodeName, doc );

            // If the simple way fails, read from inside an iframe
            if ( display === "none" || !display ) {

                // Use the already-created iframe if possible
                iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );

                // Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
                doc = ( iframe[ 0 ].contentWindow || iframe[ 0 ].contentDocument ).document;

                // Support: IE
                doc.write();
                doc.close();

                display = actualDisplay( nodeName, doc );
                iframe.detach();
            }

            // Store the correct default display
            elemdisplay[ nodeName ] = display;
        }

        return display;
    }


    (function() {
        var shrinkWrapBlocksVal;

        support.shrinkWrapBlocks = function() {
            if ( shrinkWrapBlocksVal != null ) {
                return shrinkWrapBlocksVal;
            }

            // Will be changed later if needed.
            shrinkWrapBlocksVal = false;

            // Minified: var b,c,d
            var div, body, container;

            body = document.getElementsByTagName( "body" )[ 0 ];
            if ( !body || !body.style ) {
                // Test fired too early or in an unsupported environment, exit.
                return;
            }

            // Setup
            div = document.createElement( "div" );
            container = document.createElement( "div" );
            container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
            body.appendChild( container ).appendChild( div );

            // Support: IE6
            // Check if elements with layout shrink-wrap their children
            if ( typeof div.style.zoom !== strundefined ) {
                // Reset CSS: box-sizing; display; margin; border
                div.style.cssText =
                    // Support: Firefox<29, Android 2.3
                    // Vendor-prefix box-sizing
                    "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
                    "box-sizing:content-box;display:block;margin:0;border:0;" +
                    "padding:1px;width:1px;zoom:1";
                div.appendChild( document.createElement( "div" ) ).style.width = "5px";
                shrinkWrapBlocksVal = div.offsetWidth !== 3;
            }

            body.removeChild( container );

            return shrinkWrapBlocksVal;
        };

    })();
    var rmargin = (/^margin/);

    var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );



    var getStyles, curCSS,
        rposition = /^(top|right|bottom|left)$/;

    if ( window.getComputedStyle ) {
        getStyles = function( elem ) {
            // Support: IE<=11+, Firefox<=30+ (#15098, #14150)
            // IE throws on elements created in popups
            // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
            if ( elem.ownerDocument.defaultView.opener ) {
                return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
            }

            return window.getComputedStyle( elem, null );
        };

        curCSS = function( elem, name, computed ) {
            var width, minWidth, maxWidth, ret,
                style = elem.style;

            computed = computed || getStyles( elem );

            // getPropertyValue is only needed for .css('filter') in IE9, see #12537
            ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

            if ( computed ) {

                if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
                    ret = jQuery.style( elem, name );
                }

                // A tribute to the "awesome hack by Dean Edwards"
                // Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
                // Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
                // this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
                if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

                    // Remember the original values
                    width = style.width;
                    minWidth = style.minWidth;
                    maxWidth = style.maxWidth;

                    // Put in the new values to get a computed value out
                    style.minWidth = style.maxWidth = style.width = ret;
                    ret = computed.width;

                    // Revert the changed values
                    style.width = width;
                    style.minWidth = minWidth;
                    style.maxWidth = maxWidth;
                }
            }

            // Support: IE
            // IE returns zIndex value as an integer.
            return ret === undefined ?
                ret :
            ret + "";
        };
    } else if ( document.documentElement.currentStyle ) {
        getStyles = function( elem ) {
            return elem.currentStyle;
        };

        curCSS = function( elem, name, computed ) {
            var left, rs, rsLeft, ret,
                style = elem.style;

            computed = computed || getStyles( elem );
            ret = computed ? computed[ name ] : undefined;

            // Avoid setting ret to empty string here
            // so we don't default to auto
            if ( ret == null && style && style[ name ] ) {
                ret = style[ name ];
            }

            // From the awesome hack by Dean Edwards
            // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

            // If we're not dealing with a regular pixel number
            // but a number that has a weird ending, we need to convert it to pixels
            // but not position css attributes, as those are proportional to the parent element instead
            // and we can't measure the parent instead because it might trigger a "stacking dolls" problem
            if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

                // Remember the original values
                left = style.left;
                rs = elem.runtimeStyle;
                rsLeft = rs && rs.left;

                // Put in the new values to get a computed value out
                if ( rsLeft ) {
                    rs.left = elem.currentStyle.left;
                }
                style.left = name === "fontSize" ? "1em" : ret;
                ret = style.pixelLeft + "px";

                // Revert the changed values
                style.left = left;
                if ( rsLeft ) {
                    rs.left = rsLeft;
                }
            }

            // Support: IE
            // IE returns zIndex value as an integer.
            return ret === undefined ?
                ret :
            ret + "" || "auto";
        };
    }




    function addGetHookIf( conditionFn, hookFn ) {
        // Define the hook, we'll check on the first run if it's really needed.
        return {
            get: function() {
                var condition = conditionFn();

                if ( condition == null ) {
                    // The test was not ready at this point; screw the hook this time
                    // but check again when needed next time.
                    return;
                }

                if ( condition ) {
                    // Hook not needed (or it's not possible to use it due to missing dependency),
                    // remove it.
                    // Since there are no other hooks for marginRight, remove the whole object.
                    delete this.get;
                    return;
                }

                // Hook needed; redefine it so that the support test is not executed again.

                return (this.get = hookFn).apply( this, arguments );
            }
        };
    }


    (function() {
        // Minified: var b,c,d,e,f,g, h,i
        var div, style, a, pixelPositionVal, boxSizingReliableVal,
            reliableHiddenOffsetsVal, reliableMarginRightVal;

        // Setup
        div = document.createElement( "div" );
        div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        a = div.getElementsByTagName( "a" )[ 0 ];
        style = a && a.style;

        // Finish early in limited (non-browser) environments
        if ( !style ) {
            return;
        }

        style.cssText = "float:left;opacity:.5";

        // Support: IE<9
        // Make sure that element opacity exists (as opposed to filter)
        support.opacity = style.opacity === "0.5";

        // Verify style float existence
        // (IE uses styleFloat instead of cssFloat)
        support.cssFloat = !!style.cssFloat;

        div.style.backgroundClip = "content-box";
        div.cloneNode( true ).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";

        // Support: Firefox<29, Android 2.3
        // Vendor-prefix box-sizing
        support.boxSizing = style.boxSizing === "" || style.MozBoxSizing === "" ||
            style.WebkitBoxSizing === "";

        jQuery.extend(support, {
            reliableHiddenOffsets: function() {
                if ( reliableHiddenOffsetsVal == null ) {
                    computeStyleTests();
                }
                return reliableHiddenOffsetsVal;
            },

            boxSizingReliable: function() {
                if ( boxSizingReliableVal == null ) {
                    computeStyleTests();
                }
                return boxSizingReliableVal;
            },

            pixelPosition: function() {
                if ( pixelPositionVal == null ) {
                    computeStyleTests();
                }
                return pixelPositionVal;
            },

            // Support: Android 2.3
            reliableMarginRight: function() {
                if ( reliableMarginRightVal == null ) {
                    computeStyleTests();
                }
                return reliableMarginRightVal;
            }
        });

        function computeStyleTests() {
            // Minified: var b,c,d,j
            var div, body, container, contents;

            body = document.getElementsByTagName( "body" )[ 0 ];
            if ( !body || !body.style ) {
                // Test fired too early or in an unsupported environment, exit.
                return;
            }

            // Setup
            div = document.createElement( "div" );
            container = document.createElement( "div" );
            container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
            body.appendChild( container ).appendChild( div );

            div.style.cssText =
                // Support: Firefox<29, Android 2.3
                // Vendor-prefix box-sizing
                "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
                "box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
                "border:1px;padding:1px;width:4px;position:absolute";

            // Support: IE<9
            // Assume reasonable values in the absence of getComputedStyle
            pixelPositionVal = boxSizingReliableVal = false;
            reliableMarginRightVal = true;

            // Check for getComputedStyle so that this code is not run in IE<9.
            if ( window.getComputedStyle ) {
                pixelPositionVal = ( window.getComputedStyle( div, null ) || {} ).top !== "1%";
                boxSizingReliableVal =
                    ( window.getComputedStyle( div, null ) || { width: "4px" } ).width === "4px";

                // Support: Android 2.3
                // Div with explicit width and no margin-right incorrectly
                // gets computed margin-right based on width of container (#3333)
                // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
                contents = div.appendChild( document.createElement( "div" ) );

                // Reset CSS: box-sizing; display; margin; border; padding
                contents.style.cssText = div.style.cssText =
                    // Support: Firefox<29, Android 2.3
                    // Vendor-prefix box-sizing
                    "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
                    "box-sizing:content-box;display:block;margin:0;border:0;padding:0";
                contents.style.marginRight = contents.style.width = "0";
                div.style.width = "1px";

                reliableMarginRightVal =
                    !parseFloat( ( window.getComputedStyle( contents, null ) || {} ).marginRight );

                div.removeChild( contents );
            }

            // Support: IE8
            // Check if table cells still have offsetWidth/Height when they are set
            // to display:none and there are still other visible table cells in a
            // table row; if so, offsetWidth/Height are not reliable for use when
            // determining if an element has been hidden directly using
            // display:none (it is still safe to use offsets if a parent element is
            // hidden; don safety goggles and see bug #4512 for more information).
            div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
            contents = div.getElementsByTagName( "td" );
            contents[ 0 ].style.cssText = "margin:0;border:0;padding:0;display:none";
            reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
            if ( reliableHiddenOffsetsVal ) {
                contents[ 0 ].style.display = "";
                contents[ 1 ].style.display = "none";
                reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
            }

            body.removeChild( container );
        }

    })();


// A method for quickly swapping in/out CSS properties to get correct calculations.
    jQuery.swap = function( elem, options, callback, args ) {
        var ret, name,
            old = {};

        // Remember the old values, and insert the new ones
        for ( name in options ) {
            old[ name ] = elem.style[ name ];
            elem.style[ name ] = options[ name ];
        }

        ret = callback.apply( elem, args || [] );

        // Revert the old values
        for ( name in options ) {
            elem.style[ name ] = old[ name ];
        }

        return ret;
    };


    var
        ralpha = /alpha\([^)]*\)/i,
        ropacity = /opacity\s*=\s*([^)]*)/,

    // swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
    // see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
        rdisplayswap = /^(none|table(?!-c[ea]).+)/,
        rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
        rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),

        cssShow = { position: "absolute", visibility: "hidden", display: "block" },
        cssNormalTransform = {
            letterSpacing: "0",
            fontWeight: "400"
        },

        cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];


// return a css property mapped to a potentially vendor prefixed property
    function vendorPropName( style, name ) {

        // shortcut for names that are not vendor prefixed
        if ( name in style ) {
            return name;
        }

        // check for vendor prefixed names
        var capName = name.charAt(0).toUpperCase() + name.slice(1),
            origName = name,
            i = cssPrefixes.length;

        while ( i-- ) {
            name = cssPrefixes[ i ] + capName;
            if ( name in style ) {
                return name;
            }
        }

        return origName;
    }

    function showHide( elements, show ) {
        var display, elem, hidden,
            values = [],
            index = 0,
            length = elements.length;

        for ( ; index < length; index++ ) {
            elem = elements[ index ];
            if ( !elem.style ) {
                continue;
            }

            values[ index ] = jQuery._data( elem, "olddisplay" );
            display = elem.style.display;
            if ( show ) {
                // Reset the inline display of this element to learn if it is
                // being hidden by cascaded rules or not
                if ( !values[ index ] && display === "none" ) {
                    elem.style.display = "";
                }

                // Set elements which have been overridden with display: none
                // in a stylesheet to whatever the default browser style is
                // for such an element
                if ( elem.style.display === "" && isHidden( elem ) ) {
                    values[ index ] = jQuery._data( elem, "olddisplay", defaultDisplay(elem.nodeName) );
                }
            } else {
                hidden = isHidden( elem );

                if ( display && display !== "none" || !hidden ) {
                    jQuery._data( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
                }
            }
        }

        // Set the display of most of the elements in a second loop
        // to avoid the constant reflow
        for ( index = 0; index < length; index++ ) {
            elem = elements[ index ];
            if ( !elem.style ) {
                continue;
            }
            if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
                elem.style.display = show ? values[ index ] || "" : "none";
            }
        }

        return elements;
    }

    function setPositiveNumber( elem, value, subtract ) {
        var matches = rnumsplit.exec( value );
        return matches ?
            // Guard against undefined "subtract", e.g., when used as in cssHooks
        Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
            value;
    }

    function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
        var i = extra === ( isBorderBox ? "border" : "content" ) ?
                // If we already have the right measurement, avoid augmentation
                4 :
                // Otherwise initialize for horizontal or vertical properties
                name === "width" ? 1 : 0,

            val = 0;

        for ( ; i < 4; i += 2 ) {
            // both box models exclude margin, so add it if we want it
            if ( extra === "margin" ) {
                val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
            }

            if ( isBorderBox ) {
                // border-box includes padding, so remove it if we want content
                if ( extra === "content" ) {
                    val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
                }

                // at this point, extra isn't border nor margin, so remove border
                if ( extra !== "margin" ) {
                    val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
                }
            } else {
                // at this point, extra isn't content, so add padding
                val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

                // at this point, extra isn't content nor padding, so add border
                if ( extra !== "padding" ) {
                    val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
                }
            }
        }

        return val;
    }

    function getWidthOrHeight( elem, name, extra ) {

        // Start with offset property, which is equivalent to the border-box value
        var valueIsBorderBox = true,
            val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
            styles = getStyles( elem ),
            isBorderBox = support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

        // some non-html elements return undefined for offsetWidth, so check for null/undefined
        // svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
        // MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
        if ( val <= 0 || val == null ) {
            // Fall back to computed then uncomputed css if necessary
            val = curCSS( elem, name, styles );
            if ( val < 0 || val == null ) {
                val = elem.style[ name ];
            }

            // Computed unit is not pixels. Stop here and return.
            if ( rnumnonpx.test(val) ) {
                return val;
            }

            // we need the check for style in case a browser which returns unreliable values
            // for getComputedStyle silently falls back to the reliable elem.style
            valueIsBorderBox = isBorderBox && ( support.boxSizingReliable() || val === elem.style[ name ] );

            // Normalize "", auto, and prepare for extra
            val = parseFloat( val ) || 0;
        }

        // use the active box-sizing model to add/subtract irrelevant styles
        return ( val +
                augmentWidthOrHeight(
                    elem,
                    name,
                    extra || ( isBorderBox ? "border" : "content" ),
                    valueIsBorderBox,
                    styles
                )
            ) + "px";
    }

    jQuery.extend({
        // Add in style property hooks for overriding the default
        // behavior of getting and setting a style property
        cssHooks: {
            opacity: {
                get: function( elem, computed ) {
                    if ( computed ) {
                        // We should always get a number back from opacity
                        var ret = curCSS( elem, "opacity" );
                        return ret === "" ? "1" : ret;
                    }
                }
            }
        },

        // Don't automatically add "px" to these possibly-unitless properties
        cssNumber: {
            "columnCount": true,
            "fillOpacity": true,
            "flexGrow": true,
            "flexShrink": true,
            "fontWeight": true,
            "lineHeight": true,
            "opacity": true,
            "order": true,
            "orphans": true,
            "widows": true,
            "zIndex": true,
            "zoom": true
        },

        // Add in properties whose names you wish to fix before
        // setting or getting the value
        cssProps: {
            // normalize float css property
            "float": support.cssFloat ? "cssFloat" : "styleFloat"
        },

        // Get and set the style property on a DOM Node
        style: function( elem, name, value, extra ) {
            // Don't set styles on text and comment nodes
            if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
                return;
            }

            // Make sure that we're working with the right name
            var ret, type, hooks,
                origName = jQuery.camelCase( name ),
                style = elem.style;

            name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

            // gets hook for the prefixed version
            // followed by the unprefixed version
            hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

            // Check if we're setting a value
            if ( value !== undefined ) {
                type = typeof value;

                // convert relative number strings (+= or -=) to relative numbers. #7345
                if ( type === "string" && (ret = rrelNum.exec( value )) ) {
                    value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
                    // Fixes bug #9237
                    type = "number";
                }

                // Make sure that null and NaN values aren't set. See: #7116
                if ( value == null || value !== value ) {
                    return;
                }

                // If a number was passed in, add 'px' to the (except for certain CSS properties)
                if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
                    value += "px";
                }

                // Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
                // but it would mean to define eight (for every problematic property) identical functions
                if ( !support.clearCloneStyle && value === "" && name.indexOf("background") === 0 ) {
                    style[ name ] = "inherit";
                }

                // If a hook was provided, use that value, otherwise just set the specified value
                if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {

                    // Support: IE
                    // Swallow errors from 'invalid' CSS values (#5509)
                    try {
                        style[ name ] = value;
                    } catch(e) {}
                }

            } else {
                // If a hook was provided get the non-computed value from there
                if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
                    return ret;
                }

                // Otherwise just get the value from the style object
                return style[ name ];
            }
        },

        css: function( elem, name, extra, styles ) {
            var num, val, hooks,
                origName = jQuery.camelCase( name );

            // Make sure that we're working with the right name
            name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

            // gets hook for the prefixed version
            // followed by the unprefixed version
            hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

            // If a hook was provided get the computed value from there
            if ( hooks && "get" in hooks ) {
                val = hooks.get( elem, true, extra );
            }

            // Otherwise, if a way to get the computed value exists, use that
            if ( val === undefined ) {
                val = curCSS( elem, name, styles );
            }

            //convert "normal" to computed value
            if ( val === "normal" && name in cssNormalTransform ) {
                val = cssNormalTransform[ name ];
            }

            // Return, converting to number if forced or a qualifier was provided and val looks numeric
            if ( extra === "" || extra ) {
                num = parseFloat( val );
                return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
            }
            return val;
        }
    });

    jQuery.each([ "height", "width" ], function( i, name ) {
        jQuery.cssHooks[ name ] = {
            get: function( elem, computed, extra ) {
                if ( computed ) {
                    // certain elements can have dimension info if we invisibly show them
                    // however, it must have a current display style that would benefit from this
                    return rdisplayswap.test( jQuery.css( elem, "display" ) ) && elem.offsetWidth === 0 ?
                        jQuery.swap( elem, cssShow, function() {
                            return getWidthOrHeight( elem, name, extra );
                        }) :
                        getWidthOrHeight( elem, name, extra );
                }
            },

            set: function( elem, value, extra ) {
                var styles = extra && getStyles( elem );
                return setPositiveNumber( elem, value, extra ?
                        augmentWidthOrHeight(
                            elem,
                            name,
                            extra,
                            support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
                            styles
                        ) : 0
                );
            }
        };
    });

    if ( !support.opacity ) {
        jQuery.cssHooks.opacity = {
            get: function( elem, computed ) {
                // IE uses filters for opacity
                return ropacity.test( (computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "" ) ?
                ( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
                    computed ? "1" : "";
            },

            set: function( elem, value ) {
                var style = elem.style,
                    currentStyle = elem.currentStyle,
                    opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
                    filter = currentStyle && currentStyle.filter || style.filter || "";

                // IE has trouble with opacity if it does not have layout
                // Force it by setting the zoom level
                style.zoom = 1;

                // if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
                // if value === "", then remove inline opacity #12685
                if ( ( value >= 1 || value === "" ) &&
                    jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
                    style.removeAttribute ) {

                    // Setting style.filter to null, "" & " " still leave "filter:" in the cssText
                    // if "filter:" is present at all, clearType is disabled, we want to avoid this
                    // style.removeAttribute is IE Only, but so apparently is this code path...
                    style.removeAttribute( "filter" );

                    // if there is no filter style applied in a css rule or unset inline opacity, we are done
                    if ( value === "" || currentStyle && !currentStyle.filter ) {
                        return;
                    }
                }

                // otherwise, set new filter values
                style.filter = ralpha.test( filter ) ?
                    filter.replace( ralpha, opacity ) :
                filter + " " + opacity;
            }
        };
    }

    jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
        function( elem, computed ) {
            if ( computed ) {
                // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
                // Work around by temporarily setting element display to inline-block
                return jQuery.swap( elem, { "display": "inline-block" },
                    curCSS, [ elem, "marginRight" ] );
            }
        }
    );

// These hooks are used by animate to expand properties
    jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function( prefix, suffix ) {
        jQuery.cssHooks[ prefix + suffix ] = {
            expand: function( value ) {
                var i = 0,
                    expanded = {},

                // assumes a single number if not a string
                    parts = typeof value === "string" ? value.split(" ") : [ value ];

                for ( ; i < 4; i++ ) {
                    expanded[ prefix + cssExpand[ i ] + suffix ] =
                        parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
                }

                return expanded;
            }
        };

        if ( !rmargin.test( prefix ) ) {
            jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
        }
    });

    jQuery.fn.extend({
        css: function( name, value ) {
            return access( this, function( elem, name, value ) {
                var styles, len,
                    map = {},
                    i = 0;

                if ( jQuery.isArray( name ) ) {
                    styles = getStyles( elem );
                    len = name.length;

                    for ( ; i < len; i++ ) {
                        map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
                    }

                    return map;
                }

                return value !== undefined ?
                    jQuery.style( elem, name, value ) :
                    jQuery.css( elem, name );
            }, name, value, arguments.length > 1 );
        },
        show: function() {
            return showHide( this, true );
        },
        hide: function() {
            return showHide( this );
        },
        toggle: function( state ) {
            if ( typeof state === "boolean" ) {
                return state ? this.show() : this.hide();
            }

            return this.each(function() {
                if ( isHidden( this ) ) {
                    jQuery( this ).show();
                } else {
                    jQuery( this ).hide();
                }
            });
        }
    });


    function Tween( elem, options, prop, end, easing ) {
        return new Tween.prototype.init( elem, options, prop, end, easing );
    }
    jQuery.Tween = Tween;

    Tween.prototype = {
        constructor: Tween,
        init: function( elem, options, prop, end, easing, unit ) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || "swing";
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
        },
        cur: function() {
            var hooks = Tween.propHooks[ this.prop ];

            return hooks && hooks.get ?
                hooks.get( this ) :
                Tween.propHooks._default.get( this );
        },
        run: function( percent ) {
            var eased,
                hooks = Tween.propHooks[ this.prop ];

            if ( this.options.duration ) {
                this.pos = eased = jQuery.easing[ this.easing ](
                    percent, this.options.duration * percent, 0, 1, this.options.duration
                );
            } else {
                this.pos = eased = percent;
            }
            this.now = ( this.end - this.start ) * eased + this.start;

            if ( this.options.step ) {
                this.options.step.call( this.elem, this.now, this );
            }

            if ( hooks && hooks.set ) {
                hooks.set( this );
            } else {
                Tween.propHooks._default.set( this );
            }
            return this;
        }
    };

    Tween.prototype.init.prototype = Tween.prototype;

    Tween.propHooks = {
        _default: {
            get: function( tween ) {
                var result;

                if ( tween.elem[ tween.prop ] != null &&
                    (!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
                    return tween.elem[ tween.prop ];
                }

                // passing an empty string as a 3rd parameter to .css will automatically
                // attempt a parseFloat and fallback to a string if the parse fails
                // so, simple values such as "10px" are parsed to Float.
                // complex values such as "rotate(1rad)" are returned as is.
                result = jQuery.css( tween.elem, tween.prop, "" );
                // Empty strings, null, undefined and "auto" are converted to 0.
                return !result || result === "auto" ? 0 : result;
            },
            set: function( tween ) {
                // use step hook for back compat - use cssHook if its there - use .style if its
                // available and use plain properties where available
                if ( jQuery.fx.step[ tween.prop ] ) {
                    jQuery.fx.step[ tween.prop ]( tween );
                } else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
                    jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
                } else {
                    tween.elem[ tween.prop ] = tween.now;
                }
            }
        }
    };

// Support: IE <=9
// Panic based approach to setting things on disconnected nodes

    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function( tween ) {
            if ( tween.elem.nodeType && tween.elem.parentNode ) {
                tween.elem[ tween.prop ] = tween.now;
            }
        }
    };

    jQuery.easing = {
        linear: function( p ) {
            return p;
        },
        swing: function( p ) {
            return 0.5 - Math.cos( p * Math.PI ) / 2;
        }
    };

    jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
    jQuery.fx.step = {};




    var
        fxNow, timerId,
        rfxtypes = /^(?:toggle|show|hide)$/,
        rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
        rrun = /queueHooks$/,
        animationPrefilters = [ defaultPrefilter ],
        tweeners = {
            "*": [ function( prop, value ) {
                var tween = this.createTween( prop, value ),
                    target = tween.cur(),
                    parts = rfxnum.exec( value ),
                    unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

                // Starting value computation is required for potential unit mismatches
                    start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
                        rfxnum.exec( jQuery.css( tween.elem, prop ) ),
                    scale = 1,
                    maxIterations = 20;

                if ( start && start[ 3 ] !== unit ) {
                    // Trust units reported by jQuery.css
                    unit = unit || start[ 3 ];

                    // Make sure we update the tween properties later on
                    parts = parts || [];

                    // Iteratively approximate from a nonzero starting point
                    start = +target || 1;

                    do {
                        // If previous iteration zeroed out, double until we get *something*
                        // Use a string for doubling factor so we don't accidentally see scale as unchanged below
                        scale = scale || ".5";

                        // Adjust and apply
                        start = start / scale;
                        jQuery.style( tween.elem, prop, start + unit );

                        // Update scale, tolerating zero or NaN from tween.cur()
                        // And breaking the loop if scale is unchanged or perfect, or if we've just had enough
                    } while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
                }

                // Update tween properties
                if ( parts ) {
                    start = tween.start = +start || +target || 0;
                    tween.unit = unit;
                    // If a +=/-= token was provided, we're doing a relative animation
                    tween.end = parts[ 1 ] ?
                    start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
                        +parts[ 2 ];
                }

                return tween;
            } ]
        };

// Animations created synchronously will run synchronously
    function createFxNow() {
        setTimeout(function() {
            fxNow = undefined;
        });
        return ( fxNow = jQuery.now() );
    }

// Generate parameters to create a standard animation
    function genFx( type, includeWidth ) {
        var which,
            attrs = { height: type },
            i = 0;

        // if we include width, step value is 1 to do all cssExpand values,
        // if we don't include width, step value is 2 to skip over Left and Right
        includeWidth = includeWidth ? 1 : 0;
        for ( ; i < 4 ; i += 2 - includeWidth ) {
            which = cssExpand[ i ];
            attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
        }

        if ( includeWidth ) {
            attrs.opacity = attrs.width = type;
        }

        return attrs;
    }

    function createTween( value, prop, animation ) {
        var tween,
            collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
            index = 0,
            length = collection.length;
        for ( ; index < length; index++ ) {
            if ( (tween = collection[ index ].call( animation, prop, value )) ) {

                // we're done with this property
                return tween;
            }
        }
    }

    function defaultPrefilter( elem, props, opts ) {
        /* jshint validthis: true */
        var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
            anim = this,
            orig = {},
            style = elem.style,
            hidden = elem.nodeType && isHidden( elem ),
            dataShow = jQuery._data( elem, "fxshow" );

        // handle queue: false promises
        if ( !opts.queue ) {
            hooks = jQuery._queueHooks( elem, "fx" );
            if ( hooks.unqueued == null ) {
                hooks.unqueued = 0;
                oldfire = hooks.empty.fire;
                hooks.empty.fire = function() {
                    if ( !hooks.unqueued ) {
                        oldfire();
                    }
                };
            }
            hooks.unqueued++;

            anim.always(function() {
                // doing this makes sure that the complete handler will be called
                // before this completes
                anim.always(function() {
                    hooks.unqueued--;
                    if ( !jQuery.queue( elem, "fx" ).length ) {
                        hooks.empty.fire();
                    }
                });
            });
        }

        // height/width overflow pass
        if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
            // Make sure that nothing sneaks out
            // Record all 3 overflow attributes because IE does not
            // change the overflow attribute when overflowX and
            // overflowY are set to the same value
            opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

            // Set display property to inline-block for height/width
            // animations on inline elements that are having width/height animated
            display = jQuery.css( elem, "display" );

            // Test default display if display is currently "none"
            checkDisplay = display === "none" ?
            jQuery._data( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

            if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {

                // inline-level elements accept inline-block;
                // block-level elements need to be inline with layout
                if ( !support.inlineBlockNeedsLayout || defaultDisplay( elem.nodeName ) === "inline" ) {
                    style.display = "inline-block";
                } else {
                    style.zoom = 1;
                }
            }
        }

        if ( opts.overflow ) {
            style.overflow = "hidden";
            if ( !support.shrinkWrapBlocks() ) {
                anim.always(function() {
                    style.overflow = opts.overflow[ 0 ];
                    style.overflowX = opts.overflow[ 1 ];
                    style.overflowY = opts.overflow[ 2 ];
                });
            }
        }

        // show/hide pass
        for ( prop in props ) {
            value = props[ prop ];
            if ( rfxtypes.exec( value ) ) {
                delete props[ prop ];
                toggle = toggle || value === "toggle";
                if ( value === ( hidden ? "hide" : "show" ) ) {

                    // If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
                    if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
                        hidden = true;
                    } else {
                        continue;
                    }
                }
                orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

                // Any non-fx value stops us from restoring the original display value
            } else {
                display = undefined;
            }
        }

        if ( !jQuery.isEmptyObject( orig ) ) {
            if ( dataShow ) {
                if ( "hidden" in dataShow ) {
                    hidden = dataShow.hidden;
                }
            } else {
                dataShow = jQuery._data( elem, "fxshow", {} );
            }

            // store state if its toggle - enables .stop().toggle() to "reverse"
            if ( toggle ) {
                dataShow.hidden = !hidden;
            }
            if ( hidden ) {
                jQuery( elem ).show();
            } else {
                anim.done(function() {
                    jQuery( elem ).hide();
                });
            }
            anim.done(function() {
                var prop;
                jQuery._removeData( elem, "fxshow" );
                for ( prop in orig ) {
                    jQuery.style( elem, prop, orig[ prop ] );
                }
            });
            for ( prop in orig ) {
                tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

                if ( !( prop in dataShow ) ) {
                    dataShow[ prop ] = tween.start;
                    if ( hidden ) {
                        tween.end = tween.start;
                        tween.start = prop === "width" || prop === "height" ? 1 : 0;
                    }
                }
            }

            // If this is a noop like .hide().hide(), restore an overwritten display value
        } else if ( (display === "none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) {
            style.display = display;
        }
    }

    function propFilter( props, specialEasing ) {
        var index, name, easing, value, hooks;

        // camelCase, specialEasing and expand cssHook pass
        for ( index in props ) {
            name = jQuery.camelCase( index );
            easing = specialEasing[ name ];
            value = props[ index ];
            if ( jQuery.isArray( value ) ) {
                easing = value[ 1 ];
                value = props[ index ] = value[ 0 ];
            }

            if ( index !== name ) {
                props[ name ] = value;
                delete props[ index ];
            }

            hooks = jQuery.cssHooks[ name ];
            if ( hooks && "expand" in hooks ) {
                value = hooks.expand( value );
                delete props[ name ];

                // not quite $.extend, this wont overwrite keys already present.
                // also - reusing 'index' from above because we have the correct "name"
                for ( index in value ) {
                    if ( !( index in props ) ) {
                        props[ index ] = value[ index ];
                        specialEasing[ index ] = easing;
                    }
                }
            } else {
                specialEasing[ name ] = easing;
            }
        }
    }

    function Animation( elem, properties, options ) {
        var result,
            stopped,
            index = 0,
            length = animationPrefilters.length,
            deferred = jQuery.Deferred().always( function() {
                // don't match elem in the :animated selector
                delete tick.elem;
            }),
            tick = function() {
                if ( stopped ) {
                    return false;
                }
                var currentTime = fxNow || createFxNow(),
                    remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
                // archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
                    temp = remaining / animation.duration || 0,
                    percent = 1 - temp,
                    index = 0,
                    length = animation.tweens.length;

                for ( ; index < length ; index++ ) {
                    animation.tweens[ index ].run( percent );
                }

                deferred.notifyWith( elem, [ animation, percent, remaining ]);

                if ( percent < 1 && length ) {
                    return remaining;
                } else {
                    deferred.resolveWith( elem, [ animation ] );
                    return false;
                }
            },
            animation = deferred.promise({
                elem: elem,
                props: jQuery.extend( {}, properties ),
                opts: jQuery.extend( true, { specialEasing: {} }, options ),
                originalProperties: properties,
                originalOptions: options,
                startTime: fxNow || createFxNow(),
                duration: options.duration,
                tweens: [],
                createTween: function( prop, end ) {
                    var tween = jQuery.Tween( elem, animation.opts, prop, end,
                        animation.opts.specialEasing[ prop ] || animation.opts.easing );
                    animation.tweens.push( tween );
                    return tween;
                },
                stop: function( gotoEnd ) {
                    var index = 0,
                    // if we are going to the end, we want to run all the tweens
                    // otherwise we skip this part
                        length = gotoEnd ? animation.tweens.length : 0;
                    if ( stopped ) {
                        return this;
                    }
                    stopped = true;
                    for ( ; index < length ; index++ ) {
                        animation.tweens[ index ].run( 1 );
                    }

                    // resolve when we played the last frame
                    // otherwise, reject
                    if ( gotoEnd ) {
                        deferred.resolveWith( elem, [ animation, gotoEnd ] );
                    } else {
                        deferred.rejectWith( elem, [ animation, gotoEnd ] );
                    }
                    return this;
                }
            }),
            props = animation.props;

        propFilter( props, animation.opts.specialEasing );

        for ( ; index < length ; index++ ) {
            result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
            if ( result ) {
                return result;
            }
        }

        jQuery.map( props, createTween, animation );

        if ( jQuery.isFunction( animation.opts.start ) ) {
            animation.opts.start.call( elem, animation );
        }

        jQuery.fx.timer(
            jQuery.extend( tick, {
                elem: elem,
                anim: animation,
                queue: animation.opts.queue
            })
        );

        // attach callbacks from options
        return animation.progress( animation.opts.progress )
            .done( animation.opts.done, animation.opts.complete )
            .fail( animation.opts.fail )
            .always( animation.opts.always );
    }

    jQuery.Animation = jQuery.extend( Animation, {
        tweener: function( props, callback ) {
            if ( jQuery.isFunction( props ) ) {
                callback = props;
                props = [ "*" ];
            } else {
                props = props.split(" ");
            }

            var prop,
                index = 0,
                length = props.length;

            for ( ; index < length ; index++ ) {
                prop = props[ index ];
                tweeners[ prop ] = tweeners[ prop ] || [];
                tweeners[ prop ].unshift( callback );
            }
        },

        prefilter: function( callback, prepend ) {
            if ( prepend ) {
                animationPrefilters.unshift( callback );
            } else {
                animationPrefilters.push( callback );
            }
        }
    });

    jQuery.speed = function( speed, easing, fn ) {
        var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
            complete: fn || !fn && easing ||
            jQuery.isFunction( speed ) && speed,
            duration: speed,
            easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
        };

        opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
            opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

        // normalize opt.queue - true/undefined/null -> "fx"
        if ( opt.queue == null || opt.queue === true ) {
            opt.queue = "fx";
        }

        // Queueing
        opt.old = opt.complete;

        opt.complete = function() {
            if ( jQuery.isFunction( opt.old ) ) {
                opt.old.call( this );
            }

            if ( opt.queue ) {
                jQuery.dequeue( this, opt.queue );
            }
        };

        return opt;
    };

    jQuery.fn.extend({
        fadeTo: function( speed, to, easing, callback ) {

            // show any hidden elements after setting opacity to 0
            return this.filter( isHidden ).css( "opacity", 0 ).show()

                // animate to the value specified
                .end().animate({ opacity: to }, speed, easing, callback );
        },
        animate: function( prop, speed, easing, callback ) {
            var empty = jQuery.isEmptyObject( prop ),
                optall = jQuery.speed( speed, easing, callback ),
                doAnimation = function() {
                    // Operate on a copy of prop so per-property easing won't be lost
                    var anim = Animation( this, jQuery.extend( {}, prop ), optall );

                    // Empty animations, or finishing resolves immediately
                    if ( empty || jQuery._data( this, "finish" ) ) {
                        anim.stop( true );
                    }
                };
            doAnimation.finish = doAnimation;

            return empty || optall.queue === false ?
                this.each( doAnimation ) :
                this.queue( optall.queue, doAnimation );
        },
        stop: function( type, clearQueue, gotoEnd ) {
            var stopQueue = function( hooks ) {
                var stop = hooks.stop;
                delete hooks.stop;
                stop( gotoEnd );
            };

            if ( typeof type !== "string" ) {
                gotoEnd = clearQueue;
                clearQueue = type;
                type = undefined;
            }
            if ( clearQueue && type !== false ) {
                this.queue( type || "fx", [] );
            }

            return this.each(function() {
                var dequeue = true,
                    index = type != null && type + "queueHooks",
                    timers = jQuery.timers,
                    data = jQuery._data( this );

                if ( index ) {
                    if ( data[ index ] && data[ index ].stop ) {
                        stopQueue( data[ index ] );
                    }
                } else {
                    for ( index in data ) {
                        if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
                            stopQueue( data[ index ] );
                        }
                    }
                }

                for ( index = timers.length; index--; ) {
                    if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
                        timers[ index ].anim.stop( gotoEnd );
                        dequeue = false;
                        timers.splice( index, 1 );
                    }
                }

                // start the next in the queue if the last step wasn't forced
                // timers currently will call their complete callbacks, which will dequeue
                // but only if they were gotoEnd
                if ( dequeue || !gotoEnd ) {
                    jQuery.dequeue( this, type );
                }
            });
        },
        finish: function( type ) {
            if ( type !== false ) {
                type = type || "fx";
            }
            return this.each(function() {
                var index,
                    data = jQuery._data( this ),
                    queue = data[ type + "queue" ],
                    hooks = data[ type + "queueHooks" ],
                    timers = jQuery.timers,
                    length = queue ? queue.length : 0;

                // enable finishing flag on private data
                data.finish = true;

                // empty the queue first
                jQuery.queue( this, type, [] );

                if ( hooks && hooks.stop ) {
                    hooks.stop.call( this, true );
                }

                // look for any active animations, and finish them
                for ( index = timers.length; index--; ) {
                    if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
                        timers[ index ].anim.stop( true );
                        timers.splice( index, 1 );
                    }
                }

                // look for any animations in the old queue and finish them
                for ( index = 0; index < length; index++ ) {
                    if ( queue[ index ] && queue[ index ].finish ) {
                        queue[ index ].finish.call( this );
                    }
                }

                // turn off finishing flag
                delete data.finish;
            });
        }
    });

    jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
        var cssFn = jQuery.fn[ name ];
        jQuery.fn[ name ] = function( speed, easing, callback ) {
            return speed == null || typeof speed === "boolean" ?
                cssFn.apply( this, arguments ) :
                this.animate( genFx( name, true ), speed, easing, callback );
        };
    });

// Generate shortcuts for custom animations
    jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" }
    }, function( name, props ) {
        jQuery.fn[ name ] = function( speed, easing, callback ) {
            return this.animate( props, speed, easing, callback );
        };
    });

    jQuery.timers = [];
    jQuery.fx.tick = function() {
        var timer,
            timers = jQuery.timers,
            i = 0;

        fxNow = jQuery.now();

        for ( ; i < timers.length; i++ ) {
            timer = timers[ i ];
            // Checks the timer has not already been removed
            if ( !timer() && timers[ i ] === timer ) {
                timers.splice( i--, 1 );
            }
        }

        if ( !timers.length ) {
            jQuery.fx.stop();
        }
        fxNow = undefined;
    };

    jQuery.fx.timer = function( timer ) {
        jQuery.timers.push( timer );
        if ( timer() ) {
            jQuery.fx.start();
        } else {
            jQuery.timers.pop();
        }
    };

    jQuery.fx.interval = 13;

    jQuery.fx.start = function() {
        if ( !timerId ) {
            timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
        }
    };

    jQuery.fx.stop = function() {
        clearInterval( timerId );
        timerId = null;
    };

    jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        // Default speed
        _default: 400
    };


// Based off of the plugin by Clint Helfers, with permission.
// http://blindsignals.com/index.php/2009/07/jquery-delay/
    jQuery.fn.delay = function( time, type ) {
        time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
        type = type || "fx";

        return this.queue( type, function( next, hooks ) {
            var timeout = setTimeout( next, time );
            hooks.stop = function() {
                clearTimeout( timeout );
            };
        });
    };


    (function() {
        // Minified: var a,b,c,d,e
        var input, div, select, a, opt;

        // Setup
        div = document.createElement( "div" );
        div.setAttribute( "className", "t" );
        div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        a = div.getElementsByTagName("a")[ 0 ];

        // First batch of tests.
        select = document.createElement("select");
        opt = select.appendChild( document.createElement("option") );
        input = div.getElementsByTagName("input")[ 0 ];

        a.style.cssText = "top:1px";

        // Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
        support.getSetAttribute = div.className !== "t";

        // Get the style information from getAttribute
        // (IE uses .cssText instead)
        support.style = /top/.test( a.getAttribute("style") );

        // Make sure that URLs aren't manipulated
        // (IE normalizes it by default)
        support.hrefNormalized = a.getAttribute("href") === "/a";

        // Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
        support.checkOn = !!input.value;

        // Make sure that a selected-by-default option has a working selected property.
        // (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
        support.optSelected = opt.selected;

        // Tests for enctype support on a form (#6743)
        support.enctype = !!document.createElement("form").enctype;

        // Make sure that the options inside disabled selects aren't marked as disabled
        // (WebKit marks them as disabled)
        select.disabled = true;
        support.optDisabled = !opt.disabled;

        // Support: IE8 only
        // Check if we can trust getAttribute("value")
        input = document.createElement( "input" );
        input.setAttribute( "value", "" );
        support.input = input.getAttribute( "value" ) === "";

        // Check if an input maintains its value after becoming a radio
        input.value = "t";
        input.setAttribute( "type", "radio" );
        support.radioValue = input.value === "t";
    })();


    var rreturn = /\r/g;

    jQuery.fn.extend({
        val: function( value ) {
            var hooks, ret, isFunction,
                elem = this[0];

            if ( !arguments.length ) {
                if ( elem ) {
                    hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

                    if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
                        return ret;
                    }

                    ret = elem.value;

                    return typeof ret === "string" ?
                        // handle most common string cases
                        ret.replace(rreturn, "") :
                        // handle cases where value is null/undef or number
                        ret == null ? "" : ret;
                }

                return;
            }

            isFunction = jQuery.isFunction( value );

            return this.each(function( i ) {
                var val;

                if ( this.nodeType !== 1 ) {
                    return;
                }

                if ( isFunction ) {
                    val = value.call( this, i, jQuery( this ).val() );
                } else {
                    val = value;
                }

                // Treat null/undefined as ""; convert numbers to string
                if ( val == null ) {
                    val = "";
                } else if ( typeof val === "number" ) {
                    val += "";
                } else if ( jQuery.isArray( val ) ) {
                    val = jQuery.map( val, function( value ) {
                        return value == null ? "" : value + "";
                    });
                }

                hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

                // If set returns undefined, fall back to normal setting
                if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
                    this.value = val;
                }
            });
        }
    });

    jQuery.extend({
        valHooks: {
            option: {
                get: function( elem ) {
                    var val = jQuery.find.attr( elem, "value" );
                    return val != null ?
                        val :
                        // Support: IE10-11+
                        // option.text throws exceptions (#14686, #14858)
                        jQuery.trim( jQuery.text( elem ) );
                }
            },
            select: {
                get: function( elem ) {
                    var value, option,
                        options = elem.options,
                        index = elem.selectedIndex,
                        one = elem.type === "select-one" || index < 0,
                        values = one ? null : [],
                        max = one ? index + 1 : options.length,
                        i = index < 0 ?
                            max :
                            one ? index : 0;

                    // Loop through all the selected options
                    for ( ; i < max; i++ ) {
                        option = options[ i ];

                        // oldIE doesn't update selected after form reset (#2551)
                        if ( ( option.selected || i === index ) &&
                                // Don't return options that are disabled or in a disabled optgroup
                            ( support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null ) &&
                            ( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

                            // Get the specific value for the option
                            value = jQuery( option ).val();

                            // We don't need an array for one selects
                            if ( one ) {
                                return value;
                            }

                            // Multi-Selects return an array
                            values.push( value );
                        }
                    }

                    return values;
                },

                set: function( elem, value ) {
                    var optionSet, option,
                        options = elem.options,
                        values = jQuery.makeArray( value ),
                        i = options.length;

                    while ( i-- ) {
                        option = options[ i ];

                        if ( jQuery.inArray( jQuery.valHooks.option.get( option ), values ) >= 0 ) {

                            // Support: IE6
                            // When new option element is added to select box we need to
                            // force reflow of newly added node in order to workaround delay
                            // of initialization properties
                            try {
                                option.selected = optionSet = true;

                            } catch ( _ ) {

                                // Will be executed only in IE6
                                option.scrollHeight;
                            }

                        } else {
                            option.selected = false;
                        }
                    }

                    // Force browsers to behave consistently when non-matching value is set
                    if ( !optionSet ) {
                        elem.selectedIndex = -1;
                    }

                    return options;
                }
            }
        }
    });

// Radios and checkboxes getter/setter
    jQuery.each([ "radio", "checkbox" ], function() {
        jQuery.valHooks[ this ] = {
            set: function( elem, value ) {
                if ( jQuery.isArray( value ) ) {
                    return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
                }
            }
        };
        if ( !support.checkOn ) {
            jQuery.valHooks[ this ].get = function( elem ) {
                // Support: Webkit
                // "" is returned instead of "on" if a value isn't specified
                return elem.getAttribute("value") === null ? "on" : elem.value;
            };
        }
    });




    var nodeHook, boolHook,
        attrHandle = jQuery.expr.attrHandle,
        ruseDefault = /^(?:checked|selected)$/i,
        getSetAttribute = support.getSetAttribute,
        getSetInput = support.input;

    jQuery.fn.extend({
        attr: function( name, value ) {
            return access( this, jQuery.attr, name, value, arguments.length > 1 );
        },

        removeAttr: function( name ) {
            return this.each(function() {
                jQuery.removeAttr( this, name );
            });
        }
    });

    jQuery.extend({
        attr: function( elem, name, value ) {
            var hooks, ret,
                nType = elem.nodeType;

            // don't get/set attributes on text, comment and attribute nodes
            if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
                return;
            }

            // Fallback to prop when attributes are not supported
            if ( typeof elem.getAttribute === strundefined ) {
                return jQuery.prop( elem, name, value );
            }

            // All attributes are lowercase
            // Grab necessary hook if one is defined
            if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
                name = name.toLowerCase();
                hooks = jQuery.attrHooks[ name ] ||
                    ( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
            }

            if ( value !== undefined ) {

                if ( value === null ) {
                    jQuery.removeAttr( elem, name );

                } else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
                    return ret;

                } else {
                    elem.setAttribute( name, value + "" );
                    return value;
                }

            } else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
                return ret;

            } else {
                ret = jQuery.find.attr( elem, name );

                // Non-existent attributes return null, we normalize to undefined
                return ret == null ?
                    undefined :
                    ret;
            }
        },

        removeAttr: function( elem, value ) {
            var name, propName,
                i = 0,
                attrNames = value && value.match( rnotwhite );

            if ( attrNames && elem.nodeType === 1 ) {
                while ( (name = attrNames[i++]) ) {
                    propName = jQuery.propFix[ name ] || name;

                    // Boolean attributes get special treatment (#10870)
                    if ( jQuery.expr.match.bool.test( name ) ) {
                        // Set corresponding property to false
                        if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
                            elem[ propName ] = false;
                            // Support: IE<9
                            // Also clear defaultChecked/defaultSelected (if appropriate)
                        } else {
                            elem[ jQuery.camelCase( "default-" + name ) ] =
                                elem[ propName ] = false;
                        }

                        // See #9699 for explanation of this approach (setting first, then removal)
                    } else {
                        jQuery.attr( elem, name, "" );
                    }

                    elem.removeAttribute( getSetAttribute ? name : propName );
                }
            }
        },

        attrHooks: {
            type: {
                set: function( elem, value ) {
                    if ( !support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {
                        // Setting the type on a radio button after the value resets the value in IE6-9
                        // Reset value to default in case type is set after value during creation
                        var val = elem.value;
                        elem.setAttribute( "type", value );
                        if ( val ) {
                            elem.value = val;
                        }
                        return value;
                    }
                }
            }
        }
    });

// Hook for boolean attributes
    boolHook = {
        set: function( elem, value, name ) {
            if ( value === false ) {
                // Remove boolean attributes when set to false
                jQuery.removeAttr( elem, name );
            } else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
                // IE<8 needs the *property* name
                elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );

                // Use defaultChecked and defaultSelected for oldIE
            } else {
                elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
            }

            return name;
        }
    };

// Retrieve booleans specially
    jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {

        var getter = attrHandle[ name ] || jQuery.find.attr;

        attrHandle[ name ] = getSetInput && getSetAttribute || !ruseDefault.test( name ) ?
            function( elem, name, isXML ) {
                var ret, handle;
                if ( !isXML ) {
                    // Avoid an infinite loop by temporarily removing this function from the getter
                    handle = attrHandle[ name ];
                    attrHandle[ name ] = ret;
                    ret = getter( elem, name, isXML ) != null ?
                        name.toLowerCase() :
                        null;
                    attrHandle[ name ] = handle;
                }
                return ret;
            } :
            function( elem, name, isXML ) {
                if ( !isXML ) {
                    return elem[ jQuery.camelCase( "default-" + name ) ] ?
                        name.toLowerCase() :
                        null;
                }
            };
    });

// fix oldIE attroperties
    if ( !getSetInput || !getSetAttribute ) {
        jQuery.attrHooks.value = {
            set: function( elem, value, name ) {
                if ( jQuery.nodeName( elem, "input" ) ) {
                    // Does not return so that setAttribute is also used
                    elem.defaultValue = value;
                } else {
                    // Use nodeHook if defined (#1954); otherwise setAttribute is fine
                    return nodeHook && nodeHook.set( elem, value, name );
                }
            }
        };
    }

// IE6/7 do not support getting/setting some attributes with get/setAttribute
    if ( !getSetAttribute ) {

        // Use this for any attribute in IE6/7
        // This fixes almost every IE6/7 issue
        nodeHook = {
            set: function( elem, value, name ) {
                // Set the existing or create a new attribute node
                var ret = elem.getAttributeNode( name );
                if ( !ret ) {
                    elem.setAttributeNode(
                        (ret = elem.ownerDocument.createAttribute( name ))
                    );
                }

                ret.value = value += "";

                // Break association with cloned elements by also using setAttribute (#9646)
                if ( name === "value" || value === elem.getAttribute( name ) ) {
                    return value;
                }
            }
        };

        // Some attributes are constructed with empty-string values when not defined
        attrHandle.id = attrHandle.name = attrHandle.coords =
            function( elem, name, isXML ) {
                var ret;
                if ( !isXML ) {
                    return (ret = elem.getAttributeNode( name )) && ret.value !== "" ?
                        ret.value :
                        null;
                }
            };

        // Fixing value retrieval on a button requires this module
        jQuery.valHooks.button = {
            get: function( elem, name ) {
                var ret = elem.getAttributeNode( name );
                if ( ret && ret.specified ) {
                    return ret.value;
                }
            },
            set: nodeHook.set
        };

        // Set contenteditable to false on removals(#10429)
        // Setting to empty string throws an error as an invalid value
        jQuery.attrHooks.contenteditable = {
            set: function( elem, value, name ) {
                nodeHook.set( elem, value === "" ? false : value, name );
            }
        };

        // Set width and height to auto instead of 0 on empty string( Bug #8150 )
        // This is for removals
        jQuery.each([ "width", "height" ], function( i, name ) {
            jQuery.attrHooks[ name ] = {
                set: function( elem, value ) {
                    if ( value === "" ) {
                        elem.setAttribute( name, "auto" );
                        return value;
                    }
                }
            };
        });
    }

    if ( !support.style ) {
        jQuery.attrHooks.style = {
            get: function( elem ) {
                // Return undefined in the case of empty string
                // Note: IE uppercases css property names, but if we were to .toLowerCase()
                // .cssText, that would destroy case senstitivity in URL's, like in "background"
                return elem.style.cssText || undefined;
            },
            set: function( elem, value ) {
                return ( elem.style.cssText = value + "" );
            }
        };
    }




    var rfocusable = /^(?:input|select|textarea|button|object)$/i,
        rclickable = /^(?:a|area)$/i;

    jQuery.fn.extend({
        prop: function( name, value ) {
            return access( this, jQuery.prop, name, value, arguments.length > 1 );
        },

        removeProp: function( name ) {
            name = jQuery.propFix[ name ] || name;
            return this.each(function() {
                // try/catch handles cases where IE balks (such as removing a property on window)
                try {
                    this[ name ] = undefined;
                    delete this[ name ];
                } catch( e ) {}
            });
        }
    });

    jQuery.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },

        prop: function( elem, name, value ) {
            var ret, hooks, notxml,
                nType = elem.nodeType;

            // don't get/set properties on text, comment and attribute nodes
            if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
                return;
            }

            notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

            if ( notxml ) {
                // Fix name and attach hooks
                name = jQuery.propFix[ name ] || name;
                hooks = jQuery.propHooks[ name ];
            }

            if ( value !== undefined ) {
                return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
                    ret :
                    ( elem[ name ] = value );

            } else {
                return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
                    ret :
                    elem[ name ];
            }
        },

        propHooks: {
            tabIndex: {
                get: function( elem ) {
                    // elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
                    // http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
                    // Use proper attribute retrieval(#12072)
                    var tabindex = jQuery.find.attr( elem, "tabindex" );

                    return tabindex ?
                        parseInt( tabindex, 10 ) :
                        rfocusable.test( elem.nodeName ) || rclickable.test( elem.nodeName ) && elem.href ?
                            0 :
                            -1;
                }
            }
        }
    });

// Some attributes require a special call on IE
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
    if ( !support.hrefNormalized ) {
        // href/src property should get the full normalized URL (#10299/#12915)
        jQuery.each([ "href", "src" ], function( i, name ) {
            jQuery.propHooks[ name ] = {
                get: function( elem ) {
                    return elem.getAttribute( name, 4 );
                }
            };
        });
    }

// Support: Safari, IE9+
// mis-reports the default selected property of an option
// Accessing the parent's selectedIndex property fixes it
    if ( !support.optSelected ) {
        jQuery.propHooks.selected = {
            get: function( elem ) {
                var parent = elem.parentNode;

                if ( parent ) {
                    parent.selectedIndex;

                    // Make sure that it also works with optgroups, see #5701
                    if ( parent.parentNode ) {
                        parent.parentNode.selectedIndex;
                    }
                }
                return null;
            }
        };
    }

    jQuery.each([
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
    ], function() {
        jQuery.propFix[ this.toLowerCase() ] = this;
    });

// IE6/7 call enctype encoding
    if ( !support.enctype ) {
        jQuery.propFix.enctype = "encoding";
    }




    var rclass = /[\t\r\n\f]/g;

    jQuery.fn.extend({
        addClass: function( value ) {
            var classes, elem, cur, clazz, j, finalValue,
                i = 0,
                len = this.length,
                proceed = typeof value === "string" && value;

            if ( jQuery.isFunction( value ) ) {
                return this.each(function( j ) {
                    jQuery( this ).addClass( value.call( this, j, this.className ) );
                });
            }

            if ( proceed ) {
                // The disjunction here is for better compressibility (see removeClass)
                classes = ( value || "" ).match( rnotwhite ) || [];

                for ( ; i < len; i++ ) {
                    elem = this[ i ];
                    cur = elem.nodeType === 1 && ( elem.className ?
                                ( " " + elem.className + " " ).replace( rclass, " " ) :
                                " "
                        );

                    if ( cur ) {
                        j = 0;
                        while ( (clazz = classes[j++]) ) {
                            if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
                                cur += clazz + " ";
                            }
                        }

                        // only assign if different to avoid unneeded rendering.
                        finalValue = jQuery.trim( cur );
                        if ( elem.className !== finalValue ) {
                            elem.className = finalValue;
                        }
                    }
                }
            }

            return this;
        },

        removeClass: function( value ) {
            var classes, elem, cur, clazz, j, finalValue,
                i = 0,
                len = this.length,
                proceed = arguments.length === 0 || typeof value === "string" && value;

            if ( jQuery.isFunction( value ) ) {
                return this.each(function( j ) {
                    jQuery( this ).removeClass( value.call( this, j, this.className ) );
                });
            }
            if ( proceed ) {
                classes = ( value || "" ).match( rnotwhite ) || [];

                for ( ; i < len; i++ ) {
                    elem = this[ i ];
                    // This expression is here for better compressibility (see addClass)
                    cur = elem.nodeType === 1 && ( elem.className ?
                                ( " " + elem.className + " " ).replace( rclass, " " ) :
                                ""
                        );

                    if ( cur ) {
                        j = 0;
                        while ( (clazz = classes[j++]) ) {
                            // Remove *all* instances
                            while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
                                cur = cur.replace( " " + clazz + " ", " " );
                            }
                        }

                        // only assign if different to avoid unneeded rendering.
                        finalValue = value ? jQuery.trim( cur ) : "";
                        if ( elem.className !== finalValue ) {
                            elem.className = finalValue;
                        }
                    }
                }
            }

            return this;
        },

        toggleClass: function( value, stateVal ) {
            var type = typeof value;

            if ( typeof stateVal === "boolean" && type === "string" ) {
                return stateVal ? this.addClass( value ) : this.removeClass( value );
            }

            if ( jQuery.isFunction( value ) ) {
                return this.each(function( i ) {
                    jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
                });
            }

            return this.each(function() {
                if ( type === "string" ) {
                    // toggle individual class names
                    var className,
                        i = 0,
                        self = jQuery( this ),
                        classNames = value.match( rnotwhite ) || [];

                    while ( (className = classNames[ i++ ]) ) {
                        // check each className given, space separated list
                        if ( self.hasClass( className ) ) {
                            self.removeClass( className );
                        } else {
                            self.addClass( className );
                        }
                    }

                    // Toggle whole class name
                } else if ( type === strundefined || type === "boolean" ) {
                    if ( this.className ) {
                        // store className if set
                        jQuery._data( this, "__className__", this.className );
                    }

                    // If the element has a class name or if we're passed "false",
                    // then remove the whole classname (if there was one, the above saved it).
                    // Otherwise bring back whatever was previously saved (if anything),
                    // falling back to the empty string if nothing was stored.
                    this.className = this.className || value === false ? "" : jQuery._data( this, "__className__" ) || "";
                }
            });
        },

        hasClass: function( selector ) {
            var className = " " + selector + " ",
                i = 0,
                l = this.length;
            for ( ; i < l; i++ ) {
                if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
                    return true;
                }
            }

            return false;
        }
    });




// Return jQuery for attributes-only inclusion


    jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
    "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
    "change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

        // Handle event binding
        jQuery.fn[ name ] = function( data, fn ) {
            return arguments.length > 0 ?
                this.on( name, null, data, fn ) :
                this.trigger( name );
        };
    });

    jQuery.fn.extend({
        hover: function( fnOver, fnOut ) {
            return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
        },

        bind: function( types, data, fn ) {
            return this.on( types, null, data, fn );
        },
        unbind: function( types, fn ) {
            return this.off( types, null, fn );
        },

        delegate: function( selector, types, data, fn ) {
            return this.on( types, selector, data, fn );
        },
        undelegate: function( selector, types, fn ) {
            // ( namespace ) or ( selector, types [, fn] )
            return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
        }
    });


    var nonce = jQuery.now();

    var rquery = (/\?/);



    var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;

    jQuery.parseJSON = function( data ) {
        // Attempt to parse using the native JSON parser first
        if ( window.JSON && window.JSON.parse ) {
            // Support: Android 2.3
            // Workaround failure to string-cast null input
            return window.JSON.parse( data + "" );
        }

        var requireNonComma,
            depth = null,
            str = jQuery.trim( data + "" );

        // Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
        // after removing valid tokens
        return str && !jQuery.trim( str.replace( rvalidtokens, function( token, comma, open, close ) {

            // Force termination if we see a misplaced comma
            if ( requireNonComma && comma ) {
                depth = 0;
            }

            // Perform no more replacements after returning to outermost depth
            if ( depth === 0 ) {
                return token;
            }

            // Commas must not follow "[", "{", or ","
            requireNonComma = open || comma;

            // Determine new depth
            // array/object open ("[" or "{"): depth += true - false (increment)
            // array/object close ("]" or "}"): depth += false - true (decrement)
            // other cases ("," or primitive): depth += true - true (numeric cast)
            depth += !close - !open;

            // Remove this token
            return "";
        }) ) ?
            ( Function( "return " + str ) )() :
            jQuery.error( "Invalid JSON: " + data );
    };


// Cross-browser xml parsing
    jQuery.parseXML = function( data ) {
        var xml, tmp;
        if ( !data || typeof data !== "string" ) {
            return null;
        }
        try {
            if ( window.DOMParser ) { // Standard
                tmp = new DOMParser();
                xml = tmp.parseFromString( data, "text/xml" );
            } else { // IE
                xml = new ActiveXObject( "Microsoft.XMLDOM" );
                xml.async = "false";
                xml.loadXML( data );
            }
        } catch( e ) {
            xml = undefined;
        }
        if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
            jQuery.error( "Invalid XML: " + data );
        }
        return xml;
    };


    var
    // Document location
        ajaxLocParts,
        ajaxLocation,

        rhash = /#.*$/,
        rts = /([?&])_=[^&]*/,
        rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
    // #7653, #8125, #8152: local protocol detection
        rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        rnoContent = /^(?:GET|HEAD)$/,
        rprotocol = /^\/\//,
        rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

    /* Prefilters
     * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
     * 2) These are called:
     *    - BEFORE asking for a transport
     *    - AFTER param serialization (s.data is a string if s.processData is true)
     * 3) key is the dataType
     * 4) the catchall symbol "*" can be used
     * 5) execution will start with transport dataType and THEN continue down to "*" if needed
     */
        prefilters = {},

    /* Transports bindings
     * 1) key is the dataType
     * 2) the catchall symbol "*" can be used
     * 3) selection will start with transport dataType and THEN go to "*" if needed
     */
        transports = {},

    // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
        allTypes = "*/".concat("*");

// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
    try {
        ajaxLocation = location.href;
    } catch( e ) {
        // Use the href attribute of an A element
        // since IE will modify it given document.location
        ajaxLocation = document.createElement( "a" );
        ajaxLocation.href = "";
        ajaxLocation = ajaxLocation.href;
    }

// Segment location into parts
    ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
    function addToPrefiltersOrTransports( structure ) {

        // dataTypeExpression is optional and defaults to "*"
        return function( dataTypeExpression, func ) {

            if ( typeof dataTypeExpression !== "string" ) {
                func = dataTypeExpression;
                dataTypeExpression = "*";
            }

            var dataType,
                i = 0,
                dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

            if ( jQuery.isFunction( func ) ) {
                // For each dataType in the dataTypeExpression
                while ( (dataType = dataTypes[i++]) ) {
                    // Prepend if requested
                    if ( dataType.charAt( 0 ) === "+" ) {
                        dataType = dataType.slice( 1 ) || "*";
                        (structure[ dataType ] = structure[ dataType ] || []).unshift( func );

                        // Otherwise append
                    } else {
                        (structure[ dataType ] = structure[ dataType ] || []).push( func );
                    }
                }
            }
        };
    }

// Base inspection function for prefilters and transports
    function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

        var inspected = {},
            seekingTransport = ( structure === transports );

        function inspect( dataType ) {
            var selected;
            inspected[ dataType ] = true;
            jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
                var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
                if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
                    options.dataTypes.unshift( dataTypeOrTransport );
                    inspect( dataTypeOrTransport );
                    return false;
                } else if ( seekingTransport ) {
                    return !( selected = dataTypeOrTransport );
                }
            });
            return selected;
        }

        return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
    }

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
    function ajaxExtend( target, src ) {
        var deep, key,
            flatOptions = jQuery.ajaxSettings.flatOptions || {};

        for ( key in src ) {
            if ( src[ key ] !== undefined ) {
                ( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
            }
        }
        if ( deep ) {
            jQuery.extend( true, target, deep );
        }

        return target;
    }

    /* Handles responses to an ajax request:
     * - finds the right dataType (mediates between content-type and expected dataType)
     * - returns the corresponding response
     */
    function ajaxHandleResponses( s, jqXHR, responses ) {
        var firstDataType, ct, finalDataType, type,
            contents = s.contents,
            dataTypes = s.dataTypes;

        // Remove auto dataType and get content-type in the process
        while ( dataTypes[ 0 ] === "*" ) {
            dataTypes.shift();
            if ( ct === undefined ) {
                ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
            }
        }

        // Check if we're dealing with a known content-type
        if ( ct ) {
            for ( type in contents ) {
                if ( contents[ type ] && contents[ type ].test( ct ) ) {
                    dataTypes.unshift( type );
                    break;
                }
            }
        }

        // Check to see if we have a response for the expected dataType
        if ( dataTypes[ 0 ] in responses ) {
            finalDataType = dataTypes[ 0 ];
        } else {
            // Try convertible dataTypes
            for ( type in responses ) {
                if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
                    finalDataType = type;
                    break;
                }
                if ( !firstDataType ) {
                    firstDataType = type;
                }
            }
            // Or just use first one
            finalDataType = finalDataType || firstDataType;
        }

        // If we found a dataType
        // We add the dataType to the list if needed
        // and return the corresponding response
        if ( finalDataType ) {
            if ( finalDataType !== dataTypes[ 0 ] ) {
                dataTypes.unshift( finalDataType );
            }
            return responses[ finalDataType ];
        }
    }

    /* Chain conversions given the request and the original response
     * Also sets the responseXXX fields on the jqXHR instance
     */
    function ajaxConvert( s, response, jqXHR, isSuccess ) {
        var conv2, current, conv, tmp, prev,
            converters = {},
        // Work with a copy of dataTypes in case we need to modify it for conversion
            dataTypes = s.dataTypes.slice();

        // Create converters map with lowercased keys
        if ( dataTypes[ 1 ] ) {
            for ( conv in s.converters ) {
                converters[ conv.toLowerCase() ] = s.converters[ conv ];
            }
        }

        current = dataTypes.shift();

        // Convert to each sequential dataType
        while ( current ) {

            if ( s.responseFields[ current ] ) {
                jqXHR[ s.responseFields[ current ] ] = response;
            }

            // Apply the dataFilter if provided
            if ( !prev && isSuccess && s.dataFilter ) {
                response = s.dataFilter( response, s.dataType );
            }

            prev = current;
            current = dataTypes.shift();

            if ( current ) {

                // There's only work to do if current dataType is non-auto
                if ( current === "*" ) {

                    current = prev;

                    // Convert response if prev dataType is non-auto and differs from current
                } else if ( prev !== "*" && prev !== current ) {

                    // Seek a direct converter
                    conv = converters[ prev + " " + current ] || converters[ "* " + current ];

                    // If none found, seek a pair
                    if ( !conv ) {
                        for ( conv2 in converters ) {

                            // If conv2 outputs current
                            tmp = conv2.split( " " );
                            if ( tmp[ 1 ] === current ) {

                                // If prev can be converted to accepted input
                                conv = converters[ prev + " " + tmp[ 0 ] ] ||
                                    converters[ "* " + tmp[ 0 ] ];
                                if ( conv ) {
                                    // Condense equivalence converters
                                    if ( conv === true ) {
                                        conv = converters[ conv2 ];

                                        // Otherwise, insert the intermediate dataType
                                    } else if ( converters[ conv2 ] !== true ) {
                                        current = tmp[ 0 ];
                                        dataTypes.unshift( tmp[ 1 ] );
                                    }
                                    break;
                                }
                            }
                        }
                    }

                    // Apply converter (if not an equivalence)
                    if ( conv !== true ) {

                        // Unless errors are allowed to bubble, catch and return them
                        if ( conv && s[ "throws" ] ) {
                            response = conv( response );
                        } else {
                            try {
                                response = conv( response );
                            } catch ( e ) {
                                return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
                            }
                        }
                    }
                }
            }
        }

        return { state: "success", data: response };
    }

    jQuery.extend({

        // Counter for holding the number of active queries
        active: 0,

        // Last-Modified header cache for next request
        lastModified: {},
        etag: {},

        ajaxSettings: {
            url: ajaxLocation,
            type: "GET",
            isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            /*
             timeout: 0,
             data: null,
             dataType: null,
             username: null,
             password: null,
             cache: null,
             throws: false,
             traditional: false,
             headers: {},
             */

            accepts: {
                "*": allTypes,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },

            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },

            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },

            // Data converters
            // Keys separate source (or catchall "*") and destination types with a single space
            converters: {

                // Convert anything to text
                "* text": String,

                // Text to html (true = no transformation)
                "text html": true,

                // Evaluate text as a json expression
                "text json": jQuery.parseJSON,

                // Parse text as xml
                "text xml": jQuery.parseXML
            },

            // For options that shouldn't be deep extended:
            // you can add your own custom options here if
            // and when you create one that shouldn't be
            // deep extended (see ajaxExtend)
            flatOptions: {
                url: true,
                context: true
            }
        },

        // Creates a full fledged settings object into target
        // with both ajaxSettings and settings fields.
        // If target is omitted, writes into ajaxSettings.
        ajaxSetup: function( target, settings ) {
            return settings ?

                // Building a settings object
                ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

                // Extending ajaxSettings
                ajaxExtend( jQuery.ajaxSettings, target );
        },

        ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
        ajaxTransport: addToPrefiltersOrTransports( transports ),

        // Main method
        ajax: function( url, options ) {

            // If url is an object, simulate pre-1.5 signature
            if ( typeof url === "object" ) {
                options = url;
                url = undefined;
            }

            // Force options to be an object
            options = options || {};

            var // Cross-domain detection vars
                parts,
            // Loop variable
                i,
            // URL without anti-cache param
                cacheURL,
            // Response headers as string
                responseHeadersString,
            // timeout handle
                timeoutTimer,

            // To know if global events are to be dispatched
                fireGlobals,

                transport,
            // Response headers
                responseHeaders,
            // Create the final options object
                s = jQuery.ajaxSetup( {}, options ),
            // Callbacks context
                callbackContext = s.context || s,
            // Context for global events is callbackContext if it is a DOM node or jQuery collection
                globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
                    jQuery( callbackContext ) :
                    jQuery.event,
            // Deferreds
                deferred = jQuery.Deferred(),
                completeDeferred = jQuery.Callbacks("once memory"),
            // Status-dependent callbacks
                statusCode = s.statusCode || {},
            // Headers (they are sent all at once)
                requestHeaders = {},
                requestHeadersNames = {},
            // The jqXHR state
                state = 0,
            // Default abort message
                strAbort = "canceled",
            // Fake xhr
                jqXHR = {
                    readyState: 0,

                    // Builds headers hashtable if needed
                    getResponseHeader: function( key ) {
                        var match;
                        if ( state === 2 ) {
                            if ( !responseHeaders ) {
                                responseHeaders = {};
                                while ( (match = rheaders.exec( responseHeadersString )) ) {
                                    responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
                                }
                            }
                            match = responseHeaders[ key.toLowerCase() ];
                        }
                        return match == null ? null : match;
                    },

                    // Raw string
                    getAllResponseHeaders: function() {
                        return state === 2 ? responseHeadersString : null;
                    },

                    // Caches the header
                    setRequestHeader: function( name, value ) {
                        var lname = name.toLowerCase();
                        if ( !state ) {
                            name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
                            requestHeaders[ name ] = value;
                        }
                        return this;
                    },

                    // Overrides response content-type header
                    overrideMimeType: function( type ) {
                        if ( !state ) {
                            s.mimeType = type;
                        }
                        return this;
                    },

                    // Status-dependent callbacks
                    statusCode: function( map ) {
                        var code;
                        if ( map ) {
                            if ( state < 2 ) {
                                for ( code in map ) {
                                    // Lazy-add the new callback in a way that preserves old ones
                                    statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
                                }
                            } else {
                                // Execute the appropriate callbacks
                                jqXHR.always( map[ jqXHR.status ] );
                            }
                        }
                        return this;
                    },

                    // Cancel the request
                    abort: function( statusText ) {
                        var finalText = statusText || strAbort;
                        if ( transport ) {
                            transport.abort( finalText );
                        }
                        done( 0, finalText );
                        return this;
                    }
                };

            // Attach deferreds
            deferred.promise( jqXHR ).complete = completeDeferred.add;
            jqXHR.success = jqXHR.done;
            jqXHR.error = jqXHR.fail;

            // Remove hash character (#7531: and string promotion)
            // Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
            // Handle falsy url in the settings object (#10093: consistency with old signature)
            // We also use the url parameter if available
            s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" ).replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

            // Alias method option to type as per ticket #12004
            s.type = options.method || options.type || s.method || s.type;

            // Extract dataTypes list
            s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

            // A cross-domain request is in order when we have a protocol:host:port mismatch
            if ( s.crossDomain == null ) {
                parts = rurl.exec( s.url.toLowerCase() );
                s.crossDomain = !!( parts &&
                    ( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
                    ( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
                    ( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
                );
            }

            // Convert data if not already a string
            if ( s.data && s.processData && typeof s.data !== "string" ) {
                s.data = jQuery.param( s.data, s.traditional );
            }

            // Apply prefilters
            inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

            // If request was aborted inside a prefilter, stop there
            if ( state === 2 ) {
                return jqXHR;
            }

            // We can fire global events as of now if asked to
            // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
            fireGlobals = jQuery.event && s.global;

            // Watch for a new set of requests
            if ( fireGlobals && jQuery.active++ === 0 ) {
                jQuery.event.trigger("ajaxStart");
            }

            // Uppercase the type
            s.type = s.type.toUpperCase();

            // Determine if request has content
            s.hasContent = !rnoContent.test( s.type );

            // Save the URL in case we're toying with the If-Modified-Since
            // and/or If-None-Match header later on
            cacheURL = s.url;

            // More options handling for requests with no content
            if ( !s.hasContent ) {

                // If data is available, append data to url
                if ( s.data ) {
                    cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
                    // #9682: remove data so that it's not used in an eventual retry
                    delete s.data;
                }

                // Add anti-cache in url if needed
                if ( s.cache === false ) {
                    s.url = rts.test( cacheURL ) ?

                        // If there is already a '_' parameter, set its value
                        cacheURL.replace( rts, "$1_=" + nonce++ ) :

                        // Otherwise add one to the end
                    cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
                }
            }

            // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
            if ( s.ifModified ) {
                if ( jQuery.lastModified[ cacheURL ] ) {
                    jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
                }
                if ( jQuery.etag[ cacheURL ] ) {
                    jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
                }
            }

            // Set the correct header, if data is being sent
            if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
                jqXHR.setRequestHeader( "Content-Type", s.contentType );
            }

            // Set the Accepts header for the server, depending on the dataType
            jqXHR.setRequestHeader(
                "Accept",
                s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
                s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
                    s.accepts[ "*" ]
            );

            // Check for headers option
            for ( i in s.headers ) {
                jqXHR.setRequestHeader( i, s.headers[ i ] );
            }

            // Allow custom headers/mimetypes and early abort
            if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
                // Abort if not done already and return
                return jqXHR.abort();
            }

            // aborting is no longer a cancellation
            strAbort = "abort";

            // Install callbacks on deferreds
            for ( i in { success: 1, error: 1, complete: 1 } ) {
                jqXHR[ i ]( s[ i ] );
            }

            // Get transport
            transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

            // If no transport, we auto-abort
            if ( !transport ) {
                done( -1, "No Transport" );
            } else {
                jqXHR.readyState = 1;

                // Send global event
                if ( fireGlobals ) {
                    globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
                }
                // Timeout
                if ( s.async && s.timeout > 0 ) {
                    timeoutTimer = setTimeout(function() {
                        jqXHR.abort("timeout");
                    }, s.timeout );
                }

                try {
                    state = 1;
                    transport.send( requestHeaders, done );
                } catch ( e ) {
                    // Propagate exception as error if not done
                    if ( state < 2 ) {
                        done( -1, e );
                        // Simply rethrow otherwise
                    } else {
                        throw e;
                    }
                }
            }

            // Callback for when everything is done
            function done( status, nativeStatusText, responses, headers ) {
                var isSuccess, success, error, response, modified,
                    statusText = nativeStatusText;

                // Called once
                if ( state === 2 ) {
                    return;
                }

                // State is "done" now
                state = 2;

                // Clear timeout if it exists
                if ( timeoutTimer ) {
                    clearTimeout( timeoutTimer );
                }

                // Dereference transport for early garbage collection
                // (no matter how long the jqXHR object will be used)
                transport = undefined;

                // Cache response headers
                responseHeadersString = headers || "";

                // Set readyState
                jqXHR.readyState = status > 0 ? 4 : 0;

                // Determine if successful
                isSuccess = status >= 200 && status < 300 || status === 304;

                // Get response data
                if ( responses ) {
                    response = ajaxHandleResponses( s, jqXHR, responses );
                }

                // Convert no matter what (that way responseXXX fields are always set)
                response = ajaxConvert( s, response, jqXHR, isSuccess );

                // If successful, handle type chaining
                if ( isSuccess ) {

                    // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                    if ( s.ifModified ) {
                        modified = jqXHR.getResponseHeader("Last-Modified");
                        if ( modified ) {
                            jQuery.lastModified[ cacheURL ] = modified;
                        }
                        modified = jqXHR.getResponseHeader("etag");
                        if ( modified ) {
                            jQuery.etag[ cacheURL ] = modified;
                        }
                    }

                    // if no content
                    if ( status === 204 || s.type === "HEAD" ) {
                        statusText = "nocontent";

                        // if not modified
                    } else if ( status === 304 ) {
                        statusText = "notmodified";

                        // If we have data, let's convert it
                    } else {
                        statusText = response.state;
                        success = response.data;
                        error = response.error;
                        isSuccess = !error;
                    }
                } else {
                    // We extract error from statusText
                    // then normalize statusText and status for non-aborts
                    error = statusText;
                    if ( status || !statusText ) {
                        statusText = "error";
                        if ( status < 0 ) {
                            status = 0;
                        }
                    }
                }

                // Set data for the fake xhr object
                jqXHR.status = status;
                jqXHR.statusText = ( nativeStatusText || statusText ) + "";

                // Success/Error
                if ( isSuccess ) {
                    deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
                } else {
                    deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
                }

                // Status-dependent callbacks
                jqXHR.statusCode( statusCode );
                statusCode = undefined;

                if ( fireGlobals ) {
                    globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
                        [ jqXHR, s, isSuccess ? success : error ] );
                }

                // Complete
                completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

                if ( fireGlobals ) {
                    globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
                    // Handle the global AJAX counter
                    if ( !( --jQuery.active ) ) {
                        jQuery.event.trigger("ajaxStop");
                    }
                }
            }

            return jqXHR;
        },

        getJSON: function( url, data, callback ) {
            return jQuery.get( url, data, callback, "json" );
        },

        getScript: function( url, callback ) {
            return jQuery.get( url, undefined, callback, "script" );
        }
    });

    jQuery.each( [ "get", "post" ], function( i, method ) {
        jQuery[ method ] = function( url, data, callback, type ) {
            // shift arguments if data argument was omitted
            if ( jQuery.isFunction( data ) ) {
                type = type || callback;
                callback = data;
                data = undefined;
            }

            return jQuery.ajax({
                url: url,
                type: method,
                dataType: type,
                data: data,
                success: callback
            });
        };
    });


    jQuery._evalUrl = function( url ) {
        return jQuery.ajax({
            url: url,
            type: "GET",
            dataType: "script",
            async: false,
            global: false,
            "throws": true
        });
    };


    jQuery.fn.extend({
        wrapAll: function( html ) {
            if ( jQuery.isFunction( html ) ) {
                return this.each(function(i) {
                    jQuery(this).wrapAll( html.call(this, i) );
                });
            }

            if ( this[0] ) {
                // The elements to wrap the target around
                var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);

                if ( this[0].parentNode ) {
                    wrap.insertBefore( this[0] );
                }

                wrap.map(function() {
                    var elem = this;

                    while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
                        elem = elem.firstChild;
                    }

                    return elem;
                }).append( this );
            }

            return this;
        },

        wrapInner: function( html ) {
            if ( jQuery.isFunction( html ) ) {
                return this.each(function(i) {
                    jQuery(this).wrapInner( html.call(this, i) );
                });
            }

            return this.each(function() {
                var self = jQuery( this ),
                    contents = self.contents();

                if ( contents.length ) {
                    contents.wrapAll( html );

                } else {
                    self.append( html );
                }
            });
        },

        wrap: function( html ) {
            var isFunction = jQuery.isFunction( html );

            return this.each(function(i) {
                jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
            });
        },

        unwrap: function() {
            return this.parent().each(function() {
                if ( !jQuery.nodeName( this, "body" ) ) {
                    jQuery( this ).replaceWith( this.childNodes );
                }
            }).end();
        }
    });


    jQuery.expr.filters.hidden = function( elem ) {
        // Support: Opera <= 12.12
        // Opera reports offsetWidths and offsetHeights less than zero on some elements
        return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 ||
            (!support.reliableHiddenOffsets() &&
            ((elem.style && elem.style.display) || jQuery.css( elem, "display" )) === "none");
    };

    jQuery.expr.filters.visible = function( elem ) {
        return !jQuery.expr.filters.hidden( elem );
    };




    var r20 = /%20/g,
        rbracket = /\[\]$/,
        rCRLF = /\r?\n/g,
        rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
        rsubmittable = /^(?:input|select|textarea|keygen)/i;

    function buildParams( prefix, obj, traditional, add ) {
        var name;

        if ( jQuery.isArray( obj ) ) {
            // Serialize array item.
            jQuery.each( obj, function( i, v ) {
                if ( traditional || rbracket.test( prefix ) ) {
                    // Treat each array item as a scalar.
                    add( prefix, v );

                } else {
                    // Item is non-scalar (array or object), encode its numeric index.
                    buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
                }
            });

        } else if ( !traditional && jQuery.type( obj ) === "object" ) {
            // Serialize object item.
            for ( name in obj ) {
                buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
            }

        } else {
            // Serialize scalar item.
            add( prefix, obj );
        }
    }

// Serialize an array of form elements or a set of
// key/values into a query string
    jQuery.param = function( a, traditional ) {
        var prefix,
            s = [],
            add = function( key, value ) {
                // If value is a function, invoke it and return its value
                value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
                s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
            };

        // Set traditional to true for jQuery <= 1.3.2 behavior.
        if ( traditional === undefined ) {
            traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
        }

        // If an array was passed in, assume that it is an array of form elements.
        if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
            // Serialize the form elements
            jQuery.each( a, function() {
                add( this.name, this.value );
            });

        } else {
            // If traditional, encode the "old" way (the way 1.3.2 or older
            // did it), otherwise encode params recursively.
            for ( prefix in a ) {
                buildParams( prefix, a[ prefix ], traditional, add );
            }
        }

        // Return the resulting serialization
        return s.join( "&" ).replace( r20, "+" );
    };

    jQuery.fn.extend({
        serialize: function() {
            return jQuery.param( this.serializeArray() );
        },
        serializeArray: function() {
            return this.map(function() {
                // Can add propHook for "elements" to filter or add form elements
                var elements = jQuery.prop( this, "elements" );
                return elements ? jQuery.makeArray( elements ) : this;
            })
                .filter(function() {
                    var type = this.type;
                    // Use .is(":disabled") so that fieldset[disabled] works
                    return this.name && !jQuery( this ).is( ":disabled" ) &&
                        rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
                        ( this.checked || !rcheckableType.test( type ) );
                })
                .map(function( i, elem ) {
                    var val = jQuery( this ).val();

                    return val == null ?
                        null :
                        jQuery.isArray( val ) ?
                            jQuery.map( val, function( val ) {
                                return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
                            }) :
                        { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
                }).get();
        }
    });


// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
    jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?
        // Support: IE6+
        function() {

            // XHR cannot access local files, always use ActiveX for that case
            return !this.isLocal &&

                    // Support: IE7-8
                    // oldIE XHR does not support non-RFC2616 methods (#13240)
                    // See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
                    // and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
                    // Although this check for six methods instead of eight
                    // since IE also does not support "trace" and "connect"
                /^(get|post|head|put|delete|options)$/i.test( this.type ) &&

                createStandardXHR() || createActiveXHR();
        } :
        // For all other browsers, use the standard XMLHttpRequest object
        createStandardXHR;

    var xhrId = 0,
        xhrCallbacks = {},
        xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE<10
// Open requests must be manually aborted on unload (#5280)
// See https://support.microsoft.com/kb/2856746 for more info
    if ( window.attachEvent ) {
        window.attachEvent( "onunload", function() {
            for ( var key in xhrCallbacks ) {
                xhrCallbacks[ key ]( undefined, true );
            }
        });
    }

// Determine support properties
    support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
    xhrSupported = support.ajax = !!xhrSupported;

// Create transport if the browser can provide an xhr
    if ( xhrSupported ) {

        jQuery.ajaxTransport(function( options ) {
            // Cross domain only allowed if supported through XMLHttpRequest
            if ( !options.crossDomain || support.cors ) {

                var callback;

                return {
                    send: function( headers, complete ) {
                        var i,
                            xhr = options.xhr(),
                            id = ++xhrId;

                        // Open the socket
                        xhr.open( options.type, options.url, options.async, options.username, options.password );

                        // Apply custom fields if provided
                        if ( options.xhrFields ) {
                            for ( i in options.xhrFields ) {
                                xhr[ i ] = options.xhrFields[ i ];
                            }
                        }

                        // Override mime type if needed
                        if ( options.mimeType && xhr.overrideMimeType ) {
                            xhr.overrideMimeType( options.mimeType );
                        }

                        // X-Requested-With header
                        // For cross-domain requests, seeing as conditions for a preflight are
                        // akin to a jigsaw puzzle, we simply never set it to be sure.
                        // (it can always be set on a per-request basis or even using ajaxSetup)
                        // For same-domain requests, won't change header if already provided.
                        if ( !options.crossDomain && !headers["X-Requested-With"] ) {
                            headers["X-Requested-With"] = "XMLHttpRequest";
                        }

                        // Set headers
                        for ( i in headers ) {
                            // Support: IE<9
                            // IE's ActiveXObject throws a 'Type Mismatch' exception when setting
                            // request header to a null-value.
                            //
                            // To keep consistent with other XHR implementations, cast the value
                            // to string and ignore `undefined`.
                            if ( headers[ i ] !== undefined ) {
                                xhr.setRequestHeader( i, headers[ i ] + "" );
                            }
                        }

                        // Do send the request
                        // This may raise an exception which is actually
                        // handled in jQuery.ajax (so no try/catch here)
                        xhr.send( ( options.hasContent && options.data ) || null );

                        // Listener
                        callback = function( _, isAbort ) {
                            var status, statusText, responses;

                            // Was never called and is aborted or complete
                            if ( callback && ( isAbort || xhr.readyState === 4 ) ) {
                                // Clean up
                                delete xhrCallbacks[ id ];
                                callback = undefined;
                                xhr.onreadystatechange = jQuery.noop;

                                // Abort manually if needed
                                if ( isAbort ) {
                                    if ( xhr.readyState !== 4 ) {
                                        xhr.abort();
                                    }
                                } else {
                                    responses = {};
                                    status = xhr.status;

                                    // Support: IE<10
                                    // Accessing binary-data responseText throws an exception
                                    // (#11426)
                                    if ( typeof xhr.responseText === "string" ) {
                                        responses.text = xhr.responseText;
                                    }

                                    // Firefox throws an exception when accessing
                                    // statusText for faulty cross-domain requests
                                    try {
                                        statusText = xhr.statusText;
                                    } catch( e ) {
                                        // We normalize with Webkit giving an empty statusText
                                        statusText = "";
                                    }

                                    // Filter status for non standard behaviors

                                    // If the request is local and we have data: assume a success
                                    // (success with no data won't get notified, that's the best we
                                    // can do given current implementations)
                                    if ( !status && options.isLocal && !options.crossDomain ) {
                                        status = responses.text ? 200 : 404;
                                        // IE - #1450: sometimes returns 1223 when it should be 204
                                    } else if ( status === 1223 ) {
                                        status = 204;
                                    }
                                }
                            }

                            // Call complete if needed
                            if ( responses ) {
                                complete( status, statusText, responses, xhr.getAllResponseHeaders() );
                            }
                        };

                        if ( !options.async ) {
                            // if we're in sync mode we fire the callback
                            callback();
                        } else if ( xhr.readyState === 4 ) {
                            // (IE6 & IE7) if it's in cache and has been
                            // retrieved directly we need to fire the callback
                            setTimeout( callback );
                        } else {
                            // Add to the list of active xhr callbacks
                            xhr.onreadystatechange = xhrCallbacks[ id ] = callback;
                        }
                    },

                    abort: function() {
                        if ( callback ) {
                            callback( undefined, true );
                        }
                    }
                };
            }
        });
    }

// Functions to create xhrs
    function createStandardXHR() {
        try {
            return new window.XMLHttpRequest();
        } catch( e ) {}
    }

    function createActiveXHR() {
        try {
            return new window.ActiveXObject( "Microsoft.XMLHTTP" );
        } catch( e ) {}
    }




// Install script dataType
    jQuery.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function( text ) {
                jQuery.globalEval( text );
                return text;
            }
        }
    });

// Handle cache's special case and global
    jQuery.ajaxPrefilter( "script", function( s ) {
        if ( s.cache === undefined ) {
            s.cache = false;
        }
        if ( s.crossDomain ) {
            s.type = "GET";
            s.global = false;
        }
    });

// Bind script tag hack transport
    jQuery.ajaxTransport( "script", function(s) {

        // This transport only deals with cross domain requests
        if ( s.crossDomain ) {

            var script,
                head = document.head || jQuery("head")[0] || document.documentElement;

            return {

                send: function( _, callback ) {

                    script = document.createElement("script");

                    script.async = true;

                    if ( s.scriptCharset ) {
                        script.charset = s.scriptCharset;
                    }

                    script.src = s.url;

                    // Attach handlers for all browsers
                    script.onload = script.onreadystatechange = function( _, isAbort ) {

                        if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

                            // Handle memory leak in IE
                            script.onload = script.onreadystatechange = null;

                            // Remove the script
                            if ( script.parentNode ) {
                                script.parentNode.removeChild( script );
                            }

                            // Dereference the script
                            script = null;

                            // Callback if not abort
                            if ( !isAbort ) {
                                callback( 200, "success" );
                            }
                        }
                    };

                    // Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
                    // Use native DOM manipulation to avoid our domManip AJAX trickery
                    head.insertBefore( script, head.firstChild );
                },

                abort: function() {
                    if ( script ) {
                        script.onload( undefined, true );
                    }
                }
            };
        }
    });




    var oldCallbacks = [],
        rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
    jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
            this[ callback ] = true;
            return callback;
        }
    });

// Detect, normalize options and install callbacks for jsonp requests
    jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

        var callbackName, overwritten, responseContainer,
            jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
                        "url" :
                    typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
                );

        // Handle iff the expected data type is "jsonp" or we have a parameter to set
        if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

            // Get callback name, remembering preexisting value associated with it
            callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
                s.jsonpCallback() :
                s.jsonpCallback;

            // Insert callback into url or form data
            if ( jsonProp ) {
                s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
            } else if ( s.jsonp !== false ) {
                s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
            }

            // Use data converter to retrieve json after script execution
            s.converters["script json"] = function() {
                if ( !responseContainer ) {
                    jQuery.error( callbackName + " was not called" );
                }
                return responseContainer[ 0 ];
            };

            // force json dataType
            s.dataTypes[ 0 ] = "json";

            // Install callback
            overwritten = window[ callbackName ];
            window[ callbackName ] = function() {
                responseContainer = arguments;
            };

            // Clean-up function (fires after converters)
            jqXHR.always(function() {
                // Restore preexisting value
                window[ callbackName ] = overwritten;

                // Save back as free
                if ( s[ callbackName ] ) {
                    // make sure that re-using the options doesn't screw things around
                    s.jsonpCallback = originalSettings.jsonpCallback;

                    // save the callback name for future use
                    oldCallbacks.push( callbackName );
                }

                // Call if it was a function and we have a response
                if ( responseContainer && jQuery.isFunction( overwritten ) ) {
                    overwritten( responseContainer[ 0 ] );
                }

                responseContainer = overwritten = undefined;
            });

            // Delegate to script
            return "script";
        }
    });




// data: string of html
// context (optional): If specified, the fragment will be created in this context, defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
    jQuery.parseHTML = function( data, context, keepScripts ) {
        if ( !data || typeof data !== "string" ) {
            return null;
        }
        if ( typeof context === "boolean" ) {
            keepScripts = context;
            context = false;
        }
        context = context || document;

        var parsed = rsingleTag.exec( data ),
            scripts = !keepScripts && [];

        // Single tag
        if ( parsed ) {
            return [ context.createElement( parsed[1] ) ];
        }

        parsed = jQuery.buildFragment( [ data ], context, scripts );

        if ( scripts && scripts.length ) {
            jQuery( scripts ).remove();
        }

        return jQuery.merge( [], parsed.childNodes );
    };


// Keep a copy of the old load method
    var _load = jQuery.fn.load;

    /**
     * Load a url into a page
     */
    jQuery.fn.load = function( url, params, callback ) {
        if ( typeof url !== "string" && _load ) {
            return _load.apply( this, arguments );
        }

        var selector, response, type,
            self = this,
            off = url.indexOf(" ");

        if ( off >= 0 ) {
            selector = jQuery.trim( url.slice( off, url.length ) );
            url = url.slice( 0, off );
        }

        // If it's a function
        if ( jQuery.isFunction( params ) ) {

            // We assume that it's the callback
            callback = params;
            params = undefined;

            // Otherwise, build a param string
        } else if ( params && typeof params === "object" ) {
            type = "POST";
        }

        // If we have elements to modify, make the request
        if ( self.length > 0 ) {
            jQuery.ajax({
                url: url,

                // if "type" variable is undefined, then "GET" method will be used
                type: type,
                dataType: "html",
                data: params
            }).done(function( responseText ) {

                // Save response for use in complete callback
                response = arguments;

                self.html( selector ?

                    // If a selector was specified, locate the right elements in a dummy div
                    // Exclude scripts to avoid IE 'Permission Denied' errors
                    jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

                    // Otherwise use the full result
                    responseText );

            }).complete( callback && function( jqXHR, status ) {
                    self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
                });
        }

        return this;
    };




// Attach a bunch of functions for handling common AJAX events
    jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
        jQuery.fn[ type ] = function( fn ) {
            return this.on( type, fn );
        };
    });




    jQuery.expr.filters.animated = function( elem ) {
        return jQuery.grep(jQuery.timers, function( fn ) {
            return elem === fn.elem;
        }).length;
    };





    var docElem = window.document.documentElement;

    /**
     * Gets a window from an element
     */
    function getWindow( elem ) {
        return jQuery.isWindow( elem ) ?
            elem :
            elem.nodeType === 9 ?
            elem.defaultView || elem.parentWindow :
                false;
    }

    jQuery.offset = {
        setOffset: function( elem, options, i ) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
                position = jQuery.css( elem, "position" ),
                curElem = jQuery( elem ),
                props = {};

            // set position first, in-case top/left are set even on static elem
            if ( position === "static" ) {
                elem.style.position = "relative";
            }

            curOffset = curElem.offset();
            curCSSTop = jQuery.css( elem, "top" );
            curCSSLeft = jQuery.css( elem, "left" );
            calculatePosition = ( position === "absolute" || position === "fixed" ) &&
                jQuery.inArray("auto", [ curCSSTop, curCSSLeft ] ) > -1;

            // need to be able to calculate position if either top or left is auto and position is either absolute or fixed
            if ( calculatePosition ) {
                curPosition = curElem.position();
                curTop = curPosition.top;
                curLeft = curPosition.left;
            } else {
                curTop = parseFloat( curCSSTop ) || 0;
                curLeft = parseFloat( curCSSLeft ) || 0;
            }

            if ( jQuery.isFunction( options ) ) {
                options = options.call( elem, i, curOffset );
            }

            if ( options.top != null ) {
                props.top = ( options.top - curOffset.top ) + curTop;
            }
            if ( options.left != null ) {
                props.left = ( options.left - curOffset.left ) + curLeft;
            }

            if ( "using" in options ) {
                options.using.call( elem, props );
            } else {
                curElem.css( props );
            }
        }
    };

    jQuery.fn.extend({
        offset: function( options ) {
            if ( arguments.length ) {
                return options === undefined ?
                    this :
                    this.each(function( i ) {
                        jQuery.offset.setOffset( this, options, i );
                    });
            }

            var docElem, win,
                box = { top: 0, left: 0 },
                elem = this[ 0 ],
                doc = elem && elem.ownerDocument;

            if ( !doc ) {
                return;
            }

            docElem = doc.documentElement;

            // Make sure it's not a disconnected DOM node
            if ( !jQuery.contains( docElem, elem ) ) {
                return box;
            }

            // If we don't have gBCR, just use 0,0 rather than error
            // BlackBerry 5, iOS 3 (original iPhone)
            if ( typeof elem.getBoundingClientRect !== strundefined ) {
                box = elem.getBoundingClientRect();
            }
            win = getWindow( doc );
            return {
                top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
                left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
            };
        },

        position: function() {
            if ( !this[ 0 ] ) {
                return;
            }

            var offsetParent, offset,
                parentOffset = { top: 0, left: 0 },
                elem = this[ 0 ];

            // fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
            if ( jQuery.css( elem, "position" ) === "fixed" ) {
                // we assume that getBoundingClientRect is available when computed position is fixed
                offset = elem.getBoundingClientRect();
            } else {
                // Get *real* offsetParent
                offsetParent = this.offsetParent();

                // Get correct offsets
                offset = this.offset();
                if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
                    parentOffset = offsetParent.offset();
                }

                // Add offsetParent borders
                parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
                parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
            }

            // Subtract parent offsets and element margins
            // note: when an element has margin: auto the offsetLeft and marginLeft
            // are the same in Safari causing offset.left to incorrectly be 0
            return {
                top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
                left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true)
            };
        },

        offsetParent: function() {
            return this.map(function() {
                var offsetParent = this.offsetParent || docElem;

                while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
                    offsetParent = offsetParent.offsetParent;
                }
                return offsetParent || docElem;
            });
        }
    });

// Create scrollLeft and scrollTop methods
    jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
        var top = /Y/.test( prop );

        jQuery.fn[ method ] = function( val ) {
            return access( this, function( elem, method, val ) {
                var win = getWindow( elem );

                if ( val === undefined ) {
                    return win ? (prop in win) ? win[ prop ] :
                        win.document.documentElement[ method ] :
                        elem[ method ];
                }

                if ( win ) {
                    win.scrollTo(
                        !top ? val : jQuery( win ).scrollLeft(),
                        top ? val : jQuery( win ).scrollTop()
                    );

                } else {
                    elem[ method ] = val;
                }
            }, method, val, arguments.length, null );
        };
    });

// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// getComputedStyle returns percent when specified for top/left/bottom/right
// rather than make the css module depend on the offset module, we just check for it here
    jQuery.each( [ "top", "left" ], function( i, prop ) {
        jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
            function( elem, computed ) {
                if ( computed ) {
                    computed = curCSS( elem, prop );
                    // if curCSS returns percentage, fallback to offset
                    return rnumnonpx.test( computed ) ?
                    jQuery( elem ).position()[ prop ] + "px" :
                        computed;
                }
            }
        );
    });


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
    jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
        jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
            // margin is only for outerHeight, outerWidth
            jQuery.fn[ funcName ] = function( margin, value ) {
                var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
                    extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

                return access( this, function( elem, type, value ) {
                    var doc;

                    if ( jQuery.isWindow( elem ) ) {
                        // As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
                        // isn't a whole lot we can do. See pull request at this URL for discussion:
                        // https://github.com/jquery/jquery/pull/764
                        return elem.document.documentElement[ "client" + name ];
                    }

                    // Get document width or height
                    if ( elem.nodeType === 9 ) {
                        doc = elem.documentElement;

                        // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
                        // unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
                        return Math.max(
                            elem.body[ "scroll" + name ], doc[ "scroll" + name ],
                            elem.body[ "offset" + name ], doc[ "offset" + name ],
                            doc[ "client" + name ]
                        );
                    }

                    return value === undefined ?
                        // Get width or height on the element, requesting but not forcing parseFloat
                        jQuery.css( elem, type, extra ) :

                        // Set width or height on the element
                        jQuery.style( elem, type, value, extra );
                }, type, chainable ? margin : undefined, chainable, null );
            };
        });
    });


// The number of elements contained in the matched element set
    jQuery.fn.size = function() {
        return this.length;
    };

    jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

    if ( typeof define === "function" && define.amd ) {
        define( "jquery", [], function() {
            return jQuery;
        });
    }




    var
    // Map over jQuery in case of overwrite
        _jQuery = window.jQuery,

    // Map over the $ in case of overwrite
        _$ = window.$;

    jQuery.noConflict = function( deep ) {
        if ( window.$ === jQuery ) {
            window.$ = _$;
        }

        if ( deep && window.jQuery === jQuery ) {
            window.jQuery = _jQuery;
        }

        return jQuery;
    };

// Expose jQuery and $ identifiers, even in
// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
    if ( typeof noGlobal === strundefined ) {
        window.jQuery = window.$ = jQuery;
    }




    return jQuery;

}));

/*!
 * Select2 4.0.0
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function (jQuery) {
    // This is needed so we can catch the AMD loader configuration and use it
    // The inner file should be wrapped (by `banner.start.js`) in a function that
    // returns the AMD loader references.
    var S2 =
        (function () {
            // Restore the Select2 AMD loader so it can be used
            // Needed mostly in the language files, where the loader is not inserted
            if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
                var S2 = jQuery.fn.select2.amd;
            }
            var S2;(function () { if (!S2 || !S2.requirejs) {
                if (!S2) { S2 = {}; } else { require = S2; }
                /**
                 * @license almond 0.2.9 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
                 * Available via the MIT or new BSD license.
                 * see: http://github.com/jrburke/almond for details
                 */
//Going sloppy to avoid 'use strict' string cost, but strict practices should
//be followed.
                /*jslint sloppy: true */
                /*global setTimeout: false */

                var requirejs, require, define;
                (function (undef) {
                    var main, req, makeMap, handlers,
                        defined = {},
                        waiting = {},
                        config = {},
                        defining = {},
                        hasOwn = Object.prototype.hasOwnProperty,
                        aps = [].slice,
                        jsSuffixRegExp = /\.js$/;

                    function hasProp(obj, prop) {
                        return hasOwn.call(obj, prop);
                    }

                    /**
                     * Given a relative module name, like ./something, normalize it to
                     * a real name that can be mapped to a path.
                     * @param {String} name the relative name
                     * @param {String} baseName a real name that the name arg is relative
                     * to.
                     * @returns {String} normalized name
                     */
                    function normalize(name, baseName) {
                        var nameParts, nameSegment, mapValue, foundMap, lastIndex,
                            foundI, foundStarMap, starI, i, j, part,
                            baseParts = baseName && baseName.split("/"),
                            map = config.map,
                            starMap = (map && map['*']) || {};

                        //Adjust any relative paths.
                        if (name && name.charAt(0) === ".") {
                            //If have a base name, try to normalize against it,
                            //otherwise, assume it is a top-level require that will
                            //be relative to baseUrl in the end.
                            if (baseName) {
                                //Convert baseName to array, and lop off the last part,
                                //so that . matches that "directory" and not name of the baseName's
                                //module. For instance, baseName of "one/two/three", maps to
                                //"one/two/three.js", but we want the directory, "one/two" for
                                //this normalization.
                                baseParts = baseParts.slice(0, baseParts.length - 1);
                                name = name.split('/');
                                lastIndex = name.length - 1;

                                // Node .js allowance:
                                if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                                    name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
                                }

                                name = baseParts.concat(name);

                                //start trimDots
                                for (i = 0; i < name.length; i += 1) {
                                    part = name[i];
                                    if (part === ".") {
                                        name.splice(i, 1);
                                        i -= 1;
                                    } else if (part === "..") {
                                        if (i === 1 && (name[2] === '..' || name[0] === '..')) {
                                            //End of the line. Keep at least one non-dot
                                            //path segment at the front so it can be mapped
                                            //correctly to disk. Otherwise, there is likely
                                            //no path mapping for a path starting with '..'.
                                            //This can still fail, but catches the most reasonable
                                            //uses of ..
                                            break;
                                        } else if (i > 0) {
                                            name.splice(i - 1, 2);
                                            i -= 2;
                                        }
                                    }
                                }
                                //end trimDots

                                name = name.join("/");
                            } else if (name.indexOf('./') === 0) {
                                // No baseName, so this is ID is resolved relative
                                // to baseUrl, pull off the leading dot.
                                name = name.substring(2);
                            }
                        }

                        //Apply map config if available.
                        if ((baseParts || starMap) && map) {
                            nameParts = name.split('/');

                            for (i = nameParts.length; i > 0; i -= 1) {
                                nameSegment = nameParts.slice(0, i).join("/");

                                if (baseParts) {
                                    //Find the longest baseName segment match in the config.
                                    //So, do joins on the biggest to smallest lengths of baseParts.
                                    for (j = baseParts.length; j > 0; j -= 1) {
                                        mapValue = map[baseParts.slice(0, j).join('/')];

                                        //baseName segment has  config, find if it has one for
                                        //this name.
                                        if (mapValue) {
                                            mapValue = mapValue[nameSegment];
                                            if (mapValue) {
                                                //Match, update name to the new value.
                                                foundMap = mapValue;
                                                foundI = i;
                                                break;
                                            }
                                        }
                                    }
                                }

                                if (foundMap) {
                                    break;
                                }

                                //Check for a star map match, but just hold on to it,
                                //if there is a shorter segment match later in a matching
                                //config, then favor over this star map.
                                if (!foundStarMap && starMap && starMap[nameSegment]) {
                                    foundStarMap = starMap[nameSegment];
                                    starI = i;
                                }
                            }

                            if (!foundMap && foundStarMap) {
                                foundMap = foundStarMap;
                                foundI = starI;
                            }

                            if (foundMap) {
                                nameParts.splice(0, foundI, foundMap);
                                name = nameParts.join('/');
                            }
                        }

                        return name;
                    }

                    function makeRequire(relName, forceSync) {
                        return function () {
                            //A version of a require function that passes a moduleName
                            //value for items that may need to
                            //look up paths relative to the moduleName
                            return req.apply(undef, aps.call(arguments, 0).concat([relName, forceSync]));
                        };
                    }

                    function makeNormalize(relName) {
                        return function (name) {
                            return normalize(name, relName);
                        };
                    }

                    function makeLoad(depName) {
                        return function (value) {
                            defined[depName] = value;
                        };
                    }

                    function callDep(name) {
                        if (hasProp(waiting, name)) {
                            var args = waiting[name];
                            delete waiting[name];
                            defining[name] = true;
                            main.apply(undef, args);
                        }

                        if (!hasProp(defined, name) && !hasProp(defining, name)) {
                            throw new Error('No ' + name);
                        }
                        return defined[name];
                    }

                    //Turns a plugin!resource to [plugin, resource]
                    //with the plugin being undefined if the name
                    //did not have a plugin prefix.
                    function splitPrefix(name) {
                        var prefix,
                            index = name ? name.indexOf('!') : -1;
                        if (index > -1) {
                            prefix = name.substring(0, index);
                            name = name.substring(index + 1, name.length);
                        }
                        return [prefix, name];
                    }

                    /**
                     * Makes a name map, normalizing the name, and using a plugin
                     * for normalization if necessary. Grabs a ref to plugin
                     * too, as an optimization.
                     */
                    makeMap = function (name, relName) {
                        var plugin,
                            parts = splitPrefix(name),
                            prefix = parts[0];

                        name = parts[1];

                        if (prefix) {
                            prefix = normalize(prefix, relName);
                            plugin = callDep(prefix);
                        }

                        //Normalize according
                        if (prefix) {
                            if (plugin && plugin.normalize) {
                                name = plugin.normalize(name, makeNormalize(relName));
                            } else {
                                name = normalize(name, relName);
                            }
                        } else {
                            name = normalize(name, relName);
                            parts = splitPrefix(name);
                            prefix = parts[0];
                            name = parts[1];
                            if (prefix) {
                                plugin = callDep(prefix);
                            }
                        }

                        //Using ridiculous property names for space reasons
                        return {
                            f: prefix ? prefix + '!' + name : name, //fullName
                            n: name,
                            pr: prefix,
                            p: plugin
                        };
                    };

                    function makeConfig(name) {
                        return function () {
                            return (config && config.config && config.config[name]) || {};
                        };
                    }

                    handlers = {
                        require: function (name) {
                            return makeRequire(name);
                        },
                        exports: function (name) {
                            var e = defined[name];
                            if (typeof e !== 'undefined') {
                                return e;
                            } else {
                                return (defined[name] = {});
                            }
                        },
                        module: function (name) {
                            return {
                                id: name,
                                uri: '',
                                exports: defined[name],
                                config: makeConfig(name)
                            };
                        }
                    };

                    main = function (name, deps, callback, relName) {
                        var cjsModule, depName, ret, map, i,
                            args = [],
                            callbackType = typeof callback,
                            usingExports;

                        //Use name if no relName
                        relName = relName || name;

                        //Call the callback to define the module, if necessary.
                        if (callbackType === 'undefined' || callbackType === 'function') {
                            //Pull out the defined dependencies and pass the ordered
                            //values to the callback.
                            //Default to [require, exports, module] if no deps
                            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
                            for (i = 0; i < deps.length; i += 1) {
                                map = makeMap(deps[i], relName);
                                depName = map.f;

                                //Fast path CommonJS standard dependencies.
                                if (depName === "require") {
                                    args[i] = handlers.require(name);
                                } else if (depName === "exports") {
                                    //CommonJS module spec 1.1
                                    args[i] = handlers.exports(name);
                                    usingExports = true;
                                } else if (depName === "module") {
                                    //CommonJS module spec 1.1
                                    cjsModule = args[i] = handlers.module(name);
                                } else if (hasProp(defined, depName) ||
                                    hasProp(waiting, depName) ||
                                    hasProp(defining, depName)) {
                                    args[i] = callDep(depName);
                                } else if (map.p) {
                                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                                    args[i] = defined[depName];
                                } else {
                                    throw new Error(name + ' missing ' + depName);
                                }
                            }

                            ret = callback ? callback.apply(defined[name], args) : undefined;

                            if (name) {
                                //If setting exports via "module" is in play,
                                //favor that over return value and exports. After that,
                                //favor a non-undefined return value over exports use.
                                if (cjsModule && cjsModule.exports !== undef &&
                                    cjsModule.exports !== defined[name]) {
                                    defined[name] = cjsModule.exports;
                                } else if (ret !== undef || !usingExports) {
                                    //Use the return value from the function.
                                    defined[name] = ret;
                                }
                            }
                        } else if (name) {
                            //May just be an object definition for the module. Only
                            //worry about defining if have a module name.
                            defined[name] = callback;
                        }
                    };

                    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
                        if (typeof deps === "string") {
                            if (handlers[deps]) {
                                //callback in this case is really relName
                                return handlers[deps](callback);
                            }
                            //Just return the module wanted. In this scenario, the
                            //deps arg is the module name, and second arg (if passed)
                            //is just the relName.
                            //Normalize module name, if it contains . or ..
                            return callDep(makeMap(deps, callback).f);
                        } else if (!deps.splice) {
                            //deps is a config object, not an array.
                            config = deps;
                            if (config.deps) {
                                req(config.deps, config.callback);
                            }
                            if (!callback) {
                                return;
                            }

                            if (callback.splice) {
                                //callback is an array, which means it is a dependency list.
                                //Adjust args if there are dependencies
                                deps = callback;
                                callback = relName;
                                relName = null;
                            } else {
                                deps = undef;
                            }
                        }

                        //Support require(['a'])
                        callback = callback || function () {};

                        //If relName is a function, it is an errback handler,
                        //so remove it.
                        if (typeof relName === 'function') {
                            relName = forceSync;
                            forceSync = alt;
                        }

                        //Simulate async callback;
                        if (forceSync) {
                            main(undef, deps, callback, relName);
                        } else {
                            //Using a non-zero value because of concern for what old browsers
                            //do, and latest browsers "upgrade" to 4 if lower value is used:
                            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
                            //If want a value immediately, use require('id') instead -- something
                            //that works in almond on the global level, but not guaranteed and
                            //unlikely to work in other AMD implementations.
                            setTimeout(function () {
                                main(undef, deps, callback, relName);
                            }, 4);
                        }

                        return req;
                    };

                    /**
                     * Just drops the config on the floor, but returns req in case
                     * the config return value is used.
                     */
                    req.config = function (cfg) {
                        return req(cfg);
                    };

                    /**
                     * Expose module registry for debugging and tooling
                     */
                    requirejs._defined = defined;

                    define = function (name, deps, callback) {

                        //This module may not have dependencies
                        if (!deps.splice) {
                            //deps is not an array, so probably means
                            //an object literal or factory function for
                            //the value. Adjust args.
                            callback = deps;
                            deps = [];
                        }

                        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
                            waiting[name] = [name, deps, callback];
                        }
                    };

                    define.amd = {
                        jQuery: true
                    };
                }());

                S2.requirejs = requirejs;S2.require = require;S2.define = define;
            }
            }());
            S2.define("almond", function(){});

            /* global jQuery:false, $:false */
            S2.define('jquery',[],function () {
                var _$ = jQuery || $;

                if (_$ == null && console && console.error) {
                    console.error(
                        'Select2: An instance of jQuery or a jQuery-compatible library was not ' +
                        'found. Make sure that you are including jQuery before Select2 on your ' +
                        'web page.'
                    );
                }

                return _$;
            });

            S2.define('select2/utils',[
                'jquery'
            ], function ($) {
                var Utils = {};

                Utils.Extend = function (ChildClass, SuperClass) {
                    var __hasProp = {}.hasOwnProperty;

                    function BaseConstructor () {
                        this.constructor = ChildClass;
                    }

                    for (var key in SuperClass) {
                        if (__hasProp.call(SuperClass, key)) {
                            ChildClass[key] = SuperClass[key];
                        }
                    }

                    BaseConstructor.prototype = SuperClass.prototype;
                    ChildClass.prototype = new BaseConstructor();
                    ChildClass.__super__ = SuperClass.prototype;

                    return ChildClass;
                };

                function getMethods (theClass) {
                    var proto = theClass.prototype;

                    var methods = [];

                    for (var methodName in proto) {
                        var m = proto[methodName];

                        if (typeof m !== 'function') {
                            continue;
                        }

                        if (methodName === 'constructor') {
                            continue;
                        }

                        methods.push(methodName);
                    }

                    return methods;
                }

                Utils.Decorate = function (SuperClass, DecoratorClass) {
                    var decoratedMethods = getMethods(DecoratorClass);
                    var superMethods = getMethods(SuperClass);

                    function DecoratedClass () {
                        var unshift = Array.prototype.unshift;

                        var argCount = DecoratorClass.prototype.constructor.length;

                        var calledConstructor = SuperClass.prototype.constructor;

                        if (argCount > 0) {
                            unshift.call(arguments, SuperClass.prototype.constructor);

                            calledConstructor = DecoratorClass.prototype.constructor;
                        }

                        calledConstructor.apply(this, arguments);
                    }

                    DecoratorClass.displayName = SuperClass.displayName;

                    function ctr () {
                        this.constructor = DecoratedClass;
                    }

                    DecoratedClass.prototype = new ctr();

                    for (var m = 0; m < superMethods.length; m++) {
                        var superMethod = superMethods[m];

                        DecoratedClass.prototype[superMethod] =
                            SuperClass.prototype[superMethod];
                    }

                    var calledMethod = function (methodName) {
                        // Stub out the original method if it's not decorating an actual method
                        var originalMethod = function () {};

                        if (methodName in DecoratedClass.prototype) {
                            originalMethod = DecoratedClass.prototype[methodName];
                        }

                        var decoratedMethod = DecoratorClass.prototype[methodName];

                        return function () {
                            var unshift = Array.prototype.unshift;

                            unshift.call(arguments, originalMethod);

                            return decoratedMethod.apply(this, arguments);
                        };
                    };

                    for (var d = 0; d < decoratedMethods.length; d++) {
                        var decoratedMethod = decoratedMethods[d];

                        DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);
                    }

                    return DecoratedClass;
                };

                var Observable = function () {
                    this.listeners = {};
                };

                Observable.prototype.on = function (event, callback) {
                    this.listeners = this.listeners || {};

                    if (event in this.listeners) {
                        this.listeners[event].push(callback);
                    } else {
                        this.listeners[event] = [callback];
                    }
                };

                Observable.prototype.trigger = function (event) {
                    var slice = Array.prototype.slice;

                    this.listeners = this.listeners || {};

                    if (event in this.listeners) {
                        this.invoke(this.listeners[event], slice.call(arguments, 1));
                    }

                    if ('*' in this.listeners) {
                        this.invoke(this.listeners['*'], arguments);
                    }
                };

                Observable.prototype.invoke = function (listeners, params) {
                    for (var i = 0, len = listeners.length; i < len; i++) {
                        listeners[i].apply(this, params);
                    }
                };

                Utils.Observable = Observable;

                Utils.generateChars = function (length) {
                    var chars = '';

                    for (var i = 0; i < length; i++) {
                        var randomChar = Math.floor(Math.random() * 36);
                        chars += randomChar.toString(36);
                    }

                    return chars;
                };

                Utils.bind = function (func, context) {
                    return function () {
                        func.apply(context, arguments);
                    };
                };

                Utils._convertData = function (data) {
                    for (var originalKey in data) {
                        var keys = originalKey.split('-');

                        var dataLevel = data;

                        if (keys.length === 1) {
                            continue;
                        }

                        for (var k = 0; k < keys.length; k++) {
                            var key = keys[k];

                            // Lowercase the first letter
                            // By default, dash-separated becomes camelCase
                            key = key.substring(0, 1).toLowerCase() + key.substring(1);

                            if (!(key in dataLevel)) {
                                dataLevel[key] = {};
                            }

                            if (k == keys.length - 1) {
                                dataLevel[key] = data[originalKey];
                            }

                            dataLevel = dataLevel[key];
                        }

                        delete data[originalKey];
                    }

                    return data;
                };

                Utils.hasScroll = function (index, el) {
                    // Adapted from the function created by @ShadowScripter
                    // and adapted by @BillBarry on the Stack Exchange Code Review website.
                    // The original code can be found at
                    // http://codereview.stackexchange.com/q/13338
                    // and was designed to be used with the Sizzle selector engine.

                    var $el = $(el);
                    var overflowX = el.style.overflowX;
                    var overflowY = el.style.overflowY;

                    //Check both x and y declarations
                    if (overflowX === overflowY &&
                        (overflowY === 'hidden' || overflowY === 'visible')) {
                        return false;
                    }

                    if (overflowX === 'scroll' || overflowY === 'scroll') {
                        return true;
                    }

                    return ($el.innerHeight() < el.scrollHeight ||
                    $el.innerWidth() < el.scrollWidth);
                };

                Utils.escapeMarkup = function (markup) {
                    var replaceMap = {
                        '\\': '&#92;',
                        '&': '&amp;',
                        '<': '&lt;',
                        '>': '&gt;',
                        '"': '&quot;',
                        '\'': '&#39;',
                        '/': '&#47;'
                    };

                    // Do not try to escape the markup if it's not a string
                    if (typeof markup !== 'string') {
                        return markup;
                    }

                    return String(markup).replace(/[&<>"'\/\\]/g, function (match) {
                        return replaceMap[match];
                    });
                };

                // Append an array of jQuery nodes to a given element.
                Utils.appendMany = function ($element, $nodes) {
                    // jQuery 1.7.x does not support $.fn.append() with an array
                    // Fall back to a jQuery object collection using $.fn.add()
                    if ($.fn.jquery.substr(0, 3) === '1.7') {
                        var $jqNodes = $();

                        $.map($nodes, function (node) {
                            $jqNodes = $jqNodes.add(node);
                        });

                        $nodes = $jqNodes;
                    }

                    $element.append($nodes);
                };

                return Utils;
            });

            S2.define('select2/results',[
                'jquery',
                './utils'
            ], function ($, Utils) {
                function Results ($element, options, dataAdapter) {
                    this.$element = $element;
                    this.data = dataAdapter;
                    this.options = options;

                    Results.__super__.constructor.call(this);
                }

                Utils.Extend(Results, Utils.Observable);

                Results.prototype.render = function () {
                    var $results = $(
                        '<ul class="select2-results__options" role="tree"></ul>'
                    );

                    if (this.options.get('multiple')) {
                        $results.attr('aria-multiselectable', 'true');
                    }

                    this.$results = $results;

                    return $results;
                };

                Results.prototype.clear = function () {
                    this.$results.empty();
                };

                Results.prototype.displayMessage = function (params) {
                    var escapeMarkup = this.options.get('escapeMarkup');

                    this.clear();
                    this.hideLoading();

                    var $message = $(
                        '<li role="treeitem" class="select2-results__option"></li>'
                    );

                    var message = this.options.get('translations').get(params.message);

                    $message.append(
                        escapeMarkup(
                            message(params.args)
                        )
                    );

                    this.$results.append($message);
                };

                Results.prototype.append = function (data) {
                    this.hideLoading();

                    var $options = [];

                    if (data.results == null || data.results.length === 0) {
                        if (this.$results.children().length === 0) {
                            this.trigger('results:message', {
                                message: 'noResults'
                            });
                        }

                        return;
                    }

                    data.results = this.sort(data.results);

                    for (var d = 0; d < data.results.length; d++) {
                        var item = data.results[d];

                        var $option = this.option(item);

                        $options.push($option);
                    }

                    this.$results.append($options);
                };

                Results.prototype.position = function ($results, $dropdown) {
                    var $resultsContainer = $dropdown.find('.select2-results');
                    $resultsContainer.append($results);
                };

                Results.prototype.sort = function (data) {
                    var sorter = this.options.get('sorter');

                    return sorter(data);
                };

                Results.prototype.setClasses = function () {
                    var self = this;

                    this.data.current(function (selected) {
                        var selectedIds = $.map(selected, function (s) {
                            return s.id.toString();
                        });

                        var $options = self.$results
                            .find('.select2-results__option[aria-selected]');

                        $options.each(function () {
                            var $option = $(this);

                            var item = $.data(this, 'data');

                            // id needs to be converted to a string when comparing
                            var id = '' + item.id;

                            if ((item.element != null && item.element.selected) ||
                                (item.element == null && $.inArray(id, selectedIds) > -1)) {
                                $option.attr('aria-selected', 'true');
                            } else {
                                $option.attr('aria-selected', 'false');
                            }
                        });

                        var $selected = $options.filter('[aria-selected=true]');

                        // Check if there are any selected options
                        if ($selected.length > 0) {
                            // If there are selected options, highlight the first
                            $selected.first().trigger('mouseenter');
                        } else {
                            // If there are no selected options, highlight the first option
                            // in the dropdown
                            $options.first().trigger('mouseenter');
                        }
                    });
                };

                Results.prototype.showLoading = function (params) {
                    this.hideLoading();

                    var loadingMore = this.options.get('translations').get('searching');

                    var loading = {
                        disabled: true,
                        loading: true,
                        text: loadingMore(params)
                    };
                    var $loading = this.option(loading);
                    $loading.className += ' loading-results';

                    this.$results.prepend($loading);
                };

                Results.prototype.hideLoading = function () {
                    this.$results.find('.loading-results').remove();
                };

                Results.prototype.option = function (data) {
                    var option = document.createElement('li');
                    option.className = 'select2-results__option';

                    var attrs = {
                        'role': 'treeitem',
                        'aria-selected': 'false'
                    };

                    if (data.disabled) {
                        delete attrs['aria-selected'];
                        attrs['aria-disabled'] = 'true';
                    }

                    if (data.id == null) {
                        delete attrs['aria-selected'];
                    }

                    if (data._resultId != null) {
                        option.id = data._resultId;
                    }

                    if (data.title) {
                        option.title = data.title;
                    }

                    if (data.children) {
                        attrs.role = 'group';
                        attrs['aria-label'] = data.text;
                        delete attrs['aria-selected'];
                    }

                    for (var attr in attrs) {
                        var val = attrs[attr];

                        option.setAttribute(attr, val);
                    }

                    if (data.children) {
                        var $option = $(option);

                        var label = document.createElement('strong');
                        label.className = 'select2-results__group';

                        var $label = $(label);
                        this.template(data, label);

                        var $children = [];

                        for (var c = 0; c < data.children.length; c++) {
                            var child = data.children[c];

                            var $child = this.option(child);

                            $children.push($child);
                        }

                        var $childrenContainer = $('<ul></ul>', {
                            'class': 'select2-results__options select2-results__options--nested'
                        });

                        $childrenContainer.append($children);

                        $option.append(label);
                        $option.append($childrenContainer);
                    } else {
                        this.template(data, option);
                    }

                    $.data(option, 'data', data);

                    return option;
                };

                Results.prototype.bind = function (container, $container) {
                    var self = this;

                    var id = container.id + '-results';

                    this.$results.attr('id', id);

                    container.on('results:all', function (params) {
                        self.clear();
                        self.append(params.data);

                        if (container.isOpen()) {
                            self.setClasses();
                        }
                    });

                    container.on('results:append', function (params) {
                        self.append(params.data);

                        if (container.isOpen()) {
                            self.setClasses();
                        }
                    });

                    container.on('query', function (params) {
                        self.showLoading(params);
                    });

                    container.on('select', function () {
                        if (!container.isOpen()) {
                            return;
                        }

                        self.setClasses();
                    });

                    container.on('unselect', function () {
                        if (!container.isOpen()) {
                            return;
                        }

                        self.setClasses();
                    });

                    container.on('open', function () {
                        // When the dropdown is open, aria-expended="true"
                        self.$results.attr('aria-expanded', 'true');
                        self.$results.attr('aria-hidden', 'false');

                        self.setClasses();
                        self.ensureHighlightVisible();
                    });

                    container.on('close', function () {
                        // When the dropdown is closed, aria-expended="false"
                        self.$results.attr('aria-expanded', 'false');
                        self.$results.attr('aria-hidden', 'true');
                        self.$results.removeAttr('aria-activedescendant');
                    });

                    container.on('results:toggle', function () {
                        var $highlighted = self.getHighlightedResults();

                        if ($highlighted.length === 0) {
                            return;
                        }

                        $highlighted.trigger('mouseup');
                    });

                    container.on('results:select', function () {
                        var $highlighted = self.getHighlightedResults();

                        if ($highlighted.length === 0) {
                            return;
                        }

                        var data = $highlighted.data('data');

                        if ($highlighted.attr('aria-selected') == 'true') {
                            self.trigger('close');
                        } else {
                            self.trigger('select', {
                                data: data
                            });
                        }
                    });

                    container.on('results:previous', function () {
                        var $highlighted = self.getHighlightedResults();

                        var $options = self.$results.find('[aria-selected]');

                        var currentIndex = $options.index($highlighted);

                        // If we are already at te top, don't move further
                        if (currentIndex === 0) {
                            return;
                        }

                        var nextIndex = currentIndex - 1;

                        // If none are highlighted, highlight the first
                        if ($highlighted.length === 0) {
                            nextIndex = 0;
                        }

                        var $next = $options.eq(nextIndex);

                        $next.trigger('mouseenter');

                        var currentOffset = self.$results.offset().top;
                        var nextTop = $next.offset().top;
                        var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);

                        if (nextIndex === 0) {
                            self.$results.scrollTop(0);
                        } else if (nextTop - currentOffset < 0) {
                            self.$results.scrollTop(nextOffset);
                        }
                    });

                    container.on('results:next', function () {
                        var $highlighted = self.getHighlightedResults();

                        var $options = self.$results.find('[aria-selected]');

                        var currentIndex = $options.index($highlighted);

                        var nextIndex = currentIndex + 1;

                        // If we are at the last option, stay there
                        if (nextIndex >= $options.length) {
                            return;
                        }

                        var $next = $options.eq(nextIndex);

                        $next.trigger('mouseenter');

                        var currentOffset = self.$results.offset().top +
                            self.$results.outerHeight(false);
                        var nextBottom = $next.offset().top + $next.outerHeight(false);
                        var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;

                        if (nextIndex === 0) {
                            self.$results.scrollTop(0);
                        } else if (nextBottom > currentOffset) {
                            self.$results.scrollTop(nextOffset);
                        }
                    });

                    container.on('results:focus', function (params) {
                        params.element.addClass('select2-results__option--highlighted');
                    });

                    container.on('results:message', function (params) {
                        self.displayMessage(params);
                    });

                    if ($.fn.mousewheel) {
                        this.$results.on('mousewheel', function (e) {
                            var top = self.$results.scrollTop();

                            var bottom = (
                                self.$results.get(0).scrollHeight -
                                self.$results.scrollTop() +
                                e.deltaY
                            );

                            var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;
                            var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();

                            if (isAtTop) {
                                self.$results.scrollTop(0);

                                e.preventDefault();
                                e.stopPropagation();
                            } else if (isAtBottom) {
                                self.$results.scrollTop(
                                    self.$results.get(0).scrollHeight - self.$results.height()
                                );

                                e.preventDefault();
                                e.stopPropagation();
                            }
                        });
                    }

                    this.$results.on('mouseup', '.select2-results__option[aria-selected]',
                        function (evt) {
                            var $this = $(this);

                            var data = $this.data('data');

                            if ($this.attr('aria-selected') === 'true') {
                                if (self.options.get('multiple')) {
                                    self.trigger('unselect', {
                                        originalEvent: evt,
                                        data: data
                                    });
                                } else {
                                    self.trigger('close');
                                }

                                return;
                            }

                            self.trigger('select', {
                                originalEvent: evt,
                                data: data
                            });
                        });

                    this.$results.on('mouseenter', '.select2-results__option[aria-selected]',
                        function (evt) {
                            var data = $(this).data('data');

                            self.getHighlightedResults()
                                .removeClass('select2-results__option--highlighted');

                            self.trigger('results:focus', {
                                data: data,
                                element: $(this)
                            });
                        });
                };

                Results.prototype.getHighlightedResults = function () {
                    var $highlighted = this.$results
                        .find('.select2-results__option--highlighted');

                    return $highlighted;
                };

                Results.prototype.destroy = function () {
                    this.$results.remove();
                };

                Results.prototype.ensureHighlightVisible = function () {
                    var $highlighted = this.getHighlightedResults();

                    if ($highlighted.length === 0) {
                        return;
                    }

                    var $options = this.$results.find('[aria-selected]');

                    var currentIndex = $options.index($highlighted);

                    var currentOffset = this.$results.offset().top;
                    var nextTop = $highlighted.offset().top;
                    var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);

                    var offsetDelta = nextTop - currentOffset;
                    nextOffset -= $highlighted.outerHeight(false) * 2;

                    if (currentIndex <= 2) {
                        this.$results.scrollTop(0);
                    } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {
                        this.$results.scrollTop(nextOffset);
                    }
                };

                Results.prototype.template = function (result, container) {
                    var template = this.options.get('templateResult');
                    var escapeMarkup = this.options.get('escapeMarkup');

                    var content = template(result);

                    if (content == null) {
                        container.style.display = 'none';
                    } else if (typeof content === 'string') {
                        container.innerHTML = escapeMarkup(content);
                    } else {
                        $(container).append(content);
                    }
                };

                return Results;
            });

            S2.define('select2/keys',[

            ], function () {
                var KEYS = {
                    BACKSPACE: 8,
                    TAB: 9,
                    ENTER: 13,
                    SHIFT: 16,
                    CTRL: 17,
                    ALT: 18,
                    ESC: 27,
                    SPACE: 32,
                    PAGE_UP: 33,
                    PAGE_DOWN: 34,
                    END: 35,
                    HOME: 36,
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    DOWN: 40,
                    DELETE: 46
                };

                return KEYS;
            });

            S2.define('select2/selection/base',[
                'jquery',
                '../utils',
                '../keys'
            ], function ($, Utils, KEYS) {
                function BaseSelection ($element, options) {
                    this.$element = $element;
                    this.options = options;

                    BaseSelection.__super__.constructor.call(this);
                }

                Utils.Extend(BaseSelection, Utils.Observable);

                BaseSelection.prototype.render = function () {
                    var $selection = $(
                        '<span class="select2-selection" role="combobox" ' +
                        'aria-autocomplete="list" aria-haspopup="true" aria-expanded="false">' +
                        '</span>'
                    );

                    this._tabindex = 0;

                    if (this.$element.data('old-tabindex') != null) {
                        this._tabindex = this.$element.data('old-tabindex');
                    } else if (this.$element.attr('tabindex') != null) {
                        this._tabindex = this.$element.attr('tabindex');
                    }

                    $selection.attr('title', this.$element.attr('title'));
                    $selection.attr('tabindex', this._tabindex);

                    this.$selection = $selection;

                    return $selection;
                };

                BaseSelection.prototype.bind = function (container, $container) {
                    var self = this;

                    var id = container.id + '-container';
                    var resultsId = container.id + '-results';

                    this.container = container;

                    this.$selection.on('focus', function (evt) {
                        self.trigger('focus', evt);
                    });

                    this.$selection.on('blur', function (evt) {
                        self._handleBlur(evt);
                    });

                    this.$selection.on('keydown', function (evt) {
                        self.trigger('keypress', evt);

                        if (evt.which === KEYS.SPACE) {
                            evt.preventDefault();
                        }
                    });

                    container.on('results:focus', function (params) {
                        self.$selection.attr('aria-activedescendant', params.data._resultId);
                    });

                    container.on('selection:update', function (params) {
                        self.update(params.data);
                    });

                    container.on('open', function () {
                        // When the dropdown is open, aria-expanded="true"
                        self.$selection.attr('aria-expanded', 'true');
                        self.$selection.attr('aria-owns', resultsId);

                        self._attachCloseHandler(container);
                    });

                    container.on('close', function () {
                        // When the dropdown is closed, aria-expanded="false"
                        self.$selection.attr('aria-expanded', 'false');
                        self.$selection.removeAttr('aria-activedescendant');
                        self.$selection.removeAttr('aria-owns');

                        self.$selection.focus();

                        self._detachCloseHandler(container);
                    });

                    container.on('enable', function () {
                        self.$selection.attr('tabindex', self._tabindex);
                    });

                    container.on('disable', function () {
                        self.$selection.attr('tabindex', '-1');
                    });
                };

                BaseSelection.prototype._handleBlur = function (evt) {
                    var self = this;

                    // This needs to be delayed as the actve element is the body when the tab
                    // key is pressed, possibly along with others.
                    window.setTimeout(function () {
                        // Don't trigger `blur` if the focus is still in the selection
                        if (
                            (document.activeElement == self.$selection[0]) ||
                            ($.contains(self.$selection[0], document.activeElement))
                        ) {
                            return;
                        }

                        self.trigger('blur', evt);
                    }, 1);
                };

                BaseSelection.prototype._attachCloseHandler = function (container) {
                    var self = this;

                    $(document.body).on('mousedown.select2.' + container.id, function (e) {
                        var $target = $(e.target);

                        var $select = $target.closest('.select2');

                        var $all = $('.select2.select2-container--open');

                        $all.each(function () {
                            var $this = $(this);

                            if (this == $select[0]) {
                                return;
                            }

                            var $element = $this.data('element');

                            $element.select2('close');
                        });
                    });
                };

                BaseSelection.prototype._detachCloseHandler = function (container) {
                    $(document.body).off('mousedown.select2.' + container.id);
                };

                BaseSelection.prototype.position = function ($selection, $container) {
                    var $selectionContainer = $container.find('.selection');
                    $selectionContainer.append($selection);
                };

                BaseSelection.prototype.destroy = function () {
                    this._detachCloseHandler(this.container);
                };

                BaseSelection.prototype.update = function (data) {
                    throw new Error('The `update` method must be defined in child classes.');
                };

                return BaseSelection;
            });

            S2.define('select2/selection/single',[
                'jquery',
                './base',
                '../utils',
                '../keys'
            ], function ($, BaseSelection, Utils, KEYS) {
                function SingleSelection () {
                    SingleSelection.__super__.constructor.apply(this, arguments);
                }

                Utils.Extend(SingleSelection, BaseSelection);

                SingleSelection.prototype.render = function () {
                    var $selection = SingleSelection.__super__.render.call(this);

                    $selection.addClass('select2-selection--single');

                    $selection.html(
                        '<span class="select2-selection__rendered"></span>' +
                        '<span class="select2-selection__arrow" role="presentation">' +
                        '<b role="presentation"></b>' +
                        '</span>'
                    );

                    return $selection;
                };

                SingleSelection.prototype.bind = function (container, $container) {
                    var self = this;

                    SingleSelection.__super__.bind.apply(this, arguments);

                    var id = container.id + '-container';

                    this.$selection.find('.select2-selection__rendered').attr('id', id);
                    this.$selection.attr('aria-labelledby', id);

                    this.$selection.on('mousedown', function (evt) {
                        // Only respond to left clicks
                        if (evt.which !== 1) {
                            return;
                        }

                        self.trigger('toggle', {
                            originalEvent: evt
                        });
                    });

                    this.$selection.on('focus', function (evt) {
                        // User focuses on the container
                    });

                    this.$selection.on('blur', function (evt) {
                        // User exits the container
                    });

                    container.on('selection:update', function (params) {
                        self.update(params.data);
                    });
                };

                SingleSelection.prototype.clear = function () {
                    this.$selection.find('.select2-selection__rendered').empty();
                };

                SingleSelection.prototype.display = function (data, container) {
                    var template = this.options.get('templateSelection');
                    var escapeMarkup = this.options.get('escapeMarkup');

                    return escapeMarkup(template(data, container));
                };

                SingleSelection.prototype.selectionContainer = function () {
                    return $('<span></span>');
                };

                SingleSelection.prototype.update = function (data) {
                    if (data.length === 0) {
                        this.clear();
                        return;
                    }

                    var selection = data[0];

                    var $rendered = this.$selection.find('.select2-selection__rendered');
                    var formatted = this.display(selection, $rendered);

                    $rendered.empty().append(formatted);
                    $rendered.prop('title', selection.title || selection.text);
                };

                return SingleSelection;
            });

            S2.define('select2/selection/multiple',[
                'jquery',
                './base',
                '../utils'
            ], function ($, BaseSelection, Utils) {
                function MultipleSelection ($element, options) {
                    MultipleSelection.__super__.constructor.apply(this, arguments);
                }

                Utils.Extend(MultipleSelection, BaseSelection);

                MultipleSelection.prototype.render = function () {
                    var $selection = MultipleSelection.__super__.render.call(this);

                    $selection.addClass('select2-selection--multiple');

                    $selection.html(
                        '<ul class="select2-selection__rendered"></ul>'
                    );

                    return $selection;
                };

                MultipleSelection.prototype.bind = function (container, $container) {
                    var self = this;

                    MultipleSelection.__super__.bind.apply(this, arguments);

                    this.$selection.on('click', function (evt) {
                        self.trigger('toggle', {
                            originalEvent: evt
                        });
                    });

                    this.$selection.on('click', '.select2-selection__choice__remove',
                        function (evt) {
                            var $remove = $(this);
                            var $selection = $remove.parent();

                            var data = $selection.data('data');

                            self.trigger('unselect', {
                                originalEvent: evt,
                                data: data
                            });
                        });
                };

                MultipleSelection.prototype.clear = function () {
                    this.$selection.find('.select2-selection__rendered').empty();
                };

                MultipleSelection.prototype.display = function (data, container) {
                    var template = this.options.get('templateSelection');
                    var escapeMarkup = this.options.get('escapeMarkup');

                    return escapeMarkup(template(data, container));
                };

                MultipleSelection.prototype.selectionContainer = function () {
                    var $container = $(
                        '<li class="select2-selection__choice">' +
                        '<span class="select2-selection__choice__remove" role="presentation">' +
                        '&times;' +
                        '</span>' +
                        '</li>'
                    );

                    return $container;
                };

                MultipleSelection.prototype.update = function (data) {
                    this.clear();

                    if (data.length === 0) {
                        return;
                    }

                    var $selections = [];

                    for (var d = 0; d < data.length; d++) {
                        var selection = data[d];

                        var $selection = this.selectionContainer();
                        var formatted = this.display(selection, $selection);

                        $selection.append(formatted);
                        $selection.prop('title', selection.title || selection.text);

                        $selection.data('data', selection);

                        $selections.push($selection);
                    }

                    var $rendered = this.$selection.find('.select2-selection__rendered');

                    Utils.appendMany($rendered, $selections);
                };

                return MultipleSelection;
            });

            S2.define('select2/selection/placeholder',[
                '../utils'
            ], function (Utils) {
                function Placeholder (decorated, $element, options) {
                    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

                    decorated.call(this, $element, options);
                }

                Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {
                    if (typeof placeholder === 'string') {
                        placeholder = {
                            id: '',
                            text: placeholder
                        };
                    }

                    return placeholder;
                };

                Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {
                    var $placeholder = this.selectionContainer();

                    $placeholder.html(this.display(placeholder));
                    $placeholder.addClass('select2-selection__placeholder')
                        .removeClass('select2-selection__choice');

                    return $placeholder;
                };

                Placeholder.prototype.update = function (decorated, data) {
                    var singlePlaceholder = (
                        data.length == 1 && data[0].id != this.placeholder.id
                    );
                    var multipleSelections = data.length > 1;

                    if (multipleSelections || singlePlaceholder) {
                        return decorated.call(this, data);
                    }

                    this.clear();

                    var $placeholder = this.createPlaceholder(this.placeholder);

                    this.$selection.find('.select2-selection__rendered').append($placeholder);
                };

                return Placeholder;
            });

            S2.define('select2/selection/allowClear',[
                'jquery',
                '../keys'
            ], function ($, KEYS) {
                function AllowClear () { }

                AllowClear.prototype.bind = function (decorated, container, $container) {
                    var self = this;

                    decorated.call(this, container, $container);

                    if (this.placeholder == null) {
                        if (this.options.get('debug') && window.console && console.error) {
                            console.error(
                                'Select2: The `allowClear` option should be used in combination ' +
                                'with the `placeholder` option.'
                            );
                        }
                    }

                    this.$selection.on('mousedown', '.select2-selection__clear',
                        function (evt) {
                            self._handleClear(evt);
                        });

                    container.on('keypress', function (evt) {
                        self._handleKeyboardClear(evt, container);
                    });
                };

                AllowClear.prototype._handleClear = function (_, evt) {
                    // Ignore the event if it is disabled
                    if (this.options.get('disabled')) {
                        return;
                    }

                    var $clear = this.$selection.find('.select2-selection__clear');

                    // Ignore the event if nothing has been selected
                    if ($clear.length === 0) {
                        return;
                    }

                    evt.stopPropagation();

                    var data = $clear.data('data');

                    for (var d = 0; d < data.length; d++) {
                        var unselectData = {
                            data: data[d]
                        };

                        // Trigger the `unselect` event, so people can prevent it from being
                        // cleared.
                        this.trigger('unselect', unselectData);

                        // If the event was prevented, don't clear it out.
                        if (unselectData.prevented) {
                            return;
                        }
                    }

                    this.$element.val(this.placeholder.id).trigger('change');

                    this.trigger('toggle');
                };

                AllowClear.prototype._handleKeyboardClear = function (_, evt, container) {
                    if (container.isOpen()) {
                        return;
                    }

                    if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {
                        this._handleClear(evt);
                    }
                };

                AllowClear.prototype.update = function (decorated, data) {
                    decorated.call(this, data);

                    if (this.$selection.find('.select2-selection__placeholder').length > 0 ||
                        data.length === 0) {
                        return;
                    }

                    var $remove = $(
                        '<span class="select2-selection__clear">' +
                        '&times;' +
                        '</span>'
                    );
                    $remove.data('data', data);

                    this.$selection.find('.select2-selection__rendered').prepend($remove);
                };

                return AllowClear;
            });

            S2.define('select2/selection/search',[
                'jquery',
                '../utils',
                '../keys'
            ], function ($, Utils, KEYS) {
                function Search (decorated, $element, options) {
                    decorated.call(this, $element, options);
                }

                Search.prototype.render = function (decorated) {
                    var $search = $(
                        '<li class="select2-search select2-search--inline">' +
                        '<input class="select2-search__field" type="search" tabindex="-1"' +
                        ' autocomplete="off" autocorrect="off" autocapitalize="off"' +
                        ' spellcheck="false" role="textbox" />' +
                        '</li>'
                    );

                    this.$searchContainer = $search;
                    this.$search = $search.find('input');

                    var $rendered = decorated.call(this);

                    this._transferTabIndex();

                    return $rendered;
                };

                Search.prototype.bind = function (decorated, container, $container) {
                    var self = this;

                    decorated.call(this, container, $container);

                    container.on('open', function () {
                        self.$search.trigger('focus');
                    });

                    container.on('close', function () {
                        self.$search.val('');
                        self.$search.trigger('focus');
                    });

                    container.on('enable', function () {
                        self.$search.prop('disabled', false);

                        self._transferTabIndex();
                    });

                    container.on('disable', function () {
                        self.$search.prop('disabled', true);
                    });

                    container.on('focus', function (evt) {
                        self.$search.trigger('focus');
                    });

                    this.$selection.on('focusin', '.select2-search--inline', function (evt) {
                        self.trigger('focus', evt);
                    });

                    this.$selection.on('focusout', '.select2-search--inline', function (evt) {
                        self._handleBlur(evt);
                    });

                    this.$selection.on('keydown', '.select2-search--inline', function (evt) {
                        evt.stopPropagation();

                        self.trigger('keypress', evt);

                        self._keyUpPrevented = evt.isDefaultPrevented();

                        var key = evt.which;

                        if (key === KEYS.BACKSPACE && self.$search.val() === '') {
                            var $previousChoice = self.$searchContainer
                                .prev('.select2-selection__choice');

                            if ($previousChoice.length > 0) {
                                var item = $previousChoice.data('data');

                                self.searchRemoveChoice(item);

                                evt.preventDefault();
                            }
                        }
                    });

                    // Workaround for browsers which do not support the `input` event
                    // This will prevent double-triggering of events for browsers which support
                    // both the `keyup` and `input` events.
                    this.$selection.on('input', '.select2-search--inline', function (evt) {
                        // Unbind the duplicated `keyup` event
                        self.$selection.off('keyup.search');
                    });

                    this.$selection.on('keyup.search input', '.select2-search--inline',
                        function (evt) {
                            var key = evt.which;

                            // We can freely ignore events from modifier keys
                            if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {
                                return;
                            }

                            // Tabbing will be handled during the `keydown` phase
                            if (key == KEYS.TAB) {
                                return;
                            }

                            self.handleSearch(evt);
                        });
                };

                /**
                 * This method will transfer the tabindex attribute from the rendered
                 * selection to the search box. This allows for the search box to be used as
                 * the primary focus instead of the selection container.
                 *
                 * @private
                 */
                Search.prototype._transferTabIndex = function (decorated) {
                    this.$search.attr('tabindex', this.$selection.attr('tabindex'));
                    this.$selection.attr('tabindex', '-1');
                };

                Search.prototype.createPlaceholder = function (decorated, placeholder) {
                    this.$search.attr('placeholder', placeholder.text);
                };

                Search.prototype.update = function (decorated, data) {
                    var searchHadFocus = this.$search[0] == document.activeElement;

                    this.$search.attr('placeholder', '');

                    decorated.call(this, data);

                    this.$selection.find('.select2-selection__rendered')
                        .append(this.$searchContainer);

                    this.resizeSearch();
                    if (searchHadFocus) {
                        this.$search.focus();
                    }
                };

                Search.prototype.handleSearch = function () {
                    this.resizeSearch();

                    if (!this._keyUpPrevented) {
                        var input = this.$search.val();

                        this.trigger('query', {
                            term: input
                        });
                    }

                    this._keyUpPrevented = false;
                };

                Search.prototype.searchRemoveChoice = function (decorated, item) {
                    this.trigger('unselect', {
                        data: item
                    });

                    this.trigger('open');

                    this.$search.val(item.text + ' ');
                };

                Search.prototype.resizeSearch = function () {
                    this.$search.css('width', '25px');

                    var width = '';

                    if (this.$search.attr('placeholder') !== '') {
                        width = this.$selection.find('.select2-selection__rendered').innerWidth();
                    } else {
                        var minimumWidth = this.$search.val().length + 1;

                        width = (minimumWidth * 0.75) + 'em';
                    }

                    this.$search.css('width', width);
                };

                return Search;
            });

            S2.define('select2/selection/eventRelay',[
                'jquery'
            ], function ($) {
                function EventRelay () { }

                EventRelay.prototype.bind = function (decorated, container, $container) {
                    var self = this;
                    var relayEvents = [
                        'open', 'opening',
                        'close', 'closing',
                        'select', 'selecting',
                        'unselect', 'unselecting'
                    ];

                    var preventableEvents = ['opening', 'closing', 'selecting', 'unselecting'];

                    decorated.call(this, container, $container);

                    container.on('*', function (name, params) {
                        // Ignore events that should not be relayed
                        if ($.inArray(name, relayEvents) === -1) {
                            return;
                        }

                        // The parameters should always be an object
                        params = params || {};

                        // Generate the jQuery event for the Select2 event
                        var evt = $.Event('select2:' + name, {
                            params: params
                        });

                        self.$element.trigger(evt);

                        // Only handle preventable events if it was one
                        if ($.inArray(name, preventableEvents) === -1) {
                            return;
                        }

                        params.prevented = evt.isDefaultPrevented();
                    });
                };

                return EventRelay;
            });

            S2.define('select2/translation',[
                'jquery',
                'require'
            ], function ($, require) {
                function Translation (dict) {
                    this.dict = dict || {};
                }

                Translation.prototype.all = function () {
                    return this.dict;
                };

                Translation.prototype.get = function (key) {
                    return this.dict[key];
                };

                Translation.prototype.extend = function (translation) {
                    this.dict = $.extend({}, translation.all(), this.dict);
                };

                // Static functions

                Translation._cache = {};

                Translation.loadPath = function (path) {
                    if (!(path in Translation._cache)) {
                        var translations = require(path);

                        Translation._cache[path] = translations;
                    }

                    return new Translation(Translation._cache[path]);
                };

                return Translation;
            });

            S2.define('select2/diacritics',[

            ], function () {
                var diacritics = {
                    '\u24B6': 'A',
                    '\uFF21': 'A',
                    '\u00C0': 'A',
                    '\u00C1': 'A',
                    '\u00C2': 'A',
                    '\u1EA6': 'A',
                    '\u1EA4': 'A',
                    '\u1EAA': 'A',
                    '\u1EA8': 'A',
                    '\u00C3': 'A',
                    '\u0100': 'A',
                    '\u0102': 'A',
                    '\u1EB0': 'A',
                    '\u1EAE': 'A',
                    '\u1EB4': 'A',
                    '\u1EB2': 'A',
                    '\u0226': 'A',
                    '\u01E0': 'A',
                    '\u00C4': 'A',
                    '\u01DE': 'A',
                    '\u1EA2': 'A',
                    '\u00C5': 'A',
                    '\u01FA': 'A',
                    '\u01CD': 'A',
                    '\u0200': 'A',
                    '\u0202': 'A',
                    '\u1EA0': 'A',
                    '\u1EAC': 'A',
                    '\u1EB6': 'A',
                    '\u1E00': 'A',
                    '\u0104': 'A',
                    '\u023A': 'A',
                    '\u2C6F': 'A',
                    '\uA732': 'AA',
                    '\u00C6': 'AE',
                    '\u01FC': 'AE',
                    '\u01E2': 'AE',
                    '\uA734': 'AO',
                    '\uA736': 'AU',
                    '\uA738': 'AV',
                    '\uA73A': 'AV',
                    '\uA73C': 'AY',
                    '\u24B7': 'B',
                    '\uFF22': 'B',
                    '\u1E02': 'B',
                    '\u1E04': 'B',
                    '\u1E06': 'B',
                    '\u0243': 'B',
                    '\u0182': 'B',
                    '\u0181': 'B',
                    '\u24B8': 'C',
                    '\uFF23': 'C',
                    '\u0106': 'C',
                    '\u0108': 'C',
                    '\u010A': 'C',
                    '\u010C': 'C',
                    '\u00C7': 'C',
                    '\u1E08': 'C',
                    '\u0187': 'C',
                    '\u023B': 'C',
                    '\uA73E': 'C',
                    '\u24B9': 'D',
                    '\uFF24': 'D',
                    '\u1E0A': 'D',
                    '\u010E': 'D',
                    '\u1E0C': 'D',
                    '\u1E10': 'D',
                    '\u1E12': 'D',
                    '\u1E0E': 'D',
                    '\u0110': 'D',
                    '\u018B': 'D',
                    '\u018A': 'D',
                    '\u0189': 'D',
                    '\uA779': 'D',
                    '\u01F1': 'DZ',
                    '\u01C4': 'DZ',
                    '\u01F2': 'Dz',
                    '\u01C5': 'Dz',
                    '\u24BA': 'E',
                    '\uFF25': 'E',
                    '\u00C8': 'E',
                    '\u00C9': 'E',
                    '\u00CA': 'E',
                    '\u1EC0': 'E',
                    '\u1EBE': 'E',
                    '\u1EC4': 'E',
                    '\u1EC2': 'E',
                    '\u1EBC': 'E',
                    '\u0112': 'E',
                    '\u1E14': 'E',
                    '\u1E16': 'E',
                    '\u0114': 'E',
                    '\u0116': 'E',
                    '\u00CB': 'E',
                    '\u1EBA': 'E',
                    '\u011A': 'E',
                    '\u0204': 'E',
                    '\u0206': 'E',
                    '\u1EB8': 'E',
                    '\u1EC6': 'E',
                    '\u0228': 'E',
                    '\u1E1C': 'E',
                    '\u0118': 'E',
                    '\u1E18': 'E',
                    '\u1E1A': 'E',
                    '\u0190': 'E',
                    '\u018E': 'E',
                    '\u24BB': 'F',
                    '\uFF26': 'F',
                    '\u1E1E': 'F',
                    '\u0191': 'F',
                    '\uA77B': 'F',
                    '\u24BC': 'G',
                    '\uFF27': 'G',
                    '\u01F4': 'G',
                    '\u011C': 'G',
                    '\u1E20': 'G',
                    '\u011E': 'G',
                    '\u0120': 'G',
                    '\u01E6': 'G',
                    '\u0122': 'G',
                    '\u01E4': 'G',
                    '\u0193': 'G',
                    '\uA7A0': 'G',
                    '\uA77D': 'G',
                    '\uA77E': 'G',
                    '\u24BD': 'H',
                    '\uFF28': 'H',
                    '\u0124': 'H',
                    '\u1E22': 'H',
                    '\u1E26': 'H',
                    '\u021E': 'H',
                    '\u1E24': 'H',
                    '\u1E28': 'H',
                    '\u1E2A': 'H',
                    '\u0126': 'H',
                    '\u2C67': 'H',
                    '\u2C75': 'H',
                    '\uA78D': 'H',
                    '\u24BE': 'I',
                    '\uFF29': 'I',
                    '\u00CC': 'I',
                    '\u00CD': 'I',
                    '\u00CE': 'I',
                    '\u0128': 'I',
                    '\u012A': 'I',
                    '\u012C': 'I',
                    '\u0130': 'I',
                    '\u00CF': 'I',
                    '\u1E2E': 'I',
                    '\u1EC8': 'I',
                    '\u01CF': 'I',
                    '\u0208': 'I',
                    '\u020A': 'I',
                    '\u1ECA': 'I',
                    '\u012E': 'I',
                    '\u1E2C': 'I',
                    '\u0197': 'I',
                    '\u24BF': 'J',
                    '\uFF2A': 'J',
                    '\u0134': 'J',
                    '\u0248': 'J',
                    '\u24C0': 'K',
                    '\uFF2B': 'K',
                    '\u1E30': 'K',
                    '\u01E8': 'K',
                    '\u1E32': 'K',
                    '\u0136': 'K',
                    '\u1E34': 'K',
                    '\u0198': 'K',
                    '\u2C69': 'K',
                    '\uA740': 'K',
                    '\uA742': 'K',
                    '\uA744': 'K',
                    '\uA7A2': 'K',
                    '\u24C1': 'L',
                    '\uFF2C': 'L',
                    '\u013F': 'L',
                    '\u0139': 'L',
                    '\u013D': 'L',
                    '\u1E36': 'L',
                    '\u1E38': 'L',
                    '\u013B': 'L',
                    '\u1E3C': 'L',
                    '\u1E3A': 'L',
                    '\u0141': 'L',
                    '\u023D': 'L',
                    '\u2C62': 'L',
                    '\u2C60': 'L',
                    '\uA748': 'L',
                    '\uA746': 'L',
                    '\uA780': 'L',
                    '\u01C7': 'LJ',
                    '\u01C8': 'Lj',
                    '\u24C2': 'M',
                    '\uFF2D': 'M',
                    '\u1E3E': 'M',
                    '\u1E40': 'M',
                    '\u1E42': 'M',
                    '\u2C6E': 'M',
                    '\u019C': 'M',
                    '\u24C3': 'N',
                    '\uFF2E': 'N',
                    '\u01F8': 'N',
                    '\u0143': 'N',
                    '\u00D1': 'N',
                    '\u1E44': 'N',
                    '\u0147': 'N',
                    '\u1E46': 'N',
                    '\u0145': 'N',
                    '\u1E4A': 'N',
                    '\u1E48': 'N',
                    '\u0220': 'N',
                    '\u019D': 'N',
                    '\uA790': 'N',
                    '\uA7A4': 'N',
                    '\u01CA': 'NJ',
                    '\u01CB': 'Nj',
                    '\u24C4': 'O',
                    '\uFF2F': 'O',
                    '\u00D2': 'O',
                    '\u00D3': 'O',
                    '\u00D4': 'O',
                    '\u1ED2': 'O',
                    '\u1ED0': 'O',
                    '\u1ED6': 'O',
                    '\u1ED4': 'O',
                    '\u00D5': 'O',
                    '\u1E4C': 'O',
                    '\u022C': 'O',
                    '\u1E4E': 'O',
                    '\u014C': 'O',
                    '\u1E50': 'O',
                    '\u1E52': 'O',
                    '\u014E': 'O',
                    '\u022E': 'O',
                    '\u0230': 'O',
                    '\u00D6': 'O',
                    '\u022A': 'O',
                    '\u1ECE': 'O',
                    '\u0150': 'O',
                    '\u01D1': 'O',
                    '\u020C': 'O',
                    '\u020E': 'O',
                    '\u01A0': 'O',
                    '\u1EDC': 'O',
                    '\u1EDA': 'O',
                    '\u1EE0': 'O',
                    '\u1EDE': 'O',
                    '\u1EE2': 'O',
                    '\u1ECC': 'O',
                    '\u1ED8': 'O',
                    '\u01EA': 'O',
                    '\u01EC': 'O',
                    '\u00D8': 'O',
                    '\u01FE': 'O',
                    '\u0186': 'O',
                    '\u019F': 'O',
                    '\uA74A': 'O',
                    '\uA74C': 'O',
                    '\u01A2': 'OI',
                    '\uA74E': 'OO',
                    '\u0222': 'OU',
                    '\u24C5': 'P',
                    '\uFF30': 'P',
                    '\u1E54': 'P',
                    '\u1E56': 'P',
                    '\u01A4': 'P',
                    '\u2C63': 'P',
                    '\uA750': 'P',
                    '\uA752': 'P',
                    '\uA754': 'P',
                    '\u24C6': 'Q',
                    '\uFF31': 'Q',
                    '\uA756': 'Q',
                    '\uA758': 'Q',
                    '\u024A': 'Q',
                    '\u24C7': 'R',
                    '\uFF32': 'R',
                    '\u0154': 'R',
                    '\u1E58': 'R',
                    '\u0158': 'R',
                    '\u0210': 'R',
                    '\u0212': 'R',
                    '\u1E5A': 'R',
                    '\u1E5C': 'R',
                    '\u0156': 'R',
                    '\u1E5E': 'R',
                    '\u024C': 'R',
                    '\u2C64': 'R',
                    '\uA75A': 'R',
                    '\uA7A6': 'R',
                    '\uA782': 'R',
                    '\u24C8': 'S',
                    '\uFF33': 'S',
                    '\u1E9E': 'S',
                    '\u015A': 'S',
                    '\u1E64': 'S',
                    '\u015C': 'S',
                    '\u1E60': 'S',
                    '\u0160': 'S',
                    '\u1E66': 'S',
                    '\u1E62': 'S',
                    '\u1E68': 'S',
                    '\u0218': 'S',
                    '\u015E': 'S',
                    '\u2C7E': 'S',
                    '\uA7A8': 'S',
                    '\uA784': 'S',
                    '\u24C9': 'T',
                    '\uFF34': 'T',
                    '\u1E6A': 'T',
                    '\u0164': 'T',
                    '\u1E6C': 'T',
                    '\u021A': 'T',
                    '\u0162': 'T',
                    '\u1E70': 'T',
                    '\u1E6E': 'T',
                    '\u0166': 'T',
                    '\u01AC': 'T',
                    '\u01AE': 'T',
                    '\u023E': 'T',
                    '\uA786': 'T',
                    '\uA728': 'TZ',
                    '\u24CA': 'U',
                    '\uFF35': 'U',
                    '\u00D9': 'U',
                    '\u00DA': 'U',
                    '\u00DB': 'U',
                    '\u0168': 'U',
                    '\u1E78': 'U',
                    '\u016A': 'U',
                    '\u1E7A': 'U',
                    '\u016C': 'U',
                    '\u00DC': 'U',
                    '\u01DB': 'U',
                    '\u01D7': 'U',
                    '\u01D5': 'U',
                    '\u01D9': 'U',
                    '\u1EE6': 'U',
                    '\u016E': 'U',
                    '\u0170': 'U',
                    '\u01D3': 'U',
                    '\u0214': 'U',
                    '\u0216': 'U',
                    '\u01AF': 'U',
                    '\u1EEA': 'U',
                    '\u1EE8': 'U',
                    '\u1EEE': 'U',
                    '\u1EEC': 'U',
                    '\u1EF0': 'U',
                    '\u1EE4': 'U',
                    '\u1E72': 'U',
                    '\u0172': 'U',
                    '\u1E76': 'U',
                    '\u1E74': 'U',
                    '\u0244': 'U',
                    '\u24CB': 'V',
                    '\uFF36': 'V',
                    '\u1E7C': 'V',
                    '\u1E7E': 'V',
                    '\u01B2': 'V',
                    '\uA75E': 'V',
                    '\u0245': 'V',
                    '\uA760': 'VY',
                    '\u24CC': 'W',
                    '\uFF37': 'W',
                    '\u1E80': 'W',
                    '\u1E82': 'W',
                    '\u0174': 'W',
                    '\u1E86': 'W',
                    '\u1E84': 'W',
                    '\u1E88': 'W',
                    '\u2C72': 'W',
                    '\u24CD': 'X',
                    '\uFF38': 'X',
                    '\u1E8A': 'X',
                    '\u1E8C': 'X',
                    '\u24CE': 'Y',
                    '\uFF39': 'Y',
                    '\u1EF2': 'Y',
                    '\u00DD': 'Y',
                    '\u0176': 'Y',
                    '\u1EF8': 'Y',
                    '\u0232': 'Y',
                    '\u1E8E': 'Y',
                    '\u0178': 'Y',
                    '\u1EF6': 'Y',
                    '\u1EF4': 'Y',
                    '\u01B3': 'Y',
                    '\u024E': 'Y',
                    '\u1EFE': 'Y',
                    '\u24CF': 'Z',
                    '\uFF3A': 'Z',
                    '\u0179': 'Z',
                    '\u1E90': 'Z',
                    '\u017B': 'Z',
                    '\u017D': 'Z',
                    '\u1E92': 'Z',
                    '\u1E94': 'Z',
                    '\u01B5': 'Z',
                    '\u0224': 'Z',
                    '\u2C7F': 'Z',
                    '\u2C6B': 'Z',
                    '\uA762': 'Z',
                    '\u24D0': 'a',
                    '\uFF41': 'a',
                    '\u1E9A': 'a',
                    '\u00E0': 'a',
                    '\u00E1': 'a',
                    '\u00E2': 'a',
                    '\u1EA7': 'a',
                    '\u1EA5': 'a',
                    '\u1EAB': 'a',
                    '\u1EA9': 'a',
                    '\u00E3': 'a',
                    '\u0101': 'a',
                    '\u0103': 'a',
                    '\u1EB1': 'a',
                    '\u1EAF': 'a',
                    '\u1EB5': 'a',
                    '\u1EB3': 'a',
                    '\u0227': 'a',
                    '\u01E1': 'a',
                    '\u00E4': 'a',
                    '\u01DF': 'a',
                    '\u1EA3': 'a',
                    '\u00E5': 'a',
                    '\u01FB': 'a',
                    '\u01CE': 'a',
                    '\u0201': 'a',
                    '\u0203': 'a',
                    '\u1EA1': 'a',
                    '\u1EAD': 'a',
                    '\u1EB7': 'a',
                    '\u1E01': 'a',
                    '\u0105': 'a',
                    '\u2C65': 'a',
                    '\u0250': 'a',
                    '\uA733': 'aa',
                    '\u00E6': 'ae',
                    '\u01FD': 'ae',
                    '\u01E3': 'ae',
                    '\uA735': 'ao',
                    '\uA737': 'au',
                    '\uA739': 'av',
                    '\uA73B': 'av',
                    '\uA73D': 'ay',
                    '\u24D1': 'b',
                    '\uFF42': 'b',
                    '\u1E03': 'b',
                    '\u1E05': 'b',
                    '\u1E07': 'b',
                    '\u0180': 'b',
                    '\u0183': 'b',
                    '\u0253': 'b',
                    '\u24D2': 'c',
                    '\uFF43': 'c',
                    '\u0107': 'c',
                    '\u0109': 'c',
                    '\u010B': 'c',
                    '\u010D': 'c',
                    '\u00E7': 'c',
                    '\u1E09': 'c',
                    '\u0188': 'c',
                    '\u023C': 'c',
                    '\uA73F': 'c',
                    '\u2184': 'c',
                    '\u24D3': 'd',
                    '\uFF44': 'd',
                    '\u1E0B': 'd',
                    '\u010F': 'd',
                    '\u1E0D': 'd',
                    '\u1E11': 'd',
                    '\u1E13': 'd',
                    '\u1E0F': 'd',
                    '\u0111': 'd',
                    '\u018C': 'd',
                    '\u0256': 'd',
                    '\u0257': 'd',
                    '\uA77A': 'd',
                    '\u01F3': 'dz',
                    '\u01C6': 'dz',
                    '\u24D4': 'e',
                    '\uFF45': 'e',
                    '\u00E8': 'e',
                    '\u00E9': 'e',
                    '\u00EA': 'e',
                    '\u1EC1': 'e',
                    '\u1EBF': 'e',
                    '\u1EC5': 'e',
                    '\u1EC3': 'e',
                    '\u1EBD': 'e',
                    '\u0113': 'e',
                    '\u1E15': 'e',
                    '\u1E17': 'e',
                    '\u0115': 'e',
                    '\u0117': 'e',
                    '\u00EB': 'e',
                    '\u1EBB': 'e',
                    '\u011B': 'e',
                    '\u0205': 'e',
                    '\u0207': 'e',
                    '\u1EB9': 'e',
                    '\u1EC7': 'e',
                    '\u0229': 'e',
                    '\u1E1D': 'e',
                    '\u0119': 'e',
                    '\u1E19': 'e',
                    '\u1E1B': 'e',
                    '\u0247': 'e',
                    '\u025B': 'e',
                    '\u01DD': 'e',
                    '\u24D5': 'f',
                    '\uFF46': 'f',
                    '\u1E1F': 'f',
                    '\u0192': 'f',
                    '\uA77C': 'f',
                    '\u24D6': 'g',
                    '\uFF47': 'g',
                    '\u01F5': 'g',
                    '\u011D': 'g',
                    '\u1E21': 'g',
                    '\u011F': 'g',
                    '\u0121': 'g',
                    '\u01E7': 'g',
                    '\u0123': 'g',
                    '\u01E5': 'g',
                    '\u0260': 'g',
                    '\uA7A1': 'g',
                    '\u1D79': 'g',
                    '\uA77F': 'g',
                    '\u24D7': 'h',
                    '\uFF48': 'h',
                    '\u0125': 'h',
                    '\u1E23': 'h',
                    '\u1E27': 'h',
                    '\u021F': 'h',
                    '\u1E25': 'h',
                    '\u1E29': 'h',
                    '\u1E2B': 'h',
                    '\u1E96': 'h',
                    '\u0127': 'h',
                    '\u2C68': 'h',
                    '\u2C76': 'h',
                    '\u0265': 'h',
                    '\u0195': 'hv',
                    '\u24D8': 'i',
                    '\uFF49': 'i',
                    '\u00EC': 'i',
                    '\u00ED': 'i',
                    '\u00EE': 'i',
                    '\u0129': 'i',
                    '\u012B': 'i',
                    '\u012D': 'i',
                    '\u00EF': 'i',
                    '\u1E2F': 'i',
                    '\u1EC9': 'i',
                    '\u01D0': 'i',
                    '\u0209': 'i',
                    '\u020B': 'i',
                    '\u1ECB': 'i',
                    '\u012F': 'i',
                    '\u1E2D': 'i',
                    '\u0268': 'i',
                    '\u0131': 'i',
                    '\u24D9': 'j',
                    '\uFF4A': 'j',
                    '\u0135': 'j',
                    '\u01F0': 'j',
                    '\u0249': 'j',
                    '\u24DA': 'k',
                    '\uFF4B': 'k',
                    '\u1E31': 'k',
                    '\u01E9': 'k',
                    '\u1E33': 'k',
                    '\u0137': 'k',
                    '\u1E35': 'k',
                    '\u0199': 'k',
                    '\u2C6A': 'k',
                    '\uA741': 'k',
                    '\uA743': 'k',
                    '\uA745': 'k',
                    '\uA7A3': 'k',
                    '\u24DB': 'l',
                    '\uFF4C': 'l',
                    '\u0140': 'l',
                    '\u013A': 'l',
                    '\u013E': 'l',
                    '\u1E37': 'l',
                    '\u1E39': 'l',
                    '\u013C': 'l',
                    '\u1E3D': 'l',
                    '\u1E3B': 'l',
                    '\u017F': 'l',
                    '\u0142': 'l',
                    '\u019A': 'l',
                    '\u026B': 'l',
                    '\u2C61': 'l',
                    '\uA749': 'l',
                    '\uA781': 'l',
                    '\uA747': 'l',
                    '\u01C9': 'lj',
                    '\u24DC': 'm',
                    '\uFF4D': 'm',
                    '\u1E3F': 'm',
                    '\u1E41': 'm',
                    '\u1E43': 'm',
                    '\u0271': 'm',
                    '\u026F': 'm',
                    '\u24DD': 'n',
                    '\uFF4E': 'n',
                    '\u01F9': 'n',
                    '\u0144': 'n',
                    '\u00F1': 'n',
                    '\u1E45': 'n',
                    '\u0148': 'n',
                    '\u1E47': 'n',
                    '\u0146': 'n',
                    '\u1E4B': 'n',
                    '\u1E49': 'n',
                    '\u019E': 'n',
                    '\u0272': 'n',
                    '\u0149': 'n',
                    '\uA791': 'n',
                    '\uA7A5': 'n',
                    '\u01CC': 'nj',
                    '\u24DE': 'o',
                    '\uFF4F': 'o',
                    '\u00F2': 'o',
                    '\u00F3': 'o',
                    '\u00F4': 'o',
                    '\u1ED3': 'o',
                    '\u1ED1': 'o',
                    '\u1ED7': 'o',
                    '\u1ED5': 'o',
                    '\u00F5': 'o',
                    '\u1E4D': 'o',
                    '\u022D': 'o',
                    '\u1E4F': 'o',
                    '\u014D': 'o',
                    '\u1E51': 'o',
                    '\u1E53': 'o',
                    '\u014F': 'o',
                    '\u022F': 'o',
                    '\u0231': 'o',
                    '\u00F6': 'o',
                    '\u022B': 'o',
                    '\u1ECF': 'o',
                    '\u0151': 'o',
                    '\u01D2': 'o',
                    '\u020D': 'o',
                    '\u020F': 'o',
                    '\u01A1': 'o',
                    '\u1EDD': 'o',
                    '\u1EDB': 'o',
                    '\u1EE1': 'o',
                    '\u1EDF': 'o',
                    '\u1EE3': 'o',
                    '\u1ECD': 'o',
                    '\u1ED9': 'o',
                    '\u01EB': 'o',
                    '\u01ED': 'o',
                    '\u00F8': 'o',
                    '\u01FF': 'o',
                    '\u0254': 'o',
                    '\uA74B': 'o',
                    '\uA74D': 'o',
                    '\u0275': 'o',
                    '\u01A3': 'oi',
                    '\u0223': 'ou',
                    '\uA74F': 'oo',
                    '\u24DF': 'p',
                    '\uFF50': 'p',
                    '\u1E55': 'p',
                    '\u1E57': 'p',
                    '\u01A5': 'p',
                    '\u1D7D': 'p',
                    '\uA751': 'p',
                    '\uA753': 'p',
                    '\uA755': 'p',
                    '\u24E0': 'q',
                    '\uFF51': 'q',
                    '\u024B': 'q',
                    '\uA757': 'q',
                    '\uA759': 'q',
                    '\u24E1': 'r',
                    '\uFF52': 'r',
                    '\u0155': 'r',
                    '\u1E59': 'r',
                    '\u0159': 'r',
                    '\u0211': 'r',
                    '\u0213': 'r',
                    '\u1E5B': 'r',
                    '\u1E5D': 'r',
                    '\u0157': 'r',
                    '\u1E5F': 'r',
                    '\u024D': 'r',
                    '\u027D': 'r',
                    '\uA75B': 'r',
                    '\uA7A7': 'r',
                    '\uA783': 'r',
                    '\u24E2': 's',
                    '\uFF53': 's',
                    '\u00DF': 's',
                    '\u015B': 's',
                    '\u1E65': 's',
                    '\u015D': 's',
                    '\u1E61': 's',
                    '\u0161': 's',
                    '\u1E67': 's',
                    '\u1E63': 's',
                    '\u1E69': 's',
                    '\u0219': 's',
                    '\u015F': 's',
                    '\u023F': 's',
                    '\uA7A9': 's',
                    '\uA785': 's',
                    '\u1E9B': 's',
                    '\u24E3': 't',
                    '\uFF54': 't',
                    '\u1E6B': 't',
                    '\u1E97': 't',
                    '\u0165': 't',
                    '\u1E6D': 't',
                    '\u021B': 't',
                    '\u0163': 't',
                    '\u1E71': 't',
                    '\u1E6F': 't',
                    '\u0167': 't',
                    '\u01AD': 't',
                    '\u0288': 't',
                    '\u2C66': 't',
                    '\uA787': 't',
                    '\uA729': 'tz',
                    '\u24E4': 'u',
                    '\uFF55': 'u',
                    '\u00F9': 'u',
                    '\u00FA': 'u',
                    '\u00FB': 'u',
                    '\u0169': 'u',
                    '\u1E79': 'u',
                    '\u016B': 'u',
                    '\u1E7B': 'u',
                    '\u016D': 'u',
                    '\u00FC': 'u',
                    '\u01DC': 'u',
                    '\u01D8': 'u',
                    '\u01D6': 'u',
                    '\u01DA': 'u',
                    '\u1EE7': 'u',
                    '\u016F': 'u',
                    '\u0171': 'u',
                    '\u01D4': 'u',
                    '\u0215': 'u',
                    '\u0217': 'u',
                    '\u01B0': 'u',
                    '\u1EEB': 'u',
                    '\u1EE9': 'u',
                    '\u1EEF': 'u',
                    '\u1EED': 'u',
                    '\u1EF1': 'u',
                    '\u1EE5': 'u',
                    '\u1E73': 'u',
                    '\u0173': 'u',
                    '\u1E77': 'u',
                    '\u1E75': 'u',
                    '\u0289': 'u',
                    '\u24E5': 'v',
                    '\uFF56': 'v',
                    '\u1E7D': 'v',
                    '\u1E7F': 'v',
                    '\u028B': 'v',
                    '\uA75F': 'v',
                    '\u028C': 'v',
                    '\uA761': 'vy',
                    '\u24E6': 'w',
                    '\uFF57': 'w',
                    '\u1E81': 'w',
                    '\u1E83': 'w',
                    '\u0175': 'w',
                    '\u1E87': 'w',
                    '\u1E85': 'w',
                    '\u1E98': 'w',
                    '\u1E89': 'w',
                    '\u2C73': 'w',
                    '\u24E7': 'x',
                    '\uFF58': 'x',
                    '\u1E8B': 'x',
                    '\u1E8D': 'x',
                    '\u24E8': 'y',
                    '\uFF59': 'y',
                    '\u1EF3': 'y',
                    '\u00FD': 'y',
                    '\u0177': 'y',
                    '\u1EF9': 'y',
                    '\u0233': 'y',
                    '\u1E8F': 'y',
                    '\u00FF': 'y',
                    '\u1EF7': 'y',
                    '\u1E99': 'y',
                    '\u1EF5': 'y',
                    '\u01B4': 'y',
                    '\u024F': 'y',
                    '\u1EFF': 'y',
                    '\u24E9': 'z',
                    '\uFF5A': 'z',
                    '\u017A': 'z',
                    '\u1E91': 'z',
                    '\u017C': 'z',
                    '\u017E': 'z',
                    '\u1E93': 'z',
                    '\u1E95': 'z',
                    '\u01B6': 'z',
                    '\u0225': 'z',
                    '\u0240': 'z',
                    '\u2C6C': 'z',
                    '\uA763': 'z',
                    '\u0386': '\u0391',
                    '\u0388': '\u0395',
                    '\u0389': '\u0397',
                    '\u038A': '\u0399',
                    '\u03AA': '\u0399',
                    '\u038C': '\u039F',
                    '\u038E': '\u03A5',
                    '\u03AB': '\u03A5',
                    '\u038F': '\u03A9',
                    '\u03AC': '\u03B1',
                    '\u03AD': '\u03B5',
                    '\u03AE': '\u03B7',
                    '\u03AF': '\u03B9',
                    '\u03CA': '\u03B9',
                    '\u0390': '\u03B9',
                    '\u03CC': '\u03BF',
                    '\u03CD': '\u03C5',
                    '\u03CB': '\u03C5',
                    '\u03B0': '\u03C5',
                    '\u03C9': '\u03C9',
                    '\u03C2': '\u03C3'
                };

                return diacritics;
            });

            S2.define('select2/data/base',[
                '../utils'
            ], function (Utils) {
                function BaseAdapter ($element, options) {
                    BaseAdapter.__super__.constructor.call(this);
                }

                Utils.Extend(BaseAdapter, Utils.Observable);

                BaseAdapter.prototype.current = function (callback) {
                    throw new Error('The `current` method must be defined in child classes.');
                };

                BaseAdapter.prototype.query = function (params, callback) {
                    throw new Error('The `query` method must be defined in child classes.');
                };

                BaseAdapter.prototype.bind = function (container, $container) {
                    // Can be implemented in subclasses
                };

                BaseAdapter.prototype.destroy = function () {
                    // Can be implemented in subclasses
                };

                BaseAdapter.prototype.generateResultId = function (container, data) {
                    var id = container.id + '-result-';

                    id += Utils.generateChars(4);

                    if (data.id != null) {
                        id += '-' + data.id.toString();
                    } else {
                        id += '-' + Utils.generateChars(4);
                    }
                    return id;
                };

                return BaseAdapter;
            });

            S2.define('select2/data/select',[
                './base',
                '../utils',
                'jquery'
            ], function (BaseAdapter, Utils, $) {
                function SelectAdapter ($element, options) {
                    this.$element = $element;
                    this.options = options;

                    SelectAdapter.__super__.constructor.call(this);
                }

                Utils.Extend(SelectAdapter, BaseAdapter);

                SelectAdapter.prototype.current = function (callback) {
                    var data = [];
                    var self = this;

                    this.$element.find(':selected').each(function () {
                        var $option = $(this);

                        var option = self.item($option);

                        data.push(option);
                    });

                    callback(data);
                };

                SelectAdapter.prototype.select = function (data) {
                    var self = this;

                    data.selected = true;

                    // If data.element is a DOM node, use it instead
                    if ($(data.element).is('option')) {
                        data.element.selected = true;

                        this.$element.trigger('change');

                        return;
                    }

                    if (this.$element.prop('multiple')) {
                        this.current(function (currentData) {
                            var val = [];

                            data = [data];
                            data.push.apply(data, currentData);

                            for (var d = 0; d < data.length; d++) {
                                var id = data[d].id;

                                if ($.inArray(id, val) === -1) {
                                    val.push(id);
                                }
                            }

                            self.$element.val(val);
                            self.$element.trigger('change');
                        });
                    } else {
                        var val = data.id;

                        this.$element.val(val);
                        this.$element.trigger('change');
                    }
                };

                SelectAdapter.prototype.unselect = function (data) {
                    var self = this;

                    if (!this.$element.prop('multiple')) {
                        return;
                    }

                    data.selected = false;

                    if ($(data.element).is('option')) {
                        data.element.selected = false;

                        this.$element.trigger('change');

                        return;
                    }

                    this.current(function (currentData) {
                        var val = [];

                        for (var d = 0; d < currentData.length; d++) {
                            var id = currentData[d].id;

                            if (id !== data.id && $.inArray(id, val) === -1) {
                                val.push(id);
                            }
                        }

                        self.$element.val(val);

                        self.$element.trigger('change');
                    });
                };

                SelectAdapter.prototype.bind = function (container, $container) {
                    var self = this;

                    this.container = container;

                    container.on('select', function (params) {
                        self.select(params.data);
                    });

                    container.on('unselect', function (params) {
                        self.unselect(params.data);
                    });
                };

                SelectAdapter.prototype.destroy = function () {
                    // Remove anything added to child elements
                    this.$element.find('*').each(function () {
                        // Remove any custom data set by Select2
                        $.removeData(this, 'data');
                    });
                };

                SelectAdapter.prototype.query = function (params, callback) {
                    var data = [];
                    var self = this;

                    var $options = this.$element.children();

                    $options.each(function () {
                        var $option = $(this);

                        if (!$option.is('option') && !$option.is('optgroup')) {
                            return;
                        }

                        var option = self.item($option);

                        var matches = self.matches(params, option);

                        if (matches !== null) {
                            data.push(matches);
                        }
                    });

                    callback({
                        results: data
                    });
                };

                SelectAdapter.prototype.addOptions = function ($options) {
                    Utils.appendMany(this.$element, $options);
                };

                SelectAdapter.prototype.option = function (data) {
                    var option;

                    if (data.children) {
                        option = document.createElement('optgroup');
                        option.label = data.text;
                    } else {
                        option = document.createElement('option');

                        if (option.textContent !== undefined) {
                            option.textContent = data.text;
                        } else {
                            option.innerText = data.text;
                        }
                    }

                    if (data.id) {
                        option.value = data.id;
                    }

                    if (data.disabled) {
                        option.disabled = true;
                    }

                    if (data.selected) {
                        option.selected = true;
                    }

                    if (data.title) {
                        option.title = data.title;
                    }

                    var $option = $(option);

                    var normalizedData = this._normalizeItem(data);
                    normalizedData.element = option;

                    // Override the option's data with the combined data
                    $.data(option, 'data', normalizedData);

                    return $option;
                };

                SelectAdapter.prototype.item = function ($option) {
                    var data = {};

                    data = $.data($option[0], 'data');

                    if (data != null) {
                        return data;
                    }

                    if ($option.is('option')) {
                        data = {
                            id: $option.val(),
                            text: $option.text(),
                            disabled: $option.prop('disabled'),
                            selected: $option.prop('selected'),
                            title: $option.prop('title')
                        };
                    } else if ($option.is('optgroup')) {
                        data = {
                            text: $option.prop('label'),
                            children: [],
                            title: $option.prop('title')
                        };

                        var $children = $option.children('option');
                        var children = [];

                        for (var c = 0; c < $children.length; c++) {
                            var $child = $($children[c]);

                            var child = this.item($child);

                            children.push(child);
                        }

                        data.children = children;
                    }

                    data = this._normalizeItem(data);
                    data.element = $option[0];

                    $.data($option[0], 'data', data);

                    return data;
                };

                SelectAdapter.prototype._normalizeItem = function (item) {
                    if (!$.isPlainObject(item)) {
                        item = {
                            id: item,
                            text: item
                        };
                    }

                    item = $.extend({}, {
                        text: ''
                    }, item);

                    var defaults = {
                        selected: false,
                        disabled: false
                    };

                    if (item.id != null) {
                        item.id = item.id.toString();
                    }

                    if (item.text != null) {
                        item.text = item.text.toString();
                    }

                    if (item._resultId == null && item.id && this.container != null) {
                        item._resultId = this.generateResultId(this.container, item);
                    }

                    return $.extend({}, defaults, item);
                };

                SelectAdapter.prototype.matches = function (params, data) {
                    var matcher = this.options.get('matcher');

                    return matcher(params, data);
                };

                return SelectAdapter;
            });

            S2.define('select2/data/array',[
                './select',
                '../utils',
                'jquery'
            ], function (SelectAdapter, Utils, $) {
                function ArrayAdapter ($element, options) {
                    var data = options.get('data') || [];

                    ArrayAdapter.__super__.constructor.call(this, $element, options);

                    this.addOptions(this.convertToOptions(data));
                }

                Utils.Extend(ArrayAdapter, SelectAdapter);

                ArrayAdapter.prototype.select = function (data) {
                    var $option = this.$element.find('option').filter(function (i, elm) {
                        return elm.value == data.id.toString();
                    });

                    if ($option.length === 0) {
                        $option = this.option(data);

                        this.addOptions($option);
                    }

                    ArrayAdapter.__super__.select.call(this, data);
                };

                ArrayAdapter.prototype.convertToOptions = function (data) {
                    var self = this;

                    var $existing = this.$element.find('option');
                    var existingIds = $existing.map(function () {
                        return self.item($(this)).id;
                    }).get();

                    var $options = [];

                    // Filter out all items except for the one passed in the argument
                    function onlyItem (item) {
                        return function () {
                            return $(this).val() == item.id;
                        };
                    }

                    for (var d = 0; d < data.length; d++) {
                        var item = this._normalizeItem(data[d]);

                        // Skip items which were pre-loaded, only merge the data
                        if ($.inArray(item.id, existingIds) >= 0) {
                            var $existingOption = $existing.filter(onlyItem(item));

                            var existingData = this.item($existingOption);
                            var newData = $.extend(true, {}, existingData, item);

                            var $newOption = this.option(existingData);

                            $existingOption.replaceWith($newOption);

                            continue;
                        }

                        var $option = this.option(item);

                        if (item.children) {
                            var $children = this.convertToOptions(item.children);

                            Utils.appendMany($option, $children);
                        }

                        $options.push($option);
                    }

                    return $options;
                };

                return ArrayAdapter;
            });

            S2.define('select2/data/ajax',[
                './array',
                '../utils',
                'jquery'
            ], function (ArrayAdapter, Utils, $) {
                function AjaxAdapter ($element, options) {
                    this.ajaxOptions = this._applyDefaults(options.get('ajax'));

                    if (this.ajaxOptions.processResults != null) {
                        this.processResults = this.ajaxOptions.processResults;
                    }

                    AjaxAdapter.__super__.constructor.call(this, $element, options);
                }

                Utils.Extend(AjaxAdapter, ArrayAdapter);

                AjaxAdapter.prototype._applyDefaults = function (options) {
                    var defaults = {
                        data: function (params) {
                            return {
                                q: params.term
                            };
                        },
                        transport: function (params, success, failure) {
                            var $request = $.ajax(params);

                            $request.then(success);
                            $request.fail(failure);

                            return $request;
                        }
                    };

                    return $.extend({}, defaults, options, true);
                };

                AjaxAdapter.prototype.processResults = function (results) {
                    return results;
                };

                AjaxAdapter.prototype.query = function (params, callback) {
                    var matches = [];
                    var self = this;

                    if (this._request != null) {
                        // JSONP requests cannot always be aborted
                        if ($.isFunction(this._request.abort)) {
                            this._request.abort();
                        }

                        this._request = null;
                    }

                    var options = $.extend({
                        type: 'GET'
                    }, this.ajaxOptions);

                    if (typeof options.url === 'function') {
                        options.url = options.url(params);
                    }

                    if (typeof options.data === 'function') {
                        options.data = options.data(params);
                    }

                    function request () {
                        var $request = options.transport(options, function (data) {
                            var results = self.processResults(data, params);

                            if (self.options.get('debug') && window.console && console.error) {
                                // Check to make sure that the response included a `results` key.
                                if (!results || !results.results || !$.isArray(results.results)) {
                                    console.error(
                                        'Select2: The AJAX results did not return an array in the ' +
                                        '`results` key of the response.'
                                    );
                                }
                            }

                            callback(results);
                        }, function () {
                            // TODO: Handle AJAX errors
                        });

                        self._request = $request;
                    }

                    if (this.ajaxOptions.delay && params.term !== '') {
                        if (this._queryTimeout) {
                            window.clearTimeout(this._queryTimeout);
                        }

                        this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);
                    } else {
                        request();
                    }
                };

                return AjaxAdapter;
            });

            S2.define('select2/data/tags',[
                'jquery'
            ], function ($) {
                function Tags (decorated, $element, options) {
                    var tags = options.get('tags');

                    var createTag = options.get('createTag');

                    if (createTag !== undefined) {
                        this.createTag = createTag;
                    }

                    decorated.call(this, $element, options);

                    if ($.isArray(tags)) {
                        for (var t = 0; t < tags.length; t++) {
                            var tag = tags[t];
                            var item = this._normalizeItem(tag);

                            var $option = this.option(item);

                            this.$element.append($option);
                        }
                    }
                }

                Tags.prototype.query = function (decorated, params, callback) {
                    var self = this;

                    this._removeOldTags();

                    if (params.term == null || params.page != null) {
                        decorated.call(this, params, callback);
                        return;
                    }

                    function wrapper (obj, child) {
                        var data = obj.results;

                        for (var i = 0; i < data.length; i++) {
                            var option = data[i];

                            var checkChildren = (
                                option.children != null &&
                                !wrapper({
                                    results: option.children
                                }, true)
                            );

                            var checkText = option.text === params.term;

                            if (checkText || checkChildren) {
                                if (child) {
                                    return false;
                                }

                                obj.data = data;
                                callback(obj);

                                return;
                            }
                        }

                        if (child) {
                            return true;
                        }

                        var tag = self.createTag(params);

                        if (tag != null) {
                            var $option = self.option(tag);
                            $option.attr('data-select2-tag', true);

                            self.addOptions([$option]);

                            self.insertTag(data, tag);
                        }

                        obj.results = data;

                        callback(obj);
                    }

                    decorated.call(this, params, wrapper);
                };

                Tags.prototype.createTag = function (decorated, params) {
                    var term = $.trim(params.term);

                    if (term === '') {
                        return null;
                    }

                    return {
                        id: term,
                        text: term
                    };
                };

                Tags.prototype.insertTag = function (_, data, tag) {
                    data.unshift(tag);
                };

                Tags.prototype._removeOldTags = function (_) {
                    var tag = this._lastTag;

                    var $options = this.$element.find('option[data-select2-tag]');

                    $options.each(function () {
                        if (this.selected) {
                            return;
                        }

                        $(this).remove();
                    });
                };

                return Tags;
            });

            S2.define('select2/data/tokenizer',[
                'jquery'
            ], function ($) {
                function Tokenizer (decorated, $element, options) {
                    var tokenizer = options.get('tokenizer');

                    if (tokenizer !== undefined) {
                        this.tokenizer = tokenizer;
                    }

                    decorated.call(this, $element, options);
                }

                Tokenizer.prototype.bind = function (decorated, container, $container) {
                    decorated.call(this, container, $container);

                    this.$search =  container.dropdown.$search || container.selection.$search ||
                        $container.find('.select2-search__field');
                };

                Tokenizer.prototype.query = function (decorated, params, callback) {
                    var self = this;

                    function select (data) {
                        self.select(data);
                    }

                    params.term = params.term || '';

                    var tokenData = this.tokenizer(params, this.options, select);

                    if (tokenData.term !== params.term) {
                        // Replace the search term if we have the search box
                        if (this.$search.length) {
                            this.$search.val(tokenData.term);
                            this.$search.focus();
                        }

                        params.term = tokenData.term;
                    }

                    decorated.call(this, params, callback);
                };

                Tokenizer.prototype.tokenizer = function (_, params, options, callback) {
                    var separators = options.get('tokenSeparators') || [];
                    var term = params.term;
                    var i = 0;

                    var createTag = this.createTag || function (params) {
                            return {
                                id: params.term,
                                text: params.term
                            };
                        };

                    while (i < term.length) {
                        var termChar = term[i];

                        if ($.inArray(termChar, separators) === -1) {
                            i++;

                            continue;
                        }

                        var part = term.substr(0, i);
                        var partParams = $.extend({}, params, {
                            term: part
                        });

                        var data = createTag(partParams);

                        callback(data);

                        // Reset the term to not include the tokenized portion
                        term = term.substr(i + 1) || '';
                        i = 0;
                    }

                    return {
                        term: term
                    };
                };

                return Tokenizer;
            });

            S2.define('select2/data/minimumInputLength',[

            ], function () {
                function MinimumInputLength (decorated, $e, options) {
                    this.minimumInputLength = options.get('minimumInputLength');

                    decorated.call(this, $e, options);
                }

                MinimumInputLength.prototype.query = function (decorated, params, callback) {
                    params.term = params.term || '';

                    if (params.term.length < this.minimumInputLength) {
                        this.trigger('results:message', {
                            message: 'inputTooShort',
                            args: {
                                minimum: this.minimumInputLength,
                                input: params.term,
                                params: params
                            }
                        });

                        return;
                    }

                    decorated.call(this, params, callback);
                };

                return MinimumInputLength;
            });

            S2.define('select2/data/maximumInputLength',[

            ], function () {
                function MaximumInputLength (decorated, $e, options) {
                    this.maximumInputLength = options.get('maximumInputLength');

                    decorated.call(this, $e, options);
                }

                MaximumInputLength.prototype.query = function (decorated, params, callback) {
                    params.term = params.term || '';

                    if (this.maximumInputLength > 0 &&
                        params.term.length > this.maximumInputLength) {
                        this.trigger('results:message', {
                            message: 'inputTooLong',
                            args: {
                                maximum: this.maximumInputLength,
                                input: params.term,
                                params: params
                            }
                        });

                        return;
                    }

                    decorated.call(this, params, callback);
                };

                return MaximumInputLength;
            });

            S2.define('select2/data/maximumSelectionLength',[

            ], function (){
                function MaximumSelectionLength (decorated, $e, options) {
                    this.maximumSelectionLength = options.get('maximumSelectionLength');

                    decorated.call(this, $e, options);
                }

                MaximumSelectionLength.prototype.query =
                    function (decorated, params, callback) {
                        var self = this;

                        this.current(function (currentData) {
                            var count = currentData != null ? currentData.length : 0;
                            if (self.maximumSelectionLength > 0 &&
                                count >= self.maximumSelectionLength) {
                                self.trigger('results:message', {
                                    message: 'maximumSelected',
                                    args: {
                                        maximum: self.maximumSelectionLength
                                    }
                                });
                                return;
                            }
                            decorated.call(self, params, callback);
                        });
                    };

                return MaximumSelectionLength;
            });

            S2.define('select2/dropdown',[
                'jquery',
                './utils'
            ], function ($, Utils) {
                function Dropdown ($element, options) {
                    this.$element = $element;
                    this.options = options;

                    Dropdown.__super__.constructor.call(this);
                }

                Utils.Extend(Dropdown, Utils.Observable);

                Dropdown.prototype.render = function () {
                    var $dropdown = $(
                        '<span class="select2-dropdown">' +
                        '<span class="select2-results"></span>' +
                        '</span>'
                    );

                    $dropdown.attr('dir', this.options.get('dir'));

                    this.$dropdown = $dropdown;

                    return $dropdown;
                };

                Dropdown.prototype.position = function ($dropdown, $container) {
                    // Should be implmented in subclasses
                };

                Dropdown.prototype.destroy = function () {
                    // Remove the dropdown from the DOM
                    this.$dropdown.remove();
                };

                return Dropdown;
            });

            S2.define('select2/dropdown/search',[
                'jquery',
                '../utils'
            ], function ($, Utils) {
                function Search () { }

                Search.prototype.render = function (decorated) {
                    var $rendered = decorated.call(this);

                    var $search = $(
                        '<span class="select2-search select2-search--dropdown">' +
                        '<input class="select2-search__field" type="search" tabindex="-1"' +
                        ' autocomplete="off" autocorrect="off" autocapitalize="off"' +
                        ' spellcheck="false" role="textbox" />' +
                        '</span>'
                    );

                    this.$searchContainer = $search;
                    this.$search = $search.find('input');

                    $rendered.prepend($search);

                    return $rendered;
                };

                Search.prototype.bind = function (decorated, container, $container) {
                    var self = this;

                    decorated.call(this, container, $container);

                    this.$search.on('keydown', function (evt) {
                        self.trigger('keypress', evt);

                        self._keyUpPrevented = evt.isDefaultPrevented();
                    });

                    // Workaround for browsers which do not support the `input` event
                    // This will prevent double-triggering of events for browsers which support
                    // both the `keyup` and `input` events.
                    this.$search.on('input', function (evt) {
                        // Unbind the duplicated `keyup` event
                        $(this).off('keyup');
                    });

                    this.$search.on('keyup input', function (evt) {
                        self.handleSearch(evt);
                    });

                    container.on('open', function () {
                        self.$search.attr('tabindex', 0);

                        self.$search.focus();

                        window.setTimeout(function () {
                            self.$search.focus();
                        }, 0);
                    });

                    container.on('close', function () {
                        self.$search.attr('tabindex', -1);

                        self.$search.val('');
                    });

                    container.on('results:all', function (params) {
                        if (params.query.term == null || params.query.term === '') {
                            var showSearch = self.showSearch(params);

                            if (showSearch) {
                                self.$searchContainer.removeClass('select2-search--hide');
                            } else {
                                self.$searchContainer.addClass('select2-search--hide');
                            }
                        }
                    });
                };

                Search.prototype.handleSearch = function (evt) {
                    if (!this._keyUpPrevented) {
                        var input = this.$search.val();

                        this.trigger('query', {
                            term: input
                        });
                    }

                    this._keyUpPrevented = false;
                };

                Search.prototype.showSearch = function (_, params) {
                    return true;
                };

                return Search;
            });

            S2.define('select2/dropdown/hidePlaceholder',[

            ], function () {
                function HidePlaceholder (decorated, $element, options, dataAdapter) {
                    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

                    decorated.call(this, $element, options, dataAdapter);
                }

                HidePlaceholder.prototype.append = function (decorated, data) {
                    data.results = this.removePlaceholder(data.results);

                    decorated.call(this, data);
                };

                HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder) {
                    if (typeof placeholder === 'string') {
                        placeholder = {
                            id: '',
                            text: placeholder
                        };
                    }

                    return placeholder;
                };

                HidePlaceholder.prototype.removePlaceholder = function (_, data) {
                    var modifiedData = data.slice(0);

                    for (var d = data.length - 1; d >= 0; d--) {
                        var item = data[d];

                        if (this.placeholder.id === item.id) {
                            modifiedData.splice(d, 1);
                        }
                    }

                    return modifiedData;
                };

                return HidePlaceholder;
            });

            S2.define('select2/dropdown/infiniteScroll',[
                'jquery'
            ], function ($) {
                function InfiniteScroll (decorated, $element, options, dataAdapter) {
                    this.lastParams = {};

                    decorated.call(this, $element, options, dataAdapter);

                    this.$loadingMore = this.createLoadingMore();
                    this.loading = false;
                }

                InfiniteScroll.prototype.append = function (decorated, data) {
                    this.$loadingMore.remove();
                    this.loading = false;

                    decorated.call(this, data);

                    if (this.showLoadingMore(data)) {
                        this.$results.append(this.$loadingMore);
                    }
                };

                InfiniteScroll.prototype.bind = function (decorated, container, $container) {
                    var self = this;

                    decorated.call(this, container, $container);

                    container.on('query', function (params) {
                        self.lastParams = params;
                        self.loading = true;
                    });

                    container.on('query:append', function (params) {
                        self.lastParams = params;
                        self.loading = true;
                    });

                    this.$results.on('scroll', function () {
                        var isLoadMoreVisible = $.contains(
                            document.documentElement,
                            self.$loadingMore[0]
                        );

                        if (self.loading || !isLoadMoreVisible) {
                            return;
                        }

                        var currentOffset = self.$results.offset().top +
                            self.$results.outerHeight(false);
                        var loadingMoreOffset = self.$loadingMore.offset().top +
                            self.$loadingMore.outerHeight(false);

                        if (currentOffset + 50 >= loadingMoreOffset) {
                            self.loadMore();
                        }
                    });
                };

                InfiniteScroll.prototype.loadMore = function () {
                    this.loading = true;

                    var params = $.extend({}, {page: 1}, this.lastParams);

                    params.page++;

                    this.trigger('query:append', params);
                };

                InfiniteScroll.prototype.showLoadingMore = function (_, data) {
                    return data.pagination && data.pagination.more;
                };

                InfiniteScroll.prototype.createLoadingMore = function () {
                    var $option = $(
                        '<li class="option load-more" role="treeitem"></li>'
                    );

                    var message = this.options.get('translations').get('loadingMore');

                    $option.html(message(this.lastParams));

                    return $option;
                };

                return InfiniteScroll;
            });

            S2.define('select2/dropdown/attachBody',[
                'jquery',
                '../utils'
            ], function ($, Utils) {
                function AttachBody (decorated, $element, options) {
                    this.$dropdownParent = options.get('dropdownParent') || document.body;

                    decorated.call(this, $element, options);
                }

                AttachBody.prototype.bind = function (decorated, container, $container) {
                    var self = this;

                    var setupResultsEvents = false;

                    decorated.call(this, container, $container);

                    container.on('open', function () {
                        self._showDropdown();
                        self._attachPositioningHandler(container);

                        if (!setupResultsEvents) {
                            setupResultsEvents = true;

                            container.on('results:all', function () {
                                self._positionDropdown();
                                self._resizeDropdown();
                            });

                            container.on('results:append', function () {
                                self._positionDropdown();
                                self._resizeDropdown();
                            });
                        }
                    });

                    container.on('close', function () {
                        self._hideDropdown();
                        self._detachPositioningHandler(container);
                    });

                    this.$dropdownContainer.on('mousedown', function (evt) {
                        evt.stopPropagation();
                    });
                };

                AttachBody.prototype.position = function (decorated, $dropdown, $container) {
                    // Clone all of the container classes
                    $dropdown.attr('class', $container.attr('class'));

                    $dropdown.removeClass('select2');
                    $dropdown.addClass('select2-container--open');

                    $dropdown.css({
                        position: 'absolute',
                        top: -999999
                    });

                    this.$container = $container;
                };

                AttachBody.prototype.render = function (decorated) {
                    var $container = $('<span></span>');

                    var $dropdown = decorated.call(this);
                    $container.append($dropdown);

                    this.$dropdownContainer = $container;

                    return $container;
                };

                AttachBody.prototype._hideDropdown = function (decorated) {
                    this.$dropdownContainer.detach();
                };

                AttachBody.prototype._attachPositioningHandler = function (container) {
                    var self = this;

                    var scrollEvent = 'scroll.select2.' + container.id;
                    var resizeEvent = 'resize.select2.' + container.id;
                    var orientationEvent = 'orientationchange.select2.' + container.id;

                    var $watchers = this.$container.parents().filter(Utils.hasScroll);
                    $watchers.each(function () {
                        $(this).data('select2-scroll-position', {
                            x: $(this).scrollLeft(),
                            y: $(this).scrollTop()
                        });
                    });

                    $watchers.on(scrollEvent, function (ev) {
                        var position = $(this).data('select2-scroll-position');
                        $(this).scrollTop(position.y);
                    });

                    $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent,
                        function (e) {
                            self._positionDropdown();
                            self._resizeDropdown();
                        });
                };

                AttachBody.prototype._detachPositioningHandler = function (container) {
                    var scrollEvent = 'scroll.select2.' + container.id;
                    var resizeEvent = 'resize.select2.' + container.id;
                    var orientationEvent = 'orientationchange.select2.' + container.id;

                    var $watchers = this.$container.parents().filter(Utils.hasScroll);
                    $watchers.off(scrollEvent);

                    $(window).off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent);
                };

                AttachBody.prototype._positionDropdown = function () {
                    var $window = $(window);

                    var isCurrentlyAbove = this.$dropdown.hasClass('select2-dropdown--above');
                    var isCurrentlyBelow = this.$dropdown.hasClass('select2-dropdown--below');

                    var newDirection = null;

                    var position = this.$container.position();
                    var offset = this.$container.offset();

                    offset.bottom = offset.top + this.$container.outerHeight(false);

                    var container = {
                        height: this.$container.outerHeight(false)
                    };

                    container.top = offset.top;
                    container.bottom = offset.top + container.height;

                    var dropdown = {
                        height: this.$dropdown.outerHeight(false)
                    };

                    var viewport = {
                        top: $window.scrollTop(),
                        bottom: $window.scrollTop() + $window.height()
                    };

                    var enoughRoomAbove = viewport.top < (offset.top - dropdown.height);
                    var enoughRoomBelow = viewport.bottom > (offset.bottom + dropdown.height);

                    var css = {
                        left: offset.left,
                        top: container.bottom
                    };

                    if (!isCurrentlyAbove && !isCurrentlyBelow) {
                        newDirection = 'below';
                    }

                    if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
                        newDirection = 'above';
                    } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
                        newDirection = 'below';
                    }

                    if (newDirection == 'above' ||
                        (isCurrentlyAbove && newDirection !== 'below')) {
                        css.top = container.top - dropdown.height;
                    }

                    if (newDirection != null) {
                        this.$dropdown
                            .removeClass('select2-dropdown--below select2-dropdown--above')
                            .addClass('select2-dropdown--' + newDirection);
                        this.$container
                            .removeClass('select2-container--below select2-container--above')
                            .addClass('select2-container--' + newDirection);
                    }

                    this.$dropdownContainer.css(css);
                };

                AttachBody.prototype._resizeDropdown = function () {
                    this.$dropdownContainer.width();

                    var css = {
                        width: this.$container.outerWidth(false) + 'px'
                    };

                    if (this.options.get('dropdownAutoWidth')) {
                        css.minWidth = css.width;
                        css.width = 'auto';
                    }

                    this.$dropdown.css(css);
                };

                AttachBody.prototype._showDropdown = function (decorated) {
                    this.$dropdownContainer.appendTo(this.$dropdownParent);

                    this._positionDropdown();
                    this._resizeDropdown();
                };

                return AttachBody;
            });

            S2.define('select2/dropdown/minimumResultsForSearch',[

            ], function () {
                function countResults (data) {
                    var count = 0;

                    for (var d = 0; d < data.length; d++) {
                        var item = data[d];

                        if (item.children) {
                            count += countResults(item.children);
                        } else {
                            count++;
                        }
                    }

                    return count;
                }

                function MinimumResultsForSearch (decorated, $element, options, dataAdapter) {
                    this.minimumResultsForSearch = options.get('minimumResultsForSearch');

                    if (this.minimumResultsForSearch < 0) {
                        this.minimumResultsForSearch = Infinity;
                    }

                    decorated.call(this, $element, options, dataAdapter);
                }

                MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {
                    if (countResults(params.data.results) < this.minimumResultsForSearch) {
                        return false;
                    }

                    return decorated.call(this, params);
                };

                return MinimumResultsForSearch;
            });

            S2.define('select2/dropdown/selectOnClose',[

            ], function () {
                function SelectOnClose () { }

                SelectOnClose.prototype.bind = function (decorated, container, $container) {
                    var self = this;

                    decorated.call(this, container, $container);

                    container.on('close', function () {
                        self._handleSelectOnClose();
                    });
                };

                SelectOnClose.prototype._handleSelectOnClose = function () {
                    var $highlightedResults = this.getHighlightedResults();

                    if ($highlightedResults.length < 1) {
                        return;
                    }

                    this.trigger('select', {
                        data: $highlightedResults.data('data')
                    });
                };

                return SelectOnClose;
            });

            S2.define('select2/dropdown/closeOnSelect',[

            ], function () {
                function CloseOnSelect () { }

                CloseOnSelect.prototype.bind = function (decorated, container, $container) {
                    var self = this;

                    decorated.call(this, container, $container);

                    container.on('select', function (evt) {
                        self._selectTriggered(evt);
                    });

                    container.on('unselect', function (evt) {
                        self._selectTriggered(evt);
                    });
                };

                CloseOnSelect.prototype._selectTriggered = function (_, evt) {
                    var originalEvent = evt.originalEvent;

                    // Don't close if the control key is being held
                    if (originalEvent && originalEvent.ctrlKey) {
                        return;
                    }

                    this.trigger('close');
                };

                return CloseOnSelect;
            });

            S2.define('select2/i18n/en',[],function () {
                // English
                return {
                    errorLoading: function () {
                        return 'The results could not be loaded.';
                    },
                    inputTooLong: function (args) {
                        var overChars = args.input.length - args.maximum;

                        var message = 'Please delete ' + overChars + ' character';

                        if (overChars != 1) {
                            message += 's';
                        }

                        return message;
                    },
                    inputTooShort: function (args) {
                        var remainingChars = args.minimum - args.input.length;

                        var message = 'Please enter ' + remainingChars + ' or more characters';

                        return message;
                    },
                    loadingMore: function () {
                        return 'Loading more results…';
                    },
                    maximumSelected: function (args) {
                        var message = 'You can only select ' + args.maximum + ' item';

                        if (args.maximum != 1) {
                            message += 's';
                        }

                        return message;
                    },
                    noResults: function () {
                        return 'No results found';
                    },
                    searching: function () {
                        return 'Searching…';
                    }
                };
            });

            S2.define('select2/defaults',[
                'jquery',
                'require',

                './results',

                './selection/single',
                './selection/multiple',
                './selection/placeholder',
                './selection/allowClear',
                './selection/search',
                './selection/eventRelay',

                './utils',
                './translation',
                './diacritics',

                './data/select',
                './data/array',
                './data/ajax',
                './data/tags',
                './data/tokenizer',
                './data/minimumInputLength',
                './data/maximumInputLength',
                './data/maximumSelectionLength',

                './dropdown',
                './dropdown/search',
                './dropdown/hidePlaceholder',
                './dropdown/infiniteScroll',
                './dropdown/attachBody',
                './dropdown/minimumResultsForSearch',
                './dropdown/selectOnClose',
                './dropdown/closeOnSelect',

                './i18n/en'
            ], function ($, require,

                         ResultsList,

                         SingleSelection, MultipleSelection, Placeholder, AllowClear,
                         SelectionSearch, EventRelay,

                         Utils, Translation, DIACRITICS,

                         SelectData, ArrayData, AjaxData, Tags, Tokenizer,
                         MinimumInputLength, MaximumInputLength, MaximumSelectionLength,

                         Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll,
                         AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect,

                         EnglishTranslation) {
                function Defaults () {
                    this.reset();
                }

                Defaults.prototype.apply = function (options) {
                    options = $.extend({}, this.defaults, options);

                    if (options.dataAdapter == null) {
                        if (options.ajax != null) {
                            options.dataAdapter = AjaxData;
                        } else if (options.data != null) {
                            options.dataAdapter = ArrayData;
                        } else {
                            options.dataAdapter = SelectData;
                        }

                        if (options.minimumInputLength > 0) {
                            options.dataAdapter = Utils.Decorate(
                                options.dataAdapter,
                                MinimumInputLength
                            );
                        }

                        if (options.maximumInputLength > 0) {
                            options.dataAdapter = Utils.Decorate(
                                options.dataAdapter,
                                MaximumInputLength
                            );
                        }

                        if (options.maximumSelectionLength > 0) {
                            options.dataAdapter = Utils.Decorate(
                                options.dataAdapter,
                                MaximumSelectionLength
                            );
                        }

                        if (options.tags) {
                            options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);
                        }

                        if (options.tokenSeparators != null || options.tokenizer != null) {
                            options.dataAdapter = Utils.Decorate(
                                options.dataAdapter,
                                Tokenizer
                            );
                        }

                        if (options.query != null) {
                            var Query = require(options.amdBase + 'compat/query');

                            options.dataAdapter = Utils.Decorate(
                                options.dataAdapter,
                                Query
                            );
                        }

                        if (options.initSelection != null) {
                            var InitSelection = require(options.amdBase + 'compat/initSelection');

                            options.dataAdapter = Utils.Decorate(
                                options.dataAdapter,
                                InitSelection
                            );
                        }
                    }

                    if (options.resultsAdapter == null) {
                        options.resultsAdapter = ResultsList;

                        if (options.ajax != null) {
                            options.resultsAdapter = Utils.Decorate(
                                options.resultsAdapter,
                                InfiniteScroll
                            );
                        }

                        if (options.placeholder != null) {
                            options.resultsAdapter = Utils.Decorate(
                                options.resultsAdapter,
                                HidePlaceholder
                            );
                        }

                        if (options.selectOnClose) {
                            options.resultsAdapter = Utils.Decorate(
                                options.resultsAdapter,
                                SelectOnClose
                            );
                        }
                    }

                    if (options.dropdownAdapter == null) {
                        if (options.multiple) {
                            options.dropdownAdapter = Dropdown;
                        } else {
                            var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);

                            options.dropdownAdapter = SearchableDropdown;
                        }

                        if (options.minimumResultsForSearch !== 0) {
                            options.dropdownAdapter = Utils.Decorate(
                                options.dropdownAdapter,
                                MinimumResultsForSearch
                            );
                        }

                        if (options.closeOnSelect) {
                            options.dropdownAdapter = Utils.Decorate(
                                options.dropdownAdapter,
                                CloseOnSelect
                            );
                        }

                        if (
                            options.dropdownCssClass != null ||
                            options.dropdownCss != null ||
                            options.adaptDropdownCssClass != null
                        ) {
                            var DropdownCSS = require(options.amdBase + 'compat/dropdownCss');

                            options.dropdownAdapter = Utils.Decorate(
                                options.dropdownAdapter,
                                DropdownCSS
                            );
                        }

                        options.dropdownAdapter = Utils.Decorate(
                            options.dropdownAdapter,
                            AttachBody
                        );
                    }

                    if (options.selectionAdapter == null) {
                        if (options.multiple) {
                            options.selectionAdapter = MultipleSelection;
                        } else {
                            options.selectionAdapter = SingleSelection;
                        }

                        // Add the placeholder mixin if a placeholder was specified
                        if (options.placeholder != null) {
                            options.selectionAdapter = Utils.Decorate(
                                options.selectionAdapter,
                                Placeholder
                            );
                        }

                        if (options.allowClear) {
                            options.selectionAdapter = Utils.Decorate(
                                options.selectionAdapter,
                                AllowClear
                            );
                        }

                        if (options.multiple) {
                            options.selectionAdapter = Utils.Decorate(
                                options.selectionAdapter,
                                SelectionSearch
                            );
                        }

                        if (
                            options.containerCssClass != null ||
                            options.containerCss != null ||
                            options.adaptContainerCssClass != null
                        ) {
                            var ContainerCSS = require(options.amdBase + 'compat/containerCss');

                            options.selectionAdapter = Utils.Decorate(
                                options.selectionAdapter,
                                ContainerCSS
                            );
                        }

                        options.selectionAdapter = Utils.Decorate(
                            options.selectionAdapter,
                            EventRelay
                        );
                    }

                    if (typeof options.language === 'string') {
                        // Check if the language is specified with a region
                        if (options.language.indexOf('-') > 0) {
                            // Extract the region information if it is included
                            var languageParts = options.language.split('-');
                            var baseLanguage = languageParts[0];

                            options.language = [options.language, baseLanguage];
                        } else {
                            options.language = [options.language];
                        }
                    }

                    if ($.isArray(options.language)) {
                        var languages = new Translation();
                        options.language.push('en');

                        var languageNames = options.language;

                        for (var l = 0; l < languageNames.length; l++) {
                            var name = languageNames[l];
                            var language = {};

                            try {
                                // Try to load it with the original name
                                language = Translation.loadPath(name);
                            } catch (e) {
                                try {
                                    // If we couldn't load it, check if it wasn't the full path
                                    name = this.defaults.amdLanguageBase + name;
                                    language = Translation.loadPath(name);
                                } catch (ex) {
                                    // The translation could not be loaded at all. Sometimes this is
                                    // because of a configuration problem, other times this can be
                                    // because of how Select2 helps load all possible translation files.
                                    if (options.debug && window.console && console.warn) {
                                        console.warn(
                                            'Select2: The language file for "' + name + '" could not be ' +
                                            'automatically loaded. A fallback will be used instead.'
                                        );
                                    }

                                    continue;
                                }
                            }

                            languages.extend(language);
                        }

                        options.translations = languages;
                    } else {
                        var baseTranslation = Translation.loadPath(
                            this.defaults.amdLanguageBase + 'en'
                        );
                        var customTranslation = new Translation(options.language);

                        customTranslation.extend(baseTranslation);

                        options.translations = customTranslation;
                    }

                    return options;
                };

                Defaults.prototype.reset = function () {
                    function stripDiacritics (text) {
                        // Used 'uni range + named function' from http://jsperf.com/diacritics/18
                        function match(a) {
                            return DIACRITICS[a] || a;
                        }

                        return text.replace(/[^\u0000-\u007E]/g, match);
                    }

                    function matcher (params, data) {
                        // Always return the object if there is nothing to compare
                        if ($.trim(params.term) === '') {
                            return data;
                        }

                        // Do a recursive check for options with children
                        if (data.children && data.children.length > 0) {
                            // Clone the data object if there are children
                            // This is required as we modify the object to remove any non-matches
                            var match = $.extend(true, {}, data);

                            // Check each child of the option
                            for (var c = data.children.length - 1; c >= 0; c--) {
                                var child = data.children[c];

                                var matches = matcher(params, child);

                                // If there wasn't a match, remove the object in the array
                                if (matches == null) {
                                    match.children.splice(c, 1);
                                }
                            }

                            // If any children matched, return the new object
                            if (match.children.length > 0) {
                                return match;
                            }

                            // If there were no matching children, check just the plain object
                            return matcher(params, match);
                        }

                        var original = stripDiacritics(data.text).toUpperCase();
                        var term = stripDiacritics(params.term).toUpperCase();

                        // Check if the text contains the term
                        if (original.indexOf(term) > -1) {
                            return data;
                        }

                        // If it doesn't contain the term, don't return anything
                        return null;
                    }

                    this.defaults = {
                        amdBase: './',
                        amdLanguageBase: './i18n/',
                        closeOnSelect: true,
                        debug: false,
                        dropdownAutoWidth: false,
                        escapeMarkup: Utils.escapeMarkup,
                        language: EnglishTranslation,
                        matcher: matcher,
                        minimumInputLength: 0,
                        maximumInputLength: 0,
                        maximumSelectionLength: 0,
                        minimumResultsForSearch: 0,
                        selectOnClose: false,
                        sorter: function (data) {
                            return data;
                        },
                        templateResult: function (result) {
                            return result.text;
                        },
                        templateSelection: function (selection) {
                            return selection.text;
                        },
                        theme: 'default',
                        width: 'resolve'
                    };
                };

                Defaults.prototype.set = function (key, value) {
                    var camelKey = $.camelCase(key);

                    var data = {};
                    data[camelKey] = value;

                    var convertedData = Utils._convertData(data);

                    $.extend(this.defaults, convertedData);
                };

                var defaults = new Defaults();

                return defaults;
            });

            S2.define('select2/options',[
                'require',
                'jquery',
                './defaults',
                './utils'
            ], function (require, $, Defaults, Utils) {
                function Options (options, $element) {
                    this.options = options;

                    if ($element != null) {
                        this.fromElement($element);
                    }

                    this.options = Defaults.apply(this.options);

                    if ($element && $element.is('input')) {
                        var InputCompat = require(this.get('amdBase') + 'compat/inputData');

                        this.options.dataAdapter = Utils.Decorate(
                            this.options.dataAdapter,
                            InputCompat
                        );
                    }
                }

                Options.prototype.fromElement = function ($e) {
                    var excludedData = ['select2'];

                    if (this.options.multiple == null) {
                        this.options.multiple = $e.prop('multiple');
                    }

                    if (this.options.disabled == null) {
                        this.options.disabled = $e.prop('disabled');
                    }

                    if (this.options.language == null) {
                        if ($e.prop('lang')) {
                            this.options.language = $e.prop('lang').toLowerCase();
                        } else if ($e.closest('[lang]').prop('lang')) {
                            this.options.language = $e.closest('[lang]').prop('lang');
                        }
                    }

                    if (this.options.dir == null) {
                        if ($e.prop('dir')) {
                            this.options.dir = $e.prop('dir');
                        } else if ($e.closest('[dir]').prop('dir')) {
                            this.options.dir = $e.closest('[dir]').prop('dir');
                        } else {
                            this.options.dir = 'ltr';
                        }
                    }

                    $e.prop('disabled', this.options.disabled);
                    $e.prop('multiple', this.options.multiple);

                    if ($e.data('select2Tags')) {
                        if (this.options.debug && window.console && console.warn) {
                            console.warn(
                                'Select2: The `data-select2-tags` attribute has been changed to ' +
                                'use the `data-data` and `data-tags="true"` attributes and will be ' +
                                'removed in future versions of Select2.'
                            );
                        }

                        $e.data('data', $e.data('select2Tags'));
                        $e.data('tags', true);
                    }

                    if ($e.data('ajaxUrl')) {
                        if (this.options.debug && window.console && console.warn) {
                            console.warn(
                                'Select2: The `data-ajax-url` attribute has been changed to ' +
                                '`data-ajax--url` and support for the old attribute will be removed' +
                                ' in future versions of Select2.'
                            );
                        }

                        $e.attr('ajax--url', $e.data('ajaxUrl'));
                        $e.data('ajax--url', $e.data('ajaxUrl'));
                    }

                    var dataset = {};

                    // Prefer the element's `dataset` attribute if it exists
                    // jQuery 1.x does not correctly handle data attributes with multiple dashes
                    if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0].dataset) {
                        dataset = $.extend(true, {}, $e[0].dataset, $e.data());
                    } else {
                        dataset = $e.data();
                    }

                    var data = $.extend(true, {}, dataset);

                    data = Utils._convertData(data);

                    for (var key in data) {
                        if ($.inArray(key, excludedData) > -1) {
                            continue;
                        }

                        if ($.isPlainObject(this.options[key])) {
                            $.extend(this.options[key], data[key]);
                        } else {
                            this.options[key] = data[key];
                        }
                    }

                    return this;
                };

                Options.prototype.get = function (key) {
                    return this.options[key];
                };

                Options.prototype.set = function (key, val) {
                    this.options[key] = val;
                };

                return Options;
            });

            S2.define('select2/core',[
                'jquery',
                './options',
                './utils',
                './keys'
            ], function ($, Options, Utils, KEYS) {
                var Select2 = function ($element, options) {
                    if ($element.data('select2') != null) {
                        $element.data('select2').destroy();
                    }

                    this.$element = $element;

                    this.id = this._generateId($element);

                    options = options || {};

                    this.options = new Options(options, $element);

                    Select2.__super__.constructor.call(this);

                    // Set up the tabindex

                    var tabindex = $element.attr('tabindex') || 0;
                    $element.data('old-tabindex', tabindex);
                    $element.attr('tabindex', '-1');

                    // Set up containers and adapters

                    var DataAdapter = this.options.get('dataAdapter');
                    this.dataAdapter = new DataAdapter($element, this.options);

                    var $container = this.render();

                    this._placeContainer($container);

                    var SelectionAdapter = this.options.get('selectionAdapter');
                    this.selection = new SelectionAdapter($element, this.options);
                    this.$selection = this.selection.render();

                    this.selection.position(this.$selection, $container);

                    var DropdownAdapter = this.options.get('dropdownAdapter');
                    this.dropdown = new DropdownAdapter($element, this.options);
                    this.$dropdown = this.dropdown.render();

                    this.dropdown.position(this.$dropdown, $container);

                    var ResultsAdapter = this.options.get('resultsAdapter');
                    this.results = new ResultsAdapter($element, this.options, this.dataAdapter);
                    this.$results = this.results.render();

                    this.results.position(this.$results, this.$dropdown);

                    // Bind events

                    var self = this;

                    // Bind the container to all of the adapters
                    this._bindAdapters();

                    // Register any DOM event handlers
                    this._registerDomEvents();

                    // Register any internal event handlers
                    this._registerDataEvents();
                    this._registerSelectionEvents();
                    this._registerDropdownEvents();
                    this._registerResultsEvents();
                    this._registerEvents();

                    // Set the initial state
                    this.dataAdapter.current(function (initialData) {
                        self.trigger('selection:update', {
                            data: initialData
                        });
                    });

                    // Hide the original select
                    $element.addClass('select2-hidden-accessible');
                    $element.attr('aria-hidden', 'true');

                    // Synchronize any monitored attributes
                    this._syncAttributes();

                    $element.data('select2', this);
                };

                Utils.Extend(Select2, Utils.Observable);

                Select2.prototype._generateId = function ($element) {
                    var id = '';

                    if ($element.attr('id') != null) {
                        id = $element.attr('id');
                    } else if ($element.attr('name') != null) {
                        id = $element.attr('name') + '-' + Utils.generateChars(2);
                    } else {
                        id = Utils.generateChars(4);
                    }

                    id = 'select2-' + id;

                    return id;
                };

                Select2.prototype._placeContainer = function ($container) {
                    $container.insertAfter(this.$element);

                    var width = this._resolveWidth(this.$element, this.options.get('width'));

                    if (width != null) {
                        $container.css('width', width);
                    }
                };

                Select2.prototype._resolveWidth = function ($element, method) {
                    var WIDTH = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

                    if (method == 'resolve') {
                        var styleWidth = this._resolveWidth($element, 'style');

                        if (styleWidth != null) {
                            return styleWidth;
                        }

                        return this._resolveWidth($element, 'element');
                    }

                    if (method == 'element') {
                        var elementWidth = $element.outerWidth(false);

                        if (elementWidth <= 0) {
                            return 'auto';
                        }

                        return elementWidth + 'px';
                    }

                    if (method == 'style') {
                        var style = $element.attr('style');

                        if (typeof(style) !== 'string') {
                            return null;
                        }

                        var attrs = style.split(';');

                        for (var i = 0, l = attrs.length; i < l; i = i + 1) {
                            var attr = attrs[i].replace(/\s/g, '');
                            var matches = attr.match(WIDTH);

                            if (matches !== null && matches.length >= 1) {
                                return matches[1];
                            }
                        }

                        return null;
                    }

                    return method;
                };

                Select2.prototype._bindAdapters = function () {
                    this.dataAdapter.bind(this, this.$container);
                    this.selection.bind(this, this.$container);

                    this.dropdown.bind(this, this.$container);
                    this.results.bind(this, this.$container);
                };

                Select2.prototype._registerDomEvents = function () {
                    var self = this;

                    this.$element.on('change.select2', function () {
                        self.dataAdapter.current(function (data) {
                            self.trigger('selection:update', {
                                data: data
                            });
                        });
                    });

                    this._sync = Utils.bind(this._syncAttributes, this);

                    if (this.$element[0].attachEvent) {
                        this.$element[0].attachEvent('onpropertychange', this._sync);
                    }

                    var observer = window.MutationObserver ||
                            window.WebKitMutationObserver ||
                            window.MozMutationObserver
                        ;

                    if (observer != null) {
                        this._observer = new observer(function (mutations) {
                            $.each(mutations, self._sync);
                        });
                        this._observer.observe(this.$element[0], {
                            attributes: true,
                            subtree: false
                        });
                    } else if (this.$element[0].addEventListener) {
                        this.$element[0].addEventListener('DOMAttrModified', self._sync, false);
                    }
                };

                Select2.prototype._registerDataEvents = function () {
                    var self = this;

                    this.dataAdapter.on('*', function (name, params) {
                        self.trigger(name, params);
                    });
                };

                Select2.prototype._registerSelectionEvents = function () {
                    var self = this;
                    var nonRelayEvents = ['toggle', 'focus'];

                    this.selection.on('toggle', function () {
                        self.toggleDropdown();
                    });

                    this.selection.on('focus', function (params) {
                        self.focus(params);
                    });

                    this.selection.on('*', function (name, params) {
                        if ($.inArray(name, nonRelayEvents) !== -1) {
                            return;
                        }

                        self.trigger(name, params);
                    });
                };

                Select2.prototype._registerDropdownEvents = function () {
                    var self = this;

                    this.dropdown.on('*', function (name, params) {
                        self.trigger(name, params);
                    });
                };

                Select2.prototype._registerResultsEvents = function () {
                    var self = this;

                    this.results.on('*', function (name, params) {
                        self.trigger(name, params);
                    });
                };

                Select2.prototype._registerEvents = function () {
                    var self = this;

                    this.on('open', function () {
                        self.$container.addClass('select2-container--open');
                    });

                    this.on('close', function () {
                        self.$container.removeClass('select2-container--open');
                    });

                    this.on('enable', function () {
                        self.$container.removeClass('select2-container--disabled');
                    });

                    this.on('disable', function () {
                        self.$container.addClass('select2-container--disabled');
                    });

                    this.on('blur', function () {
                        self.$container.removeClass('select2-container--focus');
                    });

                    this.on('query', function (params) {
                        if (!self.isOpen()) {
                            self.trigger('open');
                        }

                        this.dataAdapter.query(params, function (data) {
                            self.trigger('results:all', {
                                data: data,
                                query: params
                            });
                        });
                    });

                    this.on('query:append', function (params) {
                        this.dataAdapter.query(params, function (data) {
                            self.trigger('results:append', {
                                data: data,
                                query: params
                            });
                        });
                    });

                    this.on('keypress', function (evt) {
                        var key = evt.which;

                        if (self.isOpen()) {
                            if (key === KEYS.ESC || key === KEYS.TAB ||
                                (key === KEYS.UP && evt.altKey)) {
                                self.close();

                                evt.preventDefault();
                            } else if (key === KEYS.ENTER) {
                                self.trigger('results:select');

                                evt.preventDefault();
                            } else if ((key === KEYS.SPACE && evt.ctrlKey)) {
                                self.trigger('results:toggle');

                                evt.preventDefault();
                            } else if (key === KEYS.UP) {
                                self.trigger('results:previous');

                                evt.preventDefault();
                            } else if (key === KEYS.DOWN) {
                                self.trigger('results:next');

                                evt.preventDefault();
                            }
                        } else {
                            if (key === KEYS.ENTER || key === KEYS.SPACE ||
                                (key === KEYS.DOWN && evt.altKey)) {
                                self.open();

                                evt.preventDefault();
                            }
                        }
                    });
                };

                Select2.prototype._syncAttributes = function () {
                    this.options.set('disabled', this.$element.prop('disabled'));

                    if (this.options.get('disabled')) {
                        if (this.isOpen()) {
                            this.close();
                        }

                        this.trigger('disable');
                    } else {
                        this.trigger('enable');
                    }
                };

                /**
                 * Override the trigger method to automatically trigger pre-events when
                 * there are events that can be prevented.
                 */
                Select2.prototype.trigger = function (name, args) {
                    var actualTrigger = Select2.__super__.trigger;
                    var preTriggerMap = {
                        'open': 'opening',
                        'close': 'closing',
                        'select': 'selecting',
                        'unselect': 'unselecting'
                    };

                    if (name in preTriggerMap) {
                        var preTriggerName = preTriggerMap[name];
                        var preTriggerArgs = {
                            prevented: false,
                            name: name,
                            args: args
                        };

                        actualTrigger.call(this, preTriggerName, preTriggerArgs);

                        if (preTriggerArgs.prevented) {
                            args.prevented = true;

                            return;
                        }
                    }

                    actualTrigger.call(this, name, args);
                };

                Select2.prototype.toggleDropdown = function () {
                    if (this.options.get('disabled')) {
                        return;
                    }

                    if (this.isOpen()) {
                        this.close();
                    } else {
                        this.open();
                    }
                };

                Select2.prototype.open = function () {
                    if (this.isOpen()) {
                        return;
                    }

                    this.trigger('query', {});

                    this.trigger('open');
                };

                Select2.prototype.close = function () {
                    if (!this.isOpen()) {
                        return;
                    }

                    this.trigger('close');
                };

                Select2.prototype.isOpen = function () {
                    return this.$container.hasClass('select2-container--open');
                };

                Select2.prototype.hasFocus = function () {
                    return this.$container.hasClass('select2-container--focus');
                };

                Select2.prototype.focus = function (data) {
                    // No need to re-trigger focus events if we are already focused
                    if (this.hasFocus()) {
                        return;
                    }

                    this.$container.addClass('select2-container--focus');
                    this.trigger('focus');
                };

                Select2.prototype.enable = function (args) {
                    if (this.options.get('debug') && window.console && console.warn) {
                        console.warn(
                            'Select2: The `select2("enable")` method has been deprecated and will' +
                            ' be removed in later Select2 versions. Use $element.prop("disabled")' +
                            ' instead.'
                        );
                    }

                    if (args == null || args.length === 0) {
                        args = [true];
                    }

                    var disabled = !args[0];

                    this.$element.prop('disabled', disabled);
                };

                Select2.prototype.data = function () {
                    if (this.options.get('debug') &&
                        arguments.length > 0 && window.console && console.warn) {
                        console.warn(
                            'Select2: Data can no longer be set using `select2("data")`. You ' +
                            'should consider setting the value instead using `$element.val()`.'
                        );
                    }

                    var data = [];

                    this.dataAdapter.current(function (currentData) {
                        data = currentData;
                    });

                    return data;
                };

                Select2.prototype.val = function (args) {
                    if (this.options.get('debug') && window.console && console.warn) {
                        console.warn(
                            'Select2: The `select2("val")` method has been deprecated and will be' +
                            ' removed in later Select2 versions. Use $element.val() instead.'
                        );
                    }

                    if (args == null || args.length === 0) {
                        return this.$element.val();
                    }

                    var newVal = args[0];

                    if ($.isArray(newVal)) {
                        newVal = $.map(newVal, function (obj) {
                            return obj.toString();
                        });
                    }

                    this.$element.val(newVal).trigger('change');
                };

                Select2.prototype.destroy = function () {
                    this.$container.remove();

                    if (this.$element[0].detachEvent) {
                        this.$element[0].detachEvent('onpropertychange', this._sync);
                    }

                    if (this._observer != null) {
                        this._observer.disconnect();
                        this._observer = null;
                    } else if (this.$element[0].removeEventListener) {
                        this.$element[0]
                            .removeEventListener('DOMAttrModified', this._sync, false);
                    }

                    this._sync = null;

                    this.$element.off('.select2');
                    this.$element.attr('tabindex', this.$element.data('old-tabindex'));

                    this.$element.removeClass('select2-hidden-accessible');
                    this.$element.attr('aria-hidden', 'false');
                    this.$element.removeData('select2');

                    this.dataAdapter.destroy();
                    this.selection.destroy();
                    this.dropdown.destroy();
                    this.results.destroy();

                    this.dataAdapter = null;
                    this.selection = null;
                    this.dropdown = null;
                    this.results = null;
                };

                Select2.prototype.render = function () {
                    var $container = $(
                        '<span class="select2 select2-container">' +
                        '<span class="selection"></span>' +
                        '<span class="dropdown-wrapper" aria-hidden="true"></span>' +
                        '</span>'
                    );

                    $container.attr('dir', this.options.get('dir'));

                    this.$container = $container;

                    this.$container.addClass('select2-container--' + this.options.get('theme'));

                    $container.data('element', this.$element);

                    return $container;
                };

                return Select2;
            });

            S2.define('select2/compat/utils',[
                'jquery'
            ], function ($) {
                function syncCssClasses ($dest, $src, adapter) {
                    var classes, replacements = [], adapted;

                    classes = $.trim($dest.attr('class'));

                    if (classes) {
                        classes = '' + classes; // for IE which returns object

                        $(classes.split(/\s+/)).each(function () {
                            // Save all Select2 classes
                            if (this.indexOf('select2-') === 0) {
                                replacements.push(this);
                            }
                        });
                    }

                    classes = $.trim($src.attr('class'));

                    if (classes) {
                        classes = '' + classes; // for IE which returns object

                        $(classes.split(/\s+/)).each(function () {
                            // Only adapt non-Select2 classes
                            if (this.indexOf('select2-') !== 0) {
                                adapted = adapter(this);

                                if (adapted != null) {
                                    replacements.push(adapted);
                                }
                            }
                        });
                    }

                    $dest.attr('class', replacements.join(' '));
                }

                return {
                    syncCssClasses: syncCssClasses
                };
            });

            S2.define('select2/compat/containerCss',[
                'jquery',
                './utils'
            ], function ($, CompatUtils) {
                // No-op CSS adapter that discards all classes by default
                function _containerAdapter (clazz) {
                    return null;
                }

                function ContainerCSS () { }

                ContainerCSS.prototype.render = function (decorated) {
                    var $container = decorated.call(this);

                    var containerCssClass = this.options.get('containerCssClass') || '';

                    if ($.isFunction(containerCssClass)) {
                        containerCssClass = containerCssClass(this.$element);
                    }

                    var containerCssAdapter = this.options.get('adaptContainerCssClass');
                    containerCssAdapter = containerCssAdapter || _containerAdapter;

                    if (containerCssClass.indexOf(':all:') !== -1) {
                        containerCssClass = containerCssClass.replace(':all:', '');

                        var _cssAdapter = containerCssAdapter;

                        containerCssAdapter = function (clazz) {
                            var adapted = _cssAdapter(clazz);

                            if (adapted != null) {
                                // Append the old one along with the adapted one
                                return adapted + ' ' + clazz;
                            }

                            return clazz;
                        };
                    }

                    var containerCss = this.options.get('containerCss') || {};

                    if ($.isFunction(containerCss)) {
                        containerCss = containerCss(this.$element);
                    }

                    CompatUtils.syncCssClasses($container, this.$element, containerCssAdapter);

                    $container.css(containerCss);
                    $container.addClass(containerCssClass);

                    return $container;
                };

                return ContainerCSS;
            });

            S2.define('select2/compat/dropdownCss',[
                'jquery',
                './utils'
            ], function ($, CompatUtils) {
                // No-op CSS adapter that discards all classes by default
                function _dropdownAdapter (clazz) {
                    return null;
                }

                function DropdownCSS () { }

                DropdownCSS.prototype.render = function (decorated) {
                    var $dropdown = decorated.call(this);

                    var dropdownCssClass = this.options.get('dropdownCssClass') || '';

                    if ($.isFunction(dropdownCssClass)) {
                        dropdownCssClass = dropdownCssClass(this.$element);
                    }

                    var dropdownCssAdapter = this.options.get('adaptDropdownCssClass');
                    dropdownCssAdapter = dropdownCssAdapter || _dropdownAdapter;

                    if (dropdownCssClass.indexOf(':all:') !== -1) {
                        dropdownCssClass = dropdownCssClass.replace(':all:', '');

                        var _cssAdapter = dropdownCssAdapter;

                        dropdownCssAdapter = function (clazz) {
                            var adapted = _cssAdapter(clazz);

                            if (adapted != null) {
                                // Append the old one along with the adapted one
                                return adapted + ' ' + clazz;
                            }

                            return clazz;
                        };
                    }

                    var dropdownCss = this.options.get('dropdownCss') || {};

                    if ($.isFunction(dropdownCss)) {
                        dropdownCss = dropdownCss(this.$element);
                    }

                    CompatUtils.syncCssClasses($dropdown, this.$element, dropdownCssAdapter);

                    $dropdown.css(dropdownCss);
                    $dropdown.addClass(dropdownCssClass);

                    return $dropdown;
                };

                return DropdownCSS;
            });

            S2.define('select2/compat/initSelection',[
                'jquery'
            ], function ($) {
                function InitSelection (decorated, $element, options) {
                    if (options.get('debug') && window.console && console.warn) {
                        console.warn(
                            'Select2: The `initSelection` option has been deprecated in favor' +
                            ' of a custom data adapter that overrides the `current` method. ' +
                            'This method is now called multiple times instead of a single ' +
                            'time when the instance is initialized. Support will be removed ' +
                            'for the `initSelection` option in future versions of Select2'
                        );
                    }

                    this.initSelection = options.get('initSelection');
                    this._isInitialized = false;

                    decorated.call(this, $element, options);
                }

                InitSelection.prototype.current = function (decorated, callback) {
                    var self = this;

                    if (this._isInitialized) {
                        decorated.call(this, callback);

                        return;
                    }

                    this.initSelection.call(null, this.$element, function (data) {
                        self._isInitialized = true;

                        if (!$.isArray(data)) {
                            data = [data];
                        }

                        callback(data);
                    });
                };

                return InitSelection;
            });

            S2.define('select2/compat/inputData',[
                'jquery'
            ], function ($) {
                function InputData (decorated, $element, options) {
                    this._currentData = [];
                    this._valueSeparator = options.get('valueSeparator') || ',';

                    if ($element.prop('type') === 'hidden') {
                        if (options.get('debug') && console && console.warn) {
                            console.warn(
                                'Select2: Using a hidden input with Select2 is no longer ' +
                                'supported and may stop working in the future. It is recommended ' +
                                'to use a `<select>` element instead.'
                            );
                        }
                    }

                    decorated.call(this, $element, options);
                }

                InputData.prototype.current = function (_, callback) {
                    function getSelected (data, selectedIds) {
                        var selected = [];

                        if (data.selected || $.inArray(data.id, selectedIds) !== -1) {
                            data.selected = true;
                            selected.push(data);
                        } else {
                            data.selected = false;
                        }

                        if (data.children) {
                            selected.push.apply(selected, getSelected(data.children, selectedIds));
                        }

                        return selected;
                    }

                    var selected = [];

                    for (var d = 0; d < this._currentData.length; d++) {
                        var data = this._currentData[d];

                        selected.push.apply(
                            selected,
                            getSelected(
                                data,
                                this.$element.val().split(
                                    this._valueSeparator
                                )
                            )
                        );
                    }

                    callback(selected);
                };

                InputData.prototype.select = function (_, data) {
                    if (!this.options.get('multiple')) {
                        this.current(function (allData) {
                            $.map(allData, function (data) {
                                data.selected = false;
                            });
                        });

                        this.$element.val(data.id);
                        this.$element.trigger('change');
                    } else {
                        var value = this.$element.val();
                        value += this._valueSeparator + data.id;

                        this.$element.val(value);
                        this.$element.trigger('change');
                    }
                };

                InputData.prototype.unselect = function (_, data) {
                    var self = this;

                    data.selected = false;

                    this.current(function (allData) {
                        var values = [];

                        for (var d = 0; d < allData.length; d++) {
                            var item = allData[d];

                            if (data.id == item.id) {
                                continue;
                            }

                            values.push(item.id);
                        }

                        self.$element.val(values.join(self._valueSeparator));
                        self.$element.trigger('change');
                    });
                };

                InputData.prototype.query = function (_, params, callback) {
                    var results = [];

                    for (var d = 0; d < this._currentData.length; d++) {
                        var data = this._currentData[d];

                        var matches = this.matches(params, data);

                        if (matches !== null) {
                            results.push(matches);
                        }
                    }

                    callback({
                        results: results
                    });
                };

                InputData.prototype.addOptions = function (_, $options) {
                    var options = $.map($options, function ($option) {
                        return $.data($option[0], 'data');
                    });

                    this._currentData.push.apply(this._currentData, options);
                };

                return InputData;
            });

            S2.define('select2/compat/matcher',[
                'jquery'
            ], function ($) {
                function oldMatcher (matcher) {
                    function wrappedMatcher (params, data) {
                        var match = $.extend(true, {}, data);

                        if (params.term == null || $.trim(params.term) === '') {
                            return match;
                        }

                        if (data.children) {
                            for (var c = data.children.length - 1; c >= 0; c--) {
                                var child = data.children[c];

                                // Check if the child object matches
                                // The old matcher returned a boolean true or false
                                var doesMatch = matcher(params.term, child.text, child);

                                // If the child didn't match, pop it off
                                if (!doesMatch) {
                                    match.children.splice(c, 1);
                                }
                            }

                            if (match.children.length > 0) {
                                return match;
                            }
                        }

                        if (matcher(params.term, data.text, data)) {
                            return match;
                        }

                        return null;
                    }

                    return wrappedMatcher;
                }

                return oldMatcher;
            });

            S2.define('select2/compat/query',[

            ], function () {
                function Query (decorated, $element, options) {
                    if (options.get('debug') && window.console && console.warn) {
                        console.warn(
                            'Select2: The `query` option has been deprecated in favor of a ' +
                            'custom data adapter that overrides the `query` method. Support ' +
                            'will be removed for the `query` option in future versions of ' +
                            'Select2.'
                        );
                    }

                    decorated.call(this, $element, options);
                }

                Query.prototype.query = function (_, params, callback) {
                    params.callback = callback;

                    var query = this.options.get('query');

                    query.call(null, params);
                };

                return Query;
            });

            S2.define('select2/dropdown/attachContainer',[

            ], function () {
                function AttachContainer (decorated, $element, options) {
                    decorated.call(this, $element, options);
                }

                AttachContainer.prototype.position =
                    function (decorated, $dropdown, $container) {
                        var $dropdownContainer = $container.find('.dropdown-wrapper');
                        $dropdownContainer.append($dropdown);

                        $dropdown.addClass('select2-dropdown--below');
                        $container.addClass('select2-container--below');
                    };

                return AttachContainer;
            });

            S2.define('select2/dropdown/stopPropagation',[

            ], function () {
                function StopPropagation () { }

                StopPropagation.prototype.bind = function (decorated, container, $container) {
                    decorated.call(this, container, $container);

                    var stoppedEvents = [
                        'blur',
                        'change',
                        'click',
                        'dblclick',
                        'focus',
                        'focusin',
                        'focusout',
                        'input',
                        'keydown',
                        'keyup',
                        'keypress',
                        'mousedown',
                        'mouseenter',
                        'mouseleave',
                        'mousemove',
                        'mouseover',
                        'mouseup',
                        'search',
                        'touchend',
                        'touchstart'
                    ];

                    this.$dropdown.on(stoppedEvents.join(' '), function (evt) {
                        evt.stopPropagation();
                    });
                };

                return StopPropagation;
            });

            S2.define('select2/selection/stopPropagation',[

            ], function () {
                function StopPropagation () { }

                StopPropagation.prototype.bind = function (decorated, container, $container) {
                    decorated.call(this, container, $container);

                    var stoppedEvents = [
                        'blur',
                        'change',
                        'click',
                        'dblclick',
                        'focus',
                        'focusin',
                        'focusout',
                        'input',
                        'keydown',
                        'keyup',
                        'keypress',
                        'mousedown',
                        'mouseenter',
                        'mouseleave',
                        'mousemove',
                        'mouseover',
                        'mouseup',
                        'search',
                        'touchend',
                        'touchstart'
                    ];

                    this.$selection.on(stoppedEvents.join(' '), function (evt) {
                        evt.stopPropagation();
                    });
                };

                return StopPropagation;
            });

            S2.define('jquery.select2',[
                'jquery',
                'require',

                './select2/core',
                './select2/defaults'
            ], function ($, require, Select2, Defaults) {
                // Force jQuery.mousewheel to be loaded if it hasn't already
                require('jquery.mousewheel');

                if ($.fn.select2 == null) {
                    // All methods that should return the element
                    var thisMethods = ['open', 'close', 'destroy'];

                    $.fn.select2 = function (options) {
                        options = options || {};

                        if (typeof options === 'object') {
                            this.each(function () {
                                var instanceOptions = $.extend({}, options, true);

                                var instance = new Select2($(this), instanceOptions);
                            });

                            return this;
                        } else if (typeof options === 'string') {
                            var instance = this.data('select2');

                            if (instance == null && window.console && console.error) {
                                console.error(
                                    'The select2(\'' + options + '\') method was called on an ' +
                                    'element that is not using Select2.'
                                );
                            }

                            var args = Array.prototype.slice.call(arguments, 1);

                            var ret = instance[options](args);

                            // Check if we should be returning `this`
                            if ($.inArray(options, thisMethods) > -1) {
                                return this;
                            }

                            return ret;
                        } else {
                            throw new Error('Invalid arguments for Select2: ' + options);
                        }
                    };
                }

                if ($.fn.select2.defaults == null) {
                    $.fn.select2.defaults = Defaults;
                }

                return Select2;
            });

            /*!
             * jQuery Mousewheel 3.1.12
             *
             * Copyright 2014 jQuery Foundation and other contributors
             * Released under the MIT license.
             * http://jquery.org/license
             */

            (function (factory) {
                if ( typeof S2.define === 'function' && S2.define.amd ) {
                    // AMD. Register as an anonymous module.
                    S2.define('jquery.mousewheel',['jquery'], factory);
                } else if (typeof exports === 'object') {
                    // Node/CommonJS style for Browserify
                    module.exports = factory;
                } else {
                    // Browser globals
                    factory(jQuery);
                }
            }(function ($) {

                var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
                    toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                        ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
                    slice  = Array.prototype.slice,
                    nullLowestDeltaTimeout, lowestDelta;

                if ( $.event.fixHooks ) {
                    for ( var i = toFix.length; i; ) {
                        $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
                    }
                }

                var special = $.event.special.mousewheel = {
                    version: '3.1.12',

                    setup: function() {
                        if ( this.addEventListener ) {
                            for ( var i = toBind.length; i; ) {
                                this.addEventListener( toBind[--i], handler, false );
                            }
                        } else {
                            this.onmousewheel = handler;
                        }
                        // Store the line height and page height for this particular element
                        $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
                        $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
                    },

                    teardown: function() {
                        if ( this.removeEventListener ) {
                            for ( var i = toBind.length; i; ) {
                                this.removeEventListener( toBind[--i], handler, false );
                            }
                        } else {
                            this.onmousewheel = null;
                        }
                        // Clean up the data we added to the element
                        $.removeData(this, 'mousewheel-line-height');
                        $.removeData(this, 'mousewheel-page-height');
                    },

                    getLineHeight: function(elem) {
                        var $elem = $(elem),
                            $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
                        if (!$parent.length) {
                            $parent = $('body');
                        }
                        return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
                    },

                    getPageHeight: function(elem) {
                        return $(elem).height();
                    },

                    settings: {
                        adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
                        normalizeOffset: true  // calls getBoundingClientRect for each event
                    }
                };

                $.fn.extend({
                    mousewheel: function(fn) {
                        return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
                    },

                    unmousewheel: function(fn) {
                        return this.unbind('mousewheel', fn);
                    }
                });


                function handler(event) {
                    var orgEvent   = event || window.event,
                        args       = slice.call(arguments, 1),
                        delta      = 0,
                        deltaX     = 0,
                        deltaY     = 0,
                        absDelta   = 0,
                        offsetX    = 0,
                        offsetY    = 0;
                    event = $.event.fix(orgEvent);
                    event.type = 'mousewheel';

                    // Old school scrollwheel delta
                    if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
                    if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
                    if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
                    if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

                    // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
                    if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
                        deltaX = deltaY * -1;
                        deltaY = 0;
                    }

                    // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
                    delta = deltaY === 0 ? deltaX : deltaY;

                    // New school wheel delta (wheel event)
                    if ( 'deltaY' in orgEvent ) {
                        deltaY = orgEvent.deltaY * -1;
                        delta  = deltaY;
                    }
                    if ( 'deltaX' in orgEvent ) {
                        deltaX = orgEvent.deltaX;
                        if ( deltaY === 0 ) { delta  = deltaX * -1; }
                    }

                    // No change actually happened, no reason to go any further
                    if ( deltaY === 0 && deltaX === 0 ) { return; }

                    // Need to convert lines and pages to pixels if we aren't already in pixels
                    // There are three delta modes:
                    //   * deltaMode 0 is by pixels, nothing to do
                    //   * deltaMode 1 is by lines
                    //   * deltaMode 2 is by pages
                    if ( orgEvent.deltaMode === 1 ) {
                        var lineHeight = $.data(this, 'mousewheel-line-height');
                        delta  *= lineHeight;
                        deltaY *= lineHeight;
                        deltaX *= lineHeight;
                    } else if ( orgEvent.deltaMode === 2 ) {
                        var pageHeight = $.data(this, 'mousewheel-page-height');
                        delta  *= pageHeight;
                        deltaY *= pageHeight;
                        deltaX *= pageHeight;
                    }

                    // Store lowest absolute delta to normalize the delta values
                    absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

                    if ( !lowestDelta || absDelta < lowestDelta ) {
                        lowestDelta = absDelta;

                        // Adjust older deltas if necessary
                        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                            lowestDelta /= 40;
                        }
                    }

                    // Adjust older deltas if necessary
                    if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                        // Divide all the things by 40!
                        delta  /= 40;
                        deltaX /= 40;
                        deltaY /= 40;
                    }

                    // Get a whole, normalized value for the deltas
                    delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
                    deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
                    deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

                    // Normalise offsetX and offsetY properties
                    if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
                        var boundingRect = this.getBoundingClientRect();
                        offsetX = event.clientX - boundingRect.left;
                        offsetY = event.clientY - boundingRect.top;
                    }

                    // Add information to the event object
                    event.deltaX = deltaX;
                    event.deltaY = deltaY;
                    event.deltaFactor = lowestDelta;
                    event.offsetX = offsetX;
                    event.offsetY = offsetY;
                    // Go ahead and set deltaMode to 0 since we converted to pixels
                    // Although this is a little odd since we overwrite the deltaX/Y
                    // properties with normalized deltas.
                    event.deltaMode = 0;

                    // Add event and delta to the front of the arguments
                    args.unshift(event, delta, deltaX, deltaY);

                    // Clearout lowestDelta after sometime to better
                    // handle multiple device types that give different
                    // a different lowestDelta
                    // Ex: trackpad = 3 and mouse wheel = 120
                    if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
                    nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

                    return ($.event.dispatch || $.event.handle).apply(this, args);
                }

                function nullLowestDelta() {
                    lowestDelta = null;
                }

                function shouldAdjustOldDeltas(orgEvent, absDelta) {
                    // If this is an older event and the delta is divisable by 120,
                    // then we are assuming that the browser is treating this as an
                    // older mouse wheel event and that we should divide the deltas
                    // by 40 to try and get a more usable deltaFactor.
                    // Side note, this actually impacts the reported scroll distance
                    // in older browsers and can cause scrolling to be slower than native.
                    // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
                    return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
                }

            }));

            // Return the AMD loader configuration so it can be used outside of this file
            return {
                define: S2.define,
                require: S2.require
            };
        }());

    // Autoload the jQuery bindings
    // We know that all of the modules exist above this, so we're safe
    var select2 = S2.require('jquery.select2');

    // Hold the AMD module references on the jQuery function that was just loaded
    // This allows Select2 to use the internal loader outside of this file, such
    // as in the language files.
    jQuery.fn.select2.amd = S2;

    // Return the Select2 instance for anyone who is importing it.
    return select2;
}));
//# sourceMappingURL=blotter.js.map