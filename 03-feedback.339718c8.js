!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e};var i,o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,d="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,v=d||s||Function("return this")(),m=Object.prototype.toString,b=Math.max,p=Math.min,y=function(){return v.Date.now()};function g(e,t,n){var i,o,a,u,l,f,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function m(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function g(e){return c=e,l=setTimeout(w,t),d?m(e):u}function h(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=a}function w(){var e=y();if(h(e))return S(e);l=setTimeout(w,function(e){var n=t-(e-f);return s?p(n,a-(e-c)):n}(e))}function S(e){return l=void 0,v&&i?m(e):(i=o=void 0,u)}function T(){var e=y(),n=h(e);if(i=arguments,o=this,f=e,n){if(void 0===l)return g(f);if(s)return l=setTimeout(w,t),m(f)}return void 0===l&&(l=setTimeout(w,t)),u}return t=O(t)||0,j(n)&&(d=!!n.leading,a=(s="maxWait"in n)?b(O(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==l&&clearTimeout(l),c=0,i=f=o=l=void 0},T.flush=function(){return void 0===l?u:S(y())},T}function j(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function O(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(j(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=j(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var i=l.test(t);return i||f.test(t)?c(t.slice(2),i?2:8):u.test(t)?NaN:+t}i=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return j(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:i,maxWait:t,trailing:o})};var h,w,S=document.querySelector("form"),T=S.elements.email,x=S.elements.message,N=document.querySelector("button");S.addEventListener("input",e(i)((function(){var t,i=(t={},e(n)(t,T.name,T.value),e(n)(t,x.name,x.value),t);localStorage.setItem("fedback-from-state",JSON.stringify(i))}),500)),h=localStorage.getItem("fedback-from-state"),w=JSON.parse(h),T.value=(null==w?void 0:w.email)||"",x.value=(null==w?void 0:w.message)||"",N.addEventListener("click",(function(t){if(t.preventDefault(),""!==T.value||""!==x.value){var i,o=(i={},e(n)(i,T.name,T.value),e(n)(i,x.name,x.value),i);console.log(o),localStorage.clear(),S.reset()}else console.log('Please fill in the fields "'.concat(T.name,'" and "').concat(x.name,'"'))}))}();
//# sourceMappingURL=03-feedback.339718c8.js.map
