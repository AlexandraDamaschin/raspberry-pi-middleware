import { GCloud } from './gcloud.model';
import { takePhoto, Camera } from "./camera.model";
import { FirebaseDB } from './firebasedb.model';

export class API {
   
}


export function captureAndUpload () {
    // let camera = new Camera();
    let database = new FirebaseDB();
    let storage = new GCloud();
    
    // let photo = camera.take_photo();
    storage.upload_file('test-file.jpg');
    database.uploadPhotoDetails('test-file.jpg', 'test@test.com')

}