import express from "express";
import { getOrdersByCustomer } from "../controllers/customersController";
import {
  getOrdersByCustomerValidation,
  validate,
} from "../middlewares/validation";
import { asyncMiddleware } from "../middlewares/asyncHandler";

const router = express.Router();

router.get(
  "/:customerId/orders",
  validate(getOrdersByCustomerValidation),
  asyncMiddleware(getOrdersByCustomer)
);

export default router;
