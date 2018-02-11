'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/miikamoilanen/uni/social-barometer/webapp-rewrite/new-webapp/app/components/ChartistGraph.js';


var ChartistGraph = function (_Component) {
  (0, _inherits3.default)(ChartistGraph, _Component);

  function ChartistGraph() {
    (0, _classCallCheck3.default)(this, ChartistGraph);

    return (0, _possibleConstructorReturn3.default)(this, (ChartistGraph.__proto__ || (0, _getPrototypeOf2.default)(ChartistGraph)).apply(this, arguments));
  }

  (0, _createClass3.default)(ChartistGraph, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.updateChart(newProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.chartist) {
        try {
          this.chartist.detach();
        } catch (err) {
          throw new Error('Internal chartist error', err);
        }
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateChart(this.props);
    }
  }, {
    key: 'updateChart',
    value: function updateChart(config) {
      var Chartist = require('chartist');

      var type = config.type,
          data = config.data;

      var options = config.options || {};
      var responsiveOptions = config.responsiveOptions || [];
      var event = void 0;

      if (this.chartist) {
        this.chartist.update(data, options, responsiveOptions);
      } else {
        this.chartist = new Chartist[type](this.chart, data, options, responsiveOptions);

        if (config.listener) {
          for (event in config.listener) {
            if (config.listener.hasOwnProperty(event)) {
              this.chartist.on(event, config.listener[event]);
            }
          }
        }
      }

      return this.chartist;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          style = _props.style,
          children = _props.children,
          data = _props.data,
          type = _props.type;

      var childrenWithProps = children && _react.Children.map(children, function (child) {
        return (0, _react.cloneElement)(child, {
          type: type,
          data: data
        });
      });
      return _react2.default.createElement('div', { className: 'ct-chart ' + (className || ''), ref: function ref(_ref) {
          return _this2.chart = _ref;
        }, style: style, __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, childrenWithProps);
    }
  }]);

  return ChartistGraph;
}(_react.Component);

ChartistGraph.propTypes = {
  type: _propTypes2.default.oneOf(['Line', 'Bar', 'Pie']).isRequired,
  data: _propTypes2.default.object.isRequired,
  className: _propTypes2.default.string,
  options: _propTypes2.default.object,
  responsiveOptions: _propTypes2.default.array,
  style: _propTypes2.default.object
};

