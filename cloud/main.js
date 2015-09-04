/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _functions = __webpack_require__(1);

	Parse.Cloud.define("hello", _functions.hello);
	Parse.Cloud.define("recentUsers", recentusers);
	Parse.Cloud.define("GameScore_alltime_high", _functions.GameScore_alltime_high);

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.hello = hello;
	exports.recentUsers = recentUsers;
	exports.GameScore_alltime_high = GameScore_alltime_high;

	function hello(request, response) {
	  response.success("Hello world!");
	}

	function recentUsers(request, response) {
	  var query = new Parse.Query(Parse.User);
	  query.descending("createdAt");
	  query.find({
	    success: function success(users) {
	      response.success(users);
	    },
	    error: function error(_error) {
	      alert("Error: " + _error.code + " " + _error.message);
	    }
	  });
	}

	function GameScore_alltime_high(request, response) {
	  var query = new Parse.Query(Parse.User);
	  query.find({
	    success: function success(users) {
	      response.success(users);
	    },
	    error: function error(_error2) {
	      alert("Error: " + _error2.code + " " + _error2.message);
	    }
	  });
	}

/***/ }
/******/ ]);