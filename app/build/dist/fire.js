'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.auth = exports.provider = undefined;

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _secrets = require('./secrets.json');

var _secrets2 = _interopRequireDefault(_secrets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (!_firebase2.default.apps.length) {
  _firebase2.default.initializeApp(_secrets2.default.firebase);
}

var provider = exports.provider = new _firebase2.default.auth.TwitterAuthProvider();
var auth = exports.auth = _firebase2.default.auth();
exports.default = _firebase2.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9maXJlLmpzIl0sIm5hbWVzIjpbImZpcmViYXNlIiwic2VjcmV0cyIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwicHJvdmlkZXIiLCJhdXRoIiwiVHdpdHRlckF1dGhQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLEFBQU8sQUFBUDs7OztBQUNBLEFBQU8sQUFBUCxBQUFvQixBQUFwQjs7Ozs7O0FBRUEsSUFBSSxDQUFDLG1CQUFTLEFBQVQsS0FBYyxBQUFuQixRQUEyQixBQUN6QjtxQkFBUyxBQUFULGNBQXVCLGtCQUFRLEFBQS9CLEFBQ0Q7QUFFRDs7QUFBTyxJQUFNLDhCQUFXLElBQUksbUJBQVMsQUFBVCxLQUFjLEFBQWxCLEFBQWpCLEFBQ1A7QUFBTyxJQUFNLHNCQUFPLG1CQUFTLEFBQVQsQUFBYixBQUNQLEFBQWUsQUFBZiIsImZpbGUiOiJmaXJlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9taWlrYW1vaWxhbmVuL3VuaS9zb2NpYWwtYmFyb21ldGVyL3dlYmFwcC1yZXdyaXRlL25ldy13ZWJhcHAifQ==