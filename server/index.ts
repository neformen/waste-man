import * as express from "express";
import * as bodyParser from "body-parser";
import * as path from "path";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './../dist')));
app.use('*', express.static(path.join(__dirname, './../dist')));

app.listen(port);
console.log(`Server running on port ${port}`);