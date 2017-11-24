"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const route_1 = require("./route");
const api_model_1 = require("../models/api.model");
let api = new api_model_1.API();
class APIRoute extends route_1.BaseRoute {
    static create(router) {
        console.log("Creating api routes.");
        router.get("/API", (req, res, next) => {
            new APIRoute().api(req, res, next);
        });
        router.get("/API/cau", (req, res, next) => {
            console.log('Capture and Upload');
            api_model_1.captureAndUpload();
        });
    }
    constructor() {
        super();
    }
    api(req, res, next) {
        this.title = "API | Raspberry Pi Server";
        let options = {
            "message": "API PAGE"
        };
        this.render(req, res, "api", options);
    }
}
exports.APIRoute = APIRoute;
