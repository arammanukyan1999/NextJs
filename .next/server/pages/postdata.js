module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/postdata.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/form.module.css":
/*!*******************************!*\
  !*** ./pages/form.module.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"textarea\": \"form_textarea__1AL2z\",\n\t\"input\": \"form_input__2nGTy\",\n\t\"form\": \"form_form__1RI8x\",\n\t\"submit\": \"form_submit__jyKrf\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9mb3JtLm1vZHVsZS5jc3M/NzFjYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3BhZ2VzL2Zvcm0ubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRleHRhcmVhXCI6IFwiZm9ybV90ZXh0YXJlYV9fMUFMMnpcIixcblx0XCJpbnB1dFwiOiBcImZvcm1faW5wdXRfXzJuR1R5XCIsXG5cdFwiZm9ybVwiOiBcImZvcm1fZm9ybV9fMVJJOHhcIixcblx0XCJzdWJtaXRcIjogXCJmb3JtX3N1Ym1pdF9fanlLcmZcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/form.module.css\n");

/***/ }),

/***/ "./pages/postdata.js":
/*!***************************!*\
  !*** ./pages/postdata.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _form_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.module.css */ \"./pages/form.module.css\");\n/* harmony import */ var _form_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_form_module_css__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/ars-systems/Desktop/Test/nextjs/pages/postdata.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nclass Page extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      title: '',\n      email: '',\n      area: ''\n    });\n\n    _defineProperty(this, \"handleChangeTitle\", e => {\n      this.setState({\n        title: e.target.value\n      });\n    });\n\n    _defineProperty(this, \"handleChangeEmail\", e => {\n      this.setState({\n        email: e.target.value\n      });\n    });\n\n    _defineProperty(this, \"handleChangeArea\", e => {\n      this.setState({\n        area: e.target.value\n      });\n    });\n  }\n\n  render() {\n    return __jsx(\"div\", {\n      className: _form_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.form,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 13\n      }\n    }, __jsx(\"form\", {\n      onSubmit: e => {\n        e.preventDefault(), console.log(this.state);\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }\n    }, __jsx(\"input\", {\n      className: _form_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.input,\n      onChange: this.handleChangeTitle,\n      type: \"text\",\n      placeholder: \"title\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 16\n      }\n    }), __jsx(\"br\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 16\n      }\n    }), __jsx(\"input\", {\n      className: _form_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.input,\n      onChange: this.handleChangeEmail,\n      type: \"email\",\n      placeholder: \"email\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 16\n      }\n    }), __jsx(\"br\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 16\n      }\n    }), __jsx(\"textarea\", {\n      className: _form_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textarea,\n      onChange: this.handleChangeArea,\n      name: \"textarea\",\n      placeholder: \"tipe\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 16\n      }\n    }), __jsx(\"br\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 15\n      }\n    }), __jsx(\"button\", {\n      className: _form_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.submit,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 16\n      }\n    }, \" Submit\")));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0ZGF0YS5qcz84MzQxIl0sIm5hbWVzIjpbIlBhZ2UiLCJSZWFjdCIsIkNvbXBvbmVudCIsInRpdGxlIiwiZW1haWwiLCJhcmVhIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJyZW5kZXIiLCJzdHlsZXMiLCJmb3JtIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJpbnB1dCIsImhhbmRsZUNoYW5nZVRpdGxlIiwiaGFuZGxlQ2hhbmdlRW1haWwiLCJ0ZXh0YXJlYSIsImhhbmRsZUNoYW5nZUFyZWEiLCJzdWJtaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLE1BQU1BLElBQU4sU0FBbUJDLDRDQUFLLENBQUNDLFNBQXpCLENBQW1DO0FBQUE7QUFBQTs7QUFBQSxtQ0FFbkI7QUFDRkMsV0FBSyxFQUFDLEVBREo7QUFFRkMsV0FBSyxFQUFDLEVBRko7QUFHRkMsVUFBSSxFQUFDO0FBSEgsS0FGbUI7O0FBQUEsK0NBVU5DLENBQUQsSUFBSztBQUNyQixXQUFLQyxRQUFMLENBQWM7QUFDVkosYUFBSyxFQUFDRyxDQUFDLENBQUNFLE1BQUYsQ0FBU0M7QUFETCxPQUFkO0FBR0gsS0FkMEI7O0FBQUEsK0NBaUJOSCxDQUFELElBQUs7QUFDckIsV0FBS0MsUUFBTCxDQUFjO0FBQ1ZILGFBQUssRUFBQ0UsQ0FBQyxDQUFDRSxNQUFGLENBQVNDO0FBREwsT0FBZDtBQUdILEtBckIwQjs7QUFBQSw4Q0F1QlBILENBQUQsSUFBSztBQUNwQixXQUFLQyxRQUFMLENBQWM7QUFDVkYsWUFBSSxFQUFDQyxDQUFDLENBQUNFLE1BQUYsQ0FBU0M7QUFESixPQUFkO0FBR0gsS0EzQjBCO0FBQUE7O0FBOEIvQkMsUUFBTSxHQUFHO0FBQ0wsV0FDSTtBQUFLLGVBQVMsRUFBRUMsdURBQU0sQ0FBQ0MsSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQU0sY0FBUSxFQUFHTixDQUFELElBQUs7QUFBQ0EsU0FBQyxDQUFDTyxjQUFGLElBQW1CQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLQyxLQUFqQixDQUFuQjtBQUEyQyxPQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0Q7QUFBTyxlQUFTLEVBQUVMLHVEQUFNLENBQUNNLEtBQXpCO0FBQWdDLGNBQVEsRUFBRSxLQUFLQyxpQkFBL0M7QUFBa0UsVUFBSSxFQUFDLE1BQXZFO0FBQThFLGlCQUFXLEVBQUMsT0FBMUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURDLEVBRUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZDLEVBR0Q7QUFBTyxlQUFTLEVBQUVQLHVEQUFNLENBQUNNLEtBQXpCO0FBQWdDLGNBQVEsRUFBRSxLQUFLRSxpQkFBL0M7QUFBa0UsVUFBSSxFQUFDLE9BQXZFO0FBQStFLGlCQUFXLEVBQUMsT0FBM0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhDLEVBSUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpDLEVBS0Q7QUFBVSxlQUFTLEVBQUVSLHVEQUFNLENBQUNTLFFBQTVCO0FBQXNDLGNBQVEsRUFBRSxLQUFLQyxnQkFBckQ7QUFBdUUsVUFBSSxFQUFDLFVBQTVFO0FBQXVGLGlCQUFXLEVBQUMsTUFBbkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUxDLEVBTUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU5FLEVBT0Q7QUFBUSxlQUFTLEVBQUVWLHVEQUFNLENBQUNXLE1BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEMsQ0FESixDQURKO0FBZUg7O0FBOUM4Qjs7QUFrRHBCdEIsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9wb3N0ZGF0YS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2Zvcm0ubW9kdWxlLmNzcydcblxuXG5jbGFzcyBQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICAgIFxuICAgICAgICAgIHN0YXRlPXtcbiAgICAgICAgICAgICAgdGl0bGU6JycsXG4gICAgICAgICAgICAgIGVtYWlsOicnLFxuICAgICAgICAgICAgICBhcmVhOicnXG5cblxuICAgICAgICAgIH1cblxuICAgICAgICBoYW5kbGVDaGFuZ2VUaXRsZSA9IChlKT0+e1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgICAgaGFuZGxlQ2hhbmdlRW1haWwgPSAoZSk9PntcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGVtYWlsOmUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaGFuZGxlQ2hhbmdlQXJlYSA9IChlKT0+e1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYXJlYTplLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0+XG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKT0+e2UucHJldmVudERlZmF1bHQoKSxjb25zb2xlLmxvZyh0aGlzLnN0YXRlKX19PlxuICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VUaXRsZX0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cInRpdGxlXCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VFbWFpbH0gdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJlbWFpbFwiPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9e3N0eWxlcy50ZXh0YXJlYX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlQXJlYX0gbmFtZT1cInRleHRhcmVhXCIgcGxhY2Vob2xkZXI9XCJ0aXBlXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnN1Ym1pdH0+IFN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIFxuICAgICAgICApXG4gICAgICAgIFxuICAgIH1cbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/postdata.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });