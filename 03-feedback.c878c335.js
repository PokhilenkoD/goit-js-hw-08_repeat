function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,v=function(){return c.Date.now()};function g(e,t,n){var i,r,o,a,u,f,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,o=r;return i=r=void 0,l=t,a=e.apply(o,n)}function j(e){return l=e,u=setTimeout(w,t),c?b(e):a}function h(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=o}function w(){var e=v();if(h(e))return O(e);u=setTimeout(w,function(e){var n=t-(e-f);return s?d(n,o-(e-l)):n}(e))}function O(e){return u=void 0,g&&i?b(e):(i=r=void 0,a)}function T(){var e=v(),n=h(e);if(i=arguments,r=this,f=e,n){if(void 0===u)return j(f);if(s)return u=setTimeout(w,t),b(f)}return void 0===u&&(u=setTimeout(w,t)),a}return t=y(t)||0,p(n)&&(c=!!n.leading,o=(s="maxWait"in n)?m(y(n.maxWait)||0,t):o,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==u&&clearTimeout(u),l=0,i=f=r=u=void 0},T.flush=function(){return void 0===u?a:O(v())},T}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:i,maxWait:t,trailing:r})};const b=document.querySelector(".js-feedback-form");b.addEventListener("input",e(t)(w,250));document.querySelector(".js-submit").addEventListener("click",(function(e){e.preventDefault(),b.removeEventListener("input",w),h.email||h.email||(h.message=b.elements.message.value,h.email=b.elements.email.value);b.reset()}));const j=JSON.parse(localStorage.getItem("feedback-form-state"))||"";b.elements.message.value=j.message?j.message:"",b.elements.email.value=j.email?j.email:"";const h={};function w(e){"email"===e.target.name?h.email=e.target.value:h.message=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(h))}
//# sourceMappingURL=03-feedback.c878c335.js.map
