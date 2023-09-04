"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printWeather = exports.printHelp = exports.printSuccess = exports.printError = void 0;

var _chalk = _interopRequireDefault(require("chalk"));

var _dedentJs = _interopRequireDefault(require("dedent-js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    ", ": ", "\n    ", " ", " ", "\n    ", " ", " (feels like ", ")\n    ", " ", " %\n    ", " ", " m/s\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["", " \n    \u0411\u0435\u0437 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432 - \u0432\u044B\u0432\u043E\u0434 \u043F\u043E\u0433\u043E\u0434\u044B\n    -s [CITY] \u0434\u043B\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u0433\u043E\u0440\u043E\u0434\u0430\n    -h \u0434\u043B\u044F \u0432\u044B\u0432\u043E\u0434\u0430 \u043F\u043E\u043C\u043E\u0449\u0438\n    -t [API KEY] \u0434\u043B\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u0442\u043E\u043A\u0435\u043D\u0430  \n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var printError = function printError(error) {
  console.log("".concat(_chalk["default"].bgRedBright(" ERROR "), " ").concat(error));
};

exports.printError = printError;

var printSuccess = function printSuccess(message) {
  console.log("".concat(_chalk["default"].bgGreen(" SUCCESS "), " ").concat(message));
};

exports.printSuccess = printSuccess;

var printHelp = function printHelp() {
  console.log((0, _dedentJs["default"])(_templateObject(), _chalk["default"].bgYellow(" HELP ")));
};

exports.printHelp = printHelp;

var printWeather = function printWeather(weather, icon) {
  console.log((0, _dedentJs["default"])(_templateObject2(), _chalk["default"].bgGreen("WEATHER:"), _chalk["default"].cyanBright("City"), weather.name, _chalk["default"].green("Description:"), weather.weather[0].description, icon, _chalk["default"].grey("Tempeature:"), weather.main.temp, weather.main.feels_like, _chalk["default"].blueBright("Humidity:"), weather.main.humidity, _chalk["default"].yellowBright("Wind speed:"), weather.wind.speed));
};

exports.printWeather = printWeather;