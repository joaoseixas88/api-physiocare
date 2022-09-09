"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpAdapter = void 0;
var httpAdapter = function (httpResponse) { return ({
    statusCode: httpResponse.statusCode,
    body: JSON.stringify(httpResponse.data),
    headers: { 'Content-Type': 'application/json' }
}); };
exports.httpAdapter = httpAdapter;
//# sourceMappingURL=http-adapter.js.map