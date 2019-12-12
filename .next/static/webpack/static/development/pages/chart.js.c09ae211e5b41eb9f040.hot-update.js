webpackHotUpdate("static\\development\\pages\\chart.js",{

/***/ "./components/websocket.js":
false,

/***/ "./node_modules/es5-ext/global.js":
false,

/***/ "./node_modules/websocket/lib/browser.js":
false,

/***/ "./node_modules/websocket/lib/version.js":
false,

/***/ "./node_modules/websocket/package.json":
false,

/***/ "./pages/chart.js":
/*!************************!*\
  !*** ./pages/chart.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _progress_kendo_theme_default_dist_all_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @progress/kendo-theme-default/dist/all.css */ "./node_modules/@progress/kendo-theme-default/dist/all.css");
/* harmony import */ var _progress_kendo_theme_default_dist_all_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_progress_kendo_theme_default_dist_all_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var _components_chart_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/chart-container */ "./components/chart-container.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\figuajardo\\Sites\\kendo-react-nextjs\\pages\\chart.js";




var ws = null; // reference to websocket

var seriesData = [{
  month: "Aug 18",
  volume: 6000
}, {
  month: "Sep 18",
  volume: 3000
}, {
  month: "Oct 18",
  volume: 1500
}, {
  month: "Nov 18",
  volume: 2250
}, {
  month: "Dec 18",
  volume: 1500
}, {
  month: "Jan 19",
  volume: 3000
}, {
  month: "Feb 19",
  volume: 2250
}, {
  month: "Mar 19",
  volume: 1500
}, {
  month: "Apr 19",
  volume: 2250
}, {
  month: "May 19",
  volume: 1500
}, {
  month: "Jun 19",
  volume: 2250
}, {
  month: "Jul 19",
  volume: 2250
}, {
  month: "Aug 19",
  volume: 4500
}, {
  month: "Sep 19",
  volume: 7500
}]; // Use with: <ChartContainer seriesData={seriesData2} categories={categories} />

var seriesData2 = [6000, 3000, 1500, 2250, 1500, 3000, 2250, 1500, 2250, 1500, 2250, 2250, 4500, 7500, 4500];
var categories = ['Aug 18', 'Sep 18', 'Oct 18', 'Nov 18', 'Dec 18', 'Jan 19', 'Feb 19', 'Mar 19', 'Apr 19', 'May 19', 'Jun 19', 'Jul 19', 'Aug 19', 'Sep 19', 'Oct 19'];

var Chart = function Chart() {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Static Chart"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_chart_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    seriesData: seriesData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Chart);

/***/ })

})
//# sourceMappingURL=chart.js.c09ae211e5b41eb9f040.hot-update.js.map