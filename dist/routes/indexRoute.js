"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const route_1 = require("./route");
const cameraModel_1 = require("../models/cameraModel");
let camera = new cameraModel_1.Camera();
class IndexRoute extends route_1.BaseRoute {
    static create(router) {
        console.log("Creating index route.");
        router.get("/", (req, res, next) => {
            new IndexRoute().index(req, res, next);
        });
        router.get("/camera", (req, res, next) => {
            cameraModel_1.takeUploadFile(camera);
        });
    }
    constructor() {
        super();
    }
    index(req, res, next) {
        this.title = "Home | Raspberry Pi Server";
        let options = {
            "message": "API FOR RASPBERRY PI INTERFACE"
        };
        this.render(req, res, "index", options);
    }
}
exports.IndexRoute = IndexRoute;
