"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureContent = exports.deleteContent = exports.updateContent = exports.readContent = exports.createContent = exports.payload = void 0;

var _path = _interopRequireDefault(require("path"));

var _base = _interopRequireDefault(require("base-64"));

var _utf = _interopRequireDefault(require("utf8"));

var _helpers = require("../../../../components/file/helpers");

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

;
;
;

var payload = function payload(_ref) {
  var branch = _ref.branch,
      new_branch = _ref.new_branch,
      content = _ref.content,
      message = _ref.message,
      _ref$author = _ref.author,
      email = _ref$author.email,
      username = _ref$author.username,
      sha = _ref.sha;
  return {
    branch: branch,
    new_branch: new_branch,
    content: _base.default.encode(_utf.default.encode(content || '')),
    message: message,
    author: {
      email: email,
      name: username
    },
    sha: sha
  };
}; // POST /api/v1/repos/{owner}/{repo}/contents/{filepath}


exports.payload = payload;

var createContent = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
    var config, owner, repo, branch, filepath, content, message, author, url, contentObject, _payload, response, _payload2, _response;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            config = _ref2.config, owner = _ref2.owner, repo = _ref2.repo, branch = _ref2.branch, filepath = _ref2.filepath, content = _ref2.content, message = _ref2.message, author = _ref2.author;
            url = _path.default.join(_.apiPath, 'repos', owner, repo, 'contents', filepath);
            _context.prev = 2;
            _context.prev = 3;
            _payload = payload({
              branch: branch,
              content: content,
              message: message,
              author: author
            });
            _context.next = 7;
            return (0, _.post)({
              url: url,
              payload: _payload,
              config: config
            });

          case 7:
            response = _context.sent;
            contentObject = response.content;
            _context.next = 18;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](3);
            _payload2 = payload({
              new_branch: branch,
              content: content,
              message: message,
              author: author
            });
            _context.next = 16;
            return (0, _.post)({
              url: url,
              payload: _payload2,
              config: config
            });

          case 16:
            _response = _context.sent;
            contentObject = _response.content;

          case 18:
            _context.next = 23;
            break;

          case 20:
            _context.prev = 20;
            _context.t1 = _context["catch"](2);
            throw new Error('Error creating file.');

          case 23:
            ;
            return _context.abrupt("return", contentObject);

          case 25:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 20], [3, 11]]);
  }));

  return function createContent(_x) {
    return _ref3.apply(this, arguments);
  };
}();

exports.createContent = createContent;
; // GET /api/v1/repos/{owner}/{repo}/contents/{filepath}?ref={branch}

var readContent = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref4) {
    var owner, repo, ref, filepath, config, url, contentObject;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            owner = _ref4.owner, repo = _ref4.repo, ref = _ref4.ref, filepath = _ref4.filepath, config = _ref4.config;
            url = _path.default.join(_.apiPath, 'repos', owner, repo, 'contents', filepath);
            _context2.prev = 2;
            _context2.next = 5;
            return (0, _.get)({
              url: url,
              config: config,
              params: {
                ref: ref
              },
              noCache: false
            });

          case 5:
            contentObject = _context2.sent;
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](2);
            throw new Error('Error reading file.');

          case 11:
            ;
            return _context2.abrupt("return", contentObject);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 8]]);
  }));

  return function readContent(_x2) {
    return _ref5.apply(this, arguments);
  };
}(); // PUT /api/v1/repos/{owner}/{repo}/contents/{filepath}


exports.readContent = readContent;

