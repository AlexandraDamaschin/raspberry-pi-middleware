export class GCloud {
  private config = {
    projectId: 'projectawesomebox',
    keyFilename: './config/auth/projectawesomebox-firebase-adminsdk-g696q-10b4b10427.json'
  };
  private storage = require('@google-cloud/storage')(this.config);
  private bucketName = 'gs://projectawesomebox.appspot.com/photos';

  public bucketListFiles() {
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

  public getMetadata(filename) {
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

  public upload_file = function (fileName) {
    var filename = './camera/'+fileName;
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


  public download_file = function (fileName) {
    const srcFilename = fileName;
    const destFilename = './public/downloads/'+srcFilename ;
    const options = {
                      destination: destFilename,
                    };
    this.storage
      .bucket(this.bucketName)
      .file(srcFilename)
      .download(options)
      .then(() => {
        console.log(
          `gs://${this.bucketName}/${srcFilename} downloaded to ${destFilename}.`
        );
      })
      .catch(err => {
        console.error('ERROR:', err);
      });
  };
}

//  Void:  Console logs bucket's files
export function bucketListFiles(c: GCloud) {
  c.bucketListFiles();
}

//  Void:  Console logs file metadata
export function getFileMetaData(c: GCloud, fileName) {
  c.getMetadata(fileName);
}


//  Upload File
export function uploadFile(c: GCloud, fileName) {
  c.upload_file(fileName);
}

//  Download File
export function downloadFile(c: GCloud, fileName) {
  c.download_file(fileName);
}
