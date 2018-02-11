"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _recompose = require("recompose");

var _reactGoogleMaps = require("react-google-maps");

var _secrets = require("../secrets.json");

var _secrets2 = _interopRequireDefault(_secrets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/miikamoilanen/uni/social-barometer/webapp-rewrite/new-webapp/app/components/CrimeMap.js";


var mapURL = "https://maps.googleapis.com/maps/api/js?key=" + _secrets2.default.googleMapsAPIKey + "&v=3.exp&libraries=geometry,drawing,places";

var CrimeMap = (0, _recompose.compose)((0, _recompose.withProps)({
  googleMapURL: mapURL,
  loadingElement: _react2.default.createElement("div", { style: { height: "100%" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }),
  containerElement: _react2.default.createElement("div", { style: { height: "400px" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }),
  mapElement: _react2.default.createElement("div", { style: { height: "100%" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  })
}), _reactGoogleMaps.withScriptjs, _reactGoogleMaps.withGoogleMap)(function (_ref) {
  var center = _ref.center,
      crimes = _ref.crimes;
  return _react2.default.createElement(_reactGoogleMaps.GoogleMap, {
    defaultZoom: 14,
    defaultCenter: center,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, crimes.map(function (c, i) {
    return _react2.default.createElement(_reactGoogleMaps.Marker, { key: i, position: { lat: c.lat, lng: c.lng }, __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      }
    });
  }));
});

exports.default = CrimeMap;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL0NyaW1lTWFwLmpzIl0sIm5hbWVzIjpbImNvbXBvc2UiLCJ3aXRoUHJvcHMiLCJ3aXRoU2NyaXB0anMiLCJ3aXRoR29vZ2xlTWFwIiwiR29vZ2xlTWFwIiwiTWFya2VyIiwiSW5mb1dpbmRvdyIsInNlY3JldHMiLCJtYXBVUkwiLCJnb29nbGVNYXBzQVBJS2V5IiwiQ3JpbWVNYXAiLCJnb29nbGVNYXBVUkwiLCJsb2FkaW5nRWxlbWVudCIsImhlaWdodCIsImNvbnRhaW5lckVsZW1lbnQiLCJtYXBFbGVtZW50IiwiY2VudGVyIiwiY3JpbWVzIiwibWFwIiwiYyIsImkiLCJsYXQiLCJsbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFTLEFBQVM7O0FBQ2xCLEFBQVMsQUFBYyxBQUFlLEFBQVcsQUFBUTs7QUFDekQsQUFBTyxBQUFhOzs7Ozs7Ozs7QUFFcEIsSUFBTSwwREFDMkMsa0JBRDNDLEFBQ21ELG1CQUR6RDs7QUFHQSxJQUFNO2dCQUNNLEFBQ00sQUFDZDt5REFBcUIsT0FBTyxFQUFFLFFBQWQsQUFBWTtnQkFBWjtrQkFGUixBQUVRLEFBQ2hCO0FBRGdCO0dBQUE7MkRBQ08sT0FBTyxFQUFFLFFBQWQsQUFBWTtnQkFBWjtrQkFIVixBQUdVLEFBQ2xCO0FBRGtCO0dBQUE7cURBQ0QsT0FBTyxFQUFFLFFBQWQsQUFBWTtnQkFBWjtrQkFMQyxBQUNmLEFBQVUsQUFJSSxBQUVkLEFBQ0E7QUFIYztHQUFBO0FBSkosQUFDUixDQURGLGtFQVFBLGdCQUFBO01BQUEsQUFBRyxjQUFILEFBQUc7TUFBSCxBQUFXLGNBQVgsQUFBVzt5QkFDWCxBQUFDO2lCQUFELEFBQ2UsQUFDYjttQkFGRixBQUVpQjs7Z0JBRmpCO2tCQUFBLEFBSUk7QUFKSjtBQUNFLEdBREYsU0FJSSxBQUFPLElBQUksVUFBQSxBQUFDLEdBQUQsQUFBSSxHQUFKOzJCQUNYLEFBQUMseUNBQU8sS0FBUixBQUFhLEdBQUcsVUFBVSxFQUFDLEtBQUssRUFBTixBQUFRLEtBQUssS0FBSyxFQUE1QyxBQUEwQixBQUFvQjtrQkFBOUM7b0JBRFcsQUFDWDtBQUFBO0tBQUE7QUFOSixBQUNBLEFBSUk7QUFkTixBQUFpQixBQW9CakIsQ0FwQmlCOztrQkFvQmpCLEFBQWUiLCJmaWxlIjoiQ3JpbWVNYXAuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21paWthbW9pbGFuZW4vdW5pL3NvY2lhbC1iYXJvbWV0ZXIvd2ViYXBwLXJld3JpdGUvbmV3LXdlYmFwcCJ9