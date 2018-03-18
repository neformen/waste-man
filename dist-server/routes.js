"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CategoryController_1 = require("./controller/CategoryController");
exports.Routes = [{
        method: "get",
        route: "/api/categories",
        controller: CategoryController_1.CategoryController,
        action: "all"
    }, {
        method: "get",
        route: "/api/categories/:id",
        controller: CategoryController_1.CategoryController,
        action: "one"
    }, {
        method: "post",
        route: "/api/categories",
        controller: CategoryController_1.CategoryController,
        action: "save"
    }, {
        method: "delete",
        route: "/api/categories/:id",
        controller: CategoryController_1.CategoryController,
        action: "remove"
    }];
//# sourceMappingURL=routes.js.map