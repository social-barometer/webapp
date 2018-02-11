'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ChartistGraph = require('./ChartistGraph');

var _ChartistGraph2 = _interopRequireDefault(_ChartistGraph);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/miikamoilanen/uni/social-barometer/webapp-rewrite/new-webapp/app/components/TweetEmotionPie.js';


var TweetEmotionPie = function TweetEmotionPie(_ref) {
  var title = _ref.title,
      analysis = _ref.analysis;

  // Aggregate results
  var emotions = analysis.reduce(function (acc, cur) {
    (0, _keys2.default)(cur).forEach(function (k) {
      acc[k] = acc[k] ? acc[k] + cur[k] : cur[k];
    });
    return acc;
  }, {});

  // Get total sum of emotions
  var sum = (0, _keys2.default)(emotions).reduce(function (acc, cur) {
    return emotions[cur] + acc;
  }, 0);

  // Make a chartist.js data object with emotion percentages
  var data = (0, _keys2.default)(emotions).reduce(function (acc, cur) {
    acc.labels.push(cur);
    acc.series.push(emotions[cur] / sum * 100);
    return acc;
  }, {
    labels: [],
    series: []
  });

  return _react2.default.createElement('div', {
    className: 'jsx-4158932565',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, _react2.default.createElement(_reactBootstrap.Panel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, _react2.default.createElement(_reactBootstrap.Panel.Heading, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, title), _react2.default.createElement(_reactBootstrap.Panel.Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, _react2.default.createElement('div', {
    className: 'jsx-4158932565' + ' ' + 'twitter-pie',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, _react2.default.createElement(_ChartistGraph2.default, {
    data: data,
    type: 'Pie',
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '1.5rem !important'
    },
    options: {
      height: "300px",
      width: "300px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  })))), _react2.default.createElement(_style2.default, {
    styleId: '4158932565',
    css: '\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL1R3ZWV0RW1vdGlvblBpZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRGtCIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL1R3ZWV0RW1vdGlvblBpZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWlpa2Ftb2lsYW5lbi91bmkvc29jaWFsLWJhcm9tZXRlci93ZWJhcHAtcmV3cml0ZS9uZXctd2ViYXBwIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYXJ0aXN0R3JhcGggZnJvbSAnLi9DaGFydGlzdEdyYXBoJ1xuaW1wb3J0IHsgUGFuZWwgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5cbmNvbnN0IFR3ZWV0RW1vdGlvblBpZSA9ICh7IHRpdGxlLCBhbmFseXNpcyB9KSA9PiB7XG5cbiAgLy8gQWdncmVnYXRlIHJlc3VsdHNcbiAgY29uc3QgZW1vdGlvbnMgPSBhbmFseXNpcy5yZWR1Y2UoKGFjYywgY3VyKSA9PiB7XG4gICAgT2JqZWN0LmtleXMoY3VyKS5mb3JFYWNoKGsgPT4ge1xuICAgICAgYWNjW2tdID0gYWNjW2tdID8gYWNjW2tdICsgY3VyW2tdIDogY3VyW2tdXG4gICAgfSlcbiAgICByZXR1cm4gYWNjXG4gIH0sIHt9KVxuICBcbiAgLy8gR2V0IHRvdGFsIHN1bSBvZiBlbW90aW9uc1xuICBjb25zdCBzdW0gPSBPYmplY3Qua2V5cyhlbW90aW9ucykucmVkdWNlKChhY2MsIGN1cikgPT4ge1xuICAgIHJldHVybiBlbW90aW9uc1tjdXJdICsgYWNjXG4gICAgfSwwKVxuXG4gIC8vIE1ha2UgYSBjaGFydGlzdC5qcyBkYXRhIG9iamVjdCB3aXRoIGVtb3Rpb24gcGVyY2VudGFnZXNcbiAgY29uc3QgZGF0YSA9IE9iamVjdC5rZXlzKGVtb3Rpb25zKS5yZWR1Y2UoKGFjYywgY3VyKSA9PiB7XG4gICAgYWNjLmxhYmVscy5wdXNoKGN1cilcbiAgICBhY2Muc2VyaWVzLnB1c2goZW1vdGlvbnNbY3VyXSAvIHN1bSAqIDEwMClcbiAgICByZXR1cm4gYWNjXG4gIH0sIHtcbiAgICBsYWJlbHM6IFtdLFxuICAgIHNlcmllczogW11cbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8UGFuZWw+XG4gICAgICAgIDxQYW5lbC5IZWFkaW5nPnsgdGl0bGUgfTwvUGFuZWwuSGVhZGluZz5cbiAgICAgICAgPFBhbmVsLkJvZHk+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0d2l0dGVyLXBpZVwiPlxuICAgICAgICAgICAgPENoYXJ0aXN0R3JhcGhcbiAgICAgICAgICAgICAgZGF0YT17IGRhdGEgfVxuICAgICAgICAgICAgICB0eXBlPVwiUGllXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMS41cmVtICFpbXBvcnRhbnQnXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzAwcHhcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIzMDBweFwiXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9QYW5lbC5Cb2R5PlxuICAgICAgPC9QYW5lbD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFR3ZWV0RW1vdGlvblBpZSJdfQ== */\n/*@ sourceURL=app/components/TweetEmotionPie.js */'
  }));
};

exports.default = TweetEmotionPie;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL1R3ZWV0RW1vdGlvblBpZS5qcyJdLCJuYW1lcyI6WyJDaGFydGlzdEdyYXBoIiwiUGFuZWwiLCJUd2VldEVtb3Rpb25QaWUiLCJ0aXRsZSIsImFuYWx5c2lzIiwiZW1vdGlvbnMiLCJyZWR1Y2UiLCJhY2MiLCJjdXIiLCJmb3JFYWNoIiwiayIsInN1bSIsImRhdGEiLCJsYWJlbHMiLCJwdXNoIiwic2VyaWVzIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImZvbnRTaXplIiwiaGVpZ2h0Iiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBbUI7Ozs7QUFDMUIsQUFBUzs7Ozs7OztBQUVULElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLHNCQUF5QjtNQUF0QixBQUFzQixhQUF0QixBQUFzQjtNQUFmLEFBQWUsZ0JBQWYsQUFBZSxBQUUvQzs7QUFDQTtNQUFNLG9CQUFXLEFBQVMsT0FBTyxVQUFBLEFBQUMsS0FBRCxBQUFNLEtBQVEsQUFDN0M7d0JBQUEsQUFBWSxLQUFaLEFBQWlCLFFBQVEsYUFBSyxBQUM1QjtVQUFBLEFBQUksS0FBSyxJQUFBLEFBQUksS0FBSyxJQUFBLEFBQUksS0FBSyxJQUFsQixBQUFrQixBQUFJLEtBQUssSUFBcEMsQUFBb0MsQUFBSSxBQUN6QztBQUZELEFBR0E7V0FBQSxBQUFPLEFBQ1I7QUFMZ0IsR0FBQSxFQUFqQixBQUFpQixBQUtkLEFBRUg7O0FBQ0E7TUFBTSwwQkFBTSxBQUFZLFVBQVosQUFBc0IsT0FBTyxVQUFBLEFBQUMsS0FBRCxBQUFNLEtBQVEsQUFDckQ7V0FBTyxTQUFBLEFBQVMsT0FBaEIsQUFBdUIsQUFDdEI7QUFGUyxHQUFBLEVBQVosQUFBWSxBQUVSLEFBRUo7O0FBQ0E7TUFBTSwyQkFBTyxBQUFZLFVBQVosQUFBc0IsT0FBTyxVQUFBLEFBQUMsS0FBRCxBQUFNLEtBQVEsQUFDdEQ7UUFBQSxBQUFJLE9BQUosQUFBVyxLQUFYLEFBQWdCLEFBQ2hCO1FBQUEsQUFBSSxPQUFKLEFBQVcsS0FBSyxTQUFBLEFBQVMsT0FBVCxBQUFnQixNQUFoQyxBQUFzQyxBQUN0QztXQUFBLEFBQU8sQUFDUjtBQUpZLEdBQUE7WUFJVixBQUNPLEFBQ1I7WUFORixBQUFhLEFBSVYsQUFFTyxBQUdWO0FBTEcsQUFDRDs7eUJBS0EsY0FBQTtlQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNHLGNBQUQsc0JBQUEsQUFBTzs7Z0JBQVA7a0JBQUEsQUFBaUI7QUFBakI7QUFBQSxLQURGLEFBQ0UsQUFDQSx3QkFBQyxjQUFELHNCQUFBLEFBQU87O2dCQUFQO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7d0NBQUEsQUFBZTs7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsQUFBQztVQUFELEFBQ1MsQUFDUDtVQUZGLEFBRU8sQUFDTDs7ZUFBTyxBQUNJLEFBQ1Q7c0JBRkssQUFFVyxBQUNoQjtrQkFISyxBQUdPLEFBQ1o7Z0JBUEosQUFHUyxBQUlLLEFBRVo7QUFOTyxBQUNMOztjQUtPLEFBQ0MsQUFDUjthQVhKLEFBU1csQUFFQTtBQUZBLEFBQ1A7O2dCQVZKO2tCQUxSLEFBQ0UsQUFFRSxBQUNFLEFBQ0U7QUFBQTtBQUNFO2FBTlY7U0FERixBQUNFLEFBMkJIO0FBM0JHO0FBMUJKLEFBdURBOztrQkFBQSxBQUFlIiwiZmlsZSI6IlR3ZWV0RW1vdGlvblBpZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWlpa2Ftb2lsYW5lbi91bmkvc29jaWFsLWJhcm9tZXRlci93ZWJhcHAtcmV3cml0ZS9uZXctd2ViYXBwIn0=