"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GCloud {
    constructor() {
        this.config = {
            projectId: 'projectawesomebox',
            keyFilename: './config/auth/projectawesomebox-firebase-adminsdk-g696q-10b4b10427.json'
        };
        this.storage = require('@google-cloud/storage')(this.config);
        this.bucketName = 'gs://projectawesomebox.appspot.com/photos';
        this.upload_file = function (fileName) {
            var filename = './camera/' + fileName;
            this.storage
                .bucket(this.bucketName)
                .upload(filename)
                .then(() => {
                console.log(`${filename} uploaded to ${this.bucketName}.`);
            })
                .catch(err => {
                console.error('ERROR:', err);
            });
        };
        this.download_file = function (fileName) {
            const srcFilename = fileName;
            const destFilename = './public/downloads/' + srcFilename;
            const options = {
                destination: destFilename,
            };
            this.storage
                .bucket(this.bucketName)
                .file(srcFilename)
                .download(options)
                .then(() => {
                console.log(`gs://${this.bucketName}/${srcFilename} downloaded to ${destFilename}.`);
            })
                .catch(err => {
                console.error('ERROR:', err);
            });
        };
    }
    bucketListFiles() {
        this.storage
            .bucket(this.bucketName)
            .getFiles()
            .then(results => {
            const files = results[0];
            console.log('Files:');
            files.forEach(file => {
                console.log(file.name);
            });
        })
            .catch(err => {
            console.error('ERROR:', err);
        });
    }
    getMetadata(filename) {
        this.storage
            .bucket(this.bucketName)
            .file(filename)
            .getMetadata()
            .then(results => {
            const metadata = results[0];
            console.log(`File: ${metadata.name}`);
            console.log(`Bucket: ${metadata.bucket}`);
            console.log(`Storage class: ${metadata.storageClass}`);
            console.log(`Self link: ${metadata.selfLink}`);
            console.log(`ID: ${metadata.id}`);
            console.log(`Size: ${metadata.size}`);
            console.log(`Updated: ${metadata.updated}`);
            console.log(`Generation: ${metadata.generation}`);
            console.log(`Metageneration: ${metadata.metageneration}`);
            console.log(`Etag: ${metadata.etag}`);
            console.log(`Owner: ${metadata.owner}`);
            console.log(`Component count: ${metadata.component_count}`);
            console.log(`Crc32c: ${metadata.crc32c}`);
            console.log(`md5Hash: ${metadata.md5Hash}`);
            console.log(`Cache-control: ${metadata.cacheControl}`);
            console.log(`Content-type: ${metadata.contentType}`);
            console.log(`Content-disposition: ${metadata.contentDisposition}`);
            console.log(`Content-encoding: ${metadata.contentEncoding}`);
            console.log(`Content-language: ${metadata.contentLanguage}`);
            console.log(`Metadata: ${metadata.metadata}`);
            console.log(`Media link: ${metadata.mediaLink}`);
        })
            .catch(err => {
            console.error('ERROR:', err);
        });
    }
}
exports.GCloud = GCloud;
function bucketListFiles(c) {
    c.bucketListFiles();
}
exports.bucketListFiles = bucketListFiles;
function getFileMetaData(c, fileName) {
    c.getMetadata(fileName);
}
exports.getFileMetaData = getFileMetaData;
function uploadFile(c, fileName) {
    c.upload_file(fileName);
}
exports.uploadFile = uploadFile;
function downloadFile(c, fileName) {
    c.download_file(fileName);
}
exports.downloadFile = downloadFile;
