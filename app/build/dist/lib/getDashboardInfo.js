'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _db = require('./db');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

/**
 * Fetches dashboard info
 *
 * @param {String} did – Firebase dashboard identifier
 * @returns {Object} – Info of the given dashboard
 */
var getDashboardInfo = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(did) {
    var db, snapshot, dashboard;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _db.loadDB)();

          case 2:
            db = _context.sent;
            _context.next = 5;
            return db.ref('dashboards/' + did).once('value');

          case 5:
            snapshot = _context.sent;
            dashboard = snapshot.val();
            return _context.abrupt('return', dashboard);

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function getDashboardInfo(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = getDashboardInfo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9saWIvZ2V0RGFzaGJvYXJkSW5mby5qcyJdLCJuYW1lcyI6WyJsb2FkREIiLCJnZXREYXNoYm9hcmRJbmZvIiwiZGlkIiwiZGIiLCJyZWYiLCJvbmNlIiwic25hcHNob3QiLCJkYXNoYm9hcmQiLCJ2YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUSxBQUFSLEFBQXFCLEFBQXJCOzs7Ozs7QUFFQTs7Ozs7O0FBTUEsSUFBTSwrQkFBQTtzRkFBbUIsaUJBQU8sQUFBUCxLQUFBO3NCQUFBO2tFQUFBO2dCQUFBO3lDQUFBO2VBQUE7NEJBQUE7bUJBQ04sQUFETTs7ZUFDakI7QUFEaUIsMEJBQUE7NEJBQUE7bUJBRUEsR0FBRyxBQUFILElBQU8sZ0JBQWdCLEFBQXZCLEtBQ3BCLEFBRG9CLEtBQ2YsQUFEZSxBQUZBOztlQUVqQjtBQUZpQixnQ0FLakI7QUFMaUIsd0JBS0wsU0FBUyxBQUFULEFBTEs7NkNBT2hCLEFBUGdCOztlQUFBO2VBQUE7NEJBQUE7O0FBQUE7Z0JBQUE7QUFBbkI7O3VDQUFBOzRCQUFBO0FBQUE7QUFBTixBQVVBOztrQkFBZSxBQUFmIiwiZmlsZSI6ImdldERhc2hib2FyZEluZm8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21paWthbW9pbGFuZW4vdW5pL3NvY2lhbC1iYXJvbWV0ZXIvd2ViYXBwLXJld3JpdGUvbmV3LXdlYmFwcCJ9