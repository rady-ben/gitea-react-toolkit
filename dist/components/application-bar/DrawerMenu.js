"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _icons = require("@material-ui/icons");

var _useStyles = require("./useStyles");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function DrawerMenu(_ref) {
  var children = _ref.children,
      hideRepoContents = _ref.hideRepoContents,
      closeOnListItemsClick = _ref.closeOnListItemsClick;
  var classes = (0, _useStyles.useStyles)();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      openDrawer = _useState2[0],
      setOpenDrawer = _useState2[1];

  var _ref2 = (0, _react.useContext)(_.FileContext) || {},
      components = _ref2.components;

  var toggleDrawer = function toggleDrawer() {
    setOpenDrawer(!openDrawer);
  };

  var drawerClasses = {
    paper: classes.drawerPaper
  };

  var onDrawerItemClick = function onDrawerItemClick() {
    if (closeOnListItemsClick) {
      toggleDrawer();
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    "data-test": "drawer-menu-button",
    color: "inherit",
    "aria-label": "Menu",
    onClick: toggleDrawer
  }, /*#__PURE__*/_react.default.createElement(_icons.Menu, null)), /*#__PURE__*/_react.default.createElement(_core.Drawer, {
    className: classes.drawer,
    variant: "temporary",
    anchor: "left",
    open: openDrawer,
    onClose: toggleDrawer,
    classes: drawerClasses
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.drawerHeader
  }, /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    "data-test": "drawer-menu-close-button",
    onClick: toggleDrawer
  }, /*#__PURE__*/_react.default.createElement(_icons.ChevronLeft, null))), /*#__PURE__*/_react.default.createElement(_core.Divider, null), /*#__PURE__*/_react.default.createElement("div", {
    id: "list-items",
    onClick: onDrawerItemClick
  }, children), /*#__PURE__*/_react.default.createElement(_core.Divider, null), !hideRepoContents && components && components.browse, /*#__PURE__*/_react.default.createElement(_core.Divider, null)));
}

