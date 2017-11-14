import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";
import { Camera, takeUploadFile } from "../models/cameraModel"

let camera = new Camera();

export class IndexRoute extends BaseRoute {
    public static create(router: Router) {

    console.log("[IndexRoute::create] Creating index route.");

    //add home page route
    router.get("/", (req: Request, res: Response, next: NextFunction) => {
      new IndexRoute().index(req, res, next);
    });

    router.get("/camera", (req: Request, res: Response, next: NextFunction) => {
      takeUploadFile(camera)
    });

  }

  constructor() {
    super();
  }

  public index(req: Request, res: Response, next: NextFunction) {
    this.title = "Home | Raspberry Pi Server";
    let options: Object = {
      "message": "API FOR RASPBERRY PI INTERFACE"
    };

    this.render(req, res, "index", options);
  }
}