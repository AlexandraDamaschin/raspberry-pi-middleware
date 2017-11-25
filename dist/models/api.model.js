"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gcloud_model_1 = require("./gcloud.model");
const camera_model_1 = require("./camera.model");
class API {
}
exports.API = API;
function captureAndUpload() {
    let camera = new camera_model_1.Camera();
    let photo = camera.take_photo();
    console.log('----------captured-----------');
    let storage = new gcloud_model_1.GCloud();
    storage.upload_file('capture-1511613469721.jpg');
    console.log('----------uploaded-----------');
}
exports.captureAndUpload = captureAndUpload;
