'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

/**
 * Get crimes from UK by location
 *
 * @param {Object} center – Location of the query
 * @param {String|Number} center.lat – Latitude co-ordinates
 * @param {String|Number} center.lng – Longitude co-ordinates
 * @returns {Object} – Crime object for consumption
 */

var getCrime = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(center) {
    var latestDate, resp, json, crimes, categories;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('https://data.police.uk/api/crimes-street-dates').then(function (x) {
              return x.json();
            }).then(function (x) {
              return x[0].date;
            });

          case 2:
            latestDate = _context.sent;
            _context.next = 5;
            return fetch('https://data.police.uk/api/crimes-street/all-crime?lat=' + center.lat + '&lng=' + center.lng + '&date=' + latestDate);

          case 5:
            resp = _context.sent;
            _context.next = 8;
            return resp.json();

          case 8:
            json = _context.sent;
            crimes = json.map(function (x) {
              return {
                category: x.category.replace(/\-/g, ' '),
                lat: Number(x.location.latitude),
                lng: Number(x.location.longitude)
              };
            });

            // Get crime categories and their frequencies in the data

            categories = crimes.map(function (c) {
              return c.category;
            }).reduce(function (acc, cur) {
              var index = acc.labels.indexOf(cur);
              if (index < 0) {
                acc.labels.push(cur);
                acc.series[0].push(1);
              } else {
                acc.series[0][index] = acc.series[0][index] + 1;
              }
              return acc;
            }, {
              labels: [],
              series: [[]]
            });
            return _context.abrupt('return', {
              center: center,
              crimes: crimes,
              categories: categories
            });

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function getCrime(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = getCrime;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9saWIvZ2V0Q3JpbWUuanMiXSwibmFtZXMiOlsiZ2V0Q3JpbWUiLCJjZW50ZXIiLCJmZXRjaCIsInRoZW4iLCJ4IiwianNvbiIsImRhdGUiLCJsYXRlc3REYXRlIiwibGF0IiwibG5nIiwicmVzcCIsImNyaW1lcyIsIm1hcCIsImNhdGVnb3J5IiwicmVwbGFjZSIsIk51bWJlciIsImxvY2F0aW9uIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJjYXRlZ29yaWVzIiwiYyIsInJlZHVjZSIsImFjYyIsImN1ciIsImluZGV4IiwibGFiZWxzIiwiaW5kZXhPZiIsInB1c2giLCJzZXJpZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7QUFTQSxJQUFNLHVCQUFBO3NGQUFXLGlCQUFBLEFBQU8sUUFBUDt3Q0FBQTtrRUFBQTtnQkFBQTt5Q0FBQTtlQUFBOzRCQUFBO3lCQUNVLEFBQU0sa0RBQU4sQUFDdEIsS0FBSyxhQUFBO3FCQUFLLEVBQUwsQUFBSyxBQUFFO0FBRFUsYUFBQSxFQUFBLEFBRXRCLEtBQUssYUFBQTtxQkFBSyxFQUFBLEFBQUUsR0FBUCxBQUFVO0FBSEgsQUFDVTs7ZUFBbkI7QUFEUyxrQ0FBQTs0QkFBQTttQkFLSSxrRUFDeUMsT0FEekMsQUFDZ0QsZ0JBQVcsT0FEM0QsQUFDa0UsaUJBTnRFLEFBS0ksQUFDOEU7O2VBRDNGO0FBTFMsNEJBQUE7NEJBQUE7bUJBUUksS0FSSixBQVFJLEFBQUs7O2VBQWxCO0FBUlMsNEJBU1Q7QUFUUywwQkFTQSxBQUFLLElBQUksYUFBQTs7MEJBQ1osRUFBQSxBQUFFLFNBQUYsQUFBVyxRQUFYLEFBQW1CLE9BREQsQUFDbEIsQUFBMEIsQUFDcEM7cUJBQUssT0FBTyxFQUFBLEFBQUUsU0FGYyxBQUV2QixBQUFrQixBQUN2QjtxQkFBSyxPQUFPLEVBQUEsQUFBRSxTQUhRLEFBQU0sQUFHdkIsQUFBa0I7QUFISyxBQUM1QjtBQVZhLEFBU0EsQUFNZixhQU5lOztBQU9UOztBQWhCUyxnQ0FnQkksQUFDaEIsSUFBSSxhQUFBO3FCQUFLLEVBQUwsQUFBTztBQURLLGFBQUEsRUFBQSxBQUVoQixPQUFPLFVBQUEsQUFBQyxLQUFELEFBQU0sS0FBUSxBQUNwQjtrQkFBTSxRQUFRLElBQUEsQUFBSSxPQUFKLEFBQVcsUUFBekIsQUFBYyxBQUFtQixBQUNqQztrQkFBSSxRQUFKLEFBQVksR0FBRyxBQUNiO29CQUFBLEFBQUksT0FBSixBQUFXLEtBQVgsQUFBZ0IsQUFDaEI7b0JBQUEsQUFBSSxPQUFKLEFBQVcsR0FBWCxBQUFjLEtBQWQsQUFBbUIsQUFDcEI7QUFIRCxxQkFHTyxBQUNMO29CQUFBLEFBQUksT0FBSixBQUFXLEdBQVgsQUFBYyxTQUFTLElBQUEsQUFBSSxPQUFKLEFBQVcsR0FBWCxBQUFjLFNBQXJDLEFBQThDLEFBQy9DO0FBQ0Q7cUJBQUEsQUFBTyxBQUNSO0FBWGdCO3NCQVdkLEFBQ08sQUFDUjtzQkFBUSxDQTdCRyxBQWdCSSxBQVdkLEFBRU8sQUFBQztBQUZSLEFBQ0Q7O3NCQUlHLEFBQ0csQUFDUjtzQkFGSyxBQUVHLEFBQ1I7MEJBbkNhLEFBZ0NSLEFBR087QUFIUCxBQUNMOztlQWpDYTtlQUFBOzRCQUFBOztBQUFBO2dCQUFBO0FBQVg7OytCQUFBOzRCQUFBO0FBQUE7QUFBTixBQXVDQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJnZXRDcmltZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWlpa2Ftb2lsYW5lbi91bmkvc29jaWFsLWJhcm9tZXRlci93ZWJhcHAtcmV3cml0ZS9uZXctd2ViYXBwIn0=