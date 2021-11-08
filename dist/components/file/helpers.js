"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.manifestFileComparer = exports.saveFile = exports.getContentFromFile = exports.deleteFile = exports.ensureFile = void 0;

var _ = require("../..");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var ensureFile = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var config, authentication, repository, branch, filepath, defaultContent, message, onOpenValidation, _config, owner, repo, _message, author, _author, tokenid, file;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            config = _ref.config, authentication = _ref.authentication, repository = _ref.repository, branch = _ref.branch, filepath = _ref.filepath, defaultContent = _ref.defaultContent, message = _ref.message, onOpenValidation = _ref.onOpenValidation;
            _config = authentication ? authentication.config : _objectSpread({}, config);
            owner = repository.owner.username, repo = repository.name;
            _message = message;

            if (authentication) {
              _author = authentication.user, tokenid = authentication.token.name;
              author = _author;
              _message = message || "Created '".concat(filepath, "' using '").concat(tokenid, "'");
            }

            _context.next = 7;
            return (0, _.ensureContent)({
              config: _config,
              owner: owner,
              repo: repo,
              branch: branch,
              filepath: filepath,
              content: defaultContent,
              message: _message,
              author: author,
              onOpenValidation: onOpenValidation
            });

          case 7:
            file = _context.sent;
            return _context.abrupt("return", file);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function ensureFile(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.ensureFile = ensureFile;

var deleteFile = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref3) {
    var authentication, repository, branch, file, message, author, config, tokenid, owner, repo, filepath, sha, _message, deleted;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            authentication = _ref3.authentication, repository = _ref3.repository, branch = _ref3.branch, file = _ref3.file, message = _ref3.message;
            author = authentication.user, config = authentication.config, tokenid = authentication.token.name;
            owner = repository.owner.username, repo = repository.name;
            filepath = file.path, sha = file.sha;
            _message = message || "Deleted '".concat(filepath, "' using '").concat(tokenid, "'");
            _context2.next = 7;
            return (0, _.deleteContent)({
              config: config,
              owner: owner,
              repo: repo,
              branch: branch,
              filepath: filepath,
              message: _message,
              author: author,
              sha: sha
            });

          case 7:
            deleted = _context2.sent;
            return _context2.abrupt("return", deleted);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function deleteFile(_x2) {
    return _ref4.apply(this, arguments);
  };
}(); // NOTE: something in this function can throw an error.
// thus it needs to be wrapped in a try / catch.


exports.deleteFile = deleteFile;

var getContentFromFile = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(file) {
    var content, encoding, download_url, git_url, _content, blobObject;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            content = file.content, encoding = file.encoding, download_url = file.download_url, git_url = file.git_url;

            if (!(content && encoding === 'base64')) {
              _context3.next = 5;
              break;
            }

            _content = (0, _.decodeBase64ToUtf8)(content);
            _context3.next = 16;
            break;

          case 5:
            if (!(!content && download_url)) {
              _context3.next = 11;
              break;
            }

            _context3.next = 8;
            return (0, _.get)({
              url: download_url,
              noCache: false
            });

          case 8:
            _content = _context3.sent;
            _context3.next = 16;
            break;

          case 11:
            if (!(!content && git_url)) {
              _context3.next = 16;
              break;
            }

            _context3.next = 14;
            return (0, _.get)({
              url: git_url,
              noCache: false
            });

          case 14:
            blobObject = _context3.sent;

            if (blobObject.content && blobObject.encoding === 'base64') {
              _content = (0, _.decodeBase64ToUtf8)(blobObject.content);
            }

          case 16:
            return _context3.abrupt("return", _content);

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getContentFromFile(_x3) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getContentFromFile = getContentFromFile;

var saveFile = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref6) {
    var authentication, repository, branch, file, content, message, author, config, tokenid, owner, repo, filepath, sha, _message, response;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            authentication = _ref6.authentication, repository = _ref6.repository, branch = _ref6.branch, file = _ref6.file, content = _ref6.content, message = _ref6.message;
            author = authentication.user, config = authentication.config, tokenid = authentication.token.name;
            owner = repository.owner.username, repo = repository.name;
            filepath = file.path, sha = file.sha;
            _message = message || "Edit '".concat(filepath, "' using '").concat(tokenid, "'");
            _context4.next = 7;
            return (0, _.updateContent)({
              config: config,
              owner: owner,
              repo: repo,
              branch: branch,
              filepath: filepath,
              content: content,
              message: _message,
              author: author,
              sha: sha
            });

          case 7:
            response = _context4.sent;
            return _context4.abrupt("return", response);

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function saveFile(_x4) {
    return _ref7.apply(this, arguments);
  };
}();

