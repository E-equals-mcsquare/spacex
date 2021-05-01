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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/App */ \"./src/App.js\");\n\n\n\n\n\n\nconst PORT = process.env.PORT || 3006;\nconst app = express__WEBPACK_IMPORTED_MODULE_3___default()();\napp.get('/', (req, res) => {\n  const app = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null));\n  const indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve('./build/index.html');\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, 'utf8', (err, data) => {\n    if (err) {\n      console.error('Something went wrong:', err);\n      return res.status(500).send('Oops, better luck next time!');\n    }\n\n    return res.send(data.replace('<div id=\"root\"></div>', `<div id=\"root\">${app}</div>`));\n  });\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default.a.static('./build'));\napp.listen(PORT, () => {\n  console.log(`Server is listening on port ${PORT}`);\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> .App {\\n|   text-align: center;\\n|   padding: 10px;\");\n\n//# sourceURL=webpack:///./src/App.css?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.css */ \"./src/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dashboard/Dashboard */ \"./src/components/dashboard/Dashboard.js\");\n/* harmony import */ var _components_footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/Footer */ \"./src/components/footer/Footer.js\");\n/* harmony import */ var _components_header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/Header */ \"./src/components/header/Header.js\");\n\n\n\n\n\nlet locationParams = window.location.href.split(\"/\");\nlet launchyear = locationParams[locationParams.length - 3];\nlet successfullaunch = locationParams[locationParams.length - 2];\nlet successfulland = locationParams[locationParams.length - 1];\nlet redirectUrl = \"\";\n\nif (launchyear == \"\" || successfullaunch == \"\" || successfulland == \"\") {\n  redirectUrl = \"/0/0/0\";\n} else {\n  redirectUrl = \"/\" + launchyear + \"/\" + successfullaunch + \"/\" + successfulland;\n}\n\nfunction App() {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"App\"\n  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"HashRouter\"], null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/\"\n  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Redirect\"], {\n    to: redirectUrl\n  }), /*#__PURE__*/React.createElement(_components_header_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), /*#__PURE__*/React.createElement(_components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/React.createElement(_components_footer_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    default: true,\n    path: \"/:launchyear/:successfullaunch/:successfulland\"\n  }, /*#__PURE__*/React.createElement(_components_header_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), /*#__PURE__*/React.createElement(_components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/React.createElement(_components_footer_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/components/dashboard/Dashboard.js":
/*!***********************************************!*\
  !*** ./src/components/dashboard/Dashboard.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _filterpanel_FilterPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../filterpanel/FilterPanel */ \"./src/components/filterpanel/FilterPanel.js\");\n/* harmony import */ var _tilesgroup_TilesGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tilesgroup/TilesGroup */ \"./src/components/tilesgroup/TilesGroup.js\");\n/* harmony import */ var _Dashboard_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Dashboard.module.css */ \"./src/components/dashboard/Dashboard.module.css\");\n/* harmony import */ var _Dashboard_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nclass Dashboard extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: _Dashboard_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.dashboard\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_filterpanel_FilterPanel__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tilesgroup_TilesGroup__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null));\n  }\n\n}\n\nconst dashboardStateToPros = state => {\n  return { ...state.dashboard\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(dashboardStateToPros)(Dashboard));\n\n//# sourceURL=webpack:///./src/components/dashboard/Dashboard.js?");

/***/ }),

/***/ "./src/components/dashboard/Dashboard.module.css":
/*!*******************************************************!*\
  !*** ./src/components/dashboard/Dashboard.module.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> .dashboard {\\n|     display: flex;\\n|     flex-direction: row;\");\n\n//# sourceURL=webpack:///./src/components/dashboard/Dashboard.module.css?");

/***/ }),

