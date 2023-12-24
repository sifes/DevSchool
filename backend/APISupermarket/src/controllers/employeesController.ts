import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const updateEmployee = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const { firstName, lastName, middleName, position } = req.body;

  try {
    const updatedEmployee = await prisma.employee.update({
      where: { id: parseInt(id, 10) },
      data: { firstName, lastName, middleName, position },
    });

    res.json(updatedEmployee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
