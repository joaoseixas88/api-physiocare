"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserFactory = void 0;
var add_user_controller_1 = require("@presentation/controllers/add-user-controller");
var add_user_service_1 = require("src/data/services/add-user-service");
var add_user_1 = require("src/infra/repos/in-memory/add-user");
var AddUserFactory = function () {
    var repository = new add_user_1.AddAccountInMemoryRepository();
    var addUserService = new add_user_service_1.AddUserService(repository);
    var addUserController = new add_user_controller_1.AddUserController(addUserService);
    return addUserController;
};
exports.AddUserFactory = AddUserFactory;
//# sourceMappingURL=add-user-factory.js.map