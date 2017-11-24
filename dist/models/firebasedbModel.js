"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firebase = require('firebase/app');
require("firebase/auth");
require("firebase/database");
var config = {
    apiKey: "AIzaSyDKmE_WcefpzVY_8MiPrqbDMrZ8B5BIk14",
    authDomain: "prj300-its.firebaseapp.com",
    databaseURL: "https://prj300-its.firebaseio.com",
    projectId: "prj300-its",
    storageBucket: "prj300-its.appspot.com",
    messagingSenderId: "748934382727"
};
var firebase = (firebase.initializeApp(config));
var database = firebase.database();
class FirebaseDB {
    uploadPhotoDetails(filename, downloadUrl) {
        var photoDetails = {
            filename: filename,
            downloadUrl: downloadUrl
        };
        var newPhotoKey = database.ref('images').push().key;
        console.log(newPhotoKey);
        var updates = {};
        updates['/images/' + newPhotoKey] = photoDetails;
        return database.ref().update(updates);
    }
    ;
    testFirebase() {
        console.log('testing firebase');
    }
    ;
}
exports.FirebaseDB = FirebaseDB;
function testFirebaseDB(c) {
    c.testFirebase();
}
exports.testFirebaseDB = testFirebaseDB;
function uploadPhotoDetails(c) {
    c.uploadPhotoDetails('TestFilename', 'TestDownloadUrl');
}
exports.uploadPhotoDetails = uploadPhotoDetails;