/***/ "./src/components/filterpanel/FilterPanel.js":
/*!***************************************************!*\
  !*** ./src/components/filterpanel/FilterPanel.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _FilterPanel_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FilterPanel.module.css */ \"./src/components/filterpanel/FilterPanel.module.css\");\n/* harmony import */ var _FilterPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_FilterPanel_module_css__WEBPACK_IMPORTED_MODULE_3__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nclass FilterPanel extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"onLoadYears\", () => {\n      debugger;\n      let serviceUrl = process.env.REACT_APP_SERVICE_URL;\n      fetch(serviceUrl).then(response => response.json()).then(json => {\n        let data = json;\n        const dataUnique = [];\n        const map = new Map();\n\n        for (const item of data) {\n          if (!map.has(item.launch_year)) {\n            map.set(item.launch_year, true);\n            dataUnique.push({\n              launch_year: item.launch_year\n            });\n          }\n        }\n\n        this.setState({\n          dataUnique: dataUnique\n        });\n      }).catch(error => {\n        this.setState({\n          dataUnique: [{\n            launch_year: \"No Data Available\"\n          }]\n        });\n      });\n    });\n\n    _defineProperty(this, \"onFilterByYear\", event => {\n      let locationParams = window.location.href.split(\"/\");\n      let launchyear = event.currentTarget.innerText;\n      let successfullaunch = locationParams[locationParams.length - 2];\n      let successfulland = locationParams[locationParams.length - 1];\n      let currentClass = event.target.className;\n\n      if (currentClass.includes(\"filterselected\")) {\n        event.target.className = _FilterPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.filter;\n        this.props.history.replace(`/` + \"0\" + `/` + successfullaunch + `/` + successfulland);\n      } else {\n        event.target.className = _FilterPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.filterselected;\n        this.props.history.replace(`/` + launchyear + `/` + successfullaunch + `/` + successfulland);\n      }\n\n      this.applyFilter();\n    });\n\n    _defineProperty(this, \"onFilterByLaunch\", event => {\n      let locationParams = window.location.href.split(\"/\");\n      let successfullaunch = event.currentTarget.innerText;\n      let launchyear = locationParams[locationParams.length - 3];\n      let successfulland = locationParams[locationParams.length - 1];\n      let currentClass = event.target.className;\n\n      if (currentClass.includes(\"filterselected\")) {\n        event.target.className = _FilterPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.filter;\n        this.props.history.replace(`/` + launchyear + `/` + \"0\" + `/` + successfulland);\n      } else {\n        event.target.className = _FilterPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.filterselected;\n        this.props.history.replace(`/` + launchyear + `/` + successfullaunch + `/` + successfulland);\n      }\n\n      this.applyFilter();\n    });\n\n    _defineProperty(this, \"onFilterByLand\", event => {\n      let locationParams = window.location.href.split(\"/\");\n      let successfulland = event.currentTarget.innerText;\n      let successfullaunch = locationParams[locationParams.length - 2];\n      let launchyear = locationParams[locationParams.length - 3];\n      let currentClass = event.target.className;\n\n      if (currentClass.includes(\"filterselected\")) {\n        event.target.className = _FilterPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.filter;\n        this.props.history.replace(`/` + launchyear + `/` + successfullaunch + `/` + \"0\");\n      } else {\n        event.target.className = _FilterPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.filterselected;\n        this.props.history.replace(`/` + launchyear + `/` + successfullaunch + `/` + successfulland);\n      }\n\n      this.applyFilter();\n    });\n\n    _defineProperty(this, \"applyFilter\", () => {\n      let locationParams = window.location.href.split(\"/\");\n      let successfulland = locationParams[locationParams.length - 1];\n      let successfullaunch = locationParams[locationParams.length - 2];\n      let launchyear = locationParams[locationParams.length - 3];\n\n      if (launchyear == 0 && successfullaunch == 0 && successfulland == 0) {\n        this.props.dispatch({\n          type: \"serviceUrl\",\n          serviceUrl: process.env.REACT_APP_SERVICE_URL\n        });\n      } else if (launchyear == 0 && successfullaunch == 0 && successfulland != 0) {\n        this.props.dispatch({\n          type: \"serviceUrl\",\n          serviceUrl: process.env.REACT_APP_SERVICE_URL + \"&land_success=\" + successfulland.toLowerCase()\n        });\n      } else if (launchyear == 0 && successfullaunch != 0 && successfulland == 0) {\n        this.props.dispatch({\n          type: \"serviceUrl\",\n          serviceUrl: process.env.REACT_APP_SERVICE_URL + \"&launch_success=\" + successfullaunch.toLowerCase()\n        });\n      } else if (launchyear == 0 && successfullaunch != 0 && successfulland != 0) {\n        this.props.dispatch({\n          type: \"serviceUrl\",\n          serviceUrl: process.env.REACT_APP_SERVICE_URL + \"&launch_success=\" + successfullaunch.toLowerCase() + \"&land_success=\" + successfulland.toLowerCase()\n        });\n      } else if (launchyear != 0 && successfullaunch == 0 && successfulland == 0) {\n        this.props.dispatch({\n          type: \"serviceUrl\",\n          serviceUrl: process.env.REACT_APP_SERVICE_URL + \"&launch_year=\" + launchyear\n        });\n      } else if (launchyear != 0 && successfullaunch == 0 && successfulland != 0) {\n        this.props.dispatch({\n          type: \"serviceUrl\",\n          serviceUrl: process.env.REACT_APP_SERVICE_URL + \"&launch_year=\" + launchyear + \"&land_success=\" + successfulland.toLowerCase()\n        });\n      } else if (launchyear != 0 && successfullaunch != 0 && successfulland == 0) {\n        this.props.dispatch({\n          type: \"serviceUrl\",\n          serviceUrl: process.env.REACT_APP_SERVICE_URL + \"&launch_year=\" + launchyear + \"&launch_success=\" + successfullaunch.toLowerCase()\n        });\n      } else if (launchyear != 0 && successfullaunch != 0 && successfulland != 0) {\n        this.props.dispatch({\n          type: \"serviceUrl\",\n          serviceUrl: process.env.REACT_APP_SERVICE_URL + \"&launch_year=\" + launchyear + \"&launch_success=\" + successfullaunch.toLowerCase() + \"&land_success=\" + successfulland.toLowerCase()\n        });\n      }\n    });\n\n    this.state = {\n      busystate: false,\n      dataUnique: [],\n      launchland: [\"True\", \"False\"],\n      yearevent: \"\",\n      samecounter: 0,\n      doubleclickstateyear: 0,\n      yearclicked: false\n    };\n  }\n\n  componentDidMount() {\n    this.setState({\n      busystate: true\n    });\n    this.onLoadYears();\n    this.applyFilter();\n  }\n\n  componentDidUpdate() {// let allElements = document.getElementsByClassName(styles.filterselected);\n    // for (var i = 0; i < allElements.length; i++) {\n    //   allElements[i].className = styles.filter;\n    // }\n    // if (this.state.yearevent.target != undefined) {\n    //   this.state.yearevent.target.className = styles.filterselected;\n    // }\n  }\n\n  render() {\n    let locationParams = window.location.href.split(\"/\");\n    let launchyear = locationParams[locationParams.length - 3];\n    let successfullaunch = locationParams[locationParams.length - 2];\n    let successfulland = locationParams[locationParams.length - 1];\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: _FilterPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.filterpanel\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: _FilterPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header\n    }, \"Filters\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: _FilterPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.filtertitle\n    }, \"Launch Year\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: _FilterPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.filtergroup\n    }, this.state.dataUnique.map(obj => {\n      let filterstyleyear = \"\";\n\n      if (launchyear == obj.launch_year) {\n        filterstyleyear = _FilterPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.filterselected;\n      } else {\n        filterstyleyear = _FilterPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.filter;\n      }\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: filterstyleyear,\n        onClick: this.onFilterByYear\n      }, obj.launch_year);\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: _FilterPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.filtertitle\n    }, \"Succesful Launch\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: _FilterPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.filtergroup\n    }, this.state.launchland.map(obj => {\n      let filterstylelaunch = \"\";\n\n      if (successfullaunch == \"True\" && obj == \"True\" || successfullaunch == \"False\" && obj == \"False\") {\n        filterstylelaunch = _FilterPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.filterselected;\n      } else {\n        filterstylelaunch = _FilterPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.filter;\n      }\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: filterstylelaunch,\n        onClick: this.onFilterByLaunch\n      }, obj);\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: _FilterPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.filtertitle\n    }, \"Succesful Landing\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: _FilterPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.filtergroup\n    }, this.state.launchland.map(obj => {\n      let filterstyleland = \"\";\n\n      if (successfulland == \"True\" && obj == \"True\" || successfulland == \"False\" && obj == \"False\") {\n        filterstyleland = _FilterPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.filterselected;\n      } else {\n        filterstyleland = _FilterPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.filter;\n      }\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: filterstyleland,\n        onClick: this.onFilterByLand\n      }, obj);\n    })));\n  }\n\n}\n\nconst dashboardStateToPros = state => {\n  return { ...state.dashboard\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_1__[\"withRouter\"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(dashboardStateToPros)(FilterPanel)));\n\n//# sourceURL=webpack:///./src/components/filterpanel/FilterPanel.js?");

