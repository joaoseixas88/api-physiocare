"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handle = void 0;
var serverless_adapter_1 = require("src/infra/adapters/serverless-adapter");
var add_user_factory_1 = require("src/infra/factories/controllers/add-user-factory");
var handle = function (event, context) {
    var controller = (0, add_user_factory_1.AddUserFactory)();
    var adapter = (0, serverless_adapter_1.serverlessAdapter)(controller, event, context);
    return adapter;
};
exports.handle = handle;
//# sourceMappingURL=add-account-adapter.js.map