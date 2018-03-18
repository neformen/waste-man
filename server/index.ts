import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import { Routes } from "./routes";
import { Category } from "./entity/Category";
import * as path from "path";

let allAngularRoutes = ['/register', '/home', '/statistic', '/statistic/graphic', '/statistic/table', '/add', '/list'];

createConnection().then(async connection => {

    const port = process.env.PORT || 3000;

    // create express app
    const app = express();
    app.use(bodyParser.json());
    app.use(express.static(path.join(__dirname, './../dist')));
    allAngularRoutes.forEach(route => {
        app.use(route, express.static(path.join(__dirname, './../dist')));
    });

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    // setup express app here
    // ...

    // start express server
    app.listen(port);

    // insert new users for test
    await connection.manager.save(connection.manager.create(Category, {
        categoryName: "Food",
    }));
    await connection.manager.save(connection.manager.create(Category, {
        categoryName: "Gifts",
    }));

    console.log("Express server has started.");

}).catch(error => console.log(error));