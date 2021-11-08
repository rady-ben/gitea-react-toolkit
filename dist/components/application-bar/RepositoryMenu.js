"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _icons = require("@material-ui/icons");

var _useStyles = require("./useStyles");

var _ = require("..");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function RepositoryMenu() {
  var classes = (0, _useStyles.useStyles)();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      modal = _useState2[0],
      setModal = _useState2[1];

  var _ref = (0, _react.useContext)(_.RepositoryContext) || {},
      repository = _ref.state,
      actions = _ref.actions,
      repositoryComponent = _ref.component;

  var _ref2 = (0, _react.useContext)(_.FileContext) || {},
      file = _ref2.state,
      fileStateValues = _ref2.stateValues,
      fileActions = _ref2.actions;

  var _ref3 = repository || {},
      name = _ref3.name,
      avatar_url = _ref3.avatar_url,
      owner = _ref3.owner,
      full_name = _ref3.full_name;

  var _onDelete = (0, _react.useCallback)(function () {
    if (file && actions !== null && actions !== void 0 && actions.close) {
      if (fileActions !== null && fileActions !== void 0 && fileActions.onConfirmClose) {
        if (fileActions.onConfirmClose()) {
          actions.close();
        }
      } else {
        actions.close();
      }
    }
  }, [actions.close, file, fileActions === null || fileActions === void 0 ? void 0 : fileActions.onConfirmClose]);

  var handleOpen = (0, _react.useCallback)(function () {
    setModal(true);
  }, []);
  var button;

  if (name && owner) {
    var avatarComponent = /*#__PURE__*/_react.default.createElement(_core.Avatar, {
      src: avatar_url || owner.avatar_url
    });

    button = /*#__PURE__*/_react.default.createElement(_core.Chip, {
      "data-test": "repository-item-icon",
      "aria-label": "repository-item-icon",
      avatar: avatarComponent,
      label: /*#__PURE__*/_react.default.createElement("span", {
        "data-test": "repository-item-chip"
      }, name),
      onDelete: _onDelete,
      color: "primary"
    });
  } else {
    button = /*#__PURE__*/_react.default.createElement(_core.IconButton, {
      onClick: handleOpen,
      color: "inherit"
    }, /*#__PURE__*/_react.default.createElement(_icons.FolderShared, null));
  }

  ;

  var modalComponent = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);

  if (modal && !full_name) {
    modalComponent = /*#__PURE__*/_react.default.createElement(_core.Modal, {
      "data-test": "repository-menu-modal",
      open: true,
      onClose: function onClose() {
        return setModal(false);
      }
    }, /*#__PURE__*/_react.default.createElement(_core.Paper, {
      className: classes.modal
    }, repositoryComponent));
  }

  ;
  return /*#__PURE__*/_react.default.createElement("div", {
    "data-test": "repository-menu"
  }, button, modalComponent);
}

