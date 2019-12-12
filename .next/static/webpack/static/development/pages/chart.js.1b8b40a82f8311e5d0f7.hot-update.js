webpackHotUpdate("static\\development\\pages\\chart.js",{

/***/ "./node_modules/@progress/kendo-charts/dist/es/main.js":
/*!*************************************************************!*\
  !*** ./node_modules/@progress/kendo-charts/dist/es/main.js ***!
  \*************************************************************/
/*! exports provided: chartBaseTheme, autoMajorUnit, Point, Box, Ring, Sector, ShapeBuilder, ShapeElement, ChartElement, BoxElement, RootElement, FloatElement, Text, TextBox, Title, AxisLabel, Axis, Note, CategoryAxis, DateCategoryAxis, DateValueAxis, NumericAxis, LogarithmicAxis, PolarAxis, RadarCategoryAxis, RadarNumericAxis, RadarLogarithmicAxis, CurveProcessor, Gradients, rectToBox, Aggregates, AreaChart, AreaSegment, AxisGroupRangeTracker, Bar, BarChart, BarLabel, BoxPlotChart, BoxPlot, BubbleChart, Bullet, BulletChart, CandlestickChart, Candlestick, CategoricalChart, CategoricalErrorBar, CategoricalPlotArea, Chart, ChartContainer, ClipAnimation, ClusterLayout, Crosshair, CrosshairTooltip, DefaultAggregates, DonutChart, DonutPlotArea, DonutSegment, ErrorBarBase, ErrorRangeCalculator, Highlight, SharedTooltip, Legend, LegendItem, LegendLayout, LineChart, LinePoint, LineSegment, Pane, PieAnimation, PieChart, PieChartMixin, PiePlotArea, PieSegment, PlotAreaBase, PlotAreaEventsMixin, PlotAreaFactory, PointEventsMixin, RangeBar, RangeBarChart, RangeAreaPoint, RangeAreaChart, ScatterChart, ScatterErrorBar, ScatterLineChart, Selection, SeriesAggregator, SeriesBinder, SplineSegment, SplineAreaSegment, StackWrap, Tooltip, OHLCChart, OHLCPoint, WaterfallChart, WaterfallSegment, XYPlotArea, MousewheelZoom, ZoomSelection, Pannable, ChartService, DomEventsBuilder, FormatService, IntlService, TemplateService, Sparkline, Navigator, NavigatorHint, StockChart, constants, Gauge, LinearGauge, LinearPointer, ArrowLinearPointer, BarLinearPointer, LinearScale, RadialGauge, RadialPointer, RadialScale, ArcGauge, RangePointer, ArcScale, addClass, removeClass, alignPathToPixel, clockwise, convertableToNumber, deepExtend, elementStyles, getSpacing, getTemplate, getter, grep, hasClasses, HashMap, inArray, interpolateValue, InstanceObserver, isArray, isFunction, isNumber, isObject, isString, map, mousewheelDelta, FontLoader, setDefaultOptions, sparseArrayLimits, styleValue, ChartAxis, ChartPane, ChartPlotArea, findAxisByName, anyHasZIndex, appendIfNotNull, areNumbers, bindSegments, categoriesCount, countNumbers, equalsIgnoreCase, evalOptions, filterSeriesByType, getDateField, getField, hasGradientOverlay, hasValue, isDateAxis, segmentVisible, singleItemOrArray, createOutOfRangePoints, append, bindEvents, Class, defined, deg, elementOffset, elementSize, eventElement, eventCoordinates, last, limitValue, logToConsole, objectKey, rad, round, unbindEvents, valueOrDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./node_modules/@progress/kendo-charts/dist/es/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "autoMajorUnit", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["autoMajorUnit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["Point"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["Box"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ring", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["Ring"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sector", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["Sector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShapeBuilder", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["ShapeBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShapeElement", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["ShapeElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartElement", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["ChartElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoxElement", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["BoxElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RootElement", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["RootElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FloatElement", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["FloatElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["Text"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextBox", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["TextBox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["Title"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AxisLabel", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["AxisLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Axis", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["Axis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Note", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["Note"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoryAxis", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["CategoryAxis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateCategoryAxis", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["DateCategoryAxis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateValueAxis", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["DateValueAxis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumericAxis", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["NumericAxis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogarithmicAxis", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["LogarithmicAxis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolarAxis", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["PolarAxis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadarCategoryAxis", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["RadarCategoryAxis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadarNumericAxis", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["RadarNumericAxis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadarLogarithmicAxis", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["RadarLogarithmicAxis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurveProcessor", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["CurveProcessor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Gradients", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["Gradients"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rectToBox", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["rectToBox"]; });

/* harmony import */ var _chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart */ "./node_modules/@progress/kendo-charts/dist/es/chart.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Aggregates", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["Aggregates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AreaChart", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["AreaChart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AreaSegment", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["AreaSegment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AxisGroupRangeTracker", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["AxisGroupRangeTracker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bar", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["Bar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BarChart", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["BarChart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BarLabel", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["BarLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoxPlotChart", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["BoxPlotChart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoxPlot", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["BoxPlot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BubbleChart", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["BubbleChart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bullet", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["Bullet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BulletChart", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["BulletChart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CandlestickChart", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["CandlestickChart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Candlestick", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["Candlestick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoricalChart", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["CategoricalChart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoricalErrorBar", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["CategoricalErrorBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoricalPlotArea", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["CategoricalPlotArea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["Chart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartContainer", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["ChartContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClipAnimation", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["ClipAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClusterLayout", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["ClusterLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Crosshair", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["Crosshair"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CrosshairTooltip", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["CrosshairTooltip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultAggregates", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["DefaultAggregates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DonutChart", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["DonutChart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DonutPlotArea", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["DonutPlotArea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DonutSegment", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["DonutSegment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorBarBase", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["ErrorBarBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorRangeCalculator", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["ErrorRangeCalculator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Highlight", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["Highlight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedTooltip", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["SharedTooltip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Legend", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["Legend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LegendItem", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["LegendItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LegendLayout", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["LegendLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineChart", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["LineChart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinePoint", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["LinePoint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineSegment", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["LineSegment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pane", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["Pane"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PieAnimation", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["PieAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PieChart", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["PieChart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PieChartMixin", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["PieChartMixin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PiePlotArea", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["PiePlotArea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PieSegment", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["PieSegment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlotAreaBase", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["PlotAreaBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlotAreaEventsMixin", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["PlotAreaEventsMixin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlotAreaFactory", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["PlotAreaFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PointEventsMixin", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["PointEventsMixin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RangeBar", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["RangeBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RangeBarChart", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["RangeBarChart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RangeAreaPoint", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["RangeAreaPoint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RangeAreaChart", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["RangeAreaChart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScatterChart", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["ScatterChart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScatterErrorBar", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["ScatterErrorBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScatterLineChart", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["ScatterLineChart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["Selection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SeriesAggregator", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["SeriesAggregator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SeriesBinder", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["SeriesBinder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SplineSegment", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["SplineSegment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SplineAreaSegment", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["SplineAreaSegment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StackWrap", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["StackWrap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["Tooltip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OHLCChart", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["OHLCChart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OHLCPoint", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["OHLCPoint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WaterfallChart", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["WaterfallChart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WaterfallSegment", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["WaterfallSegment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XYPlotArea", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["XYPlotArea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MousewheelZoom", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["MousewheelZoom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZoomSelection", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["ZoomSelection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pannable", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["Pannable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartAxis", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["ChartAxis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartPane", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["ChartPane"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartPlotArea", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["ChartPlotArea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findAxisByName", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["findAxisByName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "anyHasZIndex", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["anyHasZIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appendIfNotNull", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["appendIfNotNull"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "areNumbers", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["areNumbers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindSegments", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["bindSegments"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "categoriesCount", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["categoriesCount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countNumbers", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["countNumbers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "equalsIgnoreCase", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["equalsIgnoreCase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "evalOptions", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["evalOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterSeriesByType", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["filterSeriesByType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDateField", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["getDateField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getField", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["getField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasGradientOverlay", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["hasGradientOverlay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasValue", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["hasValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDateAxis", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["isDateAxis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "segmentVisible", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["segmentVisible"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "singleItemOrArray", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["singleItemOrArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createOutOfRangePoints", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__["createOutOfRangePoints"]; });

/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "./node_modules/@progress/kendo-charts/dist/es/services.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartService", function() { return _services__WEBPACK_IMPORTED_MODULE_2__["ChartService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DomEventsBuilder", function() { return _services__WEBPACK_IMPORTED_MODULE_2__["DomEventsBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormatService", function() { return _services__WEBPACK_IMPORTED_MODULE_2__["FormatService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntlService", function() { return _services__WEBPACK_IMPORTED_MODULE_2__["IntlService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateService", function() { return _services__WEBPACK_IMPORTED_MODULE_2__["TemplateService"]; });

/* harmony import */ var _sparkline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sparkline */ "./node_modules/@progress/kendo-charts/dist/es/sparkline.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sparkline", function() { return _sparkline__WEBPACK_IMPORTED_MODULE_3__["Sparkline"]; });

/* harmony import */ var _stock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stock */ "./node_modules/@progress/kendo-charts/dist/es/stock.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigator", function() { return _stock__WEBPACK_IMPORTED_MODULE_4__["Navigator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigatorHint", function() { return _stock__WEBPACK_IMPORTED_MODULE_4__["NavigatorHint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StockChart", function() { return _stock__WEBPACK_IMPORTED_MODULE_4__["StockChart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "constants", function() { return _stock__WEBPACK_IMPORTED_MODULE_4__["constants"]; });

/* harmony import */ var _gauges__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gauges */ "./node_modules/@progress/kendo-charts/dist/es/gauges.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Gauge", function() { return _gauges__WEBPACK_IMPORTED_MODULE_5__["Gauge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinearGauge", function() { return _gauges__WEBPACK_IMPORTED_MODULE_5__["LinearGauge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinearPointer", function() { return _gauges__WEBPACK_IMPORTED_MODULE_5__["LinearPointer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrowLinearPointer", function() { return _gauges__WEBPACK_IMPORTED_MODULE_5__["ArrowLinearPointer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BarLinearPointer", function() { return _gauges__WEBPACK_IMPORTED_MODULE_5__["BarLinearPointer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinearScale", function() { return _gauges__WEBPACK_IMPORTED_MODULE_5__["LinearScale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadialGauge", function() { return _gauges__WEBPACK_IMPORTED_MODULE_5__["RadialGauge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadialPointer", function() { return _gauges__WEBPACK_IMPORTED_MODULE_5__["RadialPointer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadialScale", function() { return _gauges__WEBPACK_IMPORTED_MODULE_5__["RadialScale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArcGauge", function() { return _gauges__WEBPACK_IMPORTED_MODULE_5__["ArcGauge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RangePointer", function() { return _gauges__WEBPACK_IMPORTED_MODULE_5__["RangePointer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArcScale", function() { return _gauges__WEBPACK_IMPORTED_MODULE_5__["ArcScale"]; });

/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common */ "./node_modules/@progress/kendo-charts/dist/es/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["addClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["removeClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alignPathToPixel", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["alignPathToPixel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clockwise", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["clockwise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertableToNumber", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["convertableToNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deepExtend", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["deepExtend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementStyles", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["elementStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSpacing", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["getSpacing"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTemplate", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["getTemplate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getter", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["getter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "grep", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["grep"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasClasses", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["hasClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HashMap", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["HashMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inArray", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["inArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateValue", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["interpolateValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InstanceObserver", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["InstanceObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["isFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["map"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mousewheelDelta", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["mousewheelDelta"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontLoader", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["FontLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setDefaultOptions", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["setDefaultOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sparseArrayLimits", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["sparseArrayLimits"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "styleValue", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["styleValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "append", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["append"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindEvents", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["bindEvents"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Class", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["Class"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defined", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["defined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deg", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["deg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementOffset", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["elementOffset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementSize", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["elementSize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventElement", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["eventElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventCoordinates", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["eventCoordinates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "last", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["last"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "limitValue", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["limitValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logToConsole", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["logToConsole"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "objectKey", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["objectKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rad", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["rad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "round", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["round"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unbindEvents", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["unbindEvents"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "valueOrDefault", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["valueOrDefault"]; });

/* harmony import */ var _chart_base_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chart/base-theme */ "./node_modules/@progress/kendo-charts/dist/es/chart/base-theme.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chartBaseTheme", function() { return _chart_base_theme__WEBPACK_IMPORTED_MODULE_7__["baseTheme"]; });













/***/ }),

/***/ "./node_modules/@progress/kendo-drawing/dist/es/main.js":
/*!**************************************************************!*\
  !*** ./node_modules/@progress/kendo-drawing/dist/es/main.js ***!
  \**************************************************************/
/*! exports provided: exportPDF, exportImage, exportSVG, animationFrame, Class, Color, htmlEncode, logToConsole, Observable, saveAs, support, template, throttle, parseColor, namedColors, Animation, AnimationFactory, Arc, BaseNode, Circle, Element, Gradient, GradientStop, Group, Image, Layout, LinearGradient, MultiPath, ObserversMixin, OptionsStore, Path, PathParser, QuadNode, RadialGradient, Rect, ShapesQuadTree, Surface, SurfaceFactory, Text, align, fit, stack, vAlign, vStack, vWrap, wrap, drawing, geometry, pdf, drawDOM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _drawing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawing */ "./node_modules/@progress/kendo-drawing/dist/es/drawing.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "drawing", function() { return _drawing__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geometry */ "./node_modules/@progress/kendo-drawing/dist/es/geometry.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "geometry", function() { return _geometry__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _pdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pdf */ "./node_modules/@progress/kendo-drawing/dist/es/pdf.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "pdf", function() { return _pdf__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html */ "./node_modules/@progress/kendo-drawing/dist/es/html.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "drawDOM", function() { return _html__WEBPACK_IMPORTED_MODULE_3__["drawDOM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "exportPDF", function() { return _pdf__WEBPACK_IMPORTED_MODULE_2__["exportPDF"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "exportImage", function() { return _drawing__WEBPACK_IMPORTED_MODULE_0__["exportImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "exportSVG", function() { return _drawing__WEBPACK_IMPORTED_MODULE_0__["exportSVG"]; });

/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common */ "./node_modules/@progress/kendo-drawing/dist/es/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "animationFrame", function() { return _common__WEBPACK_IMPORTED_MODULE_4__["animationFrame"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Class", function() { return _common__WEBPACK_IMPORTED_MODULE_4__["Class"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return _common__WEBPACK_IMPORTED_MODULE_4__["Color"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "htmlEncode", function() { return _common__WEBPACK_IMPORTED_MODULE_4__["htmlEncode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logToConsole", function() { return _common__WEBPACK_IMPORTED_MODULE_4__["logToConsole"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return _common__WEBPACK_IMPORTED_MODULE_4__["Observable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveAs", function() { return _common__WEBPACK_IMPORTED_MODULE_4__["saveAs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "support", function() { return _common__WEBPACK_IMPORTED_MODULE_4__["support"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "template", function() { return _common__WEBPACK_IMPORTED_MODULE_4__["template"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return _common__WEBPACK_IMPORTED_MODULE_4__["throttle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseColor", function() { return _common__WEBPACK_IMPORTED_MODULE_4__["parseColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "namedColors", function() { return _common__WEBPACK_IMPORTED_MODULE_4__["namedColors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return _drawing__WEBPACK_IMPORTED_MODULE_0__["Animation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationFactory", function() { return _drawing__WEBPACK_IMPORTED_MODULE_0__["AnimationFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Arc", function() { return _drawing__WEBPACK_IMPORTED_MODULE_0__["Arc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseNode", function() { return _drawing__WEBPACK_IMPORTED_MODULE_0__["BaseNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return _drawing__WEBPACK_IMPORTED_MODULE_0__["Circle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Element", function() { return _drawing__WEBPACK_IMPORTED_MODULE_0__["Element"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Gradient", function() { return _drawing__WEBPACK_IMPORTED_MODULE_0__["Gradient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GradientStop", function() { return _drawing__WEBPACK_IMPORTED_MODULE_0__["GradientStop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return _drawing__WEBPACK_IMPORTED_MODULE_0__["Group"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _drawing__WEBPACK_IMPORTED_MODULE_0__["Image"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return _drawing__WEBPACK_IMPORTED_MODULE_0__["Layout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinearGradient", function() { return _drawing__WEBPACK_IMPORTED_MODULE_0__["LinearGradient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MultiPath", function() { return _drawing__WEBPACK_IMPORTED_MODULE_0__["MultiPath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObserversMixin", function() { return _drawing__WEBPACK_IMPORTED_MODULE_0__["ObserversMixin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OptionsStore", function() { return _drawing__WEBPACK_IMPORTED_MODULE_0__["OptionsStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Path", function() { return _drawing__WEBPACK_IMPORTED_MODULE_0__["Path"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PathParser", function() { return _drawing__WEBPACK_IMPORTED_MODULE_0__["PathParser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuadNode", function() { return _drawing__WEBPACK_IMPORTED_MODULE_0__["QuadNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadialGradient", function() { return _drawing__WEBPACK_IMPORTED_MODULE_0__["RadialGradient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rect", function() { return _drawing__WEBPACK_IMPORTED_MODULE_0__["Rect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShapesQuadTree", function() { return _drawing__WEBPACK_IMPORTED_MODULE_0__["ShapesQuadTree"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Surface", function() { return _drawing__WEBPACK_IMPORTED_MODULE_0__["Surface"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SurfaceFactory", function() { return _drawing__WEBPACK_IMPORTED_MODULE_0__["SurfaceFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _drawing__WEBPACK_IMPORTED_MODULE_0__["Text"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "align", function() { return _drawing__WEBPACK_IMPORTED_MODULE_0__["align"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fit", function() { return _drawing__WEBPACK_IMPORTED_MODULE_0__["fit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stack", function() { return _drawing__WEBPACK_IMPORTED_MODULE_0__["stack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vAlign", function() { return _drawing__WEBPACK_IMPORTED_MODULE_0__["vAlign"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vStack", function() { return _drawing__WEBPACK_IMPORTED_MODULE_0__["vStack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vWrap", function() { return _drawing__WEBPACK_IMPORTED_MODULE_0__["vWrap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return _drawing__WEBPACK_IMPORTED_MODULE_0__["wrap"]; });

















/***/ }),

/***/ "./node_modules/@progress/kendo-react-charts/dist/es/components/main.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@progress/kendo-react-charts/dist/es/components/main.js ***!
  \******************************************************************************/
/*! exports provided: ChartArea, ChartAxisDefaults, ChartCategoryAxis, ChartCategoryAxisItem, ChartLegend, ChartNavigator, ChartPane, ChartPanes, ChartPlotArea, ChartSeries, ChartSeriesDefaults, ChartSeriesItem, ChartTitle, ChartTooltip, ChartValueAxis, ChartValueAxisItem, ChartXAxis, ChartXAxisItem, ChartYAxis, ChartYAxisItem, ChartZoomable, ChartAxisDefaultsTitle, ChartAxisDefaultsLabels, ChartAxisDefaultsCrosshair, ChartAxisDefaultsCrosshairTooltip, ChartCategoryAxisCrosshair, ChartCategoryAxisCrosshairTooltip, ChartCategoryAxisTitle, ChartCategoryAxisLabels, ChartCategoryAxisNotes, ChartCategoryAxisNotesIcon, ChartCategoryAxisNotesLabel, ChartPaneTitle, ChartLegendItem, ChartLegendInactiveItems, ChartSeriesDefaultsItemTooltip, ChartSeriesDefaultsLabels, ChartSeriesDefaultsLabelsFrom, ChartSeriesDefaultsLabelsTo, ChartSeriesDefaultsNotes, ChartSeriesDefaultsNotesIcon, ChartSeriesDefaultsNotesLabel, ChartSeriesItemTooltip, ChartSeriesItemOutliers, ChartSeriesNotes, ChartSeriesMarkers, ChartSeriesLabels, ChartSeriesHighlight, ChartSeriesExtremes, ChartSeriesErrorBars, ChartSeriesLabelsFrom, ChartSeriesLabelsTo, ChartSeriesNotesLabel, ChartSeriesNotesIcon, ChartValueAxisCrosshair, ChartValueAxisCrosshairTooltip, ChartValueAxisTitle, ChartValueAxisLabels, ChartValueAxisNotes, ChartValueAxisNotesIcon, ChartValueAxisNotesLabel, ChartXAxisCrosshair, ChartXAxisCrosshairTooltip, ChartXAxisTitle, ChartXAxisLabels, ChartXAxisNotes, ChartXAxisNotesIcon, ChartXAxisNotesLabel, ChartYAxisCrosshair, ChartYAxisCrosshairTooltip, ChartYAxisTitle, ChartYAxisLabels, ChartYAxisNotes, ChartYAxisNotesIcon, ChartYAxisNotesLabel, ChartNavigatorCategoryAxis, ChartNavigatorHint, ChartNavigatorPane, ChartNavigatorSelect, ChartNavigatorSeries, ChartNavigatorSeriesItem, ChartNavigatorCategoryAxisCrosshair, ChartNavigatorCategoryAxisCrosshairTooltip, ChartNavigatorCategoryAxisTitle, ChartNavigatorCategoryAxisLabels, ChartNavigatorCategoryAxisNotes, ChartNavigatorCategoryAxisNotesIcon, ChartNavigatorCategoryAxisNotesLabel, ChartNavigatorPaneTitle, ChartNavigatorSeriesItemTooltip, ChartNavigatorSeriesItemOutliers, ChartNavigatorSeriesNotes, ChartNavigatorSeriesMarkers, ChartNavigatorSeriesLabels, ChartNavigatorSeriesHighlight, ChartNavigatorSeriesExtremes, ChartNavigatorSeriesErrorBars, ChartNavigatorSeriesLabelsFrom, ChartNavigatorSeriesLabelsTo, ChartNavigatorSeriesNotesLabel, ChartNavigatorSeriesNotesIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartArea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartArea */ "./node_modules/@progress/kendo-react-charts/dist/es/components/ChartArea.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartArea", function() { return _ChartArea__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _AxisDefaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AxisDefaults */ "./node_modules/@progress/kendo-react-charts/dist/es/components/AxisDefaults.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartAxisDefaults", function() { return _AxisDefaults__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _CategoryAxis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CategoryAxis */ "./node_modules/@progress/kendo-react-charts/dist/es/components/CategoryAxis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartCategoryAxis", function() { return _CategoryAxis__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _CategoryAxisItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CategoryAxisItem */ "./node_modules/@progress/kendo-react-charts/dist/es/components/CategoryAxisItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartCategoryAxisItem", function() { return _CategoryAxisItem__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Legend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Legend */ "./node_modules/@progress/kendo-react-charts/dist/es/components/Legend.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartLegend", function() { return _Legend__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Navigator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Navigator */ "./node_modules/@progress/kendo-react-charts/dist/es/components/Navigator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigator", function() { return _Navigator__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Pane__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Pane */ "./node_modules/@progress/kendo-react-charts/dist/es/components/Pane.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartPane", function() { return _Pane__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _Panes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Panes */ "./node_modules/@progress/kendo-react-charts/dist/es/components/Panes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartPanes", function() { return _Panes__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _PlotArea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PlotArea */ "./node_modules/@progress/kendo-react-charts/dist/es/components/PlotArea.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartPlotArea", function() { return _PlotArea__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _Series__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Series */ "./node_modules/@progress/kendo-react-charts/dist/es/components/Series.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSeries", function() { return _Series__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _SeriesDefaults__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SeriesDefaults */ "./node_modules/@progress/kendo-react-charts/dist/es/components/SeriesDefaults.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSeriesDefaults", function() { return _SeriesDefaults__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _SeriesItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SeriesItem */ "./node_modules/@progress/kendo-react-charts/dist/es/components/SeriesItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSeriesItem", function() { return _SeriesItem__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Title */ "./node_modules/@progress/kendo-react-charts/dist/es/components/Title.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartTitle", function() { return _Title__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Tooltip */ "./node_modules/@progress/kendo-react-charts/dist/es/components/Tooltip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartTooltip", function() { return _Tooltip__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _ValueAxis__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ValueAxis */ "./node_modules/@progress/kendo-react-charts/dist/es/components/ValueAxis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartValueAxis", function() { return _ValueAxis__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _ValueAxisItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ValueAxisItem */ "./node_modules/@progress/kendo-react-charts/dist/es/components/ValueAxisItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartValueAxisItem", function() { return _ValueAxisItem__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _XAxis__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./XAxis */ "./node_modules/@progress/kendo-react-charts/dist/es/components/XAxis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartXAxis", function() { return _XAxis__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _XAxisItem__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./XAxisItem */ "./node_modules/@progress/kendo-react-charts/dist/es/components/XAxisItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartXAxisItem", function() { return _XAxisItem__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _YAxis__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./YAxis */ "./node_modules/@progress/kendo-react-charts/dist/es/components/YAxis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartYAxis", function() { return _YAxis__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _YAxisItem__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./YAxisItem */ "./node_modules/@progress/kendo-react-charts/dist/es/components/YAxisItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartYAxisItem", function() { return _YAxisItem__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _Zoomable__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Zoomable */ "./node_modules/@progress/kendo-react-charts/dist/es/components/Zoomable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartZoomable", function() { return _Zoomable__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _axis_defaults_main__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./axis-defaults/main */ "./node_modules/@progress/kendo-react-charts/dist/es/components/axis-defaults/main.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartAxisDefaultsTitle", function() { return _axis_defaults_main__WEBPACK_IMPORTED_MODULE_21__["ChartAxisDefaultsTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartAxisDefaultsLabels", function() { return _axis_defaults_main__WEBPACK_IMPORTED_MODULE_21__["ChartAxisDefaultsLabels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartAxisDefaultsCrosshair", function() { return _axis_defaults_main__WEBPACK_IMPORTED_MODULE_21__["ChartAxisDefaultsCrosshair"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartAxisDefaultsCrosshairTooltip", function() { return _axis_defaults_main__WEBPACK_IMPORTED_MODULE_21__["ChartAxisDefaultsCrosshairTooltip"]; });

/* harmony import */ var _category_axis_item_main__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./category-axis-item/main */ "./node_modules/@progress/kendo-react-charts/dist/es/components/category-axis-item/main.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartCategoryAxisCrosshair", function() { return _category_axis_item_main__WEBPACK_IMPORTED_MODULE_22__["ChartCategoryAxisCrosshair"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartCategoryAxisCrosshairTooltip", function() { return _category_axis_item_main__WEBPACK_IMPORTED_MODULE_22__["ChartCategoryAxisCrosshairTooltip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartCategoryAxisTitle", function() { return _category_axis_item_main__WEBPACK_IMPORTED_MODULE_22__["ChartCategoryAxisTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartCategoryAxisLabels", function() { return _category_axis_item_main__WEBPACK_IMPORTED_MODULE_22__["ChartCategoryAxisLabels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartCategoryAxisNotes", function() { return _category_axis_item_main__WEBPACK_IMPORTED_MODULE_22__["ChartCategoryAxisNotes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartCategoryAxisNotesIcon", function() { return _category_axis_item_main__WEBPACK_IMPORTED_MODULE_22__["ChartCategoryAxisNotesIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartCategoryAxisNotesLabel", function() { return _category_axis_item_main__WEBPACK_IMPORTED_MODULE_22__["ChartCategoryAxisNotesLabel"]; });

/* harmony import */ var _pane_main__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pane/main */ "./node_modules/@progress/kendo-react-charts/dist/es/components/pane/main.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartPaneTitle", function() { return _pane_main__WEBPACK_IMPORTED_MODULE_23__["ChartPaneTitle"]; });

/* harmony import */ var _legend_main__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./legend/main */ "./node_modules/@progress/kendo-react-charts/dist/es/components/legend/main.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartLegendItem", function() { return _legend_main__WEBPACK_IMPORTED_MODULE_24__["ChartLegendItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartLegendInactiveItems", function() { return _legend_main__WEBPACK_IMPORTED_MODULE_24__["ChartLegendInactiveItems"]; });

/* harmony import */ var _series_defaults_main__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./series-defaults/main */ "./node_modules/@progress/kendo-react-charts/dist/es/components/series-defaults/main.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSeriesDefaultsItemTooltip", function() { return _series_defaults_main__WEBPACK_IMPORTED_MODULE_25__["ChartSeriesDefaultsItemTooltip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSeriesDefaultsLabels", function() { return _series_defaults_main__WEBPACK_IMPORTED_MODULE_25__["ChartSeriesDefaultsLabels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSeriesDefaultsLabelsFrom", function() { return _series_defaults_main__WEBPACK_IMPORTED_MODULE_25__["ChartSeriesDefaultsLabelsFrom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSeriesDefaultsLabelsTo", function() { return _series_defaults_main__WEBPACK_IMPORTED_MODULE_25__["ChartSeriesDefaultsLabelsTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSeriesDefaultsNotes", function() { return _series_defaults_main__WEBPACK_IMPORTED_MODULE_25__["ChartSeriesDefaultsNotes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSeriesDefaultsNotesIcon", function() { return _series_defaults_main__WEBPACK_IMPORTED_MODULE_25__["ChartSeriesDefaultsNotesIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSeriesDefaultsNotesLabel", function() { return _series_defaults_main__WEBPACK_IMPORTED_MODULE_25__["ChartSeriesDefaultsNotesLabel"]; });

/* harmony import */ var _series_item_main__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./series-item/main */ "./node_modules/@progress/kendo-react-charts/dist/es/components/series-item/main.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSeriesItemTooltip", function() { return _series_item_main__WEBPACK_IMPORTED_MODULE_26__["ChartSeriesItemTooltip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSeriesItemOutliers", function() { return _series_item_main__WEBPACK_IMPORTED_MODULE_26__["ChartSeriesItemOutliers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSeriesNotes", function() { return _series_item_main__WEBPACK_IMPORTED_MODULE_26__["ChartSeriesNotes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSeriesMarkers", function() { return _series_item_main__WEBPACK_IMPORTED_MODULE_26__["ChartSeriesMarkers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSeriesLabels", function() { return _series_item_main__WEBPACK_IMPORTED_MODULE_26__["ChartSeriesLabels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSeriesHighlight", function() { return _series_item_main__WEBPACK_IMPORTED_MODULE_26__["ChartSeriesHighlight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSeriesExtremes", function() { return _series_item_main__WEBPACK_IMPORTED_MODULE_26__["ChartSeriesExtremes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSeriesErrorBars", function() { return _series_item_main__WEBPACK_IMPORTED_MODULE_26__["ChartSeriesErrorBars"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSeriesLabelsFrom", function() { return _series_item_main__WEBPACK_IMPORTED_MODULE_26__["ChartSeriesLabelsFrom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSeriesLabelsTo", function() { return _series_item_main__WEBPACK_IMPORTED_MODULE_26__["ChartSeriesLabelsTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSeriesNotesLabel", function() { return _series_item_main__WEBPACK_IMPORTED_MODULE_26__["ChartSeriesNotesLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSeriesNotesIcon", function() { return _series_item_main__WEBPACK_IMPORTED_MODULE_26__["ChartSeriesNotesIcon"]; });

/* harmony import */ var _value_axis_item_main__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./value-axis-item/main */ "./node_modules/@progress/kendo-react-charts/dist/es/components/value-axis-item/main.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartValueAxisCrosshair", function() { return _value_axis_item_main__WEBPACK_IMPORTED_MODULE_27__["ChartValueAxisCrosshair"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartValueAxisCrosshairTooltip", function() { return _value_axis_item_main__WEBPACK_IMPORTED_MODULE_27__["ChartValueAxisCrosshairTooltip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartValueAxisTitle", function() { return _value_axis_item_main__WEBPACK_IMPORTED_MODULE_27__["ChartValueAxisTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartValueAxisLabels", function() { return _value_axis_item_main__WEBPACK_IMPORTED_MODULE_27__["ChartValueAxisLabels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartValueAxisNotes", function() { return _value_axis_item_main__WEBPACK_IMPORTED_MODULE_27__["ChartValueAxisNotes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartValueAxisNotesIcon", function() { return _value_axis_item_main__WEBPACK_IMPORTED_MODULE_27__["ChartValueAxisNotesIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartValueAxisNotesLabel", function() { return _value_axis_item_main__WEBPACK_IMPORTED_MODULE_27__["ChartValueAxisNotesLabel"]; });

/* harmony import */ var _x_axis_item_main__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./x-axis-item/main */ "./node_modules/@progress/kendo-react-charts/dist/es/components/x-axis-item/main.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartXAxisCrosshair", function() { return _x_axis_item_main__WEBPACK_IMPORTED_MODULE_28__["ChartXAxisCrosshair"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartXAxisCrosshairTooltip", function() { return _x_axis_item_main__WEBPACK_IMPORTED_MODULE_28__["ChartXAxisCrosshairTooltip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartXAxisTitle", function() { return _x_axis_item_main__WEBPACK_IMPORTED_MODULE_28__["ChartXAxisTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartXAxisLabels", function() { return _x_axis_item_main__WEBPACK_IMPORTED_MODULE_28__["ChartXAxisLabels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartXAxisNotes", function() { return _x_axis_item_main__WEBPACK_IMPORTED_MODULE_28__["ChartXAxisNotes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartXAxisNotesIcon", function() { return _x_axis_item_main__WEBPACK_IMPORTED_MODULE_28__["ChartXAxisNotesIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartXAxisNotesLabel", function() { return _x_axis_item_main__WEBPACK_IMPORTED_MODULE_28__["ChartXAxisNotesLabel"]; });

/* harmony import */ var _y_axis_item_main__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./y-axis-item/main */ "./node_modules/@progress/kendo-react-charts/dist/es/components/y-axis-item/main.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartYAxisCrosshair", function() { return _y_axis_item_main__WEBPACK_IMPORTED_MODULE_29__["ChartYAxisCrosshair"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartYAxisCrosshairTooltip", function() { return _y_axis_item_main__WEBPACK_IMPORTED_MODULE_29__["ChartYAxisCrosshairTooltip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartYAxisTitle", function() { return _y_axis_item_main__WEBPACK_IMPORTED_MODULE_29__["ChartYAxisTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartYAxisLabels", function() { return _y_axis_item_main__WEBPACK_IMPORTED_MODULE_29__["ChartYAxisLabels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartYAxisNotes", function() { return _y_axis_item_main__WEBPACK_IMPORTED_MODULE_29__["ChartYAxisNotes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartYAxisNotesIcon", function() { return _y_axis_item_main__WEBPACK_IMPORTED_MODULE_29__["ChartYAxisNotesIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartYAxisNotesLabel", function() { return _y_axis_item_main__WEBPACK_IMPORTED_MODULE_29__["ChartYAxisNotesLabel"]; });

/* harmony import */ var _navigator_main__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./navigator/main */ "./node_modules/@progress/kendo-react-charts/dist/es/components/navigator/main.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorCategoryAxis", function() { return _navigator_main__WEBPACK_IMPORTED_MODULE_30__["ChartNavigatorCategoryAxis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorHint", function() { return _navigator_main__WEBPACK_IMPORTED_MODULE_30__["ChartNavigatorHint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorPane", function() { return _navigator_main__WEBPACK_IMPORTED_MODULE_30__["ChartNavigatorPane"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorSelect", function() { return _navigator_main__WEBPACK_IMPORTED_MODULE_30__["ChartNavigatorSelect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorSeries", function() { return _navigator_main__WEBPACK_IMPORTED_MODULE_30__["ChartNavigatorSeries"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorSeriesItem", function() { return _navigator_main__WEBPACK_IMPORTED_MODULE_30__["ChartNavigatorSeriesItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorCategoryAxisCrosshair", function() { return _navigator_main__WEBPACK_IMPORTED_MODULE_30__["ChartNavigatorCategoryAxisCrosshair"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorCategoryAxisCrosshairTooltip", function() { return _navigator_main__WEBPACK_IMPORTED_MODULE_30__["ChartNavigatorCategoryAxisCrosshairTooltip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorCategoryAxisTitle", function() { return _navigator_main__WEBPACK_IMPORTED_MODULE_30__["ChartNavigatorCategoryAxisTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorCategoryAxisLabels", function() { return _navigator_main__WEBPACK_IMPORTED_MODULE_30__["ChartNavigatorCategoryAxisLabels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorCategoryAxisNotes", function() { return _navigator_main__WEBPACK_IMPORTED_MODULE_30__["ChartNavigatorCategoryAxisNotes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorCategoryAxisNotesIcon", function() { return _navigator_main__WEBPACK_IMPORTED_MODULE_30__["ChartNavigatorCategoryAxisNotesIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorCategoryAxisNotesLabel", function() { return _navigator_main__WEBPACK_IMPORTED_MODULE_30__["ChartNavigatorCategoryAxisNotesLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorPaneTitle", function() { return _navigator_main__WEBPACK_IMPORTED_MODULE_30__["ChartNavigatorPaneTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorSeriesItemTooltip", function() { return _navigator_main__WEBPACK_IMPORTED_MODULE_30__["ChartNavigatorSeriesItemTooltip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorSeriesItemOutliers", function() { return _navigator_main__WEBPACK_IMPORTED_MODULE_30__["ChartNavigatorSeriesItemOutliers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorSeriesNotes", function() { return _navigator_main__WEBPACK_IMPORTED_MODULE_30__["ChartNavigatorSeriesNotes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorSeriesMarkers", function() { return _navigator_main__WEBPACK_IMPORTED_MODULE_30__["ChartNavigatorSeriesMarkers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorSeriesLabels", function() { return _navigator_main__WEBPACK_IMPORTED_MODULE_30__["ChartNavigatorSeriesLabels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorSeriesHighlight", function() { return _navigator_main__WEBPACK_IMPORTED_MODULE_30__["ChartNavigatorSeriesHighlight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorSeriesExtremes", function() { return _navigator_main__WEBPACK_IMPORTED_MODULE_30__["ChartNavigatorSeriesExtremes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorSeriesErrorBars", function() { return _navigator_main__WEBPACK_IMPORTED_MODULE_30__["ChartNavigatorSeriesErrorBars"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorSeriesLabelsFrom", function() { return _navigator_main__WEBPACK_IMPORTED_MODULE_30__["ChartNavigatorSeriesLabelsFrom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorSeriesLabelsTo", function() { return _navigator_main__WEBPACK_IMPORTED_MODULE_30__["ChartNavigatorSeriesLabelsTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorSeriesNotesLabel", function() { return _navigator_main__WEBPACK_IMPORTED_MODULE_30__["ChartNavigatorSeriesNotesLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorSeriesNotesIcon", function() { return _navigator_main__WEBPACK_IMPORTED_MODULE_30__["ChartNavigatorSeriesNotesIcon"]; });

































//# sourceMappingURL=main.js.map

/***/ }),

/***/ "./node_modules/@progress/kendo-react-charts/dist/es/main.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@progress/kendo-react-charts/dist/es/main.js ***!
  \*******************************************************************/
/*! exports provided: Chart, Sparkline, StockChart, TooltipPoint, ChartArea, ChartAxisDefaults, ChartCategoryAxis, ChartCategoryAxisItem, ChartLegend, ChartNavigator, ChartPane, ChartPanes, ChartPlotArea, ChartSeries, ChartSeriesDefaults, ChartSeriesItem, ChartTitle, ChartTooltip, ChartValueAxis, ChartValueAxisItem, ChartXAxis, ChartXAxisItem, ChartYAxis, ChartYAxisItem, ChartZoomable, AxisLabelClickEvent, DragEndEvent, DragEvent, DragStartEvent, LegendItemClickEvent, LegendItemHoverEvent, NavigatorFilterEvent, NoteClickEvent, NoteHoverEvent, PlotAreaClickEvent, PlotAreaHoverEvent, RenderEvent, SelectEndEvent, SelectEvent, SelectStartEvent, SeriesClickEvent, SeriesHoverEvent, ZoomEndEvent, ZoomEvent, ZoomStartEvent, findAxisByName, findPaneByIndex, findPaneByName, exportVisual, ChartAxisDefaultsTitle, ChartAxisDefaultsLabels, ChartAxisDefaultsCrosshair, ChartAxisDefaultsCrosshairTooltip, ChartCategoryAxisCrosshair, ChartCategoryAxisCrosshairTooltip, ChartCategoryAxisTitle, ChartCategoryAxisLabels, ChartCategoryAxisNotes, ChartCategoryAxisNotesIcon, ChartCategoryAxisNotesLabel, ChartPaneTitle, ChartLegendItem, ChartLegendInactiveItems, ChartSeriesDefaultsItemTooltip, ChartSeriesDefaultsLabels, ChartSeriesDefaultsLabelsFrom, ChartSeriesDefaultsLabelsTo, ChartSeriesDefaultsNotes, ChartSeriesDefaultsNotesIcon, ChartSeriesDefaultsNotesLabel, ChartSeriesItemTooltip, ChartSeriesItemOutliers, ChartSeriesNotes, ChartSeriesMarkers, ChartSeriesLabels, ChartSeriesHighlight, ChartSeriesExtremes, ChartSeriesErrorBars, ChartSeriesLabelsFrom, ChartSeriesLabelsTo, ChartSeriesNotesLabel, ChartSeriesNotesIcon, ChartValueAxisCrosshair, ChartValueAxisCrosshairTooltip, ChartValueAxisTitle, ChartValueAxisLabels, ChartValueAxisNotes, ChartValueAxisNotesIcon, ChartValueAxisNotesLabel, ChartXAxisCrosshair, ChartXAxisCrosshairTooltip, ChartXAxisTitle, ChartXAxisLabels, ChartXAxisNotes, ChartXAxisNotesIcon, ChartXAxisNotesLabel, ChartYAxisCrosshair, ChartYAxisCrosshairTooltip, ChartYAxisTitle, ChartYAxisLabels, ChartYAxisNotes, ChartYAxisNotesIcon, ChartYAxisNotesLabel, ChartNavigatorCategoryAxis, ChartNavigatorHint, ChartNavigatorPane, ChartNavigatorSelect, ChartNavigatorSeries, ChartNavigatorSeriesItem, ChartNavigatorCategoryAxisCrosshair, ChartNavigatorCategoryAxisCrosshairTooltip, ChartNavigatorCategoryAxisTitle, ChartNavigatorCategoryAxisLabels, ChartNavigatorCategoryAxisNotes, ChartNavigatorCategoryAxisNotesIcon, ChartNavigatorCategoryAxisNotesLabel, ChartNavigatorPaneTitle, ChartNavigatorSeriesItemTooltip, ChartNavigatorSeriesItemOutliers, ChartNavigatorSeriesNotes, ChartNavigatorSeriesMarkers, ChartNavigatorSeriesLabels, ChartNavigatorSeriesHighlight, ChartNavigatorSeriesExtremes, ChartNavigatorSeriesErrorBars, ChartNavigatorSeriesLabelsFrom, ChartNavigatorSeriesLabelsTo, ChartNavigatorSeriesNotesLabel, ChartNavigatorSeriesNotesIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chart */ "./node_modules/@progress/kendo-react-charts/dist/es/Chart.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return _Chart__WEBPACK_IMPORTED_MODULE_0__["Chart"]; });

/* harmony import */ var _Sparkline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sparkline */ "./node_modules/@progress/kendo-react-charts/dist/es/Sparkline.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sparkline", function() { return _Sparkline__WEBPACK_IMPORTED_MODULE_1__["Sparkline"]; });

/* harmony import */ var _StockChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StockChart */ "./node_modules/@progress/kendo-react-charts/dist/es/StockChart.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StockChart", function() { return _StockChart__WEBPACK_IMPORTED_MODULE_2__["StockChart"]; });

/* harmony import */ var _tooltip_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tooltip/main */ "./node_modules/@progress/kendo-react-charts/dist/es/tooltip/main.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipPoint", function() { return _tooltip_main__WEBPACK_IMPORTED_MODULE_3__["TooltipPoint"]; });

/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main */ "./node_modules/@progress/kendo-react-charts/dist/es/components/main.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartArea", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartArea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartAxisDefaults", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartAxisDefaults"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartCategoryAxis", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartCategoryAxis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartCategoryAxisItem", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartCategoryAxisItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartLegend", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartLegend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigator", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartNavigator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartPane", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartPane"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartPanes", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartPanes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartPlotArea", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartPlotArea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSeries", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartSeries"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSeriesDefaults", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartSeriesDefaults"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSeriesItem", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartSeriesItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartTitle", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartTooltip", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartTooltip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartValueAxis", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartValueAxis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartValueAxisItem", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartValueAxisItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartXAxis", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartXAxis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartXAxisItem", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartXAxisItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartYAxis", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartYAxis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartYAxisItem", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartYAxisItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartZoomable", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartZoomable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartAxisDefaultsTitle", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartAxisDefaultsTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartAxisDefaultsLabels", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartAxisDefaultsLabels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartAxisDefaultsCrosshair", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartAxisDefaultsCrosshair"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartAxisDefaultsCrosshairTooltip", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartAxisDefaultsCrosshairTooltip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartCategoryAxisCrosshair", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartCategoryAxisCrosshair"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartCategoryAxisCrosshairTooltip", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartCategoryAxisCrosshairTooltip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartCategoryAxisTitle", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartCategoryAxisTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartCategoryAxisLabels", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartCategoryAxisLabels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartCategoryAxisNotes", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartCategoryAxisNotes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartCategoryAxisNotesIcon", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartCategoryAxisNotesIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartCategoryAxisNotesLabel", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartCategoryAxisNotesLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartPaneTitle", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartPaneTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartLegendItem", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartLegendItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartLegendInactiveItems", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartLegendInactiveItems"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSeriesDefaultsItemTooltip", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartSeriesDefaultsItemTooltip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSeriesDefaultsLabels", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartSeriesDefaultsLabels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSeriesDefaultsLabelsFrom", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartSeriesDefaultsLabelsFrom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSeriesDefaultsLabelsTo", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartSeriesDefaultsLabelsTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSeriesDefaultsNotes", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartSeriesDefaultsNotes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSeriesDefaultsNotesIcon", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartSeriesDefaultsNotesIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSeriesDefaultsNotesLabel", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartSeriesDefaultsNotesLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSeriesItemTooltip", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartSeriesItemTooltip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSeriesItemOutliers", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartSeriesItemOutliers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSeriesNotes", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartSeriesNotes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSeriesMarkers", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartSeriesMarkers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSeriesLabels", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartSeriesLabels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSeriesHighlight", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartSeriesHighlight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSeriesExtremes", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartSeriesExtremes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSeriesErrorBars", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartSeriesErrorBars"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSeriesLabelsFrom", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartSeriesLabelsFrom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSeriesLabelsTo", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartSeriesLabelsTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSeriesNotesLabel", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartSeriesNotesLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSeriesNotesIcon", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartSeriesNotesIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartValueAxisCrosshair", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartValueAxisCrosshair"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartValueAxisCrosshairTooltip", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartValueAxisCrosshairTooltip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartValueAxisTitle", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartValueAxisTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartValueAxisLabels", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartValueAxisLabels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartValueAxisNotes", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartValueAxisNotes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartValueAxisNotesIcon", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartValueAxisNotesIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartValueAxisNotesLabel", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartValueAxisNotesLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartXAxisCrosshair", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartXAxisCrosshair"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartXAxisCrosshairTooltip", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartXAxisCrosshairTooltip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartXAxisTitle", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartXAxisTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartXAxisLabels", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartXAxisLabels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartXAxisNotes", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartXAxisNotes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartXAxisNotesIcon", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartXAxisNotesIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartXAxisNotesLabel", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartXAxisNotesLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartYAxisCrosshair", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartYAxisCrosshair"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartYAxisCrosshairTooltip", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartYAxisCrosshairTooltip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartYAxisTitle", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartYAxisTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartYAxisLabels", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartYAxisLabels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartYAxisNotes", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartYAxisNotes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartYAxisNotesIcon", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartYAxisNotesIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartYAxisNotesLabel", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartYAxisNotesLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorCategoryAxis", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartNavigatorCategoryAxis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorHint", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartNavigatorHint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorPane", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartNavigatorPane"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorSelect", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartNavigatorSelect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorSeries", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartNavigatorSeries"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorSeriesItem", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartNavigatorSeriesItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorCategoryAxisCrosshair", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartNavigatorCategoryAxisCrosshair"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorCategoryAxisCrosshairTooltip", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartNavigatorCategoryAxisCrosshairTooltip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorCategoryAxisTitle", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartNavigatorCategoryAxisTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorCategoryAxisLabels", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartNavigatorCategoryAxisLabels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorCategoryAxisNotes", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartNavigatorCategoryAxisNotes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorCategoryAxisNotesIcon", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartNavigatorCategoryAxisNotesIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorCategoryAxisNotesLabel", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartNavigatorCategoryAxisNotesLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorPaneTitle", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartNavigatorPaneTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorSeriesItemTooltip", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartNavigatorSeriesItemTooltip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorSeriesItemOutliers", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartNavigatorSeriesItemOutliers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorSeriesNotes", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartNavigatorSeriesNotes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorSeriesMarkers", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartNavigatorSeriesMarkers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorSeriesLabels", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartNavigatorSeriesLabels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorSeriesHighlight", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartNavigatorSeriesHighlight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorSeriesExtremes", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartNavigatorSeriesExtremes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorSeriesErrorBars", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartNavigatorSeriesErrorBars"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorSeriesLabelsFrom", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartNavigatorSeriesLabelsFrom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorSeriesLabelsTo", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartNavigatorSeriesLabelsTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorSeriesNotesLabel", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartNavigatorSeriesNotesLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartNavigatorSeriesNotesIcon", function() { return _components_main__WEBPACK_IMPORTED_MODULE_4__["ChartNavigatorSeriesNotesIcon"]; });

/* harmony import */ var _common_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/events */ "./node_modules/@progress/kendo-react-charts/dist/es/common/events.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AxisLabelClickEvent", function() { return _common_events__WEBPACK_IMPORTED_MODULE_5__["AxisLabelClickEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DragEndEvent", function() { return _common_events__WEBPACK_IMPORTED_MODULE_5__["DragEndEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DragEvent", function() { return _common_events__WEBPACK_IMPORTED_MODULE_5__["DragEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DragStartEvent", function() { return _common_events__WEBPACK_IMPORTED_MODULE_5__["DragStartEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LegendItemClickEvent", function() { return _common_events__WEBPACK_IMPORTED_MODULE_5__["LegendItemClickEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LegendItemHoverEvent", function() { return _common_events__WEBPACK_IMPORTED_MODULE_5__["LegendItemHoverEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigatorFilterEvent", function() { return _common_events__WEBPACK_IMPORTED_MODULE_5__["NavigatorFilterEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoteClickEvent", function() { return _common_events__WEBPACK_IMPORTED_MODULE_5__["NoteClickEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoteHoverEvent", function() { return _common_events__WEBPACK_IMPORTED_MODULE_5__["NoteHoverEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlotAreaClickEvent", function() { return _common_events__WEBPACK_IMPORTED_MODULE_5__["PlotAreaClickEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlotAreaHoverEvent", function() { return _common_events__WEBPACK_IMPORTED_MODULE_5__["PlotAreaHoverEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderEvent", function() { return _common_events__WEBPACK_IMPORTED_MODULE_5__["RenderEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectEndEvent", function() { return _common_events__WEBPACK_IMPORTED_MODULE_5__["SelectEndEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectEvent", function() { return _common_events__WEBPACK_IMPORTED_MODULE_5__["SelectEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectStartEvent", function() { return _common_events__WEBPACK_IMPORTED_MODULE_5__["SelectStartEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SeriesClickEvent", function() { return _common_events__WEBPACK_IMPORTED_MODULE_5__["SeriesClickEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SeriesHoverEvent", function() { return _common_events__WEBPACK_IMPORTED_MODULE_5__["SeriesHoverEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZoomEndEvent", function() { return _common_events__WEBPACK_IMPORTED_MODULE_5__["ZoomEndEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZoomEvent", function() { return _common_events__WEBPACK_IMPORTED_MODULE_5__["ZoomEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZoomStartEvent", function() { return _common_events__WEBPACK_IMPORTED_MODULE_5__["ZoomStartEvent"]; });

/* harmony import */ var _methods___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./methods/ */ "./node_modules/@progress/kendo-react-charts/dist/es/methods/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findAxisByName", function() { return _methods___WEBPACK_IMPORTED_MODULE_6__["findAxisByName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findPaneByIndex", function() { return _methods___WEBPACK_IMPORTED_MODULE_6__["findPaneByIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findPaneByName", function() { return _methods___WEBPACK_IMPORTED_MODULE_6__["findPaneByName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "exportVisual", function() { return _methods___WEBPACK_IMPORTED_MODULE_6__["exportVisual"]; });









//# sourceMappingURL=main.js.map

/***/ }),

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
}];

var Chart = function Chart() {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Static Chart"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_chart_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    seriesData: seriesData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Chart);

/***/ })

})
//# sourceMappingURL=chart.js.1b8b40a82f8311e5d0f7.hot-update.js.map