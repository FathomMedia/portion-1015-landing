"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./public/assets/menu-open.svg
/* harmony default export */ const menu_open = ({"src":"/_next/static/media/menu-open.77fcb5f9.svg","height":24,"width":24});
;// CONCATENATED MODULE: ./public/assets/menu-close.svg
/* harmony default export */ const menu_close = ({"src":"/_next/static/media/menu-close.e73bfe9d.svg","height":24,"width":24});
;// CONCATENATED MODULE: ./components/primaryBtn.tsx

const BtnPrim = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
            disabled: props.disabled,
            className: "bg-primary text-secondary font-medium px-8 py-2 text-xl md:text-sm rounded-full hover:brightness-[0.90] duration-200",
            children: props.content
        })
    });
};
/* harmony default export */ const primaryBtn = (BtnPrim);

;// CONCATENATED MODULE: ./public/assets/logo.svg
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.e4df39c0.svg","height":24,"width":100});
;// CONCATENATED MODULE: ./public/assets/portion-icon.svg
/* harmony default export */ const portion_icon = ({"src":"/_next/static/media/portion-icon.f9a54d4f.svg","height":222,"width":222});
;// CONCATENATED MODULE: ./components/Logo.tsx




const Logo = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "hidden md:block md:w-[12vw] lg:w-[10vw] max-w-[150px]",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: logo,
                    layout: "responsive",
                    alt: "logo"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-[8vw] py-2 md:w-[8vw] block md:hidden",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: portion_icon,
                    layout: "responsive",
                    alt: "logo"
                })
            })
        ]
    });
};
/* harmony default export */ const components_Logo = (Logo);

;// CONCATENATED MODULE: ./components/nav.tsx








const Nav = ()=>{
    const { 0: showMenu , 1: setShowMenu  } = (0,external_react_.useState)(false);
    const toggleMenu = ()=>{
        setShowMenu(!showMenu);
        console.log(showMenu);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "fixed flex w-full top-0 px-16 justify-between items-center h-24 z-50 text-white font-medium text-sm bg-secondary",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_Logo, {})
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "md:hidden flex justify-end z-50",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    onClick: toggleMenu,
                    children: showMenu ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: menu_close,
                        alt: "menu-close",
                        width: 40,
                        height: 40
                    }) : /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: menu_open,
                        alt: "menu-open",
                        width: 40,
                        height: 40
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: showMenu ? "fixed m-0 top-0 right-0 left-0 bottom-0 w-full h-screen z-40 bg-secondary/95 flex flex-col" : "hidden",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col text-center space-y-6 justify-center align-middle h-full items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: toggleMenu,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_Logo, {})
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/#features",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                onClick: toggleMenu,
                                className: "text-2xl",
                                children: "Features"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/#gallery",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                onClick: toggleMenu,
                                className: "text-2xl",
                                children: "Gallery"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://www.instagram.com/portion_app/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(primaryBtn, {
                                content: "Subscribe"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "absolute bottom-4 space-y-4 z-50",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/privacy-policy",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        onClick: toggleMenu,
                                        className: "text-xl",
                                        children: "Privacy Policy"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/terms-and-conditions",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        onClick: toggleMenu,
                                        className: "text-xl",
                                        children: "Terms & Conditions"
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "md:flex items-center space-x-8 hidden",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/#features",
                        children: "Features"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/#gallery",
                        children: "Gallery"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "hidden md:block",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://www.instagram.com/portion_app/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(primaryBtn, {
                                content: "Subscribe"
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const nav = (Nav);

;// CONCATENATED MODULE: ./components/footer.tsx




const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative h-48 bg-secondary text-white justify-center overflow-hidden",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "absolute -right-56 md:-right-16 top-24",
                children: [
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/assets/portion-icon-outline.svg",
                        width: 400,
                        height: 400,
                        alt: "logo-bg"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col items-center justify-center w-full h-full",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex items-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://www.instagram.com/portion_app/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(primaryBtn, {
                                content: "Follow us on Instagram"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "space-x-2 md:flex justify-center items-center hidden ",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/privacy-policy",
                                children: "Privacy Policy"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: " | "
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/terms-and-conditions",
                                children: "Terms & Conditions"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "absolute bottom-4 flex items-center mt-5",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Copyright \xa9 2022 Portion."
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const footer = (Footer);

;// CONCATENATED MODULE: ./pages/_app.tsx




function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(nav, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer, {})
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,676,664], () => (__webpack_exec__(6342)));
module.exports = __webpack_exports__;

})();