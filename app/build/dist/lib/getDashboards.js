'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _db = require('./db');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

/**
 * Fetches all the dashboards by user.
 *
 * @param {String} uid – Firebase uid (user id)
 * @returns {Array.<Object>} – List of dashboards
 */
var getDashboards = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(uid) {
    var db, snapshot, dashboards;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _db.loadDB)();

          case 2:
            db = _context.sent;
            _context.next = 5;
            return db.ref('dashboards/').orderByChild('user').equalTo(uid).once('value');

          case 5:
            snapshot = _context.sent;
            dashboards = snapshot.val();
            return _context.abrupt('return', (0, _keys2.default)(dashboards).map(function (d) {
              return (0, _extends3.default)({}, dashboards[d], { id: d });
            }));

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function getDashboards(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = getDashboards;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9saWIvZ2V0RGFzaGJvYXJkcy5qcyJdLCJuYW1lcyI6WyJsb2FkREIiLCJnZXREYXNoYm9hcmRzIiwidWlkIiwiZGIiLCJyZWYiLCJvcmRlckJ5Q2hpbGQiLCJlcXVhbFRvIiwib25jZSIsInNuYXBzaG90IiwiZGFzaGJvYXJkcyIsInZhbCIsIm1hcCIsImQiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVEsQUFBYTs7Ozs7O0FBRXJCOzs7Ozs7QUFNQSxJQUFNLDRCQUFBO3NGQUFnQixpQkFBQSxBQUFPLEtBQVA7c0JBQUE7a0VBQUE7Z0JBQUE7eUNBQUE7ZUFBQTs0QkFBQTttQkFBQSxBQUNIOztlQUFYO0FBRGMsMEJBQUE7NEJBQUE7bUJBRUcsR0FBQSxBQUFHLElBQUgsQUFBTyxlQUFQLEFBQ3BCLGFBRG9CLEFBQ1AsUUFETyxBQUVwQixRQUZvQixBQUVaLEtBRlksQUFHcEIsS0FMaUIsQUFFRyxBQUdmOztlQUhGO0FBRmMsZ0NBTWQ7QUFOYyx5QkFNRCxTQU5DLEFBTUQsQUFBUztpRUFFckIsQUFBWSxZQUFaLEFBQXdCLElBQUksYUFBSyxBQUN0QztnREFDSyxXQURMLEFBQ0ssQUFBVyxJQUNYLEVBQUUsSUFGUCxBQUVLLEFBQU0sQUFFWjtBQWJtQixBQVFiLGFBQUE7O2VBUmE7ZUFBQTs0QkFBQTs7QUFBQTtnQkFBQTtBQUFoQjs7b0NBQUE7NEJBQUE7QUFBQTtBQUFOLEFBZ0JBOztrQkFBQSxBQUFlIiwiZmlsZSI6ImdldERhc2hib2FyZHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21paWthbW9pbGFuZW4vdW5pL3NvY2lhbC1iYXJvbWV0ZXIvd2ViYXBwLXJld3JpdGUvbmV3LXdlYmFwcCJ9