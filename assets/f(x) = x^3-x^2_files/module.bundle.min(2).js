!function(){"use strict";var e,t,n={4796:function(e,t,n){function o(e,t){return Object.defineProperty(t,"updateDefaults",{value:function(t){return e.updateDefaults(t)}}),t}n.d(t,{f:function(){return o}})},2033:function(e,t,n){n.d(t,{H:function(){return r}});var o=n(4796);function r(e){let{biLoggerFactory:t,userConfig:n={}}=e;const r=t(n);return(0,o.f)(r,r.logger())}},6304:function(e){e.exports=BusinessManagerAPI},7363:function(e){e.exports=React},1533:function(e){e.exports=ReactDOM},2611:function(e){e.exports=_},4481:function(e){e.exports=reactModuleContainer}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var a=o[e]={id:e,loaded:!1,exports:{}};return n[e].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=n,r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))},r.u=function(e){return{107:"ai-generator-bm-components-builder",130:"ai-text-generator-panel-open-method",204:"fea97ebdffc1d1a2bd7ff30dbaeb4e4fdb9ae4b9",426:"b44ef17d04228aae48842894c254171032bbb4f4",697:"ai-generator-bm.pages.index",826:"ai-generator-bm-components-popover",938:"ai-generator-bm-pages-ai-generator-builder"}[e]+".chunk.min.js"},r.miniCssF=function(e){return"fea97ebdffc1d1a2bd7ff30dbaeb4e4fdb9ae4b9.chunk.min.css"},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.hmd=function(e){return(e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e={},t="_wix_ai_generator_bm:",r.l=function(n,o,a,i){if(e[n])e[n].push(o);else{var l,u;if(void 0!==a)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var d=s[c];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+a){l=d;break}}l||(u=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+a),l.src=n,0!==l.src.indexOf(window.location.origin+"/")&&(l.crossOrigin="anonymous")),e[n]=[o];var f=function(t,o){l.onerror=l.onload=null,clearTimeout(p);var r=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((function(e){return e(o)})),t)return t(o)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),u&&document.head.appendChild(l)}},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},r.p="https://static.parastorage.com/services/ai-generator-bm/1b6ccd5eb8fe82e8573f3ae04c5f4c74bc9cc3e2d7f22b6e824486cc/",function(){if("undefined"!=typeof document){var e=function(e){return new Promise((function(t,n){var o=r.miniCssF(e),a=r.p+o;if(function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=(i=n[o]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(r===e||r===t))return i}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){var i;if((r=(i=a[o]).getAttribute("data-href"))===e||r===t)return i}}(o,a))return t();!function(e,t,n,o,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=function(n){if(a.onerror=a.onload=null,"load"===n.type)o();else{var i=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=l,a.parentNode&&a.parentNode.removeChild(a),r(u)}},a.href=t,0!==a.href.indexOf(window.location.origin+"/")&&(a.crossOrigin="anonymous"),n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a)}(e,a,null,t,n)}))},t={261:0};r.f.miniCss=function(n,o){t[n]?o.push(t[n]):0!==t[n]&&{204:1}[n]&&o.push(t[n]=e(n).then((function(){t[n]=0}),(function(e){throw delete t[n],e})))}}}(),function(){var e={261:0};r.f.j=function(t,n){var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));n.push(o[2]=a);var i=r.p+r.u(t),l=new Error;r.l(i,(function(n){if(r.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,o[1](l)}}),"chunk-"+t,t)}};var t=function(t,n){var o,a,i=n[0],l=n[1],u=n[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(u)u(r)}for(t&&t(n);s<i.length;s++)a=i[s],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0},n=self.webpackJsonp__wix_ai_generator_bm=self.webpackJsonp__wix_ai_generator_bm||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),function(){var e=r(6304),t=r(4481),n=r(7363),o=r.n(n),a=function(){return a=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},a.apply(this,arguments)},i=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{u(o.next(e))}catch(e){a(e)}}function l(e){try{u(o.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}u((o=o.apply(e,t||[])).next())}))},l=function(e,t){var n,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a);break}r[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}},u=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var o,r,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(o=a.next()).done;)i.push(o.value)}catch(e){r={error:e}}finally{try{o&&!o.done&&(n=a.return)&&n.call(a)}finally{if(r)throw r.error}}return i};function s(e,r){var s=this,c=r.flowAPIDelegate,d=r.context,f=d.enableTranslationsHMR,p=d.monitorHttpClient,m=e.component,g=e.loadReactComponent,h=e.filesHook,b=e.resolveHook,v=m.maybeTranslationsModel;return function(e){var r=u((0,n.useState)(),2),d=r[0],y=r[1],w=u((0,n.useState)((function(){return function(e){var t,n=m.componentId,o=c.createFedopsLogger(n),r=c.createComponentEssentials({componentId:n}).panoramaClient;p&&(t=c.bmModule._essentials.createHttpClientWithMonitoring({errorMonitor:c.moduleFlowAPI.errorMonitor,fedopsLogger:o}));var a=v?c.createComponentTranslationsAPI(v):void 0;return{componentHooksFlowAPI:c.getComponentHooksFlowAPI(m,{fedopsLogger:o,panoramaClient:r,maybeComponentTranslationsAPI:a,ownProps:e,httpClientWithMonitoring:t}),fedopsLogger:o,maybeComponentTranslationsAPI:a,httpClientWithMonitoring:t,panoramaClient:r}}(e)})),1),I=w[0],P=I.componentHooksFlowAPI,M=I.fedopsLogger,x=I.maybeComponentTranslationsAPI,C=I.httpClientWithMonitoring,A=I.panoramaClient;(0,n.useState)((function(){A.reportLoadStart()}));var L=u((0,n.useState)((function(){return(0,t.ReactLoadableComponent)(m.componentId,(function(){return i(s,void 0,void 0,(function(){var e,t,n,o,r,i,s,d;return l(this,(function(l){switch(l.label){case 0:return l.trys.push([0,2,,3]),f||c.prefetchTranslations(x),e=null==b?void 0:b.call(c.bmModule,P),t=g(),n=c.createBMComponentAPI(m,{fedopsLogger:M,componentTranslationsAPI:x,httpClientWithMonitoring:C,panoramaClient:A}),[4,Promise.all([e,t,n])];case 1:return o=u.apply(void 0,[l.sent(),3]),r=o[0],i=o[1],s=o[2],[2,a(a({default:i},r),{_componentFlowAPI:s})];case 2:throw d=l.sent(),y(d),d;case 3:return[2]}}))}))}),null==h?void 0:h.call(c.bmModule,P))})),1),_=L[0];if(d)throw d;return o().createElement(_,a({},e))}}var c=r(2611);function d(e,t){0}function f(e,t,n){0}var p=Sentry;function m(e){return!!e&&"sentry"in e}var g=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{u(o.next(e))}catch(e){a(e)}}function l(e){try{u(o.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}u((o=o.apply(e,t||[])).next())}))},h=function(e,t){var n,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a);break}r[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}},b=function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],o=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},v=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var o,r,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(o=a.next()).done;)i.push(o.value)}catch(e){r={error:e}}finally{try{o&&!o.done&&(n=a.return)&&n.call(a)}finally{if(r)throw r.error}}return i},y=function(e){var t=e.localeDistPath,n=e.availableLocales,o=e.errorReporter,a=e.httpClient,i=new Set(n),l=new Map;return{asyncMessagesLoader:function(e){return g(void 0,void 0,void 0,(function(){var n,u;return h(this,(function(s){return(n=l.get(e))?[2,n]:(u=function(e){return g(void 0,void 0,void 0,(function(){var n,l,u,s,c;return h(this,(function(d){switch(d.label){case 0:if(null==t||!i.has(e))return[2,Promise.reject(new Error("Locale assets for ".concat(e," are not provided")))];n="".concat(r.p).concat(t,"/messages_").concat(e,".json"),d.label=1;case 1:return d.trys.push([1,5,,6]),[4,a.get(n)];case 2:return l=d.sent(),((u=l.status)>=200&&u<300||304===u)&&null!=l.data?[2,l.data]:o?[4,String(l.data)]:[3,4];case 3:s=d.sent().substring(0,100),m(o)?o.captureMessage("Can't fetch locale ".concat(e),{level:p.Severity.Error,contexts:{requestDetails:{url:n,body:s,status:u}}}):o.captureMessage("Can't fetch locale ".concat(e),p.Severity.Error,{captureContext:{contexts:{requestDetails:{url:n,body:s,status:u}}}}),d.label=4;case 4:return[2,Promise.reject(new Error("Can't fetch locale ".concat(e,", status code: ").concat(u)))];case 5:return c=d.sent(),o&&(m(o)?o.captureException(c,{level:p.Severity.Error,contexts:{errorDetails:{message:"Can't fetch locale ".concat(e," due to fetch error"),url:n}}}):o.captureException(c,{captureContext:{level:p.Severity.Error,contexts:{errorDetails:{message:"Can't fetch locale ".concat(e," due to fetch error"),url:n}}}})),[2,Promise.reject(new Error("Can't fetch locale ".concat(e," due to fetch error")))];case 6:return[2]}}))}))}(e),l.set(e,u),[2,u])}))}))},addLocaleMessages:function(e){var t,n;try{for(var o=b(e.entries()),r=o.next();!r.done;r=o.next()){var a=v(r.value,2),i=a[0],u=a[1];l.set(i,Promise.resolve(u))}}catch(e){t={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}},removeLocaleMessages:function(e){l.delete(e)}}},w=function(){return w=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},w.apply(this,arguments)},I=function(e,t){var n,o,r,a,i,l,u,s=w(w({},{release:"".concat("ai-generator-bm","@").concat("1b6ccd5eb8fe82e8573f3ae04c5f4c74bc9cc3e2d7f22b6e824486cc"),beforeSend:(n=window.location.hostname,o=window.navigator.userAgent,r=window.document.cookie,a=/(^|;)\s*automation\s*=\s*sled:/.test(r),i=/localhost|127\.0\.0\.1|::1|\.local|local.wix.com|^$/i.test(n),l=/Googlebot|AdsBot-Google-Mobile|bingbot|BingPreview|facebookexternalhit|Baiduspider|YandexBot/i.test(o),u=/BonEcho|NewsGator|SeaMonkey|iTunes|Epiphany|Konqueror|Sleipnir|IceWeasel/i.test(o),function(e){return i?e.environment="development":l?e.environment="bot":u?e.environment="invalid_useragent":a&&(e.environment="sled"),e}),beforeBreadcrumb:function(e,t){var n,o=e.category,r=o&&("ui.click"===o||"ui.input"===o),a=null===(n=null==t?void 0:t.event)||void 0===n?void 0:n.target;if(r&&a){var i=a.closest("[data-hook]");if(i){var l=i.getAttribute("data-hook");e.message=a===i?"".concat(e.message,' [data-hook="').concat(l,'"]'):"".concat(e.message,' parent:[data-hook="').concat(l,'"]')}}return e}}),{dsn:t}),c=e._essentials.createSentryHub(s),d=c.client,f=c.hub;return function(e,t){var n=t.moduleParams;e.setUser({id:n.userId})}(f,{moduleParams:e.moduleParams}),{client:d,hub:f}},P=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{u(o.next(e))}catch(e){a(e)}}function l(e){try{u(o.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}u((o=o.apply(e,t||[])).next())}))},M=function(e,t){var n,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a);break}r[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}};var x=function(){return x=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},x.apply(this,arguments)},C=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{u(o.next(e))}catch(e){a(e)}}function l(e){try{u(o.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}u((o=o.apply(e,t||[])).next())}))},A=function(e,t){var n,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a);break}r[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}};var L,_=function(){return _=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},_.apply(this,arguments)},S=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{u(o.next(e))}catch(e){a(e)}}function l(e){try{u(o.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}u((o=o.apply(e,t||[])).next())}))},k=function(e,t){var n,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a);break}r[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}},F=function(){function t(e){this.module=e.module,this.optionalDeps=e.optionalDeps,this.bmModule=e.bmModule,this.artifactId=e.artifactId}return Object.defineProperty(t.prototype,"flowAPIInstances",{get:function(){var e=this.optionalDeps;return null==this._flowAPIInstances&&(this._flowAPIInstances=function(e){var t,n,o,r=this,a=e.bmModule,i=e.module,l=e.optionalDeps,u=i.config,s=u.translations,d=u.sentry,f=i.maybeTranslationsModel,p=(null==d?void 0:d.DSN)&&!(null==d?void 0:d.errorMonitor)?I(a,d.DSN):void 0,m=(null==d?void 0:d.DSN)&&(null==d?void 0:d.errorMonitor)?a._essentials.createErrorMonitor({dsn:d.DSN,appName:"ai-generator-bm",version:"1b6ccd5eb8fe82e8573f3ae04c5f4c74bc9cc3e2d7f22b6e824486cc"}):void 0;if(f){var g=(null==p?void 0:p.hub)||m,h=y({localeDistPath:null===(t=f.assets)||void 0===t?void 0:t.localeDistPath,availableLocales:f.availableLocales,errorReporter:g,httpClient:a._essentials.httpClient}),b=h.asyncMessagesLoader,v=h.addLocaleMessages,w=a._essentials.createI18n({asyncMessagesLoader:b,useSuspense:null===(n=null==s?void 0:s.suspense)||void 0===n||n,disableAutoInit:!0}),x=(0,c.once)((function(){return P(r,void 0,void 0,(function(){return M(this,(function(e){switch(e.label){case 0:return w.isInitialized?[3,2]:[4,w.init()];case 1:e.sent(),e.label=2;case 2:return[2,w]}}))}))}));o={i18n:w,asyncMessagesLoader:b,addLocaleMessages:v,init:x}}var C=(0,c.once)((function(){return P(r,void 0,void 0,(function(){var e;return M(this,(function(t){switch(t.label){case 0:return[4,l.loadOptionalFlowAPIDeps()];case 1:return[2,null==(e=t.sent().createBILogger)?void 0:e({biLoggerFactory:a._essentials.biLoggerFactory})]}}))}))}));return{maybeSentry:p,maybeErrorMonitor:m,maybeTranslations:o,getBILogger:C,experiments:a._essentials.experiments}}({optionalDeps:e,bmModule:this.bmModule,module:this.module})),this._flowAPIInstances},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"moduleFlowAPI",{get:function(){var t=this,n=t.bmModule,o=t.module,r=t.optionalDeps;return null==this._moduleFlowAPI&&(this._moduleFlowAPI=function(t){var n,o=this,r=t.module,a=t.flowAPIInstances,i=t.bmModule,l=t.optionalDeps,u=r.config,s=i._essentials.httpClient,p=i._essentials.createFedopsLogger((0,c.kebabCase)(r.moduleId),x({},null===(n=r.config.fedops)||void 0===n?void 0:n.config)),m=(0,c.once)((function(){return C(o,void 0,void 0,(function(){return A(this,(function(e){return[2,p]}))}))})),g=(0,c.once)((function(){return C(o,void 0,void 0,(function(){var e;return A(this,(function(t){return e=a.maybeTranslations,d(),[2,e.init()]}))}))})),h=(0,c.once)((function(){return C(o,void 0,void 0,(function(){var e;return A(this,(function(t){switch(t.label){case 0:return[4,a.getBILogger()];case 1:return e=t.sent(),d(),[2,e]}}))}))}));return{getBILogger:h,get biLogger(){return l.loadOptionalFlowAPIDeps().createBILogger({biLoggerFactory:i._essentials.biLoggerFactory})},_translations:a.maybeTranslations,getI18n:g,get experiments(){var e=a.experiments;return d(),e},getModuleFedopsLogger:m,moduleFedopsLogger:p,module:i,get moduleParams(){return i.moduleParams},sentryAndHub:a.maybeSentry,get sentry(){var e;return f(a.maybeSentry,null===(e=u.sentry)||void 0===e||e.errorMonitor),a.maybeSentry.hub},get errorMonitor(){var e;return f(a.maybeErrorMonitor,null===(e=u.sentry)||void 0===e||e.errorMonitor),a.maybeErrorMonitor},httpClient:s,moduleInfo:r.config,getCurrentInstance:function(t){var n,o=null!==(n=null!=t?t:r.config.appDefinitionId)&&void 0!==n?n:e.appDefIds.metaSite;return(0,e.getCurrentInstance)(o)},createCurrencyFormatter:i._essentials.createCurrencyFormatter,formatAddress:i._essentials.formatAddress}}({module:o,bmModule:n,optionalDeps:r,flowAPIInstances:this.flowAPIInstances})),this._moduleFlowAPI},enumerable:!1,configurable:!0}),t.prototype.createFedopsLogger=function(e){var t,n=this.bmModule,o=this.module;return n._essentials.createFedopsLogger(e,_({},null===(t=o.config.fedops)||void 0===t?void 0:t.config))},t.prototype.createComponentEssentials=function(e){var t=e.componentId;return this.bmModule._essentials.createComponentEssentials({componentId:t})},t.prototype.createComponentTranslationsAPI=function(e){var t,n,o,r,a=this,i=this.bmModule,l=this.moduleFlowAPI,u=(null===(t=l.sentryAndHub)||void 0===t?void 0:t.hub)||l.errorMonitor,s=y({localeDistPath:null===(n=e.assets)||void 0===n?void 0:n.localeDistPath,availableLocales:e.availableLocales,errorReporter:u,httpClient:l.httpClient}),d=s.asyncMessagesLoader,f=s.addLocaleMessages,p=i._essentials.createI18n({asyncMessagesLoader:d,useSuspense:null===(r=null===(o=this.module.config.translations)||void 0===o?void 0:o.suspense)||void 0===r||r,disableAutoInit:!0}),m=(0,c.once)((function(){return S(a,void 0,void 0,(function(){return k(this,(function(e){switch(e.label){case 0:return p.isInitialized?[3,2]:[4,p.init()];case 1:e.sent(),e.label=2;case 2:return[2,p]}}))}))}));return{i18n:p,init:m,asyncMessagesLoader:d,addLocaleMessages:f}},t.prototype.createBMMethodFlowAPI=function(e){var t=this,n=this.moduleFlowAPI,o=this.module,r=this.createFedopsLogger(e.methodId);return{get module(){return n.module},get moduleInfo(){return n.moduleInfo},get httpClient(){return n.httpClient},get sentry(){var e,t;return f(n.sentryAndHub,null===(t=null===(e=o.config)||void 0===e?void 0:e.sentry)||void 0===t||t.errorMonitor),n.sentryAndHub.hub},get errorMonitor(){var e,t;return f(n.errorMonitor,null===(t=null===(e=o.config)||void 0===e?void 0:e.sentry)||void 0===t||t.errorMonitor),n.errorMonitor},get moduleParams(){return n.moduleParams},getI18n:n.getI18n,get experiments(){return n.experiments},getBILogger:n.getBILogger,get biLogger(){return n.biLogger},getModuleFedopsLogger:n.getModuleFedopsLogger,moduleFedopsLogger:n.moduleFedopsLogger,getFedopsLogger:function(){return S(t,void 0,void 0,(function(){return k(this,(function(e){return[2,r]}))}))},fedopsLogger:r,getCurrentInstance:n.getCurrentInstance,createCurrencyFormatter:n.createCurrencyFormatter,formatAddress:n.formatAddress}},t.prototype.getComponentHooksFlowAPI=function(e,t){var n=this,o=t.fedopsLogger,r=t.panoramaClient,a=t.maybeComponentTranslationsAPI,i=t.ownProps,l=t.httpClientWithMonitoring,u=this.moduleFlowAPI,s=this.module,c=a?a.init:u.getI18n;return{get module(){return u.module},get moduleInfo(){return u.moduleInfo},get httpClient(){return null!=l?l:u.httpClient},get sentry(){var e,t;return f(u.sentryAndHub,null===(t=null===(e=s.config)||void 0===e?void 0:e.sentry)||void 0===t||t.errorMonitor),u.sentryAndHub.hub},get errorMonitor(){var e,t;return f(u.errorMonitor,null===(t=null===(e=s.config)||void 0===e?void 0:e.sentry)||void 0===t||t.errorMonitor),u.errorMonitor},get moduleParams(){return u.moduleParams},getModuleFedopsLogger:u.getModuleFedopsLogger,moduleFedopsLogger:u.moduleFedopsLogger,getI18n:c,get experiments(){return u.experiments},getBILogger:u.getBILogger,get biLogger(){return u.biLogger},componentInfo:{componentId:e.componentId,type:e.componentType,fileName:e.fileName,route:e.route},getFedopsLogger:function(){return S(n,void 0,void 0,(function(){return k(this,(function(e){return[2,o]}))}))},fedopsLogger:o,panoramaClient:r,getCurrentInstance:u.getCurrentInstance,createCurrencyFormatter:u.createCurrencyFormatter,formatAddress:u.formatAddress,ownProps:i}},t.prototype.createBMComponentAPI=function(e,t){var n=t.fedopsLogger,o=t.componentTranslationsAPI,r=t.httpClientWithMonitoring,a=t.panoramaClient;return S(this,void 0,void 0,(function(){var t,i,l,u,s,c,p,m;return k(this,(function(g){switch(g.label){case 0:return i=(t=this).moduleFlowAPI,l=t.flowAPIInstances,u=t.module,s=l.maybeTranslations,c=l.experiments,[4,(0,l.getBILogger)()];case 1:return p=g.sent(),[2,{_translations:m=null!=o?o:s,module:u,moduleInfo:i.moduleInfo,get httpClient(){return null!=r?r:i.httpClient},get _sentry(){var e;return null===(e=i.sentryAndHub)||void 0===e?void 0:e.hub},get sentry(){var e,t;return f(i.sentryAndHub,null===(t=null===(e=u.config)||void 0===e?void 0:e.sentry)||void 0===t||t.errorMonitor),i.sentryAndHub.hub},get errorMonitor(){var e,t;return f(i.errorMonitor,null===(t=null===(e=u.config)||void 0===e?void 0:e.sentry)||void 0===t||t.errorMonitor),i.errorMonitor},get moduleParams(){return i.moduleParams},get i18n(){return d(),m.i18n},get biLogger(){return d(),p},get experiments(){return c},componentInfo:{componentId:e.componentId,type:e.componentType,fileName:e.fileName,route:e.route},get fedopsLogger(){return d(),n},get panoramaClient(){return d(),a},get createCurrencyFormatter(){return i.createCurrencyFormatter},get formatAddress(){return i.formatAddress}}]}}))}))},t.prototype.prefetchTranslations=function(e){return S(this,void 0,void 0,(function(){var t,n;return k(this,(function(o){switch(o.label){case 0:return t=this.moduleFlowAPI._translations,[4,null==(n=null!=e?e:t)?void 0:n.init()];case 1:return o.sent(),[2]}}))}))},t}(),E=(L=function(e,t){return L=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},L(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}L(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),T=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{u(o.next(e))}catch(e){a(e)}}function l(e){try{u(o.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}u((o=o.apply(e,t||[])).next())}))},D=function(e,t){var n,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a);break}r[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}},O=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var o,r,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(o=a.next()).done;)i.push(o.value)}catch(e){r={error:e}}finally{try{o&&!o.done&&(n=a.return)&&n.call(a)}finally{if(r)throw r.error}}return i},j=function(e,t,n){if(n||2===arguments.length)for(var o,r=0,a=t.length;r<a;r++)!o&&r in t||(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};var N,B,H,R,G,W,q,z,U,J,K,$,Y,Q,V,X,Z=r(2033);B=(N={context:{enableTranslationsHMR:!1,artifactId:"ai-generator-bm",fullArtifactId:"com.wixpress.ai-generator-bm",monitorHttpClient:!1},requireableModule:{module:{moduleId:"AI_GENERATOR_BM",config:{$schema:"target/schemas/.application.schema.json",moduleId:"AI_GENERATOR_BM",appDefinitionId:"0eda8565-75ae-4e9f-afa2-47e3b52013b4",isCoreService:!0,routeNamespace:"ai-generator-bm",translations:{enabled:!0},sentry:{DSN:"https://b32d057e6e014771b350e14a086c4717@sentry.wixpress.com/4801",id:"b32d057e6e014771b350e14a086c4717",projectName:"ai-generator-bm",teamName:"ai-generator-bm",errorMonitor:!0},moduleBundleName:"module"},fedopsPath:"/home/builduser/work/1ef6462826309acd/packages/ai-generator-bm/fedops.json",maybeTranslationsModel:{assets:{localeDir:"/home/builduser/work/1ef6462826309acd/packages/ai-generator-bm/src/assets/locale",localeDistPath:"assets/locale"},availableLocales:["ar","bg","ca","cs","da","de","el","en","es","fi","fr","he","hi","hr","hu","id","it","ja","ko","lt","lv","ms","nl","no","pl","pt","ro","ru","sk","sl","sv","th","tl","tr","uk","vi","zh"],messagesEnFile:"messages_en.json"}}},pages:[{component:{componentId:"ai-generator-bm.pages.index",componentType:"page",componentName:"ai-generator-bm.pages.index",fileName:"index.tsx",route:"ai-generator-bm",maybeTranslationsModel:null},loadReactComponent:async()=>(await Promise.all([r.e(204),r.e(697)]).then(r.bind(r,2760))).default},{component:{componentId:"ai-generator-bm-pages-ai-generator-builder",componentType:"page",componentName:"ai-generator-bm-pages-ai-generator-builder",fileName:"ai-generator-builder.tsx",route:"ai-generator-bm/ai-generator-builder/ai-generator-builder",maybeTranslationsModel:null},loadReactComponent:async()=>(await Promise.all([r.e(204),r.e(426),r.e(938)]).then(r.bind(r,1972))).default}],exportedComponents:[{component:{componentId:"ai-generator-bm-components-builder",componentType:"exported-component",maybeTranslationsModel:null},loadReactComponent:async()=>(await Promise.all([r.e(204),r.e(426),r.e(107)]).then(r.bind(r,9933))).default},{component:{componentId:"ai-generator-bm-components-popover",componentType:"exported-component",maybeTranslationsModel:null},loadReactComponent:async()=>(await Promise.all([r.e(204),r.e(426),r.e(826)]).then(r.bind(r,4474))).default}],extensionComponents:[],methods:[{method:{methodId:"ai-text-generator-panel-open-method"},fn:async()=>(await r.e(130).then(r.bind(r,591))).default}],optionalDeps:{loadOptionalFlowAPIDeps:()=>({createBILogger:Z.H})}}).context,H=N.requireableModule,R=H.module,G=H.configHook,W=H.initHook,q=N.pages,z=N.exportedComponents,U=N.methods,J=N.optionalDeps,K=R.config,$=R.moduleId,Y=K.moduleConfigurationId,Q=B.artifactId,V=B.fullArtifactId,X=function(n){function o(e){var t=n.call(this,e)||this;return t.state={},t.setState=function(e){return t.state=e},t.setArtifactId(Q),t.setFullArtifactId(V),Y&&t.setModuleConfigurationId(Y),t.flowAPIDelegate=new F({bmModule:t,module:R,optionalDeps:J,artifactId:Q}),t}return E(o,n),o.prototype.register=function(n){var o=this;this.moduleParams=n;var r=this.flowAPIDelegate,a=r.moduleFlowAPI,i=a.sentryAndHub,l=a.errorMonitor;q.forEach((function(t){var n=t.component,a=n.componentId,u=n.componentName;(l||i)&&(0,e.registerPageComponentMonitors)(a,{errorMonitor:l,sentryClient:null==i?void 0:i.client}),o.registerPageComponent(u,s(t,{module:R,flowAPIDelegate:r,context:B}))})),z.forEach((function(e){var t=e.component.componentId;o.registerComponentWithModuleParams(t,s(e,{context:B,module:R,flowAPIDelegate:r}),{suspense:!0})})),U.forEach((function(e){var n=e.method,a=e.fn;t.ModuleRegistry.registerMethod(n.methodId,(function(){var e=r.createBMMethodFlowAPI(n);return!1===n.lazy?a().bind(o,e):function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return T(o,void 0,void 0,(function(){return D(this,(function(n){switch(n.label){case 0:return[4,a()];case 1:return[2,n.sent().bind(this,e).apply(void 0,j([],O(t),!1))]}}))}))}}))}))},Object.defineProperty(o.prototype,"_essentials",{get:function(){return this.appEssentials},enumerable:!1,configurable:!0}),o.prototype.init=function(e){var t=this.flowAPIDelegate;W&&W.call(this,t.moduleFlowAPI)},o.prototype.config=function(e,t){var n=this.flowAPIDelegate;G&&G.call(this,n.moduleFlowAPI,e,t)},o.prototype.prefetchFlowAPI=function(){var e,t=this.flowAPIDelegate;return Promise.all([null===(e=t.moduleFlowAPI._translations)||void 0===e?void 0:e.init()])},o.prototype.prefetchComponent=function(e){var t=this.prefetchFlowAPI(),n=z.find((function(t){return t.component.componentId===e}));if(null!=n)return Promise.all([t,n.loadReactComponent()])},o}(e.BusinessManagerModule),(0,e.registerModule)($,X)}()}();
//# sourceMappingURL=module.bundle.min.js.map