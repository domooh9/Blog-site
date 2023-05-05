"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/article/page.tsx":
/*!******************************!*\
  !*** ./app/article/page.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_components_Comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/components/Comment */ \"(app-client)/./app/home/components/Comment.tsx\");\n/* harmony import */ var _article_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./article.css */ \"(app-client)/./app/article/article.css\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Articles(param) {\n    let { user  } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        id: \"\",\n        title: \"\",\n        story: \"\",\n        comments: []\n    });\n    const { id , title , story , comments  } = data;\n    var _user_id;\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        article_id: id,\n        user_id: (_user_id = user === null || user === void 0 ? void 0 : user.id) !== null && _user_id !== void 0 ? _user_id : 0,\n        comment: \"\"\n    });\n    // fetch article data\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"http://[::1]:3000/articles/\".concat(id)).then((res)=>res.json()).then((r)=>setData(r));\n    }, [\n        id\n    ]);\n    // update form data\n    function handleChange(event) {\n        const name = event.target.name;\n        let value = event.target.value;\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n    }\n    function handleSubmit(e) {\n        e.preventDefault();\n        fetch(\"http://[::1]:3000/comments\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(formData)\n        }).then((res)=>res.json()).then((r)=>console.log(r));\n        setFormData({\n            article_id: id,\n            user_id: user.id,\n            comment: \"\"\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/home/dom/Blog-site/app/article/page.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: story\n                        }, void 0, false, {\n                            fileName: \"/home/dom/Blog-site/app/article/page.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/dom/Blog-site/app/article/page.tsx\",\n                    lineNumber: 93,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: comments === null || comments === void 0 ? void 0 : comments.map((comment)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_home_components_Comment__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            check: comment\n                        }, comment.id, false, {\n                            fileName: \"/home/dom/Blog-site/app/article/page.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 20\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/dom/Blog-site/app/article/page.tsx\",\n                    lineNumber: 97,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"input_text\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    id: \"message\",\n                                    placeholder: \"Comment..\",\n                                    name: \"comment\",\n                                    onChange: handleChange,\n                                    value: formData.comment\n                                }, void 0, false, {\n                                    fileName: \"/home/dom/Blog-site/app/article/page.tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/dom/Blog-site/app/article/page.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"btn\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600\",\n                                    type: \"submit\",\n                                    children: \"Post\"\n                                }, void 0, false, {\n                                    fileName: \"/home/dom/Blog-site/app/article/page.tsx\",\n                                    lineNumber: 114,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/dom/Blog-site/app/article/page.tsx\",\n                                lineNumber: 113,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/dom/Blog-site/app/article/page.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/dom/Blog-site/app/article/page.tsx\",\n                    lineNumber: 102,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/dom/Blog-site/app/article/page.tsx\",\n            lineNumber: 92,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/dom/Blog-site/app/article/page.tsx\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, this);\n}\n_s(Articles, \"HC/T7/u72MXX69eg/kPlBG8/tdo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Articles;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Articles);\nvar _c;\n$RefreshReg$(_c, \"Articles\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZWJwYWNrOi8vX05fRS8uL2FwcC9hcnRpY2xlL3BhZ2UudHN4PzYzYmUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IENvbW1lbnQgZnJvbSBcIi4uL2hvbWUvY29tcG9uZW50cy9Db21tZW50XCI7XG5pbXBvcnQgXCIuL2FydGljbGUuY3NzXCI7XG5cbmludGVyZmFjZSBVc2VyIHtcbiAgaWQ6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIEFydGljbGUge1xuICBpZDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBzdG9yeTogc3RyaW5nO1xuICBjb21tZW50czogQ29tbWVudFtdO1xufVxuXG5pbnRlcmZhY2UgQ29tbWVudCB7XG4gIGlkOiBzdHJpbmc7XG4gIHVzZXJfaWQ6IHN0cmluZztcbiAgYXJ0aWNsZV9pZDogc3RyaW5nO1xuICBjb21tZW50OiBzdHJpbmc7XG4gIGNyZWF0ZWRfYXQ6IHN0cmluZztcbiAgdXNlcjogVXNlcjtcbn1cblxuaW50ZXJmYWNlIEZvcm1EYXRhIHtcbiAgYXJ0aWNsZV9pZDogc3RyaW5nO1xuICB1c2VyX2lkOiBzdHJpbmc7XG4gIGNvbW1lbnQ6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdXNlcjogVXNlcjtcbn1cblxuZnVuY3Rpb24gQXJ0aWNsZXMoeyB1c2VyIH06IFByb3BzKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPEFydGljbGU+KHtcbiAgICBpZDogXCJcIixcbiAgICB0aXRsZTogXCJcIixcbiAgICBzdG9yeTogXCJcIixcbiAgICBjb21tZW50czogW10sXG4gIH0pO1xuICBjb25zdCB7IGlkLCB0aXRsZSwgc3RvcnksIGNvbW1lbnRzIH0gPSBkYXRhO1xuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlPEZvcm1EYXRhPih7XG4gICAgYXJ0aWNsZV9pZDogaWQsXG4gICAgdXNlcl9pZDogdXNlcj8uaWQgPz8gMCxcbiAgICBjb21tZW50OiBcIlwiLFxuICB9KTtcblxuICAvLyBmZXRjaCBhcnRpY2xlIGRhdGFcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChgaHR0cDovL1s6OjFdOjMwMDAvYXJ0aWNsZXMvJHtpZH1gKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChyOiBBcnRpY2xlKSA9PiBzZXREYXRhKHIpKTtcbiAgfSwgW2lkXSk7XG5cbiAgLy8gdXBkYXRlIGZvcm0gZGF0YVxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSB7XG4gICAgY29uc3QgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xuICAgIGxldCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgIHNldEZvcm1EYXRhKHtcbiAgICAgIC4uLmZvcm1EYXRhLFxuICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50Pikge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBmZXRjaChcImh0dHA6Ly9bOjoxXTozMDAwL2NvbW1lbnRzXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChyOiBDb21tZW50KSA9PiBjb25zb2xlLmxvZyhyKSk7XG5cbiAgICBzZXRGb3JtRGF0YSh7XG4gICAgICBhcnRpY2xlX2lkOiBpZCxcbiAgICAgIHVzZXJfaWQ6IHVzZXIuaWQsXG4gICAgICBjb21tZW50OiBcIlwiLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLWZ1bGwgZmxleC0xIGZsZXgtY29sIGp1c3RpZnktY2VudGVyIHB5LTEyIHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMj57dGl0bGV9PC9oMj5cbiAgICAgICAgICA8cD57c3Rvcnl9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7Y29tbWVudHM/Lm1hcCgoY29tbWVudDogQ29tbWVudCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxDb21tZW50IGtleT17Y29tbWVudC5pZH0gY2hlY2s9e2NvbW1lbnR9IC8+O1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0X3RleHRcIj5cbiAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgaWQ9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbW1lbnQuLlwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImNvbW1lbnRcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmNvbW1lbnR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBqdXN0aWZ5LWNlbnRlciBcbiAgICAgICAgICAgICAgICByb3VuZGVkLW1kIGJnLWluZGlnby02MDAgcHgtMyBweS0xLjUgXG4gICAgICAgICAgICAgICAgdGV4dC1zbSBmb250LXNlbWlib2xkIGxlYWRpbmctNiB0ZXh0LXdoaXRlIHNoYWRvdy1zbVxuICAgICAgICAgICAgICAgaG92ZXI6YmctaW5kaWdvLTUwMCBmb2N1cy12aXNpYmxlOm91dGxpbmUgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLTJcbiAgICAgICAgICAgICAgICBmb2N1cy12aXNpYmxlOm91dGxpbmUtb2Zmc2V0LTIgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLWluZGlnby02MDBcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICBQb3N0XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlcztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiQ29tbWVudCIsIkFydGljbGVzIiwidXNlciIsInJvdXRlciIsImRhdGEiLCJzZXREYXRhIiwiaWQiLCJ0aXRsZSIsInN0b3J5IiwiY29tbWVudHMiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiYXJ0aWNsZV9pZCIsInVzZXJfaWQiLCJjb21tZW50IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInIiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInAiLCJtYXAiLCJjaGVjayIsImZvcm0iLCJvblN1Ym1pdCIsInRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImJ1dHRvbiIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/article/page.tsx\n"));

/***/ })

});