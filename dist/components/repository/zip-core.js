"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFileFromRepoZip = exports.getFilesFromRepoZip = exports.getZip = exports.removeRepoZip = exports.storeZipFromRepo = exports.zipUri = void 0;

var _path = _interopRequireDefault(require("path"));

var _jszip = _interopRequireDefault(require("jszip"));

var _localforage = _interopRequireDefault(require("localforage"));

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var zipStore = _localforage.default.createInstance({
  driver: [_localforage.default.INDEXEDDB],
  name: 'zip-store'
}); // https://git.door43.org/unfoldingWord/en_ult/archive/master.zip


var zipUri = function zipUri(_ref) {
  var owner = _ref.owner,
      repo = _ref.repo,
      _ref$branch = _ref.branch,
      branch = _ref$branch === void 0 ? 'master' : _ref$branch,
      server = _ref.server;

  var zipUri = _path.default.join(server, owner, repo, 'archive', "".concat(branch, ".zip"));

  return zipUri;
};

exports.zipUri = zipUri;

function zipUriSubPath(owner, repo, branch) {
  var url = _path.default.join(owner, repo, 'archive', "".concat(branch, ".zip"));

  return url;
}

var storeZipFromRepo = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
    var owner, repo, branch, server, response, url, zip, zipArrayBuffer, uri;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            owner = _ref2.owner, repo = _ref2.repo, branch = _ref2.branch, server = _ref2.server;
            url = zipUriSubPath(owner, repo, branch);
            _context.prev = 2;
            _context.next = 5;
            return (0, _.get)({
              url: url,
              config: {
                server: server,
                responseType: 'arraybuffer'
              },
              noCache: true,
              fullResponse: true
            });

          case 5:
            zip = _context.sent;

            if (!(zip.status === 200 || zip.status === 0)) {
              _context.next = 12;
              break;
            }

            zipArrayBuffer = zip.data;
            uri = zipUri({
              owner: owner,
              repo: repo,
              branch: branch,
              server: server
            });
            _context.next = 11;
            return zipStore.setItem(uri, zipArrayBuffer);

          case 11:
            response = true;

          case 12:
            _context.next = 17;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](2);
            response = false;

          case 17:
            return _context.abrupt("return", response);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 14]]);
  }));

  return function storeZipFromRepo(_x) {
    return _ref3.apply(this, arguments);
  };
}();

exports.storeZipFromRepo = storeZipFromRepo;

var removeRepoZip = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref4) {
    var owner, repo, branch, server, response, uri;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            owner = _ref4.owner, repo = _ref4.repo, branch = _ref4.branch, server = _ref4.server;
            uri = zipUri({
              owner: owner,
              repo: repo,
              branch: branch,
              server: server
            });
            _context2.prev = 2;
            _context2.next = 5;
            return zipStore.removeItem(uri);

          case 5:
            response = true;
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](2);
            response = false;

          case 11:
            ;
            return _context2.abrupt("return", response);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 8]]);
  }));

  return function removeRepoZip(_x2) {
    return _ref5.apply(this, arguments);
  };
}();

exports.removeRepoZip = removeRepoZip;

var getZip = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref6) {
    var owner, repo, branch, config, zip, uri, zipBlob;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            owner = _ref6.owner, repo = _ref6.repo, branch = _ref6.branch, config = _ref6.config;
            uri = zipUri({
              owner: owner,
              repo: repo,
              branch: branch,
              server: config.server
            });
            _context3.next = 4;
            return zipStore.getItem(uri);

          case 4:
            zipBlob = _context3.sent;

            if (!zipBlob) {
              _context3.next = 11;
              break;
            }

            _context3.next = 8;
            return _jszip.default.loadAsync(zipBlob);

          case 8:
            zip = _context3.sent;
            _context3.next = 12;
            break;

          case 11:
            console.log("No zip file found for ".concat(uri, "."));

          case 12:
            ;
            return _context3.abrupt("return", zip);

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getZip(_x3) {
    return _ref7.apply(this, arguments);
  };
}();

exports.getZip = getZip;