var updateContent = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref6) {
    var config, owner, repo, branch, filepath, content, message, author, sha, url, contentObject, _payload, response, _payload3, _response2;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            config = _ref6.config, owner = _ref6.owner, repo = _ref6.repo, branch = _ref6.branch, filepath = _ref6.filepath, content = _ref6.content, message = _ref6.message, author = _ref6.author, sha = _ref6.sha;
            url = _path.default.join(_.apiPath, 'repos', owner, repo, 'contents', filepath);
            _context3.prev = 2;
            _context3.prev = 3;
            _payload = payload({
              branch: branch,
              content: content,
              message: message,
              author: author,
              sha: sha
            });
            _context3.next = 7;
            return (0, _.put)({
              url: url,
              payload: _payload,
              config: config
            });

          case 7:
            response = _context3.sent;
            contentObject = response.content;
            _context3.next = 19;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](3);
            console.warn('Branch doesnt exists. Thus, creating new branch', _context3.t0);
            _payload3 = payload({
              new_branch: branch,
              content: content,
              message: message,
              author: author,
              sha: sha
            });
            _context3.next = 17;
            return (0, _.put)({
              url: url,
              payload: _payload3,
              config: config
            });

          case 17:
            _response2 = _context3.sent;
            contentObject = _response2.content;

          case 19:
            ;
            _context3.next = 25;
            break;

          case 22:
            _context3.prev = 22;
            _context3.t1 = _context3["catch"](2);
            throw _context3.t1;

          case 25:
            ;
            return _context3.abrupt("return", contentObject);

          case 27:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 22], [3, 11]]);
  }));

  return function updateContent(_x3) {
    return _ref7.apply(this, arguments);
  };
}(); // DELETE /api/v1/repos/{owner}/{repo}/contents/{filepath}?ref={branch}


exports.updateContent = updateContent;

var deleteContent = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref8) {
    var config, owner, repo, branch, filepath, message, author, sha, response, url, _payload;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            config = _ref8.config, owner = _ref8.owner, repo = _ref8.repo, branch = _ref8.branch, filepath = _ref8.filepath, message = _ref8.message, author = _ref8.author, sha = _ref8.sha;
            url = _path.default.join(_.apiPath, 'repos', owner, repo, 'contents', filepath);
            _payload = payload({
              branch: branch,
              message: message,
              author: author,
              sha: sha
            });
            _context4.prev = 3;
            _context4.next = 6;
            return (0, _.del)({
              url: url,
              payload: _payload,
              config: config
            });

          case 6:
            response = _context4.sent;
            _context4.next = 12;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](3);
            throw new Error('Error deleting file.');

          case 12:
            ;
            return _context4.abrupt("return", response);

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[3, 9]]);
  }));

  return function deleteContent(_x4) {
    return _ref9.apply(this, arguments);
  };
}();

exports.deleteContent = deleteContent;

var ensureContent = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(_ref10) {
    var config, owner, repo, branch, filepath, content, message, author, onOpenValidation, contentObject, _content, notices, _contentObject, _content2, _notices;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            config = _ref10.config, owner = _ref10.owner, repo = _ref10.repo, branch = _ref10.branch, filepath = _ref10.filepath, content = _ref10.content, message = _ref10.message, author = _ref10.author, onOpenValidation = _ref10.onOpenValidation;
            _context5.prev = 1;
            _context5.next = 4;
            return readContent({
              owner: owner,
              repo: repo,
              ref: branch,
              filepath: filepath,
              config: config
            });

          case 4:
            contentObject = _context5.sent;

            if (contentObject) {
              _context5.next = 7;
              break;
            }

            throw new Error('File does not exist in branch');

          case 7:
            _context5.next = 9;
            return (0, _helpers.getContentFromFile)(contentObject);

          case 9:
            _content = _context5.sent;
            notices = [];

            if (onOpenValidation) {
              notices = onOpenValidation(filepath, _content, contentObject.html_url);
            }

            _context5.next = 40;
            break;

          case 14:
            _context5.prev = 14;
            _context5.t0 = _context5["catch"](1);
            _context5.prev = 16;
            _context5.next = 19;
            return readContent({
              owner: owner,
              repo: repo,
              filepath: filepath,
              config: config
            });

          case 19:
            _contentObject = _context5.sent;
            _context5.next = 22;
            return (0, _helpers.getContentFromFile)(_contentObject);

          case 22:
            _content2 = _context5.sent;
            _notices = [];

            if (onOpenValidation) {
              _notices = onOpenValidation(filepath, _content2, _contentObject.html_url);
            }

            if (!(_notices.length === 0)) {
              _context5.next = 31;
              break;
            }

            _context5.next = 28;
            return updateContent({
              config: config,
              owner: owner,
              repo: repo,
              branch: branch,
              filepath: filepath,
              content: _content2,
              message: message,
              author: author,
              sha: _contentObject.sha
            });

          case 28:
            contentObject = _context5.sent;
            _context5.next = 32;
            break;

          case 31:
            contentObject = _contentObject;

          case 32:
            _context5.next = 39;
            break;

          case 34:
            _context5.prev = 34;
            _context5.t1 = _context5["catch"](16);
            _context5.next = 38;
            return createContent({
              config: config,
              owner: owner,
              repo: repo,
              branch: branch,
              filepath: filepath,
              content: content,
              message: message,
              author: author
            });

          case 38:
            contentObject = _context5.sent;

          case 39:
            ;

          case 40:
            ;
            return _context5.abrupt("return", contentObject);

          case 42:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 14], [16, 34]]);
  }));

  return function ensureContent(_x5) {
    return _ref11.apply(this, arguments);
  };
}();

