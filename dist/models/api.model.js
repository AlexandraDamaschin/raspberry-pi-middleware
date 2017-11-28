"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gcloud_model_1 = require("./gcloud.model");
const firebasedb_model_1 = require("./firebasedb.model");
class API {
}
exports.API = API;
function captureAndUpload() {
    let database = new firebasedb_model_1.FirebaseDB();
    let storage = new gcloud_model_1.GCloud();
    storage.upload_file('test-file.jpg');
    database.uploadPhotoDetails('test-file.jpg', 'test@test.com');
}
exports.captureAndUpload = captureAndUpload;