exports.saveFile = saveFile;
var REGEX_TSV_BOOK_ABBREVIATION = /^\w*_(\w*)\.tsv$/i;

var manifestFileComparer = function manifestFileComparer(_ref8) {
  var repository = _ref8.repository,
      item1 = _ref8.item1,
      item2 = _ref8.item2;
  var item1Path = item1 === null || item1 === void 0 ? void 0 : item1.path;
  var item2Path = item2 === null || item2 === void 0 ? void 0 : item2.path;
  var compare = 0;

  if (item1Path && item2Path && repository && repository.books) {
    var book1Matches = item1Path.match(REGEX_TSV_BOOK_ABBREVIATION);
    var book2Matches = item2Path.match(REGEX_TSV_BOOK_ABBREVIATION);
    var isTsvFiles = book1Matches && book2Matches ? true : false;

    if (isTsvFiles) {
      var book1 = book1Matches[1];
      var book2 = book2Matches[1];
      var iiBook1 = 0;
      var iiBook2 = 0;

      for (var ii = 0; ii < repository.books.length; ii++) {
        if (repository.books[ii].toLowerCase() == book1.toLowerCase()) {
          iiBook1 = ii;
        }

        if (repository.books[ii].toLowerCase() == book2.toLowerCase()) {
          iiBook2 = ii;
        }
      }

      if (iiBook1 < iiBook2) {
        compare = -1;
      } else if (iiBook2 < iiBook1) {
        compare = 1;
      } else {
        compare = 0;
      }
    } else // BOTH are NOT TSV file: (could be manifest file).
      {
        if (book1Matches) {
          // Book1 is a TSV, but book2 is a non-TSV file.
          return 1;
        } else if (book2Matches) {
          // Book2 is the TSV file; but book1 is NOT.
          return -1;
        } else {
          compare = item1Path.localeCompare(item2Path);
        }
      }
  } else // item1/item2 don't exist:
    {
      compare = 0;
    }

  return compare;
};

