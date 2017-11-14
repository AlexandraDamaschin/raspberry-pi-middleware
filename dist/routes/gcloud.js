"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const route_1 = require("./route");
class GCloudRoute extends route_1.BaseRoute {
    static create(router) {
        console.log("[GCloudRoute::create] Creating google cloud route.");
        router.get("/gcloud", (req, res, next) => {
            new GCloudRoute().gcloud(req, res, next);
        });
        router.get("/gcloudlist", (req, res, next) => {
            new GCloudRoute().gcloudlist(req, res, next);
        });
    }
    constructor() {
        super();
    }
    gcloud(req, res, next) {
        this.title = "gCloud | Raspberry Pi Server";
        let options = {
            "message": "GOOGLE CLOUD"
        };
        this.render(req, res, "gcloud", options);
    }
    gcloudlist(req, res, next) {
        console.log('YES YES YES');
    }
}
exports.GCloudRoute = GCloudRoute;
