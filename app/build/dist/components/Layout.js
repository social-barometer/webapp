'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Theme = require('./Theme');

var _Theme2 = _interopRequireDefault(_Theme);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _reactBootstrap = require('react-bootstrap');

var _NavItem = require('./NavItem');

var _NavItem2 = _interopRequireDefault(_NavItem);

var _LoginButton = require('./LoginButton');

var _LoginButton2 = _interopRequireDefault(_LoginButton);

var _fire = require('../fire');

var _fire2 = _interopRequireDefault(_fire);

var _getDashboards = require('../lib/getDashboards');

var _getDashboards2 = _interopRequireDefault(_getDashboards);

var _secrets = require('../secrets.json');

var _secrets2 = _interopRequireDefault(_secrets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/miikamoilanen/uni/social-barometer/webapp-rewrite/new-webapp/app/components/Layout.js';


var DashboardDropdown = function DashboardDropdown(_ref) {
  var dashboards = _ref.dashboards;
  return _react2.default.createElement(_reactBootstrap.NavDropdown, { title: 'Dashboards', id: 'dashboard-dropdown', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, dashboards.map(function (d, i) {
    return _react2.default.createElement('li', { key: i, __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    }, _react2.default.createElement(_link2.default, { href: '/dashboard?name=' + d.name + '&keywords=' + d.keywords + '&dashboard=' + d.id, __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    }, _react2.default.createElement('a', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    }, d.name)));
  }), _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), _react2.default.createElement('li', { key: dashboards.length + 1, __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, _react2.default.createElement(_link2.default, { href: '/createDashboard', __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, 'Create a new dashboard'))));
};

var Layout = function (_Component) {
  (0, _inherits3.default)(Layout, _Component);

  function Layout(props) {
    (0, _classCallCheck3.default)(this, Layout);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).call(this, props));

    _this.state = {
      user: null,
      dashboards: null
    };

    _this.login = _this.login.bind(_this);
    _this.logout = _this.logout.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Layout, [{
    key: 'login',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var result, user;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _fire.auth.signInWithPopup(_fire.provider);

              case 3:
                result = _context.sent;
                user = result.user;

                this.setState({ user: user });
                localStorage.setItem('twitterToken', result.credential.accessToken);
                localStorage.setItem('twitterSecret', result.credential.secret);
                console.log('Welcome ' + user.displayName + '!');
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](0);
                throw new Error(_context.t0);

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 11]]);
      }));

      function login() {
        return _ref2.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: 'logout',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _fire.auth.signOut;

              case 3:
                this.setState({ user: null });
                localStorage.removeItem('twitterToken');
                localStorage.removeItem('twitterSecret');
                Router.push({
                  pathname: '/'
                });
                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2['catch'](0);
                throw new Error(_context2.t0);

              case 12:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 9]]);
      }));

      function logout() {
        return _ref3.apply(this, arguments);
      }

      return logout;
    }()
  }, {
    key: 'componentDidMount',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
        var _this2 = this;

        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _fire.auth.onAuthStateChanged(function () {
                  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(user) {
                    var dashboards;
                    return _regenerator2.default.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            if (!user) {
                              _context3.next = 5;
                              break;
                            }

                            _context3.next = 3;
                            return (0, _getDashboards2.default)(user.uid);

                          case 3:
                            dashboards = _context3.sent;

                            _this2.setState({ user: user, dashboards: dashboards });

                          case 5:
                          case 'end':
                            return _context3.stop();
                        }
                      }
                    }, _callee3, _this2);
                  }));

                  return function (_x) {
                    return _ref5.apply(this, arguments);
                  };
                }());

              case 1:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function componentDidMount() {
        return _ref4.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          user = _state.user,
          dashboards = _state.dashboards;

      return _react2.default.createElement('div', {
        className: 'jsx-4158932565',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', className: 'jsx-4158932565',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }), _react2.default.createElement('meta', { charSet: 'utf-8', className: 'jsx-4158932565',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css', className: 'jsx-4158932565',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/main.css', className: 'jsx-4158932565',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }), _react2.default.createElement('script', {
        type: 'text/javascript',
        src: 'https://maps.googleapis.com/maps/api/js?key=' + _secrets2.default.googleMapsAPIKey + '&libraries=places', className: 'jsx-4158932565',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      })), _react2.default.createElement(_Theme2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react2.default.createElement(_reactBootstrap.Navbar, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react2.default.createElement(_reactBootstrap.Navbar.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, _react2.default.createElement(_link2.default, { href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react2.default.createElement('a', {
        className: 'jsx-4158932565' + ' ' + 'navbar-brand',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, 'Social Barometer'))), _react2.default.createElement(_reactBootstrap.Nav, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, dashboards ? _react2.default.createElement(DashboardDropdown, { dashboards: dashboards, __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }) : _react2.default.createElement(_NavItem2.default, { href: '/createDashboard', __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, 'Create a new dashboard')), _react2.default.createElement(_reactBootstrap.Nav, { pullRight: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, _react2.default.createElement(_LoginButton2.default, {
        user: user,
        login: this.login,
        logout: this.logout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }))), this.props.children), _react2.default.createElement(_style2.default, {
        styleId: '4158932565',
        css: '\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvSHlCIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWlpa2Ftb2lsYW5lbi91bmkvc29jaWFsLWJhcm9tZXRlci93ZWJhcHAtcmV3cml0ZS9uZXctd2ViYXBwIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRoZW1lIGZyb20gJy4vVGhlbWUnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBOYXZiYXIsIE5hdiwgTmF2RHJvcGRvd24sIE1lbnVJdGVtIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IE5hdkl0ZW0gZnJvbSAnLi9OYXZJdGVtJ1xuaW1wb3J0IExvZ2luQnV0dG9uIGZyb20gJy4vTG9naW5CdXR0b24nXG5pbXBvcnQgZmlyZWJhc2UsIHsgYXV0aCwgcHJvdmlkZXIgfSBmcm9tICcuLi9maXJlJ1xuaW1wb3J0IGdldERhc2hib2FyZHMgZnJvbSAnLi4vbGliL2dldERhc2hib2FyZHMnXG5pbXBvcnQgc2VjcmV0cyBmcm9tICcuLi9zZWNyZXRzLmpzb24nXG5cbmNvbnN0IERhc2hib2FyZERyb3Bkb3duID0gKHsgZGFzaGJvYXJkcyB9KSA9PiAoXG4gIDxOYXZEcm9wZG93biB0aXRsZT1cIkRhc2hib2FyZHNcIiBpZD1cImRhc2hib2FyZC1kcm9wZG93blwiPlxuICAgIHsgZGFzaGJvYXJkcy5tYXAoKGQsaSkgPT4gKFxuICAgICAgPGxpIGtleT17aX0+XG4gICAgICAgIDxMaW5rIGhyZWY9e2AvZGFzaGJvYXJkP25hbWU9JHtkLm5hbWV9JmtleXdvcmRzPSR7ZC5rZXl3b3Jkc30mZGFzaGJvYXJkPSR7ZC5pZH1gfT5cbiAgICAgICAgICA8YT57IGQubmFtZSB9PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2xpPlxuICAgICkpfVxuICAgIDxNZW51SXRlbSBkaXZpZGVyIC8+XG4gICAgPGxpIGtleT17ZGFzaGJvYXJkcy5sZW5ndGggKyAxfT5cbiAgICAgIDxMaW5rIGhyZWY9XCIvY3JlYXRlRGFzaGJvYXJkXCI+XG4gICAgICAgIDxhPkNyZWF0ZSBhIG5ldyBkYXNoYm9hcmQ8L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9saT5cbiAgPC9OYXZEcm9wZG93bj5cbilcblxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHVzZXI6IG51bGwsXG4gICAgICBkYXNoYm9hcmRzOiBudWxsLFxuICAgIH1cblxuICAgIHRoaXMubG9naW4gPSB0aGlzLmxvZ2luLmJpbmQodGhpcylcbiAgICB0aGlzLmxvZ291dCA9IHRoaXMubG9nb3V0LmJpbmQodGhpcylcbiAgfVxuICBcbiAgYXN5bmMgbG9naW4gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF1dGguc2lnbkluV2l0aFBvcHVwKHByb3ZpZGVyKVxuICAgICAgICBjb25zdCB1c2VyID0gcmVzdWx0LnVzZXJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVzZXIgfSlcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3R3aXR0ZXJUb2tlbicsIHJlc3VsdC5jcmVkZW50aWFsLmFjY2Vzc1Rva2VuKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndHdpdHRlclNlY3JldCcsIHJlc3VsdC5jcmVkZW50aWFsLnNlY3JldClcbiAgICAgICAgY29uc29sZS5sb2coYFdlbGNvbWUgJHt1c2VyLmRpc3BsYXlOYW1lfSFgKVxuICAgIH0gY2F0Y2goZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBsb2dvdXQoKSB7XG4gICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IGF1dGguc2lnbk91dFxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2VyOiBudWxsIH0pXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3R3aXR0ZXJUb2tlbicpXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3R3aXR0ZXJTZWNyZXQnKVxuICAgICAgICAgIFJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvJ1xuICAgICAgICAgICAgfSlcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlKVxuICAgICAgfVxuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQoYXN5bmMgKHVzZXIpID0+IHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIGNvbnN0IGRhc2hib2FyZHMgPSBhd2FpdCBnZXREYXNoYm9hcmRzKHVzZXIudWlkKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlciwgZGFzaGJvYXJkcyB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCB7IHVzZXIsIGRhc2hib2FyZHMgfSA9IHRoaXMuc3RhdGVcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLy9jZG4uanNkZWxpdnIubmV0L2NoYXJ0aXN0LmpzL2xhdGVzdC9jaGFydGlzdC5taW4uY3NzXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3RhdGljL21haW4uY3NzXCIgLz5cbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIlxuICAgICAgICAgIHNyYz17YGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz9rZXk9JHtzZWNyZXRzLmdvb2dsZU1hcHNBUElLZXl9JmxpYnJhcmllcz1wbGFjZXNgfT5cbiAgICAgICAgPC9zY3JpcHQ+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8VGhlbWU+XG4gICAgICAgIDxOYXZiYXI+XG4gICAgICAgICAgPE5hdmJhci5IZWFkZXI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlNvY2lhbCBCYXJvbWV0ZXI8L2E+PC9MaW5rPlxuICAgICAgICAgIDwvTmF2YmFyLkhlYWRlcj5cbiAgICAgICAgICA8TmF2PlxuICAgICAgICAgIHsgZGFzaGJvYXJkc1xuICAgICAgICAgICAgPyA8RGFzaGJvYXJkRHJvcGRvd24gZGFzaGJvYXJkcz17IGRhc2hib2FyZHMgfSAvPlxuICAgICAgICAgICAgOiA8TmF2SXRlbSBocmVmPVwiL2NyZWF0ZURhc2hib2FyZFwiPkNyZWF0ZSBhIG5ldyBkYXNoYm9hcmQ8L05hdkl0ZW0+XG4gICAgICAgICAgfVxuICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgICAgPE5hdiBwdWxsUmlnaHQ+XG4gICAgICAgICAgICAgIDxMb2dpbkJ1dHRvblxuICAgICAgICAgICAgICAgIHVzZXI9eyB1c2VyIH1cbiAgICAgICAgICAgICAgICBsb2dpbj17IHRoaXMubG9naW4gfVxuICAgICAgICAgICAgICAgIGxvZ291dD17IHRoaXMubG9nb3V0IH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9OYXY+XG4gICAgICAgIDwvTmF2YmFyPlxuICAgICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxuICAgICAgPC9UaGVtZT5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQiXX0= */\n/*@ sourceURL=app/components/Layout.js */'
      }));
    }
  }]);

  return Layout;
}(_react.Component);

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRoZW1lIiwiTGluayIsIkhlYWQiLCJOYXZiYXIiLCJOYXYiLCJOYXZEcm9wZG93biIsIk1lbnVJdGVtIiwiTmF2SXRlbSIsIkxvZ2luQnV0dG9uIiwiZmlyZWJhc2UiLCJhdXRoIiwicHJvdmlkZXIiLCJnZXREYXNoYm9hcmRzIiwic2VjcmV0cyIsIkRhc2hib2FyZERyb3Bkb3duIiwiZGFzaGJvYXJkcyIsIm1hcCIsImQiLCJpIiwibmFtZSIsImtleXdvcmRzIiwiaWQiLCJsZW5ndGgiLCJMYXlvdXQiLCJwcm9wcyIsInN0YXRlIiwidXNlciIsImxvZ2luIiwiYmluZCIsImxvZ291dCIsInNpZ25JbldpdGhQb3B1cCIsInJlc3VsdCIsInNldFN0YXRlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImNyZWRlbnRpYWwiLCJhY2Nlc3NUb2tlbiIsInNlY3JldCIsImNvbnNvbGUiLCJsb2ciLCJkaXNwbGF5TmFtZSIsIkVycm9yIiwic2lnbk91dCIsInJlbW92ZUl0ZW0iLCJSb3V0ZXIiLCJwdXNoIiwicGF0aG5hbWUiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1aWQiLCJnb29nbGVNYXBzQVBJS2V5IiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVMsQUFBUSxBQUFLLEFBQWE7O0FBQ25DLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU8sQUFBWSxBQUFNLEFBQWdCOzs7O0FBQ3pDLEFBQU8sQUFBbUI7Ozs7QUFDMUIsQUFBTyxBQUFhOzs7Ozs7Ozs7QUFFcEIsSUFBTSxvQkFBb0IsU0FBcEIsQUFBb0Isd0JBQUE7TUFBQSxBQUFH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