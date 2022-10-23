"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./sections/main.tsx":
/*!***************************!*\
  !*** ./sections/main.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_mockup_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/mockup.png */ \"./assets/mockup.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Loader */ \"./components/Loader.tsx\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar Main = function(param) {\n    var props = param.props;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), email = ref[0], setEmail = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), isLoading = ref1[0], setIsLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), showMessage = ref2[0], setShowMessage = ref2[1];\n    var handleSubmit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(function(e) {\n            var hubspot_response;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        e.preventDefault();\n                        setIsLoading(true);\n                        return [\n                            4,\n                            submit_hubspot_form(email)\n                        ];\n                    case 1:\n                        hubspot_response = _state.sent();\n                        setIsLoading(false);\n                        setShowMessage(false);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function handleSubmit(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var submit_hubspot_form = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(function(email) {\n            var portalId, formGuid, config, response;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        portalId = \"26502452\";\n                        formGuid = \"83b942ed-d1da-46a4-b436-0d57399f56ab\";\n                        config = {\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            }\n                        };\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"https://api.hsforms.com/submissions/v3/integration/submit/26502452/83b942ed-d1da-46a4-b436-0d57399f56ab\", {\n                                portalId: portalId,\n                                formGuid: formGuid,\n                                fields: [\n                                    {\n                                        name: \"email\",\n                                        value: email\n                                    }\n                                ]\n                            }, config)\n                        ];\n                    case 1:\n                        response = _state.sent();\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function submit_hubspot_form(email) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" bg-cover h-[70vw] md:h-[30vw] bg-blend-multiply bg-secondary/70 bg-no-repeat bg-center bg-[url('../assets/hero.jpg')] flex justify-evenly items-center md:mx-16 md:rounded-md\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-center items-center md:text-left text-white font-bold md:w-10 lg:leading-[4rem]\",\n                            children: \"Simple. Good. Food.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/rakanalbaiz/Documents/portion-1015-landing/sections/main.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/rakanalbaiz/Documents/portion-1015-landing/sections/main.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"hidden md:block mb-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                className: \"flex justify-center m-0 grow\",\n                                onSubmit: handleSubmit,\n                                method: \"POST\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-row gap-2 justify-center\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            placeholder: \"Your Email\",\n                                            className: \" p-3 rounded-tl-xl rounded-bl-xl w-full\",\n                                            type: \"text\",\n                                            required: true,\n                                            id: \"email\",\n                                            value: email,\n                                            onChange: function(e) {\n                                                return setEmail(e.target.value);\n                                            },\n                                            name: \"email\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rakanalbaiz/Documents/portion-1015-landing/sections/main.tsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rakanalbaiz/Documents/portion-1015-landing/sections/main.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        disabled: isLoading,\n                                        className: \"bg-primary text-secondary font-medium px-4 text-sm rounded-tr-xl rounded-br-xl hover:brightness-[0.98] duration-200 disabled:bg-gray-300\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            role: \"status\",\n                                            className: \"flex\",\n                                            children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                                fileName: \"/Users/rakanalbaiz/Documents/portion-1015-landing/sections/main.tsx\",\n                                                lineNumber: 76,\n                                                columnNumber: 32\n                                            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Get Notified\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rakanalbaiz/Documents/portion-1015-landing/sections/main.tsx\",\n                                                lineNumber: 76,\n                                                columnNumber: 45\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rakanalbaiz/Documents/portion-1015-landing/sections/main.tsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rakanalbaiz/Documents/portion-1015-landing/sections/main.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/rakanalbaiz/Documents/portion-1015-landing/sections/main.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/rakanalbaiz/Documents/portion-1015-landing/sections/main.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rakanalbaiz/Documents/portion-1015-landing/sections/main.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"hidden md:block w-[14vw] mt-16\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: _assets_mockup_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                        layout: \"responsive\",\n                        alt: \"mockup\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rakanalbaiz/Documents/portion-1015-landing/sections/main.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/rakanalbaiz/Documents/portion-1015-landing/sections/main.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/rakanalbaiz/Documents/portion-1015-landing/sections/main.tsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/rakanalbaiz/Documents/portion-1015-landing/sections/main.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, _this);\n};\n_s(Main, \"X/NupiMyAwZsrsaE+O9ihwRt7tc=\");\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNNLENBQUMsQ0FBQzBCLE1BQU0sQ0FBQ2QsS0FBSyxDQUFDOzZDQUFBOzRDQUN6Q0QsSUFBSSxFQUFDLE9BQU87Ozs7O2lEQUNaOzs7Ozs2Q0FDRTtrREFDTiw4REFBQ2dCLFFBQU07d0NBQ0xDLFFBQVEsRUFBRWpDLFNBQVM7d0NBQ25CbUIsU0FBUyxFQUFDLDBJQUEwSTtrREFFcEosNEVBQUNELEtBQUc7NENBQUNnQixJQUFJLEVBQUMsUUFBUTs0Q0FBQ2YsU0FBUyxFQUFDLE1BQU07c0RBQ2hDbkIsU0FBUyxpQkFBRyw4REFBQ0wsMERBQU07Ozs7cURBQUcsaUJBQUcsOERBQUN3QyxHQUFDOzBEQUFDLGNBQVk7Ozs7O3FEQUFJOzs7OztpREFDekM7Ozs7OzZDQUNDOzs7Ozs7cUNBQ0o7Ozs7O2lDQUNIOzs7Ozs7eUJBQ0Y7OEJBQ04sOERBQUNqQixLQUFHO29CQUFDQyxTQUFTLEVBQUMsZ0NBQWdDOzhCQUM3Qyw0RUFBQzdCLG1EQUFLO3dCQUFDOEMsR0FBRyxFQUFFN0MsMERBQUs7d0JBQUU4QyxNQUFNLEVBQUMsWUFBWTt3QkFBQ0MsR0FBRyxFQUFDLFFBQVE7Ozs7OzZCQUFHOzs7Ozt5QkFDbEQ7Ozs7OztpQkFDRjs7Ozs7YUFDRixDQUNOO0FBQ0osQ0FBQztHQWpGSzFDLElBQUk7QUFBSkEsS0FBQUEsSUFBSTtBQW1GViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NlY3Rpb25zL21haW4udHN4PzViNTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgQnRuUHJpbSBmcm9tIFwiLi4vY29tcG9uZW50cy9wcmltYXJ5QnRuXCI7XG5pbXBvcnQgcGhvbmUgZnJvbSBcIi4uL2Fzc2V0cy9tb2NrdXAucG5nXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9hZGVyXCI7XG5jb25zdCBNYWluID0gKHsgcHJvcHMgfSkgPT4ge1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2hvd01lc3NhZ2UsIHNldFNob3dNZXNzYWdlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgY29uc3QgaHVic3BvdF9yZXNwb25zZSA9IGF3YWl0IHN1Ym1pdF9odWJzcG90X2Zvcm0oZW1haWwpO1xuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgc2V0U2hvd01lc3NhZ2UoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IHN1Ym1pdF9odWJzcG90X2Zvcm0gPSBhc3luYyAoZW1haWwpID0+IHtcbiAgICBjb25zdCBwb3J0YWxJZCA9IFwiMjY1MDI0NTJcIjtcbiAgICBjb25zdCBmb3JtR3VpZCA9IFwiODNiOTQyZWQtZDFkYS00NmE0LWI0MzYtMGQ1NzM5OWY1NmFiXCI7XG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICAgIGBodHRwczovL2FwaS5oc2Zvcm1zLmNvbS9zdWJtaXNzaW9ucy92My9pbnRlZ3JhdGlvbi9zdWJtaXQvMjY1MDI0NTIvODNiOTQyZWQtZDFkYS00NmE0LWI0MzYtMGQ1NzM5OWY1NmFiYCxcbiAgICAgIHtcbiAgICAgICAgcG9ydGFsSWQsXG4gICAgICAgIGZvcm1HdWlkLFxuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcImVtYWlsXCIsXG4gICAgICAgICAgICB2YWx1ZTogZW1haWwsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICBjb25maWdcbiAgICApO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBiZy1jb3ZlciBoLVs3MHZ3XSBtZDpoLVszMHZ3XSBiZy1ibGVuZC1tdWx0aXBseSBiZy1zZWNvbmRhcnkvNzAgYmctbm8tcmVwZWF0IGJnLWNlbnRlciBiZy1bdXJsKCcuLi9hc3NldHMvaGVyby5qcGcnKV0gZmxleCBqdXN0aWZ5LWV2ZW5seSBpdGVtcy1jZW50ZXIgbWQ6bXgtMTYgbWQ6cm91bmRlZC1tZFwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBtZDp0ZXh0LTV4bCBsZzp0ZXh0LTZ4bCB4bDp0ZXh0LTd4bCAyeGw6dGV4dC04eGwgdGV4dC1jZW50ZXIgaXRlbXMtY2VudGVyIG1kOnRleHQtbGVmdCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBtZDp3LTEwIGxnOmxlYWRpbmctWzRyZW1dXCI+XG4gICAgICAgICAgICBTaW1wbGUuIEdvb2QuIEZvb2QuXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9jayBtYi0yXCI+XG4gICAgICAgICAgICB7LyogPEJ0blByaW0gY29udGVudD1cIlRyeSBpdCBPdXRcIiAvPiAqL31cbiAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbS0wIGdyb3dcIlxuICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgICBtZXRob2Q9XCJQT1NUXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGdhcC0yIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgRW1haWxcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHAtMyByb3VuZGVkLXRsLXhsIHJvdW5kZWQtYmwteGwgdy1mdWxsXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc0xvYWRpbmd9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcHJpbWFyeSB0ZXh0LXNlY29uZGFyeSBmb250LW1lZGl1bSBweC00IHRleHQtc20gcm91bmRlZC10ci14bCByb3VuZGVkLWJyLXhsIGhvdmVyOmJyaWdodG5lc3MtWzAuOThdIGR1cmF0aW9uLTIwMCBkaXNhYmxlZDpiZy1ncmF5LTMwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IHJvbGU9XCJzdGF0dXNcIiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgICB7aXNMb2FkaW5nID8gPExvYWRlciAvPiA6IDxwPkdldCBOb3RpZmllZDwvcD59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6YmxvY2sgdy1bMTR2d10gbXQtMTZcIj5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtwaG9uZX0gbGF5b3V0PVwicmVzcG9uc2l2ZVwiIGFsdD1cIm1vY2t1cFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwicGhvbmUiLCJSZWFjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJMb2FkZXIiLCJNYWluIiwicHJvcHMiLCJlbWFpbCIsInNldEVtYWlsIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwic2hvd01lc3NhZ2UiLCJzZXRTaG93TWVzc2FnZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJodWJzcG90X3Jlc3BvbnNlIiwicHJldmVudERlZmF1bHQiLCJzdWJtaXRfaHVic3BvdF9mb3JtIiwicG9ydGFsSWQiLCJmb3JtR3VpZCIsImNvbmZpZyIsInJlc3BvbnNlIiwiaGVhZGVycyIsInBvc3QiLCJmaWVsZHMiLCJuYW1lIiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImJyIiwiZm9ybSIsIm9uU3VibWl0IiwibWV0aG9kIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJyZXF1aXJlZCIsImlkIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iLCJkaXNhYmxlZCIsInJvbGUiLCJwIiwic3JjIiwibGF5b3V0IiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sections/main.tsx\n"));

/***/ })

});