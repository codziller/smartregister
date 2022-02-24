"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.seed = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _uuid = require("uuid");

var _require = require("../../app/config"),
    APP_KEY = _require.APP_KEY;

var seed = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(knex) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return knex('api_keys').del();

          case 2:
            _context.next = 4;
            return knex('api_keys').insert([{
              id: (0, _uuid.v4)(),
              key: 'APP_KEY',
              value: APP_KEY,
              active: true
            } // {
            //   id: v4(),
            //   key: 'FIN_FLUX_ACCESS_TOKEN',
            //   value: access_token,
            //   active: true
            // },
            // {
            //   id: v4(),
            //   key: 'FIN_FLUX_REFRESH_TOKEN',
            //   value: refresh_token,
            //   active: true
            // }
            ]);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function seed(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.seed = seed;
//# sourceMappingURL=api_keys.js.map