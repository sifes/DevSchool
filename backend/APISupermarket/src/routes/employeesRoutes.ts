import express from "express";
import { updateEmployee } from "../controllers/employeesController";
import { updateEmployeeValidation, validate } from "../middlewares/validation";
import { asyncMiddleware } from "../middlewares/asyncHandler";

const router = express.Router();

router.patch(
  "/:id",
  validate(updateEmployeeValidation),
  asyncMiddleware(updateEmployee)
);

export default router;
