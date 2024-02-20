import { Router } from "express";
import { create, getAll, get, update, remove } from "../controller/quote.js";
const router = Router();

router
  .post("/", create)
  .get("/", getAll)
  .get("/:id", get)
  .put("/:id", update)
  .delete("/:id", remove);

export default router;
