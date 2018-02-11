'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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

var _getTwitterAnalysis = require('../lib/getTwitterAnalysis');

var _getTwitterAnalysis2 = _interopRequireDefault(_getTwitterAnalysis);

var _getCrime = require('../lib/getCrime');

var _getCrime2 = _interopRequireDefault(_getCrime);

var _getDashboardInfo = require('../lib/getDashboardInfo');

var _getDashboardInfo2 = _interopRequireDefault(_getDashboardInfo);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _TweetEmotionPie = require('../components/TweetEmotionPie');

var _TweetEmotionPie2 = _interopRequireDefault(_TweetEmotionPie);

var _TweetEmotionGraph = require('../components/TweetEmotionGraph');

var _TweetEmotionGraph2 = _interopRequireDefault(_TweetEmotionGraph);

var _CrimeMap = require('../components/CrimeMap');

var _CrimeMap2 = _interopRequireDefault(_CrimeMap);

var _reactBootstrap = require('react-bootstrap');

var _ChartistGraph = require('../components/ChartistGraph');

var _ChartistGraph2 = _interopRequireDefault(_ChartistGraph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/miikamoilanen/uni/social-barometer/webapp-rewrite/new-webapp/app/pages/dashboard.js?entry';


var Dashboard = function (_Component) {
  (0, _inherits3.default)(Dashboard, _Component);

  function Dashboard(props) {
    (0, _classCallCheck3.default)(this, Dashboard);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Dashboard.__proto__ || (0, _getPrototypeOf2.default)(Dashboard)).call(this, props));

    _this.state = {
      twitterAnalysis: [],
      crime: null,
      sentimentScore: null,
      mounted: false,
      info: null
    };
    _this.fetchData = _this.fetchData.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Dashboard, [{
    key: 'fetchData',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(did) {
        var info, _ref2, _ref3, crime, twitterAnalysis;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _getDashboardInfo2.default)(did);

              case 2:
                info = _context.sent;
                _context.next = 5;
                return _promise2.default.all([(0, _getCrime2.default)({ lat: info.location.lat, lng: info.location.lng }), (0, _getTwitterAnalysis2.default)(did)]);

              case 5:
                _ref2 = _context.sent;
                _ref3 = (0, _slicedToArray3.default)(_ref2, 2);
                crime = _ref3[0];
                twitterAnalysis = _ref3[1];
                _context.next = 11;
                return this.setState({ twitterAnalysis: twitterAnalysis, crime: crime, info: info });

              case 11:
                console.log('state chaned', this.state);

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchData(_x) {
        return _ref.apply(this, arguments);
      }

      return fetchData;
    }()
  }, {
    key: 'componentWillReceiveProps',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(nextProps) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this.state.mounted) {
                  _context2.next = 3;
                  break;
                }

                _context2.next = 3;
                return this.fetchData(nextProps.url.query.dashboard);

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentWillReceiveProps(_x2) {
        return _ref4.apply(this, arguments);
      }

      return componentWillReceiveProps;
    }()
  }, {
    key: 'componentDidMount',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.setState({ mounted: true });
                _context3.next = 3;
                return this.fetchData(this.props.url.query.dashboard);

              case 3:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function componentDidMount() {
        return _ref5.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _React$createElement;

      var _state = this.state,
          twitterAnalysis = _state.twitterAnalysis,
          sentimentScore = _state.sentimentScore,
          crime = _state.crime,
          info = _state.info;
      var _props$url$query = this.props.url.query,
          name = _props$url$query.name,
          keywords = _props$url$query.keywords;

      var emotion = twitterAnalysis.map(function (x) {
        return x.emotion;
      });
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(_reactBootstrap.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement(_reactBootstrap.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement(_reactBootstrap.Col, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-2356584910',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, name), _react2.default.createElement('p', {
        className: 'jsx-2356584910',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, 'Keywords: ', keywords))), _react2.default.createElement(_reactBootstrap.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement(_reactBootstrap.Col, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, twitterAnalysis.length ? _react2.default.createElement('div', {
        className: 'jsx-2356584910',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement(_TweetEmotionPie2.default, {
        title: 'Emotions triggered',
        analysis: emotion, __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      })) : '')), _react2.default.createElement(_reactBootstrap.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement(_reactBootstrap.Col, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement(_reactBootstrap.Panel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, info ? _react2.default.createElement(_reactBootstrap.Panel.Heading, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, 'Crime at ', info.location.address) : '', crime ? _react2.default.createElement('div', {
        className: 'jsx-2356584910',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement(_CrimeMap2.default, { center: crime.center, crimes: crime.crimes, __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }), _react2.default.createElement('div', {
        className: 'jsx-2356584910' + ' ' + 'gutter',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }), _react2.default.createElement(_ChartistGraph2.default, (_React$createElement = {
        data: crime.categories,
        options: {
          distributedSeries: true
        },
        type: 'Bar'
      }, (0, _defineProperty3.default)(_React$createElement, 'options', {
        height: "450px"
      }), (0, _defineProperty3.default)(_React$createElement, '__source', {
        fileName: _jsxFileName,
        lineNumber: 88
      }), _React$createElement))) : '')))), _react2.default.createElement(_style2.default, {
        styleId: '2356584910',
        css: '.gutter.jsx-2356584910{height:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9kYXNoYm9hcmQuanM/ZW50cnkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUdrQixBQUd1QixZQUNkIiwiZmlsZSI6ImFwcC9wYWdlcy9kYXNoYm9hcmQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL21paWthbW9pbGFuZW4vdW5pL3NvY2lhbC1iYXJvbWV0ZXIvd2ViYXBwLXJld3JpdGUvbmV3LXdlYmFwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBnZXRUd2l0dGVyQW5hbHlzaXMgZnJvbSAnLi4vbGliL2dldFR3aXR0ZXJBbmFseXNpcydcbmltcG9ydCBnZXRDcmltZSBmcm9tICcuLi9saWIvZ2V0Q3JpbWUnXG5pbXBvcnQgZ2V0RGFzaGJvYXJkSW5mbyBmcm9tICcuLi9saWIvZ2V0RGFzaGJvYXJkSW5mbydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgVHdlZXRFbW90aW9uUGllIGZyb20gJy4uL2NvbXBvbmVudHMvVHdlZXRFbW90aW9uUGllJ1xuaW1wb3J0IFR3ZWV0RW1vdGlvbkdyYXBoIGZyb20gJy4uL2NvbXBvbmVudHMvVHdlZXRFbW90aW9uR3JhcGgnXG5pbXBvcnQgQ3JpbWVNYXAgZnJvbSAnLi4vY29tcG9uZW50cy9DcmltZU1hcCdcbmltcG9ydCB7IEdyaWQsIFJvdywgQ29sLCBQYW5lbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcbmltcG9ydCBDaGFydGlzdEdyYXBoIGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhcnRpc3RHcmFwaCdcblxuY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0d2l0dGVyQW5hbHlzaXM6IFtdLFxuICAgICAgY3JpbWU6IG51bGwsXG4gICAgICBzZW50aW1lbnRTY29yZTogbnVsbCxcbiAgICAgIG1vdW50ZWQ6IGZhbHNlLFxuICAgICAgaW5mbzogbnVsbCxcbiAgICB9XG4gICAgdGhpcy5mZXRjaERhdGEgPSB0aGlzLmZldGNoRGF0YS5iaW5kKHRoaXMpXG4gIH1cblxuICBhc3luYyBmZXRjaERhdGEoZGlkKSB7XG4gICAgY29uc3QgaW5mbyA9IGF3YWl0IGdldERhc2hib2FyZEluZm8oZGlkKVxuICAgIGNvbnN0IFtjcmltZSwgdHdpdHRlckFuYWx5c2lzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIGdldENyaW1lKHsgbGF0OiBpbmZvLmxvY2F0aW9uLmxhdCwgbG5nOiBpbmZvLmxvY2F0aW9uLmxuZyB9KSxcbiAgICAgIGdldFR3aXR0ZXJBbmFseXNpcyhkaWQpXG4gICAgXSlcbiAgICBhd2FpdCB0aGlzLnNldFN0YXRlKHsgdHdpdHRlckFuYWx5c2lzLCBjcmltZSwgaW5mbyB9KVxuICAgIGNvbnNvbGUubG9nKCdzdGF0ZSBjaGFuZWQnLCB0aGlzLnN0YXRlKVxuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5tb3VudGVkKSB7XG4gICAgICBhd2FpdCB0aGlzLmZldGNoRGF0YShuZXh0UHJvcHMudXJsLnF1ZXJ5LmRhc2hib2FyZClcbiAgICB9XG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbW91bnRlZDogdHJ1ZSB9KVxuICAgIGF3YWl0IHRoaXMuZmV0Y2hEYXRhKHRoaXMucHJvcHMudXJsLnF1ZXJ5LmRhc2hib2FyZClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHR3aXR0ZXJBbmFseXNpcywgc2VudGltZW50U2NvcmUsIGNyaW1lLCBpbmZvIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgeyBuYW1lLCBrZXl3b3JkcyB9ID0gdGhpcy5wcm9wcy51cmwucXVlcnlcbiAgICBjb25zdCBlbW90aW9uID0gdHdpdHRlckFuYWx5c2lzLm1hcCh4ID0+IHguZW1vdGlvbilcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICAgIDxoMz57IG5hbWUgfTwvaDM+XG4gICAgICAgICAgICAgIDxwPktleXdvcmRzOiB7IGtleXdvcmRzIH08L3A+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHdpdHRlckFuYWx5c2lzLmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxUd2VldEVtb3Rpb25QaWVcbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRW1vdGlvbnMgdHJpZ2dlcmVkXCJcbiAgICAgICAgICAgICAgICAgIGFuYWx5c2lzPXsgZW1vdGlvbiB9IC8+XG4gICAgICAgICAgICAgICAgey8qIDxUd2VldEVtb3Rpb25HcmFwaFxuICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRW1vdGlvbnMgdGhyb3VnaCB0aW1lXCJcbiAgICAgICAgICAgICAgICAgICBhbmFseXNpcz17IHR3aXR0ZXJBbmFseXNpcyB9IC8+ICovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApIDogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgICA8UGFuZWw+XG4gICAgICAgICAgICAgIHsgaW5mb1xuICAgICAgICAgICAgICAgID8gPFBhbmVsLkhlYWRpbmc+Q3JpbWUgYXQgeyBpbmZvLmxvY2F0aW9uLmFkZHJlc3MgfTwvUGFuZWwuSGVhZGluZz5cbiAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgeyBjcmltZVxuICAgICAgICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q3JpbWVNYXAgY2VudGVyPXsgY3JpbWUuY2VudGVyIH0gY3JpbWVzPXsgY3JpbWUuY3JpbWVzIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3V0dGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hhcnRpc3RHcmFwaFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXsgY3JpbWUuY2F0ZWdvcmllcyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXN0cmlidXRlZFNlcmllczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIkJhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDUwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuZ3V0dGVyIHtcbiAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPC9MYXlvdXQ+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZCJdfQ== */\n/*@ sourceURL=app/pages/dashboard.js?entry */'
      }));
    }
  }]);

  return Dashboard;
}(_react.Component);

