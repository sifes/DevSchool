import express from "express";
import { createProduct } from "../controllers/productsController";
import { createProductValidation, validate } from "../middlewares/validation";
import { asyncMiddleware } from "../middlewares/asyncHandler";

const router = express.Router();

router.post(
  "/",
  validate(createProductValidation),
  asyncMiddleware(createProduct)
);

export default router;
