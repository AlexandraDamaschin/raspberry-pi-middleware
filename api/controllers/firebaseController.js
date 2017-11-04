'use strict';
const Storage = require('@google-cloud/storage');
var config = {
    projectId: 'prj300-its',
    keyFilename: './config/auth/PRJ300-fb7cecf49aca.json'
};

var storage = new Storage(config);
const bucketName = 'prj300-its.appspot.com';

exports.upload_file = function (filePath, req, res) {
    var filename = filePath;

    storage
        .bucket(bucketName)
        .upload(filename)
        .then(() => {
            console.log(`${filename} uploaded to ${bucketName}.`);
        })
        .catch(err => {
            console.error('ERROR:', err);
        });
};

exports.download_file = function (req, res) {
    const srcFilename = 'image.jpg';
    const destFilename = './downloads/image.jpg';

    const options = {
        destination: destFilename,
    };

    storage
        .bucket(bucketName)
        .file(srcFilename)
        .download(options)
        .then(() => {
            console.log(
                `gs://${bucketName}/${srcFilename} downloaded to ${destFilename}.`
            );
        })
        .catch(err => {
            console.error('ERROR:', err);
        });
};
