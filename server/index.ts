import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Request, Response } from 'express';
import { Routes } from './routes';
import { Category } from './entity/Category';
import * as path from 'path';

createConnection().then(async connection => {

    const port = process.env.PORT || 3000;

    // create express app
    const app = express();
    app.use(bodyParser.json());
    app.use(/^\/(?!api).*/, express.static(path.join(__dirname, './../dist')));

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(resultData => resultData !== null && resultData !== undefined ? res.send(resultData) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    // setup express app here
    // ...

    // start express server
    app.listen(port);

    console.log('Express server has started.');

}).catch(error => console.log(error));
