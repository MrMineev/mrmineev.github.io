!function(){"use strict";var e,t,n={4796:function(e,t,n){function o(e,t){return Object.defineProperty(t,"updateDefaults",{value:function(t){return e.updateDefaults(t)}}),t}n.d(t,{f:function(){return o}})},4032:function(e,t,n){n.d(t,{H:function(){return r}});var o=n(4796);function r(e){let{biLoggerFactory:t,userConfig:n={}}=e;const r=t(n);return(0,o.f)(r,r.logger())}},6304:function(e){e.exports=BusinessManagerAPI},7363:function(e){e.exports=React},1533:function(e){e.exports=ReactDOM},3944:function(e){e.exports=URI},2611:function(e){e.exports=_},4481:function(e){e.exports=reactModuleContainer}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={id:e,loaded:!1,exports:{}};return n[e].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}r.m=n,r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))},r.u=function(e){return{460:"promote-seo-tools",865:"promote-seo-tools.getGoogleApi"}[e]+".chunk.min.js"},r.miniCssF=function(e){return"promote-seo-tools.chunk.min.css"},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.hmd=function(e){return(e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e={},t="_wix_promote_seo_tools_bm_component:",r.l=function(n,o,i,a){if(e[n])e[n].push(o);else{var l,s;if(void 0!==i)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var f=u[c];if(f.getAttribute("src")==n||f.getAttribute("data-webpack")==t+i){l=f;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+i),l.src=n,0!==l.src.indexOf(window.location.origin+"/")&&(l.crossOrigin="anonymous")),e[n]=[o];var d=function(t,o){l.onerror=l.onload=null,clearTimeout(p);var r=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((function(e){return e(o)})),t)return t(o)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=d.bind(null,l.onerror),l.onload=d.bind(null,l.onload),s&&document.head.appendChild(l)}},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},r.sti=function(e,t,n,o){if("undefined"!=typeof document){var r=document,i=r.head,a=r.createElement("style");a.setAttribute("st_id",e),a.setAttribute("st_depth",n),a.setAttribute("st_runtime",o),a.textContent=t;for(var l,s=i.querySelectorAll('style[st_runtime="'+o+'"]'),u=!1,c=0;c<s.length;c++){var f=s[c],d=f.getAttribute("st_id"),p=Number(f.getAttribute("st_depth"));if(d!==e)!u&&n<p&&(i.insertBefore(a,f),u=!0),l=f;else{if(p===n)return void i.replaceChild(a,f);f.parentElement.removeChild(f)}}u||(l?i.insertBefore(a,l.nextElementSibling):i.appendChild(a))}},function(e){var t="-",n="--",o="---";function r(e,r,i){return!1===i||null==i||i!=i?"":!0===i?function(e,t){return e+n+t}(e,r):function(e,n,r){return e+o+n+t+r.length+t+r.replace(/\s/gm,"_")}(e,r,i.toString())}(e=e||{}).sts=function(e){for(var t=[],n=1;n<arguments.length;n++){var o=arguments[n];if(o)if("string"==typeof o)t[t.length]=o;else if(2===n)for(var i in o){var a=r(e,i,o[i]);a&&(t[t.length]=a)}}return t.join(" ")},e.stc=function(e,t){var n=[];for(var o in t){var i=r(e,o,t[o]);i&&n.push(i)}return n.join(" ")}}(r),r.p="https://static.parastorage.com/services/promote-seo-tools-bm-component/f1193b0f38632f79a9dc570f5d08c4c2c4e7ba2ef0cf990f37ddf8b2/",function(){if("undefined"!=typeof document){var e=function(e){return new Promise((function(t,n){var o=r.miniCssF(e),i=r.p+o;if(function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=(a=n[o]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(r===e||r===t))return a}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){var a;if((r=(a=i[o]).getAttribute("data-href"))===e||r===t)return a}}(o,i))return t();!function(e,t,n,o,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",i.onerror=i.onload=function(n){if(i.onerror=i.onload=null,"load"===n.type)o();else{var a=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=l,i.parentNode&&i.parentNode.removeChild(i),r(s)}},i.href=t,0!==i.href.indexOf(window.location.origin+"/")&&(i.crossOrigin="anonymous"),n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i)}(e,i,null,t,n)}))},t={261:0};r.f.miniCss=function(n,o){t[n]?o.push(t[n]):0!==t[n]&&{460:1}[n]&&o.push(t[n]=e(n).then((function(){t[n]=0}),(function(e){throw delete t[n],e})))}}}(),function(){var e={261:0};r.f.j=function(t,n){var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));n.push(o[2]=i);var a=r.p+r.u(t),l=new Error;r.l(a,(function(n){if(r.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",l.name="ChunkLoadError",l.type=i,l.request=a,o[1](l)}}),"chunk-"+t,t)}};var t=function(t,n){var o,i,a=n[0],l=n[1],s=n[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(s)s(r)}for(t&&t(n);u<a.length;u++)i=a[u],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0},n=self.webpackJsonp__wix_promote_seo_tools_bm_component=self.webpackJsonp__wix_promote_seo_tools_bm_component||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),function(){var e=r(6304),t=r(4481),n=r(7363),o=r.n(n),i=function(){return i=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},i.apply(this,arguments)},a=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{s(o.next(e))}catch(e){i(e)}}function l(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}s((o=o.apply(e,t||[])).next())}))},l=function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},s=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var o,r,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(o=i.next()).done;)a.push(o.value)}catch(e){r={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return a};function u(e,r){var u=this,c=r.flowAPIDelegate,f=r.context,d=f.enableTranslationsHMR,p=f.monitorHttpClient,m=e.component,h=e.loadReactComponent,g=e.filesHook,v=e.resolveHook,b=m.maybeTranslationsModel;return function(e){var r=s((0,n.useState)(),2),f=r[0],y=r[1],w=s((0,n.useState)((function(){return function(e){var t,n=m.componentId,o=c.createFedopsLogger(n),r=c.createComponentEssentials({componentId:n}).panoramaClient;p&&(t=c.bmModule._essentials.createHttpClientWithMonitoring({errorMonitor:c.moduleFlowAPI.errorMonitor,fedopsLogger:o}));var i=b?c.createComponentTranslationsAPI(b):void 0;return{componentHooksFlowAPI:c.getComponentHooksFlowAPI(m,{fedopsLogger:o,panoramaClient:r,maybeComponentTranslationsAPI:i,ownProps:e,httpClientWithMonitoring:t}),fedopsLogger:o,maybeComponentTranslationsAPI:i,httpClientWithMonitoring:t,panoramaClient:r}}(e)})),1),I=w[0],P=I.componentHooksFlowAPI,M=I.fedopsLogger,C=I.maybeComponentTranslationsAPI,A=I.httpClientWithMonitoring,x=I.panoramaClient;(0,n.useState)((function(){x.reportLoadStart()}));var _=s((0,n.useState)((function(){return(0,t.ReactLoadableComponent)(m.componentId,(function(){return a(u,void 0,void 0,(function(){var e,t,n,o,r,a,u,f;return l(this,(function(l){switch(l.label){case 0:return l.trys.push([0,2,,3]),d||c.prefetchTranslations(C),e=null==v?void 0:v.call(c.bmModule,P),t=h(),n=c.createBMComponentAPI(m,{fedopsLogger:M,componentTranslationsAPI:C,httpClientWithMonitoring:A,panoramaClient:x}),[4,Promise.all([e,t,n])];case 1:return o=s.apply(void 0,[l.sent(),3]),r=o[0],a=o[1],u=o[2],[2,i(i({default:a},r),{_componentFlowAPI:u})];case 2:throw f=l.sent(),y(f),f;case 3:return[2]}}))}))}),null==g?void 0:g.call(c.bmModule,P))})),1),L=_[0];if(f)throw f;return o().createElement(L,i({},e))}}var c=r(2611);function f(e,t){0}function d(e,t,n){0}var p=Sentry;function m(e){return!!e&&"sentry"in e}var h=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{s(o.next(e))}catch(e){i(e)}}function l(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}s((o=o.apply(e,t||[])).next())}))},g=function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},v=function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],o=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},b=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var o,r,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(o=i.next()).done;)a.push(o.value)}catch(e){r={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return a},y=function(e){var t=e.localeDistPath,n=e.availableLocales,o=e.errorReporter,i=e.httpClient,a=new Set(n),l=new Map;return{asyncMessagesLoader:function(e){return h(void 0,void 0,void 0,(function(){var n,s;return g(this,(function(u){return(n=l.get(e))?[2,n]:(s=function(e){return h(void 0,void 0,void 0,(function(){var n,l,s,u,c;return g(this,(function(f){switch(f.label){case 0:if(null==t||!a.has(e))return[2,Promise.reject(new Error("Locale assets for ".concat(e," are not provided")))];n="".concat(r.p).concat(t,"/messages_").concat(e,".json"),f.label=1;case 1:return f.trys.push([1,5,,6]),[4,i.get(n)];case 2:return l=f.sent(),((s=l.status)>=200&&s<300||304===s)&&null!=l.data?[2,l.data]:o?[4,String(l.data)]:[3,4];case 3:u=f.sent().substring(0,100),m(o)?o.captureMessage("Can't fetch locale ".concat(e),{level:p.Severity.Error,contexts:{requestDetails:{url:n,body:u,status:s}}}):o.captureMessage("Can't fetch locale ".concat(e),p.Severity.Error,{captureContext:{contexts:{requestDetails:{url:n,body:u,status:s}}}}),f.label=4;case 4:return[2,Promise.reject(new Error("Can't fetch locale ".concat(e,", status code: ").concat(s)))];case 5:return c=f.sent(),o&&(m(o)?o.captureException(c,{level:p.Severity.Error,contexts:{errorDetails:{message:"Can't fetch locale ".concat(e," due to fetch error"),url:n}}}):o.captureException(c,{captureContext:{level:p.Severity.Error,contexts:{errorDetails:{message:"Can't fetch locale ".concat(e," due to fetch error"),url:n}}}})),[2,Promise.reject(new Error("Can't fetch locale ".concat(e," due to fetch error")))];case 6:return[2]}}))}))}(e),l.set(e,s),[2,s])}))}))},addLocaleMessages:function(e){var t,n;try{for(var o=v(e.entries()),r=o.next();!r.done;r=o.next()){var i=b(r.value,2),a=i[0],s=i[1];l.set(a,Promise.resolve(s))}}catch(e){t={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}},removeLocaleMessages:function(e){l.delete(e)}}},w=function(){return w=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},w.apply(this,arguments)},I=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{s(o.next(e))}catch(e){i(e)}}function l(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}s((o=o.apply(e,t||[])).next())}))},P=function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}};function M(e){var t,n,o,r=this,i=e.bmModule,a=e.module,l=e.optionalDeps,s=a.config,u=s.translations,f=s.sentry,d=a.maybeTranslationsModel,p=(null==f?void 0:f.DSN)&&!(null==f?void 0:f.errorMonitor)?function(e,t){var n,o,r,i,a,l,s,u=w(w({},{release:"".concat("promote-seo-tools-bm-component","@").concat("f1193b0f38632f79a9dc570f5d08c4c2c4e7ba2ef0cf990f37ddf8b2"),beforeSend:(n=window.location.hostname,o=window.navigator.userAgent,r=window.document.cookie,i=/(^|;)\s*automation\s*=\s*sled:/.test(r),a=/localhost|127\.0\.0\.1|::1|\.local|local.wix.com|^$/i.test(n),l=/Googlebot|AdsBot-Google-Mobile|bingbot|BingPreview|facebookexternalhit|Baiduspider|YandexBot/i.test(o),s=/BonEcho|NewsGator|SeaMonkey|iTunes|Epiphany|Konqueror|Sleipnir|IceWeasel/i.test(o),function(e){return a?e.environment="development":l?e.environment="bot":s?e.environment="invalid_useragent":i&&(e.environment="sled"),e}),beforeBreadcrumb:function(e,t){var n,o=e.category,r=o&&("ui.click"===o||"ui.input"===o),i=null===(n=null==t?void 0:t.event)||void 0===n?void 0:n.target;if(r&&i){var a=i.closest("[data-hook]");if(a){var l=a.getAttribute("data-hook");e.message=i===a?"".concat(e.message,' [data-hook="').concat(l,'"]'):"".concat(e.message,' parent:[data-hook="').concat(l,'"]')}}return e}}),{dsn:t}),c=e._essentials.createSentryHub(u),f=c.client,d=c.hub;return function(e,t){var n=t.moduleParams;e.setUser({id:n.userId})}(d,{moduleParams:e.moduleParams}),{client:f,hub:d}}(i,f.DSN):void 0,m=(null==f?void 0:f.DSN)&&(null==f?void 0:f.errorMonitor)?i._essentials.createErrorMonitor({dsn:f.DSN,appName:"promote-seo-tools-bm-component",version:"f1193b0f38632f79a9dc570f5d08c4c2c4e7ba2ef0cf990f37ddf8b2"}):void 0;if(d){var h=(null==p?void 0:p.hub)||m,g=y({localeDistPath:null===(t=d.assets)||void 0===t?void 0:t.localeDistPath,availableLocales:d.availableLocales,errorReporter:h,httpClient:i._essentials.httpClient}),v=g.asyncMessagesLoader,b=g.addLocaleMessages,M=i._essentials.createI18n({asyncMessagesLoader:v,useSuspense:null===(n=null==u?void 0:u.suspense)||void 0===n||n,disableAutoInit:!0}),C=(0,c.once)((function(){return I(r,void 0,void 0,(function(){return P(this,(function(e){switch(e.label){case 0:return M.isInitialized?[3,2]:[4,M.init()];case 1:e.sent(),e.label=2;case 2:return[2,M]}}))}))}));o={i18n:M,asyncMessagesLoader:v,addLocaleMessages:b,init:C}}var A=(0,c.once)((function(){return I(r,void 0,void 0,(function(){var e;return P(this,(function(t){switch(t.label){case 0:return[4,l.loadOptionalFlowAPIDeps()];case 1:return[2,null==(e=t.sent().createBILogger)?void 0:e({biLoggerFactory:i._essentials.biLoggerFactory})]}}))}))}));return{maybeSentry:p,maybeErrorMonitor:m,maybeTranslations:o,getBILogger:A,experiments:i._essentials.experiments}}var C=function(){return C=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},C.apply(this,arguments)},A=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{s(o.next(e))}catch(e){i(e)}}function l(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}s((o=o.apply(e,t||[])).next())}))},x=function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}};var _,L=function(){return L=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},L.apply(this,arguments)},S=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{s(o.next(e))}catch(e){i(e)}}function l(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}s((o=o.apply(e,t||[])).next())}))},k=function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},F=function(){function t(e){this.module=e.module,this.optionalDeps=e.optionalDeps,this.bmModule=e.bmModule,this.artifactId=e.artifactId,this.artifactVersion=e.artifactVersion}return Object.defineProperty(t.prototype,"flowAPIInstances",{get:function(){var e=this.optionalDeps;return null==this._flowAPIInstances&&(this._flowAPIInstances=M({optionalDeps:e,bmModule:this.bmModule,module:this.module})),this._flowAPIInstances},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"moduleFlowAPI",{get:function(){var t=this,n=t.bmModule,o=t.module,r=t.optionalDeps;return null==this._moduleFlowAPI&&(this._moduleFlowAPI=function(t){var n,o=this,r=t.module,i=t.flowAPIInstances,a=t.bmModule,l=t.optionalDeps,s=r.config,u=a._essentials.httpClient,p=a._essentials.createFedopsLogger((0,c.kebabCase)(r.moduleId),C({},null===(n=r.config.fedops)||void 0===n?void 0:n.config)),m=(0,c.once)((function(){return A(o,void 0,void 0,(function(){return x(this,(function(e){return[2,p]}))}))})),h=(0,c.once)((function(){return A(o,void 0,void 0,(function(){var e;return x(this,(function(t){return e=i.maybeTranslations,f(),[2,e.init()]}))}))})),g=(0,c.once)((function(){return A(o,void 0,void 0,(function(){var e;return x(this,(function(t){switch(t.label){case 0:return[4,i.getBILogger()];case 1:return e=t.sent(),f(),[2,e]}}))}))}));return{getBILogger:g,get biLogger(){return l.loadOptionalFlowAPIDeps().createBILogger({biLoggerFactory:a._essentials.biLoggerFactory})},_translations:i.maybeTranslations,getI18n:h,get experiments(){var e=i.experiments;return f(),e},getModuleFedopsLogger:m,moduleFedopsLogger:p,module:a,get moduleParams(){return a.moduleParams},sentryAndHub:i.maybeSentry,get sentry(){var e;return d(i.maybeSentry,null===(e=s.sentry)||void 0===e||e.errorMonitor),i.maybeSentry.hub},get errorMonitor(){var e;return d(i.maybeErrorMonitor,null===(e=s.sentry)||void 0===e||e.errorMonitor),i.maybeErrorMonitor},httpClient:u,moduleInfo:r.config,getCurrentInstance:function(t){var n,o=null!==(n=null!=t?t:r.config.appDefinitionId)&&void 0!==n?n:e.appDefIds.metaSite;return(0,e.getCurrentInstance)(o)},createCurrencyFormatter:a._essentials.createCurrencyFormatter,formatAddress:a._essentials.formatAddress}}({module:o,bmModule:n,optionalDeps:r,flowAPIInstances:this.flowAPIInstances})),this._moduleFlowAPI},enumerable:!1,configurable:!0}),t.prototype.createFedopsLogger=function(e){var t,n=this.bmModule,o=this.module;return n._essentials.createFedopsLogger(e,L({},null===(t=o.config.fedops)||void 0===t?void 0:t.config))},t.prototype.createComponentEssentials=function(e){var t=e.componentId,n=this,o=n.bmModule,r=n.module,i=n.artifactVersion,a=r.config.sentry;return o._essentials.createComponentEssentials({artifactVersion:i,componentId:t,sentryDsn:null==a?void 0:a.DSN})},t.prototype.createComponentTranslationsAPI=function(e){var t,n,o,r,i=this,a=this.bmModule,l=this.moduleFlowAPI,s=(null===(t=l.sentryAndHub)||void 0===t?void 0:t.hub)||l.errorMonitor,u=y({localeDistPath:null===(n=e.assets)||void 0===n?void 0:n.localeDistPath,availableLocales:e.availableLocales,errorReporter:s,httpClient:l.httpClient}),f=u.asyncMessagesLoader,d=u.addLocaleMessages,p=a._essentials.createI18n({asyncMessagesLoader:f,useSuspense:null===(r=null===(o=this.module.config.translations)||void 0===o?void 0:o.suspense)||void 0===r||r,disableAutoInit:!0}),m=(0,c.once)((function(){return S(i,void 0,void 0,(function(){return k(this,(function(e){switch(e.label){case 0:return p.isInitialized?[3,2]:[4,p.init()];case 1:e.sent(),e.label=2;case 2:return[2,p]}}))}))}));return{i18n:p,init:m,asyncMessagesLoader:f,addLocaleMessages:d}},t.prototype.createBMMethodFlowAPI=function(e){var t=this,n=this.moduleFlowAPI,o=this.module,r=this.createFedopsLogger(e.methodId);return{get module(){return n.module},get moduleInfo(){return n.moduleInfo},get httpClient(){return n.httpClient},get sentry(){var e,t;return d(n.sentryAndHub,null===(t=null===(e=o.config)||void 0===e?void 0:e.sentry)||void 0===t||t.errorMonitor),n.sentryAndHub.hub},get errorMonitor(){var e,t;return d(n.errorMonitor,null===(t=null===(e=o.config)||void 0===e?void 0:e.sentry)||void 0===t||t.errorMonitor),n.errorMonitor},get moduleParams(){return n.moduleParams},getI18n:n.getI18n,get experiments(){return n.experiments},getBILogger:n.getBILogger,get biLogger(){return n.biLogger},getModuleFedopsLogger:n.getModuleFedopsLogger,moduleFedopsLogger:n.moduleFedopsLogger,getFedopsLogger:function(){return S(t,void 0,void 0,(function(){return k(this,(function(e){return[2,r]}))}))},fedopsLogger:r,getCurrentInstance:n.getCurrentInstance,createCurrencyFormatter:n.createCurrencyFormatter,formatAddress:n.formatAddress}},t.prototype.getComponentHooksFlowAPI=function(e,t){var n=this,o=t.fedopsLogger,r=t.panoramaClient,i=t.maybeComponentTranslationsAPI,a=t.ownProps,l=t.httpClientWithMonitoring,s=this.moduleFlowAPI,u=this.module,c=i?i.init:s.getI18n;return{get module(){return s.module},get moduleInfo(){return s.moduleInfo},get httpClient(){return null!=l?l:s.httpClient},get sentry(){var e,t;return d(s.sentryAndHub,null===(t=null===(e=u.config)||void 0===e?void 0:e.sentry)||void 0===t||t.errorMonitor),s.sentryAndHub.hub},get errorMonitor(){var e,t;return d(s.errorMonitor,null===(t=null===(e=u.config)||void 0===e?void 0:e.sentry)||void 0===t||t.errorMonitor),s.errorMonitor},get moduleParams(){return s.moduleParams},getModuleFedopsLogger:s.getModuleFedopsLogger,moduleFedopsLogger:s.moduleFedopsLogger,getI18n:c,get experiments(){return s.experiments},getBILogger:s.getBILogger,get biLogger(){return s.biLogger},componentInfo:{componentId:e.componentId,type:e.componentType,fileName:e.fileName,route:e.route},getFedopsLogger:function(){return S(n,void 0,void 0,(function(){return k(this,(function(e){return[2,o]}))}))},fedopsLogger:o,panoramaClient:r,getCurrentInstance:s.getCurrentInstance,createCurrencyFormatter:s.createCurrencyFormatter,formatAddress:s.formatAddress,ownProps:a}},t.prototype.createBMComponentAPI=function(e,t){var n=t.fedopsLogger,o=t.componentTranslationsAPI,r=t.httpClientWithMonitoring,i=t.panoramaClient;return S(this,void 0,void 0,(function(){var t,a,l,s,u,c,p,m;return k(this,(function(h){switch(h.label){case 0:return a=(t=this).moduleFlowAPI,l=t.flowAPIInstances,s=t.module,u=l.maybeTranslations,c=l.experiments,[4,(0,l.getBILogger)()];case 1:return p=h.sent(),[2,{_translations:m=null!=o?o:u,module:s,moduleInfo:a.moduleInfo,get httpClient(){return null!=r?r:a.httpClient},get _sentry(){var e;return null===(e=a.sentryAndHub)||void 0===e?void 0:e.hub},get sentry(){var e,t;return d(a.sentryAndHub,null===(t=null===(e=s.config)||void 0===e?void 0:e.sentry)||void 0===t||t.errorMonitor),a.sentryAndHub.hub},get errorMonitor(){var e,t;return d(a.errorMonitor,null===(t=null===(e=s.config)||void 0===e?void 0:e.sentry)||void 0===t||t.errorMonitor),a.errorMonitor},get moduleParams(){return a.moduleParams},get i18n(){return f(),m.i18n},get biLogger(){return f(),p},get experiments(){return c},componentInfo:{componentId:e.componentId,type:e.componentType,fileName:e.fileName,route:e.route},get fedopsLogger(){return f(),n},get panoramaClient(){return f(),i},get createCurrencyFormatter(){return a.createCurrencyFormatter},get formatAddress(){return a.formatAddress}}]}}))}))},t.prototype.prefetchTranslations=function(e){return S(this,void 0,void 0,(function(){var t,n;return k(this,(function(o){switch(o.label){case 0:return t=this.moduleFlowAPI._translations,[4,null==(n=null!=e?e:t)?void 0:n.init()];case 1:return o.sent(),[2]}}))}))},t}(),O=(_=function(e,t){return _=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},_(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}_(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),E=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{s(o.next(e))}catch(e){i(e)}}function l(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}s((o=o.apply(e,t||[])).next())}))},T=function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},D=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var o,r,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(o=i.next()).done;)a.push(o.value)}catch(e){r={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return a},j=function(e,t,n){if(n||2===arguments.length)for(var o,r=0,i=t.length;r<i;r++)!o&&r in t||(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};var B,N,H,R,G,W,q,V,z,U,J,K,$,Y,Q,X,Z=r(4032);N=(B={context:{enableTranslationsHMR:!1,artifactId:"promote-seo-tools-bm-component",fullArtifactId:"com.wixpress.promote-seo-tools-bm-component",monitorHttpClient:!1},requireableModule:{module:{moduleId:"PROMOTE_SEO_TOOLS_BM_COMPONENT",config:{$schema:"target/schemas/.application.schema.json",moduleId:"PROMOTE_SEO_TOOLS_BM_COMPONENT",moduleConfigurationId:"PROMOTE_SEO_TOOLS",appDefinitionId:"d70b68e2-8d77-4e0c-9c00-c292d6e0025e",isCoreService:!1,routeNamespace:"seo-tools",fedops:{enabled:!0},sentry:{DSN:"https://fb1f845857ae44e3a4ca8d2fce113260@sentry.wixpress.com/2510",errorMonitor:!0},translations:{enabled:!0,suspense:!0},moduleBundleName:"module"},fedopsPath:"/home/builduser/work/ec0fa9054e9df5a5/packages/promote-seo-tools-bm-component/fedops.json",maybeTranslationsModel:{assets:{localeDir:"/home/builduser/work/ec0fa9054e9df5a5/packages/promote-seo-tools-bm-component/src/assets/locale",localeDistPath:"assets/locale"},availableLocales:["ar","bg","ca","cs","da","de","el","en","es","fi","fr","he","hi","hr","hu","id","it","ja","ko","lt","lv","ms","nl","no","pl","pt","ro","ru","sk","sl","sv","th","tl","tr","uk","vi","zh"],messagesEnFile:"messages_en.json"}}},pages:[{component:{componentId:"promote-seo-tools",componentType:"page",componentName:"promote-seo-tools",fileName:"index.tsx",route:"seo-tools",maybeTranslationsModel:null},loadReactComponent:async()=>(await r.e(460).then(r.bind(r,3566))).default}],exportedComponents:[],extensionComponents:[],methods:[{method:{methodId:"promote-seo-tools.getGoogleApi"},fn:async()=>(await r.e(865).then(r.bind(r,3722))).default}],optionalDeps:{loadOptionalFlowAPIDeps:()=>({createBILogger:Z.H})}}).context,H=B.requireableModule,R=H.module,G=H.configHook,W=H.initHook,q=B.pages,V=B.exportedComponents,z=B.methods,U=B.optionalDeps,J=R.config,K=R.moduleId,$=J.moduleConfigurationId,Y=N.artifactId,Q=N.fullArtifactId,X=function(n){function o(e){var t=n.call(this,e)||this;return t.state={},t.setState=function(e){return t.state=e},t.setArtifactId(Y),t.setFullArtifactId(Q),$&&t.setModuleConfigurationId($),t.flowAPIDelegate=new F({bmModule:t,module:R,optionalDeps:U,artifactId:Y,artifactVersion:"f1193b0f38632f79a9dc570f5d08c4c2c4e7ba2ef0cf990f37ddf8b2"}),t}return O(o,n),o.prototype.register=function(n){var o=this;this.moduleParams=n;var r=this.flowAPIDelegate,i=r.moduleFlowAPI,a=i.sentryAndHub,l=i.errorMonitor;q.forEach((function(t){var n=t.component,i=n.componentId,s=n.componentName;(l||a)&&(0,e.registerPageComponentMonitors)(i,{errorMonitor:l,sentryClient:null==a?void 0:a.client}),o.registerPageComponent(s,u(t,{module:R,flowAPIDelegate:r,context:N}))})),V.forEach((function(e){var t=e.component.componentId;o.registerComponentWithModuleParams(t,u(e,{context:N,module:R,flowAPIDelegate:r}),{suspense:!0})})),z.forEach((function(e){var n=e.method,i=e.fn;t.ModuleRegistry.registerMethod(n.methodId,(function(){var e=r.createBMMethodFlowAPI(n);return!1===n.lazy?i().bind(o,e):function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return E(o,void 0,void 0,(function(){return T(this,(function(n){switch(n.label){case 0:return[4,i()];case 1:return[2,n.sent().bind(this,e).apply(void 0,j([],D(t),!1))]}}))}))}}))}))},Object.defineProperty(o.prototype,"_essentials",{get:function(){return this.appEssentials},enumerable:!1,configurable:!0}),o.prototype.init=function(e){var t=this.flowAPIDelegate;W&&W.call(this,t.moduleFlowAPI)},o.prototype.config=function(e,t){var n=this.flowAPIDelegate;G&&G.call(this,n.moduleFlowAPI,e,t)},o.prototype.prefetchFlowAPI=function(){var e,t=this.flowAPIDelegate;return Promise.all([null===(e=t.moduleFlowAPI._translations)||void 0===e?void 0:e.init()])},o.prototype.prefetchComponent=function(e){var t=this.prefetchFlowAPI(),n=V.find((function(t){return t.component.componentId===e}));if(null!=n)return Promise.all([t,n.loadReactComponent()])},o}(e.BusinessManagerModule),(0,e.registerModule)(K,X)}()}();
//# sourceMappingURL=module.bundle.min.js.map