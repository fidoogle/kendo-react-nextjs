webpackHotUpdate("static\\development\\pages\\chart-rxjs-subject.js",{

/***/ "./store/water-usage.js":
/*!******************************!*\
  !*** ./store/water-usage.js ***!
  \******************************/
/*! exports provided: waterUsageStore, sendMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waterUsageStore", function() { return waterUsageStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessages", function() { return sendMessages; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var rxjs_webSocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/webSocket */ "./node_modules/rxjs/_esm5/webSocket/index.js");


//Inspired from https://blog.logrocket.com/rxjs-with-react-hooks-for-state-management/
//and https://rxjs.dev/api/webSocket/webSocket

var subject = Object(rxjs_webSocket__WEBPACK_IMPORTED_MODULE_2__["webSocket"])("wss://echo.websocket.org/");
var initialState = {
  data: [],
  //array of objects like: [{month:"Oct 19", volume: 2500}, ... ]
  newDataCount: 0
};
var state = initialState;
var waterUsageStore = {
  init: function init() {
    state = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
      newDataCount: 0
    });
    subject.next(state);
  },
  subscribe: function subscribe(setState) {
    return subject.subscribe(setState);
  },
  sendMessage: function sendMessage(message) {
    state = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
      data: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.data), [message]),
      newDataCount: state.newDataCount + 1
    });
    subject.next(state);
  },
  getCount: function getCount() {
    return state.newDataCount;
  },
  initialState: initialState
}; //These functions are used for mocking data that is echoed by the websocket

var getRndInteger = function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getNearest100 = function getNearest100(min, max) {
  var rnd = getRndInteger(min, max);
  return Math.round(rnd / 100) * 100; //rounds to nearest 100
};

var buildMsg = function buildMsg() {
  return {
    month: "Month ".concat(getCount()),
    volume: getNearest100(500, 7500)
  };
};

var sendMessages = function sendMessages() {
  var sendMsgs = setInterval(function () {
    waterUsageStore.sendMessage(buildMsg());
  }, 2000);
  setTimeout(function () {
    clearInterval(sendMsgs);
  }, 15000);
};



/***/ })

})
//# sourceMappingURL=chart-rxjs-subject.js.14eae045d5f9c1262ff9.hot-update.js.map