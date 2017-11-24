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

export class FirebaseDB {
    public testFirebase() {
        console.log('testing firebase');
        var newPhotoKey = capturedPhotosRef.push().key;
        console.log(newPhotoKey);
    }

    public uploadTestData() {
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
    };
};


export function uploadPhotoDetails(c: FirebaseDB) {
    c.testFirebase()
}

export function uploadTestData(c: FirebaseDB) {
    c.uploadTestData()
}

export function testFirebaseDB(c: FirebaseDB) {
    c.testFirebase()
}
