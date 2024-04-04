import { Router } from "express";
import { formAction, listAction, removeAction, saveAction } from "./controller.js";

const router = Router();

router.get("/", listAction);
router.get("/delete/:id", removeAction);
router.get("/form/:id?", formAction);
router.post("/save", saveAction);

export { router as movieRouter };
