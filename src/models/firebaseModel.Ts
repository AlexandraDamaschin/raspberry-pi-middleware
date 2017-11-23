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

firebase.initializeApp(config);
console.log(firebase.name)
var database = firebase.database();


export class FirebaseDB {
    public uploadPhotoDetails = function (filename, downloadUrl) {
        var photoDetails = {
            filename: filename,
            downloadUrl: downloadUrl
        };
        var newPhotoKey = database().ref().child('images').push().key;
        console.log(newPhotoKey);
        var updates = {};
        updates['/images/' + newPhotoKey] = photoDetails;

        return firebase.database().ref().update(updates);
    }

}