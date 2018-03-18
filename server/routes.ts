import { CategoryController } from "./controller/CategoryController";

export const Routes = [{
    method: "get",
    route: "/api/categories",
    controller: CategoryController,
    action: "all"
}, {
    method: "get",
    route: "/api/categories/:id",
    controller: CategoryController,
    action: "one"
}, {
    method: "post",
    route: "/api/categories",
    controller: CategoryController,
    action: "save"
}, {
    method: "delete",
    route: "/api/categories/:id",
    controller: CategoryController,
    action: "remove"
}];