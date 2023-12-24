import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

// Create a new product
export const createProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name, category, amount, price } = req.body;

  try {
    const newProduct = await prisma.product.create({
      data: { name, category, amount, price }, // Include the validated request body
    });

    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
