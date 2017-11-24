// var firebase = require('firebase/app');
// require("firebase/auth");
// require("firebase/database");

// This import loads the firebase namespace along with all its type information.
// import * as firebase from 'firebase/app';

// // These imports load individual services into the firebase namespace.
// import 'firebase/auth';
// import 'firebase/database';


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

   export class FirebaseDB {
       public uploadPhotoDetails (filename, downloadUrl) { 
        var photoDetails = { 
            filename: filename, 
            downloadUrl: downloadUrl 
        }; 
        var newPhotoKey = database.ref('images').push().key; 
        console.log(newPhotoKey); 
        var updates = {}; 
        updates['/images/' + newPhotoKey] = photoDetails; 
 
        return database.ref().update(updates); 
    };

    public testFirebase () { 
       console.log('testing firebase');
    };
   }


export function testFirebaseDB(c: FirebaseDB) {
    c.testFirebase()
}

export function uploadPhotoDetails(c: FirebaseDB) {
    c.uploadPhotoDetails('TestFilename', 'TestDownloadUrl')
}