/***/ }),

/***/ "./src/components/filterpanel/FilterPanel.module.css":
/*!***********************************************************!*\
  !*** ./src/components/filterpanel/FilterPanel.module.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> .filterpanel {\\n|     background-color: #1d1d1d;\\n|     border: none;\");\n\n//# sourceURL=webpack:///./src/components/filterpanel/FilterPanel.module.css?");

/***/ }),

/***/ "./src/components/footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.module.css */ \"./src/components/footer/Footer.module.css\");\n/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction Footer() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer\n  }, \"Developed by Souvik Majumder\");\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\n\n//# sourceURL=webpack:///./src/components/footer/Footer.js?");

/***/ }),

/***/ "./src/components/footer/Footer.module.css":
/*!*************************************************!*\
  !*** ./src/components/footer/Footer.module.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> .footer {\\n|     color: #ffffff;\\n|     background-color: #000000;\");\n\n//# sourceURL=webpack:///./src/components/footer/Footer.module.css?");

/***/ }),

/***/ "./src/components/header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/header/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.module.css */ \"./src/components/header/Header.module.css\");\n/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Header_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction Header() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _Header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header\n  }, \"SpaceX Launch Programs\");\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./src/components/header/Header.js?");

/***/ }),

/***/ "./src/components/header/Header.module.css":
/*!*************************************************!*\
  !*** ./src/components/header/Header.module.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> .header {\\n|   color: #ffffff;\\n|   background-color: #000000;\");\n\n//# sourceURL=webpack:///./src/components/header/Header.module.css?");

/***/ }),

