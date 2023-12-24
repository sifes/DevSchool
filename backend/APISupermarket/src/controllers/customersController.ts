import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getOrdersByCustomer = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { customerId } = req.params;

  try {
    const customerOrders = await prisma.order.findMany({
      where: {
        customerId: parseInt(customerId, 10),
      },
      include: {
        orderProducts: true,
      },
    });

    const ordersWithTotalCost = customerOrders.map((order) => {
      const totalCost = order.orderProducts.reduce(
        (acc, product) => acc + product.amount * product.price,
        0
      );

      return {
        ...order,
        totalCost,
      };
    });

    res.json(ordersWithTotalCost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
