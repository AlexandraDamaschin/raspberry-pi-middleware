"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var admin = require("firebase-admin");
var serviceAccount = require("../../config/auth/projectawesomebox-firebase-adminsdk-g696q-10b4b10427.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://projectawesomebox.firebaseio.com"
});
var db = admin.database();
var capturedPhotosRef = db.ref("capturedPhotos");
capturedPhotosRef.once("value", function (snapshot) {
    console.log(snapshot.val());
});
class FirebaseDB {
    testFirebase() {
        console.log('testing firebase');
        var newPhotoKey = capturedPhotosRef.push().key;
        console.log(newPhotoKey);
    }
    uploadTestData() {
        try {
            capturedPhotosRef.set({
                test01: {
                    filename: "filename-test01",
                    downloadUrl: "downloadUrl-test01"
                },
                test02: {
                    filename: "filename-test02",
                    downloadUrl: "downloadUrl-test02"
                }
            });
        }
        catch (e) {
            if (console.log(e)) {
            }
        }
    }
    ;
}
exports.FirebaseDB = FirebaseDB;
;
function uploadPhotoDetails(c) {
    c.testFirebase();
}
exports.uploadPhotoDetails = uploadPhotoDetails;
function uploadTestData(c) {
    c.uploadTestData();
}
exports.uploadTestData = uploadTestData;
function testFirebaseDB(c) {
    c.testFirebase();
}
exports.testFirebaseDB = testFirebaseDB;