exports.manifestFileComparer = manifestFileComparer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbGUvaGVscGVycy5qcyJdLCJuYW1lcyI6WyJlbnN1cmVGaWxlIiwiY29uZmlnIiwiYXV0aGVudGljYXRpb24iLCJyZXBvc2l0b3J5IiwiYnJhbmNoIiwiZmlsZXBhdGgiLCJkZWZhdWx0Q29udGVudCIsIm1lc3NhZ2UiLCJvbk9wZW5WYWxpZGF0aW9uIiwiX2NvbmZpZyIsIm93bmVyIiwidXNlcm5hbWUiLCJyZXBvIiwibmFtZSIsIl9tZXNzYWdlIiwiX2F1dGhvciIsInVzZXIiLCJ0b2tlbmlkIiwidG9rZW4iLCJhdXRob3IiLCJjb250ZW50IiwiZmlsZSIsImRlbGV0ZUZpbGUiLCJwYXRoIiwic2hhIiwiZGVsZXRlZCIsImdldENvbnRlbnRGcm9tRmlsZSIsImVuY29kaW5nIiwiZG93bmxvYWRfdXJsIiwiZ2l0X3VybCIsIl9jb250ZW50IiwidXJsIiwibm9DYWNoZSIsImJsb2JPYmplY3QiLCJzYXZlRmlsZSIsInJlc3BvbnNlIiwiUkVHRVhfVFNWX0JPT0tfQUJCUkVWSUFUSU9OIiwibWFuaWZlc3RGaWxlQ29tcGFyZXIiLCJpdGVtMSIsIml0ZW0yIiwiaXRlbTFQYXRoIiwiaXRlbTJQYXRoIiwiY29tcGFyZSIsImJvb2tzIiwiYm9vazFNYXRjaGVzIiwibWF0Y2giLCJib29rMk1hdGNoZXMiLCJpc1RzdkZpbGVzIiwiYm9vazEiLCJib29rMiIsImlpQm9vazEiLCJpaUJvb2syIiwiaWkiLCJsZW5ndGgiLCJ0b0xvd2VyQ2FzZSIsImxvY2FsZUNvbXBhcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBSU8sSUFBTUEsVUFBVTtBQUFBLHNFQUFHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeEJDLFlBQUFBLE1BRHdCLFFBQ3hCQSxNQUR3QixFQUNoQkMsY0FEZ0IsUUFDaEJBLGNBRGdCLEVBQ0FDLFVBREEsUUFDQUEsVUFEQSxFQUNZQyxNQURaLFFBQ1lBLE1BRFosRUFD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QUFDQSxXQUFLLElBQUlDLEVBQUUsR0FBQyxDQUFaLEVBQWVBLEVBQUUsR0FBR2pELFVBQVUsQ0FBQ3dDLEtBQVgsQ0FBaUJVLE1BQXJDLEVBQTZDRCxFQUFFLEVBQS9DLEVBQ0E7QUFDRSxZQUFJakQsVUFBVSxDQUFDd0MsS0FBWCxDQUFpQlMsRUFBakIsRUFBcUJFLFdBQXJCLE1BQXNDTixLQUFLLENBQUNNLFdBQU4sRUFBMUMsRUFDQTtBQUNFSixVQUFBQSxPQUFPLEdBQUdFLEVBQVY7QUFDRDs7QUFDRCxZQUFJakQsVUFBVSxDQUFDd0MsS0FBWCxDQUFpQlMsRUFBakIsRUFBcUJFLFdBQXJCLE1BQXNDTCxLQUFLLENBQUNLLFdBQU4sRUFBMUMsRUFDQTtBQUNFSCxVQUFBQSxPQUFPLEdBQUdDLEVBQVY7QUFDRDtBQUNGOztBQUVELFVBQUlGLE9BQU8sR0FBR0MsT0FBZCxFQUNBO0FBQ0VULFFBQUFBLE9BQU8sR0FBRyxDQUFDLENBQVg7QUFDRCxPQUhELE1BSUssSUFBSVMsT0FBTyxHQUFHRCxPQUFkLEVBQ0w7QUFDRVIsUUFBQUEsT0FBTyxHQUFHLENBQVY7QUFDRCxPQUhJLE1BS0w7QUFDRUEsUUFBQUEsT0FBTyxHQUFHLENBQVY7QUFDRDtBQUNGLEtBL0JELE1BZ0NLO0FBQ0w7QUFDRSxZQUFJRSxZQUFKLEVBQ0E7QUFDRTtBQUNBLGlCQUFPLENBQVA7QUFDRCxTQUpELE1BS0ssSUFBSUUsWUFBSixFQUNMO0FBQ0U7QUFDQSxpQkFBTyxDQUFDLENBQVI7QUFDRCxTQUpJLE1BTUw7QUFDRUosVUFBQUEsT0FBTyxHQUFHRixTQUFTLENBQUNlLGFBQVYsQ0FBd0JkLFNBQXhCLENBQVY7QUFDRDtBQUNGO0FBQ0YsR0F2REQsTUF3REs7QUFDTDtBQUNFQyxNQUFBQSxPQUFPLEdBQUcsQ0FBVjtBQUNEOztBQUVELFNBQU9BLE9BQVA7QUFDRCxDQXRFTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGdldCwgdXBkYXRlQ29udGVudCwgZW5zdXJlQ29udGVudCwgZGVsZXRlQ29udGVudCwgZGVjb2RlQmFzZTY0VG9VdGY4LFxufSBmcm9tICcuLi8uLic7XG5cbmV4cG9ydCBjb25zdCBlbnN1cmVGaWxlID0gYXN5bmMgKHtcbiAgY29uZmlnLCBhdXRoZW50aWNhdGlvbiwgcmVwb3NpdG9yeSwgYnJhbmNoLCBmaWxlcGF0aCwgZGVmYXVsdENvbnRlbnQsIG1lc3NhZ2UsIG9uT3BlblZhbGlkYXRpb24sXG59KSA9PiB7XG4gIGNvbnN0IF9jb25maWcgPSAoYXV0aGVudGljYXRpb24pID8gYXV0aGVudGljYXRpb24uY29uZmlnIDogeyAuLi5jb25maWcgfTtcbiAgY29uc3QgeyBvd25lcjogeyB1c2VybmFtZTogb3duZXIgfSwgbmFtZTogcmVwbyB9ID0gcmVwb3NpdG9yeTtcbiAgbGV0IF9tZXNzYWdlID0gbWVzc2FnZTtcbiAgbGV0IGF1dGhvcjtcblxuICBpZiAoYXV0aGVudGljYXRpb24pIHtcbiAgICBjb25zdCB7IHVzZXI6IF9hdXRob3IsIHRva2VuOiB7IG5hbWU6IHRva2VuaWQgfSB9ID0gYXV0aGVudGljYXRpb247XG4gICAgYXV0aG9yID0gX2F1dGhvcjtcbiAgICBfbWVzc2FnZSA9IG1lc3NhZ2UgfHwgYENyZWF0ZWQgJyR7ZmlsZXBhdGh9JyB1c2luZyAnJHt0b2tlbmlkfSdgO1xuICB9XG5cbiAgY29uc3QgZmlsZSA9IGF3YWl0IGVuc3VyZUNvbnRlbnQoe1xuICAgIGNvbmZpZzogX2NvbmZpZywgb3duZXIsIHJlcG8sIGJyYW5jaCwgZmlsZXBhdGgsXG4gICAgY29udGVudDogZGVmYXVsdENvbnRlbnQsIG1lc3NhZ2U6IF9tZXNzYWdlLCBhdXRob3IsXG4gICAgb25PcGVuVmFsaWRhdGlvbixcbiAgfSk7XG4gIHJldHVybiBmaWxlO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUZpbGUgPSBhc3luYyAoe1xuICBhdXRoZW50aWNhdGlvbiwgcmVwb3NpdG9yeSwgYnJhbmNoLCBmaWxlLCBtZXNzYWdlLFxufSkgPT4ge1xuICBjb25zdCB7XG4gICAgdXNlcjogYXV0aG9yLCBjb25maWcsIHRva2VuOiB7IG5hbWU6IHRva2VuaWQgfSxcbiAgfSA9IGF1dGhlbnRpY2F0aW9uO1xuICBjb25zdCB7IG93bmVyOiB7IHVzZXJuYW1lOiBvd25lciB9LCBuYW1lOiByZXBvIH0gPSByZXBvc2l0b3J5O1xuICBjb25zdCB7IHBhdGg6IGZpbGVwYXRoLCBzaGEgfSA9IGZpbGU7XG4gIGNvbnN0IF9tZXNzYWdlID0gbWVzc2FnZSB8fCBgRGVsZXRlZCAnJHtmaWxlcGF0aH0nIHVzaW5nICcke3Rva2VuaWR9J2A7XG4gIGNvbnN0IGRlbGV0ZWQgPSBhd2FpdCBkZWxldGVDb250ZW50KHtcbiAgICBjb25maWcsIG93bmVyLCByZXBvLCBicmFuY2gsIGZpbGVwYXRoLCBtZXNzYWdlOiBfbWVzc2FnZSwgYXV0aG9yLCBzaGEsXG4gIH0pO1xuICByZXR1cm4gZGVsZXRlZDtcbn07XG5cbi8vIE5PVEU6IHNvbWV0aGluZyBpbiB0aGlzIGZ1bmN0aW9uIGNhbiB0aHJvdyBhbiBlcnJvci5cbi8vIHRodXMgaXQgbmVlZHMgdG8gYmUgd3JhcHBlZCBpbiBhIHRyeSAvIGNhdGNoLlxuZXhwb3J0IGNvbnN0IGdldENvbnRlbnRGcm9tRmlsZSA9IGFzeW5jIChmaWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjb250ZW50LCBlbmNvZGluZywgZG93bmxvYWRfdXJsLCBnaXRfdXJsLFxuICB9ID0gZmlsZTtcbiAgbGV0IF9jb250ZW50O1xuXG4gIGlmIChjb250ZW50ICYmIGVuY29kaW5nID09PSAnYmFzZTY0Jykge1xuICAgIF9jb250ZW50ID0gZGVjb2RlQmFzZTY0VG9VdGY4KGNvbnRlbnQpO1xuICB9IGVsc2UgaWYgKCFjb250ZW50ICYmIGRvd25sb2FkX3VybCkge1xuICAgIF9jb250ZW50ID0gYXdhaXQgZ2V0KHsgdXJsOiBkb3dubG9hZF91cmwsIG5vQ2FjaGU6IGZhbHNlIH0pO1xuICB9IGVsc2UgaWYgKCFjb250ZW50ICYmIGdpdF91cmwpIHtcbiAgICBjb25zdCBibG9iT2JqZWN0ID0gYXdhaXQgZ2V0KHsgdXJsOiBnaXRfdXJsLCBub0NhY2hlOiBmYWxzZSB9KTtcblxuICAgIGlmIChibG9iT2JqZWN0LmNvbnRlbnQgJiYgYmxvYk9iamVjdC5lbmNvZGluZyA9PT0gJ2Jhc2U2NCcpIHtcbiAgICAgIF9jb250ZW50ID0gZGVjb2RlQmFzZTY0VG9VdGY4KGJsb2JPYmplY3QuY29udGVudCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBfY29udGVudDtcbn07XG5cbmV4cG9ydCBjb25zdCBzYXZlRmlsZSA9IGFzeW5jICh7XG4gIGF1dGhlbnRpY2F0aW9uLCByZXBvc2l0b3J5LCBicmFuY2gsIGZpbGUsIGNvbnRlbnQsIG1lc3NhZ2UsXG59KSA9PiB7XG4gIGNvbnN0IHtcbiAgICB1c2VyOiBhdXRob3IsIGNvbmZpZywgdG9rZW46IHsgbmFtZTogdG9rZW5pZCB9LFxuICB9ID0gYXV0aGVudGljYXRpb247XG4gIGNvbnN0IHsgb3duZXI6IHsgdXNlcm5hbWU6IG93bmVyIH0sIG5hbWU6IHJlcG8gfSA9IHJlcG9zaXRvcnk7XG4gIGNvbnN0IHsgcGF0aDogZmlsZXBhdGgsIHNoYSB9ID0gZmlsZTtcbiAgY29uc3QgX21lc3NhZ2UgPSBtZXNzYWdlIHx8IGBFZGl0ICcke2ZpbGVwYXRofScgdXNpbmcgJyR7dG9rZW5pZH0nYDtcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHVwZGF0ZUNvbnRlbnQoe1xuICAgIGNvbmZpZywgb3duZXIsIHJlcG8sIGJyYW5jaCwgZmlsZXBhdGgsXG4gICAgY29udGVudCwgbWVzc2FnZTogX21lc3NhZ2UsIGF1dGhvciwgc2hhLFxuICB9KTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgUkVHRVhfVFNWX0JPT0tfQUJCUkVWSUFUSU9OID0gL15cXHcqXyhcXHcqKVxcLnRzdiQvaTtcblxuZXhwb3J0IGNvbnN0IG1hbmlmZXN0RmlsZUNvbXBhcmVyID0gKHtcbiAgcmVwb3NpdG9yeSwgaXRlbTEsIGl0ZW0yLFxufSkgPT4ge1xuICBjb25zdCBpdGVtMVBhdGggPSBpdGVtMT8ucGF0aDtcbiAgY29uc3QgaXRlbTJQYXRoID0gaXRlbTI/LnBhdGg7XG4gIFxuICBsZXQgY29tcGFyZSA9IDA7XG5cbiAgaWYgKGl0ZW0xUGF0aCAmJiBpdGVtMlBhdGggJiYgcmVwb3NpdG9yeSAmJiByZXBvc2l0b3J5LmJvb2tzKVxuICB7XG4gICAgY29uc3QgYm9vazFNYXRjaGVzID0gaXRlbTFQYXRoLm1hdGNoKFJFR0VYX1RTVl9CT09LX0FCQlJFVklBVElPTik7XG4gICAgY29uc3QgYm9vazJNYXRjaGVzID0gaXRlbTJQYXRoLm1hdGNoKFJFR0VYX1RTVl9CT09LX0FCQlJFVklBVElPTik7XG5cbiAgICBjb25zdCBpc1RzdkZpbGVzID0gKGJvb2sxTWF0Y2hlcyAmJiBib29rMk1hdGNoZXMpP3RydWU6ZmFsc2U7XG4gICAgaWYgKGlzVHN2RmlsZXMpXG4gICAge1xuICAgICAgY29uc3QgYm9vazEgPSBib29rMU1hdGNoZXNbMV07XG4gICAgICBjb25zdCBib29rMiA9IGJvb2syTWF0Y2hlc1sxXTtcbiAgICAgIFxuICAgICAgbGV0IGlpQm9vazEgPSAwO1xuICAgICAgbGV0IGlpQm9vazIgPSAwO1xuICAgICAgZm9yIChsZXQgaWk9MDsgaWkgPCByZXBvc2l0b3J5LmJvb2tzLmxlbmd0aDsgaWkrKylcbiAgICAgIHtcbiAgICAgICAgaWYgKHJlcG9zaXRvcnkuYm9va3NbaWldLnRvTG93ZXJDYXNlKCkgPT0gYm9vazEudG9Mb3dlckNhc2UoKSlcbiAgICAgICAge1xuICAgICAgICAgIGlpQm9vazEgPSBpaTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVwb3NpdG9yeS5ib29rc1tpaV0udG9Mb3dlckNhc2UoKSA9PSBib29rMi50b0xvd2VyQ2FzZSgpKVxuICAgICAgICB7XG4gICAgICAgICAgaWlCb29rMiA9IGlpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpaUJvb2sxIDwgaWlCb29rMilcbiAgICAgIHtcbiAgICAgICAgY29tcGFyZSA9IC0xO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoaWlCb29rMiA8IGlpQm9vazEpXG4gICAgICB7XG4gICAgICAgIGNvbXBhcmUgPSAxO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgICBjb21wYXJlID0gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSAvLyBCT1RIIGFyZSBOT1QgVFNWIGZpbGU6IChjb3VsZCBiZSBtYW5pZmVzdCBmaWxlKS5cbiAgICB7XG4gICAgICBpZiAoYm9vazFNYXRjaGVzKVxuICAgICAge1xuICAgICAgICAvLyBCb29rMSBpcyBhIFRTViwgYnV0IGJvb2syIGlzIGEgbm9uLVRTViBmaWxlLlxuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGJvb2syTWF0Y2hlcylcbiAgICAgIHtcbiAgICAgICAgLy8gQm9vazIgaXMgdGhlIFRTViBmaWxlOyBidXQgYm9vazEgaXMgTk9ULlxuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICB7XG4gICAgICAgIGNvbXBhcmUgPSBpdGVtMVBhdGgubG9jYWxlQ29tcGFyZShpdGVtMlBhdGgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBlbHNlIC8vIGl0ZW0xL2l0ZW0yIGRvbid0IGV4aXN0OlxuICB7XG4gICAgY29tcGFyZSA9IDA7XG4gIH1cblxuICByZXR1cm4gY29tcGFyZTtcbn07XG4iXX0=