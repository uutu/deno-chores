import { Router } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import * as mainController from "./controllers/mainController.js";
import * as choreController from "./controllers/choreController.js";
import * as registrationController from "./controllers/registrationController.js";

const router = new Router();

router.get("/", mainController.showMain);

router.get("/chores", choreController.listChores);
router.post("/chores", choreController.addChore);
router.post("/chores/:id/claim", choreController.claimChore);
router.post("/chores/:id/complete", choreController.completeChore);

router.get("/auth/register", registrationController.showRegistrationForm);
router.post("/auth/register", registrationController.registerUser);

export { router };