;
DrawerMenu.propTypes = {
  /** Component to render inside of the drawer menu. */
  children: _propTypes.default.element,

  /** Set whether or not to hide the contents of the Repo in the Drawer. */
  hideRepoContents: _propTypes.default.bool,

  /** Set whether or not the list items close the drawer on OnClick event. */
  closeOnListItemsClick: _propTypes.default.bool
};
var _default = DrawerMenu;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcGxpY2F0aW9uLWJhci9EcmF3ZXJNZW51LmpzIl0sIm5hbWVzIjpbIkRyYXdlck1lbnUiLCJjaGlsZHJlbiIsImhpZGVSZXBvQ29udGVudHMiLCJjbG9zZU9uTGlzdEl0ZW1zQ2xpY2siLCJjbGFzc2VzIiwib3BlbkRyYXdlciIsInNldE9wZW5EcmF3ZXIiLCJGaWxlQ29udGV4dCIsImNvbXBvbmVudHMiLCJ0b2dnbGVEcmF3ZXIiLCJkcmF3ZXJDbGFzc2VzIiwicGFwZXIiLCJkcmF3ZXJQYXBlciIsIm9uRHJhd2VySXRlbUNsaWNrIiwiZHJhd2VyIiwiZHJhd2VySGVhZGVyIiwiYnJvd3NlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudCIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUtBOztBQUtBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLFNBQVNBLFVBQVQsT0FJRztBQUFBLE1BSERDLFFBR0MsUUFIREEsUUFHQztBQUFBLE1BRkRDLGdCQUVDLFFBRkRBLGdCQUVDO0FBQUEsTUFEREMscUJBQ0MsUUFEREEscUJBQ0M7QUFDRCxNQUFNQyxPQUFPLEdBQUcsMkJBQWhCOztBQURDLGtCQUVtQyxxQkFBUyxLQUFULENBRm5DO0FBQUE7QUFBQSxNQUVNQyxVQUZOO0FBQUEsTUFFa0JDLGFBRmxCOztBQUFBLGNBR3NCLHVCQUFXQyxhQUFYLEtBQTJCLEVBSGpEO0FBQUEsTUFHT0MsVUFIUCxTQUdPQSxVQUhQOztBQUtELE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekJILElBQUFBLGFBQWEsQ0FBQyxDQUFDRCxVQUFGLENBQWI7QUFDRCxHQUZEOztBQUlBLE1BQU1LLGFBQWEsR0FBRztBQUFFQyxJQUFBQSxLQUFLLEVBQUVQLE9BQU8sQ0FBQ1E7QUFBakIsR0FBdEI7O0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzlCLFFBQUlWLHFCQUFKLEVBQTJCO0FBQ3pCTSxNQUFBQSxZQUFZO0FBQ2I7QUFDRixHQUpEOztBQU1BLHNCQUNFLHVEQUNFLDZCQUFDLGdCQUFEO0FBQVksaUJBQVUsb0JBQXRCO0FBQTJDLElBQUEsS0FBSyxFQUFDLFNBQWpEO0FBQTJELGtCQUFXLE1BQXRFO0FBQTZFLElBQUEsT0FBTyxFQUFFQTtBQUF0RixrQkFDRSw2QkFBQyxXQUFELE9BREYsQ0FERixlQUlFLDZCQUFDLFlBQUQ7QUFDRSxJQUFBLFNBQVMsRUFBRUwsT0FBTyxDQUFDVSxNQURyQjtBQUVFLElBQUEsT0FBTyxFQUFDLFdBRlY7QUFFc0IsSUFBQSxNQUFNLEVBQUMsTUFGN0I7QUFHRSxJQUFBLElBQUksRUFBRVQsVUFIUjtBQUlFLElBQUEsT0FBTyxFQUFFSSxZQUpYO0FBS0UsSUFBQSxPQUFPLEVBQUVDO0FBTFgsa0JBTUU7QUFBSyxJQUFBLFNBQVMsRUFBRU4sT0FBTyxDQUFDVztBQUF4QixrQkFDRSw2QkFBQyxnQkFBRDtBQUFZLGlCQUFVLDBCQUF0QjtBQUFpRCxJQUFBLE9BQU8sRUFBRU47QUFBMUQsa0JBQ0UsNkJBQUMsa0JBQUQsT0FERixDQURGLENBTkYsZUFXRSw2QkFBQyxhQUFELE9BWEYsZUFZRTtBQUFLLElBQUEsRUFBRSxFQUFDLFlBQVI7QUFBcUIsSUFBQSxPQUFPLEVBQUVJO0FBQTlCLEtBQ0daLFFBREgsQ0FaRixlQWVFLDZCQUFDLGFBQUQsT0FmRixFQWdCSSxDQUFDQyxnQkFBRCxJQUFxQk0sVUFBckIsSUFBbUNBLFVBQVUsQ0FBQ1EsTUFoQmxELGVBaUJFLDZCQUFDLGFBQUQsT0FqQkYsQ0FKRixDQURGO0FBMEJEOztBQUFBO0FBRURoQixVQUFVLENBQUNpQixTQUFYLEdBQXVCO0FBQ3JCO0FBQ0FoQixFQUFBQSxRQUFRLEVBQUVpQixtQkFBVUMsT0FGQzs7QUFHckI7QUFDQWpCLEVBQUFBLGdCQUFnQixFQUFFZ0IsbUJBQVVFLElBSlA7O0FBS3JCO0FBQ0FqQixFQUFBQSxxQkFBcUIsRUFBRWUsbUJBQVVFO0FBTlosQ0FBdkI7ZUFTZXBCLFUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtcbiAgSWNvbkJ1dHRvbixcbiAgRHJhd2VyLFxuICBEaXZpZGVyLFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQge1xuICBNZW51LFxuICBDaGV2cm9uTGVmdCxcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJztcblxuaW1wb3J0IHsgdXNlU3R5bGVzIH0gZnJvbSAnLi91c2VTdHlsZXMnO1xuaW1wb3J0IHsgRmlsZUNvbnRleHQgfSBmcm9tICcuLic7XG5cbmZ1bmN0aW9uIERyYXdlck1lbnUoe1xuICBjaGlsZHJlbixcbiAgaGlkZVJlcG9Db250ZW50cyxcbiAgY2xvc2VPbkxpc3RJdGVtc0NsaWNrLFxufSkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtvcGVuRHJhd2VyLCBzZXRPcGVuRHJhd2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyBjb21wb25lbnRzIH0gPSB1c2VDb250ZXh0KEZpbGVDb250ZXh0KSB8fCB7fTtcblxuICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoKSA9PiB7XG4gICAgc2V0T3BlbkRyYXdlcighb3BlbkRyYXdlcik7XG4gIH07XG5cbiAgY29uc3QgZHJhd2VyQ2xhc3NlcyA9IHsgcGFwZXI6IGNsYXNzZXMuZHJhd2VyUGFwZXIgfTtcblxuICBjb25zdCBvbkRyYXdlckl0ZW1DbGljayA9ICgpID0+IHtcbiAgICBpZiAoY2xvc2VPbkxpc3RJdGVtc0NsaWNrKSB7XG4gICAgICB0b2dnbGVEcmF3ZXIoKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxJY29uQnV0dG9uIGRhdGEtdGVzdD1cImRyYXdlci1tZW51LWJ1dHRvblwiIGNvbG9yPVwiaW5oZXJpdFwiIGFyaWEtbGFiZWw9XCJNZW51XCIgb25DbGljaz17dG9nZ2xlRHJhd2VyfSA+XG4gICAgICAgIDxNZW51IC8+XG4gICAgICA8L0ljb25CdXR0b24+XG4gICAgICA8RHJhd2VyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJ9XG4gICAgICAgIHZhcmlhbnQ9XCJ0ZW1wb3JhcnlcIiBhbmNob3I9XCJsZWZ0XCJcbiAgICAgICAgb3Blbj17b3BlbkRyYXdlcn1cbiAgICAgICAgb25DbG9zZT17dG9nZ2xlRHJhd2VyfVxuICAgICAgICBjbGFzc2VzPXtkcmF3ZXJDbGFzc2VzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VySGVhZGVyfT5cbiAgICAgICAgICA8SWNvbkJ1dHRvbiBkYXRhLXRlc3Q9XCJkcmF3ZXItbWVudS1jbG9zZS1idXR0b25cIiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9PlxuICAgICAgICAgICAgPENoZXZyb25MZWZ0IC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgPGRpdiBpZD0nbGlzdC1pdGVtcycgb25DbGljaz17b25EcmF3ZXJJdGVtQ2xpY2t9PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgIHsgIWhpZGVSZXBvQ29udGVudHMgJiYgY29tcG9uZW50cyAmJiBjb21wb25lbnRzLmJyb3dzZSB9XG4gICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICA8L0RyYXdlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkRyYXdlck1lbnUucHJvcFR5cGVzID0ge1xuICAvKiogQ29tcG9uZW50IHRvIHJlbmRlciBpbnNpZGUgb2YgdGhlIGRyYXdlciBtZW51LiAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQsXG4gIC8qKiBTZXQgd2hldGhlciBvciBub3QgdG8gaGlkZSB0aGUgY29udGVudHMgb2YgdGhlIFJlcG8gaW4gdGhlIERyYXdlci4gKi9cbiAgaGlkZVJlcG9Db250ZW50czogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKiBTZXQgd2hldGhlciBvciBub3QgdGhlIGxpc3QgaXRlbXMgY2xvc2UgdGhlIGRyYXdlciBvbiBPbkNsaWNrIGV2ZW50LiAqL1xuICBjbG9zZU9uTGlzdEl0ZW1zQ2xpY2s6IFByb3BUeXBlcy5ib29sLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRHJhd2VyTWVudTtcbiJdfQ==