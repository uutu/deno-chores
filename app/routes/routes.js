import { Router } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import * as mainController from "./controllers/mainController.js";

const router = new Router();

router.get("/", mainController.showMain);

export { router };