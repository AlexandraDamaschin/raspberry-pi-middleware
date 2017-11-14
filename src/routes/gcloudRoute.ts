import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";
import { bucketListFiles, downloadFile, GCloud, getFileMetaData, uploadFile } from '../models/gcloudModel';

let gCloud = new GCloud();

export class GCloudRoute extends BaseRoute {
    public static create(router: Router) {

    console.log("[GCloudRoute::create] Creating google cloud route.");

    //add gcloud page route
    router.get("/gCloud", (req: Request, res: Response, next: NextFunction) => {
      new GCloudRoute().gcloud(req, res, next);
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