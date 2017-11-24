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
class FirebaseDB {
    testFirebase() {
        console.log('TESTING FIREBASE:');
        capturedPhotosRef.once("value", function (snapshot) {
            console.log('Captured Photos Reference Snapshot:');
            console.log(snapshot.val());
        });
        var newPhotoKey = capturedPhotosRef.push().key;
        console.log('Captured Photos New Key:');
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
