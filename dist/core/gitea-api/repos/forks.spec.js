"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var helpers = _interopRequireWildcard(require("./forks"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var TEST_TOKEN = 'encrypted123456789';
var authToken = {
  sha1: TEST_TOKEN,
  id: 'test-id',
  name: 'test-token'
};
var config = {
  token: authToken,
  tokenid: TEST_TOKEN,
  server: 'test-server'
};
describe('readForks', function () {
  it('should read forks given proper config and repo path', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var params, res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            params = {
              owner: 'a_owner',
              repo: 'a_repo',
              config: config
            };
            _context.next = 3;
            return helpers.readForks(params);

          case 3:
            res = _context.sent;
            expect(res).toEqual('OK');

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should fail to read forks for some reason', function () {
    var params = {
      owner: 'a_owner',
      repo: 'fail',
      config: config
    };
    return expect(helpers.readForks(params)).rejects.toEqual('Request failed with status code 404');
  });
});
describe('createFork', function () {
  it('should create a fork given proper config, organization and repo path', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var params, res;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            params = {
              owner: 'a_owner',
              repo: 'a_repo',
              organization: 'a_organization',
              config: config
            };
            _context2.next = 3;
            return helpers.createFork(params);

          case 3:
            res = _context2.sent;
            expect(res).toEqual('OK');

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  it('should create a fork given proper config repo path and no organization', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var params, res;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            params = {
              owner: 'a_owner',
              repo: 'a_repo',
              config: config
            };
            _context3.next = 3;
            return helpers.createFork(params);

          case 3:
            res = _context3.sent;
            expect(res).toEqual('OK');

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  it('should fail to create a fork for some reason', function () {
    var params = {
      owner: 'a_owner',
      repo: 'fail',
      organization: 'a_organization',
      config: config
    };
    return expect(helpers.createFork(params)).rejects.toEqual('Request failed with status code 404');
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2dpdGVhLWFwaS9yZXBvcy9mb3Jrcy5zcGVjLmpzIl0sIm5hbWVzIjpbIlRFU1RfVE9LRU4iLCJhdXRoVG9rZW4iLCJzaGExIiwiaWQiLCJuYW1lIiwiY29uZmlnIiwidG9rZW4iLCJ0b2tlbmlkIiwic2VydmVyIiwiZGVzY3JpYmUiLCJpdCIsInBhcmFtcyIsIm93bmVyIiwicmVwbyIsImhlbHBlcnMiLCJyZWFkRm9ya3MiLCJyZXMiLCJleHBlY3QiLCJ0b0VxdWFsIiwicmVqZWN0cyIsIm9yZ2FuaXphdGlvbiIsImNyZWF0ZUZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7QUFDQTs7Ozs7Ozs7OztBQUNBLElBQU1BLFVBQVUsR0FBRyxvQkFBbkI7QUFDQSxJQUFNQyxTQUFTLEdBQUc7QUFDaEJDLEVBQUFBLElBQUksRUFBRUYsVUFEVTtBQUVoQkcsRUFBQUEsRUFBRSxFQUFFLFNBRlk7QUFHaEJDLEVBQUFBLElBQUksRUFBRTtBQUhVLENBQWxCO0FBS0EsSUFBTUMsTUFBTSxHQUFHO0FBQ2JDLEVBQUFBLEtBQUssRUFBRUwsU0FETTtBQUViTSxFQUFBQSxPQUFPLEVBQUVQLFVBRkk7QUFHYlEsRUFBQUEsTUFBTSxFQUFFO0FBSEssQ0FBZjtBQU1BQyxRQUFRLENBQUMsV0FBRCxFQUFjLFlBQU07QUFDMUJDLEVBQUFBLEVBQUUsQ0FBQyxxREFBRCx1RUFBd0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2xEQyxZQUFBQSxNQURrRCxHQUN6QztBQUNiQyxjQUFBQSxLQUFLLEVBQUUsU0FETTtBQUViQyxjQUFBQSxJQUFJLEVBQUUsUUFGTztBQUdiUixjQUFBQSxNQUFNLEVBQU5BO0FBSGEsYUFEeUM7QUFBQTtBQUFBLG1CQU10Q1MsT0FBTyxDQUFDQyxTQUFSLENBQWtCSixNQUFsQixDQU5zQzs7QUFBQTtBQU1sREssWUFBQUEsR0FOa0Q7QUFPeERDLFlBQUFBLE1BQU0sQ0FBQ0QsR0FBRCxDQUFOLENBQVlFLE9BQVosQ0FBb0IsSUFBcEI7O0FBUHdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXhELEdBQUY7QUFVQVIsRUFBQUEsRUFBRSxDQUFDLDJDQUFELEVBQThDLFlBQU07QUFDcEQsUUFBTUMsTUFBTSxHQUFHO0FBQ2JDLE1BQUFBLEtBQUssRUFBRSxTQURNO0FBRWJDLE1BQUFBLElBQUksRUFBRSxNQUZPO0FBR2JSLE1BQUFBLE1BQU0sRUFBTkE7QUFIYSxLQUFmO0FBS0EsV0FBT1ksTUFBTSxDQUFDSCxPQUFPLENBQUNDLFNBQVIsQ0FBa0JKLE1BQWxCLENBQUQsQ0FBTixDQUFrQ1EsT0FBbEMsQ0FBMENELE9BQTFDLENBQWtELHFDQUFsRCxDQUFQO0FBQ0QsR0FQQyxDQUFGO0FBUUQsQ0FuQk8sQ0FBUjtBQXFCQVQsUUFBUSxDQUFDLFlBQUQsRUFBZSxZQUFNO0FBQzNCQyxFQUFBQSxFQUFFLENBQUMsc0VBQUQsdUVBQXlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNuRUMsWUFBQUEsTUFEbUUsR0FDMUQ7QUFDYkMsY0FBQUEsS0FBSyxFQUFFLFNBRE07QUFFYkMsY0FBQUEsSUFBSSxFQUFFLFFBRk87QUFHYk8sY0FBQUEsWUFBWSxFQUFFLGdCQUhEO0FBSWJmLGNBQUFBLE1BQU0sRUFBTkE7QUFKYSxhQUQwRDtBQUFBO0FBQUEsbUJBT3ZEUyxPQUFPLENBQUNPLFVBQVIsQ0FBbUJWLE1BQW5CLENBUHVEOztBQUFBO0FBT25FSyxZQUFBQSxHQVBtRTtBQVF6RUMsWUFBQUEsTUFBTSxDQUFDRCxHQUFELENBQU4sQ0FBWUUsT0FBWixDQUFvQixJQUFwQjs7QUFSeUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBekUsR0FBRjtBQVdBUixFQUFBQSxFQUFFLENBQUMsd0VBQUQsdUVBQTJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNyRUMsWUFBQUEsTUFEcUUsR0FDNUQ7QUFDYkMsY0FBQUEsS0FBSyxFQUFFLFNBRE07QUFFYkMsY0FBQUEsSUFBSSxFQUFFLFFBRk87QUFHYlIsY0FBQUEsTUFBTSxFQUFOQTtBQUhhLGFBRDREO0FBQUE7QUFBQSxtQkFNekRTLE9BQU8sQ0FBQ08sVUFBUixDQUFtQlYsTUFBbkIsQ0FOeUQ7O0FBQUE7QUFNckVLLFlBQUFBLEdBTnFFO0FBTzNFQyxZQUFBQSxNQUFNLENBQUNELEdBQUQsQ0FBTixDQUFZRSxPQUFaLENBQW9CLElBQXBCOztBQVAyRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUEzRSxHQUFGO0FBVUFSLEVBQUFBLEVBQUUsQ0FBQyw4Q0FBRCxFQUFpRCxZQUFNO0FBQ3ZELFFBQU1DLE1BQU0sR0FBRztBQUNiQyxNQUFBQSxLQUFLLEVBQUUsU0FETTtBQUViQyxNQUFBQSxJQUFJLEVBQUUsTUFGTztBQUdiTyxNQUFBQSxZQUFZLEVBQUUsZ0JBSEQ7QUFJYmYsTUFBQUEsTUFBTSxFQUFOQTtBQUphLEtBQWY7QUFNQSxXQUFPWSxNQUFNLENBQUNILE9BQU8sQ0FBQ08sVUFBUixDQUFtQlYsTUFBbkIsQ0FBRCxDQUFOLENBQW1DUSxPQUFuQyxDQUEyQ0QsT0FBM0MsQ0FBbUQscUNBQW5ELENBQVA7QUFDRCxHQVJDLENBQUY7QUFTRCxDQS9CTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJqZXN0XCIgLz5cbmltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSAnLi9mb3Jrcyc7XG5jb25zdCBURVNUX1RPS0VOID0gJ2VuY3J5cHRlZDEyMzQ1Njc4OSc7XG5jb25zdCBhdXRoVG9rZW4gPSB7XG4gIHNoYTE6IFRFU1RfVE9LRU4sXG4gIGlkOiAndGVzdC1pZCcsXG4gIG5hbWU6ICd0ZXN0LXRva2VuJyxcbn07XG5jb25zdCBjb25maWcgPSB7XG4gIHRva2VuOiBhdXRoVG9rZW4sXG4gIHRva2VuaWQ6IFRFU1RfVE9LRU4sXG4gIHNlcnZlcjogJ3Rlc3Qtc2VydmVyJyxcbn07XG5cbmRlc2NyaWJlKCdyZWFkRm9ya3MnLCAoKSA9PiB7XG4gIGl0KCdzaG91bGQgcmVhZCBmb3JrcyBnaXZlbiBwcm9wZXIgY29uZmlnIGFuZCByZXBvIHBhdGgnLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgb3duZXI6ICdhX293bmVyJyxcbiAgICAgIHJlcG86ICdhX3JlcG8nLFxuICAgICAgY29uZmlnLFxuICAgIH07XG4gICAgY29uc3QgcmVzID0gYXdhaXQgaGVscGVycy5yZWFkRm9ya3MocGFyYW1zKTtcbiAgICBleHBlY3QocmVzKS50b0VxdWFsKCdPSycpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIGZhaWwgdG8gcmVhZCBmb3JrcyBmb3Igc29tZSByZWFzb24nLCAoKSA9PiB7XG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgb3duZXI6ICdhX293bmVyJyxcbiAgICAgIHJlcG86ICdmYWlsJyxcbiAgICAgIGNvbmZpZyxcbiAgICB9O1xuICAgIHJldHVybiBleHBlY3QoaGVscGVycy5yZWFkRm9ya3MocGFyYW1zKSkucmVqZWN0cy50b0VxdWFsKCdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlIDQwNCcpO1xuICB9KTtcbn0pO1xuXG5kZXNjcmliZSgnY3JlYXRlRm9yaycsICgpID0+IHtcbiAgaXQoJ3Nob3VsZCBjcmVhdGUgYSBmb3JrIGdpdmVuIHByb3BlciBjb25maWcsIG9yZ2FuaXphdGlvbiBhbmQgcmVwbyBwYXRoJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgIG93bmVyOiAnYV9vd25lcicsXG4gICAgICByZXBvOiAnYV9yZXBvJyxcbiAgICAgIG9yZ2FuaXphdGlvbjogJ2Ffb3JnYW5pemF0aW9uJyxcbiAgICAgIGNvbmZpZyxcbiAgICB9O1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGhlbHBlcnMuY3JlYXRlRm9yayhwYXJhbXMpO1xuICAgIGV4cGVjdChyZXMpLnRvRXF1YWwoJ09LJyk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgY3JlYXRlIGEgZm9yayBnaXZlbiBwcm9wZXIgY29uZmlnIHJlcG8gcGF0aCBhbmQgbm8gb3JnYW5pemF0aW9uJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgIG93bmVyOiAnYV9vd25lcicsXG4gICAgICByZXBvOiAnYV9yZXBvJyxcbiAgICAgIGNvbmZpZyxcbiAgICB9O1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGhlbHBlcnMuY3JlYXRlRm9yayhwYXJhbXMpO1xuICAgIGV4cGVjdChyZXMpLnRvRXF1YWwoJ09LJyk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgZmFpbCB0byBjcmVhdGUgYSBmb3JrIGZvciBzb21lIHJlYXNvbicsICgpID0+IHtcbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICBvd25lcjogJ2Ffb3duZXInLFxuICAgICAgcmVwbzogJ2ZhaWwnLFxuICAgICAgb3JnYW5pemF0aW9uOiAnYV9vcmdhbml6YXRpb24nLFxuICAgICAgY29uZmlnLFxuICAgIH07XG4gICAgcmV0dXJuIGV4cGVjdChoZWxwZXJzLmNyZWF0ZUZvcmsocGFyYW1zKSkucmVqZWN0cy50b0VxdWFsKCdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlIDQwNCcpO1xuICB9KTtcbn0pOyJdfQ==