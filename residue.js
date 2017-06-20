"use strict";

/*;
              	@submodule-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-submodule-license
              
              	@submodule-configuration:
              		{
              			"package": "katalyz",
              			"path": "katalyz/residue.module.js",
              			"file": "residue.module.js",
              			"module": "katalyz",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/katalyz.git",
              			"test": "katalyz-test.js",
              			"global": false,
              			"class": true,
              			"internal": true
              		}
              	@end-submodule-configuration
              
              	@submodule-documentation:
              		Residue class factory.
              	@end-submodule-documentation
              
              	@include:
              		{
              			"difpro": "difpro",
              			"dscrb": "dscrb",
              			"kein": "kein"
              		}
              	@end-include
              */var _defineProperty2 = require("babel-runtime/helpers/defineProperty");var _defineProperty3 = _interopRequireDefault(_defineProperty2);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var difpro = require("difpro");
var dscrb = require("dscrb");
var kein = require("kein");

var STATIC = (0, _for2.default)("static");
var PROTOTYPE = (0, _for2.default)("prototype");var

Residue = function () {
	function Residue() {(0, _classCallCheck3.default)(this, Residue);
		this[STATIC] = {};
		this[PROTOTYPE] = {};

		return this;
	}(0, _createClass3.default)(Residue, [{ key: "collect", value: function collect(

		blueprint) {var _this = this;
			this[STATIC] = difpro(this[STATIC], blueprint).
			reduce(function (residue, property) {
				if (property !== "prototype") {
					if (kein(property, _this[STATIC])) {
						residue[property] = _this[STATIC][property];

					} else if (kein(property, blueprint)) {
						residue[property] = dscrb(property, blueprint);
					}
				}

				return residue;
			}, {});

			this[PROTOTYPE] = difpro(this[PROTOTYPE], blueprint.prototype).
			reduce(function (residue, property) {
				if (property !== "constructor" && property !== "initialize") {
					if (kein(property, _this[PROTOTYPE])) {
						residue[property] = _this[PROTOTYPE][property];

					} else if (kein(property, blueprint.prototype)) {
						residue[property] = dscrb(property, blueprint.prototype);
					}
				}

				return residue;
			}, {});

			return this;
		} }, { key: "get", value: function get()

		{var _ref;
			return _ref = {}, (0, _defineProperty3.default)(_ref,
			STATIC, this[STATIC]), (0, _defineProperty3.default)(_ref,
			PROTOTYPE, this[PROTOTYPE]), _ref;

		} }]);return Residue;}();


module.exports = Residue;

//# sourceMappingURL=residue.js.map