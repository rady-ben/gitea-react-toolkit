"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var helpers = _interopRequireWildcard(require("./tokens"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

jest.mock('../core');
var headers = {
  'Authorization': 'basic 123456789',
  'Content-Type': 'application/json'
};
describe('getTokens', function () {
  var params = {
    username: 'username',
    config: {
      token: {
        sha1: 'string',
        id: 'string',
        name: 'string'
      },
      tokenid: 'test-id'
    }
  };
  it('should not get tokens without headers.config', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return helpers.getTokens(params);

          case 2:
            res = _context.sent;
            expect(res).toEqual(null);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should get tokens with headers.config', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var expected, res;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            params.config.headers = headers;
            expected = [{
              'id': params.config.tokenid,
              'name': 'user-token',
              'sha1': 'encrypted123456789'
            }];
            _context2.next = 4;
            return helpers.getTokens(params);

          case 4:
            res = _context2.sent;
            return _context2.abrupt("return", expect(res).toEqual(expected));

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
});
describe('createTokens', function () {
  var params = {
    username: 'username',
    config: {
      headers: headers,
      token: {
        sha1: 'string',
        id: 'string',
        name: 'string'
      },
      tokenid: 'token-id'
    }
  };
  var expected = [{
    'id': 'test-id',
    'name': 'user-token',
    'sha1': 'encrypted123456789'
  }];
  it('should create tokens from a user', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var res;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return helpers.createToken(params);

          case 2:
            res = _context3.sent;
            expect(res).toEqual(expected);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  it('should not create tokens from an invalid user', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var res;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            params.username = 'fail';
            _context4.next = 3;
            return helpers.createToken(params);

          case 3:
            res = _context4.sent;
            return _context4.abrupt("return", expect(res).toEqual([]));

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
});
describe('deleteToken', function () {
  var params = {
    username: 'username',
    config: {
      headers: headers,
      token: {
        sha1: 'string',
        id: 'string',
        name: 'string'
      },
      tokenid: 'token-id'
    },
    token: {
      sha1: 'string',
      id: 'string',
      name: 'string'
    }
  };
  it('should delete the token', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var res;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return helpers.deleteToken(params);

          case 2:
            res = _context5.sent;
            expect(res).toEqual(true);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  })));
  it('should not delete tokens from an invalid user', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    var res;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            params.username = 'fail';
            _context6.next = 3;
            return helpers.deleteToken(params);

          case 3:
            res = _context6.sent;
            expect(res).toEqual(false);

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  })));
});
describe('ensureTokens', function () {
  var params = {
    username: 'username',
    config: {
      headers: headers,
      token: {
        sha1: 'string',
        id: 'string',
        name: 'string'
      },
      tokenid: 'token-id'
    }
  };
  it('should delete tokens from match', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var expected, res;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            expected = [{
              'id': 'test-id',
              'name': 'user-token',
              'sha1': 'encrypted123456789'
            }];
            _context7.next = 3;
            return helpers.ensureToken(params);

          case 3:
            res = _context7.sent;
            expect(res).toEqual(expected);

          case 5:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  })));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2dpdGVhLWFwaS91c2Vycy90b2tlbnMuc3BlYy5qcyJdLCJuYW1lcyI6WyJqZXN0IiwibW9jayIsImhlYWRlcnMiLCJkZXNjcmliZSIsInBhcmFtcyIsInVzZXJuYW1lIiwiY29uZmlnIiwidG9rZW4iLCJzaGExIiwiaWQiLCJuYW1lIiwidG9rZW5pZCIsIml0IiwiaGVscGVycyIsImdldFRva2VucyIsInJlcyIsImV4cGVjdCIsInRvRXF1YWwiLCJleHBlY3RlZCIsImNyZWF0ZVRva2VuIiwiZGVsZXRlVG9rZW4iLCJlbnN1cmVUb2tlbiJdLCJtYXBwaW5ncyI6Ijs7OztBQUNBOzs7Ozs7Ozs7O0FBQ0FBLElBQUksQ0FBQ0MsSUFBTCxDQUFVLFNBQVY7QUFFQSxJQUFNQyxPQUFPLEdBQUc7QUFDZCxtQkFBaUIsaUJBREg7QUFFZCxrQkFBZ0I7QUFGRixDQUFoQjtBQUtBQyxRQUFRLENBQUMsV0FBRCxFQUFjLFlBQU07QUFDMUIsTUFBTUMsTUFBTSxHQUFHO0FBQ2JDLElBQUFBLFFBQVEsRUFBRSxVQURHO0FBRWJDLElBQUFBLE1BQU0sRUFBRTtBQUNOQyxNQUFBQSxLQUFLLEVBQUU7QUFDTEMsUUFBQUEsSUFBSSxFQUFFLFFBREQ7QUFFTEMsUUFBQUEsRUFBRSxFQUFFLFFBRkM7QUFHTEMsUUFBQUEsSUFBSSxFQUFFO0FBSEQsT0FERDtBQU1OQyxNQUFBQSxPQUFPLEVBQUU7QUFOSDtBQUZLLEdBQWY7QUFZQUMsRUFBQUEsRUFBRSxDQUFDLDhDQUFELHVFQUFpRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUMvQkMsT0FBTyxDQUFDQyxTQUFSLENBQWtCVixNQUFsQixDQUQrQjs7QUFBQTtBQUMzQ1csWUFBQUEsR0FEMkM7QUFFakRDLFlBQUFBLE1BQU0sQ0FBQ0QsR0FBRCxDQUFOLENBQVlFLE9BQVosQ0FBb0IsSUFBcEI7O0FBRmlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdB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L0IsYUFBRCxDQURtQjtBQUFBO0FBQUEsbUJBSWxCTCxPQUFPLENBQUNRLFdBQVIsQ0FBb0JqQixNQUFwQixDQUprQjs7QUFBQTtBQUk5QlcsWUFBQUEsR0FKOEI7QUFLcENDLFlBQUFBLE1BQU0sQ0FBQ0QsR0FBRCxDQUFOLENBQVlFLE9BQVosQ0FBb0JDLFFBQXBCOztBQUxvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFwQyxHQUFGO0FBT0QsQ0FyQk8sQ0FBUiIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwiamVzdFwiIC8+XG5pbXBvcnQgKiBhcyBoZWxwZXJzIGZyb20gJy4vdG9rZW5zJztcbmplc3QubW9jaygnLi4vY29yZScpO1xuXG5jb25zdCBoZWFkZXJzID0ge1xuICAnQXV0aG9yaXphdGlvbic6ICdiYXNpYyAxMjM0NTY3ODknLFxuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxufTtcblxuZGVzY3JpYmUoJ2dldFRva2VucycsICgpID0+IHtcbiAgY29uc3QgcGFyYW1zID0ge1xuICAgIHVzZXJuYW1lOiAndXNlcm5hbWUnLFxuICAgIGNvbmZpZzoge1xuICAgICAgdG9rZW46IHtcbiAgICAgICAgc2hhMTogJ3N0cmluZycsXG4gICAgICAgIGlkOiAnc3RyaW5nJyxcbiAgICAgICAgbmFtZTogJ3N0cmluZycsXG4gICAgICB9LFxuICAgICAgdG9rZW5pZDogJ3Rlc3QtaWQnLFxuICAgIH0sXG4gIH07XG5cbiAgaXQoJ3Nob3VsZCBub3QgZ2V0IHRva2VucyB3aXRob3V0IGhlYWRlcnMuY29uZmlnJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGhlbHBlcnMuZ2V0VG9rZW5zKHBhcmFtcyk7XG4gICAgZXhwZWN0KHJlcykudG9FcXVhbChudWxsKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBnZXQgdG9rZW5zIHdpdGggaGVhZGVycy5jb25maWcnLCBhc3luYyAoKSA9PiB7XG4gICAgcGFyYW1zLmNvbmZpZy5oZWFkZXJzID0gaGVhZGVycztcbiAgICBjb25zdCBleHBlY3RlZCA9IFt7XG4gICAgICAnaWQnOiBwYXJhbXMuY29uZmlnLnRva2VuaWQsICduYW1lJzogJ3VzZXItdG9rZW4nLCAnc2hhMSc6ICdlbmNyeXB0ZWQxMjM0NTY3ODknLFxuICAgIH1dO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGhlbHBlcnMuZ2V0VG9rZW5zKHBhcmFtcyk7XG4gICAgcmV0dXJuIGV4cGVjdChyZXMpLnRvRXF1YWwoZXhwZWN0ZWQpO1xuICB9KTtcbn0pO1xuXG5kZXNjcmliZSgnY3JlYXRlVG9rZW5zJywgKCkgPT4ge1xuICBjb25zdCBwYXJhbXMgPSB7XG4gICAgdXNlcm5hbWU6ICd1c2VybmFtZScsXG4gICAgY29uZmlnOiB7XG4gICAgICBoZWFkZXJzLFxuICAgICAgdG9rZW46IHtcbiAgICAgICAgc2hhMTogJ3N0cmluZycsXG4gICAgICAgIGlkOiAnc3RyaW5nJyxcbiAgICAgICAgbmFtZTogJ3N0cmluZycsXG4gICAgICB9LFxuICAgICAgdG9rZW5pZDogJ3Rva2VuLWlkJyxcbiAgICB9LFxuICB9O1xuICBjb25zdCBleHBlY3RlZCA9IFt7XG4gICAgJ2lkJzogJ3Rlc3QtaWQnLCAnbmFtZSc6ICd1c2VyLXRva2VuJywgJ3NoYTEnOiAnZW5jcnlwdGVkMTIzNDU2Nzg5JyxcbiAgfV07XG5cbiAgaXQoJ3Nob3VsZCBjcmVhdGUgdG9rZW5zIGZyb20gYSB1c2VyJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGhlbHBlcnMuY3JlYXRlVG9rZW4ocGFyYW1zKTtcbiAgICBleHBlY3QocmVzKS50b0VxdWFsKGV4cGVjdGVkKTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgbm90IGNyZWF0ZSB0b2tlbnMgZnJvbSBhbiBpbnZhbGlkIHVzZXInLCBhc3luYyAoKSA9PiB7XG4gICAgcGFyYW1zLnVzZXJuYW1lID0gJ2ZhaWwnO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGhlbHBlcnMuY3JlYXRlVG9rZW4ocGFyYW1zKTtcbiAgICByZXR1cm4gZXhwZWN0KHJlcykudG9FcXVhbChbXSk7XG4gIH0pO1xufSk7XG5cblxuZGVzY3JpYmUoJ2RlbGV0ZVRva2VuJywgKCkgPT4ge1xuICBjb25zdCBwYXJhbXMgPSB7XG4gICAgdXNlcm5hbWU6ICd1c2VybmFtZScsXG4gICAgY29uZmlnOiB7XG4gICAgICBoZWFkZXJzLFxuICAgICAgdG9rZW46IHtcbiAgICAgICAgc2hhMTogJ3N0cmluZycsXG4gICAgICAgIGlkOiAnc3RyaW5nJyxcbiAgICAgICAgbmFtZTogJ3N0cmluZycsXG4gICAgICB9LFxuICAgICAgdG9rZW5pZDogJ3Rva2VuLWlkJyxcbiAgICB9LFxuICAgIHRva2VuOiB7XG4gICAgICBzaGExOiAnc3RyaW5nJyxcbiAgICAgIGlkOiAnc3RyaW5nJyxcbiAgICAgIG5hbWU6ICdzdHJpbmcnLFxuICAgIH0sXG4gIH07XG5cbiAgaXQoJ3Nob3VsZCBkZWxldGUgdGhlIHRva2VuJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGhlbHBlcnMuZGVsZXRlVG9rZW4ocGFyYW1zKTtcbiAgICBleHBlY3QocmVzKS50b0VxdWFsKHRydWUpO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCBub3QgZGVsZXRlIHRva2VucyBmcm9tIGFuIGludmFsaWQgdXNlcicsIGFzeW5jICgpID0+IHtcbiAgICBwYXJhbXMudXNlcm5hbWUgPSAnZmFpbCc7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgaGVscGVycy5kZWxldGVUb2tlbihwYXJhbXMpO1xuICAgIGV4cGVjdChyZXMpLnRvRXF1YWwoZmFsc2UpO1xuICB9KTtcbn0pO1xuXG5kZXNjcmliZSgnZW5zdXJlVG9rZW5zJywgKCkgPT4ge1xuICBjb25zdCBwYXJhbXMgPSB7XG4gICAgdXNlcm5hbWU6ICd1c2VybmFtZScsXG4gICAgY29uZmlnOiB7XG4gICAgICBoZWFkZXJzLFxuICAgICAgdG9rZW46IHtcbiAgICAgICAgc2hhMTogJ3N0cmluZycsXG4gICAgICAgIGlkOiAnc3RyaW5nJyxcbiAgICAgICAgbmFtZTogJ3N0cmluZycsXG4gICAgICB9LFxuICAgICAgdG9rZW5pZDogJ3Rva2VuLWlkJyxcbiAgICB9LFxuICB9O1xuXG4gIGl0KCdzaG91bGQgZGVsZXRlIHRva2VucyBmcm9tIG1hdGNoJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGV4cGVjdGVkID0gW3tcbiAgICAgICdpZCc6ICd0ZXN0LWlkJywgJ25hbWUnOiAndXNlci10b2tlbicsICdzaGExJzogJ2VuY3J5cHRlZDEyMzQ1Njc4OScsXG4gICAgfV07XG4gICAgY29uc3QgcmVzID0gYXdhaXQgaGVscGVycy5lbnN1cmVUb2tlbihwYXJhbXMpO1xuICAgIGV4cGVjdChyZXMpLnRvRXF1YWwoZXhwZWN0ZWQpO1xuICB9KTtcbn0pOyJdfQ==