;
RepositoryMenu.propTypes = {};
var _default = RepositoryMenu;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcGxpY2F0aW9uLWJhci9SZXBvc2l0b3J5TWVudS5qcyJdLCJuYW1lcyI6WyJSZXBvc2l0b3J5TWVudSIsImNsYXNzZXMiLCJtb2RhbCIsInNldE1vZGFsIiwiUmVwb3NpdG9yeUNvbnRleHQiLCJyZXBvc2l0b3J5Iiwic3RhdGUiLCJhY3Rpb25zIiwicmVwb3NpdG9yeUNvbXBvbmVudCIsImNvbXBvbmVudCIsIkZpbGVDb250ZXh0IiwiZmlsZSIsImZpbGVTdGF0ZVZhbHVlcyIsInN0YXRlVmFsdWVzIiwiZmlsZUFjdGlvbnMiLCJuYW1lIiwiYXZhdGFyX3VybCIsIm93bmVyIiwiZnVsbF9uYW1lIiwiX29uRGVsZXRlIiwiY2xvc2UiLCJvbkNvbmZpcm1DbG9zZSIsImhhbmRsZU9wZW4iLCJidXR0b24iLCJhdmF0YXJDb21wb25lbnQiLCJtb2RhbENvbXBvbmVudCIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7O0FBR0E7O0FBT0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLFNBQVNBLGNBQVQsR0FBMEI7QUFDeEIsTUFBTUMsT0FBTyxHQUFHLDJCQUFoQjs7QUFEd0Isa0JBRUUscUJBQVMsS0FBVCxDQUZGO0FBQUE7QUFBQSxNQUVqQkMsS0FGaUI7QUFBQSxNQUVWQyxRQUZVOztBQUFBLGFBT3BCLHVCQUFXQyxtQkFBWCxLQUFpQyxFQVBiO0FBQUEsTUFJZkMsVUFKZSxRQUl0QkMsS0FKc0I7QUFBQSxNQUt0QkMsT0FMc0IsUUFLdEJBLE9BTHNCO0FBQUEsTUFNWEMsbUJBTlcsUUFNdEJDLFNBTnNCOztBQUFBLGNBU29ELHVCQUFXQyxhQUFYLEtBQTJCLEVBVC9FO0FBQUEsTUFTVEMsSUFUUyxTQVNoQkwsS0FUZ0I7QUFBQSxNQVNVTSxlQVRWLFNBU0hDLFdBVEc7QUFBQSxNQVNvQ0MsV0FUcEMsU0FTMkJQLE9BVDNCOztBQUFBLGNBZ0JwQkYsVUFBVSxJQUFJLEVBaEJNO0FBQUEsTUFZdEJVLElBWnNCLFNBWXRCQSxJQVpzQjtBQUFBLE1BYXRCQyxVQWJzQixTQWF0QkEsVUFic0I7QUFBQSxNQWN0QkMsS0Fkc0IsU0FjdEJBLEtBZHNCO0FBQUEsTUFldEJDLFNBZnNCLFNBZXRCQSxTQWZzQjs7QUFrQnhCLE1BQU1DLFNBQVMsR0FBRyx3QkFBWSxZQUFNO0FBQ2xDLFFBQUlSLElBQUksSUFBSUosT0FBSixhQUFJQSxPQUFKLGVBQUlBLE9BQU8sQ0FBRWEsS0FBckIsRUFBNEI7QUFDMUIsVUFBSU4sV0FBSixhQUFJQSxXQUFKLGVBQUlBLFdBQVcsQ0FBRU8sY0FBakIsRUFBaUM7QUFDL0IsWUFBSVAsV0FBVyxDQUFDTyxjQUFaLEVBQUosRUFDQTtBQUNFZCxVQUFBQSxPQUFPLENBQUNhLEtBQVI7QUFDRDtBQUNGLE9BTEQsTUFPQTtBQUNFYixRQUFBQSxPQUFPLENBQUNhLEtBQVI7QUFDRDtBQUNGO0FBQ0YsR0FiaUIsRUFhaEIsQ0FBQ2IsT0FBTyxDQUFDYSxLQUFULEVBQWdCVCxJQUFoQixFQUFzQkcsV0FBdEIsYUFBc0JBLFdBQXRCLHVCQUFzQkEsV0FBVyxDQUFFTyxjQUFuQyxDQWJnQixDQUFsQjs7QUFlQSxNQUFNQyxVQUFVLEdBQUcsd0JBQVksWUFBTTtBQUNuQ25CLElBQUFBLFFBQVEsQ0FBQyxJQUFELENBQVI7QUFDRCxHQUZrQixFQUVoQixFQUZnQixDQUFuQjtBQUlBLE1BQUlvQixNQUFKOztBQUVBLE1BQUlSLElBQUksSUFBSUUsS0FBWixFQUFtQjtBQUNqQixRQUFNTyxlQUFlLGdCQUFHLDZCQUFDLFlBQUQ7QUFBUSxNQUFBLEdBQUcsRUFBRVIsVUFBVSxJQUFJQyxLQUFLLENBQUNEO0FBQWpDLE1BQXhCOztBQUVBTyxJQUFBQSxNQUFNLGdCQUNKLDZCQUFDLFVBQUQ7QUFDRSxtQkFBVSxzQkFEWjtBQUVFLG9CQUFXLHNCQUZiO0FBR0UsTUFBQSxNQUFNLEVBQUVDLGVBSFY7QUFJRSxNQUFBLEtBQUssZUFBRTtBQUFNLHFCQUFVO0FBQWhCLFNBQXdDVCxJQUF4QyxDQUpUO0FBS0UsTUFBQSxRQUFRLEVBQUVJLFNBTFo7QUFNRSxNQUFBLEtBQUssRUFBQztBQU5SLE1BREY7QUFVRCxHQWJELE1BYU87QUFDTEksSUFBQUEsTUFBTSxnQkFDSiw2QkFBQyxnQkFBRDtBQUFZLE1BQUEsT0FBTyxFQUFFRCxVQUFyQjtBQUFpQyxNQUFBLEtBQUssRUFBQztBQUF2QyxvQkFDRSw2QkFBQyxtQkFBRCxPQURGLENBREY7QUFLRDs7QUFBQTs7QUFFRCxNQUFJRyxjQUFjLGdCQUFHLDJEQUFyQjs7QUFFQSxNQUFJdkIsS0FBSyxJQUFJLENBQUNnQixTQUFkLEVBQXlCO0FBQ3ZCTyxJQUFBQSxjQUFjLGdCQUNaLDZCQUFDLFdBQUQ7QUFBTyxtQkFBVSx1QkFBakI7QUFBeUMsTUFBQSxJQUFJLEVBQUUsSUFBL0M7QUFBcUQsTUFBQSxPQUFPLEVBQUU7QUFBQSxlQUFNdEIsUUFBUSxDQUFDLEtBQUQsQ0FBZDtBQUFBO0FBQTlELG9CQUNFLDZCQUFDLFdBQUQ7QUFBTyxNQUFBLFNBQVMsRUFBRUYsT0FBTyxDQUFDQztBQUExQixPQUNHTSxtQkFESCxDQURGLENBREY7QUFPRDs7QUFBQTtBQUVELHNCQUNFO0FBQUssaUJBQVU7QUFBZixLQUNHZSxNQURILEVBRUdFLGNBRkgsQ0FERjtBQU1EOztBQUFBO0FBRUR6QixjQUFjLENBQUMwQixTQUFmLEdBQTJCLEVBQTNCO2VBR2UxQixjIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG5pbXBvcnQgUmVhY3QsIHtcbiAgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LFxufSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBJY29uQnV0dG9uLFxuICBBdmF0YXIsXG4gIE1vZGFsLFxuICBQYXBlcixcbiAgQ2hpcCxcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgRm9sZGVyU2hhcmVkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJztcblxuaW1wb3J0IHsgdXNlU3R5bGVzIH0gZnJvbSAnLi91c2VTdHlsZXMnO1xuaW1wb3J0IHsgUmVwb3NpdG9yeUNvbnRleHQsIEZpbGVDb250ZXh0IH0gZnJvbSAnLi4nO1xuXG5mdW5jdGlvbiBSZXBvc2l0b3J5TWVudSgpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qge1xuICAgIHN0YXRlOiByZXBvc2l0b3J5LFxuICAgIGFjdGlvbnMsXG4gICAgY29tcG9uZW50OiByZXBvc2l0b3J5Q29tcG9uZW50LFxuICB9ID0gdXNlQ29udGV4dChSZXBvc2l0b3J5Q29udGV4dCkgfHwge307XG4gIFxuICBjb25zdCB7IHN0YXRlOiBmaWxlLCBzdGF0ZVZhbHVlczogZmlsZVN0YXRlVmFsdWVzLCBhY3Rpb25zOiBmaWxlQWN0aW9ucyB9ID0gdXNlQ29udGV4dChGaWxlQ29udGV4dCkgfHwge307XG5cbiAgY29uc3Qge1xuICAgIG5hbWUsXG4gICAgYXZhdGFyX3VybCxcbiAgICBvd25lcixcbiAgICBmdWxsX25hbWUsXG4gIH0gPSByZXBvc2l0b3J5IHx8IHt9O1xuXG4gIGNvbnN0IF9vbkRlbGV0ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoZmlsZSAmJiBhY3Rpb25zPy5jbG9zZSkge1xuICAgICAgaWYgKGZpbGVBY3Rpb25zPy5vbkNvbmZpcm1DbG9zZSkge1xuICAgICAgICBpZiAoZmlsZUFjdGlvbnMub25Db25maXJtQ2xvc2UoKSlcbiAgICAgICAge1xuICAgICAgICAgIGFjdGlvbnMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgICBhY3Rpb25zLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICB9LFthY3Rpb25zLmNsb3NlLCBmaWxlLCBmaWxlQWN0aW9ucz8ub25Db25maXJtQ2xvc2VdKTtcblxuICBjb25zdCBoYW5kbGVPcGVuID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldE1vZGFsKHRydWUpO1xuICB9LCBbXSk7XG5cbiAgbGV0IGJ1dHRvbjtcblxuICBpZiAobmFtZSAmJiBvd25lcikge1xuICAgIGNvbnN0IGF2YXRhckNvbXBvbmVudCA9IDxBdmF0YXIgc3JjPXthdmF0YXJfdXJsIHx8IG93bmVyLmF2YXRhcl91cmx9IC8+O1xuXG4gICAgYnV0dG9uID0gKFxuICAgICAgPENoaXBcbiAgICAgICAgZGF0YS10ZXN0PVwicmVwb3NpdG9yeS1pdGVtLWljb25cIlxuICAgICAgICBhcmlhLWxhYmVsPVwicmVwb3NpdG9yeS1pdGVtLWljb25cIlxuICAgICAgICBhdmF0YXI9e2F2YXRhckNvbXBvbmVudH1cbiAgICAgICAgbGFiZWw9ezxzcGFuIGRhdGEtdGVzdD1cInJlcG9zaXRvcnktaXRlbS1jaGlwXCI+e25hbWV9PC9zcGFuPn1cbiAgICAgICAgb25EZWxldGU9e19vbkRlbGV0ZX1cbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgIC8+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBidXR0b24gPSAoXG4gICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVPcGVufSBjb2xvcj1cImluaGVyaXRcIj5cbiAgICAgICAgPEZvbGRlclNoYXJlZCAvPlxuICAgICAgPC9JY29uQnV0dG9uPlxuICAgICk7XG4gIH07XG5cbiAgbGV0IG1vZGFsQ29tcG9uZW50ID0gPD48Lz47XG5cbiAgaWYgKG1vZGFsICYmICFmdWxsX25hbWUpIHtcbiAgICBtb2RhbENvbXBvbmVudCA9IChcbiAgICAgIDxNb2RhbCBkYXRhLXRlc3Q9XCJyZXBvc2l0b3J5LW1lbnUtbW9kYWxcIiBvcGVuPXt0cnVlfSBvbkNsb3NlPXsoKSA9PiBzZXRNb2RhbChmYWxzZSl9PlxuICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsfT5cbiAgICAgICAgICB7cmVwb3NpdG9yeUNvbXBvbmVudH1cbiAgICAgICAgPC9QYXBlcj5cbiAgICAgIDwvTW9kYWw+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgZGF0YS10ZXN0PVwicmVwb3NpdG9yeS1tZW51XCI+XG4gICAgICB7YnV0dG9ufVxuICAgICAge21vZGFsQ29tcG9uZW50fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuUmVwb3NpdG9yeU1lbnUucHJvcFR5cGVzID0ge1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVwb3NpdG9yeU1lbnU7XG4iXX0=