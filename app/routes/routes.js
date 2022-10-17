import { Router } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import * as mainController from "./controllers/mainController.js";
import * as choreController from "./controllers/choreController.js";

const router = new Router();

router.get("/", mainController.showMain);

router.get("/chores", choreController.listChores);
router.post("/chores", choreController.addChore);
router.post("/chores/:id/claim", choreController.claimChore);

export { router };