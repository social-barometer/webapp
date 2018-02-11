'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _db = require('./db');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

/**
 * Fetches tweets for a given dashboard
 *
 * @param {String} dashboard – Dashboard identifier
 * @returns {Array.<Tweet>}
 */
var getTwitterAnalysis = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dashboard) {
    var db, snapshot, values;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(dashboard);

            if (dashboard) {
              _context.next = 3;
              break;
            }

            return _context.abrupt('return', []);

          case 3:
            _context.next = 5;
            return (0, _db.loadDB)();

          case 5:
            db = _context.sent;
            _context.next = 8;
            return db.ref('/twitterAnalysis').orderByChild('dashboard').equalTo(dashboard).limitToLast(10).once('value');

          case 8:
            snapshot = _context.sent;
            values = snapshot.val();
            return _context.abrupt('return', values ? (0, _values2.default)(values).map(function (x) {
              return { emotion: x.emotion, sentiment: x.sentiment, time: x.time };
            }) : []);

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function getTwitterAnalysis(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = getTwitterAnalysis;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9saWIvZ2V0VHdpdHRlckFuYWx5c2lzLmpzIl0sIm5hbWVzIjpbImxvYWREQiIsImdldFR3aXR0ZXJBbmFseXNpcyIsImRhc2hib2FyZCIsImNvbnNvbGUiLCJsb2ciLCJkYiIsInJlZiIsIm9yZGVyQnlDaGlsZCIsImVxdWFsVG8iLCJsaW1pdFRvTGFzdCIsIm9uY2UiLCJzbmFwc2hvdCIsInZhbHVlcyIsInZhbCIsIm1hcCIsImVtb3Rpb24iLCJ4Iiwic2VudGltZW50IiwidGltZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUyxBQUFjOzs7Ozs7QUFFdkI7Ozs7OztBQU1BLElBQU0saUNBQUE7c0ZBQXFCLGlCQUFBLEFBQU8sV0FBUDtzQkFBQTtrRUFBQTtnQkFBQTt5Q0FBQTtlQUN6QjtvQkFBQSxBQUFRLElBRGlCLEFBQ3pCLEFBQVk7O2dCQURhLEFBRXBCLFdBRm9COzhCQUFBO0FBQUE7QUFBQTs7NkNBQUEsQUFFRjs7ZUFGRTs0QkFBQTttQkFBQSxBQUdSOztlQUFYO0FBSG1CLDBCQUFBOzRCQUFBO21CQUlGLEdBQUEsQUFBRyxJQUFILEFBQU8sb0JBQVAsQUFDcEIsYUFEb0IsQUFDUCxhQURPLEFBRXBCLFFBRm9CLEFBRVosV0FGWSxBQUdwQixZQUhvQixBQUdSLElBSFEsQUFJcEIsS0FSc0IsQUFJRixBQUlmOztlQUpGO0FBSm1CLGdDQVNuQjtBQVRtQixxQkFTVixTQVRVLEFBU1YsQUFBUzs0RUFFcEIsQUFBYyxRQUFkLEFBQ0csSUFBSSxhQUFBO3FCQUFNLEVBQUUsU0FBUyxFQUFYLEFBQWEsU0FBUyxXQUFXLEVBQWpDLEFBQW1DLFdBQVcsTUFBTSxFQUExRCxBQUFNLEFBQXNEO0FBRmhFLEFBQ0gsYUFBQSxDQURHLEdBVmtCLEFBYXJCOztlQWJxQjtlQUFBOzRCQUFBOztBQUFBO2dCQUFBO0FBQXJCOzt5Q0FBQTs0QkFBQTtBQUFBO0FBQU4sQUFnQkE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiZ2V0VHdpdHRlckFuYWx5c2lzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9taWlrYW1vaWxhbmVuL3VuaS9zb2NpYWwtYmFyb21ldGVyL3dlYmFwcC1yZXdyaXRlL25ldy13ZWJhcHAifQ==