'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _ = require('./');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var fetchVideos = function () {
  var _ref = _asyncToGenerator(_regenerator2.default.mark(function _callee(playlist_id, api_key) {
    var playlist, video_data;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            playlist = playlist_id || '';
            _context.next = 4;
            return (0, _.youTubeFetch)(playlist_id, api_key);

          case 4:
            video_data = _context.sent;
            _context.next = 7;
            return Promise.resolve(video_data.items);

          case 7:
            return _context.abrupt('return', _context.sent);

          case 10:
            _context.prev = 10;
            _context.t0 = _context['catch'](0);
            return _context.abrupt('return', Promise.reject(_context.t0 || 'Error fetching videos'));

          case 13:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 10]]);
  }));

  return function fetchVideos(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = fetchVideos;