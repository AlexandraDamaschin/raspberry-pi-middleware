"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apiModel_1 = require("../models/apiModel");
const route_1 = require("./route");
let api = new apiModel_1.API();
class APIRoute extends route_1.BaseRoute {
    static create(router) {
        console.log("Creating api routes.");
        router.get("/API", (req, res, next) => {
            new APIRoute().api(req, res, next);
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
