!function(e){function n(n){for(var t,o,i=n[0],s=n[1],d=n[2],c=n[3]||[],a=0,l=[];a<i.length;a++)o=i[a],Object.prototype.hasOwnProperty.call(H,o)&&H[o]&&l.push(H[o][0]),H[o]=0;for(t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t]);for(C&&C(n),S.push.apply(S,c);l.length;)l.shift()();return I.push.apply(I,d||[]),r()}function r(){for(var e,n=0;n<I.length;n++){for(var r=I[n],t=!0,o=1;o<r.length;o++){var i=r[o];0!==H[i]&&(t=!1)}t&&(I.splice(n--,1),e=A(A.s=r[0]))}return 0===I.length&&(S.forEach((function(e){if(void 0===H[e]){H[e]=null;var n=document.createElement("link");n.crossOrigin="anonymous",A.nc&&n.setAttribute("nonce",A.nc),n.rel="prefetch",n.as="script",n.href=q(e),document.head.appendChild(n)}})),S.length=0),e}var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,n){if(!x[e]||!j[e])return;for(var r in j[e]=!1,n)Object.prototype.hasOwnProperty.call(n,r)&&(v[r]=n[r]);0===--b&&0===g&&P()}(e,n),t&&t(e,n)};var o,i=!0,s="3f2ed7c191deb60aa2d2",d=1e4,c={},a=[],l=[];function u(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,r){if(void 0===e)n._selfAccepted=!0;else if("function"===typeof e)n._selfAccepted=e;else if("object"===typeof e)for(var t=0;t<e.length;t++)n._acceptedDependencies[e[t]]=r||function(){};else n._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"===typeof e)for(var r=0;r<e.length;r++)n._declinedDependencies[e[r]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=n._disposeHandlers.indexOf(e);r>=0&&n._disposeHandlers.splice(r,1)},check:O,apply:D,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var n=p.indexOf(e);n>=0&&p.splice(n,1)},data:c[e]};return o=void 0,n}var p=[],f="idle";function h(e){f=e;for(var n=0;n<p.length;n++)p[n].call(null,e)}var m,v,y,b=0,g=0,w={},j={},x={};function _(e){return+e+""===e?+e:e}function O(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return i=e,h("check"),(n=d,n=n||1e4,new Promise((function(e,r){if("undefined"===typeof XMLHttpRequest)return r(new Error("No browser support"));try{var t=new XMLHttpRequest,o=A.p+""+s+".hot-update.json";t.open("GET",o,!0),t.timeout=n,t.send(null)}catch(i){return r(i)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)r(new Error("Manifest request to "+o+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)r(new Error("Manifest request to "+o+" failed."));else{try{var n=JSON.parse(t.responseText)}catch(i){return void r(i)}e(n)}}}))).then((function(e){if(!e)return h("idle"),null;j={},w={},x=e.c,y=e.h,h("prepare");var n=new Promise((function(e,n){m={resolve:e,reject:n}}));for(var r in v={},H)E(r);return"prepare"===f&&0===g&&0===b&&P(),n}));var n}function E(e){x[e]?(j[e]=!0,b++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=A.p+""+e+"."+s+".hot-update.js",n.crossOrigin="anonymous",document.head.appendChild(n)}(e)):w[e]=!0}function P(){h("ready");var e=m;if(m=null,e)if(i)Promise.resolve().then((function(){return D(i)})).then((function(n){e.resolve(n)}),(function(n){e.reject(n)}));else{var n=[];for(var r in v)Object.prototype.hasOwnProperty.call(v,r)&&n.push(_(r));e.resolve(n)}}function D(n){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var r,t,o,i,d;function l(e){for(var n=[e],r={},t=n.map((function(e){return{chain:[e],id:e}}));t.length>0;){var o=t.pop(),s=o.id,d=o.chain;if((i=k[s])&&!i.hot._selfAccepted){if(i.hot._selfDeclined)return{type:"self-declined",chain:d,moduleId:s};if(i.hot._main)return{type:"unaccepted",chain:d,moduleId:s};for(var c=0;c<i.parents.length;c++){var a=i.parents[c],l=k[a];if(l){if(l.hot._declinedDependencies[s])return{type:"declined",chain:d.concat([a]),moduleId:s,parentId:a};-1===n.indexOf(a)&&(l.hot._acceptedDependencies[s]?(r[a]||(r[a]=[]),u(r[a],[s])):(delete r[a],n.push(a),t.push({chain:d.concat([a]),id:a})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function u(e,n){for(var r=0;r<n.length;r++){var t=n[r];-1===e.indexOf(t)&&e.push(t)}}n=n||{};var p={},m=[],b={},g=function(){console.warn("[HMR] unexpected require("+j.moduleId+") to disposed module")};for(var w in v)if(Object.prototype.hasOwnProperty.call(v,w)){var j;d=_(w);var O=!1,E=!1,P=!1,D="";switch((j=v[w]?l(d):{type:"disposed",moduleId:w}).chain&&(D="\nUpdate propagation: "+j.chain.join(" -> ")),j.type){case"self-declined":n.onDeclined&&n.onDeclined(j),n.ignoreDeclined||(O=new Error("Aborted because of self decline: "+j.moduleId+D));break;case"declined":n.onDeclined&&n.onDeclined(j),n.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+j.moduleId+" in "+j.parentId+D));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(j),n.ignoreUnaccepted||(O=new Error("Aborted because "+d+" is not accepted"+D));break;case"accepted":n.onAccepted&&n.onAccepted(j),E=!0;break;case"disposed":n.onDisposed&&n.onDisposed(j),P=!0;break;default:throw new Error("Unexception type "+j.type)}if(O)return h("abort"),Promise.reject(O);if(E)for(d in b[d]=v[d],u(m,j.outdatedModules),j.outdatedDependencies)Object.prototype.hasOwnProperty.call(j.outdatedDependencies,d)&&(p[d]||(p[d]=[]),u(p[d],j.outdatedDependencies[d]));P&&(u(m,[j.moduleId]),b[d]=g)}var I,S=[];for(t=0;t<m.length;t++)d=m[t],k[d]&&k[d].hot._selfAccepted&&b[d]!==g&&S.push({module:d,errorHandler:k[d].hot._selfAccepted});h("dispose"),Object.keys(x).forEach((function(e){!1===x[e]&&function(e){delete H[e]}(e)}));for(var q,M,W=m.slice();W.length>0;)if(d=W.pop(),i=k[d]){var T={},C=i.hot._disposeHandlers;for(o=0;o<C.length;o++)(r=C[o])(T);for(c[d]=T,i.hot.active=!1,delete k[d],delete p[d],o=0;o<i.children.length;o++){var U=k[i.children[o]];U&&((I=U.parents.indexOf(d))>=0&&U.parents.splice(I,1))}}for(d in p)if(Object.prototype.hasOwnProperty.call(p,d)&&(i=k[d]))for(M=p[d],o=0;o<M.length;o++)q=M[o],(I=i.children.indexOf(q))>=0&&i.children.splice(I,1);for(d in h("apply"),s=y,b)Object.prototype.hasOwnProperty.call(b,d)&&(e[d]=b[d]);var z=null;for(d in p)if(Object.prototype.hasOwnProperty.call(p,d)&&(i=k[d])){M=p[d];var L=[];for(t=0;t<M.length;t++)if(q=M[t],r=i.hot._acceptedDependencies[q]){if(-1!==L.indexOf(r))continue;L.push(r)}for(t=0;t<L.length;t++){r=L[t];try{r(M)}catch(V){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:d,dependencyId:M[t],error:V}),n.ignoreErrored||z||(z=V)}}}for(t=0;t<S.length;t++){var N=S[t];d=N.module,a=[d];try{A(d)}catch(V){if("function"===typeof N.errorHandler)try{N.errorHandler(V)}catch(J){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:J,originalError:V}),n.ignoreErrored||z||(z=J),z||(z=V)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:d,error:V}),n.ignoreErrored||z||(z=V)}}return z?(h("fail"),Promise.reject(z)):(h("idle"),new Promise((function(e){e(m)})))}var k={},H={1:0},I=[],S=[];function q(e){return A.p+"static/js/"+({2:"docs-index"}[e]||e)+"."+{2:"0a1de342"}[e]+".js"}function A(n){if(k[n])return k[n].exports;var r=k[n]={i:n,l:!1,exports:{},hot:u(n),parents:(l=a,a=[],l),children:[]};return e[n].call(r.exports,r,r.exports,function(e){var n=k[e];if(!n)return A;var r=function(r){return n.hot.active?(k[r]?-1===k[r].parents.indexOf(e)&&k[r].parents.push(e):(a=[e],o=r),-1===n.children.indexOf(r)&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),a=[]),A(r)},t=function(e){return{configurable:!0,enumerable:!0,get:function(){return A[e]},set:function(n){A[e]=n}}};for(var i in A)Object.prototype.hasOwnProperty.call(A,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,t(i));return r.e=function(e){return"ready"===f&&h("prepare"),g++,A.e(e).then(n,(function(e){throw n(),e}));function n(){g--,"prepare"===f&&(w[e]||E(e),0===g&&0===b&&P())}},r.t=function(e,n){return 1&n&&(e=r(e)),A.t(e,-2&n)},r}(n)),r.l=!0,r.exports}A.e=function(e){var n=[],r=H[e];if(0!==r)if(r)n.push(r[2]);else{var t=new Promise((function(n,t){r=H[e]=[n,t]}));n.push(r[2]=t);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,A.nc&&i.setAttribute("nonce",A.nc),i.src=q(e),0!==i.src.indexOf(window.location.origin+"/")&&(i.crossOrigin="anonymous");var s=new Error;o=function(n){i.onerror=i.onload=null,clearTimeout(d);var r=H[e];if(0!==r){if(r){var t=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+t+": "+o+")",s.name="ChunkLoadError",s.type=t,s.request=o,r[1](s)}H[e]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(n)},A.m=e,A.c=k,A.d=function(e,n,r){A.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},A.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},A.t=function(e,n){if(1&n&&(e=A(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(A.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)A.d(r,t,function(n){return e[n]}.bind(null,t));return r},A.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return A.d(n,"a",n),n},A.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},A.p="/switch/",A.oe=function(e){throw console.error(e),e},A.h=function(){return s};var M=window.webpackJsonp=window.webpackJsonp||[],W=M.push.bind(M);M.push=n,M=M.slice();for(var T=0;T<M.length;T++)n(M[T]);var C=W,U=(I.push([0,0]),r());n([[],{},0,[0,2]])}({"./.docz/app/db.json":function(e){e.exports=JSON.parse('{"config":{"title":"switch","description":"\u5f00\u5173\u5207\u6362\u7ec4\u4ef6","menu":["\u9996\u9875"],"version":"1.0.2","repository":"https://github.com/sinoui/switch","native":false,"codeSandbox":false,"themeConfig":{},"separator":"-","typescript":true,"files":["**/*.mdx"],"public":"./docs/assets","wrapper":"docs/Wrapper.tsx","indexHtml":"docs/index.html","base":"/switch"},"props":[{"key":"docs\\\\Wrapper.tsx","value":[{"description":"","displayName":"Wrapper","methods":[],"props":{}}]},{"key":"src\\\\Switch.tsx","value":[{"description":"\u5f00\u5173\u63a7\u4ef6\\n@export\\n@param props\\n@returns","displayName":"Switch","methods":[],"props":{"color":{"defaultValue":null,"description":"","name":"color","required":false,"type":{"name":"string | undefined"}},"disabled":{"defaultValue":null,"description":"","name":"disabled","required":false,"type":{"name":"boolean | undefined"}},"checked":{"defaultValue":null,"description":"","name":"checked","required":false,"type":{"name":"boolean | undefined"}},"value":{"defaultValue":null,"description":"","name":"value","required":true,"type":{"name":"string"}},"onChange":{"defaultValue":null,"description":"","name":"onChange","required":false,"type":{"name":"((event: ChangeEvent<HTMLInputElement>) => void) | undefined"}}}}]}],"entries":[{"key":"docs/index.mdx","value":{"name":"\u5f00\u59cb","route":"/switch/","id":"73498ad0e1e62a714b08085d318f9de1","filepath":"docs/index.mdx","link":"https://github.com/sinoui/switch\\\\edit\\\\master\\\\docs/index.mdx","slug":"docs-index","menu":"","headings":[{"slug":"sinouiswitch","depth":1,"value":"@sinoui/switch"},{"slug":"\u4f9d\u8d56\u5b89\u88c5","depth":2,"value":"\u4f9d\u8d56\u5b89\u88c5"},{"slug":"\u5165\u95e8\u793a\u4f8b","depth":2,"value":"\u5165\u95e8\u793a\u4f8b"},{"slug":"\u989c\u8272\u5207\u6362","depth":2,"value":"\u989c\u8272\u5207\u6362"},{"slug":"\u4e0d\u53ef\u7528\u72b6\u6001","depth":2,"value":"\u4e0d\u53ef\u7528\u72b6\u6001"},{"slug":"\u4e0esinouisinoui-components-forms-\u96c6\u6210","depth":2,"value":"\u4e0e@sinoui/sinoui-components-forms \u96c6\u6210"},{"slug":"\u81ea\u5b9a\u4e49\u6837\u5f0f","depth":2,"value":"\u81ea\u5b9a\u4e49\u6837\u5f0f"}]}}]}')},"./.docz/app/index.jsx":function(e,n,r){"use strict";r.r(n);var t=r("./node_modules/react/index.js"),o=r.n(t),i=r("./node_modules/react-dom/index.js"),s=r.n(i),d=r("./node_modules/docz/dist/index.esm.js"),c=r("./node_modules/docz-theme-default/dist/index.esm.js"),a={"docs/index.mdx":function(){return Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"./docs/index.mdx"))}},l=r("./.docz/app/db.json"),u=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),p=r("./node_modules/sinoui-components/styles/defaultTheme.js");r("./docs/Wrapper.css");function f(e){var n=e.children;return o.a.createElement(u.ThemeProvider,{theme:p.a},n)}f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Wrapper",filename:"docs\\Wrapper.tsx"}});var h=function(){return o.a.createElement(c.a,{wrapper:f,linkComponent:d.b,db:l},o.a.createElement(d.d,{imports:a}))},m=[],v=[],y=function(){return m.forEach((function(e){return e&&e()}))},b=function(){return v.forEach((function(e){return e&&e()}))},g=document.querySelector("#root");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;y(),s.a.render(o.a.createElement(e,null),g,b)}(h)},"./docs/Wrapper.css":function(e,n,r){var t=r("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./docs/Wrapper.css");"string"===typeof t&&(t=[[e.i,t,""]]);var o={insert:"head",singleton:!1},i=r("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(t,o);t.locals&&(e.exports=t.locals),t.locals||e.hot.accept("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./docs/Wrapper.css",(function(){var n=r("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./docs/Wrapper.css");"string"===typeof n&&(n=[[e.i,n,""]]),i(n)})),e.hot.dispose((function(){i()}))},"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./docs/Wrapper.css":function(e,n,r){(e.exports=r("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([e.i,".scrollbar-container {\n  max-height: 100%;\n}\n",""])},0:function(e,n,r){e.exports=r("./.docz/app/index.jsx")}});
//# sourceMappingURL=app.3f2ed7c191deb60aa2d2.js.map