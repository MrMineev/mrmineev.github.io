!function(){"use strict";var e,t,n,o,r={29568:function(e,t,n){function o(e,t){0}n.d(t,{O:function(){return o}})},64796:function(e,t,n){function o(e,t){return Object.defineProperty(t,"updateDefaults",{value:function(t){return e.updateDefaults(t)}}),t}n.d(t,{f:function(){return o}})},12033:function(e,t,n){n.d(t,{H:function(){return r}});var o=n(64796);function r(e){let{biLoggerFactory:t,userConfig:n={}}=e;const r=t(n);return(0,o.f)(r,r.logger())}},6304:function(e){e.exports=BusinessManagerAPI},87363:function(e){e.exports=React},61533:function(e){e.exports=ReactDOM},12611:function(e){e.exports=_},74481:function(e){e.exports=reactModuleContainer}},a={};function s(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={id:e,loaded:!1,exports:{}};return r[e].call(n.exports,n,n.exports,s),n.loaded=!0,n.exports}s.m=r,s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,{a:t}),t},t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},s.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var r=Object.create(null);s.r(r);var a={};e=e||[null,t({}),t([]),t(t)];for(var i=2&o&&n;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((function(e){a[e]=function(){return n[e]}}));return a.default=function(){return n},s.d(r,a),r},s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.f={},s.e=function(e){return Promise.all(Object.keys(s.f).reduce((function(t,n){return s.f[n](e,t),t}),[]))},s.u=function(e){return({183:"messages_da-json",206:"da39a3ee5e6b4b0d3255bfef95601890afd80709",309:"cairo-locale-messages_pl-json",376:"messages_es-json",913:"cairo-locale-messages_ca-json",1123:"cairo-locale-messages_uk-json",1176:"messages_ko-json",1387:"messages_zh-json",1394:"messages_uk-json",1549:"cairo-locale-messages_nl-json",1723:"cairo-locale-messages_sl-json",1770:"cairo-locale-messages_fi-json",1803:"messages_sv-json",1937:"cairo-locale-messages_zh-json",1953:"cairo-locale-messages_vi-json",2124:"cairo-locale-messages_visuale2e-json",2161:"cairo-locale-messages_el-json",2309:"messages_vi-json",2417:"cairo-locale-messages_pt-json",2514:"cairo-locale-messages_ko-json",2627:"messages_lt-json",2793:"BRANDED_APPS.pages.welcome",2908:"cairo-locale-messages_tr-json",2910:"cairo-locale-messages_hi-json",3080:"cairo-locale-messages_bg-json",3148:"messages_el-json",3338:"messages_it-json",3785:"cairo-locale-messages_sk-json",3854:"messages_fr-json",3930:"messages_hi-json",3995:"messages_ar-json",4030:"messages_ja-json",4115:"cairo-locale-messages_th-json",4350:"messages_de-json",4683:"messages_ru-json",5021:"messages_id-json",5307:"cairo-locale-messages_no-json",5346:"cairo-locale-messages_de-json",5380:"messages_en-json",5483:"cairo-locale-messages_fr-json",5976:"cairo-locale-messages_it-json",5998:"messages_fi-json",6375:"BRANDED_APPS.pages.index",6496:"messages_hu-json",6628:"cairo-locale-messages_ms-json",6898:"MagnifyingGlassArt",7073:"cairo-locale-messages_hu-json",7080:"0b0e6d9059bb68ebccdd4fb7096c85db7bf3ea4d",7184:"messages_tr-json",7364:"cairo-locale-messages_he-json",7586:"cairo-locale-messages_ja-json",7690:"cairo-locale-messages_id-json",8540:"cairo-locale-messages_cs-json",8962:"cairo-locale-messages_tl-json",9059:"messages_th-json",9072:"AddItemEmptyState",9164:"cairo-locale-messages_ro-json",9172:"messages_he-json",9278:"messages_pl-json",9443:"messages_pt-json",9533:"cairo-locale-messages_lt-json",9610:"cairo-locale-messages_ru-json",9629:"messages_no-json",9693:"cairo-locale-messages_sv-json",9735:"cairo-locale-messages_da-json",9754:"cairo-locale-messages_es-json",9833:"messages_nl-json",9884:"messages_cs-json",9965:"cairo-locale-messages_ar-json"}[e]||e)+".chunk.min.js"},s.miniCssF=function(e){return({2793:"BRANDED_APPS.pages.welcome",6375:"BRANDED_APPS.pages.index"}[e]||e)+".chunk.min.css"},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.hmd=function(e){return(e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n={},o="_wix_branded_apps_business_manager:",s.l=function(e,t,r,a){if(n[e])n[e].push(t);else{var i,l;if(void 0!==r)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==o+r){i=d;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.setAttribute("data-webpack",o+r),i.src=e,0!==i.src.indexOf(window.location.origin+"/")&&(i.crossOrigin="anonymous")),n[e]=[t];var f=function(t,o){i.onerror=i.onload=null,clearTimeout(p);var r=n[e];if(delete n[e],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(o)})),t)return t(o)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),l&&document.head.appendChild(i)}},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},s.sti=function(e,t,n,o){if("undefined"!=typeof document){var r=document,a=r.head,s=r.createElement("style");s.setAttribute("st_id",e),s.setAttribute("st_depth",n),s.setAttribute("st_runtime",o),s.textContent=t;for(var i,l=a.querySelectorAll('style[st_runtime="'+o+'"]'),u=!1,c=0;c<l.length;c++){var d=l[c],f=d.getAttribute("st_id"),p=Number(d.getAttribute("st_depth"));if(f!==e)!u&&n<p&&(a.insertBefore(s,d),u=!0),i=d;else{if(p===n)return void a.replaceChild(s,d);d.parentElement.removeChild(d)}}u||(i?a.insertBefore(s,i.nextElementSibling):a.appendChild(s))}},function(e){var t="-",n="--",o="---";function r(e,r,a){return!1===a||null==a||a!=a?"":!0===a?function(e,t){return e+n+t}(e,r):function(e,n,r){return e+o+n+t+r.length+t+r.replace(/\s/gm,"_")}(e,r,a.toString())}(e=e||{}).sts=function(e){for(var t=[],n=1;n<arguments.length;n++){var o=arguments[n];if(o)if("string"==typeof o)t[t.length]=o;else if(2===n)for(var a in o){var s=r(e,a,o[a]);s&&(t[t.length]=s)}}return t.join(" ")},e.stc=function(e,t){var n=[];for(var o in t){var a=r(e,o,t[o]);a&&n.push(a)}return n.join(" ")}}(s),s.p="https://static.parastorage.com/services/branded-apps-business-manager/f1fc4b63dba59564cd2e76e58fbbee7128db0dca8e4cbdbe0ee80d32/",function(){if("undefined"!=typeof document){var e=function(e){return new Promise((function(t,n){var o=s.miniCssF(e),r=s.p+o;if(function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=(s=n[o]).getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(r===e||r===t))return s}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){var s;if((r=(s=a[o]).getAttribute("data-href"))===e||r===t)return s}}(o,r))return t();!function(e,t,n,o,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=function(n){if(a.onerror=a.onload=null,"load"===n.type)o();else{var s=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=s,l.request=i,a.parentNode&&a.parentNode.removeChild(a),r(l)}},a.href=t,0!==a.href.indexOf(window.location.origin+"/")&&(a.crossOrigin="anonymous"),n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a)}(e,r,null,t,n)}))},t={1261:0};s.f.miniCss=function(n,o){t[n]?o.push(t[n]):0!==t[n]&&{1479:1,1972:1,2237:1,2349:1,2793:1,2971:1,3770:1,5004:1,5919:1,5987:1,6161:1,6375:1,6634:1,6707:1,6786:1,8202:1,8408:1,9812:1}[n]&&o.push(t[n]=e(n).then((function(){t[n]=0}),(function(e){throw delete t[n],e})))}}}(),function(){var e={1261:0};s.f.j=function(t,n){var o=s.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else if(/^(1479|2349|6161|8202|8408)$/.test(t))e[t]=0;else{var r=new Promise((function(n,r){o=e[t]=[n,r]}));n.push(o[2]=r);var a=s.p+s.u(t),i=new Error;s.l(a,(function(n){if(s.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",i.name="ChunkLoadError",i.type=r,i.request=a,o[1](i)}}),"chunk-"+t,t)}};var t=function(t,n){var o,r,a=n[0],i=n[1],l=n[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(o in i)s.o(i,o)&&(s.m[o]=i[o]);if(l)l(s)}for(t&&t(n);u<a.length;u++)r=a[u],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0},n=self.webpackJsonp__wix_branded_apps_business_manager=self.webpackJsonp__wix_branded_apps_business_manager||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),function(){var e=s(6304),t=s(74481),n=s(87363),o=s.n(n),r=function(){return r=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},r.apply(this,arguments)},a=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function s(e){try{l(o.next(e))}catch(e){a(e)}}function i(e){try{l(o.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}l((o=o.apply(e,t||[])).next())}))},i=function(e,t){var n,o,r,a,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,o=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(r=s.trys,(r=r.length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){s.label=a[1];break}if(6===a[0]&&s.label<r[1]){s.label=r[1],r=a;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(a);break}r[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}},l=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var o,r,a=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(o=a.next()).done;)s.push(o.value)}catch(e){r={error:e}}finally{try{o&&!o.done&&(n=a.return)&&n.call(a)}finally{if(r)throw r.error}}return s};function u(e,s){var u=this,c=s.flowAPIDelegate,d=s.context,f=d.enableTranslationsHMR,p=d.monitorHttpClient,m=e.component,g=e.loadReactComponent,h=e.filesHook,b=e.resolveHook,v=m.maybeTranslationsModel;return function(e){var s=l((0,n.useState)(),2),d=s[0],y=s[1],w=l((0,n.useState)((function(){return function(e){var t,n=m.componentId,o=c.createFedopsLogger(n),r=c.createComponentEssentials({componentId:n}).panoramaClient;p&&(t=c.bmModule._essentials.createHttpClientWithMonitoring({errorMonitor:c.moduleFlowAPI.errorMonitor,fedopsLogger:o}));var a=v?c.createComponentTranslationsAPI(v):void 0;return{componentHooksFlowAPI:c.getComponentHooksFlowAPI(m,{fedopsLogger:o,panoramaClient:r,maybeComponentTranslationsAPI:a,ownProps:e,httpClientWithMonitoring:t}),fedopsLogger:o,maybeComponentTranslationsAPI:a,httpClientWithMonitoring:t,panoramaClient:r}}(e)})),1),_=w[0],I=_.componentHooksFlowAPI,P=_.fedopsLogger,A=_.maybeComponentTranslationsAPI,j=_.httpClientWithMonitoring,M=_.panoramaClient;(0,n.useState)((function(){M.reportLoadStart()}));var C=l((0,n.useState)((function(){return(0,t.ReactLoadableComponent)(m.componentId,(function(){return a(u,void 0,void 0,(function(){var e,t,n,o,a,s,u,d;return i(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),f||c.prefetchTranslations(A),e=null==b?void 0:b.call(c.bmModule,I),t=g(),n=c.createBMComponentAPI(m,{fedopsLogger:P,componentTranslationsAPI:A,httpClientWithMonitoring:j,panoramaClient:M}),[4,Promise.all([e,t,n])];case 1:return o=l.apply(void 0,[i.sent(),3]),a=o[0],s=o[1],u=o[2],[2,r(r({default:s},a),{_componentFlowAPI:u})];case 2:throw d=i.sent(),y(d),d;case 3:return[2]}}))}))}),null==h?void 0:h.call(c.bmModule,I))})),1),x=C[0];if(d)throw d;return o().createElement(x,r({},e))}}var c=s(12611),d=s(29568);function f(e,t,n){0}var p=Sentry;function m(e){return!!e&&"sentry"in e}var g=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function s(e){try{l(o.next(e))}catch(e){a(e)}}function i(e){try{l(o.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}l((o=o.apply(e,t||[])).next())}))},h=function(e,t){var n,o,r,a,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,o=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(r=s.trys,(r=r.length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){s.label=a[1];break}if(6===a[0]&&s.label<r[1]){s.label=r[1],r=a;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(a);break}r[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}},b=function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],o=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},v=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var o,r,a=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(o=a.next()).done;)s.push(o.value)}catch(e){r={error:e}}finally{try{o&&!o.done&&(n=a.return)&&n.call(a)}finally{if(r)throw r.error}}return s},y=function(e){var t=e.localeDistPath,n=e.availableLocales,o=e.errorReporter,r=e.httpClient,a=new Set(n),i=new Map;return{asyncMessagesLoader:function(e){return g(void 0,void 0,void 0,(function(){var n,l;return h(this,(function(u){return(n=i.get(e))?[2,n]:(l=function(e){return g(void 0,void 0,void 0,(function(){var n,i,l,u,c;return h(this,(function(d){switch(d.label){case 0:if(null==t||!a.has(e))return[2,Promise.reject(new Error("Locale assets for ".concat(e," are not provided")))];n="".concat(s.p).concat(t,"/messages_").concat(e,".json"),d.label=1;case 1:return d.trys.push([1,5,,6]),[4,r.get(n)];case 2:return i=d.sent(),((l=i.status)>=200&&l<300||304===l)&&null!=i.data?[2,i.data]:o?[4,String(i.data)]:[3,4];case 3:u=d.sent().substring(0,100),m(o)?o.captureMessage("Can't fetch locale ".concat(e),{level:p.Severity.Error,contexts:{requestDetails:{url:n,body:u,status:l}}}):o.captureMessage("Can't fetch locale ".concat(e),p.Severity.Error,{captureContext:{contexts:{requestDetails:{url:n,body:u,status:l}}}}),d.label=4;case 4:return[2,Promise.reject(new Error("Can't fetch locale ".concat(e,", status code: ").concat(l)))];case 5:return c=d.sent(),o&&(m(o)?o.captureException(c,{level:p.Severity.Error,contexts:{errorDetails:{message:"Can't fetch locale ".concat(e," due to fetch error"),url:n}}}):o.captureException(c,{captureContext:{level:p.Severity.Error,contexts:{errorDetails:{message:"Can't fetch locale ".concat(e," due to fetch error"),url:n}}}})),[2,Promise.reject(new Error("Can't fetch locale ".concat(e," due to fetch error")))];case 6:return[2]}}))}))}(e),i.set(e,l),[2,l])}))}))},addLocaleMessages:function(e){var t,n;try{for(var o=b(e.entries()),r=o.next();!r.done;r=o.next()){var a=v(r.value,2),s=a[0],l=a[1];i.set(s,Promise.resolve(l))}}catch(e){t={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}},removeLocaleMessages:function(e){i.delete(e)}}},w=function(){return w=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},w.apply(this,arguments)},_=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function s(e){try{l(o.next(e))}catch(e){a(e)}}function i(e){try{l(o.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}l((o=o.apply(e,t||[])).next())}))},I=function(e,t){var n,o,r,a,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,o=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(r=s.trys,(r=r.length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){s.label=a[1];break}if(6===a[0]&&s.label<r[1]){s.label=r[1],r=a;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(a);break}r[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}};function P(e){var t,n,o,r=this,a=e.bmModule,s=e.module,i=e.optionalDeps,l=s.config,u=l.translations,d=l.sentry,f=s.maybeTranslationsModel,p=(null==d?void 0:d.DSN)&&!(null==d?void 0:d.errorMonitor)?function(e,t){var n,o,r,a,s,i,l,u=w(w({},{release:"".concat("branded-apps-business-manager","@").concat("f1fc4b63dba59564cd2e76e58fbbee7128db0dca8e4cbdbe0ee80d32"),beforeSend:(n=window.location.hostname,o=window.navigator.userAgent,r=window.document.cookie,a=/(^|;)\s*automation\s*=\s*sled:/.test(r),s=/localhost|127\.0\.0\.1|::1|\.local|local.wix.com|^$/i.test(n),i=/Googlebot|AdsBot-Google-Mobile|bingbot|BingPreview|facebookexternalhit|Baiduspider|YandexBot/i.test(o),l=/BonEcho|NewsGator|SeaMonkey|iTunes|Epiphany|Konqueror|Sleipnir|IceWeasel/i.test(o),function(e){return s?e.environment="development":i?e.environment="bot":l?e.environment="invalid_useragent":a&&(e.environment="sled"),e}),beforeBreadcrumb:function(e,t){var n,o=e.category,r=o&&("ui.click"===o||"ui.input"===o),a=null===(n=null==t?void 0:t.event)||void 0===n?void 0:n.target;if(r&&a){var s=a.closest("[data-hook]");if(s){var i=s.getAttribute("data-hook");e.message=a===s?"".concat(e.message,' [data-hook="').concat(i,'"]'):"".concat(e.message,' parent:[data-hook="').concat(i,'"]')}}return e}}),{dsn:t}),c=e._essentials.createSentryHub(u),d=c.client,f=c.hub;return function(e,t){var n=t.moduleParams;e.setUser({id:n.userId})}(f,{moduleParams:e.moduleParams}),{client:d,hub:f}}(a,d.DSN):void 0,m=(null==d?void 0:d.DSN)&&(null==d?void 0:d.errorMonitor)?a._essentials.createErrorMonitor({dsn:d.DSN,appName:"branded-apps-business-manager",version:"f1fc4b63dba59564cd2e76e58fbbee7128db0dca8e4cbdbe0ee80d32"}):void 0;if(f){var g=(null==p?void 0:p.hub)||m,h=y({localeDistPath:null===(t=f.assets)||void 0===t?void 0:t.localeDistPath,availableLocales:f.availableLocales,errorReporter:g,httpClient:a._essentials.httpClient}),b=h.asyncMessagesLoader,v=h.addLocaleMessages,P=a._essentials.createI18n({asyncMessagesLoader:b,useSuspense:null===(n=null==u?void 0:u.suspense)||void 0===n||n,disableAutoInit:!0}),A=(0,c.once)((function(){return _(r,void 0,void 0,(function(){return I(this,(function(e){switch(e.label){case 0:return P.isInitialized?[3,2]:[4,P.init()];case 1:e.sent(),e.label=2;case 2:return[2,P]}}))}))}));o={i18n:P,asyncMessagesLoader:b,addLocaleMessages:v,init:A}}var j=(0,c.once)((function(){return _(r,void 0,void 0,(function(){var e;return I(this,(function(t){switch(t.label){case 0:return[4,i.loadOptionalFlowAPIDeps()];case 1:return[2,null==(e=t.sent().createBILogger)?void 0:e({biLoggerFactory:a._essentials.biLoggerFactory})]}}))}))}));return{maybeSentry:p,maybeErrorMonitor:m,maybeTranslations:o,getBILogger:j,experiments:a._essentials.experiments}}var A=function(){return A=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},A.apply(this,arguments)},j=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function s(e){try{l(o.next(e))}catch(e){a(e)}}function i(e){try{l(o.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}l((o=o.apply(e,t||[])).next())}))},M=function(e,t){var n,o,r,a,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,o=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(r=s.trys,(r=r.length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){s.label=a[1];break}if(6===a[0]&&s.label<r[1]){s.label=r[1],r=a;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(a);break}r[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}};var C,x=function(){return x=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},x.apply(this,arguments)},L=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function s(e){try{l(o.next(e))}catch(e){a(e)}}function i(e){try{l(o.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}l((o=o.apply(e,t||[])).next())}))},S=function(e,t){var n,o,r,a,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,o=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(r=s.trys,(r=r.length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){s.label=a[1];break}if(6===a[0]&&s.label<r[1]){s.label=r[1],r=a;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(a);break}r[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}},D=function(){function t(e){this.module=e.module,this.optionalDeps=e.optionalDeps,this.bmModule=e.bmModule,this.artifactId=e.artifactId,this.artifactVersion=e.artifactVersion}return Object.defineProperty(t.prototype,"flowAPIInstances",{get:function(){var e=this.optionalDeps;return null==this._flowAPIInstances&&(this._flowAPIInstances=P({optionalDeps:e,bmModule:this.bmModule,module:this.module})),this._flowAPIInstances},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"moduleFlowAPI",{get:function(){var t=this,n=t.bmModule,o=t.module,r=t.optionalDeps;return null==this._moduleFlowAPI&&(this._moduleFlowAPI=function(t){var n,o=this,r=t.module,a=t.flowAPIInstances,s=t.bmModule,i=t.optionalDeps,l=r.config,u=s._essentials.httpClient,p=s._essentials.createFedopsLogger((0,c.kebabCase)(r.moduleId),A({},null===(n=r.config.fedops)||void 0===n?void 0:n.config)),m=(0,c.once)((function(){return j(o,void 0,void 0,(function(){return M(this,(function(e){return[2,p]}))}))})),g=(0,c.once)((function(){return j(o,void 0,void 0,(function(){var e;return M(this,(function(t){return e=a.maybeTranslations,(0,d.O)(e,"i18n"),[2,e.init()]}))}))})),h=(0,c.once)((function(){return j(o,void 0,void 0,(function(){var e;return M(this,(function(t){switch(t.label){case 0:return[4,a.getBILogger()];case 1:return e=t.sent(),(0,d.O)(e,"biLogger"),[2,e]}}))}))}));return{getBILogger:h,get biLogger(){return i.loadOptionalFlowAPIDeps().createBILogger({biLoggerFactory:s._essentials.biLoggerFactory})},_translations:a.maybeTranslations,getI18n:g,get experiments(){var e=a.experiments;return(0,d.O)(e,"experiments"),e},getModuleFedopsLogger:m,moduleFedopsLogger:p,module:s,get moduleParams(){return s.moduleParams},sentryAndHub:a.maybeSentry,get sentry(){var e;return f(a.maybeSentry,null===(e=l.sentry)||void 0===e||e.errorMonitor),a.maybeSentry.hub},get errorMonitor(){var e;return f(a.maybeErrorMonitor,null===(e=l.sentry)||void 0===e||e.errorMonitor),a.maybeErrorMonitor},httpClient:u,moduleInfo:r.config,getCurrentInstance:function(t){var n,o=null!==(n=null!=t?t:r.config.appDefinitionId)&&void 0!==n?n:e.appDefIds.metaSite;return(0,e.getCurrentInstance)(o)},createCurrencyFormatter:s._essentials.createCurrencyFormatter,formatAddress:s._essentials.formatAddress}}({module:o,bmModule:n,optionalDeps:r,flowAPIInstances:this.flowAPIInstances})),this._moduleFlowAPI},enumerable:!1,configurable:!0}),t.prototype.createFedopsLogger=function(e){var t,n=this.bmModule,o=this.module;return n._essentials.createFedopsLogger(e,x({},null===(t=o.config.fedops)||void 0===t?void 0:t.config))},t.prototype.createComponentEssentials=function(e){var t=e.componentId,n=this,o=n.bmModule,r=n.module,a=n.artifactVersion,s=r.config.sentry;return o._essentials.createComponentEssentials({artifactVersion:a,componentId:t,sentryDsn:null==s?void 0:s.DSN})},t.prototype.createComponentTranslationsAPI=function(e){var t,n,o,r,a=this,s=this.bmModule,i=this.moduleFlowAPI,l=(null===(t=i.sentryAndHub)||void 0===t?void 0:t.hub)||i.errorMonitor,u=y({localeDistPath:null===(n=e.assets)||void 0===n?void 0:n.localeDistPath,availableLocales:e.availableLocales,errorReporter:l,httpClient:i.httpClient}),d=u.asyncMessagesLoader,f=u.addLocaleMessages,p=s._essentials.createI18n({asyncMessagesLoader:d,useSuspense:null===(r=null===(o=this.module.config.translations)||void 0===o?void 0:o.suspense)||void 0===r||r,disableAutoInit:!0}),m=(0,c.once)((function(){return L(a,void 0,void 0,(function(){return S(this,(function(e){switch(e.label){case 0:return p.isInitialized?[3,2]:[4,p.init()];case 1:e.sent(),e.label=2;case 2:return[2,p]}}))}))}));return{i18n:p,init:m,asyncMessagesLoader:d,addLocaleMessages:f}},t.prototype.createBMMethodFlowAPI=function(e){var t=this,n=this.moduleFlowAPI,o=this.module,r=this.createFedopsLogger(e.methodId);return{get module(){return n.module},get moduleInfo(){return n.moduleInfo},get httpClient(){return n.httpClient},get sentry(){var e,t;return f(n.sentryAndHub,null===(t=null===(e=o.config)||void 0===e?void 0:e.sentry)||void 0===t||t.errorMonitor),n.sentryAndHub.hub},get errorMonitor(){var e,t;return f(n.errorMonitor,null===(t=null===(e=o.config)||void 0===e?void 0:e.sentry)||void 0===t||t.errorMonitor),n.errorMonitor},get moduleParams(){return n.moduleParams},getI18n:n.getI18n,get experiments(){return n.experiments},getBILogger:n.getBILogger,get biLogger(){return n.biLogger},getModuleFedopsLogger:n.getModuleFedopsLogger,moduleFedopsLogger:n.moduleFedopsLogger,getFedopsLogger:function(){return L(t,void 0,void 0,(function(){return S(this,(function(e){return[2,r]}))}))},fedopsLogger:r,getCurrentInstance:n.getCurrentInstance,createCurrencyFormatter:n.createCurrencyFormatter,formatAddress:n.formatAddress}},t.prototype.getComponentHooksFlowAPI=function(e,t){var n=this,o=t.fedopsLogger,r=t.panoramaClient,a=t.maybeComponentTranslationsAPI,s=t.ownProps,i=t.httpClientWithMonitoring,l=this.moduleFlowAPI,u=this.module,c=a?a.init:l.getI18n;return{get module(){return l.module},get moduleInfo(){return l.moduleInfo},get httpClient(){return null!=i?i:l.httpClient},get sentry(){var e,t;return f(l.sentryAndHub,null===(t=null===(e=u.config)||void 0===e?void 0:e.sentry)||void 0===t||t.errorMonitor),l.sentryAndHub.hub},get errorMonitor(){var e,t;return f(l.errorMonitor,null===(t=null===(e=u.config)||void 0===e?void 0:e.sentry)||void 0===t||t.errorMonitor),l.errorMonitor},get moduleParams(){return l.moduleParams},getModuleFedopsLogger:l.getModuleFedopsLogger,moduleFedopsLogger:l.moduleFedopsLogger,getI18n:c,get experiments(){return l.experiments},getBILogger:l.getBILogger,get biLogger(){return l.biLogger},componentInfo:{componentId:e.componentId,type:e.componentType,fileName:e.fileName,route:e.route},getFedopsLogger:function(){return L(n,void 0,void 0,(function(){return S(this,(function(e){return[2,o]}))}))},fedopsLogger:o,panoramaClient:r,getCurrentInstance:l.getCurrentInstance,createCurrencyFormatter:l.createCurrencyFormatter,formatAddress:l.formatAddress,ownProps:s}},t.prototype.createBMComponentAPI=function(e,t){var n=t.fedopsLogger,o=t.componentTranslationsAPI,r=t.httpClientWithMonitoring,a=t.panoramaClient;return L(this,void 0,void 0,(function(){var t,s,i,l,u,c,p,m;return S(this,(function(g){switch(g.label){case 0:return s=(t=this).moduleFlowAPI,i=t.flowAPIInstances,l=t.module,u=i.maybeTranslations,c=i.experiments,[4,(0,i.getBILogger)()];case 1:return p=g.sent(),[2,{_translations:m=null!=o?o:u,module:l,moduleInfo:s.moduleInfo,get httpClient(){return null!=r?r:s.httpClient},get _sentry(){var e;return null===(e=s.sentryAndHub)||void 0===e?void 0:e.hub},get sentry(){var e,t;return f(s.sentryAndHub,null===(t=null===(e=l.config)||void 0===e?void 0:e.sentry)||void 0===t||t.errorMonitor),s.sentryAndHub.hub},get errorMonitor(){var e,t;return f(s.errorMonitor,null===(t=null===(e=l.config)||void 0===e?void 0:e.sentry)||void 0===t||t.errorMonitor),s.errorMonitor},get moduleParams(){return s.moduleParams},get i18n(){return(0,d.O)(m,"i18n"),m.i18n},get biLogger(){return(0,d.O)(p,"biLogger"),p},get experiments(){return c},componentInfo:{componentId:e.componentId,type:e.componentType,fileName:e.fileName,route:e.route},get fedopsLogger(){return(0,d.O)(n,"fedopsLogger"),n},get panoramaClient(){return(0,d.O)(a,"panoramaClient"),a},get createCurrencyFormatter(){return s.createCurrencyFormatter},get formatAddress(){return s.formatAddress}}]}}))}))},t.prototype.prefetchTranslations=function(e){return L(this,void 0,void 0,(function(){var t,n;return S(this,(function(o){switch(o.label){case 0:return t=this.moduleFlowAPI._translations,[4,null==(n=null!=e?e:t)?void 0:n.init()];case 1:return o.sent(),[2]}}))}))},t}(),k=(C=function(e,t){return C=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},C(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}C(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),E=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function s(e){try{l(o.next(e))}catch(e){a(e)}}function i(e){try{l(o.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}l((o=o.apply(e,t||[])).next())}))},F=function(e,t){var n,o,r,a,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,o=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(r=s.trys,(r=r.length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){s.label=a[1];break}if(6===a[0]&&s.label<r[1]){s.label=r[1],r=a;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(a);break}r[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}},O=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var o,r,a=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(o=a.next()).done;)s.push(o.value)}catch(e){r={error:e}}finally{try{o&&!o.done&&(n=a.return)&&n.call(a)}finally{if(r)throw r.error}}return s},T=function(e,t,n){if(n||2===arguments.length)for(var o,r=0,a=t.length;r<a;r++)!o&&r in t||(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};var N,B,H,R,G,W,q,z,V,U,$,J,K,Y,Q,X,Z,ee=s(12033);B=(N={context:{enableTranslationsHMR:!1,artifactId:"branded-apps-business-manager",fullArtifactId:"com.wixpress.branded-apps-business-manager",monitorHttpClient:!1},requireableModule:{module:{moduleId:"BRANDED_APPS",config:{$schema:"./target/schemas/.application.schema.json",moduleId:"BRANDED_APPS",isCoreService:!0,routeNamespace:"branded-apps",translations:{enabled:!0},sentry:{DSN:"https://cdb5884f40e348c68b1ad86f4dc5e637@sentry.wixpress.com/1489",id:"cdb5884f40e348c68b1ad86f4dc5e637",projectName:"dashboard",teamName:"branded-apps",errorMonitor:!0},appDefinitionId:"eec3496e-44a8-45ac-9581-868a67345be8",moduleBundleName:"module"},fedopsPath:"/home/builduser/work/bf236ad639e98eaa/packages/branded-apps-business-manager/fedops.json",maybeTranslationsModel:{assets:{localeDir:"/home/builduser/work/bf236ad639e98eaa/packages/branded-apps-business-manager/src/assets/locale",localeDistPath:"assets/locale"},availableLocales:["ar","cs","da","de","el","en","es","fi","fr","he","hi","hu","id","it","ja","ko","lt","nl","no","pl","pt","ru","sv","th","tr","uk","vi","zh"],messagesEnFile:"messages_en.json"}}},pages:[{component:{componentId:"BRANDED_APPS.pages.index",componentType:"page",componentName:"BRANDED_APPS.pages.index",fileName:"index.tsx",route:"branded-apps",maybeTranslationsModel:null},loadReactComponent:async()=>(await Promise.all([s.e(7080),s.e(6375)]).then(s.bind(s,82890))).default},{component:{componentId:"BRANDED_APPS.pages.welcome",componentType:"page",componentName:"BRANDED_APPS.pages.welcome",fileName:"welcome.tsx",route:"branded-apps/welcome",maybeTranslationsModel:null},loadReactComponent:async()=>(await Promise.all([s.e(7080),s.e(2793)]).then(s.bind(s,62733))).default}],exportedComponents:[],extensionComponents:[],methods:[],optionalDeps:{loadOptionalFlowAPIDeps:()=>({createBILogger:ee.H})}}).context,H=N.requireableModule,R=H.module,G=H.configHook,W=H.initHook,q=N.pages,z=N.exportedComponents,V=N.extensionComponents,U=N.methods,$=N.optionalDeps,J=R.config,K=R.moduleId,Y=J.moduleConfigurationId,Q=B.artifactId,X=B.fullArtifactId,Z=function(n){function o(e){var t=n.call(this,e)||this;return t.state={},t.setState=function(e){return t.state=e},t.setArtifactId(Q),t.setFullArtifactId(X),Y&&t.setModuleConfigurationId(Y),t.flowAPIDelegate=new D({bmModule:t,module:R,optionalDeps:$,artifactId:Q,artifactVersion:"f1fc4b63dba59564cd2e76e58fbbee7128db0dca8e4cbdbe0ee80d32"}),t}return k(o,n),o.prototype.register=function(n){var o=this;this.moduleParams=n;var r=this.flowAPIDelegate,a=r.moduleFlowAPI,s=a.sentryAndHub,i=a.errorMonitor;q.forEach((function(t){var n=t.component,a=n.componentId,l=n.componentName;(i||s)&&(0,e.registerPageComponentMonitors)(a,{errorMonitor:i,sentryClient:null==s?void 0:s.client}),o.registerPageComponent(l,u(t,{context:B,module:R,flowAPIDelegate:r}))})),V.forEach((function(e){var t=e.component.componentId;o.registerComponentWithModuleParams(t,u(e,{context:B,module:R,flowAPIDelegate:r}),{suspense:!0})})),z.forEach((function(e){var t=e.component.componentId;o.registerComponentWithModuleParams(t,u(e,{context:B,module:R,flowAPIDelegate:r}),{suspense:!0})})),U.forEach((function(e){var n=e.method,a=e.fn;t.ModuleRegistry.registerMethod(n.methodId,(function(){var e=r.createBMMethodFlowAPI(n);return!1===n.lazy?a().bind(o,e):function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return E(o,void 0,void 0,(function(){return F(this,(function(n){switch(n.label){case 0:return[4,a()];case 1:return[2,n.sent().bind(this,e).apply(void 0,T([],O(t),!1))]}}))}))}}))}))},Object.defineProperty(o.prototype,"_essentials",{get:function(){return this.appEssentials},enumerable:!1,configurable:!0}),o.prototype.init=function(e){var t=this.flowAPIDelegate;W&&W.call(this,t.moduleFlowAPI)},o.prototype.config=function(e,t){var n=this.flowAPIDelegate;G&&G.call(this,n.moduleFlowAPI,e,t)},o.prototype.prefetchFlowAPI=function(){var e,t=this.flowAPIDelegate;return Promise.all([null===(e=t.moduleFlowAPI._translations)||void 0===e?void 0:e.init()])},o.prototype.prefetchComponent=function(e){var t=this.prefetchFlowAPI(),n=z.find((function(t){return t.component.componentId===e}));if(null!=n)return Promise.all([t,n.loadReactComponent()])},o}(e.BusinessManagerModule),(0,e.registerModule)(K,Z)}()}();
//# sourceMappingURL=module.bundle.min.js.map