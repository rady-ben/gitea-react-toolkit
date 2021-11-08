"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrganizationContextProvider = OrganizationContextProvider;
exports.OrganizationContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var OrganizationContext = _react.default.createContext();

exports.OrganizationContext = OrganizationContext;

function OrganizationContextProvider(_ref) {
  var organization = _ref.organization,
      organizations = _ref.organizations,
      urls = _ref.urls,
      _config = _ref.config,
      onOrganization = _ref.onOrganization,
      children = _ref.children,
      _authentication = _ref.authentication;

  var _useContext = (0, _react.useContext)(_.AuthenticationContext),
      contextAuthentication = _useContext.state,
      contextConfig = _useContext.config;

  var _useOrganization = (0, _.useOrganization)({
    organizations: organizations,
    config: _config || contextConfig,
    urls: urls,
    authentication: _authentication || contextAuthentication,
    organization: organization,
    onOrganization: onOrganization
  }),
      state = _useOrganization.state,
      actions = _useOrganization.actions,
      component = _useOrganization.component,
      config = _useOrganization.config,
      components = _useOrganization.components;

  var context = {
    state: state,
    actions: actions,
    component: component,
    components: components,
    config: config
  };
  return /*#__PURE__*/_react.default.createElement(OrganizationContext.Provider, {
    value: context
  }, children);
}

