import express from "express";
import { deleteOrder } from "../controllers/ordersController";
import { deleteOrderValidation, validate } from "../middlewares/validation";
import { asyncMiddleware } from "../middlewares/asyncHandler";

const router = express.Router();

router.delete(
  "/:orderId",
  validate(deleteOrderValidation),
  asyncMiddleware(deleteOrder)
);

export default router;
