"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/ui/Button.js":
/*!*************************************!*\
  !*** ./src/components/ui/Button.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Button(param) {\n    let { children , color , outline , name , onClick , size , className , secondary  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"btn transition-all duration-500 whitespace-nowrap text-xs px-2 py-[6px] rounded-lg leading-normal  \\n          \".concat(secondary == \"true\" ? \"text-blacklight dark:text-white\" : \"text-white\", \"\\n          \").concat(color == \"yellow\" ? \"bg-secondary-yellow !text-blacklight  hover:bg-[#ffe380] dark:hover:bg-[#ffeeb3]\" :  false || color == \"grey\" ? \"bg-primary-purple !text-blacklight hover:bg-[#eef2f6] dark:hover:bg-[#404040]\" :  false || color == \"greydark\" ? \"bg-gray-1 hover:bg-black dark:hover:bg-[#333333]\" :  false || color == \"blue\" ? \"text-blacklight bg-primary-blue\" :  false || color == \"red\" ? \"bg-red-300\" :  false || color == \"bluedark\" ? \" bg-blue-1 text-white\" :  false || color == \"secondary-red\" ? \"bg-secondary-red \" :  false || color == \"winered\" ? \"bg-secondary-redb\" :  false || color == \"redlight\" ? \"bg-secondary-red/70 text-white\" :  false || color == \"lightgrey\" ? \"bg-black/5 dark:bg-white/5 text-blacklight dark:text-white\" :  false || color == \"lightgreen\" ? \"text-black bg-secondary-greenb hover:bg-[#a4eba9]\" :  false || color == \"primarygreen\" ? \"bg-primary-greenb\" :  false || color == \"green\" ? \" bg-primary-green hover:!bg-[#1c7d46] dark:hover:!bg-[#25a75d]\" :  false || color == \"teal\" ? \"text-blacklight bg-secondary-greena\" :  false || color == \"blacklight\" ? \"text-white bg-blacklight dark:bg-secondary-purpleb dark:text-blacklight\" :  false || color == \"purple\" ? \"bg-secondary-purplea text-white dark:!text-blacklight\" : \"\", \" \\n          \").concat(outline == \"true\" ? \"border !bg-transparent\" : \"\", \"\\n          \").concat(outline == \"true\" && color == \"red\" ? \"border-secondary-red !text-secondary-red\" :  false || outline == \"true\" && color == \"grey\" ? \"border-black/10 text-blacklight dark:!border-white/10 dark:!text-white\" :  false || outline == \"true\" && color == \"blacklight\" ? \"border-black/20 text-blacklight dark:!border-white/20 dark:!text-white\" : \"\", \"\\n          \").concat(size == \"large\" ? \"px-3 !py-2 leading-[20px]\" :  false || size == \"medium\" ? \"px-2 !py-1 text-sm\" :  false || size == \"small\" ? \"px-2 !py-[5px]\" : \"\", \" \\n          \").concat(className, \"       \\n        \"),\n            onClick: onClick,\n            children: [\n                children,\n                name\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\kinjal\\\\bigbang9-3 (1)\\\\src\\\\components\\\\ui\\\\Button.js\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = Button;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);\nvar _c;\n$RefreshReg$(_c, \"Button\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91aS9CdXR0b24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBRTFCLFNBQVNDLE9BQU8sS0FBc0UsRUFBRTtRQUF4RSxFQUFDQyxTQUFRLEVBQUVDLE1BQUssRUFBRUMsUUFBTyxFQUFFQyxLQUFJLEVBQUVDLFFBQU8sRUFBRUMsS0FBSSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxHQUF0RTtJQUNkLHFCQUNFO2tCQUNFLDRFQUFDQztZQUNDRixXQUFXLGtIQUdQTCxPQUZBTSxhQUFhLFNBQVMsb0NBQW9DLFlBQVksRUFBQyxnQkFvQ3ZFTCxPQWxDQUQsU0FBUyxXQUNMLHFGQUNBLE1BQUUsSUFBSUEsU0FBUyxTQUNmLGtGQUNBLE1BQUUsSUFBSUEsU0FBUyxhQUNmLHFEQUNBLE1BQUUsSUFBSUEsU0FBUyxTQUNmLG9DQUNBLE1BQUUsSUFBSUEsU0FBUyxRQUNmLGVBQ0EsTUFBRSxJQUFJQSxTQUFTLGFBQ2YsMEJBQ0EsTUFBRSxJQUFJQSxTQUFTLGtCQUNmLHNCQUNBLE1BQUUsSUFBSUEsU0FBUyxZQUNmLHNCQUNBLE1BQUUsSUFBSUEsU0FBUyxhQUNmLG1DQUNBLE1BQUUsSUFBSUEsU0FBUyxjQUNmLCtEQUNBLE1BQUUsSUFBSUEsU0FBUyxlQUNmLHNEQUNBLE1BQUUsSUFBSUEsU0FBUyxpQkFDZixzQkFDQSxNQUFFLElBQUlBLFNBQVMsVUFDZixtRUFDQSxNQUFFLElBQUlBLFNBQVMsU0FDZix3Q0FDQSxNQUFFLElBQUlBLFNBQVMsZUFDZiw0RUFDQSxNQUFFLElBQUlBLFNBQVMsV0FDZiwwREFDQSxFQUFFLEVBQ1AsaUJBR0NDLE9BRkFBLFdBQVcsU0FBVSwyQkFBMEIsRUFBRSxFQUFDLGdCQVdsREcsT0FUQUgsV0FBVyxVQUFVRCxTQUFTLFFBQzFCLDZDQUNBLE1BQUUsSUFBS0MsV0FBVyxVQUFVRCxTQUFTLFNBQ3JDLDJFQUNBLE1BQUUsSUFBS0MsV0FBVyxVQUFVRCxTQUFTLGVBQ3JDLDJFQUNBLEVBQUUsRUFDUCxnQkFVQ0ssT0FSQUQsUUFBUSxVQUNKLDhCQUNBLE1BQUUsSUFBSUEsUUFBUSxXQUNkLHVCQUNBLE1BQUUsSUFBSUEsUUFBUSxVQUNkLG1CQUNBLEVBQUUsRUFDUCxpQkFDVyxPQUFWQyxXQUFVO1lBRWRGLFNBQVNBOztnQkFFUko7Z0JBQ0FHOzs7Ozs7OztBQUlUO0tBckVTSjtBQXVFVCwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy91aS9CdXR0b24uanM/ZmE4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBCdXR0b24oe2NoaWxkcmVuLCBjb2xvciwgb3V0bGluZSwgbmFtZSwgb25DbGljaywgc2l6ZSwgY2xhc3NOYW1lLCBzZWNvbmRhcnkgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgYnRuIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXhzIHB4LTIgcHktWzZweF0gcm91bmRlZC1sZyBsZWFkaW5nLW5vcm1hbCAgXHJcbiAgICAgICAgICAke3NlY29uZGFyeSA9PSBcInRydWVcIiA/IFwidGV4dC1ibGFja2xpZ2h0IGRhcms6dGV4dC13aGl0ZVwiIDogXCJ0ZXh0LXdoaXRlXCJ9XHJcbiAgICAgICAgICAke1xyXG4gICAgICAgICAgICBjb2xvciA9PSBcInllbGxvd1wiXHJcbiAgICAgICAgICAgICAgPyBcImJnLXNlY29uZGFyeS15ZWxsb3cgIXRleHQtYmxhY2tsaWdodCAgaG92ZXI6YmctWyNmZmUzODBdIGRhcms6aG92ZXI6YmctWyNmZmVlYjNdXCJcclxuICAgICAgICAgICAgICA6IFwiXCIgfHwgY29sb3IgPT0gXCJncmV5XCJcclxuICAgICAgICAgICAgICA/IFwiYmctcHJpbWFyeS1wdXJwbGUgIXRleHQtYmxhY2tsaWdodCBob3ZlcjpiZy1bI2VlZjJmNl0gZGFyazpob3ZlcjpiZy1bIzQwNDA0MF1cIlxyXG4gICAgICAgICAgICAgIDogXCJcIiB8fCBjb2xvciA9PSBcImdyZXlkYXJrXCJcclxuICAgICAgICAgICAgICA/IFwiYmctZ3JheS0xIGhvdmVyOmJnLWJsYWNrIGRhcms6aG92ZXI6YmctWyMzMzMzMzNdXCJcclxuICAgICAgICAgICAgICA6IFwiXCIgfHwgY29sb3IgPT0gXCJibHVlXCJcclxuICAgICAgICAgICAgICA/IFwidGV4dC1ibGFja2xpZ2h0IGJnLXByaW1hcnktYmx1ZVwiXHJcbiAgICAgICAgICAgICAgOiBcIlwiIHx8IGNvbG9yID09IFwicmVkXCIgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgID8gXCJiZy1yZWQtMzAwXCJcclxuICAgICAgICAgICAgICA6IFwiXCIgfHwgY29sb3IgPT0gXCJibHVlZGFya1wiXHJcbiAgICAgICAgICAgICAgPyBcIiBiZy1ibHVlLTEgdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgOiBcIlwiIHx8IGNvbG9yID09IFwic2Vjb25kYXJ5LXJlZFwiXHJcbiAgICAgICAgICAgICAgPyBcImJnLXNlY29uZGFyeS1yZWQgXCJcclxuICAgICAgICAgICAgICA6IFwiXCIgfHwgY29sb3IgPT0gXCJ3aW5lcmVkXCJcclxuICAgICAgICAgICAgICA/IFwiYmctc2Vjb25kYXJ5LXJlZGJcIlxyXG4gICAgICAgICAgICAgIDogXCJcIiB8fCBjb2xvciA9PSBcInJlZGxpZ2h0XCJcclxuICAgICAgICAgICAgICA/IFwiYmctc2Vjb25kYXJ5LXJlZC83MCB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICA6IFwiXCIgfHwgY29sb3IgPT0gXCJsaWdodGdyZXlcIlxyXG4gICAgICAgICAgICAgID8gXCJiZy1ibGFjay81IGRhcms6Ymctd2hpdGUvNSB0ZXh0LWJsYWNrbGlnaHQgZGFyazp0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICA6IFwiXCIgfHwgY29sb3IgPT0gXCJsaWdodGdyZWVuXCJcclxuICAgICAgICAgICAgICA/IFwidGV4dC1ibGFjayBiZy1zZWNvbmRhcnktZ3JlZW5iIGhvdmVyOmJnLVsjYTRlYmE5XVwiXHJcbiAgICAgICAgICAgICAgOiBcIlwiIHx8IGNvbG9yID09IFwicHJpbWFyeWdyZWVuXCJcclxuICAgICAgICAgICAgICA/IFwiYmctcHJpbWFyeS1ncmVlbmJcIlxyXG4gICAgICAgICAgICAgIDogXCJcIiB8fCBjb2xvciA9PSBcImdyZWVuXCJcclxuICAgICAgICAgICAgICA/IFwiIGJnLXByaW1hcnktZ3JlZW4gaG92ZXI6IWJnLVsjMWM3ZDQ2XSBkYXJrOmhvdmVyOiFiZy1bIzI1YTc1ZF1cIlxyXG4gICAgICAgICAgICAgIDogXCJcIiB8fCBjb2xvciA9PSBcInRlYWxcIlxyXG4gICAgICAgICAgICAgID8gXCJ0ZXh0LWJsYWNrbGlnaHQgYmctc2Vjb25kYXJ5LWdyZWVuYVwiXHJcbiAgICAgICAgICAgICAgOiBcIlwiIHx8IGNvbG9yID09IFwiYmxhY2tsaWdodFwiXHJcbiAgICAgICAgICAgICAgPyBcInRleHQtd2hpdGUgYmctYmxhY2tsaWdodCBkYXJrOmJnLXNlY29uZGFyeS1wdXJwbGViIGRhcms6dGV4dC1ibGFja2xpZ2h0XCJcclxuICAgICAgICAgICAgICA6IFwiXCIgfHwgY29sb3IgPT0gXCJwdXJwbGVcIlxyXG4gICAgICAgICAgICAgID8gXCJiZy1zZWNvbmRhcnktcHVycGxlYSB0ZXh0LXdoaXRlIGRhcms6IXRleHQtYmxhY2tsaWdodFwiXHJcbiAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICB9IFxyXG4gICAgICAgICAgJHtvdXRsaW5lID09IFwidHJ1ZVwiID8gYGJvcmRlciAhYmctdHJhbnNwYXJlbnRgIDogXCJcIn1cclxuICAgICAgICAgICR7XHJcbiAgICAgICAgICAgIG91dGxpbmUgPT0gXCJ0cnVlXCIgJiYgY29sb3IgPT0gXCJyZWRcIlxyXG4gICAgICAgICAgICAgID8gXCJib3JkZXItc2Vjb25kYXJ5LXJlZCAhdGV4dC1zZWNvbmRhcnktcmVkXCJcclxuICAgICAgICAgICAgICA6IFwiXCIgfHwgKG91dGxpbmUgPT0gXCJ0cnVlXCIgJiYgY29sb3IgPT0gXCJncmV5XCIpXHJcbiAgICAgICAgICAgICAgPyBcImJvcmRlci1ibGFjay8xMCB0ZXh0LWJsYWNrbGlnaHQgZGFyazohYm9yZGVyLXdoaXRlLzEwIGRhcms6IXRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgIDogXCJcIiB8fCAob3V0bGluZSA9PSBcInRydWVcIiAmJiBjb2xvciA9PSBcImJsYWNrbGlnaHRcIilcclxuICAgICAgICAgICAgICA/IFwiYm9yZGVyLWJsYWNrLzIwIHRleHQtYmxhY2tsaWdodCBkYXJrOiFib3JkZXItd2hpdGUvMjAgZGFyazohdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAke1xyXG4gICAgICAgICAgICBzaXplID09IFwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgID8gXCJweC0zICFweS0yIGxlYWRpbmctWzIwcHhdXCJcclxuICAgICAgICAgICAgICA6IFwiXCIgfHwgc2l6ZSA9PSBcIm1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgPyBcInB4LTIgIXB5LTEgdGV4dC1zbVwiXHJcbiAgICAgICAgICAgICAgOiBcIlwiIHx8IHNpemUgPT0gXCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgPyBcInB4LTIgIXB5LVs1cHhdXCJcclxuICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgIH0gXHJcbiAgICAgICAgICAke2NsYXNzTmFtZX0gICAgICAgXHJcbiAgICAgICAgYH1cclxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIHtuYW1lfVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQnV0dG9uIiwiY2hpbGRyZW4iLCJjb2xvciIsIm91dGxpbmUiLCJuYW1lIiwib25DbGljayIsInNpemUiLCJjbGFzc05hbWUiLCJzZWNvbmRhcnkiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ui/Button.js\n"));

/***/ })

});