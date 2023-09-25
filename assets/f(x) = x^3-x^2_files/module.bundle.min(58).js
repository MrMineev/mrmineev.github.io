!function(){"use strict";var e,t,n={4796:function(e,t,n){function r(e,t){return Object.defineProperty(t,"updateDefaults",{value:function(t){return e.updateDefaults(t)}}),t}n.d(t,{f:function(){return r}})},6703:function(e,t,n){n.d(t,{H:function(){return o}});var r=n(4796);function o(e){let{biLoggerFactory:t,userConfig:n={}}=e;const o=t(n);return(0,r.f)(o,o.logger())}},6304:function(e){e.exports=BusinessManagerAPI},7363:function(e){e.exports=React},1533:function(e){e.exports=ReactDOM},2611:function(e){e.exports=_},4481:function(e){e.exports=reactModuleContainer}},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={id:e,loaded:!1,exports:{}};return n[e].call(i.exports,i,i.exports,o),i.loaded=!0,i.exports}o.m=n,o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))},o.u=function(e){return"ping-settings-client.settings.notifications.chunk.min.js"},o.miniCssF=function(e){return"ping-settings-client.settings.notifications.chunk.min.css"},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.hmd=function(e){return(e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e={},t="_wix_ping_settings_client:",o.l=function(n,r,i,a){if(e[n])e[n].push(r);else{var l,s;if(void 0!==i)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var f=u[c];if(f.getAttribute("src")==n||f.getAttribute("data-webpack")==t+i){l=f;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.setAttribute("data-webpack",t+i),l.src=n,0!==l.src.indexOf(window.location.origin+"/")&&(l.crossOrigin="anonymous")),e[n]=[r];var d=function(t,r){l.onerror=l.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=d.bind(null,l.onerror),l.onload=d.bind(null,l.onload),s&&document.head.appendChild(l)}},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.sti=function(e,t,n,r){if("undefined"!=typeof document){var o=document,i=o.head,a=o.createElement("style");a.setAttribute("st_id",e),a.setAttribute("st_depth",n),a.setAttribute("st_runtime",r),a.textContent=t;for(var l,s=i.querySelectorAll('style[st_runtime="'+r+'"]'),u=!1,c=0;c<s.length;c++){var f=s[c],d=f.getAttribute("st_id"),p=Number(f.getAttribute("st_depth"));if(d!==e)!u&&n<p&&(i.insertBefore(a,f),u=!0),l=f;else{if(p===n)return void i.replaceChild(a,f);f.parentElement.removeChild(f)}}u||(l?i.insertBefore(a,l.nextElementSibling):i.appendChild(a))}},function(e){var t="-",n="--",r="---";function o(e,o,i){return!1===i||null==i||i!=i?"":!0===i?function(e,t){return e+n+t}(e,o):function(e,n,o){return e+r+n+t+o.length+t+o.replace(/\s/gm,"_")}(e,o,i.toString())}(e=e||{}).sts=function(e){for(var t=[],n=1;n<arguments.length;n++){var r=arguments[n];if(r)if("string"==typeof r)t[t.length]=r;else if(2===n)for(var i in r){var a=o(e,i,r[i]);a&&(t[t.length]=a)}}return t.join(" ")},e.stc=function(e,t){var n=[];for(var r in t){var i=o(e,r,t[r]);i&&n.push(i)}return n.join(" ")}}(o),o.p="https://static.parastorage.com/services/ping-settings-client/b3599dfba1446fa42beb23be619e5c34f0644867859ccdaa92cd20bd/",function(){if("undefined"!=typeof document){var e=function(e){return new Promise((function(t,n){var r=o.miniCssF(e),i=o.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(a=n[r]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){var a;if((o=(a=i[r]).getAttribute("data-href"))===e||o===t)return a}}(r,i))return t();!function(e,t,n,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",i.onerror=i.onload=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var a=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=l,i.parentNode&&i.parentNode.removeChild(i),o(s)}},i.href=t,0!==i.href.indexOf(window.location.origin+"/")&&(i.crossOrigin="anonymous"),n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i)}(e,i,null,t,n)}))},t={261:0};o.f.miniCss=function(n,r){t[n]?r.push(t[n]):0!==t[n]&&{349:1}[n]&&r.push(t[n]=e(n).then((function(){t[n]=0}),(function(e){throw delete t[n],e})))}}}(),function(){var e={261:0};o.f.j=function(t,n){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=i);var a=o.p+o.u(t),l=new Error;o.l(a,(function(n){if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",l.name="ChunkLoadError",l.type=i,l.request=a,r[1](l)}}),"chunk-"+t,t)}};var t=function(t,n){var r,i,a=n[0],l=n[1],s=n[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(r in l)o.o(l,r)&&(o.m[r]=l[r]);if(s)s(o)}for(t&&t(n);u<a.length;u++)i=a[u],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0},n=self.webpackJsonp__wix_ping_settings_client=self.webpackJsonp__wix_ping_settings_client||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),function(){var e=o(6304),t=o(4481),n=o(7363),r=o.n(n),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},a=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function l(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}s((r=r.apply(e,t||[])).next())}))},l=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},s=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a};function u(e,o){var u=this,c=o.flowAPIDelegate,f=o.context,d=f.enableTranslationsHMR,p=f.monitorHttpClient,g=e.component,m=e.loadReactComponent,h=e.filesHook,v=e.resolveHook,b=g.maybeTranslationsModel;return function(e){var o=s((0,n.useState)(),2),f=o[0],y=o[1],w=s((0,n.useState)((function(){return function(e){var t,n=g.componentId,r=c.createFedopsLogger(n),o=c.createComponentEssentials({componentId:n}).panoramaClient;p&&(t=c.bmModule._essentials.createHttpClientWithMonitoring({errorMonitor:c.moduleFlowAPI.errorMonitor,fedopsLogger:r}));var i=b?c.createComponentTranslationsAPI(b):void 0;return{componentHooksFlowAPI:c.getComponentHooksFlowAPI(g,{fedopsLogger:r,panoramaClient:o,maybeComponentTranslationsAPI:i,ownProps:e,httpClientWithMonitoring:t}),fedopsLogger:r,maybeComponentTranslationsAPI:i,httpClientWithMonitoring:t,panoramaClient:o}}(e)})),1),I=w[0],P=I.componentHooksFlowAPI,M=I.fedopsLogger,C=I.maybeComponentTranslationsAPI,A=I.httpClientWithMonitoring,x=I.panoramaClient;(0,n.useState)((function(){x.reportLoadStart()}));var L=s((0,n.useState)((function(){return(0,t.ReactLoadableComponent)(g.componentId,(function(){return a(u,void 0,void 0,(function(){var e,t,n,r,o,a,u,f;return l(this,(function(l){switch(l.label){case 0:return l.trys.push([0,2,,3]),d||c.prefetchTranslations(C),e=null==v?void 0:v.call(c.bmModule,P),t=m(),n=c.createBMComponentAPI(g,{fedopsLogger:M,componentTranslationsAPI:C,httpClientWithMonitoring:A,panoramaClient:x}),[4,Promise.all([e,t,n])];case 1:return r=s.apply(void 0,[l.sent(),3]),o=r[0],a=r[1],u=r[2],[2,i(i({default:a},o),{_componentFlowAPI:u})];case 2:throw f=l.sent(),y(f),f;case 3:return[2]}}))}))}),null==h?void 0:h.call(c.bmModule,P))})),1),S=L[0];if(f)throw f;return r().createElement(S,i({},e))}}var c=o(2611);function f(e,t){0}function d(e,t,n){0}var p=Sentry;function g(e){return!!e&&"sentry"in e}var m=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function l(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}s((r=r.apply(e,t||[])).next())}))},h=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},v=function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},b=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},y=function(e){var t=e.localeDistPath,n=e.availableLocales,r=e.errorReporter,i=e.httpClient,a=new Set(n),l=new Map;return{asyncMessagesLoader:function(e){return m(void 0,void 0,void 0,(function(){var n,s;return h(this,(function(u){return(n=l.get(e))?[2,n]:(s=function(e){return m(void 0,void 0,void 0,(function(){var n,l,s,u,c;return h(this,(function(f){switch(f.label){case 0:if(null==t||!a.has(e))return[2,Promise.reject(new Error("Locale assets for ".concat(e," are not provided")))];n="".concat(o.p).concat(t,"/messages_").concat(e,".json"),f.label=1;case 1:return f.trys.push([1,5,,6]),[4,i.get(n)];case 2:return l=f.sent(),((s=l.status)>=200&&s<300||304===s)&&null!=l.data?[2,l.data]:r?[4,String(l.data)]:[3,4];case 3:u=f.sent().substring(0,100),g(r)?r.captureMessage("Can't fetch locale ".concat(e),{level:p.Severity.Error,contexts:{requestDetails:{url:n,body:u,status:s}}}):r.captureMessage("Can't fetch locale ".concat(e),p.Severity.Error,{captureContext:{contexts:{requestDetails:{url:n,body:u,status:s}}}}),f.label=4;case 4:return[2,Promise.reject(new Error("Can't fetch locale ".concat(e,", status code: ").concat(s)))];case 5:return c=f.sent(),r&&(g(r)?r.captureException(c,{level:p.Severity.Error,contexts:{errorDetails:{message:"Can't fetch locale ".concat(e," due to fetch error"),url:n}}}):r.captureException(c,{captureContext:{level:p.Severity.Error,contexts:{errorDetails:{message:"Can't fetch locale ".concat(e," due to fetch error"),url:n}}}})),[2,Promise.reject(new Error("Can't fetch locale ".concat(e," due to fetch error")))];case 6:return[2]}}))}))}(e),l.set(e,s),[2,s])}))}))},addLocaleMessages:function(e){var t,n;try{for(var r=v(e.entries()),o=r.next();!o.done;o=r.next()){var i=b(o.value,2),a=i[0],s=i[1];l.set(a,Promise.resolve(s))}}catch(e){t={error:e}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}},removeLocaleMessages:function(e){l.delete(e)}}},w=function(){return w=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},w.apply(this,arguments)},I=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function l(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}s((r=r.apply(e,t||[])).next())}))},P=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}};function M(e){var t,n,r,o=this,i=e.bmModule,a=e.module,l=e.optionalDeps,s=a.config,u=s.translations,f=s.sentry,d=a.maybeTranslationsModel,p=(null==f?void 0:f.DSN)&&!(null==f?void 0:f.errorMonitor)?function(e,t){var n,r,o,i,a,l,s,u=w(w({},{release:"".concat("ping-settings-client","@").concat("b3599dfba1446fa42beb23be619e5c34f0644867859ccdaa92cd20bd"),beforeSend:(n=window.location.hostname,r=window.navigator.userAgent,o=window.document.cookie,i=/(^|;)\s*automation\s*=\s*sled:/.test(o),a=/localhost|127\.0\.0\.1|::1|\.local|local.wix.com|^$/i.test(n),l=/Googlebot|AdsBot-Google-Mobile|bingbot|BingPreview|facebookexternalhit|Baiduspider|YandexBot/i.test(r),s=/BonEcho|NewsGator|SeaMonkey|iTunes|Epiphany|Konqueror|Sleipnir|IceWeasel/i.test(r),function(e){return a?e.environment="development":l?e.environment="bot":s?e.environment="invalid_useragent":i&&(e.environment="sled"),e}),beforeBreadcrumb:function(e,t){var n,r=e.category,o=r&&("ui.click"===r||"ui.input"===r),i=null===(n=null==t?void 0:t.event)||void 0===n?void 0:n.target;if(o&&i){var a=i.closest("[data-hook]");if(a){var l=a.getAttribute("data-hook");e.message=i===a?"".concat(e.message,' [data-hook="').concat(l,'"]'):"".concat(e.message,' parent:[data-hook="').concat(l,'"]')}}return e}}),{dsn:t}),c=e._essentials.createSentryHub(u),f=c.client,d=c.hub;return function(e,t){var n=t.moduleParams;e.setUser({id:n.userId})}(d,{moduleParams:e.moduleParams}),{client:f,hub:d}}(i,f.DSN):void 0,g=(null==f?void 0:f.DSN)&&(null==f?void 0:f.errorMonitor)?i._essentials.createErrorMonitor({dsn:f.DSN,appName:"ping-settings-client",version:"b3599dfba1446fa42beb23be619e5c34f0644867859ccdaa92cd20bd"}):void 0;if(d){var m=(null==p?void 0:p.hub)||g,h=y({localeDistPath:null===(t=d.assets)||void 0===t?void 0:t.localeDistPath,availableLocales:d.availableLocales,errorReporter:m,httpClient:i._essentials.httpClient}),v=h.asyncMessagesLoader,b=h.addLocaleMessages,M=i._essentials.createI18n({asyncMessagesLoader:v,useSuspense:null===(n=null==u?void 0:u.suspense)||void 0===n||n,disableAutoInit:!0}),C=(0,c.once)((function(){return I(o,void 0,void 0,(function(){return P(this,(function(e){switch(e.label){case 0:return M.isInitialized?[3,2]:[4,M.init()];case 1:e.sent(),e.label=2;case 2:return[2,M]}}))}))}));r={i18n:M,asyncMessagesLoader:v,addLocaleMessages:b,init:C}}var A=(0,c.once)((function(){return I(o,void 0,void 0,(function(){var e;return P(this,(function(t){switch(t.label){case 0:return[4,l.loadOptionalFlowAPIDeps()];case 1:return[2,null==(e=t.sent().createBILogger)?void 0:e({biLoggerFactory:i._essentials.biLoggerFactory})]}}))}))}));return{maybeSentry:p,maybeErrorMonitor:g,maybeTranslations:r,getBILogger:A,experiments:i._essentials.experiments}}var C=function(){return C=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},C.apply(this,arguments)},A=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function l(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}s((r=r.apply(e,t||[])).next())}))},x=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}};var L,S=function(){return S=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},S.apply(this,arguments)},_=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function l(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}s((r=r.apply(e,t||[])).next())}))},k=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},F=function(){function t(e){this.module=e.module,this.optionalDeps=e.optionalDeps,this.bmModule=e.bmModule,this.artifactId=e.artifactId,this.artifactVersion=e.artifactVersion}return Object.defineProperty(t.prototype,"flowAPIInstances",{get:function(){var e=this.optionalDeps;return null==this._flowAPIInstances&&(this._flowAPIInstances=M({optionalDeps:e,bmModule:this.bmModule,module:this.module})),this._flowAPIInstances},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"moduleFlowAPI",{get:function(){var t=this,n=t.bmModule,r=t.module,o=t.optionalDeps;return null==this._moduleFlowAPI&&(this._moduleFlowAPI=function(t){var n,r=this,o=t.module,i=t.flowAPIInstances,a=t.bmModule,l=t.optionalDeps,s=o.config,u=a._essentials.httpClient,p=a._essentials.createFedopsLogger((0,c.kebabCase)(o.moduleId),C({},null===(n=o.config.fedops)||void 0===n?void 0:n.config)),g=(0,c.once)((function(){return A(r,void 0,void 0,(function(){return x(this,(function(e){return[2,p]}))}))})),m=(0,c.once)((function(){return A(r,void 0,void 0,(function(){var e;return x(this,(function(t){return e=i.maybeTranslations,f(),[2,e.init()]}))}))})),h=(0,c.once)((function(){return A(r,void 0,void 0,(function(){var e;return x(this,(function(t){switch(t.label){case 0:return[4,i.getBILogger()];case 1:return e=t.sent(),f(),[2,e]}}))}))}));return{getBILogger:h,get biLogger(){return l.loadOptionalFlowAPIDeps().createBILogger({biLoggerFactory:a._essentials.biLoggerFactory})},_translations:i.maybeTranslations,getI18n:m,get experiments(){var e=i.experiments;return f(),e},getModuleFedopsLogger:g,moduleFedopsLogger:p,module:a,get moduleParams(){return a.moduleParams},sentryAndHub:i.maybeSentry,get sentry(){var e;return d(i.maybeSentry,null===(e=s.sentry)||void 0===e||e.errorMonitor),i.maybeSentry.hub},get errorMonitor(){var e;return d(i.maybeErrorMonitor,null===(e=s.sentry)||void 0===e||e.errorMonitor),i.maybeErrorMonitor},httpClient:u,moduleInfo:o.config,getCurrentInstance:function(t){var n,r=null!==(n=null!=t?t:o.config.appDefinitionId)&&void 0!==n?n:e.appDefIds.metaSite;return(0,e.getCurrentInstance)(r)},createCurrencyFormatter:a._essentials.createCurrencyFormatter,formatAddress:a._essentials.formatAddress}}({module:r,bmModule:n,optionalDeps:o,flowAPIInstances:this.flowAPIInstances})),this._moduleFlowAPI},enumerable:!1,configurable:!0}),t.prototype.createFedopsLogger=function(e){var t,n=this.bmModule,r=this.module;return n._essentials.createFedopsLogger(e,S({},null===(t=r.config.fedops)||void 0===t?void 0:t.config))},t.prototype.createComponentEssentials=function(e){var t=e.componentId,n=this,r=n.bmModule,o=n.module,i=n.artifactVersion,a=o.config.sentry;return r._essentials.createComponentEssentials({artifactVersion:i,componentId:t,sentryDsn:null==a?void 0:a.DSN})},t.prototype.createComponentTranslationsAPI=function(e){var t,n,r,o,i=this,a=this.bmModule,l=this.moduleFlowAPI,s=(null===(t=l.sentryAndHub)||void 0===t?void 0:t.hub)||l.errorMonitor,u=y({localeDistPath:null===(n=e.assets)||void 0===n?void 0:n.localeDistPath,availableLocales:e.availableLocales,errorReporter:s,httpClient:l.httpClient}),f=u.asyncMessagesLoader,d=u.addLocaleMessages,p=a._essentials.createI18n({asyncMessagesLoader:f,useSuspense:null===(o=null===(r=this.module.config.translations)||void 0===r?void 0:r.suspense)||void 0===o||o,disableAutoInit:!0}),g=(0,c.once)((function(){return _(i,void 0,void 0,(function(){return k(this,(function(e){switch(e.label){case 0:return p.isInitialized?[3,2]:[4,p.init()];case 1:e.sent(),e.label=2;case 2:return[2,p]}}))}))}));return{i18n:p,init:g,asyncMessagesLoader:f,addLocaleMessages:d}},t.prototype.createBMMethodFlowAPI=function(e){var t=this,n=this.moduleFlowAPI,r=this.module,o=this.createFedopsLogger(e.methodId);return{get module(){return n.module},get moduleInfo(){return n.moduleInfo},get httpClient(){return n.httpClient},get sentry(){var e,t;return d(n.sentryAndHub,null===(t=null===(e=r.config)||void 0===e?void 0:e.sentry)||void 0===t||t.errorMonitor),n.sentryAndHub.hub},get errorMonitor(){var e,t;return d(n.errorMonitor,null===(t=null===(e=r.config)||void 0===e?void 0:e.sentry)||void 0===t||t.errorMonitor),n.errorMonitor},get moduleParams(){return n.moduleParams},getI18n:n.getI18n,get experiments(){return n.experiments},getBILogger:n.getBILogger,get biLogger(){return n.biLogger},getModuleFedopsLogger:n.getModuleFedopsLogger,moduleFedopsLogger:n.moduleFedopsLogger,getFedopsLogger:function(){return _(t,void 0,void 0,(function(){return k(this,(function(e){return[2,o]}))}))},fedopsLogger:o,getCurrentInstance:n.getCurrentInstance,createCurrencyFormatter:n.createCurrencyFormatter,formatAddress:n.formatAddress}},t.prototype.getComponentHooksFlowAPI=function(e,t){var n=this,r=t.fedopsLogger,o=t.panoramaClient,i=t.maybeComponentTranslationsAPI,a=t.ownProps,l=t.httpClientWithMonitoring,s=this.moduleFlowAPI,u=this.module,c=i?i.init:s.getI18n;return{get module(){return s.module},get moduleInfo(){return s.moduleInfo},get httpClient(){return null!=l?l:s.httpClient},get sentry(){var e,t;return d(s.sentryAndHub,null===(t=null===(e=u.config)||void 0===e?void 0:e.sentry)||void 0===t||t.errorMonitor),s.sentryAndHub.hub},get errorMonitor(){var e,t;return d(s.errorMonitor,null===(t=null===(e=u.config)||void 0===e?void 0:e.sentry)||void 0===t||t.errorMonitor),s.errorMonitor},get moduleParams(){return s.moduleParams},getModuleFedopsLogger:s.getModuleFedopsLogger,moduleFedopsLogger:s.moduleFedopsLogger,getI18n:c,get experiments(){return s.experiments},getBILogger:s.getBILogger,get biLogger(){return s.biLogger},componentInfo:{componentId:e.componentId,type:e.componentType,fileName:e.fileName,route:e.route},getFedopsLogger:function(){return _(n,void 0,void 0,(function(){return k(this,(function(e){return[2,r]}))}))},fedopsLogger:r,panoramaClient:o,getCurrentInstance:s.getCurrentInstance,createCurrencyFormatter:s.createCurrencyFormatter,formatAddress:s.formatAddress,ownProps:a}},t.prototype.createBMComponentAPI=function(e,t){var n=t.fedopsLogger,r=t.componentTranslationsAPI,o=t.httpClientWithMonitoring,i=t.panoramaClient;return _(this,void 0,void 0,(function(){var t,a,l,s,u,c,p,g;return k(this,(function(m){switch(m.label){case 0:return a=(t=this).moduleFlowAPI,l=t.flowAPIInstances,s=t.module,u=l.maybeTranslations,c=l.experiments,[4,(0,l.getBILogger)()];case 1:return p=m.sent(),[2,{_translations:g=null!=r?r:u,module:s,moduleInfo:a.moduleInfo,get httpClient(){return null!=o?o:a.httpClient},get _sentry(){var e;return null===(e=a.sentryAndHub)||void 0===e?void 0:e.hub},get sentry(){var e,t;return d(a.sentryAndHub,null===(t=null===(e=s.config)||void 0===e?void 0:e.sentry)||void 0===t||t.errorMonitor),a.sentryAndHub.hub},get errorMonitor(){var e,t;return d(a.errorMonitor,null===(t=null===(e=s.config)||void 0===e?void 0:e.sentry)||void 0===t||t.errorMonitor),a.errorMonitor},get moduleParams(){return a.moduleParams},get i18n(){return f(),g.i18n},get biLogger(){return f(),p},get experiments(){return c},componentInfo:{componentId:e.componentId,type:e.componentType,fileName:e.fileName,route:e.route},get fedopsLogger(){return f(),n},get panoramaClient(){return f(),i},get createCurrencyFormatter(){return a.createCurrencyFormatter},get formatAddress(){return a.formatAddress}}]}}))}))},t.prototype.prefetchTranslations=function(e){return _(this,void 0,void 0,(function(){var t,n;return k(this,(function(r){switch(r.label){case 0:return t=this.moduleFlowAPI._translations,[4,null==(n=null!=e?e:t)?void 0:n.init()];case 1:return r.sent(),[2]}}))}))},t}(),E=(L=function(e,t){return L=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},L(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}L(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),D=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function l(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}s((r=r.apply(e,t||[])).next())}))},T=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},O=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},j=function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};var N,B,H,G,R,W,q,z,V,U,J,K,$,Y,Q,X,Z=o(6703);B=(N={context:{enableTranslationsHMR:!1,artifactId:"ping-settings-client",fullArtifactId:"com.wixpress.ping-settings-client",monitorHttpClient:!1},requireableModule:{module:{moduleId:"PING_SETTINGS_CLIENT",config:{$schema:"target/schemas/.application.schema.json",moduleId:"PING_SETTINGS_CLIENT",moduleConfigurationId:"PING",appDefinitionId:"2e4dafe7-1c15-49b8-acf1-2ae651ca2faf",isCoreService:!0,routeNamespace:"settings",translations:{enabled:!0},sentry:{DSN:"https://4fe3be3ee15d45949168cf5ab14aab5c@sentry.wixpress.com/2305"},moduleBundleName:"module"},fedopsPath:"/home/builduser/work/2678f8a792b72be0/packages/ping-settings-client/fedops.json",maybeTranslationsModel:{assets:{localeDir:"/home/builduser/work/2678f8a792b72be0/packages/ping-settings-client/src/assets/locale",localeDistPath:"assets/locale"},availableLocales:["ar","bg","ca","cs","da","de","el","en","es","fi","fr","he","hi","hr","hu","id","it","ja","ko","lt","lv","ms","nl","no","pl","pt","ro","ru","sk","sl","sv","th","tl","tr","uk","vi","zh"],messagesEnFile:"messages_en.json"}}},pages:[{component:{componentId:"ping-settings-lazy-page-component-id",componentType:"page",componentName:"ping-settings-client.settings.notifications",fileName:"notifications.tsx",route:"settings/notifications",maybeTranslationsModel:null},loadReactComponent:async()=>(await o.e(349).then(o.bind(o,1608))).default}],exportedComponents:[],extensionComponents:[],methods:[],optionalDeps:{loadOptionalFlowAPIDeps:()=>({createBILogger:Z.H})}}).context,H=N.requireableModule,G=H.module,R=H.configHook,W=H.initHook,q=N.pages,z=N.exportedComponents,V=N.methods,U=N.optionalDeps,J=G.config,K=G.moduleId,$=J.moduleConfigurationId,Y=B.artifactId,Q=B.fullArtifactId,X=function(n){function r(e){var t=n.call(this,e)||this;return t.state={},t.setState=function(e){return t.state=e},t.setArtifactId(Y),t.setFullArtifactId(Q),$&&t.setModuleConfigurationId($),t.flowAPIDelegate=new F({bmModule:t,module:G,optionalDeps:U,artifactId:Y,artifactVersion:"b3599dfba1446fa42beb23be619e5c34f0644867859ccdaa92cd20bd"}),t}return E(r,n),r.prototype.register=function(n){var r=this;this.moduleParams=n;var o=this.flowAPIDelegate,i=o.moduleFlowAPI,a=i.sentryAndHub,l=i.errorMonitor;q.forEach((function(t){var n=t.component,i=n.componentId,s=n.componentName;(l||a)&&(0,e.registerPageComponentMonitors)(i,{errorMonitor:l,sentryClient:null==a?void 0:a.client}),r.registerPageComponent(s,u(t,{module:G,flowAPIDelegate:o,context:B}))})),z.forEach((function(e){var t=e.component.componentId;r.registerComponentWithModuleParams(t,u(e,{context:B,module:G,flowAPIDelegate:o}),{suspense:!0})})),V.forEach((function(e){var n=e.method,i=e.fn;t.ModuleRegistry.registerMethod(n.methodId,(function(){var e=o.createBMMethodFlowAPI(n);return!1===n.lazy?i().bind(r,e):function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return D(r,void 0,void 0,(function(){return T(this,(function(n){switch(n.label){case 0:return[4,i()];case 1:return[2,n.sent().bind(this,e).apply(void 0,j([],O(t),!1))]}}))}))}}))}))},Object.defineProperty(r.prototype,"_essentials",{get:function(){return this.appEssentials},enumerable:!1,configurable:!0}),r.prototype.init=function(e){var t=this.flowAPIDelegate;W&&W.call(this,t.moduleFlowAPI)},r.prototype.config=function(e,t){var n=this.flowAPIDelegate;R&&R.call(this,n.moduleFlowAPI,e,t)},r.prototype.prefetchFlowAPI=function(){var e,t=this.flowAPIDelegate;return Promise.all([null===(e=t.moduleFlowAPI._translations)||void 0===e?void 0:e.init()])},r.prototype.prefetchComponent=function(e){var t=this.prefetchFlowAPI(),n=z.find((function(t){return t.component.componentId===e}));if(null!=n)return Promise.all([t,n.loadReactComponent()])},r}(e.BusinessManagerModule),(0,e.registerModule)(K,X)}()}();
//# sourceMappingURL=module.bundle.min.js.map