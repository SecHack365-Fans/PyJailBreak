(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{48312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(15642)}])},71210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},48418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(94941).Z;n(45753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=(o=n(67294))&&o.__esModule?o:{default:o},u=n(76273),l=n(22725),i=n(63462),f=n(21018),c=n(57190),s=n(71210),d=n(98684);var p="undefined"!==typeof a.default.useTransition,v={};function y(e,t,n,r){if(e&&u.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;v[t+"%"+n+(o?"%"+o:"")]=!0}}var h=a.default.forwardRef((function(e,t){var n,o=e.href,h=e.as,_=e.children,g=e.prefetch,m=e.passHref,x=e.replace,j=e.soft,b=e.shallow,C=e.scroll,M=e.locale,k=e.onClick,P=e.onMouseEnter,O=e.legacyBehavior,E=void 0===O?!0!==Boolean(!1):O,w=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);n=_,!E||"string"!==typeof n&&"number"!==typeof n||(n=a.default.createElement("a",null,n));var R=!1!==g,L=r(p?a.default.useTransition():[],2)[1],A=a.default.useContext(i.RouterContext),T=a.default.useContext(f.AppRouterContext);T&&(A=T);var B,I=a.default.useMemo((function(){var e=r(u.resolveHref(A,o,!0),2),t=e[0],n=e[1];return{href:t,as:h?u.resolveHref(A,h):n||t}}),[A,o,h]),N=I.href,U=I.as,D=a.default.useRef(N),H=a.default.useRef(U);E&&(B=a.default.Children.only(n));var J=E?B&&"object"===typeof B&&B.ref:t,K=r(c.useIntersection({rootMargin:"200px"}),3),F=K[0],S=K[1],X=K[2],Z=a.default.useCallback((function(e){H.current===U&&D.current===N||(X(),H.current=U,D.current=N),F(e),J&&("function"===typeof J?J(e):"object"===typeof J&&(J.current=e))}),[U,J,N,X,F]);a.default.useEffect((function(){var e=S&&R&&u.isLocalURL(N),t="undefined"!==typeof M?M:A&&A.locale,n=v[N+"%"+U+(t?"%"+t:"")];e&&!n&&y(A,N,U,{locale:t})}),[U,N,S,M,R,A]);var q={ref:Z,onClick:function(e){E||"function"!==typeof k||k(e),E&&B.props&&"function"===typeof B.props.onClick&&B.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,l,i,f,c){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n)){e.preventDefault();var s=function(){"softPush"in t&&"softReplace"in t?t[a?o?"softReplace":"softPush":o?"replace":"push"](n):t[o?"replace":"push"](n,r,{shallow:l,locale:f,scroll:i})};c?c(s):s()}}(e,A,N,U,x,j,b,C,M,T?L:void 0)},onMouseEnter:function(e){E||"function"!==typeof P||P(e),E&&B.props&&"function"===typeof B.props.onMouseEnter&&B.props.onMouseEnter(e),u.isLocalURL(N)&&y(A,N,U,{priority:!0})}};if(!E||m||"a"===B.type&&!("href"in B.props)){var z="undefined"!==typeof M?M:A&&A.locale,G=A&&A.isLocaleDomain&&s.getDomainLocale(U,z,A.locales,A.domainLocales);q.href=G||d.addBasePath(l.addLocale(U,z,A&&A.defaultLocale))}return E?a.default.cloneElement(B,q):a.default.createElement("a",Object.assign({},w,q),n)}));t.default=h,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},57190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(94941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,f=e.disabled||!u,c=o.useRef(),s=r(o.useState(!1),2),d=s[0],p=s[1],v=r(o.useState(null),2),y=v[0],h=v[1];o.useEffect((function(){if(u){if(c.current&&(c.current(),c.current=void 0),f||d)return;return y&&y.tagName&&(c.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=i.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=l.get(r)))return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:a,elements:o},i.push(n),l.set(n,t),t}(n),o=r.id,a=r.observer,u=r.elements;return u.set(e,t),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),l.delete(o);var t=i.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&i.splice(t,1)}}}(y,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==c.current||c.current(),c.current=void 0}}if(!d){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[y,f,n,t,d]);var _=o.useCallback((function(){p(!1)}),[]);return[h,d,_]};var o=n(67294),a=n(9311),u="function"===typeof IntersectionObserver;var l=new Map,i=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},21018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FullAppTreeContext=t.AppTreeContext=t.AppRouterContext=void 0;var r,o=(r=n(67294))&&r.__esModule?r:{default:r};var a=o.default.createContext(null);t.AppRouterContext=a;var u=o.default.createContext(null);t.AppTreeContext=u;var l=o.default.createContext(null);t.FullAppTreeContext=l},15642:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(85893),o=n(41664),a=n.n(o),u=n(9008),l=n.n(u),i=function(e){var t=e.title,n=e.description;return(0,r.jsxs)(l(),{children:[(0,r.jsx)("title",{children:t||"PyJailBreak"}),(0,r.jsx)("meta",{name:"description",content:n||"Black box automated vulnerability scanning tool for Python socket servers"}),(0,r.jsx)("link",{rel:"icon",href:"/PyJailBreak/favicon.ico"}),(0,r.jsx)("meta",{name:"og:title",content:t}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{property:"og:image",content:"https://pbs.twimg.com/card_img/1551139193656844288/N9ApjUm4?format=jpg&name=orig"})]})},f=function(){return(0,r.jsx)("div",{children:"\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u30d0\u30fc"})},c=function(e){var t=e.children,n=e.title,o=e.description;return(0,r.jsxs)("main",{children:[(0,r.jsx)(i,{title:n,description:o}),(0,r.jsx)(f,{}),(0,r.jsx)("div",{style:{padding:"15px"},children:t})]})},s=function(){return(0,r.jsxs)(c,{children:[(0,r.jsx)("img",{src:"/PyJailBreak/PyJailBreak.png",alt:"title logo"}),(0,r.jsx)(a(),{href:"/openapi",children:(0,r.jsx)("a",{children:"API"})})]})}},9008:function(e,t,n){e.exports=n(5443)},41664:function(e,t,n){e.exports=n(48418)}},function(e){e.O(0,[774,888,179],(function(){return t=48312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);