"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverError = exports.ok = void 0;
var server_error_1 = require("@presentation/errors/server-error");
var ok = function (data) { return ({
    statusCode: 200,
    data: data
}); };
exports.ok = ok;
var serverError = function () { return ({
    statusCode: 500,
    data: new server_error_1.ServerError()
}); };
exports.serverError = serverError;
//# sourceMappingURL=http-helper.js.map