"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gcloud_model_1 = require("./gcloud.model");
const fs = require("fs.extra");
const moment = require("moment");
let now = moment();
now.toISOString();
let fileName = 'PI01-' + now + '.jpg';
class Camera {
    constructor() {
        this.take_photo = function () {
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
                    if (err)
                        throw err;
                    return fileName;
                });
                console.log(`Capture image exited with code: ${code}`);
            });
        };
        this.take_photo_name = function (newName) {
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
                    if (err)
                        throw err;
                });
                console.log(`Capture image exited with code: ${code}`);
            });
        };
        this.take_upload_photo = function () {
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
                    if (err)
                        throw err;
                    let gCloud = new gcloud_model_1.GCloud();
                    gcloud_model_1.uploadFile(gCloud, fileName);
                });
                console.log(`Capture image exited with code: ${code}`);
            });
        };
    }
}
exports.Camera = Camera;
function takeUploadFile(c) {
    c.take_upload_photo();
}
exports.takeUploadFile = takeUploadFile;
function takePhoto(c) {
    c.take_photo();
}
exports.takePhoto = takePhoto;
