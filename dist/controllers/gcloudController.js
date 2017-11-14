"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Gcloud {
    constructor() {
        this.config = {
            projectId: 'prj300-its',
            keyFilename: './config/auth/PRJ300-fb7cecf49aca.json'
        };
        this.storage = require('@google-cloud/storage')(this.config);
        this.bucketName = 'prj300-its.appspot.com';
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
exports.Gcloud = Gcloud;
function bucketListFiles(c) {
    c.bucketListFiles();
}
exports.bucketListFiles = bucketListFiles;
function getFileMetaData(c, fileName) {
    c.getMetadata(fileName);
}
exports.getFileMetaData = getFileMetaData;