exports.default = ChartistGraph;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL0NoYXJ0aXN0R3JhcGguanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjbG9uZUVsZW1lbnQiLCJDaGlsZHJlbiIsIlByb3BUeXBlcyIsIkNoYXJ0aXN0R3JhcGgiLCJuZXdQcm9wcyIsInVwZGF0ZUNoYXJ0IiwiY2hhcnRpc3QiLCJkZXRhY2giLCJlcnIiLCJFcnJvciIsInByb3BzIiwiY29uZmlnIiwiQ2hhcnRpc3QiLCJyZXF1aXJlIiwidHlwZSIsImRhdGEiLCJvcHRpb25zIiwicmVzcG9uc2l2ZU9wdGlvbnMiLCJldmVudCIsInVwZGF0ZSIsImNoYXJ0IiwibGlzdGVuZXIiLCJoYXNPd25Qcm9wZXJ0eSIsIm9uIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJjaGlsZHJlbiIsImNoaWxkcmVuV2l0aFByb3BzIiwibWFwIiwiY2hpbGQiLCJyZWYiLCJwcm9wVHlwZXMiLCJvbmVPZiIsImlzUmVxdWlyZWQiLCJvYmplY3QiLCJzdHJpbmciLCJhcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVMsQUFBVyxBQUFjOzs7O0FBQ3pDLEFBQU87Ozs7Ozs7OztJQUVELEE7Ozs7Ozs7Ozs7OzhDLEFBRXNCLFVBQVUsQUFDbEM7V0FBQSxBQUFLLFlBQUwsQUFBaUIsQUFDbEI7Ozs7MkNBRXNCLEFBQ3JCO1VBQUksS0FBSixBQUFTLFVBQVUsQUFDakI7WUFBSSxBQUNGO2VBQUEsQUFBSyxTQUFMLEFBQWMsQUFDZjtBQUZELFVBRUUsT0FBQSxBQUFPLEtBQUssQUFDWjtnQkFBTSxJQUFBLEFBQUksTUFBSixBQUFVLDJCQUFoQixBQUFNLEFBQXFDLEFBQzVDO0FBQ0Y7QUFDRjs7Ozt3Q0FFbUIsQUFDbEI7V0FBQSxBQUFLLFlBQVksS0FBakIsQUFBc0IsQUFDdkI7Ozs7Z0NBRVcsQSxRQUFRLEFBQ2xCO1VBQUksV0FEYyxBQUNsQixBQUFJLEFBQVc7O1VBREcsQUFHWixPQUhZLEFBR0csT0FISCxBQUdaO1VBSFksQUFHTixPQUhNLEFBR0csT0FISCxBQUdOLEFBQ1o7O1VBQUksVUFBVSxPQUFBLEFBQU8sV0FBckIsQUFBZ0MsQUFDaEM7VUFBSSxvQkFBb0IsT0FBQSxBQUFPLHFCQUEvQixBQUFvRCxBQUNwRDtVQUFJLGFBQUosQUFFQTs7VUFBSSxLQUFKLEFBQVMsVUFBVSxBQUNqQjthQUFBLEFBQUssU0FBTCxBQUFjLE9BQWQsQUFBcUIsTUFBckIsQUFBMkIsU0FBM0IsQUFBb0MsQUFDckM7QUFGRCxhQUVPLEFBQ0w7YUFBQSxBQUFLLFdBQVcsSUFBSSxTQUFKLEFBQUksQUFBUyxNQUFNLEtBQW5CLEFBQXdCLE9BQXhCLEFBQStCLE1BQS9CLEFBQXFDLFNBQXJELEFBQWdCLEFBQThDLEFBRTlEOztZQUFJLE9BQUosQUFBVyxVQUFVLEFBQ25CO2VBQUEsQUFBSyxTQUFTLE9BQWQsQUFBcUIsVUFBVSxBQUM3QjtnQkFBSSxPQUFBLEFBQU8sU0FBUCxBQUFnQixlQUFwQixBQUFJLEFBQStCLFFBQVEsQUFDekM7bUJBQUEsQUFBSyxTQUFMLEFBQWMsR0FBZCxBQUFpQixPQUFPLE9BQUEsQUFBTyxTQUEvQixBQUF3QixBQUFnQixBQUN6QztBQUNGO0FBQ0Y7QUFDRjtBQUVEOzthQUFPLEtBQVAsQUFBWSxBQUNiOzs7OzZCQUVRO21CQUFBOzttQkFDNEMsS0FENUMsQUFDaUQ7VUFEakQsQUFDQyxtQkFERCxBQUNDO1VBREQsQUFDWSxlQURaLEFBQ1k7VUFEWixBQUNtQixrQkFEbkIsQUFDbUI7VUFEbkIsQUFDNkIsY0FEN0IsQUFDNkI7VUFEN0IsQUFDbUMsY0FEbkMsQUFDbUMsQUFDMUM7O1VBQU0sb0JBQW9CLDRCQUFZLEFBQVMsSUFBVCxBQUFhLFVBQVUsVUFBQSxBQUFDLE9BQUQ7d0NBQzNELEFBQWE7Z0JBQU8sQUFFbEI7Z0JBSHlELEFBQzNELEFBQW9CO0FBQUEsQUFDbEIsU0FERjtBQURGLEFBQXNDLEFBTXRDLE9BTnNDOzZCQU9wQyxjQUFBLFNBQUssMEJBQXVCLGFBQTVCLEFBQUssQUFBb0MsS0FBTSxLQUFLLGFBQUEsQUFBQyxNQUFEO2lCQUFTLE9BQUEsQUFBSyxRQUFkLEFBQXNCO0FBQTFFLFdBQWdGLE9BQWhGLEFBQXVGO29CQUF2RjtzQkFBQSxBQUNJO0FBREo7T0FBQSxFQURGLEFBQ0UsQUFJSDs7Ozs7QUExRHlCLEE7O0FBNkQ1QixjQUFBLEFBQWM7UUFDTixvQkFBQSxBQUFVLE1BQU0sQ0FBQSxBQUFDLFFBQUQsQUFBUyxPQUF6QixBQUFnQixBQUFnQixRQURkLEFBQ3NCLEFBQzlDO1FBQU0sb0JBQUEsQUFBVSxPQUZRLEFBRUQsQUFDdkI7YUFBVyxvQkFIYSxBQUdILEFBQ3JCO1dBQVMsb0JBSmUsQUFJTCxBQUNuQjtxQkFBbUIsb0JBTEssQUFLSyxBQUM3QjtTQUFPLG9CQU5ULEFBQTBCLEFBTVAsQUFHbkI7QUFUMEIsQUFDeEI7O2tCQVFGLEFBQWUiLCJmaWxlIjoiQ2hhcnRpc3RHcmFwaC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWlpa2Ftb2lsYW5lbi91bmkvc29jaWFsLWJhcm9tZXRlci93ZWJhcHAtcmV3cml0ZS9uZXctd2ViYXBwIn0=