var getFilesFromRepoZip = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref8) {
    var owner, repo, branch, config, files, zip;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            owner = _ref8.owner, repo = _ref8.repo, branch = _ref8.branch, config = _ref8.config;
            _context4.next = 3;
            return getZip({
              owner: owner,
              repo: repo,
              branch: branch,
              config: config
            });

          case 3:
            zip = _context4.sent;

            if (zip) {
              files = zip.files;
            }

            ;
            return _context4.abrupt("return", files);

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getFilesFromRepoZip(_x4) {
    return _ref9.apply(this, arguments);
  };
}();

exports.getFilesFromRepoZip = getFilesFromRepoZip;

var getFileFromRepoZip = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(_ref10) {
    var owner, repo, branch, filepath, config, file, zip, zipPath, fileObject;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            owner = _ref10.owner, repo = _ref10.repo, branch = _ref10.branch, filepath = _ref10.filepath, config = _ref10.config;
            _context5.next = 3;
            return getZip({
              owner: owner,
              repo: repo,
              branch: branch,
              config: config
            });

          case 3:
            zip = _context5.sent;

            if (!zip) {
              _context5.next = 15;
              break;
            }

            zipPath = _path.default.join(repo.toLowerCase(), filepath);
            fileObject = zip.files[zipPath];

            if (!fileObject) {
              _context5.next = 13;
              break;
            }

            _context5.next = 10;
            return fileObject.async('string');

          case 10:
            file = _context5.sent;
            _context5.next = 14;
            break;

          case 13:
            console.log("Filepath ".concat(filepath, " not found in ").concat(config.server, "/").concat(owner, "/").concat(repo, "/").concat(branch));

          case 14:
            ;

          case 15:
            ;
            return _context5.abrupt("return", file);

          case 17:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function getFileFromRepoZip(_x5) {
    return _ref11.apply(this, arguments);
  };
}();