/***/ "./src/components/tilesgroup/TilesGroup.js":
/*!*************************************************!*\
  !*** ./src/components/tilesgroup/TilesGroup.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _TilesGroup_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TilesGroup.module.css */ \"./src/components/tilesgroup/TilesGroup.module.css\");\n/* harmony import */ var _TilesGroup_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_TilesGroup_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _tile_Tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tile/Tile */ \"./src/components/tilesgroup/tile/Tile.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nclass TilesGroup extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"updateData\", () => {\n      let serviceUrl = this.props.serviceUrl;\n      fetch(serviceUrl).then(response => response.json()).then(json => {\n        this.setState({\n          data: json,\n          busystate: false\n        });\n      }).catch(error => {\n        this.setState({\n          data: [\"No Data Available\"]\n        });\n      });\n    });\n\n    this.state = {\n      data: [],\n      busystate: false\n    };\n  }\n\n  componentDidMount() {\n    this.setState({\n      busystate: true\n    });\n    this.updateData();\n  }\n\n  componentDidUpdate() {\n    this.updateData();\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: _TilesGroup_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.tilesgroup\n    }, this.state.data.map(obj => {\n      let flightimageurl = obj.links.flickr_images[2];\n\n      if (!flightimageurl) {\n        flightimageurl = \"https://www.spacex.com/static/images/mission/mission-slider-02.webp\";\n      }\n\n      let missionids = obj.mission_id;\n\n      if (missionids.length < 1) {\n        missionids = [\"Not Available\"];\n      }\n\n      let successfullaunch = obj.launch_success;\n\n      if (successfullaunch != null) {\n        successfullaunch = successfullaunch.toString();\n      } else {\n        successfullaunch = \"Not Available\";\n      }\n\n      let successfulland = obj.rocket.first_stage.cores[0].land_success;\n\n      if (successfulland != null) {\n        successfulland = successfulland.toString();\n      } else {\n        successfulland = \"Not Available\";\n      }\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tile_Tile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        flightimageurl: flightimageurl,\n        missionids: missionids,\n        missionname: obj.mission_name + \" \" + obj.flight_number,\n        launchyear: obj.launch_year,\n        successfullaunch: successfullaunch,\n        successfulland: successfulland\n      });\n    }));\n  }\n\n}\n\nconst dashboardStateToPros = state => {\n  return { ...state.dashboard\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(dashboardStateToPros)(TilesGroup));\n\n//# sourceURL=webpack:///./src/components/tilesgroup/TilesGroup.js?");

/***/ }),

/***/ "./src/components/tilesgroup/TilesGroup.module.css":
/*!*********************************************************!*\
  !*** ./src/components/tilesgroup/TilesGroup.module.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> .tilesgroup {\\n|   display: grid;\\n|   grid-template-columns: repeat(4, 1fr);\");\n\n//# sourceURL=webpack:///./src/components/tilesgroup/TilesGroup.module.css?");

/***/ }),

/***/ "./src/components/tilesgroup/tile/Tile.js":
/*!************************************************!*\
  !*** ./src/components/tilesgroup/tile/Tile.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Tile_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tile.module.css */ \"./src/components/tilesgroup/tile/Tile.module.css\");\n/* harmony import */ var _Tile_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Tile_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction Tile(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _Tile_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.tile\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: _Tile_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.flightlogo,\n    src: props.flightimageurl,\n    alt: props.missioname\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _Tile_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.missiontitle\n  }, props.missionname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _Tile_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.kpititle\n  }, \"Mission Ids:\"), props.missionids.map(obj => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: _Tile_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.kpivalue\n    }, \"\\u2022 \", obj);\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _Tile_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.kpititle\n  }, \"Launch Year: \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: _Tile_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.kpivalue\n  }, props.launchyear)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _Tile_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.kpititle\n  }, \"Successful Launch: \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: _Tile_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.kpivalue\n  }, props.successfullaunch)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _Tile_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.kpititle\n  }, \"Successful Landing: \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: _Tile_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.kpivalue\n  }, props.successfulland)));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tile);\n\n//# sourceURL=webpack:///./src/components/tilesgroup/tile/Tile.js?");

/***/ }),

/***/ "./src/components/tilesgroup/tile/Tile.module.css":
/*!********************************************************!*\
  !*** ./src/components/tilesgroup/tile/Tile.module.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> .tile {\\n|   background-image: linear-gradient(359deg, black, #2f2f2f9e);\\n|   padding: 15px;\");\n\n//# sourceURL=webpack:///./src/components/tilesgroup/tile/Tile.module.css?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });