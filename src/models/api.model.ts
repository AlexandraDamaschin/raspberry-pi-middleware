import { GCloud } from './gcloud.model';
import { takePhoto, Camera } from "./camera.model";



export class API {

}



export function captureAndUpload () {

    let camera = new Camera();
    let photo = camera.take_photo()
    console.log(photo)

    let storage = new GCloud();

    

}