exports.default = Dashboard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9kYXNoYm9hcmQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJnZXRUd2l0dGVyQW5hbHlzaXMiLCJnZXRDcmltZSIsImdldERhc2hib2FyZEluZm8iLCJMYXlvdXQiLCJUd2VldEVtb3Rpb25QaWUiLCJUd2VldEVtb3Rpb25HcmFwaCIsIkNyaW1lTWFwIiwiR3JpZCIsIlJvdyIsIkNvbCIsIlBhbmVsIiwiQ2hhcnRpc3RHcmFwaCIsIkRhc2hib2FyZCIsInByb3BzIiwic3RhdGUiLCJ0d2l0dGVyQW5hbHlzaXMiLCJjcmltZSIsInNlbnRpbWVudFNjb3JlIiwibW91bnRlZCIsImluZm8iLCJmZXRjaERhdGEiLCJiaW5kIiwiZGlkIiwiYWxsIiwibGF0IiwibG9jYXRpb24iLCJsbmciLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJuZXh0UHJvcHMiLCJ1cmwiLCJxdWVyeSIsImRhc2hib2FyZCIsIm5hbWUiLCJrZXl3b3JkcyIsImVtb3Rpb24iLCJtYXAiLCJ4IiwibGVuZ3RoIiwiYWRkcmVzcyIsImNlbnRlciIsImNyaW1lcyIsImNhdGVnb3JpZXMiLCJkaXN0cmlidXRlZFNlcmllcyIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUF3Qjs7OztBQUMvQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFzQjs7OztBQUM3QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFxQjs7OztBQUM1QixBQUFPLEFBQXVCOzs7O0FBQzlCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFTLEFBQU0sQUFBSyxBQUFLOztBQUN6QixBQUFPLEFBQW1COzs7Ozs7Ozs7SSxBQUVwQjtxQ0FFSjs7cUJBQUEsQUFBWSxPQUFPO3dDQUFBOzs0SUFBQSxBQUNYLEFBQ047O1VBQUEsQUFBSzt1QkFBUSxBQUNN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LEFBQUMsb0NBQVMsUUFBUyxNQUFuQixBQUF5QixRQUFTLFFBQVMsTUFBM0MsQUFBaUQ7b0JBQWpEO3NCQURKLEFBQ0ksQUFDQTtBQURBOzs0Q0FDQSxBQUFlOztvQkFBZjtzQkFGSixBQUVJLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLEFBQUM7Y0FDUSxNQURULEFBQ2UsQUFDYjs7NkJBRkYsQUFFVyxBQUNZLEFBRXJCO0FBSFMsQUFDUDtjQUhKLEFBS087QUFKTDtnQkFERixBQU1XLEFBQ0M7QUFERCxBQUNQO2tCQVBKO29CQUFBO0FBQUEsVUFMUixBQUVJLDBCQWpDZCxBQUNFLEFBdUJFLEFBQ0UsQUFDRSxBQXNCTTtpQkFoRGQ7YUFERixBQUNFLEFBOERIO0FBOURHOzs7OztBQXhDa0IsQSxBQXlHeEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiZGFzaGJvYXJkLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9taWlrYW1vaWxhbmVuL3VuaS9zb2NpYWwtYmFyb21ldGVyL3dlYmFwcC1yZXdyaXRlL25ldy13ZWJhcHAifQ==