import { FirebaseDB } from "../models/firebaseModel";
import { BaseRoute } from "./route";
import { NextFunction, Request, Response, Router } from "express";

let firebaseDB = new FirebaseDB();

export class FirebaseDBRoute extends BaseRoute {
    public static create(router: Router) {

        console.log("[FirebaseRoute::create] Creating firebase route.");
        //add gcloud page route
        router.get("/Firebase", (req: Request, res: Response, next: NextFunction) => {
            new FirebaseDBRoute().firebaseDB(req, res, next);
        });
    }

    constructor() {
        super();
    }

    public firebaseDB(req: Request, res: Response, next: NextFunction) {
        this.title = "Firebase | Raspberry Pi Server";
        let options: Object = {
            "message": "Firebase"
        };

        this.render(req, res, "index", options);
    }
}