import { BaseRoute } from "./route";
import { Router, Request, Response, NextFunction } from "express";
import { API, captureAndUpload } from "../models/api.model";

let api = new API();

export class APIRoute extends BaseRoute {
    public static create(router: Router) {

        console.log("Creating api routes.");

        router.get("/API", (req: Request, res: Response, next: NextFunction) => {
            new APIRoute().api(req, res, next);
        });

        router.get("/API/cau", (req: Request, res: Response, next: NextFunction) => {
            console.log('Capture and Upload')
            captureAndUpload();
        });

    }

    constructor() {
        super();
    }

    public api(req: Request, res: Response, next: NextFunction) {
        this.title = "API | Raspberry Pi Server";
        let options: Object = {
            "message": "API PAGE"
        };
        this.render(req, res, "api", options);
    }
}