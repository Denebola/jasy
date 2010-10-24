var jQuery=(function(){var a=function(b,c){return new a.fn.init(b,c)},G=window.jQuery,p=window.$,e,D=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,H=/^.[^:#\[\.,]*$/,E=/\S/,r=/\s/,j=/^\s+/,m=/\s+$/,B=/\W/,F=/\d/,t=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,u=/^[\],:{}\s]*$/,y=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,w=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,v=/(?:^|:|,)(?:\s*\[)+/g,s=/(webkit)[ \/]([\w.]+)/,x=/(opera)(?:.*version)?[ \/]([\w.]+)/,q=/(msie) ([\w.]+)/,A=/(mozilla)(?:.*? rv:([\w.]+))?/,C=navigator.userAgent,f,l=false,c=[],b,z=Object.prototype.toString,h=Object.prototype.hasOwnProperty,d=Array.prototype.push,g=Array.prototype.slice,i=String.prototype.trim,n=Array.prototype.indexOf,k={};a.fn=a.prototype={init:function(b,c){var f,g,d,h;if(!b)return this;if(b.nodeType){this.context=this[0]=b;this.length=1;return this}if(b==="body"&&!c&&document.body){this.context=document;this[0]=document.body;this.selector="body";this.length=1;return this}if(typeof b==="string"){f=D.exec(b);if(f&&(f[1]||!c)){if(f[1]){h=c?c.ownerDocument||c:document;d=t.exec(b);d?a.isPlainObject(c)?(b=[document.createElement(d[1])],a.fn.attr.call(b,c,true)):b=[h.createElement(d[1])]:(d=a.buildFragment([f[1]],[h]),b=(d.cacheable?d.fragment.cloneNode(true):d.fragment).childNodes);return a.merge(this,b)}g=document.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return e.find(b);this.length=1;this[0]=g}this.context=document;this.selector=b;return this}if(!c&&!B.test(b)){this.selector=b;this.context=document;b=document.getElementsByTagName(b);return a.merge(this,b)}return!c||c.jquery?(c||e).find(b):a(c).find(b)}if(a.isFunction(b))return e.ready(b);b.selector!==undefined&&(this.selector=b.selector,this.context=b.context);return a.makeArray(b,this)},selector:"",jquery:"@VERSION",length:0,size:function(){return this.length},toArray:function(){return g.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this.slice(a)[0]:this[a]},pushStack:function(c,e,f){var b=a();a.isArray(c)?d.apply(b,c):a.merge(b,c);b.prevObject=this;b.context=this.context;e==="find"?b.selector=this.selector+(this.selector?" ":"")+f:e&&(b.selector=this.selector+"."+e+"("+f+")");return b},each:function(c,b){return a.each(this,c,b)},ready:function(b){a.bindReady();a.isReady?b.call(document,a):c&&c.push(b);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},g:function(){return this.pushStack(g.apply(this,arguments),"slice",g.call(arguments).join(","))},map:function(b){return this.pushStack(a.map(this,function(a,c){return b.call(a,c,a)}))},end:function(){return this.prevObject||a(null)},d:d,sort:[].sort,splice:[].splice};a.fn.init.prototype=a.fn;a.extend=a.fn.extend=function(){var b=arguments[0]||{},e=1,j=arguments.length,h=false,g,f,d,c,i;typeof b==="boolean"&&(h=b,b=arguments[1]||{},e=2);typeof b!=="object"&&!a.isFunction(b)&&(b={});j===e&&(b=this,--e);for(;e<j;e++)if((g=arguments[e])!=null){for(f in g){d=b[f];c=g[f];if(b===c)continue;h&&c&&(a.isPlainObject(c)||(i=a.isArray(c)))?(i?(i=false,clone=d&&a.isArray(d)?d:[]):clone=d&&a.isPlainObject(d)?d:{},b[f]=a.extend(h,clone,c)):c!==undefined&&(b[f]=c)}}return b};a.extend({noConflict:function(b){window.$=p;b&&(window.jQuery=G);return a},isReady:false,readyWait:1,ready:function(b){b===true&&a.readyWait--;if(!a.readyWait||b!==true&&!a.isReady){if(!document.body)return setTimeout(a.ready,1);a.isReady=true;if(b!==true&&--a.readyWait>0)return;if(c){var d,e=0;while(d=c[e++])d.call(document,a);c=null}a.fn.triggerHandler&&a(document).triggerHandler("ready")}},bindReady:function(){if(l)return;l=true;if(document.readyState==="complete")return setTimeout(a.ready,1);if(document.addEventListener)document.addEventListener("DOMContentLoaded",b,false),window.addEventListener("load",a.ready,false);else if(document.attachEvent){document.attachEvent("onreadystatechange",b);window.attachEvent("onload",a.ready);var c=false;try{c=window.frameElement==null}catch(d){}document.documentElement.doScroll&&c&&o()}},isFunction:function(b){return a.type(b)==="function"},isArray:Array.isArray||function(b){return a.type(b)==="array"},isWindow:function(a){return a&&typeof a==="object"&&"setInterval"in a},isNaN:function(a){return a==null||!F.test(a)||isNaN(a)},type:function(a){return a==null?String(a):k[z.call(a)]||"object"},isPlainObject:function(b){if(!b||a.type(b)!=="object"||b.nodeType||a.isWindow(b))return false;if(b.constructor&&!h.call(b,"constructor")&&!h.call(b.constructor.prototype,"isPrototypeOf"))return false;var c;for(c in b);return c===undefined||h.call(b,c)},isEmptyObject:function(a){for(var b in a)return false;return true},error:function(a){throw a},parseJSON:function(b){if(typeof b!=="string"||!b)return null;b=a.trim(b);if(u.test(b.replace(y,"@").replace(w,"]").replace(v,"")))return window.JSON&&window.JSON.parse?window.JSON.parse(b):new Function("return "+b)();a.error("Invalid JSON: "+b)},noop:function(){},globalEval:function(c){if(c&&E.test(c)){var d=document.getElementsByTagName("head")[0]||document.documentElement,b=document.createElement("script");b.type="text/javascript";a.support.scriptEval?b.appendChild(document.createTextNode(c)):b.text=c;d.insertBefore(b,d.firstChild);d.removeChild(b)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(b,e,h){var c,d=0,g=b.length,i=g===undefined||a.isFunction(b),f;if(h){if(i){for(c in b)if(e.apply(b[c],h)===false)break}else{for(;d<g;)if(e.apply(b[d++],h)===false)break}}else{if(i){for(c in b)if(e.call(b[c],c,b[c])===false)break}else for(f=b[0];d<g&&e.call(f,d,f)!==false;f=b[++d]);}return b},i:i?function(a){return a==null?"":i.call(a)}:function(a){return a==null?"":a.toString().replace(j,"").replace(m,"")},makeArray:function(b,f){var e=f||[],c;if(b!=null){c=a.type(b);b.length==null||c==="string"||c==="function"||c==="regexp"||a.isWindow(b)?d.call(e,b):a.merge(e,b)}return e},inArray:function(c,a){if(a.indexOf)return a.indexOf(c);for(var b=0,d=a.length;b<d;b++)if(a[b]===c)return b;return -1},merge:function(a,c){var d=a.length,b=0,e;if(typeof c.length==="number")for(e=c.length;b<e;b++)a[d++]=c[b];else while(c[b]!==undefined)a[d++]=c[b++];a.length=d;return a},grep:function(b,g,c){var f=[],d,a,e;c=!!c;for(a=0,e=b.length;a<e;a++){d=!!g(b[a],a);c!==d&&f.push(b[a])}return f},map:function(d,g,e){for(var a=[],c,b=0,f=d.length;b<f;b++){c=g(d[b],b,e);c!=null&&(a[a.length]=c)}return a.concat.apply([],a)},guid:1,proxy:function(c,b,d){arguments.length===2&&(typeof b==="string"?(d=c,c=d[b],b=undefined):b&&!a.isFunction(b)&&(d=b,b=undefined));!b&&c&&(b=function(){return c.apply(d||this,arguments)});c&&(b.guid=c.guid=c.guid||b.guid||a.guid++);return b},access:function(b,d,e,g,f,i){var j=b.length,h,c;if(typeof d==="object"){for(h in d)a.access(b,h,d[h],g,f,e);return b}if(e!==undefined){g=!i&&g&&a.isFunction(e);for(c=0;c<j;c++)f(b[c],d,g?e.call(b[c],c,f(b[c],d)):e,i);return b}return j?f(b[0],d):undefined},now:function(){return new Date().getTime()},uaMatch:function(a){a=a.toLowerCase();var b=s.exec(a)||x.exec(a)||q.exec(a)||a.indexOf("compatible")<0&&A.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},browser:{}});a.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(b,a){k["[object "+a+"]"]=a.toLowerCase()});f=a.uaMatch(C);f.browser&&(a.browser[f.browser]=true,a.browser.version=f.version);a.browser.webkit&&(a.browser.safari=true);n&&(a.inArray=function(a,b){return n.call(b,a)});r.test("\u00a0")||(j=/^[\s\xA0]+/,m=/[\s\xA0]+$/);e=a(document);document.addEventListener?b=function(){document.removeEventListener("DOMContentLoaded",b,false);a.ready()}:document.attachEvent&&(b=function(){document.readyState==="complete"&&(document.detachEvent("onreadystatechange",b),a.ready())});function o(){if(a.isReady)return;try{document.documentElement.doScroll("left")}catch(b){setTimeout(o,1);return}a.ready()}return window.jQuery=window.$=a})();
