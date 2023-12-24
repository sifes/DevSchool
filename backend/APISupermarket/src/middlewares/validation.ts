import { validationResult, ValidationChain, body } from "express-validator";
import { Request, Response, NextFunction } from "express";
import { param } from "express-validator";

export const validate = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    return res.status(400).json({ errors: errors.array() });
  };
};

export const createProductValidation = [
  body("name").notEmpty().withMessage("Product name is required."),
  body("category")
    .isIn([
      "ELECTRONICS",
      "CLOTHING",
      "HOME_APPLIANCES",
      "BOOKS",
      "TOYS",
      "SPORTS_AND_OUTDOORS",
      "BEAUTY_AND_PERSONAL_CARE",
      "HEALTH_AND_WELLNESS",
      "FOOD_AND_BEVERAGES",
      "FURNITURE_AND_DECOR",
      "AUTOMOTIVE",
      "MUSIC_AND_INSTRUMENTS",
      "PET_SUPPLIES",
      "OFFICE_SUPPLIES",
      "JEWELRY_AND_ACCESSORIES",
      "ART_AND_CRAFTS",
      "GARDEN_AND_OUTDOOR",
      "VIDEO_GAMES_AND_CONSOLES",
      "BABY_AND_CHILDREN",
    ])
    .withMessage("Invalid product category."),
  body("amount").isInt().withMessage("Amount must be a valid integer."),
  body("price").isNumeric().withMessage("Price must be a valid number."),
];

export const getOrdersByCustomerValidation = [
  param("customerId")
    .isInt()
    .withMessage("Customer ID must be a valid integer."),
];

export const updateEmployeeValidation = [
  param("id").isInt().withMessage("Employee ID must be a valid integer."),
  body("firstName")
    .optional()
    .notEmpty()
    .withMessage("First name is required."),
  body("lastName").optional().notEmpty().withMessage("Last name is required."),
  body("middleName").optional(),
  body("position")
    .optional()
    .isIn([
      "CASHIER",
      "STORE_MANAGER",
      "ASSISTANT_MANAGER",
      "SALES_ASSOCIATE",
      "STOCK_CLERK",
      "CUSTOMER_SERVICE_REPRESENTATIVE",
      "DELI_CLERK",
      "PRODUCE_CLERK",
      "BAKERY_CLERK",
      "MEAT_CUTTER",
      "JANITORIAL_STAFF",
      "SECURITY_GUARD",
      "SUPERVISOR",
      "RECEIVING_CLERK",
      "FLOOR_MANAGER",
      "CHECKOUT_SUPERVISOR",
      "MARKETING_COORDINATOR",
    ])
    .withMessage("Position is invalid."),
];

export const deleteOrderValidation = [
  param("orderId").isInt().withMessage("Order ID must be a valid integer."),
];