;
OrganizationContextProvider.propTypes = {
  /** Organization data to render, if url not provided. */
  organization: _propTypes.default.shape({
    avatar_url: _propTypes.default.string.isRequired,
    description: _propTypes.default.string.isRequired,
    full_name: _propTypes.default.string.isRequired,
    id: _propTypes.default.number.isRequired,
    location: _propTypes.default.string.isRequired,
    username: _propTypes.default.string.isRequired,
    visibility: _propTypes.default.string.isRequired,
    website: _propTypes.default.string.isRequired
  }),

  /** Function to call when organization is selected. */
  onOrganization: _propTypes.default.func.isRequired,

  /** Urls array to get organization data, if organization data is not provided. */
  urls: _propTypes.default.array,

  /** Organizations data array to render, if urls not provided. */
  organizations: _propTypes.default.array,

  /** Configuration to pass through to the Search/Organizations component. */
  config: _propTypes.default.shape({
    /** Configuration required for Search or Organizations if paths are provided as URL. */
    server: _propTypes.default.string
  }),

  /** Children to render inside of Provider */
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]).isRequired,

  /** Pass a previously returned authentication object to bypass login. */
  authentication: _propTypes.default.shape({
    user: _propTypes.default.object.isRequired,
    token: _propTypes.default.object.isRequired,
    config: _propTypes.default.object.isRequired,
    remember: _propTypes.default.bool
  })
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL29yZ2FuaXphdGlvbi9Pcmdhbml6YXRpb24uY29udGV4dC5qcyJdLCJuYW1lcyI6WyJPcmdhbml6YXRpb25Db250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiT3JnYW5pemF0aW9uQ29udGV4dFByb3ZpZGVyIiwib3JnYW5pemF0aW9uIiwib3JnYW5pemF0aW9ucyIsInVybHMiLCJfY29uZmlnIiwiY29uZmlnIiwib25Pcmdhbml6YXRpb24iLCJjaGlsZHJlbiIsIl9hdXRoZW50aWNhdGlvbiIsImF1dGhlbnRpY2F0aW9uIiwiQXV0aGVudGljYXRpb25Db250ZXh0IiwiY29udGV4dEF1dGhlbnRpY2F0aW9uIiwic3RhdGUiLCJjb250ZXh0Q29uZmlnIiwiYWN0aW9ucyIsImNvbXBvbmVudCIsImNvbXBvbmVudHMiLCJjb250ZXh0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJhdmF0YXJfdXJsIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImRlc2NyaXB0aW9uIiwiZnVsbF9uYW1lIiwiaWQiLCJudW1iZXIiLCJsb2NhdGlvbiIsInVzZXJuYW1lIiwidmlzaWJpbGl0eSIsIndlYnNpdGUiLCJmdW5jIiwiYXJyYXkiLCJzZXJ2ZXIiLCJvbmVPZlR5cGUiLCJhcnJheU9mIiwibm9kZSIsInVzZXIiLCJvYmplY3QiLCJ0b2tlbiIsInJlbWVtYmVyIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVPLElBQU1BLG1CQUFtQixHQUFHQyxlQUFNQyxhQUFOLEVBQTVCOzs7O0FBRUEsU0FBU0MsMkJBQVQsT0FRSjtBQUFBLE1BUERDLFlBT0MsUUFQREEsWUFPQztBQUFBLE1BTkRDLGFBTUMsUUFOREEsYUFNQztBQUFBLE1BTERDLElBS0MsUUFMREEsSUFLQztBQUFBLE1BSk9DLE9BSVAsUUFKREMsTUFJQztBQUFBLE1BSERDLGNBR0MsUUFIREEs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aEIsVUFGTTtBQUc5QmxCLElBQUFBLE1BQU0sRUFBRWMsbUJBQVVvQixNQUFWLENBQWlCaEIsVUFISztBQUk5QmtCLElBQUFBLFFBQVEsRUFBRXRCLG1CQUFVdUI7QUFKVSxHQUFoQjtBQTdCc0IsQ0FBeEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbkNvbnRleHQgLCB1c2VPcmdhbml6YXRpb24gfSBmcm9tICcuLi8uLic7XG5cbmV4cG9ydCBjb25zdCBPcmdhbml6YXRpb25Db250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgZnVuY3Rpb24gT3JnYW5pemF0aW9uQ29udGV4dFByb3ZpZGVyKHtcbiAgb3JnYW5pemF0aW9uLFxuICBvcmdhbml6YXRpb25zLFxuICB1cmxzLFxuICBjb25maWc6IF9jb25maWcsXG4gIG9uT3JnYW5pemF0aW9uLFxuICBjaGlsZHJlbixcbiAgYXV0aGVudGljYXRpb246IF9hdXRoZW50aWNhdGlvbixcbn0pIHtcbiAgY29uc3QgeyBzdGF0ZTogY29udGV4dEF1dGhlbnRpY2F0aW9uLCBjb25maWc6IGNvbnRleHRDb25maWcgfSA9IHVzZUNvbnRleHQoQXV0aGVudGljYXRpb25Db250ZXh0KTtcbiAgY29uc3Qge1xuICAgIHN0YXRlLCBhY3Rpb25zLCBjb21wb25lbnQsIGNvbmZpZywgY29tcG9uZW50cyxcbiAgfSA9IHVzZU9yZ2FuaXphdGlvbih7XG4gICAgb3JnYW5pemF0aW9ucywgY29uZmlnOiBfY29uZmlnIHx8IGNvbnRleHRDb25maWcsXG4gICAgdXJscywgYXV0aGVudGljYXRpb246IF9hdXRoZW50aWNhdGlvbiB8fCBjb250ZXh0QXV0aGVudGljYXRpb24sXG4gICAgb3JnYW5pemF0aW9uLCBvbk9yZ2FuaXphdGlvbixcbiAgfSk7XG5cbiAgY29uc3QgY29udGV4dCA9IHtcbiAgICBzdGF0ZSxcbiAgICBhY3Rpb25zLFxuICAgIGNvbXBvbmVudCxcbiAgICBjb21wb25lbnRzLFxuICAgIGNvbmZpZyxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxPcmdhbml6YXRpb25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L09yZ2FuaXphdGlvbkNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5Pcmdhbml6YXRpb25Db250ZXh0UHJvdmlkZXIucHJvcFR5cGVzID0ge1xuICAvKiogT3JnYW5pemF0aW9uIGRhdGEgdG8gcmVuZGVyLCBpZiB1cmwgbm90IHByb3ZpZGVkLiAqL1xuICBvcmdhbml6YXRpb246IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgYXZhdGFyX3VybDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZnVsbF9uYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBsb2NhdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHVzZXJuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdmlzaWJpbGl0eTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHdlYnNpdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgfSksXG4gIC8qKiBGdW5jdGlvbiB0byBjYWxsIHdoZW4gb3JnYW5pemF0aW9uIGlzIHNlbGVjdGVkLiAqL1xuICBvbk9yZ2FuaXphdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgLyoqIFVybHMgYXJyYXkgdG8gZ2V0IG9yZ2FuaXphdGlvbiBkYXRhLCBpZiBvcmdhbml6YXRpb24gZGF0YSBpcyBub3QgcHJvdmlkZWQuICovXG4gIHVybHM6IFByb3BUeXBlcy5hcnJheSxcbiAgLyoqIE9yZ2FuaXphdGlvbnMgZGF0YSBhcnJheSB0byByZW5kZXIsIGlmIHVybHMgbm90IHByb3ZpZGVkLiAqL1xuICBvcmdhbml6YXRpb25zOiBQcm9wVHlwZXMuYXJyYXksXG4gIC8qKiBDb25maWd1cmF0aW9uIHRvIHBhc3MgdGhyb3VnaCB0byB0aGUgU2VhcmNoL09yZ2FuaXphdGlvbnMgY29tcG9uZW50LiAqL1xuICBjb25maWc6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgLyoqIENvbmZpZ3VyYXRpb24gcmVxdWlyZWQgZm9yIFNlYXJjaCBvciBPcmdhbml6YXRpb25zIGlmIHBhdGhzIGFyZSBwcm92aWRlZCBhcyBVUkwuICovXG4gICAgc2VydmVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9KSxcbiAgLyoqIENoaWxkcmVuIHRvIHJlbmRlciBpbnNpZGUgb2YgUHJvdmlkZXIgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSxcbiAgICBQcm9wVHlwZXMubm9kZSxcbiAgXSkuaXNSZXF1aXJlZCxcbiAgLyoqIFBhc3MgYSBwcmV2aW91c2x5IHJldHVybmVkIGF1dGhlbnRpY2F0aW9uIG9iamVjdCB0byBieXBhc3MgbG9naW4uICovXG4gIGF1dGhlbnRpY2F0aW9uOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHVzZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICB0b2tlbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGNvbmZpZzogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHJlbWVtYmVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgfSksXG59O1xuIl19