(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{9361:function(e,t){"use strict";t.Z=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(2882)}])},1210:function(e,t){"use strict";function n(e,t,n,i){return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=n,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(9361).Z,o=n(4941).Z,r=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n,l=e.src,s=e.sizes,m=e.unoptimized,g=void 0!==m&&m,x=e.priority,z=void 0!==x&&x,k=e.loading,A=e.lazyRoot,E=e.lazyBoundary,O=e.className,N=e.quality,L=e.width,R=e.height,P=e.style,I=e.objectFit,M=e.objectPosition,q=e.onLoadingComplete,T=e.placeholder,B=void 0===T?"empty":T,Z=e.blurDataURL,D=c(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),U=u.useContext(p.ImageConfigContext),W=u.useMemo(function(){var e=v||U||f.imageConfigDefault,t=r(e.deviceSizes).concat(r(e.imageSizes)).sort(function(e,t){return e-t}),n=e.deviceSizes.sort(function(e,t){return e-t});return a({},e,{allSizes:t,deviceSizes:n})},[U]),F=s?"responsive":"intrinsic";"layout"in D&&(D.layout&&(F=D.layout),delete D.layout);var H=S;if("loader"in D){if(D.loader){var G=D.loader;H=function(e){e.config;var t=c(e,["config"]);return G(t)}}delete D.loader}var V="";if(function(e){var t;return"object"==typeof e&&(j(e)||void 0!==e.src)}(l)){var K=j(l)?l.default:l;if(!K.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(K)));if(Z=Z||K.blurDataURL,V=K.src,(!F||"fill"!==F)&&(R=R||K.height,L=L||K.width,!K.height||!K.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(K)))}l="string"==typeof l?l:V;var J=!z&&("lazy"===k||void 0===k);(l.startsWith("data:")||l.startsWith("blob:"))&&(g=!0,J=!1),y.has(l)&&(J=!1),W.unoptimized&&(g=!0);var X=o(u.useState(!1),2),Q=X[0],Y=X[1],$=o(h.useIntersection({rootRef:void 0===A?null:A,rootMargin:E||"200px",disabled:!J}),3),ee=$[0],et=$[1],en=$[2],ei=!J||et,eo={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},er={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ea=!1,el=_(L),es=_(R),ec=_(N),eu=Object.assign({},P,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:I,objectPosition:M}),ed="blur"!==B||Q?{}:{backgroundSize:I||"cover",backgroundPosition:M||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(Z,'")')};if("fill"===F)eo.display="block",eo.position="absolute",eo.top=0,eo.left=0,eo.bottom=0,eo.right=0;else if(void 0!==el&&void 0!==es){var ef=es/el,eh=isNaN(ef)?"100%":"".concat(100*ef,"%");"responsive"===F?(eo.display="block",eo.position="relative",ea=!0,er.paddingTop=eh):"intrinsic"===F?(eo.display="inline-block",eo.position="relative",eo.maxWidth="100%",ea=!0,er.maxWidth="100%",t="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(el,"%27%20height=%27").concat(es,"%27/%3e")):"fixed"===F&&(eo.display="inline-block",eo.position="relative",eo.width=el,eo.height=es)}var ep={src:b,srcSet:void 0,sizes:void 0};ei&&(ep=w({config:W,src:l,unoptimized:g,layout:F,width:el,quality:ec,sizes:s,loader:H}));var em=l,eg="imagesizes";eg="imageSizes";var ev=(i(n={},"imageSrcSet",ep.srcSet),i(n,eg,ep.sizes),i(n,"crossOrigin",D.crossOrigin),n),ey=u.default.useLayoutEffect,eb=u.useRef(q),ex=u.useRef(l);u.useEffect(function(){eb.current=q},[q]),ey(function(){ex.current!==l&&(en(),ex.current=l)},[en,l]);var ej=a({isLazy:J,imgAttributes:ep,heightInt:es,widthInt:el,qualityInt:ec,layout:F,className:O,imgStyle:eu,blurStyle:ed,loading:k,config:W,unoptimized:g,placeholder:B,loader:H,srcString:em,onLoadingCompleteRef:eb,setBlurComplete:Y,setIntersection:ee,isVisible:ei,noscriptSizes:s},D);return u.default.createElement(u.default.Fragment,null,u.default.createElement("span",{style:eo},ea?u.default.createElement("span",{style:er},t?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:t}):null):null,u.default.createElement(C,Object.assign({},ej))),z?u.default.createElement(d.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+ep.src+ep.srcSet+ep.sizes,rel:"preload",as:"image",href:ep.srcSet?void 0:ep.src},ev))):null)};var a=n(6495).Z,l=n(2648).Z,s=n(1598).Z,c=n(7273).Z,u=s(n(7294)),d=l(n(5443)),f=n(9309),h=n(7190),p=n(9977);n(3794);var m=n(2392);function g(e){return"/"===e[0]?e.slice(1):e}var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1},y=new Set,b="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",x=new Map([["default",function(e){var t=e.config,n=e.src,i=e.width,o=e.quality;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:"".concat(m.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(o||75)}],["imgix",function(e){var t=e.config,n=e.src,i=e.width,o=e.quality,r=new URL("".concat(t.path).concat(g(n))),a=r.searchParams;return a.set("auto",a.getAll("auto").join(",")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||i.toString()),o&&a.set("q",o.toString()),r.href}],["cloudinary",function(e){var t,n=e.config,i=e.src,o=e.width,r=["f_auto","c_limit","w_"+o,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(n.path).concat(r).concat(g(i))}],["akamai",function(e){var t=e.config,n=e.src,i=e.width;return"".concat(t.path).concat(g(n),"?imwidth=").concat(i)}],["custom",function(e){var t=e.src;throw Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}],]);function j(e){return void 0!==e.default}function w(e){var t=e.config,n=e.src,i=e.unoptimized,o=e.layout,a=e.width,l=e.quality,s=e.sizes,c=e.loader;if(i)return{src:n,srcSet:void 0,sizes:void 0};var u=function(e,t,n,i){var o=e.deviceSizes,a=e.allSizes;if(i&&("fill"===n||"responsive"===n)){for(var l=/(^|\s)(1?\d?\d)vw/g,s=[];c=l.exec(i);c)s.push(parseInt(c[2]));if(s.length){var c,u,d=.01*(u=Math).min.apply(u,r(s));return{widths:a.filter(function(e){return e>=o[0]*d}),kind:"w"}}return{widths:a,kind:"w"}}return"number"!=typeof t||"fill"===n||"responsive"===n?{widths:o,kind:"w"}:{widths:r(new Set([t,2*t].map(function(e){return a.find(function(t){return t>=e})||a[a.length-1]}))),kind:"x"}}(t,a,o,s),d=u.widths,f=u.kind,h=d.length-1;return{sizes:s||"w"!==f?s:"100vw",srcSet:d.map(function(e,i){return"".concat(c({config:t,src:n,quality:l,width:e})," ").concat("w"===f?e:i+1).concat(f)}).join(", "),src:c({config:t,src:n,quality:l,width:d[h]})}}function _(e){return"number"==typeof e?e:"string"==typeof e?parseInt(e,10):void 0}function S(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",i=x.get(n);if(i)return i(e);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(n))}function z(e,t,n,i,o,r){e&&e.src!==b&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(e.parentNode&&(y.add(t),"blur"===i&&r(!0),null==o?void 0:o.current)){var n=e.naturalWidth,a=e.naturalHeight;o.current({naturalWidth:n,naturalHeight:a})}}))}var C=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),i=e.qualityInt,o=e.layout,r=e.className,l=e.imgStyle,s=e.blurStyle,d=e.isLazy,f=e.placeholder,h=e.loading,p=e.srcString,m=e.config,g=e.unoptimized,v=e.loader,y=e.onLoadingCompleteRef,b=e.setBlurComplete,x=e.setIntersection,j=e.onLoad,_=e.onError,S=(e.isVisible,e.noscriptSizes),C=c(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return h=d?"lazy":h,u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},C,t,{decoding:"async","data-nimg":o,className:r,style:a({},l,s),ref:u.useCallback(function(e){x(e),(null==e?void 0:e.complete)&&z(e,p,o,f,y,b)},[x,p,o,f,y,b,]),onLoad:function(e){z(e.currentTarget,p,o,f,y,b),j&&j(e)},onError:function(e){"blur"===f&&b(!0),_&&_(e)}})),(d||"blur"===f)&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},C,w({config:m,src:p,unoptimized:g,layout:o,width:n,quality:i,sizes:S,loader:v}),{decoding:"async","data-nimg":o,style:l,className:r,loading:h}))))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(4941).Z;n(5753).default,Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,r=n(7273).Z,a=o(n(7294)),l=n(6273),s=n(2725),c=n(3462),u=n(1018),d=n(7190),f=n(1210),h=n(8684),p={};function m(e,t,n,i){if(e&&l.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,i)).catch(function(e){});var o=i&&void 0!==i.locale?i.locale:e&&e.locale;p[t+"%"+n+(o?"%"+o:"")]=!0}}var g=a.default.forwardRef(function(e,t){var n,o,g=e.href,v=e.as,y=e.children,b=e.prefetch,x=e.passHref,j=e.replace,w=e.shallow,_=e.scroll,S=e.locale,z=e.onClick,C=e.onMouseEnter,k=e.onTouchStart,A=e.legacyBehavior,E=void 0===A?!0!==Boolean(!1):A,O=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=y,E&&("string"==typeof n||"number"==typeof n)&&(n=a.default.createElement("a",null,n));var N=!1!==b,L=a.default.useContext(c.RouterContext),R=a.default.useContext(u.AppRouterContext);R&&(L=R);var P=a.default.useMemo(function(){var e=i(l.resolveHref(L,g,!0),2),t=e[0],n=e[1];return{href:t,as:v?l.resolveHref(L,v):n||t}},[L,g,v]),I=P.href,M=P.as,q=a.default.useRef(I),T=a.default.useRef(M);E&&(o=a.default.Children.only(n));var B=E?o&&"object"==typeof o&&o.ref:t,Z=i(d.useIntersection({rootMargin:"200px"}),3),D=Z[0],U=Z[1],W=Z[2],F=a.default.useCallback(function(e){(T.current!==M||q.current!==I)&&(W(),T.current=M,q.current=I),D(e),B&&("function"==typeof B?B(e):"object"==typeof B&&(B.current=e))},[M,B,I,W,D]);a.default.useEffect(function(){var e=U&&N&&l.isLocalURL(I),t=void 0!==S?S:L&&L.locale,n=p[I+"%"+M+(t?"%"+t:"")];e&&!n&&m(L,I,M,{locale:t})},[M,I,U,S,N,L]);var H={ref:F,onClick:function(e){E||"function"!=typeof z||z(e),E&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),e.defaultPrevented||function(e,t,n,i,o,r,s,c,u,d){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(h=(f=e).currentTarget.target)||"_self"===h)&&!f.metaKey&&!f.ctrlKey&&!f.shiftKey&&!f.altKey&&(!f.nativeEvent||2!==f.nativeEvent.which)&&l.isLocalURL(n)){e.preventDefault();var f,h,p=function(){"beforePopState"in t?t[o?"replace":"push"](n,i,{shallow:r,locale:c,scroll:s}):t[o?"replace":"push"](n,{forceOptimisticNavigation:!d})};u?a.default.startTransition(p):p()}}(e,L,I,M,j,w,_,S,Boolean(R),N)},onMouseEnter:function(e){E||"function"!=typeof C||C(e),E&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),!(!N&&R)&&l.isLocalURL(I)&&m(L,I,M,{priority:!0})},onTouchStart:function(e){E||"function"!=typeof k||k(e),E&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),!(!N&&R)&&l.isLocalURL(I)&&m(L,I,M,{priority:!0})}};if(!E||x||"a"===o.type&&!("href"in o.props)){var G=void 0!==S?S:L&&L.locale,V=L&&L.isLocaleDomain&&f.getDomainLocale(M,G,L.locales,L.domainLocales);H.href=V||h.addBasePath(s.addLocale(M,G,L&&L.defaultLocale))}return E?a.default.cloneElement(o,H):a.default.createElement("a",Object.assign({},O,H),n)});t.default=g,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t,n=e.rootRef,c=e.rootMargin,u=e.disabled||!a,d=i(o.useState(!1),2),f=d[0],h=d[1],p=i(o.useState(null),2),m=p[0],g=p[1];return o.useEffect(function(){if(a){if(!u&&!f&&m&&m.tagName){var e,t,i,o,d,p,g;return t=function(e){return e&&h(e)},d=(o=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},i=s.find(function(e){return e.root===n.root&&e.margin===n.margin});if(i&&(t=l.get(i)))return t;var o=new Map;return t={id:n,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},s.push(n),l.set(n,t),t}(i={root:null==n?void 0:n.current,rootMargin:c})).id,p=o.observer,(g=o.elements).set(m,t),p.observe(m),function(){if(g.delete(m),p.unobserve(m),0===g.size){p.disconnect(),l.delete(d);var e=s.findIndex(function(e){return e.root===d.root&&e.margin===d.margin});e>-1&&s.splice(e,1)}}}}else if(!f){var v=r.requestIdleCallback(function(){return h(!0)});return function(){return r.cancelIdleCallback(v)}}},[m,u,c,n,f]),[g,f,o.useCallback(function(){h(!1)},[])]};var o=n(7294),r=n(9311),a="function"==typeof IntersectionObserver,l=new Map,s=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var i=(0,n(2648).Z)(n(7294)),o=i.default.createContext(null);t.AppRouterContext=o;var r=i.default.createContext(null);t.LayoutRouterContext=r;var a=i.default.createContext(null);t.GlobalLayoutRouterContext=a;var l=i.default.createContext(null);t.TemplateContext=l},2882:function(e,t,n){"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,{default:function(){return y}});var o=n(5893);n(906);var r=n(5675),a=n.n(r),l=n(7294),s=n(1664),c=n.n(s),u={src:"/_next/static/media/menu-open.77fcb5f9.svg",height:24,width:24},d={src:"/_next/static/media/menu-close.e73bfe9d.svg",height:24,width:24},f=function(e){return(0,o.jsx)("div",{children:(0,o.jsx)("button",{disabled:e.disabled,className:"bg-primary text-secondary font-medium px-8 py-2 text-xl md:text-sm rounded-full hover:brightness-[0.90] duration-200",children:e.content})})},h={src:"/_next/static/media/logo.e4df39c0.svg",height:24,width:100},p={src:"/_next/static/media/portion-icon.f9a54d4f.svg",height:222,width:222},m=function(){return(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"hidden md:block md:w-[12vw] lg:w-[10vw] max-w-[150px]",children:(0,o.jsx)(a(),{src:h,layout:"responsive",alt:"logo"})}),(0,o.jsx)("div",{className:"w-[8vw] py-2 md:w-[8vw] block md:hidden",children:(0,o.jsx)(a(),{src:p,layout:"responsive",alt:"logo"})})]})},g=function(){var e=(0,l.useState)(!1),t=e[0],n=e[1],i=function(){n(!t),console.log(t)};return(0,o.jsxs)("div",{className:"fixed flex w-full top-0 px-16 justify-between items-center h-24 z-50 text-white font-medium text-sm bg-secondary",children:[(0,o.jsx)(c(),{href:"/",children:(0,o.jsx)("button",{children:(0,o.jsx)(m,{})})}),(0,o.jsx)("div",{className:"md:hidden flex justify-end z-50",children:(0,o.jsx)("button",{onClick:i,children:t?(0,o.jsx)(a(),{src:d,alt:"menu-close",width:40,height:40}):(0,o.jsx)(a(),{src:u,alt:"menu-open",width:40,height:40})})}),(0,o.jsx)("div",{className:t?"fixed m-0 top-0 right-0 left-0 bottom-0 w-full h-screen z-40 bg-secondary/95 flex flex-col":"hidden",children:(0,o.jsxs)("div",{className:"flex flex-col text-center space-y-6 justify-center align-middle h-full items-center",children:[(0,o.jsx)(c(),{href:"/",children:(0,o.jsx)("button",{onClick:i,children:(0,o.jsx)(m,{})})}),(0,o.jsx)(c(),{href:"/#features",children:(0,o.jsx)("p",{onClick:i,className:"text-2xl",children:"Features"})}),(0,o.jsx)(c(),{href:"/#gallery",children:(0,o.jsx)("p",{onClick:i,className:"text-2xl",children:"Gallery"})}),(0,o.jsx)("a",{href:"https://www.instagram.com/portion_app/",children:(0,o.jsx)(f,{content:"Subscribe"})}),(0,o.jsxs)("div",{className:"absolute bottom-4 space-y-4 z-50",children:[(0,o.jsx)(c(),{href:"/privacy-policy",children:(0,o.jsx)("p",{onClick:i,className:"text-xl",children:"Privacy Policy"})}),(0,o.jsx)(c(),{href:"/terms-and-conditions",children:(0,o.jsx)("p",{onClick:i,className:"text-xl",children:"Terms & Conditions"})})]})]})}),(0,o.jsxs)("div",{className:"md:flex items-center space-x-8 hidden",children:[(0,o.jsx)(c(),{href:"/#features",children:"Features"}),(0,o.jsx)(c(),{href:"/#gallery",children:"Gallery"}),(0,o.jsx)("div",{className:"hidden md:block",children:(0,o.jsx)("a",{href:"https://www.instagram.com/portion_app/",children:(0,o.jsx)(f,{content:"Subscribe"})})})]})]})},v=function(){return(0,o.jsxs)("div",{className:"relative h-48 bg-secondary text-white justify-center overflow-hidden",children:[(0,o.jsxs)("div",{className:"absolute -right-56 md:-right-16 top-24",children:[" ",(0,o.jsx)(a(),{src:"/assets/portion-icon-outline.svg",width:400,height:400,alt:"logo-bg"})]}),(0,o.jsxs)("div",{className:"flex flex-col items-center justify-center w-full h-full",children:[(0,o.jsx)("div",{className:"flex items-center",children:(0,o.jsx)("a",{href:"https://www.instagram.com/portion_app/",children:(0,o.jsx)(f,{content:"Follow us on Instagram"})})}),(0,o.jsx)("br",{}),(0,o.jsxs)("div",{className:"space-x-2 md:flex justify-center items-center hidden ",children:[(0,o.jsx)(c(),{href:"/privacy-policy",children:"Privacy Policy"}),(0,o.jsx)("p",{children:" | "}),(0,o.jsx)(c(),{href:"/terms-and-conditions",children:"Terms & Conditions"})]}),(0,o.jsx)("div",{className:"absolute bottom-4 flex items-center mt-5",children:(0,o.jsx)("p",{children:"Copyright \xa9 2022 Portion."})})]})]})},y=function(e){var t=e.Component,n=e.pageProps;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(g,{}),(0,o.jsx)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){i(e,t,n[t])})}return e}({},n)),(0,o.jsx)(v,{})]})}},906:function(){},5675:function(e,t,n){e.exports=n(8045)},1664:function(e,t,n){e.exports=n(8418)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(387)}),_N_E=e.O()}]);