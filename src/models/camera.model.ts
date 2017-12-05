import { GCloud, uploadFile } from './gcloud.model'
import * as fs from 'fs.extra';
import * as moment from 'moment';

let now = moment();
now.toISOString();
let fileName = 'PI01-' + now + '.jpg';

export class Camera {

    public take_photo = function () {
        const { spawn } = require('child_process');
        const captureImage = spawn('raspistill', ['-w', '640', '-h', '480', '-vf', '-hf', '-o', 'capture.jpg']);

        captureImage.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });
        captureImage.stderr.on('data', (data) => {
            console.log(`stderr: ${data}`);
        });
        captureImage.on('close', (code) => {
            fs.move('capture.jpg', './camera/' + fileName, function (err) {
                if (err) throw err;
                return fileName;
            });
            console.log(`Capture image exited with code: ${code}`)
        });
    }

    public take_photo_name = function (newName) {
        const { spawn } = require('child_process');
        const captureImage = spawn('raspistill', ['-w', '640', '-h', '480', '-vf', '-hf', '-o', 'capture.jpg']);

        captureImage.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });
        captureImage.stderr.on('data', (data) => {
            console.log(`stderr: ${data}`);
        });
        captureImage.on('close', (code) => {
            fs.move('capture.jpg', './camera/' + newName, function (err) {
                if (err) throw err;
            });
            console.log(`Capture image exited with code: ${code}`)
        });
    }


    public take_upload_photo = function () {
        const { spawn } = require('child_process');
        const captureImage = spawn('raspistill', ['-w', '640', '-h', '480', '-vf', '-hf', '-o', 'capture.jpg']);

        captureImage.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });
        captureImage.stderr.on('data', (data) => {
            console.log(`stderr: ${data}`);
        });
        captureImage.on('close', (code) => {
            fs.move('capture.jpg', './public/uploads/' + fileName, function (err) {
                if (err) throw err;
                let gCloud = new GCloud();
                uploadFile(gCloud, fileName)
            });
            console.log(`Capture image exited with code: ${code}`)
        });
    }
}

export function takeUploadFile(c: Camera) {
    c.take_upload_photo()
}

export function takePhoto(c: Camera) {
    c.take_photo()
}