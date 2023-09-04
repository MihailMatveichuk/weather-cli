"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIcon = exports.getWeather = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _storageService = require("./storage.service.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getIcon = function getIcon(icon) {
  switch (icon.slice(0, -1)) {
    case "01":
      return "☀️";

    case "02":
      return "⛅";

    case "03":
      return "☁";

    case "04":
      return "⛅";

    case "09":
      return "🌨️";

    case "10":
      return "🌦️";

    case "11":
      return "🌩️";

    case "13":
      return "❄️";

    case "50":
      return "🌫️";
  }
};

exports.getIcon = getIcon;

var getWeather = function getWeather(city) {
  var TOKEN, _ref, data;

  return regeneratorRuntime.async(function getWeather$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _storageService.getKeyValue)(_storageService.TOKEN_DICTIONARY.token));

        case 2:
          TOKEN = _context.sent;

          if (TOKEN) {
            _context.next = 5;
            break;
          }

          throw new Error("We dont have API key!! Make it with commant -t [API_KEY]");

        case 5:
          _context.next = 7;
          return regeneratorRuntime.awrap(_axios["default"].get("https://api.openweathermap.org/data/2.5/weather", {
            params: {
              q: city,
              appid: TOKEN,
              lang: "ru",
              units: "metric"
            }
          }));

        case 7:
          _ref = _context.sent;
          data = _ref.data;
          return _context.abrupt("return", data);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.getWeather = getWeather;