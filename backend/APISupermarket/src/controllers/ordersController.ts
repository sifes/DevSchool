import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const deleteOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { orderId } = req.params;

  try {
    const deletedOrder = await prisma.order.findUnique({
      where: { id: parseInt(orderId, 10) },
    });

    if (!deletedOrder) {
      res.status(404).json({ message: "Order with such id not found" });
      return;
    }

    await prisma.orderProduct.deleteMany({
      where: { orderId: parseInt(orderId, 10) },
    });

    await prisma.order.delete({
      where: { id: parseInt(orderId, 10) },
    });

    res.json(deletedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
