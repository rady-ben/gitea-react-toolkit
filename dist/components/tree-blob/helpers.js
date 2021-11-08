"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.humanFileSize = exports.fetchTree = void 0;

var _core = require("../../core");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var fetchTree = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var url, config, comparer, _config, response, tree;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = _ref.url, config = _ref.config, comparer = _ref.comparer;
            _config = _objectSpread({
              cache: {
                maxAge: 1 * 2 * 1000 // 2 sec cache override

              }
            }, config);
            _context.next = 4;
            return (0, _core.get)({
              url: url,
              config: _config
            });

          case 4:
            response = _context.sent;
            tree = response.tree;

            if (comparer) {
              tree = tree.sort(comparer);
            }

            return _context.abrupt("return", tree);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchTree(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.fetchTree = fetchTree;

var humanFileSize = function humanFileSize() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  if (size === 0) return '0 B';
  var units = ['B', 'KB', 'MB', 'GB', 'TB'];
  var i = Math.floor(Math.log(size) / Math.log(1024));
  return (size / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + units[i];
};

exports.humanFileSize = humanFileSize;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3RyZWUtYmxvYi9oZWxwZXJzLmpzIl0sIm5hbWVzIjpbImZldGNoVHJlZSIsInVybCIsImNvbmZpZyIsImNvbXBhcmVyIiwiX2NvbmZpZyIsImNhY2hlIiwibWF4QWdlIiwicmVzcG9uc2UiLCJ0cmVlIiwic29ydCIsImh1bWFuRmlsZVNpemUiLCJzaXplIiwidW5pdHMiLCJpIiwiTWF0aCIsImZsb29yIiwibG9nIiwicG93IiwidG9GaXhlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxTQUFTO0FBQUEsc0VBQUc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFTQyxZQUFBQSxHQUFULFFBQVNBLEdBQVQsRUFBY0MsTUFBZCxRQUFjQSxNQUFkLEVBQXNCQyxRQUF0QixRQUFzQkEsUUFBdEI7QUFDakJDLFlBQUFBLE9BRGlCO0FBRXJCQyxjQUFBQSxLQUFLLEVBQUU7QUFDTEMsZ0JBQUFBLE1BQU0sRUFBRSxJQUFJLENBQUosR0FBUSxJQURYLENBQ2lCOztBQURqQjtBQUZjLGVBS2xCSixNQUxrQjtBQUFBO0FBQUEsbUJBT0EsZUFBSTtBQUFFRCxjQUFBQSxHQUFHLEVBQUhBLEdBQUY7QUFBT0MsY0FBQUEsTUFBTSxFQUFFRTtBQUFmLGFBQUosQ0FQQTs7QUFBQTtBQU9qQkcsWUFBQUEsUUFQaUI7QUFRakJDLFlBQUFBLElBUmlCLEdBUVJELFFBUlEsQ0FRakJDLElBUmlCOztBQVV2QixnQkFBSUwsUUFBSixFQUNBO0FBQ0VLLGNBQUFBLElBQUksR0FBR0EsSUFBSSxDQUFDQyxJQUFMLENBQVVOLFFBQVYsQ0FBUDtBQUNEOztBQWJzQiw2Q0FlaEJLLElBZmdCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVRSLFNBQVM7QUFBQTtBQUFBO0FBQUEsR0FBZjs7OztBQWtCQSxJQUFNVSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQVk7QUFBQSxNQUFYQyxJQUFXLHVFQUFOLENBQU07QUFDdkMsTUFBSUEsSUFBSSxLQUFLLENBQWIsRUFBZ0IsT0FBTyxLQUFQO0FBQ2hCLE1BQU1DLEtBQUssR0FBRyxDQUFDLEdBQUQsRUFBTSxJQUFOLEVBQVksSUFBWixFQUFrQixJQUFsQixFQUF3QixJQUF4QixDQUFkO0FBQ0EsTUFBTUMsQ0FBQyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBWUQsSUFBSSxDQUFDRSxHQUFMLENBQVNMLElBQVQsSUFBaUJHLElBQUksQ0FBQ0UsR0FBTCxDQUFTLElBQVQsQ0FBN0IsQ0FBVjtBQUNBLFNBQU8sQ0FBRUwsSUFBSSxHQUFHRyxJQUFJLENBQUNHLEdBQUwsQ0FBUyxJQUFULEVBQWVKLENBQWYsQ0FBVCxFQUE2QkssT0FBN0IsQ0FBcUMsQ0FBckMsSUFBMEMsQ0FBMUMsR0FBOEMsR0FBOUMsR0FBb0ROLEtBQUssQ0FBQ0MsQ0FBRCxDQUFoRTtBQUNELENBTE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXQgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGNvbnN0IGZldGNoVHJlZSA9IGFzeW5jICh7IHVybCwgY29uZmlnLCBjb21wYXJlciB9KSA9PiB7XG4gIGNvbnN0IF9jb25maWcgPSB7XG4gICAgY2FjaGU6IHtcbiAgICAgIG1heEFnZTogMSAqIDIgKiAxMDAwLCAvLyAyIHNlYyBjYWNoZSBvdmVycmlkZVxuICAgIH0sXG4gICAgLi4uY29uZmlnLFxuICB9O1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldCh7IHVybCwgY29uZmlnOiBfY29uZmlnIH0pO1xuICBsZXQgeyB0cmVlIH0gPSByZXNwb25zZTtcblxuICBpZiAoY29tcGFyZXIpXG4gIHtcbiAgICB0cmVlID0gdHJlZS5zb3J0KGNvbXBhcmVyKTtcbiAgfVxuXG4gIHJldHVybiB0cmVlO1xufTtcblxuZXhwb3J0IGNvbnN0IGh1bWFuRmlsZVNpemUgPSAoc2l6ZT0wKSA9PiB7XG4gIGlmIChzaXplID09PSAwKSByZXR1cm4gJzAgQic7XG4gIGNvbnN0IHVuaXRzID0gWydCJywgJ0tCJywgJ01CJywgJ0dCJywgJ1RCJ107XG4gIGNvbnN0IGkgPSBNYXRoLmZsb29yKCBNYXRoLmxvZyhzaXplKSAvIE1hdGgubG9nKDEwMjQpICk7XG4gIHJldHVybiAoIHNpemUgLyBNYXRoLnBvdygxMDI0LCBpKSApLnRvRml4ZWQoMikgKiAxICsgJyAnICsgdW5pdHNbaV07XG59O1xuIl19