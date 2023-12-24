import express from "express";
import productsRoutes from "./routes/productsRoutes";
import customersRoutes from "./routes/customersRoutes";
import employeesRoutes from "./routes/employeesRoutes";
import ordersRoutes from "./routes/ordersRoutes";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/products", productsRoutes);
app.use("/api/v1/customers", customersRoutes);
app.use("/api/v1/employees", employeesRoutes);
app.use("/api/v1/orders", ordersRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
