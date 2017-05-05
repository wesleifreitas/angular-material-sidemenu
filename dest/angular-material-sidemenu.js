/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _mdSidemenu = __webpack_require__(1);
	
	var _mdSidemenu2 = _interopRequireDefault(_mdSidemenu);
	
	var _mdSidemenuGroup = __webpack_require__(4);
	
	var _mdSidemenuGroup2 = _interopRequireDefault(_mdSidemenuGroup);
	
	var _mdSidemenuContent = __webpack_require__(6);
	
	var _mdSidemenuContent2 = _interopRequireDefault(_mdSidemenuContent);
	
	var _mdSidemenuButton = __webpack_require__(9);
	
	var _mdSidemenuButton2 = _interopRequireDefault(_mdSidemenuButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(function (angular) {
	
	  angular.module('ngMaterialSidemenu', ['ngMaterial']).directive(_mdSidemenu2.default.name, _mdSidemenu2.default.directive).directive(_mdSidemenuGroup2.default.name, _mdSidemenuGroup2.default.directive).directive(_mdSidemenuContent2.default.name, _mdSidemenuContent2.default.directive).directive(_mdSidemenuButton2.default.name, _mdSidemenuButton2.default.directive);
	})(angular);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _template = __webpack_require__(2);
	
	var _template2 = _interopRequireDefault(_template);
	
	var _link = __webpack_require__(3);
	
	var _link2 = _interopRequireDefault(_link);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var directive = function directive() {
	
	  return {
	    restrict: 'E',
	    scope: {
	      locked: '@?mdLocked'
	    },
	    replace: true,
	    transclude: true,
	    template: _template2.default,
	    link: _link2.default
	  };
	};
	
	exports.default = {
	  name: 'mdSidemenu',
	  directive: directive
	};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function ($element, $attributes) {
	
	  var locked = $attributes.locked && 'md-sidemenu-locked';
	
	  return '<div class="md-sidemenu ' + locked + '" ng-transclude></div>';
	};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function ($scope, $element, $attributes) {
	
	  $scope.$watch(function () {
	    return $attributes.locked;
	  }, function (locked) {
	    if (locked) {
	      $element[0].classList.add('md-sidemenu-locked');
	    } else {
	      $element[0].classList.remove('md-sidemenu-locked');
	    }
	  });
	};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _template = __webpack_require__(5);
	
	var _template2 = _interopRequireDefault(_template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var directive = function directive() {
	
	  return {
	    restrict: 'E',
	    replace: true,
	    transclude: true,
	    template: _template2.default
	  };
	};
	
	exports.default = {
	  name: 'mdSidemenuGroup',
	  directive: directive
	};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	
	  return '<div class="md-sidemenu-group" flex layout="column" layout-align="start start" ng-transclude></div>';
	};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _controller = __webpack_require__(7);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _template = __webpack_require__(8);
	
	var _template2 = _interopRequireDefault(_template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var directive = function directive() {
	
	    return {
	        restrict: 'E',
	        scope: {
	            heading: '@mdHeading',
	            icon: '@?mdIcon',
	            svgIcon: '@?mdSvgIcon',
	            arrow: '@?mdArrow',
	            visible: '=?mdOpened'
	        },
	        replace: true,
	        transclude: true,
	        template: _template2.default,
	        controller: _controller2.default,
	        controllerAs: '$mdSidemenuContent',
	        bindToController: true
	    };
	};
	
	exports.default = {
	    name: 'mdSidemenuContent',
	    directive: directive
	};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function () {
	
	    this.visible = this.visible || false;
	
	    this.changeState = function () {
	        this.visible = !this.visible;
	    };
	};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	
	  return "\n    <div class=\"md-sidemenu-content\" layout=\"column\">\n      <md-button class=\"md-sidemenu-toggle\" ng-if=\"$mdSidemenuContent.heading\" ng-click=\"$mdSidemenuContent.changeState();\" ng-class=\"{ 'md-active': $mdSidemenuContent.visible }\">\n        <div layout=\"row\">\n          <md-icon ng-if=\"$mdSidemenuContent.svgIcon\" md-svg-icon=\"$mdSidemenuContent.svgIcon\"></md-icon>\n          <md-icon ng-if=\"$mdSidemenuContent.icon\">{{ $mdSidemenuContent.icon }}</md-icon>\n          <span flex>{{ $mdSidemenuContent.heading }}</span>\n          <md-icon ng-if=\"$mdSidemenuContent.arrow\">keyboard_arrow_down</md-icon>\n        </div>\n      </md-button>\n\n      <div class=\"md-sidemenu-wrapper\" md-sidemenu-disable-animate ng-class=\"{ 'md-active': $mdSidemenuContent.visible, 'md-sidemenu-wrapper-icons':  $mdSidemenuContent.icon }\" layout=\"column\" ng-transclude></div>\n    </div>\n  ";
	};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _controller = __webpack_require__(10);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _template = __webpack_require__(11);
	
	var _template2 = _interopRequireDefault(_template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var directive = function directive() {
	
	  return {
	    restrict: 'E',
	    scope: {
	      uiSref: '@?',
	      uiSrefActive: '@?',
	      href: '@?',
	      target: '@?'
	    },
	    transclude: true,
	    template: _template2.default,
	    controller: _controller2.default,
	    controllerAs: '$mdSidemenuButton',
	    bindToController: true
	  };
	};
	
	exports.default = {
	  name: 'mdSidemenuButton',
	  directive: directive
	};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	
	  return "\n    <md-button\n      class=\"md-sidemenu-button\"\n      layout=\"column\"\n      ng-attr-href=\"{{ $mdSidemenuButton.href }}\"\n      ng-attr-ui-sref=\"{{ $mdSidemenuButton.uiSref }}\"\n      ng-attr-ui-sref-active=\"{{ $mdSidemenuButton.uiSrefActive }}\"\n      ng-attr-target=\"{{ $mdSidemenuButton.target }}\">\n      <div layout=\"row\" layout-fill layout-align=\"start center\" ng-transclude></div>\n    </md-button>\n  ";
	};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjk1OTFhZGYwNDJhMDc3YmRkMWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanM/MzQ3OSIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kU2lkZW1lbnUvaW5kZXguanM/NGM3MSIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51L3RlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kU2lkZW1lbnUvdGVtcGxhdGUuanM/NWNjNiIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudS9saW5rLmpzPzRmMzYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUdyb3VwL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVHcm91cC9pbmRleC5qcz9kODc0Iiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVHcm91cC90ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51R3JvdXAvdGVtcGxhdGUuanM/YzJjOSIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51Q29udGVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51Q29udGVudC9pbmRleC5qcz8wZmIwIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVDb250ZW50L2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUNvbnRlbnQvY29udHJvbGxlci5qcz9hYmE0Iiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVDb250ZW50L3RlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVDb250ZW50L3RlbXBsYXRlLmpzPzI4N2IiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUJ1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51QnV0dG9uL2luZGV4LmpzPzI5MjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUJ1dHRvbi9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVCdXR0b24vY29udHJvbGxlci5qcz8wODMzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVCdXR0b24vdGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUJ1dHRvbi90ZW1wbGF0ZS5qcz8wZmFlIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJkaXJlY3RpdmUiLCJuYW1lIiwicmVzdHJpY3QiLCJzY29wZSIsImxvY2tlZCIsInJlcGxhY2UiLCJ0cmFuc2NsdWRlIiwidGVtcGxhdGUiLCJsaW5rIiwiJGVsZW1lbnQiLCIkYXR0cmlidXRlcyIsIiRzY29wZSIsIiR3YXRjaCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImhlYWRpbmciLCJpY29uIiwic3ZnSWNvbiIsImFycm93IiwidmlzaWJsZSIsImNvbnRyb2xsZXIiLCJjb250cm9sbGVyQXMiLCJiaW5kVG9Db250cm9sbGVyIiwiY2hhbmdlU3RhdGUiLCJ1aVNyZWYiLCJ1aVNyZWZBY3RpdmUiLCJocmVmIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFF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QztTQUNBYztTQUNBQyxjQUFjO1NBQ2RDLGtCQUFrQjs7OztBRGlCMUIsU0FBUSxVQ1pPO0tBQ1h0QixNQUFNO0tBQ05EOzs7Ozs7O0FDMUJKOztBQUVBLFFBQU8sZUFBZSxTQUFTLGNBQWM7S0FDekMsT0FBTzs7O0FBR1gsU0FBUSxVQ05PLFlBQVc7O0tBRXRCLEtBQUtvQixVQUFVLEtBQUtBLFdBQVc7O0tBRS9CLEtBQUtJLGNBQWMsWUFBVztTQUMxQixLQUFLSixVQUFVLENBQUMsS0FBS0E7Ozs7Ozs7O0FDTDdCOztBQUVBLFFBQU8sZUFBZSxTQUFTLGNBQWM7R0FDM0MsT0FBTzs7O0FBR1QsU0FBUSxVQ05PLFlBQVc7O0dBRXhCOzs7Ozs7O0FDRkY7O0FBRUEsUUFBTyxlQUFlLFNBQVMsY0FBYztHQUMzQyxPQUFPOzs7QUNIVDs7QURRQSxLQUFJLGVBQWUsdUJBQXVCOztBQ1AxQzs7QURXQSxLQUFJLGFBQWEsdUJBQXVCOztBQUV4QyxVQUFTLHVCQUF1QixLQUFLLEVBQUUsT0FBTyxPQUFPLElBQUksYUFBYSxNQUFNLEVBQUUsU0FBUzs7QUNYdkYsS0FBSXBCLFlBQVksU0FBWkEsWUFBa0I7O0dBRXBCLE9BQU87S0FDTEUsVUFBVTtLQUNWQyxPQUFPO09BQ0xzQixRQUFRO09BQ1JDLGNBQWM7T0FDZEMsTUFBTTtPQUNOQyxRQUFROztLQUVWdEIsWUFBWTtLQUNaQztLQUNBYztLQUNBQyxjQUFjO0tBQ2RDLGtCQUFrQjs7OztBRGlCdEIsU0FBUSxVQ1pPO0dBQ2J0QixNQUFNO0dBQ05EOzs7Ozs7O0FDeEJGOztBQUVBLFFBQU8sZUFBZSxTQUFTLGNBQWM7R0FDM0MsT0FBTzs7O0FBR1QsU0FBUSxVQ05PLFlBQVcsRzs7Ozs7O0FDQTFCOztBQUVBLFFBQU8sZUFBZSxTQUFTLGNBQWM7R0FDM0MsT0FBTzs7O0FBR1QsU0FBUSxVQ05PLFlBQVc7O0dBRXhCIiwiZmlsZSI6ImFuZ3VsYXItbWF0ZXJpYWwtc2lkZW1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyOTU5MWFkZjA0MmEwNzdiZGQxZCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9tZFNpZGVtZW51ID0gcmVxdWlyZSgnLi9zY3JpcHRzL21kU2lkZW1lbnUnKTtcblxudmFyIF9tZFNpZGVtZW51MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21kU2lkZW1lbnUpO1xuXG52YXIgX21kU2lkZW1lbnVHcm91cCA9IHJlcXVpcmUoJy4vc2NyaXB0cy9tZFNpZGVtZW51R3JvdXAnKTtcblxudmFyIF9tZFNpZGVtZW51R3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWRTaWRlbWVudUdyb3VwKTtcblxudmFyIF9tZFNpZGVtZW51Q29udGVudCA9IHJlcXVpcmUoJy4vc2NyaXB0cy9tZFNpZGVtZW51Q29udGVudCcpO1xuXG52YXIgX21kU2lkZW1lbnVDb250ZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21kU2lkZW1lbnVDb250ZW50KTtcblxudmFyIF9tZFNpZGVtZW51QnV0dG9uID0gcmVxdWlyZSgnLi9zY3JpcHRzL21kU2lkZW1lbnVCdXR0b24nKTtcblxudmFyIF9tZFNpZGVtZW51QnV0dG9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21kU2lkZW1lbnVCdXR0b24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4oZnVuY3Rpb24gKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyLm1vZHVsZSgnbmdNYXRlcmlhbFNpZGVtZW51JywgWyduZ01hdGVyaWFsJ10pLmRpcmVjdGl2ZShfbWRTaWRlbWVudTIuZGVmYXVsdC5uYW1lLCBfbWRTaWRlbWVudTIuZGVmYXVsdC5kaXJlY3RpdmUpLmRpcmVjdGl2ZShfbWRTaWRlbWVudUdyb3VwMi5kZWZhdWx0Lm5hbWUsIF9tZFNpZGVtZW51R3JvdXAyLmRlZmF1bHQuZGlyZWN0aXZlKS5kaXJlY3RpdmUoX21kU2lkZW1lbnVDb250ZW50Mi5kZWZhdWx0Lm5hbWUsIF9tZFNpZGVtZW51Q29udGVudDIuZGVmYXVsdC5kaXJlY3RpdmUpLmRpcmVjdGl2ZShfbWRTaWRlbWVudUJ1dHRvbjIuZGVmYXVsdC5uYW1lLCBfbWRTaWRlbWVudUJ1dHRvbjIuZGVmYXVsdC5kaXJlY3RpdmUpO1xufSkoYW5ndWxhcik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4uanMiLCJpbXBvcnQgbWRTaWRlbWVudSBmcm9tICcuL3NjcmlwdHMvbWRTaWRlbWVudSc7XG5pbXBvcnQgbWRTaWRlbWVudUdyb3VwIGZyb20gJy4vc2NyaXB0cy9tZFNpZGVtZW51R3JvdXAnO1xuaW1wb3J0IG1kU2lkZW1lbnVDb250ZW50IGZyb20gJy4vc2NyaXB0cy9tZFNpZGVtZW51Q29udGVudCc7XG5pbXBvcnQgbWRTaWRlbWVudUJ1dHRvbiBmcm9tICcuL3NjcmlwdHMvbWRTaWRlbWVudUJ1dHRvbic7XG5cbigoYW5ndWxhcikgPT4ge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCduZ01hdGVyaWFsU2lkZW1lbnUnLCBbXG4gICAgICAnbmdNYXRlcmlhbCdcbiAgICBdKVxuICAgIC5kaXJlY3RpdmUobWRTaWRlbWVudS5uYW1lLCBtZFNpZGVtZW51LmRpcmVjdGl2ZSlcbiAgICAuZGlyZWN0aXZlKG1kU2lkZW1lbnVHcm91cC5uYW1lLCBtZFNpZGVtZW51R3JvdXAuZGlyZWN0aXZlKVxuICAgIC5kaXJlY3RpdmUobWRTaWRlbWVudUNvbnRlbnQubmFtZSwgbWRTaWRlbWVudUNvbnRlbnQuZGlyZWN0aXZlKVxuICAgIC5kaXJlY3RpdmUobWRTaWRlbWVudUJ1dHRvbi5uYW1lLCBtZFNpZGVtZW51QnV0dG9uLmRpcmVjdGl2ZSk7XG5cbn0pKGFuZ3VsYXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4uanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdGVtcGxhdGUgPSByZXF1aXJlKCcuL3RlbXBsYXRlJyk7XG5cbnZhciBfdGVtcGxhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGVtcGxhdGUpO1xuXG52YXIgX2xpbmsgPSByZXF1aXJlKCcuL2xpbmsnKTtcblxudmFyIF9saW5rMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpbmspO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZGlyZWN0aXZlID0gZnVuY3Rpb24gZGlyZWN0aXZlKCkge1xuXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICBzY29wZToge1xuICAgICAgbG9ja2VkOiAnQD9tZExvY2tlZCdcbiAgICB9LFxuICAgIHJlcGxhY2U6IHRydWUsXG4gICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICB0ZW1wbGF0ZTogX3RlbXBsYXRlMi5kZWZhdWx0LFxuICAgIGxpbms6IF9saW5rMi5kZWZhdWx0XG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIG5hbWU6ICdtZFNpZGVtZW51JyxcbiAgZGlyZWN0aXZlOiBkaXJlY3RpdmVcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudS9pbmRleC5qcyIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlJztcbmltcG9ydCBsaW5rIGZyb20gJy4vbGluayc7XG5cbmxldCBkaXJlY3RpdmUgPSAoKSA9PiB7XG5cbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHNjb3BlOiB7XG4gICAgICBsb2NrZWQ6ICdAP21kTG9ja2VkJ1xuICAgIH0sXG4gICAgcmVwbGFjZTogdHJ1ZSxcbiAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgIHRlbXBsYXRlLFxuICAgIGxpbmtcbiAgfTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRTaWRlbWVudScsXG4gIGRpcmVjdGl2ZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL21kU2lkZW1lbnUvaW5kZXguanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgkZWxlbWVudCwgJGF0dHJpYnV0ZXMpIHtcblxuICB2YXIgbG9ja2VkID0gJGF0dHJpYnV0ZXMubG9ja2VkICYmICdtZC1zaWRlbWVudS1sb2NrZWQnO1xuXG4gIHJldHVybiAnPGRpdiBjbGFzcz1cIm1kLXNpZGVtZW51ICcgKyBsb2NrZWQgKyAnXCIgbmctdHJhbnNjbHVkZT48L2Rpdj4nO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51L3RlbXBsYXRlLmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oJGVsZW1lbnQsICRhdHRyaWJ1dGVzKSB7XG5cbiAgbGV0IGxvY2tlZCA9ICRhdHRyaWJ1dGVzLmxvY2tlZCAmJiAnbWQtc2lkZW1lbnUtbG9ja2VkJztcblxuICByZXR1cm4gYDxkaXYgY2xhc3M9XCJtZC1zaWRlbWVudSAkeyBsb2NrZWQgfVwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+YDtcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudS90ZW1wbGF0ZS5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCRzY29wZSwgJGVsZW1lbnQsICRhdHRyaWJ1dGVzKSB7XG5cbiAgJHNjb3BlLiR3YXRjaChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICRhdHRyaWJ1dGVzLmxvY2tlZDtcbiAgfSwgZnVuY3Rpb24gKGxvY2tlZCkge1xuICAgIGlmIChsb2NrZWQpIHtcbiAgICAgICRlbGVtZW50WzBdLmNsYXNzTGlzdC5hZGQoJ21kLXNpZGVtZW51LWxvY2tlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkZWxlbWVudFswXS5jbGFzc0xpc3QucmVtb3ZlKCdtZC1zaWRlbWVudS1sb2NrZWQnKTtcbiAgICB9XG4gIH0pO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51L2xpbmsuanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigkc2NvcGUsICRlbGVtZW50LCAkYXR0cmlidXRlcykge1xuXG4gICRzY29wZS4kd2F0Y2goZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICRhdHRyaWJ1dGVzLmxvY2tlZDtcbiAgfSwgZnVuY3Rpb24obG9ja2VkKSB7XG4gICAgaWYgKGxvY2tlZCkge1xuICAgICAgJGVsZW1lbnRbMF0uY2xhc3NMaXN0LmFkZCgnbWQtc2lkZW1lbnUtbG9ja2VkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICRlbGVtZW50WzBdLmNsYXNzTGlzdC5yZW1vdmUoJ21kLXNpZGVtZW51LWxvY2tlZCcpO1xuICAgIH1cbiAgfSk7XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL21kU2lkZW1lbnUvbGluay5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90ZW1wbGF0ZSA9IHJlcXVpcmUoJy4vdGVtcGxhdGUnKTtcblxudmFyIF90ZW1wbGF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90ZW1wbGF0ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBkaXJlY3RpdmUgPSBmdW5jdGlvbiBkaXJlY3RpdmUoKSB7XG5cbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHJlcGxhY2U6IHRydWUsXG4gICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICB0ZW1wbGF0ZTogX3RlbXBsYXRlMi5kZWZhdWx0XG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIG5hbWU6ICdtZFNpZGVtZW51R3JvdXAnLFxuICBkaXJlY3RpdmU6IGRpcmVjdGl2ZVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51R3JvdXAvaW5kZXguanMiLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZSc7XG5cbmxldCBkaXJlY3RpdmUgPSAoKSA9PiB7XG5cbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHJlcGxhY2U6IHRydWUsXG4gICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICB0ZW1wbGF0ZVxuICB9O1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZFNpZGVtZW51R3JvdXAnLFxuICBkaXJlY3RpdmVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51R3JvdXAvaW5kZXguanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcblxuICByZXR1cm4gJzxkaXYgY2xhc3M9XCJtZC1zaWRlbWVudS1ncm91cFwiIGZsZXggbGF5b3V0PVwiY29sdW1uXCIgbGF5b3V0LWFsaWduPVwic3RhcnQgc3RhcnRcIiBuZy10cmFuc2NsdWRlPjwvZGl2Pic7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVHcm91cC90ZW1wbGF0ZS5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG4gIHJldHVybiAnPGRpdiBjbGFzcz1cIm1kLXNpZGVtZW51LWdyb3VwXCIgZmxleCBsYXlvdXQ9XCJjb2x1bW5cIiBsYXlvdXQtYWxpZ249XCJzdGFydCBzdGFydFwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+JztcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUdyb3VwL3RlbXBsYXRlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY29udHJvbGxlciA9IHJlcXVpcmUoJy4vY29udHJvbGxlcicpO1xuXG52YXIgX2NvbnRyb2xsZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29udHJvbGxlcik7XG5cbnZhciBfdGVtcGxhdGUgPSByZXF1aXJlKCcuL3RlbXBsYXRlJyk7XG5cbnZhciBfdGVtcGxhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGVtcGxhdGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZGlyZWN0aXZlID0gZnVuY3Rpb24gZGlyZWN0aXZlKCkge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgIGhlYWRpbmc6ICdAbWRIZWFkaW5nJyxcbiAgICAgICAgICAgIGljb246ICdAP21kSWNvbicsXG4gICAgICAgICAgICBzdmdJY29uOiAnQD9tZFN2Z0ljb24nLFxuICAgICAgICAgICAgYXJyb3c6ICdAP21kQXJyb3cnLFxuICAgICAgICAgICAgdmlzaWJsZTogJz0/bWRPcGVuZWQnXG4gICAgICAgIH0sXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgICAgIHRlbXBsYXRlOiBfdGVtcGxhdGUyLmRlZmF1bHQsXG4gICAgICAgIGNvbnRyb2xsZXI6IF9jb250cm9sbGVyMi5kZWZhdWx0LFxuICAgICAgICBjb250cm9sbGVyQXM6ICckbWRTaWRlbWVudUNvbnRlbnQnLFxuICAgICAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlXG4gICAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBuYW1lOiAnbWRTaWRlbWVudUNvbnRlbnQnLFxuICAgIGRpcmVjdGl2ZTogZGlyZWN0aXZlXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVDb250ZW50L2luZGV4LmpzIiwiaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlJztcblxubGV0IGRpcmVjdGl2ZSA9ICgpID0+IHtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICBoZWFkaW5nOiAnQG1kSGVhZGluZycsXG4gICAgICAgICAgICBpY29uOiAnQD9tZEljb24nLFxuICAgICAgICAgICAgc3ZnSWNvbjogJ0A/bWRTdmdJY29uJyxcbiAgICAgICAgICAgIGFycm93OiAnQD9tZEFycm93JyxcbiAgICAgICAgICAgIHZpc2libGU6ICc9P21kT3BlbmVkJ1xuICAgICAgICB9LFxuICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgICAgICB0ZW1wbGF0ZSxcbiAgICAgICAgY29udHJvbGxlcixcbiAgICAgICAgY29udHJvbGxlckFzOiAnJG1kU2lkZW1lbnVDb250ZW50JyxcbiAgICAgICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuICAgIH07XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnbWRTaWRlbWVudUNvbnRlbnQnLFxuICAgIGRpcmVjdGl2ZVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51Q29udGVudC9pbmRleC5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcblxuICAgIHRoaXMudmlzaWJsZSA9IHRoaXMudmlzaWJsZSB8fCBmYWxzZTtcblxuICAgIHRoaXMuY2hhbmdlU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9ICF0aGlzLnZpc2libGU7XG4gICAgfTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUNvbnRlbnQvY29udHJvbGxlci5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy52aXNpYmxlID0gdGhpcy52aXNpYmxlIHx8IGZhbHNlO1xuXG4gICAgdGhpcy5jaGFuZ2VTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnZpc2libGUgPSAhdGhpcy52aXNpYmxlO1xuICAgIH07XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51Q29udGVudC9jb250cm9sbGVyLmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcblxuICByZXR1cm4gXCJcXG4gICAgPGRpdiBjbGFzcz1cXFwibWQtc2lkZW1lbnUtY29udGVudFxcXCIgbGF5b3V0PVxcXCJjb2x1bW5cXFwiPlxcbiAgICAgIDxtZC1idXR0b24gY2xhc3M9XFxcIm1kLXNpZGVtZW51LXRvZ2dsZVxcXCIgbmctaWY9XFxcIiRtZFNpZGVtZW51Q29udGVudC5oZWFkaW5nXFxcIiBuZy1jbGljaz1cXFwiJG1kU2lkZW1lbnVDb250ZW50LmNoYW5nZVN0YXRlKCk7XFxcIiBuZy1jbGFzcz1cXFwieyAnbWQtYWN0aXZlJzogJG1kU2lkZW1lbnVDb250ZW50LnZpc2libGUgfVxcXCI+XFxuICAgICAgICA8ZGl2IGxheW91dD1cXFwicm93XFxcIj5cXG4gICAgICAgICAgPG1kLWljb24gbmctaWY9XFxcIiRtZFNpZGVtZW51Q29udGVudC5zdmdJY29uXFxcIiBtZC1zdmctaWNvbj1cXFwiJG1kU2lkZW1lbnVDb250ZW50LnN2Z0ljb25cXFwiPjwvbWQtaWNvbj5cXG4gICAgICAgICAgPG1kLWljb24gbmctaWY9XFxcIiRtZFNpZGVtZW51Q29udGVudC5pY29uXFxcIj57eyAkbWRTaWRlbWVudUNvbnRlbnQuaWNvbiB9fTwvbWQtaWNvbj5cXG4gICAgICAgICAgPHNwYW4gZmxleD57eyAkbWRTaWRlbWVudUNvbnRlbnQuaGVhZGluZyB9fTwvc3Bhbj5cXG4gICAgICAgICAgPG1kLWljb24gbmctaWY9XFxcIiRtZFNpZGVtZW51Q29udGVudC5hcnJvd1xcXCI+a2V5Ym9hcmRfYXJyb3dfZG93bjwvbWQtaWNvbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvbWQtYnV0dG9uPlxcblxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm1kLXNpZGVtZW51LXdyYXBwZXJcXFwiIG1kLXNpZGVtZW51LWRpc2FibGUtYW5pbWF0ZSBuZy1jbGFzcz1cXFwieyAnbWQtYWN0aXZlJzogJG1kU2lkZW1lbnVDb250ZW50LnZpc2libGUsICdtZC1zaWRlbWVudS13cmFwcGVyLWljb25zJzogICRtZFNpZGVtZW51Q29udGVudC5pY29uIH1cXFwiIGxheW91dD1cXFwiY29sdW1uXFxcIiBuZy10cmFuc2NsdWRlPjwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIFwiO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51Q29udGVudC90ZW1wbGF0ZS5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG4gIHJldHVybiBgXG4gICAgPGRpdiBjbGFzcz1cIm1kLXNpZGVtZW51LWNvbnRlbnRcIiBsYXlvdXQ9XCJjb2x1bW5cIj5cbiAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1zaWRlbWVudS10b2dnbGVcIiBuZy1pZj1cIiRtZFNpZGVtZW51Q29udGVudC5oZWFkaW5nXCIgbmctY2xpY2s9XCIkbWRTaWRlbWVudUNvbnRlbnQuY2hhbmdlU3RhdGUoKTtcIiBuZy1jbGFzcz1cInsgJ21kLWFjdGl2ZSc6ICRtZFNpZGVtZW51Q29udGVudC52aXNpYmxlIH1cIj5cbiAgICAgICAgPGRpdiBsYXlvdXQ9XCJyb3dcIj5cbiAgICAgICAgICA8bWQtaWNvbiBuZy1pZj1cIiRtZFNpZGVtZW51Q29udGVudC5zdmdJY29uXCIgbWQtc3ZnLWljb249XCIkbWRTaWRlbWVudUNvbnRlbnQuc3ZnSWNvblwiPjwvbWQtaWNvbj5cbiAgICAgICAgICA8bWQtaWNvbiBuZy1pZj1cIiRtZFNpZGVtZW51Q29udGVudC5pY29uXCI+e3sgJG1kU2lkZW1lbnVDb250ZW50Lmljb24gfX08L21kLWljb24+XG4gICAgICAgICAgPHNwYW4gZmxleD57eyAkbWRTaWRlbWVudUNvbnRlbnQuaGVhZGluZyB9fTwvc3Bhbj5cbiAgICAgICAgICA8bWQtaWNvbiBuZy1pZj1cIiRtZFNpZGVtZW51Q29udGVudC5hcnJvd1wiPmtleWJvYXJkX2Fycm93X2Rvd248L21kLWljb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tZC1idXR0b24+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJtZC1zaWRlbWVudS13cmFwcGVyXCIgbWQtc2lkZW1lbnUtZGlzYWJsZS1hbmltYXRlIG5nLWNsYXNzPVwieyAnbWQtYWN0aXZlJzogJG1kU2lkZW1lbnVDb250ZW50LnZpc2libGUsICdtZC1zaWRlbWVudS13cmFwcGVyLWljb25zJzogICRtZFNpZGVtZW51Q29udGVudC5pY29uIH1cIiBsYXlvdXQ9XCJjb2x1bW5cIiBuZy10cmFuc2NsdWRlPjwvZGl2PlxuICAgIDwvZGl2PlxuICBgO1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51Q29udGVudC90ZW1wbGF0ZS5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jb250cm9sbGVyID0gcmVxdWlyZSgnLi9jb250cm9sbGVyJyk7XG5cbnZhciBfY29udHJvbGxlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb250cm9sbGVyKTtcblxudmFyIF90ZW1wbGF0ZSA9IHJlcXVpcmUoJy4vdGVtcGxhdGUnKTtcblxudmFyIF90ZW1wbGF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90ZW1wbGF0ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBkaXJlY3RpdmUgPSBmdW5jdGlvbiBkaXJlY3RpdmUoKSB7XG5cbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHNjb3BlOiB7XG4gICAgICB1aVNyZWY6ICdAPycsXG4gICAgICB1aVNyZWZBY3RpdmU6ICdAPycsXG4gICAgICBocmVmOiAnQD8nLFxuICAgICAgdGFyZ2V0OiAnQD8nXG4gICAgfSxcbiAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgIHRlbXBsYXRlOiBfdGVtcGxhdGUyLmRlZmF1bHQsXG4gICAgY29udHJvbGxlcjogX2NvbnRyb2xsZXIyLmRlZmF1bHQsXG4gICAgY29udHJvbGxlckFzOiAnJG1kU2lkZW1lbnVCdXR0b24nLFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgbmFtZTogJ21kU2lkZW1lbnVCdXR0b24nLFxuICBkaXJlY3RpdmU6IGRpcmVjdGl2ZVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51QnV0dG9uL2luZGV4LmpzIiwiaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlJztcblxubGV0IGRpcmVjdGl2ZSA9ICgpID0+IHtcblxuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgc2NvcGU6IHtcbiAgICAgIHVpU3JlZjogJ0A/JyxcbiAgICAgIHVpU3JlZkFjdGl2ZTogJ0A/JyxcbiAgICAgIGhyZWY6ICdAPycsXG4gICAgICB0YXJnZXQ6ICdAPydcbiAgICB9LFxuICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgdGVtcGxhdGUsXG4gICAgY29udHJvbGxlcixcbiAgICBjb250cm9sbGVyQXM6ICckbWRTaWRlbWVudUJ1dHRvbicsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuICB9O1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZFNpZGVtZW51QnV0dG9uJyxcbiAgZGlyZWN0aXZlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUJ1dHRvbi9pbmRleC5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7fTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51QnV0dG9uL2NvbnRyb2xsZXIuanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUJ1dHRvbi9jb250cm9sbGVyLmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcblxuICByZXR1cm4gXCJcXG4gICAgPG1kLWJ1dHRvblxcbiAgICAgIGNsYXNzPVxcXCJtZC1zaWRlbWVudS1idXR0b25cXFwiXFxuICAgICAgbGF5b3V0PVxcXCJjb2x1bW5cXFwiXFxuICAgICAgbmctYXR0ci1ocmVmPVxcXCJ7eyAkbWRTaWRlbWVudUJ1dHRvbi5ocmVmIH19XFxcIlxcbiAgICAgIG5nLWF0dHItdWktc3JlZj1cXFwie3sgJG1kU2lkZW1lbnVCdXR0b24udWlTcmVmIH19XFxcIlxcbiAgICAgIG5nLWF0dHItdWktc3JlZi1hY3RpdmU9XFxcInt7ICRtZFNpZGVtZW51QnV0dG9uLnVpU3JlZkFjdGl2ZSB9fVxcXCJcXG4gICAgICBuZy1hdHRyLXRhcmdldD1cXFwie3sgJG1kU2lkZW1lbnVCdXR0b24udGFyZ2V0IH19XFxcIj5cXG4gICAgICA8ZGl2IGxheW91dD1cXFwicm93XFxcIiBsYXlvdXQtZmlsbCBsYXlvdXQtYWxpZ249XFxcInN0YXJ0IGNlbnRlclxcXCIgbmctdHJhbnNjbHVkZT48L2Rpdj5cXG4gICAgPC9tZC1idXR0b24+XFxuICBcIjtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUJ1dHRvbi90ZW1wbGF0ZS5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG4gIHJldHVybiBgXG4gICAgPG1kLWJ1dHRvblxuICAgICAgY2xhc3M9XCJtZC1zaWRlbWVudS1idXR0b25cIlxuICAgICAgbGF5b3V0PVwiY29sdW1uXCJcbiAgICAgIG5nLWF0dHItaHJlZj1cInt7ICRtZFNpZGVtZW51QnV0dG9uLmhyZWYgfX1cIlxuICAgICAgbmctYXR0ci11aS1zcmVmPVwie3sgJG1kU2lkZW1lbnVCdXR0b24udWlTcmVmIH19XCJcbiAgICAgIG5nLWF0dHItdWktc3JlZi1hY3RpdmU9XCJ7eyAkbWRTaWRlbWVudUJ1dHRvbi51aVNyZWZBY3RpdmUgfX1cIlxuICAgICAgbmctYXR0ci10YXJnZXQ9XCJ7eyAkbWRTaWRlbWVudUJ1dHRvbi50YXJnZXQgfX1cIj5cbiAgICAgIDxkaXYgbGF5b3V0PVwicm93XCIgbGF5b3V0LWZpbGwgbGF5b3V0LWFsaWduPVwic3RhcnQgY2VudGVyXCIgbmctdHJhbnNjbHVkZT48L2Rpdj5cbiAgICA8L21kLWJ1dHRvbj5cbiAgYDtcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUJ1dHRvbi90ZW1wbGF0ZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=