exports.getFileFromRepoZip = getFileFromRepoZip;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlcG9zaXRvcnkvemlwLWNvcmUuanMiXSwibmFtZXMiOlsiemlwU3RvcmUiLCJsb2NhbGZvcmFnZSIsImNyZWF0ZUluc3RhbmNlIiwiZHJpdmVyIiwiSU5ERVhFRERCIiwibmFtZSIsInppcFVyaSIsIm93bmVyIiwicmVwbyIsImJyYW5jaCIsInNlcnZlciIsIlBhdGgiLCJqb2luIiwiemlwVXJpU3ViUGF0aCIsInVybCIsInN0b3JlWmlwRnJvbVJlcG8iLCJjb25maWciLCJyZXNwb25zZVR5cGUiLCJub0NhY2hlIiwiZnVsbFJlc3BvbnNlIiwiemlwIiwic3RhdHVzIiwiemlwQXJyYXlCdWZmZXIiLCJkYXRhIiwidXJpIiwic2V0SXRlbSIsInJlc3BvbnNlIiwicmVtb3ZlUmVwb1ppcCIsInJlbW92ZUl0ZW0iLCJnZXRaaXAiLCJnZXRJdGVtIiwiemlwQmxvYiIsIkpTWmlwIiwibG9hZEFzeW5jIiwiY29uc29sZSIsImxvZyIsImdldEZpbGVzRnJvbVJlcG9aaXAiLCJmaWxlcyIsImdldEZpbGVGcm9tUmVwb1ppcCIsImZpbGVwYXRoIiwiemlwUGF0aCIsInRvTG93ZXJDYXNlIiwiZmlsZU9iamVjdCIsImFzeW5jIiwiZmlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLFFBQVEsR0FBR0MscUJBQVlDLGNBQVosQ0FBMkI7QUFDMUNDLEVBQUFBLE1BQU0sRUFBRSxDQUFDRixxQkFBWUcsU0FBYixDQURrQztBQUUxQ0MsRUFBQUEsSUFBSSxFQUFFO0FBRm9DLENBQTNCLENBQWpCLEMsQ0FLQTs7O0FBQ08sSUFBTUMsTUFBTSxHQUFHLHNCQUVoQjtBQUFBLE1BREpDLEtBQ0ksUUFESkEsS0FDSTtBQUFBLE1BREdDLElBQ0gsUUFER0EsSUFDSDtBQUFBLHlCQURTQyxNQUNUO0FBQUEsTUFEU0EsTUFDVCw0QkFEZ0IsUUFDaEI7QUFBQSxNQUQwQkMs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LFdBQUwsRUFBVixFQUE4QkYsUUFBOUIsQ0FUYztBQVV4QkcsWUFBQUEsVUFWd0IsR0FVWHRCLEdBQUcsQ0FBQ2lCLEtBQUosQ0FBVUcsT0FBVixDQVZXOztBQUFBLGlCQVkxQkUsVUFaMEI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFhZkEsVUFBVSxDQUFDQyxLQUFYLENBQWlCLFFBQWpCLENBYmU7O0FBQUE7QUFhNUJDLFlBQUFBLElBYjRCO0FBQUE7QUFBQTs7QUFBQTtBQWU1QlYsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLG9CQUF3QkksUUFBeEIsMkJBQWlEdkIsTUFBTSxDQUFDTixNQUF4RCxjQUFrRUgsS0FBbEUsY0FBMkVDLElBQTNFLGNBQW1GQyxNQUFuRjs7QUFmNEI7QUFnQjdCOztBQWhCNkI7QUFpQi9CO0FBakIrQiw4Q0FrQnpCbUMsSUFsQnlCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWxCTixrQkFBa0I7QUFBQTtBQUFBO0FBQUEsR0FBeEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBSZWZhY3RvciBhbmQgbW92ZSB0byBjb3JlL2dpdGVhLWFwaS9yZXBvcy96aXAudHNcbmltcG9ydCBQYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IEpTWmlwIGZyb20gJ2pzemlwJztcbmltcG9ydCBsb2NhbGZvcmFnZSBmcm9tICdsb2NhbGZvcmFnZSc7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICcuLi8uLic7XG5cbmNvbnN0IHppcFN0b3JlID0gbG9jYWxmb3JhZ2UuY3JlYXRlSW5zdGFuY2Uoe1xuICBkcml2ZXI6IFtsb2NhbGZvcmFnZS5JTkRFWEVEREJdLFxuICBuYW1lOiAnemlwLXN0b3JlJyxcbn0pO1xuXG4vLyBodHRwczovL2dpdC5kb29yNDMub3JnL3VuZm9sZGluZ1dvcmQvZW5fdWx0L2FyY2hpdmUvbWFzdGVyLnppcFxuZXhwb3J0IGNvbnN0IHppcFVyaSA9ICh7XG4gIG93bmVyLCByZXBvLCBicmFuY2g9J21hc3RlcicsIHNlcnZlcixcbn0pID0+IHtcbiAgY29uc3QgemlwVXJpID0gUGF0aC5qb2luKHNlcnZlciwgb3duZXIsIHJlcG8sICdhcmNoaXZlJywgYCR7YnJhbmNofS56aXBgKTtcbiAgcmV0dXJuIHppcFVyaTtcbn07XG5cbmZ1bmN0aW9uIHppcFVyaVN1YlBhdGgob3duZXIsIHJlcG8sIGJyYW5jaCkge1xuICBjb25zdCB1cmwgPSBQYXRoLmpvaW4ob3duZXIsIHJlcG8sICdhcmNoaXZlJywgYCR7YnJhbmNofS56aXBgKTtcbiAgcmV0dXJuIHVybDtcbn1cblxuZXhwb3J0IGNvbnN0IHN0b3JlWmlwRnJvbVJlcG8gPSBhc3luYyAoe1xuICBvd25lciwgcmVwbywgYnJhbmNoLCBzZXJ2ZXIsXG59KSA9PiB7XG4gIGxldCByZXNwb25zZTtcbiAgY29uc3QgdXJsID0gemlwVXJpU3ViUGF0aChvd25lciwgcmVwbywgYnJhbmNoKTtcblxuICB0cnkge1xuICAgIGNvbnN0IHppcCA9IGF3YWl0IGdldCh7XG4gICAgICB1cmwsXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgc2VydmVyLFxuICAgICAgICByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcicsXG4gICAgICB9LFxuICAgICAgbm9DYWNoZTogdHJ1ZSxcbiAgICAgIGZ1bGxSZXNwb25zZTogdHJ1ZSxcbiAgICB9KTtcblxuICAgIGlmICh6aXAuc3RhdHVzID09PSAyMDAgfHwgemlwLnN0YXR1cyA9PT0gMCkge1xuICAgICAgY29uc3QgemlwQXJyYXlCdWZmZXIgPSB6aXAuZGF0YTtcbiAgICAgIGNvbnN0IHVyaSA9IHppcFVyaSh7XG4gICAgICAgIG93bmVyLCByZXBvLCBicmFuY2gsIHNlcnZlcixcbiAgICAgIH0pO1xuICAgICAgYXdhaXQgemlwU3RvcmUuc2V0SXRlbSh1cmksIHppcEFycmF5QnVmZmVyKTtcbiAgICAgIHJlc3BvbnNlID0gdHJ1ZTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVzcG9uc2UgPSBmYWxzZTtcbiAgfVxuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlUmVwb1ppcCA9IGFzeW5jICh7XG4gIG93bmVyLCByZXBvLCBicmFuY2gsIHNlcnZlcixcbn0pID0+IHtcbiAgbGV0IHJlc3BvbnNlO1xuICBjb25zdCB1cmkgPSB6aXBVcmkoe1xuICAgIG93bmVyLCByZXBvLCBicmFuY2gsIHNlcnZlcixcbiAgfSk7XG5cbiAgdHJ5IHtcbiAgICBhd2FpdCB6aXBTdG9yZS5yZW1vdmVJdGVtKHVyaSk7XG4gICAgcmVzcG9uc2UgPSB0cnVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlc3BvbnNlID0gZmFsc2U7XG4gIH07XG4gIHJldHVybiByZXNwb25zZTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRaaXAgPSBhc3luYyAoe1xuICBvd25lciwgcmVwbywgYnJhbmNoLCBjb25maWcsXG59KSA9PiB7XG4gIGxldCB6aXA7XG4gIGNvbnN0IHVyaSA9IHppcFVyaSh7XG4gICAgb3duZXIsIHJlcG8sIGJyYW5jaCwgc2VydmVyOiBjb25maWcuc2VydmVyLFxuICB9KTtcbiAgY29uc3QgemlwQmxvYiA9IGF3YWl0IHppcFN0b3JlLmdldEl0ZW0odXJpKTtcblxuICBpZiAoemlwQmxvYikge1xuICAgIHppcCA9IGF3YWl0IEpTWmlwLmxvYWRBc3luYyh6aXBCbG9iKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhgTm8gemlwIGZpbGUgZm91bmQgZm9yICR7dXJpfS5gKTtcbiAgfTtcbiAgcmV0dXJuIHppcDtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRGaWxlc0Zyb21SZXBvWmlwID0gYXN5bmMgKHtcbiAgb3duZXIsIHJlcG8sIGJyYW5jaCwgY29uZmlnLFxufSkgPT4ge1xuICBsZXQgZmlsZXM7XG4gIGNvbnN0IHppcCA9IGF3YWl0IGdldFppcCh7XG4gICAgb3duZXIsIHJlcG8sIGJyYW5jaCwgY29uZmlnLFxuICB9KTtcblxuICBpZiAoemlwKSB7XG4gICAgZmlsZXMgPSB6aXAuZmlsZXM7XG4gIH07XG4gIHJldHVybiBmaWxlcztcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRGaWxlRnJvbVJlcG9aaXAgPSBhc3luYyAoe1xuICBvd25lciwgcmVwbywgYnJhbmNoLCBmaWxlcGF0aCwgY29uZmlnLFxufSkgPT4ge1xuICBsZXQgZmlsZTtcbiAgY29uc3QgemlwID0gYXdhaXQgZ2V0WmlwKHtcbiAgICBvd25lciwgcmVwbywgYnJhbmNoLCBjb25maWcsXG4gIH0pO1xuXG4gIGlmICh6aXApIHtcbiAgICBjb25zdCB6aXBQYXRoID0gUGF0aC5qb2luKHJlcG8udG9Mb3dlckNhc2UoKSwgZmlsZXBhdGgpO1xuICAgIGNvbnN0IGZpbGVPYmplY3QgPSB6aXAuZmlsZXNbemlwUGF0aF07XG5cbiAgICBpZiAoZmlsZU9iamVjdCkge1xuICAgICAgZmlsZSA9IGF3YWl0IGZpbGVPYmplY3QuYXN5bmMoJ3N0cmluZycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhgRmlsZXBhdGggJHtmaWxlcGF0aH0gbm90IGZvdW5kIGluICR7Y29uZmlnLnNlcnZlcn0vJHtvd25lcn0vJHtyZXBvfS8ke2JyYW5jaH1gKTtcbiAgICB9O1xuICB9O1xuICByZXR1cm4gZmlsZTtcbn07Il19