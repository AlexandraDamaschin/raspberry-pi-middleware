import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";
import {
    anotherTest,
    bucketListFiles,
    downloadFile,
    GCloud,
    getFileMetaData,
    testGCloud,
    uploadFile,
    anothergcloudtest,
} from '../models/gcloud.model';

let gCloud = new GCloud();

export class GCloudRoute extends BaseRoute {
    public static create(router: Router) {

    console.log("Creating google cloud routes.");

    //add gcloud page route
    router.get("/gCloud", (req: Request, res: Response, next: NextFunction) => {
      new GCloudRoute().gcloud(req, res, next);
    });

    router.get("/gCloud/test", (req: Request, res: Response, next: NextFunction) => {
      console.log('testgcloud called....');
      anothergcloudtest();
    });

    router.get("/gCloud/bucketlist", (req: Request, res: Response, next: NextFunction) => {
      console.log('BUCKET LIST: ')
      bucketListFiles(gCloud);
    });

    router.get("/gCloud/getMetadata/:name", (req: Request, res: Response, next: NextFunction) => {
      console.log('GET META DATA ON: ' + req.params.name)
      getFileMetaData(gCloud, req.params.name);
    });

    router.put("/upload/:name", (req: Request, res: Response, next: NextFunction) => {
      console.log('UPLOAD FILE: ' + req.params.name)
      uploadFile(gCloud, req.params.name);
    });

    router.get("/download/:name", (req: Request, res: Response, next: NextFunction) => {
      console.log('DOWNLOAD FILE: ' + req.params.name)
      downloadFile(gCloud, req.params.name);
    });

    router.post("/getFileMetadata", (req: Request, res: Response, next: NextFunction) => {
      console.log('getFileMetadata called....');
    });
  }

  constructor() {
    super();
  }

  public gcloud(req: Request, res: Response, next: NextFunction) {
    this.title = "gCloud | Raspberry Pi Server";
    let options: Object = {
      "message": "GOOGLE CLOUD"
    };

    this.render(req, res, "gcloud", options);
  }
}