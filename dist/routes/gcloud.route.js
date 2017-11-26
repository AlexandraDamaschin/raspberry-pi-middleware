"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const route_1 = require("./route");
const gcloud_model_1 = require("../models/gcloud.model");
let gCloud = new gcloud_model_1.GCloud();
class GCloudRoute extends route_1.BaseRoute {
    static create(router) {
        console.log("Creating google cloud routes.");
        router.get("/gCloud", (req, res, next) => {
            new GCloudRoute().gcloud(req, res, next);
        });
        router.get("/gCloud/test", (req, res, next) => {
            console.log('testgcloud called....');
            gcloud_model_1.anothergcloudtest();
        });
        router.get("/gcloud/testgcloudconnection", (req, res, next) => {
            console.log('BUCKET LIST: ');
            gcloud_model_1.testgCloudConnection();
        });
        router.get("/gCloud/bucketlist", (req, res, next) => {
            console.log('BUCKET LIST: ');
            gcloud_model_1.bucketListFiles(gCloud);
        });
        router.get("/gCloud/getMetadata/:name", (req, res, next) => {
            console.log('GET META DATA ON: ' + req.params.name);
            gcloud_model_1.getFileMetaData(gCloud, req.params.name);
        });
        router.put("/upload/:name", (req, res, next) => {
            console.log('UPLOAD FILE: ' + req.params.name);
            gcloud_model_1.uploadFile(gCloud, req.params.name);
        });
        router.get("/download/:name", (req, res, next) => {
            console.log('DOWNLOAD FILE: ' + req.params.name);
            gcloud_model_1.downloadFile(gCloud, req.params.name);
        });
        router.post("/getFileMetadata", (req, res, next) => {
            console.log('getFileMetadata called....');
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
}
exports.GCloudRoute = GCloudRoute;
