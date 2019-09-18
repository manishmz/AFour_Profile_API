import express from "express";
import { appPort, apiVersion } from "./configs/appConfig";
import { dbConnect } from "./helpers/databaseHelper";
import bodyParser from "body-parser";
import cors from "cors";
import fs from "fs";

const app: express.Application = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Attching alll routes from routes folder to app
const routesPath = __dirname + "/routes";
fs.readdirSync(routesPath).forEach((file: any): void => {
  if (~file.indexOf('.ts')) {
    const route = require(routesPath + '/' + file);
    app.use(apiVersion + route.baseUrl, route.router);
  }
});

app.listen(appPort, function () {
  console.log(`listening on port ${appPort}!`);
});

dbConnect();
