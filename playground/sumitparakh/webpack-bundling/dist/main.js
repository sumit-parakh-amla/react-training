/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/addTask.js":
/*!************************!*\
  !*** ./src/addTask.js ***!
  \************************/
/*! exports provided: addTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addTask\", function() { return addTask; });\n/* harmony import */ var _deleteTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteTask */ \"./src/deleteTask.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _taskList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskList */ \"./src/taskList.js\");\n\r\n\r\n\r\n\r\nfunction addTask(e) {\r\n    if (e.keyCode === 13 && e.target.value) {\r\n        _data__WEBPACK_IMPORTED_MODULE_1__[\"taskList\"].push(e.target.value);\r\n\r\n        Object(_taskList__WEBPACK_IMPORTED_MODULE_2__[\"renderTaskList\"])();\r\n        e.target.value = '';\r\n        e.target.focus();\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/addTask.js?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! exports provided: taskList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"taskList\", function() { return taskList; });\nconst taskList = [];\n\n//# sourceURL=webpack:///./src/data.js?");

/***/ }),

/***/ "./src/deleteTask.js":
/*!***************************!*\
  !*** ./src/deleteTask.js ***!
  \***************************/
/*! exports provided: getDeleteButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDeleteButton\", function() { return getDeleteButton; });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _taskList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskList */ \"./src/taskList.js\");\n\r\n\r\n\r\nfunction getDeleteButton(index) {\r\n    const deleteBtn = document.createElement('i');\r\n    deleteBtn.className = 'fa fa-trash float-right';\r\n    deleteBtn.dataset['index'] = index;\r\n    deleteBtn.onclick = deleteImage;\r\n    return deleteBtn;\r\n}\r\n\r\nfunction deleteImage(e) {\r\n    _data__WEBPACK_IMPORTED_MODULE_0__[\"taskList\"].splice(e.target.dataset.index, 1);\r\n    Object(_taskList__WEBPACK_IMPORTED_MODULE_1__[\"renderTaskList\"])();\r\n}\n\n//# sourceURL=webpack:///./src/deleteTask.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _addTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTask */ \"./src/addTask.js\");\n\r\n\r\nwindow.onload = () => {\r\n    var taskElement = document.getElementById('task');\r\n    taskElement.onkeydown = _addTask__WEBPACK_IMPORTED_MODULE_0__[\"addTask\"]\r\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/taskList.js":
/*!*************************!*\
  !*** ./src/taskList.js ***!
  \*************************/
/*! exports provided: renderTaskList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderTaskList\", function() { return renderTaskList; });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _deleteTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteTask */ \"./src/deleteTask.js\");\n\r\n\r\n\r\nfunction renderTaskList() {\r\n    const taskListElement = document.getElementById('taskList');\r\n    taskListElement.innerHTML = '';\r\n    \r\n    _data__WEBPACK_IMPORTED_MODULE_0__[\"taskList\"].map((task, index) => {\r\n        const listItem = document.createElement('li');\r\n        listItem.className = 'list-group-item';\r\n\r\n        listItem.append(task);\r\n        listItem.appendChild(Object(_deleteTask__WEBPACK_IMPORTED_MODULE_1__[\"getDeleteButton\"])(index));\r\n        taskListElement.appendChild(listItem);\r\n    });\r\n}\n\n//# sourceURL=webpack:///./src/taskList.js?");

/***/ })

/******/ });