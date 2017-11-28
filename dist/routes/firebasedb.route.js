"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const route_1 = require("./route");
const firebasedb_model_1 = require("../models/firebasedb.model");
let firebaseDB = new firebasedb_model_1.FirebaseDB();
class FirebaseDBRoute extends route_1.BaseRoute {
    static create(router) {
        console.log("Creating firebase routes.");
        router.get("/Firebase", (req, res, next) => {
            new FirebaseDBRoute().firebaseDB(req, res, next);
        });
        router.get("/Firebase/test", (req, res, next) => {
            console.log('TESTING FIREBASE: ');
            firebasedb_model_1.testFirebaseDB(firebaseDB);
        });
        router.get("/Firebase/UploadPhoto", (req, res, next) => {
            console.log('UPLOAD PHOTO DETAILS: ');
            firebasedb_model_1.uploadPhotoDetails(firebaseDB);
        });
        router.get("/Firebase/UploadTestData", (req, res, next) => {
            console.log('UPLOAD TEST DATA: ');
            firebasedb_model_1.uploadTestData(firebaseDB);
        });
    }
    constructor() {
        super();
    }
    firebaseDB(req, res, next) {
        this.title = "Firebase | Raspberry Pi Server";
        let options = {
            "message": "Firebase"
        };
        this.render(req, res, "index", options);
    }
}
exports.FirebaseDBRoute = FirebaseDBRoute;
