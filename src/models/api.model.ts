import { GCloud } from './gcloud.model';
import { takePhoto, Camera } from "./camera.model";



export class API {

    

}



export function captureAndUpload () {

    let camera = new Camera();
    let photo = camera.take_photo();

    console.log('----------captured-----------'); 

    let storage = new GCloud();
    storage.upload_file('capture-1511606668308.jpg');

    
    console.log('----------uploaded-----------');  

}