exports.ensureContent = ensureContent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb3JlL2dpdGVhLWFwaS9yZXBvcy9jb250ZW50cy9jb250ZW50cy50cyJdLCJuYW1lcyI6WyJwYXlsb2FkIiwiYnJhbmNoIiwibmV3X2JyYW5jaCIsImNvbnRlbnQiLCJtZXNzYWdlIiwiYXV0aG9yIiwiZW1haWwiLCJ1c2VybmFtZSIsInNoYSIsImJhc2U2NCIsImVuY29kZSIsInV0ZjgiLCJuYW1lIiwiY3JlYXRlQ29udGVudCIsImNvbmZpZyIsIm93bmVyIiwicmVwbyIsImZpbGVwYXRoIiwidXJsIiwiUGF0aCIsImpvaW4iLCJhcGlQYXRoIiwiX3BheWxvYWQiLCJyZXNwb25zZSIsImNvbnRlbnRPYmplY3QiLCJFcnJvciIsInJlYWRDb250ZW50IiwicmVmIiwicGFyYW1zIiwibm9DYWNoZSIsInVwZGF0ZUNvbnRlbnQiLCJjb25zb2xlIiwid2FybiIsImRlbGV0ZUNvbnRlbnQiLCJlbnN1cmVDb250ZW50Iiwib25PcGVuVmFsaWRhdGlvbiIsIl9jb250ZW50Iiwibm90aWNlcyIsImh0bWxfdXJsIiwiX2NvbnRlbnRPYmplY3QiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7QUFlQztBQUtBO0FBU0E7O0FBU00sSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxNQUNyQkMsTUFEcUIsUUFDckJBLE1BRHFCO0FBQUEsTUFDYkMsVUFEYSxRQUNiQSxVQURhO0FBQUEsTUFDREMsT0FEQyxRQUNEQSxPQURDO0FBQUEsTUFDUUMsT0FEUixRQUNRQSxPQURSO0FBQUEseUJBQ2lCQyxNQURqQjtBQUFBLE1BQzJCQyxLQUQzQixlQUMyQkEsS0FEM0I7QUFBQSxNQUNrQ0MsUUFEbEMsZUFDa0NBLFFBRGxDO0FBQUEsTUFDOENDLEdBRDlDLFFBQzhDQSxHQUQ5QztBQUFBLFNBRVE7QUFDN0JQLElBQUFBLE1BQU0sRUFBTkEsTUFENkI7QUFFN0JDLElB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QyxjQUFBQSxNQUFNLEVBQU5BLE1BRGtDO0FBQzFCQyxjQUFBQSxLQUFLLEVBQUxBLEtBRDBCO0FBQ25CQyxjQUFBQSxJQUFJLEVBQUpBLElBRG1CO0FBQ2JmLGNBQUFBLE1BQU0sRUFBTkEsTUFEYTtBQUNMZ0IsY0FBQUEsUUFBUSxFQUFSQSxRQURLO0FBQ0tkLGNBQUFBLE9BQU8sRUFBUEEsT0FETDtBQUNjQyxjQUFBQSxPQUFPLEVBQVBBLE9BRGQ7QUFDdUJDLGNBQUFBLE1BQU0sRUFBTkE7QUFEdkIsYUFBRCxDQXZEWjs7QUFBQTtBQXVEdkJtQixZQUFBQSxhQXZEdUI7O0FBQUE7QUEwRHhCOztBQTFEd0I7QUEyRDFCO0FBM0QwQiw4Q0E2RHBCQSxhQTdEb0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBYlUsYUFBYTtBQUFBO0FBQUE7QUFBQSxHQUFuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGJhc2U2NCBmcm9tICdiYXNlLTY0JztcbmltcG9ydCB1dGY4IGZyb20gJ3V0ZjgnO1xuXG5pbXBvcnQgeyBnZXRDb250ZW50RnJvbUZpbGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2ZpbGUvaGVscGVycyc7XG5pbXBvcnQgeyBFeHRlbmRDb25maWcgfSBmcm9tICcuLi8uLi9odHRwL2h0dHAnO1xuaW1wb3J0IHtcbiAgYXBpUGF0aCwgZ2V0LCBwb3N0LCBwdXQsIGRlbCxcbn0gZnJvbSAnLi4vLi4nO1xuXG5pbnRlcmZhY2UgTW9kaWZ5Q29udGVudE9wdGlvbnMge1xuICBjb25maWc6IEV4dGVuZENvbmZpZztcbiAgb3duZXI6IHN0cmluZztcbiAgcmVwbzogc3RyaW5nO1xuICBicmFuY2g6IHN0cmluZztcbiAgZmlsZXBhdGg6IHN0cmluZztcbiAgY29udGVudD86IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBhdXRob3I6IEF1dGhvcjtcbiAgc2hhPzogc3RyaW5nO1xuICBvbk9wZW5WYWxpZGF0aW9uPzogKGZpbGVuYW1lOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgdXJsOiBzdHJpbmcpID0+IG5ldmVyO1xufTtcblxuaW50ZXJmYWNlIEF1dGhvciB7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG59O1xuXG5pbnRlcmZhY2UgUGF5bG9hZE9wdGlvbnMge1xuICBicmFuY2g/OiBzdHJpbmc7XG4gIG5ld19icmFuY2g/OiBzdHJpbmc7XG4gIGNvbnRlbnQ/OiBzdHJpbmc7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgYXV0aG9yOiBBdXRob3I7XG4gIHNoYT86IHN0cmluZztcbn07XG5cbmludGVyZmFjZSBDb250ZW50T2JqZWN0IHtcbiAgcGF0aDogc3RyaW5nO1xuICBzaGE6IHN0cmluZztcbiAgY29udGVudDogc3RyaW5nO1xuICBodG1sX3VybDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgcGF5bG9hZCA9ICh7XG4gIGJyYW5jaCwgbmV3X2JyYW5jaCwgY29udGVudCwgbWVzc2FnZSwgYXV0aG9yOiB7IGVtYWlsLCB1c2VybmFtZSB9LCBzaGEsXG59OiBQYXlsb2FkT3B0aW9ucyk6IG9iamVjdCA9PiAoe1xuICBicmFuY2gsXG4gIG5ld19icmFuY2gsXG4gIGNvbnRlbnQ6IGJhc2U2NC5lbmNvZGUodXRmOC5lbmNvZGUoY29udGVudCB8fCAnJykpLFxuICBtZXNzYWdlLFxuICBhdXRob3I6IHtcbiAgICBlbWFpbDogZW1haWwsXG4gICAgbmFtZTogdXNlcm5hbWUsXG4gIH0sXG4gIHNoYSxcbn0pO1xuXG4vLyBQT1NUIC9hcGkvdjEvcmVwb3Mve293bmVyfS97cmVwb30vY29udGVudHMve2ZpbGVwYXRofVxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNvbnRlbnQgPSBhc3luYyAoe1xuICBjb25maWcsIG93bmVyLCByZXBvLCBicmFuY2gsIGZpbGVwYXRoLCBjb250ZW50LCBtZXNzYWdlLCBhdXRob3IsXG59OiBNb2RpZnlDb250ZW50T3B0aW9ucyk6IFByb21pc2U8Q29udGVudE9iamVjdD4gPT4ge1xuICBjb25zdCB1cmwgPSBQYXRoLmpvaW4oYXBpUGF0aCwgJ3JlcG9zJywgb3duZXIsIHJlcG8sICdjb250ZW50cycsIGZpbGVwYXRoKTtcbiAgbGV0IGNvbnRlbnRPYmplY3Q6IENvbnRlbnRPYmplY3Q7XG5cbiAgdHJ5IHtcbiAgICAvLyBUT0RPOiBDaGVjayB0byBzZWUgaWYgYnJhbmNoIGV4aXN0cyB0byBzZXQgYnJhbmNoIG9yIG5ld19icmFuY2ggaW4gcGF5bG9hZFxuICAgIHRyeSB7XG4gICAgICBjb25zdCBfcGF5bG9hZCA9IHBheWxvYWQoe1xuICAgICAgICBicmFuY2gsIGNvbnRlbnQsIG1lc3NhZ2UsIGF1dGhvcixcbiAgICAgIH0pO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBwb3N0KHtcbiAgICAgICAgdXJsLCBwYXlsb2FkOiBfcGF5bG9hZCwgY29uZmlnLFxuICAgICAgfSk7XG4gICAgICBjb250ZW50T2JqZWN0ID0gcmVzcG9uc2UuY29udGVudDtcbiAgICB9IGNhdGNoIHtcbiAgICAgIGNvbnN0IF9wYXlsb2FkID0gcGF5bG9hZCh7XG4gICAgICAgIG5ld19icmFuY2g6IGJyYW5jaCwgY29udGVudCwgbWVzc2FnZSwgYXV0aG9yLFxuICAgICAgfSk7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHBvc3Qoe1xuICAgICAgICB1cmwsIHBheWxvYWQ6IF9wYXlsb2FkLCBjb25maWcsXG4gICAgICB9KTtcbiAgICAgIGNvbnRlbnRPYmplY3QgPSByZXNwb25zZS5jb250ZW50O1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGZpbGUuJyk7XG4gIH07XG4gIHJldHVybiBjb250ZW50T2JqZWN0O1xufTtcblxuaW50ZXJmYWNlIEdldENvbnRlbnRPcHRpb25zIHtcbiAgb3duZXI6IHN0cmluZztcbiAgcmVwbzogc3RyaW5nO1xuICBmaWxlcGF0aDogc3RyaW5nO1xuICBjb25maWc6IEV4dGVuZENvbmZpZztcbiAgcmVmPzogc3RyaW5nO1xufTtcblxuLy8gR0VUIC9hcGkvdjEvcmVwb3Mve293bmVyfS97cmVwb30vY29udGVudHMve2ZpbGVwYXRofT9yZWY9e2JyYW5jaH1cbmV4cG9ydCBjb25zdCByZWFkQ29udGVudCA9IGFzeW5jICh7XG4gIG93bmVyLCByZXBvLCByZWYsIGZpbGVwYXRoLCBjb25maWcsXG59OiBHZXRDb250ZW50T3B0aW9ucyk6IFByb21pc2U8Q29udGVudE9iamVjdD4gPT4ge1xuICBjb25zdCB1cmwgPSBQYXRoLmpvaW4oYXBpUGF0aCwgJ3JlcG9zJywgb3duZXIsIHJlcG8sICdjb250ZW50cycsIGZpbGVwYXRoKTtcbiAgbGV0IGNvbnRlbnRPYmplY3Q6IENvbnRlbnRPYmplY3Q7XG5cbiAgdHJ5IHtcbiAgICBjb250ZW50T2JqZWN0ID0gYXdhaXQgZ2V0KHtcbiAgICAgIHVybCwgY29uZmlnLCBwYXJhbXM6IHsgcmVmIH0sIG5vQ2FjaGU6IGZhbHNlLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IgcmVhZGluZyBmaWxlLicpO1xuICB9O1xuICByZXR1cm4gY29udGVudE9iamVjdDtcbn07XG5cbi8vIFBVVCAvYXBpL3YxL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbnRlbnRzL3tmaWxlcGF0aH1cbmV4cG9ydCBjb25zdCB1cGRhdGVDb250ZW50ID0gYXN5bmMgKHtcbiAgY29uZmlnLCBvd25lciwgcmVwbywgYnJhbmNoLCBmaWxlcGF0aCwgY29udGVudCwgbWVzc2FnZSwgYXV0aG9yLCBzaGEsXG59OiBNb2RpZnlDb250ZW50T3B0aW9ucyk6IFByb21pc2U8Q29udGVudE9iamVjdD4gPT4ge1xuICBjb25zdCB1cmwgPSBQYXRoLmpvaW4oYXBpUGF0aCwgJ3JlcG9zJywgb3duZXIsIHJlcG8sICdjb250ZW50cycsIGZpbGVwYXRoKTtcbiAgbGV0IGNvbnRlbnRPYmplY3Q6IENvbnRlbnRPYmplY3Q7XG5cbiAgdHJ5IHtcbiAgICAvLyBUT0RPOiBDaGVjayB0byBzZWUgaWYgYnJhbmNoIGV4aXN0cyB0byBzZXQgYnJhbmNoIG9yIG5ld19icmFuY2ggaW4gcGF5bG9hZFxuICAgIHRyeSB7XG4gICAgICBjb25zdCBfcGF5bG9hZCA9IHBheWxvYWQoe1xuICAgICAgICBicmFuY2gsIGNvbnRlbnQsIG1lc3NhZ2UsIGF1dGhvciwgc2hhLFxuICAgICAgfSk7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHB1dCh7XG4gICAgICAgIHVybCwgcGF5bG9hZDogX3BheWxvYWQsIGNvbmZpZyxcbiAgICAgIH0pO1xuICAgICAgY29udGVudE9iamVjdCA9IHJlc3BvbnNlLmNvbnRlbnQ7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS53YXJuKCdCcmFuY2ggZG9lc250IGV4aXN0cy4gVGh1cywgY3JlYXRpbmcgbmV3IGJyYW5jaCcsIGUpO1xuXG4gICAgICBjb25zdCBfcGF5bG9hZCA9IHBheWxvYWQoe1xuICAgICAgICBuZXdfYnJhbmNoOiBicmFuY2gsIGNvbnRlbnQsIG1lc3NhZ2UsIGF1dGhvciwgc2hhLFxuICAgICAgfSk7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHB1dCh7XG4gICAgICAgIHVybCwgcGF5bG9hZDogX3BheWxvYWQsIGNvbmZpZyxcbiAgICAgIH0pO1xuICAgICAgY29udGVudE9iamVjdCA9IHJlc3BvbnNlLmNvbnRlbnQ7XG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyBBbGxvdyBvcmlnaW5hbCBlcnJvciB0byBwcm9wb2dhdGUuXG4gICAgLy8gVGhpcyBhbGxvd3Mgc3dpdGNoaW5nIGJhc2VkIG9uIGVycm9yIG1lc3NhZ2VzIGFib3ZlLlxuICAgIHRocm93IGVycm9yO1xuICB9O1xuICByZXR1cm4gY29udGVudE9iamVjdDtcbn07XG5cbi8vIERFTEVURSAvYXBpL3YxL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbnRlbnRzL3tmaWxlcGF0aH0/cmVmPXticmFuY2h9XG5leHBvcnQgY29uc3QgZGVsZXRlQ29udGVudCA9IGFzeW5jICh7XG4gIGNvbmZpZywgb3duZXIsIHJlcG8sIGJyYW5jaCwgZmlsZXBhdGgsIG1lc3NhZ2UsIGF1dGhvciwgc2hhLFxufTogTW9kaWZ5Q29udGVudE9wdGlvbnMpOiBQcm9taXNlPG9iamVjdD4gPT4ge1xuICBsZXQgcmVzcG9uc2U6IG9iamVjdDtcbiAgY29uc3QgdXJsID0gUGF0aC5qb2luKGFwaVBhdGgsICdyZXBvcycsIG93bmVyLCByZXBvLCAnY29udGVudHMnLCBmaWxlcGF0aCk7XG5cbiAgY29uc3QgX3BheWxvYWQgPSBwYXlsb2FkKHtcbiAgICBicmFuY2gsIG1lc3NhZ2UsIGF1dGhvciwgc2hhLFxuICB9KTtcblxuICB0cnkge1xuICAgIHJlc3BvbnNlID0gYXdhaXQgZGVsKHtcbiAgICAgIHVybCwgcGF5bG9hZDogX3BheWxvYWQsIGNvbmZpZyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGZpbGUuJyk7XG4gIH07XG4gIHJldHVybiByZXNwb25zZTtcbn07XG5cbmV4cG9ydCBjb25zdCBlbnN1cmVDb250ZW50ID0gYXN5bmMgKHtcbiAgY29uZmlnLCBvd25lciwgcmVwbywgYnJhbmNoLCBmaWxlcGF0aCwgY29udGVudCwgbWVzc2FnZSwgYXV0aG9yLCBvbk9wZW5WYWxpZGF0aW9uLFxufTogTW9kaWZ5Q29udGVudE9wdGlvbnMpOiBQcm9taXNlPENvbnRlbnRPYmplY3Q+ID0+IHtcbiAgbGV0IGNvbnRlbnRPYmplY3Q6IENvbnRlbnRPYmplY3Q7XG5cbiAgdHJ5IHsgLy8gdHJ5IHRvIHJlYWQgdGhlIGZpbGVcbiAgICAvLyBOT1RFOiB3aGVuIGEgc291cmNlIGZpbGUgaXMgZmV0Y2hlZCBmb3IgdHJhbnNsYXRpb24sIHRoZSBmb2xsb3dpbmcgcmVhZENvbmVudFxuICAgIC8vIHNob3VsZCBhbHdheXMgc3VjY2VlZCBzaW5jZSB0aGUgZmlsZSB3YXMgc2VsZWN0ZWQgZnJvbSBhIFVJIHdoaWNoXG4gICAgLy8gaXMgc2hvd2luZyBmaWxlcyB0aGF0IGV4aXN0LlxuICAgIC8vXG4gICAgLy8gT1RPSCwgaWYgdGhlIGZpbGUgaXMgdGhlIHRhcmdldCB0aGlzIHdpbGwgcmV0dXJuIG51bGwgKHRoZSBmaXJzdCB0aW1lKSwgXG4gICAgLy8gdGhyb3dpbmcgdGhlIGVycm9yLiBXaGVuIHRoZSBlcnJvciBpcyB0aHJvd24sIHRoZSBjYXRjaCB3aWxsIGZpcmUuXG4gICAgY29udGVudE9iamVjdCA9IGF3YWl0IHJlYWRDb250ZW50KHtcbiAgICAgIG93bmVyLCByZXBvLCByZWY6IGJyYW5jaCwgZmlsZXBhdGgsIGNvbmZpZyxcbiAgICB9KTtcbiAgICBpZiAoIWNvbnRlbnRPYmplY3QpIHRocm93IG5ldyBFcnJvcignRmlsZSBkb2VzIG5vdCBleGlzdCBpbiBicmFuY2gnKTtcbiAgICAvL1xuICAgIC8vIGFkZCBvbiBvcGVuIHZhbGlkYXRpb24gY2hlY2tzIGhlcmUgZm9yIHNvdXJjZSBzaWRlIG9yIGV4aXN0aW5nIGJyYW5jaCBjb250ZW50XG4gICAgLy9cbiAgICBjb25zdCBfY29udGVudDpzdHJpbmcgPSBhd2FpdCBnZXRDb250ZW50RnJvbUZpbGUoY29udGVudE9iamVjdCk7XG4gICAgbGV0IG5vdGljZXM6IHN0cmluZ1tdID0gW107XG4gICAgaWYgKCBvbk9wZW5WYWxpZGF0aW9uICkge1xuICAgICAgbm90aWNlcyA9IG9uT3BlblZhbGlkYXRpb24oZmlsZXBhdGgsIF9jb250ZW50LGNvbnRlbnRPYmplY3QuaHRtbF91cmwpO1xuICAgIH1cbiAgfSBjYXRjaCB7XG4gICAgdHJ5IHsgLy8gdHJ5IHRvIHVwZGF0ZSB0aGUgZmlsZSBpbiBjYXNlIGl0IGlzIGluIHRoZSBkZWZhdWx0IGJyYW5jaFxuICAgICAgLy8gTk9URTogaWYgdGhlIGZpbGUgaXMgaW4gdGhlIG1hc3RlciBicmFuY2ggb2YgdGhlIHRhcmdldFxuICAgICAgLy8gdGhlIGZvbGxvd2luZyByZWFkQ29uY2VudCB3aWxsIHN1Y2NlZWRcbiAgICAgIC8vIE90aGVyd2lzZSBpdCByZXR1cm5zIG51bGw7IGlmIG51bGwgdGhlbiB0aGUgZ2V0Q29udGVudEZyb21GaWxlXG4gICAgICAvLyB3aWxsIHRocm93IGFuIGVycm9yIChwcm9iYWJseSBmcm9tIHRyeWluZyB0byBkZWNvZGUgbnVsbCBvclxuICAgICAgLy8gaWYgYnkgdXJsLCBhIDQwNCBpcyByZXR1cm5lZCBhbmQgZ2V0IHRocm93cyBhbiBlcnJvcilcbiAgICAgIC8vIEluIHRoaXMgY2FzZSwgdGhlIGNhdGNoKCkgd2lsbCBjcmVhdGUgdGhlIGNvbnRlbnQgZnJvbSB0aGUgc291cmNlXG4gICAgICAvLyB0aGUgXCJ1cGRhdGVDb250ZW50XCIgd2lsbCBjYXVzZSB0aGUgZXhpc3RpbmcgdGFyZ2V0IGNvbnRlbnQgaW4gbWFzdGVyXG4gICAgICAvLyB0byBiZSB1c2VkLiBjcmVhdGVDb250ZW50IHdpbGwgYmUgY2FsbGVkIGF0IHNvbWUgcG9pbnQgZHVyaW5nIHRoZSB1cGRhdGVcbiAgICAgIGNvbnN0IF9jb250ZW50T2JqZWN0ID0gYXdhaXQgcmVhZENvbnRlbnQoe1xuICAgICAgICBvd25lciwgcmVwbywgZmlsZXBhdGgsIGNvbmZpZyxcbiAgICAgIH0pO1xuICAgICAgLy9cbiAgICAgIC8vIGFkZCBvbiBvcGVuIHZhbGlkYXRpb24gY2hlY2tzIGhlcmUgZm9yIHdoZW4gdGFyZ2V0IHJlcG8gaGFzIGRhdGEsIGJ1dCB0aGVyZSBpcyBubyB1c2VyIGJyYW5jaFxuICAgICAgLy9cbiAgICAgIC8vIHRoZSBiZWxvdyBjYW4gdGhyb3cgYW4gZXJyb3IsIHNvIGl0IHdpbGwgZ28gdG8gdGhlIGNhdGNoIGZvciBjcmVhdGUgdG8gYmUgZG9uZVxuICAgICAgY29uc3QgX2NvbnRlbnQgPSBhd2FpdCBnZXRDb250ZW50RnJvbUZpbGUoX2NvbnRlbnRPYmplY3QpO1xuICAgICAgbGV0IG5vdGljZXM6IHN0cmluZ1tdID0gW107XG4gICAgICBpZiAoIG9uT3BlblZhbGlkYXRpb24gKSB7XG4gICAgICAgIG5vdGljZXMgPSBvbk9wZW5WYWxpZGF0aW9uKGZpbGVwYXRoLCBfY29udGVudCxfY29udGVudE9iamVjdC5odG1sX3VybCk7XG4gICAgICB9XG4gICAgICBpZiAoIG5vdGljZXMubGVuZ3RoID09PSAwICkge1xuICAgICAgICAvLyBvbmx5IHVwZGF0ZSBpZiBubyBub3RpY2VzXG4gICAgICAgIGNvbnRlbnRPYmplY3QgPSBhd2FpdCB1cGRhdGVDb250ZW50KHtcbiAgICAgICAgICBjb25maWcsIG93bmVyLCByZXBvLCBicmFuY2gsIGZpbGVwYXRoLCBjb250ZW50OiBfY29udGVudCwgbWVzc2FnZSwgYXV0aG9yLCBzaGE6IF9jb250ZW50T2JqZWN0LnNoYSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZW50T2JqZWN0ID0gX2NvbnRlbnRPYmplY3Q7XG4gICAgICB9XG4gICAgfSBjYXRjaCB7IC8vIHRyeSB0byBjcmVhdGUgdGhlIGZpbGUgaWYgaXQgZG9lc24ndCBleGlzdCBpbiBkZWZhdWx0IG9yIG5ldyBicmFuY2hcbiAgICAgIGNvbnRlbnRPYmplY3QgPSBhd2FpdCBjcmVhdGVDb250ZW50KHtcbiAgICAgICAgY29uZmlnLCBvd25lciwgcmVwbywgYnJhbmNoLCBmaWxlcGF0aCwgY29udGVudCwgbWVzc2FnZSwgYXV0aG9yLFxuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4gY29udGVudE9iamVjdDtcbn07XG4iXX0=