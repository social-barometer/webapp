'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _Card = require('./Card');

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Markus\\Documents\\GitHub\\webapp\\components\\Layout.js';

exports.default = function (props) {
    return _react2.default.createElement('div', { 'class': 'wrapper', className: 'jsx-247033640',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', className: 'jsx-247033640',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }), _react2.default.createElement('meta', { charSet: 'utf-8', className: 'jsx-247033640',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons', className: 'jsx-247033640',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://code.getmdl.io/1.3.0/material.indigo-pink.min.css', className: 'jsx-247033640',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'http://fonts.googleapis.com/css?family=Roboto:300,400,500,700', type: 'text/css', className: 'jsx-247033640',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }), _react2.default.createElement('script', { defer: true, src: 'https://code.getmdl.io/1.3.0/material.min.js', className: 'jsx-247033640',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    })), _react2.default.createElement('div', { 'class': 'mdl-layout mdl-js-layout mdl-layout--fixed-drawer\r mdl-layout--fixed-header', className: 'jsx-247033640',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, _react2.default.createElement('header', { 'class': 'mdl-layout__header', className: 'jsx-247033640',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }, _react2.default.createElement('div', { 'class': 'mdl-layout__header-row', className: 'jsx-247033640',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, _react2.default.createElement('span', { 'class': 'mdl-layout__title', className: 'jsx-247033640',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }, 'Dashboard'), _react2.default.createElement('div', { 'class': 'mdl-layout-spacer', className: 'jsx-247033640',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }), _react2.default.createElement('label', { 'class': 'mdl-button mdl-js-button mdl-button--icon', 'for': 'search', className: 'jsx-247033640',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }, _react2.default.createElement('i', { 'class': 'material-icons', className: 'jsx-247033640',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }, 'search')), _react2.default.createElement('button', { id: 'demo-menu-lower-right',
        'class': 'mdl-button mdl-js-button mdl-button--icon', className: 'jsx-247033640',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 24
        }
    }, _react2.default.createElement('i', { 'class': 'material-icons', className: 'jsx-247033640',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 26
        }
    }, 'more_vert')), _react2.default.createElement('ul', { 'class': 'mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect',
        'for': 'demo-menu-lower-right', className: 'jsx-247033640',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 29
        }
    }, _react2.default.createElement('li', { 'class': 'mdl-menu__item', className: 'jsx-247033640',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 31
        }
    }, 'Option'), _react2.default.createElement('li', { 'class': 'mdl-menu__item', className: 'jsx-247033640',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 32
        }
    }, 'Option 2')))), _react2.default.createElement('div', { 'class': 'mdl-layout__drawer', className: 'jsx-247033640',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 37
        }
    }, _react2.default.createElement('span', { 'class': 'mdl-layout-title', className: 'jsx-247033640',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 38
        }
    }, _react2.default.createElement('b', {
        className: 'jsx-247033640',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 38
        }
    }, 'Social Barometer')), _react2.default.createElement('nav', { 'class': 'demo-navigation mdl-navigation', className: 'jsx-247033640',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 39
        }
    }, _react2.default.createElement('a', { 'class': 'mdl-navigation__link', href: '', className: 'jsx-247033640',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 40
        }
    }, _react2.default.createElement('i', { 'class': 'mdl-color-text--blue-grey-400 material-icons', role: 'presentation', className: 'jsx-247033640',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 40
        }
    }, 'home'), 'Home'), _react2.default.createElement('a', { 'class': 'mdl-navigation__link', href: '', className: 'jsx-247033640',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 41
        }
    }, _react2.default.createElement('i', { 'class': 'mdl-color-text--blue-grey-400 material-icons', role: 'presentation', className: 'jsx-247033640',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 41
        }
    }, 'dashboard'), 'Dashboard'), _react2.default.createElement('a', { 'class': 'mdl-navigation__link', href: '', className: 'jsx-247033640',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 42
        }
    }, _react2.default.createElement('i', { 'class': 'mdl-color-text--blue-grey-400 material-icons', role: 'presentation', className: 'jsx-247033640',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 42
        }
    }, 'people'), 'Social'), _react2.default.createElement('div', { 'class': 'mdl-layout-spacer', className: 'jsx-247033640',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 43
        }
    }))), _react2.default.createElement('div', {
        className: 'jsx-247033640',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 46
        }
    }), _react2.default.createElement('main', { 'class': 'mdl-layout__content mdl-color--grey-100', className: 'jsx-247033640',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 49
        }
    }, _react2.default.createElement('div', { 'class': 'page-content', className: 'jsx-247033640',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 50
        }
    }, _react2.default.createElement('div', { 'class': 'mdl-grid demo-content', className: 'jsx-247033640',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 51
        }
    }, _react2.default.createElement('div', { 'class': 'mdl-color--transparent mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid', className: 'jsx-247033640',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 52
        }
    }, _react2.default.createElement('div', { 'class': 'mdl-cell mdl-cell--4-col', className: 'jsx-247033640',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 53
        }
    }, _react2.default.createElement(_Card2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 53
        }
    })), _react2.default.createElement('div', { 'class': 'mdl-cell mdl-cell--4-col', className: 'jsx-247033640',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 54
        }
    }, _react2.default.createElement(_Card2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 54
        }
    })), _react2.default.createElement('div', { 'class': 'mdl-cell mdl-cell--4-col', className: 'jsx-247033640',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 55
        }
    }, _react2.default.createElement(_Card2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 55
        }
    }))))))), props.children, _react2.default.createElement(_style2.default, {
        styleId: '247033640',
        css: '\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RDJCIiwiZmlsZSI6ImNvbXBvbmVudHNcXExheW91dC5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9NYXJrdXMvRG9jdW1lbnRzL0dpdEh1Yi93ZWJhcHAiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBDYXJkIGZyb20gJy4vQ2FyZCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4gKFxyXG4gICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zXCIgLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NvZGUuZ2V0bWRsLmlvLzEuMy4wL21hdGVyaWFsLmluZGlnby1waW5rLm1pbi5jc3NcIiAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHA6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDAsNDAwLDUwMCw3MDBcIiB0eXBlPVwidGV4dC9jc3NcIiAvPlxyXG4gICAgICAgICAgICA8c2NyaXB0IGRlZmVyIHNyYz1cImh0dHBzOi8vY29kZS5nZXRtZGwuaW8vMS4zLjAvbWF0ZXJpYWwubWluLmpzXCIgLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtbGF5b3V0IG1kbC1qcy1sYXlvdXQgbWRsLWxheW91dC0tZml4ZWQtZHJhd2VyXHJcbiAgICAgICAgICAgIG1kbC1sYXlvdXQtLWZpeGVkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzcz1cIm1kbC1sYXlvdXRfX2hlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtbGF5b3V0X19oZWFkZXItcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWRsLWxheW91dF9fdGl0bGVcIj5EYXNoYm9hcmQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtbGF5b3V0LXNwYWNlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWJ1dHRvbi0taWNvblwiIGZvcj1cInNlYXJjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnNlYXJjaDwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIFRoZSB0aHJlZSBkb3RzIG9uIHJpZ2h0IHRvcCBjb3JuZXIgZW5kcyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImRlbW8tbWVudS1sb3dlci1yaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtYnV0dG9uLS1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+bW9yZV92ZXJ0PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibWRsLW1lbnUgbWRsLW1lbnUtLWJvdHRvbS1yaWdodCBtZGwtanMtbWVudSBtZGwtanMtcmlwcGxlLWVmZmVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yPVwiZGVtby1tZW51LWxvd2VyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWRsLW1lbnVfX2l0ZW1cIj5PcHRpb248L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1kbC1tZW51X19pdGVtXCI+T3B0aW9uIDI8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBUaGUgdGhyZWUgZG90cyBvbiByaWdodCB0b3AgY29ybmVyIGVuZHMgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtbGF5b3V0X19kcmF3ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1kbC1sYXlvdXQtdGl0bGVcIj48Yj5Tb2NpYWwgQmFyb21ldGVyPC9iPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzPVwiZGVtby1uYXZpZ2F0aW9uIG1kbC1uYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibWRsLW5hdmlnYXRpb25fX2xpbmtcIiBocmVmPVwiXCI+PGkgY2xhc3M9XCJtZGwtY29sb3ItdGV4dC0tYmx1ZS1ncmV5LTQwMCBtYXRlcmlhbC1pY29uc1wiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5ob21lPC9pPkhvbWU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibWRsLW5hdmlnYXRpb25fX2xpbmtcIiBocmVmPVwiXCI+PGkgY2xhc3M9XCJtZGwtY29sb3ItdGV4dC0tYmx1ZS1ncmV5LTQwMCBtYXRlcmlhbC1pY29uc1wiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5kYXNoYm9hcmQ8L2k+RGFzaGJvYXJkPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm1kbC1uYXZpZ2F0aW9uX19saW5rXCIgaHJlZj1cIlwiPjxpIGNsYXNzPVwibWRsLWNvbG9yLXRleHQtLWJsdWUtZ3JleS00MDAgbWF0ZXJpYWwtaWNvbnNcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+cGVvcGxlPC9pPlNvY2lhbDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1sYXlvdXQtc3BhY2VyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8bWFpbiBjbGFzcz1cIm1kbC1sYXlvdXRfX2NvbnRlbnQgbWRsLWNvbG9yLS1ncmV5LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1ncmlkIGRlbW8tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jb2xvci0tdHJhbnNwYXJlbnQgbWRsLXNoYWRvdy0tMmRwIG1kbC1jZWxsIG1kbC1jZWxsLS0xMi1jb2wgbWRsLWdyaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNlbGwgbWRsLWNlbGwtLTQtY29sXCI+PENhcmQvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2VsbCBtZGwtY2VsbC0tNC1jb2xcIj48Q2FyZC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jZWxsIG1kbC1jZWxsLS00LWNvbFwiPjxDYXJkLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxyXG5cclxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbilcclxuIl19 */\n/*@ sourceURL=components\\Layout.js */'
    }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6WyJIZWFkIiwiQ2FyZCIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBVSxBQUVqQjs7Ozs7Ozs7a0JBQWUsVUFBQSxBQUFDLE9BQUQ7MkJBQ1gsY0FBQSxTQUFLLFNBQUwsQUFBVyxzQkFBWDs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0tBQUEsa0JBQ0ksQUFBQzs7c0JBQUQ7d0JBQUEsQUFDSTtBQURKO0FBQUEsK0NBQ1UsTUFBTixBQUFXLFlBQVcsU0FBdEIsQUFBOEIsa0RBQTlCOztzQkFBQTt3QkFESixBQUNJLEFBQ0E7QUFEQTtnREFDTSxTQUFOLEFBQWMsb0JBQWQ7O3NCQUFBO3dCQUZKLEFBRUksQUFDQTtBQURBO2dEQUNNLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCLHNFQUE1Qjs7c0JBQUE7d0JBSEosQUFHSSxBQUNBO0FBREE7Z0RBQ00sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEIsd0VBQTVCOztzQkFBQTt3QkFKSixBQUlJLEFBQ0E7QUFEQTtnREFDTSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QixpRUFBZ0UsTUFBNUYsQUFBaUcsdUJBQWpHOztzQkFBQTt3QkFMSixBQUtJLEFBQ0E7QUFEQTtrREFDUSxPQUFSLE1BQWMsS0FBZCxBQUFrQiwyREFBbEI7O3NCQUFBO3dCQVBSLEFBQ0ksQUFNSSxBQUVBO0FBRkE7eUJBRUEsY0FBQSxTQUFLLFNBQUwsQUFBVywyRkFBWDs7c0JBQUE7d0JBQUEsQUFFSTtBQUZKO3VCQUVJLGNBQUEsWUFBUSxTQUFSLEFBQWMsaUNBQWQ7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxjQUFBLFNBQUssU0FBTCxBQUFXLHFDQUFYOztzQkFBQTt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksY0FBQSxVQUFNLFNBQU4sQUFBWSxnQ0FBWjs7c0JBQUE7d0JBQUE7QUFBQTtPQURKLEFBQ0ksQUFDQSxxREFBSyxTQUFMLEFBQVcsZ0NBQVg7O3NCQUFBO3dCQUZKLEFBRUksQUFDQTtBQURBO3dCQUNBLGNBQUEsV0FBTyxTQUFQLEFBQWEsNkNBQTRDLE9BQXpELEFBQTZELHFCQUE3RDs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO3VCQUNJLGNBQUEsT0FBRyxTQUFILEFBQVMsNkJBQVQ7O3NCQUFBO3dCQUFBO0FBQUE7T0FKUixBQUdJLEFBQ0ksQUFHSiw0QkFBQSxjQUFBLFlBQVEsSUFBUixBQUFXLEFBQ1Y7aUJBREQsQUFDTyx3REFEUDs7c0JBQUE7d0JBQUEsQUFFSTtBQUZKO3VCQUVJLGNBQUEsT0FBRyxTQUFILEFBQVMsNkJBQVQ7O3NCQUFBO3dCQUFBO0FBQUE7T0FUUixBQU9JLEFBRUksQUFHQSwrQkFBQSxjQUFBLFFBQUksU0FBSixBQUFVLEFBQ1Q7ZUFERCxBQUNLLG9DQURMOztzQkFBQTt3QkFBQSxBQUVJO0FBRko7dUJBRUksY0FBQSxRQUFJLFNBQUosQUFBVSw2QkFBVjs7c0JBQUE7d0JBQUE7QUFBQTtPQUZKLEFBRUksQUFDQSwyQkFBQSxjQUFBLFFBQUksU0FBSixBQUFVLDZCQUFWOztzQkFBQTt3QkFBQTtBQUFBO09BbEJwQixBQUVJLEFBQ0ksQUFZUSxBQUdJLEFBS2hCLGdDQUFBLGNBQUEsU0FBSyxTQUFMLEFBQVcsaUNBQVg7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxjQUFBLFVBQU0sU0FBTixBQUFZLCtCQUFaOztzQkFBQTt3QkFBQSxBQUErQjtBQUEvQjt1QkFBK0IsY0FBQTttQkFBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BRG5DLEFBQ0ksQUFBK0IsQUFDL0Isc0NBQUEsY0FBQSxTQUFLLFNBQUwsQUFBVyw2Q0FBWDs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO3VCQUNJLGNBQUEsT0FBRyxTQUFILEFBQVMsd0JBQXVCLE1BQWhDLEFBQXFDLGVBQXJDOztzQkFBQTt3QkFBQSxBQUF3QztBQUF4Qzt1QkFBd0MsY0FBQSxPQUFHLFNBQUgsQUFBUyxnREFBK0MsTUFBeEQsQUFBNkQsMkJBQTdEOztzQkFBQTt3QkFBQTtBQUFBO09BQXhDLEFBQXdDLFNBRDVDLEFBQ0ksQUFDQSx5QkFBQSxjQUFBLE9BQUcsU0FBSCxBQUFTLHdCQUF1QixNQUFoQyxBQUFxQyxlQUFyQzs7c0JBQUE7d0JBQUEsQUFBd0M7QUFBeEM7dUJBQXdDLGNBQUEsT0FBRyxTQUFILEFBQVMsZ0RBQStDLE1BQXhELEFBQTZELDJCQUE3RDs7c0JBQUE7d0JBQUE7QUFBQTtPQUF4QyxBQUF3QyxjQUY1QyxBQUVJLEFBQ0EsOEJBQUEsY0FBQSxPQUFHLFNBQUgsQUFBUyx3QkFBdUIsTUFBaEMsQUFBcUMsZUFBckM7O3NCQUFBO3dCQUFBLEFBQXdDO0FBQXhDO3VCQUF3QyxjQUFBLE9BQUcsU0FBSCxBQUFTLGdEQUErQyxNQUF4RCxBQUE2RCwyQkFBN0Q7O3NCQUFBO3dCQUFBO0FBQUE7T0FBeEMsQUFBd0MsV0FINUMsQUFHSSxBQUNBLGtEQUFLLFNBQUwsQUFBVyxnQ0FBWDs7c0JBQUE7d0JBN0JaLEFBdUJJLEFBRUksQUFJSSxBQUdSO0FBSFE7O21CQUdSOztzQkFBQTt3QkFoQ0osQUFnQ0ksQUFHQTtBQUhBO0FBQUEsd0JBR0EsY0FBQSxVQUFNLFNBQU4sQUFBWSxzREFBWjs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO3VCQUNJLGNBQUEsU0FBSyxTQUFMLEFBQVcsMkJBQVg7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxjQUFBLFNBQUssU0FBTCxBQUFXLG9DQUFYOztzQkFBQTt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksY0FBQSxTQUFLLFNBQUwsQUFBVyx3RkFBWDs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO3VCQUNJLGNBQUEsU0FBSyxTQUFMLEFBQVcsdUNBQVg7O3NCQUFBO3dCQUFBLEFBQXNDO0FBQXRDO3VCQUFzQyxBQUFDOztzQkFBRDt3QkFEMUMsQUFDSSxBQUFzQyxBQUN0QztBQURzQztBQUFBLHlCQUN0QyxjQUFBLFNBQUssU0FBTCxBQUFXLHVDQUFYOztzQkFBQTt3QkFBQSxBQUFzQztBQUF0Qzt1QkFBc0MsQUFBQzs7c0JBQUQ7d0JBRjFDLEFBRUksQUFBc0MsQUFDdEM7QUFEc0M7QUFBQSx5QkFDdEMsY0FBQSxTQUFLLFNBQUwsQUFBVyx1Q0FBWDs7c0JBQUE7d0JBQUEsQUFBc0M7QUFBdEM7dUJBQXNDLEFBQUM7O3NCQUFEO3dCQWxEbEUsQUFTUSxBQW1DSSxBQUNJLEFBQ0ksQUFDSSxBQUdJLEFBQXNDLEFBTXhEO0FBTndEO0FBQUEsb0JBbERsRSxBQXdEZ0I7aUJBeERoQjthQURXLEFBQ1g7QUFBQTtBQURKIiwiZmlsZSI6IkxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9NYXJrdXMvRG9jdW1lbnRzL0dpdEh1Yi93ZWJhcHAifQ==