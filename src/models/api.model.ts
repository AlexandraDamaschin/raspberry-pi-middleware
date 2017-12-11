import { PiData } from './PiData';
import { GCloud } from './gcloud.model';
import { PhotoMeta } from './photoMeta';
import { takePhoto, Camera } from "./camera.model";
import { FirebaseDB } from './firebasedb.model';
import * as fs from 'fs.extra';
import * as moment from 'moment';

export class API {
}

//  Pi Interface - Store and Upload Interface Photo 
export function storeAndUploadFromPi(data: PiData) {
    let filename = data.date + data.imageFormat;
    b64StringToFile(filename, data.base64);

    let database = new FirebaseDB();
    let storage = new GCloud();

    storage.uploadFileAndGetDownloadURL(filename).then((signedUrls) => {
        data.downloadURL = signedUrls[0];
        database.uploadUserData(filename, data);
    }).catch(err => {
        console.error('ERROR:', err);
    });
}

//  Convert Base 64 String to File
export function b64StringToFile(filename, base64String) {
    let base64string = base64String
    let base64Image = base64string.split(';base64,').pop();

    fs.writeFile('./camera/' + filename, base64Image, { encoding: 'base64' }, function (err) {
        console.log('File created: ./camera/' + filename);
    });
}

//  TEST FUNCTION:  Convert Base 64 String to File
export function b64StringToFileTest() {
    let base64String = '"data:image/gif;base64,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"';
    let base64Image = base64String.split(';base64,').pop();

    fs.writeFile('./camera/image.gif', base64Image, { encoding: 'base64' }, function (err) {
        console.log('File created');
    });
}

//  DEMO MODE:  Take image, wait, upload file to storage, metadata to datbase, wait, loop
export function demoMode() {
    function fn60sec() {
        let camera = new Camera();
        let database = new FirebaseDB();
        let storage = new GCloud();
        let now = moment();
        now.toISOString();
        let fileName = 'PI01-' + now + '.jpg';
        let photoMeta = new PhotoMeta();

        photoMeta.address = "Carrick-On-Shannon, Leitrim";
        photoMeta.boxID = "42";
        photoMeta.email = "bryan@kerruish.ie";
        photoMeta.lat = 54.2636255;
        photoMeta.lng = -8.458273199999999;
        photoMeta.placeID = "42";
        photoMeta.storageLocation = "gs://projectawesomebox.appspot.com/" + [fileName]
            
        let photo = camera.take_photo_name(fileName)
        console.log(`CAPTURED: ${fileName}`);
        setTimeout(function () {
            storage.uploadFileAndGetDownloadURL(fileName).then((signedUrls) => {
                photoMeta.downloadURL = signedUrls[0];
                database.uploadDemoData(fileName, photoMeta);
            }).catch(err => {
                console.error('ERROR:', err);
            });
            console.log(`UPLOADED: ${fileName}`);
        }, 30000);
    }
    fn60sec();
    setInterval(fn60sec, 60*1000);
}

//  FOR REMOVAL
export function captureAndUpload() {
    let camera = new Camera();
    let database = new FirebaseDB();
    let storage = new GCloud();

    let photo = camera.take_photo();
    storage.upload_file('test-file01.jpg');
    database.uploadPhotoDetails('test-file01.jpg', 'test@test.com')
}
